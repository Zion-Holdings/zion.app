"use strict";
(() => {
var exports = {};
exports.id = 426250;
exports.ids = [426250,890636];
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

/***/ 750207:
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
/* harmony import */ var private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(786122);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/resources/case-studies",
        pathname: "/resources/case-studies",
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
    userland: private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/resources/case-studies",
    config,
    userland: private_next_pages_resources_case_studies_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 786122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7887);
/* harmony import */ var _components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(795157);
/* harmony import */ var _components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var CaseStudiesPage = () => {
  var caseStudies = [{
    title: 'Global Bank Digital Transformation',
    description: 'How a leading global bank achieved 300% efficiency improvement with our AI-powered solutions',
    industry: 'Financial Services',
    results: ['300% Efficiency Improvement', '50% Cost Reduction', '99.9% Uptime'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.TrendingUp, {
      className: "w-8 h-8"
    }),
    href: '/resources/case-studies/global-bank-transformation',
    color: 'from-green-500 to-emerald-500'
  }, {
    title: 'Healthcare AI Implementation',
    description: 'Revolutionary AI platform implementation for a major healthcare network',
    industry: 'Healthcare',
    results: ['40% Faster Diagnosis', '25% Cost Savings', 'Improved Patient Outcomes'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Brain, {
      className: "w-8 h-8"
    }),
    href: '/resources/case-studies/healthcare-ai-implementation',
    color: 'from-purple-500 to-pink-500'
  }, {
    title: 'Manufacturing Process Automation',
    description: 'Complete automation of manufacturing processes for a Fortune 500 company',
    industry: 'Manufacturing',
    results: ['60% Production Increase', '45% Quality Improvement', '30% Cost Reduction'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Zap, {
      className: "w-8 h-8"
    }),
    href: '/resources/case-studies/manufacturing-automation',
    color: 'from-yellow-500 to-orange-500'
  }, {
    title: 'Government Cybersecurity Upgrade',
    description: 'Comprehensive cybersecurity transformation for a federal government agency',
    industry: 'Government',
    results: ['99.99% Security Uptime', 'Zero Breaches', 'Full Compliance'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield, {
      className: "w-8 h-8"
    }),
    href: '/resources/case-studies/government-cybersecurity',
    color: 'from-red-500 to-orange-500'
  }, {
    title: 'Retail AI Customer Experience',
    description: 'AI-powered customer experience transformation for a major retail chain',
    industry: 'Retail',
    results: ['35% Sales Increase', '50% Customer Satisfaction', '40% Operational Efficiency'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users, {
      className: "w-8 h-8"
    }),
    href: '/resources/case-studies/retail-ai-experience',
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Startup Scale-Up Success',
    description: 'How a tech startup scaled from 0 to 1M users with our cloud infrastructure',
    industry: 'Technology',
    results: ['1M+ Users', '99.9% Uptime', '10x Performance'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Target, {
      className: "w-8 h-8"
    }),
    href: '/resources/case-studies/startup-scale-up',
    color: 'from-indigo-500 to-purple-500'
  }];
  var caseStudyFeatures = [{
    title: 'Real Results',
    description: 'Documented outcomes from actual client implementations',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Detailed Analysis',
    description: 'In-depth analysis of challenges, solutions, and results',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.BarChart3, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Industry Focused',
    description: 'Case studies across various industries and use cases',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Globe, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Actionable Insights',
    description: 'Practical lessons and strategies you can apply',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.TrendingUp, {
      className: "w-6 h-6"
    })
  }];
  var stats = [{
    label: 'Case Studies',
    value: '100+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.BarChart3, {
      className: "w-6 h-6"
    })
  }, {
    label: 'Industries Covered',
    value: '15+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Globe, {
      className: "w-6 h-6"
    })
  }, {
    label: 'Success Rate',
    value: '95%',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Star, {
      className: "w-6 h-6"
    })
  }, {
    label: 'Client Satisfaction',
    value: '98%',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users, {
      className: "w-6 h-6"
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((_components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2___default()), {
    variant: "quantum",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "min-h-screen",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
        title: "Case Studies - Zion Tech Group | Success Stories and Implementation Results",
        description: "Explore real-world success stories and implementation results from Zion Tech Group's technology solutions across various industries.",
        canonical: "https://ziontechgroup.com/resources/case-studies/"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "relative pt-32 pb-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h1, {
            className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            children: "Case Studies"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {
            className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12",
            children: [">>>>>> 916d02471c24718d698d51219f240472f9d52b96 initial=", {
              opacity: 0,
              y: 30
            }, "animate=", {
              opacity: 1,
              y: 0
            }, "transition=", {
              duration: 0.8,
              delay: 0.2
            }, "> Explore real-world success stories and implementation results from our technology solutions across various industries."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.4
            },
            children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "flex justify-center mb-2 text-cyan-400",
                children: stat.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl font-bold text-white mb-1",
                children: stat.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-sm text-gray-400",
                children: stat.label
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            className: "text-center mb-16",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl font-bold text-white mb-4",
              children: "Why Read Our Case Studies?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Our case studies provide real insights into how our solutions deliver measurable results across different industries and use cases."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.2
            },
            children: caseStudyFeatures.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "flex justify-center mb-4 text-cyan-400",
                children: feature.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-2",
                children: feature.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-400",
                children: feature.description
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            className: "text-center mb-16",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl font-bold text-white mb-4",
              children: "Featured Case Studies"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Discover how our technology solutions have transformed businesses and delivered measurable results across various industries."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.2
            },
            children: caseStudies.map((caseStudy, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              className: "group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20",
              whileHover: {
                y: -5
              },
              initial: {
                opacity: 0,
                y: 30
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: 0.1 * index
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "flex justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300",
                  children: caseStudy.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full",
                  children: caseStudy.industry
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: caseStudy.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-400 mb-6",
                children: caseStudy.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "space-y-2 mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                  className: "text-sm font-semibold text-cyan-400 mb-2",
                  children: "Key Results:"
                }), caseStudy.results.map((result, resultIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center text-sm text-gray-300",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                    className: "w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"
                  }), result]
                }, resultIndex))]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  href: caseStudy.href,
                  className: "inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300",
                  children: ["Read Full Case Study ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {
                    className: "w-4 h-4 ml-2"
                  })]
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "max-w-4xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl font-bold text-white mb-6",
              children: "Ready to Create Your Success Story?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8",
              children: "Let's discuss how our technology solutions can help you achieve similar results and create your own success story."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "/contact",
                className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
                children: "Get Started"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "/services",
                className: "inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300",
                children: "View All Services"
            })]
          })
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaseStudiesPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(750207)));
module.exports = __webpack_exports__;

})();