// console.log(1);
// setTimeout(() => {
//   console.log(2)
// },0);
// console.log(3);

// console.log(1);
// const handleCase  = new Promise(function(resolve , reject){
//   try {
//     setTimeout(() => {
//       console.log(2)
//       resolve();
//     },0);
//   } catch (error) {
//     reject();
//   }
// })
// handleCase.then(function(){
//   console.log(3);
// }).catch(err => {
//   console.log(err);
// });

// new Promise(function(resolve , reject){
//   try {
//     setTimeout(() => {
//       console.log(2)
//       resolve();
//     },0);
//   } catch (error) {
//     reject();
//   }
// }).then(res => {
//   console.log(3);
// })

// new Promise(function(resolve , reject){
//   try {
//     setTimeout(() => {
//       throw "Mera apna error";
//       console.log(2)
//       resolve();
//     },0);
//   } catch (error) {
//     reject();
//   }
// }).then(res => {
//   console.log(3);
// })

// const getData = new Promise(function(resolve, reject) {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(json => resolve(json))
//     .catch(e => {
//       reject("Bakwas api hy");
//     });
// });
// getData.then(function(res) {
//   console.log("res", res);
// });

// function callBack(func){
//   return func();
// }
// const data = callBack(function(){
//   return "Saad Bhai";
// })
//   console.log("TCL: data -> data", data)

// function startCronJob () {
//   markUnfeaturedForPackage('Silver', function () {
//     markUnfeaturedForPackage('Golden', function () {
//       markUnfeaturedForPackage('Premium', function () {
//         markUnfeaturedForPackage('Platinum', function () {
//           console.log('Featured Backgroundservice Ended.')
//         })
//       })
//     })
//   })
// }

// function callBack(){
//   nestedFun(function(){
//     nestedFun(function(){
//       nestedFun(function(){
//       })
//     })
//   })
// }
// function nestedFun(a){
//   return console.log("chalo")
// }
// callBack();

// console.log("Muhammad");
// async function callSaad() {
//  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//  data = await data.json();
//  console.log("Saad");
// }
// callSaad().then(function(){
//   console.log("TT");
// })

// var c = 3;
// var obj = {
//   simple : function(){
//     console.log(this.c);
//   },
//   arrow : () => {
//     console.log(this.c);
//   }
// }
// obj.simple();
// obj.arrow();