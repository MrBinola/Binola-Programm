let a = 12

a = String(a)

console.log(a, typeof a)

let f = '12345'

f = Number(a)

console.log(f, typeof f)


var num = 0;
var obj =  new String("0");
var str  = "0";
var b = false;

console.log(num === num);
console.log(num == num);

console.log(obj === obj);
console.log(obj == obj);

console.log(str === str);
console.log(str ==str);

console.log(num === obj);

console.log(num === str);

console.log(obj === str);

console.log( null === undefined);

console.log(obj === null);

console.log(obj === undefined)



class CurrencyConverter {
    constructor(dollars) {
      this.dollars = dollars;
    }
  
    convertToUAH(exchangeRate) {
      return this.dollars * exchangeRate;
    }
  }
  
  const converter = new CurrencyConverter(10000);
  
  const exchangeRate = 37.60
  
  const amountInUAH = converter.convertToUAH(exchangeRate);
  
  console.log(`${converter.dollars} доларів дорівнюють ${amountInUAH} гривень за курсом ${exchangeRate}.`);



  let number = 42;
  let stringNumber = String(number);
  
  console.log(stringNumber);