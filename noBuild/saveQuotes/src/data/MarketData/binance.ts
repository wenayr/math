import {LoadQuoteBase, TF} from "../../../../../lib";
type tFetch = any | ((input: any | URL, init?: any | undefined) => Promise<any>);

export namespace binanceClassic{
    export type NumberString = string
    export type time = number
    export type Open = NumberString
    export type High = NumberString
    export type Low = NumberString
    export type Close = NumberString
    export type Volume = NumberString
    export type CloseTime = number
    export type Quote = NumberString
    export type trades = number
    export type buyBase = NumberString
    export type buyquote = NumberString
    export type ignore = NumberString

    export type tBinanceClassic = [
        time, // 1499040000000
        // Kline open time
        Open, // "0.01634790"
        // Open price
        High, // "0.80000000"
        // High price
        Low, // "0.01575800"
        // Low price
        Close, // "0.01577100"
        // Close price
        Volume, // "148976.11427815"
        // Volume
        CloseTime, // 1499644799999
        // Kline Close time
        Quote, // "2434.19055334"
        // Quote asset volume
        trades, // 308
        // Number of trades
        buyBase, // "1756.87402397"
        // Taker buy base asset volume
        buyquote, // "28.46694368"
        // Taker buy quote asset volume
        ignore, // "0" // Unused field, ignore.
    ]
}



const binanceInterval = [
    { time: TF.M1, name: '1m' },
    { time: TF.M3, name: '3m' },
    { time: TF.M5, name: '5m' },
    { time: TF.M15, name: '15m' },
    { time: TF.M30, name: '30m' },
    { time: TF.H1, name: '1h' },
    { time: TF.H2, name: '2h' },
    { time: TF.H4, name: '4h' },
    { time: TF.H6, name: '6h' },
    { time: TF.H8, name: '8h' },
    { time: TF.H12, name: '12h' },
    { time: TF.D1, name: '1d' },
    { time: TF.W1, name: '1w' }
];

export const BinanceLoadEasySpot = (data?: { fetch?: tFetch }) => LoadQuoteBase<binanceClassic.tBinanceClassic>({
    base: 'https://api1.binance.com/api/v3/klines?',
    maxLoadBars2: 1000,
    countConnect: 1150,
    maxLoadBars: 1000,
    time: 60000,
    funcLoad: async (param) => {
        const {endTime,startTime,interval,fetch,symbol,maxLoadBars,limit,baseURL} = param
        const p = {endTime: endTime?.valueOf(), startTime: startTime.valueOf(), interval: interval ,symbol: symbol,  limit: limit} as const
        const arr = Object.entries(p)
            .map(([k,v])=> v && k +"=" + v)
            .filter(e=>!!e) as string[]

        const url =   baseURL + arr.join("&")
        const data = (await (await fetch(url)).json());

        const result: binanceClassic.tBinanceClassic[] = data.map((m: binanceClassic.tBinanceClassic) => (m))
        return result
    },
    funcFistTime: async ({ symbol, interval, baseURL, fetch }) => {
        const data = baseURL + `symbol=${symbol}` + `&interval=${interval}` + `&startTime=${String(new Date('2000').valueOf())}` + `&limit=1`;
        const parseData = (await (await fetch(data)).json());
        return new Date(Number(parseData?.[0]?.[0]));
    },
    intervalToName: binanceInterval
}, data)



const r = BinanceLoadEasySpot()


