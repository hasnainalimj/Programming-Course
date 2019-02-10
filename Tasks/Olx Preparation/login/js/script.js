// Initialize Firebase
var config = {
    apiKey: "AIzaSyCFu6fP-A8uSQaTowNZ-IrUs2tJQJ0SHvs",
    authDomain: "authentication-285a6.firebaseapp.com",
    databaseURL: "https://authentication-285a6.firebaseio.com",
    projectId: "authentication-285a6",
    storageBucket: "authentication-285a6.appspot.com",
    messagingSenderId: "255174535843"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

function login(event) {
    event.preventDefault();

    var email = document.getElementById('txtemail').value;
    var pass = document.getElementById('txtpassword').value;

    auth.signInWithEmailAndPassword(email, pass).then((res) => {
        var userId = res.user.uid;
        localStorage.setItem("userId",userId);
        alert("Login Successfully")
        window.location = "../../../index.html";
    }).catch((e) => {
        alert("Invalid email or password");
        document.getElementById('txtemail').value = "";
        document.getElementById('txtpassword').value = "";
    })
}