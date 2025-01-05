import {BSearch} from "./common";

// export type tApiKey = string
// type tType = 'UID' | 'IP' | tApiKey
// type tWeight = number
// type tTime = number
// type tFunc = {timeStamp?: number, type: tType, weight: number}
//
//
// export function funcTimeW() {
//     type tt1 = [tTime, tWeight] /// as const
//     type ttt = {[key: tType]: tt1[] }
//     const dStatic: ttt = {}
//     // const dd: {[key: tType]: ttt} = {}
//     const data: any[] = []
//     return {
//         dStatic,
//         data: data,
//         // записывает время в массив
//         add(data: tFunc) {
//             if (!dStatic[ data.type ]) dStatic[ data.type ] = [];
//             if (dStatic[ data.type ]) dStatic[ data.type ]?.push([ data.timeStamp ?? Date.now(), data.weight]);
//             // (d[data.type] ??= []).push([data.timeStamp ?? Date.now(), data.weight]) /// TODO: не уверен в корректности работы d[data.type] ??= [], но проверить
//         },
//         cleanByTime(type: tType, ms = 60*1000){
//             const [arr, timeStamp] = [ dStatic[ type ], Date.now() as tWeight]
//             if (arr[0][0] > timeStamp - ms) {
//                 return;
//             }
//             // const p = BSearch(arr,timeStamp - ms, (a,b)=>b-a[0], "lessOrEqual")/// TODO: вернуть
//             // arr.splice(0,p) /// TODO: вернуть
//
//         },
//         // возвращает сумму веса за период времени мс
//         weight(type: tType, ms = 60*1000) {
//             if (!dStatic[ type ]) return 0
//             const [arr, timeStamp] = [ dStatic[ type ], Date.now() as tWeight]
//
//             let [sum, i] = [0, arr.length - 1];
//             for (; i >= 0; i--) {
//                 const [_time, _weight]: tt1 = arr[i]
//                 if (_time < timeStamp - ms) break
//                 sum += _weight
//             }
//             arr.splice(0,i)
//             return sum
//         },
//         weightNow(type: tType, ms = 60*1000) {
//             if (!dStatic[ type ]) return 0
//             const [arr, timeStamp] = [ dStatic[ type ], Date.now() as tWeight]
//             let [sum, i] = [0, arr.length - 1];
//
//             for (; i >= 0; i--) {
//                 if (arr[i][0] <= timeStamp) break
//             }
//
//
//             for (; i >= 0; i--) {
//                 const [_time, _weight]: tt1 = arr[i]
//                 if (_time < timeStamp - ms) break
//                 sum += _weight
//             }
//             arr.splice(0,i)
//             return sum
//         },
//         // // возвращает сумму веса за период времени мс
//         // weightStatic(type: tType, wight: number, maxWight: number, ms = 60*1000) {
//         //     if (!dStatic[ type ]) return 0
//         //     const [arr, timeStamp] = [ dStatic[ type ], Date.now() as tWeight]
//         //     let [sum, i] = [0, arr.length - 1];
//         //     for (; i >= 0; i--) {
//         //         const [_time, _weight]: tt1 = arr[i]
//         //         if (_time < timeStamp - ms) break
//         //         sum += _weight
//         //     }
//         //     arr.splice(0,i)
//         //     return sum
//         // },
//         // возвращает время (дату/число)
//         byWeight(type: tType, weight = 50000) {
//             if (!dStatic[ type ]) return 0
//             const [arr, timeStamp] = [ dStatic[ type ], Date.now()]
//             let [sum, i] = [0, arr.length - 1];
//             let result =0
//             for (; i >= 0; i--) {
//                 sum += arr[i][1]
//                 if (sum > weight) {
//                     result = arr[i + 1][0] ?? 0
//                     break;
//                 }
//             }
//             if (i>800) arr.splice(0,i-800)
//             return result
//         },
//         byWeightTimeNow(type: tType, timeNow = Date.now(), weight = 50000) {
//             if (!dStatic[ type ]) return 0
//             const [arr, timeStamp] = [ dStatic[ type ], Date.now()]
//             let [sum, i] = [0, arr.length - 1];
//
//             for (; i >= 0; i--) {
//                 if (arr[i][0] <= timeNow) break
//             }
//
//             let result =0
//             for (; i >= 0; i--) {
//                 sum += arr[i][1]
//                 if (sum > weight) {
//                     result = arr[i + 1][0] ?? 0
//                     break;
//                 }
//             }
//             if (i>800) arr.splice(0,i-800)
//             return result
//         },
//     }
// }
export type tApiKey = string;
type tType = "UID" | "IP" | tApiKey;
type tWeight = number;
type tTime = number;
type tFunc = {
    timeStamp?: number;
    type: tType;
    weight: number;
};

