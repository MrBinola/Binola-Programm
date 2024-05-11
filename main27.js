let a = [1,2,3,4,5]
a.push(10)
a.unshift(10)

a.pop()
a.shift()
console.log(a)


let b = [ 1,2,3,4,5]
b[0] = 20
b[1] = 30

console.log(b)

let r = new Set([1,2,3,3,3,3])

console.log(a)
r.add(10)
r.add(40)

r.delete(2)

console.log(r.has(10))
console.log(r.size)

console.log(r)

let mySet = new Set();

mySet.add("10");
mySet.add("200");
mySet.add("5100");

console.log("4", mySet);

mySet.clear();

console.log("7", mySet);



let Y = new Map([ [5,10],[40,60] ])

console.log(Y.get(40))



let person1 = {
    name: 'Roma',
    age:23
}

let person2 = {
    name: 'Myroslav',
    age:13
}

let person3 = {
    name: 'Vitalii',
    age:14
}

let person4 = {
    name: 'Gleb',
    age:15
}

let u = new WeakSet([person1,person2], [person3, person4])
u.delete(person1)

console.log(u.has(person3))


function multiplyAfterTimeout(x, y) {
    setTimeout(function() {
        var result = x * y;
        console.log("4" + x + " на " + y + "Братішку " + result);
    }, 10000);
}

multiplyAfterTimeout(6, 'Тигр');