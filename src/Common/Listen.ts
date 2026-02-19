export type Listener<T extends any[]> = (...r: T) => void

export function funcListenCallbackBase<T extends any[]>(b: (e: Listener<T>) => (void | (() => void)),
                                                        data?: {
                                                            event?: (type: "add" | "remove", count: number, api: ReturnType<typeof funcListenCallbackBase<T>>) => void,
                                                            fast?: boolean
                                                        }
) {
    const {fast = true, event} = data ?? {}
    type cbClose = ()=>void
    const obj = new Map<Listener<T>, Listener<T>>()
    const evClose = new Map<cbClose|Listener<T>, cbClose>()
    const sinh = new Map<cbClose, Listener<T>>()
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
            obj.clear()
            if (fast) rebuild()
            sinh.clear()
            evClose.forEach(cb => cb())
            evClose.clear()
        },
        eventClose: (cb: ()=>void) => {
            evClose.set(cb, cb)
            return () => {evClose.delete(cb)}
        },
        removeEventClose: (cb: ()=>void) => {
            const e=sinh.get(cb)
            if (e) evClose.delete(e)
            sinh.delete(cb)
            evClose.delete(cb)
        },
        addListen: (cb: Listener<T>, cbClose?: ()=>void) => {
            obj.set(cb, cb)
            if (cbClose) {
                if (evClose.has(cb)) {
                    // что-то странное
                    const r=evClose.get(cb)!
                    if (r!==cbClose) {
                        // что-то странное очень
                        evClose.delete(r)
                        evClose.delete(cb)
                        sinh.delete(r)
                    }
                }
                evClose.set(cb, cbClose)
                sinh.set(cbClose, cb)
            }
            if (fast) rebuild()
            event?.("add", obj.size, api)
            return () => api.removeListen(cb)
        },
        removeListen: (cb: Listener<T> | null) => {
            obj.delete(cb!)
            const e=evClose.get(cb!)
            if (fast) rebuild()
            evClose.delete(cb!)
            if (e) {
                evClose.delete(e)
                sinh.delete(e)
            }
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
    t = a.func;
    return [t, a] as const
}

/** Проверяет, является ли объект результатом funcListenCallbackBase */
export function isListenCallback(obj: any): obj is ReturnType<typeof funcListenCallbackBase> {
    if (obj == null || typeof obj !== "object") return false
    const obj2 = obj as ReturnType<typeof funcListenCallbackBase>
    return (
        typeof obj2.addListen === "function" &&
        typeof obj2.removeListen === "function" &&
        typeof obj2.eventClose === "function" &&
        typeof obj2.func === "function" &&
        typeof obj2.count === "function"
    )
}
