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

function signUp() {
    var email = document.getElementById('txtEmail').value;
    var pass = document.getElementById('txtPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (res) {
        console.log(res.user.uid);
        alert("Signup Successfully.....");
    }).catch(function (error) {
        alert(error.message);
    })
}

function signIn() {
    var email = document.getElementById('txtEmail').value;
    var pass = document.getElementById('txtPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, pass).then(function (res) {
        console.log(res.user.uid);
        alert("Signin Successfully.....");
    }).catch(function (error) {
        alert(error.message);
    })
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);

        //Update User Profile
        // user.updateProfile({
        //     displayName: "Hasnain Ali",
        //     photoURL: "https://example.com/jane-q-user/profile.jpg"
        // }).then(function () {
        //     alert("Updated Successfully")
        // }).catch(function (error) {
        //     alert(error.message)
        // });


        //Send Email Verification
        // user.sendEmailVerification().then(function () {
        //     console.log("Sended");
        // }).catch(function (error) {
        //     alert(error.message);
        // });


        //Password Update
        // var newPassword = "hasnainali";
        // user.updatePassword(newPassword).then(function () {
        //     console.log("Password Changed");
        // }).catch(function (error) {
        //     alert(error.message);
        // });


        //Delete User
        // user.delete().then(function () {
        //     console.log("User Deleted")
        // }).catch(function (error) {
        //     alert(error.message)
        // });

    } else {
        console.log("User Logout");
    }
});


//Send a password reset email
function changePassByEmail() {
    firebase.auth().sendPasswordResetEmail("mjhasnain15@gmail.com").then(function () {
        console.log("Email Sended")
    }).catch(function (error) {
        alert(error.message);
    });
}


//Signout
function signOut() {
    firebase.auth().signOut().then(function () {
        alert("Logout Successfully");
    }).catch(function (error) {
        console.log(error.message);
    });
}


