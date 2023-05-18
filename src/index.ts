
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

// export * from "./Common/BaseTypes";
export * from "./Common/Time";
export * from "./Common/common";
export * from "./Common/Color";
export * from "./Common/ListNodeAnd";
export * from "./Common/Math";
export * from "./Exchange/ConnectData/Binance";

export * as BaseTypes from "./Common/BaseTypes";
export * as Common from "./Common/common";
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