'use strict';

console.log(this); //window object

const calcAge = function(birthYear) {
  console.log(this); //undefined
}

calcAge(1991);

const calcAgeArr = (birthYear) => {
  console.log(this); //window arrow function uses lexical scope, this referes to a parent scope
}

calcAgeArr(1991);

const jonas = {
  year: 1991,
  calcAge: function() {
    console.log(this); // refers to a jonas object
  }
}
jonas.calcAge();

const matilda = {
  year: 1995
};

matilda.calcAge = jonas.calcAge; //method borrowing
matilda.calcAge();