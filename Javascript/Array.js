

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