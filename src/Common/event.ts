import {CListNodeAnd} from "./ListNodeAnd";

export type tListEvent<T=any, T2=void> = {
    // что нужно выполнить при событии
    func?:(data?:T)=>T2,
    // что нужно выполнить при событии выполниться сразу после первого func2(){this.del()} - удалит текущее событие после выполнения, вызовет OnDel() если он есть
    func2?:(data?:T)=>void,
    // Удаление данного события из списка из вне
    del?:()=>void,
    // Вызывается после удаления данного события из списка
    OnDel?:()=>void
}

//callback версия 2.0 по массивам (вдруг окажется производительнее)
export class CObjectEventsArr<T extends object>{
    private data :tListEvent[] = []

    private set setup(link:tListEvent) {
        const data = link
        data.del = ()=>{
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i]==data) {
                    this.data[i].OnDel?.();
                    this.data.splice(i,1)
                    data.OnDel?.();
                    return;
                }
            }
            console.error("элемент уже был удален")
            console.trace()
            data.OnDel?.();
            console.log(this.count());
        }
    }
    AddStart(data:tListEvent)               {this.data.unshift(data); this.setup = this.data[0]}
    AddEnd(data:tListEvent)                 {this.setup = this.data[this.data.push(data)-1]}
    Add(data:tListEvent)                    {this.setup = this.data[this.data.push(data)-1]}
    OnEvent(data?:any)                      {this.data.forEach((e)=>{e.func?.(data); e.func2?.(data);})}

    // OnSpecEvent<T extends object>(f:(e:T)=>void)           {this.data.forEach((e)=>{let l=e.func?.() as T; if (l) {f(l);}  e.func2?.();})}
    OnSpecEvent(f:(e:T)=>void)              {this.data.forEach((e)=>{const l= e.func?.() as unknown as (T|undefined); l&&f(l); e.func2?.();})} // l&&f(l);  if (l) {f(l);}
    Clean()                                 {
        for (let i = this.data.length - 1; i >= 0; i--) {
            this.data[i].del?.();
            this.data[i].OnDel?.();
        }
        this.data=[];
    }
    count()                                 {return this.data.length}
    get length()                            {return this.count()}
}


export class CObjectEventsList<T=unknown>{
    constructor(log=true) {
        this._log=log;
    }
    Id =0
    private _log = false
    private data = new CListNodeAnd<tListEvent<T>>()
    private set setup(link:CListNodeAnd<tListEvent<T>>) {
        const buf = link;
        const data = link.data!
        // редкое читерство, теперь и ты попробуй догадаться для чего это тут
        let fanClub = data.del
        data.del = ()=>{
            fanClub?.()
            fanClub = undefined; // чтобы функция удаления отчищалась при срабатывании
            buf.DeleteLink();
            data.OnDel?.();
        }
        if (this._log && this.count()>20) {
            console.trace("подозрительное большое количество подписок ",this.count());
            this.log();
        }
    }

    log()                       {let er:object[]=[]; this.data.forEach(e=>er.push(e)); console.log(er);}
    AddStart(data:tListEvent)   {this.setup = this.data.AddStart(data)}
    AddEnd(data:tListEvent)     {this.setup = this.data.AddEnd(data)}
    Add(data:tListEvent)        {this.setup = this.data.AddEnd(data)}
    OnEvent(data?:T)            {this.data.forEach(e=>{e.func?.(data); e.func2?.(data);})}
    OnSpecEvent<T>(f:(e?:T)=>void)  {this.data.forEach((e)=>{let l=e.func?.(); if (l) {f(l);}  e.func2?.();})}
    Clean()                     {let r:CListNodeAnd<any>|undefined =this.data.First(); while (r) {let buf = r; r=r?.Next(); buf.DeleteLink()}}
    count()                     {return this.data.countRef()}
    get length()                {return this.count()}
}