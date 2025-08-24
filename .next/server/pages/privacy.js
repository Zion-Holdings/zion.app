"use strict";
(() => {
var exports = {};
exports.id = 150736;
exports.ids = [150736,890636];
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

/***/ 898597:
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
/* harmony import */ var private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(951108);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/privacy",
        pathname: "/privacy",
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
    userland: private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/privacy",
    config,
    userland: private_next_pages_privacy_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 951108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SEOOptimizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(377982);
/* harmony import */ var _components_AnalyticsTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(859882);
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(293090);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








var PrivacyPage = () => {
  var lastUpdated = 'January 17, 2025';
  var privacySections = [{
    title: 'Information We Collect',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Database, {
      className: "w-8 h-8"
    }),
    color: 'from-cyan-500 to-blue-500',
    content: ['Personal information (name, email, phone number, company)', 'Business information (company size, industry, project requirements)', 'Technical information (IP address, browser type, device information)', 'Usage data (website interactions, service usage patterns)', 'Communication records (emails, phone calls, support tickets)']
  }, {
    title: 'How We Use Your Information',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Settings, {
      className: "w-8 h-8"
    }),
    color: 'from-purple-500 to-pink-500',
    content: ['Provide and improve our services', 'Communicate with you about our services', 'Process payments and manage accounts', 'Send marketing communications (with consent)', 'Analyze usage patterns and improve user experience', 'Comply with legal obligations']
  }, {
    title: 'Information Sharing',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
      className: "w-8 h-8"
    }),
    color: 'from-green-500 to-emerald-500',
    content: ['We do not sell, trade, or rent your personal information', 'Share with trusted service providers under strict confidentiality', 'Comply with legal requirements and court orders', 'Protect our rights, property, and safety', 'Business transfers (with notice and choice)']
  }, {
    title: 'Data Security',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Lock, {
      className: "w-8 h-8"
    }),
    color: 'from-orange-500 to-red-500',
    content: ['Industry-standard encryption for data in transit and at rest', 'Regular security audits and vulnerability assessments', 'Access controls and authentication measures', 'Employee training on data protection', 'Incident response and breach notification procedures']
  }];
  var rights = [{
    title: 'Access',
    description: 'Request access to your personal information',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Eye, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Correction',
    description: 'Request correction of inaccurate information',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Deletion',
    description: 'Request deletion of your personal information',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.AlertTriangle, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Portability',
    description: 'Request transfer of your data to another service',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Database, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Objection',
    description: 'Object to processing of your personal information',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.User, {
      className: "w-6 h-6"
    })
  }, {
    title: 'Restriction',
    description: 'Request restriction of processing activities',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Settings, {
      className: "w-6 h-6"
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SEOOptimizer__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_AnalyticsTracker__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
        className: "relative z-10 pt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
          className: "py-20 px-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "max-w-6xl mx-auto text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
                children: "Privacy Policy"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto",
                children: "Your privacy is our priority. Learn how we protect and handle your personal information."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center justify-center gap-4 text-gray-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield, {
                  className: "w-6 h-6"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  children: ["Last updated: ", lastUpdated]
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
          className: "py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "max-w-6xl mx-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "grid lg:grid-cols-2 gap-12 items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                initial: {
                  opacity: 0,
                  x: -20
                },
                whileInView: {
                  opacity: 1,
                  x: 0
                },
                transition: {
                  duration: 0.6
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "text-4xl font-bold mb-6 text-white",
                  children: "Our Commitment to Privacy"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-lg text-gray-300 mb-6 leading-relaxed",
                  children: "At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-lg text-gray-300 mb-6 leading-relaxed",
                  children: "We believe in transparency and want you to understand how your information is handled. This policy applies to all users of our website, services, and applications."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center gap-4 text-cyan-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Lock, {
                    className: "w-6 h-6"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "font-medium",
                    children: "Your data is safe with us"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                initial: {
                  opacity: 0,
                  x: 20
                },
                whileInView: {
                  opacity: 1,
                  x: 0
                },
                transition: {
                  duration: 0.6,
                  delay: 0.2
                },
                className: "relative",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-center space-y-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield, {
                        className: "w-12 h-12 text-white"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white",
                      children: "Data Protection"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300",
                      children: "Enterprise-grade security for your information"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "grid grid-cols-2 gap-4 text-sm",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "text-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                          className: "text-2xl font-bold text-cyan-400",
                          children: "256-bit"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                          className: "text-gray-400",
                          children: "Encryption"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "text-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                          className: "text-2xl font-bold text-purple-400",
                          children: "99.9%"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                          className: "text-gray-400",
                          children: "Uptime"
                        })]
                      })]
                    })]
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
          className: "py-20 px-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6
              },
              className: "text-center mb-16",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "text-4xl font-bold mb-4 text-white",
                children: "Our Privacy Principles"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-xl text-gray-300",
                children: "The foundation of how we handle your data"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: privacySections.map((section, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: index * 0.1
                },
                className: "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "w-16 h-16 bg-gradient-to-r ".concat(section.color, " rounded-2xl flex items-center justify-center mb-6"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "text-white",
                    children: section.icon
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "text-2xl font-bold text-white mb-4",
                  children: section.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                  className: "space-y-3",
                  children: section.content.map((item, itemIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                    className: "flex items-start gap-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-gray-300",
                      children: item
                    })]
                  }, itemIndex))
                })]
              }, section.title))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
          className: "py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6
              },
              className: "text-center mb-16",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "text-4xl font-bold mb-4 text-white",
                children: "Your Privacy Rights"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-xl text-gray-300",
                children: "You have control over your personal information"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: rights.map((right, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: index * 0.1
                },
                className: "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "text-white",
                    children: right.icon
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "text-xl font-bold text-white mb-2",
                  children: right.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-gray-300 text-sm",
                  children: right.description
                })]
              }, right.title))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
          className: "py-20 px-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6
              },
              className: "space-y-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "text-3xl font-bold text-white mb-6",
                  children: "Detailed Privacy Information"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "space-y-8",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Information Collection"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "We collect information you provide directly to us, such as when you create an account, request a quote, or contact our support team. We also automatically collect certain information about your device and how you interact with our services."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "This may include your IP address, browser type, operating system, referring URLs, access times, and pages viewed. We use this information to improve our services and provide a better user experience."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Data Usage and Purpose"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "We use your information to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "With your consent, we may also use your information to send you marketing communications about our services, special offers, and updates. You can opt out of these communications at any time."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Data Sharing and Disclosure"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third-party service providers who assist us in operating our business."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "These service providers are contractually obligated to keep your information confidential and use it only for the purposes for which we disclose it to them."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Data Security Measures"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "These measures include encryption, access controls, regular security assessments, and employee training on data protection best practices."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Data Retention"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "International Data Transfers"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "For transfers to countries outside the European Economic Area, we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Cookies and Tracking Technologies"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and provide personalized content."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our services."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Children's Privacy"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to remove such information."
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Changes to This Policy"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 mb-4 leading-relaxed",
                      children: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "text-gray-300 leading-relaxed",
                      children: "Your continued use of our services after such changes constitutes acceptance of the updated policy. We encourage you to review this policy periodically."
                    })]
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
          className: "py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "max-w-4xl mx-auto text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "text-4xl font-bold mb-6 text-white",
                children: "Questions About Privacy?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-xl text-gray-300 mb-8",
                children: "If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "mailto:kleber@ziontechgroup.com",
                  className: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
                    className: "w-5 h-5"
                  }), "Email Us"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "/contact",
                  className: "border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.User, {
                    className: "w-5 h-5"
                  }), "Contact Form"]
                })]
              })]
            })
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyPage);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(898597)));
module.exports = __webpack_exports__;

})();