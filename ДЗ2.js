class Hot{
    constructor(num1, num2) {
      this.number1 = num1;
      this.number2 = num2;
    }
  
    sum() {
      return this.number1 + this.number2;
    }
  }
  

  const calc = new Hot(5, 10);
  
 
  const result = calc.sum();
  console.log('MrBinola', result);


  class MyClass {
    constructor(field1, field2, field3, field4) {
      this.field1 = field1;
      this.field2 = field2;
      this.field3 = field3;
      this.field4 = field4;
    }
  
    displayFields() {
      console.log(`Field 1: ${this.field1}`);
      console.log(`Field 2: ${this.field2}`);
      console.log(`Field 3: ${this.field3}`);
      console.log(`Field 4: ${this.field4}`);
    }
  }

  const instance = new MyClass('Value1', 'Value2', 'Value3', 'Value4');
  
  instance.displayFields();


  