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
  // db.collection("classes")
  //   .add({
  //     no: 1
  //   })
  //   .then(res => {
  //     console.log("added");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // db.collection("classes")
  //   .doc("abc123def")
  //   .set({
  //     no: 2
  //   })
  //   .then(res => {
  //     console.log("added");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // db.collection("classes")
  //   .doc("abc123def")
  //   .set(
  //     {
  //       no: 2
  //     },
  //     { merge: true }
  //   )
  //   .then(res => {
  //     console.log("added");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // db.collection("classes")
  //   .doc("hello")
  //   .collection("classes2")
  //   .add({
  //     no: 3
  //   })
  //   .then(res => {
  //     console.log("added");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // db.collection("classes")
  //   .doc("hello")
  //   .collection("classes2")
  //   .doc("nestedDoc")
  //   .set({
  //     no: 4
  //   })
  //   .then(res => {
  //     console.log("added");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // db.collection("classes")
  //   .doc("hello")
  //   .set({
  //     no: 5
  //   })
  //   .then(res => {
  //     console.log("added");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

function getData() {
  // db.collection("classes")
  //   .get()
  //   .then(res => {
  //     res.forEach(doc => {
  //       console.log(doc.data());
  //     });
  //   });
  // db.collection("classes").doc("abc123def").get().then(doc => {
  //   console.log(doc.data());
  // })
  // db.collection("classes").doc("hello").collection("classes2").get().then(doc => {
  //   doc.forEach(res => {
  //     console.log(res.data())
  //   })
  // })
}

// let unsubscribe = db
//   .collection("classes")
//   .doc("hello")
//   .collection("classes2")
//   .doc("nestedDoc")
//   .onSnapshot(doc => {
//     console.log(doc.data());
//   });

// db.collection("classes")
//   .doc("hello")
//   .collection("classes2")
//   .doc("mHVIYBWIlptay7hnZoPR")
//   .delete()
//   .then(doc => {});
