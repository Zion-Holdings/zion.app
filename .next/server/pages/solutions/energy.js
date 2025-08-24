"use strict";
(() => {
var exports = {};
exports.id = 279747;
exports.ids = [279747,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 560513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7887);
/* harmony import */ var _components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(795157);
/* harmony import */ var _components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var EnergySolutionsPage = () => {
  var solutions = [{
    title: 'AI-Powered Energy Management',
    description: 'Intelligent energy optimization and demand response systems',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Brain, {
      className: "w-8 h-8"
    }),
    features: ['Demand Forecasting', 'Load Balancing', 'Energy Optimization', 'Predictive Maintenance'],
    href: '/ai-energy-management',
    color: 'from-purple-500 to-pink-500'
  }, {
    title: 'Smart Grid Solutions',
    description: 'Advanced smart grid technology for modern energy distribution',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Zap, {
      className: "w-8 h-8"
    }),
    features: ['Grid Monitoring', 'Fault Detection', 'Automated Switching', 'Real-time Analytics'],
    href: '/smart-grid-solutions',
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Renewable Energy Integration',
    description: 'AI-powered renewable energy management and optimization',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Activity, {
      className: "w-8 h-8"
    }),
    features: ['Solar Optimization', 'Wind Integration', 'Battery Management', 'Grid Stability'],
    href: '/renewable-energy-integration',
    color: 'from-green-500 to-emerald-500'
  }, {
    title: 'Energy Cybersecurity',
    description: 'Advanced security solutions for critical energy infrastructure',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield, {
      className: "w-8 h-8"
    }),
    features: ['SCADA Security', 'Threat Detection', 'Compliance Management', 'Incident Response'],
    href: '/energy-cybersecurity',
    color: 'from-red-500 to-orange-500'
  }, {
    title: 'Energy Analytics Platform',
    description: 'Comprehensive analytics for energy operations and optimization',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.BarChart3, {
      className: "w-8 h-8"
    }),
    features: ['Performance Analytics', 'Efficiency Metrics', 'Predictive Insights', 'Cost Optimization'],
    href: '/energy-analytics-platform',
    color: 'from-indigo-500 to-blue-500'
  }];
  var stats = [{
    label: 'Energy Partners',
    value: '100+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Zap, {
      className: "w-6 h-6"
    })
  }, {
    label: 'Grids Optimized',
    value: '250+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Activity, {
      className: "w-6 h-6"
    })
  }, {
    label: 'Energy Savings',
    value: '30%',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Star, {
      className: "w-6 h-6"
    })
  }, {
    label: 'Efficiency Gain',
    value: '45%',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.TrendingUp, {
      className: "w-6 h-6"
    })
  }];
  var features = [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Lock, {
      className: "w-6 h-6"
    }),
    title: 'Critical Infrastructure',
    description: 'Enterprise-grade security for energy systems'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Zap, {
      className: "w-6 h-6"
    }),
    title: 'Real-time Monitoring',
    description: 'Instant energy system insights'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Globe, {
      className: "w-6 h-6"
    }),
    title: 'Global Deployment',
    description: 'Available worldwide with local compliance'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Rocket, {
      className: "w-6 h-6"
    }),
    title: 'Scalable Platform',
    description: 'Grows with your energy operations'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((_components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_2___default()), {
    variant: "holographic",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "min-h-screen",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Energy Solutions - Zion Tech Group | AI-Powered Energy Technology",
        description: "Transform energy with Zion Tech Group's AI management, smart grid, renewable integration, cybersecurity, and analytics solutions. Drive efficiency and sustainability.",
        canonical: "https://ziontechgroup.com/solutions/energy/"
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
            children: "Energy Solutions"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {
            className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12",
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
            children: "Revolutionizing energy with AI-powered management, smart grid technology, renewable energy integration, advanced cybersecurity, and comprehensive analytics. Drive efficiency, sustainability, and reliability."
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
                className: "text-2xl font-bold text-white mb-1",
                children: stat.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-sm text-gray-400",
                children: stat.label
              })]
            }, stat.label))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h2, {
            className: "text-4xl font-bold text-center text-white mb-16",
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
            viewport: {
              once: true
            },
            children: "Our Energy Solutions"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: solutions.map((solution, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105",
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
              viewport: {
                once: true
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "w-16 h-16 rounded-xl bg-gradient-to-r ".concat(solution.color, " flex items-center justify-center mb-4"),
                children: solution.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-3",
                children: solution.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-300 mb-4",
                children: solution.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
                className: "space-y-2 mb-6",
                children: solution.features.map(feature => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                  className: "flex items-center text-sm text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                    className: "w-4 h-4 text-cyan-400 mr-2 flex-shrink-0"
                  }), feature]
                }, feature))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                href: solution.href,
                className: "inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300",
                children: ["Learn More ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {
                  className: "w-4 h-4 ml-2"
                })]
              })]
            }, solution.title))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-white/5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h2, {
            className: "text-4xl font-bold text-center text-white mb-16",
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
            viewport: {
              once: true
            },
            children: "Why Choose Our Energy Solutions?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              className: "text-center",
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
              viewport: {
                once: true
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4",
                children: feature.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: feature.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-300 text-sm",
                children: feature.description
              })]
            }, feature.title))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h2, {
            className: "text-4xl font-bold text-white mb-6",
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
            viewport: {
              once: true
            },
            children: "Ready to Transform Energy?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {
            className: "text-xl text-gray-300 mb-8",
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
              delay: 0.2
            },
            viewport: {
              once: true
            },
            children: "Join the energy revolution with our AI-powered solutions. Increase efficiency, improve reliability, and drive sustainability with intelligent energy technology."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
              delay: 0.4
            },
            viewport: {
              once: true
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: "/contact",
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105",
              children: ["Get Started Today ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {
                className: "w-5 h-5 ml-2"
              })]
            })
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnergySolutionsPage);

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 741387:
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
/* harmony import */ var private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(560513);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/solutions/energy",
        pathname: "/solutions/energy",
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
    userland: private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/solutions/energy",
    config,
    userland: private_next_pages_solutions_energy_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(741387)));
module.exports = __webpack_exports__;

})();