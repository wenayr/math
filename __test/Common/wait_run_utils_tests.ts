// tests/waitRun.test.ts
import { enhancedWaitRun, enhancedQueueRun } from "../../src/Common/waitRun";
import { sleepAsync } from "../../src/Common/common";

jest.mock("../../src/Common/common", () => ({
    sleepAsync: jest.fn((ms: number) => new Promise((resolve) => setTimeout(resolve, ms))),
}));

describe("enhancedWaitRun", () => {
    let waitRun: ReturnType<typeof enhancedWaitRun>;

    beforeEach(() => {
        waitRun = enhancedWaitRun();
        jest.useFakeTimers(); // Эмулируем таймеры
    });

    afterEach(() => {
        jest.clearAllMocks(); // Очищаем вызовы моков
        jest.useRealTimers(); // Возвращаем оригинальные таймеры
    });

    describe("throttleAsync", () => {
        test("Function is executed immediately if interval has passed", async () => {
            const mockFn = jest.fn();
            waitRun.throttleAsync(1000, mockFn);
            jest.advanceTimersByTime(1000);
            expect(mockFn).toHaveBeenCalled(); // Функция должна быть вызвана
        });

        test("Function is not executed if called before the interval", async () => {
            const mockFn = jest.fn();

            waitRun.throttleAsync(1000, mockFn);
            waitRun.throttleAsync(1000, mockFn); // Повторный вызов до истечения интервала
            jest.advanceTimersByTime(1001);

            expect(mockFn).toHaveBeenCalledTimes(1); // Функция вызвана только один раз
        });

        test("Function is executed again after interval has passed", async () => {
            const mockFn = jest.fn();

            waitRun.throttleAsync(1000, mockFn);
            expect(mockFn).toHaveBeenCalledTimes(1);

            // Эмулируем истечение времени
            jest.advanceTimersByTime(1000);

            waitRun.throttleAsync(1000, mockFn);
            expect(mockFn).toHaveBeenCalledTimes(2); // Функция вызвана повторно после интервала
        });
    });

    describe("debounceAsync", () => {
        test("Function is executed after the delay", async () => {
            const mockFn = jest.fn();

            await waitRun.debounceAsync(1000, mockFn);
            jest.advanceTimersByTime(1000);

            expect(mockFn).toHaveBeenCalled(); // Функция выполнена после задержки
        });

        test("Only the most recent function is executed if called multiple times", async () => {
            const mockFn1 = jest.fn();
            const mockFn2 = jest.fn();

            waitRun.debounceAsync(1000, mockFn1);
            waitRun.debounceAsync(1000, mockFn2);

            jest.advanceTimersByTime(1000);
            expect(mockFn1).not.toHaveBeenCalled(); // Первая функция не должна быть вызвана
            expect(mockFn2).toHaveBeenCalled(); // Вызывается только последняя переданная функция
        });

        test("Handles undefined function case properly", () => {
            expect(() => waitRun.debounceAsync(1000, undefined as any)).toThrow(
                "debounceAsync: func is undefined"
            );
        });
    });
});

describe("enhancedQueueRun", () => {
    let queue: ReturnType<typeof enhancedQueueRun>;

    beforeEach(() => {
        queue = enhancedQueueRun(3); // Устанавливаем максимальное количество одновременно исполняемых задач = 3
    });

    describe("enqueueAndRun", () => {
        test("Executes tasks immediately if workers are available", async () => {
            const mockTask = jest.fn(() => Promise.resolve("Task completed"));
            queue.enqueueAndRun(mockTask);

            await Promise.resolve(); // Дождаться выполнения всех тасков
            expect(mockTask).toHaveBeenCalled();
        });

        test("Enqueues tasks when all workers are busy", async () => {
            const mockTask = jest.fn(() => sleepAsync(100)); // Задача со временем выполнения

            for (let i = 0; i < 5; i++) {
                queue.enqueueAndRun(mockTask);
            }

            expect(queue.queueSize).toBe(2); // Две задачи остаются в очереди
        });

        test("Executes queued tasks as workers become available", async () => {
            const mockTask = jest.fn(() => sleepAsync(100));

            for (let i = 0; i < 5; i++) {
                queue.enqueueAndRun(mockTask);
            }

            jest.advanceTimersByTime(100); // Эмулируем завершение времени выполнения задач

            expect(mockTask).toHaveBeenCalledTimes(5); // Все задачи были выполнены
            expect(queue.queueSize).toBe(0); // Очередь задач пуста
        });
    });

    describe("runAll", () => {
        test("Executes all tasks and resolves when all are completed", async () => {
            const mockTask1 = jest.fn().mockResolvedValue("Task 1 completed");
            const mockTask2 = jest.fn().mockResolvedValue("Task 2 completed");
            const mockTask3 = jest.fn().mockResolvedValue("Task 3 completed");

            queue.enqueue(mockTask1);
            queue.enqueue(mockTask2);
            queue.enqueue(mockTask3);

            await queue.runAll();

            expect(mockTask1).toHaveBeenCalled();
            expect(mockTask2).toHaveBeenCalled();
            expect(mockTask3).toHaveBeenCalled();
        });

        test("Handles task failures gracefully", async () => {
            const failingTask = jest.fn(() => Promise.reject("Task failed"));
            const successfulTask = jest.fn(() => Promise.resolve("Task successful"));

            queue.enqueue(failingTask);
            queue.enqueue(successfulTask);

            const results = await queue.runAll();

            expect(failingTask).toHaveBeenCalled();
            expect(successfulTask).toHaveBeenCalled();

            expect(results).toHaveLength(3); // 3 worker threads
            expect(results.some((result) => result.status === "rejected")).toBe(true);
        });
    });

    describe("queueSize", () => {
        test("Returns the correct number of tasks in the queue", () => {
            const mockTask = jest.fn(() => Promise.resolve());

            queue.enqueue(mockTask);
            queue.enqueue(mockTask);

            expect(queue.queueSize).toBe(2);

            queue.enqueueAndRun(mockTask);
            expect(queue.queueSize).toBe(2); // Очередь задач не уменьшается до выполнения тасков
        });
    });
});