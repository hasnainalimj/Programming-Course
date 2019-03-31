var loginState = false;
var spareArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',1,2,3,4,5,6,7,8,9,0];

if (!localStorage.getItem('registerdUsers')) {
    var arr = []
    localStorage.setItem('registerdUsers', JSON.stringify(arr));
}

if(localStorage.getItem('loginUserId')){
    window.location.href = "inbox/inbox.html";
}

function signUp() {
    var txtName = document.getElementById('txtName').value;
    var txtEmail = document.getElementById('txtEmail').value;
    var txtPassword = document.getElementById('txtPassword').value;
    var registerdUsers = JSON.parse(localStorage.getItem('registerdUsers')); 
    var runnngState;
    var id = "";
    var url = "http://ekorcula.eu/wp-content/uploads/2017/04/male-avatar-admin-profile.png";

    //Generating Random Id
    for(var i=0; i<10; i++){
        var index = Math.floor(Math.random() * spareArray.length);
        var charector = spareArray[index];
        id += charector;
    }

    var user = {
        userId : id,
        fullName: txtName,
        email: txtEmail,
        pass: txtPassword,
        profileImage : url
    }

    if (registerdUsers.length == 0) { 
        runnngState = 1;
    }
    else {
        runnngState = registerdUsers.length; 
    }

    for (var i = 0; i < runnngState; i++) {

        if (registerdUsers[i] != null && registerdUsers[i].fullName == user.fullName) {
            alert("Username already exists");
        }
        else if (registerdUsers[i] != null && registerdUsers[i].email == user.email) {
            alert("Email already exists");
        }
        else {
            registerdUsers.push(user);
            localStorage.setItem('registerdUsers', JSON.stringify(registerdUsers)); 
            setTimeout(function () {
                document.getElementById('txtName').value = "";
                document.getElementById('txtEmail').value = "";
                document.getElementById('txtPassword').value = "";
                alert("Signup Successfully");
            }, 2000)
        }
    }
}

function login() {
    var txtEmail = document.getElementById('txtLoginEmail').value;
    var txtPassword = document.getElementById('txtLoginPassword').value;
    var registerdUsers = JSON.parse(localStorage.getItem('registerdUsers'));


    for (var i = 0; i < registerdUsers.length; i++) {
        if (txtEmail == registerdUsers[i].email && txtPassword == registerdUsers[i].pass) {
            localStorage.setItem("loginUserId",registerdUsers[i].userId);
            loginState = true;
        }
    }

    if (loginState) {
        alert("Login Successfully!");
        document.getElementById('txtLoginEmail').value = "";
        document.getElementById('txtLoginPassword').value = "";
        window.location.href = "inbox/inbox.html";
    } else {
        alert("Invalid email or password");
    }
}