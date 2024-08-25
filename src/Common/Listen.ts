type tr222<T extends any[]> = (...r: T)=> void
export function funcListenCallback<T extends any[]>(a: (e: tr222<T>)=>(void | (()=>void)), event?: (type: "add" | "remove", count: number, api: ReturnType<typeof funcListenCallback<T>>)=>void) {
    const obj = new Map<any, any>
    let close: any = null//: null | (()=>void) = null // , api: ReturnType<typeof funcListenCallback<T>>
    let lastUpdate: number | null = null
    const run = () => close = ((a((...z)=> {
        lastUpdate = Date.now()
        obj.forEach(e => e(...z))
    })) ?? null)
    const api = {
        lastUpdate: () => lastUpdate != null ? new Date(lastUpdate) : lastUpdate,
        lastUpdateMs: () => lastUpdate,
        isRun: () => close != null,
        run,
        close: () => {close?.(); close = null;},
        addListen: (a: tr222<T>) => {
            obj.set(a, a)
            event?.("add", obj.size, api)
            return () => api.removeListen(a)
        },
        removeListen: (a: (tr222<T>)|null) => {
            obj.delete(a)
            event?.("remove", obj.size, api)
        },
        count: ()=>obj.size
    }
    return api
}


type tr2<T extends (...a: any[])=>any> = (a: Parameters<T>[0])=> void//ReturnType<T>
type t1<T extends any[] = any[]> = ReturnType<typeof funcListenCallback<T>>
type tt2 = tr2<Parameters<t1["addListen"]>[0]>
type tt = tr2<Parameters<t1["addListen"]>[0]>

export function funcListenBySocket3<Z extends any[] = any[]>(e: t1<Z>, z: {
    readonly status?: () => boolean,
    readonly setEventClose?: (eventClose: ()=>any) => any,
}) {
    return funcListenBySocket2(e, {...z, stop: x => x("___STOP"), paramsModify:(...e) => [e[0]]})
}
// не проверена
export function funcListenBySocket2<Z extends any[] = any[]>(e: t1<Z>, {stop, setEventClose, status, paramsModify}: {
    readonly status?: () => boolean,
    readonly setEventClose?: (eventClose: ()=>any) => any,
    readonly stop?: (x: tt) => any,
    readonly paramsModify?: (...e: Parameters<tt>) => any[]

}) {
    type tr2<T extends (...a: any[])=>any> = (a: Parameters<T>[0])=> void//ReturnType<T>
    const {addListen, removeListen, count} = e
    type tt = tr2<Parameters<typeof e.addListen>[0]>
    // let x: tt | null = null
    const x: {x: tt | null} = {x: null}
    let r2: ((...a: any[]) => void) | null = null

    const removeCallback = () => {
        if (x.x) {
            stop?.(x.x)
            x.x = null
        }
        if (r2) removeListen(r2)
        return true
    }
    return {
        callback: (z: (...params: Parameters<tt>)=> void) => {//(z: tt) => { // (a: tt) => any
            // @ts-ignore
            if (x.x) stop?.(x.x)
            // if (x.x) x.x("___STOP");
            if (r2) removeListen(r2)
            x.x = z
            if (!z) {
                console.log(z)
                console.log(e.count());
                console.trace()
                // return;
            }
            let ta: typeof z
            ta = z
            if (paramsModify) {
                ta = (...a) => {
                    const params = paramsModify(...a)
                    // @ts-ignore
                    z(...params)
                }
            }
            if (status)
                r2 = (a: any) => {status() ? ta(a) : removeListen(r2)}
            else
                r2 = (a) => ta(a)

            addListen(r2)
            setEventClose?.(() => removeCallback())
        },
        removeCallback
    }
}
// Прокидывает колбэк к листу подписок, передовая только, первый параметр функции (подписки листа).
// Если функция уже есть, то он отправит код остановки клиенту, и удалит её
export function funcListenBySocket<Z extends any[] = any[]>(e: ReturnType<typeof funcListenCallback<Z>>, status: ()=>boolean) {
    type tr2<T extends (...a: any[])=>any> = (a: Parameters<T>[0])=> void//ReturnType<T>
    const {addListen, removeListen, count} = e
    type tt = tr2<Parameters<typeof e.addListen>[0]>
    let x: tt | null = null
    let r2: ((...a: any[]) => void) | null = null
    return {
        callback: (z: (param: Parameters<Parameters<typeof e.addListen>[0]>[0])=> void) => {//(z: tt) => { // (a: tt) => any
            // @ts-ignore
            if (x) x("___STOP");
            if (r2) removeListen(r2)
            x = z
            if (!z) {
                console.log(z)
                console.log(e.count());
                console.trace()
                // return;
            }
            r2 = (a: any) => {status() ? z(a) : removeListen(r2)}// @ts-ignore
            addListen(r2)
        },
        removeCallback: () => {
            if (x) {
                x("___STOP");
                x = null
            }
            if (r2) removeListen(r2)
            return true
        }
    }
}
export const funcListenBySocket1 = funcListenBySocket

export function UseListen<T extends any[]>(data?: {event?: Parameters<typeof funcListenCallback<T>>[1]}) {
    let t: ((...a: T) => void) | null = null
    const a = funcListenCallback<T>((e)=>{t = e}, data?.event)
    a.run()
    return [(...e: T)=>t?.(...e), a] as const
}


