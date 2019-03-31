// var mainWrappper = document.getElementById('mainWrappper');

// var btn = document.createElement('button');
// btn.innerHTML = "Click Me";
// mainWrappper.appendChild(btn);

var whereWeAt = window.location.href;

// console.log(whereWeAt);

var theDomain = window.location.hostname;

var pathName = window.location.pathname;

var theAnchor = window.location.hash;

// window.location.href = "https://www.google.com/";

// window.location.href = "https://www.google.com/#fsr";

var currentSite = window.location.hostname;
var destination = "http://" + currentSite + "/wow.html";
// window.location.href = destination;

var currentSite = window.location.hostname;
var currentPath = window.location.pathname;
var destination = "http://" + currentSite + currentPath + "#humidifier";
// window.location.href = destination

// window.location.assign("https://www.google.com/");

// window.location.replace("http://www.me.com/lojack.html#guarantee");

// window.location.reload(true); 
// window.location.reload(false); 
// window.location.reload()

// window.location.href = window.location.href

// history.back();
// history.forward()
// history.go(-3);
// history.go(2)
// history.back();
// history.forward()
// var whereUserCameFrom = document.referrer;

// var monkeyWindow = window.open();

// var monkeyWindow = window.open(); 
// var windowContent = "<h1>Capuchin monkey</h1><img src='monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);

// window.open().location.assign("http://www.animals.com/capuchin.html");

// monkeyWindow.close();

// var monkeyWindow = window.open("home.html", "home");
// var monkeyWindow = window.open("", "win1");

// var monkeyWindow = window.open("home.html", "home", "width=200,height=50");

// var w = window.open("home.html", "home", "width=200,height=50,left=500,top=300");

function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100,height=100"); if (testPop === null) {
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}

// checkForPopBlocker();