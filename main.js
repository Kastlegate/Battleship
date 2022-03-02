/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n    margin: auto;\\n    height: 100%;\\n    width: 100%;\\n    background-color: rgb(60, 144, 240);\\n}\\n\\n#gameBanner{\\n    height: 70px;\\n    width: 100%;\\n    background-color: rgb(0, 110, 255);\\n    border-bottom: 2px solid rgb(3, 3, 3);\\n}\\n\\n#gameName{\\n    margin: auto;\\n    width: fit-content;\\n    height: 200px;\\n    color: rgb(163, 1, 1);\\n    margin-bottom: 10px;\\n    font-size: 300%;\\n}\\n\\n#gameContainer{\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n}\\n\\n.container{\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.banner{\\n    margin: auto;\\n    font-size: 200%;\\n    color: rgb(163, 1, 1);\\n}\\n\\n#divider{\\n    height: 400px;\\n    width: 2px;\\n    background-color: rgb(0, 0, 0);\\n    margin: auto;\\n    margin-top: 20px;\\n}\\n\\n.grid{\\n    height: fit-content;\\n    width: fit-content;\\n    background-color: rgb(9, 47, 117);\\n    margin: auto;\\n    margin-top: 30px;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n}\\n\\n.fogOfWar{\\n    height: 30px;\\n    width: 30px;\\n    background-color: rgba(91, 93, 105, 0.8);\\n    border: 1px solid rgb(3, 3, 3);\\n    opacity: .8;\\n}\\n\\n.water{\\n    height: 30px;\\n    width: 30px;\\n    background-color: rgb(26, 35, 109, .8);\\n    border: 1px solid rgb(3, 3, 3);\\n}\\n\\n.shipHit{\\n    height: 30px;\\n    width: 30px;\\n    background-color: rgb(194, 0, 0);\\n    border: 1px solid rgb(3, 3, 3);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameboard\": () => (/* binding */ createGameboard)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\n\n\n//resets the game\nfunction resetGame(player, enemy){\n    //ceates a reference variable for the player's grids\n    let gridLocation = document.getElementById(player.name + \"Grid\");\n    let enemyGridLocation = document.getElementById(enemy.name + \"Grid\");\n    gridLocation.textContent = '';\n    enemyGridLocation.textContent = '';\n    player.gameboard.resetGrid();\n    enemy.gameboard.resetGrid();\n    console.log(player.gameboard.grid)\n    console.log(enemy.gameboard.grid)\n    player.setPlayerShips()\n    enemy.setPlayerShips()\n    console.log(player.gameboard.grid)\n    console.log(enemy.gameboard.grid)\n    createGameboard(player, enemy);\n    createGameboard(enemy, player)\n}\n\n//creates a grid from the gameboard grid\nfunction createGameboard(player, enemy){\n\n    // function that returns true if all of a boards ships have been sunk\n    function gameOver(playerToCheck){\n        return playerToCheck.gameboard.sunkenShipCheck();\n    }\n    //ceates a reference variable for each player's grids\n    let gridLocation = document.getElementById(player.name + \"Grid\");\n    let enemyGridLocation = document.getElementById(enemy.name + \"Grid\");\n    // resets the grid div to empty so it can be rebuilt with updated information from arrays\n    gridLocation.textContent = '';\n\n    // function that creates an attack from a click event\n    function fireShot(evt){\n        var x = evt.target.getAttribute(\"data-x\");\n        var y = evt.target.getAttribute(\"data-y\");\n        var name = evt.target.getAttribute(\"data-name\");\n       \n        // if statement checking wether the given attack quardinates return true and sending the attack\n        if (enemy.sendAttack(player, x, y) === true){\n            enemy.sendAttack(player, x, y)\n            createGameboard(player, enemy)\n            //check to \n            if(gameOver(player) === true || gameOver(enemy) === true){\n                alert(enemy.name + ' has sunk all of ' + player.name + \"'s ships\")\n                resetGame(player, enemy)\n            }\n            else{\n                player.sendAttack(enemy, x, y)\n                enemy.gameboard.sunkenShipCheck();\n                createGameboard(enemy, player)\n            }\n\n            if(gameOver(player) === true || gameOver(enemy) === true){\n                alert(player.name + ' has sunk all of ' + enemy.name + \"'s ships\")\n                resetGame(player, enemy)\n                }\n        }\n        }\n   \n    function createGrid(){\n        player.gameboard.grid.forEach(element => {\n            var x = Number(player.gameboard.grid.indexOf(element))\n            var y = 0;\n            player.gameboard.grid[x].forEach(element => {\n                \n                //creates each quardinate div and adds it to the grid\n                let quardinate = document.createElement('div')\n                    quardinate.dataset.x = x;\n                    quardinate.dataset.y = y;\n                    quardinate.dataset.name = player.name;\n                    y = y + 1;\n                \n                // if check that checks the array's content and assigns a class for displaying the content\n                if(element === 'hit'){\n                    quardinate.classList.add('shipHit')\n                }                \n                else if (element === 'water'){\n                    quardinate.classList.add('fogOfWar')\n                }                \n                else if (element.shipHP){\n                    quardinate.classList.add('fogOfWar')\n                }\n                else if (element === 'miss'){\n                    quardinate.classList.add('water')\n                }               \n                if (player.name === 'computer'){\n                quardinate.addEventListener(\"click\", fireShot, false)\n                }\n                // adds the new quardinate to the grid\n                gridLocation.appendChild(quardinate)\n                \n            });  \n        });\n    }\n    createGrid()\n    return { createGrid, gameOver }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameFlow.js":
/*!*************************!*\
  !*** ./src/gameFlow.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameFlow\": () => (/* binding */ gameFlow)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\nfunction gameFlow(){\n    // new players\n    let player = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.playerFactory)(\"player\");\n    let computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.playerFactory)(\"computer\");\n    //creating dom gameboards\n    let playerBoard = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)(player, computer);\n    let computerBoard = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)(computer, player);\n  \n    // while(player.gameboard.sunkenShipCheck() === false\n    //  && computer.gameboard.sunkenShipCheck() === false){\n\n        \n    // }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/gameFlow.js?");

/***/ }),

