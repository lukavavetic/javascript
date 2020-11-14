let age = 30;
let oldAge = age;
age = 31;
console.log(age); //30
console.log(oldAge); //31

const me = {
  name: 'Jonas',
  age: 30
};

const friend = me;
friend.name = 'Mihaela';
console.log('Friend:', friend.name); // Mihaela
console.log('Me:', me.name); // Mihaela

//primitives
// number, string, boolean, undefined, null, symbol, bigint... STORED IN CALL STACK

//objects
// object literal, array, functions,... REFERENCE TYPE. they are stored in memory