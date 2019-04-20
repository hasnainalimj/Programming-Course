// function checkEmail(){
//     var txtEmail = document.getElementById('txtEmail').value;
//     if(txtEmail.indexOf(" ") !== -1){
//         alert("Space not allowed!")
//         return false
//     }
// }

// function checkEmail(){
//     var txtEmail = document.getElementById('txtEmail').value;
//     if(txtEmail.indexOf("@") < 1){
//         alert("No at the rate sign!");
//         return false;
//     }
// }

// function checkEmail(){
//     var txtEmail = document.getElementById('txtEmail').value;
//         if(txtEmail.indexOf("@") < 1 ){
//             alert("No at the rate sign!");
//             return false;
//         }
// }


// function checkEmail() {
//     var txtEmail = document.getElementById('txtEmail').value;
//     var flag = true;
//     if(txtEmail.indexOf("@") < 1){
//         flag = false;
//     }
//     for(let i=0; i<txtEmail.length; i++){
//         if(txtEmail[i] == " "){
//             flag = false;
//         }
//     }

//     if(!flag){
//         alert("Invalid Email......");
//     }
//     else{
//         alert("Valid Email");
//     }
// }


// function checkEmail() {
//     var txtEmail = document.getElementById("txtEmail").value;
//     var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
//     if (!(txtEmail.match(regex))) {
//         alert("Please correct email address");
//         return false;
//     }
//     else{
//         alert("Best")
//     }
// }

// function greeting(){
//     aler("Hello");
// }

// gretting();

// function greeting(){
//     try {
//         aler("Hello")
//     } catch (error) {
//         console.log(error);
//     }
// }

// greeting();

// console.log("Second Step");

// function checkPassword() {
//     try {
//         var pass = document.getElementById("f1").value;
//         if (pass.length < 8) {
//             throw "Please enter at least 8 characters.";
//         }
//         if (pass.indexOf(" ") !== -1) {
//             throw "No spaces in the password, please.";
//         }
//         var numberSomewhere = false;
//         for (var i = 0; i < pass.length; i++) {
            
//             if (parseInt(typeof(pass[i])) == "number") {
//                 numberSomewhere = true;
//                 break;
//             }
//         }
//         if (numberSomewhere === false) {
//             throw "Include at least 1 number.";
//         }
//     }
//     catch (err) {
//         alert(err);
//     }
// }