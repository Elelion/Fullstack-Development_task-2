/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/templates/button-standard/button-standard__ripple.js":
/*!*********************************************************************!*\
  !*** ./blocks/templates/button-standard/button-standard__ripple.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\n\r\nconst buttons = document.querySelectorAll('.button-standard, .button-arrow');\r\nconst SPAN = document.createElement('span');\r\nlet xPos;\r\nlet yPos;\r\n\r\nfor (let i = 0; i < buttons.length; i += 1) {\r\n    buttons[i].addEventListener('click', function (event) {\r\n        event.preventDefault();\r\n\r\n        // NOTE: create element for a zone for the effect\r\n        \r\n        \r\n        let rippleWidth = this.offsetWidth;\r\n        let rippleHeight = this.offsetHeight;\r\n        let rippleEffect = SPAN.style;\r\n\r\n        // NOTE: make it round. Effect stayed on the borders button\r\n        function rippleFrame() {\r\n            if (rippleWidth >= rippleHeight) {\r\n                rippleHeight = rippleWidth;\r\n            } else {\r\n                rippleWidth = rippleHeight;\r\n            }\r\n        }\r\n\r\n        // NOTE: get the center of the element, for current coordinates\r\n        const rippleDefineHorizonralCoordinates = () => {\r\n            if (event.offsetX === undefined) {\r\n                xPos = event.layerX;\r\n            } else {\r\n                xPos = event.offsetX - rippleWidth / 2;\r\n            }\r\n        }\r\n\r\n        const rippleDefineVerticalCoordinates = () => {\r\n            if (event.offsetY === undefined) {\r\n                yPos = event.layerY;\r\n            } else {\r\n                yPos = event.offsetY - rippleHeight / 2;\r\n            }\r\n        }\r\n\r\n        // NOTE: \r\n        // the starting point from which the effect begins \r\n        // and set its distribution\r\n        const rippleBeginEffect = () => {\r\n            rippleEffect.width = rippleWidth + 'px';\r\n            rippleEffect.height = rippleHeight + 'px';\r\n            rippleEffect.top = yPos + 'px';\r\n            rippleEffect.left = xPos + 'px';\r\n        }\r\n        \r\n        const rippleApplyCssEffect = () => {\r\n            SPAN.className = 'ripple';\r\n        }\r\n\r\n        rippleFrame();\r\n        rippleDefineHorizonralCoordinates();\r\n        rippleDefineVerticalCoordinates();\r\n        rippleBeginEffect();\r\n        rippleApplyCssEffect();\r\n\r\n        this.appendChild(SPAN);\r\n    });\r\n}\n\n//# sourceURL=webpack:///./blocks/templates/button-standard/button-standard__ripple.js?");

/***/ }),

/***/ "./blocks/templates/chart-percentage/chart-percentage.js":
/*!***************************************************************!*\
  !*** ./blocks/templates/chart-percentage/chart-percentage.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\n\n// TODO: sel, el - what it is ?\nconst CIRCLE = function(chartName) {\n    var circles = document.querySelectorAll(chartName);\n    [].forEach.call(circles,function(chartDraw) {\n        let valEl = parseFloat(chartDraw.innerHTML);\n        valEl = valEl * 754 / 100;        \n        chartDraw.innerHTML = `<svg width=\"260\" height=\"260\">\n            <circle transform=\"rotate(-90)\" \n            style=\"stroke-dasharray: 754px;\" \n            r=\"120\" cx=\"-130\" cy=\"130\" />\n            \n            <circle transform=\"rotate(-90)\" \n            style=\"stroke-dasharray:` + valEl + \n            `px 754px;\" r=\"120\" cx=\"-130\" cy=\"130\" /></svg>`;      \n        });\n    };\n\nCIRCLE('.chart-percentages__draw-svg');\n\n//# sourceURL=webpack:///./blocks/templates/chart-percentage/chart-percentage.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************!*\
  !*** multi ./blocks/templates/button-standard/button-standard__ripple.js ./blocks/templates/chart-percentage/chart-percentage.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./blocks/templates/button-standard/button-standard__ripple.js */\"./blocks/templates/button-standard/button-standard__ripple.js\");\nmodule.exports = __webpack_require__(/*! ./blocks/templates/chart-percentage/chart-percentage.js */\"./blocks/templates/chart-percentage/chart-percentage.js\");\n\n\n//# sourceURL=webpack:///multi_./blocks/templates/button-standard/button-standard__ripple.js_./blocks/templates/chart-percentage/chart-percentage.js?");

/***/ })

/******/ });