"use strict";
(() => {
var exports = {};
exports.id = 134419;
exports.ids = [134419,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 381545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7887);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_2025_innovative_ai_autonomous_ecosystem_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649497);
/* harmony import */ var _data_2025_emerging_tech_breakthroughs_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(774092);
/* harmony import */ var _data_2025_innovative_it_infrastructure_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(809858);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





// Import our new innovative services




var InnovativeServicesShowcase2025V2 = () => {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [hoveredService, setHoveredService] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [selectedService, setSelectedService] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // Combine all innovative services
  var allInnovativeServices = [..._data_2025_innovative_ai_autonomous_ecosystem_v2__WEBPACK_IMPORTED_MODULE_2__.innovative2025AIAutonomousEcosystemV2, ..._data_2025_emerging_tech_breakthroughs_v4__WEBPACK_IMPORTED_MODULE_3__.emergingTechBreakthroughs2025V4, ..._data_2025_innovative_it_infrastructure_v2__WEBPACK_IMPORTED_MODULE_4__.innovative2025ITInfrastructureV2];

  // Filter services by category and search
  var getFilteredServices = () => {
    var filtered = allInnovativeServices;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()) || service.type.toLowerCase().includes(selectedCategory.toLowerCase()));
    }
    if (searchTerm) {
      filtered = filtered.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return filtered;
  };
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Sparkles,
    color: 'from-purple-500 to-pink-500',
    count: allInnovativeServices.length
  }, {
    id: 'ai',
    name: 'AI & Autonomous',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Brain,
    color: 'from-cyan-500 to-blue-500',
    count: _data_2025_innovative_ai_autonomous_ecosystem_v2__WEBPACK_IMPORTED_MODULE_2__.innovative2025AIAutonomousEcosystemV2.length
  }, {
    id: 'quantum',
    name: 'Quantum & Emerging',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Atom,
    color: 'from-blue-500 to-indigo-500',
    count: _data_2025_emerging_tech_breakthroughs_v4__WEBPACK_IMPORTED_MODULE_3__.emergingTechBreakthroughs2025V4.length
  }, {
    id: 'it',
    name: 'IT Infrastructure',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Cpu,
    color: 'from-emerald-500 to-teal-500',
    count: _data_2025_innovative_it_infrastructure_v2__WEBPACK_IMPORTED_MODULE_4__.innovative2025ITInfrastructureV2.length
  }];
  var stats = [{
    number: "".concat(allInnovativeServices.length, "+"),
    label: "Innovative Services",
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Star
  }, {
    number: "99.99%",
    label: "Uptime Guarantee",
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.TrendingUp
  }, {
    number: "24/7",
    label: "AI Intelligence Available",
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Brain
  }, {
    number: "300+",
    label: "Countries Served",
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Globe
  }];
  var fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  var staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "relative py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
            className: "text-5xl md:text-7xl font-bold mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
              children: "2025 Innovative Services"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-white",
              children: "Showcase V2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
            children: "Discover our revolutionary micro SAAS services, IT solutions, and AI platforms that are shaping the future of technology"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          variants: staggerContainer,
          initial: "initial",
          animate: "animate",
          className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12",
          children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            variants: fadeInUp,
            className: "text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "flex justify-center mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(stat.icon, {
                className: "w-8 h-8 text-cyan-400"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "text-3xl font-bold text-cyan-400 mb-2",
              children: stat.number
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "text-gray-300 text-sm",
              children: stat.label
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.2
          },
          className: "mb-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "max-w-4xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-col md:flex-row gap-4 mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex-1 relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Search, {
                  className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  type: "text",
                  placeholder: "Search innovative services...",
                  value: searchTerm,
                  onChange: e => setSearchTerm(e.target.value),
                  className: "w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onClick: () => setViewMode('grid'),
                  className: "p-3 rounded-xl transition-all duration-200 ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                    className: "w-5 h-5"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onClick: () => setViewMode('list'),
                  className: "p-3 rounded-xl transition-all duration-200 ".concat(viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.List, {
                    className: "w-5 h-5"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "flex flex-wrap justify-center gap-3",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                onClick: () => setSelectedCategory(category.id),
                className: "px-6 py-3 rounded-xl font-medium transition-all duration-200 ".concat(selectedCategory === category.id ? "bg-gradient-to-r ".concat(category.color, " text-white shadow-lg") : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(category.icon, {
                    className: "w-4 h-4"
                  }), category.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "text-xs bg-gray-700/50 px-2 py-1 rounded-full",
                    children: category.count
                  })]
                })
              }, category.id))
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-16 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          variants: staggerContainer,
          initial: "initial",
          animate: "animate",
          className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6',
          children: getFilteredServices().map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            variants: fadeInUp,
            className: "group relative ".concat(viewMode === 'grid' ? 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105' : 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300'),
            onMouseEnter: () => setHoveredService(service.id),
            onMouseLeave: () => setHoveredService(null),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                    className: "text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200",
                    children: service.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "text-gray-300 text-sm leading-relaxed",
                    children: service.tagline
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "ml-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Brain, {
                      className: "w-6 h-6 text-white"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "text-gray-400 text-sm leading-relaxed mb-4",
                children: service.description
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "bg-gray-800/30 rounded-xl p-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "text-sm font-semibold text-cyan-400 mb-3",
                  children: "Pricing Plans"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "grid grid-cols-2 gap-2 text-xs",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "text-gray-300",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "font-medium",
                      children: "Starter:"
                    }), " ", service.pricing.starter]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "text-gray-300",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "font-medium",
                      children: "Pro:"
                    }), " ", service.pricing.professional]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "text-gray-300",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "font-medium",
                      children: "Enterprise:"
                    }), " ", service.pricing.enterprise]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex items-center justify-between text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Market Size:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-cyan-400 font-semibold",
                  children: service.marketSize
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex items-center justify-between text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Category:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-blue-400 font-medium",
                  children: service.category
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mt-6 flex gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                onClick: () => setSelectedService(service),
                className: "flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Eye, {
                  className: "w-4 h-4 inline mr-2"
                }), "View Details"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: service.slug,
                className: "px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-xl font-medium hover:bg-cyan-500/10 transition-all duration-200",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ExternalLink, {
                  className: "w-4 h-4"
                })
              })]
            }), hoveredService === service.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              className: "absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl pointer-events-none"
            })]
          }, service.id))
        }), getFilteredServices().length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          className: "text-center py-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "text-gray-400 text-xl mb-4",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-gray-500",
            children: "Try adjusting your search or filter criteria"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
      children: selectedService && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: () => setSelectedService(null),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          initial: {
            scale: 0.9,
            opacity: 0
          },
          animate: {
            scale: 1,
            opacity: 1
          },
          exit: {
            scale: 0.9,
            opacity: 0
          },
          className: "bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",
          onClick: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "p-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-start justify-between mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                  className: "text-3xl font-bold text-white mb-2",
                  children: selectedService.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-xl text-cyan-400 mb-4",
                  children: selectedService.tagline
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-gray-300 leading-relaxed",
                  children: selectedService.description
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                onClick: () => setSelectedService(null),
                className: "ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.X, {
                  className: "w-6 h-6"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "text-xl font-semibold text-white mb-4",
                  children: "Key Features"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
                  className: "space-y-2",
                  children: selectedService.features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
                    className: "flex items-start gap-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.CheckCircle, {
                      className: "w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "text-gray-300",
                      children: feature
                    })]
                  }, index))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "text-xl font-semibold text-white mb-4",
                  children: "Benefits"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
                  className: "space-y-2",
                  children: selectedService.benefits.map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
                    className: "flex items-start gap-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Star, {
                      className: "w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "text-gray-300",
                      children: benefit
                    })]
                  }, index))
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mt-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-4",
                children: "Use Cases"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                children: selectedService.useCases.map((useCase, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "bg-gray-800/50 rounded-lg px-3 py-2 text-center text-sm text-gray-300",
                  children: useCase
                }, index))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-4",
                children: "Get Started Today"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "text-cyan-400 font-medium",
                    children: "Email:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-gray-300",
                    children: selectedService.contact
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "text-cyan-400 font-medium",
                    children: "Phone:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-gray-300",
                    children: selectedService.mobile
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "text-cyan-400 font-medium",
                    children: "Website:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-gray-300",
                    children: selectedService.website
                  })]
                })]
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "max-w-4xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: true
          },
          transition: {
            duration: 0.8
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8 leading-relaxed",
            children: "Join thousands of organizations already leveraging our innovative AI, quantum, and IT infrastructure solutions"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/contact",
              className: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg",
              children: "Get Started Today"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/services",
              className: "border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200",
              children: "Explore All Services"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnovativeServicesShowcase2025V2);

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 649497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2025AIAutonomousEcosystemV2: () => (/* binding */ innovative2025AIAutonomousEcosystemV2)
/* harmony export */ });
var innovative2025AIAutonomousEcosystemV2 = [
// AI Autonomous Content Factory Pro
{
  id: 'ai-autonomous-content-factory-pro-2025',
  name: 'AI Autonomous Content Factory Pro 2025',
  tagline: 'Revolutionary autonomous AI content creation and management platform',
  description: 'Next-generation content factory that autonomously generates, optimizes, and distributes content across all channels with human-like creativity and strategic thinking.',
  category: 'AI & Content Automation',
  type: 'Micro SAAS',
  pricing: {
    starter: '$299/month',
    professional: '$799/month',
    enterprise: '$1,999/month',
    custom: 'Contact for pricing'
  },
  features: ['Autonomous content ideation and planning', 'AI-powered creative writing and storytelling', 'Multi-format content generation (text, video, audio)', 'Autonomous SEO optimization and keyword research', 'Content performance analytics and optimization', 'Cross-platform content distribution automation', 'Brand voice consistency maintenance', 'Real-time content trend analysis', 'Automated content calendar management', 'AI-powered content repurposing', 'Multilingual content generation', 'Content compliance and governance'],
  benefits: ['Increase content production by 500%', 'Reduce content creation costs by 80%', 'Improve content engagement by 300%', '24/7 autonomous content operations', 'Consistent brand messaging across channels', 'Data-driven content optimization', 'Scalable content operations', 'Future-proof AI technology'],
  useCases: ['Marketing agencies', 'Content creators', 'E-commerce businesses', 'Publishing companies', 'Social media managers', 'Brand managers', 'Digital marketers', 'Content strategists'],
  marketSize: '$45.2B by 2025',
  targetAudience: 'Marketing agencies, content creators, e-commerce businesses, publishing companies, social media managers',
  competitiveAdvantage: 'First fully autonomous AI content factory with strategic content planning and optimization',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/ai-autonomous-content-factory-pro-2025'
},
// AI Autonomous Customer Intelligence Platform
{
  id: 'ai-autonomous-customer-intelligence-platform-2025',
  name: 'AI Autonomous Customer Intelligence Platform 2025',
  tagline: 'Revolutionary autonomous AI customer intelligence and behavior prediction',
  description: 'Advanced customer intelligence platform that autonomously analyzes customer behavior, predicts needs, and optimizes customer experience across all touchpoints.',
  category: 'AI & Customer Intelligence',
  type: 'Micro SAAS',
  pricing: {
    starter: '$399/month',
    professional: '$999/month',
    enterprise: '$2,499/month',
    custom: 'Contact for pricing'
  },
  features: ['Autonomous customer behavior analysis', 'AI-powered customer journey mapping', 'Predictive customer needs forecasting', 'Real-time customer sentiment analysis', 'Autonomous customer segmentation', 'Personalized recommendation engine', 'Customer lifetime value prediction', 'Churn prediction and prevention', 'Cross-channel customer experience optimization', 'Automated customer feedback analysis', 'Customer success automation', 'Revenue optimization insights'],
  benefits: ['Increase customer retention by 60%', 'Improve customer satisfaction by 85%', 'Boost customer lifetime value by 120%', 'Reduce customer acquisition costs by 40%', '24/7 autonomous customer intelligence', 'Predictive customer insights', 'Personalized customer experiences', 'Data-driven customer strategies'],
  useCases: ['E-commerce businesses', 'SaaS companies', 'Retail chains', 'Financial services', 'Healthcare providers', 'Telecommunications', 'Hospitality industry', 'Subscription services'],
  marketSize: '$38.7B by 2025',
  targetAudience: 'E-commerce businesses, SaaS companies, retail chains, financial services, healthcare providers',
  competitiveAdvantage: 'First autonomous AI customer intelligence platform with predictive behavior analysis',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/ai-autonomous-customer-intelligence-platform-2025'
},
// AI Autonomous Sales Intelligence Suite
{
  id: 'ai-autonomous-sales-intelligence-suite-2025',
  name: 'AI Autonomous Sales Intelligence Suite 2025',
  tagline: 'Revolutionary autonomous AI sales intelligence and optimization platform',
  description: 'Comprehensive sales intelligence platform that autonomously identifies opportunities, optimizes sales processes, and maximizes revenue through AI-powered insights.',
  category: 'AI & Sales Intelligence',
  type: 'Micro SAAS',
  pricing: {
    starter: '$499/month',
    professional: '$1,299/month',
    enterprise: '$3,299/month',
    custom: 'Contact for pricing'
  },
  features: ['Autonomous lead scoring and qualification', 'AI-powered sales opportunity identification', 'Predictive sales forecasting', 'Real-time sales performance analytics', 'Autonomous sales process optimization', 'Customer buying intent prediction', 'Sales pipeline optimization', 'Revenue forecasting and planning', 'Cross-selling and upselling automation', 'Sales team performance optimization', 'Competitive intelligence automation', 'Sales strategy recommendations'],
  benefits: ['Increase sales conversion by 75%', 'Improve sales productivity by 120%', 'Boost revenue by 90%', 'Reduce sales cycle time by 50%', '24/7 autonomous sales intelligence', 'Predictive sales insights', 'Optimized sales processes', 'Data-driven sales strategies'],
  useCases: ['B2B sales teams', 'Enterprise sales organizations', 'SaaS companies', 'Financial services', 'Manufacturing companies', 'Consulting firms', 'Real estate agencies', 'Insurance companies'],
  marketSize: '$42.1B by 2025',
  targetAudience: 'B2B sales teams, enterprise sales organizations, SaaS companies, financial services, manufacturing companies',
  competitiveAdvantage: 'First autonomous AI sales intelligence suite with predictive opportunity identification',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/ai-autonomous-sales-intelligence-suite-2025'
},
// AI Autonomous Financial Intelligence Platform
{
  id: 'ai-autonomous-financial-intelligence-platform-2025',
  name: 'AI Autonomous Financial Intelligence Platform 2025',
  tagline: 'Revolutionary autonomous AI financial intelligence and risk management',
  description: 'Advanced financial intelligence platform that autonomously analyzes market trends, manages risk, and optimizes investment strategies through AI-powered insights.',
  category: 'AI & Financial Intelligence',
  type: 'Micro SAAS',
  pricing: {
    starter: '$599/month',
    professional: '$1,599/month',
    enterprise: '$3,999/month',
    custom: 'Contact for pricing'
  },
  features: ['Autonomous market trend analysis', 'AI-powered risk assessment and management', 'Predictive financial modeling', 'Real-time portfolio optimization', 'Autonomous investment strategy generation', 'Financial fraud detection', 'Regulatory compliance automation', 'Cash flow optimization', 'Credit risk assessment', 'Financial performance analytics', 'Budget optimization', 'Financial planning automation'],
  benefits: ['Increase investment returns by 45%', 'Reduce financial risk by 70%', 'Improve financial planning accuracy by 85%', 'Optimize cash flow by 60%', '24/7 autonomous financial intelligence', 'Predictive financial insights', 'Automated risk management', 'Data-driven financial decisions'],
  useCases: ['Investment firms', 'Banks and financial institutions', 'Hedge funds', 'Insurance companies', 'Corporate finance teams', 'Wealth management firms', 'Fintech companies', 'Accounting firms'],
  marketSize: '$67.3B by 2025',
  targetAudience: 'Investment firms, banks and financial institutions, hedge funds, insurance companies, corporate finance teams',
  competitiveAdvantage: 'First autonomous AI financial intelligence platform with predictive risk management',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/ai-autonomous-financial-intelligence-platform-2025'
},
// AI Autonomous Supply Chain Optimization Platform
{
  id: 'ai-autonomous-supply-chain-optimization-platform-2025',
  name: 'AI Autonomous Supply Chain Optimization Platform 2025',
  tagline: 'Revolutionary autonomous AI supply chain optimization and management',
  description: 'Comprehensive supply chain optimization platform that autonomously analyzes, predicts, and optimizes supply chain operations through AI-powered intelligence.',
  category: 'AI & Supply Chain',
  type: 'Micro SAAS',
  pricing: {
    starter: '$399/month',
    professional: '$999/month',
    enterprise: '$2,499/month',
    custom: 'Contact for pricing'
  },
  features: ['Autonomous demand forecasting', 'AI-powered inventory optimization', 'Predictive supply chain analytics', 'Real-time logistics optimization', 'Autonomous supplier management', 'Risk assessment and mitigation', 'Cost optimization automation', 'Quality control automation', 'Sustainability optimization', 'Supply chain visibility', 'Performance monitoring', 'Continuous improvement automation'],
  benefits: ['Reduce supply chain costs by 35%', 'Improve inventory accuracy by 90%', 'Increase supply chain efficiency by 60%', 'Reduce lead times by 45%', '24/7 autonomous optimization', 'Predictive supply chain insights', 'Automated risk management', 'Data-driven optimization'],
  useCases: ['Manufacturing companies', 'Retail chains', 'E-commerce businesses', 'Logistics companies', 'Distribution centers', 'Food and beverage companies', 'Pharmaceutical companies', 'Automotive manufacturers'],
  marketSize: '$52.8B by 2025',
  targetAudience: 'Manufacturing companies, retail chains, e-commerce businesses, logistics companies, distribution centers',
  competitiveAdvantage: 'First autonomous AI supply chain optimization platform with predictive analytics',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/ai-autonomous-supply-chain-optimization-platform-2025'
}];

