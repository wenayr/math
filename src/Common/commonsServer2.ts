/**
 * Простейший интерфейс для WebSocket (или совместимого транспорта).
 */
export type tSocket = {
    emit: (channel: string, msg: any) => void;
    on: (channel: string, callback: (msg: any) => void) => void;
};

/**
 * Пакет, который шлём по каналу.
 */
interface tPacket {
    data?: any;
    error?: any;
    mapId: number;
    wait?: boolean;
    callbacksId?: number[];
    // Для "STRICTLY"-пакетов можно передавать дополнительное поле
    STRICTLY?: any;
}

/**
 * Опции при создании RPC.
 */
interface tRpcOptions<T extends object> {
    socket: tSocket;       // WebSocket-транспорт
    channel: string;       // Канал
    obj: T;                // Объект с методами (на сервере). На клиенте может быть {}.
    limit?: number;        // Лимит запросов/колбэков (необязателен)
    debug?: boolean;       // Логи
    // Вы можете передавать сюда доп. настройки (например, роль юзера), если нужно
}

/**
 * Тип «прокси»-объекта, где все функции становятся асинхронными
 * и при этом поддерживается глубокая вложенность.
 */
type TProxy<T> = {
    [K in keyof T]:
    T[K] extends (...args: infer A) => infer R
        ? (...args: A) => Promise<UnwrapPromise<R>>
        : T[K] extends object
            ? TProxy<T[K]>
            : Promise<T[K]>;
};
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

/**
 * Интерфейс, который возвращает наша фабрика:
 * - client (прокси, чтобы вызывать методы удалённо)
 * - initServer (включить серверную логику)
 * - strictlyInit (запросить у сервера структуру методов/полей)
 * - infoStrictly (посмотреть текущую структуру)
 */
interface tRpcAPI<T extends object> {
    client: TProxy<T>;
    initServer: () => void;
    strictlyInit: () => Promise<void>;
    infoStrictly: () => any;
}

/**
 * Главная фабрика RPC.
 * - Поддерживает колбэки (в аргументах и во вложенных полях).
 * - Поддерживает спец. запрос "___STRICTLY", чтобы клиент мог получить
 *   описание доступных методов на сервере (исходя из прав, роли и т.п.).
 */
