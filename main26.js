class Person{
    printName(){
        console.log("MrAnt")
    }
}

class Person2 extends Person{
    printName(){
        console.log("MrBinola новый стиль")
        super.printName()
    }
}



let m = new Person1()
m.printName()



function printData() {
    setTimeout(()=>{
        console.log("Vitalii")
    }, 5000)
}


printData()


var numberNames = {
    1: "2",
    2: "34",
    3: "67",
};

function numberToName(number) {
    return numberNames[number] || "Developpearep";
}

var number = 2;
var name = numberToName(number);
console.log("Citulickotions", number, "Sesysi", name);



function call(getName){
    getName()
    console.log('Myroslav')

}
function getName(){
    setTimeout(()=>{
        console.log('Vitalii')
    }, 3000)
}

call(getName)



function getName() {
    return new Promise((resolve, reject) => {
        const myName = "lagust lage duku guste guste lage Magust lage duku guste guste lage";
        resolve(myName);

      });
    }

  

   function checkAge(age) {
        return new Promise((resolve, reject) => {
          if (age >= 18) {
            resolve("Користувач є повнолітнім.");
          } else {
            reject("Користувач є неповнолітнім.");
          }
        });
      }
      
      const userAge = 20;
      checkAge(userAge)
        .then(message => {
          console.log(message);
        })





function printArray() {
    var myArray = [1, 2, 3, 4, 5];
    console.log(myArray);
}

setTimeout(printArray, 10000);


var myObject = {
    rielder1: 'Oduvan',
    rielder2: 'Zduvan',
    rielder3: 'Babka'
};

function checkField(fieldName) {
    if (fieldName in myObject) {
        console.log('Поле ' + fieldName + ' існує у об\'єкті.');
    } else {
        console.log('Поле ' + fieldName + ' відсутнє у об\'єкті.');
    }
}

checkField('rielder2');
checkField('rielder4');



let a = {
    b:12,
    c:9
}

let res = a.hasOwnProperty('b')
console.log(res)