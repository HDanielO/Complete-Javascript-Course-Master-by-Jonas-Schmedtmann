'use strict';

// default parameter
function testFunction(
  argument1 = 1,
  argument2 = 2 + argument1,
  argument3 = 3 + argument2
) {
  console.log(argument1, argument2, argument3);
}

testFunction();

testFunction(4, undefined, undefined);

testFunction(4, 5, undefined);

testFunction(4, 5, 6);

//passing arguments
const flight = 'LH432';

const passenger1 = {
  name: 'Hameed Daniel',
  passport: 234908129304,
};

const checkIn = function (flightNum, passenger) {};

checkIn(flight, passenger1);

const greet = greeting => name => console.log(`${greeting} ${name}`);
greet('hello')('dan');

// CALL AND ABOUT METHOD

const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};

const airPeace = {
  airline: 'Air Peace',
  iataCode: 'P4',
  bookings: [],
};

// airPeace.book(23465, 'Daniel');
// airPeace.book(11345, 'David');
// console.log(airPeace.bookings);

book.call(airPeace, 23465, 'Daniel');
book.call(airPeace, 11345, 'David');
console.log(airPeace);

const flyPeace = {
  airline: 'Fly Peace',
  iataCode: 'FP',
  bookings: [],
};

book.call(flyPeace, 20465, 'Tracy');
book.call(flyPeace, 39345, 'Mary');
console.log(flyPeace);

// bind method

const bookAP = book.bind(airPeace, 23);

bookAP('Tracy');

// with event listeners

airPeace.plane = 300;
airPeace.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', airPeace.buyPlane.bind(airPeace));

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.3);

console.log(addVAT(200));

const addTax2 = value => () => value + value * 0.23;

// CODING CHALLENGE 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let pollInput = prompt(
      'What is your favourite programming language? 0: JavaScript 1: Python 2: Rust 3: C++ (Write option number)'
    );
    let pollInputNum = Number(pollInput);
    if (pollInputNum >= 0 && pollInputNum <= 3) {
      this.answers[pollInputNum]++;
    }
    // console.log(this.answers);
    this.displayResults('string');
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(' , ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

(function () {
  console.log('testing imediately invoked functions expression');
})();
(() => {
  console.log('testing-2 imediately invoked functions expression');
})();

setTimeout(() => {
  console.log('HELLO');
}, 1000);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();


