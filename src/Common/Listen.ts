export type Listener<T extends any[]> = (...r: T) => void

/** Нормализация: если T уже кортеж — оставляем, иначе оборачиваем в [T] */
type NormalizeTuple<T> = T extends any[] ? T : [T]

export function funcListenCallbackBase<T>(b: (e: Listener<NormalizeTuple<T>>) => (void | (() => void)),
                                                        data?: {
                                                            event?: (type: "add" | "remove", count: number, api: ReturnType<typeof funcListenCallbackBase<any>>) => void,
                                                            fast?: boolean
                                                        }
) {
    type Z = NormalizeTuple<T>
    const {fast = false, event} = data ?? {}

    const obj = new Map<Listener<Z>, Listener<Z>>()
    let a: Listener<Z> | null = (...e) => {obj.forEach(z => z(...e))}
    let close: (() => void) | null = null
    let cached: Listener<Z>[] | null = null

    const getArr = () => cached ?? (cached = Array.from(obj.values()))

    const rebuild = () => {
        cached = null
        const size = obj.size
        if (size === 0) { a = null; return }
        if (size === 1) { a = obj.values().next().value!; return }
        if (size === 2) {
            const [a0, a1] = getArr()
            a = ((...e) => { a0(...e); a1(...e) }) as Listener<Z>
            return
        }
        a = ((...e) => {
            const ar = getArr()
            for (let i = 0, len = ar.length; i < len; i++) ar[i](...e)
        }) as Listener<Z>
    }

    const func: Listener<Z> = (...e) => { a?.(...e) }
    const run = () => { close = b(func) ?? (() => {}) }

    const api = {
        func,
        isRun: () => close !== null,
        run,
        close: () => {
            close?.()
            close = null
        },
        addListen: (cb: Listener<Z>) => {
            obj.set(cb, cb)
            if (fast) rebuild()
            event?.("add", obj.size, api)
            return () => api.removeListen(cb)
        },
        removeListen: (cb: Listener<Z> | null) => {
            obj.delete(cb!)
            if (fast) rebuild()
            event?.("remove", obj.size, api)
        },
        count: () => obj.size,
        get getAllKeys() { return [...obj.keys()] }
    }
    return api
}

export function funcListenCallback<T>(a: (e: (Listener<NormalizeTuple<T>>|null))=>(void | (()=>void)), event?: (type: "add" | "remove", count: number, api: ReturnType<typeof funcListenCallbackBase<T>>)=>void, fast = true) {
    return funcListenCallbackBase<T>(a, {event, fast})
}

export function funcListenCallbackFast<T>(a: (e: (Listener<NormalizeTuple<T>>|null))=>(void | (()=>void))) {
    return funcListenCallbackBase<T>(a, {fast: true})
}

export function UseListen<T>(data: Parameters<typeof funcListenCallbackBase>[1] = {fast : true}) {
    type Z = NormalizeTuple<T>
    let t: ((...a: Z) => void)
    const a = funcListenCallbackBase<T>((e)=>{t = e}, {fast: true, ...data})
    a.run()
    t = a.func
    return [t, a] as const
}


function f() {
    const [set, out] = UseListen<string>()
    out.addListen(e=>{

    })
}