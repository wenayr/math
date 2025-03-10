// // -------------------------
// // ФЕЙКОВАЯ РЕАЛИЗАЦИЯ СОКЕТОВ
// // -------------------------
// // Предполагается, что функции createAPIFacadeClient и createAPIFacadeServer
// // уже определены (см. ранее приведённую реализацию).
// // Для демонстрации создадим пару фейковых сокетов, имитирующих bidirectional связь.
//
// import {createAPIFacadeClient, createAPIFacadeServer} from "./commonsServer4";
// import {sleepAsync} from "wenay-common";
//
// interface Socket {
//     emit: (event: string, payload: any) => any;
//     on: (event: string, callback: (data: any) => any) => any;
// }
//
// function createFakeSocketPair() {
//     const clientHandlers: { [event: string]: ((data: any) => void)[] } = {};
//     const serverHandlers: { [event: string]: ((data: any) => void)[] } = {};
//
//     const clientSocket: Socket = {
//         emit(event: string, data: any) {
//             setTimeout(() => {
//                 serverHandlers[event]?.forEach((cb) => cb(data));
//             }, 0);
//         },
//         on(event: string, cb: (data: any) => void) {
//             if (!clientHandlers[event]) clientHandlers[event] = [];
//             clientHandlers[event].push(cb);
//         },
//     };
//
//     const serverSocket: Socket = {
//         emit(event: string, data: any) {
//             setTimeout(() => {
//                 clientHandlers[event]?.forEach((cb) => cb(data));
//             }, 0);
//         },
//         on(event: string, cb: (data: any) => void) {
//             if (!serverHandlers[event]) serverHandlers[event] = [];
//             serverHandlers[event].push(cb);
//         },
//     };
//
//     return { clientSocket, serverSocket };
// }
//
// // -------------------------
// // ОПРЕДЕЛЕНИЕ API
// // -------------------------
// const tr2 = {
//     a: async (f :(a: number) => any) => {
//         for (let i = 0; i < 10; i++) {
//             f(i)
//             await sleepAsync(50)
//         }
//     }
// }
// // Реализация API на сервере
// const tr = new Proxy(tr2 as any, {
//     get: (target, prop) => {
//         console.log(prop)
//         return {a: tr2.a}
//     },
// });
//
// const serverAPI = {
//     v: tr as any,
//     add: (a: number, b: number) => a + b,
//     greet: (name: string) => `Привет, ${name}!`,
//     async callback1(callback: (a: number)=>void) {
//         for (let i = 0; i < 50; i++) {
//             await sleepAsync(150)
//             callback(i)
//         }
//     },
//     async callback2(callback: (a: number)=>void) {
//         for (let i = 0; i < 50; i++) {
//             await sleepAsync(200)
//             callback(i * 10)
//         }
//     },
//     ma: {
//         ma: {
//             ma: {
//                 ap1: () => "dsds1",
//                 ap2: () => "dsds2",
//                 ap3: () => "dsds3",
//             }
//         }
//     }
// };
//
// type API = typeof serverAPI;
//
// // -------------------------
// // ИНИЦИАЛИЗАЦИЯ СОКЕТОВ И ФАСАДОВ
// // -------------------------
// const { clientSocket, serverSocket } = createFakeSocketPair();
//
// // Инициализируем серверную часть API фасада.
// // Передаём сокет, объект API, ключ канала и debug-флаг для отладки.
// createAPIFacadeServer<API>({
//     socket: serverSocket,
//     object: serverAPI,
//     socketKey: "testKey",
//     debug: false,
// });
//
// // Инициализируем клиентскую часть API фасада.
// // Функция createAPIFacadeClient возвращает объект с несколькими свойствами:
// // all – для стандартного вызова с ожиданием результата,
// // space – для вызова методов, не возвращающих значение (void),
// // strict – для строгого доступа, и дополнительные методы.
// const cli = createAPIFacadeClient<API>({
//     socket: clientSocket,
//     socketKey: "testKey",
//     limit: 10,
// });
//
// // -------------------------
// // ПРИМЕР ВЫЗОВОВ API
// // -------------------------
// async function runExample() {
//     try {
//
//         await cli.strictInit()
//             .then(e=>{
//                 console.log(e)
//             })
//
//         const a = cli.strict.ma.ma.ma
//
//         console.log(Object.keys(a));
//
//         // @ts-ignore
//         cli.all.v["hi"].a(e=>{
//             console.log(e)
//         })
//
//         // @ts-ignore
//         cli.all.v["hi2"].a(e=>{
//             console.log(e+100)
//         })
//
//         // // Вызов метода, возвращающего число
//         // cli.all.add(5, 7)
//         //     .then(e=>{
//         //         console.log(e)
//         //     })
//         //
//         // cli.all.greet("Мир")
//         //     .then(e=>{
//         //         console.log(e)
//         //     })
//         //
//         // cli.all.greet("Это тестовый лог")
//         //     .then(e=>{
//         //         console.log(e)
//         //     })
//         //
//         // const a= cli.all
//         //
//         // a.greet("dsds")
//         //     .then(e=>{
//         //         console.log(e)
//         //     })
//         //
//         // a.callback1(e=>{
//         //     console.log(e)
//         // })
//         // a.callback2(e=>{
//         //     console.log(e)
//         // })
//         //
//         // const b = cli.all.greet
//         //
//         // b("dsds")
//         //     .then(e=>{
//         //         console.log(e)
//         //     })
//         //
//         //
//
//
//         // @ts-ignore
//         // const tr = cli.strict.add2?.("")
//         // console.log(tr)
//
//
//     } catch (error) {
//         console.error("Ошибка API:", error);
//     }
// }
//
// runExample();
