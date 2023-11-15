'use strict';

const inputs = document.querySelectorAll('.input');
const resetInputValue = document.querySelectorAll('.reset');

resetInputValue.forEach((el) => {
  el.addEventListener('click', () => {
    el.previousElementSibling.value = '';
  });
});
