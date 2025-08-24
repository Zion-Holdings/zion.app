"use strict";
(() => {
var exports = {};
exports.id = 604687;
exports.ids = [604687,890636];
exports.modules = {

/***/ 202529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZionBrainAdmin)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/layout/EnhancedNavigation'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




function ZionBrainAdmin() {
  var _routerResult$routed;
  var [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [routerInput, setRouterInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [routerResult, setRouterResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [metrics, setMetrics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    signupsLastHour: 18,
    disputeFlagsLastHour: 2,
    zionVelocity: 110
  });
  var [triggers, setTriggers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [userIntent, setUserIntent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [optimized, setOptimized] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [stuck, setStuck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var t = localStorage.getItem('zion_superadmin_token') || '';
    setToken(t);
    refreshLogs(t);
  }, []);
  var authHeaders = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => token ? {
    'x-admin-token': token
  } : {}, [token]);
  function refreshLogs(_x) {
    return _refreshLogs.apply(this, arguments);
  }
  function _refreshLogs() {
    _refreshLogs = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (t) {
      var headers = t ? {
        'x-admin-token': t
      } : authHeaders;
      var res = yield fetch('/api/zion-brain/logs', {
        headers
      });
      if (res.ok) setLogs(yield res.json());
      var stuckRes = yield fetch('/api/zion-brain/logs?stuck=1', {
        headers
      });
      if (stuckRes.ok) setStuck((yield stuckRes.json()).entries || []);
    });
    return _refreshLogs.apply(this, arguments);
  }
  function handleRoute() {
    return _handleRoute.apply(this, arguments);
  }
  function _handleRoute() {
    _handleRoute = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* () {
      var res = yield fetch('/api/zion-brain/router', {
        method: 'POST',
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, authHeaders),
        body: JSON.stringify({
          text: routerInput
        })
      });
      var data = yield res.json();
      setRouterResult(data);
      yield refreshLogs();
    });
    return _handleRoute.apply(this, arguments);
  }
  function handleEvaluateReflex() {
    return _handleEvaluateReflex.apply(this, arguments);
  }
  function _handleEvaluateReflex() {
    _handleEvaluateReflex = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* () {
      var res = yield fetch('/api/zion-brain/reflex', {
        method: 'POST',
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, authHeaders),
        body: JSON.stringify(metrics)
      });
      var data = yield res.json();
      setTriggers(data.triggers || []);
      yield refreshLogs();
    });
    return _handleEvaluateReflex.apply(this, arguments);
  }
  function handleOptimize() {
    return _handleOptimize.apply(this, arguments);
  }
  function _handleOptimize() {
    _handleOptimize = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* () {
      var res = yield fetch('/api/zion-brain/optimize', {
        method: 'POST',
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, authHeaders),
        body: JSON.stringify({
          prompt,
          userIntent
        })
      });
      var data = yield res.json();
      setOptimized(data.optimized || '');
      yield refreshLogs();
    });
    return _handleOptimize.apply(this, arguments);
  }
  function saveToken() {
    localStorage.setItem('zion_superadmin_token', token);
    refreshLogs(token);
  }
  var heatCells = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!logs) return [];
    return Object.entries(logs.byModule || {}).map(_ref => {
      var [k, v] = _ref;
      return {
        key: k,
        value: v
      };
    });
  }, [logs]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "Zion Brain Admin"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "robots",
        content: "noindex,nofollow"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/layout/EnhancedNavigation'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      className: "container mx-auto px-4 py-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex items-center gap-2 mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-2xl font-semibold",
          children: "Zion Brain \u2014 Admin"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded",
          children: "Always-on, self-monitoring AI"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
        className: "mb-8 p-4 border rounded-lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "font-semibold mb-2",
          children: "Superadmin Access"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex gap-2 items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            className: "border px-2 py-1 rounded w-80",
            placeholder: "Enter admin token",
            value: token,
            onChange: e => setToken(e.target.value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-1 bg-black text-white rounded",
            onClick: saveToken,
            children: "Save"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "text-xs text-gray-500",
            children: "Token is required if SUPERADMIN_TOKEN is set on server"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
          className: "p-4 border rounded-lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "font-semibold mb-2",
            children: "1) Auto-Prompt Router"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
            className: "w-full border rounded p-2 mb-2",
            rows: 4,
            placeholder: "Type a user request...",
            value: routerInput,
            onChange: e => setRouterInput(e.target.value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-1 bg-blue-600 text-white rounded",
            onClick: handleRoute,
            children: "Detect & Route"
          }), routerResult && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "mt-3 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                children: "Intent"
              }), ": ", routerResult.intent, " (", Math.round((routerResult.confidence || 0) * 100), "%)"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                children: "Routed"
              }), ": ", (_routerResult$routed = routerResult.routed) !== null && _routerResult$routed !== void 0 && _routerResult$routed.routed ? 'yes' : 'no']
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            className: "text-xs mt-2 list-disc pl-5 text-gray-600",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: "Chains: Resume builder, DAO explainer, Tokenomics simulator, Governance summarizer, Nation assistant"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
          className: "p-4 border rounded-lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "font-semibold mb-2",
            children: "2) Reflex Engine"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "grid grid-cols-3 gap-2 mb-2 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
              className: "flex flex-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                children: "Signups/hr"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "number",
                className: "border rounded px-2 py-1",
                value: metrics.signupsLastHour,
                onChange: e => setMetrics(_objectSpread(_objectSpread({}, metrics), {}, {
                  signupsLastHour: Number(e.target.value)
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
              className: "flex flex-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                children: "Disputes/hr"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "number",
                className: "border rounded px-2 py-1",
                value: metrics.disputeFlagsLastHour,
                onChange: e => setMetrics(_objectSpread(_objectSpread({}, metrics), {}, {
                  disputeFlagsLastHour: Number(e.target.value)
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
              className: "flex flex-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                children: "ZION$/min"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "number",
                className: "border rounded px-2 py-1",
                value: metrics.zionVelocity,
                onChange: e => setMetrics(_objectSpread(_objectSpread({}, metrics), {}, {
                  zionVelocity: Number(e.target.value)
                }))
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-1 bg-green-700 text-white rounded",
            onClick: handleEvaluateReflex,
            children: "Evaluate"
          }), (triggers === null || triggers === void 0 ? void 0 : triggers.length) > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            className: "mt-3 text-sm list-disc pl-5",
            children: triggers.map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              children: [t.action, " \u2014 ", t.reason, " (", t.severity, ")"]
            }, i))
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "mt-3 text-sm text-gray-600",
            children: "No triggers"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
          className: "p-4 border rounded-lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "font-semibold mb-2",
            children: "3) Prompt Optimizer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            className: "border rounded px-2 py-1 w-full mb-2",
            placeholder: "Optional: user intent",
            value: userIntent,
            onChange: e => setUserIntent(e.target.value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
            className: "w-full border rounded p-2 mb-2",
            rows: 5,
            placeholder: "Paste a prompt to optimize",
            value: prompt,
            onChange: e => setPrompt(e.target.value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "px-3 py-1 bg-purple-700 text-white rounded",
              onClick: handleOptimize,
              children: "Optimize"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-xs text-gray-500",
              children: "Instruction: Review this prompt and rewrite it to be 30% faster and more specific to user intent."
            })]
          }), optimized && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-xs uppercase text-gray-500 mb-1",
              children: "Optimized"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              className: "text-sm whitespace-pre-wrap bg-gray-50 dark:bg-gray-900 p-2 rounded",
              children: optimized
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
          className: "p-4 border rounded-lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "font-semibold mb-2",
            children: "4) Visualization Dashboard"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "text-sm mb-2",
            children: "Logs per prompt type and module usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "grid grid-cols-5 gap-2",
            children: [heatCells.map(_ref2 => {
              var {
                key,
                value
              } = _ref2;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-3 rounded text-center text-xs",
                style: {
                  background: "rgba(59,130,246,".concat(Math.min(1, 0.2 + value / 15), ")"),
                  color: 'white'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "font-semibold",
                  children: key
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: value
                })]
              }, key);
            }), heatCells.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-xs text-gray-500",
              children: "No data"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-sm font-medium mb-1",
              children: "Stuck users"
            }), stuck.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
              className: "text-xs list-disc pl-5",
              children: stuck.map((e, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                children: [e.module, " \u2014 ", String(e.type), " \u2014 ", e.status, " \u2014 ", e.latencyMs || '?', "ms"]
              }, i))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-xs text-gray-500",
              children: "None detected"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
        className: "mt-8 p-4 border rounded-lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "font-semibold mb-2",
          children: "Superadmin Controls"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-3 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-2 border rounded hover:bg-gray-50",
            onClick: () => alert('Deploy chain — stubbed'),
            children: "Deploy new GPT chain"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-2 border rounded hover:bg-gray-50",
            onClick: () => alert('Suspend agent — stubbed'),
            children: "Suspend agents"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-2 border rounded hover:bg-gray-50",
            onClick: () => refreshLogs(),
            children: "View audit trail (refresh logs)"
          })]
        })]
      })]
    })]
  });
}

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

/***/ }),

/***/ 905415:
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
/* harmony import */ var private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(202529);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/admin/zion-brain",
        pathname: "/admin/zion-brain",
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
    userland: private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/admin/zion-brain",
    config,
    userland: private_next_pages_admin_zion_brain_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(905415)));
module.exports = __webpack_exports__;

})();