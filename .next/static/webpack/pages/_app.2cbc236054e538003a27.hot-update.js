webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./store/slice.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-cookie-wrapper */ "./node_modules/next-redux-cookie-wrapper/dist/index.js");
/* harmony import */ var next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3__);



 // const makeStore =wrapMakeStore (() =>
//   configureStore({
//     reducer: {
//       users: usersSlice,
//     },
//   }));

var makeStore = Object(next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3__["wrapMakeStore"])(function () {
  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: {
      users: _slice__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    middleware: function middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().prepend(Object(next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_3__["nextReduxCookieMiddleware"])({
        subtrees: ["my.subtree"]
      }));
    }
  });
});
var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsibWFrZVN0b3JlIiwid3JhcE1ha2VTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInVzZXJzIiwidXNlcnNTbGljZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInByZXBlbmQiLCJuZXh0UmVkdXhDb29raWVNaWRkbGV3YXJlIiwic3VidHJlZXMiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsK0VBQWEsQ0FBQztBQUFBLFNBQzlCQyx1RUFBYyxDQUFDO0FBQ2JDLFdBQU8sRUFBRTtBQUFFQyxXQUFLLEVBQUVDLDhDQUFVQTtBQUFuQixLQURJO0FBRWJDLGNBQVUsRUFBRSxvQkFBQ0Msb0JBQUQ7QUFBQSxhQUNWQSxvQkFBb0IsR0FBR0MsT0FBdkIsQ0FDRUMsMkZBQXlCLENBQUM7QUFDeEJDLGdCQUFRLEVBQUUsQ0FBQyxZQUFEO0FBRGMsT0FBRCxDQUQzQixDQURVO0FBQUE7QUFGQyxHQUFELENBRGdCO0FBQUEsQ0FBRCxDQUEvQjtBQVdPLElBQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ1osU0FBRCxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJjYmMyMzYwNTRlNTM4MDAzYTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB1c2Vyc1NsaWNlIGZyb20gXCIuL3NsaWNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgbmV4dFJlZHV4Q29va2llTWlkZGxld2FyZSxcclxuICB3cmFwTWFrZVN0b3JlLFxyXG59IGZyb20gXCJuZXh0LXJlZHV4LWNvb2tpZS13cmFwcGVyXCI7XHJcbi8vIGNvbnN0IG1ha2VTdG9yZSA9d3JhcE1ha2VTdG9yZSAoKCkgPT5cclxuLy8gICBjb25maWd1cmVTdG9yZSh7XHJcbi8vICAgICByZWR1Y2VyOiB7XHJcbi8vICAgICAgIHVzZXJzOiB1c2Vyc1NsaWNlLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KSk7XHJcbmNvbnN0IG1ha2VTdG9yZSA9IHdyYXBNYWtlU3RvcmUoKCkgPT5cclxuICBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7IHVzZXJzOiB1c2Vyc1NsaWNlIH0sXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkucHJlcGVuZChcclxuICAgICAgICBuZXh0UmVkdXhDb29raWVNaWRkbGV3YXJlKHtcclxuICAgICAgICAgIHN1YnRyZWVzOiBbXCJteS5zdWJ0cmVlXCJdLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=