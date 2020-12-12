// String Concatenation 

// alert ("hello " + "World");

var message = "Hello";
var name = "Angela";

//Write your code below this line: 

name = prompt("What is your name");
alert= ( message + " " + name);


//Soultion 
alert(message + " there," + " " + name); 

/////////////////////////////////////////////////////////////


// string challenge 

var message = ""; 
let char = 240
message = prompt("Write your message and you only have " + 240 + " character ")
message = message.length

let total = char- message.length 
alert ("you have written " + message + " characters," + " you have " + total + " characters left.");

// Solution 
var tweet = prompt ("compose your tweet:");
var tweetCount = tweet.length;

alert("you have written " + tweetCount + " characters, you " + (140 - tweetCount) + " charactes remaining.");


/////////////////////////////////////////////////////////////

// String Slice
let name = "Andy"; 
name.slice(0,1); 
// This will show just the letter { A }