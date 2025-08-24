"use strict";
(() => {
var exports = {};
exports.id = 758142;
exports.ids = [758142];
exports.modules = {

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 182570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OPERATOR_PROMPT: () => (/* binding */ OPERATOR_PROMPT),
/* harmony export */   getWhitepaperSections: () => (/* binding */ getWhitepaperSections)
/* harmony export */ });
var OPERATOR_PROMPT = "\nYou are Zion's Operator Agent. Auto-generate and maintain the Zion Protocol Whitepaper.\nKeep editions in sync:\n- Investor Edition: concise narrative, market sizing, business model, token economics and governance summary.\n- Developer Edition: detailed architecture, modules, interfaces, contracts, AI stack, data schemas, and security model.\n- Full: merge both with complete appendices.\nUpdate quarterly, snap to the roadmap cadence (v1\u2013v10). Ensure region policy tables and DAO parameters reflect on-chain config.\n";
var executiveSummary = "\nZion is an AI-native, talent-first economic protocol that coordinates work, capital, and reputation across a multiverse of sovereign deployments. It fuses AI agents, verifiable talent passports, and programmable markets to create a global operating system for trusted collaboration.\n\nWhy now: coordination costs are breaking institutions. AI expands capability but compresses trust. Zion aligns AI, talent, and value with on-chain transparency, minimax attack-surface governance, and credibly neutral settlements.\n\nAmbition: AI + Talent + Trust. Zion turns skills into programmable assets, converts contributions into composable on-chain claims, and routes demand to the best available agents\u2014human or AI\u2014under enforceable rules.\n";
var architectureInvestor = "\n- Zion OS Modules: Marketplace, AI, Token, DAO, Academy\n- Multiverse: region-anchored deployments with shared standards and local policy levers\n- ZionGPT Core: decentralized prompt/inference mesh with fallback to external APIs\n";
var architectureDeveloper = "\nZion OS Module Map\n- Marketplace: Orders, Bounties, Escrow, Dispute, Review\n- AI: Prompt registry, Model adapters, Fine-tune loop, Safety rails, Policy filters\n- Token: Treasury, Rewards, Fees, Staking, Emissions controller\n- DAO: Proposals (ZGP), Voting, Timelock, Emergency council (optional), Region quorums\n- Academy: Curriculum, Credential issuance, Talent Passport minting\n\nMultiverse Deployments\n- Global standard: interfaces, schemas, ZGP process\n- Local instances: configurable fee splits, quorum thresholds, KYC/credential policy, currency bridges\n- Cross-instance settlement: IBC-like bridge with optimistic verification and challenge window\n\nDecentralized GPT Layer (ZionGPT Core)\n- Prompt DAGs with deterministic transforms and safety classifiers\n- Model routing: on-platform inference (open models) with API fallback\n- Attestations: prompt hash + output hash + evaluator scores recorded on-chain/off-chain store\n";
var tokenomics = "\nZION$ Roles\n- Rewards: task completion, model contributions, governance participation\n- Fees: marketplace fees, listing, dispute, premium inference\n- Staking: reputation-weighted staking for providers, curators, evaluators\n\nDistribution Model (illustrative)\n- Community: 40%\n- Grants & Ecosystem: 20%\n- Treasury (DAO): 20%\n- Founders & Team (4y vest, 1y cliff): 15%\n- Strategic Partners/Market Makers (2y vest): 5%\n\nMonetary Policy\n- Emissions: decaying schedule with activity-based boosts tied to verified contribution\n- Deflation: periodic buyback-and-burn from protocol fees; slash on bad behavior\n- Inflation guards: governance bounded within preset bands, emergency pause\n\nGovernance Weighting\n- Baseline: 1 ZION$ = 1 vote (liquid governance)\n- Optional quadratic cap for community proposals\n- Reputation overlays: Talent Passport tiers gate proposer rights and committee seats\n";
var governance = "\nProposal Types (ZGPs)\n- Parameter change (fees, quorums, staking ratios)\n- Treasury spend (grants, liquidity programs)\n- Module upgrade (Marketplace, AI, Token, DAO, Academy)\n- Region policy (KYC rules, credential standards, language packs)\n- Emergency action (pause, kill-switch scope-limited)\n\nProcess\n1. Draft (forum, 7 days)\n2. Temperature check (off-chain snapshot, 3 days)\n3. On-chain vote (7\u201314 days) with region-based quorum\n4. Timelock (48\u201372h) and execution\n\nDAO Mechanics\n- Token house, Builder council (passport \u2265 Tier 2), Reviewer committee (slashing authority for fraud)\n- Emergency council (optional, 3-of-5 multisig) limited to pause/rollback within 72h\n\nRegion-based Quorum\n- Global quorum: 8\u201312% of circulating ZION$\n- Regional floor: each active region \u2265 2% participation or auto-extends voting\n";
var aiStack = "\nPrompt Infrastructure\n- Versioned prompt registry with typed variables, safety tags, and policy gates\n- Prompt graphs: composable nodes for retrieval, tools, evaluators\n\nFine-tuning Loop\n- Data: opted-in task transcripts, evaluator rubrics, red-team corpora\n- Training: reproducible seeds, weight diff attestations, eval suite before promotion\n- Incentives: ZION$ rewards for data providers, evaluators, and model maintainers\n\nInference\n- On-platform: containerized open models (e.g., Llama, Mistral) with GPU pools\n- Fallback: vendor APIs with cryptographic metering, output attestation, and spend caps\n";
var useCases = "\n- Freelance Work: escrowed bounties, staged milestones, AI co-pilot, dispute resolution\n- Incubator: rolling grants, KPI options, revenue-share templates\n- GovTech: procurement bounties, document processing agents, verifiable audit trails\n- Talent Passports: credential graph (skills, reputation, KYC), privacy-preserving proofs\n";
var roadmap = "\nZion v1\u2013v10 (indicative)\n- v1: Core Marketplace, basic ZION$, passport minting, snapshot governance\n- v2: Staking, dispute module, evaluator marketplace\n- v3: ZionGPT Core v1, prompt registry, API fallback\n- v4: Region deployments alpha, fee splits, policy packs\n- v5: Cross-instance bridge (optimistic), buyback-and-burn\n- v6: Academy v1, credential standards, partner integrators\n- v7: Advanced staking (slashing), quadratic overlays, emergency council opt-in\n- v8: On-platform training v1, contributor rewards, eval suite\n- v9: Sovereign infra tooling, air-gapped governance options\n- v10: Full multiverse federation, public data commons\n\nExpansion\n- Regions: LATAM, MENA, EU, APAC\n- Integrations: wallets, identity (OIDC/VC), payments, procurement APIs\n- Sovereign Deployment: reproducible stacks for state/enterprise enclaves\n";
function mdSection(id, title, content, subtitle) {
  return {
    id,
    title,
    subtitle,
    contentMd: content.trim()
  };
}
function getWhitepaperSections(edition) {
  var common = [mdSection('exec', 'Executive Summary', executiveSummary), mdSection('architecture', 'System Architecture', "".concat(architectureInvestor, "\n\n").concat(architectureDeveloper)), mdSection('tokenomics', 'Tokenomics', tokenomics), mdSection('governance', 'Governance', governance), mdSection('ai', 'AI Stack', aiStack), mdSection('use-cases', 'Use Cases', useCases), mdSection('roadmap', 'Roadmap', roadmap)];
  if (edition === 'investor') {
    return [mdSection('exec', 'Executive Summary', executiveSummary), mdSection('architecture', 'System Architecture (Investor)', architectureInvestor), mdSection('tokenomics', 'Tokenomics', tokenomics), mdSection('governance', 'Governance', governance), mdSection('use-cases', 'Use Cases', useCases), mdSection('roadmap', 'Roadmap', roadmap)];
  }
  if (edition === 'developer') {
    return [mdSection('exec', 'Executive Summary', executiveSummary), mdSection('architecture', 'System Architecture (Developer)', architectureDeveloper), mdSection('ai', 'AI Stack', aiStack), mdSection('governance', 'Governance', governance), mdSection('tokenomics', 'Tokenomics', tokenomics), mdSection('roadmap', 'Roadmap', roadmap)];
  }
  return common;
}

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 514586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405206);
/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394871);
/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_whitepaper_zionWhitepaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(182570);



