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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Administrator on 2017/6/10 0010.
 */
class refn{
    constructor(cls){
        this.el=document.querySelector(cls);
        this.box=this.el.querySelectorAll('.box p input');
        this.cks=this.el.querySelectorAll('.cks');
        this.reset=this.el.querySelector('.reset');
        this.star=this.el.querySelector('.star');
        this.datas=[];
        this.bindEvent();

    }
    bindEvent(){
        console.log(localStorage);
        this.reset.addEventListener('click',()=>{
            this.box[0].checked="checked";
            for(let v of this.cks){
                v.checked=false;
            }
        })
        this.star.addEventListener('click',()=>{
            for(let x of this.box){
                if(x.checked==true){
                    this.datas=[];
                    this.datas.push(x.parentElement.querySelector('label').getAttribute('data'))
                }
            }
            for(let x of this.cks){
                if(x.checked==true){
                    this.datas.push(x.parentElement.innerText)
                }
            }
            localStorage.setItem('lastname', this.datas);
            console.log(localStorage);
        })
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = refn;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_module1_js__ = __webpack_require__(0);
/**
 * Created by Administrator on 2017/6/10 0010.
 */

new __WEBPACK_IMPORTED_MODULE_0__js_module1_js__["a" /* default */]('.list');

/***/ })
/******/ ]);