/***/ }),

/***/ 774092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emergingTechBreakthroughs2025V4: () => (/* binding */ emergingTechBreakthroughs2025V4)
/* harmony export */ });
var emergingTechBreakthroughs2025V4 = [
// Quantum AI Neural Network Fusion Platform
{
  id: 'quantum-ai-neural-network-fusion-platform-2025',
  name: 'Quantum AI Neural Network Fusion Platform 2025',
  tagline: 'Revolutionary quantum-AI fusion platform for next-generation computing',
  description: 'Breakthrough platform that combines quantum computing with AI neural networks to solve complex problems that are impossible for classical computers.',
  category: 'Quantum AI & Computing',
  type: 'Micro SAAS',
  pricing: {
    starter: '$1,299/month',
    professional: '$3,299/month',
    enterprise: '$7,999/month',
    custom: 'Contact for pricing'
  },
  features: ['Quantum-AI hybrid computing', 'Quantum neural network training', 'Quantum machine learning algorithms', 'Quantum optimization solvers', 'Quantum cryptography integration', 'Quantum error correction', 'Hybrid classical-quantum workflows', 'Quantum simulation capabilities', 'Quantum data processing', 'Quantum algorithm optimization', 'Quantum cloud infrastructure', 'Quantum security protocols'],
  benefits: ['Solve complex problems 1000x faster', 'Breakthrough in AI capabilities', 'Quantum advantage in optimization', 'Future-proof quantum technology', '24/7 quantum computing access', 'Hybrid classical-quantum solutions', 'Quantum security integration', 'Scalable quantum infrastructure'],
  useCases: ['Pharmaceutical research', 'Financial modeling', 'Climate modeling', 'AI research institutions', 'Government agencies', 'Research universities', 'Technology companies', 'Defense contractors'],
  marketSize: '$89.4B by 2025',
  targetAudience: 'Pharmaceutical research, financial modeling, climate modeling, AI research institutions, government agencies',
  competitiveAdvantage: 'First quantum-AI fusion platform with hybrid classical-quantum workflows',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/quantum-ai-neural-network-fusion-platform-2025'
},
// Brain-Computer Interface Development Platform
{
  id: 'brain-computer-interface-development-platform-2025',
  name: 'Brain-Computer Interface Development Platform 2025',
  tagline: 'Revolutionary brain-computer interface development and testing platform',
  description: 'Advanced platform for developing, testing, and deploying brain-computer interfaces that enable direct communication between the human brain and computers.',
  category: 'Neurotechnology & BCI',
  type: 'Micro SAAS',
  pricing: {
    starter: '$899/month',
    professional: '$2,299/month',
    enterprise: '$5,999/month',
    custom: 'Contact for pricing'
  },
  features: ['BCI signal processing algorithms', 'Neural data visualization tools', 'Brain activity pattern recognition', 'Real-time neural feedback systems', 'BCI calibration and training', 'Neural interface optimization', 'Brain-computer communication protocols', 'Neural data security', 'BCI performance analytics', 'Multi-modal BCI support', 'Neural signal amplification', 'BCI device integration'],
  benefits: ['Enable direct brain-computer communication', 'Revolutionize human-computer interaction', 'Advance neurotechnology research', 'Improve accessibility for disabled users', '24/7 BCI development support', 'Real-time neural data processing', 'Secure neural communication', 'Scalable BCI infrastructure'],
  useCases: ['Medical research institutions', 'Neuroscience laboratories', 'Assistive technology companies', 'Gaming companies', 'Virtual reality developers', 'Healthcare providers', 'Research universities', 'Technology companies'],
  marketSize: '$23.7B by 2025',
  targetAudience: 'Medical research institutions, neuroscience laboratories, assistive technology companies, gaming companies, virtual reality developers',
  competitiveAdvantage: 'First comprehensive BCI development platform with real-time neural processing',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/brain-computer-interface-development-platform-2025'
},
// Space Resource Intelligence Platform
{
  id: 'space-resource-intelligence-platform-2025',
  name: 'Space Resource Intelligence Platform 2025',
  tagline: 'Revolutionary space resource discovery and mining intelligence platform',
  description: 'Advanced platform that uses AI and satellite technology to identify, analyze, and optimize space resource extraction and utilization.',
  category: 'Space Technology & Resources',
  type: 'Micro SAAS',
  pricing: {
    starter: '$799/month',
    professional: '$1,999/month',
    enterprise: '$4,999/month',
    custom: 'Contact for pricing'
  },
  features: ['Satellite resource mapping', 'AI-powered resource identification', 'Space mining optimization', 'Resource extraction planning', 'Space logistics optimization', 'Resource value assessment', 'Space infrastructure planning', 'Environmental impact analysis', 'Regulatory compliance tracking', 'Space resource analytics', 'Mining automation systems', 'Resource transportation optimization'],
  benefits: ['Identify valuable space resources', 'Optimize space mining operations', 'Reduce space exploration costs', 'Enable sustainable space development', '24/7 space resource monitoring', 'AI-powered resource intelligence', 'Automated mining optimization', 'Data-driven space planning'],
  useCases: ['Space mining companies', 'Space agencies', 'Satellite companies', 'Aerospace companies', 'Research institutions', 'Government agencies', 'Private space companies', 'Resource exploration firms'],
  marketSize: '$34.2B by 2025',
  targetAudience: 'Space mining companies, space agencies, satellite companies, aerospace companies, research institutions',
  competitiveAdvantage: 'First AI-powered space resource intelligence platform with automated mining optimization',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/space-resource-intelligence-platform-2025'
},
// Metaverse AI Development Studio Pro
{
  id: 'metaverse-ai-development-studio-pro-2025',
  name: 'Metaverse AI Development Studio Pro 2025',
  tagline: 'Revolutionary AI-powered metaverse development and creation platform',
  description: 'Comprehensive platform for developing AI-powered metaverse experiences, virtual worlds, and digital reality applications with advanced AI capabilities.',
  category: 'Metaverse & AI Development',
  type: 'Micro SAAS',
  pricing: {
    starter: '$599/month',
    professional: '$1,499/month',
    enterprise: '$3,999/month',
    custom: 'Contact for pricing'
  },
  features: ['AI-powered 3D world generation', 'Virtual character AI development', 'Metaverse physics simulation', 'AI-driven storytelling engines', 'Virtual economy management', 'Social AI interactions', 'Metaverse analytics platform', 'Cross-platform compatibility', 'AI content moderation', 'Virtual asset management', 'Metaverse security systems', 'AI-powered user experience optimization'],
  benefits: ['Create immersive metaverse experiences', 'Reduce development time by 70%', 'Enable AI-powered interactions', 'Scale virtual worlds infinitely', '24/7 metaverse development support', 'AI-powered content creation', 'Automated world generation', 'Data-driven user experiences'],
  useCases: ['Gaming companies', 'Virtual reality developers', 'Social media platforms', 'Educational institutions', 'Entertainment companies', 'Real estate companies', 'Event organizers', 'Brand marketing agencies'],
  marketSize: '$74.8B by 2025',
  targetAudience: 'Gaming companies, virtual reality developers, social media platforms, educational institutions, entertainment companies',
  competitiveAdvantage: 'First AI-powered metaverse development studio with automated world generation',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/metaverse-ai-development-studio-pro-2025'
},
// Quantum Cybersecurity Intelligence Platform
{
  id: 'quantum-cybersecurity-intelligence-platform-2025',
  name: 'Quantum Cybersecurity Intelligence Platform 2025',
  tagline: 'Revolutionary quantum-resistant cybersecurity with AI intelligence',
  description: 'Advanced cybersecurity platform that combines quantum-resistant encryption with AI-powered threat detection and prevention for next-generation security.',
  category: 'Quantum Cybersecurity',
  type: 'Micro SAAS',
  pricing: {
    starter: '$699/month',
    professional: '$1,799/month',
    enterprise: '$4,499/month',
    custom: 'Contact for pricing'
  },
  features: ['Quantum-resistant encryption', 'AI-powered threat detection', 'Quantum key distribution', 'Advanced threat intelligence', 'Zero-trust security architecture', 'Quantum-safe authentication', 'Real-time security monitoring', 'Automated incident response', 'Quantum cryptography tools', 'Security analytics platform', 'Compliance automation', 'Quantum security testing'],
  benefits: ['Future-proof quantum security', 'Detect threats 100x faster', 'Reduce security breaches by 95%', 'Automated security operations', '24/7 quantum security monitoring', 'AI-powered threat intelligence', 'Quantum-resistant encryption', 'Zero-trust architecture'],
  useCases: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Technology companies', 'Critical infrastructure', 'Defense contractors', 'Cloud service providers', 'Enterprise organizations'],
  marketSize: '$56.3B by 2025',
  targetAudience: 'Financial institutions, healthcare organizations, government agencies, technology companies, critical infrastructure',
  competitiveAdvantage: 'First quantum-resistant cybersecurity platform with AI-powered threat intelligence',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/quantum-cybersecurity-intelligence-platform-2025'
}];

