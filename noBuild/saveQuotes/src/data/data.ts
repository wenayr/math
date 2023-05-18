
import {tExchange} from "./type";
import {BinanceLoadEasySpot, TF} from "../../../../src";
import {tGetAllData} from "../../../../src/Exchange/IHistoryBase";

type tHigh = number
type tOpen = number
type tLow = number
type tClose = number
type tVolume = number
type tVolumeTick = number
type tInterest = number

type bar = [tOpen, tHigh, tLow, tClose]

type bar2 = [...bar, ]

type iLastBar<T extends object> = {
    [ket: string]: T
}

type tSymbolObj = {
    [key: string]: any,
    key: string,
    name: string,
    //...
}


export type tSaveCash<T> = {

    open:  () => Promise<any>

}

function fLoadFilesHistory() {

}

const BinanceSpot = {
    getSymbols: async () => {
        const post='https://api1.binance.com/api/v3/exchangeInfo';
        const result = await (await (fetch)(post))?.json()
        const symbols:[]= result.symbols.filter((m:any)=> (m.status=="TRADING") && (m.quoteAsset=="USDT"))
        return symbols.map((m:any)=>({
                name:   m.symbol,
                tickSize:   m.filters?.[0]?.tickSize,
                minPrice:   m.filters?.[1]?.tickSize,
                minStepLot: m.filters?.[0]?.tickSize, //minQty stepSize
                minQty:     m.filters?.[2]?.minQty,
                stepSize:   m.stepSize?.[2]?.minQty,
                quoteAsset: m.quoteAsset,
                baseAsset:  m.baseAsset
            }))
    },
    loadHistory: async  (data) => {
        const func = BinanceLoadEasySpot({fetch})
        return func({
            exchangeName: undefined, name: data.name, right: false, tf: data.period, time1: data.time1, time2: data.time2
        })
            .catch((e)=>{
                console.error("loadHistory "+e)
                throw e
            })
    },
    updateLastBar: async ()=>[]
} satisfies tExchange






const Exchange = {
    BinanceSpot: BinanceSpot
} satisfies {[ket: string]: tExchange}





async function start() {
    // load
    const periods = [TF.M1, TF.M15, TF.H1, TF.H4]
    const startDate = new Date(2022,1,1)
    const endTime = new Date()



    BinanceSpot.loadHistory()




    Object.entries(Exchange).forEach(async ([key, v])=>{

        const symbols = await v.getSymbols()



        for (let symbol of symbols) {
            for (let period of periods) {
                const bars = await v.loadHistory({name: <string>symbol.name, period: period, time1: startDate, time2: new Date()})

            }
        }

    })

    const symbols =
}


type tFetch = any | ((input: any | URL, init?: any | undefined) => Promise<any>);
type tBinanceSymbolsAllObjs = {
    fetch: tFetch;
    quoteAsset?: string;
};

export function BinanceSymbolsAllObjNew(data: tBinanceSymbolsAllObjs) {
    return async function (): Promise<tGetAllData> {
        const post='https://api1.binance.com/api/v3/exchangeInfo';
        const result = await (await (data.fetch)(post))?.json()
        const symbols:[]= result.symbols.filter((m:any)=> (m.status=="TRADING") && (data?.quoteAsset ? m.quoteAsset==data.quoteAsset : true ))
        return {
            symbols: symbols.map((m:any)=>({
                name:   m.symbol,
                tickSize:   m.filters?.[0]?.tickSize,
                minPrice:   m.filters?.[1]?.tickSize,
                minStepLot: m.filters?.[0]?.tickSize, //minQty stepSize
                minQty:     m.filters?.[2]?.minQty,
                stepSize:   m.stepSize?.[2]?.minQty,
                quoteAsset: m.quoteAsset,
                baseAsset:  m.baseAsset
            }))
        }
    }
}