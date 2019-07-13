function mySlider(width) {
    var slider = document.getElementById('myslider');
    slider.style.width = width + "%";
}

var found = false;

for (var i = 0; i < 100; i++) {
    if (!found) {
        var messages = [];
        found = true;
        console.log("false",i);
    }
    else {
        console.log("true",i);
        localStorage.setItem("messages", JSON.stringify(messages));

        var parsing = localStorage.getItem("messages");

        var mychats = JSON.parse(parsing);
        // var reply = prompt("Enter you message");


        var reply = "a";
        mychats.push(reply);
        localStorage.setItem("messages", JSON.stringify(mychats));
    }
}

// console.log(JSON.parse(localStorage.getItem("arr")));

// var arr = ['name','abc'];

// var stringArr = JSON.stringify(arr);
// localStorage.setItem("arr",stringArr);


// var getArr = localStorage.getItem("arr");
// console.log(JSON.parse(getArr));

// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "") {
//         alert("Email address required.");
//     }
// }

var elem = document.getElementById('abc').innerHTML;
console.log(elem);
var txt = document.getElementById('txt').value;
console.log(txt)
