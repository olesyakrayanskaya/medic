'use strict';

const sendForm = document.querySelector('.question__btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const ok = document.querySelector('.modal__btn');

sendForm.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

ok.addEventListener('click', () => {
    modal.style.display = 'none';
  });

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
