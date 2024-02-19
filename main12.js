class Person{
    #name = 'Miroslav'
    #age = 13

   
   get(){
    return this.#name
   }

   set(newValue){
    this.#name = newValue;
   }
   
    print(){
        console.log(this.#name)
    }
}

let n = new Person()
console.log(n.get())
n.set('Vitalii')
n.print()


class faded {
    constructor(name, age) {
        if (name.toLowerCase() === 'мирослав' || name.toLowerCase() === 'віталій') {
            throw new Error("Помилка: Ім'я не може бути 'Мирослав' або 'Віталій'");
        }
        this._name = name;
        this._age = age;
    }

    displayInfo() {
        console.log(`Ім'я: ${this._name}, Вік: ${this._age}`);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.toLowerCase() ==  'мирослав',  newName.toLowerCase() === 'віталій') {
            throw new Error("Помилка: Ім'я не може бути 'Мирослав' або 'Віталій'");
        }
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }
}

try {
    const person1 = new faded('Андрій', 30,);
    person1.displayInfo();
    person1.name = 'Олексій';
    person1.displayInfo();
    person1.name = 'Мирослав';
} catch (error) {
    console.error(error.message);
}