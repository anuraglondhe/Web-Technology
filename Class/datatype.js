//Symbol  
let autherId = Symbol("123");
console.log(autherId);
let id = 123;
console.log(id === autherId); // Symbol creates a unique value, so it is never equal to a number (or any other type), even with ==

// JavaScript is dynamic Language.

//Array
const ar=[1,2,3,4];
console.log(ar);

//Object

const myObj = {
    name:"Anurag",
    age:20,
    email:"anurag@gmail.com"
}
console.log(myObj);

//Function
function call(){
    console.log("Anurag");
}
call();

function MyFun(){
    let n=10;
    console.log(n);    
}
MyFun();

// memory
// There are two types of memoery
// 1)Stack - used for premitive datatypes
// 2)Heap - used for non-premitive datatypes


//Stack - Example
let myYouTubeName = "DKTE";
let newYouTubeChannel = "Ichalkaranji";
newYouTubeChannel = "Anurag youtube";
console.log(myYouTubeName); //DKTE
console.log(newYouTubeChannel); //Anurag youtube

// Premitive datatypes stored in Stack , when we assign one variable to another ,a copy is made so changing one doesn't affect another.


//Heap - Example
let obj = {
    fname:"Anurag",
    age:21,
    roll:65
}
let obj2 = obj;
obj2.roll =30;
console.log(obj.roll);
console.log(obj2.roll);

//Objects are stored in heap memory when we assign one object to another variable reference is copied not the value so when we change one variable value of both variables get changed. 









