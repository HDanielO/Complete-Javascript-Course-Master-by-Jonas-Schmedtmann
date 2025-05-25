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
    '2025-05-08T14:11:59.604Z',
    '2025-05-20T17:01:17.194Z',
    '2025-05-22T23:36:17.929Z',
    '2025-05-23T10:51:36.790Z',
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

const formatCurrency = function (num, acc) {
  const options = { style: 'currency', currency: acc.currency };

  return new Intl.NumberFormat(acc.locale, options).format(num);
};

const formatMovementDate = function (date, acc) {
  const daysPassed = Math.round(
    Math.abs((Number(new Date()) - Number(date)) / (1000 * 60 * 60 * 24))
  );
  if (daysPassed === 0) return 'TODAY';
  if (daysPassed === 1) return 'YESTERDAY';
  if (daysPassed <= 7) return `${daysPassed}DAYS AGO `;

  return new Intl.DateTimeFormat(acc.locale).format(date);
};

// implement timer
const startTimer = function () {
  let time = 300;

  const ticker = function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      // add opacity
      containerApp.style.opacity = 0;

      // change greeting message
      labelWelcome.innerHTML = `Log in to get started`;

      clearInterval(timer);
    }

    time--;
  };
  ticker();
  const timer = setInterval(ticker, 1000);
  return timer;
};

const displayMovement = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movementObject = acc.movements.map((mov, i) => ({
    mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) {
    movementObject.sort((a, b) => a.mov - b.mov);
  }

  movementObject.forEach((movObject, i) => {
    // create date,day and time variables
    const transactionDate = new Date(movObject.movementDate);

    const dateString = formatMovementDate(transactionDate, acc);

    const movementType = movObject.mov > 0 ? 'deposit' : 'withdrawal';

    const movementRowHtml = `
    <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      i + 1
    } ${movementType}</div>
    <div class="movements__date">${dateString}</div>
    <div class="movements__value">${formatCurrency(movObject.mov, acc)}</div>
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  labelBalance.innerHTML = `${formatCurrency(acc.balance, acc)}`;
};

const calcDisplaySummary = function (acc) {
  const movingOutTotal = acc.movements
    .filter(value => value < 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  labelSumOut.innerHTML = `${formatCurrency(Math.abs(movingOutTotal), acc)}`;

  const movingInTotal = acc.movements
    .filter(value => value > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  labelSumIn.innerHTML = `${formatCurrency(movingInTotal, acc)}`;

  const interestTotal = acc.movements
    .filter(value => value > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(value => value >= 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  labelSumInterest.innerHTML = `${formatCurrency(interestTotal, acc)}`;
};

// UPDATE UI
const updateUI = function (acc) {
  displayMovement(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// RESET INPUT
const resetInput = function (input1, input2) {
  input1.value = input2.value = '';
  input2.blur();
};

// IMPLEMENTING LOGIN
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    arr => arr.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // create date,day and time variables

    // update date and time every sec
    setInterval(() => {
      const currentDate = new Date();

      const displayDate = new Intl.DateTimeFormat(currentAccount.locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        // weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
      }).format(currentDate);

      labelDate.textContent = displayDate;
    }, 1000);

    // remove opacity
    containerApp.style.opacity = 1;

    // change greeting message
    labelWelcome.innerHTML = `Welcome back, ${currentAccount.owner}`;

    // display data
    if (timer) clearTimeout(timer);
    timer = startTimer();
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

    //update movements dates array
    currentAccount.movementsDates.push(new Date().toISOString());
    transferAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    // reset timer
    clearTimeout(timer);
    timer = startTimer();
    // add to transfer account
    transferAccount.movements.push(Number(inputTransferAmount.value));
  }
  // reset input
  resetInput(inputTransferTo, inputTransferAmount);
});

//IMPLEMENTING LOAN

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (loanAmount > 0) {
    //  add delay to the loan functionality
    setTimeout(() => {
      currentAccount.movements.push(loanAmount);

      //update movements dates array
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      // reset timer
      clearTimeout(timer);
      timer = startTimer();
    }, 2500);
  }
  // reset input
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

//IMPLEMENTING CLOSE

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // find account index
    const accountIndex = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    );

    // delete account
    accounts.splice(accountIndex, 1);

    // add opacity
    containerApp.style.opacity = 0;

    // change greeting message
    labelWelcome.innerHTML = `Good Bye, ${currentAccount.owner}!`;
  }
  // reset input
  resetInput(inputCloseUsername, inputClosePin);
});

// IMPLEMENT SORTING FUNCTIONALITY
let isMovementSorted = false;

const sortMovement = function (acc) {
  displayMovement(acc, !isMovementSorted);

  isMovementSorted = !isMovementSorted;
};

btnSort.addEventListener('click', () => {
  sortMovement(currentAccount);
  // reset timer
  clearTimeout(timer);
  timer = startTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// setInterval(() => {
//   const now = new Date();
//   console.log(
//     `TIME : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
//     // make shift clock
//   );
// }, 1000);
