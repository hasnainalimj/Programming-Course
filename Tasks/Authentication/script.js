var loginState = false;

if (!localStorage.getItem('registerdUsers')) { //if available == true else == false
    var arr = []
    localStorage.setItem('registerdUsers', JSON.stringify(arr));
}

//Must we have 
//1) []
//2) [{},{},{},{},{}]

function signUp() {
    var txtName = document.getElementById('txtName').value;
    var txtEmail = document.getElementById('txtEmail').value;
    var txtPassword = document.getElementById('txtPassword').value;
    var registerdUsers = JSON.parse(localStorage.getItem('registerdUsers')); //1)[] 2) [{},{},{},{},{}]
    var runnngState; //for validation

    var user = {
        fullName: txtName,
        email: txtEmail,
        pass: txtPassword
    }

    if (registerdUsers.length == 0) { // length 0 assign 1 to runningState
        runnngState = 1;
    }
    else {
        runnngState = registerdUsers.length; //else assign actual length of array
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
            localStorage.setItem('registerdUsers', JSON.stringify(registerdUsers)); ////1)[] 2) [{},{},{},{},{}] when push new one it will become updated array [{},{},{},{},{}, {}]
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
            loginState = true;
        }
    }

    if (loginState) {
        alert("Login Successfully!");
        document.getElementById('txtLoginEmail').value = "";
        document.getElementById('txtLoginPassword').value = "";
    } else {
        alert("Invalid email or password");
    }
}