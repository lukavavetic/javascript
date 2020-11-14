const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log('B737'[0]); // B
console.log(airline.length);
console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));
console.log(airline.slice(-2));
console.log(airline.slice(0, -1));

checkMiddleSeat = function(seat) {
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');

console.log(new String('Luka'));

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const email = '   luka@Gmail.Com ';
console.log(email.trim().toLowerCase());

const priceGB = '288,97£';
const priceEU = priceGB.replace('£', '$').replace(',', '.');
console.log(priceEU);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));


const secondPlane = 'A320neo';
console.log(secondPlane.includes('A320'));
console.log(secondPlane.startsWith('A3'));
console.log(secondPlane.endsWith('neo'));

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Luka Vavetic'.split(' ');
console.log(`My first name is ${firstName} and last name is ${lastName}`);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const message = 'Go to gate 23!';
console.log(message.padStart(25, '-').padEnd(30, 'x'));

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4)

  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(0989588586));

console.log(message.repeat(5));