/***/ }),

/***/ 809858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2025ITInfrastructureV2: () => (/* binding */ innovative2025ITInfrastructureV2)
/* harmony export */ });
var innovative2025ITInfrastructureV2 = [
// Autonomous DevOps Intelligence Platform
{
  id: 'autonomous-devops-intelligence-platform-2025',
  name: 'Autonomous DevOps Intelligence Platform 2025',
  tagline: 'Revolutionary autonomous AI-powered DevOps optimization and automation',
  description: 'Advanced DevOps platform that autonomously optimizes development workflows, deployment processes, and infrastructure management through AI-powered intelligence.',
  category: 'DevOps & Automation',
  type: 'IT Infrastructure',
  pricing: {
    starter: '$399/month',
    professional: '$999/month',
    enterprise: '$2,499/month',
    custom: 'Contact for pricing'
  },
  features: ['Autonomous CI/CD optimization', 'AI-powered deployment strategies', 'Intelligent infrastructure scaling', 'Automated performance monitoring', 'Self-healing infrastructure', 'Predictive failure detection', 'Autonomous resource optimization', 'Intelligent load balancing', 'Automated security patching', 'DevOps analytics and insights', 'Cross-platform deployment automation', 'Intelligent rollback strategies'],
  benefits: ['Reduce deployment time by 80%', 'Improve system reliability by 95%', 'Automate 90% of DevOps tasks', 'Reduce infrastructure costs by 40%', '24/7 autonomous DevOps operations', 'Predictive infrastructure management', 'Automated performance optimization', 'Data-driven DevOps decisions'],
  useCases: ['Software development teams', 'DevOps engineers', 'Platform engineering teams', 'Cloud infrastructure teams', 'Site reliability engineers', 'Development operations teams', 'Infrastructure automation teams', 'Cloud platform teams'],
  marketSize: '$38.9B by 2025',
  targetAudience: 'Software development teams, DevOps engineers, platform engineering teams, cloud infrastructure teams, site reliability engineers',
  competitiveAdvantage: 'First autonomous DevOps intelligence platform with predictive infrastructure management',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/autonomous-devops-intelligence-platform-2025'
},
// Edge Computing Orchestration Platform
{
  id: 'edge-computing-orchestration-platform-2025',
  name: 'Edge Computing Orchestration Platform 2025',
  tagline: 'Revolutionary edge computing orchestration and optimization platform',
  description: 'Comprehensive platform for orchestrating, optimizing, and managing edge computing infrastructure across distributed locations with AI-powered intelligence.',
  category: 'Edge Computing & IoT',
  type: 'IT Infrastructure',
  pricing: {
    starter: '$299/month',
    professional: '$799/month',
    enterprise: '$1,999/month',
    custom: 'Contact for pricing'
  },
  features: ['Distributed edge orchestration', 'AI-powered edge optimization', 'Real-time edge analytics', 'Edge security management', 'Autonomous edge scaling', 'Edge performance monitoring', 'Multi-cloud edge integration', 'Edge workload optimization', 'Edge data synchronization', 'Edge device management', 'Edge network optimization', 'Edge compliance automation'],
  benefits: ['Reduce latency by 90%', 'Improve edge performance by 200%', 'Optimize edge costs by 50%', 'Enable real-time edge processing', '24/7 autonomous edge management', 'AI-powered edge optimization', 'Automated edge scaling', 'Data-driven edge decisions'],
  useCases: ['IoT device manufacturers', 'Edge computing providers', 'Telecommunications companies', 'Smart city initiatives', 'Industrial IoT companies', 'Retail technology providers', 'Healthcare technology companies', 'Automotive technology companies'],
  marketSize: '$43.6B by 2025',
  targetAudience: 'IoT device manufacturers, edge computing providers, telecommunications companies, smart city initiatives, industrial IoT companies',
  competitiveAdvantage: 'First AI-powered edge computing orchestration platform with autonomous optimization',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/edge-computing-orchestration-platform-2025'
},
// Multi-Cloud Management Intelligence Platform
{
  id: 'multi-cloud-management-intelligence-platform-2025',
  name: 'Multi-Cloud Management Intelligence Platform 2025',
  tagline: 'Revolutionary AI-powered multi-cloud management and optimization',
  description: 'Advanced platform that intelligently manages, optimizes, and orchestrates workloads across multiple cloud providers with AI-powered automation.',
  category: 'Multi-Cloud & Hybrid Cloud',
  type: 'IT Infrastructure',
  pricing: {
    starter: '$499/month',
    professional: '$1,299/month',
    enterprise: '$3,299/month',
    custom: 'Contact for pricing'
  },
  features: ['Multi-cloud workload orchestration', 'AI-powered cost optimization', 'Cross-cloud security management', 'Intelligent workload placement', 'Multi-cloud performance monitoring', 'Automated cloud migration', 'Cloud vendor optimization', 'Multi-cloud compliance automation', 'Intelligent resource allocation', 'Cross-cloud data management', 'Multi-cloud disaster recovery', 'Cloud cost analytics'],
  benefits: ['Reduce cloud costs by 35%', 'Improve multi-cloud performance by 60%', 'Automate 80% of cloud management tasks', 'Optimize workload placement automatically', '24/7 autonomous cloud management', 'AI-powered cost optimization', 'Automated cloud operations', 'Data-driven cloud decisions'],
  useCases: ['Enterprise IT organizations', 'Cloud architects', 'DevOps teams', 'Platform engineering teams', 'Cloud infrastructure teams', 'IT operations teams', 'Cloud migration teams', 'Multi-cloud strategy teams'],
  marketSize: '$51.2B by 2025',
  targetAudience: 'Enterprise IT organizations, cloud architects, DevOps teams, platform engineering teams, cloud infrastructure teams',
  competitiveAdvantage: 'First AI-powered multi-cloud management platform with intelligent workload orchestration',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/multi-cloud-management-intelligence-platform-2025'
},
// Zero-Trust Network Architecture Platform
{
  id: 'zero-trust-network-architecture-platform-2025',
  name: 'Zero-Trust Network Architecture Platform 2025',
  tagline: 'Revolutionary zero-trust security architecture with AI intelligence',
  description: 'Comprehensive zero-trust security platform that implements advanced security policies, continuous monitoring, and AI-powered threat detection.',
  category: 'Network Security & Zero-Trust',
  type: 'IT Infrastructure',
  pricing: {
    starter: '$599/month',
    professional: '$1,499/month',
    enterprise: '$3,999/month',
    custom: 'Contact for pricing'
  },
  features: ['Zero-trust policy enforcement', 'AI-powered threat detection', 'Continuous identity verification', 'Micro-segmentation automation', 'Real-time security monitoring', 'Automated incident response', 'Zero-trust compliance automation', 'Identity and access management', 'Network traffic analysis', 'Security policy automation', 'Threat intelligence integration', 'Zero-trust analytics'],
  benefits: ['Reduce security breaches by 95%', 'Improve security compliance by 90%', 'Automate 85% of security tasks', 'Enable secure remote access', '24/7 autonomous security monitoring', 'AI-powered threat detection', 'Automated security response', 'Data-driven security decisions'],
  useCases: ['Enterprise organizations', 'Financial institutions', 'Healthcare organizations', 'Government agencies', 'Technology companies', 'Critical infrastructure', 'Remote work organizations', 'Cloud-first companies'],
  marketSize: '$45.7B by 2025',
  targetAudience: 'Enterprise organizations, financial institutions, healthcare organizations, government agencies, technology companies',
  competitiveAdvantage: 'First AI-powered zero-trust platform with autonomous security operations',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/zero-trust-network-architecture-platform-2025'
},
// Autonomous IT Operations Center
{
  id: 'autonomous-it-operations-center-2025',
  name: 'Autonomous IT Operations Center 2025',
  tagline: 'Revolutionary autonomous AI-powered IT operations and management',
  description: 'Advanced IT operations platform that autonomously manages, monitors, and optimizes IT infrastructure and services through AI-powered intelligence.',
  category: 'IT Operations & Management',
  type: 'IT Infrastructure',
  pricing: {
    starter: '$699/month',
    professional: '$1,799/month',
    enterprise: '$4,499/month',
    custom: 'Contact for pricing'
  },
  features: ['Autonomous IT monitoring', 'AI-powered incident management', 'Intelligent service desk automation', 'Predictive maintenance', 'Automated problem resolution', 'IT performance optimization', 'Service level management', 'IT asset management', 'Change management automation', 'IT compliance automation', 'IT analytics and reporting', 'Continuous improvement automation'],
  benefits: ['Reduce IT downtime by 90%', 'Improve IT efficiency by 120%', 'Automate 80% of IT operations', 'Reduce IT costs by 40%', '24/7 autonomous IT operations', 'AI-powered incident management', 'Automated problem resolution', 'Data-driven IT decisions'],
  useCases: ['Enterprise IT organizations', 'IT operations teams', 'Service desk teams', 'IT infrastructure teams', 'IT support teams', 'IT management teams', 'IT compliance teams', 'IT strategy teams'],
  marketSize: '$48.3B by 2025',
  targetAudience: 'Enterprise IT organizations, IT operations teams, service desk teams, IT infrastructure teams, IT support teams',
  competitiveAdvantage: 'First autonomous IT operations center with AI-powered incident management',
  contact: 'kleber@ziontechgroup.com',
  mobile: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  slug: '/autonomous-it-operations-center-2025'
}];

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 898451:
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
/* harmony import */ var private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(381545);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2025-innovative-services-showcase-v2",
        pathname: "/2025-innovative-services-showcase-v2",
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
    userland: private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2025-innovative-services-showcase-v2",
    config,
    userland: private_next_pages_2025_innovative_services_showcase_v2_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(898451)));
module.exports = __webpack_exports__;

})();