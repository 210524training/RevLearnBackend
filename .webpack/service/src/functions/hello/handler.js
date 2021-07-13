/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/hello/handler.ts":
/*!****************************************!*\
  !*** ./src/functions/hello/handler.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/lambda */ \"./src/libs/lambda.ts\");\n\r\n\r\n\r\nfunction uploadObject(objectName, objectData) {\r\n}\r\nconst hello = async (event) => {\r\n    uploadObject('this_is_the_name/test', 'This is the content');\r\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\r\n        message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,\r\n        event,\r\n    });\r\n};\r\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(hello);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXZMZWFybkJhY2tlbmQvLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hhbmRsZXIudHM/OTIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkayc7XHJcbmltcG9ydCB0eXBlIHsgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudCB9IGZyb20gJy4uLy4uL2xpYnMvYXBpR2F0ZXdheSc7XHJcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJy4uLy4uL2xpYnMvYXBpR2F0ZXdheSc7XHJcblxyXG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSAnLi4vLi4vbGlicy9sYW1iZGEnO1xyXG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vc2NoZW1hJztcclxuXHJcbi8qIGNvbnN0IEJVQ0tFVE5BTUU6IHN0cmluZyA9ICdyZXZsZWFybmJhY2tlbmQtZGV2LXNlcnZlcmxlc3NkZXBsb3ltZW50YnVja2V0LTFpbXdid3UyY3A5ZWonO1xyXG5jb25zdCBJQU1fVVNFUl9LRVk6IHN0cmluZyA9ICdBS0lBVk5DSjZFUUVZQU9BTENPMic7XHJcbmNvbnN0IElBTV9VU0VSX1NFQ1JFVDogc3RyaW5nID0gJ3VWUjQxQ1ViRXB0ZUhHSjZLTVF5dHMwR3J0MG96SG5MQXRYTUpsNk4nO1xyXG5cclxuY29uc3QgczNidWNrZXQgPSBuZXcgQVdTLlMzKHtcclxuICBhY2Nlc3NLZXlJZDogSUFNX1VTRVJfS0VZLFxyXG4gIHNlY3JldEFjY2Vzc0tleTogSUFNX1VTRVJfU0VDUkVULFxyXG59KTsgKi9cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZE9iamVjdChvYmplY3ROYW1lLCBvYmplY3REYXRhKSB7XHJcbiAgLyogY29uc3QgcGFyYW1zOiBBV1MuUzMuUHV0T2JqZWN0UmVxdWVzdCA9IHtcclxuICAgIEJ1Y2tldDogQlVDS0VUTkFNRSxcclxuICAgIEtleTogb2JqZWN0TmFtZSxcclxuICAgIEJvZHk6IG9iamVjdERhdGEsXHJcbiAgfTtcclxuXHJcbiAgczNidWNrZXQudXBsb2FkKHBhcmFtcywgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICBjb25zb2xlLmxvZyhgRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkgYXQgJHtkYXRhLkxvY2F0aW9ufWApO1xyXG4gIH0pOyAqL1xyXG59XHJcblxyXG5jb25zdCBoZWxsbzogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIHVwbG9hZE9iamVjdCgndGhpc19pc190aGVfbmFtZS90ZXN0JywgJ1RoaXMgaXMgdGhlIGNvbnRlbnQnKTtcclxuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcclxuICAgIG1lc3NhZ2U6IGBIZWxsbyAke2V2ZW50LmJvZHkubmFtZX0sIHdlbGNvbWUgdG8gdGhlIGV4Y2l0aW5nIFNlcnZlcmxlc3Mgd29ybGQhYCxcclxuICAgIGV2ZW50LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGNvbnN0IG1haW4gPSBtaWRkeWZ5KGhlbGxvKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQVlBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/hello/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => ({\r\n    statusCode: 200,\r\n    body: JSON.stringify(response),\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmV2TGVhcm5CYWNrZW5kLy4vc3JjL2xpYnMvYXBpR2F0ZXdheS50cz82MjUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXHJcbmltcG9ydCB0eXBlIHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xyXG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tICdqc29uLXNjaGVtYS10by10cyc7XHJcblxyXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XHJcbmV4cG9ydCB0eXBlIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBIYW5kbGVyPFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+LCBBUElHYXRld2F5UHJveHlSZXN1bHQ+XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gKHtcclxuICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxyXG59KTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst middyfy = (handler) => {\r\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXZMZWFybkJhY2tlbmQvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1ib2R5LXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IG1pZGR5IGZyb20gJ0BtaWRkeS9jb3JlJztcclxuaW1wb3J0IG1pZGR5SnNvbkJvZHlQYXJzZXIgZnJvbSAnQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlcic7XHJcbmltcG9ydCB7IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgfSBmcm9tICcuL2FwaUdhdGV3YXknO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcjogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx7IHJlYWRvbmx5IHR5cGU6ICdvYmplY3QnOyByZWFkb25seSBwcm9wZXJ0aWVzOiB7IHJlYWRvbmx5IG5hbWU6IHsgcmVhZG9ubHkgdHlwZTogJ3N0cmluZyc7IH07IH07IHJlYWRvbmx5IHJlcXVpcmVkOiByZWFkb25seSBbJ25hbWUnXTsgfT4pID0+IHtcclxuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSk7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/hello/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;