//function declaration
let age1 = calcAge1(1994);
console.log(age1); // works even if it is invoked before declaring the function - this only works for function declaration and not for function expression

function calcAge1(birthYear) {
    return 2020 - birthYear;
}

age1 = calcAge1(1993);
console.log(age1);


//function expression
// let age2 = calcAge2(1994);
// console.log(age2); //error calcAge2 is not defined

const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}

age2 = calcAge2(1994);
console.log(age2);


//arrow functions - function expression
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, name) => {
    console.log(name);
    console.log(this); // {} arrow function does not get this keyword
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

const retirement = yearsUntilRetirement(1994, "Luka");
console.log(retirement);

