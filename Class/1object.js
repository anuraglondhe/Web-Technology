//We can declare object using two types 
// 1] object literal
// 2] object singleton


// 1]object literal
let user = {
    name: "Swapnil",
    age: 20,
    email:"swapnil@gmail.com",
    city:"miraj",
    isLogin: true,
    lastLoginDate : ['sun','Mon','Tues','Wed'],
    "full Name" : "Swapnil Bhosale"
}
console.log(user);
console.log(user.email);
console.log(user.lastLoginDate);
console.log(user["full Name"]);

user.email = "user@gmail.com";
console.log(user.email);
//Object.freeze(user);//Freeze Value
user.email = "abc@gmail.com";
console.log(user.email);

//Symbol Example
const mysymbol=Symbol("WT")
const myobj1={
    [mysymbol]:"Hello",

}
console.log(myobj1);
console.log(typeof(myobj1));

user.greeting = function(){
    console.log("Hello.js");
    
}
console.log(user.greeting());

user.greeting2 = function(){
    console.log(`email : ${this.email}`);
    
}
console.log(user.greeting2());

//2]object singleton
const user = new Object;
console.log(user);


//non-singleton object
const user2 = {};
user2.id = 123;
user2.name = "Swapnil";
user2.city = "Miraj";
user2.isLogin = true
console.log(user2);


//nested object 
const regularUser = {
    email:"xyz@gmail.com",
    fullname:{
        fname:"Swapnil",
        lname:"Bhosale"
    }
}
console.log(regularUser);
console.log(regularUser.fullname.fname);