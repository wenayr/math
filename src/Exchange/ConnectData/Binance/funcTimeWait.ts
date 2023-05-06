
export type tApiKey = string
type tType = 'UID' | 'IP' | tApiKey
type tWeight = number
type tTime = number
type tFunc = {timeStamp?: number, type: tType, weight: number}



export function funcTimeW() {
    type tt1 = [tTime, tWeight] /// as const
    type ttt = {[key: tType]: tt1[] }

    // const dd: {[key: tType]: ttt} = {}
    const d: ttt = {} as const
    const data: any[] = []
    return {
        data: data,
        // записывает время в массив
        add(data: tFunc) {
            (d[data.type] ??= []).push([data.timeStamp ?? Date.now(), data.weight]) /// TODO: не уверен в корректности работы d[data.type] ??= [], но проверить
        },
        cleanByTime(type: tType, ms = 60*1000){
            const [arr, timeStamp] = [d[type], Date.now() as tWeight]
            if (arr[0][0] > timeStamp - ms) {
                return;
            }
            // const p = BSearch(arr,timeStamp - ms, (a,b)=>b-a[0], "lessOrEqual")/// TODO: вернуть
            // arr.splice(0,p) /// TODO: вернуть

        },
        // возвращает сумму веса за период времени мс
        weight(type: tType, ms = 60*1000) {
            const [arr, timeStamp] = [d[type], Date.now() as tWeight]
            let [sum, i] = [0, arr.length - 1];
            for (; i >= 0; i--) {
                const [_time, _weight]: tt1 = arr[i]
                if (_time < timeStamp - ms) break
                sum += _weight
            }
            arr.splice(0,i)
            return sum
        },
        // возвращает время (дату/число)
        byWeight(type: tType, weight = 50000) {
            const [arr, timeStamp] = [d[type], Date.now()]
            let [sum, i] = [0, arr.length - 1];
            for (; i >= 0; i--) {
                sum += arr[i][1]
                if (sum > weight) return arr[i+1][0] ?? 0
            }
            return 0
        },
    }
}


// Массив для хранения времени ожидания у асинхронных функций
export const FuncTimeWait = funcTimeW()