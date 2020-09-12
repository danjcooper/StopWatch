//Global variables
var watchRunning = true;
let s = 00;
let m = 00;
var slow;
let playButton = document.getElementById("start-button");

// this function works to reset the counter.
function reset() {
    //these top two lines act as placeholders when the page is loaded
    s = 0;
    m = 0;
    document.getElementById("seconds").innerHTML = "0" + s;
    document.getElementById("mins").innerHTML = "00";
    clearTimeout(slow);
    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("pause-button").innerHTML = "Pause";
}


//these two work for delaying the count.
function slowTotal() {
    watchRunning = true; // this sets the status to true so when clicked it always runs.
    toggleButtonSatus("start-button");
    toggleButtonSatus("pause-button")
    slow = setInterval(slowTime, 1000);
    }


// this function is the bread and butter, this is the guts that makes it tick.
function slowTime() {
    if (s < 9 && watchRunning == true) {
        s++;
        document.getElementById("seconds").innerHTML = "0" + s;
    } else if (s >= 9 && s < 59 && watchRunning == true) {
        s++;
        document.getElementById("seconds").innerHTML = s;
    } else if (s == 59 && watchRunning == true) { // every time 60 seconds passes
        s = 0;              // the seconds are reset and the mins are updated below.
        if (m < 9 && watchRunning == true) { // these two loops are esentially the same, but the first one adds the placeholder "0" for numbers less then 10
            m++;
            document.getElementById("mins").innerHTML = "0" + m; 
            document.getElementById("seconds").innerHTML = "0" + s;
        } else {
            m++;
            document.getElementById("seconds").innerHTML = "0" + s;
            document.getElementById("mins").innerHTML = m;
        }
    } 
    
    }
    
//toggles watch state, if it's set to true, slowtime will run.
function setWatchState() {
    if (watchRunning == true) {
        watchRunning = false;
    } else {
        watchRunning = true;
    }
}



function test() {
    toggleButtonSatus("start-button"); //argument is the name of the id you want to toggle.
}


// this funcion turns a button on/off the arghunement is the ID of the button you want to toggle
function toggleButtonSatus(button) { 
    var obj = document.getElementById(button);
    if (obj.disabled == true) {
        obj.disabled = false;
    } else {
        obj.disabled = true;
    }
}

function changePauseName() {
    if (document.getElementById("pause-button").innerHTML == "Pause") {
        document.getElementById("pause-button").innerHTML = "Resume";
    } else {
        document.getElementById("pause-button").innerHTML = "Pause";
    }
}

function PauseButton() {
    setWatchState();
    changePauseName();
}