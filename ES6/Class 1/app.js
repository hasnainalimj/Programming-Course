// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) console.log(arr[i]);

// arr.map(function(value,index){
//     return console.log(value + " : " + index)
// })

var arr = [[1, 2, 3, 4, 5, 6, 7]];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log("for loop", arr[i][j]);
//   }
// }

// arr.map(function(val) {
//   return val.map(function(value) {
//     console.log("map", value);
//   });
// });

// arr.forEach(function(val) {
//   return val.forEach(function(value) {
//     console.log("for each", value);
//   });
// });

// const data = [1, 2, 3, 1, 1, 6];

// filter is always returns an array
// const newResult = data.filter(index => {
//   return index == 1;
// });

// console.log("new result" , newResult)

// fetch("https://www.google.com").then(res => {
// 	return res.json();
// }).then(doc => {
// 	console.log(doc);
// })

const container = document.querySelector("#container");
const text = "This is div";

container.innerHTML = `<div class="child"><h4>${text}</h4></div>`;
