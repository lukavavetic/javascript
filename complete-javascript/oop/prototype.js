'use strict';

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);

const matilda = new Person('Matilda', 1992);

const jack = new Person('Jack', 1993);

// 1. New {} is created
// 2. function is called, this = {}
// 3. { } linked to prototype
// 4. function automatically return {}

//console.log(jonas instanceof Person);

// Prototype
Person.prototype.calcAge = function(){ console.log(2020 - this.birthYear) };

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);

console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false