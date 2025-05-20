'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 400],
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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const testObject1 = {
//   name: 'Dab',
//   age: 17,
// };

// const testObject2 = testObject1;

// console.log(testObject1);
// console.log(testObject2);

// testObject2.name = 'Dan';

// console.log(testObject1);
// console.log(testObject2);

// const testArray1 = ['a', 'b', 'c', 'd'];

// console.log(testArray1.at(-1));

// console.log(currencies);

// CHALLENGE 1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopied = [...dogsJulia];
  const dogsList = [...dogsJuliaCopied.slice(1, -2), ...dogsKate];

  dogsList.forEach((dog, i) => {
    console.log(`Dog number ${i + 1} 
is ${dog >= 3 ? `an adult and is ${dog} years old` : 'still a puppy 🐶'}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const testUser = 'Hameed Daniel Olanrewaju';

const calcAverageHumanAge = function (dogAgeArr) {
  return (
    dogAgeArr
      .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
      .filter(age => age > 18)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    dogAgeArr.length
  );
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// CODING CHALLENGE 3
const calcAverageHumanAge2 = dogAgeArr =>
  dogAgeArr
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
  dogAgeArr.length;
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// let testUsername1 = '';
// testUser
//   .toLowerCase()
//   .split(' ')
//   .forEach(name => {
//     testUsername1 += name[0];
//   });
// console.log(testUsername1);

// let testUsername2 = testUser
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');

// console.log(testUsername2);

// CODING CHALLENGE 4

// 1
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

console.log(dogs);

// 2
function portionReview(dog) {
  if (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  ) {
    console.log(`Dog is eating recommended amount`);
  } else {
    console.log(`Dog is eating too much`);
  }
}

const sarahDog = dogs.find(dog => dog.owners.some(owner => owner === 'Sarah'));

console.log(sarahDog);

portionReview(sarahDog);

// 3

const ownersEatTooMuch = dogs.filter(
  dog => dog.curFood > dog.recommendedFood * 1.1
);
const ownersEatTooLittle = dogs.filter(
  dog => dog.curFood < dog.recommendedFood * 0.9
);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4

let ownersETM = [];

ownersEatTooMuch.forEach(dog => {
  ownersETM.push(...dog.owners);
});

console.log(`${ownersETM.join(' and ')}'s dogs eat too much!`);

let ownersETL = [];

ownersEatTooLittle.forEach(dog => {
  ownersETL.push(...dog.owners);
});

console.log(`${ownersETL.join(' and ')}l's dogs eat 
too little!`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6

console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

//7
const okayAmountDogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(okayAmountDogs);

// 8

const copyDogs = [...dogs];
copyDogs.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(copyDogs);

const testArr = new Array(7);

console.log(testArr);

testArr.fill('dave', 1);

console.log(testArr);

testArr.fill('clone', 0, 1);

console.log(testArr);

const diceArr = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);

console.log(diceArr);

const totalAmount = function (accountsArr) {
  const totalMovArr = [];
  accountsArr.forEach(acc => {
    totalMovArr.push(...acc.movements);
  });
  return totalMovArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

console.log(totalAmount(accounts));

const totalAmount2 = accounts
  .map(acc => acc.movements.filter(amount => amount > 0))
  .flat()
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalAmount2);

const totalAmount3 = accounts
  .map(acc => acc.movements.filter(amount => amount < 0))
  .flat()
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalAmount3);
console.log(totalAmount2 + totalAmount3);

// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

//1-7 were done in coding challenge 4

const dogs2 = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs2.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs2);

// 2
const sarahDog2 = dogs2.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog2);

console.log(
  `Sarah dog is eating ${
    sarahDog2.curFood > sarahDog2.recommendedFood ? 'too much' : 'too little'
  }`
);

// 3.
const ownersTooMuch = dogs2.filter(dog => dog.curFood > dog.recommendedFood);
const ownersTooLittle = dogs2.filter(dog => dog.curFood < dog.recommendedFood);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4.
console.log(
  `${ownersTooMuch
    .flatMap(dog => dog.owners)
    .join(' and ')}'s dogs eat too much!`
);

console.log(
  `${ownersEatTooLittle
    .flatMap(dog => dog.owners)
    .join(' and ')}'s dogs eat too little!`
);

// 5.
console.log(dogs2.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(
  dogs2.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7.
const okayAmountDogs2 = dogs2.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(okayAmountDogs2);

// 8.

const eatingsCategories = Object.groupBy(dogs2, dog => {
  if (dog.curFood === dog.recommendedFood) {
    return 'exact';
  } else if (dog.curFood > dog.recommendedFood) {
    return 'too-much';
  } else if (dog.curFood < dog.recommendedFood) {
    return 'too-little';
  }
});

console.log(eatingsCategories);

// 9.
const ownerNumCategories = Object.groupBy(dogs2, dog => {
  return `${dog.owners.length}`;
});

console.log(ownerNumCategories);

// 10.
console.log(dogs2.toSorted((a, b) => a.recommendedFood - b.recommendedFood));
