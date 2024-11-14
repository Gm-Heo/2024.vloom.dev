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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var afts_dist_main_aft_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! afts/dist/main/aft-builder */ \"./node_modules/afts/dist/main/aft-builder.js\");\n/* harmony import */ var afts_dist_main_aft_builder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(afts_dist_main_aft_builder__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\n\n\nconst errors = {\n    '404': `${window['_prefix']}/error/404`,\n    '400': `${window['_prefix']}/error/400`,\n    '401': `${window['_prefix']}/error/401`,\n    '500': `${window['_prefix']}/error/500`,\n};\nconst whiteList = [\n    `${window['_prefix']}/email/check`\n];\nconst builder = new afts_dist_main_aft_builder__WEBPACK_IMPORTED_MODULE_0__.aftBuilder('', '');\nwindow['builder'] = builder;\n(0,_routes__WEBPACK_IMPORTED_MODULE_1__.AppRoutes)(builder, builder.getRouter());\n//빌드\nbuilder\n    .viewPath('/public/')\n    .errorPages(errors)\n    .container(document.getElementById('content'))\n    .interceptor((path, pageInfo) => {\n    console.log(`access ${path}`);\n})\n    .build(() => {\n    console.log('success to build');\n});\n['aft-event=home', 'aft-event=project', 'aft-event=contact'].forEach(selector => {\n    console.log(selector);\n    document.querySelector(selector).addEventListener('click', (e) => {\n        let target = e.target;\n        location.href = target.getAttribute(selector.split('=')[1]);\n        e.preventDefault();\n    });\n});\nwindow.addEventListener('resize', () => {\n    window['_isMobile'] = window.innerWidth < 1024;\n});\n\n\n//# sourceURL=webpack://2024.vloom.dev/./src/index.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c83ece57db374b8c1ba7")
/******/ })();
/******/ 
/******/ }
);