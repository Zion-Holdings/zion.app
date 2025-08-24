(() => {
var exports = {};
exports.id = 372565;
exports.ids = [372565,890636];
exports.modules = {

/***/ 74075:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 130411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(643115);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/community/[slug]",
        pathname: "/community/[slug]",
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
    userland: private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/community/[slug]",
    config,
    userland: private_next_pages_community_slug_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 273511:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/babel/loader/index.js):\nSyntaxError: /workspace/src/components/ui/empty-state.tsx: Unexpected token, expected \"{\" (3:7)\n\n\u001b[0m \u001b[90m 1 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mReact\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'react'\u001b[39m\n \u001b[90m 2 |\u001b[39m \u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m empty\u001b[33m-\u001b[39mstate()   {\u001b[33m;\u001b[39m\n \u001b[90m   |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 |\u001b[39m   \u001b[36mreturn\u001b[39m (\n \u001b[90m 5 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 6 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33mComponent\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at constructor (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:137105)\n    at TypeScriptParserMixin.raise (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:194164)\n    at TypeScriptParserMixin.unexpected (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:194550)\n    at TypeScriptParserMixin.parseExport (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:413384)\n    at TypeScriptParserMixin.parseExport (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:322862)\n    at TypeScriptParserMixin.parseStatementContent (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:391808)\n    at TypeScriptParserMixin.parseStatementContent (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:324042)\n    at TypeScriptParserMixin.parseStatementLike (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:389494)\n    at TypeScriptParserMixin.parseModuleItem (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:389055)\n    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:401400)\n    at TypeScriptParserMixin.parseBlockBody (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:401223)\n    at TypeScriptParserMixin.parseProgram (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:386857)\n    at TypeScriptParserMixin.parseTopLevel (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:386575)\n    at TypeScriptParserMixin.parse (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:426834)\n    at TypeScriptParserMixin.parse (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:337631)\n    at parse (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:427389)\n    at parser (/workspace/node_modules/next/dist/compiled/babel/bundle.js:1:137686)\n    at parser.next (<anonymous>)\n    at normalizeFile (/workspace/node_modules/next/dist/compiled/babel/bundle.js:13:13275)\n    at normalizeFile.next (<anonymous>)\n    at consumeIterator (/workspace/node_modules/next/dist/build/babel/loader/util.js:13:38)\n    at transform (/workspace/node_modules/next/dist/build/babel/loader/transform.js:89:44)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runNextTicks (node:internal/process/task_queues:69:3)\n    at process.processImmediate (node:internal/timers:453:9)\n    at async /workspace/node_modules/next/dist/build/babel/loader/index.js:36:108\n    at async Span.traceAsyncFn (/workspace/node_modules/next/dist/trace/trace.js:157:20)\n    at async nextBabelLoader (/workspace/node_modules/next/dist/build/babel/loader/index.js:36:63)\n    at async Span.traceAsyncFn (/workspace/node_modules/next/dist/trace/trace.js:157:20)");

/***/ }),

/***/ 333873:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 387877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCard: () => (/* binding */ PostCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PostCard() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: "Component"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: "Component placeholder"
    })]
  });
}

/***/ }),

/***/ 422326:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 608732:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 629021:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 643115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7887);
/* harmony import */ var _components_community_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(387877);
/* harmony import */ var _components_ui_empty_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(273511);
/* harmony import */ var _components_ui_empty_state__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_ui_empty_state__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var POSTS_PER_PAGE = 20; // Or any other limit you prefer

var POSTS_QUERY = "\n  query Posts($slug: String!, $cursor: String) {\n    Posts(where: { category: $slug }, after: $cursor) {\n      edges {\n        node {\n          id\n          title\n          excerpt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n";
function CategoryPage() {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var {
    slug
  } = router.query;
  var [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [cursor, setCursor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [hasMore, setHasMore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var loadPosts = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(function* () {
      var _json$data;
      var after = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!slug) return;
      setLoading(true);
      var res = yield fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: POSTS_QUERY,
          variables: {
            slug,
            cursor: after
          }
        })
      });
      var json = yield res.json();
      var result = (_json$data = json.data) === null || _json$data === void 0 ? void 0 : _json$data.Posts;
      if (result) {
        var newPosts = result.edges.map(e => e.node);
        setPosts(prev => after ? [...prev, ...newPosts] : newPosts);
        setCursor(result.pageInfo.endCursor);
        setHasMore(result.pageInfo.hasNextPage);
      }
      setLoading(false);
    });
    return function loadPosts() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPosts([]);
    setCursor(null);
    if (slug) {
      loadPosts(null);
    }
  }, [slug]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
        children: "".concat(slug, " Forum \u2013 ZionAI")
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main", {
      className: "container py-8",
      children: posts.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "space-y-4",
        children: [posts.map(post => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_community_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post
        }, post.id)), hasMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "text-center mt-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "text-zion-purple underline",
            onClick: () => loadPosts(cursor),
            disabled: loading,
            children: loading ? 'Loading...' : 'Load More'
          })
        })]
      }) : !loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ui_empty_state__WEBPACK_IMPORTED_MODULE_4__.EmptyState, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.MessageSquare, {
          className: "h-10 w-10 text-zion-purple"
        }),
        title: "No posts yet",
        description: "Be the first to post"
      }) : null
    })]
  });
}

/***/ }),

/***/ 646060:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 927910:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(130411)));
module.exports = __webpack_exports__;

})();