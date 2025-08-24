"use strict";
(() => {
var exports = {};
exports.id = 792790;
exports.ids = [792790];
exports.modules = {

/***/ 260155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSessionCookie: () => (/* binding */ clearSessionCookie),
/* harmony export */   getSessionFromReq: () => (/* binding */ getSessionFromReq),
/* harmony export */   isInternalAgentRequest: () => (/* binding */ isInternalAgentRequest),
/* harmony export */   setSessionCookie: () => (/* binding */ setSessionCookie),
/* harmony export */   signSession: () => (/* binding */ signSession),
/* harmony export */   verifySessionToken: () => (/* binding */ verifySessionToken)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

var COOKIE_NAME = 'admin_session';
function getEnv(name, fallback) {
  var v = process.env[name] || fallback;
  if (!v) throw new Error("Missing required env var ".concat(name));
  return v;
}
function signSession(session) {
  var secret = getEnv('ADMIN_SESSION_SECRET', 'CHANGE_ME_DEV_SECRET');
  var payload = Buffer.from(JSON.stringify(session)).toString('base64');
  var hmac = crypto__WEBPACK_IMPORTED_MODULE_0___default().createHmac('sha256', secret).update(payload).digest('hex');
  return "".concat(payload, ".").concat(hmac);
}
function verifySessionToken(token) {
  if (!token) return null;
  var secret = getEnv('ADMIN_SESSION_SECRET', 'CHANGE_ME_DEV_SECRET');
  var parts = token.split('.');
  if (parts.length !== 2) return null;
  var [payload, signature] = parts;
  var expected = crypto__WEBPACK_IMPORTED_MODULE_0___default().createHmac('sha256', secret).update(payload).digest('hex');
  if (!crypto__WEBPACK_IMPORTED_MODULE_0___default().timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    var session = JSON.parse(Buffer.from(payload, 'base64').toString());
    return session;
  } catch (_unused) {
    return null;
  }
}
function getSessionFromReq(req) {
  var cookieHeader = req.headers.cookie || '';
  var cookie = cookieHeader.split(';').map(c => c.trim()).find(c => c.startsWith("".concat(COOKIE_NAME, "=")));
  if (!cookie) return null;
  var token = cookie.substring(COOKIE_NAME.length + 1);
  return verifySessionToken(token);
}
function setSessionCookie(res, session) {
  var token = signSession(session);
  var maxAge = 60 * 60 * 24; // 1 day
  var expires = new Date(Date.now() + maxAge * 1000).toUTCString();
  var cookie = "".concat(COOKIE_NAME, "=").concat(token, "; Path=/; HttpOnly; SameSite=Lax; Max-Age=").concat(maxAge, "; Expires=").concat(expires);
  res.setHeader('Set-Cookie', cookie);
}
function clearSessionCookie(res) {
  var cookie = "".concat(COOKIE_NAME, "=deleted; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT");
  res.setHeader('Set-Cookie', cookie);
}
function isInternalAgentRequest(req) {
  var key = req.headers['x-internal-key'];
  var expected = getEnv('AGENT_INTERNAL_KEY', 'DEV_INTERNAL_KEY');
  if (!key || Array.isArray(key)) return false;
  return crypto__WEBPACK_IMPORTED_MODULE_0___default().timingSafeEqual(Buffer.from(key), Buffer.from(expected));
}

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 726266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_adminAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260155);

function handler(req, res) {
  var session = (0,_utils_adminAuth__WEBPACK_IMPORTED_MODULE_0__.getSessionFromReq)(req);
  var internal = (0,_utils_adminAuth__WEBPACK_IMPORTED_MODULE_0__.isInternalAgentRequest)(req);
  if (!session && !internal) {
    res.status(401).json({
      error: 'Unauthorized'
    });
    return;
  }
  res.status(200).json({
    message: 'OK'
  });
}

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 779940:
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
/* harmony import */ var private_next_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(726266);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/auth-session",
        pathname: "/api/auth-session",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/auth-session";
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
                page: "/api/auth-session",
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(779940)));
module.exports = __webpack_exports__;

})();