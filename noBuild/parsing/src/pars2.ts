import axios from "axios";
import * as fs from "fs";

console.log("123123213")
console.log("123123213")
console.log("123123213")


const API_KEY = 'xxx';
const API_SECRET = 'yyy';

start();

async function start() {
    const url = "https://binance-docs.github.io/apidocs/spot/en"
    // const data = (await (await fetch(url)).json());
    // const data =  (await fetch(url));
    // console.log(data);
    const req =await axios.get(url)
    const data = req.data as string

    const arr = data.split("\n")
    const arrData: string[] = []
    let temp = ""

    let res = 0

    // substring // копирует часть строки

    const el = (st: string) => {
        const t1 = st.indexOf(">")+1
        // const sub = st.substring(t1)
        return st.substring(t1 , st.indexOf("<", t1))
    }
    const tab = (num: number) => {
        let t = ""
        for (let i = 0; i < num; i++) {
            t+="\t"
        }
        return t
    }

    let specSum = 0
    let lvlName = 0
    const tLvl = {
        st: 0,
        name: 1,
        zn: 2,
        data: 3,
        comments: 4,
        unknow: 5,
    }

    let lvlType = 0

    const ff =  (st: string, a: string[]) => {
        let find = 0
        const r: number[] = ['="s2"', '="mi"', '="p"', '="c1"', '="kc"', '="nl' , '="mf']
            .map(e=>st.indexOf(e))
            .filter(e=>e>0)
            .sort((a,b)=>a-b)

        const fist = r[0] +1
        if (fist) {
            const buf = st.substring(fist)
            let data = el(buf)

            if (lvlType >= tLvl.st) {lvlType++}

            if (lvlType == 5 || lvlType == -1) {
                // ожидаем комментарий
                if (data.indexOf("//") > -1) {
                    data += "\n" //+ tab(specSum)
                    if (lvlType == 5) {
                        lvlType = 1
                    }

                    if (lvlType == -1) {
                        lvlType = -1
                    }

                } else {
                    // это не комментарий
                    a.push("\n") //+ \`(${data})`
                    if (lvlType == 5) {
                        lvlType = 1
                    }

                    if (lvlType == -1) {
                        lvlType = -1
                    }

                    //  data =  data // + tab(specSum) + data
                }
            }


            if (data == "{" || data == "[" || data == ":{" || data == ":[") {
                if (data == "{" || data == ":{" ) {
                    lvlName ++;
                    data =   data + "\n"
                    lvlType = 0// tLvl.name
                }
                if (data == "[" || data == ":[") {
                    lvlType = -1
                }
                specSum++
                // data=data +"\n" + tab(specSum)
                // data = "\n" + tab(specSum) + data
            } else
            if (data == "}" || data == "]" || data == "}," || data == "],") {
                lvlType = 0
                data = "\n" + tab(specSum) + data
                specSum--
                data += "\n" //+ tab(specSum)
            } else
            if ((lvlType == 3 || lvlType == -1) && data != ",") {
                const kv1 = data.indexOf('"')
                // если это номер
                if (kv1 == -1) {
                    if (data == "true" || data == "false") {
                        data = " boolean , // " + data
                    }
                    else {
                        const comment = data.indexOf('//')
                        if (comment >= 0) {
                            data+="\n"
                        }
                        else data = " number , // " + data
                    }
                }
                // если это номер в ""
                if (kv1 >= 0) {
                    const kv2 = data.indexOf('"', kv1 + 1)
                    const sub = +data.substring(kv1 + 1, kv2)
                    if (isNaN(sub) || data == "") {
                        data = " string , // " + data
                    } else {
                        data = " NumberString , // " + data
                    }
                }
            }


            if (lvlType == 4 || data == ",") {
                // ожидаем знак
                // lvlType = 4
                if (data == ",") {
                    data = ""
                    // data = "\n" + tab(specSum)
                    //    data = "\n"
                }
            }

            if (lvlType == 5) {
                // ожидаем комментарий


                // после комментария - точно новая строчка
                //   data += "\n" + tab(specSum)
            }


            //if (data == "," || data == "{" || data == "}" || data == "["  || data == "]" ){}
            a.push(data)


            ff(buf,a)
            if (lvlType > 0) {
                lvlType --
            }

        }
        else {
            if (lvlType > 0) {
                a.push("\n")
                lvlType=0
                // ожидаем комментарий


                // после комментария - точно новая строчка
                //   data += "\n" + tab(specSum)
            }
        }
    }

    type tParamObj = {
        status: 0|1|2|3,
        arrParams: string[][],
        index: number,
        nums: number,
        max: number
    }
    let paramObj: tParamObj = {
        status: 0,
        arrParams: [],
        index: 0,
        nums: -2,
        max: 0
    }

    const fParams = (st: string) => {
        if (paramObj.status == 0) {
            if (st.indexOf("<table>") >= 0) {
                paramObj = {status:0, arrParams: [], index: 0, nums: -2, max: 0}
                paramObj.status = 1
            }
            return undefined;
        }
        if (paramObj.status != 1) return;
        if (st.indexOf("</table>") >= 0) {
            const buf = paramObj
            paramObj = {status:0, arrParams: [], index: 0, nums: -2, max: 0}
            return buf;
        }

        if (st.indexOf("<tr>") >= 0) {
            paramObj.nums++
            paramObj.index = 0;
            arrData.push(""+paramObj.nums)
        }

        if (paramObj.nums == -1)
        {
            if (st.indexOf("<th>") >= 0) paramObj.max++
        }


        if (paramObj.nums < 0) return undefined;

        if (st.indexOf("<td>") >= 0) {
            // if (paramObj.index >= paramObj.max - 1) paramObj.index =0;
            const data = el(st)
            const a = paramObj.arrParams[paramObj.nums] = paramObj.arrParams[paramObj.nums] ?? []
            a[paramObj.index] = data
            paramObj.index++
        }
        return undefined;
    }

    let twFlag: boolean = false
    const wightObj = {
        name: "",
        data: 0
    }
    for (const string of arr) {
        // имя
        const tr = string.indexOf('<h2')
        if (tr > -1) {
            const buf = string.substring(tr+3)
            const b = el(string)
            arrData.push("name = " + b + "\n")
            continue;
        }

        if (string.indexOf("Response") > 0) {
            specSum = 0;
            arrData.push("Response:","\n")
            temp = ""
            res = 1
        }

        if (twFlag == true) {
            const tr = string.indexOf("<")
            const d = string.substring(0,tr)
            wightObj.data = +d
            arrData.push(`wightName: ${wightObj.name}\nwightData: ${wightObj.data ?? 0}\n`)
            twFlag = false
            continue;
        }

        let tw = string.indexOf("strong>Weight")
        if (tw >= 0) {
            twFlag = true
            const buf = string.substring(tw)// el()
            const wName = el(buf)
            wightObj.name = wName

            continue;
        }


        const params = fParams(string)
        if (params) {
            let st = "params : {\n"
            const arrParams = params.arrParams
            for (let ps of arrParams) {
                if (ps) st+=`\t${ ps[0] }${ ps[2] == "NO" ? "?" : "" } : ${ ps[1] }${ !ps[3] || ps[3] == "" ? "" : " // " + ps[3]}\n`
            }
            st+="}\n"
            arrData.push(st)
        }


        if (res) {
            let at: string[] = []
            const lastSpecSum = specSum

            ff(string, at)



            if (at.length) {
                const r = at.join("")
                if (r!="") arrData.push(tab(lastSpecSum) + r)
            }
            // if (at.length) arrData.push(tab(lastSpecSum) + at.join(" "),"\n")
        }
    }

    const str = arrData.join("")


    fs.writeFileSync('proba745.txt', str);

    console.log(req)
    // await req2.json()
    // console.log(req2)
    // const req= new XMLHttpRequest1;
    // req.open('GET',url);
    // //сохдаем масив элементов типа data[].symbol из полученных данных  и отправляе полученный масив в колбэк в виде string[]
    // req.onload=(data:any)=> console.log(data);
    // req.send();
}