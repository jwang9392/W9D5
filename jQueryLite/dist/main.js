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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collections.js":
/*!*************************************!*\
  !*** ./src/dom_node_collections.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.array = array;\n  }\n\n  html(str) {\n    if (str === undefined) {\n      return this.array[0].innerHTML;\n    } else {\n      this.array.forEach (el => {\n        el.innerHTML = str;\n      });\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(arg) {\n    if (arg instanceof DOMNodeCollection) {\n      this.array.forEach(el => {\n        arg.array.forEach(node => {\n          let clone = node.cloneNode(true);\n          el.appendChild(clone);\n        });\n      });\n    } else if (arg instanceof HTMLElement) {\n      this.array.forEach(el => {\n        let clone = arg.cloneNode(true);\n        el.appendChild(clone);\n      });\n    } else if (typeof arg === 'string') {\n      this.array.forEach(el => {\n        el.innerHTML += arg;\n      });\n    }\n  }\n\n  addClass(str) {\n    this.array.forEach(el => {\n      el.className = str;\n    });\n  }\n\n  removeClass() {\n    this.array.forEach(el => {\n      el.className = \"\";\n    });\n  }\n\n  attr(k, v) {\n    // debugger\n    if (v === undefined) {\n      return this.array[0].getAttribute(k);\n    } else {\n      this.array.forEach(el => {\n        el.setAttribute(k, v);\n      });\n    }\n  }\n\n  children() {\n    let kids = [];\n\n    this.array.forEach(el => {\n      kids.push(el.children);\n    });\n\n    return new DOMNodeCollection(kids);\n  }\n\n  parent() {\n    let parents = [];\n\n    this.array.forEach(el => {\n      parents.push(el.parentElement);\n    });\n\n    return new DOMNodeCollection(parents);\n  }\n\n  find(selector) {\n    let foundArr = [];\n\n    this.array.forEach(el => {  \n      foundArr = foundArr.concat(Array.from(el.querySelectorAll(selector)));\n    });\n\n    return new DOMNodeCollection(foundArr);\n  }\n\n  remove() {\n    this.array.forEach(el => {\n      el.innerHTML = \"\";\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collections.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collections.js */ \"./src/dom_node_collections.js\");\n\nwindow.$l = function(arg) {\n  if (typeof arg === 'string') {\n    let arr = Array.from(document.querySelectorAll(arg));\n    return new DOMNodeCollection(arr);\n  } else if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n  }\n\n\n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });