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
/*const http = require("http");
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
console.log("App is running on port 5555");*/

//using object destructuring
/*const http = require("http");
const { myDate, myTime } = require("./myCustomeModule");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`${myDate} and ${myTime}`);
    res.end();
  })
  .listen(5555);
console.log("App is runnin in port no 5555");*/
//npm i --save upper-case , this is used to install the package that help for application
//npm i --save -dev upper-case , this package only hepls for the developer

//use of npm package
/*const http = require("http");
const uppercase = require("upper-case");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const myName = uppercase.upperCase("Anil karki");
    res.write(`<h1>Hello its me </h1> <p>${myName} ,${date},${time}</p>`);
    res.end();
  })
  .listen(5555);
console.log("app is running on port no. 5555");
*/

//Generate QR code for the url on the terminal using package qrcode
const http = require("http");
const url = "https://www.nepal.com/";
const QRCode = require("qrcode");
QRCode.toString("I am a pony!", { type: "terminal" }, function (err, url) {
  console.log(url);
});
