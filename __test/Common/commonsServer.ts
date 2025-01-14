// tests/commonsServer.test.ts
import { CTestWeb, CreatAPIFacadeClient, CreatAPIFacadeServer, funcForWebSocket, funcPromiseServer,
    funcScreenerClient2,
    screenerSoc2, tRequestScreenerT } from '../../src/Common/commonsServer';
// tests/commonsServer.test.ts


// describe("funcPromiseServer", () => {
//     // Мокаем наш объект c функциями
//     const mockObject = {
//         sum(a: number, b: number) {
//             return a + b;
//         },
//         nested: {
//             mult(a: number, b: number) {
//                 return a * b;
//             },
//         },
//     };
//
//     // Мокаем механизм screenerSoc: sendMessage и api
//     let mockSendMessage: jest.Mock;
//     let onMessageCallback: ((data: any) => void) | undefined;
//
//     beforeEach(() => {
//         mockSendMessage = jest.fn();
//         onMessageCallback = undefined;
//     });
//
//     function createMockScreenerSoc() {
//         return {
//             sendMessage: mockSendMessage,
//             api: ({ onMessage }: { onMessage: (data: any) => void }) => {
//                 // Сохраняем ссылку, чтобы потом вручную вызывать onMessage
//                 onMessageCallback = onMessage;
//             },
//         };
//     }
//
//     it("должен корректно вызывать функцию в корне объекта", async () => {
//         // Создаём серверную часть
//         funcPromiseServer(createMockScreenerSoc(), mockObject);
//
//         // Допустим, пришёл запрос вызвать метод sum(2,3)
//         const incomingData: tRequestScreenerT<typeof mockObject> = {
//             key: ["sum"],
//             request: [2, 3],
//         };
//
//         // "Эмулируем" событие прихода сообщения на сервер
//         onMessageCallback?.({
//             mapId: 100,
//             data: incomingData,
//             wait: true,
//         });
//
//         // Проверяем, что отправка результата была
//         expect(mockSendMessage).toHaveBeenCalledWith({
//             mapId: 100,
//             data: 5, // 2 + 3
//         });
//     });
//
//     it("должен корректно вызывать вложенную функцию nested.mult", async () => {
//         funcPromiseServer(createMockScreenerSoc(), mockObject);
//
//         const incomingData: tRequestScreenerT<typeof mockObject> = {
//             key: ["nested", "mult"],
//             request: [4, 5],
//         };
//
//         onMessageCallback?.({
//             mapId: 1,
//             data: incomingData,
//             wait: true,
//         });
//
//         expect(mockSendMessage).toHaveBeenCalledWith({
//             mapId: 1,
//             data: 20, // 4 * 5
//         });
//     });
//
//     it("должен отсылать ошибку, если метод не найден", async () => {
//         funcPromiseServer(createMockScreenerSoc(), mockObject);
//
//         const incomingData: tRequestScreenerT<typeof mockObject> = {
//             key: ["nonExistingMethod"],
//             request: [],
//         };
//
//         onMessageCallback?.({
//             mapId: 999,
//             data: incomingData,
//             wait: true,
//         });
//
//         expect(mockSendMessage).toHaveBeenCalledWith({
//             mapId: 999,
//             error: JSON.stringify({
//                 data: "это не функция",
//                 key: ["nonExistingMethod"],
//                 arguments: [],
//             }),
//         });
//     });
// });

