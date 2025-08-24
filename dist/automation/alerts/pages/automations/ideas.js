"use strict";
(() => {
var exports = {};
exports.id = 181437;
exports.ids = [181437,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 627987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IdeasAutomation)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_automation_ideas_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(831058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function IdeasAutomation() {
  var items = _data_automation_ideas_json__WEBPACK_IMPORTED_MODULE_1__.items || [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
        children: "Autonomous Ideas Miner"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "text-2xl font-semibold mb-2",
      children: "Autonomous Ideas Miner"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "text-sm opacity-80 mb-4",
      children: ["Updated ", new Date(_data_automation_ideas_json__WEBPACK_IMPORTED_MODULE_1__.updatedAt).toLocaleString()]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "space-y-3",
      children: items.map((it, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
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
            }), it.summary && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-sm opacity-80 mt-1",
              children: it.summary
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xs opacity-70 mt-1",
              children: (it.tags || []).join(' · ')
            })]
          }), typeof it.score === 'number' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
            children: ["Score ", it.score]
          })]
        })
      }, idx))
    })]
  });
}

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 667211:
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
/* harmony import */ var private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(627987);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/automations/ideas",
        pathname: "/automations/ideas",
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
    userland: private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/automations/ideas",
    config,
    userland: private_next_pages_automations_ideas_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 831058:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"updatedAt":"2025-08-09T17:24:47.538Z","source":"automation-scripts","items":[{"title":"I want everything local – Building my offline AI workspace","url":"https://instavm.io/blog/building-my-offline-ai-workspace","score":1,"tags":["hn"],"summary":""},{"title":"Tor: How a military project became a lifeline for privacy","url":"https://thereader.mitpress.mit.edu/the-secret-history-of-tor-how-a-military-project-became-a-lifeline-for-privacy/","score":1,"tags":["hn"],"summary":""},{"title":"Show HN: The current sky at your approximate location, as a CSS gradient","url":"https://sky.dlazaro.ca","score":1,"tags":["hn"],"summary":""},{"title":"Our European search index goes live","url":"https://blog.ecosia.org/launching-our-european-search-index/","score":1,"tags":["hn"],"summary":""},{"title":"Mexico to US Livestock Trade halted due to Screwworm spread","url":"https://www.usda.gov/about-usda/news/press-releases/2025/07/09/secretary-rollins-takes-decisive-action-and-shuts-down-us-southern-border-ports-livestock-trade-due","score":1,"tags":["hn"],"summary":""},{"title":"Let\'s properly analyze an AI article for once","url":"https://nibblestew.blogspot.com/2025/08/lets-properly-analyze-ai-article-for.html","score":1,"tags":["hn"],"summary":""},{"title":"OpenFreeMap survived 100k requests per second","url":"https://blog.hyperknot.com/p/openfreemap-survived-100000-requests","score":1,"tags":["hn"],"summary":""},{"title":"Car has more than 1.2M km on it – and it\'s still going strong","url":"https://www.cbc.ca/news/canada/nova-scotia/1985-toyota-tercel-high-mileage-1.7597168","score":1,"tags":["hn"],"summary":""},{"title":"Quickshell – building blocks for your desktop","url":"https://quickshell.org/","score":1,"tags":["hn"],"summary":""},{"title":"Sandstorm- self-hostable web productivity suite","url":"https://sandstorm.org/","score":1,"tags":["hn"],"summary":""},{"title":"Partially Matching Zig Enums","url":"https://matklad.github.io/2025/08/08/partially-matching-zig-enums.html","score":1,"tags":["hn"],"summary":""},{"title":"Jan – Ollama alternative with local UI","url":"https://github.com/menloresearch/jan","score":1,"tags":["hn"],"summary":""},{"title":"Long-term exposure to outdoor air pollution linked to increased risk of dementia","url":"https://www.cam.ac.uk/research/news/long-term-exposure-to-outdoor-air-pollution-linked-to-increased-risk-of-dementia","score":1,"tags":["hn"],"summary":""},{"title":"The dead need right to delete their data so they can\'t be AI-ified, lawyer says","url":"https://www.theregister.com/2025/08/09/dead_need_ai_data_delete_right/","score":0.98,"tags":["hn"],"summary":""},{"title":"Breaking the Sorting Barrier for Directed Single-Source Shortest Paths","url":"https://arxiv.org/abs/2504.17033","score":0.83,"tags":["hn"],"summary":""},{"title":"Representing Python notebooks as dataflow graphs","url":"https://marimo.io/blog/dataflow","score":0.82,"tags":["hn"],"summary":""},{"title":"Tribblix – The Retro Illumos Distribution","url":"http://www.tribblix.org/","score":0.81,"tags":["hn"],"summary":""},{"title":"A SPARC makes a little fire","url":"https://www.leadedsolder.com/2025/08/05/sparcstation-scsi-termination-fix-magic-smoke.html","score":0.8,"tags":["hn"],"summary":""},{"title":"60% of medal of honor recipients are Irish or Irish-American","url":"https://en.wikipedia.org/wiki/List_of_Irish-American_Medal_of_Honor_recipients","score":0.57,"tags":["hn"],"summary":""},{"title":"Simon Willison\'s Lethal Trifecta Talk at the Bay Area AI Security Meetup","url":"https://simonwillison.net/2025/Aug/9/bay-area-ai/","score":0.51,"tags":["hn"],"summary":""},{"title":"Ratfactor\'s Illustrated Guide to Folding Fitted Sheets","url":"https://ratfactor.com/cards/fitted-sheets","score":0.49,"tags":["hn"],"summary":""},{"title":"Simulating Human-Like Learning Dynamics with LLM-Empowered Agents","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"The Missing Reward: Active Inference in the Era of Experience","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"MV-Debate: Multi-view Agent Debate with Dynamic Reflection Gating for Multimodal Harmful Content Detection in Social Media","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"Streamlining Admission with LOR Insights: AI-Based Leadership Assessment in Online Master\'s Program","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"Auto-Eval Judge: Towards a General Agentic Framework for Task Completion Evaluation","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"GRAIL:Learning to Interact with Large Knowledge Graphs for Retrieval Augmented Reasoning","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"InfiAlign: A Scalable and Sample-Efficient Framework for Aligning LLMs to Enhance Reasoning Capabilities","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"Can Large Language Models Generate Effective Datasets for Emotion Recognition in Conversations?","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""},{"title":"Bench-2-CoP: Can We Trust Benchmarking for EU AI Compliance?","url":"https://arxiv.org","score":0.4,"tags":["arxiv"],"summary":""}]}');

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(667211)));
module.exports = __webpack_exports__;

})();