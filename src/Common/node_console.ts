///?<reference no-default-lib="true"/>
///?<reference lib="esnext"/>
///?<reference types="node"/>
///?<reference types="source-map-support"/>

import type {CallSite} from "source-map-support"
//type CallSite = { getLineNumber() :number; getFileName() :string; getFunctionName() :string; getColumnNumber() :number; }

export {};


const {self, window} = globalThis as any;

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
        const origLogMethod= console.log;
        const origErrorMethod = console.error;
        let _callee :CallSite|undefined;

        for(let methodName of [
                'debug', 'info', 'log', 'warn', 'error', 'group', 'groupCollapsed', 'table', 'timeLog', 'timeEnd',
                'count', 'assert', 'dir', 'dirxml'
            ] satisfies (keyof typeof console)[])
        {
            const origMethod = console[methodName] as typeof console.log; //any;

            console[methodName] = ((...args :any[]) => {
                if (!_enabled) return origMethod(...args);
                const originalPrepareStackTrace = Error.prepareStackTrace;
                Error.prepareStackTrace = (_, stack) => stack;
                type MyError= {stack: CallSite[]}
                let callee = (new Error() as unknown as MyError).stack[1];
                Error.prepareStackTrace = originalPrepareStackTrace;
                if (!callee) {
                    origErrorMethod("сallee is not found in node_console");
                    _enabled=false;
                    return origMethod(...args);
                }
                if (! methodName.match(/debug|info|log|warn|error|dirxml/)) {
                    _callee ??= callee;  return origMethod(...args);
                }
                if (_callee) { callee= _callee; _callee= undefined; }

                if (wrapCallSite) callee= wrapCallSite(callee);

                const fileName = callee.getFileName(); //path.relative(process.cwd(), callee.getFileName());
                if (fileName?.includes("source-map-support")) { origMethod(...args);  return; }
                let fileAndLine = `${fileName}:${callee.getLineNumber()}:${callee.getColumnNumber()}  `+callee.getFunctionName();
                fileAndLine = fileAndLine.replaceAll("\\","/");
                fileAndLine = fileAndLine.replace("webpack:///","");
                fileAndLine = fileAndLine.replace("?","");
                if (! fileAndLine.startsWith("./"))
                    if (! fileAndLine.toLowerCase().startsWith("file:///")) fileAndLine= "file:///" + fileAndLine;
                let [firstArg, ...otherArgs] = args;
                if (1)
                    origMethod(...args, "",fileAndLine);
                else
                if (typeof firstArg==='string') {
                    origMethod(fileAndLine+' '+firstArg, ...otherArgs);
                } else {
                    origMethod(fileAndLine, ...args);
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


function test() {
    console.log("LOG");
    console.debug("DEBUG");
    console.warn("WARN");
    console.error("ERROR");
    console.info("INFO");
    console.time("ttt");
    console.timeLog("ttt","TIME_LOG");
    console.timeEnd("ttt");
    console.count("COUNT");
    console.group("GROUP");
    console.groupEnd();
    console.groupCollapsed("GROUP COLLAPSED");
    console.groupEnd();
    console.table([10,20,30]);
    console.assert(false);
    console.dir({DIR: 10, b: "str", c: { d: 1, e: [5,6,7] }})
    console.dirxml("DIRXML",10,20,"hello", {a:5, b:"str"});
    console.trace("TRACE");
}

//test();

// // Tests:
// console.log('%s %d', 'hi', 42);
// console.log({ a: 'foo', b: 'bar'});


