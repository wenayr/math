import {io} from "socket.io-client";
import {environment} from "../environments/environment";

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

    return {
        socket
    }

}