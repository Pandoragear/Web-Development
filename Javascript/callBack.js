document.addEventListener("keypress", respondToKey(e));

function respondToKey(e) {
    console.log("keypressed.");
}


//this change the name on Wiki
// $0.addEventListener("click", function(event ){
//     console.log();
// })

function anotherAddEventListener(typeOfEvent, callback) {
    // Detect Event code....
    var eventThatHappened ={
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    if (eventThatHappened.eventType === typeOfEvent){
    callback(eventThatHappened);
    }
}

anotherAddEventListener("keypress", function(event) {
    console.log(event);
});