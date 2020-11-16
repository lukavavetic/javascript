const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 1234567,
};
// string is primitive and it is passed by value
// object is passed to reference
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
}

checkIn(flight, jonas);
console.log(flight); //  LH234
console.log(jonas); // { name: 'Mr.Jonas Schmedtmann', passport: 1234567 }


