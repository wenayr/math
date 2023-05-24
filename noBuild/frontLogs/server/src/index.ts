import path from "path";
import * as express from "express";


const router = express.Router()

router.post('/auth/login', login)

export {router}


function f() {
    const HOST = '0.0.0.0';
    const PORT: number = +process.env.PORT

    const app = express();

    const server = require('http').createServer(app)

    const io = socketIo(server, {
        pingTimeout: 30000,
        allowUpgrades: false
    });

    initSocketIo(io)

    app.use(cors({credentials: true, origin: true}))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.use('/api', apiRoutes)

    const basicAuthOptions = {challenge: true, users: {}}
    basicAuthOptions.users[process.env.BASIC_AUTH_NAME] = process.env.BASIC_AUTH_PASSWORD
    app.use(basicAuth(basicAuthOptions));

    app.use(express.static(path.resolve(
        path.dirname(require.main.filename), '..', 'client', 'dist', 'client'
    )))

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                path.dirname(require.main.filename), '..', 'client', 'dist', 'client', 'index.html'
            )
        )
    })

    server.listen(PORT, HOST, () => {
        console.log(`Server has been started on port:${PORT}`);
    });
}