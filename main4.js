let s = [1,2,3,44,44,22,8,5555,7436,887654,,321,8,234]
let j = [9,4,83,5,3,1,4,7,8,97,100]

if(s.length < j.length){
    console.log(false)
}

else{
    console.log(true)
}

let r = {}
r.mame = 'Vitaliy'
r.age = 14

console.log(r)

const user = {};
user.name = 'Rett';
user.age = 27;

user.display = function(){
    console.log(user.name);
    console.log(user.age);
};

user.display();

const users = {
    name: "Ron",
    age: 29,
    display: function(){


        console.log(this.name);
        console.log(this.age);
    }
};

users.display()

let userse = {


    name: "Ter",
    age: 30,
    display(){

        console.log(this.name, this.age);
    },
    move(place){
        console.log(this.name, "goes to", place);
    }
};
userse.display();
userse.move("the shop");

let d = {}

d[0] = 7
d[14] = 100

console.log(d)

let userser = {}
userser.name = "Joy";
userser.age = 28;

user.display = function(){


    console.log(userser.name);
    console.log(userser.age);
};

console.log(userser.name); // Joy
delete userser.name;
console.log(userser.name); // underfined

const i = {1:22,3:33}
let b = {5:44,9:99}
b = {1:44,9:99}
console.log(b)

const h = {8:"Віталій",7:"Мирослав"}

console.log(h[8].length)
console.log(h[7].length)

