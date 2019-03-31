var userName = document.getElementById('userName');
var chatUser = JSON.parse(localStorage.getItem('startChatWithHimHer'));
userName.innerHTML = chatUser.fullName;
var chatBox = document.getElementById('chatBox');
var loginUserId = localStorage.getItem('loginUserId');
var registerdUsers = JSON.parse(localStorage.getItem('registerdUsers'));
var chatArray = JSON.parse(localStorage.getItem(loginUserId));
var id = "";
var runningState;
var availability = false;





for (var i = 0; i < registerdUsers.length; i++) {
    if (loginUserId == registerdUsers[i].userId) {
        id = registerdUsers[i].userId;
    }
}
for (var i = 0; i < chatArray.length; i++) {
    if (chatArray[i] && chatArray[i].recieverId == chatUser.userId && chatArray[i].senderId == id) {
        for(var j=0; j<chatArray[i].messages.length; j++){
            var elem = document.createElement('h5');
            elem.innerHTML = chatArray[i].messages[j].txtMessage;
            chatBox.appendChild(elem);
        }
    }
}

var obj = {
    recieverId: chatUser.userId,
    senderId: id,
    messages: []
}

if (chatArray.length == 0) {
    runningState = 1;
}
else {
    runningState = chatArray.length;
}

for (var i = 0; i < runningState; i++) {
    if (chatArray[i] && chatArray[i].recieverId == chatUser.userId && chatArray[i].senderId == id) {
        availability = true;
    }
}

if (availability == false) {
    chatArray.push(obj);
    localStorage.setItem(loginUserId, JSON.stringify(chatArray));
}

function sendMessage() {
    var txtMessage = document.getElementById('txtMessage').value;
    var found = false;
    var chats = [];
    var senderId = id;
    var obj = {
        senderId,
        txtMessage
    }

    for (var i = 0; i < runningState; i++) {
        if (chatArray[i] && chatArray[i].recieverId == chatUser.userId && chatArray[i].senderId == id) {
            chats = chatArray[i].messages;
            chats.push(obj);
            localStorage.setItem(loginUserId, JSON.stringify(chatArray));
        }
    }
    // window.location.reload();
    for (var i = 0; i < chatArray.length; i++) {
        if (chatArray[i] && chatArray[i].recieverId == chatUser.userId && chatArray[i].senderId == id) {
            for(var j=0; j<chatArray[i].messages.length; j++){
                var elem = document.createElement('h5');
                elem.innerHTML = chatArray[i].messages[j].txtMessage;
                chatBox.appendChild(elem);
            }
        }
    }
    chatBox.scrollBy(0, chatArray.length+15000)
}