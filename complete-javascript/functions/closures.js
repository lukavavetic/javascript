const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();

// we can say that closure make function remembers all the variables that existed at the function birth place
// thats why booker is able to update passengerCount variable even though secureBooking func is gone from stack
// any functions always has access to the variable environment of the execution context in which the function was created
// even after that execution context is gone
// closure has priority over scope chain
// closure is the closed-over variable environment of the execution context in which a function was created even after that EC is gone
// closure gives a function access to all the variables of its parent function eve after that parent function has returned
// the functions keeps reference to its outer scope which preserves the scope chain throughtout time
// we do not have to manually create closures, this is a JS feature that happens automatically. we can't even access closed-over variables explicitly. 
// a closure is NOT a tangible JS object
console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(2 * a);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(2 * b);
  };
};

g();
f(); // 46
h();
f(); // 1554

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers!`);

    console.log(`There are 3 groups each with ${perGroup} passengers!`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 1)
