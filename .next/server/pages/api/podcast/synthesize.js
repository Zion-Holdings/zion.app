"use strict";
(() => {
var exports = {};
exports.id = 227484;
exports.ids = [227484];
exports.modules = {

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 138624:
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
/* harmony import */ var private_next_pages_api_podcast_synthesize_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(510692);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_podcast_synthesize_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_podcast_synthesize_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/podcast/synthesize",
        pathname: "/api/podcast/synthesize",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_podcast_synthesize_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/podcast/synthesize";
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
                page: "/api/podcast/synthesize",
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

/***/ 321820:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 328354:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 510692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(405206);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(629021);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(333873);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(671038);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var EPISODES_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'podcast', 'episodes.json');
var PUBLIC_DIR = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'public', 'podcast');
function ensureStorage() {
  var dir = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(EPISODES_PATH);
  if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(dir)) fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(dir, {
    recursive: true
  });
  if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(EPISODES_PATH)) fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(EPISODES_PATH, '[]', 'utf8');
  if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(PUBLIC_DIR)) fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(PUBLIC_DIR, {
    recursive: true
  });
}
function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (req, res) {
    if (req.method !== 'POST') return res.status(405).json({
      error: 'Method not allowed'
    });
    ensureStorage();
    var {
      episodeId
    } = req.body || {};
    var episodes = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(EPISODES_PATH, 'utf8'));
    var idx = episodes.findIndex(e => e.id === episodeId);
    if (idx === -1) return res.status(404).json({
      error: 'Episode not found'
    });
    var episode = episodes[idx];
    var text = episode.transcript;
    var elevenKey = process.env.ELEVENLABS_API_KEY;
    var playhtKey = process.env.PLAYHT_API_KEY;
    var baseFilename = "".concat(episode.id, "-").concat(Date.now());
    var mp3Path = path__WEBPACK_IMPORTED_MODULE_1___default().join(PUBLIC_DIR, "".concat(baseFilename, ".mp3"));
    var wavPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(PUBLIC_DIR, "".concat(baseFilename, ".wav"));
    var mp4Path = path__WEBPACK_IMPORTED_MODULE_1___default().join(PUBLIC_DIR, "".concat(baseFilename, ".mp4"));
    var mp3Created = false;
    try {
      if (elevenKey) {
        var voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
        var resp = yield axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://api.elevenlabs.io/v1/text-to-speech/".concat(voiceId), {
          text,
          model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2'
        }, {
          responseType: 'arraybuffer',
          headers: {
            'xi-api-key': elevenKey,
            'Content-Type': 'application/json'
          }
        });
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(mp3Path, Buffer.from(resp.data));
        mp3Created = true;
      } else if (playhtKey) {
        var _resp = yield axios__WEBPACK_IMPORTED_MODULE_3___default().post('https://api.play.ht/api/v2/tts', {
          text,
          voice: process.env.PLAYHT_VOICE || 'en-US-MichelleNeural'
        }, {
          responseType: 'arraybuffer',
          headers: {
            Authorization: "Bearer ".concat(playhtKey),
            'Content-Type': 'application/json'
          }
        });
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(mp3Path, Buffer.from(_resp.data));
        mp3Created = true;
      } else {
        // Stub silent mp3 if no provider configured
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(mp3Path, Buffer.alloc(0));
        mp3Created = true;
      }
      if (mp3Created) {
        // Simple placeholders for WAV/MP4; real conversion would use ffmpeg
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(wavPath, fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(mp3Path));
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(mp4Path, fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(mp3Path));
      }
      var publicBase = '/podcast/' + baseFilename;
      episode.audio = {
        mp3Url: publicBase + '.mp3',
        wavUrl: publicBase + '.wav',
        mp4Url: publicBase + '.mp4'
      };
      episodes[idx] = episode;
      fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
      return res.status(200).json({
        episode
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: (error === null || error === void 0 ? void 0 : error.message) || 'Synthesis failed'
      });
    }
  });
  return _handler.apply(this, arguments);
}

/***/ }),

/***/ 583997:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 594735:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 629021:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 912412:
/***/ ((module) => {

module.exports = require("assert");

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(138624)));
module.exports = __webpack_exports__;

})();