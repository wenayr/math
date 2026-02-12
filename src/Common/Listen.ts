export type Listener<T extends any[]> = (...r: T) => void

export function funcListenCallbackBase<T extends any[]>(b: (e: Listener<T>) => (void | (() => void)),
                                                        data?: {
                                                            event?: (type: "add" | "remove", count: number, api: ReturnType<typeof funcListenCallbackBase<T>>) => void,
                                                            fast?: boolean
                                                        }
) {
    const {fast = false, event} = data ?? {}

    const obj = new Map<Listener<T>, Listener<T>>()
    let a: Listener<T> | null = (...e) => {obj.forEach(z => z(...e))}
    let close: (() => void) | null = null
    let cached: Listener<T>[] | null = null

    const getArr = () => cached ?? (cached = Array.from(obj.values()))

    const rebuild = () => {
        cached = null
        const size = obj.size
        if (size === 0) { a = null; return }
        if (size === 1) { a = obj.values().next().value!; return }
        if (size === 2) {
            const [a0, a1] = getArr()
            a = ((...e) => { a0(...e); a1(...e) }) as Listener<T>
            return
        }
        a = ((...e) => {
            const ar = getArr()
            for (let i = 0, len = ar.length; i < len; i++) ar[i](...e)
        }) as Listener<T>
    }

    const func: Listener<T> = (...e) => { a?.(...e) }
    const run = () => { close = b(func) ?? (() => {}) }

    const api = {
        func,
        isRun: () => close !== null,
        run,
        close: () => {
            close?.()
            close = null
        },
        addListen: (cb: Listener<T>) => {
            obj.set(cb, cb)
            if (fast) rebuild()
            event?.("add", obj.size, api)
            return () => api.removeListen(cb)
        },
        removeListen: (cb: Listener<T> | null) => {
            obj.delete(cb!)
            if (fast) rebuild()
            event?.("remove", obj.size, api)
        },
        count: () => obj.size,
        get getAllKeys() { return [...obj.keys()] }
    }
    return api
}
export function funcListenCallbackFast<T extends any[]>(a: (e: (Listener<T>|null))=>(void | (()=>void))) {
    return funcListenCallbackBase(a, {fast: true})
}
export function funcListenCallback<T extends any[]>(a: (e: (Listener<T>|null))=>(void | (()=>void)), event?: (type: "add" | "remove", count: number, api: ReturnType<typeof funcListenCallbackBase<T>>)=>void, fast = true) {
    return funcListenCallbackBase(a, {event, fast})
}

export function UseListen<T extends any[]>(data: Parameters<typeof funcListenCallbackBase>[1] = {fast : true}) {
    let t: ((...a: T) => void)// | null = null
    const a = funcListenCallbackBase<T>((e)=>{t = e}, {fast: true, ...data})
    a.run()
    t = a.func
    return [t, a] as const
}
