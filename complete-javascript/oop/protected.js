class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //protected
    this._movements = [];
  }

  get Movements() {
    return this._movements;
  }
}

const acc1 = new Account('Jonas', 'EUR', 11111);

acc1._movements.push(250); // still accessible from the outside
console.log(acc1.Movements);