export function createRpc<T extends object>(opts: tRpcOptions<T>): tRpcAPI<T> {
    const { socket, channel, obj, limit, debug } = opts;

    // --------------------------
    // 1. Вспомогательные хранилища
    // --------------------------
    // Запросы, которые ждут ответ (mapId → {resolve, reject})
    const pendingMap = new Map<
        number,
        { resolve: (val: any) => void; reject: (err: any) => void }
    >();

    // Колбэки (mapId → функция, принимающая любое кол-во аргументов)
    const callbacksMap = new Map<number, (...args: any[]) => void>();

    // Генератор ID
    const free = (() => {
        const freeNums: number[] = [];
        let total = 0;
        let poz = 0;
        return {
            next() {
                return poz > 0 ? freeNums[--poz] : ++total;
            },
            freeId(id: number) {
                freeNums[poz++] = id;
            }
        };
    })();

    // Здесь храним «строгую структуру» (STRICTLY),
    // которую получили с сервера (на клиенте).
    let strictlyObj: any = {};

    // --------------------------
    // 2. Сериализация (ser) / Десериализация (deser)
    //    с поддержкой колбэков во вложенных полях.
    // --------------------------
    function ser(value: any, cbs: number[]): any {
        if (typeof value === 'function') {
            // Аргумент-функция → колбэк
            const id = free.next();
            callbacksMap.set(id, value);
            cbs.push(id);
            return { ___FUNC: id };
        }
        if (!value || typeof value !== 'object') {
            return value; // Примитив
        }
        if (Array.isArray(value)) {
            return value.map((v) => ser(v, cbs));
        }
        // Обычный объект
        const copy: any = {};
        for (const k of Object.keys(value)) {
            const v = value[k];
            if (typeof v === 'function') {
                const id = free.next();
                callbacksMap.set(id, v);
                cbs.push(id);
                copy[k] = { ___FUNC: id };
            } else {
                copy[k] = ser(v, cbs);
            }
        }
        return copy;
    }

    function deser(value: any): any {
        if (!value || typeof value !== 'object') {
            return value;
        }
        if (Array.isArray(value)) {
            return value.map((v) => deser(v));
        }
        if (value.___FUNC !== undefined) {
            // Вызов колбэка «на обратной стороне»
            const cbId = value.___FUNC;
            const fn = (...args: any[]) => {
                const pack: tPacket = {
                    mapId: cbId,
                    data: ser(args, []),
                };
                socket.emit(channel, pack);
            };
            return fn;
        }
        // Обычный объект
        const copy: any = {};
        for (const k of Object.keys(value)) {
            copy[k] = deser(value[k]);
        }
        return copy;
    }

    // --------------------------
    // 3. Отправка пакета
    // --------------------------
    function sendPacket(
        data: any,
        wait: boolean = true,
        extraCallbacks?: Array<(arg: any) => void>
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const mapId = free.next();
            const cbs: number[] = [];
            const payload: tPacket = {
                mapId,
                data: ser(data, cbs),
                wait
            };
            // Если есть колбэки-прямо-в-аргументах
            if (extraCallbacks && extraCallbacks.length) {
                payload.callbacksId = [];
                for (const fn of extraCallbacks) {
                    const id = free.next();
                    callbacksMap.set(id, fn);
                    payload.callbacksId.push(id);
                }
            }
            // Если были колбэки при сериализации
            if (cbs.length) {
                payload.callbacksId = (payload.callbacksId || []).concat(cbs);
            }

            // Если ждём ответ
            if (wait) {
                pendingMap.set(mapId, { resolve, reject });
            }

            if (debug) console.log(`[sendPacket] -> ${channel}`, payload);
            socket.emit(channel, payload);

            // Если не нужно ждать — сразу resolve
            if (!wait) resolve(undefined);

            // (Optional) Лимиты
            if (limit && pendingMap.size > limit) {
                console.warn(`Pending promises exceed limit=${limit}`);
            }
        });
    }

    // --------------------------
    // 4. Прокси (на клиенте) — доступ к методам и вложенным полям
    //    + проверка strictlyObj (если хотите ограничить доступ)
    // --------------------------
    function createRootProxy(): TProxy<T> {
        // Главный «объект»-прокси
        return new Proxy({} as any, {
            get(_target, prop) {
                return createNestedProxy([String(prop)]);
            }
        });
    }

    function createNestedProxy(path: string[]): any {
        return new Proxy(() => {}, {
            get(_fnTarget, prop) {
                // Проверка STRICTLY: если в strictlyObj[path[0]...path[n]] нет prop, вернём undefined
                if (!checkStrictly(path, prop)) {
                    // Возвращаем пустую функцию или undefined
                    return undefined;
                }
                return createNestedProxy([...path, String(prop)]);
            },
            apply(_fn, _thisArg, argArray: any[]) {
                // Перед вызовом проверим, что в strictlyObj[path] действительно "func" (или что-то допустимое)
                if (!checkStrictly(path)) {
                    return Promise.reject(new Error(`Method ${path.join('.')} not accessible`));
                }

                // Ищем колбэки среди аргументов
                const callbackFns: Array<(arg: any) => void> = [];
                argArray.forEach((arg, i) => {
                    if (typeof arg === 'function') {
                        callbackFns.push(arg);
                        argArray[i] = '___FUNC';
                    }
                });

                // Отправляем запрос
                return sendPacket(
                    { key: path, request: argArray },
                    true,
                    callbackFns
                );
            }
        });
    }

    /**
     * checkStrictly — проверяет, разрешено ли нам обращаться к конкретному полю/методу.
     * Если strictlyObj пустой (т.е. мы не делали strictlyInit), то пропускаем все.
     * Если поле/метод помечен как "null", "undefined" или не существует, считаем недоступным.
     */
    function checkStrictly(path: string[], prop?: string | symbol): boolean {
        // Если клиент не запрашивал STRICTLY, пропускаем всё
        if (!strictlyObj || Object.keys(strictlyObj).length === 0) {
            return true;
        }
        // Пойдём по strictlyObj
        let cur = strictlyObj;
        for (let i = 0; i < path.length; i++) {
            const p = path[i];
            if (cur[p] === undefined || cur[p] === 'null') {
                return false;
            }
            cur = cur[p];
        }
        // Если указано конкретное свойство
        if (prop !== undefined) {
            if (cur[prop] === undefined || cur[prop] === 'null') {
                return false;
            }
        }
        return true;
    }

    // Собственно, клиент-прокси
    const clientProxy = createRootProxy() as TProxy<T>;

    // --------------------------
    // 5. initServer — включить серверную логику
    // --------------------------
    function initServer() {
        socket.on(channel, async (pkt: tPacket) => {
            if (debug) console.log(`[onMessage] <- ${channel}`, pkt);

            const { mapId, data, error, callbacksId, wait, STRICTLY } = pkt;

            // 5.1 Если это ответ на ранее сделанный запрос
            if (pendingMap.has(mapId)) {
                const pr = pendingMap.get(mapId)!;
                pendingMap.delete(mapId);
                free.freeId(mapId);

                if (error) {
                    pr.reject(error);
                } else {
                    pr.resolve(deser(data));
                }
                return;
            }
            // 5.2 Если это вызов колбэка
            if (callbacksMap.has(mapId)) {
                const fn = callbacksMap.get(mapId)!;
                const args = deser(data) || [];
                try {
                    fn(...args);
                } catch (err) {
                    if (debug) console.error(`[callback error]`, err);
                }
                return;
            }
            // 5.3 Если это запрос "___STRICTLY"
            if (data === '___STRICTLY') {
                // Сформируем описание нашего obj
                const sObj = reflectObj(obj);
                const response: tPacket = {
                    mapId,
                    STRICTLY: sObj,
                };
                if (debug) console.log(`[send STRICTLY] -> ${channel}`, response);
                socket.emit(channel, response);
                return;
            }

            // 5.4 Иначе это обычный RPC-вызов (keys, args)
            if (!data) return;

            const keys: string[] = data.key || [];
            const args: any[] = deser(data.request) || [];

            // Колбэки, переданные анонимно
            if (callbacksId) {
                // callbacksId можно хранить, если хотим многократно дергать
                // Но в примере это не используется — дергаем сразу.
            }

            // Ищем нужный метод
            let current: any = obj;
            let methodName: string | undefined = undefined;
            try {
                for (const k of keys) {
                    if (typeof current[k] === 'function') {
                        methodName = k;
                        break;
                    }
                    current = current[k];
                }
            } catch (err) {
                sendErr(mapId, err);
                return;
            }
            if (!methodName) {
                sendErr(mapId, `Not a function. Path: ${keys.join('.')}`);
                return;
            }

            const method = current[methodName];
            if (typeof method !== 'function') {
                sendErr(mapId, `Not a function: ${methodName}`);
                return;
            }

            // Вызываем
            try {
                const result = await method.apply(current, args);
                if (wait !== false) {
                    sendRes(mapId, result);
                }
            } catch (err) {
                sendErr(mapId, err);
            }
        });
    }

    function sendRes(mapId: number, data: any) {
        const packet: tPacket = {
            mapId,
            data: ser(data, [])
        };
        if (debug) console.log(`[sendRes] -> ${channel}`, packet);
        socket.emit(channel, packet);
    }
    function sendErr(mapId: number, err: any) {
        const packet: tPacket = {
            mapId,
            error: { err }
        };
        if (debug) console.log(`[sendErr] -> ${channel}`, packet);
        socket.emit(channel, packet);
    }

    // --------------------------
    // 6. Методы strictlyInit и infoStrictly (на клиенте)
    // --------------------------
    /**
     * strictlyInit:
     *   - отправляет пакет "___STRICTLY" на сервер
     *   - сервер возвращает {STRICTLY: ...} — описание структуры
     *   - мы сохраняем это описание в `strictlyObj`
     */
    async function strictlyInit() {
        // Отправляем "___STRICTLY"
        const mapId = free.next();
        const p = new Promise<void>((resolve) => {
            pendingMap.set(mapId, {
                resolve: () => resolve(),
                reject: () => resolve()
            });
        });

        const packet: tPacket = {
            mapId,
            data: '___STRICTLY',
        };
        if (debug) console.log(`[strictlyInit] -> ${channel}`, packet);
        socket.emit(channel, packet);

        // Ждём, когда вернётся ответ (mapId)
        await p;
        // Но реально объект придёт не в data, а в поле { STRICTLY: ... }
        // Мы обрабатываем это в socket.on(channel, ...) ниже
    }

    // На клиенте, если придёт пакет {STRICTLY: ...}, мы обновим strictlyObj
    socket.on(channel, (pkt: tPacket) => {
        if (pkt.STRICTLY) {
            if (debug) console.log(`[strictlyObj updated]`, pkt.STRICTLY);
            // Зачищаем
            strictlyObj = {};
            Object.assign(strictlyObj, pkt.STRICTLY);
            // Если это ответ на mapId, то резолвим pending
            if (pendingMap.has(pkt.mapId)) {
                const pr = pendingMap.get(pkt.mapId)!;
                pendingMap.delete(pkt.mapId);
                free.freeId(pkt.mapId);
                pr.resolve(undefined);
            }
        }
    });

    function infoStrictly() {
        return strictlyObj;
    }

    // --------------------------
    // 7. reflectObj (на сервере) — составляем описание,
    //    какие методы/поля разрешены.
    //    Если у вас есть логика ролей, токенов — применяйте её тут.
    // --------------------------
    function reflectObj(o: any): any {
        if (!o || typeof o !== 'object') return 'null';
        if (Array.isArray(o)) {
            return o.map((el) => reflectObj(el));
        }
        const out: any = {};
        for (const k of Object.keys(o)) {
            const val = o[k];
            if (typeof val === 'function') {
                // Можете проверить права: если запрещено → 'null'
                out[k] = 'func';
            } else if (val && typeof val === 'object') {
                out[k] = reflectObj(val);
            } else {
                out[k] = 'null';
            }
        }
        return out;
    }

    // --------------------------
    // Финальный результат
    // --------------------------
    return {
        client: clientProxy,
        initServer,
        strictlyInit,
        infoStrictly
    };
}


