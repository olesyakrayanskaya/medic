/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/main.scss */ \"./src/main.scss\");\n/* harmony import */ var _src_js_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/input */ \"./src/js/input.js\");\n/* harmony import */ var _src_js_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_input__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_js_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/modal */ \"./src/js/modal.js\");\n/* harmony import */ var _src_js_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_js_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/js/slider */ \"./src/js/slider.js\");\n/* harmony import */ var _src_js_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_js_slider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_js_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/js/valid */ \"./src/js/valid.js\");\n/* harmony import */ var _src_js_valid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_js_valid__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/***/ (() => {

eval("\n\nconst resetInputValue = document.querySelectorAll('.reset');\nresetInputValue.forEach(el => {\n  el.addEventListener('click', () => {\n    el.previousElementSibling.value = '';\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/input.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

eval("\n\nconst sendForm = document.querySelector('.question__btn');\nconst modal = document.querySelector('.modal');\nconst closeModal = document.querySelector('.modal__close');\nconst ok = document.querySelector('.modal__btn');\nconst form = document.querySelector('.question__form');\nconst inputs = form.querySelectorAll('.input');\nconst checkboxConsent = document.getElementById('consent');\nsendForm.addEventListener('click', event => {\n  event.preventDefault();\n  let valid = true;\n  inputs.forEach(field => {\n    field.checkValidity();\n    valid = valid && field.reportValidity();\n  });\n  if (valid && checkboxConsent.reportValidity()) {\n    modal.style.display = 'flex';\n  }\n});\ncloseModal.addEventListener('click', () => {\n  modal.style.display = 'none';\n});\nok.addEventListener('click', () => {\n  modal.style.display = 'none';\n});\nwindow.addEventListener('click', event => {\n  if (event.target == modal) {\n    modal.style.display = 'none';\n  }\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  const screenWidth = window.innerWidth;\n  const products = document.querySelectorAll('.product-card');\n  const productCount = products.length;\n  const dotsContainer = document.querySelector('.new-products__footer');\n  let productOneSlideCount = 0;\n  let clicks = 0;\n  let slideNumber = 0;\n  if (screenWidth >= 968) {\n    productOneSlideCount = 5;\n  } else if (screenWidth >= 500) {\n    productOneSlideCount = 4;\n  } else if (screenWidth >= 360) {\n    productOneSlideCount = 3;\n  } else {\n    productOneSlideCount = 2;\n  }\n  const prevBtn = document.querySelector('.prev');\n  const nextBtn = document.querySelector('.next');\n  let slidesCount = Math.ceil(productCount / productOneSlideCount);\n  for (let i = 0; i < slidesCount; i++) {\n    const dot = document.createElement('button');\n    dot.className = 'new-products__dot';\n    dotsContainer.append(dot);\n  }\n  function hideAll() {\n    for (let i = 0; i < slidesCount; i++) {\n      products[i].style.display = 'none';\n    }\n  }\n  function slideRight() {\n    for (let i = slideNumber; i < Math.min(productOneSlideCount + slideNumber, products.length); i++) {\n      products[i].style.display = 'none';\n    }\n    slideNumber = Math.min(slideNumber + productOneSlideCount, products.length - productOneSlideCount);\n    for (let i = slideNumber; i < Math.min(productOneSlideCount + slideNumber, products.length); i++) {\n      products[i].style.display = 'flex';\n    }\n  }\n  function slideLeft() {\n    for (let i = slideNumber; i < Math.min(productOneSlideCount + slideNumber, products.length); i++) {\n      products[i].style.display = 'none';\n    }\n    slideNumber = Math.max(slideNumber - productOneSlideCount, 0);\n    for (let i = slideNumber; i < Math.min(productOneSlideCount + slideNumber, products.length); i++) {\n      products[i].style.display = 'flex';\n    }\n  }\n  nextBtn.addEventListener('click', () => {\n    hideAll();\n    slideRight();\n  });\n  prevBtn.addEventListener('click', () => {\n    hideAll();\n    slideLeft();\n  });\n  const dots = document.querySelectorAll('.new-products__dot');\n  for (let i = 0; i < dots.length; i++) {\n    dots[i].addEventListener('click', () => {\n      for (let i = slideNumber; i < Math.min(productOneSlideCount + slideNumber, products.length); i++) {\n        products[i].style.display = 'none';\n      }\n      slideNumber = i * productOneSlideCount;\n      for (let i = slideNumber; i < Math.min(productOneSlideCount + slideNumber, products.length); i++) {\n        products[i].style.display = 'flex';\n      }\n    });\n  }\n  for (let i = productOneSlideCount; i < products.length; i++) {\n    products[i].style.display = 'none';\n  }\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/slider.js?");

/***/ }),

/***/ "./src/js/valid.js":
/*!*************************!*\
  !*** ./src/js/valid.js ***!
  \*************************/
/***/ (() => {

eval("\n\nconst form = document.querySelector('.question__form');\nconst inputs = form.querySelectorAll('.input');\nconst checkboxConsent = document.getElementById('consent');\nconst sendForm = document.querySelector('.question__btn');\ninputs.forEach(input => {\n  input.addEventListener('blur', () => {\n    input.setAttribute('required', '');\n  });\n});\ncheckboxConsent.addEventListener('blur', () => {\n  checkboxConsent.setAttribute('required', '');\n});\nsendForm.addEventListener('mousedown', () => {\n  checkboxConsent.setAttribute('required', '');\n  inputs.forEach(input => {\n    input.setAttribute('required', '');\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/valid.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;