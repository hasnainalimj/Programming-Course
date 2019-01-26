var state;
var range;
var percent = 0;

function start(){
    percent = 0;
    var mainSlider = document.getElementById('mainSlider');
    var startTab = document.getElementById('startTab');
    var stopTab = document.getElementById('stopTab');

    state = setInterval(function(){
        mainSlider.style.width = ++percent + "%";
        startTab.style.marginLeft = (percent) + "%";
        startTab.innerHTML = ++percent
        if(percent == 100){
            clearInterval(state);
        }
    },100)
}

function stop(){
    var startTab = document.getElementById('startTab');
    var stopTab = document.getElementById('stopTab');
    startTab.style.marginLeft = "0%";
    startTab.innerHTML = "0";
    stopTab.style.display = "flex";
    stopTab.innerHTML = percent;
    stopTab.style.marginLeft = percent-5 + "%";
    clearInterval(state);
}
