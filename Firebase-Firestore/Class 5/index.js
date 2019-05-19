// Initialize Firebase
var config = {

};

firebase.initializeApp(config);
const db = firebase.firestore();

let date = 1;
let salary = 5000;

function addCollectionInDoc() {
  date = ++date;
  db.collection('products').doc('1234567abc').collection('salaries').add({
    months: date,
    salary: salary * date
  }).then(res => {
    console.log("Salary Added");
  }).catch(error => {
    console.log(error.message);
  })
}

function getCollectionInDoc() {
  db.collection('products').doc('1234567abc').collection('salaries').get().then(res => {
    res.forEach(doc => {
      console.log(doc.data());
    })
  }).catch(error => {
    console.log(error.message);
  })
}

function setSpecificCollectionInDoc() {
  db.collection('products').doc('1234567abc').collection('salaries').doc('pSAM71EYX7ufAFmaSlpG').set({
    year: 2019
  }, { merge: true }).then(res => {
    console.log("Doc Updated");
  }).catch(err => {
    console.log(err.message);
  })
}

function getSpecificCollectionInDoc() {
  db.collection('products').doc('1234567abc').collection('salaries').doc('pSAM71EYX7ufAFmaSlpG').get().then(res => {
    console.log(res.data());
  }).catch(error => {
    console.log(error.message);
  })
}

function getDataWithWhereClause() {
  db.collection('products').where('brand', '==', 'Pizza Max').where('quality','==','A2').get().then(res => {
    res.forEach(doc => {
      console.log("Matching 2 where's " , doc.data());
    })
  }).catch(error => {
    console.log(error.message);
  })

  db.collection('products').where('brand', '==', 'Pizza Max').get().then(res => {
    res.forEach(doc => {
      console.log("Matching 1 where " , doc.data());
    })
  }).catch(error => {
    console.log(error.message);
  })
}

function getLimitedData(){
  db.collection('products').limit(3).get().then(res => {
    res.forEach(doc => {
      console.log(doc.data());
    })
  }).catch(error => {
    console.log(error.message);
  })
}


function getDataWithOrderAsc(){
  db.collection('products').orderBy('productId','asc').get().then(res => {
    res.forEach(doc => {
      console.log(doc.data());
    })
  }).catch(error => {
    console.log(error.message);
  })
}

function getDataWithOrderDesc(){
  db.collection('products').orderBy('productId','desc').get().then(res => {
    res.forEach(doc => {
      console.log(doc.data());
    })
  }).catch(error => {
    console.log(error.message);
  })
}