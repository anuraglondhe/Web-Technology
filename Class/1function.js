// ===============================
// Functions
// ===============================

// Simple Function Definition
function showMessage() {
    console.log("Hi! This function is running.");
}

showMessage();


// Function with Parameter
function welcomeUser(username) {            // parameter
    console.log("Welcome, " + username);
}

welcomeUser("Rahul");          // argument


// Function returning
function calculateTotal(num1, num2) {
    return num1 + num2;   // return value to caller
}

let result = calculateTotal(20, 30);
console.log("Total:", result);


// Notes about normal functions:
// - These functions are hoisted
// - They have their own `this` context
// - Commonly used in traditional JavaScript
// - Suitable for large logic blocks



// Arrow Function Example
const greet = (userName) => {
    console.log(`Hello ${userName}`);
}

greet("Ram");


const findArea = (length, width) => {
    return length * width;
};

// Calling arrow function
let area = findArea(6, 7);
console.log("Area:", area);


// Notes about arrow functions:
// - Not hoisted
// - Do not create their own `this`
// - Cleaner and shorter syntax
// - Best for small and quick operations
