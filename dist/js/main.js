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

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Canvas = void 0;\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas(canvasElement) {\n    var _this = this;\n\n    var fullWindow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n    _classCallCheck(this, Canvas);\n\n    this.canvasElement = canvasElement;\n    this.ctx = canvasElement.getContext('2d');\n\n    if (fullWindow) {\n      canvasElement.height = window.innerHeight;\n      canvasElement.width = window.innerWidth;\n      canvasElement.addEventListener('resize', function () {\n        _this.height = window.innerHeight;\n        _this.width = window.innerWidth;\n      });\n    }\n\n    this.height = canvasElement.height;\n    this.width = canvasElement.width;\n  }\n\n  _createClass(Canvas, [{\n    key: \"height\",\n    get: function get() {\n      return this._height;\n    },\n    set: function set(value) {\n      if (value > 0) {\n        this._height = value;\n        this.canvasElement.height = value;\n      }\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return this._width;\n    },\n    set: function set(value) {\n      if (value > 0) {\n        this._width = value;\n        this.canvasElement.width = value;\n      }\n    }\n  }]);\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBYUEsTTtBQU1ULGtCQUFZQyxhQUFaLEVBQXlFO0FBQUE7O0FBQUEsUUFBM0JDLFVBQTJCLHVFQUFMLEtBQUs7O0FBQUE7O0FBQ3JFLFNBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0UsR0FBTCxHQUFXRixhQUFhLENBQUNHLFVBQWQsQ0FBeUIsSUFBekIsQ0FBWDs7QUFDQSxRQUFJRixVQUFKLEVBQWdCO0FBQ1pELG1CQUFhLENBQUNJLE1BQWQsR0FBdUJDLE1BQU0sQ0FBQ0MsV0FBOUI7QUFDQU4sbUJBQWEsQ0FBQ08sS0FBZCxHQUFzQkYsTUFBTSxDQUFDRyxVQUE3QjtBQUNBUixtQkFBYSxDQUFDUyxnQkFBZCxDQUErQixRQUEvQixFQUF5QyxZQUFLO0FBQzFDLGFBQUksQ0FBQ0wsTUFBTCxHQUFjQyxNQUFNLENBQUNDLFdBQXJCO0FBQ0EsYUFBSSxDQUFDQyxLQUFMLEdBQWFGLE1BQU0sQ0FBQ0csVUFBcEI7QUFDSCxPQUhEO0FBSUg7O0FBQ0QsU0FBS0osTUFBTCxHQUFjSixhQUFhLENBQUNJLE1BQTVCO0FBQ0EsU0FBS0csS0FBTCxHQUFhUCxhQUFhLENBQUNPLEtBQTNCO0FBQ0g7Ozs7U0FFRCxlQUFVO0FBQ04sYUFBTyxLQUFLRyxPQUFaO0FBQ0gsSztTQUVELGFBQVdDLEtBQVgsRUFBd0I7QUFDcEIsVUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYLGFBQUtELE9BQUwsR0FBZUMsS0FBZjtBQUNBLGFBQUtYLGFBQUwsQ0FBbUJJLE1BQW5CLEdBQTRCTyxLQUE1QjtBQUNIO0FBQ0o7OztTQUVELGVBQVM7QUFDTCxhQUFPLEtBQUtDLE1BQVo7QUFDSCxLO1NBRUQsYUFBVUQsS0FBVixFQUF1QjtBQUNuQixVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1gsYUFBS0MsTUFBTCxHQUFjRCxLQUFkO0FBQ0EsYUFBS1gsYUFBTCxDQUFtQk8sS0FBbkIsR0FBMkJJLEtBQTNCO0FBQ0g7QUFDSjs7Ozs7O0FBekNMRSxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL0NhbnZhcy50cz84NWE1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYW52YXMge1xuICAgIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHB1YmxpYyByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGZ1bGxXaW5kb3c6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKGZ1bGxXaW5kb3cpIHtcbiAgICAgICAgICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzRWxlbWVudC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXNFbGVtZW50LmhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjYW52YXNFbGVtZW50IiwiZnVsbFdpbmRvdyIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGVpZ2h0IiwidmFsdWUiLCJfd2lkdGgiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Colors/Rgb.ts":
/*!******************************!*\
  !*** ./src/ts/Colors/Rgb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Rgb = void 0;\n\nvar Rgb = /*#__PURE__*/_createClass(function Rgb(red, green, blue) {\n  var _this = this;\n\n  _classCallCheck(this, Rgb);\n\n  this.toString = function () {\n    return \"rgb(\".concat(_this.red, \",\").concat(_this.green, \",\").concat(_this.blue, \")\");\n  };\n\n  this.red = red;\n  this.green = green;\n  this.blue = blue;\n});\n\nexports.Rgb = Rgb;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29sb3JzL1JnYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQWFBLEcsNkJBS1QsYUFBWUMsR0FBWixFQUF5QkMsS0FBekIsRUFBd0NDLElBQXhDLEVBQW9EO0FBQUE7O0FBQUE7O0FBTTdDLGtCQUFXLFlBQWE7QUFDM0IseUJBQWMsS0FBSSxDQUFDRixHQUFuQixjQUEwQixLQUFJLENBQUNDLEtBQS9CLGNBQXdDLEtBQUksQ0FBQ0MsSUFBN0M7QUFDSCxHQUZNOztBQUxILE9BQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNILEM7O0FBVExDLFdBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvQ29sb3JzL1JnYi50cz8yZWY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZ2Ige1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBncmVlbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJlZCA9IHJlZDtcbiAgICAgICAgdGhpcy5ncmVlbiA9IGdyZWVuO1xuICAgICAgICB0aGlzLmJsdWUgPSBibHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMucmVkfSwke3RoaXMuZ3JlZW59LCR7dGhpcy5ibHVlfSlgO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiUmdiIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Colors/Rgb.ts\n");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Rgb_1 = __webpack_require__(/*! ./Colors/Rgb */ \"./src/ts/Colors/Rgb.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar canvas = new Canvas_1.Canvas(document.getElementById('my-canvas'), true);\nvar myRectangle = new Rectangle_1.Rectangle(canvas, new Rgb_1.Rgb(230, 126, 34), {\n  x: 40,\n  y: 100\n}, 20, 50);\n\nfunction main() {\n  animate();\n}\n\nmain();\ncanvas.canvasElement.addEventListener('mousemove', function (event) {\n  myRectangle.setDirectionByMousePosition({\n    x: event.x,\n    y: event.y\n  });\n});\n\nfunction animate() {\n  myRectangle.clear();\n  myRectangle.update();\n  myRectangle.draw();\n  requestAnimationFrame(animate);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsZUFBSixDQUFXQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBWCxFQUFzRSxJQUF0RSxDQUFmO0FBRUEsSUFBTUMsV0FBVyxHQUFHLElBQUlDLHFCQUFKLENBQWNMLE1BQWQsRUFBc0IsSUFBSU0sU0FBSixDQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEVBQWxCLENBQXRCLEVBQTZDO0FBQUNDLEdBQUMsRUFBRSxFQUFKO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQTdDLEVBQThELEVBQTlELEVBQWtFLEVBQWxFLENBQXBCOztBQUdBLFNBQVNDLElBQVQsR0FBYTtBQUNUQyxTQUFPO0FBQ1Y7O0FBRURELElBQUk7QUFFSlQsTUFBTSxDQUFDVyxhQUFQLENBQXFCQyxnQkFBckIsQ0FBc0MsV0FBdEMsRUFBbUQsVUFBQ0MsS0FBRCxFQUFzQjtBQUNyRVQsYUFBVyxDQUFDVSwyQkFBWixDQUF3QztBQUFDUCxLQUFDLEVBQUVNLEtBQUssQ0FBQ04sQ0FBVjtBQUFhQyxLQUFDLEVBQUVLLEtBQUssQ0FBQ0w7QUFBdEIsR0FBeEM7QUFDSCxDQUZEOztBQUtBLFNBQVNFLE9BQVQsR0FBZ0I7QUFDWk4sYUFBVyxDQUFDVyxLQUFaO0FBQ0FYLGFBQVcsQ0FBQ1ksTUFBWjtBQUNBWixhQUFXLENBQUNhLElBQVo7QUFDQUMsdUJBQXFCLENBQUNSLE9BQUQsQ0FBckI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL21haW4udHM/ZTg4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vc2hhcGVzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IHtSZ2J9IGZyb20gXCIuL0NvbG9ycy9SZ2JcIjtcbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQsIHRydWUpO1xuXG5jb25zdCBteVJlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoY2FudmFzLCBuZXcgUmdiKDIzMCwgMTI2LCAzNCksIHt4OiA0MCwgeTogMTAwfSwgMjAsIDUwKTtcblxuXG5mdW5jdGlvbiBtYWluKCk6IHZvaWQge1xuICAgIGFuaW1hdGUoKTtcbn1cblxubWFpbigpO1xuXG5jYW52YXMuY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBteVJlY3RhbmdsZS5zZXREaXJlY3Rpb25CeU1vdXNlUG9zaXRpb24oe3g6IGV2ZW50LngsIHk6IGV2ZW50Lnl9KTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgbXlSZWN0YW5nbGUuY2xlYXIoKTtcbiAgICBteVJlY3RhbmdsZS51cGRhdGUoKTtcbiAgICBteVJlY3RhbmdsZS5kcmF3KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuIl0sIm5hbWVzIjpbImNhbnZhcyIsIkNhbnZhc18xIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm15UmVjdGFuZ2xlIiwiUmVjdGFuZ2xlXzEiLCJSZ2JfMSIsIngiLCJ5IiwibWFpbiIsImFuaW1hdGUiLCJjYW52YXNFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0RGlyZWN0aW9uQnlNb3VzZVBvc2l0aW9uIiwiY2xlYXIiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Rectangle = void 0;\n\nvar Rectangle = /*#__PURE__*/function () {\n  function Rectangle(canvas, color, position, width, height) {\n    _classCallCheck(this, Rectangle);\n\n    this.canvas = canvas;\n    this.ctx = canvas.ctx;\n    this.position = position;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.speed = 3;\n    this.direction = Math.random() * Math.PI * 2;\n  }\n\n  _createClass(Rectangle, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.save();\n      this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);\n      this.ctx.rotate(this.direction);\n      this.ctx.fillStyle = \"\".concat(this.color);\n      this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n      this.ctx.restore();\n      return this;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.position.x += this.speed * Math.cos(this.direction);\n      this.position.y += this.speed * Math.sin(this.direction);\n\n      if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {\n        this.direction = Math.PI - this.direction;\n      }\n\n      if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {\n        this.direction = -this.direction;\n      }\n    }\n  }, {\n    key: \"setDirectionByMousePosition\",\n    value: function setDirectionByMousePosition(position) {\n      this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);\n    }\n  }]);\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cz9hY2QxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHNsfSBmcm9tIFwiLi4vQ29sb3JzL0hzbFwiO1xuaW1wb3J0IHtSZ2J9IGZyb20gXCIuLi9Db2xvcnMvUmdiXCI7XG5pbXBvcnQge0lQb3NpdGlvbn0gZnJvbSBcIi4uL1R5cGVzL0lQb3NpdGlvblwiO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuLi9DYW52YXNcIjtcblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBJUG9zaXRpb247XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZDogbnVtYmVyO1xuICAgIHB1YmxpYyBkaXJlY3Rpb246IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcbiAgICBjb2xvcjogSHNsIHwgUmdiO1xuICAgIHByaXZhdGUgY2FudmFzOiBDYW52YXM7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IENhbnZhcywgY29sb3I6IEhzbCB8IFJnYiwgcG9zaXRpb246IElQb3NpdGlvbiwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7IC8vIHNhdXZlZ2FyZGUgbCfDqXRhdCBhY3R1ZWwgZHUgY29udGV4dGVcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCAvIDIpOyAvLyBkw6lwbGFjZSBsJ29yaWdpbmUgZHUgc3lzdMOobWUgZGUgY29vcmRvbm7DqWVzIGF1IGNlbnRyZSBkdSByZWN0YW5nbGVcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuZGlyZWN0aW9uKTsgLy8gYXBwbGlxdWUgbGEgdHJhbnNmb3JtYXRpb24gZGUgcm90YXRpb25cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgLy8gZGVzc2luZSBsZSByZWN0YW5nbGUgY2VudHLDqSBzdXIgbCdvcmlnaW5lXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTsgLy8gcmVzdGF1cmUgbCfDqXRhdCBwcsOpY8OpZGVudCBkdSBjb250ZXh0ZVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgLy90aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID49IHRoaXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguUEkgLSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gMCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+PSB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uQnlNb3VzZVBvc2l0aW9uKHBvc2l0aW9uOiBJUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKHBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnksIHBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiUmVjdGFuZ2xlIiwiY2FudmFzIiwiY29sb3IiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4Iiwic3BlZWQiLCJkaXJlY3Rpb24iLCJNYXRoIiwicmFuZG9tIiwiUEkiLCJzYXZlIiwidHJhbnNsYXRlIiwieCIsInkiLCJyb3RhdGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiLCJjbGVhclJlY3QiLCJjb3MiLCJzaW4iLCJhdGFuMiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmove_my_rectangle"] = self["webpackChunkmove_my_rectangle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;