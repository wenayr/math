import {createRoot} from "react-dom/client";
import React from 'react';


class GeneralReact extends React.Component<any, any>{
    render() {
        return <div style={{width: 500, height:500, background:'rgb(212,77,77)'}}>
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
