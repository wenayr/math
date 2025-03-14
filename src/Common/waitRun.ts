import { sleepAsync } from "./common";

/**
 * Улучшенная версия waitRun с исправлениями.
 * Управляет запуском асинхронных функций с ограничениями по времени.
 */
export function enhancedWaitRun() {
    let lastExecutionTime: number = 0 //Date.now(); // Время последнего успешного выполнения функции
    let activePromise: Promise<void> = Promise.resolve(); // Активная цепочка промисов
    let isBusy: boolean = false; // Флаг занятости
    let latestFunction: (() => any | Promise<any>) | undefined; // Последняя переданная функция (для отложенного запуска)

    return {
        /**
         * Ограничивает частоту выполнения переданной функции.
         * Функция будет выполнена только если указанный интервал времени уже прошёл.
         * @param ms Минимальный промежуток времени между выполнениями в миллисекундах.
         * @param func Функция для выполнения.
         */
        throttleAsync: (ms: number, func: () => any | Promise<any>) => {
            if (lastExecutionTime + ms < Date.now() && !isBusy) {
                isBusy = true;
                activePromise = activePromise.then<void>(() => {
                    try {
                        return func();
                    } catch (error) {
                        console.error("Error in throttleAsync function:", error);
                    } finally {
                        isBusy = false;
                        lastExecutionTime = Date.now();
                    }
                });
            }
        },

        /**
         * Ждёт указанный интервал времени, после чего выполняет последнюю переданную функцию.
         * Гарантирует выполнение последней функции, даже если было несколько вызовов подряд.
         * @param ms Время ожидания перед выполнением в миллисекундах.
         * @param func Функция для выполнения.
         */
        debounceAsync: (ms: number, func: () => any | Promise<any>) => {
            if (!func) throw new Error("debounceAsync: func is undefined");

            latestFunction = func;
            if (!isBusy) {
                isBusy = true;
                activePromise = activePromise.finally(async () => {
                    try {
                        await sleepAsync(ms);
                        await latestFunction?.();
                    } catch (error) {
                        console.error("Error in debounceAsync function:", error);
                    } finally {
                        isBusy = false;
                        activePromise = Promise.resolve();
                    }
                });
            }
            return activePromise;
        },
    };
}
export function createAsyncQueue(concurrency: number = 1) {
    type Task<T = any> = () => Promise<T>;
    let queue: Task[] = [];
    let activeCount = 0;

    let resolveIdle: (() => void) | null = null;
    let idlePromise: Promise<void> | null = null;

    const runNext = (): void => {
        if (activeCount >= concurrency || queue.length === 0) {
            if (activeCount === 0 && queue.length === 0 && resolveIdle) {
                resolveIdle();
                resolveIdle = null;
                idlePromise = null;
            }
            return;
        }

        const task = queue.shift();
        if (!task) return;

        activeCount++;
        task().finally(() => {
            activeCount--;
            runNext();
        });

        runNext();
    };

    const enqueue = <T>(task: Task<T>): Promise<T> => {
        return new Promise<T>((resolve, reject) => {
            queue.push(async () => {
                try {
                    resolve(await task());
                } catch (err) {
                    reject(err);
                }
            });

            runNext();
        });
    };

    const onIdle = (): Promise<void> => {
        if (!idlePromise) {
            idlePromise = new Promise((resolve) => {
                if (activeCount === 0 && queue.length === 0) {
                    resolve();
                } else {
                    resolveIdle = resolve;
                }
            });
        }
        return idlePromise;
    };

    const getQueueSize = (): number => queue.length;

    return {
        enqueue,
        onIdle,
        getQueueSize,
    };
}
/**
 * Улучшенная версия queueRun с исправлениями.
 * Контролирует выполнение задач в очереди с заданным числом одновременно исполняемых задач.
 */
export function enhancedQueueRun(maxParallelTasks = 5) {
    const tr = createAsyncQueue(maxParallelTasks)


    return {
        get queueSize() {
            return tr.getQueueSize();
        },

        enqueue(task: ()=>Promise<any>) {
            tr.enqueue(task);
        },

        enqueueAndRun(task:  ()=>Promise<any>) {
            tr.enqueue(task);
        },
        runAll() {
            return tr.onIdle();
        },
    };
}

/**
 * Старые версии функций, использующие новую реализацию для обратной совместимости.
 */

export function waitRun() {
    const enhancedFunctions = enhancedWaitRun();

    return {
        refreshAsync: enhancedFunctions.throttleAsync,
        refreshAsync2: enhancedFunctions.debounceAsync,
    };
}

export function queueRun(n = 5) {
    const enhancedQueue = enhancedQueueRun(n);

    return {
        get size() {
            return enhancedQueue.queueSize;
        },
        set next(task: () => Promise<any>) {
            enhancedQueue.enqueue(task);
        },
        set nextRun(task: () => Promise<any>) {
            enhancedQueue.enqueueAndRun(task);
        },
        run: () => enhancedQueue.runAll(),
    };
}

export function createTaskQueue(){
    let ready = false;
    const tasks: Array<() => void | Promise<void>> = [];

    return {
        add: (fn: () => any | Promise<any>) => ready ? void fn() : tasks.push(fn),
        setReady: async () => {
            ready = true;
            for (const fn of tasks) await fn();
            tasks.length = 0;
        },
        isReady: () => ready,
        tasks: () => [...tasks],
    };
};

// import {sleepAsync} from "./common";
//
// export function waitRun() {
//     let lastTime: number = Date.now()
//     let funcAsync = Promise.resolve();
//     let busy: boolean = false
//     let lastFunc1: () => any | Promise<any>
//     return {
//         //Сперва запускает, потом ставит ограничения до след запуска, Примечание, просо фильтрует запуск если по времени пауза еще не прошла. Т.е. запуск может не исполнится
//         refreshAsync: (ms: number, func: () => any | Promise<any>) => {
//             if (lastTime + ms < Date.now() && !busy) {
//                 busy = true;
//                 funcAsync = funcAsync.then<void>(() => {
//                     func();
//                     busy = false;
//                     lastTime = Date.now()
//                     return;
//                 })
//             }
//         },
//         //сперва ждет, потом гарантировано запускает последний переданный вариант
//         refreshAsync2: (ms: number, func: () => any | Promise<any>) => {
//             if (!func) throw "refreshAsync2: func = undefined ";
//             lastFunc1 = func;
//             if (!busy) {
//                 busy = true;
//                 funcAsync = funcAsync.finally(async () => {
//                     await sleepAsync(ms)
//                     await (async ()=>lastFunc1?.())()
//                         .finally(()=>{
//                             busy = false;
//                             funcAsync = Promise.resolve();
//                         })
//                 })
//             }
//             return funcAsync;
//         }
//     }
// }
//
// // количество параллелей
// export function queueRun(n = 5) {
//     type el = () => Promise<any>
//     const arr = [] as el[]
//     const ff = () => arr.shift()?.()?.finally(ff)
//     const buf = Array(n).fill(1).map(()=>ff())
//     const check = () => {
//         buf.forEach((e,i)=> {
//             if (!e) buf[i] = ff()
//         })}
//     return {
//         get size() {return arr.length},
//         set next(el: el) {arr.push(el)},
//         set nextRun(el: el) {arr.push(el); check()},
//         run(){
//             check()
//             return Promise.allSettled(buf)
//         },
//     }
// }