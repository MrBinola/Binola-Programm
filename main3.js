let a = [1,2,3]
a[3] = 1000
console.log(a)

for(let i = 0; i < a.length; i++){
    console.log(a[i])
}

const men = ["Tom", "Sam", "Bob",];
const women = ["Kate", "Alice", "Mary"];
const people = [...men, "Alex", ...women];

console.log(people)

const TurboHipBro = ["Tom", "Sam", "Bob"];

function print(first, second, third){
    console.log(first);
    console.log(second);
    console.log(third);
}
print(...people);

let a = []
a.push(12)
a.push(12)
a.push(88)
console.log(a)

let a = [1,2,3,4]
a.pop()

console.log(a)

let a = [1,2,3,4]
a.shift()
console.log(a)

let a = [1,2,3,4]
a.unshift(122)
console.log(a)

let gt = ["Tom", "Sam", "Bill", "Alice", "Kate",];
gt.splice(1.3)

console.log(gt)

let b = [1,2,3,4,5,]
b.push(22)
b.push(33)

b.unshift(22)
b.unshift(33)

b.pop()
b.shift()

console.log(b)

let v = [1,2,3,4,5]
let n =[1,2]

let c = v.concat(n)
console.log(c)

let o = [3,2,1,2,3,4,5]
let f = o.toSorted()
console.log(f)

let p = ['a','c','b',]

p.sort()
console.log(p)

let h = [2,4,6,8,9]

console.log(h[4])
console.log(h[8])
console.log(h)

let i = [5,4,3,2,1]

let l = [...i]
console.log(l)


