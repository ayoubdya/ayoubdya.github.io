let slides = document.querySelectorAll(".slide");
let dashes = document.querySelectorAll(".dash");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let nav_right_mobile = document.querySelector("#nav-right-mobile");

let currentSlide = 0;

const SLIDE_TIMEOUT = 3000;

let intervalID = createInterval();

function createInterval() {
  return setInterval(() => {
    nextSlide(1);
  }, SLIDE_TIMEOUT);
}

function restartInterval() {
  clearInterval(intervalID);
  intervalID = createInterval();
}

function setSlide(idx) {
  slides[currentSlide].classList.toggle("hide");
  dashes[currentSlide].classList.toggle("active");

  slides[idx].classList.toggle("hide");
  dashes[idx].classList.toggle("active");

  currentSlide = idx;
  restartInterval();
}

function nextSlide(increment) {
  let idx = currentSlide + increment;
  if (idx < 0 || idx >= slides.length)
    idx = (idx + slides.length) % slides.length;
  setSlide(idx);
}

function toggleMenu() {
  const nav_right_mobile_styles = window.getComputedStyle(nav_right_mobile);
  console.log(nav_right_mobile_styles.display);

  nav_right_mobile.style.display =
    nav_right_mobile_styles.display === "flex" ? "none" : "flex";

  console.log(nav_container_styles.display);
}
