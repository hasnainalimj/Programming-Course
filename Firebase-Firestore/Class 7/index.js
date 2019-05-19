// Initialize Firebase
var config = {
  apiKey: "AIzaSyCRIwnsmabJiyrlQoKxytOGu2LoSNfOReM",
  authDomain: "example-app-2c29c.firebaseapp.com",
  databaseURL: "https://example-app-2c29c.firebaseio.com",
  projectId: "example-app-2c29c",
  storageBucket: "example-app-2c29c.appspot.com",
  messagingSenderId: "832811116443",
  appId: "1:832811116443:web:b26e4697b8d73afb"
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
