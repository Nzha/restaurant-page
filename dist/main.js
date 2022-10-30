/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg.jpg */ "./src/img/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n  border: 1px solid red;\n} */\n\nhtml {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    color: #5a5a56;\n    background-color: #f5eadb;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        \"header\"\n        \"main\"\n        \"footer\";\n    margin: 0;\n\n    /* Add top padding for fixed header */\n    padding-top: 2rem;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\na:hover {\n    color: #eab06b;\n}\n\nheader,\nfooter {\n    color: #ccb474;\n    background-color: #403f3c;\n}\n\nheader {\n    grid-area: header;\n    display: flex;\n    justify-content: space-around;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n}\n\n.title {\n    margin: 1rem 0;\n    display: flex;\n    gap: 1ch;\n    font-size: 0.75rem;\n}\n\na.title {\n    color: inherit;\n}\n\nh1 {\n    margin: 0;\n}\n\n/* Hide default checkbox */\ninput[type=checkbox] {\n    display: none;\n    user-select: none;\n}\n\ninput[type=checkbox] ~ nav.menu {\n    opacity: 0;\n    transform: translateY(-20%);\n    transition: all .3s ease-out;\n}\n\n/* When hamburger (checkbox) is clicked, display menu */\ninput[type=checkbox]:checked ~ nav.menu {\n    transform: translateY(0);\n    opacity: 1 !important;\n}\n\n.hamburger {\n    display: flex;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\nheader > div.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Hide menu by default for small screens */\nnav.menu {\n    background-color: #403f3c;\n    position: absolute;\n    top: 3.78rem;\n    right: 0rem;\n}\n\nul.menu {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    width: 100vw;\n    font-size: 1.25rem;\n    font-weight: 600;\n    margin-top: 0.5rem;\n    padding: 0;\n}\n\n.main {\n    grid-area: main;\n    display: flex;\n}\n\n/* HOME PAGE STARTS */\n.bg-img {\n    flex: 1;\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.bg-text {\n    color: white;\n    width: 70%;\n    font-size: 1.2rem;\n    font-weight: 500;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.bg-text > h1 {\n    font-size: 3.5rem;\n}\n/* HOME PAGE ENDS */\n\n/* MENU PAGE STARTS */\n.main.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-header {\n    width: 70%;\n    margin-top: 3rem;\n    text-align: center;\n}\n\n.menu-content {\n    margin-top: 1.5rem;\n    padding: 0 3rem;\n}\n\n.menu-content h2,\n.menu-content h3 {\n    margin: 0;\n}\n\n.menu-content p {\n    margin: 0.25rem 0 1.5rem 0;\n}\n\n.menu-content hr {\n    margin-bottom: 1.5rem;\n    border: none;\n    height: 1px;\n    background-color: #5a5a56;\n}\n/* MENU PAGE ENDS */\n\n/* CONTACT PAGE STARTS */\n.main.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-header {\n    margin: 3rem 0;\n    text-align: center;\n}\n\n.contact-container {\n    color: #f5eadb;\n    display: flex;\n    align-items: center;\n    background-color: #6a6d5a;\n    width: 70%;\n    padding: 2rem;\n    border-radius: 8px;\n}\n\n.contact-container p {\n    margin: 0;\n}\n\n.contact-left-side-container > div {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}\n\n.address,\n.hours,\n.phone,\n.form-title {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.form-title {\n    font-size: 1.25rem;\n    margin-top: 1.5rem;\n}\n\nlabel {\n    font-weight: 500;\n}\n  \ninput,\ntextarea {\n    appearance: none;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: .4rem 0.5rem;\n    background-color: #ebebeb;\n}\n  \ninput:focus,\ntextarea:focus {\n    outline: none;\n    border: 1px solid black;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n}\n\n.contact-form > input {\n    margin: 0.25rem 0 1rem 0;\n}\n\n.contact-form > button {\n    margin-top: 1.5rem;\n    color: white;\n    background-color: #A15B3C;\n    /* font-size: 1rem; */\n    font-weight: 600;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 16px;\n}\n\n.contact-form > button:hover {\n    cursor: pointer;\n    background-color: #CDB575;\n}\n\n/* CONTACT PAGE ENDS */\n\nfooter {\n    grid-area: footer;\n}\n\n@media only screen and (min-width: 700px) {\n    body {\n        /* Add top padding for fixed header */\n        padding-top: 6rem;\n    }\n\n    .title {\n        display: block;\n        font-size: inherit;\n    }\n\n    .title.collapse {\n        display: flex;\n    }\n\n    input[type=checkbox] ~ nav.menu {\n        transform: translateY(0);\n    }\n\n    .hamburger {\n        display: none;\n        user-select: none;\n    }\n\n    nav.menu {\n        opacity: 1 !important;\n        position: static;\n    }\n\n    ul.menu {\n        flex-direction: row;\n        gap: 3rem;\n        width: auto;\n        margin: 0;\n    }\n\n    .bg-img {\n        background-position: 0% 75%;\n    }\n\n    .bg-text {\n        font-size: 1.5rem;\n    }\n\n    .bg-text > h1 {\n        font-size: 4rem;\n    }\n\n    .menu-content {\n        width: 70%;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 4rem;\n    }\n\n    .menu-content hr:nth-child(1) {\n        display: none;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;IACI,sBAAsB;AAC1B;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,cAAc;IACd,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,iCAAiC;IACjC;;;gBAGY;IACZ,SAAS;;IAET,qCAAqC;IACrC,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,MAAM;IACN,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,SAAS;AACb;;AAEA,0BAA0B;AAC1B;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA,uDAAuD;AACvD;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,2CAA2C;AAC3C;IACI,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA,qBAAqB;AACrB;IACI,OAAO;IACP,8GAA0F;IAC1F,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;AACA,mBAAmB;;AAEnB,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,SAAS;AACb;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,yBAAyB;AAC7B;AACA,mBAAmB;;AAEnB,wBAAwB;AACxB;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,UAAU;IACV,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;;;;IAII,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;IAChB,6BAA6B;IAC7B,kBAAkB;IAClB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA,sBAAsB;;AAEtB;IACI,iBAAiB;AACrB;;AAEA;IACI;QACI,qCAAqC;QACrC,iBAAiB;IACrB;;IAEA;QACI,cAAc;QACd,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,aAAa;QACb,iBAAiB;IACrB;;IAEA;QACI,qBAAqB;QACrB,gBAAgB;IACpB;;IAEA;QACI,mBAAmB;QACnB,SAAS;QACT,WAAW;QACX,SAAS;IACb;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,UAAU;QACV,aAAa;QACb,8BAA8B;QAC9B,SAAS;IACb;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["/* * {\n  border: 1px solid red;\n} */\n\nhtml {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    color: #5a5a56;\n    background-color: #f5eadb;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        \"header\"\n        \"main\"\n        \"footer\";\n    margin: 0;\n\n    /* Add top padding for fixed header */\n    padding-top: 2rem;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\na:hover {\n    color: #eab06b;\n}\n\nheader,\nfooter {\n    color: #ccb474;\n    background-color: #403f3c;\n}\n\nheader {\n    grid-area: header;\n    display: flex;\n    justify-content: space-around;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n}\n\n.title {\n    margin: 1rem 0;\n    display: flex;\n    gap: 1ch;\n    font-size: 0.75rem;\n}\n\na.title {\n    color: inherit;\n}\n\nh1 {\n    margin: 0;\n}\n\n/* Hide default checkbox */\ninput[type=checkbox] {\n    display: none;\n    user-select: none;\n}\n\ninput[type=checkbox] ~ nav.menu {\n    opacity: 0;\n    transform: translateY(-20%);\n    transition: all .3s ease-out;\n}\n\n/* When hamburger (checkbox) is clicked, display menu */\ninput[type=checkbox]:checked ~ nav.menu {\n    transform: translateY(0);\n    opacity: 1 !important;\n}\n\n.hamburger {\n    display: flex;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\nheader > div.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Hide menu by default for small screens */\nnav.menu {\n    background-color: #403f3c;\n    position: absolute;\n    top: 3.78rem;\n    right: 0rem;\n}\n\nul.menu {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    width: 100vw;\n    font-size: 1.25rem;\n    font-weight: 600;\n    margin-top: 0.5rem;\n    padding: 0;\n}\n\n.main {\n    grid-area: main;\n    display: flex;\n}\n\n/* HOME PAGE STARTS */\n.bg-img {\n    flex: 1;\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./img/bg.jpg');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.bg-text {\n    color: white;\n    width: 70%;\n    font-size: 1.2rem;\n    font-weight: 500;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.bg-text > h1 {\n    font-size: 3.5rem;\n}\n/* HOME PAGE ENDS */\n\n/* MENU PAGE STARTS */\n.main.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-header {\n    width: 70%;\n    margin-top: 3rem;\n    text-align: center;\n}\n\n.menu-content {\n    margin-top: 1.5rem;\n    padding: 0 3rem;\n}\n\n.menu-content h2,\n.menu-content h3 {\n    margin: 0;\n}\n\n.menu-content p {\n    margin: 0.25rem 0 1.5rem 0;\n}\n\n.menu-content hr {\n    margin-bottom: 1.5rem;\n    border: none;\n    height: 1px;\n    background-color: #5a5a56;\n}\n/* MENU PAGE ENDS */\n\n/* CONTACT PAGE STARTS */\n.main.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-header {\n    margin: 3rem 0;\n    text-align: center;\n}\n\n.contact-container {\n    color: #f5eadb;\n    display: flex;\n    align-items: center;\n    background-color: #6a6d5a;\n    width: 70%;\n    padding: 2rem;\n    border-radius: 8px;\n}\n\n.contact-container p {\n    margin: 0;\n}\n\n.contact-left-side-container > div {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}\n\n.address,\n.hours,\n.phone,\n.form-title {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.form-title {\n    font-size: 1.25rem;\n    margin-top: 1.5rem;\n}\n\nlabel {\n    font-weight: 500;\n}\n  \ninput,\ntextarea {\n    appearance: none;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: .4rem 0.5rem;\n    background-color: #ebebeb;\n}\n  \ninput:focus,\ntextarea:focus {\n    outline: none;\n    border: 1px solid black;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n}\n\n.contact-form > input {\n    margin: 0.25rem 0 1rem 0;\n}\n\n.contact-form > button {\n    margin-top: 1.5rem;\n    color: white;\n    background-color: #A15B3C;\n    /* font-size: 1rem; */\n    font-weight: 600;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 16px;\n}\n\n.contact-form > button:hover {\n    cursor: pointer;\n    background-color: #CDB575;\n}\n\n/* CONTACT PAGE ENDS */\n\nfooter {\n    grid-area: footer;\n}\n\n@media only screen and (min-width: 700px) {\n    body {\n        /* Add top padding for fixed header */\n        padding-top: 6rem;\n    }\n\n    .title {\n        display: block;\n        font-size: inherit;\n    }\n\n    .title.collapse {\n        display: flex;\n    }\n\n    input[type=checkbox] ~ nav.menu {\n        transform: translateY(0);\n    }\n\n    .hamburger {\n        display: none;\n        user-select: none;\n    }\n\n    nav.menu {\n        opacity: 1 !important;\n        position: static;\n    }\n\n    ul.menu {\n        flex-direction: row;\n        gap: 3rem;\n        width: auto;\n        margin: 0;\n    }\n\n    .bg-img {\n        background-position: 0% 75%;\n    }\n\n    .bg-text {\n        font-size: 1.5rem;\n    }\n\n    .bg-text > h1 {\n        font-size: 4rem;\n    }\n\n    .menu-content {\n        width: 70%;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 4rem;\n    }\n\n    .menu-content hr:nth-child(1) {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clearMain.js":
/*!**************************!*\
  !*** ./src/clearMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearMain(page) {
    const mainDiv = document.querySelector('body > .main');
    if (mainDiv) mainDiv.parentNode.removeChild(mainDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearMain);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearMain */ "./src/clearMain.js");


