"use strict";
(() => {
var exports = {};
exports.id = 916187;
exports.ids = [916187];
exports.modules = {

/***/ 11997:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 36936:
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
/* harmony import */ var private_next_pages_api_talent_portfolio_suggest_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(966299);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_talent_portfolio_suggest_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_talent_portfolio_suggest_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/talent/portfolio/suggest",
        pathname: "/api/talent/portfolio/suggest",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_talent_portfolio_suggest_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/talent/portfolio/suggest";
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
                page: "/api/talent/portfolio/suggest",
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

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 62868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatCompletion: () => (/* binding */ chatCompletion),
/* harmony export */   getOpenAI: () => (/* binding */ getOpenAI)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405206);

var _client;
function getOpenAI() {
  if (!_client) {
    // Lazy import to avoid ESM/CommonJS issues
    var OpenAI = __webpack_require__(783045);
    _client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }
  return _client;
}
function chatCompletion(_x) {
  return _chatCompletion.apply(this, arguments);
}
function _chatCompletion() {
  _chatCompletion = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messages) {
    var _response$choices;
    var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.env.OPENAI_MODEL || 'gpt-4o-mini';
    var client = getOpenAI();
    var response = yield client.chat.completions.create({
      model,
      messages,
      temperature: 0.4
    });
    var text = ((_response$choices = response.choices) === null || _response$choices === void 0 || (_response$choices = _response$choices[0]) === null || _response$choices === void 0 || (_response$choices = _response$choices.message) === null || _response$choices === void 0 ? void 0 : _response$choices.content) || '';
    return text.trim();
  });
  return _chatCompletion.apply(this, arguments);
}

/***/ }),

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 549320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitizeBullets: () => (/* binding */ sanitizeBullets),
/* harmony export */   sanitizeTags: () => (/* binding */ sanitizeTags),
/* harmony export */   sanitizeText: () => (/* binding */ sanitizeText)
/* harmony export */ });
function sanitizeText(input) {
  var text = String(input !== null && input !== void 0 ? input : '').trim();
  var escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  return escaped.slice(0, 5000);
}
function sanitizeTags(input) {
  var arr = Array.isArray(input) ? input : String(input !== null && input !== void 0 ? input : '').split(/[\n,]/);
  return arr.map(t => sanitizeText(t)).map(t => t.replace(/[^a-zA-Z0-9\-_.\s]/g, '')).map(t => t.trim()).filter(Boolean).slice(0, 25);
}
function sanitizeBullets(bullets) {
  var arr = Array.isArray(bullets) ? bullets : [];
  return arr.map(b => sanitizeText(b)).filter(Boolean).slice(0, 50);
}

/***/ }),

/***/ 587216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requireAuth: () => (/* binding */ requireAuth)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405206);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(633399);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__);


var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
var supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
function requireAuth(_x, _x2) {
  return _requireAuth.apply(this, arguments);
}
function _requireAuth() {
  _requireAuth = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
    var _data$user;
    var authHeader = req.headers.authorization || '';
    var token = authHeader.startsWith('Bearer ') ? authHeader.substring('Bearer '.length) : '';
    if (!token) {
      res.status(401).json({
        error: 'Unauthorized'
      });
      throw new Error('Unauthorized');
    }
    var supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      }
    });
    var {
      data,
      error
    } = yield supabase.auth.getUser();
    if (error || !(data !== null && data !== void 0 && (_data$user = data.user) !== null && _data$user !== void 0 && _data$user.id)) {
      res.status(401).json({
        error: 'Unauthorized'
      });
      throw new Error('Unauthorized');
    }
    return {
      id: data.user.id
    };
  });
  return _requireAuth.apply(this, arguments);
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

/***/ }),

/***/ 966299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(405206);
/* harmony import */ var _utils_ai_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62868);
/* harmony import */ var _utils_security_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(587216);
/* harmony import */ var _utils_sanitize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549320);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(633399);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__);





var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
var supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (req, res) {
    if (req.method !== 'POST') {
      res.status(405).json({
        error: 'Method Not Allowed'
      });
      return;
    }
    try {
      var user = yield (0,_utils_security_auth__WEBPACK_IMPORTED_MODULE_1__.requireAuth)(req, res);
      var {
        brief
      } = req.body || {};
      if (!brief) {
        res.status(400).json({
          error: 'Invalid input'
        });
        return;
      }
      var systemPrompt = 'You generate concise, compelling portfolio entries for software projects.';
      var userPrompt = "Brief: ".concat(brief, "\n\nReturn strictly valid JSON with keys: {\"title\": string, \"summary\": string, \"tags\": string[]}.\n- Title: 4-8 words, specific and professional.\n- Summary: 2-3 sentences, outcome-focused.\n- Tags: 5-10 concise technology or domain tags.");
      var raw = yield (0,_utils_ai_openai__WEBPACK_IMPORTED_MODULE_0__.chatCompletion)([{
        role: 'system',
        content: systemPrompt
      }, {
        role: 'user',
        content: userPrompt
      }]);
      var parsed = {};
      try {
        parsed = JSON.parse(raw);
      } catch (_unused) {
        parsed = {
          title: raw.slice(0, 80),
          summary: raw,
          tags: []
        };
      }
      var title = (0,_utils_sanitize__WEBPACK_IMPORTED_MODULE_3__.sanitizeText)(parsed.title).slice(0, 80);
      var summary = (0,_utils_sanitize__WEBPACK_IMPORTED_MODULE_3__.sanitizeText)(parsed.summary);
      var tags = (0,_utils_sanitize__WEBPACK_IMPORTED_MODULE_3__.sanitizeTags)(parsed.tags).slice(0, 10);
      var supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(supabaseUrl, supabaseAnonKey);
      yield supabase.from('resume_ai_outputs').insert({
        user_id: user.id,
        kind: 'portfolio_suggest',
        input: {
          brief: (0,_utils_sanitize__WEBPACK_IMPORTED_MODULE_3__.sanitizeText)(brief)
        },
        output: {
          title,
          summary,
          tags
        }
      });
      res.status(200).json({
        title,
        summary,
        tags
      });
    } catch (e) {
      if (!res.headersSent) {
        res.status(500).json({
          error: 'Internal Server Error',
          detail: (e === null || e === void 0 ? void 0 : e.message) || 'unknown'
        });
      }
    }
  });
  return _handler.apply(this, arguments);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(36936)));
module.exports = __webpack_exports__;

})();