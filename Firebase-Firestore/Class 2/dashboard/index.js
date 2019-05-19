// Initialize Firebase
var config = {
   
};
firebase.initializeApp(config);

var txtName = document.getElementById('txtName');
var txtEmail = document.getElementById('txtEmail');
var txtVerify = document.getElementById('txtVerify');
var profileSec = document.getElementById('profileSec');


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        user.displayName ? txtName.innerHTML = user.displayName : txtName.innerHTML = "Not Found";
        user.email ? txtEmail.innerHTML = user.email : txtEmail.innerHTML = "Not Found";
        user.emailVerified ? txtVerify.innerHTML = "Verified" : txtVerify.innerHTML = "Not Verified";
        user.photoURL ? profileSec.src = user.photoURL : profileSec.src = "../assets/2.png";

    }
});

function updateProfile() {
    var name = document.getElementById('updateName').value
    var img = document.getElementById('updateImg').value
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.updateProfile({
                displayName: name,
                photoURL: img,

            }).then(function () {
                alert("Updated Successfully")
                window.location.reload()
            }).catch(function (error) {
                alert(error.message)
            });
        }
    });
}

function verifyEmail() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Send Email Verification
            user.sendEmailVerification().then(function () {
                alert("Email Sended");
                window.location.href = "../signIn/index.html"
            }).catch(function (error) {
                console.log(error.message);
            });

        }
    });
}

//change password
function changePass() {
    var pass = document.getElementById("changePassword").value;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //Password Update
            user.updatePassword(pass).then(function () {
                alert("Password Changed");
                logout()
            }).catch(function (error) {
                alert(error.message);
            });
        }
    })
}

//Send a password reset email
function changePassByEmail() {
    var userEmail = localStorage.getItem("userEmail");
    firebase.auth().sendPasswordResetEmail(userEmail).then(function () {
        alert("Email Sended")
        // window.location.href = "../signIn/index.html"
    }).catch(function (error) {
        console.log(error.message);
    });
}

//Delete user
function deleteUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //Delete User
            user.delete().then(function () {
                alert("User Deleted")
                window.location.href = '../signUp/index.html'
            }).catch(function (error) {
                console.log(error.message)
            });
        }
    })
}
//Signout
function logout() {
    firebase.auth().signOut().then(function () {
        localStorage.removeItem("loginUser");
        window.location.href = "../signIn/index.html";
    }).catch(function (error) {
        console.log(error.message);
    });
}



