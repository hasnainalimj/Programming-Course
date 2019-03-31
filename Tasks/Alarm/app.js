var audio = new Audio('ringtone.mp3');
var setAlarm = document.getElementById('setAlarm');
var runningTime = document.getElementById('runningTime');

var setHour = 1;
var setMints = 15;
var setSecs = 20;

var currentHour = 0;
var currentMints = 0;
var currentSecs = 0;

setAlarm.innerHTML = setHour + " : " + setMints + " : " + setSecs;

setInterval(function(){
    ++currentSecs;
    if(currentSecs == 60){
        ++currentMints;
        currentSecs = 0;
    }
    if(currentMints == 60){
        ++currentHour; 
        currentSecs = 0;
        currentMints = 0;
    }

    runningTime.innerHTML = currentHour + " : " + currentMints + " : " + currentSecs;

    if(currentHour == setHour && currentMints == setMints && currentSecs == setMints){
        playAudio();
    }
},1)

function playAudio() {
    audio.play();
}

function stopAudio(){
    audio.pause();
}
