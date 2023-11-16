'use strict';

document.addEventListener('DOMContentLoaded', function () {
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
    productOneSlideCount = 3;
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
    for (
      let i = slideNumber;
      i < Math.min(productOneSlideCount + slideNumber, products.length);
      i++
    ) {
      products[i].style.display = 'none';
    }

    slideNumber = Math.min(
      slideNumber + productOneSlideCount,
      products.length - productOneSlideCount
    );

    for (
      let i = slideNumber;
      i < Math.min(productOneSlideCount + slideNumber, products.length);
      i++
    ) {
      products[i].style.display = 'flex';
    }
  }

  function slideLeft() {
    for (
      let i = slideNumber;
      i < Math.min(productOneSlideCount + slideNumber, products.length);
      i++
    ) {
      products[i].style.display = 'none';
    }

    slideNumber = Math.max(slideNumber - productOneSlideCount, 0);

    for (
      let i = slideNumber;
      i < Math.min(productOneSlideCount + slideNumber, products.length);
      i++
    ) {
      products[i].style.display = 'flex';
    }
  }

  nextBtn.addEventListener('click', () => {
    hideAll();
    slideRight();
  });

  prevBtn.addEventListener('click', () => {
    hideAll();
    slideLeft();
  });

  const dots = document.querySelectorAll('.new-products__dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      for (
        let i = slideNumber;
        i < Math.min(productOneSlideCount + slideNumber, products.length);
        i++
      ) {
        products[i].style.display = 'none';
      }

      slideNumber = i * productOneSlideCount;

      for (
        let i = slideNumber;
        i < Math.min(productOneSlideCount + slideNumber, products.length);
        i++
      ) {
        products[i].style.display = 'flex';
      }
    });
  }

  for (let i = productOneSlideCount; i < products.length; i++) {
    products[i].style.display = 'none';
  }
});
