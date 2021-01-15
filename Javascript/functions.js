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

function getMilk (money) {
    //     var numberOfBottles = math.floor(money/1.5);
        console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");
    
        return calcChange(money, 1.5);
    }
    
    function calcBottles(startingMoney, costPerBottle) {
        var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    
        return numberOfBottles;
    }
    
    function calcChange(startingAmount, costPerBottle){
        var change = startingAmount % costPerBottle;
        return change;
    }
    
    console.log("Hello master, here is your " + getMilk(5) + " change");