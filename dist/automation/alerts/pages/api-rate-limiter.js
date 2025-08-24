"use strict";
(() => {
var exports = {};
exports.id = 106304;
exports.ids = [106304,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 555807:
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
/* harmony import */ var private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(743420);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/api-rate-limiter",
        pathname: "/api-rate-limiter",
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
    userland: private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/api-rate-limiter",
    config,
    userland: private_next_pages_api_rate_limiter_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 743420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ APIRateLimiterPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338423);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416729);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function APIRateLimiterPage() {
  var [endpoint, setEndpoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [rateLimit, setRateLimit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('100');
  var [timeWindow, setTimeWindow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1m');
  var [testResults, setTestResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [isTesting, setIsTesting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [apiKey, setApiKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var timeWindows = [{
    value: '1s',
    label: '1 Second',
    description: 'Per second rate limiting'
  }, {
    value: '1m',
    label: '1 Minute',
    description: 'Per minute rate limiting'
  }, {
    value: '1h',
    label: '1 Hour',
    description: 'Per hour rate limiting'
  }, {
    value: '1d',
    label: '1 Day',
    description: 'Per day rate limiting'
  }];
  var rateLimits = [{
    value: '10',
    label: '10 requests',
    description: 'Very strict'
  }, {
    value: '100',
    label: '100 requests',
    description: 'Standard'
  }, {
    value: '1000',
    label: '1000 requests',
    description: 'High volume'
  }, {
    value: '10000',
    label: '10000 requests',
    description: 'Enterprise'
  }];
  var generateApiKey = () => {
    var key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key);
  };
  var testRateLimiting = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* () {
      if (!endpoint.trim() || !rateLimit || !timeWindow) return;
      setIsTesting(true);
      setTestResults([]);
      var limit = parseInt(rateLimit);
      var results = [];

      // Simulate API calls to test rate limiting
      for (var i = 1; i <= limit + 5; i++) {
        yield new Promise(resolve => setTimeout(resolve, 100));
        var isAllowed = i <= limit;
        var status = isAllowed ? 'success' : 'rate_limited';
        var statusCode = isAllowed ? 200 : 429;
        results.push({
          request: i,
          timestamp: new Date().toLocaleTimeString(),
          status,
          statusCode,
          responseTime: Math.random() * 100 + 50,
          headers: {
            'X-RateLimit-Limit': limit,
            'X-RateLimit-Remaining': Math.max(0, limit - i),
            'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()
          }
        });
        if (!isAllowed) break;
      }
      setTestResults(results);
      setIsTesting(false);
    });
    return function testRateLimiting() {
      return _ref.apply(this, arguments);
    };
  }();
  var copyToClipboard = text => {
    navigator.clipboard.writeText(text);
  };
  var getStatusIcon = status => {
    switch (status) {
      case 'success':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.CheckCircle, {
          className: "w-5 h-5 text-green-400"
        });
      case 'rate_limited':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.AlertTriangle, {
          className: "w-5 h-5 text-red-400"
        });
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.AlertTriangle, {
          className: "w-5 h-5 text-yellow-400"
        });
    }
  };
  var getStatusColor = status => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "API Rate Limiter - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "description",
        content: "Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:title",
        content: "API Rate Limiter - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:description",
        content: "Protect your APIs with intelligent rate limiting and prevent abuse."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "mb-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Shield, {
              className: "w-4 h-4 mr-2"
            }), "API Protection & Security"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight",
          children: "API Rate Limiter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl text-green-200 max-w-4xl mx-auto leading-relaxed",
          children: "Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, and maintain optimal performance for all your users with our enterprise-grade rate limiting solution."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold text-white mb-6",
            children: "Configure Your Rate Limiting"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: "Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
              className: "text-2xl font-bold text-white mb-6 flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Code, {
                className: "w-6 h-6 mr-3 text-green-400"
              }), "Rate Limiting Rules"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "space-y-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-2",
                  children: "API Endpoint"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "text",
                  value: endpoint,
                  onChange: e => setEndpoint(e.target.value),
                  placeholder: "e.g., /api/users, /api/data, /api/analytics",
                  className: "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-3",
                  children: "Rate Limit"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: rateLimits.map(limit => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                    onClick: () => setRateLimit(limit.value),
                    className: "p-3 rounded-lg border text-left transition-all ".concat(rateLimit === limit.value ? 'border-green-500 bg-green-500/10 text-green-300' : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "font-medium",
                      children: limit.label
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-xs text-gray-400 mt-1",
                      children: limit.description
                    })]
                  }, limit.value))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-3",
                  children: "Time Window"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: timeWindows.map(window => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                    onClick: () => setTimeWindow(window.value),
                    className: "p-3 rounded-lg border text-left transition-all ".concat(timeWindow === window.value ? 'border-green-500 bg-green-500/10 text-green-300' : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "font-medium",
                      children: window.label
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-xs text-gray-400 mt-1",
                      children: window.description
                    })]
                  }, window.value))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-2",
                  children: "API Key"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    value: apiKey,
                    readOnly: true,
                    placeholder: "Generate an API key to test rate limiting",
                    className: "flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onClick: generateApiKey,
                    className: "px-6 py-3 bg-green-600 hover:bg-green-700 text-white",
                    children: "Generate"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                onClick: testRateLimiting,
                disabled: !endpoint.trim() || !rateLimit || !timeWindow || isTesting,
                className: "w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                children: isTesting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.RefreshCw, {
                    className: "w-5 h-5 mr-2 animate-spin"
                  }), "Testing Rate Limiting..."]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Zap, {
                    className: "w-5 h-5 mr-2"
                  }), "Test Rate Limiting"]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center justify-between mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                className: "text-2xl font-bold text-white flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.BarChart3, {
                  className: "w-6 h-6 mr-3 text-blue-400"
                }), "Test Results"]
              }), testResults.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                onClick: () => setTestResults([]),
                variant: "outline",
                size: "sm",
                className: "border-gray-600 text-gray-300 hover:bg-gray-700",
                children: "Clear Results"
              })]
            }), testResults.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "space-y-3 max-h-96 overflow-y-auto",
              children: testResults.map((result, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-4 rounded-lg border ".concat(result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center space-x-3",
                    children: [getStatusIcon(result.status), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "font-medium ".concat(getStatusColor(result.status)),
                      children: ["Request #", result.request]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: result.timestamp
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4 text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-gray-400",
                      children: "Status:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "ml-2 font-medium ".concat(getStatusColor(result.status)),
                      children: [result.statusCode, " ", result.status === 'success' ? 'OK' : 'Too Many Requests']
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-gray-400",
                      children: "Response Time:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "ml-2 text-white",
                      children: [result.responseTime.toFixed(0), "ms"]
                    })]
                  })]
                }), result.status === 'rate_limited' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                    children: "Rate Limited:"
                  }), " Request exceeded the limit of ", rateLimit, " requests per ", timeWindow]
                })]
              }, index))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "bg-gray-900 p-6 rounded-lg border border-gray-700 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-6xl mb-4",
                children: "\uD83D\uDCCA"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-gray-400",
                children: "Test results will appear here. Configure your settings and click \"Test Rate Limiting\" to see how it works."
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold text-white mb-6",
            children: "Advanced Rate Limiting Features"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: "Enterprise-grade rate limiting with intelligent algorithms and comprehensive monitoring."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDEE1\uFE0F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "DDoS Protection"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Advanced algorithms detect and prevent distributed denial of service attacks in real-time."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\u26A1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "High Performance"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Built on Redis and optimized for high-throughput applications with minimal latency."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83C\uDFAF"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Flexible Rules"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Configure different limits for different endpoints, users, or IP addresses."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDCCA"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Real-time Analytics"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Monitor API usage, identify patterns, and optimize your rate limiting strategy."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDD27"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Easy Integration"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Simple REST API and SDKs for Node.js, Python, Go, and other popular languages."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83C\uDF0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Global Distribution"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Edge locations worldwide ensure consistent performance and low latency for all users."
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold text-white mb-6",
            children: "Quick Integration Examples"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: "Get started with our rate limiting service in just a few lines of code."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-6 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
              className: "text-xl font-bold text-white mb-4 flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Code, {
                className: "w-5 h-5 mr-2 text-green-400"
              }), "Node.js Example"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "bg-gray-900 p-4 rounded-lg overflow-x-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
                className: "text-sm text-gray-300",
                children: "const axios = require('axios');\n\nconst apiKey = '".concat(apiKey || 'your_api_key_here', "';\nconst endpoint = '").concat(endpoint || '/api/users', "';\n\n// Make API request with rate limiting\nconst response = await axios.get(`https://api.zion.tech${endpoint}`, {\n  headers: {\n    'Authorization': `Bearer ${apiKey}`,\n    'X-RateLimit-Limit': '").concat(rateLimit, "',\n    'X-RateLimit-Window': '").concat(timeWindow, "'\n  }\n});\n\nconsole.log('Response:', response.data);\nconsole.log('Rate Limit Info:', {\n  limit: response.headers['x-ratelimit-limit'],\n  remaining: response.headers['x-ratelimit-remaining'],\n  reset: response.headers['x-ratelimit-reset']\n});")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              onClick: () => copyToClipboard("const axios = require('axios');\n\nconst apiKey = '".concat(apiKey || 'your_api_key_here', "';\nconst endpoint = '").concat(endpoint || '/api/users', "';\n\n// Make API request with rate limiting\nconst response = await axios.get(`https://api.zion.tech${endpoint}`, {\n  headers: {\n    'Authorization': `Bearer ${apiKey}`,\n    'X-RateLimit-Limit': '").concat(rateLimit, "',\n    'X-RateLimit-Window': '").concat(timeWindow, "'\n  }\n});\n\nconsole.log('Response:', response.data);\nconsole.log('Rate Limit Info:', {\n  limit: response.headers['x-ratelimit-limit'],\n  remaining: response.headers['x-ratelimit-remaining'],\n  reset: response.headers['x-ratelimit-reset']\n});")),
              variant: "outline",
              size: "sm",
              className: "mt-4 border-gray-600 text-gray-300 hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Copy, {
                className: "w-4 h-4 mr-2"
              }), "Copy Code"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-6 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
              className: "text-xl font-bold text-white mb-4 flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Code, {
                className: "w-5 h-5 mr-2 text-blue-400"
              }), "Python Example"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "bg-gray-900 p-4 rounded-lg overflow-x-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
                className: "text-sm text-gray-300",
                children: "import requests\n\napi_key = '".concat(apiKey || 'your_api_key_here', "'\nendpoint = '").concat(endpoint || '/api/users', "'\n\n# Make API request with rate limiting\nheaders = {\n    'Authorization': f'Bearer {api_key}',\n    'X-RateLimit-Limit': '").concat(rateLimit, "',\n    'X-RateLimit-Window': '").concat(timeWindow, "'\n}\n\nresponse = requests.get(\n    f'https://api.zion.tech{endpoint}',\n    headers=headers\n)\n\nprint('Response:', response.json())\nprint('Rate Limit Info:', {\n    'limit': response.headers.get('x-ratelimit-limit'),\n    'remaining': response.headers.get('x-ratelimit-remaining'),\n    'reset': response.headers.get('x-ratelimit-reset')\n})")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              onClick: () => copyToClipboard("import requests\n\napi_key = '".concat(apiKey || 'your_api_key_here', "'\nendpoint = '").concat(endpoint || '/api/users', "'\n\n# Make API request with rate limiting\nheaders = {\n    'Authorization': f'Bearer {api_key}',\n    'X-RateLimit-Limit': '").concat(rateLimit, "',\n    'X-RateLimit-Window': '").concat(timeWindow, "'\n}\n\nresponse = requests.get(\n    f'https://api.zion.tech{endpoint}',\n    headers=headers\n)\n\nprint('Response:', response.json())\nprint('Rate Limit Info:', {\n    'limit': response.headers.get('x-ratelimit-limit'),\n    'remaining': response.headers.get('x-ratelimit-remaining'),\n    'reset': response.headers.get('x-ratelimit-reset')\n})")),
              variant: "outline",
              size: "sm",
              className: "mt-4 border-gray-600 text-gray-300 hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Copy, {
                className: "w-4 h-4 mr-2"
              }), "Copy Code"]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gradient-to-r from-green-600 to-blue-600",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-3xl sm:text-4xl font-bold text-white mb-6",
          children: "Ready to Protect Your APIs?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl text-green-100 mb-8",
          children: "Join thousands of developers and companies who trust our rate limiting service to protect their APIs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            size: "lg",
            className: "bg-white text-green-600 hover:bg-gray-100",
            children: ["Get Started Today", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ArrowRight, {
              className: "w-5 h-5 ml-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/pricing",
            variant: "outline",
            size: "lg",
            className: "border-white text-white hover:bg-white hover:text-green-600",
            children: "View Pricing"
          })]
        })]
      })
    })]
  });
}

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(555807)));
module.exports = __webpack_exports__;

})();