import { sleepAsync } from "./common";

/**
 * Улучшенная версия waitRun с исправлениями.
 * Управляет запуском асинхронных функций с ограничениями по времени.
 */
export function enhancedWaitRun() {
    let lastExecutionTime: number = Date.now(); // Время последнего успешного выполнения функции
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

/**
 * Улучшенная версия queueRun с исправлениями.
 * Контролирует выполнение задач в очереди с заданным числом одновременно исполняемых задач.
 */
export function enhancedQueueRun(maxParallelTasks = 5) {
    type Task = () => Promise<any>;

    const taskQueue: Task[] = []; // Очередь задач
    const workers: Promise<void>[] = Array(maxParallelTasks).fill(Promise.resolve()); // Потоки для выполнения задач

    /**
     * Внутренняя функция, которая забирает задачу из очереди и выполняет её.
     */
    const processNextTask = () => {
        const task = taskQueue.shift();
        if (task) {
            return task()
                .catch((error) => {
                    console.error("Error in task execution:", error);
                })
                .finally(processNextTask); // После выполнения задачи запускаем следующую
        }
    };

    /**
     * Проверяет и запускает доступные задачи, если есть свободные потоки.
     */
    const checkAndRun = () => {
        workers.forEach((worker, index) => {
            if (!worker || worker === Promise.resolve()) {
                workers[index] = processNextTask() || Promise.resolve();
            }
        });
    };

    return {
        /**
         * Получить количество задач в очереди.
         */
        get queueSize() {
            return taskQueue.length;
        },

        /**
         * Добавить задачу в очередь без немедленного запуска.
         * @param task Функция задачи.
         */
        enqueue(task: Task) {
            taskQueue.push(task);
        },

        /**
         * Добавить задачу в очередь и проверить возможность немедленного выполнения.
         * @param task Функция задачи.
         */
        enqueueAndRun(task: Task) {
            taskQueue.push(task);
            checkAndRun();
        },

        /**
         * Запустить выполнение всех задач в очереди.
         * @returns Промис, который выполнится после завершения всех задач.
         */
        runAll() {
            checkAndRun();
            return Promise.allSettled(workers);
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