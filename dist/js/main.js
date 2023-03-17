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

/***/ "./src/ts/Colors/Hsl.ts":
/*!******************************!*\
  !*** ./src/ts/Colors/Hsl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Hsl = void 0;\n\nvar Hsl = function () {\n  function Hsl(hue, saturation, lightness) {\n    var _this = this;\n\n    this.toString = function () {\n      return \"hsl(\".concat(_this.hue, \",\").concat(_this.saturation, \"%,\").concat(_this.lightness, \"%)\");\n    };\n\n    this.hue = hue;\n    this.saturation = saturation;\n    this.lightness = lightness;\n  }\n\n  return Hsl;\n}();\n\nexports.Hsl = Hsl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29sb3JzL0hzbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBS0ksZUFBWUEsR0FBWixFQUF5QkMsVUFBekIsRUFBNkNDLFNBQTdDLEVBQThEO0FBQTlEOztBQU1PLG9CQUFXO0FBQ2QsYUFBTyxjQUFPQyxLQUFJLENBQUNILEdBQVosRUFBZSxHQUFmLEVBQWVJLE1BQWYsQ0FBbUJELEtBQUksQ0FBQ0YsVUFBeEIsRUFBa0MsSUFBbEMsRUFBa0NHLE1BQWxDLENBQXVDRCxLQUFJLENBQUNELFNBQTVDLEVBQXFELElBQXJELENBQVA7QUFDSCxLQUZNOztBQUxILFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7QUFLTDtBQUFDLENBZEQ7O0FBQWFHLFdBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvQ29sb3JzL0hzbC50cz85ZDEwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIc2wge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzYXR1cmF0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsaWdodG5lc3M6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGh1ZTogbnVtYmVyLCBzYXR1cmF0aW9uOiBudW1iZXIsIGxpZ2h0bmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaHVlID0gaHVlO1xuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBzYXR1cmF0aW9uO1xuICAgICAgICB0aGlzLmxpZ2h0bmVzcyA9IGxpZ2h0bmVzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGBoc2woJHt0aGlzLmh1ZX0sJHt0aGlzLnNhdHVyYXRpb259JSwke3RoaXMubGlnaHRuZXNzfSUpYDtcbiAgICB9XG59Il0sIm5hbWVzIjpbImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJfdGhpcyIsImNvbmNhdCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Colors/Hsl.ts\n");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Hsl_1 = __webpack_require__(/*! ./Colors/Hsl */ \"./src/ts/Colors/Hsl.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar rect = new Rectangle_1.Rectangle(canvas, new Hsl_1.Hsl(130, 80, 40), {\n  x: 40,\n  y: 100\n}, 20, 70, 8);\n\nfunction main() {\n  animate();\n}\n\nfunction animate() {\n  rect.clear();\n  rect.update();\n  rect.draw();\n  requestAnimationFrame(animate);\n}\n\nmain();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLHFCQUFKLENBQWNKLE1BQWQsRUFBc0IsSUFBSUssU0FBSixDQUFRLEdBQVIsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBQXRCLEVBQTRDO0FBQUNDLEdBQUMsRUFBRSxFQUFKO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQTVDLEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLEVBQXFFLENBQXJFLENBQWI7O0FBRUEsU0FBU0MsSUFBVCxHQUFhO0FBQ1RDLFNBQU87QUFDVjs7QUFFRCxTQUFTQSxPQUFULEdBQWdCO0FBQ1pOLE1BQUksQ0FBQ08sS0FBTDtBQUNBUCxNQUFJLENBQUNRLE1BQUw7QUFDQVIsTUFBSSxDQUFDUyxJQUFMO0FBQ0FDLHVCQUFxQixDQUFDSixPQUFELENBQXJCO0FBQ0g7O0FBR0RELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy90cy9tYWluLnRzP2U4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3NoYXBlcy9SZWN0YW5nbGVcIjtcbmltcG9ydCB7SHNsfSBmcm9tIFwiLi9Db2xvcnMvSHNsXCI7XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJyk7XG5cbmNvbnN0IHJlY3QgPSBuZXcgUmVjdGFuZ2xlKGNhbnZhcywgbmV3IEhzbCgxMzAsIDgwLCA0MCksIHt4OiA0MCwgeTogMTAwfSwgMjAsIDcwLCA4KTtcblxuZnVuY3Rpb24gbWFpbigpOiB2b2lkIHtcbiAgICBhbmltYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVjdC5jbGVhcigpO1xuICAgIHJlY3QudXBkYXRlKCk7XG4gICAgcmVjdC5kcmF3KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuXG5cbm1haW4oKTsiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlY3QiLCJSZWN0YW5nbGVfMSIsIkhzbF8xIiwieCIsInkiLCJtYWluIiwiYW5pbWF0ZSIsImNsZWFyIiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Rectangle = function () {\n  function Rectangle(canvas, color, position, width, height, speed) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n    this.position = position;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.speed = speed;\n    this.alpha = Math.random() * Math.PI * 2;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = \"\".concat(this.color);\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    return this;\n  };\n\n  Rectangle.prototype.clear = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  };\n\n  Rectangle.prototype.update = function () {\n    if (this.position.x + this.width >= this.canvas.width && Math.cos(this.alpha) > 0 || this.position.x <= 0 && Math.cos(this.alpha) < 0) {\n      this.alpha = Math.PI - this.alpha;\n    } else if (this.position.y + this.height >= this.canvas.height && Math.sin(this.alpha) > 0 || this.position.y <= 0 && Math.sin(this.alpha) < 0) {\n      this.alpha = 2 * Math.PI - this.alpha;\n    }\n\n    this.position.x += this.speed * Math.cos(this.alpha);\n    this.position.y += this.speed * Math.sin(this.alpha);\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUlBO0FBVUkscUJBQVlBLE1BQVosRUFBdUNDLEtBQXZDLEVBQXlEQyxRQUF6RCxFQUE4RUMsS0FBOUUsRUFBNkZDLE1BQTdGLEVBQTZHQyxLQUE3RyxFQUEwSDtBQUN0SCxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLTSxHQUFMLEdBQVdOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixJQUFsQixDQUFYO0FBQ0EsU0FBS0wsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRyxLQUFMLEdBQWFDLElBQUksQ0FBQ0MsTUFBTCxLQUFlRCxJQUFJLENBQUNFLEVBQXBCLEdBQXVCLENBQXBDO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS04sR0FBTCxDQUFTTyxTQUFULEdBQXFCLFVBQUcsS0FBS1osS0FBUixDQUFyQjtBQUNBLFNBQUtLLEdBQUwsQ0FBU1EsUUFBVCxDQUFrQixLQUFLWixRQUFMLENBQWNhLENBQWhDLEVBQW1DLEtBQUtiLFFBQUwsQ0FBY2MsQ0FBakQsRUFBb0QsS0FBS2IsS0FBekQsRUFBZ0UsS0FBS0MsTUFBckU7QUFDQSxXQUFPLElBQVA7QUFDSCxHQUpEOztBQU1BUTtBQUVJLFNBQUtOLEdBQUwsQ0FBU1csU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLakIsTUFBTCxDQUFZRyxLQUFyQyxFQUE0QyxLQUFLSCxNQUFMLENBQVlJLE1BQXhEO0FBQ0gsR0FIRDs7QUFLQVE7QUFFSSxRQUFLLEtBQUtWLFFBQUwsQ0FBY2EsQ0FBZCxHQUFrQixLQUFLWixLQUF2QixJQUFnQyxLQUFLSCxNQUFMLENBQVlHLEtBQTVDLElBQXFETSxJQUFJLENBQUNTLEdBQUwsQ0FBUyxLQUFLVixLQUFkLElBQXVCLENBQTdFLElBQ0MsS0FBS04sUUFBTCxDQUFjYSxDQUFkLElBQW1CLENBQW5CLElBQXdCTixJQUFJLENBQUNTLEdBQUwsQ0FBUyxLQUFLVixLQUFkLElBQXVCLENBRHBELEVBQ3dEO0FBQ3BELFdBQUtBLEtBQUwsR0FBYUMsSUFBSSxDQUFDRSxFQUFMLEdBQVUsS0FBS0gsS0FBNUI7QUFDSCxLQUhELE1BR08sSUFBSyxLQUFLTixRQUFMLENBQWNjLENBQWQsR0FBa0IsS0FBS1osTUFBdkIsSUFBaUMsS0FBS0osTUFBTCxDQUFZSSxNQUE3QyxJQUF1REssSUFBSSxDQUFDVSxHQUFMLENBQVMsS0FBS1gsS0FBZCxJQUF1QixDQUEvRSxJQUNOLEtBQUtOLFFBQUwsQ0FBY2MsQ0FBZCxJQUFtQixDQUFuQixJQUF3QlAsSUFBSSxDQUFDVSxHQUFMLENBQVMsS0FBS1gsS0FBZCxJQUF1QixDQUQ3QyxFQUNpRDtBQUNwRCxXQUFLQSxLQUFMLEdBQWEsSUFBRUMsSUFBSSxDQUFDRSxFQUFQLEdBQVksS0FBS0gsS0FBOUI7QUFDSDs7QUFDRCxTQUFLTixRQUFMLENBQWNhLENBQWQsSUFBbUIsS0FBS1YsS0FBTCxHQUFhSSxJQUFJLENBQUNTLEdBQUwsQ0FBUyxLQUFLVixLQUFkLENBQWhDO0FBQ0EsU0FBS04sUUFBTCxDQUFjYyxDQUFkLElBQW1CLEtBQUtYLEtBQUwsR0FBYUksSUFBSSxDQUFDVSxHQUFMLENBQVMsS0FBS1gsS0FBZCxDQUFoQztBQUNILEdBWEQ7O0FBWUo7QUFBQyxDQTVDRDs7QUFBYVksaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cz9hY2QxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHNsfSBmcm9tIFwiLi4vQ29sb3JzL0hzbFwiO1xuaW1wb3J0IHtSZ2J9IGZyb20gXCIuLi9Db2xvcnMvUmdiXCI7XG5pbXBvcnQge0lQb3NpdGlvbn0gZnJvbSBcIi4vSVBvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcG9zaXRpb246IElQb3NpdGlvbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbG9yOiBIc2wgfCBSZ2I7XG4gICAgcHJpdmF0ZSBhbHBoYTogbnVtYmVyO1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNvbG9yOiBIc2wgfCBSZ2IsIHBvc2l0aW9uOiBJUG9zaXRpb24sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMuYWxwaGEgPSBNYXRoLnJhbmRvbSgpKiBNYXRoLlBJKjI7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIC8vZXg6IE1hdGguY29zKHRoaXMuYWxwaGEpIDwgMCAtLT4gcmVjdGFuZ2xlIGJvdWdlIG5lZ2F0aXZlIHN1ciB4XG4gICAgICAgIGlmICgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+PSB0aGlzLmNhbnZhcy53aWR0aCAmJiBNYXRoLmNvcyh0aGlzLmFscGhhKSA+IDApIHx8XG4gICAgICAgICAgICAodGhpcy5wb3NpdGlvbi54IDw9IDAgJiYgTWF0aC5jb3ModGhpcy5hbHBoYSkgPCAwKSkge1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IE1hdGguUEkgLSB0aGlzLmFscGhhO1xuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+PSB0aGlzLmNhbnZhcy5oZWlnaHQgJiYgTWF0aC5zaW4odGhpcy5hbHBoYSkgPiAwKSB8fFxuICAgICAgICAgICAgKHRoaXMucG9zaXRpb24ueSA8PSAwICYmIE1hdGguc2luKHRoaXMuYWxwaGEpIDwgMCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWxwaGEgPSAyKk1hdGguUEkgLSB0aGlzLmFscGhhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbHBoYSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5hbHBoYSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJjb2xvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJzcGVlZCIsImN0eCIsImdldENvbnRleHQiLCJhbHBoYSIsIk1hdGgiLCJyYW5kb20iLCJQSSIsIlJlY3RhbmdsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJjbGVhclJlY3QiLCJjb3MiLCJzaW4iLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

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