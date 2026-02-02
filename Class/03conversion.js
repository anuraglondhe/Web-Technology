let score = "65";
console.log(typeof score);

let score_for_bool = true;
console.log(typeof score_for_bool);

let score_for_null = null;
console.log(typeof score_for_null);  // How Object ??? //The typeof operator returns object for null.

let score_for_undefined;
console.log(typeof score_for_undefined);

console.log(score_for_null == score_for_undefined);  //true. //There is no value.
console.log(score_for_null === score_for_undefined);  //false. // There is no value.

//Typecasting- String to number
let score2 = "123abc";
console.log(typeof score2);  //this is not proper number so it is string , but it cannot be convert to number.

let score_convert = Number(score2);
console.log(typeof score_convert,score2,score_convert); //Just printing the typeof(score_convert), score2 and score_convert.

//Typrcasting- Number to string
let score3 = 235;
console.log(typeof score3);// Printing typeof(score3).
let score3_convert = String(score3);
console.log(typeof score3_convert,score3,score3_convert); //Printing typeof (score3_convert), score3 and score3_convert .


//                                              --------------***----------------
//
//Activity 01
//Typecasting - Number to String,boolean,null  
let num = 47;
console.log(typeof num);

let num_convertToString = String(num);
console.log(typeof num_convertToString, num, num_convertToString);

let num_convertToBoolean = Boolean(num);
console.log(typeof num_convertToBoolean, num, num_convertToBoolean);

// let num_convertToNull = null(num);  //Cannot convert anything to null using a function. null is just a value, not a typecasting function.
let num_convertToNull = null;
console.log(typeof num_convertToNull); //Object


//Arithematic Operation
let a=5;
let b= 3;
console.log(a+b, a-b, a*b, a/b, a%b);

//Str add
let str1 = "Hello";
let str2 = " Anurag";
console.log(str1+str2);

//Note : JS only automatically converts string to num in arith operations;


//conversions
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log((1 + "2"));
console.log(1+3+"2")
console.log((3+4)*5%3);

