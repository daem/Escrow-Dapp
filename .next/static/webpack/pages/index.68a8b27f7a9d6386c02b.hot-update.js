webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CreateContractForm.js":
/*!******************************************!*\
  !*** ./components/CreateContractForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/daemin/Desktop/escrow-redo/components/CreateContractForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = makeStyles(function (theme) {\n  return {\n    paper: {\n      marginTop: theme.spacing(8),\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\"\n    },\n    avatar: {\n      margin: theme.spacing(1),\n      backgroundColor: theme.palette.secondary.main\n    },\n    form: {\n      width: \"100%\",\n      // Fix IE 11 issue.\n      marginTop: theme.spacing(1)\n    },\n    submit: {\n      margin: theme.spacing(3, 0, 2)\n    }\n  };\n});\n\nvar CreateContractForm = function CreateContractForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      checker = _useState[0],\n      setChecker = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      reciever = _useState2[0],\n      setReciever = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      wei = _useState3[0],\n      setWei = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(checker, reciever, wei);\n  }, [checker, reciever, wei]);\n\n  var formatForm = function formatForm(e) {\n    e.preventDefault();\n\n    if (e.target.name === \"checker\") {\n      setChecker(e.target.value);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    children: [\"CreateContract\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: null,\n      className: classes.form,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        required: true,\n        label: \"reciever\",\n        name: \"reciever\",\n        value: reciever,\n        onChange: formatForm,\n        variant: \"filled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        required: true,\n        label: \"checker\",\n        name: \"checker\",\n        value: checker,\n        onChange: formatForm,\n        variant: \"filled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        required: true,\n        label: \"wei\",\n        name: \"wei\",\n        value: wei,\n        onChange: formatForm,\n        variant: \"filled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        variant: \"outlined\",\n        color: \"primary\",\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CreateContractForm, \"oAFGgiPwc0QML+QwwpHY1NJzbrc=\");\n\n_c = CreateContractForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateContractForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateContractForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVDb250cmFjdEZvcm0uanM/YmE1YyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYXBlciIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJhdmF0YXIiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsInN1Ym1pdCIsIkNyZWF0ZUNvbnRyYWN0Rm9ybSIsInVzZVN0YXRlIiwiY2hlY2tlciIsInNldENoZWNrZXIiLCJyZWNpZXZlciIsInNldFJlY2lldmVyIiwid2VpIiwic2V0V2VpIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImZvcm1hdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxVQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFNBQUssRUFBRTtBQUNIQyxlQUFTLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FEUjtBQUVIQyxhQUFPLEVBQUUsTUFGTjtBQUdIQyxtQkFBYSxFQUFFLFFBSFo7QUFJSEMsZ0JBQVUsRUFBRTtBQUpULEtBRDhCO0FBT3JDQyxVQUFNLEVBQUU7QUFDSkMsWUFBTSxFQUFFUixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFSk0scUJBQWUsRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDO0FBRnJDLEtBUDZCO0FBV3JDQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFLE1BREw7QUFDYTtBQUNmWixlQUFTLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFGVCxLQVgrQjtBQWVyQ1ksVUFBTSxFQUFFO0FBQ0pQLFlBQU0sRUFBRVIsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQjtBQURKO0FBZjZCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQW9CQSxJQUFNYSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxFQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRXRCRyxRQUZzQjtBQUFBLE1BRVpDLFdBRlk7O0FBQUEsbUJBR1BKLHNEQUFRLENBQUMsRUFBRCxDQUhEO0FBQUEsTUFHdEJLLEdBSHNCO0FBQUEsTUFHakJDLE1BSGlCOztBQUs3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFaLEVBQXFCRSxRQUFyQixFQUErQkUsR0FBL0I7QUFDSCxHQUZRLEVBRU4sQ0FBQ0osT0FBRCxFQUFVRSxRQUFWLEVBQW9CRSxHQUFwQixDQUZNLENBQVQ7O0FBSUEsTUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQVQsS0FBa0IsU0FBdEIsRUFBaUM7QUFDN0JaLGdCQUFVLENBQUNTLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUFWLENBQVY7QUFDSDtBQUNKLEdBTkQ7O0FBUUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLEtBQTFCO0FBQWdDLFdBQU8sRUFBQyxRQUF4QztBQUFpRCxjQUFVLEVBQUMsUUFBNUQ7QUFBQSw4Q0FFSTtBQUFNLGNBQVEsRUFBRSxJQUFoQjtBQUFzQixlQUFTLEVBQUVDLE9BQU8sQ0FBQ3BCLElBQXpDO0FBQUEsOEJBQ0kscUVBQUMsMkRBQUQ7QUFDSSxnQkFBUSxNQURaO0FBRUksYUFBSyxFQUFDLFVBRlY7QUFHSSxZQUFJLEVBQUMsVUFIVDtBQUlJLGFBQUssRUFBRU8sUUFKWDtBQUtJLGdCQUFRLEVBQUVPLFVBTGQ7QUFNSSxlQUFPLEVBQUM7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFTSSxxRUFBQywyREFBRDtBQUNJLGdCQUFRLE1BRFo7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLFlBQUksRUFBQyxTQUhUO0FBSUksYUFBSyxFQUFFVCxPQUpYO0FBS0ksZ0JBQVEsRUFBRVMsVUFMZDtBQU1JLGVBQU8sRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQWlCSSxxRUFBQywyREFBRDtBQUNJLGdCQUFRLE1BRFo7QUFFSSxhQUFLLEVBQUMsS0FGVjtBQUdJLFlBQUksRUFBQyxLQUhUO0FBSUksYUFBSyxFQUFFTCxHQUpYO0FBS0ksZ0JBQVEsRUFBRUssVUFMZDtBQU1JLGVBQU8sRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkosZUF5QkkscUVBQUMsd0RBQUQ7QUFBUSxlQUFPLEVBQUMsVUFBaEI7QUFBMkIsYUFBSyxFQUFDLFNBQWpDO0FBQTJDLFlBQUksRUFBQyxRQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtDSCxDQW5ERDs7R0FBTVgsa0I7O0tBQUFBLGtCO0FBcURTQSxpRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3JlYXRlQ29udHJhY3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEdyaWQsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcGFwZXI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLCAvLyBGaXggSUUgMTEgaXNzdWUuXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICAgIHN1Ym1pdDoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXG4gICAgfSxcbn0pKTtcblxuY29uc3QgQ3JlYXRlQ29udHJhY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjaGVja2VyLCBzZXRDaGVja2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtyZWNpZXZlciwgc2V0UmVjaWV2ZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3dlaSwgc2V0V2VpXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tlciwgcmVjaWV2ZXIsIHdlaSk7XG4gICAgfSwgW2NoZWNrZXIsIHJlY2lldmVyLCB3ZWldKTtcblxuICAgIGNvbnN0IGZvcm1hdEZvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09IFwiY2hlY2tlclwiKSB7XG4gICAgICAgICAgICBzZXRDaGVja2VyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIENyZWF0ZUNvbnRyYWN0XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bnVsbH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJyZWNpZXZlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWNpZXZlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWNpZXZlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1hdEZvcm19XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImNoZWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGVja2VyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWF0Rm9ybX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndlaVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3ZWl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtYXRGb3JtfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9HcmlkPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb250cmFjdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateContractForm.js\n");

/***/ })

})