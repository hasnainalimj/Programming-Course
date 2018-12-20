//Q1
var students = ['Ali','Ahmed','Khan'];
var scores = [350,450,400];
var total_marks = 500;

console.log("Score of " + students[0] + " is " + scores[0] + ". " + "Percentage is " + (scores[0]/total_marks)*100);

//Q2
var colors = ['blue','red','black'];
console.log("Before : ",colors);
// var userask = prompt("Enter Color");

// colors.unshift(userask);
// var color1 = prompt("Enter Color1");
// var color2 = prompt("Enter Color2");

// colors.unshift(color1,color2);
console.log("After :",colors);

//Q3
// var table = + prompt("Enter Table Number");
// var length = + prompt("Enter Table Length");

// for(var i=1; i<=length; i++){
//     console.log(table + " X " + i + " = " + (table*i));
// }

//Q4(a)

// var lines = + prompt("Enter No. of Lines");

// for(var i=1; i<=lines; i++){
//     document.writeln("*****")
// }

//Q4(b)

// for(var i = 1; i <= 5; i++) {
//     for(var j = 1; j<= i; j++) {
//       document.write("*");  
//     }
//     document.write("<br/>");
// }

//Q13

// var num = + prompt("Enter Number");

// if(num%3 == 0){
//     console.log("Done");
// }
// else{
//     console.log("Not Done");
// }

// //Q14
// var name = "Ali";

// console.log(typeof(name));

//Q19

var a = +prompt("Enter first no.");
var b = +prompt("Enter second no.");

if(a < b){
    alert(b ," is greater than " , a)
}
else if (a>b){
    alert(a , " is greater than " , b)
}
else if (a == b){
    alert(a," & " , b , " both no are equals")
}
else {
    alert("Something Wrong!")
}

// //Q23
// var a = prompt("Choose your language\n1.es\n2.es\n3.urdu");

// if (a == 'en'){
//     console.log("Hello!")
// }
// else if(a == 'es'){
//     console.log("Halo!")
// }
// else if (a == 'ur'){
//     console.log("ہیلو")
// }
// else{
//     alert("Please choose your language...!  ")
// }

// //Q22

// var b = +prompt("Enter Your Numbaer");

// if(b === '-'){
//     alert("Your no. is Negative")
// }
// else if(b === '+'){
//     alert("Your no. is Positive")
// }
// else{
//     alert("Please enter any number!")
// }

// //Q23

// var a = +prompt("Enter Any Number");
// var b = prompt("Enter Any Car Name");

// alert( a + " " + b)