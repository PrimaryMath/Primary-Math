
let sum;
let num1;
let num2;
function showRandom() {
    num1 = Math.round(Math.random() * 100);
    num2 = Math.round(Math.random() * 100);
    sum = num1 + num2;
    document.getElementById("randomNumberDisplay1").innerHTML = num1 + " + " + num2 + " = ?";
};

function showSum() {
    document.getElementById("randomNumberDisplay1").innerHTML = "" + num1 + " + " + num2 + " = " + sum;
    document.getElementById("showSumButton").disabled = true;
    stopTimer();
};

function tryAgain() {
    document.getElementById("showSumButton").disabled = false;
    showRandom();
    resetTimer();
};

let timer = 20;
let x;
function stopWatch() {
    document.getElementById("time").innerHTML = timer;
    x = setInterval(startTimer, 1000);
};

function startTimer() {
    if (timer < 0) {
        clearTimeout(x);
        alert("Ops, you are timedout. Good luck for another try.");
    };
    if (timer >= 0) {
        document.getElementById("time").innerHTML = "Calculat the sum, you have " + timer + " seconds remaining.";
        timer--;
    };
};

function resetTimer() {
    clearTimeout(x);
    timer = 20;
    stopWatch();
};

function stopTimer(){
    clearTimeout(x);
};
