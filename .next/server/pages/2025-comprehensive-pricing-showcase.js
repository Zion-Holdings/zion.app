"use strict";
(() => {
var exports = {};
exports.id = 415907;
exports.ids = [415907,890636];
exports.modules = {

/***/ 165589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7887);
/* harmony import */ var _data_2025_enterprise_ai_automation_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(464403);
/* harmony import */ var _data_2025_innovative_it_infrastructure_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(482302);
/* harmony import */ var _data_2025_innovative_micro_saas_solutions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(256646);
/* harmony import */ var _data_2025_cutting_edge_ai_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(746136);
/* harmony import */ var _data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(117442);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





// Import our new 2025 service data





// Import existing service data


var ComprehensivePricingShowcase2025 = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [priceRange, setPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('price-low');

  // Combine all services
  var allServices = [..._data_2025_enterprise_ai_automation_services__WEBPACK_IMPORTED_MODULE_2__.enterpriseAIAutomationServices2025, ..._data_2025_innovative_it_infrastructure_services__WEBPACK_IMPORTED_MODULE_3__.innovativeITInfrastructureServices2025, ..._data_2025_innovative_micro_saas_solutions__WEBPACK_IMPORTED_MODULE_4__.innovativeMicroSaasSolutions2025, ..._data_2025_cutting_edge_ai_services__WEBPACK_IMPORTED_MODULE_5__.cuttingEdgeAIServices2025, ..._data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_6__.advancedAIAutomationServices2025];
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      className: "w-6 h-6"
    }),
    color: 'from-gray-500 to-slate-500',
    count: allServices.length
  }, {
    id: 'ai-automation',
    name: 'AI Automation',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Brain, {
      className: "w-6 h-6"
    }),
    color: 'from-blue-500 to-purple-500',
    count: allServices.filter(s => s.category.toLowerCase().includes('ai automation')).length
  }, {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Building, {
      className: "w-6 h-6"
    }),
    color: 'from-indigo-500 to-purple-500',
    count: allServices.filter(s => s.category.toLowerCase().includes('it infrastructure')).length
  }, {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Target, {
      className: "w-6 h-6"
    }),
    color: 'from-green-500 to-emerald-500',
    count: allServices.filter(s => s.category.toLowerCase().includes('micro saas')).length
  }, {
    id: 'ai-services',
    name: 'AI Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Atom, {
      className: "w-6 h-6"
    }),
    color: 'from-purple-500 to-pink-500',
    count: allServices.filter(s => s.category.toLowerCase().includes('ai services')).length
  }];
  var priceRanges = [{
    id: 'all',
    name: 'All Prices',
    range: 'All'
  }, {
    id: 'budget',
    name: 'Budget',
    range: '$0 - $500'
  }, {
    id: 'mid-range',
    name: 'Mid-Range',
    range: '$500 - $2,000'
  }, {
    id: 'enterprise',
    name: 'Enterprise',
    range: '$2,000 - $5,000'
  }, {
    id: 'premium',
    name: 'Premium',
    range: '$5,000+'
  }];

  // Filter and sort services
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    var matchesPrice = priceRange === 'all' || (() => {
      var price = parseFloat(service.price.replace('$', '').replace(',', ''));
      switch (priceRange) {
        case 'budget':
          return price <= 500;
        case 'mid-range':
          return price > 500 && price <= 2000;
        case 'enterprise':
          return price > 2000 && price <= 5000;
        case 'premium':
          return price > 5000;
        default:
          return true;
      }
    })();
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'customers':
        return (b.customers || 0) - (a.customers || 0);
      default:
        return 0;
    }
  });
  var containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  var itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  var getPriceRange = price => {
    var numPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (numPrice <= 500) return 'budget';
    if (numPrice <= 2000) return 'mid-range';
    if (numPrice <= 5000) return 'enterprise';
    return 'premium';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "2025 Comprehensive Pricing Showcase | Zion Tech Group",
      description: "Explore our complete 2025 service portfolio with transparent pricing, features, and ROI benefits. From AI automation to quantum computing, find the perfect solution for your business.",
      keywords: ["2025 pricing", "service costs", "AI automation pricing", "IT infrastructure pricing", "micro SAAS pricing", "transparent pricing"],
      image: "/og-pricing-showcase-2025.jpg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "relative py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
            className: "text-4xl md:text-6xl font-bold text-white mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent",
              children: "2025 Comprehensive"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "text-white",
              children: "Pricing Showcase"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Transparent pricing for our complete portfolio of innovative services. Compare features, ROI benefits, and find the perfect solution for your business needs."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83D\uDCB0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-2xl font-bold text-white",
                children: "$99"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Starting Price"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83D\uDE80"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-2xl font-bold text-white",
                children: "500+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Services Available"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\u2B50"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-2xl font-bold text-white",
                children: "4.8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Average Rating"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83D\uDC65"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-2xl font-bold text-white",
                children: "10K+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Happy Customers"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                type: "text",
                placeholder: "Search services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "relative",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("select", {
                value: selectedCategory,
                onChange: e => setSelectedCategory(e.target.value),
                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("option", {
                  value: category.id,
                  children: [category.name, " (", category.count, ")"]
                }, category.id))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "relative",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("select", {
                value: priceRange,
                onChange: e => setPriceRange(e.target.value),
                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: priceRanges.map(range => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("option", {
                  value: range.id,
                  children: [range.name, " - ", range.range]
                }, range.id))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "relative",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", {
                value: sortBy,
                onChange: e => setSortBy(e.target.value),
                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "price-low",
                  children: "Price: Low to High"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "price-high",
                  children: "Price: High to Low"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "rating",
                  children: "Highest Rated"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "popularity",
                  children: "Most Popular"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "customers",
                  children: "Most Customers"
                })]
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 pb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "mb-8 text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
            className: "text-gray-300",
            children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "text-white font-semibold",
              children: filteredServices.length
            }), " of", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "text-white font-semibold",
              children: allServices.length
            }), " services"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
          variants: containerVariants,
          initial: "hidden",
          animate: "visible",
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: filteredServices.map(service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            variants: itemVariants,
            className: "bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "text-4xl",
                  children: service.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full",
                    children: "Popular"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "px-3 py-1 text-xs font-bold rounded-full ".concat(getPriceRange(service.price) === 'budget' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : getPriceRange(service.price) === 'mid-range' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : getPriceRange(service.price) === 'enterprise' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-pink-500/20 text-pink-400 border border-pink-500/30'),
                    children: getPriceRange(service.price).charAt(0).toUpperCase() + getPriceRange(service.price).slice(1)
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-2",
                children: service.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-300 text-lg mb-4",
                children: service.tagline
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center justify-between mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "text-3xl font-bold text-white",
                  children: [service.price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "text-gray-400 text-xl",
                    children: service.period
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Star, {
                    className: "w-5 h-5 text-yellow-400 fill-current"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "text-white font-semibold",
                    children: service.rating
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    className: "text-gray-400",
                    children: ["(", service.reviews, ")"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "space-y-3 mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-white font-semibold text-lg",
                  children: "Key Features:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "grid grid-cols-1 gap-2",
                  children: [service.features.slice(0, 4).map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex items-center space-x-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
                      className: "w-4 h-4 text-green-400 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-gray-300",
                      children: feature
                    })]
                  }, index)), service.features.length > 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "text-gray-400 text-sm",
                    children: ["+", service.features.length - 4, " more features"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "grid grid-cols-2 gap-4 mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "bg-white/5 p-3 rounded-lg",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-gray-400 text-sm",
                    children: "Market Size"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-white font-semibold",
                    children: service.marketSize
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "bg-white/5 p-3 rounded-lg",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-gray-400 text-sm",
                    children: "Growth Rate"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-green-400 font-semibold",
                    children: service.growthRate
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "bg-white/5 p-3 rounded-lg",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-gray-400 text-sm",
                    children: "Customers"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-white font-semibold",
                    children: service.customers.toLocaleString()
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "bg-white/5 p-3 rounded-lg",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-gray-400 text-sm",
                    children: "Setup Time"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-white font-semibold",
                    children: service.setupTime
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-white font-semibold mb-2",
                  children: "ROI Benefits"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-300",
                  children: service.roi
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-white font-semibold mb-2",
                  children: "Technology Stack:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex flex-wrap gap-2",
                  children: [service.technology.slice(0, 3).map((tech, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "px-2 py-1 bg-white/10 text-gray-300 text-xs rounded",
                    children: tech
                  }, index)), service.technology.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    className: "px-2 py-1 bg-white/10 text-gray-400 text-xs rounded",
                    children: ["+", service.technology.length - 3, " more"]
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "bg-white/5 p-6 border-t border-white/10",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex flex-col space-y-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                  href: service.link,
                  className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    children: "Learn More & Get Started"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
                    className: "w-4 h-4"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                    className: "text-gray-400 text-sm mb-2",
                    children: "Contact Information"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "space-y-1 text-xs text-gray-300",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                      children: ["\uD83D\uDCF1 ", service.contactInfo.mobile]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                      children: ["\u2709\uFE0F ", service.contactInfo.email]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                      children: ["\uD83D\uDCCD ", service.contactInfo.address]
                    })]
                  })]
                })]
              })
            })]
          }, service.id))
        }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "text-center py-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "text-6xl mb-4",
            children: "\uD83D\uDD0D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
            className: "text-2xl font-bold text-white mb-2",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-gray-400",
            children: "Try adjusting your search criteria or filters"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 pb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-4xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
            className: "text-3xl font-bold text-white mb-4",
            children: "Need Help Choosing the Right Service?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8",
            children: "Our team of experts is here to help you find the perfect solution for your business needs"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83D\uDCF1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                className: "text-white font-semibold mb-1",
                children: "Call Us"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-300",
                children: "+1 302 464 0950"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\u2709\uFE0F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                className: "text-white font-semibold mb-1",
                children: "Email Us"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-300",
                children: "kleber@ziontechgroup.com"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83C\uDF10"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                className: "text-white font-semibold mb-1",
                children: "Visit Us"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-300",
                children: "ziontechgroup.com"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              href: "mailto:kleber@ziontechgroup.com?subject=Service%20Consultation%20Request",
              className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200",
              children: "Request Free Consultation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              href: "tel:+13024640950",
              className: "bg-white/10 text-white py-3 px-8 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200",
              children: "Call for Pricing"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComprehensivePricingShowcase2025);

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 464403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enterpriseAIAutomationServices2025: () => (/* binding */ enterpriseAIAutomationServices2025)
/* harmony export */ });
var enterpriseAIAutomationServices2025 = [{
  id: 'enterprise-ai-workflow-automation',
  name: 'Enterprise AI Workflow Automation',
  tagline: 'Intelligent process automation for enterprise operations',
  price: '$2,499',
  period: '/month',
  description: 'Enterprise-grade AI workflow automation platform that streamlines complex business processes, reduces manual work by 80%, and provides intelligent decision-making capabilities across all departments.',
  features: ['AI-powered process discovery and mapping', 'Intelligent workflow optimization', 'Real-time process monitoring and analytics', 'Automated decision routing', 'Integration with 100+ enterprise systems', 'Advanced security and compliance features', 'Custom workflow builder with drag-and-drop interface', 'Performance analytics and ROI tracking', 'Multi-tenant architecture', '24/7 enterprise support'],
  popular: true,
  icon: '🏢',
  color: 'from-indigo-600 via-purple-600 to-pink-600',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/enterprise-ai-workflow-automation',
  marketPosition: 'Leading enterprise AI workflow automation platform with advanced process intelligence',
  targetAudience: 'Fortune 500 companies, Large enterprises, Government agencies, Healthcare systems, Financial institutions',
  trialDays: 30,
  setupTime: '2-4 weeks',
  category: 'AI Automation',
  realService: true,
  technology: ['OpenAI GPT-4, Claude, BERT, Process Mining, RPA, Machine Learning, Natural Language Processing'],
  integrations: ['SAP, Oracle, Salesforce, Microsoft Dynamics, Workday, ServiceNow, Jira, Confluence'],
  useCases: ['HR process automation, Financial operations, Supply chain optimization, Customer service workflows, Compliance automation'],
  roi: 'Reduce operational costs by 40%, Increase productivity by 60%, Achieve 99.9% process accuracy',
  competitors: ['UiPath, Automation Anywhere, Blue Prism, Pega'],
  marketSize: '$25B RPA and workflow automation market',
  growthRate: '30% annual growth',
  variant: 'ai-autonomous',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Full-stack enterprise AI workflow automation platform with advanced process intelligence, real-time monitoring, and comprehensive analytics dashboard.',
  launchDate: '2025-01-20',
  customers: 45,
  rating: 4.9,
  reviews: 156
}, {
  id: 'ai-powered-business-intelligence-suite',
  name: 'AI-Powered Business Intelligence Suite',
  tagline: 'Transform data into actionable insights with AI',
  price: '$1,999',
  period: '/month',
  description: 'Advanced AI-powered business intelligence platform that automatically analyzes data, generates insights, and provides predictive analytics to drive strategic decision-making.',
  features: ['AI-powered data analysis and insights generation', 'Predictive analytics and forecasting', 'Natural language query interface', 'Automated report generation', 'Real-time dashboard customization', 'Advanced data visualization', 'Machine learning model training', 'Data quality monitoring', 'Multi-source data integration', 'Role-based access control'],
  popular: true,
  icon: '📊',
  color: 'from-blue-600 via-cyan-600 to-teal-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/ai-powered-business-intelligence-suite',
  marketPosition: 'Next-generation AI-powered BI platform with predictive analytics capabilities',
  targetAudience: 'Data analysts, Business intelligence teams, C-level executives, Operations managers, Marketing teams',
  trialDays: 21,
  setupTime: '1-2 weeks',
  category: 'AI Services',
  realService: true,
  technology: ['OpenAI GPT-4, Claude, TensorFlow, PyTorch, Apache Spark, Elasticsearch, PostgreSQL'],
  integrations: ['Salesforce, HubSpot, Google Analytics, AWS, Azure, Google Cloud, Snowflake, Tableau'],
  useCases: ['Sales performance analysis, Customer behavior insights, Operational efficiency tracking, Financial forecasting, Market trend analysis'],
  roi: 'Reduce time to insights by 70%, Increase data-driven decisions by 85%, Improve forecasting accuracy by 40%',
  competitors: ['Tableau, Power BI, Qlik, Looker, Sisense'],
  marketSize: '$35B business intelligence market',
  growthRate: '28% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Comprehensive AI-powered BI platform with advanced analytics, predictive modeling, and intuitive visualization capabilities.',
  launchDate: '2025-01-25',
  customers: 78,
  rating: 4.8,
  reviews: 203
}, {
  id: 'enterprise-ai-security-platform',
  name: 'Enterprise AI Security Platform',
  tagline: 'AI-powered cybersecurity for modern enterprises',
  price: '$3,999',
  period: '/month',
  description: 'Comprehensive AI-powered cybersecurity platform that provides real-time threat detection, automated incident response, and proactive security measures to protect enterprise assets.',
  features: ['AI-powered threat detection and analysis', 'Automated incident response and remediation', 'Behavioral analytics and anomaly detection', 'Real-time security monitoring', 'Advanced threat hunting capabilities', 'Compliance reporting and auditing', 'Integration with security tools', 'Custom security policies', '24/7 security operations center', 'Threat intelligence sharing'],
  popular: true,
  icon: '🛡️',
  color: 'from-red-600 via-orange-600 to-yellow-600',
  textColor: 'text-red-400',
  link: 'https://ziontechgroup.com/enterprise-ai-security-platform',
  marketPosition: 'Leading AI-powered cybersecurity platform with advanced threat detection',
  targetAudience: 'CISOs, Security teams, IT departments, Financial institutions, Healthcare organizations, Government agencies',
  trialDays: 30,
  setupTime: '3-4 weeks',
  category: 'AI Services',
  realService: true,
  technology: ['OpenAI GPT-4, Claude, TensorFlow, PyTorch, Machine Learning, Natural Language Processing'],
  integrations: ['SIEM tools, EDR solutions, Firewalls, IDS/IPS, Vulnerability scanners, Identity management systems'],
  useCases: ['Threat detection and response, Security monitoring, Compliance management, Incident investigation, Security analytics'],
  roi: 'Reduce security incidents by 75%, Decrease response time by 90%, Achieve 99.9% threat detection rate',
  competitors: ['CrowdStrike, SentinelOne, Palo Alto Networks, Fortinet'],
  marketSize: '$45B cybersecurity market',
  growthRate: '35% annual growth',
  variant: 'security-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Enterprise-grade AI security platform with advanced threat detection, automated response, and comprehensive security analytics.',
  launchDate: '2025-01-30',
  customers: 32,
  rating: 4.9,
  reviews: 98
}];

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 669163:
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
/* harmony import */ var private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(165589);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2025-comprehensive-pricing-showcase",
        pathname: "/2025-comprehensive-pricing-showcase",
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
    userland: private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2025-comprehensive-pricing-showcase",
    config,
    userland: private_next_pages_2025_comprehensive_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(669163)));
module.exports = __webpack_exports__;

})();