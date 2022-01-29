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

/***/ "./src/hourglassSum.ts":
/*!*****************************!*\
  !*** ./src/hourglassSum.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nfunction hourglassSum(arr) {\r\n    var hourGlassSumArray = [];\r\n    for (var row = 0; row < arr.length; row++) {\r\n        var rowCurrent = arr[row];\r\n        var rowNext = arr[row + 1];\r\n        var rowAfterNext = arr[row + 2];\r\n        for (var i = 0; i < rowCurrent.length; i++) {\r\n            console.log('rowCurrent:', rowCurrent[i + 2]);\r\n            console.log('rowAfterNext:', rowAfterNext[i + 2]);\r\n            if (!!rowCurrent[i + 2] && !!rowAfterNext[i + 2]) {\r\n                console.log('test');\r\n                var top_1 = rowCurrent[i] + rowCurrent[i + 1] + rowCurrent[i + 2];\r\n                var middle = rowNext[i + 1];\r\n                var bottom = rowAfterNext[i] + rowAfterNext[i + 1] + rowAfterNext[i + 2];\r\n                var sum = top_1 + middle + bottom;\r\n                if (!isNaN(sum)) {\r\n                    hourGlassSumArray = __spreadArray(__spreadArray([], hourGlassSumArray, true), [sum], false);\r\n                }\r\n            }\r\n        }\r\n        // console.log('hourGlassSumArray:', hourGlassSumArray);\r\n    }\r\n    console.log('bal');\r\n    console.log('hourGlassSumArray:', hourGlassSumArray);\r\n    return 7;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hourglassSum);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/hourglassSum.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hourglassSum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hourglassSum */ \"./src/hourglassSum.ts\");\n\r\n// const socksTest1 = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 4]);\r\n// const socksTest2 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);\r\n// console.log('socksTest1:', socksTest1);\r\n// console.log('socksTest2:', socksTest2);\r\n// const valleysTest1 = countingValleys(8, 'UDDDUDUU');\r\n// const valleysTest2 = countingValleys(12, 'DDUUDDUDUUUD');\r\n// console.log('valleysTest1:', valleysTest1);\r\n// console.log('valleysTest2:', valleysTest2);\r\n// const jumpingTest1 = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);\r\n// const jumpingTest2 = jumpingOnClouds([0, 0, 0, 1, 0, 0]);\r\n// console.log('jumpingTest1:', jumpingTest1);\r\n// console.log('jumpingTest2:', jumpingTest2);\r\n// const test1 = repeatedString('aba', 10);\r\n// const test2 = repeatedString('a', 1000000000000);\r\n// console.log('test1:', test1);\r\n// console.log('test2:', test2);\r\nvar hourglassTest1 = (0,_hourglassSum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\r\n    [1, 1, 1, 0, 0, 0],\r\n    [0, 1, 0, 0, 0, 0],\r\n    [1, 1, 1, 0, 0, 0],\r\n    [0, 0, 2, 4, 4, 0],\r\n    [0, 0, 0, 2, 0, 0],\r\n    [0, 0, 1, 2, 4, 0],\r\n]);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;