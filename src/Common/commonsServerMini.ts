type Socket = { emit: (e: string, p: any) => any; on: (e: string, cb: (d: any) => any) => any };
export type RequestScreener<T> = { key: string[]; callbacksId?: string[]; request: any[] };
type Obj = { [k: string]: any };
type SocketData<T> = (
    { data: T; error?: undefined } | { error: any; data?: undefined }
    ) & { mapId: number; wait?: boolean; callbacksId?: number[] };
type ScreenerSoc<T> = { sendMessage: (d: T) => void; api: (h: { onMessage: (m: T) => void | Promise<void> }) => void };

export function promiseServer<T extends Obj>(soc: ScreenerSoc<SocketData<RequestScreener<T>>>, target: T) {
    soc.api({ onMessage: async (msg) => {
            const { key, request } = msg.data!;
            let curr = target, fnName = "";
            try {
                for (const k of key) { fnName = k; if (typeof curr[fnName] === "function") break; curr = curr[fnName]; }
            } catch (e) {
                soc.sendMessage({ mapId: msg.mapId, error: { error: e, key, arguments: request } });
                console.error({ error: e, key, arguments: request });
                return;
            }
            if (typeof curr[fnName] === "function") {
                const { callbacksId } = msg;
                if (callbacksId && Array.isArray(callbacksId)) {
                    const cbArr = callbacksId.map(id => (data: any) => {
                        try { soc.sendMessage({ mapId: id, data: data ?? undefined }); }
                        catch (err) { console.log("Ошибка callback", err); }
                    });
                    let idx = 0; request.forEach((item, i) => { if (item === "___FUNC") request[i] = cbArr[idx++]; });
                }
                try {
                    const res = await curr[fnName](...request);
                    if (msg.wait !== false) soc.sendMessage({ mapId: msg.mapId, data: res ?? undefined });
                } catch (e) {
                    console.log(fnName, request, key);
                    soc.sendMessage({ mapId: msg.mapId, error: { error: e, key, arguments: request } });
                    console.error({ error: e, key, arguments: request });
                }
            } else {
                soc.sendMessage({ mapId: msg.mapId, error: JSON.stringify({ data: "это не функция", key, arguments: request }) });
                console.error({ data: "это не функция", key, arguments: request });
            }
        }});
}

type Func = (a: any) => any;
export type ScreenerSoc2<T> = { send: (d: RequestScreener<T>, wait?: boolean, cbs?: Func[]) => Promise<any>; api: ScreenerSocApi<T> };
export type ScreenerSocApi<T> = {
    log: (s: boolean) => void; promiseTotal: () => number; callbackTotal: () => number;
    promiseDeleteAll: (rej: boolean) => void; callbackDeleteAll: () => void; callbackDelete: (fn: Func) => void;
};
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type MethodToPromise<T extends object> = {
    [P in keyof T]: T[P] extends (...args: infer Z) => infer X ? (...args: Z) => Promise<UnwrapPromise<X>> : T[P] extends object ? MethodToPromise<T[P]> : never;
};
export type MethodToPromiseStrict<T extends object> = {
    [P in keyof T]: T[P] extends (...args: infer Z) => infer X ? (...args: Z) => Promise<UnwrapPromise<X>> : T[P] extends object ? MethodToPromiseStrict<T[P]> : T[P];
};

export function wsWrapper<T>(soc: ScreenerSoc<SocketData<RequestScreener<T>>> & { limit?: number }): ScreenerSoc2<T> {
    const max = soc.limit, sendMsg = soc.sendMessage;
    const pool = (() => { const free: number[] = []; let tot = 0, pos = 0; return { log: () => console.log({ free, tot, pos }), next: () => pos > 0 ? free[--pos] : ++tot, release: (id: number) => { free[pos++] = id; } }; })();
    const promises = new Map<number, { resolve: Func; reject: Func }>(), cbsMap = new Map<number, Func>();
    soc.api({ onMessage: (msg) => {
            const id = msg.mapId;
            if (promises.has(id)) { const p = promises.get(id)!; promises.delete(id); pool.release(id); msg.error ? p.reject(msg.error) : p.resolve(msg.data); }
            else if (cbsMap.has(id)) {
                const cb = cbsMap.get(id)!;
                // @ts-ignore
                if (msg.data === "___STOP") { cbsMap.delete(id); pool.release(id); }
                cb(msg.data);
            } else console.error("Неожиданный ответ", msg);
        }});
    let debug = false;
    const api: ScreenerSocApi<T> = {
        log: (s: boolean) => { debug = s; },
        promiseTotal: () => promises.size,
        callbackTotal: () => cbsMap.size,
        promiseDeleteAll: (rej = true) => {
            const arr = [...promises.values()], keys = [...promises.keys()];
            promises.clear(); keys.forEach(k => pool.release(k));
            arr.forEach(p => (rej ? p.reject("promiseDeleteAll") : p.resolve(undefined)));
        },
        callbackDeleteAll: () => { const keys = [...cbsMap.keys()]; cbsMap.clear(); keys.forEach(k => pool.release(k)); },
        callbackDelete: (fn: Func) => { cbsMap.forEach((cb, key) => { if (cb === fn) { cbsMap.delete(key); pool.release(key); } }); }
    };
    return { api, send: (data, wait?: boolean, cbs?: Func[]) => new Promise((resolve, reject) => {
            const msg: SocketData<RequestScreener<T>> = { mapId: pool.next(), data, wait, callbacksId: [] };
            for (const fn of cbs ?? []) { const id = pool.next(); msg.callbacksId!.push(id); if (debug) console.log("Ключ callback", id, msg); cbsMap.set(id, fn); }
            if (wait !== false) promises.set(msg.mapId, { resolve, reject });
            if (debug) { pool.log(); console.log("Ключ сокета", msg.mapId, msg); }
            if (max && cbsMap.size >= max) console.log("callbacksMap.size =", cbsMap.size);
            if (max && promises.size >= max) console.log("promises.size =", promises.size);
            sendMsg(msg);
        }) };
}

