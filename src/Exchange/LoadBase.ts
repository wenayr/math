import {sleepAsync} from "../Common/Common";
import {TF} from "../Common/Time";
import type {CBar} from "./Bars";
import {FuncTimeWait} from "../Common/funcTimeWait";


type RequestInfo = any //
type RequestInit = any // это библиотека dom
type Response = any // это библиотека dom

export type tSymbol = string;
export type tExchange = string;
export type tTF = TF;
export type tSymbolLoadInfo = { readonly symbol: tSymbol, readonly exchangeName?: tExchange, readonly tf: tTF };
export type tInfoForLoadHistory = tSymbolLoadInfo & { time1: Date, time2: Date , right?:boolean}

type tFetch3 = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
export type tFuncLoad = {fetch: tFetch3, baseURL: string, symbol: string, interval: string, startTime: Date, endTime?: Date, limit?: number, maxLoadBars: number}
export type tLoadFist = {fetch: tFetch3, baseURL: string, symbol: string, interval: string}


export type tSetHistoryData = CBar & {tf?: TF}
type tBinanceLoadBase<Bar> = {
    // адрес загрузки // http
    base : string
    // максимум загрузки баров за раз при первом запроса
    maxLoadBars : number;
    // максимум загрузки баров при докачке
    maxLoadBars2? : number;
    // максимальное количество запросов в пределах времени лимитов
    countConnect : number;
    // период сброса лимитов
    time?: number,
    // загрузка и сохранения баров
    funcLoad: (data: tFuncLoad) => Promise<Bar[]>,
    // дата начала доступной истории
    funcFistTime: (data: tLoadFist) => Promise<Date>,
    // перевод timeframe в название интервалов
    intervalToName: { time: TF, name: string }[],
    // имя ключа, к которому будет применяться данный веся
    nameKey?: string
}


// Обертка для создания запросов котировок по времени и лимиту
export function LoadQuoteBase<Bar> (setting: tBinanceLoadBase<Bar>, data?: { fetch?: tFetch3, error?: boolean }){
    const {base,maxLoadBars,countConnect,intervalToName} = setting
    const maxLoadBars2 = setting.maxLoadBars2 ?? maxLoadBars
    const startMap = new Map<string, Date>()
    const keyName = setting.nameKey ?? "loadKey"
    const time = setting.time ?? 60000

    async function waitLimit() {
        FuncTimeWait.add({type: keyName, weight: 1})
        const t1 = FuncTimeWait.byWeight(keyName, setting.maxLoadBars) - (Date.now() - time) -1
        if (t1 > 0 ) await sleepAsync(t1 )
    }

    const mapTimeToName = new Map(intervalToName.map((e)=>[e.time.sec, e]))

    // @ts-ignore
    const _fetch = data?.fetch??fetch

    return async (info: tInfoForLoadHistory ) : Promise<Bar[]>  => {   //
        const infoTF = mapTimeToName.get(info.tf.sec)
        if (!_fetch) throw "_fetch - не определен";
        if (!infoTF) throw "нет такого таймфрейма";

        let lastTime: number
        const nameForMap = info.exchangeName + infoTF.name
        let leftTime = startMap.get(nameForMap)
        if (!leftTime) {
            await waitLimit()
            leftTime = await setting.funcFistTime({symbol: info.symbol, baseURL: base, interval: infoTF.name, fetch: _fetch}) as Date
            startMap.set(nameForMap, leftTime)
        }
        // если запрос превышает первую котировку слева, то сократим, запрос, до котировки

        const [time1, time2] = [Math.max(info.time1.valueOf(), leftTime.valueOf()), info.time2.valueOf()]
        if (time2 <= time1) {return []}

        const arr: number[] = []
        const interval = infoTF.time.valueOf()
        // это было на случай если в первом и втором шаге, доступно различное количество баров
        const [step1, step2] = [maxLoadBars * interval, maxLoadBars2 * interval]
        const [t1, t2] = info.right ? [time1, time2] : [time2, time1]

        arr.push(lastTime = t1)
        let bars = (t1 - t2) / interval
        if (bars<=maxLoadBars) arr.push(t2)
        else {
            bars -= maxLoadBars
            arr.push(lastTime = lastTime - step1)
            for (; bars>0; bars-=maxLoadBars2) arr.push(lastTime = lastTime - step2)
            if (bars<0) arr.push(t2)
        }

        const map: Promise <Bar[]>[]= []

        for (let i = 1; i < arr.length; i++) {
            if (arr[i].valueOf() >= arr[i-1].valueOf()) continue;
            map.push((async ()=>{
                const data: tFuncLoad = {
                    maxLoadBars:    maxLoadBars,
                    fetch:      _fetch,
                    baseURL:    base,
                    symbol:     info.symbol,
                    interval:   infoTF.name,
                    startTime:  new Date(arr[i]),
                    endTime:    new Date(arr[i-1]),
                    limit:  maxLoadBars
                }
                await waitLimit()
                return setting.funcLoad(data)
            })())

        }

        const resulI = await Promise.allSettled(map)
        const result: Bar[] = []
        // resulI.forEach((e,i)=>{
        //     if (e.status == "fulfilled") result.unshift(...e.value)
        //     if (e.status == "rejected") console.error(e.reason)
        // })

        for (let i = resulI.length - 1; i >= 0; i--) {
            const el = resulI[i]
            if (el.status == "fulfilled") result.push(...el.value)
            if (el.status == "rejected") {
                console.error(el.reason)
                if (data?.error === true) throw el.reason
            }
        }

        return result
    }}