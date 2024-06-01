let person = {
    firstName: "Аній",
    lastName: "Акакій",
    age: 15,
    address: {
        city: "Вишневе Київ",
        country: "Україна"
    },
    hobbies: ["читання", "ПРИГОДИ!", "програмування"]
};

console.log("for only Binola", person);

let jsonString = JSON.stringify(person);

console.log("JSON-строка:", jsonString);

let newPerson = JSON.parse(jsonString);

console.log("Standart object", newPerson);



function addStringsAsNumbers(rtr1, rtr2) {


    let result = rtr1 + rtr2;
    result = Number(result)
    return result;
}

let string1 = "77";
let string2 = "77";
let sum = addStringsAsNumbers(string1, string2);

console.log("Результат додавання:", sum);


let numbers = [700, 40, 20, 10, 7];

let youmiyoumi = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Gypiloty Pifagory Terolifi", youmiyoumi);



let e = [1,2,34,56,87]

let t = 0

for(let i = 0; i < e.length; i++){
    t+=e[i]
}

console.log(t)


let myObject = {
    numberField: 0,
    setToTwo: function() {
        this.numberField = 16;
    }
};

console.log("initial Binola", myObject.numberField);

myObject.setToTwo();

console.log("New WerceHot", myObject.numberField);


class MyClass {
    #numberField;

    constructor(initialValue) {
        this.#numberField = initialValue;
    }

    setNumberField(newValue) {
        this.#numberField = newValue;
    }

    getNumberField() {
        return this.#numberField;
    }
}

let gertifity = new MyClass(0);

console.log("seroswerceTV", gertifity.getNumberField());

gertifity.setNumberField(42);

console.log("gertyder", gertifity.getNumberField());



class A{
    #a = 4
    change(newA){
        this.#a = newA
        console.log(this.#a)
    }
}
let i = new A()
i.change(37)



let Unit = {
    printArrayAfterDelay: function(array) {
        setTimeout(function() {
            console.log("Binola", array);
        }, 5000);
    }
};

let myArray = [1, 2, 3, 4, 5];
Unit.printArrayAfterDelay(myArray);



let mySet = new Set();

mySet.add(10);
mySet.add(20);

console.log("certivent", mySet);

let result = 2 * Array.from(mySet);

console.log("Resultat", result);

mySet.delete(10);
mySet.delete(20);

console.log("certivent after delete", mySet);



class BaseClass {
    showMessage() {
        console.log("Hi Binola, on your YouTube 1 million Subscribers");
    }
}

class SubClass extends BaseClass {
    callBaseMethod() {
        this.showMessage();
    }
}

let mySubObject = new SubClass();

mySubObject.callBaseMethod();



class StringHandler {
    printShortestString(str1, str2) {
        if (str1.length < str2.length) {
            console.log("Мінімальна строка:", str1);
        } else if (str2.length < str1.length) {
            console.log("Мінімальна строка:", str2);
        } else {
            console.log("Строки мають однакову довжину.");
        }
    }
}

let handler = new StringHandler();

handler.printShortestString("JavaScript", "Python");




class NamePrinter {
    printName() {
        let count = 0;
        let printInterval = () => {
            console.log("Моє ім'я: Україна");
            count++;
            if (count < 5) {
                setTimeout(printInterval, 5000);
            }
        };

        setTimeout(printInterval, 5000);
    }
}

let printer = new NamePrinter();
printer.printName();


let myFiled = [];

myFiled.unshift("1red");
myFiled.unshift("2sed");

myFiled.push("timedert");
myFiled.push("liodid");

myFiled[0] = "new hip";
myFiled[myArray.length - 1] = "New job";

console.log(myFiled);