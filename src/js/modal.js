'use strict';

const sendForm = document.querySelector('.question__btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const ok = document.querySelector('.modal__btn');
const form = document.querySelector('.question__form');
const inputs = form.querySelectorAll('.input');
const checkboxConsent = document.getElementById('consent');

sendForm.addEventListener('click', (event) => {
  event.preventDefault();
  let valid = true;
  inputs.forEach((field) => {
    field.checkValidity();
    valid = valid && field.reportValidity();
  });
  if (valid && checkboxConsent.reportValidity()) {
    modal.style.display = 'flex';
  }
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
