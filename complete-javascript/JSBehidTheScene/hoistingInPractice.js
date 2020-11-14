'use strict';

console.log(me); // undefined
//console.log(job); //ReferenceError: job not defined TDZ
//console.log(year); //ReferenceError: year not defined TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;



console.log(addDecl(3,2)); //5
//console.log(addExpr(3,2)); //ReferenceError: addExpr not defined for const/let, for var  addExpr is not a function because undefined is assign to var and it tries to invoke undefined()
//console.log(undefined()); //TypeError: undefined is not a function
//console.log(addArrow(3,2)); //ReferenceError: addArrow not defined

function addDecl(a, b) {
  return a + b
}

// const addExpr = function(a, b) {
//   return a + b
// }

var addExpr = function(a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; 

console.log(numProducts);
if (!numProducts) deleteShoppingCart(); //var returnes undefined value which is falsy value and it runs deleteShoppingCart even though there is 10 products
                                        // thats why is dangerous to use var 

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1; // it is added as property to window object
const z = 1;
let y = 1; // let and const are not added as property to window object
