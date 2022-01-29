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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timeConversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeConversion */ \"./src/timeConversion.ts\");\n// import sockMerchant from './sockMerchant';\r\n// import countingValleys from './countingValleys';\r\n// import jumpingOnClouds from './jumpingOnClouds';\r\n// import repeatedString from './repeatedString';\r\n// import hourglassSum from './hourglassSum';\r\n// import rotLeft from './rotLeft';\r\n// import minimumBribes from './minimumBribes';\r\n// import checkMagazine from './checkMagazine';\r\n// import twoStrings from './twoStrings';\r\n// import sherlockAndAnagrams from './sherlockAndAnagrams';\r\n// import countSwaps from './countSwaps';\r\n// const socksTest1 = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 4]);\r\n// const socksTest2 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);\r\n// console.log('socksTest1:', socksTest1);\r\n// console.log('socksTest2:', socksTest2);\r\n// const valleysTest1 = countingValleys(8, 'UDDDUDUU');\r\n// const valleysTest2 = countingValleys(12, 'DDUUDDUDUUUD');\r\n// console.log('valleysTest1:', valleysTest1);\r\n// console.log('valleysTest2:', valleysTest2);\r\n// const jumpingTest1 = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);\r\n// const jumpingTest2 = jumpingOnClouds([0, 0, 0, 1, 0, 0]);\r\n// console.log('jumpingTest1:', jumpingTest1);\r\n// console.log('jumpingTest2:', jumpingTest2);\r\n// const test1 = repeatedString('aba', 10);\r\n// const test2 = repeatedString('a', 1000000000000);\r\n// console.log('test1:', test1);\r\n// console.log('test2:', test2);\r\n// const hourglassTest1 = hourglassSum([\r\n//   [1, 1, 1, 0, 0, 0],\r\n//   [0, 1, 0, 0, 0, 0],\r\n//   [1, 1, 1, 0, 0, 0],\r\n//   [0, 0, 2, 4, 4, 0],\r\n//   [0, 0, 0, 2, 0, 0],\r\n//   [0, 0, 1, 2, 4, 0],\r\n// ]);\r\n// const hourglassTest2 = hourglassSum([\r\n//   [1, 1, 1, 0, 0, 0],\r\n//   [0, 1, 0, 0, 0, 0],\r\n//   [1, 1, 1, 0, 0, 0],\r\n//   [0, 9, 2, -4, -4, 0],\r\n//   [0, 0, 0, -2, 0, 0],\r\n//   [0, 0, -1, -2, -4],\r\n// ]);\r\n// const hourglassTest3 = hourglassSum([\r\n//   [-1, 1, -1, 0, 0, 0],\r\n//   [0, -1, 0, 0, 0, 0],\r\n//   [-1, -1, -1, 0, 0, 0],\r\n//   [0, -9, 2, -4, -4, 0],\r\n//   [-7, 0, 0, -2, 0, 0],\r\n//   [0, 0, -1, -2, -4, 0],\r\n// ]);\r\n// console.log('hourglassTest1:', hourglassTest1);\r\n// console.log('hourglassTest2:', hourglassTest2);\r\n// console.log('hourglassTest3:', hourglassTest3);\r\n// const rotLeftTest1 = rotLeft([1, 2, 3, 4, 5], 4);\r\n// minimumBribes([2, 1, 5, 3, 4]);\r\n// minimumBribes([2, 5, 1, 3, 4]);\r\n// minimumBribes([2, 5, 1, 4, 3]);\r\n// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);\r\n// checkMagazine(\r\n//   ['give', 'me', 'one', 'grand', 'today', 'night'],\r\n//   ['give', 'one', 'grand', 'today']\r\n// );\r\n// checkMagazine(\r\n//   ['two', 'times', 'three', 'is', 'not', 'four'],\r\n//   ['two', 'times', 'two', 'is', 'four']\r\n// );\r\n// checkMagazine(\r\n//   ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],\r\n//   ['ive', 'got', 'some', 'coconuts']\r\n// );\r\n// const twoStringsTest1 = twoStrings('hello', 'world');\r\n// const twoStringsTest2 = twoStrings('hi', 'world');\r\n// console.log('twoStringsTest1:', twoStringsTest1);\r\n// console.log('twoStringsTest2:', twoStringsTest2);\r\n// const anagramTest1 = sherlockAndAnagrams()\r\n// countSwaps([1, 2, 3]);\r\n// const countSwapsTest2 = countSwaps([3, 2, 1]);\r\n// import fizzBuzz from './fizzBuzz';\r\n// fizzBuzz(15);\r\n// import findMedian from './findMedian';\r\n// const test1 = findMedian([0, 1, 2, 4, 6, 5, 3]);\r\n// console.log('test1:', test1);\r\n// import plusMinus from './plusMinus';\r\n// plusMinus([-4, 3, -9, 0, 4, 1]);\r\n// import minMaxSum from './minMaxSum';\r\n// // minMaxSum([1, 3, 5, 7, 9]);\r\n// // minMaxSum([1, 2, 3, 4, 5]);\r\n// minMaxSum([7, 69, 2, 221, 8974]);\r\n\r\nvar timeTest1 = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('12:01:00PM');\r\nvar timeTest2 = (0,_timeConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('07:05:45PM');\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/timeConversion.ts":
/*!*******************************!*\
  !*** ./src/timeConversion.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timeConversion(s) {\r\n    var a = !!s.match(/AM/g) ? 'AM' : 'PM';\r\n    var _a = s.slice(0, -2).split(':'), h = _a[0], min = _a[1], sec = _a[2];\r\n    var hr = parseInt(h);\r\n    if (hr === 12) {\r\n        if (a === 'PM') {\r\n            return \"\".concat(hr.toString(), \":\").concat(min, \":\").concat(sec);\r\n        }\r\n        else {\r\n            return \"00:\".concat(min, \":\").concat(sec);\r\n        }\r\n    }\r\n    if (a === 'PM') {\r\n        return \"\".concat((hr + 12).toString(), \":\").concat(min, \":\").concat(sec);\r\n    }\r\n    return \"\".concat(h, \":\").concat(min, \":\").concat(sec);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeConversion);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/timeConversion.ts?");

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