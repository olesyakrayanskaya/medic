'use strict';

const resetInputValue = document.querySelectorAll('.reset');

resetInputValue.forEach((el) => {
  el.addEventListener('click', () => {
    el.previousElementSibling.value = '';
  });
});
