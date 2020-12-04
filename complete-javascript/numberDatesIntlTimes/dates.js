/** 
const now = new Date();
console.log(now);

console.log(new Date('Nov 23 2020 09:21:37'));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0100 - months are zero based
console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT+0100 since november has 30 days, JS automatically set this to dec 01

console.log(new Date(0)); // Thu Jan 01 1970 01:00:00 GMT+0100
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 01:00:00 GMT+0100
*/

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //timestamp 2142253380000
console.log(new Date(2142253380000)); // Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)
console.log(Date.now()); //current timestamp

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0100 (Central European Standard Time)