// INHERITENCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS
/** 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1990, 'CS');
mike.introduce();
mike.calcAge(); // it first look at mike object, then mike prototype and if is not there, it will continue looking more deep based on prototype chaining and it will find it in Person

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

 */

 // ES6 CLASSES
 /**  
 class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2020 - this.birthYear);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  set FullName(name) {
    this._fullName = name; 
  }

  get FullName() {
    return this._fullName;
  }
}

class Student extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear) // always needs to happen first
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
}

const martha = new Student('Martha Jones', 2012, 'CS');
martha.introduce();
martha.calcAge();
*/

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(firstName, birthYear) {
    console.log("person proto", this);
    this.firstName = firstName;
    this.birthYear = birthYear
  }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}
const jay = Object.create(StudentProto);
jay.init('Jay', 1990, 'CS');
jay.calcAge();
