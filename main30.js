let arr = [1, 2, 3, 4, 5];

function swapFirstAndLast(array) {
    if (array.length >= 2) {
        let firstElement = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = firstElement;
    }
    return array;
}

let swappedArray = swapFirstAndLast(arr);

console.log(swappedArray);



class MyClass {
    constructor(field1, field2) {
        this.field1 = field1;
        this.field2 = field2;
    }
}

let myGerpetso = new MyClass("WonderFull", "WonderFull2");

myGerpetso.field1 = "New WorceHot";
myGerpetso.field2 = "New GforseD";

console.log(myGerpetso.field1);
console.log(myGerpetso.field2);





class A{
    #b = 4
    #c = 2

    print(){
        console.log(this.#b,this.#c)
    }
}

let d = new A()
d.print()



class D{
    checkMinLen(a,b){
        if(a.length < b.length){
            console.log(a)
        }
        else{
            console.log(b)
        }
    }
}

let m = new D()
m.checkMinLen('Hello', 'W')