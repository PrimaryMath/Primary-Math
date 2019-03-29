let sum;
let multiply;
let substract;
let devide;
let num1;
let num2;
let operator = "+";
function showRandom() {
    document.getElementById("practiceArea").style.display = 'block';
    num1 = generateRandomNumber(2);
    num2 = generateRandomNumber(2);
    if (operator == '+') {
        sum = num1 + num2;
    };
    if (operator == '*') {
        multiply = num1 * num2;
    };
    if (operator == '-') {
        let smallNum, largeNum;
        if (num1 <= num2) {
            smallNum = num1;
            largeNum = num2;
            num1 = largeNum;
            num2 = smallNum;
        }
        substract = num1 - num2;
    }
    if (operator == '/') {
        devide = 0;
        let secondNum = 0;
        while (devide == 0 || devide > 20) {
            devide = generateRandomNumber(2);    
        }
        while (num2 == 0 || num2 > 20) {
            num2 = generateRandomNumber(2);
        }
        num1 = devide * num2;
    }
    document.getElementById("randomNumberDisplay1").innerHTML = num1 + " " + operator + " " + num2 + " = ?";
    resetTimer();
    unhideShowAnswerButton();
};

function showAnswer() {
    let answer;
    if (operator == '+') {
        answer = num1 + " " + operator + " " + num2 + " = " + sum;
    };
    if (operator == '*') {
        answer = num1 + " " + operator + " " + num2 + " = " + multiply;
    };
    if (operator == '-') {
        answer = num1 + " " + operator + " " + num2 + " = " + substract;
    };
    if (operator == '/') {
        answer = num1 + " " + operator + " " + num2 + " = " + devide;
    };
    document.getElementById("randomNumberDisplay1").innerHTML = answer;
    hideShowAnswerButton();
    stopTimer();
};

function tryAgain() {
    document.getElementById("showSumButton").hide = false;
    unhideShowAnswerButton();
    showRandom();
    resetTimer();
};

function practiceSum() {
    operator = '+';
    showRandom(operator);
};

function practiceMultiply() {
    operator = '*';
    showRandom(operator);
};

function practiceSubtract() {
    operator = '-';
    showRandom();
}
function practiceDevide() {
    operator = '/';
    showRandom();
}
/*
Hide and unhide ShowAnswer button
*/
function hideShowAnswerButton() {
    document.getElementById("showSumButton").style.opacity = '0';
    document.getElementById("showSumButton").style.cursor = 'default';
}
function unhideShowAnswerButton() {
    document.getElementById("showSumButton").style.opacity = '1';
    document.getElementById("showSumButton").style.cursor = 'pointer';
}

/*
Random Number generator
@input digit
output integer number;
*/
function generateRandomNumber(digit) {
    if (digit == 1)
    {
        return Math.round(Math.random() * 10);
    };
    if (digit == 2)
    {
        return Math.round(Math.random() * 100);
    };
    if (digit == 2)
    {
        return Math.round(Math.random() * 1000);
    };
    if (digit == 2)
    {
        return Math.round(Math.random() * 10000);
    }; 
};

/*
Following funcitons are for the stopWatch/timer. 
*/

let timer = 20;
let x;
let timerMessagePart1 = "Add the numbers, you have "
let timerMessagePart2 = " seconds remaining."
function stopWatch() {
    document.getElementById("time").innerHTML = timerMessagePart1 + timer + timerMessagePart2;
    timer--;
    x = setInterval(startTimer, 1000);
};

function startTimer() {
    if (timer < 0) {
        clearTimeout(x);
        alert("Ops, you are timedout. Good luck for another try.");
    };
    if (timer >= 0) {
        document.getElementById("time").innerHTML = timerMessagePart1 + timer + timerMessagePart2;
        timer--;
    };
};

function resetTimer() {
    clearTimeout(x);
    timer = 20;
    stopWatch();
};

function stopTimer() {
    clearTimeout(x);
};

/*
Capture name on page load 
display it in header
*/
function myName() {
    let name = prompt("Enter your name to show on page", "");
    if (name != null && name != "") {
        document.getElementById("header_name").innerHTML =
        "Hey " + name + ", get ready for some math practice";
        document.getElementById("profile").style.display = 'none';
    };
};
