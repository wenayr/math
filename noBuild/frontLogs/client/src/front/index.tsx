import {createRoot} from "react-dom/client";
import React from 'react';
import {miniApi} from "../connect/io";


class GeneralReact extends React.Component<any, any>{
    render() {
        return <div style={{width: 500, height:500, background:'rgb(212,77,77)'}}
            onClick={async ()=>{
                // console.log("click");
                // const bud = await miniApi.func.sayHi()
                // console.log(bud)
                // //
                // console.log(await miniApi.func.sum(5,7))
                // console.log(await miniApi.func.pow({x2:3,x1:3}))
                // // console.log(await miniApi.test2.sayHi4())
                // console.log(await miniApi.func.sayHi2())
                // console.log(await miniApi.func.sayHi())
                // console.log(await miniApi.space.sayHi4())

                // @ts-ignore
                console.log(await miniApi.func.sayHi4())
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
