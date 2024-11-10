import {funcListenBySocket2, funcListenBySocket3, UseListen} from "./Common/Listen";
import {sleepAsync} from "./Common/common";

async function test() {
    const [setA, listenA] = UseListen<[number, number[]]>()
    const [setStop, listenStop] = UseListen<[]>()

    const r = funcListenBySocket3(listenA, {addListenClose: listenStop})
    r.callback((...a)=>{
        console.log(a)
    })
    for (let i = 0; i < 10; i++) {
        await sleepAsync(200)
        setA(6, [3.4])
        if (i == 5) setStop()
    }

}

test()