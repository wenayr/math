


type tAcc = "SPOT"|"FUTURES"|"CROSS"|"ISO"
interface tTT {
    type: tAcc,
    buy(): void
}

interface tTT1 extends tTT{
    type: "SPOT",
    buy(): void
}


interface tTT2 extends tTT{
    type: "CROSS",
    sell(): void
}




function ftest( a? :tTT2|tTT1 ){
    if (a?.type=="CROSS") {
        a?.sell()
    }

}

export function Test() {
    // let a = new tTT1()
    // let b = new tTT2()
    // let c = new tTT()
    // let d = new tTT1()
    // let e = new tTT2()
    // let f = new tTT()

    ftest()
    return {a: 10}
}

// export function Test( a? :tTT2|tTT1 ){
//     if (a?.type=="CROSS") {
//        // a.sell()
//     }
// }
//
Test()