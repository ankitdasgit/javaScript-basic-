const key = "email";
const person = {
  name: "ankit", // you can write keys in double courts(" ")
  age: 19,
  hobbies: ["cricket", "listening music", "developing"],
};
// by default all keys are string

//you can access object through brackets in place of dot(.)
console.log(person["age"]);

//add new key(we can't add space separated key using normal dot )
person["last name"] = "das";

console.log(person);

person[key] = "ankit40@gmail.com";
console.log(person);
