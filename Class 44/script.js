let timer;

function start() {
  timer = setInterval(() => {
    console.log("hii");
  }, 1000);
}

function stop() {
  console.log("stop");
  clearInterval(timer);
}

var date = new Date();

var currentMonth = date.getMonth() + 1;
var currentDate = date.getDate();

var indMonth = 8;
var indDate = 14;

var remainingMonths = indMonth - currentMonth;

if (remainingMonths) {
  var remainingDays = 30 - currentDate + indDate * remainingMonths;
} else {
  var remainingDays = indDate - currentDate;
}

var found = false;

// for (var i = 0; i < 8; i++) {
//   if (!found) {
//     var messages = [];
//     localStorage.setItem("messages", JSON.stringify(messages));
//     found = true;
//   } else {
//     var myChats = JSON.parse(localStorage.getItem("messages"));
//     var reply = prompt("Enter your message.....");
//     myChats.push(reply);
//     localStorage.setItem("messages", JSON.stringify(myChats));
//   }
// }

// var allMessages = JSON.parse(localStorage.getItem("messages"));