/* ------------------------------------------------------------------
   Пример использования (псевдокод)
   ------------------------------------------------------------------
   // ====== СТОРОНА СЕРВЕРА ======
   class MyServer {
     hello(name: string) {
       return `Hello, ${name}`;
     }
     secret(data: string) {
       return `Secret data: ${data}`;
     }
     nested = {
       foo() { return 'nested foo'; }
     }
   }
   const serverObj = new MyServer();

   // WebSocket (или совместимый) на сервере
   const serverSocket: tSocket = {
     emit(ch, msg) {...},
     on(ch, cb) {...}
   };

   // Создаём RPC
   const rpcServer = createRpc({
     socket: serverSocket,
     channel: 'rpc',
     obj: serverObj,
     debug: true
   });
   // Запускаем серверную логику
   rpcServer.initServer();

   // ====== СТОРОНА КЛИЕНТА ======
   const clientSocket: tSocket = {
     emit(ch, msg) {...},
     on(ch, cb) {...}
   };

   // Создаём RPC (obj: {} — на клиенте)
   const rpcClient = createRpc({
     socket: clientSocket,
     channel: 'rpc',
     obj: {},
     debug: true
   });

   // 1. Инициируем STRICTLY
   await rpcClient.strictlyInit();
   console.log('strictly:', rpcClient.infoStrictly());

   // 2. Вызываем метод
   const res = await rpcClient.client.hello("Alice");
   console.log(res); // "Hello, Alice"

   // 3. Колбэки
   await rpcClient.client.someMethod(123, (data, extra) => {
     console.log("Callback from server:", data, extra);
   });

   // 4. nested
   const nestedRes = await rpcClient.client.nested.foo();
   console.log(nestedRes); // "nested foo"
*/
