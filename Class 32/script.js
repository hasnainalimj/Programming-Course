if(!JSON.parse(localStorage.getItem('chatRoom'))){
    var arr = [];
    localStorage.setItem('chatRoom',JSON.stringify(arr));
}
else{
    var chats = JSON.parse(localStorage.getItem("chatRoom"));
    for(var i=0; i<chats.length; i++){
        console.log(chats[i].name + " Says " + chats[i].message);
    }
}

function sendedByAli(){
    var message = document.getElementById('txtAliTypes').value;
    var name = "Ali";
    var chats = JSON.parse(localStorage.getItem('chatRoom'));
    var obj = {
        message,
        name
    }
    chats.push(obj);
    localStorage.setItem('chatRoom',JSON.stringify(chats));
    document.getElementById('txtAliTypes').value = "";
    window.location.reload();
}

function sendedByAhmed(){
    var message = document.getElementById('txtAhmedTypes').value;
    var name = "Ahmed";
    var chats = JSON.parse(localStorage.getItem('chatRoom'));
    var obj = {
        message,
        name
    }
    chats.push(obj);
    localStorage.setItem('chatRoom',JSON.stringify(chats));
    document.getElementById('txtAhmedTypes').value = "";
    window.location.reload();
}
