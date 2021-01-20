

var guestList = ["Angela", "Andy", "Mai", "Jenny", "Emily", "Andrew" ];
var guestName = prompt("What is your name");


// using .includes to verify if it contain the same string name 
if (guestList.includes(guestName)) {
    alert("Welcome");
} else {
    alert("Access Deny")
};

/////////////////////////////////

// Element Arrays

// code challenge - create an empty array and add a number number onto the array (ex array = [1, 2, 3, 4])

var output = [];
var count = 1;
function fizzBuzz(){
    
output.push(count);
count++;
    console.log(output);
}

fizzBuzz();

//////////////////
// follow up challenge, 
// for every array number of divided by 3 it should show the word { Fizz } and if it is divided by 5, it should show the word { Buzz }

