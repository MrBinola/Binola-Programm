let myWeakSet = new WeakSet();

let myObject = { key: 'MrBinola' };

myWeakSet.add(myObject);

console.log(myWeakSet.has(myObject));

myWeakSet.delete(myObject);

console.log(myWeakSet.has(myObject));

let myObjecct = {
    name: "Vitalii",
    age: 14,
    city: "Example City",
    isStudent: true,
    hobbies: ["YouTube", "Channel", "MrBinola"],
    sayHello: function() {
      console.log("Hello, my name is " + this.name + "!!!");
    }
  };
  
 
  console.log(myObjecct.name);
  console.log(myObjecct.age); 
  console.log(myObjecct.hobbies);
  
  
  myObjecct.sayHello();


  const Hipbinola__ = 15;

try {
  Hipbinola__ = 14;
} catch (error) {

  console.error("errorbinola: " + error.message);
}
