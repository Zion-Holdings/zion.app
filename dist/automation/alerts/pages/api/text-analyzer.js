"use strict";
(() => {
var exports = {};
exports.id = 762101;
exports.ids = [762101];
exports.modules = {

/***/ 111552:
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
/* harmony import */ var private_next_pages_api_text_analyzer_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(503957);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_text_analyzer_ts__WEBPACK_IMPORTED_MODULE_6__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_text_analyzer_ts__WEBPACK_IMPORTED_MODULE_6__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/text-analyzer",
        pathname: "/api/text-analyzer",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_text_analyzer_ts__WEBPACK_IMPORTED_MODULE_6__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/text-analyzer";
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
                page: "/api/text-analyzer",
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

/***/ 503957:
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
        text
      } = req.body;
      if (!text || typeof text !== 'string') {
        return res.status(400).json({
          error: 'Text is required'
        });
      }
      if (text.length > 10000) {
        return res.status(400).json({
          error: 'Text too long (max 10,000 characters)'
        });
      }

      // Basic statistics
      var characters = text.length;
      var charactersNoSpaces = text.replace(/\s/g, '').length;
      var words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
      var sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
      var paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;

      // Syllable counting (simplified)
      var syllableCount = word => {
        word = word.toLowerCase();
        if (word.length <= 3) return 1;
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        var matches = word.match(/[aeiouy]{1,2}/g);
        return matches ? matches.length : 1;
      };
      var syllables = text.split(/\s+/).reduce((total, word) => {
        return total + syllableCount(word);
      }, 0);

      // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)
      var readingTime = Math.ceil(words / 200);
      var speakingTime = Math.ceil(words / 150);

      // Readability scores
      var fleschReadingEase = Math.max(0, Math.min(100, 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)));
      var fleschKincaidGrade = Math.max(0, 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59);
      var gunningFog = Math.max(0, 0.4 * (words / sentences + 100 * (text.split(/\s+/).filter(word => word.length > 6).length / words)));
      var smog = Math.max(0, 1.043 * Math.sqrt(text.split(/\s+/).filter(word => word.length > 2).length * (30 / sentences)) + 3.1291);
      var colemanLiau = Math.max(0, 0.0588 * (charactersNoSpaces / words * 100) - 0.296 * (sentences / words * 100) - 15.8);
      var automatedReadability = Math.max(0, 4.71 * (charactersNoSpaces / words) + 0.5 * (words / sentences) - 21.43);
      var averageGrade = Math.round((fleschKincaidGrade + gunningFog + smog + colemanLiau + automatedReadability) / 5);

      // Sentiment analysis (simplified)
      var positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'brilliant', 'outstanding', 'superb', 'marvelous'];
      var negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'dreadful', 'atrocious', 'abysmal', 'appalling', 'dismal', 'lousy'];
      var textWords = text.toLowerCase().split(/\s+/);
      var positiveCount = textWords.filter(word => positiveWords.includes(word)).length;
      var negativeCount = textWords.filter(word => negativeWords.includes(word)).length;
      var sentimentScore = positiveCount - negativeCount;
      var sentimentLabel;
      if (sentimentScore <= -3) sentimentLabel = 'very-negative';else if (sentimentScore <= -1) sentimentLabel = 'negative';else if (sentimentScore <= 1) sentimentLabel = 'neutral';else if (sentimentScore <= 3) sentimentLabel = 'positive';else sentimentLabel = 'very-positive';

      // Keyword analysis
      var wordCounts = new Map();
      text.toLowerCase().split(/\s+/).forEach(word => {
        var cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length > 2) {
          wordCounts.set(cleanWord, (wordCounts.get(cleanWord) || 0) + 1);
        }
      });
      var topWords = Array.from(wordCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).map(_ref => {
        var [word, count] = _ref;
        return {
          word,
          count,
          frequency: Math.round(count / words * 1000) / 10
        };
      });

      // Bigrams and trigrams
      var wordsArray = text.toLowerCase().split(/\s+/);
      var bigramCounts = new Map();
      var trigramCounts = new Map();
      for (var i = 0; i < wordsArray.length - 1; i++) {
        var bigram = "".concat(wordsArray[i], " ").concat(wordsArray[i + 1]);
        bigramCounts.set(bigram, (bigramCounts.get(bigram) || 0) + 1);
      }
      for (var _i = 0; _i < wordsArray.length - 2; _i++) {
        var trigram = "".concat(wordsArray[_i], " ").concat(wordsArray[_i + 1], " ").concat(wordsArray[_i + 2]);
        trigramCounts.set(trigram, (trigramCounts.get(trigram) || 0) + 1);
      }
      var bigrams = Array.from(bigramCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).map(_ref2 => {
        var [phrase, count] = _ref2;
        return {
          phrase,
          count
        };
      });
      var trigrams = Array.from(trigramCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).map(_ref3 => {
        var [phrase, count] = _ref3;
        return {
          phrase,
          count
        };
      });

      // Language detection (simplified - assume English for demo)
      var isEnglish = /^[a-zA-Z\s.,!?;:'"()-]+$/.test(text);
      var detectedLanguage = isEnglish ? 'en' : 'unknown';
      var confidence = isEnglish ? 0.95 : 0.5;
      var result = {
        text,
        statistics: {
          characters,
          charactersNoSpaces,
          words,
          sentences,
          paragraphs,
          syllables,
          readingTime,
          speakingTime
        },
        readability: {
          fleschReadingEase: Math.round(fleschReadingEase * 100) / 100,
          fleschKincaidGrade: Math.round(fleschKincaidGrade * 100) / 100,
          gunningFog: Math.round(gunningFog * 100) / 100,
          smog: Math.round(smog * 100) / 100,
          colemanLiau: Math.round(colemanLiau * 100) / 100,
          automatedReadability: Math.round(automatedReadability * 100) / 100,
          averageGrade
        },
        sentiment: {
          score: sentimentScore,
          label: sentimentLabel,
          positiveWords: textWords.filter(word => positiveWords.includes(word)),
          negativeWords: textWords.filter(word => negativeWords.includes(word))
        },
        language: {
          detectedLanguage,
          confidence,
          isEnglish
        },
        keywords: {
          topWords,
          bigrams,
          trigrams
        }
      };
      res.status(200).json(result);
    } catch (error) {
      console.error('Text analysis error:', error);
      res.status(500).json({
        error: 'Internal server error'
      });
    }
  });
  return _handler.apply(this, arguments);
}

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(111552)));
module.exports = __webpack_exports__;

})();