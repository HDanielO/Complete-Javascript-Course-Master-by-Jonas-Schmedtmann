'use strict';

// SELECT  ELEMENTS
// the 'EL' signifies DOM element
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

// STARTING CONDITIONS
// set the score DOM elements to 0
score0EL.textContent = 0;
score1EL.textContent = 0;
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let isPlaying = true;
// hide the dice
diceEl.classList.add('hidden');

// ROLL DICE FUNCTIONALITY

const rollDice = () => {
  if (isPlaying) {
    // 1. GENERATE A RANDOM NUMBER BETWEEN 1 AND 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. DISPLAY DICE IMAGE
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    console.log(dice);

    // CHECK IF ROLLED 1
    if (dice !== 1) {
      // 3. ADD THE DICE NUMBER TO CURRENT SCORE
      currentScore += dice;

      // 4. DISPLAY CURRENT SCORE TO ACTIVE PLAYER
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      // SWITCH TO NEXT PLAYER
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    }
  }
};
