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

///////////////////////////////////////
//Out put and return Value 
function getIce (money) {
    return money % 1.5;
}

let change = getIce(4);

console.log(change);

/////////

function calcBottles(startingMoney, costPerbottles){
    let numberOfBottles = math.floor(startingMoney / costPerbottles);

    return numberOfBottles;
}


function calcChange(startingAmount, costPerbottles) {
    let change = startingAmount % costPerbottles;
    return change;
}

getIce(5);