let cards;
const difficultyEl = document.querySelector("#difficulty");
const container = document.querySelector(".carpet");

const SHUFFLE_TIMES = 50;
let oppenedCards = [];
let flippedCards = [];
let gameOver = true;
let score = 0;
let seconds = 10;
let numCards = 4;

const scoreEl = document.querySelector(".score");
scoreEl.textContent = `score: ${score} pts`;

const timerEl = document.querySelector(".timer");
timerEl.textContent = `timer: ${seconds} s`;

loadCards(numCards);

function loadCards(num) {
  const possibleCards = [...new Array(10).keys()].map((el) => el + 1);
  let innerHTML = "";
  for (let _i = 0; _i < num; ++_i) {
    const randomIdx = Math.floor(Math.random() * possibleCards.length);
    const i = possibleCards[randomIdx];
    possibleCards.splice(randomIdx, 1);
    innerHTML += `<div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img class="" src="images/img${i}.png" />
      </div>
      <div class="card-back">
        <img class="" src="images/back.png" />
      </div>
    </div>
  </div>`;
  }
  container.innerHTML = ""; // clear container
  container.innerHTML = innerHTML + innerHTML;
  cards = Array.from(document.querySelectorAll(".card"));
  handleOnClick();
}

function handleOnClick() {
  cards.forEach((el) => {
    el.addEventListener("click", () => {
      if (gameOver) return;
      const card = el.querySelector(".card-inner");
      if (flippedCards.includes(card)) return;
      if (oppenedCards.includes(card)) return;
      card.classList.toggle("flip");
      oppenedCards.push(card);
      if (oppenedCards.length === 1) return;
      if (
        oppenedCards[0].querySelector(".card-front > img").src !==
        oppenedCards[1].querySelector(".card-front > img").src
      ) {
        setTimeout(() => {
          oppenedCards.forEach((card) => card.classList.toggle("flip"));
          oppenedCards = [];
          return;
        }, 300);
      } else {
        scoreEl.textContent = `score: ${score}+100 pts`;
        score += 100;
        setTimeout(() => {
          scoreEl.textContent = `score: ${score} pts`;
        }, 500);
        flippedCards.push(...oppenedCards);
        oppenedCards = [];
        if (flippedCards.length === cards.length) {
          setTimeout(() => {
            cards.forEach((el) => {
              el.querySelector(".card-inner").classList.toggle("flip");
            });

            setTimeout(() => {
              loadCards(numCards);
              shuffle(SHUFFLE_TIMES);
              flippedCards = [];
            }, 300);
          }, 300);
        }
      }
    });
  });
}

function shuffle(times) {
  if (times === 0) return;
  const _cards = [
    ...cards.map((card) => card.querySelector(".card-front > img")),
  ];
  let randomIdx = Math.floor(Math.random() * _cards.length);
  const card_1 = _cards[randomIdx];
  _cards.splice(randomIdx, 1);
  randomIdx = Math.floor(Math.random() * _cards.length);
  const card_2 = _cards[randomIdx];
  [card_1.src, card_2.src] = [card_2.src, card_1.src];
  shuffle(times - 1);
}

function difficulty() {
  const difficultyValue = difficultyEl.value;
  switch (difficultyValue) {
    case "easy":
      seconds = 120;
      numCards = 4;
      break;
    case "medium":
      seconds = 60;
      numCards = 5;
      break;
    case "hard":
      seconds = 30;
      numCards = 6;
      break;
  }
  fixGrid(numCards);
  loadCards(numCards);
  timerEl.textContent = `timer: ${seconds} s`;
}

const classes = ["grid-cols-4", "grid-cols-5", "grid-cols-6"];

function fixGrid(numOfCards) {
  container.classList.remove(...classes);
  container.classList.add(`grid-cols-${numOfCards}`);
}

function startGame() {
  const startBtn = document.querySelector(".start-btn");
  startBtn.disabled = true;
  difficultyEl.disabled = true;

  shuffle(SHUFFLE_TIMES);

  gameOver = false;

  const intervalId = setInterval(() => {
    seconds--;
    timerEl.textContent = `timer: ${seconds} s`;
    if (seconds === 0) {
      gameOver = true;
      timerEl.classList.add("text-red-500");
      timerEl.textContent = "time is up!";
      clearInterval(intervalId);
      cards.forEach((el) => {
        el.querySelector(".card-inner").classList.add("flip");
      });
      setTimeout(() => {
        alert(`Game Over! Your score is ${score}`);
      }, 600);
    }
  }, 1000);
}
