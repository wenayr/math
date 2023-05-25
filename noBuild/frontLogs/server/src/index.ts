import * as express from 'express';
import * as cors from 'cors';
import * as socketIo from 'socket.io';
import * as dotenv from "dotenv";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as basicAuth from 'express-basic-auth';
import {Server} from "socket.io";

const router = express.Router()

export type tIo = InstanceType<typeof Server>

dotenv.config()

export {router}

f();

function getIo() {
    const app = express();
    const server = require('http').createServer(app)
    const io = new Server(server, {
        pingTimeout: 30000,
        allowUpgrades: false
    })
    return {io, app, server}
}

function f() {
    const {app,io,server} = getIo()
    // подробно расписанные правила работы
    // initSocketIo(io)

    app.use(cors({credentials: true, origin: true}))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // app.use('/api', apiRoutes)

    {
        const users = {
            // @ts-ignore
            [process.env!.BASIC_AUTH_NAME!]: process.env!.BASIC_AUTH_PASSWORD!
        }
        app.use(basicAuth({challenge: true, users}));
    }


    const filename = require.main!.filename
    const dirname = path.resolve(path.dirname(filename), '..', '..', 'client', 'build')
    const n2 = path.resolve(dirname, 'index.html')

    app.use(express.static( dirname ))
    app.get('*', (req, res) => res.sendFile( n2 ))


    // @ts-ignore
    const PORT: number = +process.env!.PORT!
    const HOST = '0.0.0.0';
    server.listen(PORT, HOST, () => {
        console.log(`Server has been started on port:${PORT}`);
    });
}
