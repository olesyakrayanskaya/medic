'use strict';

const screenWidth = window.innerWidth;
const products = document.querySelectorAll('.product-card');
const productCount = products.length;
const dotsContainer = document.querySelector('.new-products__footer');
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

for (let i = 0; i < slidesCount; i++) {
  const dot = document.createElement('button');
  dot.className = 'new-products__dot';
  dotsContainer.append(dot);
}

function hideAll() {
  for (let i = 0; i < slidesCount; i++) {
    products[i].style.display = 'none';
  }
}

function slideRight() {
  slideNumber += productOneSlideCount;
  for (let i = 0; i < productOneSlideCount; i++) {
    if (slideNumber >= productCount) {
      products[slideNumber - i].style.display = 'none';
      slideNumber = 0;
      products[slideNumber + i].style.display = 'flex';
    } else {
      products[slideNumber - i].style.display = 'none';
      products[slideNumber].style.display = 'flex';
    }
  }
}

function slideLeft() {
  if (slideNumber <= 0) {
    products[slideNumber].style.display = 'none';
    for (let i = 1; i < productOneSlideCount; i++) {
      slideNumber = productCount - i;
      products[slideNumber].style.display = 'flex';
    }
  } else {
    for (let i = 0; i < productOneSlideCount; i++) {
      products[slideNumber].style.display = 'none';
      slideNumber -= i;
      products[slideNumber].style.display = 'flex';
    }
  }
}

nextBtn.addEventListener('click', () => {
  hideAll();
  slideRight();
})

prevBtn.addEventListener('click', () => {
  hideAll();
  slideLeft();
})