/***/ "./src/gameboards.js":
/*!***************************!*\
  !*** ./src/gameboards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n  \n\nconst gameboardFactory = () => {\n\n    // //array that keeps track of misses\n    // let misses = Array();\n    // //array that keeps track of misses\n    // let hits = Array();\n    // variable that keeps count of sunken ships\n    let sunkenShips = 0;\n    // function that checks the current ships sunk count and returns true if all are sunk\n    function sunkenShipCheck (){       \n        if (sunkenShips === 5){\n            return true\n        }\n        else{\n            return false;\n        }\n    }\n\n    //creates the array for the gameboard's grid\n    let grid = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), \n    new Array(10), new Array(10), new Array(10), new Array(10)];\n    //function to reset the grid\n    function resetGrid(){\n        sunkenShips = 0;\n        for(let row = 0; row < grid.length; ++row)\n        {\n            // console.log(\"row \" + row)       \n            for(let column = 0; column < grid[row].length; ++column){\n                // console.log(\"column: \" + column)\n                grid[row][column] = \"water\";\n            }\n        }\n\n    //    // creating the ships for the board\n    //     const carrier = shipFactory('Carrier', 5);\n    //     const battleship = shipFactory('Battleship', 4);\n    //     const cruiser = shipFactory('Cruiser', 3);\n    //     const submarine = shipFactory('Submarine', 3);\n    //     const destroyer = shipFactory('Destroyer', 2);\n    //     setShipOnGrid(carrier, 9, 0)\n    //     setShipOnGrid(battleship, 1, 2)\n    //     setShipOnGrid(cruiser, 4, 5)\n    //     setShipOnGrid(submarine, 6, 7)\n    //     setShipOnGrid(destroyer, 9, 8) \n\n\n    }\n    \n    //creates the grid with positions filled with 'water'\n    for(let row = 0; row < grid.length; ++row)\n    {\n        // console.log(\"row \" + row)       \n        for(let column = 0; column < grid[row].length; ++column){\n            // console.log(\"column: \" + column)\n            grid[row][column] = \"water\";\n        }\n    }\n\n     //function that checks if a ship is the given quardinates\n     function checkForShips(ship, x, y){\n        let watersAreClear;\n        let lengthCheck = ship.shipHP;\n        let newYPosition = y;\n        // for loop that takes an x coordinate and increments the y coordinate the amount of a ships HP to see if a ship can be placed on it\n        for (let i = 0; i < lengthCheck; ++i){\n            if(grid[x][newYPosition] === \"water\"){\n                watersAreClear = true;\n            }\n            else {\n                watersAreClear = false;\n            }\n            ++newYPosition\n        }\n        return watersAreClear;\n    }\n\n    // function to place ship inside the grid array\n    function setShipOnGrid(ship, xPosition, yPosition){\n        let x = xPosition;\n        let y = yPosition;\n        let lengthCheck = Number(ship.shipHP)\n        let canBePlaced = false;\n\n        // if statement that checks if the length of the ship can fit on the grid\n        // quardinates given, and if the quardinates already houses another ship\n        if (y + lengthCheck < 11 && checkForShips(ship, x, y)){    \n            let newYPosition = y;\n            for (let i = 0; i < lengthCheck; i++){\n                grid[x][newYPosition] = ship;\n                newYPosition++\n            } \n            canBePlaced = true;             \n        }  \n        \n        return canBePlaced;\n    }\n\n    //function that checks if ships are sunk and updates the sunken ship counter\n    function sunkenShipsCheck(ship){\n        if (ship.isSunk() === true){\n            sunkenShips = sunkenShips + 1;\n            if (sunkenShips === 5){\n                return true;\n            }\n        }\n\n        else if (sunkenShips < 5){\n            return false;\n        }\n    }\n\n    //function to recieve an attack\n    function recieveAttack(xPosition, yPosition){\n        let x = xPosition;\n        let y = yPosition;\n\n        if (grid[x][y] === 'water'){\n            grid[x][y] = 'miss';\n        }\n        else if (grid[x][y] === 'miss'){\n            //do nothing\n        }\n        \n        else if (grid[x][y].shipHP > 0){\n            grid[x][y].hit()\n            sunkenShipsCheck(grid[x][y])\n            grid[x][y] = 'hit';          \n        }\n\n\n        \n    }\n\n\n    return { grid, setShipOnGrid, checkForShips, recieveAttack, sunkenShipsCheck, sunkenShipCheck, resetGrid }\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _gameFlow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameFlow.js */ \"./src/gameFlow.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n// Banner for Battleship name display\nlet gameBanner = document.createElement('div');\n    gameBanner.id = 'gameBanner';\n    document.body.appendChild(gameBanner)\n\n// Battleship name display\nlet gameName = document.createElement('h1');\n    gameName.id = 'gameName';\n    gameName.textContent = 'BATTLESHIP';\n    gameBanner.appendChild(gameName);\n\n// container for the game, its player's grids and dividers.\nlet gameContainer = document.createElement('div');\ngameContainer.id = \"gameContainer\";\ndocument.body.appendChild(gameContainer);\n\n//player Container\nlet playerContainer = document.createElement('div')\nplayerContainer.id = 'playerContainer'\nplayerContainer.classList.add('container');\ngameContainer.appendChild(playerContainer)\n\n//player Banner\nlet playerBanner = document.createElement('div')\nplayerBanner.id = 'playerBanner';\nplayerBanner.textContent = 'Player';\nplayerBanner.classList.add('banner');\nplayerContainer.appendChild(playerBanner)\n\n// grid for the players gameboard\nlet playerGrid = document.createElement('div');\nplayerGrid.id = 'playerGrid'\nplayerGrid.classList.add('grid')\nplayerContainer.appendChild(playerGrid);\n\n// divider between gameboards\nlet divider = document.createElement('div');\ndivider.id = 'divider'\ngameContainer.appendChild(divider);\n\n//player Container\nlet computerContainer = document.createElement('div')\ncomputerContainer.id = 'computerContainer'\ncomputerContainer.classList.add('container');\ngameContainer.appendChild(computerContainer)\n\n//player Banner\nlet computerBanner = document.createElement('div')\ncomputerBanner.id = 'computerBanner';\ncomputerBanner.textContent = 'Computer';\ncomputerBanner.classList.add('banner');\ncomputerContainer.appendChild(computerBanner)\n\n// grid for the players gameboard\nlet computerGrid = document.createElement('div');\ncomputerGrid.id = 'computerGrid'\ncomputerGrid.classList.add('grid')\ncomputerContainer.appendChild(computerGrid);\n\n(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_2__.gameFlow)()\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerFactory\": () => (/* binding */ playerFactory)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n/* harmony import */ var _gameboards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboards.js */ \"./src/gameboards.js\");\n\n\n\n\nconst playerFactory = (playername) => {\n\n    \n\n    //creates the gameboard for the player\n    const gameboard = (0,_gameboards_js__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)();\n    \n    // variable for a player's name\n    let name = playername;\n    // creates a random number for the computer to use as quardinates\n    function computerBrain(max) {\n        return Math.floor(Math.random() * max);\n      }\n\n    function setComputerShips(array){\n        \n\n        array.forEach(element => {\n            let x = computerBrain(10);\n            let y = computerBrain(10);\n            let i = 0;\n            \n            // while loop that runs through the array of ships and generates random position on the board for each ship\n            while(gameboard.setShipOnGrid(element, x, y) === false){\n                x = computerBrain(10);\n                y = computerBrain(10);                \n            }\n            gameboard.setShipOnGrid(element, x, y)\n            console.log(gameboard.grid[x][y])\n        });\n        console.log(gameboard.grid)\n    }\n    //function that sets player ships\n    function setPlayerShips(){\n        // creating the ships for the board\n        const carrier = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Carrier', 5);\n        const battleship = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Battleship', 4);\n        const cruiser = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Cruiser', 3);\n        const submarine = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Submarine', 3);\n        const destroyer = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)('Destroyer', 2);\n\n        if(name === 'player'){\n            gameboard.setShipOnGrid(carrier, 9, 0)\n            gameboard.setShipOnGrid(battleship, 1, 2)\n            gameboard.setShipOnGrid(cruiser, 4, 5)\n            gameboard.setShipOnGrid(submarine, 6, 7)\n            gameboard.setShipOnGrid(destroyer, 9, 8)\n        }\n    \n        else if(name === 'computer'){\n            let shipsArray = [carrier, battleship, cruiser, submarine, destroyer];\n            setComputerShips(shipsArray)\n        }  \n    }\n    setPlayerShips()\n    \n    function sendAttack(enemy, x, y){ \n        // A check to see if the sent attack is valid \n        var validCheck = false;\n        if(name === 'player'){\n            \n            if (enemy.gameboard.grid[x][y].shipHP || enemy.gameboard.grid[x][y] === 'water'){\n                console.log(\"Sending attack\")  \n                console.log(enemy.gameboard.grid[x][y])    \n                enemy.gameboard.recieveAttack(x, y);\n                console.log(enemy.name + \"'s ship has been hit\")\n                validCheck = true;\n                return validCheck         \n            }\n        }\n        else if (name === 'computer'){\n            let pcX = computerBrain(10);\n            let pcY = computerBrain(10);\n            var i = 0;\n\n            \n            while(enemy.gameboard.grid[pcX][pcY] === 'miss' || enemy.gameboard.grid[pcX][pcY] === 'hit'){\n                pcX = computerBrain(10);\n                pcY = computerBrain(10);\n                i++\n            }\n            enemy.gameboard.recieveAttack(pcX, pcY);\n            console.log(enemy.name + \" board hit below\")\n            console.log(enemy.gameboard.grid)\n            console.log('invalid computer plays ' + i)           \n        }\n        \n    }\n\n    return {name, gameboard, sendAttack, setPlayerShips, setComputerShips}\n\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\n//Ship factory function\nconst shipFactory = (name, hp, align) => {\n    \n    let shipName = name;\n    let alignment = align;\n    let hitpoints = hp\n    var shipHP = [hitpoints];\n     \n    function hit(){      \n      shipHP[0] = shipHP[0] - 1; \n      isSunk()   \n    }\n\n    function isSunk(){\n      let sunk = false;\n      if (shipHP[0] === 0){\n        sunk = true;\n      }\n\n      return sunk\n    }\n\n    return { shipName, shipHP, hit, isSunk, alignment }\n};\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;