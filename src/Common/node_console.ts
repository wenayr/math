///? <reference no-default-lib="true"/>
///<reference lib="esnext"/>
///<reference types="node"/>
///<reference types="source-map-support"/>


import type {CallSite} from "source-map-support"
//type CallSite = { getLineNumber() :number; getFileName() :string; getFunctionName() :string; getColumnNumber() :number; }

export {};

// @ts-ignore
declare var self : unknown;
// @ts-ignore
declare var window : unknown;

//console.log("!!!!!",typeof self, typeof window);



if (1)
(async()=>{
    if (typeof self != 'object' && typeof window!="object") { // если запущено на node.js

        let wrapCallSite : ((frame :CallSite)=>CallSite) | undefined; //  ((position :Position)=>Position) | undefined;

        let moduleName= 'source-map-support';
        try {
            let module= await import(/* webpackIgnore: true */ moduleName) as typeof import('source-map-support');
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

        for(let methodName of ['debug', 'log', 'warn', 'error'] as (keyof typeof console)[]) {
            const originalLoggingMethod = console[methodName] as typeof console.log; //any;

            console[methodName] = ((firstArgument? :any, ...otherArguments :any[]) => {
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
// // Tests:
// console.log('%s %d', 'hi', 42);
// console.log({ a: 'foo', b: 'bar'});
// throw new Error("Errrrrr");

