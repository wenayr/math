
import {sleepAsync} from "./common";

export type tRequestScreenerT<T> = {
    key: keyof T,
    callbacksId?: string[],
    request: any[]
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
export function funcPromiseServer<T extends object>(data: screenerSoc<tSocketData <tRequestScreenerT<T>>>, obj: T, myCatch?: (r: {data: string|any, key: keyof T, arguments: any[]}) => void){
    const buf = data;
    data.api({
        onMessage: async (datum)=>{
            const {key,request, callbacksId} = datum.data!
            const buf = obj[key]
            if (!buf) return ;//throw "такого метода нет"
            if (typeof buf == "function") {
                const {callbacksId} = datum
                if (callbacksId) {
                    const arr = callbacksId.map((e)=>{
                        return (d : any) => {
                            try {
                                data.sendMessage({mapId: e, data: d ?? undefined})
                            } catch (e) {
                                console.log("errrrr  !!!!!!", e);
                            }
                        }
                    })
                    let r = 0
                    request.forEach((e,i)=>{
                        if (e == "___FUNC") {
                            request[i] = arr[r++]
                        }
                    })
                }

                const a = await (async ()=>buf(...request))()
                    .catch((e)=>{
                        data.sendMessage({mapId: datum.mapId, error: e})
                        // myCatch?.({data: e, key: key, arguments: request})
                        throw {data: e, key: key, arguments: request}
                    })
                // если ожидание отключено то ждеть не надо, не путать с функцией клбэка
                if (datum.wait!==false) data.sendMessage({mapId: datum.mapId, data: a??undefined})

            }
            else throw myCatch?.({data: "это не функция", key: key, arguments: request})
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


type tSocketData<T> = ({data: T, error?: undefined} | {error: any, data?: undefined}) & {mapId: number, wait?: boolean, callbacksId?: number[]}
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

    const sendMessage = data.sendMessage // (datum: tSocketData <tRequestScreenerT<T>>) => data.sendMessage(datum)


    const free = (()=>{
        const freeNums: number[] = []
        let [total, _poz] = [0,0]
        return {
            log(){
                console.log({freeNums,total,_poz});
            },
            next(){
                return _poz > 0 ? freeNums[--_poz] : ++total
            },
            numsSet(num: number){
                freeNums[_poz++] = num
            }
        }
    })()

    const map = new Map<number, {resolve: tFunc, reject: tFunc}>()//new Map<number, (data: tRequestScreenerT<T>|undefined)=> void >()
    const callbackMany = new Map<number, tFunc>()// new Map<number, (data: tRequestScreenerT<T>|undefined)=> void >()

    // const long = async (send: tSocketData<tRequestScreenerT<T>>, time: Date) => {
    //     // подозрительно долгий ответ на запрос
    //     await sleepAsync(5000);
    //     if (map.has(send.mapId)) {
    //         console.warn("подозрительно долгий ответ на запрос ", send.data)
    //         if (Date.now() - time.valueOf()> 1000 * 60 * 5) {
    //             console.error("прошло 5 минут, наверное пора упасть", send.data);
    //             map.get(send.mapId)?.(undefined)
    //             map.delete(send.mapId);
    //             return;
    //         }
    //         long(send, time)
    //     } else return;
    // }

    data.api({
        onMessage: (data)=>{
            if (map.has(data.mapId)) {
                const buf = map.get(data.mapId)
                map.delete(data.mapId)
                free.numsSet(data.mapId)
                if (data.error) buf?.reject(data.error)
                else buf?.resolve(data.data)
            }
            else if (callbackMany.has(data.mapId)) {
                const buf = callbackMany.get(data.mapId)
                // @ts-ignore
                // надо придумать команду стоп
                if (data.data == "___STOP") {

                    // @ts-ignore
                    callbackMany.delete(data.mapId);
                    // @ts-ignore
                    free.numsSet(data.mapId);
                }
                buf?.(data.data)
            }
        }
    })
    let status = false
    const api: screenerSocApi<T> = {
        log(_status: boolean){status = _status},
        promiseTotal: () => map.size,
        callbackTotal: () => callbackMany.size,
        promiseDeleteAll: (reject = true) => {
            const arr = [...map.values()]
            const arrKey = [...map.keys()] as unknown as string[]
            map.clear()
            arrKey.forEach(e=> free.numsSet( +e))
            arr.forEach((e) =>  reject ? e.reject("promiseDeleteAll") : e.resolve(undefined) )
        },
        callbackDeleteAll: () => {
            const arr = [...callbackMany.keys()] as unknown as string[]
            callbackMany.clear()
            arr.forEach(e=>free.numsSet(+e))
        },
        callbackDelete: (func: tFunc) => {
            // ))
            callbackMany.forEach((e, key) => {
                if (e == func) {
                    callbackMany.delete(key);
                    free.numsSet(+key)
                }
            })
        },
    }
    return {
        api,
        send: (data, wait?: boolean, callbacksId?: tFunc[]) => new Promise((resolve, reject) => {
            const send: tSocketData <tRequestScreenerT<T>> = {mapId: free.next(), data, wait: wait, callbacksId: <number[]>[]}

            for (const el of callbacksId ?? []) {
                const id = free.next()
                send.callbacksId?.push(id)
                if (status) {
                    console.log("ключ стрмиа ", id, " ", send);
                }
                callbackMany.set(id, el );
            }

            if (wait !== false) map.set(send.mapId, {resolve, reject});

            if (status) {
                free.log()
                console.log("ключ сокета ", send.mapId, " ", send);
            }

            if (callbackMany.size > 5) console.log("callbackMany.size = ", callbackMany.size)
            if (map.size > 5) console.log("map.size = ", map.size)

            sendMessage(send);
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
type tFunc = (a:any)=>any
export type screenerSoc2<T> = {
    send: (data: tRequestScreenerT<T>, wait?: boolean, callbacksId?: tFunc[])=>Promise<any>,
    api: screenerSocApi<T>,
}

export type screenerSocApi<T> = {
    log: (status: boolean) => void,
    promiseTotal: () => number,
    callbackTotal: () => number,
    promiseDeleteAll: (reject: boolean) => void,
    callbackDeleteAll: () => void,
    callbackDelete: (func: tFunc) => void,
}
export type tMethodToPromise2<T extends object> = {[P in keyof T] : T[P] extends ((...args: infer Z)=> infer X)? (...args: Z)=>(X extends Promise<any>? X : Promise<X>) : Promise<T[P]>}
// export type tMethodToPromise4<T extends object> = {[P in keyof T] : T[P] extends ((...args: any)=> any X <T[P]> extends }// T[P] extends ((...args: infer Z)=> infer X)? (...args: Z)=>(X extends Promise<any>? X : Promise<X>) : Promise<T[P]>}
/**
 * обертка для класса - переводит класс в Promise<method> класс, также перехватывает все функции и желает свою обработку типа WebSocket или другое
 * */
export function funcScreenerClient2<T extends object>(data: screenerSoc2<T>, wait?: boolean) {
    return new Proxy({} as unknown as tMethodToPromise2<T> , {
        get(target: tMethodToPromise2<T>, p: string | symbol, receiver: any): any {
            const key = String(p) as keyof T
            return async (...argArray:any[])=> {
                const callback: {func: tFunc, poz: number}[] = []
                const callback2: tFunc[] = []
                argArray.forEach((el,i)=>{
                    if (typeof el == "function") {
                        callback.push({func: el, poz: i})
                        callback2.push(el)
                        argArray[i] = "___FUNC"
                    }
                })
                return data.send({key, request: argArray}, wait, callback2)
            }
            // .catch((e)=>{
            //     console.error("упали при отправке сообщения");
            //     throw "упали при отправке сообщения"
            // })
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


export type UnAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never
export type UnAwaitedArr<T extends Promise<any>[]> = T extends Promise<infer R>[] ? R[] : never
export type tElArr<T extends any[]> = T extends (infer R)[] ? R : never
// OmitTypes

export function CreatAPIFacadeClient<T extends object>({socketKey, socket} : {socket: any, socketKey: string}){
    const tr = funcForWebSocket<any>({
        sendMessage: (data) => socket.emit(socketKey, data),
        api: (data)=> {
            socket.on(socketKey, (d: any) => {
                data.onMessage(d)
            })
        }
    })
    const func = funcScreenerClient2<typeVoid2<T>>(tr) //satisfies tMethodToPromise2<typeVoid2<T>>

    //Не ждет ответа
    const space = funcScreenerClient2<typeNoVoid2<T>>(tr, false)
    return {
        api: tr.api,
        // типизацией убраны некоторые методы
        func,
        // типизацией убраны некоторые методы
        space,
        // все методы
        all: func as tMethodToPromise2<T>
    }
}

export function CreatAPIFacadeServer<T extends object>({object, socket, socketKey, myCatch}: {socket: any, object: T, socketKey: string, myCatch?: (r: {data: string|any, key: keyof T, arguments: any[]}) => void}){
    // серверная часть (она же клиенская для выполнения подписок)
    funcPromiseServer({
            sendMessage: (data) => socket.emit(socketKey, data),
            api:(api) => {
                socket.on(socketKey, (d: any)=> (async ()=>api.onMessage(d))()
                    .catch((e: any)=>{
                        myCatch?.(e)
                    }))
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
