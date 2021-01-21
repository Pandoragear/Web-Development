// While Loops 

// while ( something is true ) {
//     // do somehting 
// }

var i = 1; 

while (i < 2) {
    console.log( i ); 
    ii++ 
}

// Modify the code from the array using While Loop 
var output = [];
var count = 1;

function fizzBuzz(){
    while( count < 100 ) {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("Fizz-Buzz");
} 
else if ( count % 3 === 0){
    output.push("Fizz");
} 
else if (count % 5 === 0) {
    output.push("Buzz");
}
else {
    output.push(count);
};
    
count++;
    console.log(output);
}
}

fizzBuzz();
