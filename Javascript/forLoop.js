// for (i = 0; i< 2; i++ ) {
//     // do something 
// }

// i = 0; {start}
// i< 2; {end}
// i++; {change}


for (var i =1; i<2; i++) {
    console.log(i);
}

var output =[];

function fizzBuzz(){
    for (var count = 1; count > 101; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push ("FizzBuzz");
        } else if (count % 3 === 0){
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        }else {
            output.push(count);
        }

    }
    console.log(output);
}