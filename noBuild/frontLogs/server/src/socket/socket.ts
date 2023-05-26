import {tIo} from "../index";
import {CTestWeb, funcPromiseServer, funcPromiseServer2} from "../../../../../src/Common/commonsServer";
import {FasadOne} from "../../../aCode/all/fasad/fasad";

export function initSocketIo(io : tIo) {

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
        socket.emit('hi', {he:"hi"})


        socket.on('disconnect', async (reason) => {
                socket.disconnect();
            })

        socket.on('hi', ()=>{
            socket.emit('hi', {he:"hiiii"})
        })

        socket.on('*', (d)=>{
            console.log(d)
        })


// const send = ((data: object) => socket.emit(socketKey, data)) satisfies Parameters<(typeof funcPromiseServer<CTestWeb>)>[0]["sendMessage"]

        const t = new FasadOne()
        const socketKey = "la"


        // const api_ = funcPromiseServer2( data => socket.emit(socketKey, data),t)
        // socket.on(socketKey, (d)=> api_(d))


        // серверная часть (она же клиенская для выполнения подписок)
        funcPromiseServer({
                sendMessage: (data) => socket.emit(socketKey, data),
                api:(api) => {
                socket.on(socketKey, (d)=> api.onMessage(d))
            }}
            ,t)

    })
}

