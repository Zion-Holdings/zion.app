"use strict";
(() => {
var exports = {};
exports.id = 891379;
exports.ids = [891379];
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

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 486823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_DATA: () => (/* binding */ MOCK_DATA)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1052);

function nowIso() {
  return new Date().toISOString();
}
var MOCK_DATA = {
  users: [{
    __type: 'users',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    name: 'Ava Chen',
    email: 'ava@example.com',
    role: 'talent',
    status: 'active',
    verified: true,
    created_at: nowIso()
  }, {
    __type: 'users',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    name: 'Marco Silva',
    email: 'marco@example.com',
    role: 'client',
    status: 'active',
    verified: false,
    created_at: nowIso()
  }, {
    __type: 'users',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    verified: true,
    created_at: nowIso()
  }],
  cvs: [{
    __type: 'cvs',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    user_id: 'u1',
    title: 'Senior LLM Engineer CV',
    skills: ['OpenAI', 'RAG', 'TS'],
    status: 'active',
    verified: true,
    created_at: nowIso()
  }],
  projects: [{
    __type: 'projects',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    title: 'GenAI Chatbot',
    client: 'Acme Co',
    budget_usd: 50000,
    status: 'active',
    verified: false,
    created_at: nowIso()
  }],
  services: [{
    __type: 'services',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    title: 'AI Model Development',
    category: 'AI',
    price_usd: 12000,
    status: 'active',
    verified: true,
    created_at: nowIso()
  }],
  job_posts: [{
    __type: 'job_posts',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    title: 'LLM Engineer',
    company: 'Zion',
    location: 'Remote',
    employment_type: 'contract',
    status: 'active',
    verified: false,
    created_at: nowIso()
  }],
  equipment: [{
    __type: 'equipment',
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    name: 'A100 GPU Node',
    category: 'GPU',
    daily_rate_usd: 350,
    status: 'active',
    verified: true,
    created_at: nowIso()
  }]
};

/***/ }),

