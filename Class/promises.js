// console.log("Start");
// setTimeout(()=>{
//     console.log("Inside SetTimeout");
    
// },2000);
// console.log("End");













//--------Promises--------
// A Promises is an Object that represent future result of an a asyncronous operations.
// Example:

// Promise has 3 states:
// Pending 
// Resolve
// Reject 


// let myPromise= new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("data fetched")
//     }
//     else{
//         reject("Error while fetching data");
//     }

// });

// myPromise.then((result)=>{
//     console.log(result);
    
// }).catch((Error)=>{
//     console.log(Error);
    
// }
// ))














let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("data fetched");
    } else {
        reject("Error while fetching data");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    // resolve=success
    // reject=error
    // .then= run when success
    // .catch= run when error