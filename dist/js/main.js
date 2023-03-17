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

/***/ "./src/ts/Animate.ts":
/*!***************************!*\
  !*** ./src/ts/Animate.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Animate = void 0;\n\nvar Animate = /*#__PURE__*/function () {\n  function Animate(rectangle) {\n    _classCallCheck(this, Animate);\n\n    this.animated = rectangle;\n  }\n\n  _createClass(Animate, [{\n    key: \"start\",\n    value: function start() {\n      this.animated.clear();\n      this.animated.update();\n      this.animated.draw();\n      requestAnimationFrame(this.start.bind(this));\n    }\n  }]);\n\n  return Animate;\n}();\n\nexports.Animate = Animate;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBS2FBLE87QUFJVCxtQkFBWUMsU0FBWixFQUFnQztBQUFBOztBQUM1QixTQUFLQyxRQUFMLEdBQWdCRCxTQUFoQjtBQUNIOzs7O1dBU0QsaUJBQUs7QUFDRCxXQUFLQyxRQUFMLENBQWNDLEtBQWQ7QUFDQSxXQUFLRCxRQUFMLENBQWNFLE1BQWQ7QUFDQSxXQUFLRixRQUFMLENBQWNHLElBQWQ7QUFDQUMsMkJBQXFCLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQUQsQ0FBckI7QUFDSDs7Ozs7O0FBcEJMQyxlQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL0FuaW1hdGUudHM/YTc2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vc2hhcGVzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gXCIuL3NoYXBlcy9TcXVhcmVcIjtcbmltcG9ydCB7U3Ryb2tlUmVjdGFuZ2xlfSBmcm9tIFwiLi9zaGFwZXMvU3Ryb2tlUmVjdGFuZ2xlXCI7XG5pbXBvcnQge1N0cm9rZVNxdWFyZX0gZnJvbSBcIi4vc2hhcGVzL1N0cm9rZVNxdWFyZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0ZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhbmltYXRlZDogUmVjdGFuZ2xlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWN0YW5nbGU6IFJlY3RhbmdsZSkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gcmVjdGFuZ2xlO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBAcmV0dXJuczogdm9pZCxcbiAgICAqICAgY2xlYXJzIHRoZSBvYmplY3QsXG4gICAgKiAgIHVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBvYmpldCxcbiAgICAqICAgcmVkcmF3cyBvYmplY3Qgd2l0aCBuZXcgaW5mb3JtYXRpb24sXG4gICAgKiAgIHJlcGVhdHMgNjBmcHNcbiAgICAqICovXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlZC51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlZC5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0YXJ0LmJpbmQodGhpcykpO1xuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbIkFuaW1hdGUiLCJyZWN0YW5nbGUiLCJhbmltYXRlZCIsImNsZWFyIiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXJ0IiwiYmluZCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Animate.ts\n");

/***/ }),

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Rgb_1 = __webpack_require__(/*! ./Colors/Rgb */ \"./src/ts/Colors/Rgb.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Animate_1 = __webpack_require__(/*! ./Animate */ \"./src/ts/Animate.ts\");\n\nvar canvas = new Canvas_1.Canvas(document.getElementById('my-canvas'), true);\nvar myRectangle = new Rectangle_1.Rectangle(canvas, 20, 5, new Rgb_1.Rgb(230, 126, 34), {\n  x: 40,\n  y: 100\n}, 3);\nvar animation = new Animate_1.Animate(myRectangle);\n\nfunction main() {\n  animation.start();\n}\n\nmain();\ncanvas.canvasElement.addEventListener('mousemove', function (event) {\n  myRectangle.setDirectionByMousePosition({\n    x: event.x,\n    y: event.y\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsZUFBSixDQUFXQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBWCxFQUFzRSxJQUF0RSxDQUFmO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLElBQUlDLHFCQUFKLENBQWNMLE1BQWQsRUFBcUIsRUFBckIsRUFBeUIsQ0FBekIsRUFBNEIsSUFBSU0sU0FBSixDQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEVBQWxCLENBQTVCLEVBQW1EO0FBQUNDLEdBQUMsRUFBRSxFQUFKO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQW5ELEVBQW9FLENBQXBFLENBQXBCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUlDLGlCQUFKLENBQVlOLFdBQVosQ0FBbEI7O0FBRUEsU0FBU08sSUFBVCxHQUFhO0FBQ1RGLFdBQVMsQ0FBQ0csS0FBVjtBQUNIOztBQUVERCxJQUFJO0FBRUpYLE1BQU0sQ0FBQ2EsYUFBUCxDQUFxQkMsZ0JBQXJCLENBQXNDLFdBQXRDLEVBQW1ELFVBQUNDLEtBQUQsRUFBc0I7QUFDckVYLGFBQVcsQ0FBQ1ksMkJBQVosQ0FBd0M7QUFBQ1QsS0FBQyxFQUFFUSxLQUFLLENBQUNSLENBQVY7QUFBYUMsS0FBQyxFQUFFTyxLQUFLLENBQUNQO0FBQXRCLEdBQXhDO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL21haW4udHM/ZTg4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vc2hhcGVzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IHtSZ2J9IGZyb20gXCIuL0NvbG9ycy9SZ2JcIjtcbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7QW5pbWF0ZX0gZnJvbSBcIi4vQW5pbWF0ZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudCwgdHJ1ZSk7XG5jb25zdCBteVJlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoY2FudmFzLDIwLCA1LCBuZXcgUmdiKDIzMCwgMTI2LCAzNCksIHt4OiA0MCwgeTogMTAwfSwgMyk7XG5jb25zdCBhbmltYXRpb24gPSBuZXcgQW5pbWF0ZShteVJlY3RhbmdsZSk7XG5cbmZ1bmN0aW9uIG1haW4oKTogdm9pZCB7XG4gICAgYW5pbWF0aW9uLnN0YXJ0KCk7XG59XG5cbm1haW4oKTtcblxuY2FudmFzLmNhbnZhc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbXlSZWN0YW5nbGUuc2V0RGlyZWN0aW9uQnlNb3VzZVBvc2l0aW9uKHt4OiBldmVudC54LCB5OiBldmVudC55fSk7XG59KTtcblxuIl0sIm5hbWVzIjpbImNhbnZhcyIsIkNhbnZhc18xIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm15UmVjdGFuZ2xlIiwiUmVjdGFuZ2xlXzEiLCJSZ2JfMSIsIngiLCJ5IiwiYW5pbWF0aW9uIiwiQW5pbWF0ZV8xIiwibWFpbiIsInN0YXJ0IiwiY2FudmFzRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldERpcmVjdGlvbkJ5TW91c2VQb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Rectangle = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/shapes/Shape.ts\");\n\nvar Rectangle = /*#__PURE__*/function (_Shape_1$Shape) {\n  _inherits(Rectangle, _Shape_1$Shape);\n\n  var _super = _createSuper(Rectangle);\n\n  function Rectangle(canvas, width, height, color, position, speed, direction) {\n    var _this;\n\n    _classCallCheck(this, Rectangle);\n\n    _this = _super.call(this, canvas, position, color, speed, direction);\n    _this.width = width;\n    _this.height = height;\n    return _this;\n  }\n\n  _createClass(Rectangle, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.save();\n      this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);\n      this.ctx.rotate(this.direction);\n      this.ctx.fillStyle = \"\".concat(this.color);\n      this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n      this.ctx.restore();\n      return this;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.position.x += this.speed * Math.cos(this.direction);\n      this.position.y += this.speed * Math.sin(this.direction);\n\n      if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {\n        this.direction = Math.PI - this.direction;\n      }\n\n      if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {\n        this.direction = -this.direction;\n      }\n    }\n  }, {\n    key: \"setDirectionByMousePosition\",\n    value: function setDirectionByMousePosition(position) {\n      this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);\n    }\n  }]);\n\n  return Rectangle;\n}(Shape_1.Shape);\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztJQUdhQSxTOzs7OztBQUlULHFCQUFZQyxNQUFaLEVBQTRCQyxLQUE1QixFQUEyQ0MsTUFBM0MsRUFBMkRDLEtBQTNELEVBQThFQyxRQUE5RSxFQUFvR0MsS0FBcEcsRUFBb0hDLFNBQXBILEVBQXNJO0FBQUE7O0FBQUE7O0FBQ2xJLDhCQUFNTixNQUFOLEVBQWNJLFFBQWQsRUFBd0JELEtBQXhCLEVBQStCRSxLQUEvQixFQUFzQ0MsU0FBdEM7QUFDQSxVQUFLTCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIa0k7QUFJckk7Ozs7V0FFRCxnQkFBSTtBQUNBLFdBQUtLLEdBQUwsQ0FBU0MsSUFBVDtBQUNBLFdBQUtELEdBQUwsQ0FBU0UsU0FBVCxDQUFtQixLQUFLTCxRQUFMLENBQWNNLENBQWQsR0FBa0IsS0FBS1QsS0FBTCxHQUFhLENBQWxELEVBQXFELEtBQUtHLFFBQUwsQ0FBY08sQ0FBZCxHQUFrQixLQUFLVCxNQUFMLEdBQWMsQ0FBckY7QUFDQSxXQUFLSyxHQUFMLENBQVNLLE1BQVQsQ0FBZ0IsS0FBS04sU0FBckI7QUFDQSxXQUFLQyxHQUFMLENBQVNNLFNBQVQsYUFBd0IsS0FBS1YsS0FBN0I7QUFDQSxXQUFLSSxHQUFMLENBQVNPLFFBQVQsQ0FBa0IsQ0FBQyxLQUFLYixLQUFOLEdBQWMsQ0FBaEMsRUFBbUMsQ0FBQyxLQUFLQyxNQUFOLEdBQWUsQ0FBbEQsRUFBcUQsS0FBS0QsS0FBMUQsRUFBaUUsS0FBS0MsTUFBdEU7QUFDQSxXQUFLSyxHQUFMLENBQVNRLE9BQVQ7QUFDQSxhQUFPLElBQVA7QUFDSDs7O1dBRUQsaUJBQUs7QUFFRCxXQUFLUixHQUFMLENBQVNTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2hCLE1BQUwsQ0FBWUMsS0FBckMsRUFBNEMsS0FBS0QsTUFBTCxDQUFZRSxNQUF4RDtBQUNIOzs7V0FFRCxrQkFBTTtBQUNGLFdBQUtFLFFBQUwsQ0FBY00sQ0FBZCxJQUFtQixLQUFLTCxLQUFMLEdBQWFZLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLFNBQWQsQ0FBaEM7QUFDQSxXQUFLRixRQUFMLENBQWNPLENBQWQsSUFBbUIsS0FBS04sS0FBTCxHQUFhWSxJQUFJLENBQUNFLEdBQUwsQ0FBUyxLQUFLYixTQUFkLENBQWhDOztBQUVBLFVBQUksS0FBS0YsUUFBTCxDQUFjTSxDQUFkLElBQW1CLENBQW5CLElBQXdCLEtBQUtOLFFBQUwsQ0FBY00sQ0FBZCxHQUFrQixLQUFLVCxLQUF2QixJQUFnQyxLQUFLRCxNQUFMLENBQVlDLEtBQXhFLEVBQStFO0FBQzNFLGFBQUtLLFNBQUwsR0FBaUJXLElBQUksQ0FBQ0csRUFBTCxHQUFVLEtBQUtkLFNBQWhDO0FBQ0g7O0FBRUQsVUFBSSxLQUFLRixRQUFMLENBQWNPLENBQWQsSUFBbUIsQ0FBbkIsSUFBd0IsS0FBS1AsUUFBTCxDQUFjTyxDQUFkLEdBQWtCLEtBQUtULE1BQXZCLElBQWlDLEtBQUtGLE1BQUwsQ0FBWUUsTUFBekUsRUFBaUY7QUFDN0UsYUFBS0ksU0FBTCxHQUFpQixDQUFDLEtBQUtBLFNBQXZCO0FBQ0g7QUFDSjs7O1dBRUQscUNBQTRCRixRQUE1QixFQUErQztBQUMzQyxXQUFLRSxTQUFMLEdBQWlCVyxJQUFJLENBQUNJLEtBQUwsQ0FBV2pCLFFBQVEsQ0FBQ08sQ0FBVCxHQUFhLEtBQUtQLFFBQUwsQ0FBY08sQ0FBdEMsRUFBeUNQLFFBQVEsQ0FBQ00sQ0FBVCxHQUFhLEtBQUtOLFFBQUwsQ0FBY00sQ0FBcEUsQ0FBakI7QUFDSDs7OztFQXhDMEJZLGE7O0FBQS9CQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy90cy9zaGFwZXMvUmVjdGFuZ2xlLnRzP2FjZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIc2x9IGZyb20gXCIuLi9Db2xvcnMvSHNsXCI7XG5pbXBvcnQge1JnYn0gZnJvbSBcIi4uL0NvbG9ycy9SZ2JcIjtcbmltcG9ydCB7SVBvc2l0aW9ufSBmcm9tIFwiLi4vVHlwZXMvSVBvc2l0aW9uXCI7XG5pbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZVwiO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuLi9DYW52YXNcIjtcblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogQ2FudmFzLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I/OiBIc2wgfCBSZ2IsIHBvc2l0aW9uPzogSVBvc2l0aW9uLCBzcGVlZD86IG51bWJlciwgZGlyZWN0aW9uPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcywgcG9zaXRpb24sIGNvbG9yLCBzcGVlZCwgZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7IC8vIHNhdXZlZ2FyZGUgbCfDqXRhdCBhY3R1ZWwgZHUgY29udGV4dGVcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCAvIDIpOyAvLyBkw6lwbGFjZSBsJ29yaWdpbmUgZHUgc3lzdMOobWUgZGUgY29vcmRvbm7DqWVzIGF1IGNlbnRyZSBkdSByZWN0YW5nbGVcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuZGlyZWN0aW9uKTsgLy8gYXBwbGlxdWUgbGEgdHJhbnNmb3JtYXRpb24gZGUgcm90YXRpb25cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgLy8gZGVzc2luZSBsZSByZWN0YW5nbGUgY2VudHLDqSBzdXIgbCdvcmlnaW5lXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTsgLy8gcmVzdGF1cmUgbCfDqXRhdCBwcsOpY8OpZGVudCBkdSBjb250ZXh0ZVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgLy90aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID49IHRoaXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguUEkgLSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gMCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+PSB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uQnlNb3VzZVBvc2l0aW9uKHBvc2l0aW9uOiBJUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKHBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnksIHBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiUmVjdGFuZ2xlIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInBvc2l0aW9uIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJjdHgiLCJzYXZlIiwidHJhbnNsYXRlIiwieCIsInkiLCJyb3RhdGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiLCJjbGVhclJlY3QiLCJNYXRoIiwiY29zIiwic2luIiwiUEkiLCJhdGFuMiIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Shape.ts":
/*!********************************!*\
  !*** ./src/ts/shapes/Shape.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Shape = void 0;\n\nvar Rgb_1 = __webpack_require__(/*! ../Colors/Rgb */ \"./src/ts/Colors/Rgb.ts\");\n\nvar Shape = /*#__PURE__*/_createClass(function Shape(canvas, position, color, speed, direction) {\n  _classCallCheck(this, Shape);\n\n  if (canvas === undefined) {\n    throw Error('Value error undefined HTMLCanvasElement in Shape');\n  }\n\n  this.canvas = canvas;\n  this.ctx = canvas.ctx;\n\n  if (position !== undefined) {\n    if (position.x >= 0 && position.y >= 0) {\n      this.position = position;\n    } else {\n      this.position = {\n        x: 0,\n        y: 0\n      };\n    }\n  } else {\n    this.position = {\n      x: 0,\n      y: 0\n    };\n  }\n\n  this.color = color !== undefined ? color : new Rgb_1.Rgb(0, 0, 0);\n  this.speed = speed > 0 ? speed : 1;\n  this.direction = direction >= 0 ? direction : Math.random() * Math.PI * 2;\n});\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2hhcGVzL1NoYXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFHc0JBLEssNkJBUWxCLGVBQXNCQyxNQUF0QixFQUFzQ0MsUUFBdEMsRUFBNERDLEtBQTVELEVBQStFQyxLQUEvRSxFQUErRkMsU0FBL0YsRUFBaUg7QUFBQTs7QUFDN0csTUFBSUosTUFBTSxLQUFLSyxTQUFmLEVBQTBCO0FBQ3RCLFVBQU1DLEtBQUssQ0FBQyxrREFBRCxDQUFYO0FBQ0g7O0FBQ0QsT0FBS04sTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS08sR0FBTCxHQUFXUCxNQUFNLENBQUNPLEdBQWxCOztBQUNBLE1BQUlOLFFBQVEsS0FBS0ksU0FBakIsRUFBNEI7QUFDeEIsUUFBSUosUUFBUSxDQUFDTyxDQUFULElBQWMsQ0FBZCxJQUFtQlAsUUFBUSxDQUFDUSxDQUFULElBQWMsQ0FBckMsRUFBd0M7QUFDcEMsV0FBS1IsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLQSxRQUFMLEdBQWdCO0FBQUNPLFNBQUMsRUFBQyxDQUFIO0FBQU1DLFNBQUMsRUFBQztBQUFSLE9BQWhCO0FBQ0g7QUFDSixHQU5ELE1BTU87QUFDSCxTQUFLUixRQUFMLEdBQWdCO0FBQUNPLE9BQUMsRUFBQyxDQUFIO0FBQU1DLE9BQUMsRUFBQztBQUFSLEtBQWhCO0FBQ0g7O0FBQ0QsT0FBS1AsS0FBTCxHQUFhQSxLQUFLLEtBQUtHLFNBQVYsR0FBc0JILEtBQXRCLEdBQThCLElBQUlRLFNBQUosQ0FBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBM0M7QUFDQSxPQUFLUCxLQUFMLEdBQWFBLEtBQUssR0FBRyxDQUFSLEdBQVlBLEtBQVosR0FBb0IsQ0FBakM7QUFDQSxPQUFLQyxTQUFMLEdBQWlCQSxTQUFTLElBQUksQ0FBYixHQUFpQkEsU0FBakIsR0FBNkJPLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDRSxFQUFyQixHQUEwQixDQUF4RTtBQUNILEM7O0FBMUJMQyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL3NoYXBlcy9TaGFwZS50cz84MTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBvc2l0aW9ufSBmcm9tIFwiLi4vVHlwZXMvSVBvc2l0aW9uXCI7XG5pbXBvcnQge0hzbH0gZnJvbSBcIi4uL0NvbG9ycy9Ic2xcIjtcbmltcG9ydCB7UmdifSBmcm9tIFwiLi4vQ29sb3JzL1JnYlwiO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuLi9DYW52YXNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNoYXBlIHtcbiAgICBwcm90ZWN0ZWQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBJUG9zaXRpb247XG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGRpcmVjdGlvbjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBjb2xvcjogSHNsIHwgUmdiO1xuICAgIHByb3RlY3RlZCBjYW52YXM6IENhbnZhcztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjYW52YXM6IENhbnZhcywgcG9zaXRpb24/OiBJUG9zaXRpb24sIGNvbG9yPzogSHNsIHwgUmdiLCBzcGVlZD86IG51bWJlciwgZGlyZWN0aW9uPzogbnVtYmVyKSB7XG4gICAgICAgIGlmIChjYW52YXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1ZhbHVlIGVycm9yIHVuZGVmaW5lZCBIVE1MQ2FudmFzRWxlbWVudCBpbiBTaGFwZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5jdHg7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA+PSAwICYmIHBvc2l0aW9uLnkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OjAsIHk6MH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6MCwgeTowfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgIT09IHVuZGVmaW5lZCA/IGNvbG9yIDogbmV3IFJnYigwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkID4gMCA/IHNwZWVkIDogMTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gPj0gMCA/IGRpcmVjdGlvbiA6IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlNoYXBlIiwiY2FudmFzIiwicG9zaXRpb24iLCJjb2xvciIsInNwZWVkIiwiZGlyZWN0aW9uIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJjdHgiLCJ4IiwieSIsIlJnYl8xIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/shapes/Shape.ts\n");

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