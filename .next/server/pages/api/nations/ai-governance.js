"use strict";
(() => {
var exports = {};
exports.id = 237331;
exports.ids = [237331];
exports.modules = {

/***/ 765968:
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
/* harmony import */ var private_next_pages_api_nations_ai_governance_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(987591);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_5__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_nations_ai_governance_ts__WEBPACK_IMPORTED_MODULE_6__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_nations_ai_governance_ts__WEBPACK_IMPORTED_MODULE_6__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/nations/ai-governance",
        pathname: "/api/nations/ai-governance",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_nations_ai_governance_ts__WEBPACK_IMPORTED_MODULE_6__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/nations/ai-governance";
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
                page: "/api/nations/ai-governance",
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

/***/ }),

/***/ 987591:
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
    if (req.method !== 'POST') return res.status(405).json({
      error: 'Method not allowed'
    });
    var {
      name,
      governanceStyle,
      fundingModel
    } = req.body || {};
    var apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    var basePrompt = "Draft a concise constitution (200-300 words) and a governance outline for a micro-DAO called \"".concat(name || 'New Nation', "\".\n- Governance style: ").concat(governanceStyle || 'admin/token_weighted/delegate', "\n- Funding model: ").concat(fundingModel || 'ZION$ treasury', "\nInclude: mission, rights, decision-making process, transparency, treasury oversight, and a delegate framework if relevant.");
    if (!apiKey) {
      return res.status(200).json({
        constitutionDraft: "Preamble: We, the citizens of ".concat(name || 'New Nation', ", unite to advance shared prosperity, creativity, and mutual aid.\n\nMission: Our mission is to coordinate talent and resources to deliver value to citizens and clients under fair, transparent, and resilient rules.\n\nRights & Duties: Every citizen holds the right to voice, due process, and data dignity; and the duty to contribute, uphold integrity, and steward the commons.\n\nGovernance: Decisions are made under the ").concat(governanceStyle || 'admin', " model, with clear escalation paths, recorded votes, and periodic review. Treasury operations follow the ").concat(fundingModel || 'ZION$ treasury', " model, with multi-party visibility and quarterly reporting.\n\nAmendments: This constitution may be amended by supermajority vote or delegate consensus, preserving core rights and financial solvency."),
        structureSuggestion: {
          governance: governanceStyle || 'admin',
          delegates: governanceStyle === 'delegate' ? [{
            scope: 'Treasury',
            selection: 'elected quarterly',
            powers: ['budgeting', 'grants']
          }, {
            scope: 'Compliance',
            selection: 'appointed',
            powers: ['policy review', 'risk']
          }, {
            scope: 'Delivery',
            selection: 'elected by talent',
            powers: ['roadmap', 'quality']
          }] : [],
          voting: governanceStyle === 'token_weighted' ? {
            method: 'token-weighted',
            quorum: 0.2
          } : {
            method: 'one-citizen-one-vote',
            quorum: 0.33
          }
        }
      });
    }
    try {
      var _completion$choices;
      var {
        OpenAI
      } = yield __webpack_require__.e(/* import() */ 618096).then(__webpack_require__.t.bind(__webpack_require__, 783045, 23));
      var client = new OpenAI({
        apiKey
      });
      var completion = yield client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{
          role: 'system',
          content: 'You are an expert in DAO governance and constitutional design.'
        }, {
          role: 'user',
          content: basePrompt
        }],
        temperature: 0.6
      });
      var content = ((_completion$choices = completion.choices) === null || _completion$choices === void 0 || (_completion$choices = _completion$choices[0]) === null || _completion$choices === void 0 || (_completion$choices = _completion$choices.message) === null || _completion$choices === void 0 ? void 0 : _completion$choices.content) || '';
      return res.status(200).json({
        constitutionDraft: content,
        structureSuggestion: {
          governance: governanceStyle || 'admin',
          delegates: governanceStyle === 'delegate' ? [{
            scope: 'Treasury',
            selection: 'elected quarterly',
            powers: ['budgeting', 'grants']
          }, {
            scope: 'Compliance',
            selection: 'appointed',
            powers: ['policy review', 'risk']
          }, {
            scope: 'Delivery',
            selection: 'elected by talent',
            powers: ['roadmap', 'quality']
          }] : [],
          voting: governanceStyle === 'token_weighted' ? {
            method: 'token-weighted',
            quorum: 0.2
          } : {
            method: 'one-citizen-one-vote',
            quorum: 0.33
          }
        }
      });
    } catch (error) {
      return res.status(200).json({
        constitutionDraft: "Preamble: We, the citizens of ".concat(name || 'New Nation', ", unite to advance shared prosperity..."),
        structureSuggestion: {
          governance: governanceStyle || 'admin',
          delegates: [],
          voting: {
            method: 'one-citizen-one-vote',
            quorum: 0.33
          }
        },
        note: 'Returned fallback due to AI error',
        error: (error === null || error === void 0 ? void 0 : error.message) || 'AI generation failed'
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(765968)));
module.exports = __webpack_exports__;

})();