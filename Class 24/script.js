// function getAttributes(){
//     var element = document.getElementById('one');
//     // console.log(element.getAttribute('class')) //return its value
//     // console.log(element.hasAttribute('class')) //return boolean
//     // element.setAttribute('size','25');
//     // console.log(element.hasAttribute('size'));
//     for(var i=0; i<element.attributes.length; i++){
//         alert("Attribute " + element.attributes[i].nodeName + " value is " + element.attributes[i].nodeValue);
//     }
// }

var body = document.getElementsByTagName('body'); //parent
// console.log(body[0]);

var paragraph = document.createElement('p');
paragraph.innerHTML = "Hello Pakistan";
body[0].appendChild(paragraph);

var img = document.createElement('img');
img.setAttribute('src','1.png');
img.setAttribute('width','250px');
img.setAttribute("border", "5");
// img.src = "1.png";
body[0].appendChild(img);

var text = document.createTextNode('Hello World');
var h1 = document.createElement('h1');
h1.appendChild(text);
body[0].appendChild(h1);

var parent = document.getElementById('parent');
var h11 = document.createElement('h1');
h11.innerHTML = "5";
var child = parent.firstChild;
parent.insertBefore(h11 , child);


var h2 = document.createElement('h2');
h2.innerHTML = "6";
var sibling = parent.childNodes[6];
parent.insertBefore(h2 , sibling);

console.log(sibling);
parent.removeChild(sibling);