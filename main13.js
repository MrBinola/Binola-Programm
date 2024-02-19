class Unit{
    name = 'MrBinola';
}

class Human extends Unit{
    print(){
        console.log(this.name)
    }
}

let t = new Human()
t.print()



class GT{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

class Employee extends GT{

    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}

const tom = new GT("Tom", 35);

const sam = new Employee("Sam", 25, "Google");
sam.print();
sam.work();

class MyBaseClass {
    constructor(number17, number28) {
      this.number17 = number17;
      this.number28 = number28;
    }
  }
  
  class MyDerivedClass extends MyBaseClass {
    addNumbers() {
      return this.number17 + this.number28;
    }
  }
  
  const baseInstance = new MyBaseClass(17, 45);
  
  const derivedInstance = new MyDerivedClass(57, 24);
  
  console.log("Fader", derivedInstance.addNumbers());
  