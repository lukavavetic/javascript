const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const rest = new Map();

rest
  .set('categories', ['Italian', 'Pizzeria', 'Organic'])
  .set(2, 'Lisbon')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);
console.log(rest.get(true));

const time = 21;
const val = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(val);

console.log(rest.has('categories')); // true
rest.delete(2);
console.log(rest);

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); //undefined

// workaround
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); //Test

const question = new Map([
  ['q', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

//maps are iterables
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// convert map to array
console.log([...question]);