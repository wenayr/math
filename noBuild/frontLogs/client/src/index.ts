import {StartReact} from "./front";
import {fConnect} from "./connect/io";
import {test} from "wenay-common/lib/server";
import {funcTestLoad} from "./loadBars/loadBars";

window.onload = function() {
    console.log("2321312");
    fConnect()
    StartReact()



    test()

    funcTestLoad()

}


