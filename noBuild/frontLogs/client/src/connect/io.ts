import {io} from "socket.io-client";
import {environment} from "../environments/environment";
import {FasadOne} from "../../../aCode/all/fasad/fasad";
import {CreatAPIFacadeClient} from "wenay-common";
// import {CreatAPIFacadeClient, funcForWebSocket, funcScreenerClient2, typeNoVoid2, typeVoid2} from "wenay-common";

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
    const facadeApi = CreatAPIFacadeClient<FasadOne>({socketKey, socket})



    // const tr = funcForWebSocket<any>({
    //     sendMessage: (data) => socket.emit(socketKey, data),
    //     api: (data)=> {
    //         socket.on(socketKey, (d) => {
    //             data.onMessage(d)
    //         })
    //     }
    // })
    //
    // const func = funcScreenerClient2<typeVoid2<FasadOne>>(tr)
    // const space = funcScreenerClient2<typeNoVoid2<FasadOne>>(tr, false)



    return facadeApi
}