// Difference between var, let, and const

//  var //
// Old way of declaring variables
// Can be re-declared and updated
// Has function scope
// Can cause bugs, so not recommended now

//let //
// Modern way to declare variables
// Cannot be re-declared, but can be updated
// Has block scope (inside { })

// const //
// Used for fixed values
// Cannot be re-declared and cannot be updated
// Has block scope


// Types of Data

// Primitive Data Types
// These store single values.

// String → "Hello"
// Number → 10, 3.5
// Boolean → true, false
// Undefined → value not given
// Null → empty value
// Symbol
// BigInt


// Non-Primitive Data Types
// These store multiple values or complex data.

// Object
// Array
// Function

// Variable Declaration & typeof
// Declare variables of different data types

let name = "Alex";
console.log(typeof name);      // string
let age = 30;
console.log(typeof age);       // number
let isWorking = true;
console.log(typeof isWorking); // boolean
let salary;
console.log(typeof salary);    // undefined
let marks = null;
console.log(typeof marks);     // object (JS bug)



// Difference between null and undefined

// undefined
// Variable is declared but no value assigned
// JavaScript gives this automatically
let a;
console.log(a); // undefined
// undefined → “I don’t know the value yet”


// null
// Value is intentionally empty
// Developer sets it
let b = null;
// null → “I know it’s empty”
