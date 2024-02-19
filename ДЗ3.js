class Person {
    static printName() {
      console.log('Vitalii');
    }
  
    static printAge() {
      console.log('14');
    }
  }
  
  Person.printName();
  
  Person.printAge();

  class MyClass {
    #privateField1;
    #privateField2;
  
    constructor(field1, field2) {
      this.#privateField1 = field1;
      this.#privateField2 = field2;
    }
  
    displayFields() {
      console.log(`77: ${this.#privateField1}`);
      console.log(`777: ${this.#privateField2}`);
    }
  }
  
  const myObject = new MyClass('Значення_1', 'Значення_2');
  
  myObject.displayFields();

  class NumberPrinter {
    printNumbers() {
      for (let i = 0; i <= 20; i++) {
        console.log(i);
      }
    }
  }
  
  const printer = new NumberPrinter();
  printer.printNumbers();