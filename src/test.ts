// import {sleepAsync} from "wenay-common";
// import {funcListenCallbackSnapshot} from "./Common/Listen";
//
// async function testSocketBufferBySnapshot() {
//     type element = number
//     type obj = {[k: string]: element}
//
//     function snapshot() {
//         return {
//             a: 3,
//             b: 4,
//             c: 10
//         }
//     }
//
//     function tt(a: number, key: string, time: 10000) {
//         const [startTime, endTime] = [Date.now(), Date.now() + time]
//         return ({callback}: {callback: (obj: obj) => any}) => {
//             let t = true
//             async function re() {
//                 const step = Math.round((Math.random()) * 500)
//                 await sleepAsync(step)
//                 a += Math.round((Math.random() - 0.5) * 100)
//                 callback({[key]: a})
//                 if (Date.now() < endTime && t) return re()
//             }
//             re()
//             return ()=> {
//                 console.log("tttt")
//                 t = false}
//         }
//     }
//
//     const memo = {} as obj
//     const c1 = tt(5, "a", 10000)
//     const test = funcListenCallbackSnapshot({
//         func: () => c1,
//         memo: ()=> memo,
//         callbackSave: (data, memo1) => {
//             Object.entries(data).forEach(([key, value]) => memo[key] = value);
//             return [data, memo1] as const
//         },
//         snapshot: (memo) => {
//             const m = memo()
//             Object.entries(snapshot()).forEach(([key, value]) => m[key] = value)
//             return m
//         }
//     })
//     test.snapshot()
//     console.log(test.memo);
//     const t = test.run((a, m) => {
//         // console.log(a, m)
//     })
//     const t1 = test.run((a, m) => {
//         // console.log(a, m)
//     })
//
//     sleepAsync(2000)
//         .then(()=> {t();
//             console.log("stop t")})
//
//     sleepAsync(3000)
//         .then(()=> {t1();
//             console.log("stop t")})
//     console.time("12")
//
//     for (let i = 0; i < 5000; i++) {
//         if (i%10 == 0) await sleepAsync(0)
//     }
//     console.timeEnd("12")
// }
//
// testSocketBufferBySnapshot()