export function funcTimeW() {
    type tt1 = [tTime, tWeight];
    type ttt = { [key: tType]: tt1[] };
    const dStatic: ttt = {};
    const data: any[] = [];

    return {
        dStatic,
        data,

        // Записывает время в массив
        add(item: tFunc) {
            if (!dStatic[item.type]) {
                dStatic[item.type] = [];
            }
            dStatic[item.type].push([item.timeStamp ?? Date.now(), item.weight]);
        },

        cleanByTime(type: tType, ms = 60 * 1000) {
            const arr = dStatic[type];
            if (!arr || arr.length === 0) return;

            const timeStamp = Date.now();
            // Если самое "старое" событие всё ещё новее, чем (timeStamp - ms),
            // то чистить нечего:
            if (arr[0][0] > timeStamp - ms) return;

            // Здесь можно использовать бинарный поиск, если нужно оптимизировать,
            // но пока просто пример "лобового" подхода:
            // const p = BSearch(...);
            // arr.splice(0, p);

            // Или, если хотим "вручную" почистить:
            let cutIndex = 0;
            while (cutIndex < arr.length && arr[cutIndex][0] < timeStamp - ms) {
                cutIndex++;
            }
            if (cutIndex > 0) {
                arr.splice(0, cutIndex);
            }
        },

        // Возвращает сумму веса за период времени (ms)
        weight(type: tType, ms = 60 * 1000) {
            const arr = dStatic[type];
            if (!arr || arr.length === 0) return 0;

            const timeStamp = Date.now();
            let sum = 0;
            let i = arr.length - 1;

            // Считаем вес "с конца", пока не встретим более старое время
            for (; i >= 0; i--) {
                const [_time, _weight] = arr[i];
                if (_time < timeStamp - ms) break;
                sum += _weight;
            }

            // Очищаем "хвост", который уже гарантированно старее (timeStamp - ms)
            // чтобы массив не рос бесконтрольно
            if (i >= 0) {
                arr.splice(0, i);
            }
            return sum;
        },

        // Аналогично, но «сейчас» (возможно, хотели слегка другой смысл?)
        weightNow(type: tType, ms = 60 * 1000) {
            const arr = dStatic[type];
            if (!arr || arr.length === 0) return 0;

            const timeStamp = Date.now();
            let sum = 0;
            let i = arr.length - 1;

            // Идём от конца массива к началу, ищем последнюю точку <= timeStamp
            // for (; i >= 0; i--) {
            //     if (arr[i][0] <= timeStamp) {
            //         break;
            //     }
            // }
            // // Теперь, если i < 0, значит все timestamp > текущего — нет смысла считать
            // if (i < 0) return 0;

            // Продолжаем идти назад, суммируя, пока не выйдем за интервал (ms)
            for (; i >= 0; i--) {
                const [_time, _weight] = arr[i];
                if (_time < timeStamp - ms) break;
                sum += _weight;
            }

            // Спиливаем старые события
            if (i >= 0) {
                arr.splice(0, i);
            }
            return sum;
        },

        // Возвращает timestamp, когда сумма весов превысила weight
        byWeight(type: tType, weight = 50000) {
            const arr = dStatic[type];
            if (!arr || arr.length === 0) return 0;

            let sum = 0;
            let i = arr.length - 1;
            let result = 0;

            for (; i >= 0; i--) {
                sum += arr[i][1];
                if (sum > weight) {
                    // Проверяем, не выйдем ли за границы при i+1
                    result = arr[i + 1]?.[0] ?? 0;
                    break;
                }
            }
            // Чтобы массив не разрастался слишком сильно, можно «подчищать»
            if (i > 800) {
                arr.splice(0, i - 800);
            }
            return result;
        },

        // То же самое, только с «промежуточным» timeNow
        byWeightTimeNow(type: tType, timeNow = Date.now(), weight = 50000) {
            const arr = dStatic[type];
            if (!arr || arr.length === 0) return 0;

            let sum = 0;
            let i = arr.length - 1;

            // Сначала «отматываем» массив до timeNow
            for (; i >= 0; i--) {
                if (arr[i][0] <= timeNow) break;
            }
            if (i < 0) return 0;

            let result = 0;
            for (; i >= 0; i--) {
                sum += arr[i][1];
                if (sum > weight) {
                    result = arr[i + 1]?.[0] ?? 0;
                    break;
                }
            }
            if (i > 800) {
                arr.splice(0, i - 800);
            }
            return result;
        },
    };
}


// Массив для хранения времени ожидания у асинхронных функций
export const FuncTimeWait = funcTimeW()