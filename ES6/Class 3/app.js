// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/todos/1").then(response =>
//   console.log(response)
// );
//   .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'ES6',
//       body: 'Class 3',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))

var users = [{ userId: 1 }, { userId: 2 }];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
      json.map(value => {
          return users.map(user => {
              if(value.userId == user.userId){
                return console.log(value)
              }
           
          })
      })
  });
