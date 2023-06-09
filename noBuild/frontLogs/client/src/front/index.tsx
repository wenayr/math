import {createRoot} from "react-dom/client";
import * as React from 'react';
import {miniApi} from "../connect/io";
// import {FrontExcelToPDF} from "../exselToPDF/frontExcelToPDF";


class GeneralReact extends React.Component<any, any>{
    render() {
        return <div style={{width: "100%", height:"100%"}} >
            <Other/>
            {/*<FrontExcelToPDF/>*/}
        </div>
    }
}


class Other extends React.Component<any, any>{
    render() {
        return <div style={{width: 500, height:500, background:'rgb(212,77,77)'}}
                    onClick={async ()=>{
                        miniApi.api.log(true)
                        console.log(miniApi.api.promiseTotal());
                        console.log(miniApi.api.callbackTotal());
                        console.log("click");
                        const bud = await miniApi.func.sayHi()
                        console.log(bud)
                        //
                        // console.log(await miniApi.func.sum(5,7))
                        console.log(await miniApi.func.pow({x2:3,x1:3}))
                        console.log("!!!!! 0 ")
                        // console.log(await miniApi.test2.sayHi4())
                        console.log(await miniApi.func.sayHi2())
                        console.log("!!!!! 1 ")
                        console.log(await miniApi.func.sayHi())
                        console.log("!!!!! 2 ")
                        // console.log(await miniApi.space.sayHi4())
                        console.log("!!!!! 3 ")

                        // @ts-ignore
                        // console.log(await miniApi.func.sayHi4())

                        console.log("!!!!! 222 ")

                        console.log(await miniApi.func.sayHi44({x2: 23, x1: 23}, async (sum: any)=>{
                            console.log("sumFFFF ", sum)
                        }))
                        //
                        // console.log("click Final");
                    }}
        >
            sdsdasdas
        </div>
    }
}


function GeneralInit(pare:HTMLElement){
    const root = createRoot(pare!); // createRoot(container!) if you use TypeScript
    root.render(<GeneralReact />)
}


export function StartReact(){
    document.body.style.margin = '0'

    const buf = document.createElement("project");
    buf.style.width = '100%';
    buf.style.height = '100%';
    document.body.appendChild(buf)

    // const divCanvas = divCreatEasy(document.body,'div','maxSize');
    GeneralInit(buf)
}
