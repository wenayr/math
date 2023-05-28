
// import * as baseTypes from "./Common/BaseTypes";
// import * as common from "./Common/Common";
// import * as time from "./Common/Time";
// import * as math from "./Common/Math";
// import * as list from "./Common/List";
// import * as color from "./Common/Color";
// import * as listNodeAnd from "./Common/ListNodeAnd";
// import * as console from "console";
// // export {common}
// // export * from "./and/CParams";
//
//


export * from "./Common/BaseTypes";
export * from "./Common/ByteStream";
export * from "./Common/Color";
export * from "./Common/Time";
export * from "./Common/Common";
export * from "./Common/commonsServer";
export * from "./Common/event";
export * from "./Common/funcTimeWait";
export * from "./Common/List";
export * from "./Common/ListNodeAnd";

export * from "./Common/Math";

export * from "./Common/node_console";
export * from "./Common/objectPath";

export * from "./Common/waitRun";


export * from "./Exchange/Bars";
// export * from "./Exchange/mini";
export * from "./Exchange/LoadBase";


export * from "./Exchange/ConnectData/Binance";

// export * from "./Exchange/IHistoryBase";

export * as BaseTypes from "./Common/BaseTypes";
export * as Common from "./Common/Common";
export * as Time from "./Common/Time";
export * as Color from "./Common/Color";
export * as ListNodeAnd from "./Common/ListNodeAnd";
export * as Math from "./Common/Math";
export * as List from "./Common/List";
export * as LoadCandles from "./Exchange/ConnectData/Binance";

import {CListNodeAnd} from "./Common/ListNodeAnd";

export function test() {
    const tt = new CListNodeAnd()
    console.log("test");
    console.log("lalalal")
}

// let myModule;
// // if (typeof window !== 'undefined') {
// //     // клиентская сборка (браузер)
// //     myModule = require('./client.js');
// // } else
//     if (typeof process !== 'undefined' &&
//     process + '' === '[object process]') {
//     // серверная сборка (Node.js)
//         myModule = import("./server")
//     // export * from "./Common/Math";
//     // myModule = require('./server.js');
// } else {
//         myModule = import("./client")
//         // myModule = require('./client.js')
//     }
// // использование модуля myModule
//
// export {myModule}