function writeSection(doc, title, content) {
  doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, {
    underline: true
  });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
    align: 'left'
  });
}
function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (req, res) {
    var editionParam = req.query.edition || 'full';
    var edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', "attachment; filename=\"zion-protocol-".concat(edition, ".pdf\""));
    var doc = new (pdfkit__WEBPACK_IMPORTED_MODULE_0___default())({
      autoFirstPage: false
    });
    doc.info.Title = "Zion Protocol Whitepaper (".concat(edition, ")");
    doc.info.Author = 'Zion Protocol';
    doc.pipe(res);

    // Cover page
    doc.addPage();
    doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', {
      align: 'left'
    });
    doc.moveDown();
    doc.fontSize(14).fillColor('#444444').text("Edition: ".concat(edition.toUpperCase()));
    doc.moveDown();
    doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
    doc.moveDown(0.5);
    doc.fontSize(9).fillColor('#666666').text(_utils_whitepaper_zionWhitepaper__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_PROMPT, {
      width: 480
    });
    var sections = (0,_utils_whitepaper_zionWhitepaper__WEBPACK_IMPORTED_MODULE_2__.getWhitepaperSections)(edition);
    sections.forEach(s => writeSection(doc, s.title, s.contentMd));

    // End
    doc.addPage();
    doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
    doc.end();
  });
  return _handler.apply(this, arguments);
}

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

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 944402:
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
/* harmony import */ var private_next_pages_api_zion_whitepaper_pdf_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(514586);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_zion_whitepaper_pdf_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_zion_whitepaper_pdf_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/zion-whitepaper-pdf",
        pathname: "/api/zion-whitepaper-pdf",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_zion_whitepaper_pdf_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/zion-whitepaper-pdf";
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
                page: "/api/zion-whitepaper-pdf",
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(944402)));
module.exports = __webpack_exports__;

})();