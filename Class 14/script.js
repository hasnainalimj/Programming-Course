var arr = ['ali','sana','ahmed','shan'];

// var convertToString = JSON.stringify(arr);

// localStorage.setItem("names",convertToString);

// var getting = localStorage.getItem("names");
// var parsing = JSON.parse(getting);

// console.log("Before Parsing : " , localStorage.getItem("names"));
// console.log("After Parsing : " , parsing);

// var messages = [];

// localStorage.setItem("messages",JSON.stringify(messages));

// var reply = "Bye";

// var parsing = localStorage.getItem("messages");

// var mychats = JSON.parse(parsing);

// mychats.push(reply);

// localStorage.setItem("messages",JSON.stringify(mychats));

// localStorage.setItem("name","Ali");

// localStorage.getItem("name");

// localStorage.setItem("arr",JSON.stringify(arr));

// console.log(JSON.parse(localStorage.getItem("arr")));

// typeof({}) == typeof([])

// !true == false

// var i=0;
// while(i<10){
// 	console.log(i);
// 	i++;
// }
/*
var i = 5; 
do {
   alert(i); 
   i++; 
 } while (i < 3);
 */

 function sayHi(param){
     console.log("Hello : " + param);
 }

 function returning(num1,num2){
  if(num1+num2 === 10){
      return;
  }
  else{
      console.log(num1+num2);
  }
}

// ONCLICK onclick OnCliCK onClick

var arr = [1,2,3,10,11,21];
console.log(arr.sort());