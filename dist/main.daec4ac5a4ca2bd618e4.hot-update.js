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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContractRoute: () => (/* binding */ ContractRoute)\n/* harmony export */ });\nclass ContractRoute {\n    builder;\n    _mod = '';\n    _params;\n    constructor(builder) {\n        this.builder = builder;\n    }\n    call() {\n        return [\n            contractPage(this, this.builder)\n        ];\n    }\n    update(key, params = {}) { }\n}\nconst contractPage = (route, builder) => {\n    return {\n        path: '/contract',\n        event: () => {\n            return {\n                path: 'contract/main',\n                onload: (element) => {\n                    console.log(element);\n                },\n                event: {},\n                listner: {}\n            };\n        }\n    };\n};\n\n\n//# sourceURL=webpack://2024.vloom.dev/./src/routes/contract/index.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppRoutes: () => (/* binding */ AppRoutes)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/routes/main/index.ts\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/routes/project/index.ts\");\n/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contract */ \"./src/routes/contract/index.ts\");\n\n\n\nconst AppRoutes = (builder, router) => {\n    router.addAll(new _main__WEBPACK_IMPORTED_MODULE_0__.MainRoute(builder));\n    router.addAll(new _project__WEBPACK_IMPORTED_MODULE_1__.ProjectRoute(builder));\n    router.addAll(new _contract__WEBPACK_IMPORTED_MODULE_2__.ContractRoute(builder));\n};\n\n\n//# sourceURL=webpack://2024.vloom.dev/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/project/index.ts":
/*!*************************************!*\
  !*** ./src/routes/project/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectRoute: () => (/* binding */ ProjectRoute)\n/* harmony export */ });\nclass ProjectRoute {\n    builder;\n    _mod = '';\n    _params;\n    constructor(builder) {\n        this.builder = builder;\n    }\n    call() {\n        return [\n            projectPage(this, this.builder)\n        ];\n    }\n    update(key, params = {}) {\n        //nothing to do \n    }\n}\nconst projectPage = (route, builder) => {\n    return {\n        path: '/project',\n        event: () => {\n            return {\n                path: 'project/main',\n                onload: (element) => {\n                    console.log(element);\n                },\n                event: {},\n                listner: {}\n            };\n        }\n    };\n};\n\n\n//# sourceURL=webpack://2024.vloom.dev/./src/routes/project/index.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("437538cfb3781c7fcd11")
/******/ })();
/******/ 
/******/ }
);