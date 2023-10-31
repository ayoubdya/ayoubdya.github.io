const cards = Array.from(document.querySelectorAll(".card"));
const SHUFFLE_TIMES = 50;
let oppenedCards = [];
let gameOver = false;
let score = 0;
let seconds = 10;

let hiddenCards = cards.length;

const scoreEl = document.querySelector(".score");
scoreEl.textContent = `score: ${score} pts`;

const timerEl = document.querySelector(".timer");
timerEl.textContent = `timer: ${seconds} s`;

cards.forEach((el) => {
  el.addEventListener("click", () => {
    if (gameOver) return;
    const card = el.querySelector("img");
    if (oppenedCards.includes(card)) return;
    card.classList.toggle("opacity-0");
    oppenedCards.push(card);
    if (oppenedCards.length === 1) return;
    if (oppenedCards[0].src !== oppenedCards[1].src) {
      setTimeout(() => {
        oppenedCards.forEach((card) => card.classList.toggle("opacity-0"));
        oppenedCards = [];
        console.log(1, oppenedCards);
        return;
      }, 300);
    } else {
      score += 100;
      scoreEl.textContent = `score: ${score} pts`;
      oppenedCards = [];
      hiddenCards -= 2;
      if (hiddenCards === 0) {
        setTimeout(() => {
          cards.forEach((el) => {
            el.querySelector("img").classList.toggle("opacity-0");
          });

          setTimeout(() => {
            shuffle(SHUFFLE_TIMES);
            hiddenCards = cards.length;
          }, 300);
        }, 300);
      }
      console.log(2, oppenedCards);
    }
  });
});

function resetCards() {
  cards.forEach((el) => {
    el.querySelector("img").classList.toggle("opacity-0");
  });
}

function shuffle(times) {
  if (times === 0) return;
  const _cards = [...cards.map((card) => card.querySelector("img"))];
  let randomIdx = Math.floor(Math.random() * _cards.length);
  const card_1 = _cards[randomIdx];
  _cards.splice(randomIdx, 1);
  randomIdx = Math.floor(Math.random() * _cards.length);
  const card_2 = _cards[randomIdx];
  [card_1.src, card_2.src] = [card_2.src, card_1.src];
  shuffle(times - 1);
}

shuffle(SHUFFLE_TIMES);

const intervalId = setInterval(() => {
  seconds--;
  timerEl.textContent = `timer: ${seconds} s`;
  if (seconds === 0) {
    gameOver = true;
    timerEl.classList.add("text-red-500");
    timerEl.textContent = "time is up!";
    clearInterval(intervalId);
    cards.forEach((el) => {
      el.querySelector("img").classList.remove("opacity-0");
    });
    setTimeout(() => {
      alert(`Game Over! Your score is ${score}`);
    }, 600);
  }
}, 1000);
