'use strict';
var firstName = 'Luka';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function() {
    //console.log(this);
    //console.log(2020 - this.year);
    
    const self = this

    //solution 1
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // }
    // isMillenial(); // cannot read propery of undefine
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }
    //  isMillenial(); //works fine
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial(); // works fine because arrow function this keyword refers to parent scope
  },
  greet: () => {
    //console.log(`Hello ${this.firstName}`) // this here refers to window object (parent object from current scope)
  }
};

jonas.calcAge(); // 29  
jonas.greet(); // Hello undefined. if we define firstName in parent scope, it will look up for firstName var and find it with value 'Luka'

//argument keyword
const addExprs = function(a, b) {
  console.log(arguments);
  return a + b;
}

addExprs(2, 5);
addExprs(2, 5, 3, 5, 4); // legit, but this only works for regular not arrow functions