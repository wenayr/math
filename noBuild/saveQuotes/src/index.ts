import {TF} from "../../../lib";
import {BinanceSpotSaveQ, convertObjetSaveQ} from "./data/data";


Test()

async function Test2() {
    const obj = convertObjetSaveQ(BinanceSpotSaveQ,"BinanceSpot")

    const period = TF.M15
    const time3 = new Date()
    const time2 = new Date(time3.valueOf() - (period.valueOf() * 3))
    const time1 = new Date(time2.valueOf() - (period.valueOf() * 3))
    const time0 = new Date(time1.valueOf() - (period.valueOf() * 2))
    const name = "BTCUSDT"

    try {
        const barsReq = await BinanceSpotSaveQ.loadHistory({time1: time0,time2: time3,name,period})

        const barsReq2 = await obj.loadHistory({time1,time2,name,period})

        const barsReq3 = await obj.loadHistory({time1,time2,name,period})

        const barsReq4 = await obj.loadHistory({time1: time0,time2,name,period})

        const barsReq5 = await obj.loadHistory({time1: time0,time2: time3,name,period})

        console.log(barsReq)
        console.log("vs")
        console.log(barsReq5)

        const result = barsReq.map((e,i)=> e[0]==barsReq5[i][0] && e[1]==barsReq5[i][1] && e[2]==barsReq5[i][2])

        console.log(result)

    } catch (e) {
        console.error(e)
        throw e
    }
}


async function Test() {
    const obj = convertObjetSaveQ(BinanceSpotSaveQ,"BinanceSpot")

    console.time("1")

    const period = TF.M15
    const time2 = new Date()
    const time1 = new Date(time2.valueOf() - (period.valueOf() * 200000))
    const name = "BTCUSDT"

    try {

        const barsReq2 = await obj.loadHistory({time1,time2,name,period})

        console.timeEnd("1")
        console.log(barsReq2.length)

    } catch (e) {
        console.error(e)
        throw e
    }
}