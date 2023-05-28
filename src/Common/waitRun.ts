import {sleepAsync} from "./Common";

export function waitRun() {
    let lastTime: number = Date.now()
    let funcAsync = Promise.resolve();
    let busy: boolean = false
    let lastFunc1: () => void
    return {
        //Сперва запускает, потом ставит ограничения до след запуска, Примечание, просо фильтрует запуск если по времени пауза еще не прошла. Т.е. запуск может не исполнится
        refreshAsync: (ms: number, func: () => void | Promise<void>) => {
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
        refreshAsync2: (ms: number, func?: () => void | Promise<void>) => {
            if (!func) return;
            lastFunc1 = func;
            if (!busy) {
                busy = true;
                funcAsync = funcAsync.then<void>(async () => {
                    await sleepAsync(ms)
                    lastFunc1?.();
                    busy = false;
                    return;
                })
            }
        }
    }
}