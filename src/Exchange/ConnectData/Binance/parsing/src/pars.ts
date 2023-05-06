var XMLHttpRequest1 = require("xmlhttprequest").XMLHttpRequest;

console.log("123123213")
console.log("123123213")
console.log("123123213")



start();

function start() {
    const url = "https://binance-docs.github.io/apidocs/spot/en"
    // const data = (await (await fetch(url)).json());
    // const data =  (await fetch(url));
    // console.log(data);


    const req= new XMLHttpRequest1;
    req.open('GET',url);
    //сохдаем масив элементов типа data[].symbol из полученных данных  и отправляе полученный масив в колбэк в виде string[]
    req.onload=(data:any)=> console.log(data);
    req.send();
}