//for in loop apply in array
const fruits = ["grapes", "fruit1", "fruit2", "fruit3"];
const fruit2 = [];

for (let index in fruits) {
  console.log(index); // print index of the array starting to end
  //if you want actual element than
  console.log(fruits[index]);

  fruit2.push(fruits[index]);
}
console.log(fruit2);
