console.log("i am node program");
/* 1. inbuilt node js modules (http fs os path...)
2. custome nodejs modules (creat your own)
3. npm package (library use)*/

//1. using inbuilt node js modules
/*const http = require("http"); //node js inhuilt package
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }); //html tag
    res.write("<h1>Hello world</h1>"); //body
    res.end();
  })
  .listen(5555);
console.log("app is rinning on port 5555"); //local host::5555in browser*/

//2.By creating own module
const http = require("http");
const myModule = require("./myCustomeModule");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "Text/html" }); //html tag
    const date = myModule.myDate();
    const time = myModule.myTime();
    res.write(`<h1>Hello world</h1> <p> ${date} and ${time}</p>`); //body
    res.end();
  })
  .listen(5555);
console.log("App is running on port 5555");
