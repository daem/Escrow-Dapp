webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CreateContractForm.js":
/*!******************************************!*\
  !*** ./components/CreateContractForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/daemin/Desktop/escrow-redo/components/CreateContractForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar CreateContractForm = function CreateContractForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      checker = _useState[0],\n      setChecker = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      reciever = _useState2[0],\n      setReciever = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      wei = _useState3[0],\n      setWei = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(checker, reciever, wei);\n  }, [checker, reciever, wei]);\n\n  var formatForm = function formatForm(e) {\n    e.preventDefault();\n\n    if (e.target.name === \"checker\") {\n      setChecker(e.target.value);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\",\n    children: [\"CreateContract\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: null,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        alignContent: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n          required: true,\n          label: \"reciever\",\n          name: \"reciever\",\n          value: reciever,\n          onChange: formatForm,\n          variant: \"filled\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n          required: true,\n          label: \"checker\",\n          name: \"checker\",\n          value: checker,\n          onChange: formatForm,\n          variant: \"filled\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n          required: true,\n          label: \"wei\",\n          name: \"wei\",\n          value: wei,\n          onChange: formatForm,\n          variant: \"filled\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          variant: \"outlined\",\n          color: \"primary\",\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CreateContractForm, \"oAFGgiPwc0QML+QwwpHY1NJzbrc=\");\n\n_c = CreateContractForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateContractForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateContractForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVDb250cmFjdEZvcm0uanM/YmE1YyJdLCJuYW1lcyI6WyJDcmVhdGVDb250cmFjdEZvcm0iLCJ1c2VTdGF0ZSIsImNoZWNrZXIiLCJzZXRDaGVja2VyIiwicmVjaWV2ZXIiLCJzZXRSZWNpZXZlciIsIndlaSIsInNldFdlaSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLEVBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBQUEsbUJBRUdGLHNEQUFRLENBQUMsRUFBRCxDQUZYO0FBQUEsTUFFdEJHLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSxtQkFHUEosc0RBQVEsQ0FBQyxFQUFELENBSEQ7QUFBQSxNQUd0QkssR0FIc0I7QUFBQSxNQUdqQkMsTUFIaUI7O0FBSzdCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQVosRUFBcUJFLFFBQXJCLEVBQStCRSxHQUEvQjtBQUNILEdBRlEsRUFFTixDQUFDSixPQUFELEVBQVVFLFFBQVYsRUFBb0JFLEdBQXBCLENBRk0sQ0FBVDs7QUFJQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxRQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFBVCxLQUFrQixTQUF0QixFQUFpQztBQUM3QlosZ0JBQVUsQ0FBQ1MsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBQVYsQ0FBVjtBQUNIO0FBQ0osR0FORDs7QUFRQSxzQkFDSSxxRUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDhDQUVJO0FBQU0sY0FBUSxFQUFFLElBQWhCO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBTSxvQkFBWSxFQUFDLFFBQW5CO0FBQUEsZ0NBQ0kscUVBQUMsMkRBQUQ7QUFDSSxrQkFBUSxNQURaO0FBRUksZUFBSyxFQUFDLFVBRlY7QUFHSSxjQUFJLEVBQUMsVUFIVDtBQUlJLGVBQUssRUFBRVosUUFKWDtBQUtJLGtCQUFRLEVBQUVPLFVBTGQ7QUFNSSxpQkFBTyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVNJLHFFQUFDLDJEQUFEO0FBQ0ksa0JBQVEsTUFEWjtBQUVJLGVBQUssRUFBQyxTQUZWO0FBR0ksY0FBSSxFQUFDLFNBSFQ7QUFJSSxlQUFLLEVBQUVULE9BSlg7QUFLSSxrQkFBUSxFQUFFUyxVQUxkO0FBTUksaUJBQU8sRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFpQkkscUVBQUMsMkRBQUQ7QUFDSSxrQkFBUSxNQURaO0FBRUksZUFBSyxFQUFDLEtBRlY7QUFHSSxjQUFJLEVBQUMsS0FIVDtBQUlJLGVBQUssRUFBRUwsR0FKWDtBQUtJLGtCQUFRLEVBQUVLLFVBTGQ7QUFNSSxpQkFBTyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkosZUF5QkkscUVBQUMsd0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFVBQWhCO0FBQTJCLGVBQUssRUFBQyxTQUFqQztBQUEyQyxjQUFJLEVBQUMsUUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9DSCxDQXJERDs7R0FBTVgsa0I7O0tBQUFBLGtCO0FBdURTQSxpRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3JlYXRlQ29udHJhY3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEdyaWQsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ3JlYXRlQ29udHJhY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjaGVja2VyLCBzZXRDaGVja2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtyZWNpZXZlciwgc2V0UmVjaWV2ZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3dlaSwgc2V0V2VpXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tlciwgcmVjaWV2ZXIsIHdlaSk7XG4gICAgfSwgW2NoZWNrZXIsIHJlY2lldmVyLCB3ZWldKTtcblxuICAgIGNvbnN0IGZvcm1hdEZvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09IFwiY2hlY2tlclwiKSB7XG4gICAgICAgICAgICBzZXRDaGVja2VyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgICAgIENyZWF0ZUNvbnRyYWN0XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bnVsbH0+XG4gICAgICAgICAgICAgICAgPEdyaWQgYWxpZ25Db250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInJlY2lldmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWNpZXZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVjaWV2ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWF0Rm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJjaGVja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGVja2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1hdEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3ZWlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dlaX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtYXRGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNvbnRyYWN0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateContractForm.js\n");

/***/ })

})