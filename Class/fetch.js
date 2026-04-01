//fetch
// fetch is a inbuilt javascript method used to make http request
//Syntax:

const { useCallback } = require("react");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response)=>{
//     return response();
// }).catch(error)=>{
//     console.log(error);
    
// });


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//       return response.json();   // convert response to JSON
//   })
//   .then((data) => {
//       console.log(data);        // actual user data
//   })
//   .catch((error) => {
//       console.log(error);
//   });



//   fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     return response.json();
// })
// .catch((error) => {
//     console.log(error);
// });


fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
    
});
