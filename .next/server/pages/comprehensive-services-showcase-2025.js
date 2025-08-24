"use strict";
(() => {
var exports = {};
exports.id = 512551;
exports.ids = [512551,890636];
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

/***/ 811289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComprehensiveServicesShowcase2025)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7887);
/* harmony import */ var _data_2025_innovative_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(846957);
/* harmony import */ var _data_2025_innovative_ai_services_enhanced__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(485562);
/* harmony import */ var _data_2025_innovative_it_services_enhanced__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(184699);
/* harmony import */ var _data_emerging_tech_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(864176);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






// Import service data





var allServices = [..._data_2025_innovative_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.innovativeRealMicroSaasServices2025.map(service => _objectSpread(_objectSpread({}, service), {}, {
  category: 'Micro SAAS',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Rocket, {
    className: "w-6 h-6"
  })
})), ..._data_2025_innovative_ai_services_enhanced__WEBPACK_IMPORTED_MODULE_5__.innovativeAIServicesEnhanced2025.map(service => _objectSpread(_objectSpread({}, service), {}, {
  category: 'AI & Consciousness',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Brain, {
    className: "w-6 h-6"
  })
})), ..._data_2025_innovative_it_services_enhanced__WEBPACK_IMPORTED_MODULE_6__.innovativeITServicesEnhanced2025.map(service => _objectSpread(_objectSpread({}, service), {}, {
  category: 'Enterprise IT',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Shield, {
    className: "w-6 h-6"
  })
})), ..._data_emerging_tech_services__WEBPACK_IMPORTED_MODULE_7__.emergingTechServicesEnhanced2025.map(service => _objectSpread(_objectSpread({}, service), {}, {
  category: 'Quantum & Emerging Tech',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Atom, {
    className: "w-6 h-6"
  })
}))];
var categories = [{
  name: 'All Services',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Globe, {
    className: "w-5 h-5"
  }),
  count: allServices.length
}, {
  name: 'Micro SAAS',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Rocket, {
    className: "w-5 h-5"
  }),
  count: _data_2025_innovative_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.innovativeRealMicroSaasServices2025.length
}, {
  name: 'AI & Consciousness',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Brain, {
    className: "w-5 h-5"
  }),
  count: _data_2025_innovative_ai_services_enhanced__WEBPACK_IMPORTED_MODULE_5__.innovativeAIServicesEnhanced2025.length
}, {
  name: 'Enterprise IT',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Shield, {
    className: "w-5 h-5"
  }),
  count: _data_2025_innovative_it_services_enhanced__WEBPACK_IMPORTED_MODULE_6__.innovativeITServicesEnhanced2025.length
}, {
  name: 'Quantum & Emerging Tech',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Atom, {
    className: "w-5 h-5"
  }),
  count: _data_emerging_tech_services__WEBPACK_IMPORTED_MODULE_7__.emergingTechServicesEnhanced2025.length
}];
var priceRanges = [{
  label: 'All Prices',
  value: 'all'
}, {
  label: 'Under $50/month',
  value: 'under-50'
}, {
  label: '$50 - $200/month',
  value: '50-200'
}, {
  label: '$200 - $500/month',
  value: '200-500'
}, {
  label: 'Over $500/month',
  value: 'over-500'
}];
var sortOptions = [{
  label: 'Most Popular',
  value: 'popular'
}, {
  label: 'Highest Rated',
  value: 'rating'
}, {
  label: 'Newest',
  value: 'newest'
}, {
  label: 'Price: Low to High',
  value: 'price-low'
}, {
  label: 'Price: High to Low',
  value: 'price-high'
}];
function ComprehensiveServicesShowcase2025() {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('All Services');
  var [selectedPriceRange, setSelectedPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('popular');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('grid');
  var [filteredServices, setFilteredServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allServices);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        var price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {
          case 'under-50':
            return price < 50;
          case '50-200':
            return price >= 50 && price <= 200;
          case '200-500':
            return price > 200 && price <= 500;
          case 'over-500':
            return price > 500;
          default:
            return true;
        }
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  var getCategoryColor = category => {
    switch (category) {
      case 'Micro SAAS':
        return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness':
        return 'from-purple-500 to-pink-500';
      case 'Enterprise IT':
        return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };
  var getCategoryIcon = category => {
    switch (category) {
      case 'Micro SAAS':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Rocket, {
          className: "w-5 h-5"
        });
      case 'AI & Consciousness':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Brain, {
          className: "w-5 h-5"
        });
      case 'Enterprise IT':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Shield, {
          className: "w-5 h-5"
        });
      case 'Quantum & Emerging Tech':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Atom, {
          className: "w-5 h-5"
        });
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Globe, {
          className: "w-5 h-5"
        });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("title", {
        children: "Comprehensive Services Showcase 2025 - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
        name: "description",
        content: "Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
        name: "keywords",
        content: "micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [...Array(20)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          className: "absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20",
          animate: {
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2]
          },
          transition: {
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.5
          },
          style: {
            left: "".concat(Math.random() * 100, "%"),
            top: "".concat(Math.random() * 100, "%")
          }
        }, i))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h1", {
            className: "text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
              children: "Comprehensive"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-white",
              children: "Services Showcase"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
            className: "text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto",
            children: ["Discover our complete portfolio of ", allServices.length, "+ innovative micro SAAS, AI, IT, and emerging technology services"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12",
            children: [{
              label: 'Total Services',
              value: allServices.length,
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Globe, {
                className: "w-8 h-8"
              })
            }, {
              label: 'AI Solutions',
              value: _data_2025_innovative_ai_services_enhanced__WEBPACK_IMPORTED_MODULE_5__.innovativeAIServicesEnhanced2025.length,
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Brain, {
                className: "w-8 h-8"
              })
            }, {
              label: 'IT Services',
              value: _data_2025_innovative_it_services_enhanced__WEBPACK_IMPORTED_MODULE_6__.innovativeITServicesEnhanced2025.length,
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Shield, {
                className: "w-8 h-8"
              })
            }, {
              label: 'Emerging Tech',
              value: _data_emerging_tech_services__WEBPACK_IMPORTED_MODULE_7__.emergingTechServicesEnhanced2025.length,
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Atom, {
                className: "w-8 h-8"
              })
            }].map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                delay: 0.2 + index * 0.1
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400",
                children: stat.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-3xl font-bold text-white mb-1",
                children: stat.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-sm text-cyan-300",
                children: stat.label
              })]
            }, stat.label))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "max-w-2xl mx-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Search, {
                className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "text",
                placeholder: "Search for services, features, or solutions...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              })]
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex flex-wrap items-center space-x-2",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              onClick: () => setSelectedCategory(category.name),
              className: "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ".concat(selectedCategory === category.name ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'),
              children: [category.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: category.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "bg-white/20 px-2 py-1 rounded-full text-xs",
                children: category.count
              })]
            }, category.name))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex flex-wrap items-center space-x-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("select", {
              value: selectedPriceRange,
              onChange: e => setSelectedPriceRange(e.target.value),
              className: "px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
              children: priceRanges.map(range => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                value: range.value,
                className: "bg-gray-900 text-white",
                children: range.label
              }, range.value))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("select", {
              value: sortBy,
              onChange: e => setSortBy(e.target.value),
              className: "px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
              children: sortOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                value: option.value,
                className: "bg-gray-900 text-white",
                children: option.label
              }, option.value))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center space-x-1 bg-white/10 rounded-lg p-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                onClick: () => setViewMode('grid'),
                className: "p-2 rounded-md transition-all duration-200 ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Grid3X3, {
                  className: "w-4 h-4"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                onClick: () => setViewMode('list'),
                className: "p-2 rounded-md transition-all duration-200 ".concat(viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.List, {
                  className: "w-4 h-4"
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "mb-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          className: "text-gray-400",
          children: ["Showing ", filteredServices.length, " of ", allServices.length, " services"]
        })
      }), viewMode === 'grid' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.5,
            delay: index * 0.1
          },
          className: "group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "absolute top-4 right-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ".concat(getCategoryColor(service.category), " text-white"),
              children: [getCategoryIcon(service.category), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "ml-2",
                children: service.category
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "mb-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300",
              children: service.icon
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
            className: "text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200",
            children: service.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "text-gray-400 mb-3 line-clamp-2",
            children: service.tagline
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "text-sm text-gray-500 mb-4 line-clamp-3",
            children: service.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-2xl font-bold text-cyan-400",
              children: service.price
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-gray-500 text-sm ml-2",
              children: "/month"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex items-center justify-between mb-4 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center space-x-1 text-yellow-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Star, {
                className: "w-4 h-4 fill-current"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-white",
                children: service.rating
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                className: "text-gray-500",
                children: ["(", service.reviews, ")"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center space-x-1 text-gray-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Users, {
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: service.customers.toLocaleString()
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "text-xs text-gray-500 mb-2",
              children: "Key Features:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "space-y-1",
              children: [service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex items-center space-x-2 text-sm text-gray-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.CheckCircle, {
                  className: "w-3 h-3 text-cyan-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "line-clamp-1",
                  children: feature
                })]
              }, idx)), service.features.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-xs text-cyan-400",
                children: ["+", service.features.length - 3, " more features"]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "mb-4 text-xs text-gray-500",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                children: ["Market Size: ", service.marketSize]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                children: ["Growth: ", service.growthRate]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            className: "w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105",
            children: "Learn More"
          })]
        }, service.id))
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "space-y-6",
        children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
          initial: {
            opacity: 0,
            x: -20
          },
          animate: {
            opacity: 1,
            x: 0
          },
          transition: {
            duration: 0.5,
            delay: index * 0.1
          },
          className: "group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex items-start space-x-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300",
                children: service.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex-1 min-w-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex items-start justify-between mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                    className: "text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200",
                    children: service.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                    className: "text-lg text-cyan-300 mb-2",
                    children: service.tagline
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                    className: "text-gray-400 mb-4",
                    children: service.description
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "text-right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-3xl font-bold text-cyan-400 mb-2",
                    children: service.price
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-gray-500 text-sm",
                    children: "/month"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ".concat(getCategoryColor(service.category), " text-white mt-2"),
                    children: service.category
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex items-center space-x-8 mb-4 text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-center space-x-1 text-yellow-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Star, {
                    className: "w-4 h-4 fill-current"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-white font-medium",
                    children: service.rating
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                    className: "text-gray-500",
                    children: ["(", service.reviews, " reviews)"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-center space-x-1 text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Users, {
                    className: "w-4 h-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-white font-medium",
                    children: service.customers.toLocaleString()
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-gray-500",
                    children: "customers"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-center space-x-1 text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.TrendingUp, {
                    className: "w-4 h-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-white font-medium",
                    children: service.growthRate
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-gray-500",
                    children: "growth"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-center space-x-1 text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Globe, {
                    className: "w-4 h-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-white font-medium",
                    children: service.marketSize
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-gray-500",
                    children: "market"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-sm text-gray-500 mb-2",
                  children: "Key Features:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: service.features.slice(0, 6).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex items-center space-x-2 text-sm text-gray-400",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.CheckCircle, {
                      className: "w-3 h-3 text-cyan-400 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      children: feature
                    })]
                  }, idx))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  className: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105",
                  children: "Learn More"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "text-xs text-gray-500",
                  children: ["Launched: ", new Date(service.launchDate).toLocaleDateString()]
                })]
              })]
            })]
          })
        }, service.id))
      }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "text-center py-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Search, {
            className: "w-12 h-12 text-cyan-400"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
          className: "text-2xl font-bold text-white mb-2",
          children: "No services found"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "text-gray-400 mb-6",
          children: "Try adjusting your search terms or filters to find what you're looking for."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          onClick: () => {
            setSearchTerm('');
            setSelectedCategory('All Services');
            setSelectedPriceRange('all');
          },
          className: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200",
          children: "Clear All Filters"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
            className: "text-4xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "text-xl text-cyan-300 mb-8 max-w-3xl mx-auto",
            children: "Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "/contact",
              className: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105",
              children: "Get Started Today"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "/pricing",
              className: "border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200",
              children: "View Pricing Plans"
            })]
          })]
        })
      })
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

/***/ }),

/***/ 926347:
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
/* harmony import */ var private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(811289);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/comprehensive-services-showcase-2025",
        pathname: "/comprehensive-services-showcase-2025",
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
    userland: private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/comprehensive-services-showcase-2025",
    config,
    userland: private_next_pages_comprehensive_services_showcase_2025_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(926347)));
module.exports = __webpack_exports__;

})();