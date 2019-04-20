var parentList = document.getElementById('parentList');
var squad = ["M.Hafeez","Ahmed Shahzad","Azhar Ali","Younis Khan","Misbha Ul Haq","M.Amir","Junaid Khan","Shadab Khan","Shoaib Malik","Fahmeem Ashraf"];

for(var i=0; i< squad.length; i++){
    var li = document.createElement('li');
    li.innerHTML = squad[i];
    parentList.appendChild(li);
}
