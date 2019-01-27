function signup() {
    var name = document.getElementById('txtName').value;
    var email = document.getElementById('txtEmail').value;
    var pass = document.getElementById('txtPassword').value;

    setTimeout(function () {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', pass);
        alert('Signup Successfully');
        document.getElementById('txtName').value = "";
        document.getElementById('txtName').style.display = "none";
        document.getElementById('txtEmail').value = "";
        document.getElementById('txtPassword').value = "";
        document.getElementById('btnSignup').style.display = "none";
        document.getElementById('btnLogin').style.display = "block";
        document.getElementById('title').innerHTML = "Login";
        document.getElementById('txtShow').style.display = "block";
    }, 2000);
}

function createAccount() {
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtPassword').value = "";
    document.getElementById('txtName').style.display = "block";
    document.getElementById('btnSignup').style.display = "block";
    document.getElementById('btnLogin').style.display = "none";
    document.getElementById('title').innerHTML = "Create New Account";
    document.getElementById('txtShow').style.display = "none";
}

function login() {
    var localEmail = document.getElementById('txtEmail').value;
    var localPass = document.getElementById('txtPassword').value;

    var email = localStorage.getItem('email');
    var pass = localStorage.getItem('password');

    setTimeout(function () {
        if (localEmail == email && localPass == pass) {
            alert("Login Successfully");
        }
        else {
            alert("Invalid Username & Password!");
        }
    }, 2000);
}