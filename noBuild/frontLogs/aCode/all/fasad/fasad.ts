

// Фасад - структура АПИ, неважно, каким способ, созданная - серверная часть
//

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

        return a.x1**a.x2
    }
    sayHi4(){

    }
}

