'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const calcAndDisplayBalance = function(account) {
  account.balance = account.movements.reduce((accumulator, current) => accumulator + current, 0);
  labelBalance.textContent = `${account.balance} EUR`;
};

calcAndDisplayBalance(account1);

const calcDisplaySummary = function(account) {
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const outcomes = account.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} EUR`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest} EUR`;
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
 
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  
  if (amount > 0 && currentAccount?.balance >= amount && receiverAcc?.username !== currentAccount?.username) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});


btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = account.findIndex(acc => acc.username === currentAccount.username);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});

let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});

labelBalance.addEventListener('click', e => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    divEl => Number(divEl.textContent)
  );
  console.log(movementsUI);
});


function updateUI(account) {
  displayMovements(account.movements);

  calcAndDisplayBalance(account);

  calcDisplaySummary(account);
};


// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map(mov => mov * eurToUsd);


// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) return `Movement ${i +1}: You deposited ${mov}!`;
//   else return `Movement ${i +1}: You withdrew ${Math.abs(mov)}!`;
// });

// const deposits = movements.filter(mov => mov >= 0);
// const withdrawals = movements.filter(mov => mov < 0);
// const balance = movements.reduce((accumulator, current) => accumulator + current, 0);

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(totalDepositsUSD);

// find method returns the first one which satisfies the condition
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// const acc = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(acc);

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

//console.log(movements.every(mov => mov > 0)); //false

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8, [[9, 10], [11, 12] ]];
// console.log(arr.flat(2)); // it only goes one level deep by default

// flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

//   console.log(overallBalance);
// const overallBalance = accounts
//   .flatMap(acc => acc.movements) // only goes 1 level deep
//   .reduce((acc, mov) => acc + mov, 0);

//   console.log(overallBalance);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

//console.log(movements.sort()); // values are casted as string and sorted in that way

//alternative
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// movements.sort((a, b) => a - b); // asc
// movements.sort((a, b) => b - a); //desc
// console.log(movements);

// const x = new Array(7);
// console.log(x); // empty array with length 7, only fill method can be called on this kind of an array
// // x.fill(1);
// // console.log(x); // (7) [1, 1, 1, 1, 1, 1, 1]
// x.fill(1, 0, 1); // first param is value, second is where to start and third where to end
// console.log(x); //  [1, empty × 6]

// const y = Array.from({length: 7}, () => 1);
// console.log(y); // (7) [1, 1, 1, 1, 1, 1, 1]

// const z = Array.from({length: 7}, (current, index) => index + 1);
// console.log(z); // [1, 2, 3, 4, 5, 6, 7]