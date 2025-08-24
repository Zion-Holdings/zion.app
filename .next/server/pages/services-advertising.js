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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Services Advertising | Zion Tech Group",
      description: "Features, benefits, and market references for Zion Tech Group services",
      url: "https://ziontechgroup.com/services-advertising/"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "max-w-6xl mx-auto space-y-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
        children: "Services Advertising"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-black/30 border border-gray-800",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "tel:+13024640950",
          className: "px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
          children: "Call +1 302 464 0950"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "mailto:kleber@ziontechgroup.com",
          className: "px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white",
          children: "Email kleber@ziontechgroup.com"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/pricing",
          className: "px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300",
          children: "View Pricing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "text-slate-400 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "block md:inline",
            children: "Address: 364 E Main St STE 1008 Middletown DE 19709"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "hidden md:inline mx-2",
            children: "\xB7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "https://ziontechgroup.com",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "ziontechgroup.com"
          })]
        })]
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-6 text-center",
          children: "Featured Offerings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: [{
            name: 'LLM Gateway & Cost Control',
            price: '$299/mo',
            href: '/llm-gateway'
          }, {
            name: 'API Observability Starter',
            price: '$149/mo',
            href: '/api-observability-starter'
          }, {
            name: 'Cloud Cost Optimizer',
            price: '$399/mo',
            href: '/cloud-cost-optimizer'
          }, {
            name: 'SOC 2 Evidence Automation',
            price: '$499/mo',
            href: '/soc2-evidence-automation'
          }, {
            name: 'Vector Search Starter',
            price: '$249/mo',
            href: '/vector-search-starter'
          }, {
            name: 'TLS Certificate Monitor',
            price: '$49/mo',
            href: '/tls-certificate-monitor'
          }, {
            name: 'Affiliate Marketing Tracking Suite',
            price: '$149/mo',
            href: '/services/affiliate-marketing-tracking-suite'
          }, {
            name: 'SMB Website Analytics Dashboard',
            price: '$29/mo',
            href: '/services/smb-website-analytics-dashboard'
          }, {
            name: 'Customer Support Helpdesk Pro',
            price: '$79/mo',
            href: '/services/customer-support-helpdesk-pro'
          }].map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: o.href,
            className: "block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-sm text-gray-400 mb-1",
              children: "From"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-2xl font-bold text-white",
              children: o.price
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-gray-200 mt-2",
              children: o.name
            })]
          }, o.name))
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-6 text-center",
          children: "Average Market Prices"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-6 rounded-2xl bg-black/40 border border-sky-500/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-3",
              children: "Affiliate & Partnerships"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "text-slate-300 space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Impact.com: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://impact.com/pricing/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "impact.com/pricing"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["PartnerStack: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://partnerstack.com/pricing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "partnerstack.com/pricing"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Refersion: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://www.refersion.com/pricing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "refersion.com/pricing"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-sm text-slate-400 mt-3",
              children: "Typical: $99\u2013$500/month + commissions."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-6 rounded-2xl bg-black/40 border border-emerald-500/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-3",
              children: "Website Analytics"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "text-slate-300 space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Plausible: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://plausible.io/pricing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "plausible.io/pricing"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Fathom: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://usefathom.com/pricing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "usefathom.com/pricing"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Simple Analytics: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://simpleanalytics.com/pricing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "simpleanalytics.com/pricing"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-sm text-slate-400 mt-3",
              children: "Typical: $9\u2013$59/month."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-6 rounded-2xl bg-black/40 border border-pink-500/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-3",
              children: "Helpdesk & Chat"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "text-slate-300 space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Zendesk: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://www.zendesk.com/pricing/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "zendesk.com/pricing"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Freshdesk: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://freshdesk.com/pricing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "freshdesk.com/pricing"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: ["Help Scout: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "text-cyan-400 underline",
                  href: "https://www.helpscout.com/pricing/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "helpscout.com/pricing"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-sm text-slate-400 mt-3",
              children: "Typical: $15\u2013$99/agent/month."
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-6 text-center",
          children: "Explore by Category"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex flex-wrap items-center justify-center gap-3",
          children: anchors.map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: a.href,
            className: "px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-gray-200",
            children: a.title
          }, a.title))
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
          children: "Customer Support & Helpdesk"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Ticketing, live chat, knowledge base, and AI assistants to reduce response times."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.atlassian.com/software/statuspage/pricing'), ", ", ext('https://www.checklyhq.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "TLS Certificate Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Expiry alerts, issuance auditing, and auto-renew guidance."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $5\u2013$50/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://letsencrypt.org/'), " , ", ext('https://www.ssllabs.com/ssltest/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Domain & DNS Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "WHOIS, nameserver, and DNS record drift detection with alerts."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $5\u2013$40/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.cloudflare.com/plans/'), ", ", ext('https://www.digicert.com/tools')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Affiliate Attribution & Payouts Hub"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Cross-device attribution with first-party identity stitching and automated payouts."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://stripe.com/pricing'), ", ", ext('https://pay.google.com/about/business/'), ", ", ext('https://partnerstack.com/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Security Scanner"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Continuously discover APIs and detect OWASP API Top 10 risks with CI gating."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$2,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.cloudflare.com/plans/'), ", ", ext('https://www.fastly.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Podcast Transcription & Insights"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Transcripts, chapters, show notes, and SEO-ready blog pages with exports."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $10\u2013$60/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://openai.com/api/pricing'), ", ", ext('https://www.descript.com/pricing'), ", ", ext('https://otter.ai/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Edge Feature Flags"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Audience and geo-targeted flags at the edge with gradual rollouts and fallbacks."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://vercel.com/pricing'), ", ", ext('https://www.cloudflare.com/plans/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Micro CRM for Local Business"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Contacts, deals, appointments, and reminders without enterprise complexity."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $15\u2013$60/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.hubspot.com/pricing/starter'), ", ", ext('https://www.zoho.com/crm/pricing.html')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Employee Scheduling Suite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Shift planning with availability, time-off, swap requests, and notifications."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$100/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://joinhomebase.com/pricing/'), ", ", ext('https://wheniwork.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "LMS Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Courses, quizzes, certificates, and progress tracking in days."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://teachable.com/pricing'), ", ", ext('https://www.thinkific.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "SMB Website Analytics"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Privacy-friendly dashboards with goals and funnels. Cookie-less."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $9\u2013$50/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://plausible.io/pricing'), ", ", ext('https://usefathom.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Automated Email Follow-ups"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Time and event sequences with A/B tests and performance analytics."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$100/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://mailshake.com/pricing'), ", ", ext('https://www.gmass.co/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Red Teaming Suite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Continuously stress-test LLM apps with curated jailbreak and prompt injection attack packs, automated safety regressions, and scorecards."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$500/mo + API usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/ai-red-teaming-suite",
              children: "/services/ai-red-teaming-suite"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://openai.com/safety, https://www.anthropic.com/news, https://www.promptfoo.dev/pricing"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Schema Diff & Registry"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Versioned OpenAPI registry with CI diffs, breaking-change detection, docs, and SDK hooks to ship safer APIs faster."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$100/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/api-schema-diff-registry",
              children: "/services/api-schema-diff-registry"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://swagger.io/tools/swaggerhub/pricing/, https://stoplight.io/pricing, https://www.openapis.org/"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "GitHub Secrets Scanner Plus"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "High-signal secret detectors with CI blocking, auto-rotation playbooks, and repository quarantine policies."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/github-secrets-scanner-plus",
              children: "/services/github-secrets-scanner-plus"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://docs.github.com/code-security/secret-scanning, https://github.com/features/security, https://github.com/trufflesecurity/trufflehog"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "GDPR DSAR Portal Lite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Branded DSAR portal with identity verification, workflows, templated redaction, and auditor-ready exports."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/gdpr-dsar-portal-lite",
              children: "/services/gdpr-dsar-portal-lite"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://www.osano.com/pricing, https://www.transcend.io/platform"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Kubernetes Cost Rightsizer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "SLO-aware CPU/memory rightsizing recommendations with manifest PRs and savings reports."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/k8s-cost-rightsizer",
              children: "/services/k8s-cost-rightsizer"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://www.kubecost.com/pricing, https://prometheus.io/"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "PII Redaction Proxy"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Lossless PII/PHI masking for logs, prompts, and events with low-latency SDKs and audit logs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/pii-redaction-proxy",
              children: "/services/pii-redaction-proxy"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://www.skyflow.com/pricing, https://www.verygoodsecurity.com/pricing"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Postgres Index Advisor Pro"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Query-aware index recommendations with safe rollout PRs and auto-rollback on regressions."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/postgres-index-advisor-pro",
              children: "/services/postgres-index-advisor-pro"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://pganalyze.com/pricing, https://www.postgresql.org/docs/current/auto-explain.html"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "S3 Lifecycle Optimizer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Analyze access patterns to apply storage class transitions (IA/Glacier) and retention policies automatically."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $5\u2013$100/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["Learn more: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/s3-lifecycle-optimizer",
              children: "/services/s3-lifecycle-optimizer"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "References: https://aws.amazon.com/s3/pricing/, https://aws.amazon.com/s3/storage-classes/"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "pt-4 text-slate-400 text-sm",
        children: ["See also: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          className: "text-cyan-400 underline",
          href: "/market-pricing",
          children: "Market Pricing"
        }), " for a broader list of benchmarks and links."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "latest-real-additions",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Latest Real Additions"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "Postgres Index Advisor Pro"
            }), " \u2014 $79/mo. Auto index insights, PR rollouts. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/postgres-index-advisor-pro",
              children: "/services/postgres-index-advisor-pro"
            }), ". Benchmarks: ", ext('https://www.postgresql.org/docs/current/auto-explain.html'), ', ', ext('https://pganalyze.com/blog')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "S3 Lifecycle Optimizer"
            }), " \u2014 $59/mo. Smart storage class moves. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/s3-lifecycle-optimizer",
              children: "/services/s3-lifecycle-optimizer"
            }), ". References: ", ext('https://aws.amazon.com/s3/pricing/'), ', ', ext('https://aws.amazon.com/s3/storage-classes/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "Synthetic Journey Monitor"
            }), " \u2014 $39/mo. Record/replay + SLO alerts. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/synthetic-journey-monitor",
              children: "/services/synthetic-journey-monitor"
            }), ". References: ", ext('https://playwright.dev'), ', ', ext('https://www.checklyhq.com/pricing/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "Feature Flag Auditor"
            }), " \u2014 $29/mo. Hygiene checks + PRs. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/feature-flag-auditor",
              children: "/services/feature-flag-auditor"
            }), ". References: ", ext('https://launchdarkly.com/pricing/'), ', ', ext('https://www.flagsmith.com/pricing')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "SOC 2 Evidence Collector"
            }), " \u2014 $99/mo. Continuous evidence bundles. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/soc2-evidence-collector",
              children: "/services/soc2-evidence-collector"
            }), ". References: ", ext('https://www.servicenow.com/trust/compliance-reports.html'), ', ', ext('https://www.aicpa.org/resources/certification/soc-2')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "IAM Permission Analyzer"
            }), " \u2014 $79/mo. Least privilege guidance. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/iam-permission-analyzer",
              children: "/services/iam-permission-analyzer"
            }), ". References: ", ext('https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html'), ', ', ext('https://cloud.google.com/iam/docs')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "GitOps Drift Auto-Remediator"
            }), " \u2014 $69/mo. Detect drift, open PRs. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/gitops-drift-auto-remediator",
              children: "/services/gitops-drift-auto-remediator"
            }), ". References: ", ext('https://www.openpolicyagent.org/'), ', ', ext('https://argo-cd.readthedocs.io/en/stable/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "AI Meeting\u2011to\u2011Ticket Copilot"
            }), " \u2014 $25/user/mo. Action items \u2192 Jira/GitHub. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/ai-meeting-to-ticket",
              children: "/services/ai-meeting-to-ticket"
            }), ". References: ", ext('https://workspace.google.com/pricing'), ', ', ext('https://www.atlassian.com/software/jira/pricing')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "Email Warmup & Reputation Monitor"
            }), " \u2014 $39/mo. Sender reputation & inbox tests. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/email-warmup-monitor",
              children: "/services/email-warmup-monitor"
            }), ". References: ", ext('https://postmaster.google.com'), ', ', ext('https://sendgrid.com/pricing/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "PII Discovery Scanner"
            }), " \u2014 $89/mo. Detect, redact, export evidence. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/pii-discovery-scanner",
              children: "/services/pii-discovery-scanner"
            }), ". References: ", ext('https://cloud.google.com/dlp/pricing'), ', ', ext('https://aws.amazon.com/macie/pricing/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "API Breaking Change Watcher"
            }), " \u2014 $49/mo. Schema diff + CI gates. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/api-breaking-change-watcher",
              children: "/services/api-breaking-change-watcher"
            }), ". References: ", ext('https://www.openapis.org/'), ', ', ext('https://graphql.org/learn/best-practices/')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "Data Warehouse Cost Optimizer"
            }), " \u2014 $99/mo. Right-size warehouses. Learn: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/warehouse-cost-optimizer",
              children: "/services/warehouse-cost-optimizer"
            }), ". References: ", ext('https://www.snowflake.com/en/pricing/'), ', ', ext('https://cloud.google.com/bigquery/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-email-responder",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Email Responder"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Autonomous replies, prioritization, and sentiment analysis integrated with your CRM."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$50/user/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://workspace.google.com/pricing'), ", ", ext('https://www.microsoft.com/microsoft-365/business/compare-all-microsoft-365-business-products')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "mobile-first-survey-tool",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Mobile-first Survey Tool"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Adaptive surveys with conditional logic and real-time dashboards."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$70/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.typeform.com/pricing/'), ", ", ext('https://www.surveymonkey.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "event-management-dashboard",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Event Management Dashboard"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Ticketing, registration, scheduling, and post-event insights."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$100/mo (+ fees per ticket)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.eventbrite.com/organizer/pricing/'), ", ", ext('https://ti.to/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "affiliate-tracking-hub",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Affiliate Tracking Hub"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Cross-device attribution, fraud prevention, and automated payouts."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $40\u2013$80/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://partnerstack.com/'), ", ", ext('https://impact.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "smb-website-analytics",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "SMB Website Analytics"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Privacy-first dashboards with goals, funnels, and UTM insights."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $9\u2013$50/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://plausible.io/pricing'), ", ", ext('https://usefathom.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "it-helpdesk-suite",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "IT Helpdesk Suite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Ticketing, SLAs, KB, and self-service portal for IT teams and MSPs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$70/agent/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.zendesk.com/pricing/'), ", ", ext('https://www.freshworks.com/freshdesk/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ecommerce-returns-center",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "E\u2011commerce Returns Center"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Self-service returns, labels, and exchanges with analytics."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$60/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.loopreturns.com/pricing/'), ", ", ext('https://www.returnsgo.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-seo-optimizer",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI SEO Content Optimizer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "AI guidance for keywords, structure, and readability with brief exports."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$100/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.surferseo.com/pricing/'), ", ", ext('https://www.semrush.com/prices/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Contract Testing Suite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automated OpenAPI/GraphQL contract tests with CI gates, schema diffs, and rollback guidance."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$100/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.postman.com/pricing/'), ", ", ext('https://www.optic.dev/'), ", ", ext('https://stoplight.io/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Data Quality & ETL Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Freshness SLAs, schema drift detection, and anomaly alerts for your warehouse and lakes."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.montecarlodata.com/'), ", ", ext('https://www.bigeye.com/'), ", ", ext('https://soda.io/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "cloud-cost-optimization-accelerator",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Cloud Cost Optimization Accelerator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Rightsizing, SP/RI planning, and anomaly alerts with actionable FinOps guardrails."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.kubecost.com/pricing'), ", ", ext('https://www.cloudzero.com/pricing'), ", ", ext('https://www.finout.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "backup-dr-runbook-hub",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Backup & DR Runbook Hub"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automated backup policies, restore rehearsal, and audit-ready evidence."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://velero.io/'), ", ", ext('https://aws.amazon.com/backup/pricing/'), ", ", ext('https://www.veeam.com/pricing.html')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "PII Data Vault & Tokenization"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Vault PII and tokenize sensitive fields with KMS-backed encryption and audit logs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $200\u2013$800/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.skyflow.com/pricing'), ", ", ext('https://www.verygoodsecurity.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Edge Feature Flag Proxy"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Serve flags from the edge with geo targeting, kill switches, and provider compatibility."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://launchdarkly.com/pricing/'), ", ", ext('https://www.flagsmith.com/pricing'), ", ", ext('https://www.split.io/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "eks-kubernetes-ops",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Managed Kubernetes on AWS EKS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Production-grade EKS with autoscaling, observability, and security baselines."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $1,500\u2013$6,000/mo (+ AWS fees)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://aws.amazon.com/eks/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "gke-kubernetes-ops",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Managed Kubernetes on Google GKE"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Hardened GKE with GitOps, progressive delivery, and FinOps guardrails."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $1,500\u2013$6,000/mo (+ Google Cloud fees)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://cloud.google.com/kubernetes-engine/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "cloudflare-zero-trust",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Zero Trust SASE with Cloudflare"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "ZTNA, SWG, DNS filtering, and device posture for secure access."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $7\u2013$20/user/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.cloudflare.com/plans/zero-trust/'), ", ", ext('https://www.cloudflare.com/plans/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "microsoft-intune-mdm",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "MDM/MAM with Microsoft Intune"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Device enrollment, compliance, app protection, and conditional access."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $8\u2013$20/user/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.microsoft.com/microsoft-365/compare-microsoft-365-enterprise-plans')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "voice-cloning-studio",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Voice Cloning Studio"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "High-quality synthetic voices for product, support, and content teams."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $5\u2013$99/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://elevenlabs.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Support Triage Router"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Classify, summarize, and route tickets across email, chat, and web with grounded AI suggestions."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.zendesk.com/pricing/'), ", ", ext('https://freshdesk.com/pricing'), ", ", ext('https://www.intercom.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "E\u2011commerce Returns Management"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automate RMAs, labels, exchanges, and refunds for a delightful post\u2011purchase experience."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $29\u2013$299/mo + labels"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.loopreturns.com/pricing'), ", ", ext('https://www.aftership.com/returns-center/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Podcast Transcription & Notes"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Accurate transcriptions with chapters and show notes drafts for SEO & accessibility."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$600/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.pigment.com/'), ", ", ext('https://www.anaplan.com/platform/overview')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Automated Email Follow\u2011ups"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Lead nurturing sequences triggered by activity with AI\u2011personalized copy and CRM sync."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $25\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://mailchimp.com/pricing/'), " (automations), ", ext('https://customer.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Freelancer Portfolio Builder"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Beautiful portfolios with case studies, testimonials, and SEO."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $12\u2013$49/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://webflow.com/pricing'), ", ", ext('https://www.squarespace.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Scheduling & Appointments"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Booking pages, reminders, no\u2011show reduction, and payments."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $10\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://calendly.com/pricing'), ", ", ext('https://cal.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Feature Flags & Experiments"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Safe launches and A/B tests with audit trails and targeting."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$800/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://launchdarkly.com/pricing/'), ", ", ext('https://www.flagsmith.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Data Contract Governance Suite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "API and data contracts with schema diffs, lineage, and CI gates to prevent breaks."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.optic.dev/'), ", ", ext('https://stoplight.io/'), ", ", ext('https://www.postman.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "PII Tokenization Vault Pro"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "KMS-backed tokenization, access policies, and audit trails for sensitive data."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $200\u2013$900/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.skyflow.com/pricing'), ", ", ext('https://www.verygoodsecurity.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Edge Personalization Engine"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Geo and audience\u2011aware content with edge rendering, flags, and experiments."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.optimizely.com/pricing/'), ", ", ext('https://vwo.com/plans/'), ", ", ext('https://www.mutinyhq.com/product')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Incident Auto\u2011Responder AI"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Draft incident updates and postmortems with SLO context and suggested actions."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.incident.io/pricing'), ", ", ext('https://www.rootly.com/pricing'), ", ", ext('https://www.blameless.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Warehouse CDC Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "CDC templates, SCD handling, and data tests for warehouse-native analytics."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $40\u2013$250/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.fivetran.com/pricing'), ", ", ext('https://airbyte.com/pricing'), ", ", ext('https://www.getdbt.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Privacy Guard for LLMs"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "PII/PHI detection, redaction, and consent-aware policies for prompts/outputs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.lakera.ai/'), ", ", ext('https://www.protectai.com/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Feature Flag Insights Pro"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Usage analytics, experiments, and guardrails on top of your flags."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://launchdarkly.com/pricing/'), ", ", ext('https://www.flagsmith.com/pricing'), ", ", ext('https://www.split.io/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "it-asset-discovery-agent",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "IT Asset Discovery Agent"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Agentless discovery of cloud, endpoints, and SaaS via APIs with drift alerts and CMDB export."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://aws.amazon.com/systems-manager/pricing/'), ", ", ext('https://www.okta.com/pricing/'), ", ", ext('https://workspace.google.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-meeting-notes",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Meeting Notes & Action Items"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Multi-speaker transcripts, summaries, and CRM-synced action items with redaction."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $10\u2013$40/user/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://otter.ai/pricing'), ", ", ext('https://www.gong.io/pricing')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/ai-meeting-notes",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "privacy-request-portal",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Privacy Request Portal (DSAR/CCPA/GDPR)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Accept, verify, and fulfill privacy requests with audit logs and SLAs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.onetrust.com/platform/privacy-management/'), ", ", ext('https://transcend.io/pricing')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/privacy-request-portal",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "accessibility-scanner",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Accessibility Compliance Scanner"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automated WCAG checks with CI annotations and remediation guidance."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.deque.com/axe/'), ", ", ext('https://pagespeed.web.dev/')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/accessibility-scanner",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "image-optimizer-cdn",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Image Optimizer CDN"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "On-the-fly transforms, AVIF/WebP, edge caching, signed URLs, and analytics."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $5\u2013$50/mo + bandwidth"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.imgix.com/pricing'), ", ", ext('https://cloudinary.com/pricing')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/image-optimizer-cdn",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "mlops-starter",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "MLOps Pipeline Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Model registry, CI gates, and monitoring to ship ML safely and faster."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://mlflow.org/'), ", ", ext('https://www.kubeflow.org/'), ", ", ext('https://www.databricks.com/product/mlops')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/mlops-starter",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "warehouse-accelerator",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Data Warehouse Accelerator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "ELT connectors, dbt models, and finance/ops dashboards in days."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $1,000\u2013$5,000/project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.getdbt.com/pricing/'), ", ", ext('https://www.fivetran.com/pricing'), ", ", ext('https://airbyte.com/pricing')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/warehouse-accelerator",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-synthetic-data-studio",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Synthetic Data Studio"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Generate privacy-safe datasets for ML with controllable distributions and differential privacy."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://gretel.ai/pricing'), ", ", ext('https://mostly.ai/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "zero-trust-sso-mesh",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Zero-Trust SSO Mesh"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Layer device posture and risk-based access on top of your IdP for continuous verification."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$800/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.cloudflare.com/plans/'), ", ", ext('https://www.zscaler.com/products/zero-trust-exchange')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "etl-reliability-copilot",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "ETL Reliability Copilot"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Freshness forecasts, schema drift detection, and anomaly alerts for warehouses and lakes."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$400/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.montecarlodata.com/'), ", ", ext('https://www.bigeye.com/'), ", ", ext('https://soda.io/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "edge-personalization-kit",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Edge Personalization Kit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Geo, device, and audience-targeted content rules at the CDN edge with experiments."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $30\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://vercel.com/pricing'), ", ", ext('https://www.cloudflare.com/plans/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-revenue-forecasting-copilot",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Revenue Forecasting Copilot"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Unified forecasts from CRM, product analytics, and traffic with scenario planning."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.hubspot.com/pricing/sales'), ", ", ext('https://www.salesforce.com/editions-pricing/sales-cloud/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-knowledge-graph-studio",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Knowledge Graph Studio"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Organization-wide entities and relationships for semantic search and lineage."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $149\u2013$799/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.neo4j.com/pricing/'), ", ", ext('https://www.elastic.co/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "llm-guarded-api-gateway",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "LLM Guarded API Gateway"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Policy, PII redaction, and safety guardrails for LLM apps with audit logs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $129\u2013$599/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://openai.com/index/safety/'), ", ", ext('https://www.lakera.ai/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "serverless-lakehouse-starter",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Serverless Lakehouse Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Templates, dbt models, and dashboards for a cost-guarded analytics stack."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $199\u2013$999/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.getdbt.com/pricing/'), ", ", ext('https://airbyte.com/pricing'), ", ", ext('https://www.metabase.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "customer-journey-orchestration",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Customer Journey Orchestration"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Drag-and-drop journeys across email, SMS, and in-app with attribution."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $79\u2013$399/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://customer.io/pricing'), ", ", ext('https://www.braze.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "kubernetes-runbooks-as-code",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Kubernetes Runbooks as Code"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Versioned runbooks with diagnostics, ChatOps, and audit trails."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $59\u2013$299/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://grafana.com/pricing/'), ", ", ext('https://www.datadoghq.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "security-posture-copilot",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Security Posture Copilot"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Control mapping, evidence pulls, and remediation playbooks."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $119\u2013$599/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://drata.com/pricing'), ", ", ext('https://www.vanta.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "itsm-ai-agent",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "ITSM AI Agent"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Auto-triage, summarize, and resolve common IT tickets."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $49\u2013$299/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.servicenow.com/'), ", ", ext('https://www.atlassian.com/software/jira/service-management/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "warehouse-native-reverse-etl",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Warehouse-native Reverse ETL"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "CDC syncs, transforms, and backfills to CRMs, ads, and support."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$499/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://hightouch.com/pricing'), ", ", ext('https://www.getcensus.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "data-contracts-hub",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Data Contracts Hub"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Schema diffs, lineage, and CI gates for stable data."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $89\u2013$399/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.optic.dev/'), ", ", ext('https://stoplight.io/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-sales-playbook-generator",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Sales Playbook Generator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Industry\u2011specific playbooks, emails, and call guides with exports."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $39\u2013$149/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.salesloft.com/pricing/'), ", ", ext('https://www.outreach.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "customer-data-platform-lite",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Customer Data Platform (CDP) Lite"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Unify events into profiles with traits and audiences, privacy-safe."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $49\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://segment.com/pricing'), ", ", ext('https://www.rudderstack.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "data-quality-observability",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Data Quality & Observability"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Freshness, volume, schema, lineage monitors with on-call alerts."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $199\u2013$1,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.datadoghq.com/pricing/'), ", ", ext('https://www.soda.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "feature-store-starter",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Feature Store Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Low-latency online features, batch backfills, and governance."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$700/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://feast.dev'), ", ", ext('https://www.tecton.ai')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "edge-ab-testing",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Edge A/B & Personalization"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Fast experiments and targeting at the edge with geo/device rules."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$200/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://vercel.com/pricing'), ", ", ext('https://www.cloudflare.com/plans/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "reverse-etl-starter",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Reverse ETL Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Sync warehouse audiences and metrics to CRMs and ad platforms."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$1,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://hightouch.com/pricing'), ", ", ext('https://www.getcensus.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "consent-preference-center",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Consent & Preference Center"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Manage consent, email/SMS preferences, and DSARs with audit logs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $49\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://transcend.io/product/'), ", ", ext('https://www.skyflow.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "vendor-risk-dashboard",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Vendor Risk Dashboard"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automated questionnaires, evidence, and risk scoring across vendors."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $79\u2013$800/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://drata.com/pricing'), ", ", ext('https://www.vanta.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "soc2-evidence-vault",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "SOC 2 Evidence Vault"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Collect and attest evidence automatically across systems for audits."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$1,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://drata.com/pricing'), ", ", ext('https://www.vanta.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-knowledge-base-search",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Knowledge Base Search"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Semantic search with answer synthesis and citations for docs and support."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $39\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.pinecone.io/pricing/'), ", ", ext('https://weaviate.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "engineering-productivity-insights",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Engineering Productivity Insights"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "DORA metrics, PR analytics, and flaky test detection with actions."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $149\u2013$1,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.datadoghq.com/pricing/'), ", ", ext('https://linear.app/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "it-asset-discovery-agent",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "IT Asset Discovery Agent"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Continuous discovery of devices, software, and shadow IT with enrichment."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $49\u2013$400/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.lansweeper.com/pricing/'), ", ", ext('https://www.atera.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "incident-autocomplete-copilot",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Incident Autocomplete Copilot"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Draft incident updates, status posts, and postmortem timelines."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $39\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.pagerduty.com/pricing/'), ", ", ext('https://www.atlassian.com/software/statuspage/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "voice-ivr-studio",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Voice IVR Studio"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Drag-and-drop IVR flows with speech-to-intent and analytics."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $29\u2013$500/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.twilio.com/pricing'), ", ", ext('https://www.vonage.com/communications-apis/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-sales-enablement-engine",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Sales Enablement Content Engine"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Battlecards, email cadences, and one-pagers auto\u2011generated from your product and win/loss data."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $49\u2013$299/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.jasper.ai/pricing'), ", ", ext('https://www.copy.ai/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "iot-device-fleet-manager",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "IoT Device Fleet Manager"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Provisioning, OTA updates, telemetry, and alerts for sensor fleets with secure identities."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $49\u2013$499/mo + usage"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://aws.amazon.com/iot-core/pricing/'), ", ", ext('https://www.golioth.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "security-awareness-training",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Security Awareness Training Platform"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Phishing simulations, micro\u2011lessons, and compliance reporting for the whole company."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $2\u2013$5/user/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.knowbe4.com/pricing'), ", ", ext('https://getcurricula.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "vulnerability-patch-orchestrator",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Vulnerability & Patch Orchestrator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Agentless asset discovery, risk\u2011based vuln prioritization, and automated patch windows."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.tenable.com/products/tenable-io/pricing'), ", ", ext('https://www.rapid7.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "hr-onboarding-automation",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "HR Onboarding Automation Hub"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automated preboarding, account provisioning, and training checklists across HRIS and IT."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $6\u2013$20/user/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.bamboohr.com/pricing/'), ", ", ext('https://www.rippling.com/pricing'), ", ", ext('https://gusto.com/product/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "shopify-speed-optimizer",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Shopify Speed & Core Web Vitals Optimizer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Theme profiling, image/CSS/JS optimization, and A/B testing for conversion impact."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $19\u2013$79/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://nitropack.io/pricing'), ", ", ext('https://www.shopify.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "llm-observability-tracing",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "LLM Observability & Tracing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Prompt/version tracking, cost/latency budgets, evals, and error analysis."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $0\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://wandb.ai/site/pricing'), ", ", ext('https://whylabs.ai/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "dpia-privacy-toolkit",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "DPIA & Privacy Impact Toolkit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Templates, workflows, and risk scoring for DPIA/PIA with audit trails."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.onetrust.com/platform/privacy-management/'), ", ", ext('https://trustarc.com/plans/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "b2b-customer-portal-starter",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "B2B Customer Portal Starter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Secure portal with SSO, invoices, usage, and self\u2011service entitlements."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://stripe.com/pricing'), ", ", ext('https://auth0.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "policy-as-code-governance",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Policy\u2011as\u2011Code Governance"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Author, test, and enforce org policies across services and CI with OPA/Rego."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $0\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.openpolicyagent.org/'), ", ", ext('https://www.styra.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "apple-mdm-suite",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Apple MDM Suite (ABM/DEP)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Zero\u2011touch enrollment, app management, and compliance for macOS/iOS fleets."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $4\u2013$12/device/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.jamf.com/pricing/'), ", ", ext('https://www.kandji.io/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "soc2-continuous-controls",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "SOC 2 Continuous Controls Monitoring"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Integrations, evidence collection, and gap alerts mapped to Trust Services Criteria."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $200\u2013$1,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.vanta.com/pricing'), ", ", ext('https://drata.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-red-team-testing",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Red Team & Prompt Injection Testing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Automated jailbreaks, sensitive data leaks, and safety evals with reports and fixes."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $0\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.lakera.ai/'), ", ", ext('https://github.com/leondz/garak')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "api-monetization-dev-portal",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Monetization & Developer Portal"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Plans, metering, billing, keys, and a docs portal with SDK generation."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$499/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://stripe.com/pricing'), ", ", ext('https://recurly.com/pricing/'), ", ", ext('https://konghq.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "consent-compliance-kit",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Consent & Cookie Compliance Kit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "IAB TCF v2 banners, geo-targeted policies, consent receipts, and audit logs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $20\u2013$150/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://iabeurope.eu/transparency-consent-framework/'), " , ", ext('https://www.cookiebot.com/en/pricing/'), " , ", ext('https://www.onetrust.com/products/cookie-consent/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "api-backfill-reconciliation",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "API Backfill & Reconciliation"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Find and fix data gaps across SaaS APIs with idempotent replays and reports."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$400/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://fivetran.com/pricing'), " , ", ext('https://airbyte.com/pricing'), " (related ETL context)"]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "data-quality-sla-monitor",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Data Quality & Freshness SLAs"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Freshness, null/outlier checks, schema drift detection, and lineage dashboards."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$800/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.montecarlodata.com/pricing/'), " , ", ext('https://www.greatexpectations.io/'), " (open\u2011source)"]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "postgres-index-advisor",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Postgres Index Advisor & Tuner"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Index suggestions, autovacuum tuning, and slow query remediation."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://pganalyze.com/pricing'), " , ", ext('https://ottertune.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "gitops-drift-monitor",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "GitOps Policy & Drift Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Detect config drift, enforce OPA policies, and auto\u2011PR remediations."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://argo-cd.readthedocs.io/'), " , ", ext('https://www.openpolicyagent.org/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "soc2-readiness-scanner",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "SOC 2 Readiness Scanner"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Control mapping, evidence checks, and exportable auditor reports."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$400/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://trustservicescriteria.aicpa.org/'), " , ", ext('https://www.vanta.com/pricing'), " , ", ext('https://drata.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "cloud-asset-attack-surface",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Cloud Asset Inventory & Attack Surface"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Discover assets, detect public exposures, and auto\u2011ticket remediation."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$1,000/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://aws.amazon.com/config/pricing/'), " , ", ext('https://azure.microsoft.com/pricing'), " , ", ext('https://cloud.google.com/asset-inventory/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "llm-red-team-simulator",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "LLM Red Team & Jailbreak Simulator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Adversarial prompts, PII checks, and CI safety gates with dashboards."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$500/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://github.com/leondz/garak'), " , ", ext('https://owasp.org/www-project-top-10-for-large-language-model-applications/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "affiliate-fraud-detector",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Affiliate Fraud Detector"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Stop self\u2011referrals and coupon abuse with risk signals and payout holds."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$400/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://partnerstack.com/'), " , ", ext('https://impact.com/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "personalization-api",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Content Personalization API"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Audience rules and AI\u2011assisted segments with edge\u2011low latency."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$400/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://vercel.com/pricing'), " , ", ext('https://www.cloudflare.com/plans/'), " , ", ext('https://segment.com/pricing/')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "lead-enrichment-routing",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Lead Enrichment & Routing Engine"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Firmographic enrichment, round\u2011robin/territories, and SLA tracking."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $50\u2013$300/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.clearbit.com/pricing'), " , ", ext('https://www.hubspot.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "k8s-quota-cost-guard",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Kubernetes Quota & Cost Guard"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Enforce quotas and right\u2011size workloads with cost guardrails."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $100\u2013$600/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.kubecost.com/pricing'), " , ", ext('https://www.cloudzero.com/pricing')]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "ai-contract-risk-analyzer",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "AI Contract Risk Analyzer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Flag risky clauses, generate playbook-aligned redlines, and export audit-ready changes."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$299/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://kirasystems.com/'), ' ', ",", ext('https://www.docusign.com/products/clm')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/services/ai-contract-risk-analyzer",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "finops-ri-sp-optimizer",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "FinOps RI/SP Optimizer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Simulate savings plans and reserved instances with commitment pacing and guardrails."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $79\u2013$299/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://aws.amazon.com/savingsplans/pricing/'), " , ", ext('https://azure.microsoft.com/pricing'), " , ", ext('https://cloud.google.com/billing')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/services/finops-ri-sp-optimizer",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "k8s-slo-auto-tuner",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Kubernetes SLO Auto\u2011Tuner"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Derive realistic SLOs, simulate error budgets, and open GitOps PRs safely."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $99\u2013$399/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.nobl9.com/pricing'), " , ", ext('https://www.datadoghq.com/pricing/')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/services/k8s-slo-auto-tuner",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "vendor-security-questionnaire-ai",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Vendor Security Questionnaire AI"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Auto\u2011fill SIG/CAIQ with mapped controls, citations, and reviewer workflows."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $59\u2013$199/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.vanta.com/pricing'), " , ", ext('https://drata.com/pricing')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/services/vendor-security-questionnaire-ai",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "invoice-reconciliation-copilot",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Invoice Reconciliation Copilot"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Three\u2011way match POs, invoices, and receipts with anomaly detection and approvals."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $39\u2013$199/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.tipalti.com/pricing/'), " , ", ext('https://www.stampli.com/pricing/')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/services/invoice-reconciliation-copilot",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "policy-drift-compliance-monitor",
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "Policy Drift & Compliance Monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-slate-300",
          children: "Detect config drift across cloud and SaaS. Auto\u2011PR fixes with evidence."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "list-disc list-inside text-slate-300 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: "Typical SMB budget: $59\u2013$299/mo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: ["References: ", ext('https://www.openpolicyagent.org/'), " , ", ext('https://www.styra.com/pricing')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "text-cyan-400 underline",
            href: "/services/policy-drift-compliance-monitor",
            children: "Learn more"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        id: "diversified-expansions-2026",
        className: "space-y-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-2xl font-semibold text-white",
          children: "New Diversified Additions"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "license-key-usage-metering",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "License Key & Usage Metering Hub"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Provision license keys, enforce entitlements, and track metered usage with Stripe/Billing and audits."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $29\u2013$199/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://keygen.sh/pricing'), ", ", ext('https://stripe.com/docs/billing/subscriptions/metered')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/license-key-usage-metering",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "multi-tenant-rate-limiter",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "Multi\u2011tenant Rate Limiter & Quotas"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Tenant\u2011aware quotas, burst limits, and fairness with headers, dashboards, and alerts."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $39\u2013$299/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://docs.konghq.com/hub/kong-inc/rate-limiting/'), ", ", ext('https://developers.cloudflare.com/waf/rate-limits/')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/multi-tenant-rate-limiter",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "data-residency-geo-router",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "Data Residency & Geo Routing Proxy"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Route API traffic by geography and data class to meet residency and localization policies."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $79\u2013$499/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://www.cloudflare.com/data-localization/'), ", ", ext('https://developers.cloudflare.com/workers/')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/data-residency-geo-router",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "api-contract-mock-sandbox",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "API Mock Server & Contract Sandbox"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Spin up realistic mocks from OpenAPI/GraphQL with contract tests and golden recordings."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $19\u2013$129/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://stoplight.io/open-source/prism'), ", ", ext('https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/overview')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/api-contract-mock-sandbox",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "stripe-billing-migration",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "Stripe Billing Migration & Dunning Optimizer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Plan/price migration playbooks, tax, proration, coupons, and best\u2011practice dunning sequences."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $99\u2013$799 one\u2011time or $49\u2013$199/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://stripe.com/pricing'), ", ", ext('https://www.chargebee.com/pricing'), ", ", ext('https://recurly.com/pricing/')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/stripe-billing-migration",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "ai-sales-call-coach",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "AI Sales Call Scoring & Coaching"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Auto\u2011score discovery/demo calls, detect next steps, and generate coaching snippets synced to CRM."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $39\u2013$199/user/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://www.avoma.com/pricing'), ", ", ext('https://www.gong.io')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/ai-sales-call-coach",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "sku-demand-forecast",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "SKU Demand Forecast Copilot"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Weekly SKU forecasts with confidence bands and purchase order suggestions."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $99\u2013$699/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://aws.amazon.com/forecast/pricing/'), ", ", ext('https://www.pigment.com/')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/sku-demand-forecast",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "video-subtitle-dubbing",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "Video Subtitling & Dubbing Studio"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Generate multi\u2011language subtitles and voiceovers with style controls and review workflows."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $10\u2013$199/mo + usage"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://deepgram.com/pricing'), ", ", ext('https://elevenlabs.io/pricing')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/video-subtitle-dubbing",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "app-store-review-insights",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "App Store Review Insights"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Aggregate reviews across stores, detect themes, and surface product issues automatically."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $29\u2013$199/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://appfollow.io/pricing'), ", ", ext('https://www.appradar.com/pricing')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/app-store-review-insights",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "b2b-pricing-entitlements",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "B2B SaaS Pricing & Entitlement Planner"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Model plans/features, gates, and usage tiers with entitlements diffed to code."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $49\u2013$299/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://stripe.com/pricing'), ", ", ext('https://www.paddle.com/pricing'), ", ", ext('https://www.recurly.com/pricing')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/b2b-pricing-entitlements",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "sso-billing-entitlements-sync",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "SSO Billing & Entitlements Sync"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Bridge IdP groups/SCIM to billing entitlements for least\u2011privilege, audit\u2011ready access."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $79\u2013$399/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://workos.com/pricing'), ", ", ext('https://auth0.com/pricing'), ", ", ext('https://www.okta.com/pricing/')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/sso-billing-entitlements-sync",
              children: "Learn more"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          id: "email-dmarc-monitor",
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-xl font-semibold text-white",
            children: "Email DMARC/SPF/DKIM Monitor & Autopilot"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-slate-300",
            children: "Monitor authentication, guide DNS fixes, and improve deliverability with safe rollouts."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "list-disc list-inside text-slate-300 space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: "Typical SMB budget: $9\u2013$99/mo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["References: ", ext('https://dmarcian.com/pricing'), ", ", ext('https://valimail.com/pricing/')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              className: "text-cyan-400 underline",
              href: "/services/email-dmarc-monitor",
              children: "Learn more"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-black/30 border border-gray-800",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "tel:+13024640950",
          className: "px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
          children: "Call +1 302 464 0950"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "mailto:kleber@ziontechgroup.com",
          className: "px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white",
          children: "Email kleber@ziontechgroup.com"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "/pricing",
          className: "px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300",
          children: "View Pricing"
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