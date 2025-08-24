"use strict";
(() => {
var exports = {};
exports.id = 268233;
exports.ids = [268233];
exports.modules = {

/***/ 16148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(405206);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(881476);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_supabase_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_talent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(603727);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1052);
/* harmony import */ var _utils_api_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165827);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
var SUPPORTED_LANGS = (process.env.SUPPORTED_LANGS || 'en,es,de,fr,pt,ja,zh').split(',').map(x => x.trim());
function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (req, res) {
    if (req.method === 'GET') {
      try {
        if (hasSupabase) {
          var {
            data,
            error
          } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_5__.supabase.from('talent_profiles').select('*').order('created_at', {
            ascending: false
          });
          if (error) throw error;
          return res.status(200).json({
            items: data
          });
        }
        return res.status(200).json({
          items: _data_talent__WEBPACK_IMPORTED_MODULE_1__.TALENT_PROFILES
        });
      } catch (e) {
        return res.status(500).json({
          error: e.message
        });
      }
    }
    if (req.method === 'POST') {
      try {
        var payload = req.body;
        var slug = (payload.name || 'talent').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)().slice(0, 6);
        var item = _objectSpread(_objectSpread({}, payload), {}, {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
          slug,
          verified: false,
          rating: 0,
          reviewsCount: 0,
          createdAt: new Date().toISOString(),
          summary: payload.summary || '',
          skills: payload.skills || [],
          name: payload.name || 'Unnamed',
          title: payload.title || 'Professional',
          location: payload.location || 'Remote',
          availability: payload.availability || 'Open'
        });

        // Auto-translate
        var originalLang = payload.originalLanguage || (0,_utils_api_translate__WEBPACK_IMPORTED_MODULE_3__.detectLanguageSimple)([item.title, item.summary, item.bio || ''].join('\n'));
        var translations = {};
        for (var lang of SUPPORTED_LANGS) {
          if (!lang || lang === originalLang) continue;
          translations.title = translations.title || {};
          translations.summary = translations.summary || {};
          translations.bio = translations.bio || {};
          if (item.title) translations.title[lang] = yield (0,_utils_api_translate__WEBPACK_IMPORTED_MODULE_3__.translateText)(item.title, lang, originalLang);
          if (item.summary) translations.summary[lang] = yield (0,_utils_api_translate__WEBPACK_IMPORTED_MODULE_3__.translateText)(item.summary, lang, originalLang);
          if (item.bio) translations.bio[lang] = yield (0,_utils_api_translate__WEBPACK_IMPORTED_MODULE_3__.translateText)(item.bio, lang, originalLang);
          if (item.category) {
            translations.category = translations.category || {};
            translations.category[lang] = yield (0,_utils_api_translate__WEBPACK_IMPORTED_MODULE_3__.translateText)(item.category, lang, originalLang);
          }
        }
        item.originalLanguage = originalLang;
        item.translations = translations;
        if (hasSupabase) {
          var _item$hourlyRateUsd, _item$requestQuote, _item$profileImageUrl, _item$videoUrl, _item$portfolio, _item$verified, _item$rating, _item$reviewsCount;
          var {
            error: _error
          } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_5__.supabase.from('talent_profiles').insert({
            id: item.id,
            slug: item.slug,
            name: item.name,
            title: item.title,
            category: item.category,
            location: item.location,
            timezone: item.timezone,
            region: item.region,
            skills: item.skills,
            summary: item.summary,
            bio: item.bio,
            hourly_rate_usd: (_item$hourlyRateUsd = item.hourlyRateUsd) !== null && _item$hourlyRateUsd !== void 0 ? _item$hourlyRateUsd : null,
            request_quote: (_item$requestQuote = item.requestQuote) !== null && _item$requestQuote !== void 0 ? _item$requestQuote : null,
            availability: item.availability,
            profile_image_url: (_item$profileImageUrl = item.profileImageUrl) !== null && _item$profileImageUrl !== void 0 ? _item$profileImageUrl : null,
            video_url: (_item$videoUrl = item.videoUrl) !== null && _item$videoUrl !== void 0 ? _item$videoUrl : null,
            portfolio: (_item$portfolio = item.portfolio) !== null && _item$portfolio !== void 0 ? _item$portfolio : null,
            verified: (_item$verified = item.verified) !== null && _item$verified !== void 0 ? _item$verified : null,
            rating: (_item$rating = item.rating) !== null && _item$rating !== void 0 ? _item$rating : null,
            reviews_count: (_item$reviewsCount = item.reviewsCount) !== null && _item$reviewsCount !== void 0 ? _item$reviewsCount : null,
            created_at: item.createdAt,
            // i18n
            original_language: item.originalLanguage,
            translations: item.translations
          });
          if (_error) throw _error;
          return res.status(201).json({
            slug: item.slug
          });
        }

        // Fallback: return the slug as if saved
        return res.status(201).json({
          slug: item.slug
        });
      } catch (e) {
        return res.status(500).json({
          error: e.message
        });
      }
    }
    return res.setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed');
  });
  return _handler.apply(this, arguments);
}

