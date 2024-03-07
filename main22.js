const promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 5000, "Hello");
});
const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 500, "World");
});
promise1.then(value => console.log(value));
promise2.then(value => console.log(value));


const promise12 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100, "Hello");
})
const promise21 = new Promise((resolve,reject) => {
    setTimeout(resolve, 500, "World");
}) 
Promise.all([promise12, promise21])
       .then(values => {
                       const [promesedata, promise21data] = values;
                       console.log(promesedata, promise21data);
});

const http = require("http");
const fs = require("fs");
    
http.createServer(function(request, response){
      
    if(request.url == "/Hi"){
        response.end("Hello METANIT.COM");
    }
    else if(request.url == "/MrBinola"){
        response.end("I love my Parants!")
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));