function loadContact() {
    // Return if 'menu' div already exists
    const mainDiv = document.querySelector('body > div:first-of-type');
    if (mainDiv && mainDiv.classList.contains('contact')) return;

    // If div doesn't exit yet, clear previous content if any and create 'menu' content
    (0,_clearMain__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const main = document.createElement('div');
    main.classList.add('main', 'contact');
    document.body.appendChild(main);

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contact-header');
    main.appendChild(contactHeader);

    const title = document.createElement('h1');
    title.textContent = 'CONTACT US';
    contactHeader.appendChild(title);

    const container = document.createElement('div');
    container.classList.add('contact-container');
    main.appendChild(container);

    // LEFT SIDE
    const leftSideContainer = document.createElement('div');
    leftSideContainer.classList.add('contact-left-side-container');
    container.appendChild(leftSideContainer);

    // LEFT SIDE - CONTACT INFO
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    leftSideContainer.appendChild(contactInfo);

    // Address
    const address = document.createElement('div');
    address.classList.add('address');
    contactInfo.appendChild(address);

    const addressIcon = document.createElement('div');
    addressIcon.classList.add('fa-solid', 'fa-location-dot');
    address.appendChild(addressIcon);

    const addressText = document.createElement('div');
    addressText.classList.add('address-text');
    address.appendChild(addressText);

    const addressTextLine1 = document.createElement('p');
    addressTextLine1.textContent = '1024 Oakwood Ave';
    addressText.appendChild(addressTextLine1);

    const addressTextLine2 = document.createElement('p');
    addressTextLine2.textContent = 'San Diego, CA 22434';
    addressText.appendChild(addressTextLine2);

    // Hours
    const hours = document.createElement('div');
    hours.classList.add('hours');
    contactInfo.appendChild(hours);

    const hoursIcon = document.createElement('div');
    hoursIcon.classList.add('fa-solid', 'fa-clock');
    hours.appendChild(hoursIcon);

    const hoursText = document.createElement('div');
    hoursText.classList.add('hours-text');
    hours.appendChild(hoursText);

    const hoursTextLine1 = document.createElement('p');
    hoursTextLine1.textContent = 'Mon-Thurs: 8am-8pm';
    hoursText.appendChild(hoursTextLine1);

    const hoursTextLine2 = document.createElement('p');
    hoursTextLine2.textContent = 'Fri-Sun: 8am-11pm';
    hoursText.appendChild(hoursTextLine2);

    // Phone
    const phone = document.createElement('div');
    phone.classList.add('phone');
    contactInfo.appendChild(phone);

    const phoneIcon = document.createElement('i')
    phoneIcon.classList.add('fa-solid', 'fa-phone')
    phone.appendChild(phoneIcon);

    const phoneText = document.createElement('div');
    phoneText.classList.add('phone-text');
    phoneText.textContent = '(222) 888 5555';
    phone.appendChild(phoneText);

    // LEFT SIDE - CONTACT FORM
    const contactFormContainer = document.createElement('div');
    contactFormContainer.classList.add('contact-form-container');
    leftSideContainer.appendChild(contactFormContainer);

    // Title
    const formTitle = document.createElement('div');
    formTitle.classList.add('form-title');
    contactFormContainer.appendChild(formTitle);

    const formTitleIcon = document.createElement('i')
    formTitleIcon.classList.add('fa-solid', 'fa-envelope')
    formTitle.appendChild(formTitleIcon);

    const formTitleText = document.createElement('div');
    formTitleText.classList.add('form-title-text');
    formTitleText.textContent = 'MESSAGE US';
    formTitle.appendChild(formTitleText);

    // Form
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactFormContainer.appendChild(contactForm);

    const fullNameLabel = document.createElement('label');
    fullNameLabel.setAttribute('for', 'fullName');
    fullNameLabel.textContent = 'Full Name';
    contactForm.appendChild(fullNameLabel);

    const fullName = document.createElement('input');
    fullName.setAttribute('type', 'text');
    fullName.setAttribute('id', 'fullName');
    fullName.setAttribute('name', 'fullName');
    fullName.setAttribute('placeholder', 'Full Name');
    contactForm.appendChild(fullName);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    contactForm.appendChild(emailLabel);

    const email = document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('id', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Email');
    contactForm.appendChild(email);

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'email');
    messageLabel.textContent = 'Message';
    contactForm.appendChild(messageLabel);

    const textArea = document.createElement('textarea');
    textArea.setAttribute('type', 'text');
    textArea.setAttribute('id', 'message');
    textArea.setAttribute('name', 'message');
    textArea.setAttribute('placeholder', 'Type your message...');
    contactForm.appendChild(textArea);

    const button = document.createElement('button');
    button.textContent = 'SEND';
    contactForm.appendChild(button);

    // RIGHT SIDE
    const rightSideContainer = document.createElement('div');
    rightSideContainer.classList.add('contact-right-side-container');
    container.appendChild(rightSideContainer);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ././contact */ "./src/contact.js");




document.addEventListener('scroll', shrinkHeaderOnScroll)

function createHeader() {
    const header = document.createElement('header');
    document.body.appendChild(header);

    header.appendChild(createTitle('THE HAPPY', 'LITTLE PIGLET'));
    header.appendChild(createMenu('Home', 'Menu', 'Contact'));

    // Close menu on click on mobile
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(menuItem => menuItem.addEventListener('click', closeMenuOnClick))
}

function createTitle(...lines) {
    const title = document.createElement('a');
    title.classList.add('title');
    title.href = '#';

    for (const line of lines) {
        const titleLine = document.createElement('h1');
        titleLine.textContent = `${line}`;
        title.appendChild(titleLine);
    }

    return title;
}

function createMenu(...items) {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    // Add checkbox then replace it by ☰ on small screens to create responsive menu
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox_toggle';
    checkbox.classList.add('checkbox_toggle');
    menu.appendChild(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'checkbox_toggle';
    checkboxLabel.classList.add('hamburger');
    checkboxLabel.textContent = '☰';
    menu.appendChild(checkboxLabel);

    const menuNav = document.createElement('nav');
    menuNav.classList.add('menu');
    menu.appendChild(menuNav);

    const menuUl = document.createElement('ul');
    menuUl.classList.add('menu');
    menuNav.appendChild(menuUl);

    for (const item of items) {
        const itemLi = document.createElement('li');
        itemLi.classList.add('menu-item');
        menuUl.appendChild(itemLi);
        const itemA = document.createElement('a');
        itemA.textContent = `${item}`;
        itemA.href = '#';
        itemLi.appendChild(itemA);
        itemA.addEventListener('click', createMenuLinks);
    }

    return menu;
}

function createMenuLinks(e) {
    if (e.target.textContent === 'Home') {
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    } else if (e.target.textContent === 'Menu') {
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else if (e.target.textContent === 'Contact') {
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
}

function shrinkHeaderOnScroll() {
    const title = document.querySelector('.title');

    if (window.scrollY >= 50) {
        title.classList.add('collapse');
    } else {
        title.classList.remove('collapse');
    }
}

// Close menu on mobile when user clicks on a link
function closeMenuOnClick() {
    const menuHamburger = document.querySelector('input[type=checkbox]');
    const menuOnMobile = document.querySelector('input[type=checkbox]:checked ~ nav.menu');

    if (menuOnMobile) {
        menuOnMobile.style.opacity = '0';
        menuHamburger.checked = false;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearMain */ "./src/clearMain.js");


function loadHome() {
    // Return if 'home' div already exists
    const mainDiv = document.querySelector('body > div:first-of-type');
    if (mainDiv && mainDiv.classList.contains('home')) return;

    // If div doesn't exit yet, clear previous content if any and create 'home' content
    (0,_clearMain__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const main = document.createElement('div');
    main.classList.add('main', 'home');
    document.body.appendChild(main);

    const backgroundImg = document.createElement('div');
    backgroundImg.classList.add('bg-img');
    main.appendChild(backgroundImg);

    const backgroundTxt = document.createElement('div');
    backgroundTxt.classList.add('bg-text');
    backgroundImg.appendChild(backgroundTxt);

    const title = document.createElement('h1');
    title.textContent = 'THE SMOKO ROOM'
    backgroundTxt.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'Having moved from the original site in Toronto, the Happy Little Piglet has been turning out meats from premises just out of Canberra since February 2022. The end of October 2022 we opened the doors to visitors and locals to experience the kind of hospitality The Happy Little Piglet is about - straight forward and generous.'
    backgroundTxt.appendChild(description);

    return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearMain */ "./src/clearMain.js");


function loadMenu() {
    // Return if 'menu' div already exists
    const mainDiv = document.querySelector('body > div:first-of-type');
    if (mainDiv && mainDiv.classList.contains('menu')) return;

    // If div doesn't exit yet, clear previous content if any and create 'menu' content
    (0,_clearMain__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const main = document.createElement('div');
    main.classList.add('main', 'menu');
    document.body.appendChild(main);

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    main.appendChild(menuHeader);

    const title = document.createElement('h1');
    title.textContent = 'MENU';
    menuHeader.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'A culinary tour of BBQ traditions from around this great nation and this beautiful planet. 1.8 million years ago, humans first began cooking meat with fire. For some reason, this hasn’t led to world peace, but we’re pretty sure if we fire up enough BBQ, it will.';
    menuHeader.appendChild(description);

    const menu = document.createElement('div');
    menu.classList.add('menu-content');
    main.appendChild(menu);

    // LEFT COLUMN
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('left-column');
    menu.appendChild(leftColumn);

    leftColumn.appendChild(
        createMenuItem(
            'PLATTERS AND COMBOS',
            'Creating the *perfect* palette of Federalist Pig flavors is an art. And we’re artists. Served with Texas toast & pickles.',
            'h2'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'TWO STEP',
            'pick any 2 meats & 2 small sides'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'RIB & CHICKEN',
            '1/2 lb. of ribs, 1/4 chicken & 2 small sides'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'SAMPLER PLATTER',
            'pick any 3 meats & 2 small sides'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'PITMASTER SPECIAL FOR 2',
            'pick any 4 meats & 3 small sides'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'FEED THE FAM',
            '1/2 lb. brisket, 1/2 lb. chopped pork, 1/2 lb. chicken, 1 lb. pork rib tips & 4 large sides'
        )
    );
    leftColumn.appendChild(document.createElement('hr'));
    leftColumn.appendChild(
        createMenuItem(
            'SIDES',
            'A wise leader once said that unless both sides win, no agreement can be permanent. So — just agree to get more sides later.',
            'h2'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'SMOKED CHEDDAR MAC & CHEESE',
            'shell pasta baked with smoked cheddar and jack cheese'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'CRISPY BRUSSELS SPROUTS',
            'fried and seasoned with Fed Pig BBQ rub'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'CHIPOTLE GARLIC GREEN BEANS',
            'sautéed with roasted garlic and chipotle peppers'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'RED BLISS POTATO SALAD',
            'southern style potato salad with chopped pickles, celery, and hard boiled eggs'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'CLASSIC COLESLAW',
            'carolina style chopped cabbage slaw'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'BBQ BEANS',
            'smokey, savory, and a little sweet'
        )
    );
    leftColumn.appendChild(
        createMenuItem(
            'LOADED FRIES',
            'seasoned fries topped with pulled pork, melted cheese, ranch, and BBQ sauce'
        )
    );

    // RIGHT COLUMN
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('right-column');
    menu.appendChild(rightColumn);

    rightColumn.appendChild(document.createElement('hr'));
    rightColumn.appendChild(
        createMenuItem(
            'SIGNATURE SANDWICHES',
            'When bread meets what could go between bread, there’s no end to the culinary possibilities.',
            'h2'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            'CAROLINA ON MY MIND',
            'chopped pork shoulder, crispy skin, spicy vinegar sauce, coleslaw, sesame bun'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            'MUSIC CITY',
            'spicy fried chicken breast, greens, pickles, buttermilk ranch, sesame bun'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            'BIG CHEESE',
            'chopped pork or brisket, melted cheese, crispy onions, BBQ sauce, sesame bun'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            'CLUB',
            'smoked turkey, crispy pork belly, avocado, tomato, garlic aioli, texas toast'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            'JIVE TURKEY',
            'smoked turkey, melted cheese, grilled tomato, crispy onions, ranch, BBQ sauce, texas toast'
        )
    );
    rightColumn.appendChild(document.createElement('hr'));
    rightColumn.appendChild(
        createMenuItem(
            'SALADS',
            `Crunch crunch, who's there? You, getting a tangy, acidic crunch of greens to really make your plate sing.`,
            'h2'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            'BBQ GREEN SALAD',
            'Choice of meat, mixed greens, smoked tomato, pickles, crispy onions, apple cider vinaigrette'
        )
    );
    rightColumn.appendChild(document.createElement('hr'));
    rightColumn.appendChild(
        createMenuItem(
            'DESSERT',
            `The kind of blue-ribbon treats usually reserved for a State Fair judge, straight to you.`,
            'h2'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            `NANA'S BANANA NANA PUDDING`,
            'fresh bananas layered with vanilla pudding and nilla wafers'
        )
    );
    rightColumn.appendChild(
        createMenuItem(
            'OREO CHOCOLATE PUDDING',
            'chocolate pudding layered with oreo cookie crumbles'
        )
    );
}

function createMenuItem(name, description, heading = 'h3') {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement(heading);
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/img/bg.jpg":
/*!************************!*\
  !*** ./src/img/bg.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496eb3fe4d69e349dbe8.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");




(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map