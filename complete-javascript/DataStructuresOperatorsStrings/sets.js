// from ES6 two new data structures are introduced - sets and maps
// sets only contains unique values

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risotto']);

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }

console.log(new Set('Luka')); // Set(4) { 'L', 'u', 'k', 'a' }

console.log(ordersSet.size); // 3

console.log(ordersSet.has('Pasta')); // true

console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');

console.log(ordersSet[0]); // undefined, can retrieve data from set

//ordersSet.clear(); 

for (const order of ordersSet) console.log(order);

// example
const staff = ['Wainter', 'Chef', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Wainter', 'Chef', 'Manager', 'Waiter' ]