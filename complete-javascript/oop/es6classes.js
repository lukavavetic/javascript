// class expression
// const Person = class {}

//class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  set FullName(name) {
    this._fullName = name; // if property is already declared, use underscore
  }

  get FullName() {
    return this._fullName;
  }
}

const jessica = new Person('Jessica', 1990);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === Person.prototype);

Person.prototype.greet = function() { console.log(`Hello ${this.firstName}`);}

jessica.greet();

// classes are not HOISTED - function declaration can be used before it is declared in the code, but that does not apply for classes
// classes are first class citizen - you can pass and return them from function
// classes are executed in strict mode

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);