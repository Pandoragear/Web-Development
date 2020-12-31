// function 
function first () {
    x = prompt("what is your name");
    alert("your name is "+ x);
}

first();


///////////////////////////////////////////
//Parameters and Arugments
function getMilk (bottles){
    let cost = bottles * 1.5;
    console.log(Math.round(cost));
}

getMilk(2);