localStorage.setItem('password','273354');

var time = document.getElementById('time');
var date = document.getElementById('date');

var currentDate = new Date();

time.innerHTML = currentDate.toString().slice(17,24);
date.innerHTML = currentDate.toString().slice(0,16);

var txtPass = document.getElementById('txtPass');

function getNumber(number){
    switch(number){
        case 1:
        txtPass.value += 1
        break;

        case 2:
        txtPass.value += 2
        break;

        case 3:
        txtPass.value += 3
        break;

        case 4:
        txtPass.value += 4
        break;

        case 5:
        txtPass.value += 5
        break;

        case 6:
        txtPass.value += 6
        break;

        case 7:
        txtPass.value += 7
        break;

        case 8:
        txtPass.value += 8
        break;

        case 9:
        txtPass.value += 9
        break;

        case 0:
        txtPass.value += 0
        break;

    }
}

function clearAll(){
    txtPass.value = "";
}

function done(){
    var orignalPass = localStorage.getItem('password');
    orignalPass == txtPass.value ? alert("Unlocked") : alert("Incorrect Passwrod");
}
