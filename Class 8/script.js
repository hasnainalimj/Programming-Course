function tellTime() {
  var now = new Date();
  var hours = now.getHours();
  var mints = now.getMinutes();
  console.log("Time is : " + hours + ":" + mints);
}

// tellTime();
var n

function greetUser(name) {
  console.log("Hello " + name);
}

// var val = prompt();

// greetUser(val);

// greetUser("Ali Khan");

// greetUser(2123);

function data(x, y) {
  console.log("My name is " + x + " and my father name is " + y);
}

// var name = prompt("Enter your name");
// var fname = prompt("Enter your father name");

// data(name,fname);

function showMessage(m, string, num) {
  alert(m + string + num);
}

var month = "June";
// showMessage(month," abcdef ",25);

function calcTot(merchTot) {
  var orderTot;
  if (merchTot >= 100) {
    orderTot = merchTot;
  }
  else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
  }
  else {
    orderTot = merchTot + 5 + (.03 * (merchTot - 50));
  }
  return orderTot;
}

// calcTot(50);

function name(n){
 if(n == "Saad"){
   return
 }
 console.log("Return");
}

// name("Hasnain");
// name("Saad");

