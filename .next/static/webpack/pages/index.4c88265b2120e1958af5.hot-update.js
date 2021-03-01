webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContractList.js":
/*!************************************!*\
  !*** ./components/ContractList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_daemin_Desktop_escrow_redo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_daemin_Desktop_escrow_redo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_daemin_Desktop_escrow_redo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_daemin_Desktop_escrow_redo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/daemin/Desktop/escrow-redo/components/ContractList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  root: {\n    maxWcontractNumth: 300\n  },\n  bullet: {\n    display: \"inline-block\",\n    margin: \"0 2px\",\n    transform: \"scale(0.8)\"\n  },\n  title: {\n    fontSize: 14\n  },\n  pos: {\n    marginBottom: 12\n  }\n});\n\nvar ContractList = function ContractList(_ref) {\n  _s();\n\n  var contractNum = _ref.contractNum,\n      contract = _ref.contract,\n      checker = _ref.checker,\n      reciever = _ref.reciever,\n      wei = _ref.wei;\n  // await window.ethereum.enable();\n  // const provcontractNumer = new ethers.provcontractNumers.Web3ProvcontractNumer(window.ethereum);\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  contract === null || contract === void 0 ? void 0 : contract.on(\"Approved\", function () {});\n\n  var approve = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_daemin_Desktop_escrow_redo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_daemin_Desktop_escrow_redo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _home_daemin_Desktop_escrow_redo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"working\");\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function approve() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardContent\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"h5\",\n        component: \"h2\",\n        className: {\n          color: red\n        },\n        children: [\"Contract #\", contractNum]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"body2\",\n        component: \"p\",\n        children: [\"Checker :\", checker]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"body2\",\n        component: \"p\",\n        children: [\"Reciever :\", reciever]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"body2\",\n        component: \"p\",\n        children: [\"Wei :\", wei]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardActions\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        color: \"primary\",\n        size: \"small\",\n        onClick: approve,\n        children: \"Approve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ContractList, \"EFfvCMLEm9QDFsZC8VlD80GytKU=\", false, function () {\n  return [useStyles];\n});\n\n_c = ContractList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContractList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmFjdExpc3QuanM/NmI3NiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1heFdjb250cmFjdE51bXRoIiwiYnVsbGV0IiwiZGlzcGxheSIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJDb250cmFjdExpc3QiLCJjb250cmFjdE51bSIsImNvbnRyYWN0IiwiY2hlY2tlciIsInJlY2lldmVyIiwid2VpIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwib24iLCJhcHByb3ZlIiwiY29uc29sZSIsImxvZyIsImNvbG9yIiwicmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxxQkFBaUIsRUFBRTtBQURqQixHQURtQjtBQUl6QkMsUUFBTSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxjQURMO0FBRUpDLFVBQU0sRUFBRSxPQUZKO0FBR0pDLGFBQVMsRUFBRTtBQUhQLEdBSmlCO0FBU3pCQyxPQUFLLEVBQUU7QUFDSEMsWUFBUSxFQUFFO0FBRFAsR0FUa0I7QUFZekJDLEtBQUcsRUFBRTtBQUNEQyxnQkFBWSxFQUFFO0FBRGI7QUFab0IsQ0FBRCxDQUE1Qjs7QUFpQkEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBdUQ7QUFBQTs7QUFBQSxNQUFwREMsV0FBb0QsUUFBcERBLFdBQW9EO0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFwQkMsUUFBb0IsUUFBcEJBLFFBQW9CO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3hFO0FBQ0E7QUFDQSxNQUFNQyxPQUFPLEdBQUdsQixTQUFTLEVBQXpCOztBQUh3RSxrQkFJNUNtQixzREFBUSxDQUFDLEtBQUQsQ0FKb0M7QUFBQSxNQUlqRUMsTUFKaUU7QUFBQSxNQUl6REMsU0FKeUQ7O0FBTXhFUCxVQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRVEsRUFBVixDQUFhLFVBQWIsRUFBeUIsWUFBTSxDQUFFLENBQWpDOztBQUVBLE1BQU1DLE9BQU87QUFBQSwyUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1pDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaOztBQURZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBGLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFJQSxzQkFDSSxxRUFBQyxzREFBRDtBQUFBLDRCQUNJLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0kscUVBQUMsNERBQUQ7QUFDSSxlQUFPLEVBQUMsSUFEWjtBQUVJLGlCQUFTLEVBQUMsSUFGZDtBQUdJLGlCQUFTLEVBQUU7QUFBRUcsZUFBSyxFQUFFQztBQUFULFNBSGY7QUFBQSxpQ0FLZWQsV0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVNJLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQTRCLGlCQUFTLEVBQUMsR0FBdEM7QUFBQSxnQ0FDY0UsT0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQVlJLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQTRCLGlCQUFTLEVBQUMsR0FBdEM7QUFBQSxpQ0FDZUMsUUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSixlQWVJLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQTRCLGlCQUFTLEVBQUMsR0FBdEM7QUFBQSw0QkFDVUMsR0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQW9CSSxxRUFBQyw2REFBRDtBQUFBLDZCQUNJLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFNBQWQ7QUFBd0IsWUFBSSxFQUFDLE9BQTdCO0FBQXFDLGVBQU8sRUFBRU0sT0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNEJILENBeENEOztHQUFNWCxZO1VBR2NaLFM7OztLQUhkWSxZO0FBMENTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udHJhY3RMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQ2FyZCxcbiAgICBDYXJkQWN0aW9ucyxcbiAgICBDYXJkQ29udGVudCxcbiAgICBtYWtlU3R5bGVzLFxuICAgIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgbWF4V2NvbnRyYWN0TnVtdGg6IDMwMCxcbiAgICB9LFxuICAgIGJ1bGxldDoge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMCAycHhcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOClcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICB9LFxuICAgIHBvczoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgIH0sXG59KTtcblxuY29uc3QgQ29udHJhY3RMaXN0ID0gKHsgY29udHJhY3ROdW0sIGNvbnRyYWN0LCBjaGVja2VyLCByZWNpZXZlciwgd2VpIH0pID0+IHtcbiAgICAvLyBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgLy8gY29uc3QgcHJvdmNvbnRyYWN0TnVtZXIgPSBuZXcgZXRoZXJzLnByb3Zjb250cmFjdE51bWVycy5XZWIzUHJvdmNvbnRyYWN0TnVtZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnRyYWN0Py5vbihcIkFwcHJvdmVkXCIsICgpID0+IHt9KTtcblxuICAgIGNvbnN0IGFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3sgY29sb3I6IHJlZCB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ29udHJhY3QgI3tjb250cmFjdE51bX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAgICAgIENoZWNrZXIgOntjaGVja2VyfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlY2lldmVyIDp7cmVjaWV2ZXJ9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgICAgICAgICAgV2VpIDp7d2VpfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXthcHByb3ZlfT5cbiAgICAgICAgICAgICAgICAgICAgQXBwcm92ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgPC9DYXJkPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cmFjdExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContractList.js\n");

/***/ })

})