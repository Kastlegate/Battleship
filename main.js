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

/***/ "./src/gameboards.js":
/*!***************************!*\
  !*** ./src/gameboards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n  \n\nconst gameboardFactory = () => {\n    \n    //creating the ships for each gameboard\n    const carrier = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Carrier', 5);\n    const battleship = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Battleship', 4);\n    const cruiser = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Cruiser', 3);\n    const submarine = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Submarine', 3);\n    const destroyer = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Destroyer', 2);\n\n    // const row\n    // const column = 10;\n    let gameboard = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), \n    new Array(10), new Array(10), new Array(10), new Array(10)];\n\n    console.log(gameboard)\n\n    for(let row = 0; row < gameboard.length; ++row)\n    {\n        console.log(\"row \" + row)\n       \n        console.log(gameboard)\n        for(let column = 0; column < gameboard[row].length; ++column){\n            console.log(\"column: \" + column)\n            gameboard[row][column] = \"water\";\n        }\n    }\n\n    \n\n\n\n\n    return { gameboard }\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n/* harmony import */ var _gameboards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboards.js */ \"./src/gameboards.js\");\n  \n\n\nconst battleship = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Battleship', 4);\nconst gameboard = (0,_gameboards_js__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)();\nconsole.log(battleship.shipName);\nconsole.log(battleship.hitBoxPosition[2]);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\n//Ship factory function\nconst shipFactory = (name, shipHitBoxes) => {\n    //getting the name of the ship\n    let shipName = name;\n\n    //an array that houses each hitbox's position on the ship\n    let hitBoxPosition = new Array();\n    // for loop that creates each hotbox for each ship, and sets it being hit to false\n    for (let i = 0; i < shipHitBoxes; i++) {\n        var isHit = false;\n        hitBoxPosition.push(isHit);\n      }  \n      \n    function hit(number){\n      hitBoxPosition[number] = true;\n    }\n\n    function isHitCheck(value){\n      return value === true;\n    }\n\n    function isSunk(){\n      return hitBoxPosition.every(isHitCheck);\n    }\n\n    return { shipName, hitBoxPosition, shipHitBoxes, hit, isSunk }\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

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