type tSocketData<T> = ({data: T, error?: undefined} | {error: any, data?: undefined}) & {
    mapId: number,
    wait?: boolean,
    callbacksId?: number[]
}
describe("funcForWebSocket", () => {
    let mockSendMessage: jest.Mock;
    let onMessageCallback: (data: tSocketData<any>) => void;
    beforeEach(() => {
        mockSendMessage = jest.fn();
        onMessageCallback = () => {};
    });

    function createMockScreenerSoc() {
        return {
            sendMessage: mockSendMessage,
            api: ({ onMessage }: { onMessage: (data: any) => void }) => {
                onMessageCallback = onMessage;
            },
        };
    }

    it("должен возвращать промис с результатом, когда приходит data", async () => {
        const mockSoc = createMockScreenerSoc();
        const wrapper = funcForWebSocket<any>({
            ...mockSoc,
        });

        // Отправляем запрос (клиент делает вызов)
        const promise = wrapper.send({
            key: ["test"],
            request: [1, 2],
        });

        // Проверяем, что сообщение ушло (sendMessage было вызвано)
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        // Берём mapId, сгенерированный внутри
        const { mapId } = mockSendMessage.mock.calls[0][0];

        // Эмулируем, что «сервер» прислал ответ
        onMessageCallback({
            mapId,
            data: 123,
        });

        // Проверяем, что промис вернул ожидаемое значение
        await expect(promise).resolves.toBe(123);
    });

    it("должен обрабатывать ошибку при возврате error", async () => {
        const mockSoc = createMockScreenerSoc();
        const wrapper = funcForWebSocket<any>(mockSoc);

        const promise = wrapper.send({
            key: ["boom"],
            request: [],
        });

        const { mapId } = mockSendMessage.mock.calls[0][0];

        onMessageCallback({
            mapId,
            error: "Some server error",
        });

        await expect(promise).rejects.toBe("Some server error");
    });

    it("должен корректно привязывать колбэки callbackMany", async () => {
        const mockSoc = createMockScreenerSoc();
        const wrapper = funcForWebSocket<any>(mockSoc);

        const mockFn = jest.fn();
        wrapper.send(
            { key: ["subscribe"], request: [] },
            true,
            [mockFn] // callbacksId
        );

        // Первое сообщение с request уходит
        const sendObj = mockSendMessage.mock.calls[0][0];
        const { mapId, callbacksId } = sendObj;

        // Проверяем, что есть какие-то callbacksId
        expect(callbacksId).toHaveLength(1);

        // Эмулируем, что сервер присылает данные на callback
        onMessageCallback({
            mapId: callbacksId[0], // специальный mapId для callback
            data: "hello callback",
        });

        // Колбэк должен вызваться
        expect(mockFn).toHaveBeenCalledWith("hello callback");
    });
});


describe("CreatAPIFacadeServer", () => {
    it("должен вызывать funcPromiseServer и отвечать на '___STRICTLY'", () => {
        const mockObj = {
            test: () => "hello",
        };
        const mockSocket = {
            emit: jest.fn(),
            on: jest.fn(),
        };
        const socketKey = "someKey";
        CreatAPIFacadeServer({
            object: mockObj,
            socket: mockSocket,
            socketKey,
        });
        // Проверяем, что повесилась подписка
        expect(mockSocket.on).toHaveBeenCalledWith(socketKey, expect.any(Function));

        // Эмулируем вызов "___STRICTLY"
        const onCallback = mockSocket.on.mock.calls[0][1];
        onCallback("___STRICTLY");
        expect(mockSocket.emit).toHaveBeenCalledWith(
            socketKey,
            expect.objectContaining({
                STRICTLY: {
                    // test → "func"
                    test: "func",
                },
            })
        );
    });
});

