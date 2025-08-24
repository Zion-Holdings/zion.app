"use strict";
(() => {
var exports = {};
exports.id = 311495;
exports.ids = [311495];
exports.modules = {

/***/ 79264:
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
/* harmony import */ var private_next_pages_api_nations_slug_milestones_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(319359);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_nations_slug_milestones_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_nations_slug_milestones_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/nations/[slug]/milestones",
        pathname: "/api/nations/[slug]/milestones",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_nations_slug_milestones_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/nations/[slug]/milestones";
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
                page: "/api/nations/[slug]/milestones",
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

/***/ 104313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMember: () => (/* binding */ addMember),
/* harmony export */   addMilestone: () => (/* binding */ addMilestone),
/* harmony export */   addProposal: () => (/* binding */ addProposal),
/* harmony export */   createNation: () => (/* binding */ createNation),
/* harmony export */   getNationBySlug: () => (/* binding */ getNationBySlug),
/* harmony export */   loadAllNations: () => (/* binding */ loadAllNations),
/* harmony export */   saveAllNations: () => (/* binding */ saveAllNations),
/* harmony export */   slugify: () => (/* binding */ slugify),
/* harmony export */   updateNation: () => (/* binding */ updateNation),
/* harmony export */   voteOnProposal: () => (/* binding */ voteOnProposal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435326);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(629021);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333873);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


var DATA_DIR = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'data');
var NATIONS_FILE = path__WEBPACK_IMPORTED_MODULE_2___default().join(DATA_DIR, 'nations.json');
function ensureDataFileExists() {
  if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(DATA_DIR)) {
    fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(DATA_DIR, {
      recursive: true
    });
  }
  if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(NATIONS_FILE)) {
    fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(NATIONS_FILE, JSON.stringify([], null, 2));
  }
}
function loadAllNations() {
  ensureDataFileExists();
  var raw = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(NATIONS_FILE, 'utf8');
  try {
    var parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_unused) {
    return [];
  }
}
function saveAllNations(nations) {
  ensureDataFileExists();
  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(NATIONS_FILE, JSON.stringify(nations, null, 2));
}
function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
}
function generateId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
function createNation(params) {
  var nations = loadAllNations();
  var slugBase = slugify(params.name);
  var slug = slugBase;
  var i = 1;
  while (nations.some(n => n.slug === slug)) {
    slug = "".concat(slugBase, "-").concat(i++);
  }
  var now = new Date().toISOString();
  var nation = {
    id: generateId(),
    slug,
    name: params.name,
    flagDataUrl: params.flagDataUrl,
    constitution: params.constitution,
    governanceStyle: params.governanceStyle,
    fundingModel: params.fundingModel,
    currency: params.currency || 'ZION$',
    createdAt: now,
    updatedAt: now,
    members: [],
    milestones: [],
    proposals: []
  };
  nations.push(nation);
  saveAllNations(nations);
  return nation;
}
function getNationBySlug(slug) {
  var nations = loadAllNations();
  return nations.find(n => n.slug === slug);
}
function updateNation(slug, update) {
  var nations = loadAllNations();
  var index = nations.findIndex(n => n.slug === slug);
  if (index === -1) return undefined;
  var updated = _objectSpread(_objectSpread(_objectSpread({}, nations[index]), update), {}, {
    updatedAt: new Date().toISOString()
  });
  nations[index] = updated;
  saveAllNations(nations);
  return updated;
}
function addMember(slug, member) {
  var nation = getNationBySlug(slug);
  if (!nation) return undefined;
  nation.members.push(_objectSpread(_objectSpread({}, member), {}, {
    joinedAt: new Date().toISOString()
  }));
  return updateNation(slug, {
    members: nation.members
  });
}
function addMilestone(slug, milestone) {
  var nation = getNationBySlug(slug);
  if (!nation) return undefined;
  var newMilestone = {
    id: generateId(),
    title: milestone.title,
    description: milestone.description,
    targetDate: milestone.targetDate,
    status: milestone.status || 'planned'
  };
  nation.milestones.push(newMilestone);
  return updateNation(slug, {
    milestones: nation.milestones
  });
}
function addProposal(slug, proposal) {
  var nation = getNationBySlug(slug);
  if (!nation) return undefined;
  var newProposal = {
    id: generateId(),
    title: proposal.title,
    description: proposal.description,
    status: proposal.status || 'draft',
    votesFor: 0,
    votesAgainst: 0,
    createdAt: new Date().toISOString()
  };
  nation.proposals.push(newProposal);
  return updateNation(slug, {
    proposals: nation.proposals
  });
}
function voteOnProposal(slug, proposalId, vote) {
  var nation = getNationBySlug(slug);
  if (!nation) return undefined;
  nation.proposals = nation.proposals.map(p => {
    if (p.id !== proposalId) return p;
    return _objectSpread(_objectSpread({}, p), {}, {
      votesFor: p.votesFor + (vote === 'for' ? 1 : 0),
      votesAgainst: p.votesAgainst + (vote === 'against' ? 1 : 0)
    });
  });
  return updateNation(slug, {
    proposals: nation.proposals
  });
}

/***/ }),

/***/ 319359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_nations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104313);

function handler(req, res) {
  var {
    slug
  } = req.query;
  if (req.method !== 'POST') return res.status(405).json({
    error: 'Method not allowed'
  });
  var {
    title,
    description,
    targetDate,
    status
  } = req.body || {};
  if (!slug || !title) return res.status(400).json({
    error: 'Missing required fields'
  });
  var nation = (0,_lib_nations__WEBPACK_IMPORTED_MODULE_0__.addMilestone)(slug, {
    title,
    description,
    targetDate,
    status
  });
  if (!nation) return res.status(404).json({
    error: 'Nation not found'
  });
  return res.status(200).json({
    nation
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 629021:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(79264)));
module.exports = __webpack_exports__;

})();