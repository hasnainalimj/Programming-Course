// Initialize Firebase
var config = {
 
};

firebase.initializeApp(config);
const db = firebase.firestore();

const data = [
  {
    name: "Ali",
    age: 12,
    height: 5.4
  },
  {
    name: "Ahmed",
    age: 15,
    height: 5
  },
  {
    name: "Shan",
    age: 17,
    height: 4
  },
  {
    name: "Zia",
    age: 20,
    height: 5.5
  },
  {
    name: "Junaid",
    age: 12,
    height: 5.1
  },
  {
    name: "Ahsan",
    age: 50,
    height: 4.5
  },
  {
    name: "Azhar",
    age: 11,
    height: 4.3
  },
  {
    name: "Areeb",
    age: 25,
    height: 4.9
  },
  {
    name: "Basit",
    age: 30,
    height: 5.4
  }
];

function addRandomDataInDb() {
  for (let i = 0; i < data.length; i++) {
    db.collection("students")
      .add(data[i])
      .then(res => {
        console.log("Added Successfully");
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}

function getLimitedDataWithAscending() {
  db.collection("students")
    .limit(5)
    .orderBy("age", "desc")
    .get()
    .then(res => {
      res.forEach(doc => {
        console.log(doc.data());
      });
    });
}

function getDataWithWhereClause() {
  db.collection("students")
    .where("age", "<=", 20)
    .get()
    .then(res => {
      res.forEach(doc => {
        console.log(doc.data());
      });
    });
}

function getDataWithTwoWhereClause() {
  // db.collection("students")
  // .where("age", "<=", 20)
  // // .where("passed","==", false)
  //   .get()
  //   .then(res => {
  //     res.forEach(doc => {
  //       console.log(doc.data());
  //     });
  //   }).catch(error => {
  //     console.log("Error" , error.message);
  //   });
}

function deleteSpeicificDoc() {
  db.collection("products")
    .doc("1234567abc")
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
}

function removeSpecificKeyFromDoc() {
  db.collection("products")
    .doc("1234567abc")
    .collection("salaries")
    .doc("5UvZowWaWLLlZQ7Tenv5")
    .update({
      months: firebase.firestore.FieldValue.delete()
    })
    .then(res => {
      console.log("Key Removed");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
}

function updateDoc() {
  db.collection("products")
    .doc("1234567abc")
    .collection("salaries")
    .doc("5UvZowWaWLLlZQ7Tenv5")
    .update({
      year: 2019
    })
    .then(res => {
      console.log("Doc Updated");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
}

function updateAllDocInCollection() {
  db.collection("products")
    .doc("1234567abc")
    .collection("salaries")
    .get()
    .then(res => {
      res.forEach(doc => {
        db.collection("products")
          .doc("1234567abc")
          .collection("salaries")
          .doc(doc.id)
          .update({
            year: 2019
          })
          .then(result => {
            console.log("Updated Id No : ", doc.id, " Successfully!");
          });
      });
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
}
