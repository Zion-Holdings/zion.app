"use strict";
(() => {
var exports = {};
exports.id = 377395;
exports.ids = [377395,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 339153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LicenseComplianceAuditor)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_automation_licenses_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(424560);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function LicenseComplianceAuditor() {
  var items = _data_automation_licenses_json__WEBPACK_IMPORTED_MODULE_1__.items || [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
        children: "License Compliance Auditor"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "text-2xl font-semibold mb-2",
      children: "License Compliance Auditor"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "text-sm opacity-80 mb-4",
      children: ["Updated ", new Date(_data_automation_licenses_json__WEBPACK_IMPORTED_MODULE_1__.updatedAt).toLocaleString()]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "enhanced-card border border-gray-100 dark:border-gray-800 mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "font-medium mb-2",
        children: "Summary"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "text-sm",
        children: ["Total packages: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "tabular-nums",
          children: _data_automation_licenses_json__WEBPACK_IMPORTED_MODULE_1__.total
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
      children: [items.slice(0, 40).map((e, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "enhanced-card border border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "opacity-80",
          children: e.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "px-2 py-1 rounded bg-gray-100 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800",
          children: e.license
        })]
      }, i)), items.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "opacity-60",
        children: "No licenses found."
      })]
    })]
  });
}

/***/ }),

/***/ 424560:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"updatedAt":"2025-08-09T21:43:34.051Z","total":55,"byLicense":{"Apache-2.0":4,"UNKNOWN":1,"MIT":44,"ISC":6},"items":[{"name":"@commitlint/cli","license":"MIT"},{"name":"@commitlint/config-conventional","license":"MIT"},{"name":"@eslint/js","license":"MIT"},{"name":"@google-analytics/data","license":"Apache-2.0"},{"name":"@google/generative-ai","license":"Apache-2.0"},{"name":"@magneticwatermelon/mcp-toolkit","license":"UNKNOWN"},{"name":"@modelcontextprotocol/sdk","license":"MIT"},{"name":"@modelcontextprotocol/server-filesystem","license":"MIT"},{"name":"@modelcontextprotocol/server-memory","license":"MIT"},{"name":"@modelcontextprotocol/server-sequential-thinking","license":"MIT"},{"name":"@netlify/plugin-nextjs","license":"MIT"},{"name":"@supabase/ssr","license":"MIT"},{"name":"@supabase/supabase-js","license":"MIT"},{"name":"@testing-library/jest-dom","license":"MIT"},{"name":"@testing-library/react","license":"MIT"},{"name":"@types/node","license":"MIT"},{"name":"@types/node-cron","license":"MIT"},{"name":"@types/react","license":"MIT"},{"name":"@types/react-datepicker","license":"MIT"},{"name":"@types/react-dom","license":"MIT"},{"name":"@typescript-eslint/eslint-plugin","license":"MIT"},{"name":"@typescript-eslint/parser","license":"MIT"},{"name":"autoprefixer","license":"MIT"},{"name":"axios","license":"MIT"},{"name":"chalk","license":"MIT"},{"name":"cheerio","license":"MIT"},{"name":"child_process","license":"ISC"},{"name":"chokidar","license":"MIT"},{"name":"cron-parser","license":"MIT"},{"name":"eslint","license":"MIT"},{"name":"eslint-config-next","license":"MIT"},{"name":"eslint-plugin-react-hooks","license":"MIT"},{"name":"eslint-plugin-react-refresh","license":"MIT"},{"name":"events","license":"MIT"},{"name":"framer-motion","license":"MIT"},{"name":"fs","license":"ISC"},{"name":"fs-extra","license":"MIT"},{"name":"glob","license":"ISC"},{"name":"https","license":"ISC"},{"name":"husky","license":"MIT"},{"name":"import-fresh","license":"MIT"},{"name":"lint-staged","license":"MIT"},{"name":"lucide-react","license":"ISC"},{"name":"next","license":"MIT"},{"name":"node-cron","license":"ISC"},{"name":"openai","license":"Apache-2.0"},{"name":"path","license":"MIT"},{"name":"postcss","license":"MIT"},{"name":"react","license":"MIT"},{"name":"react-datepicker","license":"MIT"},{"name":"react-dom","license":"MIT"},{"name":"tailwindcss","license":"MIT"},{"name":"ts-node","license":"MIT"},{"name":"typescript","license":"Apache-2.0"},{"name":"uuid","license":"MIT"}]}');

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 620115:
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
/* harmony import */ var private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(339153);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/automations/licenses",
        pathname: "/automations/licenses",
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
    userland: private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/automations/licenses",
    config,
    userland: private_next_pages_automations_licenses_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(620115)));
module.exports = __webpack_exports__;

})();