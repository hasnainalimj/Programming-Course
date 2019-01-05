var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var rounding = [];
var newArray = [];
for (var i = 0; i < arr.length; i++) {
    rounding.push(arr[i]);
    if (rounding.length === 4) {
        newArray.push(rounding);
        lengths = [];
    }
}

var players = ['a','b','c','d','e','f'];
var myplayer = "h";
var playerFound = false;
for(var i=0; i<players.length; i++){
	if(myplayer === players[i]){
		playerFound = true;
    }
    // myplayer  === players[i] ? playerFound = true : else 
}
if(playerFound){
	console.log(myplayer + "---------->");
}
else{
	myplayer = players[Math.floor(Math.random() * players.length)];
	console.log(myplayer + "Randomly");
}

var players = ['a','b','c','d','e','f'];
console.log("Static fetch : " , players[5]);
for(var i=0; i<10; i++){
console.log("Number : " , i);
}
for(var i=0; i<players.length; i++){
console.log("According to array length : " , i);
}
for(var i=0; i<players.length; i++){
console.log("print array elements using for loop" , arr[i])
}

// var input = prompt("Type Message");

//Set in Local Storage
// localStorage.setItem("message",input);

//Get from Local Storage
// var fetch = localStorage.getItem("message");

// document.write(fetch);

//Remove from Local Storage
// localStorage.removeItem("message");

var messages = ["Hi","Hello","How are you?","Bye"];

// localStorage.setItem("chats",messages);

// var converting = JSON.parse(localStorage.setItem("chats",messages));

// var getting = localStorage.getItem("chats");
// var result = JSON.stringify(getting);

// console.log(result);

var input = +prompt("Enter any number for checking is it even or odd");

if(input%2 === 0){
	console.log("Even");
}else{
	console.log("Odd")
}