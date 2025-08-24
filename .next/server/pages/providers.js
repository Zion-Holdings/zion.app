"use strict";
(() => {
var exports = {};
exports.id = 457022;
exports.ids = [457022,890636];
exports.modules = {

/***/ 102162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProviderCard)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ProviderCard(_ref) {
  var {
    provider
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "flex items-start justify-between gap-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          className: "text-lg font-semibold mb-1",
          children: provider.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "text-sm text-gray-600 dark:text-gray-300 mb-2",
          children: provider.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex flex-wrap items-center gap-2 text-xs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "px-2 py-1 rounded bg-gray-100 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800",
            children: provider.category
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            className: "px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800",
            children: ["AI match ", provider.aiMatchScore, "%"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            className: "px-2 py-1 rounded bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-800",
            children: ["\u2605 ", provider.rating.toFixed(1), " (", provider.reviewsCount, ")"]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-4 flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/contact?provider=".concat(provider.slug),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          className: "enhanced-button enhanced-button-primary",
          children: "Request Quote"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "#provider-".concat(provider.slug),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          className: "text-sm text-blue-600 dark:text-blue-400 hover:underline",
          children: "View details"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 206423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProviderFilters)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _data_providers_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(728633);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


function ProviderFilters(_ref) {
  var {
    state,
    onChange
  } = _ref;
  var onText = e => onChange(_objectSpread(_objectSpread({}, state), {}, {
    search: e.target.value
  }));
  var onCategory = e => onChange(_objectSpread(_objectSpread({}, state), {}, {
    category: e.target.value
  }));
  var onMinRating = e => onChange(_objectSpread(_objectSpread({}, state), {}, {
    minRating: Number(e.target.value)
  }));
  var onMinAi = e => onChange(_objectSpread(_objectSpread({}, state), {}, {
    minAiMatch: Number(e.target.value)
  }));
  var onSort = e => onChange(_objectSpread(_objectSpread({}, state), {}, {
    sortBy: e.target.value
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "enhanced-card border border-gray-100 dark:border-gray-800",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-5 gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        value: state.search,
        onChange: onText,
        placeholder: "Search providers\u2026",
        className: "col-span-2 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        value: state.category,
        onChange: onCategory,
        className: "rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm",
        children: _data_providers_providers__WEBPACK_IMPORTED_MODULE_1__.PROVIDER_CATEGORIES.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: c.value,
          children: c.label
        }, c.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        value: state.minRating,
        onChange: onMinRating,
        className: "rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm",
        children: [0, 3, 3.5, 4, 4.5].map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: r,
          children: "Min rating ".concat(r === 0 ? '(any)' : r.toFixed(1))
        }, r))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          className: "text-xs opacity-70",
          children: "Min AI match"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "range",
          min: 0,
          max: 100,
          step: 5,
          value: state.minAiMatch,
          onChange: onMinAi,
          className: "flex-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          className: "text-xs tabular-nums w-10 text-right",
          children: [state.minAiMatch, "%"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
        value: state.sortBy,
        onChange: onSort,
        className: "rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm md:col-span-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "relevance",
          children: "Sort: Relevance"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "ai",
          children: "Sort: AI match"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "rating",
          children: "Sort: Rating"
        })]
      })]
    })
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 342306:
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
/* harmony import */ var private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(367673);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/providers",
        pathname: "/providers",
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
    userland: private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/providers",
    config,
    userland: private_next_pages_providers_index_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 367673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProvidersPage)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_providers_ProviderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102162);
