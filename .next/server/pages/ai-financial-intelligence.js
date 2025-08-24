"use strict";
(() => {
var exports = {};
exports.id = 184060;
exports.ids = [184060,890636];
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

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 918801:
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
/* harmony import */ var private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(966916);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/ai-financial-intelligence",
        pathname: "/ai-financial-intelligence",
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
    userland: private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/ai-financial-intelligence",
    config,
    userland: private_next_pages_ai_financial_intelligence_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 966916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AIFinancialIntelligence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function AIFinancialIntelligence() {
  var features = [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.DollarSign, {
      className: "w-6 h-6"
    }),
    title: 'Financial Data Analysis',
    description: 'Advanced AI-powered financial data analysis with real-time market insights and trend identification.'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Zap, {
      className: "w-6 h-6"
    }),
    title: 'Investment Intelligence',
    description: 'Revolutionary investment intelligence with AI algorithms that identify opportunities and risks.'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Target, {
      className: "w-6 h-6"
    }),
    title: 'Risk Assessment',
    description: 'Intelligent risk assessment with AI-powered analysis of market volatility and portfolio exposure.'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Shield, {
      className: "w-6 h-6"
    }),
    title: 'Compliance Monitoring',
    description: 'Advanced compliance monitoring with automated regulatory reporting and risk management.'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.TrendingUp, {
      className: "w-6 h-6"
    }),
    title: 'Performance Analytics',
    description: 'Comprehensive performance analytics with AI-powered insights and optimization recommendations.'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Globe, {
      className: "w-6 h-6"
    }),
    title: 'Global Market Intelligence',
    description: 'Access to global market intelligence with cross-border analysis and international opportunities.'
  }];
  var benefits = ['Improve investment returns by 300%', 'Reduce risk exposure by 70%', 'Increase market insights by 500%', 'Accelerate decision making by 200%', 'Enable 24/7 market monitoring', 'Optimize portfolio performance', 'Scale financial operations globally', 'Future-proof financial strategy'];
  var useCases = ['Investment Analysis', 'Risk Management', 'Portfolio Optimization', 'Market Intelligence', 'Compliance Monitoring', 'Performance Analytics', 'Financial Planning', 'Asset Allocation', 'Trading Strategies', 'Financial Reporting', 'Market Research', 'Investment Strategy'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
        children: "AI Financial Intelligence | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "description",
        content: "Revolutionize financial intelligence with AI-powered analysis, investment insights, and risk management for optimal financial performance."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "keywords",
        content: "AI financial intelligence, financial analysis, investment intelligence, risk management, portfolio optimization, financial technology"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:title",
        content: "AI Financial Intelligence | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:description",
        content: "Revolutionize financial intelligence with AI-powered analysis."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:url",
        content: "https://ziontechgroup.com/ai-financial-intelligence"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("link", {
        rel: "canonical",
        href: "https://ziontechgroup.com/ai-financial-intelligence"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "min-h-screen bg-black text-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "relative pt-32 pb-20 overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
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
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex items-center justify-center mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.DollarSign, {
                  className: "w-8 h-8 text-white"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
              className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-6",
              children: "AI Financial Intelligence"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
              children: "Revolutionize financial intelligence with AI-powered analysis, investment insights, and risk management for optimal financial performance."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                className: "px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25",
                children: "Unlock Intelligence"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                className: "px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200",
                children: "Watch Demo"
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
        className: "py-20 bg-gradient-to-b from-black to-gray-900",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Revolutionary Financial Intelligence Features"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl text-gray-400 max-w-3xl mx-auto",
              children: "Our platform combines cutting-edge AI with financial expertise to deliver intelligence solutions that maximize returns and minimize risk."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
              initial: {
                opacity: 0,
                y: 30
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: index * 0.1
              },
              className: "bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "text-yellow-400",
                  children: feature.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-4",
                children: feature.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "text-gray-400 leading-relaxed",
                children: feature.description
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
        className: "py-20 bg-black",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Transform Financial Intelligence"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl text-gray-400 max-w-3xl mx-auto",
              children: "Experience revolutionary improvements in investment returns, risk management, and market insights with our AI financial intelligence platform."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: benefits.map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
              initial: {
                opacity: 0,
                y: 30
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: index * 0.1
              },
              className: "bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center space-x-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.CheckCircle, {
                  className: "w-5 h-5 text-yellow-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-white font-medium text-sm",
                  children: benefit
                })]
              })
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
        className: "py-20 bg-gradient-to-b from-black to-gray-900",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Financial Intelligence Solutions for Every Need"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl text-gray-400 max-w-3xl mx-auto",
              children: "From investment analysis to risk management, our platform provides AI-powered solutions for every aspect of financial intelligence and decision making."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6",
            children: useCases.map((useCase, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
              initial: {
                opacity: 0,
                scale: 0.8
              },
              whileInView: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: 0.8,
                delay: index * 0.1
              },
              className: "bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Cpu, {
                  className: "w-6 h-6 text-yellow-400"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "text-white font-medium text-sm",
                children: useCase
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
        className: "py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Ready to Unlock Financial Intelligence?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8",
              children: "Join the select group of financial professionals leading the future of AI-powered intelligence. Experience unprecedented insights and performance."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                className: "px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25",
                children: "Unlock Intelligence Now"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                className: "px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200",
                children: "Contact Finance Team"
              })]
            })]
          })
        })
      })]
    })]
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(918801)));
module.exports = __webpack_exports__;

})();