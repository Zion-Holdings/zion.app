"use strict";
(() => {
var exports = {};
exports.id = 453400;
exports.ids = [453400,890636];
exports.modules = {

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 134631:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 491645:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 594735:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 737386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   handler: () => (/* binding */ handler),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(863885);
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880237);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781413);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833932);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805164);
/* harmony import */ var private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(992275);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/dao",
        pathname: "/dao",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    distDir: ".next" || 0,
    relativeProjectDir:  false || '',
    components: {
        // default export might not exist when optimized for data only
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/dao",
    config,
    userland: private_next_pages_dao_index_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 977598:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 979428:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 992275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DaoHome)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(714396);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dao_Wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(888290);
/* harmony import */ var _utils_dao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(868101);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function DaoHome() {
  var [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [proposals, setProposals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function load() {
      return _load.apply(this, arguments);
    }
    function _load() {
      _load = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* () {
        var _env;
        var rpc = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.JsonRpcProvider(((_env = process.env) === null || _env === void 0 ? void 0 : _env.NEXT_PUBLIC_RPC_URL) || undefined, _utils_dao__WEBPACK_IMPORTED_MODULE_2__.DAO_ADDRESSES.chainId);
        var readProvider = provider || rpc;
        var contract = (0,_utils_dao__WEBPACK_IMPORTED_MODULE_2__.getGovernor)(readProvider);
        var filter = contract.filters.ProposalCreated();
        var events = yield contract.queryFilter(filter, 0, "latest");
        var mapped = yield Promise.all(events.map(/*#__PURE__*/function () {
          var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (e) {
            var _e$args, _e$args$toString, _e$args2, _e$args2$toString, _e$args3, _e$args4;
            var id = ((_e$args = e.args) === null || _e$args === void 0 || (_e$args = _e$args.proposalId) === null || _e$args === void 0 || (_e$args$toString = _e$args.toString) === null || _e$args$toString === void 0 ? void 0 : _e$args$toString.call(_e$args)) || ((_e$args2 = e.args) === null || _e$args2 === void 0 || (_e$args2 = _e$args2[0]) === null || _e$args2 === void 0 || (_e$args2$toString = _e$args2.toString) === null || _e$args2$toString === void 0 ? void 0 : _e$args2$toString.call(_e$args2)) || "";
            var description = ((_e$args3 = e.args) === null || _e$args3 === void 0 ? void 0 : _e$args3.description) || ((_e$args4 = e.args) === null || _e$args4 === void 0 ? void 0 : _e$args4[8]) || "";
            var snapshot = yield contract.proposalSnapshot(id);
            var deadline = yield contract.proposalDeadline(id);
            var state = yield contract.state(id);
            return {
              id,
              description,
              snapshot: snapshot.toString(),
              deadline: deadline.toString(),
              state
            };
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()));
        setProposals(mapped.reverse());
      });
      return _load.apply(this, arguments);
    }
    load().catch(console.error);
  }, [provider]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "max-w-4xl mx-auto p-6 space-y-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        className: "text-2xl font-semibold",
        children: "Zion DAO"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_dao_Wallet__WEBPACK_IMPORTED_MODULE_1__.Wallet, {
        onProvider: setProvider
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex gap-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/dao/create",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "px-3 py-2 rounded bg-blue-600 text-white text-sm cursor-pointer",
          children: "Create Proposal"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
      className: "text-xl font-medium mt-6",
      children: "Proposals"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "space-y-3",
      children: [proposals.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/dao/".concat(p.id),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "border rounded p-3 hover:bg-gray-50 cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-sm text-gray-500",
            children: ["ID ", p.id]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "font-medium",
            children: p.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-xs text-gray-500",
            children: ["State: ", p.state]
          })]
        })
      }, p.id)), proposals.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "text-sm text-gray-500",
        children: "No proposals found."
      })]
    })]
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(737386)));
module.exports = __webpack_exports__;

})();