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

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods */ "./src/methods.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
    ksel.js v0.1
    (c) 2020 Kurachi Shunsuke
    https://twitter.com/KurachiWeb
*/


(function (root, factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    define(function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory;
  } else {
    root.ksel = factory(root);
  }
})(typeof window !== 'undefined' ? window : undefined, function (root) {
  'use strict';

  return new _methods__WEBPACK_IMPORTED_MODULE_0__["default"]();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utls */ "./src/utls.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Ksel = /*#__PURE__*/function () {
  function Ksel() {
    _classCallCheck(this, Ksel);

    this._root = document;
  }

  _createClass(Ksel, [{
    key: "each",
    value: function each(callBackFn) {
      if (typeof callBackFn === 'function') {
        this._elems.elems.forEach(callBackFn);
      }
    }
  }, {
    key: "filter",
    value: function filter(callBackFn) {
      if (typeof callBackFn === 'function') {
        this._elems.elems = this._elems.elems.filter(callBackFn);
      }

      return this;
    } // querySelectorAllなど

  }, {
    key: "setNodeRoot",
    value: function setNodeRoot(node) {
      if (Object(_utls__WEBPACK_IMPORTED_MODULE_0__["isNode"])(node)) this._root = node;
      return this;
    } // 要素を取得

  }, {
    key: "get",
    value: function get(selector) {
      if (!selector) throw new SyntaxError('Empty DOM selector.');
      var nodeList = [];

      try {
        nodeList = this._root.querySelectorAll(selector);
      } catch (e) {
        throw new SyntaxError('Invaild DOM selector.');
      }

      this._elems = Object(_utls__WEBPACK_IMPORTED_MODULE_0__["elemReport"])(nodeList, selector);
      return this;
    } // 要素を生成

  }, {
    key: "new",
    value: function _new(elemNames) {
      var elemNameArr = [];

      if (Array.isArray(elemNames)) {
        elemNameArr = elemNames;
      } else if (elemNames && typeof elemNames === 'string') {
        elemNameArr = [elemNames];
      }

      var newElems = elemNameArr.map(function (elemName) {
        return document.createElement(elemName);
      });
      this._elems = Object(_utls__WEBPACK_IMPORTED_MODULE_0__["elemReport"])(newElems, elemNameArr.join(', '));
      return this;
    } // 属性を設定
    // valueがfalseだと属性を削除

  }, {
    key: "attr",
    value: function attr(attrName) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var iterate;

      if (typeof value === 'function') {
        iterate = value;
      } else if (value !== false) {
        iterate = function iterate(elem) {
          return elem.setAttribute(attrName, value);
        };
      } else {
        iterate = function iterate(elem) {
          return elem.removeAttribute(attrName);
        };
      }

      this.each(iterate);
      return this;
    } // classを追加

  }, {
    key: "addClass",
    value: function addClass(className) {
      Object(_utls__WEBPACK_IMPORTED_MODULE_0__["spacedValueManip"])(this, 'class', className, 'add');
      return this;
    } // classを削除

  }, {
    key: "removeClass",
    value: function removeClass(className) {
      Object(_utls__WEBPACK_IMPORTED_MODULE_0__["spacedValueManip"])(this, 'class', className, 'remove');
      return this;
    } // classを追加

  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return Object(_utls__WEBPACK_IMPORTED_MODULE_0__["spacedValueInclude"])(this, 'class', className);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className, force) {
      if (force != undefined) {
        return Object(_utls__WEBPACK_IMPORTED_MODULE_0__["spacedValueManip"])(this, 'class', className, force ? 'add' : 'remove');
      } else {
        return Object(_utls__WEBPACK_IMPORTED_MODULE_0__["spacedValueManip"])(this, 'class', className, 'toggle');
      }
    }
  }, {
    key: "text",
    value: function text(nodeText) {
      if (Array.isArray(nodeText)) {
        var textArrLen = nodeText.length;
        var textArrIndex = 0;
        this.each(function (elem) {
          elem.textContent = nodeText[textArrIndex];

          if (textArrIndex <= textArrLen) {
            textArrIndex = 0;
          } else {
            textArrIndex++;
          }
        });
        return this;
      } else if (typeof nodeText === 'string') {
        this.each(function (elem) {
          return elem.textContent = nodeText;
        });
        return this;
      } else {
        var textArr = [];
        this.each(function (elem) {
          return textArr.push(elem.textContent);
        });
        return textArr;
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(targetSelector) {
      var appendElems = this._elems;

      this.get(targetSelector)._elems.elems.forEach(function (target) {
        appendElems.elems = appendElems.elems.map(function (elem) {
          return elem.cloneNode(1);
        });
        target.append.apply(appendElems.elems);
      });
    }
  }]);

  return Ksel;
}();

/* harmony default export */ __webpack_exports__["default"] = (Ksel);

/***/ }),

