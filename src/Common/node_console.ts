///?<reference no-default-lib="true"/>
///?<reference lib="esnext"/>
///?<reference types="node"/>
///?<reference types="source-map-support"/>

import type {CallSite} from "source-map-support"
//type CallSite = { getLineNumber() :number; getFileName() :string; getFunctionName() :string; getColumnNumber() :number; }

export {};

// @ts-ignore
declare var self : unknown;
// @ts-ignore
declare var window : unknown;

//console.log("!!!!!",typeof self, typeof window);

let _enabled = false;

export function enable(flag=true) { _enabled= flag; }
export function disable()         { _enabled= false; }

let wrapCallSite : ((frame :CallSite)=>CallSite) | undefined; //  ((position :Position)=>Position) | undefined;
if (1)
//await (async()=>{
(()=>{
    if (typeof self != 'object' && typeof window!="object") { // если запущено на node.js


        //let inspector= await import(/* webpackIgnore: true */ 'inspector');
        function moduleName(name :string) { return name; } // дополнительная обёртка, чтобы webpack не выдавал ошибку в js файле, скомпилированном с удалением комментариев
        let inspector= require(/* webpackIgnore: true */ moduleName('inspector')) as typeof import('inspector');
        if (inspector.url()!=undefined) return;  // запущено в дебаггере
        try {
            //let module= await import(/* webpackIgnore: true */ 'source-map-support');// as typeof import('source-map-support');
            let module= require(/* webpackIgnore: true */ moduleName('source-map-support')) as typeof import('source-map-support');
            // для CommonJS надо будет ещё задать module.parser.javascript.commonjsMagicComments
            // require(/* webpackIgnore: true */ moduleName).install();
            module.install();
            wrapCallSite = module.wrapCallSite; //.mapSourcePosition;
        }
        catch(e) {
            console.warn(e);
            //console.error("!!!!");
            return;
        }
        _enabled= true;
        for(let methodName of ['debug', 'log', 'warn', 'error'] as (keyof typeof console)[]) {
            const originalLoggingMethod = console[methodName] as typeof console.log; //any;

            console[methodName] = ((firstArgument? :any, ...otherArguments :any[]) => {
                if (!_enabled) return originalLoggingMethod(firstArgument, ...otherArguments);
                const originalPrepareStackTrace = Error.prepareStackTrace;
                Error.prepareStackTrace = (_, stack) => stack;
                type MyError= { stack: CallSite[]}
                let callee = (new Error() as unknown as MyError).stack[1];
                if (!callee) return;
                if (wrapCallSite) callee= wrapCallSite(callee);

                Error.prepareStackTrace = originalPrepareStackTrace;
                const fileName = callee.getFileName(); //path.relative(process.cwd(), callee.getFileName());
                if (fileName?.includes("source-map-support")) { originalLoggingMethod(firstArgument, ...otherArguments);  return; }
                let fileAndLine = `${fileName}:${callee.getLineNumber()}:${callee.getColumnNumber()}  `+callee.getFunctionName();
                fileAndLine = fileAndLine.replaceAll("\\","/");
                fileAndLine = fileAndLine.replace("webpack:///","");
                fileAndLine = fileAndLine.replace("?","");
                if (! fileAndLine.startsWith("./"))
                    if (! fileAndLine.toLowerCase().startsWith("file:///")) fileAndLine= "file:///" + fileAndLine;
                if (1)
                    originalLoggingMethod(firstArgument, ...otherArguments, "",fileAndLine);
                else
                if (typeof firstArgument === 'string') {
                    originalLoggingMethod(fileAndLine + ' ' + firstArgument, ...otherArguments);
                } else {
                    originalLoggingMethod(fileAndLine, firstArgument, ...otherArguments);
                }
            }) as any;
        }
    }
})();

// возвращает файл, строчку и позицию где был вызван, либо выше вызванная функция по номеру уровня
export function __LineFile(lvl = 0){
    if (!_enabled) {
        return ""
    }
    const originalPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    type MyError= { stack: CallSite[]}
    let e = (new Error() as unknown as MyError).stack[lvl + 1];
    if (wrapCallSite) e= wrapCallSite(e);
    Error.prepareStackTrace = originalPrepareStackTrace;
    return `${e.getFileName()}:${e.getLineNumber()}:${e.getColumnNumber()}  ` + e.getFunctionName()
}
export function __LineFiles(lvlStart = 0, lvlEnd: number|undefined = 5){
    if (!_enabled) {
        return ""
    }
    const originalPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    type MyError= { stack: CallSite[]}
    let e = (new Error() as unknown as MyError).stack.slice(lvlStart + 1, lvlEnd);
    if (wrapCallSite) e = e.map(e=> wrapCallSite!(e));
    const msgs = e.map(e=>`${e.getFileName()}:${e.getLineNumber()}:${e.getColumnNumber()}  ` + e.getFunctionName())
    Error.prepareStackTrace = originalPrepareStackTrace;
    return msgs
}
// // Tests:
// function ttt(){
//     console.log(__LineFile(1));
// }
// ttt()
// console.log('%s %d', 'hi', 42);
// console.log({ a: 'foo', b: 'bar'});
// throw new Error("Errrrrr");

