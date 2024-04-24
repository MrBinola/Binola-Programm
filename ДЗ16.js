let масив = [1, 2, 3, 4, 5];

for (let елемент of масив) {
    console.log(елемент);
}


let string = "1somejs";

let pattern = /^\d\w{4}js$/;

if (pattern.test(string)) {
    console.log("4Biosfera'");
} else {
    console.log("Строка не відповідає заданим умовам");
}

let exp = /\d\D\D\D\D\D/

let str1 = `1edrtd`

console.log(exp.test(str1))




function originalFunction() {
    console.log("ORIGINAL");
  }
  
  originalFunction = function() {
    console.log("NOT ORIGINAL");
  }
  
  originalFunction();
  