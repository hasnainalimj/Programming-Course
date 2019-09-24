const filterExample = [
  { id: 10 },
  { id: 5 },
  { id: 4 },
  { id: 5 },
  { id: 10 },
  { id: 10 }
];

const answerFilter = filterExample.filter(function(obj) {
  return obj.id !== 10;
});
// console.log("TCL: answerFilter", answerFilter);

const mapExample = [
  { id: 10 },
  { id: 5 },
  { id: 4 },
  { id: 5 },
  { id: 10 },
  { id: 10 }
];

//Looping
// mapExample.map(function(val,ind){
//   return console.log(val)
// })

//same as filter but return boolean
const answerMap = mapExample.map(function(val, ind) {
  return val.id == 10;
});
// console.log("TCL: answerMap", answerMap)

const templeExample = [
  { id: 10 },
  { id: 5 },
  { id: 4 },
  { id: 5 },
  { id: 10 },
  { id: 10 }
];
const parent = document.querySelector("#parent");

// templeExample.map(function(value){
//   return parent.innerHTML += `<h1>${value.id}</h1>`
// })

const forEachExample = [
  { id: 10 },
  { id: 5 },
  { id: 4 },
  { id: 5 },
  { id: 10 },
  { id: 10 }
];

// forEachExample.forEach(function(value){
//   return console.log(value)
// })

const setExample = [1, 2, 3, 5, 6, 8, 9, 0, 0, 1, 2, 5];

const setAnswer = new Set(setExample);
// console.log("TCL: setAnswer", setAnswer)

// console.log("Mr."); //sync
// setTimeout(function(){
//   console.log("Muhammad"); //async
// },3000);
// console.log("Saad"); //sync

// console.log("Mr.");

// const result = new Promise(function(resolve, reject) {
//   try {
//     setTimeout(function() {
//       console.log("Muhammad");
//       // throw "Error";
//       resolve()
//     }, 1000);
//   } catch (error) {
//     reject();
//   }
// });

// result.then(() => {
//   console.log("Saad");
// })

// function req(){
//   return setTimeout(function() {
//     console.log("Muhammad");
//     return true;
//   }, 1000);
// }

// async function chota() {
//   console.log("Mr.");

//   const res = await req()
//   console.log("TCL: chota -> res", res)
//   console.log("Saad");
// }

// chota();