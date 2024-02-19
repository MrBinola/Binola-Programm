function init(Name,Age){
    this.name = Name;
    this.age = Age;
    this.print = function(){
        console.log(this.name,this.age)
    };
}

let a = new init('BeamNG drive', 12)
a.print()

console.log(a.name)
console.log(a.age)


function Userd(uName, uAge){
    this.name = uName;
    let _age = uAge;
    this.pront = function(){
        console.log(`Name: ${this.name} Age: ${_age}`);
    };
}

const tom = new Userd("Tom", 57);
tom._age = 7900;
tom.pront();




function Userde(jName, jAge) {
    this.name = jName;
    let _age = jAge;

    this.getAge = function() {
        return _age;
    }

    this.setAge = function(age) {
        if(age >0 && age<18){
            _age = age;
        }  else{
            console.log("Недопустиме значення");
        }
    }

    this.prunt = function(){
        console.log(`Name: ${this.name} Age: ${_age}`);
    };
}

const Runonn = new Userde("Runonn", 79);
console.log(Runonn.getAge())
Runonn.setAge(99);
console.log(Runonn.getAge())
Runonn.setAge(12579);
console.log(Runonn.getAge())

