"use strict";
(() => {
var exports = {};
exports.id = 484562;
exports.ids = [484562,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 338302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TechContentCurator)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_automation_content_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(979281);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function TechContentCurator() {
  var items = _data_automation_content_json__WEBPACK_IMPORTED_MODULE_1__.items || [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
        children: "Tech Content Curator"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "text-2xl font-semibold mb-2",
      children: "Tech Content Curator"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "text-sm opacity-80 mb-4",
      children: ["Updated ", new Date(_data_automation_content_json__WEBPACK_IMPORTED_MODULE_1__.updatedAt).toLocaleString()]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "space-y-3",
      children: [items.map((it, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: it.url,
        target: "_blank",
        rel: "noreferrer",
        className: "block enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-start justify-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "font-medium",
              children: it.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "text-xs opacity-70 mt-1",
              children: [it.source, " ", (it.tags || []).slice(0, 4).join(' · ')]
            })]
          }), typeof it.score === 'number' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "text-xs px-2 py-1 rounded bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
            children: ["Score ", it.score]
          })]
        })
      }, idx)), items.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "opacity-60",
        children: "No content yet."
      })]
    })]
  });
}

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 869061:
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
/* harmony import */ var private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(338302);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/automations/content",
        pathname: "/automations/content",
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
    userland: private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/automations/content",
    config,
    userland: private_next_pages_automations_content_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 979281:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"updatedAt":"2025-08-09T21:43:23.779Z","items":[{"source":"dev.to","title":"Ship Retrospective Action Items Directly to GitHub Projects","url":"https://dev.to/mattlewandowski93/ship-retrospective-action-items-directly-to-github-projects-bba","tags":["agile","github","productivity","webdev"],"score":0.22},{"source":"dev.to","title":"📢 Calling All Developers — We Need Your Insights","url":"https://dev.to/adithya-balan/calling-all-developers-we-need-your-insights-1dje","tags":["webdev","programming","javascript","ai"],"score":0.18},{"source":"dev.to","title":"Everyone is planning to build an AI based business, but rarely do people tell us what we need to build an AI business. Here are my top 5 learnings when I was building the ReThynk AI company from scratch.","url":"https://dev.to/jaideepparashar/everyone-is-planning-to-build-an-ai-based-business-but-rarely-do-people-tell-us-what-we-need-to-4pid","tags":["ai","discuss","learning","learngoogleaistudio"],"score":0.15},{"source":"dev.to","title":"5 Lessons from Building an AI Company","url":"https://dev.to/jaideepparashar/5-lessons-from-building-an-ai-company-6li","tags":["ai","discuss","learning","learngoogleaistudio"],"score":0.15},{"source":"dev.to","title":"KeyPilot – Semantic API Gateway with Real-Time AI Routing & Caching","url":"https://dev.to/joeljaison394/keypilot-semantic-api-gateway-with-real-time-ai-routing-caching-2b94","tags":["redischallenge","devchallenge","database","ai"],"score":0.12},{"source":"dev.to","title":"From Station to Server: Learning APIs Through a Train Ride","url":"https://dev.to/debasis_panda_31e768f5e44/from-station-to-server-learning-apis-through-a-train-ride-5pp","tags":[],"score":0.12},{"source":"dev.to","title":"🎑Beginners guide to \\"869. Reordered Power of 2\\"(C++ | JavaScript | Python)","url":"https://dev.to/om_shree_0709/beginners-guide-to-869-reordered-power-of-2c-javascript-python-ami","tags":["programming","cpp","javascript","python"],"score":0.1},{"source":"dev.to","title":"Does the edge need a new database?","url":"https://dev.to/surrealdb/does-the-edge-need-a-new-database-2aic","tags":["database","surrealdb","programming","rust"],"score":0.1},{"source":"dev.to","title":"The Certificate Trap That\'s Killing Developer Careers in India 💀","url":"https://dev.to/shiva_shanker_k/the-certificate-trap-thats-killing-developer-careers-in-india-ghd","tags":["beginners","discuss","careerdevelopment","developers"],"score":0.07},{"source":"dev.to","title":"7 Git Commands You Probably Don’t Know (But Should)","url":"https://dev.to/devshefali/7-git-commands-you-probably-dont-know-but-should-3bnl","tags":["webdev","programming","git","github"],"score":0.07},{"source":"dev.to","title":"Linear Regression with Gradient Descent","url":"https://dev.to/alvbarros/linear-regression-with-gradient-descent-39p1","tags":["algorithms","python","datascience","machinelearning"],"score":0.06},{"source":"dev.to","title":"Laravel Spy: Easily Log Your Application HTTP requests","url":"https://dev.to/rezakhademix/laravel-spy-easily-log-your-application-http-requests-2chc","tags":["webdev","laravel","php","programming"],"score":0.06},{"source":"dev.to","title":"How Much Bandwidth Do You Need for an API in 2025?","url":"https://dev.to/reynaldi/how-much-bandwidth-do-you-need-for-an-api-in-2025-440p","tags":["webdev","programming","api","discuss"],"score":0.06},{"source":"dev.to","title":"TravelMate AI: Real-Time AI Travel Planner Powered by Redis Stack","url":"https://dev.to/sumeetweb/travelmate-ai-real-time-ai-travel-planner-powered-by-redis-stack-4cn2","tags":["redischallenge","devchallenge","database","ai"],"score":0.06},{"source":"dev.to","title":"Part 8:How to Analyze Data Without Feeling Lost","url":"https://dev.to/sanaipei001/part-8how-to-analyze-data-without-feeling-lost-4pcf","tags":[],"score":0.05},{"source":"dev.to","title":"Part 10:Storytelling With Data","url":"https://dev.to/sanaipei001/part-10storytelling-with-data-3l7p","tags":[],"score":0.05},{"source":"dev.to","title":"Part 7:Cleaning Data Like a Pro","url":"https://dev.to/sanaipei001/part-7cleaning-data-like-a-pro-3aa1","tags":[],"score":0.05},{"source":"dev.to","title":"Understanding @MainActor in Swift: When and How to Use It","url":"https://dev.to/arshtechpro/understanding-mainactor-in-swift-when-and-how-to-use-it-4ii4","tags":["ios","swift","programming","mobile"],"score":0.05},{"source":"dev.to","title":"Part 11:Avoiding Common Beginner Mistakes","url":"https://dev.to/sanaipei001/part-11avoiding-common-beginner-mistakes-2f9h","tags":[],"score":0.05},{"source":"dev.to","title":"BEST BLOGPOST ABOUT INTIALIZATION AND NORAMLIZATION I COULD FIND!!","url":"https://dev.to/brokttv/best-blogpost-about-intialization-and-noramlization-i-could-find-2e27","tags":["ai","machinelearning","programming","tutorial"],"score":0.05}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(869061)));
module.exports = __webpack_exports__;

})();