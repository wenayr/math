

// export const  screenerServer = new ScreenerRun()



// export type tKeyScreener = keyof IScreenerRun


import {sleepAsync} from "./Common";
import {FasadOne} from "../../noBuild/frontLogs/aCode/all/fasad/fasad";

export type tRequestScreenerT<T> = {
    key: keyof T,
    request: any
}
// export type tRequestScreener = {
//     key: tKeyScreener,
//     request: any
// }

/**
 *  для серверной части, во входящих параметров надо отправить ссылки не WebSocket и object который будем наблюдать
 *  можно подключить последовательно к разным классам по факту если по Map объекта не находится данный ключ то он и не включиться
 *  Есть риск одноименных методов в разных объектах
 *  пока не думал как решить =)
 * */
export function funcPromiseServer<T extends object>(data: screenerSoc<tSocketData <tRequestScreenerT<T>>>, obj: T){
    data.api({
        onMessage: async (datum)=>{
            const {key,request} = datum.data
            const buf = obj[key]
            if (!buf) return //throw "такого метода нет"
            if (typeof buf == "function") {
                const a = await (async ()=>buf(...request))()
                data.sendMessage({mapId: datum.mapId, data: a??undefined})
            }
            else throw "это не функция"
        }
    })
}

export function funcPromiseServer2<T extends object>(sendMessage: screenerSoc222<tSocketData <tRequestScreenerT<T>>>, obj: T){
    return async (datum: any)=>{
        const {key,request} = datum.data
        // @ts-ignore
        const buf = obj[key]
        if (!buf) return //throw "такого метода нет"
        if (typeof buf == "function") {
            const a = await (async ()=>buf(...request))()
            sendMessage({mapId: datum.mapId, data: a??undefined})
        }
        else throw "это не функция"
    }
}
// export function funcPromiseServer3(data: {send: (data: object) => void, onMess: (func: (data: object) => void)}){}

/**
 *  для серверной части, во входящих параметров надо отправить ссылки на Post/Get и object который будем наблюдать
 *  можно подключить последовательно к разным классам по факту если по Map объекта не находится данный ключ то он и не включиться
 *  Есть риск одноименных методов в разных объектах
 *  пока не думал как решить =)
 * */
export function funcPromiseServerPost<T extends object>(data: screenerPost<tRequestScreenerT<T>>, obj: T){
    // data: screenerPost<tSocketData <tRequestScreenerT<T>>>, obj: T
    data.api({
        onMessage: async (datum)=>{
            console.log(datum);
            if (!datum) return ;
            const {key,request} = datum//.data
            if (!key) return ;
            const buf = obj[key]
            if (!buf) return //throw "такого метода нет"
            if (typeof buf == "function") {
                const a = await (async ()=>buf(...request))()
                return  {data: a??undefined} //{mapId: datum.mapId, data: a??undefined}
            }
            else throw "это не функция"
        }
    })
}


type tSocketData<T> = {mapId: number, data: T}
type screenerSoc<T> = {
    sendMessage: (data: T)=>void,
    api: (data: {onMessage: (data: T) => void|Promise<void> })=>void
}
type screenerSoc222<T> = (data: T)=>void

type screenerPost<T> = {
    api: (data: {onMessage: (data: T) => any|Promise<any> })=>void
}
/**
 * для обертки над WebSocket чтобы получать callback по id
 * */
export function funcForWebSocket<T>(data: screenerSoc<tSocketData <tRequestScreenerT<T>>>): screenerSoc2<T> {
    // const sendMessage = (datum: tSocketData <tRequestScreenerT<T>>) => data.sendMessage(JSON.stringify(datum))

    const sendMessage = (datum: tSocketData <tRequestScreenerT<T>>) => data.sendMessage(datum)
    let d = 0
    const map = new Map<number, (data: tRequestScreenerT<T>|undefined)=> void >()

    const long = async (send: tSocketData<tRequestScreenerT<T>>, time: Date) => {
        // подозрительно долгий ответ на запрос
        await sleepAsync(5000);
        if (map.has(send.mapId)) {
            console.warn("подозрительно долгий ответ на запрос ", send.data)
            if (Date.now() - time.valueOf()> 1000 * 60 * 5) {
                console.error("прошло 5 минут, наверное пора упасть", send.data);
                map.get(send.mapId)?.(undefined)
                map.delete(send.mapId);
                return;
            }
            long(send, time)
        } else return;
    }

    data.api({
        onMessage: (data)=>{
            console.log("onMessage ", data)
            if (map.has(data.mapId)) {
                const buf = map.get(data.mapId)
                map.delete(data.mapId)
                // console.log(buf)
                buf?.(data.data)
            }
        }
    })
    return {
        send:(data, wait?: boolean) => new Promise((resolve, reject) => {
            // console.log("wait ",wait, " ", wait!==false)
            const send: tSocketData <tRequestScreenerT<T>> = {mapId: ++d, data}
            if (wait!==false) {
                map.set(send.mapId,
                    (data) => {
                        // console.log("data = ", data);
                        if (data == undefined) reject()
                        resolve(data)
                    });
                if (map.size > 0) console.log("map.size = ",map.size)
            }

            // console.log("map ",map)
            // if (wait!==false) long(send, new Date());
            sendMessage(send);
            //resolve(true)
        })
    }
}

/**
 * Отправка сообщений для клиента, через авто создание апи, по методу пост запроса, с настраиваемым header
 * */
