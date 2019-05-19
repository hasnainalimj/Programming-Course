// Initialize Firebase
var config = {
  
};
firebase.initializeApp(config);

function signIn() {
    var email = document.getElementById('txtEmail').value;
    var pass = document.getElementById('txtPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, pass).then(function (res) {
        localStorage.setItem('loginUser',res.user.uid);
        localStorage.setItem('userEmail',res.user.email);        
        window.location.href = "../dashboard/index.html";
        alert("Signin Successfully.....");
    }).catch(function (error) {
        alert(error.message);
    })
}