import * as fs from "fs";
import {createAsyncQueue} from "./waitRun";
import {Transformer} from "./Decorator";

export type saveKeyValue = ReturnType<typeof saveKeyValue>

export function saveKeyValue({ dirDef = "", key: _key = "" }: { dirDef: string; key?: string }) {
    async function ensureDir(dir: string): Promise<string> {
        const fullDir = dirDef ? `${dirDef}/${dir}` : dir;
        await fs.promises.mkdir(fullDir, { recursive: true });
        return `${fullDir}/`;
    }

    const getPath = (path = "") => (dirDef ? `${dirDef}/${path}` : path);

    async function get({ key = _key, path = "" } = {}) {
        const fullPath = await ensureDir(path);
        return fs.promises.readFile(`${fullPath}${key}`, "utf-8");
    }

    async function has({ key = _key, path = "" } = {}) {
        return fs.promises.access(`${getPath(path)}/${key}`)
            .then(() => true)
            .catch(() => false);
    }

    async function set({ key = _key, obj, path = "" }: { key?: string; obj: string; path?: string }) {
        const fullPath = await ensureDir(path);
        await fs.promises.writeFile(`${fullPath}${key}`, obj);
    }

    async function setElMap({ key = _key, keyEl, valueEl, path = "" }: { key?: string; keyEl: string; valueEl: any; path?: string }) {
        const exists = await has({ key, path });
        const data = exists ? JSON.parse(await get({ key, path })) : {};
        data[keyEl] = valueEl;
        await set({ key, obj: JSON.stringify(data), path });
    }

    async function delEl({ key = _key, keyEl, path = "" }: { key?: string; keyEl: string; path?: string }) {
        if (!(await has({ key, path }))) throw new Error(`Файл не найден: ${path}${key}`);
        const data = JSON.parse(await get({ key, path }));
        delete data[keyEl];
        await set({ key, obj: JSON.stringify(data), path });
        return true;
    }

    async function del({ key = _key, path = "" } = {}) {
        const fullPath = getPath(path);
        await fs.promises.rm(`${fullPath}/${key}`);
    }

    const queue = createAsyncQueue(1);
    const queueFunc = <T extends (...args: any[]) => any>(f: T) => Transformer(f, ([args, func]) => queue.enqueue(() => func(...args)) as ReturnType<T>);

    return {
        get,
        has,
        set: queueFunc(set),
        setElMap: queueFunc(setElMap),
        delEl: queueFunc(delEl),
        del,
    };
}
