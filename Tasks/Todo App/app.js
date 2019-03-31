var parentList = document.getElementById('parentList');
var btnAdd = document.getElementById('btnAdd');
var btnUpdate = document.getElementById('btnUpdate');
var txtValue = document.getElementById('txtValue');
var editedItem;

function addItem() {
    if (txtValue.value == "") {
        alert("Enter Item...");
    }
    else {
        var li = document.createElement('li');
        li.setAttribute('id', txtValue.value);
        li.innerHTML = txtValue.value;

        var btnEdit = document.createElement('button');
        btnEdit.innerHTML = "Edit";
        btnEdit.addEventListener('click', editItem.bind(null, txtValue.value));

        var btnDelete = document.createElement('button');
        btnDelete.innerHTML = "Delete";
        btnDelete.addEventListener('click', deleteItem.bind(null, txtValue.value));

        parentList.appendChild(li);
        var child = document.getElementById(txtValue.value);
        child.appendChild(btnEdit);
        child.appendChild(btnDelete);

        txtValue.value = "";
    }
}

function updateItem() {
    editedItem.innerHTML = txtValue.value
    editedItem.setAttribute('id',txtValue.value);

    var btnEdit = document.createElement('button');
    btnEdit.innerHTML = "Edit";
    btnEdit.addEventListener('click', editItem.bind(null, txtValue.value));

    var btnDelete = document.createElement('button');
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener('click', deleteItem.bind(null, txtValue.value));

    editedItem.appendChild(btnEdit);
    editedItem.appendChild(btnDelete);

    btnAdd.style.display = "inline";
    btnUpdate.style.display = "none";

    txtValue.value = "";
}

function editItem(id) {
    btnAdd.style.display = "none";
    btnUpdate.style.display = "inline";
    txtValue.value = id;

    editedItem = document.getElementById(id);
}

function deleteItem(id) {
    var deletedItem = document.getElementById(id);
    parentList.removeChild(deletedItem);
}