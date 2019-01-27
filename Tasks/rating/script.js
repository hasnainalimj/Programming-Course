function onHover(star_number){
    for(var  i=1; i<=star_number; i++){
        var id = 'star'+i;
        var stars = document.getElementById(id);
        stars.style.color = "yellow";
    }
}

function onBlur(star_number){
    for(var  i=1; i<=star_number; i++){
        var id = 'star'+i;
        var stars = document.getElementById(id);
        stars.style.color = "black";
    }
}

var ratings = 0;
var noOfRatings = [];

function rating(star_number){
    var displays = document.getElementById('displays');
    // noOfRatings.push(star_number);
    ratings += star_number;
    for(var i=1; i<=star_number; i++){
        var id = 'star'+i;
        var stars = document.getElementById(id);
        stars.style.color = "orange";
    }
    var result = 0;
    // for(var j=0; j<noOfRatings.length; j++){
    //     ratings += noOfRatings[j]/noOfRatings.length;
    // }
    displays.innerHTML = ratings;
}