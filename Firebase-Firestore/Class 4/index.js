// Initialize Firebase
var config = {

};

firebase.initializeApp(config);

const myVar = "Hello";

// myVar = "Hasnain Ali";

//Not create with same variable name
//not reassign value again

// var myVar = "abc";


// function caller(){
//   const myVar = "yes";
//   console.log(myVar);
// }

// caller();

let name = "pakistan";

name = "hi";
name = "hi2";
name = "hi3";
// console.log(name)

const db = firebase.firestore();

function addCollectionWithDoc() {
  let products = {
    productId: 1,
    productName: "Pepsi"
  }

  db.collection('products').add(products).then(function (res) {
    console.log(res.id);
  }).catch(function (error) {
    console.log(error);
  })
}

function getAllDocsFromCollection() {
  db.collection('products').get().then(function (res) {
    res.forEach(function (doc) {
      // console.log(doc.id);
      console.log(doc.data())
    })
  }).catch(function (error) {
    console.log(error);
  })
}

function createDocWithOwnId() {
  let products = {
    quality : "A1"
  }
  db.collection('products').doc('1234567abc').set(products , {merge : true}).then(function (res) {
    console.log("Added Successfully!");
  }).catch(function (error) {
    console.log(error);
  })
}

function getSpecificRecord(){
  db.collection('products').doc('1234567abc').get().then(function(res){
    // console.log(res.id);
    console.log(res.data());
  }).catch(function(error){
    console.log(error);
  })
}
