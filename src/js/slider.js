'use strict';

const screenWidth = window.innerWidth;
const products = document.querySelectorAll('.product-card');
const productCount = products.length;
const dotsContainer = document.querySelector('.new-products__footer');
const slides = document.querySelectorAll('.new-products__slide');
let productOneSlideCount = 0;
let clicks = 0;
let slideNumber = 0;

if (screenWidth >= 968) {
  productOneSlideCount = 5;
} else if (screenWidth >= 500) {
  productOneSlideCount = 4;
} else if (screenWidth >= 360) {
  productOneSlideCount = 4;
} else {
  productOneSlideCount = 2;
}

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slidesCount = Math.ceil(productCount / productOneSlideCount);

// for (let i = 0; i < slidesCount; i++) {
//   const dot = document.createElement('button');
//   dot.className = 'new-products__dot';
//   dotsContainer.append(dot);
// }

function slideRight() {
  slideNumber += 1;
  if (slideNumber >= slides.length) {
    slides[slideNumber - 1].classList.add('new-products__slide_hidden');
    slideNumber = 0;
    slides[slideNumber].classList.remove('new-products__slide_hidden');
  } else {
    slides[slideNumber - 1].classList.add('new-products__slide_hidden');
    slides[slideNumber].classList.remove('new-products__slide_hidden');
  }
}

function slideLeft() {
  if (slideNumber <= 0) {
    slides[slideNumber].classList.add('new-products__slide_hidden');
    slideNumber = slides.length - 1;
    slides[slideNumber].classList.remove('new-products__slide_hidden');
  } else {
    slides[slideNumber].classList.add('new-products__slide_hidden');
    slideNumber -= 1;
    slides[slideNumber].classList.remove('new-products__slide_hidden');
  }
}

nextBtn.addEventListener('click', slideRight());
prevBtn.addEventListener('click', slideLeft());
