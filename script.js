'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const p1Score = document.querySelector('#score--0');
const p2Score = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const scores = [0, 0];

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let currentScore = 0;
let activePlayer = 0;
let playing = true;

p1Score.textContent = 0;
p2Score.textContent = 0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.setAttribute('src', `dice-${roll}.png`);

    if (roll != 1) {
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// let scores, currentScore

const init = () => {
  window.location.reload();
};

btnNew.addEventListener('click', init);
