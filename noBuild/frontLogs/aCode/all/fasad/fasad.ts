

// Фасад - структура АПИ, неважно, каким способ, созданная - серверная часть
//

import {sleepAsync} from "wenay-common";

export type tFasadOne = FasadOne

export class FasadOne {
    sayHi(){
        return {hi:"ttrtt"}
    }
    sayHi2(){
        return {hi:"tt3213rtt"}
    }
    sayHi3(){
        return {hi:"44555"}
    }

    sum(a: number, b: number){
        return a + b
    }

    async pow(a:{x1: number, x2: number}){
        console.log(a)
        return a.x1**a.x2
    }
    sayHi4(){

    }

    async sayHi44(data: {x1: number, x2:number}, callback: (data:{sum: any}|{end: true}) => void, col: ()=>void, num:number){
        console.log("fasad   !! 1")
        console.log(data)
        callback({sum: 1000000});
        await sleepAsync(1000)
        callback({sum: 1000000});
        await  sleepAsync(1000)
        callback({sum: 1000000});
        await sleepAsync(1000)
        callback({sum: 1000000});

        await sleepAsync(1000)

    }
}

