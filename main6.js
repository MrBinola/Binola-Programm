let a = {
    b:12,
    c:14
}

console.log(a.b)

console.log(a.c)

for(let i = 0; i < 10; i++){
    if(i == 5){
        break
    }
    console.log(i)
}


function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function(){
        console.log(this.name, this.age);  
    };
}

const tom = new User("Tom", 40);

console.log(tom.name);  // Том

tom.print();

let  name = 'Vitaliy'
let age = 14

console.log('Привіт',name,'тобі',age,'років')

console.log(`Привіт ${name},тобі ${age}, років`)


function Users(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    };
}

function Employee(eName, eCompany) {
    this.name = eName;
    this.company = eCompany;
    this.print = function(){
        console.log(`Name: ${this.name} Company: ${this.company}`);
    };
}
const Tom = new Users("Tom", 47);
const bob = new Employee("Bob", "Google");

console.log(Tom instanceof Users);
console.log(bob instanceof Employee);
console.log(tom instanceof Employee);

for(let i = 10; i <= 20; i++){
    if(i == 13){
        continue
    }

    else if(i == 16){
        continue
    }

    console.log(i)
}

let s = [2,4,6,8,10]


console.log(s[0])
console.log(s[s.length-1])

let g = "MrBeast"
console.log(typeof g)
