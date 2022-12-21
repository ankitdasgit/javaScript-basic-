var k= 90;
console.log(typeof(k));

var k= "ankit";
console.log(typeof(k));
 
const  p='c';
console.log(typeof(p));

var k= {2:44};
console.log(typeof(k));


//undefine type
var ankit;
console.log(typeof(ankit));

//null always type of object this is a bug of javascript
let a =null;
console.log(typeof(a));

//BigInt in javascript
 console.log(Number.MAX_SAFE_INTEGER);

 var n = BigInt(999977777777799997777777777);
 console.log(n); 

 //another way to represent bigint
 var m= 498479874987984879847984798479847984n;
 console.log(m);
 console.log(typeof(m))