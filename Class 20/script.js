// var elements = document.getElementsByTagName('p');
// console.log(elements);

// console.log(elements[5].innerHTML = "Hi");

console.log(document);

// var title = document.childNodes[0].childNodes[0].childNodes[1].innerHTML;

// console.log(title)

// var ps = document.childNodes[0].childNodes[2].childNodes[3].childNodes[3].innerHTML;

// console.log(ps);

// var ignore = document.childNodes[0].childNodes[1];

// console.log(ignore);


var d = document.getElementById("humpty");
var pCounter = 0;
// console.log(d.nodeType)
// console.log(d.childNodes[3].nodeType);
// console.log(typeof(document.childNodes));
// console.log(d.childNodes.length);
for (var i = 0; i < d.childNodes.length; i++) {
    // console.log(i);
    if (d.childNodes[i].nodeType === 1) {
        pCounter++;
    }
    if (pCounter === 2) {
        d.childNodes[i].innerHTML = "All his men."; break;
    }
}

var firstChild = document.childNodes[0].firstChild.childNodes[1];

var lastChild = document.childNodes[0].lastChild.childNodes[3].lastChild;

// console.log(firstChild);
// console.log(lastChild);
// var parentNode = document;
// console.log(parentNode)

var kidNode = document.getElementById('humpty');
var parentNode = kidNode.parentNode; //Father Node
var grandNode = parentNode.parentNode;
console.log(parentNode)
console.log(grandNode)

