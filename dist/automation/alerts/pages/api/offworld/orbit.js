"use strict";
(() => {
var exports = {};
exports.id = 904455;
exports.ids = [904455];
exports.modules = {

/***/ 22568:
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
/* harmony import */ var private_next_pages_api_offworld_orbit_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(852935);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_offworld_orbit_ts__WEBPACK_IMPORTED_MODULE_6__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_offworld_orbit_ts__WEBPACK_IMPORTED_MODULE_6__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/offworld/orbit",
        pathname: "/api/offworld/orbit",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_offworld_orbit_ts__WEBPACK_IMPORTED_MODULE_6__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/offworld/orbit";
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
                page: "/api/offworld/orbit",
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

/***/ 67454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChatMessage: () => (/* binding */ appendChatMessage),
/* harmony export */   connectOrbit: () => (/* binding */ connectOrbit),
/* harmony export */   editConstitution: () => (/* binding */ editConstitution),
/* harmony export */   recordVote: () => (/* binding */ recordVote)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405206);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createIpfsClient;
var OrbitDB;
function lazyLoadDeps() {
  return _lazyLoadDeps.apply(this, arguments);
}
function _lazyLoadDeps() {
  _lazyLoadDeps = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
    try {
      var ipfsHttp = yield Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'ipfs-http-client'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
      createIpfsClient = ipfsHttp.create || ipfsHttp;
    } catch (_unused) {}
    try {
      var orbit = yield Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'orbit-db'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
      OrbitDB = orbit.default || orbit;
    } catch (_unused2) {}
  });
  return _lazyLoadDeps.apply(this, arguments);
}
function connectOrbit(_x) {
  return _connectOrbit.apply(this, arguments);
}
function _connectOrbit() {
  _connectOrbit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (customIpfsUrl) {
    yield lazyLoadDeps();
    if (!createIpfsClient || !OrbitDB) return {
      ipfs: null,
      orbit: null,
      stores: null
    };
    var ipfsUrl = customIpfsUrl || process.env.IPFS_API || 'http://127.0.0.1:5001';
    var ipfs = createIpfsClient({
      url: ipfsUrl
    });
    var orbit = yield OrbitDB.createInstance(ipfs);

    // Key stores for offworld
    var chat = yield orbit.feed('zion.chat');
    var votes = yield orbit.eventlog('zion.votes');
    var constitution = yield orbit.docstore('zion.constitution');
    return {
      ipfs,
      orbit,
      stores: {
        chat,
        votes,
        constitution
      }
    };
  });
  return _connectOrbit.apply(this, arguments);
}
function appendChatMessage(_x2, _x3) {
  return _appendChatMessage.apply(this, arguments);
}
function _appendChatMessage() {
  _appendChatMessage = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (stores, message) {
    if (!(stores !== null && stores !== void 0 && stores.chat)) return false;
    yield stores.chat.add(_objectSpread(_objectSpread({}, message), {}, {
      ts: message.ts || Date.now()
    }));
    return true;
  });
  return _appendChatMessage.apply(this, arguments);
}
function recordVote(_x4, _x5) {
  return _recordVote.apply(this, arguments);
}
function _recordVote() {
  _recordVote = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (stores, vote) {
    if (!(stores !== null && stores !== void 0 && stores.votes)) return false;
    yield stores.votes.add(_objectSpread(_objectSpread({}, vote), {}, {
      ts: vote.ts || Date.now()
    }));
    return true;
  });
  return _recordVote.apply(this, arguments);
}
function editConstitution(_x6, _x7) {
  return _editConstitution.apply(this, arguments);
}
function _editConstitution() {
  _editConstitution = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (stores, change) {
    if (!(stores !== null && stores !== void 0 && stores.constitution)) return false;
    var id = "".concat(Date.now(), "-").concat(change.section);
    yield stores.constitution.put(_objectSpread(_objectSpread({
      _id: id
    }, change), {}, {
      ts: change.ts || Date.now()
    }));
    return true;
  });
  return _editConstitution.apply(this, arguments);
}

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 852935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405206);
/* harmony import */ var _utils_offworld_orbitdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67454);


function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
    var {
      action
    } = req.query;
    var body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    var {
      stores
    } = yield (0,_utils_offworld_orbitdb__WEBPACK_IMPORTED_MODULE_1__.connectOrbit)();
    if (!stores) return res.status(503).json({
      error: 'OrbitDB unavailable'
    });
    try {
      if (action === 'chat' && req.method === 'POST') {
        yield (0,_utils_offworld_orbitdb__WEBPACK_IMPORTED_MODULE_1__.appendChatMessage)(stores, body);
        return res.status(200).json({
          ok: true
        });
      }
      if (action === 'vote' && req.method === 'POST') {
        yield (0,_utils_offworld_orbitdb__WEBPACK_IMPORTED_MODULE_1__.recordVote)(stores, body);
        return res.status(200).json({
          ok: true
        });
      }
      if (action === 'constitution' && req.method === 'POST') {
        yield (0,_utils_offworld_orbitdb__WEBPACK_IMPORTED_MODULE_1__.editConstitution)(stores, body);
        return res.status(200).json({
          ok: true
        });
      }
      return res.status(400).json({
        error: 'Unsupported action'
      });
    } catch (e) {
      return res.status(500).json({
        error: e.message
      });
    }
  });
  return _handler.apply(this, arguments);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(22568)));
module.exports = __webpack_exports__;

})();