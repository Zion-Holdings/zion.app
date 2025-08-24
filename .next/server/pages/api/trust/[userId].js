"use strict";
(() => {
var exports = {};
exports.id = 479684;
exports.ids = [479684];
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

/***/ 167587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeTrustScore: () => (/* binding */ computeTrustScore),
/* harmony export */   getRadarMetrics: () => (/* binding */ getRadarMetrics)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(405206);
/* harmony import */ var _weights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169855);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function normalizeInputs(inputs) {
  var _inputs$completionRat, _inputs$onboardingCom, _inputs$feedbackAvera, _inputs$feedbackQuali, _inputs$averageRespon, _inputs$accountAgeDay, _inputs$sentimentScor, _inputs$disputeFlags, _inputs$verifiedRevie, _inputs$endorsements, _inputs$flags;
  var completionRate = clamp((_inputs$completionRat = inputs.completionRate) !== null && _inputs$completionRat !== void 0 ? _inputs$completionRat : 0, 0, 1);
  var onboardingCompletionRate = clamp((_inputs$onboardingCom = inputs.onboardingCompletionRate) !== null && _inputs$onboardingCom !== void 0 ? _inputs$onboardingCom : completionRate, 0, 1);
  var feedbackAverage = clamp((_inputs$feedbackAvera = inputs.feedbackAverage) !== null && _inputs$feedbackAvera !== void 0 ? _inputs$feedbackAvera : 0, 0, 5);
  var feedbackQualityScore = clamp((_inputs$feedbackQuali = inputs.feedbackQualityScore) !== null && _inputs$feedbackQuali !== void 0 ? _inputs$feedbackQuali : 0.5, 0, 1);
  var averageResponseHours = Math.max(0, (_inputs$averageRespon = inputs.averageResponseHours) !== null && _inputs$averageRespon !== void 0 ? _inputs$averageRespon : 24);
  var accountAgeDays = Math.max(0, (_inputs$accountAgeDay = inputs.accountAgeDays) !== null && _inputs$accountAgeDay !== void 0 ? _inputs$accountAgeDay : 0);
  var sentimentScore = clamp((_inputs$sentimentScor = inputs.sentimentScore) !== null && _inputs$sentimentScor !== void 0 ? _inputs$sentimentScor : 0, -1, 1);
  var disputeFlags = Math.max(0, (_inputs$disputeFlags = inputs.disputeFlags) !== null && _inputs$disputeFlags !== void 0 ? _inputs$disputeFlags : 0);
  var verifiedReviewRatio = clamp((_inputs$verifiedRevie = inputs.verifiedReviewRatio) !== null && _inputs$verifiedRevie !== void 0 ? _inputs$verifiedRevie : 0, 0, 1);
  var endorsements = Math.max(0, (_inputs$endorsements = inputs.endorsements) !== null && _inputs$endorsements !== void 0 ? _inputs$endorsements : 0);
  var flags = Math.max(0, (_inputs$flags = inputs.flags) !== null && _inputs$flags !== void 0 ? _inputs$flags : 0);
  return {
    completionRate,
    onboardingCompletionRate,
    feedbackAverage,
    feedbackQualityScore,
    averageResponseHours,
    accountAgeDays,
    sentimentScore,
    disputeFlags,
    verifiedReviewRatio,
    endorsements,
    flags
  };
}
function scoreComponent(key, normalized, weights) {
  var raw = 0;
  switch (key) {
    case 'completionRate':
      raw = normalized.completionRate; // 0-1
      break;
    case 'onboardingCompletionRate':
      raw = normalized.onboardingCompletionRate;
      break;
    case 'feedbackAverage':
      raw = normalized.feedbackAverage / 5; // 0-1
      break;
    case 'feedbackQualityScore':
      raw = normalized.feedbackQualityScore; // 0-1
      break;
    case 'responseTime':
      // Convert average hours to a 0-1 where 0 is very slow, 1 is very fast
      var hours = normalized.averageResponseHours;
      // 0-2h -> ~1, 48h+ -> ~0
      raw = clamp(1 - hours / 48, 0, 1);
      break;
    case 'accountLongevity':
      // 0-365+ days scaled 0-1 with diminishing returns
      var years = normalized.accountAgeDays / 365;
      raw = clamp(1 - Math.exp(-years), 0, 1);
      break;
    case 'sentimentScore':
      // -1..1 -> 0..1
      raw = clamp((normalized.sentimentScore + 1) / 2, 0, 1);
      break;
    case 'disputeFlags':
      // More disputes -> worse score. Use soft penalty: 0 disputes => 1; 5+ => ~0
      raw = clamp(1 - normalized.disputeFlags / 5, 0, 1);
      break;
    case 'verifiedReviewRatio':
      raw = normalized.verifiedReviewRatio; // 0-1
      break;
    case 'endorsements':
      // Logistic-ish mapping: 0->0, 5->~0.6, 15->~0.85, 30->~0.95
      raw = clamp(1 - Math.exp(-(normalized.endorsements || 0) / 8), 0, 1);
      break;
    case 'flags':
      // Community flags lower the score.
      raw = clamp(1 - (normalized.flags || 0) / 5, 0, 1);
      break;
  }
  var weighted = raw * (weights[key] || 0);
  return {
    raw,
    weighted
  };
}
function classifyRisk(totalScore, numDisputes) {
  if (numDisputes >= 3) return 'Risk Alert';
  if (totalScore >= 85) return 'High Trust';
  if (totalScore >= 60) return 'Moderate Trust';
  return 'Risk Alert';
}
function computeTrustScore(_x, _x2) {
  return _computeTrustScore.apply(this, arguments);
}
function _computeTrustScore() {
  _computeTrustScore = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (inputs, options) {
    var weights = yield (0,_weights__WEBPACK_IMPORTED_MODULE_1__.getTrustWeights)();
    var normalized = normalizeInputs(inputs);
    var components = Object.keys(weights).map(key => {
      return _objectSpread({
        key
      }, scoreComponent(key, normalized, weights));
    });

    // Sum weighted, but consider negative weights are already part of mapping 0..1 then * negative
    var weightedSum = components.reduce((acc, c) => acc + c.weighted, 0);
    // Normalize to 0-100 by dividing by sum of absolute weights to maintain scale
    var absWeightSum = Object.values(weights).reduce((acc, w) => acc + Math.abs(w), 0) || 1;
    var total = clamp(weightedSum / absWeightSum * 100, 0, 100);
    var communityVerified = normalized.endorsements >= 5 && normalized.flags === 0 && normalized.verifiedReviewRatio >= 0.5;
    var riskLevel = classifyRisk(total, normalized.disputeFlags);
    return {
      total: Math.round(total),
      components,
      normalizedInputs: normalized,
      riskLevel,
      reasonSummary: options === null || options === void 0 ? void 0 : options.reasonSummary,
      communityVerified,
      updatedAt: new Date().toISOString()
    };
  });
  return _computeTrustScore.apply(this, arguments);
}
function getRadarMetrics(breakdown) {
  return breakdown.components.map(c => ({
    label: String(c.key),
    value: Math.round(c.raw * 100)
  }));
}

