const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

for (const movement of movements) {
  if (movement > 0) console.log(`You have deposited ${movement}!`);
  else console.log(`You have withdraw ${Math.abs(movement)}!`);
}

console.log('----------------');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`You have deposited ${i}:${movement}!`);
  else console.log(`You have withdraw ${i}:${Math.abs(movement)}!`);
}

console.log('----------------');

movements.forEach(function (movement, index, array) {
  console.log(index);
  if (movement > 0) console.log(`You have deposited ${movement}!`);
  else console.log(`You have withdraw ${Math.abs(movement)}!`);
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'GBP', 'EUR']);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // key is the same as value
});