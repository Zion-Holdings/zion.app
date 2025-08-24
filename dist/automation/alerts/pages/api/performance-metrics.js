"use strict";
(() => {
var exports = {};
exports.id = 710351;
exports.ids = [710351];
exports.modules = {

/***/ 740168:
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
/* harmony import */ var private_next_pages_api_performance_metrics_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(783095);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_performance_metrics_ts__WEBPACK_IMPORTED_MODULE_6__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_performance_metrics_ts__WEBPACK_IMPORTED_MODULE_6__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/performance-metrics",
        pathname: "/api/performance-metrics",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_performance_metrics_ts__WEBPACK_IMPORTED_MODULE_6__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/performance-metrics";
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
                page: "/api/performance-metrics",
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

/***/ }),

/***/ 783095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405206);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// API endpoint for performance metrics collection

// In-memory storage for demo purposes
// In production, use a proper database
var performanceMetrics = [];
var errorLogs = [];
function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (req, res) {
    if (req.method === 'POST') {
      try {
        var performanceReport = req['body'];

        // Validate the report structure
        if (!performanceReport.metrics || !Array.isArray(performanceReport.metrics)) {
          res.status(400).json({
            error: 'Invalid performance report format'
          });
          return;
        }

        // Log performance metrics (in production, you would store these in a database)
        // Removed console.log('🔧 Performance Report:', { ... });

        // Log critical performance issues
        var poorMetrics = performanceReport.metrics.filter(m => m.rating === 'poor');
        if (poorMetrics.length > 0) {
          console.warn('⚠️ Poor Performance Metrics Detected:', poorMetrics.map(m => "".concat(m.name, ": ").concat(m.value, "ms")));
        }

        // In production, you would:
        // 1. Store metrics in a database (e.g., MongoDB, PostgreSQL)
        // 2. Send to analytics service (e.g., Google Analytics, DataDog)
        // 3. Trigger alerts for critical performance issues
        // 4. Aggregate metrics for performance dashboards

        // Example: Send to external analytics service
        if ( true && process.env['ANALYTICS_ENDPOINT']) {
          try {
            yield fetch(process.env['ANALYTICS_ENDPOINT'], {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(process.env['ANALYTICS_API_KEY'])
              },
              body: JSON.stringify({
                type: 'performance',
                data: performanceReport,
                timestamp: Date.now()
              })
            });
          } catch (error) {
            console.error('Error sending to analytics:', error);
          }
        }
        res.status(200).json({
          success: true,
          message: 'Performance data recorded'
        });
      } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
          success: false,
          message: 'Internal server error'
        });
      }
    } else if (req.method === 'GET') {
      try {
        var {
          type,
          limit = 100
        } = req.query;
        if (type === 'performance') {
          var limitedMetrics = performanceMetrics.slice(-Number(limit)).map(metric => _objectSpread(_objectSpread({}, metric), {}, {
            timestamp: new Date(metric.timestamp).toLocaleString()
          }));
          res.status(200).json({
            success: true,
            data: limitedMetrics,
            total: performanceMetrics.length,
            average: calculateAverages(performanceMetrics)
          });
        } else if (type === 'error') {
          var limitedErrors = errorLogs.slice(-Number(limit)).map(error => _objectSpread(_objectSpread({}, error), {}, {
            timestamp: new Date(error.timestamp).toLocaleString()
          }));
          res.status(200).json({
            success: true,
            data: limitedErrors,
            total: errorLogs.length
          });
        } else if (type === 'summary') {
          res.status(200).json({
            success: true,
            summary: {
              performance: {
                total: performanceMetrics.length,
                average: calculateAverages(performanceMetrics),
                recent: performanceMetrics.slice(-10).length
              },
              errors: {
                total: errorLogs.length,
                recent: errorLogs.slice(-10).length
              }
            }
          });
        } else {
          res.status(400).json({
            success: false,
            message: 'Invalid type parameter'
          });
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({
          success: false,
          message: 'Internal server error'
        });
      }
    } else {
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).json({
        success: false,
        message: "Method ".concat(req.method, " Not Allowed")
      });
    }
  });
  return _handler.apply(this, arguments);
}
function calculateAverages(metrics) {
  if (metrics.length === 0) return null;
  var sums = metrics.reduce((acc, metric) => ({
    fcp: acc.fcp + metric.fcp,
    lcp: acc.lcp + metric.lcp,
    fid: acc.fid + metric.fid,
    cls: acc.cls + metric.cls,
    ttfb: acc.ttfb + metric.ttfb
  }), {
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  return {
    fcp: Math.round(sums.fcp / metrics.length),
    lcp: Math.round(sums.lcp / metrics.length),
    fid: Math.round(sums.fid / metrics.length),
    cls: Math.round(sums.cls / metrics.length * 1000) / 1000,
    ttfb: Math.round(sums.ttfb / metrics.length)
  };
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(740168)));
module.exports = __webpack_exports__;

})();