/***/ }),

/***/ 329508:
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
/* harmony import */ var private_next_pages_api_trust_userId_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(393876);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_trust_userId_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_trust_userId_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/trust/[userId]",
        pathname: "/api/trust/[userId]",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_trust_userId_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/trust/[userId]";
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
                page: "/api/trust/[userId]",
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

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 393876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(405206);
/* harmony import */ var _utils_trust_compute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167587);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558671);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


function analyzeWithGPT(_x, _x2) {
  return _analyzeWithGPT.apply(this, arguments);
}
function _analyzeWithGPT() {
  _analyzeWithGPT = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (userId, inputs) {
    var apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      // Fallback heuristic
      var heuristic = inputs.disputeFlags >= 3 ? 'Risk Alert' : inputs.completionRate >= 0.8 && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust';
      return {
        riskLevel: heuristic,
        reasonSummary: 'Heuristic classification (no OpenAI key set).'
      };
    }
    try {
      var _resp$choices;
      var {
        OpenAI
      } = yield __webpack_require__.e(/* import() */ 618096).then(__webpack_require__.t.bind(__webpack_require__, 783045, 23));
      var client = new OpenAI({
        apiKey
      });
      var prompt = "Based on user activity logs and sentiment of reviews/messages, classify this user\u2019s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ".concat(userId, "\nInputs: ").concat(JSON.stringify(inputs, null, 2));
      var resp = yield client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{
          role: 'system',
          content: 'You are an impartial risk and trust analyst for a talent marketplace.'
        }, {
          role: 'user',
          content: prompt
        }],
        temperature: 0.2,
        max_tokens: 200
      });
      var content = ((_resp$choices = resp.choices) === null || _resp$choices === void 0 || (_resp$choices = _resp$choices[0]) === null || _resp$choices === void 0 || (_resp$choices = _resp$choices.message) === null || _resp$choices === void 0 ? void 0 : _resp$choices.content) || '';
      var lower = content.toLowerCase();
      var level = 'Moderate Trust';
      if (lower.includes('risk alert')) level = 'Risk Alert';else if (lower.includes('high trust')) level = 'High Trust';else if (lower.includes('moderate trust')) level = 'Moderate Trust';
      return {
        riskLevel: level,
        reasonSummary: content.trim()
      };
    } catch (e) {
      return {
        riskLevel: 'Moderate Trust',
        reasonSummary: "Analysis unavailable: ".concat((e === null || e === void 0 ? void 0 : e.message) || 'unknown error')
      };
    }
  });
  return _analyzeWithGPT.apply(this, arguments);
}
function handler(_x3, _x4) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (req, res) {
    var {
      userId
    } = req.query;
    if (!userId || Array.isArray(userId)) return res.status(400).json({
      error: 'Invalid userId'
    });
    if (req.method === 'GET') {
      try {
        var analyze = req.query.analyze === 'true';

        // Fetch inputs from DB if available, else use mock defaults
        var inputs = null;
        try {
          var {
            data
          } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('trust_inputs').select('*').eq('userId', userId).single();
          if (data) inputs = data.values;
        } catch (_unused) {}
        if (!inputs) {
          inputs = {
            completionRate: 0.88,
            onboardingCompletionRate: 0.9,
            feedbackAverage: 4.7,
            feedbackQualityScore: 0.8,
            averageResponseHours: 6,
            accountAgeDays: 420,
            sentimentScore: 0.4,
            disputeFlags: 0,
            verifiedReviewRatio: 0.7,
            endorsements: 8,
            flags: 0
          };
        }
        var reasonSummary;
        var riskLevelOverride;
        if (analyze) {
          var analysis = yield analyzeWithGPT(userId, inputs);
          reasonSummary = analysis.reasonSummary;
          riskLevelOverride = analysis.riskLevel;
        }
        var breakdown = yield (0,_utils_trust_compute__WEBPACK_IMPORTED_MODULE_1__.computeTrustScore)(inputs, {
          reasonSummary
        });
        var result = _objectSpread(_objectSpread({}, breakdown), {}, {
          riskLevel: riskLevelOverride || breakdown.riskLevel
        });

        // Persist latest score when possible
        try {
          yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('trust_scores').upsert({
            userId,
            breakdown: result,
            updatedAt: result.updatedAt
          }, {
            onConflict: 'userId'
          });
        } catch (_unused2) {}
        return res.status(200).json(result);
      } catch (e) {
        return res.status(500).json({
          error: (e === null || e === void 0 ? void 0 : e.message) || 'Failed to compute trust score'
        });
      }
    }
    if (req.method === 'POST') {
      try {
        var body = req.body;
        if (!body) return res.status(400).json({
          error: 'Missing body'
        });
        var _inputs = body;
        var _breakdown = yield (0,_utils_trust_compute__WEBPACK_IMPORTED_MODULE_1__.computeTrustScore)(_inputs);
        try {
          yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('trust_inputs').upsert({
            userId,
            values: _inputs
          }, {
            onConflict: 'userId'
          });
          yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('trust_scores').upsert({
            userId,
            breakdown: _breakdown,
            updatedAt: _breakdown.updatedAt
          }, {
            onConflict: 'userId'
          });
        } catch (_unused3) {}
        return res.status(200).json(_breakdown);
      } catch (e) {
        return res.status(500).json({
          error: (e === null || e === void 0 ? void 0 : e.message) || 'Failed to save trust inputs'
        });
      }
    }
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({
      error: 'Method not allowed'
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(329508)));
module.exports = __webpack_exports__;

})();