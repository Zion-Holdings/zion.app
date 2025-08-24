"use strict";
(() => {
var exports = {};
exports.id = 78506;
exports.ids = [78506];
exports.modules = {

/***/ 15074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateSeries(n, base) {
  var volatility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.15;
  var series = [];
  var last = base;
  for (var i = 0; i < n; i++) {
    var change = (Math.random() - 0.5) * 2 * volatility * base;
    last = Math.max(0, Math.round(last + change));
    series.push(last);
  }
  return series;
}
function handler(req, res) {
  var now = new Date();
  var labels = Array.from({
    length: 14
  }, (_, i) => {
    var d = new Date(now);
    d.setDate(d.getDate() - (13 - i));
    return "".concat(d.getMonth() + 1, "/").concat(d.getDate());
  });
  var marketplace = [{
    key: 'jobs_24h',
    label: 'Jobs posted (24h)',
    value: rand(15, 60),
    trend: generateSeries(14, 40)
  }, {
    key: 'jobs_7d',
    label: 'Jobs posted (7d)',
    value: rand(120, 360),
    trend: generateSeries(14, 260)
  }, {
    key: 'jobs_total',
    label: 'Jobs posted (total)',
    value: rand(5000, 15000)
  }, {
    key: 'talent_onboarded',
    label: 'Talent onboarded',
    value: rand(50, 200),
    trend: generateSeries(14, 120)
  }, {
    key: 'proposal_conversions',
    label: 'Proposal conversions',
    value: rand(30, 120),
    trend: generateSeries(14, 80)
  }, {
    key: 'job_fill_rate',
    label: 'Job fill rate %',
    value: rand(45, 92),
    trend: generateSeries(14, 70)
  }];
  var dao = [{
    key: 'proposals_created',
    label: 'Proposals created',
    value: rand(3, 20),
    trend: generateSeries(14, 12)
  }, {
    key: 'voter_participation',
    label: 'Voter participation %',
    value: rand(10, 65),
    trend: generateSeries(14, 38)
  }, {
    key: 'delegate_heat',
    label: 'Delegate activity',
    value: rand(100, 600)
  }, {
    key: 'region_quorum',
    label: 'Regions above quorum',
    value: rand(2, 7)
  }];
  var token = [{
    key: 'circulating_supply',
    label: 'Circulating supply (ZION$)',
    value: rand(1000000, 2500000),
    trend: generateSeries(14, 1700000)
  }, {
    key: 'active_wallets',
    label: 'Active wallets',
    value: rand(4000, 12000),
    trend: generateSeries(14, 8000)
  }, {
    key: 'tx_volume_daily',
    label: 'Transaction volume (daily)',
    value: rand(100000, 700000),
    trend: generateSeries(14, 300000)
  }, {
    key: 'treasury_health',
    label: 'Treasury health (USD)',
    value: rand(1000000, 7000000),
    trend: generateSeries(14, 3500000)
  }, {
    key: 'top_earners',
    label: 'Top earners (count)',
    value: rand(5, 25)
  }];
  var multiverse = [{
    key: 'active_instances',
    label: 'Total active sub-instances',
    value: rand(8, 32),
    trend: generateSeries(14, 20)
  }, {
    key: 'map_overlay',
    label: 'Map overlay intensity',
    value: rand(100, 900)
  }, {
    key: 'top5_growth',
    label: 'Top 5 by user growth',
    value: rand(500, 2500)
  }, {
    key: 'cross_token',
    label: 'Cross-instance token movement',
    value: rand(1000, 12000),
    trend: generateSeries(14, 6000)
  }];
  var response = {
    marketplace,
    dao,
    token,
    multiverse,
    timestamp: now.toISOString(),
    labels,
    history: {
      marketplace: marketplace.map(m => m.trend || generateSeries(14, m.value)),
      dao: dao.map(m => m.trend || generateSeries(14, m.value)),
      token: token.map(m => m.trend || generateSeries(14, m.value)),
      multiverse: multiverse.map(m => m.trend || generateSeries(14, m.value))
    }
  };
  if (req.query.compare === 'quarter') {
    var factor = 0.8 + Math.random() * 0.4;
    response.compare = {
      prevQuarter: {
        marketplace: marketplace.map(m => _objectSpread(_objectSpread({}, m), {}, {
          value: Math.round(m.value * factor)
        })),
        dao: dao.map(m => _objectSpread(_objectSpread({}, m), {}, {
          value: Math.round(m.value * factor)
        })),
        token: token.map(m => _objectSpread(_objectSpread({}, m), {}, {
          value: Math.round(m.value * factor)
        })),
        multiverse: multiverse.map(m => _objectSpread(_objectSpread({}, m), {}, {
          value: Math.round(m.value * factor)
        }))
      }
    };
  }
  res.status(200).json(response);
}

/***/ }),

/***/ 197998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   handler: () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(806665);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(708667);
/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(233480);
/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(886435);
/* harmony import */ var private_next_pages_api_metrics_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15074);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_metrics_ts__WEBPACK_IMPORTED_MODULE_6__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_metrics_ts__WEBPACK_IMPORTED_MODULE_6__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/metrics",
        pathname: "/api/metrics",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_metrics_ts__WEBPACK_IMPORTED_MODULE_6__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/metrics";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if (false) {}
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return;
    }
    const { query, params, prerenderManifest, routerServerContext } = prepareResult;
    try {
        const method = req.method || 'GET';
        const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.getTracer)();
        const activeSpan = tracer.getActiveScopeSpan();
        const onRequestError = routeModule.instrumentationOnRequestError.bind(routeModule);
        const invokeRouteModule = async (span)=>routeModule.render(req, res, {
                query: {
                    ...query,
                    ...params
                },
                params,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: Boolean(false),
                trustHostHeader: false,
                // TODO: get this from from runtime env so manifest
                // doesn't need to load
                previewProps: prerenderManifest.preview,
                propagateError: false,
                dev: routeModule.isDev,
                page: "/api/metrics",
                internalRevalidate: routerServerContext == null ? void 0 : routerServerContext.revalidate,
                onError: (...args)=>onRequestError(req, ...args)
            }).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__.BaseServerSpan.handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${req.url}`);
                }
            });
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await invokeRouteModule(activeSpan);
        } else {
            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__.BaseServerSpan.handleRequest, {
                    spanName: `${method} ${req.url}`,
                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.SpanKind.SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, invokeRouteModule));
        }
    } catch (err) {
        // we re-throw in dev to show the error overlay
        if (routeModule.isDev) {
            throw err;
        }
        // this is technically an invariant as error handling
        // should be done inside of api-resolver onError
        (0,next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__.sendError)(res, 500, 'Internal Server Error');
    } finally{
        // We don't allow any waitUntil work in pages API routes currently
        // so if callback is present return with resolved promise since no
        // pending work
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
    }
}

//# sourceMappingURL=pages-api.js.map


/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(197998)));
module.exports = __webpack_exports__;

})();