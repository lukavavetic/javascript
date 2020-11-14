var firstName = 'Luka';
console.log(firstName); // "Luka"

var age = 28;
console.log(age); // 28

var fullAge = true;
console.log(fullAge) // true

var job;
console.log(job); // undefined

job = 'Teacher';
console.log(job); // "Teacher"

var job, isMarried;
job = 'dev';
isMarried = false;
console.log(job, isMarried); //"dev false" - false is coerced to string type

var height;
height = 23;

if (height == '23') {
    console.log('The == operator does type coercion!');
}

if (!(height === '23')) {
    console.log('The === operator does not type coercion!');
}


let numero;
numero = 30;
numero = 31; //works

const birthYear = 1991;
//birthYear = 1990; //error

//const job; // missing initializer in const declaration 

lastName = "Doe"; // Javascript creates property in global object

const jonasNew = `I'am ${lastName}`; // template literals
console.log(jonasNew);
console.log(`Just a regular string...`);


console.log('String with \n\
multiple \n\
lines!');

console.log(`String with
multiple
lines!`);
