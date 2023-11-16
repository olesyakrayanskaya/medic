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

eval("\n\nconst screenWidth = window.innerWidth;\nconst products = document.querySelectorAll('.product-card');\nconst productCount = products.length;\nconst dotsContainer = document.querySelector('.new-products__footer');\nconst slides = document.querySelectorAll('.new-products__slide');\nlet productOneSlideCount = 0;\nlet clicks = 0;\nlet slideNumber = 0;\nif (screenWidth >= 968) {\n  productOneSlideCount = 5;\n} else if (screenWidth >= 500) {\n  productOneSlideCount = 4;\n} else if (screenWidth >= 360) {\n  productOneSlideCount = 4;\n} else {\n  productOneSlideCount = 2;\n}\nconst prevBtn = document.querySelector('.prev');\nconst nextBtn = document.querySelector('.next');\nlet slidesCount = Math.ceil(productCount / productOneSlideCount);\n\n// for (let i = 0; i < slidesCount; i++) {\n//   const dot = document.createElement('button');\n//   dot.className = 'new-products__dot';\n//   dotsContainer.append(dot);\n// }\n\nfunction slideRight() {\n  slideNumber += 1;\n  if (slideNumber >= slides.length) {\n    slides[slideNumber - 1].classList.add('new-products__slide_hidden');\n    slideNumber = 0;\n    slides[slideNumber].classList.remove('new-products__slide_hidden');\n  } else {\n    slides[slideNumber - 1].classList.add('new-products__slide_hidden');\n    slides[slideNumber].classList.remove('new-products__slide_hidden');\n  }\n}\nfunction slideLeft() {\n  if (slideNumber <= 0) {\n    slides[slideNumber].classList.add('new-products__slide_hidden');\n    slideNumber = slides.length - 1;\n    slides[slideNumber].classList.remove('new-products__slide_hidden');\n  } else {\n    slides[slideNumber].classList.add('new-products__slide_hidden');\n    slideNumber -= 1;\n    slides[slideNumber].classList.remove('new-products__slide_hidden');\n  }\n}\nnextBtn.addEventListener('click', slideRight());\nprevBtn.addEventListener('click', slideLeft());\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/slider.js?");

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