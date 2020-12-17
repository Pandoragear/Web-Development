// Javascript Variables Exercise  
var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
let c = a; 
a = b; 
b = c;


/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b);


////////////////////////////////////////////////////////
// crate an prompt then alert and change it to only the frist letter to be capital 
var name = prompt("what is your name");
first = name.slice(0,1);
second = name.slice(1,12);
first = first.toUpperCase();
second = second.toLowerCase();
alert("Hello " + first + second);


