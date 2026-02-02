let myDate = new Date();

console.log(myDate); //2026-02-01T12:23:00.746Z
console.log(myDate.toString()); //Sun Feb 01 2026 17:54:13 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2026-02-01T12:25:22.208Z
console.log(myDate.toLocaleDateString()); //1/2/2026
console.log(myDate.toDateString()); //Sun Feb 01 2026
console.log(typeof myDate); //object
console.log(myDate.getTime()); //1769948938603
console.log(myDate.getDate()); //1
console.log(myDate.getDay()); //0
console.log(myDate.getMonth()); //1

//timestamp
let mytimestamp = Date.now(); 
console.log(mytimestamp); //1769949189165
console.log(Date.now()); //1769949224926
console.log(Date.now()/1000); //1769949282.504

