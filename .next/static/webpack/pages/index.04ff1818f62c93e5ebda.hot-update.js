webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CreateContractForm.js":
/*!******************************************!*\
  !*** ./components/CreateContractForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/daemin/Desktop/escrow-redo/components/CreateContractForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    paper: {\n      marginTop: theme.spacing(8),\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\"\n    },\n    avatar: {\n      margin: theme.spacing(1),\n      backgroundColor: theme.palette.secondary.main\n    },\n    form: {\n      width: \"100%\",\n      // Fix IE 11 issue.\n      marginTop: theme.spacing(1)\n    },\n    submit: {\n      margin: theme.spacing(3, 0, 2)\n    }\n  };\n});\n\nvar CreateContractForm = function CreateContractForm() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      checker = _useState[0],\n      setChecker = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      reciever = _useState2[0],\n      setReciever = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      wei = _useState3[0],\n      setWei = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(checker, reciever, wei);\n  }, [checker, reciever, wei]);\n\n  var formatForm = function formatForm(e) {\n    e.preventDefault();\n\n    if (e.target.name === \"checker\") {\n      setChecker(e.target.value);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"center\",\n    children: [\"CreateContract\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: null,\n      className: classes.form,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        required: true,\n        label: \"reciever\",\n        name: \"reciever\",\n        value: reciever,\n        onChange: formatForm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        required: true,\n        label: \"checker\",\n        name: \"checker\",\n        value: checker,\n        onChange: formatForm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        required: true,\n        label: \"wei\",\n        name: \"wei\",\n        value: wei,\n        onChange: formatForm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        variant: \"outlined\",\n        color: \"primary\",\n        type: \"submit\",\n        className: classes.submit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CreateContractForm, \"LoSTLk/AanO4euFs4IhLmirLgqE=\", false, function () {\n  return [useStyles];\n});\n\n_c = CreateContractForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateContractForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateContractForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVDb250cmFjdEZvcm0uanM/YmE1YyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYXBlciIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJhdmF0YXIiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsInN1Ym1pdCIsIkNyZWF0ZUNvbnRyYWN0Rm9ybSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImNoZWNrZXIiLCJzZXRDaGVja2VyIiwicmVjaWV2ZXIiLCJzZXRSZWNpZXZlciIsIndlaSIsInNldFdlaSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxTQUFLLEVBQUU7QUFDSEMsZUFBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBRFI7QUFFSEMsYUFBTyxFQUFFLE1BRk47QUFHSEMsbUJBQWEsRUFBRSxRQUhaO0FBSUhDLGdCQUFVLEVBQUU7QUFKVCxLQUQ4QjtBQU9yQ0MsVUFBTSxFQUFFO0FBQ0pDLFlBQU0sRUFBRVIsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUpNLHFCQUFlLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxTQUFkLENBQXdCQztBQUZyQyxLQVA2QjtBQVdyQ0MsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxNQURMO0FBQ2E7QUFDZlosZUFBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBRlQsS0FYK0I7QUFlckNZLFVBQU0sRUFBRTtBQUNKUCxZQUFNLEVBQUVSLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFESjtBQWY2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFvQkEsSUFBTWEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7O0FBRDZCLGtCQUdDb0Isc0RBQVEsQ0FBQyxFQUFELENBSFQ7QUFBQSxNQUd0QkMsT0FIc0I7QUFBQSxNQUdiQyxVQUhhOztBQUFBLG1CQUlHRixzREFBUSxDQUFDLEVBQUQsQ0FKWDtBQUFBLE1BSXRCRyxRQUpzQjtBQUFBLE1BSVpDLFdBSlk7O0FBQUEsbUJBS1BKLHNEQUFRLENBQUMsRUFBRCxDQUxEO0FBQUEsTUFLdEJLLEdBTHNCO0FBQUEsTUFLakJDLE1BTGlCOztBQU83QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFaLEVBQXFCRSxRQUFyQixFQUErQkUsR0FBL0I7QUFDSCxHQUZRLEVBRU4sQ0FBQ0osT0FBRCxFQUFVRSxRQUFWLEVBQW9CRSxHQUFwQixDQUZNLENBQVQ7O0FBSUEsTUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQVQsS0FBa0IsU0FBdEIsRUFBaUM7QUFDN0JaLGdCQUFVLENBQUNTLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUFWLENBQVY7QUFDSDtBQUNKLEdBTkQ7O0FBUUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLEtBQTFCO0FBQWdDLFdBQU8sRUFBQyxRQUF4QztBQUFpRCxjQUFVLEVBQUMsUUFBNUQ7QUFBQSw4Q0FFSTtBQUFNLGNBQVEsRUFBRSxJQUFoQjtBQUFzQixlQUFTLEVBQUVoQixPQUFPLENBQUNKLElBQXpDO0FBQUEsOEJBQ0kscUVBQUMsMkRBQUQ7QUFDSSxnQkFBUSxNQURaO0FBRUksYUFBSyxFQUFDLFVBRlY7QUFHSSxZQUFJLEVBQUMsVUFIVDtBQUlJLGFBQUssRUFBRVEsUUFKWDtBQUtJLGdCQUFRLEVBQUVPO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUkscUVBQUMsMkRBQUQ7QUFDSSxnQkFBUSxNQURaO0FBRUksYUFBSyxFQUFDLFNBRlY7QUFHSSxZQUFJLEVBQUMsU0FIVDtBQUlJLGFBQUssRUFBRVQsT0FKWDtBQUtJLGdCQUFRLEVBQUVTO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLGVBZUkscUVBQUMsMkRBQUQ7QUFDSSxnQkFBUSxNQURaO0FBRUksYUFBSyxFQUFDLEtBRlY7QUFHSSxZQUFJLEVBQUMsS0FIVDtBQUlJLGFBQUssRUFBRUwsR0FKWDtBQUtJLGdCQUFRLEVBQUVLO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKLGVBc0JJLHFFQUFDLHdEQUFEO0FBQ0ksZUFBTyxFQUFDLFVBRFo7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLFlBQUksRUFBQyxRQUhUO0FBSUksaUJBQVMsRUFBRVgsT0FBTyxDQUFDRixNQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9DSCxDQXZERDs7R0FBTUMsa0I7VUFDY2xCLFM7OztLQURka0Isa0I7QUF5RFNBLGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DcmVhdGVDb250cmFjdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgR3JpZCxcbiAgICBtYWtlU3R5bGVzLFxuICAgIFRleHRGaWVsZCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBwYXBlcjoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gICAgc3VibWl0OiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcbiAgICB9LFxufSkpO1xuXG5jb25zdCBDcmVhdGVDb250cmFjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgY29uc3QgW2NoZWNrZXIsIHNldENoZWNrZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3JlY2lldmVyLCBzZXRSZWNpZXZlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbd2VpLCBzZXRXZWldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VyLCByZWNpZXZlciwgd2VpKTtcbiAgICB9LCBbY2hlY2tlciwgcmVjaWV2ZXIsIHdlaV0pO1xuXG4gICAgY29uc3QgZm9ybWF0Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gXCJjaGVja2VyXCIpIHtcbiAgICAgICAgICAgIHNldENoZWNrZXIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgQ3JlYXRlQ29udHJhY3RcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtudWxsfSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInJlY2lldmVyXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2lldmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlY2lldmVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWF0Rm9ybX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJjaGVja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1hdEZvcm19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndlaVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3ZWl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtYXRGb3JtfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0dyaWQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNvbnRyYWN0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateContractForm.js\n");

/***/ })

})