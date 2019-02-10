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

  function signUp(event){
      event.preventDefault();

      var name = document.getElementById('txtname').value;
      var email = document.getElementById('txtemail').value;
      var pass = document.getElementById('txtpassword').value;
      var phone = document.getElementById('txtphone').value;
      var city = document.getElementById('txtcity').value;

    //   console.log(name + email + pass + phone + city);

    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((res) => {

        var userId = res.user.uid;

        firestore.collection("Users").doc(userId).set({
            userId,
            name,
            email,
            phone,
            city
        }).then(function(){
            localStorage.setItem("userId",userId);
            alert("User Signup Successfully");
            window.location = "../../../index.html";
            document.getElementById('txtname').value = "";
            document.getElementById('txtemail').value = "";
            document.getElementById('txtpassword').value = "";
            document.getElementById('txtphone').value = "";
            document.getElementById('txtcity').value = "";
        }).catch(function(error){
            alert("Trouble while siging up");
        })
    })
  }