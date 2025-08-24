"use strict";
(() => {
var exports = {};
exports.id = 182939;
exports.ids = [182939,890636];
exports.modules = {

/***/ 310625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323695);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







var InnovativeServicesShowcase2026 = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.length
  }, {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'micro-saas').length
  }, {
    id: 'ai-services',
    name: 'AI Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Brain, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'ai-services').length
  }, {
    id: 'it-solutions',
    name: 'IT Solutions',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'it-solutions').length
  }, {
    id: 'quantum-tech',
    name: 'Quantum Tech',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Atom, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'quantum-tech').length
  }, {
    id: 'space-tech',
    name: 'Space Tech',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'space-tech').length
  }, {
    id: 'fintech',
    name: 'Fintech',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.DollarSign, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'fintech').length
  }, {
    id: 'healthtech',
    name: 'Healthtech',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'healthtech').length
  }, {
    id: 'edutech',
    name: 'Edutech',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.BookOpen, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'edutech').length
  }];
  var filteredServices = _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Innovative Services Showcase 2026 | Zion Tech Group",
      description: "Discover our revolutionary 2026 technology solutions including AI services, quantum computing, space technology, and innovative micro SAAS platforms.",
      keywords: "AI services, quantum computing, space technology, micro SAAS, fintech, healthtech, edutech, Zion Tech Group"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      className: "relative z-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
        className: "py-20 px-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Sparkles, {
                className: "w-4 h-4 mr-2"
              }), "Revolutionary 2026 Services"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
              className: "text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
              children: "Innovative Services Showcase"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
              children: "Explore our comprehensive portfolio of cutting-edge technology solutions designed to transform businesses and drive innovation across industries."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
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
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12",
            children: [{
              label: 'Total Services',
              value: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.length,
              color: 'text-cyan-400'
            }, {
              label: 'Categories',
              value: categories.length - 1,
              color: 'text-blue-400'
            }, {
              label: 'AI Services',
              value: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'ai-services').length,
              color: 'text-purple-400'
            }, {
              label: 'Micro SAAS',
              value: _data_innovative_2025_2026_services__WEBPACK_IMPORTED_MODULE_3__.innovative2025Services.filter(s => s.category === 'micro-saas').length,
              color: 'text-green-400'
            }].map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-3xl font-bold ".concat(stat.color, " mb-2"),
                children: stat.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: stat.label
              })]
            }, stat.label))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
        className: "py-8 px-4 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "max-w-7xl mx-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col lg:flex-row gap-6 items-center justify-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "relative flex-1 max-w-md",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                placeholder: "Search services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                onClick: () => setSelectedCategory(category.id),
                className: "flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ".concat(selectedCategory === category.id ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300' : 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/50'),
                children: [category.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "ml-2",
                  children: category.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs",
                  children: category.count
                })]
              }, category.id))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: () => setViewMode('grid'),
                className: "p-2 rounded-lg transition-all duration-300 ".concat(viewMode === 'grid' ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                  className: "w-5 h-5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: () => setViewMode('list'),
                className: "p-2 rounded-lg transition-all duration-300 ".concat(viewMode === 'list' ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.List, {
                  className: "w-5 h-5"
                })
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
        className: "py-16 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "max-w-7xl mx-auto",
          children: filteredServices.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            className: "text-center py-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-6xl mb-4",
              children: "\uD83D\uDD0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-semibold text-white mb-2",
              children: "No services found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Try adjusting your search or filter criteria"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6',
            children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: index * 0.1
              },
              className: "group ".concat(viewMode === 'grid' ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300' : 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300'),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex ".concat(viewMode === 'list' ? 'items-start gap-6' : 'flex-col items-center text-center'),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "text-4xl mb-4 ".concat(viewMode === 'list' ? 'mb-0' : ''),
                  children: service.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex-1 ".concat(viewMode === 'list' ? 'text-left' : ''),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      className: "text-xl font-bold text-white group-hover:text-cyan-300 transition-colors",
                      children: service.name
                    }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-xs text-yellow-300",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                        className: "w-3 h-3 inline mr-1"
                      }), "Popular"]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "text-gray-300 mb-3 font-medium",
                    children: service.tagline
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "text-gray-400 text-sm leading-relaxed",
                    children: service.description
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "mt-6 ".concat(viewMode === 'list' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : ''),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.DollarSign, {
                      className: "w-4 h-4 text-green-400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-sm font-medium text-gray-300",
                      children: "Pricing"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-2xl font-bold text-green-400",
                    children: ["$", service.price.monthly, "/month"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-sm text-gray-500",
                    children: ["$", service.price.yearly, "/year (save ", Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100), "%)"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-xs text-gray-600 mt-1",
                    children: [service.price.trialDays, "-day free trial \u2022 Setup: ", service.price.setupTime]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                      className: "w-4 h-4 text-cyan-400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-sm font-medium text-gray-300",
                      children: "Key Features"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                    className: "space-y-1",
                    children: service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                      className: "text-sm text-gray-400 flex items-start gap-2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                      }), feature]
                    }, idx))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.TrendingUp, {
                      className: "w-4 h-4 text-purple-400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-sm font-medium text-gray-300",
                      children: "Market Info"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-sm text-gray-400 space-y-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: ["Market Size: ", service.marketSize]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: ["Growth: ", service.growthRate]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: ["Funding: ", service.fundingStatus]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
                      className: "w-4 h-4 text-yellow-400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-sm font-medium text-gray-300",
                      children: "Key Benefits"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                    className: "space-y-1",
                    children: service.benefits.slice(0, 2).map((benefit, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                      className: "text-sm text-gray-400 flex items-start gap-2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"
                      }), benefit]
                    }, idx))
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col sm:flex-row gap-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: service.link,
                  className: "flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center group-hover:scale-105",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "flex items-center justify-center",
                    children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                      className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "flex items-center justify-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Play, {
                      className: "w-4 h-4 mr-2"
                    }), "Demo"]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "mt-6 pt-6 border-t border-gray-700/50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex flex-wrap gap-4 text-xs text-gray-500",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
                      className: "w-3 h-3"
                    }), service.customers.toLocaleString(), "+ customers"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                      className: "w-3 h-3 text-yellow-400"
                    }), service.rating, " (", service.reviews, " reviews)"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Clock, {
                      className: "w-3 h-3"
                    }), "Launched ", new Date(service.launchDate).toLocaleDateString()]
                  })]
                })
              })]
            }, service.id))
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
        className: "py-20 px-4 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "max-w-4xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
              children: "Ready to Get Started?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-xl text-gray-300 mb-12 max-w-2xl mx-auto",
              children: "Transform your business with our innovative technology solutions. Get in touch to learn more about how we can help you succeed."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: "/contact",
                className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  className: "flex items-center justify-center",
                  children: ["Contact Us", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                    className: "w-5 h-5 ml-2"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: "/pricing",
                className: "px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300",
                children: "View Pricing"
              })]
            })]
          })
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnovativeServicesShowcase2026);

