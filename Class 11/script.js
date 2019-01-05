// function returnType(param) {
//     console.log(typeof (param));
// }


// function checkPalindrome(text) {
//     var straight = "";
//     var reverse = "";

//     for (var i = 0; i < text.length; i++) {
//         straight += text.charAt(i);
//     }

//     for (var j = text.length - 1; j >= 0; j--) {
//         reverse += text.charAt(j);
//     }

//     straight === reverse ? console.log("Its Palindrome") : console.log("Not Palindrome");
// }

// checkPalindrome("madam");


// var arr = [5, 2, 1, 8, 30, 6, 12, 23, 11];
// var forLooping = Math.max(...arr);
// var sortedArray = [];


// for (var i = 0; i <= forLooping; i++) {
//     for (var j = 0; j < arr.length; j++) {
//         if (i == arr[j]) {
//             sortedArray.push(arr[j]);
//         }
//     }
// }

// var teams = ["Pak", "Ind", "Aus"];
// var scores = [200, 150, 250];
// var topScore = Math.max(...scores);
// for (var i = 0; i < teams.length; i++) {
//     if (topScore == scores[i]) {
//         console.log("Winner is " + teams[i]);
//     }
// }

function recieveMessage(){
    var replies = ["Hello","How are you?","I love you","I love you 2","I miss you","I miss you 2","Bye"];
    var repliesLength = replies.length;
    var answer = Math.floor(Math.random()*repliesLength);
    console.log("GF Message : " + replies[answer]);
}


var message = prompt("Type your message");
console.log("BF Message : " + message);

if(message){
    recieveMessage();
}

var date = new Date("14-August-2019");
var dates = date.getDate();
var month = date.getMonth();
var my  = new Date();
var mydate = my.getDate();
var mymonth = my.getMonth();
var remainingMonth = month - mymonth;
var days = remainingMonth * 30;
var remainingdays = days-mydate; 

