import {tIo} from "../index";
import {CreatAPIFacadeServer} from "wenay-common";
import {FasadOne} from "../all/fasad/fasad";

export function initSocketIo(io : tIo) {

    const FacadeApi = new FasadOne()
    const socketKey = "la"


    io.use(async (socket, next) => {
        try {
            next()
            // const token = socket.handshake.query.token;
            // if (token) {
            //     if (token !== process.env.APITOKEN.trim() && token !== process.env.INVESTOR_APITOKEN.trim()) {
            //         next(new Error('invalidToken'));
            //     } else {
            //         socket.isInvestor = token == process.env.INVESTOR_APITOKEN.trim()
            //         return next();
            //     }
            // } else {
            //     next(new Error('invalidToken'));
            // }
        } catch (e) {
            console.warn(e)
        }
    });


    io.sockets.on('connection', async function (socket) {
        socket.on('disconnect', async (reason) => {
                socket.disconnect();
            })
        socket.on('*', (d)=>{
            console.log(d)
        })
        CreatAPIFacadeServer({object: FacadeApi, socketKey: socketKey, socket: socket})
    })


}

