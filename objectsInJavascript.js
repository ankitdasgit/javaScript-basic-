//object is a reference type
// object is real world entity, object store key(properties) value pairs, object don't have index.

//how to create objects
// const person = { name: "ankit", age: 19 };
const person = {
  name: "ankit",
  age: 19,
  hobbies: ["cricket", "listening music", "coding"],
};
console.log(person);
console.log(typeof person);

//how to access data from the objects
let namebtao = person.name;
console.log(namebtao);
console.log(person.hobbies);

//how to add key value pair in existing objects
person.gender = "MALE";
console.log(person);
