// Constructor the name have to be capital 
function BellBoy( name, age, hasWorkPermit, languages ) {
    this.name = name; 
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages; 
}


// example 
var bellBoy1 = new BellBoy("Timmy", 19, true, ["English", "French"]);