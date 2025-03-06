import express from 'express';
import type { Express, Request, Response } from 'express';
import axios from 'axios';
import * as fs from 'fs';
import { createAsyncQueue } from 'wenay-common';

const SUBSCRIBERS_FILE = './subscribers.json';

interface Subscriber {
    url: string;
    tags: string;
    expireAt: Date;
}

interface EventHandlers {
    [key: string]: (payload: any) => void;
}

interface WebhookClientOptions {
    serverUrl: string;
    clientPort: number;
    authToken: string;
    autoRenew?: boolean;
    renewIntervalMs?: number;
    app?: Express,
}

const loadSubscribers = (): Map<string, Subscriber> => {
    if (!fs.existsSync(SUBSCRIBERS_FILE)) {
        fs.writeFileSync(SUBSCRIBERS_FILE, '{}', 'utf-8');
    }
    const data = JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8'));
    return new Map(Object.entries(data).map(([key, sub]: [string, any]) => [key, { url: sub.url, tags: sub.tag, expireAt: new Date(sub.expireAt) }]));
};

const Queue = createAsyncQueue(1)
const saveSubscribers = (subscribers: Map<string, Subscriber>) => {
    const serializableSubscribers = Object.fromEntries([...subscribers.entries()].map(([key, sub]) => [key, { url: sub.url, tags: sub.tags, expireAt: sub.expireAt }]));
    Queue.enqueue(()=>fs.promises.writeFile(SUBSCRIBERS_FILE, JSON.stringify(serializableSubscribers, null, 2), 'utf-8'))
};

const normalizeIP = (ip: string): string => {
    if (ip && ip.startsWith('::ffff:')) {
        return ip.replace('::ffff:', '');
    }
    return ip;
};

