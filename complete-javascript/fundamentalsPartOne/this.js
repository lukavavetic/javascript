console.log(this); //Window object

calcAge(1990);

function calcAge(year) {
    console.log(this); // Window object
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this); // refers to John object
    }
};

john.calcAge();