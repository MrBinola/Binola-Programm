function asyncFunction() {
    setTimeout(()=>{
        let result = 22;
        console.log("result:", result);
    }, 1000);
}
asyncFunction();
console.log("Кінець програми!")

const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
     
    resolve("Привет мир!");
});

 
const x = 4;
const y = 0;
const myPromisex = new Promise(function(resolve, reject){

    if(y == 0) {
        console.log("Пердані деякі данні");
    }
    else{
        const z = x / y;
        console.log(z);
    }
});

const t = 4;
const g = 8;
const myPromisexs = new Promise(function(){
    console.log("Выполнение асинхронной операции");
    const z = t + g;
    console.log(`Результат операции: ${z}`)
});
myPromise.then();


let obj = {
    field1: 10,
    field2: 20
};

obj.sum = obj.field1 + obj.field2;

let json_data = JSON.stringify(obj);

console.log(json_data);