import {sleepAsync} from "./common";

export function waitRun() {
    let lastTime: number = Date.now()
    let funcAsync = Promise.resolve();
    let busy: boolean = false
    let lastFunc1: () => any | Promise<any>
    return {
        //Сперва запускает, потом ставит ограничения до след запуска, Примечание, просо фильтрует запуск если по времени пауза еще не прошла. Т.е. запуск может не исполнится
        refreshAsync: (ms: number, func: () => any | Promise<any>) => {
            if (lastTime + ms < Date.now() && !busy) {
                busy = true;
                funcAsync = funcAsync.then<void>(() => {
                    func();
                    busy = false;
                    lastTime = Date.now()
                    return;
                })
            }
        },
        //сперва ждет, потом гарантировано запускает последний переданный вариант
        refreshAsync2: (ms: number, func: () => any | Promise<any>) => {
            if (!func) throw "refreshAsync2: func = undefined ";
            lastFunc1 = func;
            if (!busy) {
                busy = true;
                funcAsync.finally(async () => {
                    funcAsync = (async ()=> {
                        await sleepAsync(ms)
                        await (async ()=>lastFunc1?.())()
                        busy = false;
                    })()
                })
            }
            return funcAsync;
        }
    }
}