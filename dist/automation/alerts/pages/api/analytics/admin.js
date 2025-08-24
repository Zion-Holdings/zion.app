"use strict";
(() => {
var exports = {};
exports.id = 520801;
exports.ids = [520801];
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

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 394676:
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
/* harmony import */ var private_next_pages_api_analytics_admin_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(546673);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_analytics_admin_ts__WEBPACK_IMPORTED_MODULE_6__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_analytics_admin_ts__WEBPACK_IMPORTED_MODULE_6__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/analytics/admin",
        pathname: "/api/analytics/admin",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_analytics_admin_ts__WEBPACK_IMPORTED_MODULE_6__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/analytics/admin";
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
                page: "/api/analytics/admin",
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

/***/ 546673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405206);
/* harmony import */ var _utils_supabase_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(682843);


function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
    try {
      var supabase = (0,_utils_supabase_server__WEBPACK_IMPORTED_MODULE_1__.createServerClient)();

      // Replace with your actual tables/queries
      // Fallback to mock if querying fails
      var result = yield Promise.allSettled([supabase.from('users').select('id, role, country'), supabase.from('jobs').select('id, status, category'), supabase.from('quotes').select('id, status'), supabase.from('projects').select('id, status'), supabase.from('referrals').select('id, converted, source')]);
      var [usersR, jobsR, quotesR, projectsR, referralsR] = result;
      var users = usersR.status === 'fulfilled' && usersR.value.data ? usersR.value.data : [];
      var jobs = jobsR.status === 'fulfilled' && jobsR.value.data ? jobsR.value.data : [];
      var quotes = quotesR.status === 'fulfilled' && quotesR.value.data ? quotesR.value.data : [];
      var projects = projectsR.status === 'fulfilled' && projectsR.value.data ? projectsR.value.data : [];
      var referrals = referralsR.status === 'fulfilled' && referralsR.value.data ? referralsR.value.data : [];
      var mockIfEmpty = (arr, mock) => arr.length ? arr : mock;
      var usersData = mockIfEmpty(users, [{
        id: 1,
        role: 'client',
        country: 'US'
      }, {
        id: 2,
        role: 'talent',
        country: 'IN'
      }, {
        id: 3,
        role: 'talent',
        country: 'US'
      }, {
        id: 4,
        role: 'client',
        country: 'GB'
      }]);
      var jobsData = mockIfEmpty(jobs, [{
        id: 11,
        status: 'posted',
        category: 'AI/ML'
      }, {
        id: 12,
        status: 'filled',
        category: 'Design'
      }, {
        id: 13,
        status: 'filled',
        category: 'AI/ML'
      }]);
      var quotesData = mockIfEmpty(quotes, [{
        id: 21,
        status: 'sent'
      }, {
        id: 22,
        status: 'accepted'
      }, {
        id: 23,
        status: 'sent'
      }]);
      var projectsData = mockIfEmpty(projects, [{
        id: 31,
        status: 'active'
      }, {
        id: 32,
        status: 'completed'
      }, {
        id: 33,
        status: 'active'
      }]);
      var referralsData = mockIfEmpty(referrals, [{
        id: 41,
        converted: true,
        source: 'linkedin'
      }, {
        id: 42,
        converted: false,
        source: 'twitter'
      }, {
        id: 43,
        converted: true,
        source: 'partner'
      }]);
      var totalUsers = usersData.length;
      var totalTalents = usersData.filter(u => u.role === 'talent').length;
      var totalClients = usersData.filter(u => u.role === 'client').length;
      var jobsPosted = jobsData.filter(j => j.status === 'posted').length;
      var jobsFilled = jobsData.filter(j => j.status === 'filled').length;
      var quotesSent = quotesData.filter(q => q.status === 'sent').length;
      var quotesAccepted = quotesData.filter(q => q.status === 'accepted').length;
      var activeProjects = projectsData.filter(p => p.status === 'active').length;
      var categoryCounts = {};
      jobsData.forEach(j => {
        categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1;
      });
      var referralConversions = referralsData.filter(r => r.converted).length;
      var geoCounts = {};
      usersData.forEach(u => {
        geoCounts[u.country || 'Unknown'] = (geoCounts[u.country || 'Unknown'] || 0) + 1;
      });
      res.status(200).json({
        totals: {
          totalUsers,
          totalTalents,
          totalClients,
          jobsPosted,
          jobsFilled,
          quotesSent,
          quotesAccepted,
          activeProjects
        },
        topCategories: Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(_ref => {
          var [label, value] = _ref;
          return {
            label,
            value
          };
        }),
        referralConversions,
        geo: Object.entries(geoCounts).map(_ref2 => {
          var [country, value] = _ref2;
          return {
            label: country,
            value
          };
        })
      });
    } catch (e) {
      res.status(200).json({
        totals: {
          totalUsers: 4,
          totalTalents: 2,
          totalClients: 2,
          jobsPosted: 1,
          jobsFilled: 2,
          quotesSent: 2,
          quotesAccepted: 1,
          activeProjects: 2
        },
        topCategories: [{
          label: 'AI/ML',
          value: 2
        }, {
          label: 'Design',
          value: 1
        }],
        referralConversions: 2,
        geo: [{
          label: 'US',
          value: 2
        }, {
          label: 'IN',
          value: 1
        }, {
          label: 'GB',
          value: 1
        }]
      });
    }
  });
  return _handler.apply(this, arguments);
}

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(394676)));
module.exports = __webpack_exports__;

})();