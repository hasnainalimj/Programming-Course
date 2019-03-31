//Overview Prototypes

//1) Contructor Function
//2) Create Prototype 
//3) Create Object

//1
// function Sim(code,packages){
//     this.code = code;
//     this.packages = packages
// }

// Sim.prototype.simName = "Zong";

// var simOne = new Sim("0310","Prepaid");
// var simTwo = new Sim("0342","Postpaid");

// console.log(simOne);
// console.log(simTwo);
// console.log(newSim);


var student = {
    name: "Ali",
    email: "ali@gmail.com",
    rollNo: 12345
}

// console.log("name" in student); 
// console.log("password" in student); 

var students = [
    { name: "Ali", rollNo: 55 },
    { name: "Ahmed" },
    { name: "Khan", email: "khan@gmail.com" }
    , { rollNos: 15 }
];

var res = "class" in students;

for (var i = 0; i < students.length; i++) {
    var result = "rollNo" in students[i]; // true || false
    if (!result) {
        // students[i].rollNo = Math.floor(Math.random() * 5); //For random roll number
        students[i].rollNo = i + 5 //For random roll number
    }
}

// console.log("After Change => " , students);

var listOfProperties = [];

for (var prop in students) {
    listOfProperties.push(prop);
}

// console.log(listOfProperties);

var obj = { a: 1, b: 2, c: 3 };

// for (var prop in students) {
//     console.log("obj : " + prop + " = " + JSON.stringify(students[prop].name));
// }

var method = {
    plan : "Basic",
    price : 200,
    pages : 15
}

var hasProperty = method.hasOwnProperty("prices");

console.log(hasProperty);




