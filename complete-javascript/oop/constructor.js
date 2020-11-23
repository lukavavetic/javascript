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

console.log(jonas instanceof Person);