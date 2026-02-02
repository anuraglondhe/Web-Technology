let an = null;
console.log(typeof an);

// Reverse no
let a="1234";
let b=a.split("").reverse().join("");
console.log(b);

let n=1234;
for(let i=0; i<n; i++){
    
}
console.log(n);


// Find largest No

let num1=4;
let num2=8;
let num3=29;
if(num1>num2){
    console.log(`${num1} is largest no.`);    
}else if(num2>num3){
    console.log(`${num2} is largest no.`);    
}else{
    console.log(`${num3} is largest no.`);    
}

//Check Palindrome number
//Faboncci Series
//Count Vowels

//--Array related activities--//
//Find largest number
let arr = [1,2,3,4,5];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(`Largest number is ${max}`);

for(let i=0;i<arr.length;i++){
    Math.max(arr);
}
console.log(`Large number is ${max}`);


//Remove duplicate elements in array

//Find missing number in array

//--Function Related activities--

let num;
function evenOdd(num){
    if(num%2===0){
        console.log(`${num} is Even number.`);        
    }else{
        console.log(`${num} is Odd number.`);        
    }
}
evenOdd(5);

//Find Sum of Array
let sum=0;
for(let i=0; i<arr.length; i++){
    sum+= arr[i];
}
console.log(`${sum} is the sum of array.`);
console.log("Hello World");
