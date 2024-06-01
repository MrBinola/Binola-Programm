const myNameAndAge = new Promise((resolve, reject) => {

    const name = "Binola";
    const age = "15";
    
    if (name && age) {
        resolve(`Моє ім'я: ${name}, Мій вік: ${age}`);
    } else {
        reject("Vitalii");
    }
});

myNameAndAge
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });


    
    
    let a = new Promise(function(resolve,reject){
        resolve('Noname')
    })

    a.then(function(a){
        console.log(a)
    })




const promise1 = new Promise((resolve, reject) => {
    resolve("One YouTube");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Two Unit");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("Messege from 3 logenisia");
});

Promise.any([promise1, promise2, promise3])
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });


    

    const promise12 = new Promise((resolve, reject) => {
        resolve("One YouTube");
    });
    
    const promise23 = new Promise((resolve, reject) => {
        resolve("Two Unit");
    });
    
    const promise34 = new Promise((resolve, reject) => {
        resolve("Messege from 3 logenisia");
    });
    
    Promise.race([promise12, promise23, promise34])
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        });
    

 
    


const promise35 = new Promise((resolve, reject) => {
    let d = 'Hello'
    let b = 'World'

    if(d == b){
        resolve('Одинакові')
    }
    else{
        resolve('Різні')
    }
});

promise35.then(function(value){
    console.log(value)
})





function checkStringsEqual(str1, str2, callback) {
    if (str1 === str2) {
        callback("Hipo Jump");
    } else {
        callback("filio portolio");
    }
}

checkStringsEqual("retort", "retorn", (result) => {
    console.log(result);
});

checkStringsEqual("Time", "timeFas", (result) => {
    console.log(result);
});





let numbers = [];

for (let i = 40; i <= 100; i++) {
    numbers.push(i);
}

console.log(numbers);




for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
        continue;
    }
    console.log(i);
}



for (let i = 20; i <= 50; i++) {
    if (i === 25 || i === 30) {
        continue;
    }
    console.log(i);
}




const mainObject = {
    innerObject: {
        dunay1: "Retefull1",
        Dnipro2: "Retefull2"
    }
};

console.log(mainObject.innerObject.dunay11);
console.log(mainObject.innerObject.Dnipro2);





class ParentClass {
    str1 = "";
    str2 = "";
}

class ChildClass extends ParentClass {
    printLongestString() {
        if (this.str1.length > this.str2.length) {
            console.log(this.str1);
        } else {
            console.log(this.str2);
        }
    }
}

const childObj = new ChildClass();

childObj.str1 = "One Strok";
childObj.str2 = "Two Strok";

childObj.printLongestString();





const myString = "BINOLA";

const myArray = [];

for (let i = 0; i < myString.length; i++) {
    myArray.push(myString[i]);
}

console.log(myArray);