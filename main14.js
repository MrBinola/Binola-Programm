for (let i = 20; i <= 100; i += 20) {
    console.log(i);
  }


  let number = 20;
  while (number <= 100) {
    console.log(number);
    number += 20;
  }


  let myObject = {
    field1: 'Слава',
    field2: 'ЗСУ',
    displayFields: function() {
      console.log("777:", this.field1);
      console.log("14:", this.field2);
    }
  };
  
  myObject.displayFields();


  class BaseClass {
    constructor(numb1, numb2, numb3, numb4) {
      this.hip1 = numb1;
      this.hip2 = numb2;
      this.hip3 = numb3;
      this.hip4 = numb4;
    }
  }
  
  class SubClass extends BaseClass {
    displayFields() {
      console.log("MrBinola:", this.hip1);
      console.log("MrBeast:", this.hip2);
      console.log("Гоша Крымский:", this.hip3);
      console.log("MirosAnt", this.hip4);
    }
  }
  
let subObj = new SubClass(27, "220M", "75Тысяч", 41);
  
subObj.displayFields();



class Person {
  constructor(age) {
    this.age = age;
  }

  checkAdult() {
    if (this.age >= 18) {
      console.log("Повнолітній! !Проходь!");
    } else {
      console.log("Ты не повнолітній");
    }
  }
}

let person = new Person(30);

person.checkAdult();



let array = [2, 4, 6, 8];

array.unshift(0)

array.push(10);

console.log(array)


let rey = {};

console.log(typeof rey);


console.log(rey instanceof Object);