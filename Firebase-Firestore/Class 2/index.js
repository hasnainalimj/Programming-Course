// Initialize Firebase
var config = {
    apiKey: "AIzaSyCRIwnsmabJiyrlQoKxytOGu2LoSNfOReM",
    authDomain: "example-app-2c29c.firebaseapp.com",
    databaseURL: "https://example-app-2c29c.firebaseio.com",
    projectId: "example-app-2c29c",
    storageBucket: "example-app-2c29c.appspot.com",
    messagingSenderId: "832811116443"
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
