


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




function ftest( a :tTT2|tTT1 ){
    if (a.type=="CROSS") {
        a.sell()
    }

}