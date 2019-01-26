// function callFunction(){
//     var txtName = document.getElementById('txtName').value;
//     var selectIds = document.getElementById('selectIds').value;

//     if(selectIds == 1){
//         document.getElementById('val1').innerHTML = txtName;
//     }
//     else if(selectIds == 2){
//         document.getElementById('val2').innerHTML = txtName;
//     }
//     else if(selectIds == 3){
//         document.getElementById('val3').innerHTML = txtName;
//     }
//     else if(selectIds == 4){
//         document.getElementById('val4').innerHTML = txtName;
//     }
//     else if(selectIds == 5){
//         document.getElementById('val5').innerHTML = txtName;
//     }
//     else if(selectIds == 6){
//         document.getElementById('val6').innerHTML = txtName;
//     }
//     else if(selectIds == 7){
//         document.getElementById('val7').innerHTML = txtName;
//     }
//     else if(selectIds == 8){
//         document.getElementById('val8').innerHTML = txtName;
//     }
//     else if(selectIds == 9){
//         document.getElementById('val9').innerHTML = txtName;
//     }
//     else{
//         document.getElementById('val10').innerHTML = txtName;
//     }
// }

function swapPic() {
    var myimage = document.getElementById('myimage');
    myimage.src = "at.png";
}

function swapOldPic() {
    var myimage = document.getElementById('myimage');
    myimage.src = "1.png";
}

function swaps(id, image) {
    document.getElementById(id).src = image;
    // document.getElementById("before").src = "after-pic.jpg"; 
    // console.log("id",id);
    // console.log("image",image);
}

function getLink() {
    var mylink = document.getElementById('mylink');
    console.log(mylink.href);
}

function changeClass() {
    var getImage = document.getElementById('getImage');
    getImage.className += " jumbo";
}

// function makeBig(){
//     var para = document.getElementById('mypara');
//     para.style.fontSize = "50px";
// }

function makeFloat() {
    var para = document.getElementById('mypara');
    para.style.cssFloat = "right";
}

function getLarger(n1, n2) {
    console.log(Math.max(n1, n2))
}

getLarger(5, 7)


for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        var result = nums[i].toString();
        var result2 = result.slice(0, 1);
        console.log("Number is : " + nums[i] + " And Sign is : " + result2);
    }
}

for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " Even");
    }
    else {
        console.log(i + " Odd");
    }
}