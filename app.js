"use strict";

const abouth1 = document.querySelector(".about-h1");
const aboutp = document.querySelector(".about-p");
const logo = document.querySelector(".logo");

const timeOut = setTimeout(function () {
  abouth1.classList.add("about-show-h1");
  aboutp.classList.add("about-show-p");
  logo.classList.add("logo-show");
}, 500);

const emAnime = document.querySelector(".em-animation");

const emFunction = () => emAnime.classList.toggle("em-shake");
let timer3 = setInterval(emFunction, 1000);

const buttonFade = document.querySelector(".hire-button");

const animateButton = setTimeout(function () {
  buttonFade.classList.add("button-active");
}, 2000);

const techDiv = document.querySelector(".click-me");

const loopAnimation = function () {
  techDiv.classList.toggle("click-me-toggle");
};

const loopAnimation2 = function () {
  nextBtn.classList.toggle("btn-toggler");
  prevBtn.classList.toggle("btn-toggler-2");
};

let timer2 = setInterval(loopAnimation2, 500);
let timer = setInterval(loopAnimation, 500);

const jsIcon = document.querySelector(".firstIcon");
const htmlIcon = document.querySelector(".secondIcon");
const cssIcon = document.querySelector(".thirdIcon");
const logos2 = document.querySelector(".technologies-logos-2");

techDiv.addEventListener("click", function () {
  jsIcon.classList.toggle("firstIcon-active");
  htmlIcon.classList.toggle("firstIcon-active");
  cssIcon.classList.toggle("secondIcon-active");
  logos2.classList.toggle("technologies-logos-2-show");
});

////////////////////////////////////////////////////////////////

const carouselSlide = document.querySelector(".carousel-container");
const carouselQuotes = document.querySelectorAll(".slide");

const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

let counter = 0;
const size = carouselQuotes.length;

const goToSlide = function (slide) {
  carouselQuotes.forEach((curr, i) => {
    curr.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(counter);

const nextSlide = function (slide) {
  if (counter === size - 1) {
    counter = 0;
  } else {
    counter++;
  }
  goToSlide(counter);
};

const prevSlide = function () {
  if (counter === 0) {
    counter = size - 1;
  } else {
    counter--;
  }
  goToSlide(counter);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
});




const intoView = document.querySelector(".into-view");
const footer = document.querySelector("#footer");

intoView.addEventListener("click", (e) => {
  e.preventDefault();
  footer.scrollIntoView({ behavior: "smooth" });
});

const reveals = document.querySelectorAll(".reveal");

const fadeIn = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log("drinos");
  entry.target.classList.add("scroll-reveal");
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(fadeIn, {
  root: null,
  threshold: 0.5,
});

reveals.forEach((curr) => {
  observer.observe(curr);
});
