import {tExchange} from "./type";




export function fSave<T extends tExchange>(obj: T, keyObj: string, save: object) {
    return {
        loadHistory: data => {
            let buf: T
            // открываем кэш / файл

            // проверяем достоверность есль что-то нехватает докачиваем
            save
            //
            return buf
        },
        getSymbols: () => {
            // проверяем таймер достоверности
        },
        updateLastBar:obj.updateLastBar
    } satisfies tExchange
}


function formatNum(num: number) {
    const str = num.toPrecision(12);
    if (str.endsWith('.00000000')) {
        return str.slice(0, -12);
    }
    return str.replace(/(\.[0-9]*[1-9])0+$/g, '$1');
}