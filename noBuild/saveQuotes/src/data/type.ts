import {TF} from "../../../../src";


type tLoad = {name: string, time1: Date, time2: Date, period:TF}
type tUpdateLastBar = {key: string}

export type tExchange<Bar extends object> = {
    getSymbols: () => Promise< object [] >,
    loadHistory: (data: tLoad) => Promise<Bar[]>,
    updateLastBar: (data: tUpdateLastBar) => Promise< object [] >
}

export type tExchangeSave<Bar extends object> = {
    barToBuffer: (bar: Bar) => ArrayBuffer,
    bufferToBar: (arr: ArrayBuffer) => Bar
    sizeBar: number|undefined
    getTimeBar: (bar: Bar)=>number
}
