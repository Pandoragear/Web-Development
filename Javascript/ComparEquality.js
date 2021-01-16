// === Is Equal to  // must be exact { string or number only { equality } }
// !== is Not Eual to
// > is Greater than 
// < is Lesser than 
// >= is Greater or Equal to 
// <= is Lesser or Equal to
// && And 
// || OR
// !  Not


var a = 1;
var b = "1";

typeof(a); // number
typeof(b); // string

if (a === b) {
    console.log('yes');
} else { 
    console.log('no');
}

/////////////////////////////////////////////////////////////

let first = prompt("What is the 1st name");
let second = prompt("what is 2nd person name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if(loveScore > 70){
    alert("compatibility " + loveScore + " %" + " You love each other like Kanye loves Kanye.");
}
if (loveScore > 30 && loveScore <=70){
    alert("compatibility " + loveScore + " %" + " ehhh");
}

if (loveScore <= 30){
    alert(" compatibility " + loveScore +"%" + " run, run far away boy");
} else {
    
};

