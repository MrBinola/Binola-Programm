function check(der1,der2){
    if(der1 == der2){
        console.log('+')
    }
    else{
        console.log('-')
    }
}

check()

let res = (a,b)=> console.log(a + b)

res(18,18)

let oder = (Start,end)=> {
    for(let i = Start; i < end; i++){
        console.log(i)
    }
}

oder(10,21)


function print(){
    console.log("Prosto gt");
    print = function(){
        console.log("UA|MrBinola")
    }
}

print();
print();

function returnString(inputString) {
    return inputString;
}
console.log(returnString('Hello'))



let obj = {
    ret1: 'try',
    ret2: 'reu'
};

obj.ret1 = 'нове utr';
obj.ret2 = 'нове deg';

console.log(obj);

let Object = {
    tur1: 'Ser1',
    tur2: 'Ser2',
    tur3: 'SERUSHKA',
    displaytur: function() {
        console.log(this.tur1);
        console.log(this.tur2);
        console.log(this.tur3);
    }
};

Object.displaytur();


const country = {

    name: "1",
    language: "2",
    capital:{

        name: "3",
        population: 4,
        year: 5
    }
};

console.log(country.capital.name);
console.log(country.capital["population"]);
console.log(country.capital["year"]);


let person = {
    nama: 'Vitalii',
    age: 14
}

let resBool = person.hasOwnProperty('yers')

console.log(resBool)


let check = {
    str1: "SJAKHKSAFDASKFJ",
    str2: "skdjahfghhsadfgksagf",

    checkLen(){
        if(this.str1.length > this.str2.length){
            console.log("str1")
        }
        else{
            console.log("str2")
        }
    }
}

check.checkLen()

let obj = {
    uit1: 'vigter',
    uit2: 'zeft',
    uit3: 'deft'
};

let jsonString = JSON.stringify(obj);
console.log(jsonString);