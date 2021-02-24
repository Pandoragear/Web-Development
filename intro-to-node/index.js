// working with command line 
// console.log("hello, World");


// const fs = require('fs');

// fs.copyFileSync("file1.txt", "file2.txt");


const superheroes = require ('superheroes');
const supervillains = require('supervillains');


var myVillainsName = supervillains.random();
var myHeroNames = superheroes.random();

console.log("my day time name is: " + myHeroNames + " and my night persona is: " + myVillainsName);


