webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "D:\\Udemy\\nextjs\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js",
    _s = $RefreshSig$();




// import { addUser } from "../store/slice";

 // const meetUps = [
//   {
//     id: "m1",
//     title: "num1",
//     image:
//       "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Feeling-Sad-Whatsapp-DP-Pics-Download-Free-300x169.jpg",
//     address: "some address",
//     description: "first MeetUp",
//   },
//   {
//     id: "m2",
//     title: "num2",
//     image:
//       "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Feeling-Sad-Whatsapp-DP-Pics-Download-Free-300x169.jpg",
//     address: "some address",
//     description: "second MeetUp",
//   },
// ];

function HomePage(_ref) {
  _s();

  var meetups = _ref.meetups;
  var x = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.users;
  });
  console.log(x); //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(addUser());
  //   }, []);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), " "]
  }, void 0, true);
}

_s(HomePage, "TegtvTQXqVRMzEiYMAvlZKmGVXE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJtZWV0dXBzIiwieCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDN0IsTUFBTUMsQ0FBQyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLEtBQWpCO0FBQUEsR0FBRCxDQUFyQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBWixFQUY2QixDQUc3QjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFRDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFDbUMsR0FEbkM7QUFBQSxrQkFERjtBQUtEOztHQVpRRCxRO1VBQ0dHLHVEOzs7S0FESEgsUTs7QUF3Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4YzM3Nzk0ZTVlZjRkNjk4ZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldFVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IGRiIGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG4vLyBpbXBvcnQgeyBhZGRVc2VyIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vIGNvbnN0IG1lZXRVcHMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTFcIixcclxuLy8gICAgIHRpdGxlOiBcIm51bTFcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vd3d3LndoYXRzYXBwaW1hZ2VzLmluL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzExL0JveXMtRmVlbGluZy1TYWQtV2hhdHNhcHAtRFAtUGljcy1Eb3dubG9hZC1GcmVlLTMwMHgxNjkuanBnXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcInNvbWUgYWRkcmVzc1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiZmlyc3QgTWVldFVwXCIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogXCJtMlwiLFxyXG4vLyAgICAgdGl0bGU6IFwibnVtMlwiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly93d3cud2hhdHNhcHBpbWFnZXMuaW4vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvQm95cy1GZWVsaW5nLVNhZC1XaGF0c2FwcC1EUC1QaWNzLURvd25sb2FkLUZyZWUtMzAweDE2OS5qcGdcIixcclxuLy8gICAgIGFkZHJlc3M6IFwic29tZSBhZGRyZXNzXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJzZWNvbmQgTWVldFVwXCIsXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHsgbWVldHVwcyB9KSB7XHJcbiAgY29uc3QgeCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcnMpO1xyXG4gIGNvbnNvbGUubG9nKHgpO1xyXG4gIC8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgZGlzcGF0Y2goYWRkVXNlcigpKTtcclxuICAvLyAgIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lZXRVcExpc3QgbWVldHVwcz17bWVldHVwc30gLz57XCIgXCJ9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZG9jcyA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJtZWV0dXBzXCIpKS50aGVuKChzbmFwc2hvdCkgPT5cclxuICAgIHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9O1xyXG4gICAgfSlcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBtZWV0dXBzOiBkb2NzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==