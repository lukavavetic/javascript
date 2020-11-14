// object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age =  2018 - this.birthYear;
    }
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
console.log(john.calcAge(1990));
//john.age = john.calcAge(1990);

john.isMarried = true;
console.log(john);

//new object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
//console.log(jane);

