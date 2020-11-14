var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length)

names[1] = 'Joe';
names[5] = 'Mary';

names.push(2019); // add element to the end of the array
names.unshift("First"); // add element on the start of the array
names.pop(); //remove last element
names.shift(); //remove first element
console.log(names);
console.log(names.indexOf('Joe')); // if element is not present, function returns -1