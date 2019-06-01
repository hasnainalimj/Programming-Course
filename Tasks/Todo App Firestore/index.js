// Initialize Firebase
var config = {

};

firebase.initializeApp(config);
const db = firebase.firestore();

let parentOfList = document.querySelector("#itemList");
let updatedId;

let unsubscribe = db.collection("todoItems").onSnapshot(function(res) {
  parentOfList.innerHTML = "";
  res.forEach(function(doc) {
    let li = document.createElement("li");
    li.innerHTML = doc.data().itemName;
    li.setAttribute("id", doc.id);
    li.addEventListener(
      "click",
      getItem.bind(null, doc.id, doc.data().itemName)
    );
    parentOfList.appendChild(li);
  });
});

function addItem() {
  let itemName = document.querySelector("#txtItem").value;

  db.collection("todoItems")
    .add({
      itemName
    })
    .then(function() {
      alert("Added");
      document.querySelector("#txtItem").value = "";
    })
    .catch(function(error) {
      console.log(error.message);
    });
}

function getItem(itemId, itemName) {
  document.querySelector("#txtItem").value = itemName;
  updatedId = itemId;
}

function updateItem() {
  let updatedItem = document.querySelector("#txtItem").value;

  db.collection("todoItems")
    .doc(updatedId)
    .update({
      itemName: updatedItem
    })
    .then(function() {
      document.querySelector("#txtItem").value = "";
      alert("Item updated");
    })
    .catch(function(error) {
      console.log(error.message);
    });
}

function deleteItem() {
  db.collection("todoItems")
    .doc(updatedId)
    .delete()
    .then(function() {
      document.querySelector("#txtItem").value = "";
      alert("item deleted");
    })
    .catch(function(error) {
      console.log(error.message);
    });
}

function stopListner() {
  unsubscribe();
  alert("stop");
}
