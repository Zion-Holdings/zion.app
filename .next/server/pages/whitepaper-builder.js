"use strict";
(() => {
var exports = {};
exports.id = 515273;
exports.ids = [515273,890636];
exports.modules = {

/***/ 238115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhitepaperBuilderPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_whitepaper_zionWhitepaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(295248);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function WhitepaperBuilderPage() {
  var [edition, setEdition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('full');
  var sections = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_whitepaper_zionWhitepaper__WEBPACK_IMPORTED_MODULE_3__.getWhitepaperSections)(edition), [edition]);
  var downloadHref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (edition === 'full') return '/docs/zion-protocol.pdf';
    return "/api/zion-whitepaper-pdf?edition=".concat(edition);
  }, [edition]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "text-3xl font-bold",
        children: "Zion Protocol Whitepaper"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-gray-600 dark:text-gray-300",
        children: "Investor and Developer editions. Toggle, review, and download as PDF."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-wrap gap-3 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "font-medium",
        children: "Edition"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
        value: edition,
        onChange: e => setEdition(e.target.value),
        className: "border rounded px-3 py-2 bg-white dark:bg-black",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "full",
          children: "Full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "investor",
          children: "Investor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "developer",
          children: "Developer"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: downloadHref,
        legacyBehavior: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          className: "ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90",
          children: "Download PDF"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "rounded border p-4 bg-gray-50 dark:bg-gray-900",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "text-xl font-semibold mb-2",
        children: "Operator Prompt"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre", {
        className: "whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200",
        children: _utils_whitepaper_zionWhitepaper__WEBPACK_IMPORTED_MODULE_3__.OPERATOR_PROMPT
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "space-y-10",
      children: sections.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-bold",
          children: s.title
        }), s.subtitle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-gray-500",
          children: s.subtitle
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("article", {
          className: "prose dark:prose-invert max-w-none whitespace-pre-wrap",
          children: s.contentMd
        })]
      }, s.id))
    })]
  });
}

/***/ }),

/***/ 295248:
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

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 479971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   handler: () => (/* binding */ handler),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(863885);
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880237);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781413);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833932);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805164);
/* harmony import */ var private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(238115);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/whitepaper-builder",
        pathname: "/whitepaper-builder",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    distDir: ".next" || 0,
    relativeProjectDir:  false || '',
    components: {
        // default export might not exist when optimized for data only
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/whitepaper-builder",
    config,
    userland: private_next_pages_whitepaper_builder_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(479971)));
module.exports = __webpack_exports__;

})();