type tr222<T extends any[]> = (...r: T)=> void
export function funcListenCallback<T extends any[]>(a: (e: tr222<T>)=>(void | (()=>void)), event?: (type: "add" | "remove", count: number)=>void) {
    const obj = new Map<any, any>
    let close: any = null//: null | (()=>void) = null
    let lastUpdate: number | null = null
    const run = () => close = ((a((...z)=> {
        lastUpdate = Date.now()
        obj.forEach(e => e(...z))
    })) ?? null)
    return {
        lastUpdate: () => lastUpdate != null ? new Date(lastUpdate) : lastUpdate,
        lastUpdateMs: () => lastUpdate,
        isRun: () => close != null,
        run,
        close: () => {close?.(); close = null;},
        addListen: (a: tr222<T>) => {
            obj.set(a, a)
            event?.("add", obj.size)
        },
        removeListen: (a: (tr222<T>)|null) => {
            obj.delete(a)
            event?.("remove", obj.size)
        },
        count: ()=>obj.size
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

export function UseListen<T extends any[]>() {
    let t: ((...a: T) => void) | null = null
    const a = funcListenCallback<T>((e)=>{t = e})
    a.run()
    return [(...e: T)=>t?.(...e), a] as const
}

export function PromiseArrayListen<T extends any = unknown>(array: (() => Promise<T>)[]) {
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
    const arr = array.map((e, i) => () => e().then(r => a(r, i)).catch((er: any) => b(er, i)))
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
