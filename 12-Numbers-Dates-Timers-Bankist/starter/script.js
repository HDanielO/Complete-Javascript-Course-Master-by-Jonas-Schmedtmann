'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const movementType = mov > 0 ? 'deposit' : 'withdrawal';

    const movementRowHtml = `
    <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      i + 1
    } ${movementType}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', movementRowHtml);
  });
};

// creating usernames for account owners
accounts.forEach(acc => {
  acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
});

console.log(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  labelBalance.innerHTML = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const movingOutTotal = acc.movements
    .filter(value => value < 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  labelSumOut.innerHTML = `${Math.abs(movingOutTotal)}€`;

  const movingInTotal = acc.movements
    .filter(value => value > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  labelSumIn.innerHTML = `${movingInTotal}€`;

  const interestTotal = acc.movements
    .filter(value => value > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(value => value >= 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  labelSumInterest.innerHTML = `${interestTotal}€`;
};

// UPDATE UI
const updateUI = function (acc) {
  displayMovement(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// RESET INPUT
const resetInput = function (input1, input2) {
  input1.value = input2.value = '';
  input2.blur();
};

// IMPLEMENTING LOGIN
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    arr => arr.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // remove opacity
    containerApp.style.opacity = 1;

    // change greeting message
    labelWelcome.innerHTML = `Welcome back, ${currentAccount.owner}`;

    // display data
    updateUI(currentAccount);

    // reset input
    resetInput(inputLoginUsername, inputLoginPin);
  }
});

// IMPLEMENTING TRANSFERS
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferAccount = accounts.find(
    arr => arr.username === inputTransferTo.value
  );

  if (
    transferAccount &&
    transferAccount?.username !== currentAccount.username &&
    Number(inputTransferAmount.value) > 0 &&
    currentAccount.balance >= Number(inputTransferAmount.value)
  ) {
    // remove from current account and update ui
    currentAccount.movements.push(-Number(inputTransferAmount.value));

    // Update UI
    updateUI(currentAccount);

    // add to transfer account
    transferAccount.movements.push(Number(inputTransferAmount.value));
  }
  // reset input
  resetInput(inputTransferTo, inputTransferAmount);
});

// IMPLEMENT SORTING FUNCTIONALITY
let isMovementSorted = false;

const sortMovement = function (acc) {
  displayMovement(
    !isMovementSorted ? [...acc.movements].sort((a, b) => a - b) : acc.movements
  );
  isMovementSorted = !isMovementSorted;
};

btnSort.addEventListener('click', () => {
  sortMovement(currentAccount);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
