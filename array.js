//arrays is collection of same type of elements(ordered collection of items)

let fruits = ["apple", "banana", "mango"];
let number=[1,3,5,8,9,0];
let mixed=[1,3,5,9,6,"a", 'ankit', null, undefined ];
let obj={};
//change the index value
mixed[4]=11;

console.log(mixed);
console.log(number);
console.log(fruits);
console.log(fruits[2]);

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));