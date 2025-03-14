import {funcListenBySocket2 as soc, UseListen} from "wenay-common";

type transformer = (func: (data: any) => any, tag: string, data: any) => any
export function SocketServerHook(opt?:{transformer?: transformer}) {
    const obj: {[k: string]: ReturnType<typeof UseListen>} = {}
    const transformer = opt?.transformer
    return {
        obj,
        get(tag: string) {
            return obj[tag] ??= UseListen()
        },
        provider: (tag: string, data: any) => {
            const r = obj[tag]?.[0]
            if (transformer) transformer(r, tag, data)
            else r(data)
        }
    } as const
}
export function WebSocketServerHook(s: ReturnType<typeof SocketServerHook>, paramsSoc?: Parameters<typeof soc>[1], disconnect?:()=>any) {
    const get = new Proxy(s.obj, {
        get(target: any, p: string, receiver: any): any {
            return soc(s.get(p)[1], paramsSoc)
        }
    }) as {[k: string]: ReturnType<typeof soc>}
    return {
        disconnect(){disconnect?.()},
        get,
        keys: ()=> Object.keys(s.obj),
        ping: () => "pong",
        provider: s.provider
    }
}
export type WebSocketServerHook = ReturnType<typeof WebSocketServerHook>