import {tExchange, tExchangeSave} from "./type";
import {BSearch, E_SORTMODE, TF} from "../../../../lib";
import {BinanceLoadEasySpot} from "./MarketData/binance";
import * as fs from "fs";

type Int = number
type Double = number

type tTime = Int
type tOpen = Double
type tHigh = Double
type tLow = Double
type tClose = Double
type tVolume = Double
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

namespace server {

    export type tBinanceBar = [
        tTime,
        tOpen,
        tHigh,
        tLow,
        tClose,
        tVolume,
    ]
}

export const BinanceSpotSaveQ = {
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
        }) .then(({bars,tf})=>(bars.map((e)=>[
                e[0],
                +e[1],
                +e[2],
                +e[3],
                +e[4],
                +e[5],
            ] satisfies server.tBinanceBar
            )
            ) //as unknown as server.tBinanceBar
        )
            .catch((e)=>{
                console.error("loadHistory "+e)
                throw e
            })
    },
    updateLastBar: async ()=>[],
    barToBuffer: (bar) => {
        // const buffer1 = msgpack.encode(bar);
        const buffer = new ArrayBuffer(bar.length * 8); // выделяем память для 8 байт на каждый элемент массива
        const view = new DataView(buffer);
        // const [tTime, tOpen, tHigh, tLow, tClose, tVolume] = bar
        let byteOffset = 0;
        // time
        view.setBigInt64(byteOffset,BigInt(bar[0]))
        byteOffset += 8

        // open
        view.setFloat64(byteOffset,bar[1])
        byteOffset += 8

        // high
        view.setFloat64(byteOffset,bar[2])
        byteOffset += 8

        // low
        view.setFloat64(byteOffset,bar[3])
        byteOffset += 8

        // close
        view.setFloat64(byteOffset,bar[4])
        byteOffset += 8

        // volume
        view.setFloat64(byteOffset,bar[5])
        byteOffset += 8
        return buffer
    },
    sizeBar: 8*6,
    getTimeBar: (bar) => bar[0],
    bufferToBar: (arr) => {
        const view = new DataView(arr);

        let byteOffset = 0;
        // time
        const time = Number(view.getBigInt64(byteOffset))
        byteOffset += 8

        // open
        const open = Number(view.getFloat64(byteOffset))
        byteOffset += 8

        // high
        const high = Number(view.getFloat64(byteOffset))
        byteOffset += 8

        // low
        const low = Number(view.getFloat64(byteOffset))
        byteOffset += 8

        // close
        const close = Number(view.getFloat64(byteOffset))
        byteOffset += 8

        // volume
        const volume = Number(view.getFloat64(byteOffset))
        byteOffset += 8
        return [time, open, high, low, close, volume]
    }
} satisfies tExchange<server.tBinanceBar> & tExchangeSave<server.tBinanceBar>


type t2<T extends object> = tExchange<T> & tExchangeSave<T>


export function convertObjetSaveQ<T extends object>(obj: t2<T>, name: string) {
    // let fileHandle = 0
    type tFileHandle = number

    function arrayToBars(arr: ArrayBuffer){
        const bars:T[] = []
        const step = obj.sizeBar ?? 8 * 6
        for (let i =0 , next = step; next <= arr.byteLength; i = next, next+=step) {
            bars.push(obj.bufferToBar(arr.slice(i, next)))
        }
        return bars
    }

    async function arrayToFile(view: DataView, nameFiles: string) {
        await fs.promises.writeFile(nameFiles,view)
    }

    return {...obj,
        loadHistory: async (data2) => {
            const normalTime = (data: Date, period: TF) => new Date(data.valueOf() - data.valueOf() % period.valueOf())
            const data: typeof data2 = {
                ...data2,
                time2: new Date(normalTime(data2.time2, data2.period).valueOf() - data2.period.valueOf()),
                time1: new Date(normalTime(data2.time1, data2.period).valueOf() + data2.period.valueOf())
            }
            // if (data.time2.valueOf() - (new Date()).valueOf())

            const sizeBar = obj.sizeBar ?? 8 * 6
            const nameFiles = name + data.name + data.period.name + ".bin"
            const fileHandle = await fs.promises.open(nameFiles,'a+') // 'r'
            const fileInfo = await fileHandle.stat()
            if (fileInfo.size < 4000) {

            }
            // пока просто читаем всё
            const buffer = new ArrayBuffer(fileInfo.size)
            const view = new DataView(buffer)
            await fileHandle.read(view, 0 , fileInfo.size)

            const lastAddressBar =  fileInfo.size - sizeBar  //view.byteLength - sizeBar



            const firstTimeBar = fileInfo.size ? Number(view.getBigInt64(0)) : data.time2.valueOf()
            const endTimeBar = fileInfo.size ? Number(view.getBigInt64(lastAddressBar)) : data.time2.valueOf()


            let startBars: T[] = []
            const endBars: T[] = []

            // пока конвернем все в бары
            const bars = arrayToBars(view.buffer)

            // if (firstTimeBar - data.time1.valueOf() > 0) {
            if (firstTimeBar + data.period.valueOf() - data.time1.valueOf() > 0) {
                const [t1,t2] = [data.time1.valueOf(), firstTimeBar - data.period.valueOf()]
                // надо попробовать закачать из источника
                const nBars = await obj.loadHistory({...data, time1: new Date(t1), time2: new Date(t2)})
                startBars = nBars
            }

            if (data.time2.valueOf() - (endTimeBar + data.period.valueOf())  > 0) {
                const [t1,t2] = [endTimeBar + data.period.valueOf(), data.time2.valueOf()]
                // надо попробовать закачать из источника
                const nBars = await obj.loadHistory({...data, time1: new Date(t1), time2: new Date(t2)})

                endBars.push(...nBars)
            }
            const barsResult = startBars.concat(bars).concat(endBars)
            // const barsResult =  [...startBars, ...bars,...endBars]

            await fileHandle.close()

            let buffer3: ArrayBufferLike
            if (startBars.length) {
                // сохранить в начало файла - по сути заменить файл
                const merged = new Uint8Array(buffer.byteLength + startBars.length * sizeBar);

                barsResult.forEach((e,i)=> {
                    const buf = obj.barToBuffer(e)
                    merged.set(new Uint8Array(buf), sizeBar * i);
                })

                await fs.promises.writeFile(nameFiles,merged)

            } else if (endBars.length) {
                //дописать в конце файла
                const merged = new Uint8Array(endBars.length * sizeBar);

                endBars.forEach((e,i)=> {
                    const buf = obj.barToBuffer(e)
                    merged.set(new Uint8Array(buf), sizeBar * i);
                })
                await fs.promises.appendFile(nameFiles,merged)
            }

            const s1 = BSearch(barsResult, data.time1.valueOf(), (a,b )=>obj.getTimeBar(a) - b, "greatOrEqual")
            const s2 = BSearch(barsResult, data.time2.valueOf(), (a,b )=>obj.getTimeBar(a) - b, "lessOrEqual")

            if (s1 == - 1 || s2 == - 1) return [] as T[]
            return barsResult.slice(s1, s2 + 1)

        }
    } satisfies t2<T>
}

