// falsy values (false, 0, null, undefined, "")

let firstName="";
if(firstName){
    console.log(firstName)
}else{
    console.log(" firstName is empty");
}

//truthy values("abc", 1,2,-4)
let secondName=9;
if(secondName){
    console.log(secondName);
}else{
    console.log("second name is falsy value")
}