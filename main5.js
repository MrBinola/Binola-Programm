for(let i = 30; i <36; i++){
    console.log(i)
}

let a = [1,2,3,4,5]

console.log(a[0])

let r ={
    numb1: 14,
    numb2: 77
}

let g = r
console.log(g)

let p = {c:12}

let w = {c:123}

console.log(p.w == w.c)



function printPerson(person){
    console.log("Name", person.name);
    console.log("Age", person.age);
}

const tom = {name: "Tom", age: 39};
const alice = {name: "Alice", age: 35};


printPerson(tom);
printPerson(alice);

function setAge(person, pAge){

    person.age= pAge;
}

const sam = {name: "Sam", age: 29};
console.log("Beafore setAge", sam.age);
setAge(sam, 30);
console.log("After setAge:", sam.age);

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function(){
        console.log(`Name: ${this.name}   Age: ${this.age}`)
    };
}

const toms = new User("Tom", 40);

console.log(toms.name)
toms.print();

let v = {
    nam1:89,
    num2:37,
    num3:99,


    funNum:function(){
        console.log(this.nam1,this.num2,this.num3)
    }
}

v.nam1 = 100
v.num2 = 110
v.num3 = 512

v.funNum()
