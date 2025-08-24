"use strict";
(() => {
var exports = {};
exports.id = 886065;
exports.ids = [886065,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 601905:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"Zion AI Marketplace API Docs","sections":[{"id":"welcome","title":"Welcome & Getting Started","html":"<p>Welcome to the Zion AI Marketplace API. This hub helps developers integrate jobs, talent, quotes, projects, and webhooks.</p>\\n<h3>Authentication</h3>\\n<p>Use API keys or bearer tokens via the <code>Authorization: Bearer &lt;token&gt;</code> header. Obtain your credentials from your dashboard.</p>\\n<h3>Quick Start</h3>\\n<p>Try a simple request with curl and import our Postman collection from the dashboard.</p>","code":[{"language":"bash","content":"curl -H \'Authorization: Bearer $ZION_API_TOKEN\' https://api.zion.ai/api/jobs"}]},{"id":"core-endpoints","title":"Core Endpoints","html":"<ul>\\n<li><code>GET /api/jobs</code> — List jobs</li>\\n<li><code>POST /api/jobs</code> — Create job</li>\\n<li><code>GET /api/talent</code> — List talent</li>\\n<li><code>POST /api/quote</code> — Request a quote</li>\\n<li><code>GET /api/projects</code> — List projects</li>\\n<li><code>POST /webhooks/receive</code> — Webhook receiver</li>\\n</ul>\\n<p>All endpoints accept and return JSON. Use standard HTTP status codes.</p>"},{"id":"samples","title":"Sample Code","html":"<p>Use your API token in the Authorization header.</p>","code":[{"language":"javascript","content":"// JavaScript (Axios)\\nimport axios from \'axios\';\\n\\nconst client = axios.create({\\n  baseURL: \'https://api.zion.ai\',\\n  headers: { Authorization: `Bearer ${process.env.ZION_API_TOKEN}` },\\n});\\n\\nasync function listJobs() {\\n  const res = await client.get(\'/api/jobs\');\\n  console.log(res.data);\\n}\\n\\nasync function createJob() {\\n  const res = await client.post(\'/api/jobs\', { title: \'AI Engineer\', skills: [\'python\', \'llm\'] });\\n  console.log(res.data);\\n}"},{"language":"python","content":"# Python (requests)\\nimport os, requests\\nBASE=\'https://api.zion.ai\'\\nHEAD={\'Authorization\': f\'Bearer {os.environ.get(\'ZION_API_TOKEN\')}\' }\\n\\nprint(requests.get(f\'{BASE}/api/jobs\', headers=HEAD).json())\\nprint(requests.post(f\'{BASE}/api/jobs\', headers=HEAD, json={\'title\':\'AI Engineer\',\'skills\':[\'python\',\'llm\']}).json())"},{"language":"javascript","content":"// Node.js (fetch)\\nconst BASE=\'https://api.zion.ai\';\\nconst HEAD={ Authorization: `Bearer ${process.env.ZION_API_TOKEN}` };\\n\\nasync function listTalent() {\\n  const res = await fetch(`${BASE}/api/talent`, { headers: HEAD });\\n  console.log(await res.json());\\n}"}]},{"id":"errors","title":"Error Codes & Rate Limits","html":"<p>We use standard HTTP status codes.</p>\\n<ul>\\n<li><strong>401 Unauthorized</strong>: Missing/invalid token.</li>\\n<li><strong>429 Rate Limit Exceeded</strong>: Too many requests. Back off and retry using exponential backoff.</li>\\n<li><strong>500 Server Error</strong>: Unexpected error. Retry or contact support if persistent.</li>\\n</ul>\\n<p>Rate limits: Burst-friendly; sustained high volume returns 429 with <code>Retry-After</code>.</p>"},{"id":"webhooks","title":"Webhooks","html":"<p>Subscribe to events at your endpoint. We POST JSON with a signature header.</p>\\n<h4>Events</h4>\\n<ul>\\n<li>new_application</li>\\n<li>new_hire</li>\\n<li>payment_received</li>\\n<li>message_received</li>\\n</ul>\\n<h4>Test payload</h4>\\n<pre>{\\n  \\"id\\": \\"evt_123\\",\\n  \\"type\\": \\"new_application\\",\\n  \\"data\\": { \\"jobId\\": \\"job_abc\\", \\"applicantId\\": \\"tal_001\\" },\\n  \\"created\\": 1733270400\\n}</pre>\\n<p>Respond with 2xx. Retries use exponential backoff up to 24h.</p>","code":[{"language":"javascript","content":"// Example Express handler\\nimport express from \'express\';\\nconst app = express();\\napp.post(\'/webhooks/receive\', express.json(), (req, res) => {\\n  const event = req.body;\\n  switch (event.type) {\\n    case \'new_application\': /* handle */ break;\\n    case \'new_hire\': /* handle */ break;\\n    case \'payment_received\': /* handle */ break;\\n    case \'message_received\': /* handle */ break;\\n    default: console.log(\'Unhandled event\', event.type);\\n  }\\n  res.sendStatus(200);\\n});\\napp.listen(3000);"}]}]}');

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 686347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrintDocs),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_docs_content_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601905);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var getStaticProps = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
    return {
      props: {
        docs: _data_docs_content_json__WEBPACK_IMPORTED_MODULE_1__
      }
    };
  });
  return function getStaticProps() {
    return _ref.apply(this, arguments);
  };
}();
function PrintDocs(_ref2) {
  var {
    docs
  } = _ref2;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var id = setTimeout(() => window.print(), 500);
    return () => clearTimeout(id);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "p-8 max-w-4xl mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "text-3xl font-bold mb-6",
      children: docs.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "space-y-8",
      children: docs.sections.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold mb-2",
          children: s.title
        }), s.html && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: s.html
          }
        }), s.code && s.code.map((c, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre", {
          className: "mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap",
          children: c.content
        }, i))]
      }, s.id))
    })]
  });
}

/***/ }),

/***/ 822203:
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
/* harmony import */ var private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(686347);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/developers/docs/print",
        pathname: "/developers/docs/print",
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
    userland: private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/developers/docs/print",
    config,
    userland: private_next_pages_developers_docs_print_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(822203)));
module.exports = __webpack_exports__;

})();