function calculateAge(birthYear) {
    return 2018 - birthYear;
}

calculateAge(1990);

var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' has ' + retirement + ' years until retirement!');
}

yearUntilRetirement(1990, 'John');

// Function declaration
// function whatDoYouDo(job, firstName) {

// }

// Function expression
var whatDoYouDo = function(job, firstName) {
    console.log(firstName + " is a " + job);
}

whatDoYouDo('Dev', 'Luka');