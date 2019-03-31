var allUsers = document.getElementById('allUsers');
var loginUserId = localStorage.getItem('loginUserId');
var registerdUsers = JSON.parse(localStorage.getItem("registerdUsers"));

for(var i=0; i<registerdUsers.length; i++){
    if(registerdUsers[i].userId != loginUserId){
        var button = document.createElement("button");
        button.innerHTML = registerdUsers[i].fullName;
        button.addEventListener('click',startChat.bind(null,registerdUsers[i]))
        allUsers.appendChild(button);
    }
}

function startChat(param){
    localStorage.setItem('startChatWithHimHer',JSON.stringify(param));
    window.location.href = "../chatBox/chatBox.html"
}


