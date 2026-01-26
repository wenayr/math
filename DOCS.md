# Подробное описание модулей

Этот файл служит расширенной картой проекта: что за модуль, для чего используется и какие ключевые элементы внутри.

## src/Common

### common.ts
Базовый набор утилит, на которые опираются почти все остальные файлы.
- Поиск: `BSearch`, `BSearchIndex`, `BSearchNearest` — бинарный поиск в массиве/по индексу.
- Клонирование и сравнение: `deepClone`, `deepEqual`, `shallowEqual`, `arrayShallowEqual`.
- Числовые утилиты: `NormalizeDouble` (сведение точности), `MaxCommonDivisor`, `GetDblPrecision`.
- Асинхронные утилиты: `sleepAsync`, `createCancellableTimer`, `createCancellableTaskWrapper`.
- Примитивы синхронизации: `Mutex`, `CancelablePromise`.
- Коллекции: `MapExt`, `WeakMapExt`, `StructMap`, `StructSet`, `VirtualItems`.

### BaseTypes.ts
Типовые строительные блоки.
- `Immutable`, `Mutable`, `MutableFull`, `ReadonlyFull`.
- `const_Date` — неизменяемый `Date`.
- Утилиты типов: `KeysByType`, `KeysWithoutType`, `PickTypes`, `OmitTypes`.

### Time.ts
Время, таймфреймы и форматирование.
- `TF` и `Period` — таймфреймы и периодизация.
- `timeToStr_*`, `durationToStr*` — форматирование времени.
- `convertDatesToStrings` — сериализация дат в строковый вид.

### List.ts
Двусвязный список.
- `CList` — базовая структура списка.
- `IListReadonly`, `IListImmutable` — безопасные интерфейсы.

### ListNodeAnd.ts
Альтернативная реализация списка с контрольным узлом.
- `CListNodeAnd` — узлы с кольцевой структурой и методами вставки/удаления.

### ByteStream.ts
Бинарная сериализация.
- `ByteStreamW` — запись чисел, массивов и структур.
- `ByteStreamR` — чтение чисел, массивов и структур.
- `Nullable` и `NumericTypes` — типы числовых полей.

### Color.ts
Цветовые утилиты.
- Типы: `ColorString`, `ColorRGBA`, `ColorNumber`.
- Генераторы: `colorGenerator`, `colorGenerator2`, `colorGeneratorByCount`.
- Парсинг: `colorStringToRGBA`, проверка схожести `isSimilarColors`.

### Decorator.ts
Декораторы и трансформеры функций.
- `enhancedDecorator` — хуки до/после вызова, обработка результата.
- `Decorator`, `Transformer` — совместимые обёртки.

### MemoFunc.ts
Мемоизация.
- `MemoFunc` — кэш с TTL и лимитами.
- `MemoFuncConvert` — компактный вызов мемоизированной функции.

### Listen.ts
Подписки и сокет‑обвязка.
- `funcListenCallback*` — менеджер подписчиков.
- `funcListenBySocket*` — маршрутизация колбэков через сокет.
- `deepModifyByListenSocket*` — глубокое преобразование объекта с подписками.

### event.ts
Коллекции обработчиков событий.
- `CObjectEventsArr` — простой массивный список обработчиков.
- `CObjectEventsList` — список обработчиков на связном списке.

### waitRun.ts
Асинхронные ограничители.
- `enhancedWaitRun` — throttle/debounce.
- `createAsyncQueue` — очередь задач.
- `enhancedQueueRun` — ограничение параллелизма.

### funcTimeWait.ts
Ограничение нагрузки по времени/весу для API‑лимитов.
- `funcTimeW()` — трекер событий с методами `add`, `cleanByTime`, `weight`, `byWeight`.
- `FuncTimeWait` — общий экземпляр трекера.

### node_console.ts
Улучшенный вывод в Node.js.
- Подменяет `console.*`, добавляя файл/строку вызова.
- Умеет работать с source maps (если доступно).

### WebHook2.ts
Webhook‑сервер и клиент.
- Сервер: `createWebhookServer`.
- Клиент: `createWebhookClient`.
- Подписки и хранение состояния в `subscribers.json`.

### SocketServerHook.ts
Обвязка подписок по тегам.
- `SocketServerHook` — менеджер listeners.
- `WebSocketServerHook` — адаптер под socket‑слой.

### commonsServer.ts
RPC‑фасад поверх сокетов (расширенная версия).
- `funcPromiseServer`, `funcScreenerClient2` — отправка/обработка запросов.
- `CreatAPIFacadeServer`, `CreatAPIFacadeClient` — готовые обёртки.

### commonsServerMini.ts
Упрощённый, но расширяемый RPC‑фасад (рекомендуется).
- `promiseServer` — серверная обработка запросов и хуки.
- `wsWrapper` — клиентский транспорт с promise/callback.
- `createClientProxy` / `createClientProxyStrict` — динамические прокси вызовов.
- `createAPIFacadeServer` / `createAPIFacadeClient` — готовые фасады.

## src/Exchange

### Bars.ts
Модели баров и таймсерий.
- `CBar`, `CBars`, `CBarsMutable` — барные коллекции.
- `CTimeSeries` — таймсерии + сериализация через `ByteStream`.