describe("CreatAPIFacadeClient", () => {
    it("должен создавать объекты func, space, strictly, all", async () => {
        const mockSocket = {
            emit: jest.fn(),
            on: jest.fn(),
        };
        const facade = CreatAPIFacadeClient({
            socket: mockSocket,
            socketKey: "someKey",
        });

        // Проверяем, что имеются нужные поля
        expect(facade.func).toBeDefined();
        expect(facade.space).toBeDefined();
        expect(facade.strictly).toBeDefined();
        expect(facade.all).toBeDefined();

        // Пробуем вызвать strictlyInit без объекта
        const promise = facade.strictlyInit();
        // Эмулируем ответ от сервера c STRICTLY
        const onCallback = mockSocket.on.mock.calls[0][1];
        onCallback({
            STRICTLY: { hello: "func" },
        });
        await expect(promise).resolves.toBeUndefined();

        // Проверяем, что у нас записалось
        expect(facade.infoStrictly()).toEqual({ hello: "func" });
    });
});
// describe("funcScreenerClient2", () => {
//     it("должен сформировать правильный key и request", async () => {
//         // Мокаем screenerSoc2<T>
//         const mockSend = jest.fn().mockResolvedValue("OK");
//
//         const data: screenerSoc2<any> = {
//             send: mockSend,
//             api: {
//                 log: () => {},
//                 promiseTotal: () => 0,
//                 callbackTotal: () => 0,
//                 promiseDeleteAll: () => {},
//                 callbackDeleteAll: () => {},
//                 callbackDelete: () => {},
//             },
//         };
//
//         const proxy = funcScreenerClient2<any>(data);
//         const result = await proxy.user.login("name", "pass");
//
//         expect(mockSend).toHaveBeenCalledTimes(1);
//         const callArg: tRequestScreenerT<any> = mockSend.mock.calls[0][0];
//         expect(callArg.key).toEqual(["user", "login"]);
//         expect(callArg.request).toEqual(["name", "pass"]);
//         expect(result).toBe("OK");
//     });
//
//     it("должен заменять колбэки на ___FUNC", async () => {
//         const mockSend = jest.fn().mockResolvedValue("CALLBACK OK");
//         const data: screenerSoc2<any> = {
//             send: mockSend,
//             api: {
//                 log: () => {},
//                 promiseTotal: () => 0,
//                 callbackTotal: () => 0,
//                 promiseDeleteAll: () => {},
//                 callbackDeleteAll: () => {},
//                 callbackDelete: () => {},
//             },
//         };
//
//         const proxy = funcScreenerClient2<any>(data);
//
//         const cb1 = () => {};
//         const cb2 = (x: any) => console.log(x);
//
//         const res = await proxy.someMethod(cb1, 123, cb2);
//
//         expect(res).toBe("CALLBACK OK");
//         const callArg = mockSend.mock.calls[0][0];
//         // Проверяем замену колбэков
//         expect(callArg.request).toEqual(["___FUNC", 123, "___FUNC"]);
//     });
// });




