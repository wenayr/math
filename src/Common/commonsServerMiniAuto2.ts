import { isListenCallback, funcListenCallbackBase } from "./Listen";
import { listenSocket, DeepSocketListen } from "./ListenBySocket2";
import {
    CreatAPIFacadeServer2,
    type PromiseServerHooks,
    type ClientAPI, SocketTmpl,
    type RpcLimits,
} from "./commonsServerMini2";

type ListenCallbackBase<T extends any[] = any[]> = ReturnType<typeof funcListenCallbackBase<T>>;

export function CreatAPIFacadeServerAuto2<T extends object>({ socket, object: target, socketKey: key, debug, hooks, disconnectListen, limits }: {
    socket: SocketTmpl;
    object: T;
    socketKey: string;
    debug?: boolean;
    hooks?: Omit<PromiseServerHooks<DeepSocketListen<T>>, "resolveTransform">;
    disconnectListen?: ListenCallbackBase<any>;
    limits?: RpcLimits;
}) {
    const cache = new WeakMap<object, ReturnType<typeof listenSocket>>();

    function getListenSocket(parent: any, disconnectListen?: ListenCallbackBase<any>): ReturnType<typeof listenSocket> {
        let result = cache.get(parent);
        if (!result) {
            result = listenSocket(parent, { addListenClose: disconnectListen });
            cache.set(parent, result);
        }
        return result;
    }
    CreatAPIFacadeServer2({
        socket, object: target as any, socketKey: key, debug, limits,
        hooks: {
            ...hooks,
            resolveTransform: (value: any, k: string, parent: any) => {
                if (k !== "callback" && k !== "removeCallback") return value;
                if (!isListenCallback(parent)) return value;
                return getListenSocket(parent, disconnectListen)[k as "callback" | "removeCallback"];
            },
        } as any,
    });
}

export type AutoClientAPI<T> = ClientAPI<DeepSocketListen<T>>;