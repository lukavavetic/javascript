let arr = ['a', 'b', 'c', 'd', 'e'];

// slice - create new array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// splice - mutates original array
arr.splice(-1);
arr.splice(1, 2); // first param start, second delete count, how many elements should be deleted
console.log(arr);

// reverse - mutates original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// contact - create new array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join('-'));