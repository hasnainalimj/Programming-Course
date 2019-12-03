// Initialize Firebase
var config = {
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