/* harmony import */ var _components_providers_ProviderFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206423);
/* harmony import */ var _data_providers_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(728633);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function ProvidersPage() {
  var [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    search: '',
    category: 'all',
    minRating: 0,
    minAiMatch: 0,
    sortBy: 'relevance'
  });
  var filtered = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var list = [..._data_providers_providers__WEBPACK_IMPORTED_MODULE_4__.PROVIDERS];
    if (filters.search.trim()) {
      var q = filters.search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (filters.category !== 'all') {
      list = list.filter(p => p.category === filters.category);
    }
    list = list.filter(p => p.rating >= filters.minRating && p.aiMatchScore >= filters.minAiMatch);
    switch (filters.sortBy) {
      case 'ai':
        list.sort((a, b) => b.aiMatchScore - a.aiMatchScore);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
        break;
      default:
        // Relevance: simple blend of AI score and rating
        list.sort((a, b) => b.aiMatchScore * 0.6 + b.rating * 8 - (a.aiMatchScore * 0.6 + a.rating * 8));
    }
    return list;
  }, [filters]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
        children: "IT Service Providers"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "description",
        content: "Discover and filter IT service providers. Compare AI-matched scores, ratings, and request quotes."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
        className: "text-2xl font-semibold mb-2",
        children: "IT Service Providers"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "text-sm text-gray-600 dark:text-gray-300",
        children: "Browse vetted providers. Filter by category, rating, and AI match. Click Request Quote to get started."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "mb-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_providers_ProviderFilters__WEBPACK_IMPORTED_MODULE_3__["default"], {
        state: filters,
        onChange: setFilters
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
      children: filtered.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_providers_ProviderCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        provider: p
      }, p.id))
    }), filtered.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "text-sm opacity-70",
      children: "No providers match your filters. Try broadening your search."
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

/***/ 728633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROVIDERS: () => (/* binding */ PROVIDERS),
/* harmony export */   PROVIDER_CATEGORIES: () => (/* binding */ PROVIDER_CATEGORIES)
/* harmony export */ });
var PROVIDERS = [{
  id: 'sp-001',
  slug: 'neural-networks-lab',
  title: 'Neural Networks Lab',
  description: 'Custom AI and ML solutions including NLP, computer vision, and MLOps.',
  category: 'ai-automation',
  aiMatchScore: 94,
  rating: 4.8,
  reviewsCount: 126
}, {
  id: 'sp-002',
  slug: 'cloudscale-pro',
  title: 'CloudScale Pro',
  description: 'Cloud migration, infra as code, and Kubernetes platform engineering.',
  category: 'cloud-services',
  aiMatchScore: 88,
  rating: 4.6,
  reviewsCount: 89
}, {
  id: 'sp-003',
  slug: 'securebyte-audits',
  title: 'SecureByte Audits',
  description: 'Offensive security, SOC hardening, and compliance automation.',
  category: 'security',
  aiMatchScore: 91,
  rating: 4.7,
  reviewsCount: 142
}, {
  id: 'sp-004',
  slug: 'dataforge-analytics',
  title: 'DataForge Analytics',
  description: 'End-to-end analytics: warehousing, ETL, BI dashboards, and ML ops.',
  category: 'data-analytics',
  aiMatchScore: 86,
  rating: 4.5,
  reviewsCount: 73
}, {
  id: 'sp-005',
  slug: 'pixelcraft-studio',
  title: 'PixelCraft Studio',
  description: 'UX research, design systems, and responsive web app development.',
  category: 'web-development',
  aiMatchScore: 77,
  rating: 4.4,
  reviewsCount: 58
}, {
  id: 'sp-006',
  slug: 'automation-guild',
  title: 'Automation Guild',
  description: 'RPA, workflow automation, and integrations to streamline operations.',
  category: 'ai-automation',
  aiMatchScore: 82,
  rating: 4.3,
  reviewsCount: 64
}];
var PROVIDER_CATEGORIES = [{
  value: 'all',
  label: 'All Categories'
}, {
  value: 'ai-automation',
  label: 'AI & Automation'
}, {
  value: 'cloud-services',
  label: 'Cloud Services'
}, {
  value: 'data-analytics',
  label: 'Data & Analytics'
}, {
  value: 'security',
  label: 'Security'
}, {
  value: 'web-development',
  label: 'Web Development'
}];

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(342306)));
module.exports = __webpack_exports__;

})();