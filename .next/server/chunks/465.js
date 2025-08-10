exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 89:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoFeatures)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function loadFeatures() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../data/home/auto-features.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    if (Array.isArray(data === null || data === void 0 ? void 0 : data.features)) return data.features;
  } catch {}

  return [{
    title: 'Autonomous Cloud Automation',
    description: 'This site continually improves itself via orchestrators, factories, and CI workflows without human intervention.',
    cta: {
      label: 'See automations',
      href: 'https://github.com/Zion-Holdings/zion.app/tree/main/automation'
    },
    tags: ['CI', 'Self-healing', 'Auto-discovery']
  }];
}

function AutoFeatures() {
  const features = loadFeatures();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "py-12",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
      className: "text-3xl font-extrabold mb-4",
      children: "What this project does for you"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      className: "text-white/70 mb-8 max-w-2xl",
      children: "Continuously updated by cloud automations: new ideas, UI improvements, content sync, and error healing \u2014 all committed back to the repository."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
      children: features.map((f, i) => {
        var _f$tags;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
            className: "text-xl font-bold mb-2",
            children: f.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            className: "text-white/70 mb-3",
            children: f.description
          }), (_f$tags = f.tags) !== null && _f$tags !== void 0 && _f$tags.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "flex flex-wrap gap-2 mb-3",
            children: f.tags.map(t => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "text-xs px-2 py-1 rounded-full bg-white/10 text-white/80",
              children: t
            }, t))
          }) : null, f.cta ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
            href: f.cta.href,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "inline-block text-cyan-300 hover:text-cyan-200 underline",
              children: f.cta.label
            })
          }) : null]
        }, i);
      })
    })]
  });
}

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;