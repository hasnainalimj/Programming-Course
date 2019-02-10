var ratings = 0;

function onHover(id) {
    var star = "star";
    // console.log(star+id);
    for (var i = 1; i <= id; i++) {
        // console.log(star+i);
        var myId = star + i;
        document.getElementById(myId).style.color = "yellow";
    }
}

function onBlur(id) {
    var star = "star";
    // console.log(star+id);
    for (var i = 1; i <= id; i++) {
        // console.log(star+i);
        var myId = star + i;
        document.getElementById(myId).style.color = "black";
    }
}

function rating(id) {
    var star = "star";
    ratings += id;
    // console.log(star+id);
    for (var i = 1; i <= id; i++) {
        // console.log(star+i);
        var myId = star + i;
        document.getElementById(myId).style.color = "orange";
    }
    document.getElementById('displays').innerHTML = ratings;
}


var paragraph = "Education refers to the attainment of knowledge through academic and scholastic efforts.  Education includes all that can help one’s enlightenment and empowerment. Education gives one the knowledge and skills to work with excellence. It helps in one’s all-round physical, mental and intellectual growth and development. One learns a great deal about life through education. Education is offered through academic and research institutions, and imparted by teachers and trainers. Education equips one to live life meaningfully. It is important that children and youth are educated so they can live productive lives and help in the progress of the society and nation.";

for (var i = 0; i < paragraph.length; i++) {
    if (paragraph.slice(i, i + 3) == "and") {
        paragraph = paragraph.slice(0, i) + "hello" + paragraph.slice(i + 3);
    }
}


var paragraph = "The education system needs to be inclusive so that the children and youth of all social and economic backgrounds may have access to education. All educational institutions that form the system of formal education must encourage the greatest numbers of students to avail of education.";

for(var i=0; i<paragraph.length; i++){
	if(paragraph.slice(i,i+9) == "education"){
		paragraph = paragraph.slice(0,i) + "taleem" + paragraph.slice(i+9);
	}
}

var elements = document.getElementsByTagName('i'); //return an array
// console.log(elements);

var parent = document.getElementById('parent');
// console.log(parent.childNodes);

var mychilds = parent.getElementsByTagName('i');
// console.log(mychilds);

var anchor = document.getElementById('anchor');
// console.log(anchor.attributes); // return an array
// console.log(anchor.attributes.length);


var p1 = document.getElementById('p1');
// console.log(p1.attributes[2].nodeValue);