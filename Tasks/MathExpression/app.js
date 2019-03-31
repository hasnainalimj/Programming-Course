var obj = {
    id: "ali123456789",
    usename: "Ali",
    age: "15",
    email: "ali@gmail.com",
    pass: "ali123"
}

localStorage.setItem("registerdUsers", JSON.stringify(obj));
localStorage.setItem("loginUser", obj.id);

var userId = localStorage.getItem("loginUser");

if (!localStorage.getItem(userId)) {
    var arr = [];
    localStorage.setItem(userId, JSON.stringify(arr));
}

var question = document.getElementById('question');
var result = document.getElementById('result');
var txtAns = document.getElementById('txtAns');
var correctAnswers = document.getElementById('correctAnswers');
var totalCoins = document.getElementById('totalCoins');
var btnHint = document.getElementById('btnHint');
var consecutive = 0;
var coins = 0;

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operators = ["+", "-"];

var expression = "";
var answer;

generateExpression();

function generateExpression() {
    var num1 = numbers[Math.floor(Math.random() * 10)].toString();
    var num2 = numbers[Math.floor(Math.random() * 10)].toString();
    var num3 = numbers[Math.floor(Math.random() * 10)].toString();
    var num4 = numbers[Math.floor(Math.random() * 10)].toString();

    var op1 = operators[Math.floor(Math.random() * 2)].toString();
    var op2 = operators[Math.floor(Math.random() * 2)].toString();
    var op3 = operators[Math.floor(Math.random() * 2)].toString();

    expression = num1 + op1 + num2 + op2 + num3 + op3 + num4;
    answer = eval(expression);
    console.log(answer);
    question.innerHTML = "Q : " + expression;
}


function checkAns() {
    var randomId = "";

    if (coins < 20) {
        btnHint.style.display = "none";
    }

    for (var i = 0; i < numbers.length; i++) {
        var generator = Math.floor(Math.random() * numbers.length);
        randomId += numbers[generator];
    }
    var question = {
        id: randomId,
        expression,
        correctAnswer: answer,
        inputAnswer: parseInt(txtAns.value)
    }

    var userArray = JSON.parse(localStorage.getItem(userId));

    userArray.push(question);

    localStorage.setItem(userId, JSON.stringify(userArray));

    if (answer == txtAns.value) {
        result.innerHTML = "Correct Answer";
        result.style.color = "green";
        txtAns.value = "";
        consecutive += 1;
        correctAnswers.innerHTML = "Correct Answers : " + consecutive;
        coins += 5;
        totalCoins.innerHTML = "Coins : " + coins;
        if (coins == 20) {
            btnHint.style.display = "block";
        }
    }
    else {
        result.innerHTML = "Wrong Answer! Correct Answer is : " + answer;
        result.style.color = "red";
        txtAns.value = "";
    }
    generateExpression();
}

function getHint() {
    coins = coins - 20;
    totalCoins.innerHTML = "Coins : " + coins;
    alert("Correct Answer is : " + answer);
    if (coins < 20) {
        btnHint.style.display = "none";
    }
}



