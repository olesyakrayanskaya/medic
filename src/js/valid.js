'use strict';

const form = document.querySelector('.question__form');
const inputs = form.querySelectorAll('.input');
const checkboxConsent = document.getElementById('consent');
const sendForm = document.querySelector('.question__btn');

inputs.forEach((input) => {
  input.addEventListener('blur', () => {
    input.setAttribute('required', '');
  });
});

checkboxConsent.addEventListener('blur', () => {
  checkboxConsent.setAttribute('required', '');
});

sendForm.addEventListener('mousedown', () => {
  checkboxConsent.setAttribute('required', '');
  inputs.forEach((input) => {
    input.setAttribute('required', '');
  });
});
