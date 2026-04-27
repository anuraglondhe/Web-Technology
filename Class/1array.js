// ================================
// How Functions Work
// ================================

// Function declaration
// Function is a block of code that runs when it is called
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Swapnil"));
// Used to reuse code and avoid repetition

// Function expression
// Function stored in a variable
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));

// Arrow function
// Shorter way to write functions
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));



// ================================
// Arrays in JavaScript
// ================================

// Array stores multiple values in one variable
let arr = [10, 20, 30, 40, 50];
console.log(arr);



// ================================
// Basic Array Methods
// ================================

// push()
// Adds element at the end
arr.push(60);
console.log(`After push : ${arr}`);

// pop()
// Removes last element
arr.pop();
console.log(`After pop : ${arr}`);

// unshift()
// Adds element at the beginning
arr.unshift(5);
console.log(`After unshift : ${arr}`);

// shift()
// Removes first element
arr.shift();
console.log(`After shift : ${arr}`);
