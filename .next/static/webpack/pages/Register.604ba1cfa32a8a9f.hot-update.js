"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Register",{

/***/ "./pages/Register.jsx":
/*!****************************!*\
  !*** ./pages/Register.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// import { useMoralis } from \"react-moralis\";\n\nvar Register = function() {\n    _s();\n    // const { authenticate, isAuthenticated, user } = useMoralis();\n    var isAuthenticated = true;\n    var isLogged = \"false\";\n    // const [userLogged,setUserLogged] =useState(false)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        ConPassword: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var username = formData.username, email = formData.email, password = formData.password, ConPassword = formData.ConPassword;\n    var onChange = function(e) {\n        return setFormData((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, formData), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, e.target.name, e.target.value)));\n    };\n    var onSubmit = function(e) {\n        e.preventDefault();\n        if (password === ConPassword) {\n            signup(username, email, password, ConPassword);\n        }\n        setUserLogged(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isAuthenticated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return authenticate();\n                    },\n                    children: \"Authenticate\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Moralis-Hackathon\\\\pages\\\\Register.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this),\n                !isLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"form2\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Moralis-Hackathon\\\\pages\\\\Register.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"form3\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Moralis-Hackathon\\\\pages\\\\Register.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 22\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n};\n_s(Register, \"sH2sCuUhGnqSNUVz2OgmKjKNxHQ=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SZWdpc3Rlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXVDO0FBQ3ZDLDhDQUE4QztBQUNJO0FBQ2xELElBQU1HLFFBQVEsR0FBRyxXQUFNOztJQUNuQixnRUFBZ0U7SUFDaEUsSUFBSUMsZUFBZSxHQUFHLElBQUk7SUFDMUIsSUFBSUMsUUFBUSxHQUFHLE9BQU87SUFDdEIsb0RBQW9EO0lBQ3BELElBQWdDSixHQUs5QixHQUw4QkEsK0NBQVEsQ0FBQztRQUNyQ0ssUUFBUSxFQUFFLEVBQUU7UUFDWkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsUUFBUSxFQUFFLEVBQUU7UUFDWkMsV0FBVyxFQUFFLEVBQUU7S0FDbEIsQ0FBQyxFQUxLQyxRQUFRLEdBQWlCVCxHQUs5QixHQUxhLEVBQUVVLFdBQVcsR0FBSVYsR0FLOUIsR0FMMEI7SUFNNUIsSUFBUUssUUFBUSxHQUdJSSxRQUFRLENBSHBCSixRQUFRLEVBQ1pDLEtBQUssR0FFV0csUUFBUSxDQUZ4QkgsS0FBSyxFQUNMQyxRQUFRLEdBQ1FFLFFBQVEsQ0FEeEJGLFFBQVEsRUFDUkMsV0FBVyxHQUFLQyxRQUFRLENBQXhCRCxXQUFXO0lBQ2YsSUFBTUcsUUFBUSxHQUFHQyxTQUFBQSxDQUFDO2VBQUlGLFdBQVcsQ0FBQyx3S0FBS0QsUUFBUSxHQUFFLHFGQUFDRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxFQUFHRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFLENBQUM7S0FBQTtJQUNuRixJQUFNQyxRQUFRLEdBQUdKLFNBQUFBLENBQUMsRUFBSTtRQUNsQkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJVixRQUFRLEtBQUtDLFdBQVcsRUFBRTtZQUMxQlUsTUFBTSxDQUFDYixRQUFRLEVBQ1hDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxXQUFXLENBQUM7UUFDcEIsQ0FBQztRQUNEVyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXZCLENBQUM7SUFFRCxxQkFDSTtrQkFBRyxlQUFnQixrQkFDZjs7OEJBQ0ksOERBQUNDLFFBQU07b0JBQUNDLE9BQU8sRUFBRTsrQkFBTUMsWUFBWSxFQUFFO3FCQUFBOzhCQUFFLGNBQVk7Ozs7O3lCQUFTO2dCQUMzRCxDQUFDbEIsUUFBUSxpQkFDTjs4QkFDSSw0RUFBQ21CLEtBQUc7a0NBQUMsT0FFTDs7Ozs7NkJBQU07aUNBRVAsaUJBQ0YsOERBQUNBLEtBQUc7OEJBQUMsT0FFVjs7Ozs7eUJBQU07O3dCQUNQO3FCQUlKLENBQ047QUFDTCxDQUFDO0dBaERLckIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBa0RkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1JlZ2lzdGVyLmpzeD9jYmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1JlZ2lzdGVyLm1vZHVsZS5jc3NcIlxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHsgYXV0aGVudGljYXRlLCBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIgfSA9IHVzZU1vcmFsaXMoKTtcclxuICAgIHZhciBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXHJcbiAgICB2YXIgaXNMb2dnZWQgPSBcImZhbHNlXCJcclxuICAgIC8vIGNvbnN0IFt1c2VyTG9nZ2VkLHNldFVzZXJMb2dnZWRdID11c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIENvblBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgQ29uUGFzc3dvcmQgfSA9IGZvcm1EYXRhO1xyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChwYXNzd29yZCA9PT0gQ29uUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgc2lnbnVwKHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIENvblBhc3N3b3JkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRVc2VyTG9nZ2VkKHRydWUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD57KGlzQXV0aGVudGljYXRlZCkgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhdXRoZW50aWNhdGUoKX0+QXV0aGVudGljYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7IWlzTG9nZ2VkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybTNcclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUmVnaXN0ZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJpc0xvZ2dlZCIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIkNvblBhc3N3b3JkIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzaWdudXAiLCJzZXRVc2VyTG9nZ2VkIiwiYnV0dG9uIiwib25DbGljayIsImF1dGhlbnRpY2F0ZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Register.jsx\n"));

/***/ })

});