// export class CSendForPost {
//     header: HeadersInit | undefined = {
//         'content-type': 'application/json'
//     }
//     readonly funcForPost = <T>(address: string): screenerSoc2<T> =>  ({
//             send: async (data, wait?: boolean) =>  (
//                     await (await fetch(address, {
//                         method: "POST",
//                         headers: this.header,
//                         // data: JSON.stringify(data),
//                         body: JSON.stringify(data)
//                     })).json()
//                 )
//         })
// }
//
// export function funcForPost<T>(address: string): screenerSoc2<T> {
//     return (new CSendForPost()).funcForPost(address)
// }

export function FFuncMyF<T extends  object>(object: T) {
    return {
        send: async (data: tRequestScreenerT<T>)=> {
            const buf = object[data.key]
            if (!buf) throw "такого метода нет"
            if (typeof buf == "function") return buf(...data.request)
            else throw "это не функция"
        }
    }
}

export type screenerSoc2<T> = {send: (data: tRequestScreenerT<T>, wait?: boolean)=>Promise<any>}
export type tMethodToPromise2<T extends object> = {[P in keyof T] : T[P] extends ((...args: infer Z)=> infer X)? (...args: Z)=>(X extends Promise<any>? X : Promise<X>) : Promise<T[P]>}
// export type tMethodToPromise4<T extends object> = {[P in keyof T] : T[P] extends ((...args: any)=> any X <T[P]> extends }// T[P] extends ((...args: infer Z)=> infer X)? (...args: Z)=>(X extends Promise<any>? X : Promise<X>) : Promise<T[P]>}
/**
 * обертка для класса - переводит класс в Promise<method> класс, также перехватывает все функции и желает свою обработку типа WebSocket или другое
 * */
export function funcScreenerClient2<T extends object>(data: screenerSoc2<T>, callback?: boolean) {
    return new Proxy({} as unknown as tMethodToPromise2<T> , {
        get(target: tMethodToPromise2<T>, p: string | symbol, receiver: any): any {
            console.log(target)
            console.log(p)
            console.log(data)
            const key = String(p) as keyof T
            return async (...argArray:any)=> data.send({key, request: argArray}, callback)
        }
    })
}


// метод void отменяет callback, т.е. фактически мгновенно исполняет Promise resolve
type tAndB<T> = {data: T, void: ()=>void}

export type screenerSoc3<T> = {send: (data: tRequestScreenerT<T>)=>tAndB<Promise<any>>}
export type tMethodToPromise3<T extends object> = {[P in keyof T] : T[P] extends ((...args: infer Z)=> infer X)? (...args: Z)=>(X extends Promise<any>? tAndB<X> : tAndB<Promise<X>>) : tAndB<Promise<T[P]>>}
/**
 *
 * обертка для класса - переводит класс в Promise<method> класс
 * завернутый в определенный класс, чтобы можно было отделить методы с возвращением void и не создавать на них callback,
 * также перехватывает все функции и желает свою обработку типа WebSocket или другое
 * */
export function funcScreenerClient3<T extends object>(data: screenerSoc3<T>) {
    return new Proxy({} as unknown as tMethodToPromise3<T> , {
        get(target: tMethodToPromise3<T>, p: string | symbol, receiver: any): any {
            const key = String(p) as keyof T
            return (...argArray:any)=> data.send({key, request: argArray})
        }
    })
}
/*
*      const data = base + info.name + '&interval=' + infoTF.name + '&startTime=' + String(new Date('2000').valueOf())  + '&limit='+1
            await waitLimit()
            const parseData = (await (await fetch(data)).json());
* */

type typeVoid<T> = Pick<
    T,
    {
        [K in keyof T]: T[K] extends (any:any)=>any ? ReturnType<T[K]> extends void ? never : K : never;
    }[keyof T]
>;

type typeNoVoid<T> = Pick<
    T,
    {
        [K in keyof T]: T[K] extends (any:any)=>any ? ReturnType<T[K]> extends void ? K : never : never;
    }[keyof T]
>;

export type typeVoid2<T> = {
    [P in Exclude<keyof T, { [P in keyof T]: T[P] extends (any:any)=>any ? ReturnType<T[P]> extends void ? P : never : never; }[keyof T]>]: T[P];
};


export type typeNoVoid2<T> = {
    [P in Exclude<keyof T, { [P in keyof T]: T[P] extends (any:any)=>any ? ReturnType<T[P]> extends void ? never : P : never; }[keyof T]>]: T[P];
};



export function CreatAPIFacadeClient<T extends object>({socketKey, socket} : {socket: any, socketKey: string}){
    const tr = funcForWebSocket<any>({
        sendMessage: (data) => socket.emit(socketKey, data),
        api: (data)=> {
            socket.on(socketKey, (d: any) => {
                data.onMessage(d)
            })
        }
    })
    const func = funcScreenerClient2<typeVoid2<T>>(tr)
    const space = funcScreenerClient2<typeNoVoid2<T>>(tr, false)
    return {
        func, space
    }
}

export function CreatAPIFacadeServer<T extends object>({object, socket, socketKey} : {socket: any, object: T, socketKey: string}){
    // серверная часть (она же клиенская для выполнения подписок)
    funcPromiseServer({
            sendMessage: (data) => socket.emit(socketKey, data),
            api:(api) => {
                socket.on(socketKey, (d: any)=> api.onMessage(d))
            }}
        ,object)

}




type tMethodToPromise<T extends object> =
    {[P in keyof T] : PromiseAllZL<T[P]>}

type PromiseAllZL<T extends any> =
    T extends ((...args: infer Z)=> infer X)? (...args: Z)=>(X extends Promise<any>? X:Promise<X>) : Promise<T>

export function fMiniTest() {

}

export class CTestWeb {
    func(a:number, b: number) {
        return a + b
    }
    async func2(a:number, b: number) {
        await sleepAsync(1000);
        return a * b
    }
    fun3(a:number, b: number) {
        return a ** b
    }

    test() {
        return "status ok"
    }
}
