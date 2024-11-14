"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_2024_vloom_dev"]("main",{

/***/ "./src/routes/contract/index.ts":
/*!**************************************!*\
  !*** ./src/routes/contract/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContractRoute: () => (/* binding */ ContractRoute)\n/* harmony export */ });\nclass ContractRoute {\n    builder;\n    _mod = '';\n    _params;\n    constructor(builder) {\n        this.builder = builder;\n    }\n    call() {\n        return [\n            contractPage(this, this.builder)\n        ];\n    }\n    update(key, params = {}) { }\n}\nconst contractPage = (route, builder) => {\n    return {\n        path: '/contract',\n        event: () => {\n            return {\n                path: 'contract/main',\n                onload: (element) => {\n                    console.log(element);\n                    return element;\n                },\n                event: {},\n                listner: {}\n            };\n        }\n    };\n};\n\n\n//# sourceURL=webpack://2024.vloom.dev/./src/routes/contract/index.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a7906df3b18cb0ab637")
/******/ })();
/******/ 
/******/ }
);