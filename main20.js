let a = 18

if(a > 15 && a < 20){
    console.log('+')
}
else{
    console.log('-')
}


let k = 22 == 33

console.log(a)


const d = 10;
const b = 2;
const result = d < b? d + b : d - b;
console.log(result);

let x = 12

if(x < 0){
    x = 0
    console.log(x)
}
else if(x <= 2 && x >= 0){
    let res = (x*x) +5
    console.log(res)
}
else{
    let res1 = 1 / ((x*x)+12)
    console.log(res1)
}

const http = require("http");
const fs = require("fs");
    
http.createServer(function(_, response){
      
    fs.readFile("index.html", (_, data) => response.end(data));
 
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));


let змінна1 = 10;
let змінна2 = 5;

let однакові = змінна1 === змінна2;
console.log(однакові);

однакові = !однакові;
console.log(однакові);