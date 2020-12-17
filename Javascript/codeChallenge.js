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


// Solution 

// 1 Create a var that stores the name that user enters via prompt. 
let name = prompt ("What is your name?");

// 2 Capitalize the first letter of their name. 

// a isolate the first character
var firstChar = name.slice(0,1);

// b Turn the first char to Upper Case.
var upperCaseFirstChar = firstChar.toUpperCase();

// c Isolate the rest of the name 
var restOfName = name.slice(1, name.length);

// d Change the rest of the name to Lower Case
restOfName = restOfName.toLowerCase();

// e concactenate the frist char with the rest of the characters
var capitalizedName = upperCaseFirstChar + restOfName;

// 3 We use the capitalized version of their name to greet them using an alert. 
alert("Hello, " + capitalizedName)
