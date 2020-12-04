const lol = Array.from([1, 2, 3]);

//const ex = [1, 2, 3].from(); // TypeError: [1,2,3].from is not a function because from is static method and it is attached to Array constructor and not to the prototype

//static methods
Number.parseFloat(12);
Array.from([1, 2, 3]);

class Person {
  constructor(firstName) { this.firstName = firstName; }

  static HelloStatic() {
    console.log('Hello, I am static!');
  }
};

Person.HelloWorld = function () { 
  console.log("I am static method!"); 
  console.log(this);
};

Person.HelloWorld();

Person.HelloStatic();

luka = new Person('Luka');
// luka.HelloStatic(); TypeError: luka.HelloStatic is not a function
//luka.HelloWorld(); // TypeError: luka.HelloWorld is not a function, luka object can not inherit HelloWorld method because it is static method linked to Person only and not to prototype
