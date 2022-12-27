//array destructuring

const Array1 = ["value1", "value2", "value3"];

// let myvar1 = Array1[0];
// let myvar2 = Array1[1];
// console.log("myvar1 value is :", myvar1 + " ,myvar2 value is :", myvar2);

//or

// let [myvar1, myvar2]= Array1;
// console.log("myvar1 value is :", myvar1 + " ,myvar2 value is :", myvar2);

//if you want only access value1 and value3 than
let [myvar1, , myvar3] = Array1;
console.log("myvar1 value is :", myvar1 + " ,myvar3 value is :", myvar3);

//you can also apply slice operation on it
let [myvaar1, myvaar2, ...newrestarray] = Array1;
console.log(newrestarray);
