"use strict";
(() => {
var exports = {};
exports.id = 480354;
exports.ids = [480354,890636];
exports.modules = {

/***/ 55586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GitHubEcosystem)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_automation_github_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(292513);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function GitHubEcosystem() {
  var topics = _data_automation_github_json__WEBPACK_IMPORTED_MODULE_1__.topics || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
        children: "GitHub Ecosystem Metrics"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "text-2xl font-semibold mb-2",
      children: "GitHub Ecosystem Metrics"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "text-sm opacity-80 mb-4",
      children: ["Updated ", new Date(_data_automation_github_json__WEBPACK_IMPORTED_MODULE_1__.updatedAt).toLocaleString()]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
      children: [Object.keys(topics).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "enhanced-card border border-gray-100 dark:border-gray-800",
        children: "No data yet."
      }), Object.entries(topics).map(_ref => {
        var [topic, repos] = _ref;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "enhanced-card border border-gray-100 dark:border-gray-800",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "font-medium mb-2",
            children: topic
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "space-y-1 text-sm",
            children: repos.map((r, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: r.html_url,
              target: "_blank",
              rel: "noreferrer",
              className: "flex justify-between hover:underline",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "opacity-80",
                children: r.full_name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                className: "tabular-nums",
                children: ["\u2605 ", r.stars.toLocaleString()]
              })]
            }, i))
          })]
        }, topic);
      })]
    })]
  });
}

/***/ }),

/***/ 292513:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"updatedAt":"2025-08-09T21:25:13.005Z","topics":{"nextjs":[{"full_name":"vercel/next.js","stars":133700,"html_url":"https://github.com/vercel/next.js"},{"full_name":"langgenius/dify","stars":110292,"html_url":"https://github.com/langgenius/dify"},{"full_name":"shadcn-ui/ui","stars":92605,"html_url":"https://github.com/shadcn-ui/ui"},{"full_name":"supabase/supabase","stars":86766,"html_url":"https://github.com/supabase/supabase"},{"full_name":"ChatGPTNextWeb/NextChat","stars":85365,"html_url":"https://github.com/ChatGPTNextWeb/NextChat"},{"full_name":"lobehub/lobe-chat","stars":64280,"html_url":"https://github.com/lobehub/lobe-chat"},{"full_name":"appwrite/appwrite","stars":52211,"html_url":"https://github.com/appwrite/appwrite"},{"full_name":"coollabsio/coolify","stars":44111,"html_url":"https://github.com/coollabsio/coolify"},{"full_name":"AykutSarac/jsoncrack.com","stars":40703,"html_url":"https://github.com/AykutSarac/jsoncrack.com"},{"full_name":"trpc/trpc","stars":38156,"html_url":"https://github.com/trpc/trpc"}],"react":[{"full_name":"freeCodeCamp/freeCodeCamp","stars":425402,"html_url":"https://github.com/freeCodeCamp/freeCodeCamp"},{"full_name":"facebook/react","stars":237986,"html_url":"https://github.com/facebook/react"},{"full_name":"vercel/next.js","stars":133700,"html_url":"https://github.com/vercel/next.js"},{"full_name":"facebook/react-native","stars":123343,"html_url":"https://github.com/facebook/react-native"},{"full_name":"justjavac/free-programming-books-zh_CN","stars":114904,"html_url":"https://github.com/justjavac/free-programming-books-zh_CN"},{"full_name":"facebook/create-react-app","stars":103413,"html_url":"https://github.com/facebook/create-react-app"},{"full_name":"mui/material-ui","stars":96334,"html_url":"https://github.com/mui/material-ui"},{"full_name":"ant-design/ant-design","stars":95589,"html_url":"https://github.com/ant-design/ant-design"},{"full_name":"shadcn-ui/ui","stars":92605,"html_url":"https://github.com/shadcn-ui/ui"},{"full_name":"storybookjs/storybook","stars":87472,"html_url":"https://github.com/storybookjs/storybook"}],"openai":[{"full_name":"Significant-Gravitas/AutoGPT","stars":177631,"html_url":"https://github.com/Significant-Gravitas/AutoGPT"},{"full_name":"langchain-ai/langchain","stars":113192,"html_url":"https://github.com/langchain-ai/langchain"},{"full_name":"langgenius/dify","stars":110292,"html_url":"https://github.com/langgenius/dify"},{"full_name":"open-webui/open-webui","stars":105976,"html_url":"https://github.com/open-webui/open-webui"},{"full_name":"microsoft/generative-ai-for-beginners","stars":94268,"html_url":"https://github.com/microsoft/generative-ai-for-beginners"},{"full_name":"microsoft/markitdown","stars":70733,"html_url":"https://github.com/microsoft/markitdown"},{"full_name":"openai/openai-cookbook","stars":66745,"html_url":"https://github.com/openai/openai-cookbook"},{"full_name":"xtekky/gpt4free","stars":64887,"html_url":"https://github.com/xtekky/gpt4free"},{"full_name":"lobehub/lobe-chat","stars":64280,"html_url":"https://github.com/lobehub/lobe-chat"},{"full_name":"infiniflow/ragflow","stars":62020,"html_url":"https://github.com/infiniflow/ragflow"}],"tailwindcss":[{"full_name":"shadcn-ui/ui","stars":92605,"html_url":"https://github.com/shadcn-ui/ui"},{"full_name":"tailwindlabs/tailwindcss","stars":89495,"html_url":"https://github.com/tailwindlabs/tailwindcss"},{"full_name":"saadeghi/daisyui","stars":38222,"html_url":"https://github.com/saadeghi/daisyui"},{"full_name":"calcom/cal.com","stars":37515,"html_url":"https://github.com/calcom/cal.com"},{"full_name":"AmruthPillai/Reactive-Resume","stars":32513,"html_url":"https://github.com/AmruthPillai/Reactive-Resume"},{"full_name":"drawdb-io/drawdb","stars":32173,"html_url":"https://github.com/drawdb-io/drawdb"},{"full_name":"heyverse/hey","stars":29365,"html_url":"https://github.com/heyverse/hey"},{"full_name":"tailwindlabs/headlessui","stars":27769,"html_url":"https://github.com/tailwindlabs/headlessui"},{"full_name":"t3-oss/create-t3-app","stars":27746,"html_url":"https://github.com/t3-oss/create-t3-app"},{"full_name":"plausible/analytics","stars":23064,"html_url":"https://github.com/plausible/analytics"}]}}');

/***/ }),

/***/ 318835:
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
/* harmony import */ var private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55586);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/automations/github",
        pathname: "/automations/github",
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
    userland: private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/automations/github",
    config,
    userland: private_next_pages_automations_github_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(318835)));
module.exports = __webpack_exports__;

})();