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

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings : [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
bookEW(555, 'Stev-o');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martha Cooper');
console.log(eurowings);

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // this keyword point to .buy html element
//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // works

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // same as addVat => value => value + value * 0.23
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));