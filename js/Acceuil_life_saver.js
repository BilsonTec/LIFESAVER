// @ts-nocheck

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  carousel.style.transform = `translateX(${-index * 100}%)`; // Correction ici
}

nextBtn.addEventListener("click", () => showSlide(index + 1));
prevBtn.addEventListener("click", () => showSlide(index - 1));

setInterval(() => showSlide(index + 1), 5000);
