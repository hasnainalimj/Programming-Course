var running;

function drive(){
    var gears = 0;
    var mycar = document.getElementById('mycar');
    running = setInterval(function(){
        mycar.style.marginLeft = ++gears + "%";
    },100)
}

function brake(){
    console.log(running);
    clearInterval(running);
}