// LECTURE: Hoisting
//calculateAge(1965); // works even if it invoked before function declaration

function calculateAge(year) {
    console.log(2016 - year);
}

//calculateAge(1990);


//retirement(1994); // does not work because it is a function expression and it is invoked before the function expression is written

var retirement = function(year) {
    console.log(65 - (2020 - year));
}

//retirement(1994); // works


console.log(age); // undefined
var age = 23; // global context
console.log(age); // 23,

function foo() {
    console.log(age); // undefined
    var age = 65; // local context/function context
    console.log(age); // 65
}

foo(); // 65
console.log(age); // 23

var a = 'Hello!'; // global scope [VO global]
first();

function first() {
    var b = 'Hi!'; // first() scope
    second(); //first scope

    function second() {
        var c = 'Hey!'; //second scope
        console.log(a + b + c); //second scope - lexical scope, it access for a and b values in outer scopes - scope chain
        third(); //error
    }
}

function third() {
    var d = 'John';
    console.log(a + d); // works
    console.log(a + b + c + d); // has only an acess to a and d values - c is not defined
}