/***/ 677136:
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
/* harmony import */ var private_next_pages_api_admin_type_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(799815);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_admin_type_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_admin_type_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/admin/[type]",
        pathname: "/api/admin/[type]",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_admin_type_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/admin/[type]";
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
        const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__.getTracer)();
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
                page: "/api/admin/[type]",
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
                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__.BaseServerSpan.handleRequest) {
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
            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__.BaseServerSpan.handleRequest, {
                    spanName: `${method} ${req.url}`,
                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__.SpanKind.SERVER,
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

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 799815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(405206);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32292);
/* harmony import */ var _utils_admin_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(943260);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(558671);
/* harmony import */ var _utils_admin_mockData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(486823);



var _excluded = ["search", "sort", "order", "page", "pageSize", "format"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



function isSupabaseConfigured() {
  return !!process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
}
function parseListParams(req) {
  var _ref = req.query,
    {
      search,
      sort,
      order,
      page,
      pageSize,
      format
    } = _ref,
    rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);
  var filters = {};
  Object.keys(rest).forEach(k => {
    if (k.startsWith('f_')) filters[k.slice(2)] = rest[k];
  });
  return {
    search,
    sort,
    order: order || 'desc',
    page: page ? Number(page) : 0,
    pageSize: pageSize ? Number(pageSize) : 20,
    filters,
    format: format || undefined
  };
}
function toCsv(rows) {
  if (!rows.length) return '';
  var headers = Object.keys(rows[0]);
  var escape = v => {
    if (v === null || v === undefined) return '';
    var s = typeof v === 'string' ? v : JSON.stringify(v);
    return '"' + s.replace(/"/g, '""') + '"';
  };
  var lines = [headers.join(',')].concat(rows.map(r => headers.map(h => escape(r[h])).join(',')));
  return lines.join('\n');
}
function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (req, res) {
    var type = req.query.type || '';
    if (!_utils_admin_types__WEBPACK_IMPORTED_MODULE_5__.ADMIN_TYPES.includes(type)) return res.status(400).json({
      error: 'Invalid type'
    });
    var useSupabase = isSupabaseConfigured();
    if (req.method === 'GET') {
      var params = parseListParams(req);
      if (useSupabase) {
        var table = type;
        var query = _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.from(table).select('*', {
          count: 'exact'
        });
        if (params.search) {
          // heuristic: search name/title/email
          query = query.or('name.ilike.%' + params.search + '%,title.ilike.%' + params.search + '%,email.ilike.%' + params.search + '%');
        }
        if (params.filters) {
          for (var [k, v] of Object.entries(params.filters)) {
            if (v !== undefined) query = query.eq(k, v);
          }
        }
        if (params.sort) query = query.order(params.sort, {
          ascending: params.order === 'asc'
        });
        var from = params.page * params.pageSize;
        var to = from + params.pageSize - 1;
        var {
          data,
          error,
          count
        } = yield query.range(from, to);
        if (error) return res.status(500).json({
          error: error.message
        });
        if (params.format === 'csv') {
          res.setHeader('Content-Type', 'text/csv');
          res.setHeader('Content-Disposition', "attachment; filename=\"".concat(type, ".csv\""));
          return res.status(200).send(toCsv(data || []));
        }
        return res.status(200).json({
          items: data || [],
          total: count || 0
        });
      } else {
        // fallback
        var all = (_utils_admin_mockData__WEBPACK_IMPORTED_MODULE_2__.MOCK_DATA[type] || []).slice();
        var filtered = all;
        if (params.search) {
          var s = params.search.toLowerCase();
          filtered = filtered.filter(r => JSON.stringify(r).toLowerCase().includes(s));
        }
        if (params.filters) {
          var _loop = function* _loop(_k, _v) {
            filtered = filtered.filter(r => String(r[_k]) === String(_v));
          };
          for (var [_k, _v] of Object.entries(params.filters)) {
            yield* _loop(_k, _v);
          }
        }
        if (params.sort) {
          filtered.sort((a, b) => {
            var av = a[params.sort];
            var bv = b[params.sort];
            return (av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1);
          });
        }
        var total = filtered.length;
        var start = params.page * params.pageSize;
        var end = start + params.pageSize;
        var pageItems = filtered.slice(start, end);
        if (params.format === 'csv') {
          res.setHeader('Content-Type', 'text/csv');
          res.setHeader('Content-Disposition', "attachment; filename=\"".concat(type, ".csv\""));
          return res.status(200).send(toCsv(pageItems));
        }
        return res.status(200).json({
          items: pageItems,
          total
        });
      }
    }
    if (req.method === 'PATCH') {
      var {
        id,
        updates
      } = req.body;
      if (!id) return res.status(400).json({
        error: 'Missing id'
      });
      if (useSupabase) {
        var {
          data: _data,
          error: _error
        } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.from(type).update(_objectSpread(_objectSpread({}, updates), {}, {
          updated_at: new Date().toISOString()
        })).eq('id', id).select('*').single();
        if (_error) return res.status(500).json({
          error: _error.message
        });
        return res.status(200).json({
          item: _data
        });
      } else {
        var list = _utils_admin_mockData__WEBPACK_IMPORTED_MODULE_2__.MOCK_DATA[type] || [];
        var idx = list.findIndex(r => r.id === id);
        if (idx === -1) return res.status(404).json({
          error: 'Not found'
        });
        var updated = _objectSpread(_objectSpread(_objectSpread({}, list[idx]), updates), {}, {
          updated_at: new Date().toISOString()
        });
        list[idx] = updated;
        return res.status(200).json({
          item: updated
        });
      }
    }
    if (req.method === 'DELETE') {
      var _id = req.query.id || '';
      if (!_id) return res.status(400).json({
        error: 'Missing id'
      });
      if (useSupabase) {
        var {
          error: _error2
        } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.from(type).delete().eq('id', _id);
        if (_error2) return res.status(500).json({
          error: _error2.message
        });
        return res.status(200).json({
          ok: true
        });
      } else {
        var _list = _utils_admin_mockData__WEBPACK_IMPORTED_MODULE_2__.MOCK_DATA[type] || [];
        var _idx = _list.findIndex(r => r.id === _id);
        if (_idx === -1) return res.status(404).json({
          error: 'Not found'
        });
        _list.splice(_idx, 1);
        return res.status(200).json({
          ok: true
        });
      }
    }
    return res.status(405).json({
      error: 'Method not allowed'
    });
  });
  return _handler.apply(this, arguments);
}

/***/ }),

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 943260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_TYPES: () => (/* binding */ ADMIN_TYPES)
/* harmony export */ });
var ADMIN_TYPES = ['users', 'cvs', 'projects', 'services', 'job_posts', 'equipment'];

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(677136)));
module.exports = __webpack_exports__;

})();