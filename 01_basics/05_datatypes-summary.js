// Primitive datatypes -> call by value -> do not change the actual value
        // String, Number, boolean, null, undefined, symbol, bigint


const id = Symbol('12')
const id2 = Symbol('12')

console.log(id);
console.log(id2);

console.log(id === id2);

const bigNumber = 87647774889765465796234567698n

console.log(bigNumber);



// non primitive -> call by reference -> 
        // arrays, objects, functions

const heroes = ["Shaktiman", "Naagraj", "Captain Dhruv"]

let myObj = {
        name: "Varun",
        age: 33,
}

const myFunction = function(){
        console.log("Hello worlds");
        
}





// ******************************** MEMORY TYPE *********************************
// 2 TYPES -> stack(in primitive) and heap(in non primitive)

let myYoutubeName = "kahani"