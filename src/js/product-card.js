'use strict';

const incrementBtns = document.querySelectorAll('.cart-btn__increment');
const decrementBtns = document.querySelectorAll('.cart-btn__decrement');
const maxProductCount = 100;

incrementBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (+btn.previousElementSibling.innerHTML <= maxProductCount) {
      btn.previousElementSibling.innerHTML =
        +btn.previousElementSibling.innerHTML + 1;
    }
  });
});

decrementBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (+btn.nextElementSibling.innerHTML > 0) {
      btn.nextElementSibling.innerHTML = +btn.nextElementSibling.innerHTML - 1;
    }
  });
});
