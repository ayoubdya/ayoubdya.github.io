const cards = Array.from(document.querySelectorAll(".card"));
const difficultyEl = document.querySelector("#difficulty");

const SHUFFLE_TIMES = 50;
let oppenedCards = [];
let flippedCards = [];
let gameOver = true;
let score = 0;
let seconds = 120;

const scoreEl = document.querySelector(".score");
scoreEl.textContent = `score: ${score} pts`;

const timerEl = document.querySelector(".timer");
timerEl.textContent = `timer: ${seconds} s`;

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
            shuffle(SHUFFLE_TIMES);
            flippedCards = [];
          }, 300);
        }, 300);
      }
      console.log(2, oppenedCards);
    }
  });
});

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
      break;
    case "medium":
      seconds = 60;
      break;
    case "hard":
      seconds = 30;
      break;
  }
  timerEl.textContent = `timer: ${seconds} s`;
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
