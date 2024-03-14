const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){

    if(request.url == "/YT"){
        fs.readFile("index.html", (error, data) => response.end(data));
    }
    else{
        response.end("Хай MrBinola")
    }
}).listen(3000, ()=>console.log("Сервер запущенний по адресі http://Localhost:3000"));



const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let userData = {
    Miroslav: {},
    Vitalii: {}
};

app.post('/Miroslav', (req, res) => {
    const { name, age, hobbies } = req.body;
    userData.Miroslav = { name, age, hobbies };
    res.send('Об\'єкт успішно створено у маршруті Miroslav');
});

app.get('/Vitalii', (req, res) => {
    res.json(userData.Vitalii);
});

app.get('/ERROR', (req, res) => {
    res.sendFile(__dirname + '/error.html');
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`);
});

class BaseClass {
    constructor(numb1, numb2, numb3, numb4) {
      this.hip1 = numb1;
      this.hip2 = numb2;
      this.hip3 = numb3;
      this.hip4 = numb4;
    }
  }

  class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log('My name is ' + this.name);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log('Woof! I am a ' + this.breed);
    }
}

let myDog = new Dog('Buddy', 'Golden Retriever');
myDog.sayName();
myDog.bark()


class A{
    name1 = 'Vitalii'
    name2 = 'Miroslav'
}

class B extends A{
    PrintData(){
        console.log(this.name1, this.name2)
    }
}

m = new B()
m.PrintData()

console.log("VItalii Miroslav")