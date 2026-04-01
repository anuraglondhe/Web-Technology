let myNum = new Number(123.4567);

console.log(myNum); //[Number: 123.4567]
console.log(myNum.toString());//123.4567
console.log(myNum.toString().length);//8

console.log(myNum.toFixed());//123 //toFixed() gives an approximate (rounded) value, not an exact cut value.
console.log(myNum.toFixed(2));//123.46 //toFixed(n) rounds the number to n decimal places.
console.log(myNum.toFixed(0));//123


console.log("-------------------------------");
let myNum2 = new Number(123);
console.log(myNum2);
console.log(myNum2.toString());
console.log(myNum2.toString().length);//3


console.log("-------------------------------");
//When we build e-commerce website and precision's value is so long.
let t = 10000000000;
console.log(t);
console.log(t.toLocaleString('en-In'));//10,00,00,00,000  //Indian Standard


console.log("-------------------------------");
//Math
console.log("Math");
console.log(Math.abs(-583));//583
console.log(Math.round(4.7));//5
console.log(Math.round(4.3));//4
console.log(Math.ceil(4.6));//5
console.log(Math.floor(4.6));//4
console.log(Math.min(1,2,3,4));//1
console.log(Math.max(1,2,5,6));//6



//HW
console.log(Math.random());//returns a number from 0 (inclusive) up to but not including 1.

console.log(Math.floor(Math.random() * 10)); //floor removes decimals.

console.log(Math.random() * 100); 




console.log(Math.PI); //Gives value of pi.
