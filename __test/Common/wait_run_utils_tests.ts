// tests/waitRun.test.ts
import { enhancedWaitRun, enhancedQueueRun } from "../../src/Common/waitRun";
import { sleepAsync } from "../../src/Common/common";

describe("enhancedWaitRun (real timers)", () => {
    // Используем «реальные» таймеры, а не jest.useFakeTimers()
    beforeAll(() => {
        jest.useRealTimers();
        // По умолчанию jest и так useRealTimers(), но на всякий случай
        // если где-то в другом тесте переключались на useFakeTimers().
    });

    it("throttleAsync: не должен вызывать функцию вторично, пока не истечёт ms", async () => {
        const waitObj = enhancedWaitRun();
        const mockFn = jest.fn();

        // Первый вызов — сразу должен сработать
        waitObj.throttleAsync(100, async () => {
            mockFn("first");
        });
        // Сразу делаем повторный вызов — не должно сработать, т.к. прошло < 100мс
        waitObj.throttleAsync(100, async () => {
            mockFn("second");
        });

        // Дадим чуть времени (50мс) — ещё не 100мс, так что всё ещё не должно
        await new Promise((r) => setTimeout(r, 50));

        // Проверяем, что за это время у нас ровно 1 вызов
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(mockFn).toHaveBeenCalledWith("first");

        // Теперь ждём ещё 100мс, чтобы перевалить интервал
        await new Promise((r) => setTimeout(r, 100));

        // Пытаемся вызвать снова — теперь «окно» уже открылось
        await waitObj.throttleAsync(100, async () => {
            mockFn("third");
        });

        expect(mockFn).toHaveBeenCalledTimes(2); // "first" + "third"
        expect(mockFn).toHaveBeenLastCalledWith("third");
    });

    it("debounceAsync: должен вызывать только самую последнюю функцию", async () => {
        const waitObj = enhancedWaitRun();
        const mockFn = jest.fn();

        // Вызываем debounce несколько раз подряд с интервалом 20мс
        waitObj.debounceAsync(100, () => mockFn("call1"));
        await new Promise((r) => setTimeout(r, 20));
        waitObj.debounceAsync(100, () => mockFn("call2"));
        await new Promise((r) => setTimeout(r, 20));
        waitObj.debounceAsync(100, () => mockFn("call3"));

        // В итоге «пауза» 100мс начнётся только от последнего вызова
        // (call3). Ждём 120мс, чтобы точно дождаться её выполнения.
        await new Promise((r) => setTimeout(r, 120));

        // Ожидаем, что выполнялась только "call3".
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(mockFn).toHaveBeenCalledWith("call3");
    });
});
//
// // jest.mock("../../src/Common/common", () => ({
// //     sleepAsync: jest.fn((ms: number) => new Promise((resolve) => setTimeout(resolve, ms))),
// // }));
//
//
// describe("enhancedWaitRun", () => {
//     let waitRunObj: ReturnType<typeof enhancedWaitRun>;
//
//     beforeEach(() => {
//         jest.useFakeTimers(); // Используем FakeTimers, чтобы управлять временем
//         waitRunObj = enhancedWaitRun();
//     });
//
//     afterEach(() => {
//         jest.clearAllTimers();
//         jest.useRealTimers();
//     });
//
//     describe("throttleAsync", () => {
//         test("должен вызывать функцию, если прошло достаточно времени", async () => {
//             const mockFn = jest.fn().mockResolvedValue(undefined);
//
//             // Первый вызов
//             await waitRunObj.throttleAsync(1000, mockFn);
//             // Прокручиваем таймер на 1с:
//             jest.advanceTimersByTime(1000);
//
//             // Ждём, чтобы промисы зарезолвились
//             await Promise.resolve();
//
//             expect(mockFn).toHaveBeenCalledTimes(1);
//         });
//
//         test("не должен вызывать функцию второй раз, если интервал не прошёл", async () => {
//             const mockFn = jest.fn().mockResolvedValue(undefined);
//
//             // Первый вызов (сразу исполнится)
//             await waitRunObj.throttleAsync(1000, mockFn);
//             // Второй вызов через 500мс
//             jest.advanceTimersByTime(500);
//             await waitRunObj.throttleAsync(1000, mockFn);
//
//             // Ждём, чтобы промисы зарезолвились
//             await Promise.resolve();
//
//             expect(mockFn).toHaveBeenCalledTimes(1); // только один вызов
//         });
//
//         test("должен вызывать функцию второй раз, если интервал прошёл", async () => {
//             const mockFn = jest.fn().mockResolvedValue(undefined);
//
//             // Первый вызов
//             await waitRunObj.throttleAsync(500, mockFn);
//             // Прокручиваем 500мс
//             jest.advanceTimersByTime(500);
//
//             // Второй вызов (уже должен сработать)
//             await waitRunObj.throttleAsync(500, mockFn);
//
//             await Promise.resolve();
//             expect(mockFn).toHaveBeenCalledTimes(2);
//         });
//     });
//
//     describe("debounceAsync", () => {
//         test("должен вызывать только последнюю функцию после задержки", async () => {
//             const mockFn1 = jest.fn().mockResolvedValue(undefined);
//             const mockFn2 = jest.fn().mockResolvedValue(undefined);
//
//             // Первый debounce
//             waitRunObj.debounceAsync(1000, mockFn1);
//             // Через 200мс вызываем снова (должен «перезаписать» на mockFn2)
//             jest.advanceTimersByTime(200);
//             waitRunObj.debounceAsync(1000, mockFn2);
//
//             // Прокрутка времени на 1000мс
//             jest.advanceTimersByTime(1000);
//             // Дождёмся выполнения промисов
//             await Promise.resolve();
//
//             expect(mockFn1).toHaveBeenCalledTimes(0); // она отменена
//             expect(mockFn2).toHaveBeenCalledTimes(1);
//         });
//
//         test("должен отрабатывать только один раз, даже при множестве вызовов подряд", async () => {
//             const mockFn = jest.fn().mockResolvedValue(undefined);
//
//             // Вызываем много раз подряд
//             for (let i = 0; i < 5; i++) {
//                 waitRunObj.debounceAsync(500, mockFn);
//                 jest.advanceTimersByTime(100);
//             }
//
//             // Прокручиваем таймер до конца (500мс + небольшие шаги)
//             jest.advanceTimersByTime(500);
//             await Promise.resolve();
//
//             expect(mockFn).toHaveBeenCalledTimes(1); // только один раз
//         });
//     });
// });
//
// describe("enhancedQueueRun", () => {
//     beforeEach(() => {
//         jest.useRealTimers();
//     });
//
//     test("должен обрабатывать задачи последовательно, если maxParallelTasks=1", async () => {
//         const queue = enhancedQueueRun(1);
//
//         const results: number[] = [];
//
//         function createTask(index: number, delayMs: number) {
//             return async () => {
//                 await sleepAsync(delayMs);
//                 results.push(index);
//             };
//         }
//
//         // Добавляем в очередь 3 задачи
//         queue.enqueue(createTask(1, 10));
//         queue.enqueue(createTask(2, 5));
//         queue.enqueue(createTask(3, 1));
//
//         // Запускаем
//         await queue.runAll();
//
//         // Так как maxParallelTasks=1, задачи выполняются строго по порядку
//         expect(results).toEqual([1, 2, 3]);
//     });
//
//     test("должен обрабатывать задачи параллельно, если maxParallelTasks=2", async () => {
//         jest.spyOn(global, "setTimeout"); // чтобы проверить задержки
//         const queue = enhancedQueueRun(2);
//
//         const results: number[] = [];
//
//         // Задача, которая «выполняется» 100мс
//         function createTask(index: number, delayMs: number) {
//             return async () => {
//                 await sleepAsync(delayMs);
//                 results.push(index);
//             };
//         }
//
//         queue.enqueue(createTask(1, 100));
//         queue.enqueue(createTask(2, 100));
//         queue.enqueue(createTask(3, 50));
//         queue.enqueue(createTask(4, 10));
//
//         // Запускаем
//         const promiseAll = queue.runAll();
//
//         // Ждём, когда все задачи выполнятся
//         await promiseAll;
//
//         // Так как две параллели, первые две начнутся вместе (1 и 2),
//         // а затем добавятся (3 и 4). Порядок в массиве results точно может быть [1,2,3,4]
//         // или [2,1,3,4] — в зависимости от того, какая из первых двух завершится первой.
//         // Проверим, что все 4 задачи выполнились:
//         expect(results.length).toBe(4);
//         expect(results.sort()).toEqual([1, 2, 3, 4]);
//     });
//
//     test("enqueueAndRun запускает задачу немедленно, если есть свободный воркер", async () => {
//         const queue = enhancedQueueRun(2);
//         const mockFn = jest.fn();
//
//         // Добавляем в очередь задачу, но не запускаем runAll
//         queue.enqueue(() => Promise.resolve().then(() => mockFn(1)));
//         expect(queue.queueSize).toBe(1);
//
//         // Теперь вызываем enqueueAndRun
//         queue.enqueueAndRun(() => Promise.resolve().then(() => mockFn(2)));
//
//         // Чтобы дождаться, когда задачи реально завершатся, придётся вызвать runAll
//         await queue.runAll();
//
//         // Проверяем, что обе задачи отработали
//         expect(mockFn).toHaveBeenCalledTimes(2);
//         // Аргумент 1 и 2 могли прийти в любом порядке
//     });
// });
//
//
// //
// // describe("enhancedWaitRun", () => {
// //     let waitRun: ReturnType<typeof enhancedWaitRun>;
// //
// //     beforeEach(() => {
// //         waitRun = enhancedWaitRun();
// //         jest.useFakeTimers(); // Эмулируем таймеры
// //     });
// //
// //     afterEach(() => {
// //         jest.clearAllMocks(); // Очищаем вызовы моков
// //         jest.useRealTimers(); // Возвращаем оригинальные таймеры
// //     });
// //
// //     describe("throttleAsync", () => {
// //         test("Function is executed immediately if interval has passed", async () => {
// //             const mockFn = jest.fn();
// //             waitRun.throttleAsync(1000, mockFn);
// //             jest.advanceTimersByTime(1000);
// //             expect(mockFn).toHaveBeenCalled(); // Функция должна быть вызвана
// //         });
// //
// //         test("Function is not executed if called before the interval", async () => {
// //             const mockFn = jest.fn();
// //
// //             waitRun.throttleAsync(1000, mockFn);
// //             waitRun.throttleAsync(1000, mockFn); // Повторный вызов до истечения интервала
// //             jest.advanceTimersByTime(1001);
// //
// //             expect(mockFn).toHaveBeenCalledTimes(1); // Функция вызвана только один раз
// //         });
// //
// //         test("Function is executed again after interval has passed", async () => {
// //             const mockFn = jest.fn();
// //
// //             waitRun.throttleAsync(1000, mockFn);
// //             expect(mockFn).toHaveBeenCalledTimes(1);
// //
// //             // Эмулируем истечение времени
// //             jest.advanceTimersByTime(1000);
// //
// //             waitRun.throttleAsync(1000, mockFn);
// //             expect(mockFn).toHaveBeenCalledTimes(2); // Функция вызвана повторно после интервала
// //         });
// //     });
// //
// //     describe("debounceAsync", () => {
// //         test("Function is executed after the delay", async () => {
// //             const mockFn = jest.fn();
// //
// //             await waitRun.debounceAsync(1000, mockFn);
// //             jest.advanceTimersByTime(1000);
// //
// //             expect(mockFn).toHaveBeenCalled(); // Функция выполнена после задержки
// //         });
// //
// //         test("Only the most recent function is executed if called multiple times", async () => {
// //             const mockFn1 = jest.fn();
// //             const mockFn2 = jest.fn();
// //
// //             waitRun.debounceAsync(1000, mockFn1);
// //             waitRun.debounceAsync(1000, mockFn2);
// //
// //             jest.advanceTimersByTime(1000);
// //             expect(mockFn1).not.toHaveBeenCalled(); // Первая функция не должна быть вызвана
// //             expect(mockFn2).toHaveBeenCalled(); // Вызывается только последняя переданная функция
// //         });
// //
// //         test("Handles undefined function case properly", () => {
// //             expect(() => waitRun.debounceAsync(1000, undefined as any)).toThrow(
// //                 "debounceAsync: func is undefined"
// //             );
// //         });
// //     });
// // });
// //
// // describe("enhancedQueueRun", () => {
// //     let queue: ReturnType<typeof enhancedQueueRun>;
// //
// //     beforeEach(() => {
// //         queue = enhancedQueueRun(3); // Устанавливаем максимальное количество одновременно исполняемых задач = 3
// //     });
// //
// //     describe("enqueueAndRun", () => {
// //         test("Executes tasks immediately if workers are available", async () => {
// //             const mockTask = jest.fn(() => Promise.resolve("Task completed"));
// //             queue.enqueueAndRun(mockTask);
// //
// //             await Promise.resolve(); // Дождаться выполнения всех тасков
// //             expect(mockTask).toHaveBeenCalled();
// //         });
// //
// //         test("Enqueues tasks when all workers are busy", async () => {
// //             const mockTask = jest.fn(() => sleepAsync(100)); // Задача со временем выполнения
// //
// //             for (let i = 0; i < 5; i++) {
// //                 queue.enqueueAndRun(mockTask);
// //             }
// //
// //             expect(queue.queueSize).toBe(2); // Две задачи остаются в очереди
// //         });
// //
// //         test("Executes queued tasks as workers become available", async () => {
// //             const mockTask = jest.fn(() => sleepAsync(100));
// //
// //             for (let i = 0; i < 5; i++) {
// //                 queue.enqueueAndRun(mockTask);
// //             }
// //
// //             jest.advanceTimersByTime(100); // Эмулируем завершение времени выполнения задач
// //
// //             expect(mockTask).toHaveBeenCalledTimes(5); // Все задачи были выполнены
// //             expect(queue.queueSize).toBe(0); // Очередь задач пуста
// //         });
// //     });
// //
// //     describe("runAll", () => {
// //         test("Executes all tasks and resolves when all are completed", async () => {
// //             const mockTask1 = jest.fn().mockResolvedValue("Task 1 completed");
// //             const mockTask2 = jest.fn().mockResolvedValue("Task 2 completed");
// //             const mockTask3 = jest.fn().mockResolvedValue("Task 3 completed");
// //
// //             queue.enqueue(mockTask1);
// //             queue.enqueue(mockTask2);
// //             queue.enqueue(mockTask3);
// //
// //             await queue.runAll();
// //
// //             expect(mockTask1).toHaveBeenCalled();
// //             expect(mockTask2).toHaveBeenCalled();
// //             expect(mockTask3).toHaveBeenCalled();
// //         });
// //
// //         test("Handles task failures gracefully", async () => {
// //             const failingTask = jest.fn(() => Promise.reject("Task failed"));
// //             const successfulTask = jest.fn(() => Promise.resolve("Task successful"));
// //
// //             queue.enqueue(failingTask);
// //             queue.enqueue(successfulTask);
// //
// //             const results = await queue.runAll();
// //
// //             expect(failingTask).toHaveBeenCalled();
// //             expect(successfulTask).toHaveBeenCalled();
// //
// //             expect(results).toHaveLength(3); // 3 worker threads
// //             expect(results.some((result) => result.status === "rejected")).toBe(true);
// //         });
// //     });
// //
// //     describe("queueSize", () => {
// //         test("Returns the correct number of tasks in the queue", () => {
// //             const mockTask = jest.fn(() => Promise.resolve());
// //
// //             queue.enqueue(mockTask);
// //             queue.enqueue(mockTask);
// //
// //             expect(queue.queueSize).toBe(2);
// //
// //             queue.enqueueAndRun(mockTask);
// //             expect(queue.queueSize).toBe(2); // Очередь задач не уменьшается до выполнения тасков
// //         });
// //     });
// // });