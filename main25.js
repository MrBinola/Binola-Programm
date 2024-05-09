class person{
    name = 'Myroslav'
    age = 13

    data(){
        console.log('JavaScript')
        console.log(this.name,this.age)
    }
}

let a = new person()

console.log(a.name,a.age)
a.data()


class persones{
    name = 'Vitaliy'
    age = 14

    data(){
        console.log(this.name,this.age)
    }
}

let auf = new persones()

a.name = 'Vitaliy'
a.age = 14

a.data()


class MyClasst {
    constructor(number) {
        this._trax = number;
    }

    addNumber(verfum) {
        return this._trax + verfum;
    }
}

let obj = new MyClasst(5);


let result = obj.addNumber(10);
console.log(result);


class MyClasst {
    #number;


    setNumber(number) {
        this.trax = number;
    }

    addNumber(verfum) {
        return this.trax + verfum;
    }
}

let objs = new MyClass();

obj.setNumber(5);

let resulto = obj.addNumber(10);
console.log(resulto);


class MyClassd {
    static staticMethod() {
      console.log('Gt 54');
    }
  
    static staticProperty = 'fared';
  }
  
MyClassd.staticMethod();
  
console.log(MyClassd.staticProperty);


class NumberComparer {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    compareNumbers() {
      if (this.num1 > this.num2) {
        console.log(this.num1 + "manual job" + this.num2);
      } else if (this.num1 < this.num2) {
        console.log(this.num1 + " followers at MrBinola, want " + this.num2);
      } else {
        console.log(this.num1 + "two exam" + this.num2);
      }
    }
  }
  
  const comparer = new NumberComparer(120, 1000);
  
  comparer.compareNumbers();
  

class A{
    d = 12
}

class F extends A{
    print(){
        console.log(this.d)
    }
}

let m = new F()
m.print()




class J{
    f = 'Vitalii'
    v = 'Myroslav'
}

class P extends J{
    print(){
        console.log(typeof this.f)
        console.log(typeof this.v)
    }
}

let n = new P()
n.print()


class Person{
    #name = 'Myroslav'
    get Chage(){
        return this.#name
    }
    set Chage(newName){
        this.#name = newName
    }
}

let s = new Person()
console.log(s.Chage)

s.Chage = 'Vitalii'
console.log(s.Chage)


class MyClass {
    changeFields(newValue1, newValue2) {
      this.MTM1 = newValue1;
      this.MTM2 = newValue2;
    }
  }
  
  const myObject = new MyClass();
  
  console.log('FerdiKt:', myObject.MTM1, myObject.MTM2);
  
  myObject.changeFields('Derfuser1', 'Derfuser2');
  
  console.log('MrBinola Onova', myObject.MTM1, myObject.MTM2);
  




  class IrodisKo{
    #str1 = 'Hello'
    firstLast(){
        console.log(this.#str1[0], this.#str1[this.#str1.length - 1])
    }
}

let t = new IrodisKo()
t.firstLast()




console.log("MrBinola")