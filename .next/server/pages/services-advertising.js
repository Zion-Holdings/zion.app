"use strict";
(() => {
var exports = {};
exports.id = 638009;
exports.ids = [638009,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 758371:
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
/* harmony import */ var private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(812427);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/services-advertising",
        pathname: "/services-advertising",
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
    userland: private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/services-advertising",
    config,
    userland: private_next_pages_services_advertising_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 812427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServicesAdvertisingPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var ext = url => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
  className: "text-cyan-400 underline",
  href: "/out?u=".concat(encodeURIComponent(url)),
  target: "_blank",
  rel: "nofollow noopener noreferrer",
  children: url.replace('https://', '')
});
function ServicesAdvertisingPage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "Services Advertising | Zion Tech Group",
      description: "Features, benefits, and market references for Zion Tech Group services",
      url: "https://ziontechgroup.com/services-advertising/"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "max-w-6xl mx-auto space-y-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
        children: "Services Advertising"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Social Media Manager"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Generate, schedule, and optimize multi-platform posts with best-time recommendations and analytics."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$80/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://buffer.com/pricing'), ", ", ext('https://www.hootsuite.com/plans')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/ai-social-media-manager",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/ai-social-media-manager"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Resume & Cover Letter Builder"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "ATS-optimized resumes and tailored cover letters with role-aware keywording and metric suggestions."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical budget: $8\u2013$25/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.rezi.ai/pricing'), ", ", ext('https://resume.io/pricing')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/ai-resume-cover-letter-builder",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/ai-resume-cover-letter-builder"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Document Summarizer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Concise summaries with citations for PDFs, docs, and URLs with export options."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical budget: $10\u2013$30/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://openai.com/api/pricing'), ", ", ext('https://www.pinecone.io/pricing/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/ai-document-summarizer",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/ai-document-summarizer"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Subscription Manager Hub"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Track subscriptions, detect renewals from receipts, and get savings recommendations."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical budget: $5\u2013$15/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.rocketmoney.com/pricing')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/subscription-manager-hub",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/subscription-manager-hub"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Browser Automation Cloud"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Scale Playwright/Puppeteer jobs with proxy pools, recorder-to-code and webhooks."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical budget: $40\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://apify.com/pricing'), ", ", ext('https://www.browserless.io/pricing')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/browser-automation-cloud",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/browser-automation-cloud"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Performance Testing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Load, latency and regression testing with CI gates and dashboards."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical budget: $30\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://k6.io/pricing'), ", ", ext('https://jmeter.apache.org/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/api-performance-testing",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/api-performance-testing"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Email Deliverability Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "DMARC/SPF/DKIM health, blocklists, and inbox placement with alerts."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical budget: $15\u2013$60/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://dmarc.org/overview/'), ", ", ext('https://postmarkapp.com/support/category/dmarc')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/email-deliverability-monitor",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/email-deliverability-monitor"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Podcast Transcription & Insights"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Transcripts, chapters, show notes, and SEO-ready blog pages."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical budget: $10\u2013$60/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://openai.com/api/pricing'), ", ", ext('https://www.descript.com/pricing')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Try: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "/services/podcast-transcription-insights",
              className: "text-cyan-400 underline",
              children: "ziontechgroup.com/services/podcast-transcription-insights"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-evaluation-orchestrator",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Evaluation Orchestrator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$400/mo + API usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://openai.com/pricing'), ", ", ext('https://www.anthropic.com/pricing'), ", ", ext('https://openrouter.ai/models')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Vector Search Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$1,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.pinecone.io/pricing/'), ", ", ext('https://console.weaviate.cloud/pricing'), ", ", ext('https://www.elastic.co/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "managed-postgres-ha",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Managed Postgres HA"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "SRE-backed high availability Postgres with PITR backups, failover, and tuning."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $1,200\u2013$5,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://cloud.google.com/sql/pricing'), ", ", ext('https://aws.amazon.com/rds/postgresql/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Guardrails & Safety"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $0\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://platform.openai.com/docs/guides/safety-best-practices'), ", ", ext('https://github.com/guardrails-ai/guardrails')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Identity & SSO/SCIM"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$1,500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://auth0.com/pricing'), ", ", ext('https://workos.com/pricing'), ", ", ext('https://www.okta.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Observability Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Distributed tracing, golden signals dashboards, opinionated SLOs and alerting. Go live in under 60 minutes."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$350/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.honeycomb.io/pricing/'), ", ", ext('https://www.datadoghq.com/pricing/'), ", ", ext('https://newrelic.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Security Scanner"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "OWASP API Top-10 scanning, auth fuzzing and CI gates with remediation diffs and auditor-ready evidence."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$600/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.stackhawk.com/pricing/'), ", ", ext('https://snyk.io/plans/'), ", ", ext('https://owasp.org/www-project-api-security/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Email Deliverability Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "DMARC/SPF/DKIM alignment, inbox placement and reputation tracking across providers with DNS change alerts."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $29\u2013$199/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://postmarkapp.com/features/deliverability'), ", ", ext('https://sendgrid.com/pricing/'), ", ", ext('https://dmarc.org/overview/'), ", ", ext('https://mxtoolbox.com/problem/dmarc/dmarc-record-not-found')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Cloud Cost Optimizer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Rightsizing, anomaly detection, savings plans coverage and waste cleanups with finance/engineering dashboards."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $199\u2013$1,000/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.cloudzero.com/pricing'), ", ", ext('https://www.kubecost.com/pricing'), ", ", ext('https://aws.amazon.com/savingsplans/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Incident Automation Suite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Runbooks, chatops, SLO-aware alerts and automated postmortems to reduce MTTR and toil."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $149\u2013$600/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.pagerduty.com/pricing/'), ", ", ext('https://www.firehydrant.com/pricing/'), ", ", ext('https://rootly.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "PDF Render API"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Reliable HTML/URL to PDF with templates, headers/footers, storage and webhooks."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $19\u2013$99/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://docraptor.com/pricing'), ", ", ext('https://www.pdfmonkey.io/en/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Latency SLO Tracker"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Define latency SLOs, watch error budgets and receive burn-rate alerts for reliable releases."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $39\u2013$149/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.nobl9.com/platform'), ", ", ext('https://www.datadoghq.com/blog/monitor-slo-error-budget/'), ", ", ext('https://lightstep.com/service-level-objectives')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Browser Performance Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "RUM for Core Web Vitals, user journeys, regressions and device/geography breakdowns."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $39\u2013$199/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://web.dev/vitals/'), ", ", ext('https://www.speedcurve.com/pricing/'), ", ", ext('https://calibreapp.com/pricing')]
          })]
        })]
      })]
    })]
  });
}

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(758371)));
module.exports = __webpack_exports__;

})();