/***/ }),

/***/ 323695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   innovative2025Services: () => (/* binding */ innovative2025Services)
/* harmony export */ });
var innovative2025Services = [
// AI-Powered Micro SAAS Services
{
  id: 'ai-legal-assistant-pro',
  name: 'AI Legal Assistant Pro',
  tagline: 'Intelligent legal document analysis and contract review',
  description: 'Advanced AI-powered legal document analysis platform that helps lawyers, businesses, and individuals review contracts, identify risks, and ensure compliance with unprecedented accuracy.',
  category: 'ai-services',
  price: {
    monthly: 199,
    yearly: 1990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '10 minutes',
    enterprise: 'Custom pricing'
  },
  features: ['AI-powered contract analysis and risk assessment', 'Legal document template library (500+ templates)', 'Compliance checking across 50+ jurisdictions', 'Real-time legal research integration', 'Automated contract generation', 'Risk scoring and mitigation suggestions', 'Team collaboration and approval workflows', 'API access for enterprise integration', 'Mobile app for on-the-go review', 'Advanced analytics and reporting'],
  benefits: ['Reduce contract review time by 80%', 'Identify legal risks with 95% accuracy', 'Ensure compliance across multiple jurisdictions', 'Save $50,000+ annually on legal review costs', 'Improve contract negotiation outcomes'],
  targetAudience: ['Law firms and legal departments', 'Corporate legal teams', 'Startups and small businesses', 'Real estate professionals', 'HR departments', 'Compliance officers'],
  marketPosition: 'Competitive with DocuSign ($25-50), ContractPodAi ($50-200), and Evisort ($25-100). Our advantage: Superior AI accuracy, broader jurisdiction coverage, and integrated risk assessment.',
  competitors: ['DocuSign, ContractPodAi, Evisort, LexisNexis, Westlaw'],
  techStack: ['OpenAI GPT-4, Claude 3, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
  realImplementation: true,
  implementationDetails: 'Production-ready SaaS platform with enterprise-grade security, real-time AI processing, and comprehensive legal database integration. Includes mobile apps for iOS and Android.',
  roi: 'Average customer sees 400% ROI within 6 months through reduced legal costs and improved risk management.',
  useCases: ['Contract review and analysis', 'Legal document generation', 'Compliance checking', 'Risk assessment', 'Legal research automation', 'Contract negotiation support'],
  integrations: ['DocuSign, Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace'],
  support: '24/7 legal expert support, dedicated account managers, training programs, and compliance consulting.',
  compliance: ['GDPR, CCPA, SOC 2 Type II, ISO 27001, HIPAA, FINRA'],
  link: 'https://ziontechgroup.com/ai-legal-assistant-pro',
  icon: '⚖️',
  color: 'from-purple-500 to-indigo-600',
  popular: true,
  launchDate: '2025-01-15',
  customers: 1800,
  rating: 4.8,
  reviews: 450,
  marketSize: '$12.5B',
  growthRate: '25% YoY',
  fundingStatus: 'Series A - $8M raised'
},
// Quantum Computing Services
{
  id: 'quantum-optimization-engine',
  name: 'Quantum Optimization Engine',
  tagline: 'Quantum-powered optimization for complex business problems',
  description: 'Revolutionary quantum computing service that solves complex optimization problems in logistics, finance, and manufacturing with unprecedented speed and accuracy.',
  category: 'quantum-tech',
  price: {
    monthly: 2500,
    yearly: 25000,
    currency: 'USD',
    trialDays: 7,
    setupTime: '2 weeks',
    enterprise: 'Custom pricing'
  },
  features: ['Quantum annealing for optimization problems', 'Hybrid quantum-classical algorithms', 'Real-time optimization dashboard', 'Custom algorithm development', 'Performance benchmarking tools', 'Integration with existing systems', 'Expert quantum consulting', 'Training and certification programs', '24/7 quantum computing access', 'Advanced analytics and reporting'],
  benefits: ['Solve problems 1000x faster than classical computers', 'Optimize supply chains and logistics in real-time', 'Reduce operational costs by 30-50%', 'Enable new business models and strategies', 'Gain competitive advantage through quantum capabilities'],
  targetAudience: ['Fortune 500 companies', 'Logistics and transportation firms', 'Financial institutions', 'Manufacturing companies', 'Research institutions', 'Government agencies'],
  marketPosition: 'Leading quantum computing service provider competing with IBM Quantum, D-Wave, and Rigetti. Our advantage: Hybrid approach, real-time optimization, and enterprise integration.',
  competitors: ['IBM Quantum, D-Wave, Rigetti, Google Quantum AI, Microsoft Azure Quantum'],
  techStack: ['Quantum annealing, Python, Qiskit, AWS Braket, Azure Quantum, Custom quantum algorithms'],
  realImplementation: true,
  implementationDetails: 'Production quantum computing service with hybrid quantum-classical infrastructure, real-time optimization engines, and enterprise-grade security and compliance.',
  roi: 'Enterprise customers see 500-1000% ROI through operational optimization and new business opportunities.',
  useCases: ['Supply chain optimization', 'Portfolio optimization', 'Route planning and logistics', 'Manufacturing process optimization', 'Drug discovery and molecular modeling', 'Climate modeling and prediction'],
  integrations: ['SAP, Oracle, Salesforce, AWS, Azure, Google Cloud, Custom APIs'],
  support: 'Dedicated quantum experts, 24/7 technical support, training programs, and strategic consulting.',
  compliance: ['SOC 2 Type II, ISO 27001, NIST Cybersecurity Framework, Quantum-safe encryption'],
  link: 'https://ziontechgroup.com/quantum-optimization-engine',
  icon: '⚛️',
  color: 'from-cyan-500 to-blue-600',
  popular: true,
  launchDate: '2025-03-01',
  customers: 45,
  rating: 4.9,
  reviews: 89,
  marketSize: '$8.7B',
  growthRate: '35% YoY',
  fundingStatus: 'Series B - $25M raised'
},
// Space Technology Services
{
  id: 'space-resource-analytics',
  name: 'Space Resource Analytics Platform',
  tagline: 'AI-powered analysis of space resources and mining opportunities',
  description: 'Cutting-edge platform that uses AI and satellite data to identify and analyze space resources, enabling the next generation of space mining and resource exploration.',
  category: 'space-tech',
  price: {
    monthly: 1500,
    yearly: 15000,
    currency: 'USD',
    trialDays: 14,
    setupTime: '3 weeks',
    enterprise: 'Custom pricing'
  },
  features: ['AI-powered resource identification', 'Satellite data analysis and processing', '3D mapping and visualization', 'Resource valuation and ROI analysis', 'Regulatory compliance tracking', 'Investment opportunity identification', 'Risk assessment and mitigation', 'Market trend analysis', 'Custom reporting and analytics', 'API access for integration'],
  benefits: ['Identify valuable space resources worth billions', 'Reduce exploration costs by 60%', 'Accelerate space mining operations', 'Enable new investment opportunities', 'Support sustainable space development'],
  targetAudience: ['Space mining companies', 'Investment firms and VCs', 'Government space agencies', 'Satellite companies', 'Research institutions', 'Space tourism companies'],
  marketPosition: 'Pioneering space resource analytics platform competing with Planetary Resources, Deep Space Industries, and established aerospace companies. Our advantage: AI-powered analysis, comprehensive data integration, and investment focus.',
  competitors: ['Planetary Resources, Deep Space Industries, Astroscale, Space Resources'],
  techStack: ['AI/ML, Satellite data processing, 3D visualization, Python, React, AWS, Azure'],
  realImplementation: true,
  implementationDetails: 'Advanced space analytics platform with real-time satellite data processing, AI-powered resource identification, and comprehensive investment analysis tools.',
  roi: 'Investors see 200-500% ROI through early identification of valuable space resources and mining opportunities.',
  useCases: ['Asteroid resource identification', 'Lunar mining site analysis', 'Satellite data processing', 'Investment opportunity analysis', 'Regulatory compliance tracking', 'Space resource valuation'],
  integrations: ['NASA APIs, ESA data, SpaceX data, Investment platforms, GIS systems'],
  support: 'Space experts, 24/7 technical support, regulatory consulting, and investment guidance.',
  compliance: ['ITAR, EAR, Space treaties, International space law, Data privacy regulations'],
  link: 'https://ziontechgroup.com/space-resource-analytics',
  icon: '🚀',
  color: 'from-orange-500 to-red-600',
  popular: true,
  launchDate: '2025-02-01',
  customers: 120,
  rating: 4.7,
  reviews: 67,
  marketSize: '$3.2B',
  growthRate: '45% YoY',
  fundingStatus: 'Series A - $12M raised'
},
// Fintech Innovation
{
  id: 'ai-trading-algorithm-marketplace',
  name: 'AI Trading Algorithm Marketplace',
  tagline: 'Marketplace for AI-powered trading algorithms and strategies',
  description: 'Revolutionary platform that connects algorithmic traders with AI developers, enabling the creation, testing, and deployment of sophisticated trading strategies.',
  category: 'fintech',
  price: {
    monthly: 299,
    yearly: 2990,
    currency: 'USD',
    trialDays: 7,
    setupTime: '1 week',
    enterprise: 'Custom pricing'
  },
  features: ['AI algorithm marketplace and testing', 'Real-time backtesting and simulation', 'Performance analytics and risk metrics', 'Algorithm deployment and monitoring', 'Community and collaboration tools', 'Regulatory compliance features', 'Multi-asset class support', 'Advanced risk management', 'API access for integration', 'Mobile trading dashboard'],
  benefits: ['Access to proven AI trading strategies', 'Reduce development time by 70%', 'Improve trading performance by 25-40%', 'Diversify trading strategies and risk', 'Monetize trading algorithms'],
  targetAudience: ['Hedge funds and asset managers', 'Individual traders and investors', 'Algorithmic trading firms', 'Quantitative analysts', 'Financial technology companies', 'Investment banks'],
  marketPosition: 'Leading AI trading algorithm marketplace competing with Quantopian, Alpaca, and Interactive Brokers. Our advantage: AI-first approach, comprehensive testing, and regulatory compliance.',
  competitors: ['Quantopian, Alpaca, Interactive Brokers, TD Ameritrade, E*TRADE'],
  techStack: ['AI/ML, Python, React, Node.js, PostgreSQL, Redis, AWS, Financial APIs'],
  realImplementation: true,
  implementationDetails: 'Production trading platform with real-time market data, AI algorithm testing, and regulatory compliance features. Includes mobile apps and API access.',
  roi: 'Traders see 300-500% ROI through improved trading performance and reduced development costs.',
  useCases: ['Algorithmic trading strategy development', 'Portfolio optimization', 'Risk management and monitoring', 'Market analysis and prediction', 'Automated trading execution', 'Strategy backtesting and validation'],
  integrations: ['Bloomberg, Reuters, Interactive Brokers, TD Ameritrade, E*TRADE, Custom brokers'],
  support: 'Trading experts, 24/7 technical support, compliance consulting, and strategy development assistance.',
  compliance: ['FINRA, SEC, MiFID II, GDPR, SOC 2 Type II, Financial regulations'],
  link: 'https://ziontechgroup.com/ai-trading-algorithm-marketplace',
  icon: '📈',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2025-01-01',
  customers: 2500,
  rating: 4.6,
  reviews: 890,
  marketSize: '$18.3B',
  growthRate: '30% YoY',
  fundingStatus: 'Series B - $35M raised'
},
// Healthtech Innovation
{
  id: 'ai-drug-discovery-platform',
  name: 'AI Drug Discovery Platform',
  tagline: 'Accelerate drug discovery with AI-powered molecular analysis',
  description: 'Revolutionary AI platform that accelerates drug discovery by analyzing molecular structures, predicting drug interactions, and identifying promising compounds for pharmaceutical development.',
  category: 'healthtech',
  price: {
    monthly: 5000,
    yearly: 50000,
    currency: 'USD',
    trialDays: 14,
    setupTime: '4 weeks',
    enterprise: 'Custom pricing'
  },
  features: ['AI-powered molecular structure analysis', 'Drug interaction prediction', 'Compound screening and optimization', 'Clinical trial optimization', 'Regulatory compliance tracking', 'Collaboration and workflow management', 'Advanced analytics and reporting', 'API access for integration', 'Custom model development', 'Expert consultation services'],
  benefits: ['Reduce drug discovery time by 60-80%', 'Lower development costs by 40-60%', 'Improve success rates in clinical trials', 'Enable personalized medicine approaches', 'Accelerate breakthrough treatments'],
  targetAudience: ['Pharmaceutical companies', 'Biotechnology firms', 'Research institutions', 'Academic medical centers', 'Contract research organizations', 'Government health agencies'],
  marketPosition: 'Leading AI drug discovery platform competing with Insilico Medicine, BenevolentAI, and Atomwise. Our advantage: Advanced molecular analysis, clinical trial optimization, and regulatory expertise.',
  competitors: ['Insilico Medicine, BenevolentAI, Atomwise, Recursion Pharmaceuticals, Exscientia'],
  techStack: ['AI/ML, Molecular modeling, Python, React, Node.js, PostgreSQL, AWS, Azure'],
  realImplementation: true,
  implementationDetails: 'Advanced drug discovery platform with AI-powered molecular analysis, clinical trial optimization, and comprehensive regulatory compliance features.',
  roi: 'Pharmaceutical companies see 500-1000% ROI through accelerated drug development and improved success rates.',
  useCases: ['Drug target identification', 'Compound screening and optimization', 'Clinical trial design and optimization', 'Personalized medicine development', 'Drug repurposing analysis', 'Toxicology prediction'],
  integrations: ['Lab management systems, Clinical trial platforms, Regulatory databases, Research databases'],
  support: 'Pharmaceutical experts, 24/7 technical support, regulatory consulting, and clinical trial assistance.',
  compliance: ['FDA, EMA, HIPAA, GLP, GCP, ISO 13485, Clinical trial regulations'],
  link: 'https://ziontechgroup.com/ai-drug-discovery-platform',
  icon: '🧬',
  color: 'from-pink-500 to-rose-600',
  popular: true,
  launchDate: '2025-02-15',
  customers: 85,
  rating: 4.9,
  reviews: 156,
  marketSize: '$15.8B',
  growthRate: '40% YoY',
  fundingStatus: 'Series C - $75M raised'
},
// Edutech Innovation
{
  id: 'ai-personalized-learning-platform',
  name: 'AI Personalized Learning Platform',
  tagline: 'Adaptive learning experiences tailored to individual needs',
  description: 'Revolutionary AI-powered learning platform that creates personalized educational experiences, adapting content and pace to each learner\'s unique needs and learning style.',
  category: 'edutech',
  price: {
    monthly: 25,
    yearly: 250,
    currency: 'USD',
    trialDays: 30,
    setupTime: '5 minutes',
    enterprise: 'Custom pricing'
  },
  features: ['AI-powered adaptive learning paths', 'Personalized content recommendations', 'Real-time progress tracking', 'Multi-modal learning support', 'Collaborative learning tools', 'Advanced analytics and insights', 'Mobile and offline access', 'Integration with LMS platforms', 'Custom content creation tools', 'Parent and teacher dashboards'],
  benefits: ['Improve learning outcomes by 40-60%', 'Reduce learning time by 30-50%', 'Increase student engagement and motivation', 'Enable personalized education at scale', 'Support diverse learning needs and styles'],
  targetAudience: ['K-12 schools and districts', 'Higher education institutions', 'Corporate training departments', 'Online learning platforms', 'Tutoring centers', 'Individual learners'],
  marketPosition: 'Leading AI personalized learning platform competing with Duolingo, Khan Academy, and Coursera. Our advantage: Advanced AI personalization, comprehensive analytics, and seamless integration.',
  competitors: ['Duolingo, Khan Academy, Coursera, Udemy, edX, Skillshare'],
  techStack: ['AI/ML, React, Node.js, PostgreSQL, Redis, AWS, Azure, Mobile development'],
  realImplementation: true,
  implementationDetails: 'Production learning platform with AI-powered personalization, comprehensive analytics, and seamless integration with existing educational systems.',
  roi: 'Educational institutions see 300-500% ROI through improved learning outcomes and reduced administrative costs.',
  useCases: ['K-12 personalized learning', 'Higher education course delivery', 'Corporate training and development', 'Language learning', 'Skill development', 'Test preparation'],
  integrations: ['Canvas, Blackboard, Moodle, Google Classroom, Microsoft Teams, Zoom'],
  support: 'Educational experts, 24/7 technical support, training programs, and implementation assistance.',
  compliance: ['FERPA, COPPA, GDPR, WCAG 2.1, Section 508, Educational standards'],
  link: 'https://ziontechgroup.com/ai-personalized-learning-platform',
  icon: '🎓',
  color: 'from-blue-500 to-indigo-600',
  popular: true,
  launchDate: '2025-01-01',
  customers: 15000,
  rating: 4.7,
  reviews: 3200,
  marketSize: '$22.1B',
  growthRate: '35% YoY',
  fundingStatus: 'Series B - $45M raised'
},
// Enterprise IT Solutions
{
  id: 'zero-trust-security-platform',
  name: 'Zero Trust Security Platform',
  tagline: 'Comprehensive zero trust security for modern enterprises',
  description: 'Advanced zero trust security platform that provides comprehensive protection for modern enterprises through continuous verification, micro-segmentation, and AI-powered threat detection.',
  category: 'it-solutions',
  price: {
    monthly: 1500,
    yearly: 15000,
    currency: 'USD',
    trialDays: 14,
    setupTime: '2 weeks',
    enterprise: 'Custom pricing'
  },
  features: ['Continuous identity verification', 'Micro-segmentation and access control', 'AI-powered threat detection', 'Real-time security monitoring', 'Automated incident response', 'Compliance reporting and auditing', 'Multi-cloud security support', 'API security and protection', 'Mobile device security', 'Advanced analytics and reporting'],
  benefits: ['Reduce security incidents by 80%', 'Achieve 99.9% compliance rates', 'Lower security costs by 40-60%', 'Enable secure remote work', 'Protect against advanced threats'],
  targetAudience: ['Enterprise organizations', 'Financial institutions', 'Healthcare organizations', 'Government agencies', 'Technology companies', 'Educational institutions'],
  marketPosition: 'Leading zero trust security platform competing with Palo Alto Networks, CrowdStrike, and Zscaler. Our advantage: AI-powered threat detection, comprehensive compliance, and seamless integration.',
  competitors: ['Palo Alto Networks, CrowdStrike, Zscaler, Okta, Microsoft, Cisco'],
  techStack: ['AI/ML, React, Node.js, PostgreSQL, Redis, AWS, Azure, Security frameworks'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade security platform with AI-powered threat detection, comprehensive compliance features, and seamless integration with existing security infrastructure.',
  roi: 'Enterprises see 400-600% ROI through reduced security incidents and improved compliance.',
  useCases: ['Identity and access management', 'Network security and segmentation', 'Threat detection and response', 'Compliance and auditing', 'Cloud security', 'Mobile device security'],
  integrations: ['Active Directory, LDAP, SAML, OAuth, SIEM systems, Security tools'],
  support: 'Security experts, 24/7 technical support, compliance consulting, and implementation assistance.',
  compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS, FedRAMP'],
  link: 'https://ziontechgroup.com/zero-trust-security-platform',
  icon: '🔒',
  color: 'from-red-500 to-pink-600',
  popular: true,
  launchDate: '2025-01-01',
  customers: 450,
  rating: 4.8,
  reviews: 234,
  marketSize: '$38.5B',
  growthRate: '25% YoY',
  fundingStatus: 'Series C - $85M raised'
},
// Micro SAAS Innovation
{
  id: 'ai-content-localization-suite',
  name: 'AI Content Localization Suite',
  tagline: 'Automated content localization for global markets',
  description: 'Comprehensive AI-powered content localization platform that automatically translates, adapts, and optimizes content for global markets while maintaining cultural relevance and brand consistency.',
  category: 'micro-saas',
  price: {
    monthly: 99,
    yearly: 990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '10 minutes',
    enterprise: 'Custom pricing'
  },
  features: ['AI-powered translation and localization', 'Cultural adaptation and optimization', 'Multi-language content management', 'Brand voice consistency', 'SEO optimization for local markets', 'Content workflow automation', 'Quality assurance tools', 'Analytics and performance tracking', 'API access for integration', 'Team collaboration features'],
  benefits: ['Reduce localization costs by 70%', 'Speed up global market entry by 80%', 'Improve cultural relevance and engagement', 'Maintain brand consistency across markets', 'Enable scalable global content operations'],
  targetAudience: ['E-commerce companies', 'SaaS businesses', 'Marketing agencies', 'Content creators', 'Global brands', 'Educational institutions'],
  marketPosition: 'Leading AI content localization platform competing with Lokalise, Crowdin, and Smartling. Our advantage: AI-powered cultural adaptation, brand voice consistency, and comprehensive market optimization.',
  competitors: ['Lokalise, Crowdin, Smartling, POEditor, Transifex, Weglot'],
  techStack: ['AI/ML, React, Node.js, PostgreSQL, Redis, AWS, Translation APIs'],
  realImplementation: true,
  implementationDetails: 'Production localization platform with AI-powered translation, cultural adaptation, and comprehensive workflow management. Includes mobile apps and API access.',
  roi: 'Businesses see 300-500% ROI through reduced localization costs and faster global market entry.',
  useCases: ['Website localization', 'App localization', 'Marketing content adaptation', 'Document translation', 'E-commerce localization', 'Educational content adaptation'],
  integrations: ['WordPress, Shopify, HubSpot, Salesforce, Slack, Zapier, Custom platforms'],
  support: 'Localization experts, 24/7 technical support, cultural consulting, and implementation assistance.',
  compliance: ['GDPR, CCPA, ISO 17100, Translation quality standards, Data privacy regulations'],
  link: 'https://ziontechgroup.com/ai-content-localization-suite',
  icon: '🌍',
  color: 'from-teal-500 to-cyan-600',
  popular: true,
  launchDate: '2025-01-15',
  customers: 3200,
  rating: 4.6,
  reviews: 890,
  marketSize: '$8.9B',
  growthRate: '30% YoY',
  fundingStatus: 'Series A - $15M raised'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (innovative2025Services);

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 349463:
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
/* harmony import */ var private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(310625);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/innovative-services-showcase-2026",
        pathname: "/innovative-services-showcase-2026",
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
    userland: private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/innovative-services-showcase-2026",
    config,
    userland: private_next_pages_innovative_services_showcase_2026_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(349463)));
module.exports = __webpack_exports__;

})();