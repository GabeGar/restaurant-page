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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gallery */ \"./src/modules/gallery.js\");\n\n\n\n\n\n(0,_modules_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst tabs = document.querySelectorAll(\"li\");\n\nfunction changeTab(e) {\n    const currentTab = document.querySelector(\".tab_content\");\n    currentTab.classList.remove(\"gallery\");\n    currentTab.textContent = \"\";\n\n    if (e.target.textContent === \"Story\") {\n        (0,_modules_homepage__WEBPACK_IMPORTED_MODULE_0__.storyTab)();\n    }\n\n    if (e.target.textContent === \"Menu\") {\n        (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n\n    if (e.target.textContent === \"Gallery\") {\n        currentTab.classList.remove(\"display_content\");\n        currentTab.classList.add(\"gallery\");\n        (0,_modules_gallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n\n    if (e.target.textContent === \"Contact\") {\n        (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n\n    if (e.target.textContent === \"Order Online\") {\n        location.href = \"https://www.youtube.com/watch?v=dQw4w9WgXcQ\";\n    }\n}\n\ntabs.forEach((tab) => tab.addEventListener(\"click\", changeTab));\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n    const tabContentDiv = document.querySelector(\".tab_content\");\n    tabContentDiv.classList.add(\"display_content\");\n\n    const contactHeader = document.createElement(\"p\");\n    contactHeader.textContent = \"Contact Information\";\n\n    tabContentDiv.appendChild(contactHeader);\n\n    const listInfo = document.createElement(\"ul\");\n    listInfo.style.fontSize = \"1.2rem\";\n\n    for (let i = 0; i < 4; i++) {\n        const li = document.createElement(\"li\");\n        li.style.listStyle = \"none\";\n\n        if (i === 0) {\n            li.textContent = \"Owner: Augustus Caesar The XV\";\n        }\n        if (i === 1) {\n            li.textContent = \"Phone: 7-777-7777-77777\";\n        }\n\n        if (i === 2) {\n            li.textContent = \"Email: fakeEmail@fakemails.com\";\n        }\n\n        if (i === 3) {\n            li.textContent = \"Location: Rome, Italy\";\n        }\n        listInfo.appendChild(li);\n    }\n\n    tabContentDiv.appendChild(listInfo);\n\n    const contactFooter = document.createElement(\"p\");\n    contactFooter.style.fontSize = \"2.2rem\";\n    contactFooter.textContent =\n        \"We're open 24/7, 365 days a year! Every minute of everyday, making pizzas (and burgers, apparently) for you to enjoy; Come on down.\";\n\n    tabContentDiv.appendChild(contactFooter);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/gallery.js":
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gallery)\n/* harmony export */ });\nfunction gallery() {\n    const tabContentDiv = document.querySelector(\".tab_content\");\n    const directoryGallery = \"images/gallery/image\";\n\n    for (let i = 1; i <= 4; i++) {\n        const galleryImg = document.createElement(\"img\");\n\n        if (i === 1) {\n            galleryImg.src = `${directoryGallery}${i}.jpg`;\n            galleryImg.alt = \"Gallery item\";\n            galleryImg.classList.add(\"gallery_img\");\n        }\n\n        if (i === 2) {\n            galleryImg.src = `${directoryGallery}${i}.jpg`;\n            galleryImg.alt = \"Gallery item\";\n            galleryImg.classList.add(\"gallery_img\");\n        }\n\n        if (i === 3) {\n            galleryImg.src = `${directoryGallery}${i}.jpg`;\n            galleryImg.alt = \"Gallery item\";\n            galleryImg.classList.add(\"gallery_img\");\n        }\n\n        if (i === 4) {\n            galleryImg.src = `${directoryGallery}${i}.jpg`;\n            galleryImg.alt = \"Gallery item\";\n            galleryImg.classList.add(\"gallery_img\");\n        }\n\n        tabContentDiv.appendChild(galleryImg);\n    }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/gallery.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ launchHomePage),\n/* harmony export */   \"storyTab\": () => (/* binding */ storyTab)\n/* harmony export */ });\n// content div\nconst mainContentDiv = document.querySelector(\"#content\");\n\nfunction launchHomePage() {\n    createNavigation();\n    storyTab();\n}\n\nfunction createNavigation() {\n    const divList = [];\n\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"page_nav\");\n\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"parent_nav\");\n\n    for (let i = 0; i < 3; i++) {\n        const div = document.createElement(\"div\");\n\n        if (i === 0) {\n            div.classList.add(\"restaurant_title\");\n            div.textContent = \"Pizzeria\";\n            divList.push(div);\n        }\n\n        if (i === 1) {\n            div.classList.add(\"center_links\");\n            // Creates Li's for center div\n            for (let i = 0; i < 4; i++) {\n                const li = document.createElement(\"li\");\n                if (i === 0) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Story\";\n                    li.appendChild(a);\n                }\n                if (i === 1) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Menu\";\n                    li.appendChild(a);\n                }\n                if (i === 2) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Gallery\";\n                    li.appendChild(a);\n                }\n                if (i === 3) {\n                    const a = document.createElement(\"a\");\n                    a.textContent = \"Contact\";\n                    li.appendChild(a);\n                }\n                div.appendChild(li);\n            }\n            divList.push(div);\n        }\n\n        if (i === 2) {\n            div.classList.add(\"right_link\");\n            const li = document.createElement(\"li\");\n            const a = document.createElement(\"a\");\n            a.textContent = \"Order Online\";\n            li.appendChild(a);\n            div.appendChild(li);\n            divList.push(div);\n        }\n    }\n\n    for (let div of divList) {\n        ul.appendChild(div);\n    }\n\n    nav.appendChild(ul);\n    mainContentDiv.appendChild(nav);\n}\n\nfunction storyTab() {\n    const story =\n        \"Here at Pizzeria, we strive to make only the FRESHEST PIZZAS, known to all of rome. We are a family run business, in operation since 1885! The Pizza here is SO good, in fact, Julius Caesar The XV (my uncle, from down the street) even gave us a thumbs up! Can you believe it?!\";\n    if (mainContentDiv.childElementCount < 2) {\n        // will create the first tab content div and never be accessed here.\n        const tabContent = document.createElement(\"div\");\n        tabContent.classList.add(\"tab_content\", \"display_content\");\n        tabContent.textContent = story;\n        mainContentDiv.appendChild(tabContent);\n    } else {\n        // accesses tab content that already exists due to the code above.\n        const tabContent = document.querySelector(\".tab_content\");\n        tabContent.textContent = story;\n    }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n    const priceText = \"S - ???9.99 / M - ???12.99 / L - ???15.99\";\n    const tabContentDiv = document.querySelector(\".tab_content\");\n    tabContentDiv.classList.add(\"display_content\");\n\n    for (let i = 1; i <= 4; i++) {\n        const newImg = document.createElement(\"img\");\n        const menuDescription = document.createElement(\"p\");\n        const pricePara = document.createElement(\"p\");\n        pricePara.setAttribute(\"style\", \"font-size: 1.5rem\");\n\n        if (i === 1) {\n            menuDescription.textContent = \"The Basil & Tomato Pizza Pie\";\n\n            newImg.classList.add(\"menu_img\");\n            newImg.src = `images/menu/image${i}.jpg`;\n            newImg.alt = \"Menu item\";\n            pricePara.textContent = priceText;\n        }\n\n        if (i === 2) {\n            menuDescription.textContent = \"Pepperoni & Sausage Pizza Pie\";\n            newImg.classList.add(\"menu_img\");\n            newImg.src = `images/menu/image${i}.jpg`;\n            newImg.alt = \"Menu item\";\n            pricePara.textContent = priceText;\n        }\n\n        if (i === 3) {\n            menuDescription.textContent = \"The Supreme Pizza Pie\";\n            newImg.classList.add(\"menu_img\");\n            newImg.src = `images/menu/image${i}.jpg`;\n            newImg.alt = \"Menu item\";\n            pricePara.textContent = priceText;\n        }\n\n        if (i === 4) {\n            menuDescription.textContent =\n                \"The... Burger? How'd that get in there? Nobody told me we were selling juicy burgers.\";\n            newImg.classList.add(\"menu_img\");\n            newImg.src = `images/menu/image${i}.jpg`;\n            newImg.alt = \"Menu item\";\n            pricePara.textContent =\n                \"I guess we'll give these out for... ???free.99!\";\n        }\n\n        tabContentDiv.appendChild(menuDescription);\n        tabContentDiv.appendChild(newImg);\n        tabContentDiv.appendChild(pricePara);\n    }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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