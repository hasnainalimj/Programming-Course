// var arr = [
//     {
//         name: "Basic",
//         price: 3,
//         months: [2, 4, {
//             nestedMonths: [5, 3, {
//                 lastMonths: [2, 6]
//             }]
//         }],
//         currentMonth: 4,
//         calcAnnual: function (discount) {
//             var bestPrice = this.price;
//             for (var i = 0; i < this.months.length; i++) {
//                 if (typeof (this.months[i]) == "object") {
//                     for (var j = 0; j < this.months[i].nestedMonths.length; j++) {
//                         if (typeof (this.months[i].nestedMonths[j]) == "object") {
//                             for (var k = 0; k < this.months[i].nestedMonths[j].lastMonths.length; k++) {
//                                 if (typeof (this.months[i].nestedMonths[j].lastMonths[k]) == "object") {
//                                     console.log("yes object in last Months");
//                                 }
//                                 else {
//                                     if (typeof (this.months[i].nestedMonths[j].lastMonths[k] == "number")) {
//                                         if (this.months[i].nestedMonths[j].lastMonths[k] == this.currentMonth) {
//                                             bestPrice = this.price * discount
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                         else {
//                             if (typeof (this.months[i].nestedMonths[j]) == "number") {
//                                 if (this.months[i].nestedMonths[j] == this.currentMonth) {
//                                     bestPrice = this.price * discount;
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 else {
//                     if (typeof (this.months[i]) == "number") {
//                         if (this.months[i] == this.currentMonth) {
//                             bestPrice = this.price * discount;
//                         }
//                     }
//                 }
//             }
//             return bestPrice;
//         }
//     },
//     {
//         name: "Pro",
//         price: 5,
//         months: [2, 4, {
//             nestedMonths: [5, 3, {
//                 lastMonths: [2, 6]
//             }]
//         }],
//         currentMonth: 5,
//         calcAnnual: function (discount) {
//             var bestPrice = this.price;
//             for (var i = 0; i < this.months.length; i++) {
//                 if (typeof (this.months[i]) == "object") {
//                     for (var j = 0; j < this.months[i].nestedMonths.length; j++) {
//                         if (typeof (this.months[i].nestedMonths[j]) == "object") {
//                             for (var k = 0; k < this.months[i].nestedMonths[j].lastMonths.length; k++) {
//                                 if (typeof (this.months[i].nestedMonths[j].lastMonths[k]) == "object") {
//                                     console.log("yes object in last Months");
//                                 }
//                                 else {
//                                     if (typeof (this.months[i].nestedMonths[j].lastMonths[k] == "number")) {
//                                         if (this.months[i].nestedMonths[j].lastMonths[k] == this.currentMonth) {
//                                             bestPrice = this.price * discount
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                         else {
//                             if (typeof (this.months[i].nestedMonths[j]) == "number") {
//                                 if (this.months[i].nestedMonths[j] == this.currentMonth) {
//                                     bestPrice = this.price * discount;
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 else {
//                     if (typeof (this.months[i]) == "number") {
//                         if (this.months[i] == this.currentMonth) {
//                             bestPrice = this.price * discount;
//                         }
//                     }
//                 }
//             }
//             return bestPrice;
//         }
//     },
//     {
//         name: "Unlimited",
//         price: 10,
//         months: [2, 4, {
//             nestedMonths: [5, 3, {
//                 lastMonths: [2, 10]
//             }]
//         }],
//         currentMonth: 10,
//         calcAnnual: function (discount) {
//             var bestPrice = this.price;
//             for (var i = 0; i < this.months.length; i++) {
//                 if (typeof (this.months[i]) == "object") {
//                     for (var j = 0; j < this.months[i].nestedMonths.length; j++) {
//                         if (typeof (this.months[i].nestedMonths[j]) == "object") {
//                             for (var k = 0; k < this.months[i].nestedMonths[j].lastMonths.length; k++) {
//                                 if (typeof (this.months[i].nestedMonths[j].lastMonths[k]) == "object") {
//                                     console.log("yes object in last Months");
//                                 }
//                                 else {
//                                     if (typeof (this.months[i].nestedMonths[j].lastMonths[k] == "number")) {
//                                         if (this.months[i].nestedMonths[j].lastMonths[k] == this.currentMonth) {
//                                             bestPrice = this.price * discount
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                         else {
//                             if (typeof (this.months[i].nestedMonths[j]) == "number") {
//                                 if (this.months[i].nestedMonths[j] == this.currentMonth) {
//                                     bestPrice = this.price * discount;
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 else {
//                     if (typeof (this.months[i]) == "number") {
//                         if (this.months[i] == this.currentMonth) {
//                             bestPrice = this.price * discount;
//                         }
//                     }
//                 }
//             }
//             return bestPrice;
//         }
//     }
// ];

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i].calcAnnual(0.5));
// }

//Constructor
function Plan(planName,planPrice,planPages){
    this.planName = planName
    this.planPrice = planPrice
    this.planPages = planPages
}

//Simple ProtoType 
// Plan.prototype.brandName = "Pepsi";

//Array Prototype
Plan.prototype.looping = function(array){
    for(var i=0; i<array.length; i++){
        console.log("-> ",array[i]);
    }
}

//Boolean ProtoType
// Plan.prototype.cancelValue = true;

//Function Prototype
// Plan.prototype.calcAnnual = function(num1,num2){
//     return num1 + num2
// }

var plan1 = new Plan("Basic",2,15);

// var plan2 = new Plan("Basic2",4,25);
// var plan3 = new Plan("Basic3",6,50);

console.log(plan1.__proto__.looping([2,4,6,7]));
// console.log(plan2);
// console.log(plan3);


