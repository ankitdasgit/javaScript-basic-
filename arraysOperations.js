//push and pop in array
//unshift and shift
// push and pop is fast as compare to unshift and shift operations

let fruits = ["apple", "banana", "mango"];
console.log(fruits);

fruits.push("pineapple");
console.log(fruits);

//remove last elements
fruits.pop();
console.log(fruits);

//use can also use pop element
let poppedfruits = fruits.pop();
console.log(poppedfruits);
console.log(fruits)



//unshift (element add in starting)
fruits.unshift("ankit");
console.log(fruits);

//shift (remove from starting)
fruits.shift();
console.log(fruits);