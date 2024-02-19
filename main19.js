const user = {
    name: "Tom",
    married: false,
    age: 39
};
const serializedUser = JSON.stringify(user);
console.log(serializedUser);


let l = {
    num1:14,
    num2:15,
    printNum(){
        console.log(this.num1,this.num2)
    }
}

let b = JSON.stringify(l)
console.log(b)