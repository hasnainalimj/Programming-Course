// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         for (var k = 0; k < 5; k++) {
//             console.log(i, j, k)
//         }
//     }
// }

function getName() {
    var txt = document.getElementById('txtName');
    var result = document.getElementById('myParagraph');
    result.innerHTML = txt.value;
}


function checkSim() {
    var simName;
    var codes = document.getElementById('txtCode');
    var sim = document.getElementById('txtSim');
    var simname = document.getElementById('simname');
    console.log(simname);
    switch (codes.value) {
        case "0310":
            simName = "Zong";
            break;

        case "0342":
            simName = "Telenor";
            break;

        case "0333":
            simName = "Ufone";
            break;

        default:
            simName = "Invalid Sim";
    }
    sim.value = simName;
    simname.innerHTML = simName;
}

function showMore() {
    var txt = document.getElementById('txt');
    var fulltext = document.getElementById('fulltxt');
    txt.style.display = "none";
    fulltext.style.display = "block";
}

function showLess() {
    var txt = document.getElementById('txt');
    var fulltext = document.getElementById('fulltxt');
    txt.style.display = "block";
    fulltext.style.display = "none";
}

function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

// setTimeout(() => {
// 	console.log("The Game");
// },8000);

// console.log(1);
// setTimeout(function(){
//  console.log(2);
// },0);
// console.log(3);

// setInterval(function(){
// 	console.log('Hello')
// },5000);

// var num = 0;
// var stopwatch = setInterval(function(){
//  console.log(++num);
// },1000);

// clearInterval(stopwatch);

var hours = 0;
var mints = 0;
var seconds = 0;

// setInterval(function(){
//     seconds++;
//     if(seconds == 59){
//         ++mints;
//         seconds = 0;
//     }
//     if(mints == 59){
//         ++hours;
//         mints = 0;
//         seconds = 0;
//     }
//     console.log(hours + ":" + mints + ":" + seconds);
// },1000);

function setInvisible() {
    document.getElementById("uglyImage").style.display = "none";
}

function setVisible() {
    document.getElementById("uglyImage").style.display = "block";
}

function addNewClass() {
    var elem = document.getElementById("uglyImage");
    elem.className = "showSomeBorder";
}

function addWidth() {
    var elem = document.getElementById("uglyImage");
    console.log(elem);
    elem.className += " showWidth";
}
