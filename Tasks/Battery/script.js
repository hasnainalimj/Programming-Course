var batteryLevel = 100;
var batteryShowing = document.getElementById('battery');
batteryShowing.innerHTML = batteryLevel + "%";

var gamer = document.getElementById('playGame');
var fb = document.getElementById('useFb');
var utube = document.getElementById('useYoutube');
var sms_ = document.getElementById('sendSms');
var caller = document.getElementById('makeCall');


var gaming = 0;
var fbTime = 0;
var youtubeTime = 0;
var sms = 0;
var callTime = 0;
var usingTime = 0;
var fbInterval;
var youtubeInterval;
var callInterval;

function playGame() {
    gaming = ++gaming;
    if (gaming == 10) {
        gaming = 0;
        batteryLevel = batteryLevel - 10;
        batteryShowing.innerHTML = batteryLevel + "%";
    }
    if (batteryLevel <= 15) {
        document.getElementById('charger').style.display = "inline";
    }
    if (batteryLevel <= 0) {
        document.getElementById('usingTime').innerHTML = "Mobile Off";
        gamer.style.display = "none";
        fb.style.display = "none";
        utube.style.display = "none";
        sms_.style.display = "none";
        caller.style.display = "none";
    }
}

function usingFb() {
    document.getElementById('closeFb').style.display = "inline";
    document.getElementById('usingTime').style.display = "block";
    fbInterval = setInterval(function () {
        fbTime = ++fbTime
        ++usingTime;
        document.getElementById('usingTime').innerHTML = "Using Facebook : " + usingTime;
        if (fbTime == 10) {
            fbTime = 0;
            batteryLevel = batteryLevel - 5;
            batteryShowing.innerHTML = batteryLevel + "%";
        }
        if (batteryLevel <= 15) {
            document.getElementById('charger').style.display = "inline";
        }
        if (batteryLevel <= 0) {
            document.getElementById('usingTime').innerHTML = "Mobile Off";
            gamer.style.display = "none";
            fb.style.display = "none";
            utube.style.display = "none";
            sms_.style.display = "none";
            caller.style.display = "none";
        }
    }, 1000);
}

function closeFb() {
    document.getElementById('closeFb').style.display = "none";
    document.getElementById('usingTime').style.display = "none";
    usingTime = 0;
    fbTime = 0;
    clearInterval(fbInterval);
}

function usingYoutube() {
    document.getElementById('closeYoutube').style.display = "inline";
    document.getElementById('usingTime').style.display = "block";
    youtubeInterval = setInterval(function () {
        youtubeTime = ++youtubeTime
        ++usingTime;
        document.getElementById('usingTime').innerHTML = "Using Youtube : " + usingTime;
        if (youtubeTime == 10) {
            youtubeTime = 0;
            batteryLevel = batteryLevel - 15;
            batteryShowing.innerHTML = batteryLevel + "%";
        }
        if (batteryLevel <= 15) {
            document.getElementById('charger').style.display = "inline";
        }
        if (batteryLevel <= 0) {
            document.getElementById('usingTime').innerHTML = "Mobile Off";
            gamer.style.display = "none";
            fb.style.display = "none";
            utube.style.display = "none";
            sms_.style.display = "none";
            caller.style.display = "none";
        }
    }, 1000);
}

function closeYoutube() {
    document.getElementById('closeYoutube').style.display = "none";
    document.getElementById('usingTime').style.display = "none";
    usingTime = 0;
    youtubeTime = 0;
    clearInterval(youtubeInterval);
}

function sendingSms() {
    sms = ++sms;
    if (sms == 15) {
        sms = 0;
        batteryLevel = batteryLevel - 5;
        batteryShowing.innerHTML = batteryLevel + "%";
    }
    if (batteryLevel <= 15) {
        document.getElementById('charger').style.display = "inline";
    }
    if (batteryLevel <= 0) {
        document.getElementById('usingTime').innerHTML = "Mobile Off";
        gamer.style.display = "none";
        fb.style.display = "none";
        utube.style.display = "none";
        sms_.style.display = "none";
        caller.style.display = "none";
    }
}

function makeCall() {
    document.getElementById('endCall').style.display = "inline";
    document.getElementById('usingTime').style.display = "block";
    callInterval = setInterval(function () {
        callTime = ++callTime
        ++usingTime;
        document.getElementById('usingTime').innerHTML = "Call Timing : " + usingTime;
        if (callTime == 20) {
            callTime = 0;
            batteryLevel = batteryLevel - 25;
            batteryShowing.innerHTML = batteryLevel + "%";
        }
        if (batteryLevel <= 15) {
            document.getElementById('charger').style.display = "inline";
        }
        if (batteryLevel <= 0) {
            document.getElementById('usingTime').innerHTML = "Mobile Off";
            gamer.style.display = "none";
            fb.style.display = "none";
            utube.style.display = "none";
            sms_.style.display = "none";
            caller.style.display = "none";
        }
    }, 1000);
}

function endCall() {
    document.getElementById('endCall').style.display = "none";
    document.getElementById('usingTime').style.display = "none";
    usingTime = 0;
    callTime = 0;
    clearInterval(callInterval);
}

function chargeMobile() {
    document.getElementById('usingTime').style.display = "none";
    gamer.style.display = "inline";
    fb.style.display = "inline";
    utube.style.display = "inline";
    sms_.style.display = "inline";
    caller.style.display = "inline";
    clearInterval(fbInterval);
    clearInterval(youtubeInterval);
    clearInterval(callInterval);
    gaming = 0;
    fbTime = 0;
    youtubeTime = 0;
    sms = 0;
    callTime = 0;
    batteryLevel = ++batteryLevel;
    batteryShowing.innerHTML = batteryLevel + "%";
    if (batteryLevel == 100) {
        document.getElementById('charger').style.display = "none";
    }
}