import {TF} from "../../../../src";


type tLoad = {name: string, time1: Date, time2: Date, period:TF}
type tUpdateLastBar = {key: string}

export type tExchange = {
    getSymbols: () => Promise< object [] >,
    loadHistory: (data: tLoad) => Promise<any>,
    updateLastBar: (data: tUpdateLastBar) => Promise< object [] >
}
