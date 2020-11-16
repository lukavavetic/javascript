const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings : [],
  book (flightNum, name) {
    const message = `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`;
    console.log(message);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  }
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Doe');

console.log(lufthansa);

const book = lufthansa.book;

//book(23, 'Sara Williams'); // cannot read property 'airline' of undefined

//call

book.call(lufthansa, 23, 'Sara Williams'); // inside the func this keyword is set to lufthansa
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings : [],
};

book.call(eurowings, 23, 'Sara Williams'); // inside the func this keyword is set to eurowings
console.log(eurowings);


//apply
const data = [583, 'Stefano Pannuci'];

book.apply(eurowings, data);
console.log(eurowings);

book.call(eurowings, ...data);
console.log(eurowings);