let str = "Це Prosto gt";
let regex = /Java|Python/;
if (regex.test(str)) {
    console.log("Це MrBinola");
} else {
    console.log("Це MrBeast");
}

let strі = "Супер рядок GT";

if (strі.length > 20) {
    console.log("Fabie und darbie und long?");
} else {
    console.log("Use for biesi morse?");
}


var number = 42;
var stringNumber = number.toString();
console.log(stringNumber);



let exp = /\d\d\d\D\D\D/

let str1 = `123abc`
let str2 = `abc123`

console.log(exp.test(str1))
console.log(exp.test(str2))


const regexPattern = /^(Мирослав|Віталій)$/;


function checkStringWithRegex(inputString) {
    if (regexPattern.test(inputString)) {
        console.log("DEDESHKA");
    } else {
        console.log("UMVELT YT KT MTM MB");
    }
}

checkStringWithRegex("Мирослав");
checkStringWithRegex("Віталій");
checkStringWithRegex("Ігор");



function checkStringWithoutRegex(inputString) {
    if (inputString === "Мирослав" || inputString === "Віталій") {
        console.log("HipPro");
    } else {
        console.log("turboKip");
    }
}

checkStringWithoutRegex("Мирослав");
checkStringWithoutRegex("Віталій");
checkStringWithoutRegex("Ігор");


let expt = /Vitalii|Myroslav/
let str12 = 'Vitalii'
let str23 = 'Myroslav'
console.log(expt.test(str12))
console.log(expt.test(str23))

let res = str12 == 'Vitalii' || str12 == 'Myroslav'
let res2 = str23 == 'Vitalii' || str23 == 'Myroslav'
console.log(res)
console.log(res2)