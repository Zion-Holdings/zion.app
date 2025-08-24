"use strict";
(() => {
var exports = {};
exports.id = 279129;
exports.ids = [279129];
exports.modules = {

/***/ 172933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(405206);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(629021);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(333873);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(294519);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);






// Lazy import to avoid serverless cold start cost unless needed
function summarizeAndTag(_x) {
  return _summarizeAndTag.apply(this, arguments);
}
function _summarizeAndTag() {
  _summarizeAndTag = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (input) {
    var openaiApiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION || '';
    var combinedText = [input.professionalTitle, input.bio, input.projects || '', input.skills, input.tools || ''].join('\n');
    var basicTags = Array.from(new Set((input.skills + ',' + (input.tools || '')).split(/[,\n]/).map(s => s.trim()).filter(Boolean).map(s => s.toLowerCase())));
    if (!openaiApiKey) {
      var summary = "".concat(input.fullName, " \u2014 ").concat(input.professionalTitle, ". ").concat(input.bio.slice(0, 240)).concat(input.bio.length > 240 ? '…' : '');
      return {
        summary,
        tags: basicTags.slice(0, 24)
      };
    }
    try {
      var _response$choices;
      var {
        OpenAI
      } = yield __webpack_require__.e(/* import() */ 618096).then(__webpack_require__.t.bind(__webpack_require__, 783045, 23));
      var client = new OpenAI({
        apiKey: openaiApiKey
      });
      var prompt = "Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n".concat(combinedText);
      var response = yield client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{
          role: 'system',
          content: 'You are an expert technical recruiter.'
        }, {
          role: 'user',
          content: prompt
        }],
        temperature: 0.4
      });
      var content = ((_response$choices = response.choices) === null || _response$choices === void 0 || (_response$choices = _response$choices[0]) === null || _response$choices === void 0 || (_response$choices = _response$choices.message) === null || _response$choices === void 0 ? void 0 : _response$choices.content) || '';
      try {
        var parsed = JSON.parse(content);
        if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
          return {
            summary: parsed.summary,
            tags: parsed.tags.slice(0, 24)
          };
        }
      } catch (_) {
        // fall through to heuristic
      }
    } catch (err) {
      // ignore and fallback
    }
    var fallbackSummary = "".concat(input.fullName, " \u2014 ").concat(input.professionalTitle, ". ").concat(input.bio.slice(0, 240)).concat(input.bio.length > 240 ? '…' : '');
    return {
      summary: fallbackSummary,
      tags: basicTags.slice(0, 24)
    };
  });
  return _summarizeAndTag.apply(this, arguments);
}
function handler(_x2, _x3) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({
        error: 'Method not allowed'
      });
    }
    try {
      var id = (0,crypto__WEBPACK_IMPORTED_MODULE_2__.randomUUID)();
      var {
        fullName,
        professionalTitle,
        profilePicture,
        bio,
        projects,
        yearsOfExperience,
        skills,
        tools,
        availability,
        timezone,
        hourlyRate,
        portfolioLinks,
        cvFile
      } = req.body || {};
      if (!fullName || !professionalTitle || !bio || !yearsOfExperience || !skills || !availability || !timezone) {
        return res.status(400).json({
          error: 'Missing required fields'
        });
      }
      var uploadsDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'public', 'uploads');
      var dataDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'talent-submissions');
      yield fs_extra__WEBPACK_IMPORTED_MODULE_4___default().ensureDir(uploadsDir);
      yield fs_extra__WEBPACK_IMPORTED_MODULE_4___default().ensureDir(dataDir);
      var savedProfileImagePath = null;
      if (profilePicture !== null && profilePicture !== void 0 && profilePicture.base64 && profilePicture !== null && profilePicture !== void 0 && profilePicture.name) {
        var ext = path__WEBPACK_IMPORTED_MODULE_1___default().extname(profilePicture.name) || '.png';
        var filename = "".concat(id, "-profile").concat(ext);
        var filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(uploadsDir, filename);
        var base64Data = profilePicture.base64.split(',')[1];
        if (base64Data) {
          yield fs_extra__WEBPACK_IMPORTED_MODULE_4___default().writeFile(filePath, Buffer.from(base64Data, 'base64'));
          savedProfileImagePath = "/uploads/".concat(filename);
        }
      }
      var savedCvPath = null;
      if (cvFile !== null && cvFile !== void 0 && cvFile.base64 && cvFile !== null && cvFile !== void 0 && cvFile.name) {
        var _ext = path__WEBPACK_IMPORTED_MODULE_1___default().extname(cvFile.name) || '.pdf';
        var _filename = "".concat(id, "-cv").concat(_ext);
        var _filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(uploadsDir, _filename);
        var _base64Data = cvFile.base64.split(',')[1];
        if (_base64Data) {
          yield fs_extra__WEBPACK_IMPORTED_MODULE_4___default().writeFile(_filePath, Buffer.from(_base64Data, 'base64'));
          savedCvPath = "/uploads/".concat(_filename);
        }
      }
      var {
        summary,
        tags
      } = yield summarizeAndTag({
        fullName,
        professionalTitle,
        bio,
        projects,
        skills,
        tools
      });
      var record = {
        id,
        createdAt: new Date().toISOString(),
        fullName,
        professionalTitle,
        bio,
        projects,
        yearsOfExperience: Number(yearsOfExperience) || 0,
        skills,
        tools,
        availability,
        timezone,
        hourlyRate: hourlyRate ? Number(hourlyRate) : null,
        portfolioLinks,
        assets: {
          profileImage: savedProfileImagePath,
          cv: savedCvPath
        },
        ai: {
          summary,
          tags
        }
      };
      var perRecordPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(dataDir, "".concat(id, ".json"));
      yield fs_extra__WEBPACK_IMPORTED_MODULE_4___default().writeJSON(perRecordPath, record, {
        spaces: 2
      });
      var aggregatePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'talent-submissions.json');
      var aggregate = [];
      if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(aggregatePath)) {
        try {
          var content = yield fs_extra__WEBPACK_IMPORTED_MODULE_4___default().readJSON(aggregatePath);
          if (Array.isArray(content)) aggregate = content;
        } catch (_) {
          // ignore
        }
      }
      aggregate.push(record);
      yield fs_extra__WEBPACK_IMPORTED_MODULE_4___default().writeJSON(aggregatePath, aggregate, {
        spaces: 2
      });

      // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup)
      // For now, just return success with AI data

      return res.status(200).json({
        ok: true,
        id,
        summary,
        tags
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  });
  return _handler.apply(this, arguments);
}

/***/ }),

/***/ 328354:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 513976:
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
/* harmony import */ var private_next_pages_api_talent_onboard_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172933);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_talent_onboard_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_talent_onboard_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/talent/onboard",
        pathname: "/api/talent/onboard",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_talent_onboard_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/talent/onboard";
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
                page: "/api/talent/onboard",
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

/***/ 629021:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 781115:
/***/ ((module) => {

module.exports = require("constants");

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(513976)));
module.exports = __webpack_exports__;

})();