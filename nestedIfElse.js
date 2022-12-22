//nested if-else

// + change to string to number or integer

let number=14;
let userguess= +prompt("please enter number for guess");

if(userguess<number){
    console.log("too low");
}else{
    if(userguess>number)
        console.log("too high");
    else
        console.log("number guess is right");
}



//if , ifelse, ifelse, ifelse, else
let temp=40;

if(temp<0){
  console.log("extreme cold outside");
}else if(temp<10){
console.log("cold outside");
}else if(temp<20){
    console.log("normal weather outside");
}else if(temp<35){
    console.log("turn on the ac")
}else{
    console.log("too hot!!")
}