export function createClientProxy<T extends object>(soc2: ScreenerSoc2<T>, wait?: boolean) {
    const chain = (path: string[]): any => new Proxy(() => {}, {
        get: (_, p: string | symbol) => { path.push(String(p)); return chain(path); },
        apply: (_, __, args: any[]) => {
            const fns: Func[] = [];
            args.forEach((arg, i) => { if (typeof arg === "function") { fns.push(arg); args[i] = "___FUNC"; } });
            return soc2.send({ key: path, request: args }, wait, fns);
        }
    });
    return new Proxy({}, { get: (_, p: string | symbol) => chain([String(p)]) }) as unknown as MethodToPromise<T>;
}

function createClientProxyStrict<T extends object>(soc2: ScreenerSoc2<T>, getTarget: () => any, wait?: boolean) {
    const chain = (path: string[]): any => new Proxy(() => {}, {
        has: (_, p: string | symbol) => {
            let tgt = getTarget();
            for (const a of path) { tgt = tgt?.[a]; if (!tgt || tgt === "null") return false; }
            return tgt?.[p] !== "null";
        },
        ownKeys(target) {
            let tgt = getTarget();
            for (const a of path) { tgt = tgt?.[a]; if (!tgt || tgt === "null") return []; }
            return Object.keys(tgt)
        },

        getOwnPropertyDescriptor(target: any, prop: string | symbol) {
            return {enumerable: true, configurable: true,};
        },
        get: (_, p: string | symbol) => {
            let tgt = getTarget();
            for (const a of path) { tgt = tgt?.[a]; if (!tgt || tgt === "null") return undefined; }
            return tgt?.[p] === "null" ? undefined : chain([...path, String(p)]);
        },
        apply: (_, __, args: any[]) => {
            let tgt = getTarget();
            for (const a of path) { tgt = tgt?.[a]; if (!tgt || tgt === "null") return undefined; }
            if (path.at(-1) === "call") { path.length--; args.splice(0, 1); }
            const fns: Func[] = [];
            args.forEach((arg, i) => { if (typeof arg === "function") { fns.push(arg); args[i] = "___FUNC"; } });
            return soc2.send({ key: path, request: args }, wait, fns);
        }
    });
    return new Proxy({}, {
        has: (_, p: string | symbol) => getTarget()?.[p] !== "null",
        get: (_, p: string | symbol) => (getTarget() && getTarget()[p] === "null" ? undefined : chain([String(p)]))
    }) as unknown as MethodToPromise<T>;
}

export type NoVoid<T> = { [P in Exclude<keyof T, { [K in keyof T]: T[K] extends (...args: any[]) => any ? ReturnType<T[K]> extends void ? K : never : never; }[keyof T]>]: T[P] };
export type OnlyVoid<T> = { [P in Exclude<keyof T, { [K in keyof T]: T[K] extends (...args: any[]) => any ? ReturnType<T[K]> extends void ? never : K : never; }[keyof T]>]: T[P] };

export function createAPIFacadeClient<T extends object>({ socket: sock, socketKey: key, limit }: { socket: Socket; socketKey: string; limit?: number }) {
    let strictData: any = {}, resolveStrict: (v: unknown) => void;
    const wsWrap = wsWrapper<any>({
        sendMessage: (msg) => sock.emit(key, msg),
        api: ({ onMessage }) => { sock.on(key, (d: any) => {
            if (typeof d === "object" && d?.STRICTLY) { Object.keys(strictData).forEach(k => delete strictData[k]); Object.assign(strictData, d.STRICTLY); resolveStrict?.(undefined); }
            else onMessage(d);
        }); },
        limit,
    });
    const func = createClientProxy<NoVoid<T>>(wsWrap);
    const strict = createClientProxyStrict(wsWrap, () => strictData) as MethodToPromiseStrict<T>;
    const space = createClientProxy<OnlyVoid<T>>(wsWrap, false);
    return { api: wsWrap.api, func, space, all: func as MethodToPromise<T>, strict, infoStrict: () => strictData, async strictInit(obj?: object) {
            if (obj) strictData = obj; else { sock.emit(key, "___STRICTLY"); return new Promise(resolve => { resolveStrict = resolve; }); }
        } };
}

export function createAPIFacadeServer<T extends object>({ socket: sock, object: targetObj, socketKey: key, debug = false }: { socket: Socket; object: T; socketKey: string; debug?: boolean }) {
    function serialize(obj: any): any {
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, typeof v === "object" && v != null ? serialize(v) : typeof v === "function" ? "func" : !v ? "null" : "unknow"]));
    }
    const ser = serialize(targetObj);
    promiseServer({ sendMessage: (msg) => sock.emit(key, msg), api: ({ onMessage }) => { sock.on(key, (d: any) => {
            if (debug) console.log(typeof d === "object" ? JSON.stringify(d) : d);
            if (d === "___STRICTLY") sock.emit(key, { STRICTLY: ser });
            else onMessage(d);
        }); } }, targetObj);
}

export const CreatAPIFacadeServer = createAPIFacadeServer;
export const CreatAPIFacadeClient = createAPIFacadeClient;