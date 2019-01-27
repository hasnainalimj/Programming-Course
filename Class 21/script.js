var javascriptFile = 'app.js';
var htmlFile = 'index.html';
var cssFile = 'style.css';

var jsExtension = javascriptFile.split('.');


var parent = document.getElementById('humpty');
// console.log(parent.nextSibling);
// console.log(parent.previousSibling);

// console.log(parent.nodeName)
// console.log(parent.childNodes[1].nodeName);

// console.log(parent.childNodes[1].innerHTML);

var targetP = document.getElementsByTagName('p');

// console.log(targetP);
// console.log(targetP.length)

// for(var i=0; i<targetP.length; i++){
//     if(targetP[i].innerHTML == ""){
//         targetP[i].innerHTML = "World";
//     }
// }

// console.log(document.childNodes[0].childNodes[2].childNodes);

// var elements = document.childNodes[0].childNodes[2].childNodes;

// for(var i=0; i<elements.length; i++){
//     if(elements[i].nodeName == "P"){
//         elements[i].style.color = "red";
//     }
// }

var mytag = document.getElementById('mytag');
console.log(mytag.hasAttribute('class')) //Return Boolean

console.log(mytag.getAttribute('href')) // Retrun Attribute Value

mytag.setAttribute('class','abcde');
console.log(mytag.getAttribute('class')) // Retrun Attribute Value

console.log("Before change => ",mytag.hasAttribute('target'))
mytag.setAttribute('target','_blank');
console.log("After change => ",mytag.hasAttribute('target'))