export const apiSaveData = {
    loadSubscribers,
    saveSubscribers
}
type params = {
    authToken: string,
    port: number|string,
    file?: typeof apiSaveData
    app?: Express;
}
// Серверная часть
export const createWebhookServer = (params: params) => {
    const app: Express = params.app ??  express();
    if (!params.app) app.use(express.json());
    const file = params.file ?? apiSaveData;
    const { authToken, port } = params;
    const subscribers = file.loadSubscribers();

    const checkAuth = (req: Request, res: Response, next: () => void) => {
        if (req.headers.authorization !== authToken) {
            res.status(403).json({ error: 'Недействительный токен авторизации' });
            return;
        }
        next();
    };

    app.post('/webHook_subscribe', checkAuth, (req: Request, res: Response) => {
        const { tags } = req.body;
        const clientAddress = 'http://' + normalizeIP(req.ip ?? "")//req.get("host") //req.get('x-forwarded-for') || req.ip;
        const url = new URL(clientAddress + req.body.url).toString();
        if (!url || typeof url !== 'string' || typeof tags != 'string') {
            res.status(400).json({ error: 'Неверный запрос' });
            return;
        }
        subscribers.set(`${url}`, { url, tags: tags, expireAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) });
        file.saveSubscribers(subscribers);
        res.json({ message: 'Подписка оформлена' });
    });

    app.get('/webHook_status', checkAuth, (req: Request, res: Response) => {
        const clientAddress = 'http://' + normalizeIP(req.ip ?? "")// req.get("host") //req.get('x-forwarded-for') || req.ip;
        // @ts-ignore
        // const url = clientAddress + req.query.url as string;

        const url = new URL(clientAddress + req.query.url as string).toString();
        if (!url) {
            res.status(400).json({ error: 'Неверный запрос' });
            return;
        }

        const subscriber = Array.from(subscribers.values()).find(sub => sub.url === url);
        if (!subscriber) {
            res.json({ subscribed: false });
            return;
        }

        subscriber.expireAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
        file.saveSubscribers(subscribers);
        res.json({ subscribed: true, expireAt: subscriber.expireAt });
    });

    app.delete('/webHook_unsubscribe', checkAuth, (req: Request, res: Response) => {
        const clientAddress = 'http://' + normalizeIP(req.ip ?? "")//  + req.get("host") // req.get('x-forwarded-for') || req.ip;
        const url = new URL(clientAddress + req.body.url).toString();
        const key = Array.from(subscribers.keys()).find(k => subscribers.get(k)?.url === url);
        if (key && subscribers.delete(key)) {
            file.saveSubscribers(subscribers);
            res.json({ message: 'Подписка удалена' });
            return;
        }
        res.status(404).json({ error: 'Подписчик не найден' });
    });

    const emit = async (tag: string, payload: any) => {
        const now = new Date();
        const validSubscribers = Array.from(subscribers.values()).filter(sub => sub.expireAt > now && sub.tags == tag);
        subscribers.forEach((sub, key) => {
            if (sub.expireAt <= now) subscribers.delete(key);
        });
        file.saveSubscribers(subscribers);
        await Promise.all(validSubscribers.map(sub => axios.post(`${sub.url}`, payload).catch(()=>console.error("errr1"))));
    };

    app.post('/webHook_notify', checkAuth, async (req: Request, res: Response) => {
        const { tag, payload } = req.body;
        await emit(tag, payload);
        res.json({ message: 'Webhook отправлен активным подписчикам' });
    });
    // Новые методы:
    app.get('/webHook_client_subscriptions', checkAuth, (req: Request, res: Response) => {
        const clientAddress = 'http://' + normalizeIP(req.ip ?? "");
        const clientSubscriptions = Array.from(subscribers.values()).filter(sub => sub.url.startsWith(clientAddress));
        res.json(clientSubscriptions);
    });

    app.get('/webHook_all_tags', checkAuth, (req: Request, res: Response) => {
        const tagsSet = new Set(Array.from(subscribers.values()).map(sub => sub.tags));
        res.json({ tags: [...tagsSet] });
    });


    const appServerReady = new Promise<void>(resolve => {
        if (!params.app) app.listen(port, () => {
            resolve()
        });
        else resolve()
    })
    return { emit, appServerReady };
};
export const createWebhookClient = (options: WebhookClientOptions) => {
    const { app: app_, serverUrl, clientPort, authToken, autoRenew = false, renewIntervalMs = 86400000 } = options;

    // @ts-ignore
    const app: Express = app_ ? app_ : express();
    if (!app_) app.use(express.json());

    const handlers: EventHandlers = {};
    const activeTags = new Set<string>();

    const connect = async (tag: string, handler: (payload: any) => void) => {
        if (activeTags.has(tag)) {
            console.warn(`Тег ${tag} уже подписан`);
            return;
        }
        // handlers[tag] = handler

        app.post(`/webHook_${tag}`, (req: Request, res: Response) => {
            handler(req.body);
            res.end();
        });


        const url = `:${clientPort}/webHook_${tag}`;
        await axios.post(`${serverUrl}/webHook_subscribe`, { url, tags: tag }, {
            headers: { authorization: authToken }
        });

        activeTags.add(tag);

        if (autoRenew) {
            setInterval(() => {
                axios.get(`${serverUrl}/webHook_status`, { params: { url }, headers: { authorization: authToken } })
                    .catch(()=>console.error("err2"));
            }, renewIntervalMs);
        }
    };
    const status = async (tag: string) => {
        const url = `:${clientPort}/webHook_${tag}`;
        return axios.get(`${serverUrl}/webHook_status`, { params: { url }, headers: { authorization: authToken } })
    }
    const unsubscribe = async (...tags: string[]) => {
        const arr = tags.length ? tags : [...activeTags]
        Promise.all(arr.map(async tag=>{
            const url = `:${clientPort}/webHook_${tag}`;
            await axios.delete(`${serverUrl}/webHook_unsubscribe`, { data: { url }, headers: { authorization: authToken } })
                .catch(e=>{

                });
            activeTags.delete(tag);
        }))
    };
    const getMySubscriptions = async (): Promise<Subscriber[]> => {
        const { data } = await axios.get(`${serverUrl}/webHook_client_subscriptions`, {
            headers: { authorization: authToken }
        });
        return data;
    };

    const getAvailableTags = async (): Promise<string[]> => {
        const { data } = await axios.get(`${serverUrl}/webHook_all_tags`, {
            headers: { authorization: authToken }
        });
        return data.tags;
    };
    const tags = () => [...activeTags]
    const Provider = async (tag: string, payload: any) => {
        await axios.post(`${serverUrl}/webHook_notify`, {
            tag ,
            payload
        }, { headers: { authorization: authToken } });
    }
    const appServerReady = new Promise<void>(resolve => {
        if (!app_) app.listen(clientPort, () => {
            resolve()
        });
        else resolve()
    })
    return { connect, unsubscribe, status, tags, getMySubscriptions, getAvailableTags, Provider, appServerReady };
};
