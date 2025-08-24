"use strict";
(() => {
var exports = {};
exports.id = 118272;
exports.ids = [118272,890636];
exports.modules = {

/***/ 11997:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 181453:
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
/* harmony import */ var private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(234188);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/admin/analytics",
        pathname: "/admin/analytics",
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
    userland: private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/admin/analytics",
    config,
    userland: private_next_pages_admin_analytics_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 234188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminAnalyticsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_charts_SimpleLineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341440);
/* harmony import */ var _components_charts_SimpleBarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155317);
/* harmony import */ var _components_charts_SimpleDoughnutChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(308172);
/* harmony import */ var _components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35334);
/* harmony import */ var _utils_exporters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(822579);
/* harmony import */ var _hooks_useRole__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(269483);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








function AdminAnalyticsPage() {
  var _totals$totalUsers, _totals$totalTalents, _totals$totalClients, _totals$activeProject, _totals$jobsPosted, _totals$jobsFilled, _totals$quotesSent, _totals$quotesAccepte;
  var [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var {
    role,
    loading
  } = (0,_hooks_useRole__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetch('/api/analytics/admin').then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    children: "Loading..."
  });
  if (role !== 'admin') return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    children: "Unauthorized"
  });
  var totals = (data === null || data === void 0 ? void 0 : data.totals) || {};
  var geo = (data === null || data === void 0 ? void 0 : data.geo) || [];
  var topCategories = (data === null || data === void 0 ? void 0 : data.topCategories) || [];
  var lineSeries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    label: 'Jobs Filled',
    points: Array.from({
      length: 12
    }, (_, i) => ({
      x: i + 1,
      y: Math.round(Math.random() * 10)
    }))
  }], []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
      className: "text-2xl font-semibold",
      children: "Admin Analytics"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Total Users",
        value: (_totals$totalUsers = totals.totalUsers) !== null && _totals$totalUsers !== void 0 ? _totals$totalUsers : 0
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Talents",
        value: (_totals$totalTalents = totals.totalTalents) !== null && _totals$totalTalents !== void 0 ? _totals$totalTalents : 0,
        tone: "info"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Clients",
        value: (_totals$totalClients = totals.totalClients) !== null && _totals$totalClients !== void 0 ? _totals$totalClients : 0,
        tone: "info"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Active Projects",
        value: (_totals$activeProject = totals.activeProjects) !== null && _totals$activeProject !== void 0 ? _totals$activeProject : 0,
        tone: "success"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Jobs Posted",
        value: (_totals$jobsPosted = totals.jobsPosted) !== null && _totals$jobsPosted !== void 0 ? _totals$jobsPosted : 0
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Jobs Filled",
        value: (_totals$jobsFilled = totals.jobsFilled) !== null && _totals$jobsFilled !== void 0 ? _totals$jobsFilled : 0,
        tone: "success"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Quotes Sent",
        value: (_totals$quotesSent = totals.quotesSent) !== null && _totals$quotesSent !== void 0 ? _totals$quotesSent : 0
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_InteractiveStats__WEBPACK_IMPORTED_MODULE_4__.KpiBadge, {
        label: "Quotes Accepted",
        value: (_totals$quotesAccepte = totals.quotesAccepted) !== null && _totals$quotesAccepte !== void 0 ? _totals$quotesAccepte : 0,
        tone: "success"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "grid md:grid-cols-2 gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "rounded-2xl border border-black/5 dark:border-white/10 p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "font-semibold mb-2",
          children: "Jobs Filled Over Time"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_charts_SimpleLineChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
          series: lineSeries,
          onExportCsv: rows => (0,_utils_exporters__WEBPACK_IMPORTED_MODULE_7__.exportCsv)('admin-jobs-filled.csv', rows),
          onExportPng: svg => (0,_utils_exporters__WEBPACK_IMPORTED_MODULE_7__.exportSvgAsPng)('admin-jobs-filled.png', svg),
          yLabel: "Filled",
          xLabel: "Month"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "rounded-2xl border border-black/5 dark:border-white/10 p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "font-semibold mb-2",
          children: "Top Performing Categories"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_charts_SimpleBarChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: topCategories,
          onExportCsv: rows => (0,_utils_exporters__WEBPACK_IMPORTED_MODULE_7__.exportCsv)('admin-top-categories.csv', rows)
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "grid md:grid-cols-2 gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "rounded-2xl border border-black/5 dark:border-white/10 p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "font-semibold mb-2",
          children: "Referral Conversions"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_charts_SimpleDoughnutChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: [{
            label: 'Converted',
            value: (data === null || data === void 0 ? void 0 : data.referralConversions) || 0
          }, {
            label: 'Others',
            value: Math.max((totals.totalUsers || 0) - ((data === null || data === void 0 ? void 0 : data.referralConversions) || 0), 0)
          }],
          onExportCsv: rows => (0,_utils_exporters__WEBPACK_IMPORTED_MODULE_7__.exportCsv)('admin-referrals.csv', rows),
          onExportPng: svg => (0,_utils_exporters__WEBPACK_IMPORTED_MODULE_7__.exportSvgAsPng)('admin-referrals.png', svg)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "rounded-2xl border border-black/5 dark:border-white/10 p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "font-semibold mb-2",
          children: "Geo Heat Grid (Users)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "grid grid-cols-2 md:grid-cols-3 gap-2",
          children: geo.map(g => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "rounded p-2 bg-gray-100 dark:bg-gray-800 flex justify-between text-xs",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: g.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: g.value
            })]
          }, g.label))
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 308172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleDoughnutChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function SimpleDoughnutChart(_ref) {
  var {
    data,
    radius = 80,
    thickness = 20,
    onExportCsv,
    onExportPng
  } = _ref;
  var svgRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var total = Math.max(data.reduce((acc, d) => acc + d.value, 0), 1);
  var circumference = 2 * Math.PI * radius;
  var csvRows = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => data.map(d => ({
    label: d.label,
    value: d.value
  })), [data]);
  var offset = 0;
  var slices = data.map((d, idx) => {
    var frac = d.value / total;
    var length = frac * circumference;
    var dasharray = "".concat(length, " ").concat(circumference - length);
    var stroke = d.color || ['#2563eb', '#16a34a', '#f59e0b', '#ef4444', '#22d3ee'][idx % 5];
    var circle = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      r: radius,
      cx: radius + 10,
      cy: radius + 10,
      fill: "transparent",
      stroke: stroke,
      strokeWidth: thickness,
      strokeDasharray: dasharray,
      strokeDashoffset: -offset
    }, d.label);
    offset += length;
    return circle;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex justify-end gap-2 mb-2",
      children: [onExportCsv && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800",
        onClick: () => onExportCsv(csvRows),
        children: "Export CSV"
      }), onExportPng && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800",
        onClick: () => svgRef.current && onExportPng(svgRef.current),
        children: "Export PNG"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      ref: svgRef,
      width: radius * 2 + 20,
      height: radius * 2 + 20,
      className: "mx-auto block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
        r: radius,
        cx: radius + 10,
        cy: radius + 10,
        fill: "transparent",
        stroke: "#e5e7eb",
        strokeWidth: thickness
      }), slices]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "flex flex-wrap justify-center gap-3 mt-3",
      children: data.map((d, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-center gap-2 text-xs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "inline-block w-3 h-3 rounded",
          style: {
            backgroundColor: d.color || ['#2563eb', '#16a34a', '#f59e0b', '#ef4444', '#22d3ee'][idx % 5]
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          children: [d.label, " (", (d.value / total * 100).toFixed(0), "%)"]
        })]
      }, d.label))
    })]
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(181453)));
module.exports = __webpack_exports__;

})();