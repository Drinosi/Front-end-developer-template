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

const scrollAnimate = document.querySelector(".technologies-header");

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 1;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("scroll-reveal");
    }
  }
}

////////////////////////////////////////////////////////////////

const carouselSlide = document.querySelector(".carousel-slider");
const carouselQuotes = document.querySelectorAll(".carousel-slider h1");

const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

let counter = 1;
const size = carouselQuotes[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", function () {
  if (counter >= carouselQuotes.length - 1) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", function () {
  if (carouselQuotes[counter].id === "lastClone") {
    console.log("hi");
    carouselSlide.style.transition = "none";
    counter = carouselQuotes.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselQuotes[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselQuotes.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

