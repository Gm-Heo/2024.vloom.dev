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

/***/ "./src/routes/project/index.ts":
/*!*************************************!*\
  !*** ./src/routes/project/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectRoute: () => (/* binding */ ProjectRoute)\n/* harmony export */ });\nclass ProjectRoute {\n    builder;\n    _mod = '';\n    _params;\n    constructor(builder) {\n        this.builder = builder;\n    }\n    call() {\n        return [\n            projectPage(this, this.builder)\n        ];\n    }\n    update(key, params = {}) {\n        //nothing to do \n    }\n}\nconst projectPage = (route, builder) => {\n    return {\n        path: '/project',\n        event: () => {\n            return {\n                path: 'project/main',\n                onload: (element) => {\n                    console.log('project path');\n                    console.log(element);\n                    return element;\n                },\n                event: {},\n                listner: {}\n            };\n        }\n    };\n};\n\n\n//# sourceURL=webpack://2024.vloom.dev/./src/routes/project/index.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("75e2c242f8ae8590b7ab")
/******/ })();
/******/ 
/******/ }
);