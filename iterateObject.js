//how to iterate objects

const person = {
  name: "ankit",
  age: 19,
  hobbies: ["music", "cricket", "coding"],
};

//for in loop(PRINT key only)
for (let key in person) {
  console.log(key);
}
//you can print key value pair also
for (let key in person) {
  console.log(person[key]);
}
//or
for (let key in person) {
  console.log(`${key}:${person[key]}`);
  console.log(key, ":", person[key]);
  console.log(key+ ":"+ person[key]);
  
}
