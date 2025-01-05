// tests/commonsServer.test.ts
import { CTestWeb, CreatAPIFacadeClient, CreatAPIFacadeServer, funcForWebSocket, funcPromiseServer } from '../../src/Common/commonsServer';
// tests/commonsServer.test.ts

describe('commonsServer Test Suite', () => {

    let socketMock: { emit: jest.Mock; on: jest.Mock };
    let testInstance: CTestWeb;

    beforeEach(() => {
        socketMock = {
            emit: jest.fn(),
            on: jest.fn()
        };

        testInstance = new CTestWeb();
    });

    /**
     * Тестируем CTestWeb
     */
    describe('CTestWeb Class', () => {
        test('func: simple addition', () => {
            expect(testInstance.func(2, 3)).toBe(5); // 2 + 3
        });

        test('func2: async multiplication', async () => {
            await expect(testInstance.func2(4, 5)).resolves.toBe(20); // 4 * 5
        });

        test('fun3: power operation', () => {
            expect(testInstance.fun3(2, 3)).toBe(8); // 2^3
        });

        test('test: string status', () => {
            expect(testInstance.test()).toBe("status ok");
        });
    });

    /**
     * Тестируем funcPromiseServer
     */
    describe('funcPromiseServer Function', () => {
        let mockApi: any;

        beforeEach(() => {
            mockApi = {
                sendMessage: jest.fn(),
                api: jest.fn(({ onMessage }: { onMessage: Function }) => {
                    mockApi.onMessage = onMessage;
                })
            };
        });

        test('call simple method via funcPromiseServer', async () => {
            funcPromiseServer(mockApi, testInstance);

            // Эмулируем вызов метода
            const request = {
                mapId: 42,
                data: {
                    key: ['func'], // Метод func
                    request: [7, 3] // Аргументы 7 и 3
                },
                wait: true
            };

            await mockApi.onMessage(request);

            expect(mockApi.sendMessage).toHaveBeenCalledWith({
                mapId: 42,
                data: 10 // 7 + 3 = 10
            });
        });

        test('call async method with funcPromiseServer', async () => {
            funcPromiseServer(mockApi, testInstance);

            const request = {
                mapId: 100,
                data: {
                    key: ['func2'], // Метод func2
                    request: [2, 5]
                },
                wait: true
            };

            await mockApi.onMessage(request);

            expect(mockApi.sendMessage).toHaveBeenCalledWith({
                mapId: 100,
                data: 10 // 2 * 5 = 10
            });
        });

        test('throw error for invalid method', async () => {
            funcPromiseServer(mockApi, testInstance);

            const invalidRequest = {
                mapId: 404,
                data: {
                    key: ['unknownMethod'], // Несуществующий метод
                    request: []
                },
                wait: true
            };

            await mockApi.onMessage(invalidRequest);

            expect(mockApi.sendMessage).toHaveBeenCalledWith({
                mapId: 404,
                error: expect.objectContaining({
                    error: expect.any(Error),
                    key: ['unknownMethod']
                })
            });
        });
    });

    /**
     * Тестируем funcForWebSocket
     */
    describe('funcForWebSocket Function', () => {
        let mockApi: any;

        beforeEach(() => {
            mockApi = {
                sendMessage: jest.fn(),
                api: jest.fn(({ onMessage }: { onMessage: Function }) => {
                    mockApi.onMessage = onMessage;
                })
            };
        });

        test('registers callbacks & controls lifecycle', async () => {
            const ws = funcForWebSocket<any>(mockApi);

            const request = {
                mapId: 1,
                data: {
                    key: ['func'],
                    request: [10, 20]
                }
            };

            // @ts-ignore
            ws.api.onMessage(request);

            expect(mockApi.sendMessage).toHaveBeenCalledWith({
                mapId: 1,
                data: expect.anything()
            });
        });

        test('handles free numbers for lifecycle', async () => {
            const ws = funcForWebSocket<any>(mockApi);

            const callbacks = [
                jest.fn(),
                jest.fn()
            ];

            ws.send({
                key: ['func'],
                request: [10, callbacks[0]]
            });

            ws.send({
                key: ['func2'],
                request: [30, callbacks[1]]
            });

            // @ts-ignore
            const ids = mockApi.sendMessage.mock.calls.map(call => call[0].mapId);
            // Mocked map IDs should be unique and sequential
            expect(ids).toEqual([1, 2]);
        });
    });

    /**
     * Тестируем CreatAPIFacadeClient & CreatAPIFacadeServer
     */
    describe('API Facade - Client & Server', () => {
        test('API Client: invokes method correctly', async () => {
            const apiClient = CreatAPIFacadeClient({
                socket: socketMock,
                socketKey: 'testClient'
            });

            socketMock.on.mockImplementation((event, callback) => {
                callback({
                    mapId: 1,
                    data: 15 // result of 10 + 5
                });
            });

            // @ts-ignore
            const result = await apiClient.func(10, 5);

            expect(socketMock.emit).toHaveBeenCalledWith(
                'testClient',
                expect.objectContaining({
                    data: {
                        key: ['func'],
                        request: [10, 5]
                    }
                })
            );
            expect(result).toBe(15);
        });

        test('API Server: strict key handling', async () => {
            const serverObject = { func: (a: number, b: number) => a + b };

            CreatAPIFacadeServer({
                object: serverObject,
                socket: socketMock,
                socketKey: 'testServer'
            });

            const mockEvent = { mapId: 1, data: { key: ['func'], request: [2, 3] } };

            socketMock.on.mock.calls[0][1](mockEvent);

            expect(socketMock.emit).toHaveBeenCalledWith(
                'testServer',
                expect.objectContaining({
                    mapId: 1,
                    data: 5 // 2 + 3 = 5
                })
            );
        });
    });
});