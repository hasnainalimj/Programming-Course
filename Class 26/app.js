var obj = {
  name: "Ali",
  age: 25,
  email: "ali@gmail.com",
  courses: []
};

// console.log("Before Change", obj);

// var courseName = prompt("Enter courses");

var course1 = "Math";
var course2 = "English";
var course3 = "Urdu";

// obj.courses.push(course1,course2,course3);

var subjects = {
  course1: "Physics",
  course2: "Chemistry",
  course3: "Maths"
};

obj.courses.push(subjects);

// obj.courses.push(courseName);

// delete obj.cnic;
// delete obj.email;

// console.log("After Change", obj);

// var plan1 = {
//   price: 5,
//   months: [3, 8],
//   calcAnnual: function(discount) {
//     for (var o = 0; o < plan1.months.length; o++) {
//       var bestPrice = plan1.price;
//       var cMonth = 3;
//       if (cMonth === plan1.months[o]) {
//         bestPrice = plan1.price * discount;
//         break;
//       }
//     }
//     return bestPrice;
//   }
// };

// console.log(plan1.calcAnnual(0.3));

// for(var o=0; o<plan1.months.length; o++){
//     var bestPrice = plan1.price;
//     var cMonth = 3;
//     if(cMonth === plan1.months[o]){
//         bestPrice = plan1.price * 0.6;
//         break;
//     }
// }

// console.log("Discounted Amount",bestPrice);

var plan1 = {
  name: "Basic",
  price: 5,
  months: [3, 8],
  calcAnnual: function(discount) {
    for (var o = 0; o < this.months.length; o++) {
      var bestPrice = this.price;
      var cMonth = 3;
      if (cMonth === this.months[o]) {
        bestPrice = this.price * discount;
        break;
      }
    }
    return bestPrice;
  }
};

// console.log(plan1.calcAnnual(0.9));

var arr = [
  {
    name: "Basic",
    price: 3,
    months: [2, 4],
    calcAnnual: function(discount) {
      var bestPrice = this.price;
      var currentMonth = 4;
      for (var i = 0; i < this.months.length; i++) {
        if (currentMonth === this.months[i]) {
          bestPrice = this.price * discount;
        }
      }
      return bestPrice;
    }
  },
  {
    name: "Pro",
    price: 5,
    months: [4, 6],
    calcAnnual: function(discount) {
      var bestPrice = this.price;
      var currentMonth = 9;
      for (var i = 0; i < this.months.length; i++) {
        if (currentMonth === this.months[i]) {
          bestPrice = this.price * discount;
        }
      }
      return bestPrice;
    }
  },
  {
    name: "Unlimited",
    price: 10,
    months: [8, 10],
    calcAnnual: function(discount) {
      var bestPrice = this.price;
      var currentMonth = 10;
      for (var i = 0; i < this.months.length; i++) {
        if (currentMonth === this.months[i]) {
          bestPrice = this.price * discount;
        }
      }
      return bestPrice;
    }
  }
];


for(var k=0; k<arr.length; k++){
    console.log("Price : " , arr[k].calcAnnual(0.5));
}