/***/ "./src/utls.js":
/*!*********************!*\
  !*** ./src/utls.js ***!
  \*********************/
/*! exports provided: elemReport, isNode, isArrayLike, invaildElemName, isElemName, arrayUndupli, spacedValueManip, spacedValueInclude */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemReport", function() { return elemReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invaildElemName", function() { return invaildElemName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElemName", function() { return isElemName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayUndupli", function() { return arrayUndupli; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacedValueManip", function() { return spacedValueManip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacedValueInclude", function() { return spacedValueInclude; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//要素オブジェクトのラッパー
var elemReport = function elemReport(nodeList, selector) {
  return {
    elems: _toConsumableArray(isArrayLike(nodeList) ? nodeList : []),
    selector: selector
  };
}; // Nodeかどうか判定

var isNode = function isNode(node) {
  return node instanceof Node;
}; // ArrayまたはArray-likeであるかを判定

var isArrayLike = function isArrayLike(nodeList) {
  return nodeList && typeof nodeList !== 'string' && nodeList[0] != null;
}; // 有効なHTML/XHTML要素名であるかを判定

var invaildElemName = /[^\w-:.]/;
var isElemName = function isElemName(tagName) {
  return tagName && typeof tagName === 'string' && !Number.isInteger(+tagName[0]) && !invaildElemName.test(tagName);
};
var arrayUndupli = function arrayUndupli(arr) {
  return arr.filter(function (value, i, target) {
    return target.indexOf(value) === i;
  });
}; // idとclassのための。スペース区切り属性値に対してadd,remove,has,toggleを行う

var spacedValueManip = function spacedValueManip(thisObj, attr, value, command) {
  var values;

  if (Array.isArray(value)) {
    values = value;
  } else if (typeof value === 'string') {
    values = [value];
  } else {
    throw new SyntaxError('invaild attribute value.');
  }

  if (values.some(function (value) {
    return !isElemName(value);
  })) throw new SyntaxError('Value contains invaild data.');
  thisObj.each(function (elem) {
    var elemValueArr = elem.getAttribute(attr).split(' '),
        elemValueStr;

    if (command === 'add') {
      values.forEach(function (eachValue) {
        return elemValueArr.push(eachValue);
      });
      elemValueStr = arrayUndupli(elemValueArr).join(' ');
      elem.setAttribute(attr, elemValueStr);
    } else if (command === 'remove') {
      elemValueStr = elemValueArr.filter(function (eachValue) {
        return !values.includes(eachValue);
      }).join(' ');
      elem.setAttribute(attr, elemValueStr);
    } else if (command === 'toggle') {
      values.map(function (eachValue) {
        var valueIndex = elemValueArr.indexOf(eachValue);

        if (~valueIndex) {
          elemValueArr.splice(valueIndex, 1);
        } else {
          elemValueArr.push(eachValue);
        }
      });
      elem.setAttribute(attr, elemValueArr.join(' '));
    }
  });
  return thisObj;
};
var spacedValueInclude = function spacedValueInclude(thisObj, attr, value) {
  var hasValue = false;
  thisObj.each(function (elem) {
    var elemValueArr = elem.getAttribute(attr).split(' ');
    if (!hasValue && elemValueArr.includes(value)) hasValue = true;
  });
  return hasValue;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0bHMuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJleHBvcnRzIiwibW9kdWxlIiwia3NlbCIsIndpbmRvdyIsIktzZWwiLCJfcm9vdCIsImRvY3VtZW50IiwiY2FsbEJhY2tGbiIsIl9lbGVtcyIsImVsZW1zIiwiZm9yRWFjaCIsImZpbHRlciIsIm5vZGUiLCJpc05vZGUiLCJzZWxlY3RvciIsIlN5bnRheEVycm9yIiwibm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsImVsZW1SZXBvcnQiLCJlbGVtTmFtZXMiLCJlbGVtTmFtZUFyciIsIkFycmF5IiwiaXNBcnJheSIsIm5ld0VsZW1zIiwibWFwIiwiZWxlbU5hbWUiLCJjcmVhdGVFbGVtZW50Iiwiam9pbiIsImF0dHJOYW1lIiwidmFsdWUiLCJpdGVyYXRlIiwiZWxlbSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImVhY2giLCJjbGFzc05hbWUiLCJzcGFjZWRWYWx1ZU1hbmlwIiwic3BhY2VkVmFsdWVJbmNsdWRlIiwiZm9yY2UiLCJ1bmRlZmluZWQiLCJub2RlVGV4dCIsInRleHRBcnJMZW4iLCJsZW5ndGgiLCJ0ZXh0QXJySW5kZXgiLCJ0ZXh0Q29udGVudCIsInRleHRBcnIiLCJwdXNoIiwidGFyZ2V0U2VsZWN0b3IiLCJhcHBlbmRFbGVtcyIsImdldCIsInRhcmdldCIsImNsb25lTm9kZSIsImFwcGVuZCIsImFwcGx5IiwiaXNBcnJheUxpa2UiLCJOb2RlIiwiaW52YWlsZEVsZW1OYW1lIiwiaXNFbGVtTmFtZSIsInRhZ05hbWUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJ0ZXN0IiwiYXJyYXlVbmR1cGxpIiwiYXJyIiwiaSIsImluZGV4T2YiLCJ0aGlzT2JqIiwiYXR0ciIsImNvbW1hbmQiLCJ2YWx1ZXMiLCJzb21lIiwiZWxlbVZhbHVlQXJyIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJlbGVtVmFsdWVTdHIiLCJlYWNoVmFsdWUiLCJpbmNsdWRlcyIsInZhbHVlSW5kZXgiLCJzcGxpY2UiLCJoYXNWYWx1ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FB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QWIsU0FBTyxDQUFDaEMsSUFBUixDQUFhLFVBQUFILElBQUksRUFBSTtBQUNqQixRQUFNd0MsWUFBWSxHQUFHeEMsSUFBSSxDQUFDeUMsWUFBTCxDQUFrQkwsSUFBbEIsRUFBd0JNLEtBQXhCLENBQThCLEdBQTlCLENBQXJCO0FBQ0EsUUFBSSxDQUFDTSxRQUFELElBQWFSLFlBQVksQ0FBQ0ssUUFBYixDQUFzQi9DLEtBQXRCLENBQWpCLEVBQStDa0QsUUFBUSxHQUFHLElBQVg7QUFDbEQsR0FIRDtBQUlBLFNBQU9BLFFBQVA7QUFDSCxDQVBNLEMiLCJmaWxlIjoia3NlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKiFcbiAgICBrc2VsLmpzIHYwLjFcbiAgICAoYykgMjAyMCBLdXJhY2hpIFNodW5zdWtlXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9LdXJhY2hpV2ViXG4qL1xuXG5pbXBvcnQgS3NlbCBmcm9tICcuL21ldGhvZHMnO1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeShyb290KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3Qua3NlbCA9IGZhY3Rvcnkocm9vdCk7XG4gICAgfVxufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAocm9vdCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gbmV3IEtzZWwoKTtcbn0pOyIsImltcG9ydCB7IGVsZW1SZXBvcnQsIGlzTm9kZSwgaXNBcnJheUxpa2UsIGludmFpbGRFbGVtTmFtZSwgaXNFbGVtTmFtZSwgYXJyYXlVbmR1cGxpLCBzcGFjZWRWYWx1ZU1hbmlwLCBzcGFjZWRWYWx1ZUluY2x1ZGUgfSBmcm9tICcuL3V0bHMnO1xuXG5jbGFzcyBLc2VsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcm9vdCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGVhY2goY2FsbEJhY2tGbikge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxCYWNrRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1zLmVsZW1zLmZvckVhY2goY2FsbEJhY2tGbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXIoY2FsbEJhY2tGbikge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxCYWNrRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1zLmVsZW1zID0gdGhpcy5fZWxlbXMuZWxlbXMuZmlsdGVyKGNhbGxCYWNrRm4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIHF1ZXJ5U2VsZWN0b3JBbGzjgarjgalcbiAgICBzZXROb2RlUm9vdChub2RlKSB7XG4gICAgICAgIGlmIChpc05vZGUobm9kZSkpIHRoaXMuX3Jvb3QgPSBub2RlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyDopoHntKDjgpLlj5blvpdcbiAgICBnZXQoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvcikgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFbXB0eSBET00gc2VsZWN0b3IuJyk7XG4gICAgICAgIGxldCBub2RlTGlzdCA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbm9kZUxpc3QgPSB0aGlzLl9yb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0ludmFpbGQgRE9NIHNlbGVjdG9yLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW1zID0gZWxlbVJlcG9ydChub2RlTGlzdCwgc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyDopoHntKDjgpLnlJ/miJBcbiAgICBuZXcoZWxlbU5hbWVzKSB7XG4gICAgICAgIGxldCBlbGVtTmFtZUFyciA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtTmFtZXMpKSB7XG4gICAgICAgICAgICBlbGVtTmFtZUFyciA9IGVsZW1OYW1lcztcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtTmFtZXMgJiYgdHlwZW9mIGVsZW1OYW1lcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGVsZW1OYW1lQXJyID0gW2VsZW1OYW1lc107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RWxlbXMgPSBlbGVtTmFtZUFyci5tYXAoZWxlbU5hbWUgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtTmFtZSkpO1xuICAgICAgICB0aGlzLl9lbGVtcyA9IGVsZW1SZXBvcnQobmV3RWxlbXMsIGVsZW1OYW1lQXJyLmpvaW4oJywgJykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyDlsZ7mgKfjgpLoqK3lrppcbiAgICAvLyB2YWx1ZeOBjGZhbHNl44Gg44Go5bGe5oCn44KS5YmK6ZmkXG4gICAgYXR0cihhdHRyTmFtZSwgdmFsdWUgPSAnJykge1xuICAgICAgICBsZXQgaXRlcmF0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaXRlcmF0ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaXRlcmF0ZSA9IGVsZW0gPT4gZWxlbS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZXJhdGUgPSBlbGVtID0+IGVsZW0ucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVhY2goaXRlcmF0ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIGNsYXNz44KS6L+95YqgXG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIHNwYWNlZFZhbHVlTWFuaXAodGhpcywgJ2NsYXNzJywgY2xhc3NOYW1lLCAnYWRkJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIGNsYXNz44KS5YmK6ZmkXG4gICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIHNwYWNlZFZhbHVlTWFuaXAodGhpcywgJ2NsYXNzJywgY2xhc3NOYW1lLCAncmVtb3ZlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvLyBjbGFzc+OCkui/veWKoFxuICAgIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gc3BhY2VkVmFsdWVJbmNsdWRlKHRoaXMsICdjbGFzcycsIGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmb3JjZSkge1xuICAgICAgICBpZiAoZm9yY2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BhY2VkVmFsdWVNYW5pcCh0aGlzLCAnY2xhc3MnLCBjbGFzc05hbWUsIGZvcmNlID8gJ2FkZCcgOiAncmVtb3ZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3BhY2VkVmFsdWVNYW5pcCh0aGlzLCAnY2xhc3MnLCBjbGFzc05hbWUsICd0b2dnbGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRleHQobm9kZVRleHQpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZVRleHQpKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QXJyTGVuID0gbm9kZVRleHQubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHRleHRBcnJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IG5vZGVUZXh0W3RleHRBcnJJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHRleHRBcnJJbmRleCA8PSB0ZXh0QXJyTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRBcnJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFyckluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZVRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmVhY2goZWxlbSA9PiBlbGVtLnRleHRDb250ZW50ID0gbm9kZVRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QXJyID0gW107XG4gICAgICAgICAgICB0aGlzLmVhY2goZWxlbSA9PiB0ZXh0QXJyLnB1c2goZWxlbS50ZXh0Q29udGVudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRleHRBcnI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRUbyh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICBjb25zdCBhcHBlbmRFbGVtcyA9IHRoaXMuX2VsZW1zO1xuICAgICAgICB0aGlzLmdldCh0YXJnZXRTZWxlY3RvcikuX2VsZW1zLmVsZW1zLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1zLmVsZW1zID0gYXBwZW5kRWxlbXMuZWxlbXMubWFwKGVsZW0gPT4gZWxlbS5jbG9uZU5vZGUoMSkpO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZC5hcHBseShhcHBlbmRFbGVtcy5lbGVtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS3NlbDsiLCIvL+imgee0oOOCquODluOCuOOCp+OCr+ODiOOBruODqeODg+ODkeODvFxuZXhwb3J0IGNvbnN0IGVsZW1SZXBvcnQgPSAobm9kZUxpc3QsIHNlbGVjdG9yKSA9PiAoe1xuICAgIGVsZW1zOiBbLi4uKGlzQXJyYXlMaWtlKG5vZGVMaXN0KSA/IG5vZGVMaXN0IDogW10pXSxcbiAgICBzZWxlY3RvclxufSk7XG5cbi8vIE5vZGXjgYvjganjgYbjgYvliKTlrppcbmV4cG9ydCBjb25zdCBpc05vZGUgPSBub2RlID0+IG5vZGUgaW5zdGFuY2VvZiBOb2RlO1xuXG4vLyBBcnJheeOBvuOBn+OBr0FycmF5LWxpa2XjgafjgYLjgovjgYvjgpLliKTlrppcbmV4cG9ydCBjb25zdCBpc0FycmF5TGlrZSA9IG5vZGVMaXN0ID0+IChcbiAgICBub2RlTGlzdCAmJlxuICAgIHR5cGVvZiBub2RlTGlzdCAhPT0gJ3N0cmluZycgJiZcbiAgICBub2RlTGlzdFswXSAhPSBudWxsXG4pO1xuXG4vLyDmnInlirnjgapIVE1ML1hIVE1M6KaB57Sg5ZCN44Gn44GC44KL44GL44KS5Yik5a6aXG5leHBvcnQgY29uc3QgaW52YWlsZEVsZW1OYW1lID0gL1teXFx3LTouXS87XG5leHBvcnQgY29uc3QgaXNFbGVtTmFtZSA9IHRhZ05hbWUgPT4gKFxuICAgIHRhZ05hbWUgJiZcbiAgICB0eXBlb2YgdGFnTmFtZSA9PT0gJ3N0cmluZycgJiZcbiAgICAhTnVtYmVyLmlzSW50ZWdlcigrdGFnTmFtZVswXSkgJiZcbiAgICAhaW52YWlsZEVsZW1OYW1lLnRlc3QodGFnTmFtZSlcbik7XG5cbmV4cG9ydCBjb25zdCBhcnJheVVuZHVwbGkgPSBhcnIgPT4gKFxuICAgIGFyci5maWx0ZXIoKHZhbHVlLCBpLCB0YXJnZXQpID0+IHRhcmdldC5pbmRleE9mKHZhbHVlKSA9PT0gaSlcbik7XG5cbi8vIGlk44GoY2xhc3Pjga7jgZ/jgoHjga7jgILjgrnjg5rjg7zjgrnljLrliIfjgorlsZ7mgKflgKTjgavlr77jgZfjgaZhZGQscmVtb3ZlLGhhcyx0b2dnbGXjgpLooYzjgYZcbmV4cG9ydCBjb25zdCBzcGFjZWRWYWx1ZU1hbmlwID0gKHRoaXNPYmosIGF0dHIsIHZhbHVlLCBjb21tYW5kKSA9PiB7XG4gICAgbGV0IHZhbHVlcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWVzID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlcyA9IFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnZhaWxkIGF0dHJpYnV0ZSB2YWx1ZS4nKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5zb21lKHZhbHVlID0+ICFpc0VsZW1OYW1lKHZhbHVlKSkpIHRocm93IG5ldyBTeW50YXhFcnJvcignVmFsdWUgY29udGFpbnMgaW52YWlsZCBkYXRhLicpO1xuICAgIHRoaXNPYmouZWFjaChlbGVtID0+IHtcbiAgICAgICAgbGV0IGVsZW1WYWx1ZUFyciA9IGVsZW0uZ2V0QXR0cmlidXRlKGF0dHIpLnNwbGl0KCcgJyksIGVsZW1WYWx1ZVN0cjtcblxuICAgICAgICBpZiAoY29tbWFuZCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGVhY2hWYWx1ZSA9PiBlbGVtVmFsdWVBcnIucHVzaChlYWNoVmFsdWUpKTtcbiAgICAgICAgICAgIGVsZW1WYWx1ZVN0ciA9IGFycmF5VW5kdXBsaShlbGVtVmFsdWVBcnIpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGF0dHIsIGVsZW1WYWx1ZVN0cik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09PSAncmVtb3ZlJykge1xuICAgICAgICAgICAgZWxlbVZhbHVlU3RyID0gZWxlbVZhbHVlQXJyLmZpbHRlcihlYWNoVmFsdWUgPT4gKFxuICAgICAgICAgICAgICAgICF2YWx1ZXMuaW5jbHVkZXMoZWFjaFZhbHVlKVxuICAgICAgICAgICAgKSkuam9pbignICcpO1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoYXR0ciwgZWxlbVZhbHVlU3RyKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgICB2YWx1ZXMubWFwKGVhY2hWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IGVsZW1WYWx1ZUFyci5pbmRleE9mKGVhY2hWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKH52YWx1ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1WYWx1ZUFyci5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbVZhbHVlQXJyLnB1c2goZWFjaFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGF0dHIsIGVsZW1WYWx1ZUFyci5qb2luKCcgJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXNPYmo7XG59O1xuXG5leHBvcnQgY29uc3Qgc3BhY2VkVmFsdWVJbmNsdWRlID0gKHRoaXNPYmosIGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgbGV0IGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgdGhpc09iai5lYWNoKGVsZW0gPT4ge1xuICAgICAgICBjb25zdCBlbGVtVmFsdWVBcnIgPSBlbGVtLmdldEF0dHJpYnV0ZShhdHRyKS5zcGxpdCgnICcpO1xuICAgICAgICBpZiAoIWhhc1ZhbHVlICYmIGVsZW1WYWx1ZUFyci5pbmNsdWRlcyh2YWx1ZSkpIGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaGFzVmFsdWU7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=