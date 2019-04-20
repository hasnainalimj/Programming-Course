function checkForLastName() {
    if (document.getElementById("lastNameField").value.length === 0) {
        document.getElementById('error').style.display = "inline";
        document.getElementById('lastNameField').focus();
        document.getElementById('lastNameField').style.backgroundColor = "red";
    }
    else {
        document.getElementById('error').style.display = "none";
        document.getElementById('lastNameField').style.backgroundColor = "white";
    }
}

function checkForSelection(selecID) {
    var target = document.getElementById(selecID);
    if (target.selectedIndex === 0) {
        alert("Please select a state.");
    }
}