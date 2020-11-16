'use strict';

const bookings = [];

const createBooking = function(flightNum, numPassenger = 1, price = 199) {
  const booking = {
    flightNum, 
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', undefined, 1000);