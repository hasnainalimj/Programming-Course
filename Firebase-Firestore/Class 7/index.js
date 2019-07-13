// Initialize Firebase
var config = {
 
};

firebase.initializeApp(config);
const db = firebase.firestore();

function addData() {
  db.collection("products")
    .add({
      brand: "Abc",
      productId: 123,
      productName: "Hi there"
    })
    .then(res => {
      console.log("Added");
    })
    .catch(err => {
      console.log(err.message);
    });
}

try {
  db.collection("products").onSnapshot(res => {
    res.forEach(doc => {
      console.log(doc.data());
    });
  });
} catch (error) {
  console.log(error);
}