// describe('commonsServer Test Suite', () => {
//
//     let socketMock: { emit: jest.Mock; on: jest.Mock };
//     let testInstance: CTestWeb;
//
//     beforeEach(() => {
//         socketMock = {
//             emit: jest.fn(),
//             on: jest.fn()
//         };
//
//         testInstance = new CTestWeb();
//     });
//
//     /**
//      * Тестируем CTestWeb
//      */
//     describe('CTestWeb Class', () => {
//         test('func: simple addition', () => {
//             expect(testInstance.func(2, 3)).toBe(5); // 2 + 3
//         });
//
//         test('func2: async multiplication', async () => {
//             await expect(testInstance.func2(4, 5)).resolves.toBe(20); // 4 * 5
//         });
//
//         test('fun3: power operation', () => {
//             expect(testInstance.fun3(2, 3)).toBe(8); // 2^3
//         });
//
//         test('test: string status', () => {
//             expect(testInstance.test()).toBe("status ok");
//         });
//     });
//
//     /**
//      * Тестируем funcPromiseServer
//      */
//     describe('funcPromiseServer Function', () => {
//         let mockApi: any;
//
//         beforeEach(() => {
//             mockApi = {
//                 sendMessage: jest.fn(),
//                 api: jest.fn(({ onMessage }: { onMessage: Function }) => {
//                     mockApi.onMessage = onMessage;
//                 })
//             };
//         });
//
//         test('call simple method via funcPromiseServer', async () => {
//             funcPromiseServer(mockApi, testInstance);
//
//             // Эмулируем вызов метода
//             const request = {
//                 mapId: 42,
//                 data: {
//                     key: ['func'], // Метод func
//                     request: [7, 3] // Аргументы 7 и 3
//                 },
//                 wait: true
//             };
//
//             await mockApi.onMessage(request);
//
//             expect(mockApi.sendMessage).toHaveBeenCalledWith({
//                 mapId: 42,
//                 data: 10 // 7 + 3 = 10
//             });
//         });
//
//         test('call async method with funcPromiseServer', async () => {
//             funcPromiseServer(mockApi, testInstance);
//
//             const request = {
//                 mapId: 100,
//                 data: {
//                     key: ['func2'], // Метод func2
//                     request: [2, 5]
//                 },
//                 wait: true
//             };
//
//             await mockApi.onMessage(request);
//
//             expect(mockApi.sendMessage).toHaveBeenCalledWith({
//                 mapId: 100,
//                 data: 10 // 2 * 5 = 10
//             });
//         });
//
//         test('throw error for invalid method', async () => {
//             funcPromiseServer(mockApi, testInstance);
//
//             const invalidRequest = {
//                 mapId: 404,
//                 data: {
//                     key: ['unknownMethod'], // Несуществующий метод
//                     request: []
//                 },
//                 wait: true
//             };
//
//             await mockApi.onMessage(invalidRequest);
//
//             expect(mockApi.sendMessage).toHaveBeenCalledWith({
//                 mapId: 404,
//                 error: expect.objectContaining({
//                     error: expect.any(Error),
//                     key: ['unknownMethod']
//                 })
//             });
//         });
//     });
//
//     /**
//      * Тестируем funcForWebSocket
//      */
//     describe('funcForWebSocket Function', () => {
//         let mockApi: any;
//
//         beforeEach(() => {
//             mockApi = {
//                 sendMessage: jest.fn(),
//                 api: jest.fn(({ onMessage }: { onMessage: Function }) => {
//                     mockApi.onMessage = onMessage;
//                 })
//             };
//         });
//
//         test('registers callbacks & controls lifecycle', async () => {
//             const ws = funcForWebSocket<any>(mockApi);
//
//             const request = {
//                 mapId: 1,
//                 data: {
//                     key: ['func'],
//                     request: [10, 20]
//                 }
//             };
//
//             // @ts-ignore
//             ws.api.onMessage(request);
//
//             expect(mockApi.sendMessage).toHaveBeenCalledWith({
//                 mapId: 1,
//                 data: expect.anything()
//             });
//         });
//
//         test('handles free numbers for lifecycle', async () => {
//             const ws = funcForWebSocket<any>(mockApi);
//
//             const callbacks = [
//                 jest.fn(),
//                 jest.fn()
//             ];
//
//             ws.send({
//                 key: ['func'],
//                 request: [10, callbacks[0]]
//             });
//
//             ws.send({
//                 key: ['func2'],
//                 request: [30, callbacks[1]]
//             });
//
//             // @ts-ignore
//             const ids = mockApi.sendMessage.mock.calls.map(call => call[0].mapId);
//             // Mocked map IDs should be unique and sequential
//             expect(ids).toEqual([1, 2]);
//         });
//     });
//
//     /**
//      * Тестируем CreatAPIFacadeClient & CreatAPIFacadeServer
//      */
//     describe('API Facade - Client & Server', () => {
//         test('API Client: invokes method correctly', async () => {
//             const apiClient = CreatAPIFacadeClient({
//                 socket: socketMock,
//                 socketKey: 'testClient'
//             });
//
//             socketMock.on.mockImplementation((event, callback) => {
//                 callback({
//                     mapId: 1,
//                     data: 15 // result of 10 + 5
//                 });
//             });
//
//             // @ts-ignore
//             const result = await apiClient.func(10, 5);
//
//             expect(socketMock.emit).toHaveBeenCalledWith(
//                 'testClient',
//                 expect.objectContaining({
//                     data: {
//                         key: ['func'],
//                         request: [10, 5]
//                     }
//                 })
//             );
//             expect(result).toBe(15);
//         });
//
//         test('API Server: strict key handling', async () => {
//             const serverObject = { func: (a: number, b: number) => a + b };
//
//             CreatAPIFacadeServer({
//                 object: serverObject,
//                 socket: socketMock,
//                 socketKey: 'testServer'
//             });
//
//             const mockEvent = { mapId: 1, data: { key: ['func'], request: [2, 3] } };
//
//             socketMock.on.mock.calls[0][1](mockEvent);
//
//             expect(socketMock.emit).toHaveBeenCalledWith(
//                 'testServer',
//                 expect.objectContaining({
//                     mapId: 1,
//                     data: 5 // 2 + 3 = 5
//                 })
//             );
//         });
//     });
// });