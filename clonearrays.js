let arr = ["item1", " item2", "item3"];
let arr2 = arr;
console.log(arr2);
console.log(arr === arr2);

//clone arrays
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// array1.push("item3");
// console.log(array1 === array2);

// console.log(array1);
// console.log(array2);

//or another way to clone array is slice method

let array1 = ["item1", "item2"];
let array2 = array1.slice(0);
console.log(array2);

//or
let array3 = [].concat(array1);
console.log(array3);

//or
let array4 = array1.slice(0).concat(["item3", "item4", "item5"]);
console.log(array4);

// or
let array5 = [...array4];
console.log(array5);
//we can also add other items
array5 = [...array4, "item8", "item9"];
console.log(array5);

let array6=[...array1, ...array2];
console.log(array6);