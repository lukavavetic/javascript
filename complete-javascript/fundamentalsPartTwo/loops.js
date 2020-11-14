for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Mark', 1990, 'Eric', false, 'Joe'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

var i = 0;

while (i < john.length) {
    if (typeof john[i] == 'number') break;
    console.log(john[i]);
    i++;
}