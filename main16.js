let a = {
    b:12,
    c:13
}

console.log(a.b)
console.log(a.c)

const js = {lang: "JavaScript"};
const ts = {lang: "TypeScript"};
const java = {lang: "Java"};
const weakSet = new WeakSet([js, ts]);
console.log(weakSet.has(ts));
console.log(weakSet.has(java));

weakSet.add(java)


let key1 = {key:1};
let key2 = {key:2};
let value1 = {name: "Tom"};
let value2 = {name: "Sam"};

const weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
console.log(weakMap2.get(key1))
console.log(weakMap2.get(key2))


try{
    const a = 10
    a = 22
    console.log(a)
}
catch(error){
    console.log('Hello')
}