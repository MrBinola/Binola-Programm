function init(number){
    let Number =number;

    this.get = function(){
        return Number
    };

    this.set = function(newNumber){
        Number = newNumber;
    };

    this.print = function(){
        console.log(Number)
    }
        
}

let a = new init(10)
a.print()

a.set(3000)

a.print()

const user = {
    name: "Tom",
    age: 24
}
const {name, age} = user
console.log(name)     
console.log(age)

class Tabs {
    name = 'Vitaliy';
    age = 14;

    printData() {
        console.log(this.name,this.age)
    }
}

let h = new Tabs()
h.printData()


class Person {
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }


    printDatat(){
        console.log(this.name , this.age)
    }
}

let i = new Person("Myros" , 23)
i.printDatat()


class Teru {
    num1;
    num2;
    num3;
    num4;

    constructor(num1,num2,num3,num4){
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.num4 = num4
    }

    PrintoData(){
        console.log(this.num1+this.num2+this.num3+this.num4)

    }
}

let d = new Teru(1,2,3,4)
d.PrintoData()