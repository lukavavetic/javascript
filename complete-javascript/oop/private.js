class Account {
  //public fields

  locale = 'hr';

  //private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  get Movements() {
    return this.#movements;
  }

  set Movement(mov) {
    this.#movements.push(mov);
  }

  static helper() {
    console.log('I am helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 11111);

//acc1.#movements.push(250); // SyntaxError: Private field '#movements' must be declared in an enclosing class

console.log(acc1.Movement(250));
console.log(acc1.helper());