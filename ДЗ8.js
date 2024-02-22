const string1 = "GTM";
const string2 = "WordfEruTE";

const result = string1.length === string2.length ? "+" : "-";
console.log(result);


const firstAndLast = (str) => {
    const first = str[0];
    const last = str[str.length - 1];
    console.log("Перший елемент:", first);
    console.log("Останній елемент:", last);
};

const exampleString = "Burvenser";
firstAndLast(exampleString);

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};

const results = addTwoNumbers(70, 7);
console.log(results);          
                       
