function logout(){
    localStorage.removeItem('userId');
    window.location.reload();
}

var userId = localStorage.getItem('userId');

if(!userId){
    window.location = "../login/login.html";
}

function submitAd(event){
    event.preventDefault();

    var title = document.getElementById('title').value;
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;
    var files = document.getElementById('files').files;
    var price = document.getElementById('price').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('city').value;

    // console.log(title + category + description + files + price + name + phone + city);
}