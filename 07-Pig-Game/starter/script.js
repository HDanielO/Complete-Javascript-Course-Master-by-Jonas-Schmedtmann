'use strict';
// SELECT  ELEMENTS
// the 'EL' signifies DOM element
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');

let scores, currentScore, activePlayer, isPlaying;

const init = () => {
  // STARTING CONDITIONS
  // set the score DOM elements to 0
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  isPlaying = true;
  // hide the dice
  diceEl.classList.add('hidden');
};

init();

//SWITCH PLAYER FUNCTIONALITY
const switchPlayer = () => {
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
};

// ROLL DICE FUNCTIONALITY
const rollDice = () => {
  if (isPlaying) {
    // 1. GENERATE A RANDOM NUMBER BETWEEN 1 AND 6
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. DISPLAY DICE IMAGE
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    // CHECK IF ROLLED 1
    if (dice !== 1) {
      // 3. ADD THE DICE NUMBER TO CURRENT SCORE
      currentScore += dice;
      // 4. DISPLAY CURRENT SCORE TO ACTIVE PLAYER
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

// HOLD BUTTON FUNCTIONALITY
const holdScore = () => {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      isPlaying = false;
    } else {
      switchPlayer();
    }
  }
};

const newGame = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  init();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
