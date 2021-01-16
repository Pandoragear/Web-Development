// === Is Equal to  // must be exact { string or number only { equality } }
// !== is Not Eual to
// > is Greater than 
// < is Lesser than 
// >= is Greater or Equal to 
// <= is Lesser or Equal to

var a = 1;
var b = "1";

typeof(a); // number
typeof(b); // string

if (a === b) {
    console.log('yes');
} else { 
    console.log('no');
}