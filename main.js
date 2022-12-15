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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage */ \"./src/modules/homepage.js\");\n\n\n(0,_modules_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ launchHomePage)\n/* harmony export */ });\n// content div\nconst mainContentDiv = document.querySelector(\"#content\");\n\nfunction launchHomePage() {\n    createNavigation();\n    createStory();\n}\n\nfunction createNavigation() {\n    const divList = [];\n\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"page_nav\");\n\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"parent_nav\");\n\n    for (let i = 0; i < 3; i++) {\n        const div = document.createElement(\"div\");\n\n        if (i === 0) {\n            div.classList.add(\"left_link\");\n            div.textContent = \"Pizzeria\";\n            divList.push(div);\n        }\n\n        if (i === 1) {\n            div.classList.add(\"center_links\");\n            // Creates Li's for center div\n            for (let i = 0; i < 4; i++) {\n                const li = document.createElement(\"li\");\n                if (i === 0) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Story\";\n                    li.appendChild(a);\n                }\n                if (i === 1) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Menu\";\n                    li.appendChild(a);\n                }\n                if (i === 2) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Gallery\";\n                    li.appendChild(a);\n                }\n                if (i === 3) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Contact\";\n                    li.appendChild(a);\n                }\n                div.appendChild(li);\n            }\n            divList.push(div);\n        }\n\n        if (i === 2) {\n            div.classList.add(\"right_link\");\n            const li = document.createElement(\"li\");\n            const a = document.createElement(\"a\");\n            a.textContent = \"Order Online\";\n            li.appendChild(a);\n            div.appendChild(li);\n            divList.push(div);\n        }\n    }\n\n    for (let div of divList) {\n        ul.appendChild(div);\n    }\n\n    nav.appendChild(ul);\n    mainContentDiv.appendChild(nav);\n}\n\nfunction createStory() {\n    const parentDiv = document.createElement(\"div\");\n    parentDiv.classList.add(\"tab_content\");\n\n    const childDiv = document.createElement(\"div\");\n    childDiv.classList.add(\"story_content\");\n    childDiv.textContent =\n        \"Here at Pizzeria, we strive to make only the FRESHEST PIZZA, known to all of rome. We are a family run business, in operation since 1912! The Pizza here is SO good, in fact, Julius Caesar (from down the street) even gave us a thumbs up! Can you believe it?!\";\n\n    parentDiv.appendChild(childDiv);\n    mainContentDiv.appendChild(parentDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/homepage.js?");

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