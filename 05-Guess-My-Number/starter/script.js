'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const guessNumber = document.querySelector('.number');
let score = Number(document.querySelector('.score').textContent);
const highScore = document.querySelector('.highscore');
const gameMessage = document.querySelector('.message');
const htmlBody = document.querySelector('body');
let randomNumber = Math.floor(Math.random() * 20) + 1;

//CHECK BUTTON FUNTIONALITY
checkButton.addEventListener('click', function () {
  const guessInputValue = Number(guessInput.value);
  // console.log(guessInputValue);

  if (score > 0) {
    if (guessInputValue === randomNumber) {
      //IF GUESS IS CORRECT
      guessNumber.textContent = guessInputValue;
      gameMessage.textContent = '🎉 Correct Number!';
      htmlBody.style.backgroundColor = '#60b347';
      guessNumber.style.width = '30rem';
      highScore.textContent =
        score > Number(highScore.textContent)
          ? score
          : Number(highScore.textContent);
    } else if (guessInputValue > randomNumber) {
      //IF GUESS IS HIGHER
      score--;
      document.querySelector('.score').textContent = score;
      gameMessage.textContent = '📈 Too high!';
    } else if (guessInputValue < randomNumber) {
      //IF GUESS IS LOWER
      if (guessInputValue === 0) {
        gameMessage.textContent = 'No Number!';
      } else {
        score--;
        document.querySelector('.score').textContent = score;
        gameMessage.textContent = '📉 Too low!';
      }
    }
  } else {
    document.querySelector('.score').textContent = 0;
    gameMessage.textContent = '💥 You lost the game!';
  }
});

//AGAIN BUTTON FUNCTIONALITY
againButton.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  htmlBody.style.backgroundColor = '#222';
  gameMessage.textContent = 'Start guessing...';
  guessNumber.textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
});
