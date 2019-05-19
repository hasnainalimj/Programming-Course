// Initialize Firebase
var config = {
  
};
firebase.initializeApp(config);

if(localStorage.getItem('loginUser')){
    window.location.href = "dashboard/index.html";
}

function signUp() {
    var email = document.getElementById('txtEmail').value;
    var pass = document.getElementById('txtPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (res) {
        localStorage.setItem('loginUser',res.user.uid);
        localStorage.setItem('userEmail',res.user.email);        
        window.location.href = "signIn/index.html";
        alert("Signup Successfully.....");
    }).catch(function (error) {
        alert(error.message);
    })
}
