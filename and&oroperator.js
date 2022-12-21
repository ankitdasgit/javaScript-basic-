// use and operator

let name = "ankit";
let age = 6;

//normal use

// if(name[0]=='a'){
//     console.log("name start with a");
// }
// if(age<18){
//     console.log("age below 18")
// }

// for and(&&) operator
if ((name[0] == "a") && (age < 18)) {
  console.log("name start with a and age below 18");
}else
console.log("any one conditions false");   


// for or operator(||)
let firstName="ankit";
let lastName="das";
if(firstName[0]=="u"|| lastName[0]=="a"){
    console.log("any one is true")
}else{
    console.log("both are false");
}