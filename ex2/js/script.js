let nav_right;

let slides;
let dashes;
let next;
let prev;
let currentSlide = 0;

//wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  slides = document.querySelectorAll(".slide");
  dashes = document.querySelectorAll(".dash");
  next = document.querySelector("#next");
  prev = document.querySelector("#prev");

  nav_right = document.querySelector("#nav-right-mobile");
});

function setSlide(idx) {
  slides[currentSlide].classList.toggle("hide");
  dashes[currentSlide].classList.toggle("active");

  slides[idx].classList.toggle("hide");
  dashes[idx].classList.toggle("active");

  currentSlide = idx;
}

function nextSlide(increment) {
  let idx = currentSlide + increment;
  if (idx < 0 || idx >= slides.length)
    idx = (idx + slides.length) % slides.length;
  setSlide(idx);
}

function toggleMenu() {
  console.log("toggleMenu");
  const nav_right_styles = window.getComputedStyle(nav_right);
  console.log(nav_right_styles.display);

  nav_right.style.display =
    nav_right_styles.display === "flex" ? "none" : "flex";

  console.log(nav_container_styles.display);
}
