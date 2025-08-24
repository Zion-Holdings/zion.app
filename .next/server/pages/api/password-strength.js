"use strict";
(() => {
var exports = {};
exports.id = 121014;
exports.ids = [121014];
exports.modules = {

/***/ 86846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405206);

function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({
        error: 'Method not allowed'
      });
    }
    try {
      var {
        password
      } = req.body;
      if (!password || typeof password !== 'string') {
        return res.status(400).json({
          error: 'Password is required'
        });
      }

      // Password analysis
      var length = password.length;
      var hasUppercase = /[A-Z]/.test(password);
      var hasLowercase = /[a-z]/.test(password);
      var hasNumbers = /\d/.test(password);
      var hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

      // Check for common patterns
      var commonPatterns = ['123', 'abc', 'qwe', 'password', 'admin', 'user', 'test', '123456', 'password123', 'admin123', 'qwerty', 'asdf'];
      var hasCommonPatterns = commonPatterns.some(pattern => password.toLowerCase().includes(pattern));

      // Calculate entropy (simplified)
      var charsetSize = (hasUppercase ? 26 : 0) + (hasLowercase ? 26 : 0) + (hasNumbers ? 10 : 0) + (hasSymbols ? 32 : 0);
      var entropy = charsetSize > 0 ? Math.log2(Math.pow(charsetSize, length)) : 0;

      // Calculate score
      var score = 0;
      score += Math.min(length * 2, 20); // Length contribution (max 20)
      score += hasUppercase ? 10 : 0;
      score += hasLowercase ? 10 : 0;
      score += hasNumbers ? 10 : 0;
      score += hasSymbols ? 15 : 0;
      score += entropy > 50 ? 15 : 0; // High entropy bonus
      score -= hasCommonPatterns ? 20 : 0; // Penalty for common patterns

      // Determine strength level
      var strength;
      if (score < 30) strength = 'very-weak';else if (score < 50) strength = 'weak';else if (score < 70) strength = 'medium';else if (score < 90) strength = 'strong';else strength = 'very-strong';

      // Generate feedback
      var feedback = [];
      if (length < 8) feedback.push('Password is too short (minimum 8 characters)');
      if (!hasUppercase) feedback.push('Add uppercase letters');
      if (!hasLowercase) feedback.push('Add lowercase letters');
      if (!hasNumbers) feedback.push('Add numbers');
      if (!hasSymbols) feedback.push('Add special characters');
      if (hasCommonPatterns) feedback.push('Avoid common patterns and words');
      if (entropy < 30) feedback.push('Password is too predictable');

      // Generate suggestions
      var suggestions = [];
      if (score < 50) {
        suggestions.push('Use a mix of uppercase, lowercase, numbers, and symbols');
        suggestions.push('Make it at least 12 characters long');
        suggestions.push('Avoid personal information and common words');
      }
      if (hasCommonPatterns) {
        suggestions.push('Replace common patterns with random characters');
        suggestions.push('Consider using a passphrase instead');
      }
      if (entropy < 40) {
        suggestions.push('Increase randomness by using more character types');
        suggestions.push('Consider using a password generator');
      }
      var result = {
        password,
        strength,
        score: Math.max(0, Math.min(100, score)),
        feedback,
        details: {
          length,
          hasUppercase,
          hasLowercase,
          hasNumbers,
          hasSymbols,
          hasCommonPatterns,
          entropy: Math.round(entropy * 100) / 100
        },
        suggestions
      };
      res.status(200).json(result);
    } catch (error) {
      console.error('Password strength check error:', error);
      res.status(500).json({
        error: 'Internal server error'
      });
    }
  });
  return _handler.apply(this, arguments);
}

/***/ }),

/***/ 551778:
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
/* harmony import */ var private_next_pages_api_password_strength_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86846);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_password_strength_ts__WEBPACK_IMPORTED_MODULE_6__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_password_strength_ts__WEBPACK_IMPORTED_MODULE_6__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/password-strength",
        pathname: "/api/password-strength",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_password_strength_ts__WEBPACK_IMPORTED_MODULE_6__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/password-strength";
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
                page: "/api/password-strength",
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(551778)));
module.exports = __webpack_exports__;

})();