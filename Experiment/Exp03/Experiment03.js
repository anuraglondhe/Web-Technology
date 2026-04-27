// =====================================
// Diffrence between Arrow function and simple function
// =====================================

// Simple function example
function greetSimpleFunction(userName){
    console.log(`Hello ${userName}`);
}

greetSimpleFunction('Anurag');

// Arrow function example
let greet = (userName) => {
    console.log(`Hello ${userName}`);
}

greet('Xyz');



// =====================================
// Do we use this keyword if yes then why
// =====================================
/*
    - Yes we use this keyword in JavaScript programming.
    - We use this keyword in JS to refer to the current object in the context.

    Why we use this keyword 
     - this keyword is used to refer to the current object in the exicution context.
     
*/



// =====================================
// Write two Arrow functions with examples 
// =====================================
// 1.print odd or even
let oddEven = (no) => {
    if(no / 2 == 0)
        console.log(`${no} is Even`);
    else
        console.log(`${no} is Odd`);
} 

oddEven(50);


// =====================================
// How to use Ternery operators in JS
// =====================================