/***/ }),

/***/ 165827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectLanguageSimple: () => (/* binding */ detectLanguageSimple),
/* harmony export */   translateText: () => (/* binding */ translateText)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405206);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(783045);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);


var provider = process.env.TRANSLATION_PROVIDER || (process.env.OPENAI_API_KEY ? 'openai' : process.env.DEEPL_API_KEY ? 'deepl' : 'none');
var openai = null;
if (provider === 'openai') {
  openai = new (openai__WEBPACK_IMPORTED_MODULE_0___default())({
    apiKey: process.env.OPENAI_API_KEY
  });
}
function translateWithOpenAI(_x, _x2, _x3) {
  return _translateWithOpenAI.apply(this, arguments);
}
function _translateWithOpenAI() {
  _translateWithOpenAI = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (text, to, from) {
    var _completion$choices;
    if (!openai) throw new Error('OpenAI not configured');
    var system = 'You translate text. Respond with only the translated content without extra commentary.';
    var user = "Translate to ".concat(to, ".").concat(from ? " Source language is ".concat(from, ".") : '', "\n\n").concat(text);
    var completion = yield openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [{
        role: 'system',
        content: system
      }, {
        role: 'user',
        content: user
      }],
      temperature: 0.2
    });
    return (((_completion$choices = completion.choices) === null || _completion$choices === void 0 || (_completion$choices = _completion$choices[0]) === null || _completion$choices === void 0 || (_completion$choices = _completion$choices.message) === null || _completion$choices === void 0 ? void 0 : _completion$choices.content) || '').trim();
  });
  return _translateWithOpenAI.apply(this, arguments);
}
function translateWithDeepL(_x4, _x5, _x6) {
  return _translateWithDeepL.apply(this, arguments);
}
function _translateWithDeepL() {
  _translateWithDeepL = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (text, to, from) {
    var _data$translations;
    var key = process.env.DEEPL_API_KEY;
    if (!key) throw new Error('DeepL not configured');
    var params = new URLSearchParams();
    params.append('text', text);
    params.append('target_lang', to.toUpperCase());
    if (from) params.append('source_lang', from.toUpperCase());
    var res = yield fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': "DeepL-Auth-Key ".concat(key),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });
    var data = yield res.json();
    if (!res.ok) throw new Error((data === null || data === void 0 ? void 0 : data.message) || 'DeepL error');
    return (data === null || data === void 0 || (_data$translations = data.translations) === null || _data$translations === void 0 || (_data$translations = _data$translations[0]) === null || _data$translations === void 0 ? void 0 : _data$translations.text) || '';
  });
  return _translateWithDeepL.apply(this, arguments);
}
function translateText(_x7, _x8, _x9) {
  return _translateText.apply(this, arguments);
}
function _translateText() {
  _translateText = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (text, to, from) {
    if (!text) return text;
    try {
      if (provider === 'openai') return yield translateWithOpenAI(text, to, from);
      if (provider === 'deepl') return yield translateWithDeepL(text, to, from);
      return text;
    } catch (_unused) {
      return text;
    }
  });
  return _translateText.apply(this, arguments);
}
function detectLanguageSimple(text) {
  // Very simple heuristic; in production use a language detection library or model
  // Default to 'en'
  return 'en';
}

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 979293:
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
/* harmony import */ var private_next_pages_api_talent_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16148);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_talent_index_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_talent_index_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/talent",
        pathname: "/api/talent",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_talent_index_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/talent";
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
                page: "/api/talent",
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(979293)));
module.exports = __webpack_exports__;

})();