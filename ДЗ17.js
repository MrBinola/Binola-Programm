var B = {
    field1: 'MrBinola',
    field2: 'MrBeast',
    field3: 'Feastables'
};

var A = {
    o: B
};

console.log(A.o.field1);
console.log(A.o.field2);
console.log(A.o.field3);


var myObject = {
    bikil: 'Hipnone1',
    bikilWet: 'Hipnone2',
    bikilweT: 'Hipnone3'
};


function printData(obj, field) {
    return obj.hasOwnProperty(field);
}


console.log(printData(myObject, 'bikill'));
console.log(printData(myObject, 'bikil'));


function greet(name) {
    return "Привіт, " + name + "!";
}

console.log(greet("Binola"));

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Binola"));
