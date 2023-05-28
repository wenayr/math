import {FuncTimeWait} from "./Common/funcTimeWait";


export * from "./index";
export * from "./Exchange/ConnectData/Binance";
export * from "./Exchange/ConnectData/Binance/use";
export * from "./Exchange/ConnectData/Binance/BinanceLib/spot";

//
// function FFF(api: object) {
//     const t = <{[k:string]: number}>{}
//     const timeMs = 100000 // временной лимит
//     const max = 2000 // весовой лимит
//
//     return new Proxy(api, {
//         get(target: object, p: string | symbol, receiver: any): any {
//             const key = String(p)
//
//             return async (...argArray:any)=>{
//                 const wight =  100
//
//                 const now = FuncTimeWait.weight(key, timeMs) //возвращает собранный вес за период
//                 if (now + wight > max) {
//                     // превышен предел после этого запроса
//                     throw {wait: max - now + wight}// надо придумать стандарт ошибки, по идее расчетное время ожидания
//                 }
//
//                 FuncTimeWait.add({weight: wight, type: key})
//
//                 // @ts-ignore
//                 target[p]?.(argArray)
//             }
//         }
//     })
// }
//
// function FFF2(api: object) {
//     const t = <{[k:string]: number}>{}
//     const timeMs = 100000 // временной лимит
//     const max = 2000 // весовой лимит
//
//     return new Proxy(api, {
//         get(target: object, p: string | symbol, receiver: any): any {
//             const key = String(p)
//
//             return async (...argArray:any)=>{
//                 const wight =  100
//
//                 const now = FuncTimeWait.weight(key, timeMs) //возвращает собранный вес за период
//                 if (now + wight > max) {
//                     // превышен предел после этого запроса
//                     throw {wait: max - now + wight}// надо придумать стандарт ошибки, по идее расчетное время ожидания
//                 }
//
//                 FuncTimeWait.add({weight: wight, type: key})
//
//                 // @ts-ignore
//                 target[p]?.(argArray)
//             }
//         }
//     })
// }
//
//
//
// //
// //
// // function primer() {
// //     const api = {}
// //     const newApi = FFF(api) as unknown as typeof api
// // }
// //
// //
// // export type tFF =  {type: "IP" | "UID" | string, wight: number, timeMs: number, max: number}
// //
// // function BinanceFuncConvert3(data: BinanceSpot.BinanceDataFunc, input: tFtt) {
// //     let tt = data as unknown as {[key : string] : any;}
// //     for (let key in data) {
// //         const a = data[key]
// //         if (typeof a == "function") {
// //             const buf = a(input)
// //             tt[key] = helper4(buf, "function")
// //         }
// //     }
// //     return tt as Simple22<BinanceSpot.BinanceDataFunc>
// // }
// //
// //
// //
// //
// // type tt44<key extends keyof T, T> = T extends { [key in string]: ((...args: infer Z) => infer X) } ? (...args: Z) => X : T[key]//T extends {[key in string]: infer X}? X : any
// // const helper4 = <T extends ({ wight: spaceBinance.tFF|spaceBinance.tFF[], function: (...a: any) => Promise<any> } & object), key extends keyof T>(obj: T, k: key) => {
// //     const t = obj[k] as tt44<key, T>
// //     if (typeof t == "function") {
// //         return ((...a: any[]) => {
// //             // проверка на очередь
// //             const wight = obj.wight
// //
// //             const func = (wight: spaceBinance.tFF) => {
// //                 const now = FuncTimeWait.weight(wight.type, wight.timeMs)
// //                 if (now + wight.wight > wight.max) {
// //                     // превышен предел после этого запроса
// //                     throw {wait: wight.max - now + wight.wight}// надо придумать стандарт ошибки
// //                 }
// //                 FuncTimeWait.add({weight: wight.wight, type: wight.type})
// //             }
// //
// //             if (wight) {
// //                 const arr = Array.isArray(wight) ? wight : [wight]
// //                 arr.forEach(e=>func(e))
// //             }
// //
// //             return t(...a)
// //         }) as tt44<key, T>
// //     }
// //     return t as tt44<key, T>
// // }
// //
// //
// // // Массив для хранения времени ожидания у асинхронных функций
// //
// // /*
// // *
// // // * export function funcScreenerClient2<T extends object>(data: screenerSoc2<T>) {
// // //     return new Proxy({} as unknown as tMethodToPromise2<T> , {
// // //         get(target: tMethodToPromise2<T>, p: string | symbol, receiver: any): any {
// // //             const key = String(p) as keyof T
// // //             return async (...argArray:any)=> data.send({key, request: argArray})
// // //         }
// // //     })
// // // }
// // // * */