/////
type tDeepKeys<T, T2 extends object, T3 extends any> = // T extends (a?: any) => any ? T :
    {[K in keyof T]: T[K] extends T2 ? T3: T[K] extends object ? T[K] extends (a?: any) => any ? T[K] : tDeepKeys<T[K], T2, T3> : T[K]
    }

type obj = {[k: string]: any}
export function CompareKeys<T extends obj, T2 extends obj>(obj1: T, obj2: T2) {
    return (new Set([...Object.keys(obj1), ...Object.keys(obj2)])).size == Object.keys(obj2).length
}
// @ts-ignore
export function DeepCompareKeys<T, T2 extends obj, T3 extends unknown>(obj1: T, obj2: T2, func: (a: T2)=> T3) {
    if (obj1 == null) return null
    if (typeof obj1 == "function") return obj1
    if (typeof obj1 != "object") return obj1
    if (CompareKeys(obj1, obj2)) return func(obj1 as unknown as T2)
    // @ts-ignore
    return Object.fromEntries(Object.entries(obj1 as any).map(([k,v])=> [k, DeepCompareKeys(v, obj2, func)] as const))
}

export function deepModifyByListenSocket<T>(obj: T, status: () => boolean){
    return DeepCompareKeys(obj, UseListen()[1], e => funcListenBySocket1(e, status)) as
        tDeepKeys<T, ReturnType<typeof UseListen>[1], ReturnType<typeof funcListenBySocket1>>
}
///////
export function deepModifyByListenSocket2<T>(obj: T, status: () => boolean){
    return DeepCompareKeys(obj, UseListen()[1], e => funcListenBySocket1(e, status)) as
        tDeepKeys<T, ReturnType<typeof UseListen>[1], ReturnType<typeof funcListenBySocket1>>
}


export const funcListenBySocketObj = deepModifyByListenSocket
export function PromiseArrayListen<T extends any = unknown>(array: ((() => Promise<T>)|(() => any)|Promise<T>)[]) {
    let ok = 0, error = 0
    const count = array.length
    type tOk = [data: T, i: number, countOk: number, countError: number, count: number]
    type tError = [error: any, i: number, countOk: number, countError: number, count: number]
    const t = UseListen<tOk>()
    const c = UseListen<tError>()
    const a = (data: T, i: number) => {
        ++ok;
        return t[0](data, i, ok, error, count) ?? data
    }
    const b = (error: any, i: number) => {
        ++error;
        c[0](error, i, ok, error, count)
        throw error
    }
    const arr = array.map((e, i) => e instanceof Promise ? e.then(r => a(r, i)).catch((er: any) => b(er, i))
        : () => (async ()=> e())().then(r => a(r, i)).catch((er: any) => b(er, i)))
    return {
        listenOk: (a: (...d: tOk) => any) => {
            t[1].addListen(a)
            return () => t[1].removeListen(a)
        },
        listenError: (a: (...d: tError) => any) => {
            c[1].addListen(a)
            return () => c[1].removeListen(a)
        },
        promise: {
            all: () => Promise.all(arr),

            allSettled: () => Promise.allSettled(arr),
        },
        getData(){return arr},
        status(){
            return {ok, error, count}
        }
    }
}


export type realSocket2<T extends any> = (data: {callback: (data: T)=>void, [key: string]: any}, ...b: any[]) => (any |(()=>any))
export type getTypeCallback<T extends realSocket2<any>> = T extends realSocket2<infer R> ? R : never
type ParametersOther<T extends (forget: any,...args: any) => any> = T extends (forget: any,...args: infer P ) => any ? P : never;

type tr22<T> = T extends undefined ? never : T
export function socketBuffer3<T extends realSocket2<any| any[]>, T2 extends (readonly unknown[])|undefined, T3  extends {[key: string]: unknown}, T4 extends T3|(()=>T3)>(
    func: T,
    callbackMain: (data: getTypeCallback<T>, memo: T3|T4)=> T2,
    memo: T3|T4 = {} as T3
) {
    return (a: Omit<Parameters<T>[0],"callback"> & {callback: (...data: tr22<T2>)=> any}, ...b:  ParametersOther<T>) =>
        func({...a, callback: (v)=>{const z = callbackMain(v, memo); if (z) a.callback(...(z as tr22<T2>))} //  as T
        }, ...b) as ReturnType<T>
}

export function funcListenCallbackSnapshot<T extends realSocket2<any| any[]>, T2 extends (readonly unknown[])|undefined, T3 extends {[key: string]: unknown}, T4 extends T3|(()=>T3)>({func, memo = {} as T4, callbackSave, snapshot}: {
    func: ()=>T,
    callbackSave: (data: getTypeCallback<T>, memo: T3) => T2,
    memo: T4,
    snapshot?: (memo: T4) => T3
}) {
    type tt = typeof socketBuffer3<T, T2, T3, T4>

    let d: ReturnType<tt>|null = null
    const [callback, listenA] = UseListen<Parameters<typeof callbackSave>>({
        event: (type, count, api) => {
        if (type == "remove" && count == 0) {
            api.close()
            // @ts-ignore
            d?.()
        }
        if (type == "add" && count == 1) api.run()
        }});
    const connect = () => {
        // @ts-ignore
        if (d == null) d = socketBuffer3(func(), callbackSave, memo)({callback})
    }
    const run = (...params: Parameters<typeof listenA.addListen>) => {
        if (!listenA.isRun()) {
            snapshot?.(memo)
            connect()
        }
        return listenA.addListen(...params)}
    return {run, snapshot: ()=> snapshot?.(memo), memo, listenA, connect, get disconnect(){return d}}
}
