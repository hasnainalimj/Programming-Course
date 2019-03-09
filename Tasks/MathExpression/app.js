var numbers = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
var operators = ["+" , "-"];

var num1 = numbers[Math.floor(Math.random() * 10)];
var num2 = numbers[Math.floor(Math.random() * 10)];
var num3 = numbers[Math.floor(Math.random() * 10)];
var num4 = numbers[Math.floor(Math.random() * 10)];

var op1 = operators[Math.floor(Math.random() * 2)];
var op2 = operators[Math.floor(Math.random() * 2)];
var op3 = operators[Math.floor(Math.random() * 2)];

console.log(num1 + op1 + num2 + op2 + num3 + op3 + num4);

// console.log(equation);


