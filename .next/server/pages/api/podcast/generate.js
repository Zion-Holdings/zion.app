"use strict";
(() => {
var exports = {};
exports.id = 991201;
exports.ids = [991201];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 430048:
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
/* harmony import */ var private_next_pages_api_podcast_generate_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(984381);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_podcast_generate_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_podcast_generate_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/podcast/generate",
        pathname: "/api/podcast/generate",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_podcast_generate_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/podcast/generate";
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
                page: "/api/podcast/generate",
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

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 629021:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 984381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(405206);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1052);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(629021);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333873);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(783045);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_3__);





var EPISODES_PATH = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'data', 'podcast', 'episodes.json');
function ensureStorage() {
  var dir = path__WEBPACK_IMPORTED_MODULE_2___default().dirname(EPISODES_PATH);
  if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(dir)) fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(dir, {
    recursive: true
  });
  if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(EPISODES_PATH)) fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(EPISODES_PATH, '[]', 'utf8');
}
function readEpisodes() {
  ensureStorage();
  return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(EPISODES_PATH, 'utf8'));
}
function writeEpisodes(episodes) {
  ensureStorage();
  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
}
function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (req, res) {
    if (req.method !== 'POST') return res.status(405).json({
      error: 'Method not allowed'
    });
    var {
      persona,
      invitee,
      topic,
      operatorPrompt
    } = req.body || {};
    var id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
    var system = "You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ".concat((persona === null || persona === void 0 ? void 0 : persona.voice) || 'Visionary', " tone, speak in ").concat((persona === null || persona === void 0 ? void 0 : persona.language) || 'English', ". If a style sample is provided, align tone and phrasing to it. Produce:\n1) 7-10 concise interview questions mixing visionary and technical angles\n2) Time markers for: Intro, segment transitions, Closing CTA for Zion\n3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest\n4) YouTube and Spotify descriptions\n5) A single-sentence Best Quote\nReturn a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.");
    var user = "Guest: ".concat((invitee === null || invitee === void 0 ? void 0 : invitee.name) || '', "\nBio: ").concat((invitee === null || invitee === void 0 ? void 0 : invitee.bio) || '', "\nTopic: ").concat(topic || '', "\nOperator Prompt: ").concat(operatorPrompt || '', "\nStyle Sample: ").concat((persona === null || persona === void 0 ? void 0 : persona.cloneStyleText) || '');
    var generated = null;
    try {
      var apiKey = process.env.OPENAI_API_KEY;
      var content;
      if (apiKey) {
        var _completion$choices;
        var openai = new (openai__WEBPACK_IMPORTED_MODULE_3___default())({
          apiKey
        });
        var completion = yield openai.chat.completions.create({
          model: process.env.ZION_GPT_MODEL || 'gpt-4o-mini',
          messages: [{
            role: 'system',
            content: system
          }, {
            role: 'user',
            content: user
          }],
          temperature: 0.8,
          max_tokens: 2048
        });
        content = ((_completion$choices = completion.choices) === null || _completion$choices === void 0 || (_completion$choices = _completion$choices[0]) === null || _completion$choices === void 0 || (_completion$choices = _completion$choices.message) === null || _completion$choices === void 0 ? void 0 : _completion$choices.content) || '';
      } else {
        content = JSON.stringify({
          title: "Interview with ".concat((invitee === null || invitee === void 0 ? void 0 : invitee.name) || 'Guest', " on ").concat(topic || 'Zion'),
          questions: ['What is the vision behind Zion as a global decentralized talent protocol?', 'How does Zion practically onboard talent and organizations?', 'What are the core protocol primitives (identity, reputation, incentives)?', 'How does governance work and how do contributors participate?', 'What challenges have you faced scaling globally?', 'How does Zion interoperate with existing web2 hiring systems?', 'What does success look like in 3-5 years?'],
          timeMarkers: {
            intro: '00:00',
            segments: ['03:00', '08:00', '12:00'],
            closing: '14:30'
          },
          transcript: 'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.',
          youtubeDescription: 'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.',
          spotifyDescription: 'A 15-minute interview on Zion: identity, incentives, governance, and real-world adoption.',
          bestQuote: 'Talent networks become protocols when incentives, reputation, and opportunity align.'
        });
      }
      try {
        generated = JSON.parse(content);
      } catch (_unused) {
        // Attempt to extract JSON block
        var match = content.match(/\{[\s\S]*\}$/);
        if (match) generated = JSON.parse(match[0]);
      }
      if (!generated || !generated.title || !generated.transcript) {
        return res.status(500).json({
          error: 'Failed to generate structured content'
        });
      }
      var episodes = readEpisodes();
      var episode = {
        id,
        createdAt: new Date().toISOString(),
        persona,
        invitee,
        topic,
        title: generated.title,
        questions: generated.questions || [],
        timeMarkers: generated.timeMarkers || {
          intro: '00:00',
          segments: [],
          closing: '14:30'
        },
        transcript: generated.transcript,
        youtubeDescription: generated.youtubeDescription || '',
        spotifyDescription: generated.spotifyDescription || '',
        bestQuote: generated.bestQuote || '',
        audio: {}
      };
      episodes.unshift(episode);
      writeEpisodes(episodes);
      return res.status(200).json({
        episode
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error'
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(430048)));
module.exports = __webpack_exports__;

})();