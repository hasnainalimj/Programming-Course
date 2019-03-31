var userId = localStorage.getItem('loginUserId');
var popUp = document.getElementById('popUp');
var inboxParent = document.getElementById('inboxParent');
var registeredUsers = JSON.parse(localStorage.getItem('registerdUsers'));
var otherUserId = "";

if (!localStorage.getItem(userId)) {
    var arr = [];
    localStorage.setItem(userId, JSON.stringify(arr));
}

var inbox = JSON.parse(localStorage.getItem(userId));

if (inbox.length == 0) {
    popUp.style.display = "block";
} else {
    popUp.style.display = "none";
    for (var i = 0; i < inbox.length; i++) {
        if (userId == inbox[i].recieverId) {
            otherUserId = inbox[i].senderId;
        }
        else {
            otherUserId = inbox[i].recieverId;
        }
        for (var j = 0; j < registeredUsers.length; j++) {
            if (otherUserId == registeredUsers[j].userId) {
                var button = document.createElement("button");
                button.innerHTML = registeredUsers[j].fullName;
                button.addEventListener('click', gotoChatBox.bind(null, registeredUsers[j].fullName))
                inboxParent.appendChild(button);
            }
        }
    }
}

function startNewChat() {
    window.location.href = "../newChat/newChat.html";
}

function gotoChatBox(userName) {
    localStorage.setItem('chatUserName',userName);
    window.location.href = "../chatBox/chatBox.html";
}
