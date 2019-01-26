var fizz = "Fizz";
var buzz = "Buzz";
var fizzBuzz = "FizzBuzz";

for(var i=1; i<=100; i++){

if(i == 3){
	for(var j=0; j<3; j++){
		console.log(fizz);
	}
}

if(i == 5){
	for(var j=0; j<5; j++){
		console.log(buzz);
	}
}

if(i == 12){
	for(var j=0; j<3; j++){
		console.log(fizzBuzz);
	}
}
console.log(i)
}

var h1 = document.getElementsByTagName('h1');
console.log(h1.length)
for(var i=0; i<h1.length; i++){
    console.log(i);
    h1[i].style.color = "blue";
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i<ps.length; i++){
    if(i%2 == 0){
        ps[i].style.color = "yellow";
    }
    else{
        ps[i].style.color = "red";
    }

}

for(var i = 0; i<ps.length; i++){
    if(i%2 == 0){
        ps[i].innerHTML = "Sun raha hy na tu";
    }
    else{
        ps[i].innerHTML = "Ro rahi ho main";
    }

}

ps[6].innerHTML = "Hi";

ps[9].style.fontSize = "30px";

// var h3s = document.getElementsByTagName('h3');
// console.log(h3s);


var mydiv = document.getElementById('rules');

var myh3s = mydiv.getElementsByTagName('h3');
console.log(myh3s);
for(var i=0; i<myh3s.length; i++){
    myh3s[i].innerHTML = "Fine";
}


console.log("document",document)

var table = document.getElementById('mytable');
var tds = table.getElementsByTagName('td');

console.log(tds);

for(var i=0; i<tds.length; i++){
    if(i%2 == 0 ){
        tds[i].style.backgroundColor = "yellow";
    }
    else{
        tds[i].style.backgroundColor = "green";
    }
}