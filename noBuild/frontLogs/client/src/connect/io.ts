import {io} from "socket.io-client";
import {environment} from "../environments/environment";
import {FasadOne} from "../../../aCode/all/fasad/fasad";
import {funcForWebSocket, funcScreenerClient2, typeNoVoid2, typeVoid2} from "wenay-common";

export const miniApi = fConnect()

export function fConnect() {
    const fullUrl = location.protocol + '//' + location.hostname + ':' + environment.port;
    // const socket = io();
    //
    const socket = io(fullUrl, {
        transports: ['websocket'],
        query: {
            token: ""//this.auth.getToken()
        },
        forceNew: true
    });

    socket.on('disconnect', (reason) => {

    });

    socket.on('toast', (data) => {

    });


    const socketKey = "la";


    const tr = funcForWebSocket<any>({
        sendMessage: (data) => socket.emit(socketKey, data),
        api: (data)=> {
            socket.on(socketKey, (d) => {
                data.onMessage(d)
            })
        }
    })

    const func = funcScreenerClient2<typeVoid2<FasadOne>>(tr)
    const space = funcScreenerClient2<typeNoVoid2<FasadOne>>(tr, false)


    //space.sum()
    type MyType = {
        foo: () => void;
        bar: () => number;
        baz: (x: string) => void;
    };

    // type typeVoid<T> = Pick<
    //     T,
    //     {
    //         [K in keyof T]: T[K] extends (any:any)=>any ? ReturnType<T[K]> extends void ? never : K : never;
    //     }[keyof T]
    // >;
    //
    // type typeNoVoid<T> = Pick<
    //     T,
    //     {
    //         [K in keyof T]: T[K] extends (any:any)=>any ? ReturnType<T[K]> extends void ? K : never : never;
    //     }[keyof T]
    // >;
    //
    // type typeVoid2<T> = {
    //     [P in Exclude<keyof T, { [P in keyof T]: T[P] extends (any:any)=>any ? ReturnType<T[P]> extends void ? P : never : never; }[keyof T]>]: T[P];
    // };
    //
    //
    // type typeNoVoid2<T> = {
    //     [P in Exclude<keyof T, { [P in keyof T]: T[P] extends (any:any)=>any ? ReturnType<T[P]> extends void ? never : P : never; }[keyof T]>]: T[P];
    // };
    //
    // let ty = {} as unknown as typeVoid<FasadOne>
    // ty.sayHi2()
    //
    //
    // let ty2 = {} as unknown as typeNoVoid<FasadOne>
    // ty2.sayHi4()
    //
    // // Omit<AllKeys, keyof RemoveThoseKeys>   Omit<T, keyof P>
    // type yy = Omit<any, any>
    // const test2 = funcScreenerClient2<FasadOne>(tr)
    //
    //
    // const r1 = funcScreenerClient2<typeVoid2<FasadOne>>(tr)
    // const r2 = funcScreenerClient2<typeNoVoid2<FasadOne>>(tr)
    //
    //  r1.sayHi2()
    //
    //  r2.sayHi4()


    return {
        func,
        space
    }

}