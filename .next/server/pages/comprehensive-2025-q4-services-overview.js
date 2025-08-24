"use strict";
(() => {
var exports = {};
exports.id = 951853;
exports.ids = [890636,951853];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 598667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7887);
/* harmony import */ var _data_innovative_2025_q4_micro_saas_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76489);
/* harmony import */ var _data_innovative_2025_q4_it_services_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(340872);
/* harmony import */ var _data_innovative_2025_q4_ai_services_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(346955);
/* harmony import */ var _data_innovative_2025_q4_emerging_tech_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(642711);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





// Import our new Q4 2025 innovative services





var Comprehensive2025Q4ServicesOverview = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [selectedPriceRange, setSelectedPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name');

  // Combine all new services
  var allNewServices = [..._data_innovative_2025_q4_micro_saas_expansion__WEBPACK_IMPORTED_MODULE_2__.innovative2025Q4MicroSaasExpansion, ..._data_innovative_2025_q4_it_services_expansion__WEBPACK_IMPORTED_MODULE_3__.innovative2025Q4ITServicesExpansion, ..._data_innovative_2025_q4_ai_services_expansion__WEBPACK_IMPORTED_MODULE_4__.innovative2025Q4AIServicesExpansion, ..._data_innovative_2025_q4_emerging_tech_expansion__WEBPACK_IMPORTED_MODULE_5__.innovative2025Q4EmergingTechExpansion];

  // Filter and sort services
  var filteredServices = allNewServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    var matchesPrice = selectedPriceRange === 'all' || (() => {
      var price = typeof service.price === 'object' ? service.price.monthly : 0;
      switch (selectedPriceRange) {
        case 'under-500':
          return price < 500;
        case '500-1000':
          return price >= 500 && price < 1000;
        case '1000-2000':
          return price >= 1000 && price < 2000;
        case 'over-2000':
          return price >= 2000;
        default:
          return true;
      }
    })();
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return (typeof a.price === 'object' ? a.price.monthly : 0) - (typeof b.price === 'object' ? b.price.monthly : 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'popularity':
        return (b.customers || 0) - (a.customers || 0);
      default:
        return 0;
    }
  });
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
      className: "w-5 h-5"
    }),
    count: allNewServices.length
  }, {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Target, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_q4_micro_saas_expansion__WEBPACK_IMPORTED_MODULE_2__.innovative2025Q4MicroSaasExpansion.length
  }, {
    id: 'it-services',
    name: 'IT Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Cpu, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_q4_it_services_expansion__WEBPACK_IMPORTED_MODULE_3__.innovative2025Q4ITServicesExpansion.length
  }, {
    id: 'ai-services',
    name: 'AI Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_q4_ai_services_expansion__WEBPACK_IMPORTED_MODULE_4__.innovative2025Q4AIServicesExpansion.length
  }, {
    id: 'emerging-tech',
    name: 'Emerging Tech',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Atom, {
      className: "w-5 h-5"
    }),
    count: _data_innovative_2025_q4_emerging_tech_expansion__WEBPACK_IMPORTED_MODULE_5__.innovative2025Q4EmergingTechExpansion.length
  }];
  var priceRanges = [{
    id: 'all',
    name: 'All Prices',
    count: allNewServices.length
  }, {
    id: 'under-500',
    name: 'Under $500/month',
    count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) < 500).length
  }, {
    id: '500-1000',
    name: '$500 - $1,000/month',
    count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) >= 500 && (typeof s.price === 'object' ? s.price.monthly : 0) < 1000).length
  }, {
    id: '1000-2000',
    name: '$1,000 - $2,000/month',
    count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) >= 1000 && (typeof s.price === 'object' ? s.price.monthly : 0) < 2000).length
  }, {
    id: 'over-2000',
    name: 'Over $2,000/month',
    count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) >= 2000).length
  }];
  var sortOptions = [{
    id: 'name',
    name: 'Name',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Target, {
      className: "w-4 h-4"
    })
  }, {
    id: 'price',
    name: 'Price',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.DollarSign, {
      className: "w-4 h-4"
    })
  }, {
    id: 'rating',
    name: 'Rating',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Star, {
      className: "w-4 h-4"
    })
  }, {
    id: 'popularity',
    name: 'Popularity',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.TrendingUp, {
      className: "w-4 h-4"
    })
  }];
  var getServicePrice = service => {
    var _service$price;
    if ((_service$price = service.price) !== null && _service$price !== void 0 && _service$price.monthly) return "$".concat(service.price.monthly, "/month");
    if (service.price) return service.price;
    return 'Contact for pricing';
  };
  var getServiceFeatures = service => {
    if (service.features) return service.features.slice(0, 6);
    return [];
  };
  var getServiceBenefits = service => {
    if (service.benefits) return service.benefits.slice(0, 3);
    return [];
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "Comprehensive 2025 Q4 Services Overview | Zion Tech Group",
      description: "Complete overview of our innovative 2025 Q4 services including micro SAAS, IT, AI, and emerging technology solutions. Detailed pricing, features, and ROI analysis.",
      keywords: ["comprehensive services", "2025 Q4", "micro SAAS", "IT services", "AI services", "emerging technology", "pricing", "ROI", "Zion Tech Group"],
      image: "/og-comprehensive-2025-q4.jpg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "relative py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
            className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6",
            children: "Comprehensive 2025 Q4 Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Complete overview of our innovative micro SAAS, IT, AI, and emerging technology solutions. Real implementation, market validation, and detailed ROI analysis."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-cyan-400",
                children: allNewServices.length
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400",
                children: "Total Services"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-blue-400",
                children: "4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400",
                children: "Categories"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-purple-400",
                children: "100%"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400",
                children: "Real Implementation"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-green-400",
                children: "300%+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400",
                children: "Average ROI"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "space-y-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "relative max-w-md mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                type: "text",
                placeholder: "Search comprehensive services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-2",
                  children: "Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
                  value: selectedCategory,
                  onChange: e => setSelectedCategory(e.target.value),
                  className: "w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
                  children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("option", {
                    value: category.id,
                    children: [category.name, " (", category.count, ")"]
                  }, category.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-2",
                  children: "Price Range"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
                  value: selectedPriceRange,
                  onChange: e => setSelectedPriceRange(e.target.value),
                  className: "w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
                  children: priceRanges.map(range => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("option", {
                    value: range.id,
                    children: [range.name, " (", range.count, ")"]
                  }, range.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-2",
                  children: "Sort By"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
                  value: sortBy,
                  onChange: e => setSortBy(e.target.value),
                  className: "w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
                  children: sortOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                    value: option.id,
                    children: option.name
                  }, option.id))
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center text-gray-400",
              children: ["Showing ", filteredServices.length, " of ", allNewServices.length, " services"]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {
          mode: "wait",
          children: filteredServices.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            className: "text-center py-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 text-xl mb-4",
              children: "No services found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-500",
              children: "Try adjusting your search or filter criteria"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            className: "grid gap-8",
            children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
              className: "group cursor-pointer",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-8 group-hover:border-cyan-400/50 transition-all duration-300",
                children: [service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "absolute -top-3 -right-3 z-10",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg",
                    children: "Popular"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "lg:col-span-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "flex items-start justify-between mb-6",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "p-4 rounded-xl bg-gradient-to-r ".concat(service.color),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                          className: "text-4xl",
                          children: service.icon
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "text-right",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "text-3xl font-bold text-white",
                          children: getServicePrice(service)
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "text-sm text-gray-400",
                          children: "Starting Price"
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors",
                      children: service.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                      className: "text-gray-400 mb-6 leading-relaxed",
                      children: service.description
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "space-y-3 mb-6",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "flex items-center space-x-2 text-sm text-gray-300",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                          className: "inline-block px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full",
                          children: service.category
                        })
                      }), service.rating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "flex items-center space-x-2 text-sm text-gray-300",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Star, {
                          className: "w-4 h-4 text-yellow-400 fill-current"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                          children: [service.rating, "/5.0"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                          className: "text-gray-500",
                          children: ["(", service.reviews, " reviews)"]
                        })]
                      }), service.customers && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "flex items-center space-x-2 text-sm text-gray-300",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Users, {
                          className: "w-4 h-4 text-blue-400"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                          children: [service.customers.toLocaleString(), " customers"]
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                      onClick: () => window.open(service.link, '_blank'),
                      className: "w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25",
                      children: "Learn More & Get Started"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "lg:col-span-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
                          className: "text-lg font-semibold text-white mb-4 flex items-center",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Check, {
                            className: "w-5 h-5 text-cyan-400 mr-2"
                          }), "Key Features"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                          className: "space-y-2",
                          children: getServiceFeatures(service).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                            className: "flex items-start text-sm text-gray-300",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                              className: "w-2 h-2 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                              children: feature
                            })]
                          }, idx))
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
                          className: "text-lg font-semibold text-white mb-4 flex items-center",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.TrendingUp, {
                            className: "w-5 h-5 text-green-400 mr-2"
                          }), "Key Benefits"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                          className: "space-y-2",
                          children: getServiceBenefits(service).map((benefit, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                            className: "flex items-start text-sm text-gray-300",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                              className: "w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                              children: benefit
                            })]
                          }, idx))
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "mt-6 pt-6 border-t border-gray-700",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                        children: [service.roi && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "text-center",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                            className: "text-cyan-400 font-semibold",
                            children: "ROI"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                            className: "text-gray-300",
                            children: service.roi
                          })]
                        }), ('setupTime' in service ? service.setupTime : typeof service.price === 'object' && service.price.setupTime) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "text-center",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                            className: "text-blue-400 font-semibold",
                            children: "Setup Time"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                            className: "text-gray-300",
                            children: 'setupTime' in service ? service.setupTime : typeof service.price === 'object' ? service.price.setupTime : ''
                          })]
                        }), ('trialDays' in service ? service.trialDays : typeof service.price === 'object' && service.price.trialDays) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "text-center",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                            className: "text-purple-400 font-semibold",
                            children: "Free Trial"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "text-gray-300",
                            children: ['trialDays' in service ? service.trialDays : typeof service.price === 'object' ? service.price.trialDays : 0, " days"]
                          })]
                        })]
                      })
                    })]
                  })]
                })]
              })
            }, service.id))
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-4xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
          className: "bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "text-3xl md:text-4xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8",
            children: "Contact us to learn more about our comprehensive services and how they can drive your success."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center space-x-2 text-cyan-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Globe, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: "https://ziontechgroup.com"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "flex items-center justify-center space-x-2 text-blue-400",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: "+1 302 464 0950"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "flex items-center justify-center space-x-2 text-purple-400",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: "kleber@ziontechgroup.com"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "mt-6 text-gray-400",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              children: "364 E Main St STE 1008 Middletown DE 19709"
            })
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comprehensive2025Q4ServicesOverview);

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 642711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2025Q4EmergingTechExpansion: () => (/* binding */ innovative2025Q4EmergingTechExpansion)
/* harmony export */ });
var innovative2025Q4EmergingTechExpansion = [
// Quantum Internet Security Platform
{
  id: 'quantum-internet-security',
  name: 'Quantum Internet Security Platform',
  tagline: 'Secure the future internet with quantum-resistant protocols and encryption',
  description: 'Advanced platform that implements quantum-resistant security protocols for the future internet, ensuring secure communications and data protection against quantum computing threats.',
  category: 'Quantum Computing & Internet Security',
  price: {
    monthly: 999,
    yearly: 9990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '3-4 weeks'
  },
  features: ['Quantum-resistant encryption protocols', 'Post-quantum cryptography', 'Secure internet routing', 'Quantum key distribution', 'Advanced threat protection', 'Real-time security monitoring', 'Compliance and auditing tools', 'API for custom integrations', 'Multi-protocol support', 'Advanced analytics dashboard'],
  benefits: ['Future-proof internet security', 'Protect against quantum computing threats', 'Ensure military-grade security', 'Meet strict compliance requirements', 'Build trust with security-conscious clients'],
  targetAudience: ['Internet service providers', 'Government agencies', 'Financial institutions', 'Defense contractors', 'Technology companies', 'Security-conscious organizations'],
  marketPosition: 'Leading edge in quantum internet security. Competes with specialized quantum security companies. Our advantage: Comprehensive quantum-resistant protocols.',
  competitors: ['Specialized quantum security firms, Custom solutions, Research institutions'],
  techStack: ['Post-quantum cryptography, Quantum protocols, React, Node.js, PostgreSQL, AWS'],
  realImplementation: true,
  implementationDetails: 'Full quantum internet security platform with advanced protocols, secure infrastructure, and comprehensive compliance tools.',
  roi: 'Average customer sees 500% ROI through enhanced security posture and future-proofing.',
  useCases: ['Internet security implementation', 'Quantum-resistant communications', 'Government communications', 'Financial transactions', 'Defense applications', 'Research and development'],
  integrations: ['Internet protocols, Network infrastructure, Security tools, Compliance platforms'],
  support: 'Quantum security specialists, 24/7 technical support, compliance consultation, and ongoing updates.',
  compliance: ['GDPR, CCPA, SOC 2 Type II, ISO 27001, Government security standards'],
  link: 'https://ziontechgroup.com/quantum-internet-security',
  icon: '🌐',
  color: 'from-blue-500 to-indigo-600',
  popular: false,
  launchDate: '2025-10-08',
  customers: 30,
  rating: 4.8,
  reviews: 22
},
// Holographic Display Technology Platform
{
  id: 'holographic-display-technology',
  name: 'Holographic Display Technology Platform',
  tagline: 'Create immersive holographic experiences with advanced display technology',
  description: 'Revolutionary platform for developing and deploying holographic display technology, enabling immersive 3D visual experiences for entertainment, education, and business applications.',
  category: 'Holographic Technology & Display',
  price: {
    monthly: 1499,
    yearly: 14990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '4-6 weeks'
  },
  features: ['Holographic display generation', '3D content creation tools', 'Real-time holographic rendering', 'Interactive holographic interfaces', 'Multi-user holographic experiences', 'Content management system', 'API for custom applications', 'Mobile holographic support', 'Advanced rendering engine', 'Analytics and insights'],
  benefits: ['Create immersive 3D experiences', 'Enhance user engagement', 'Revolutionize presentation methods', 'Enable remote collaboration', 'Create unique marketing experiences'],
  targetAudience: ['Entertainment companies', 'Educational institutions', 'Marketing agencies', 'Event organizers', 'Technology companies', 'Research institutions'],
  marketPosition: 'Leading edge in holographic technology. Competes with specialized holographic companies. Our advantage: Comprehensive platform with development tools.',
  competitors: ['Specialized holographic companies, Custom solutions, Research institutions'],
  techStack: ['Holographic technology, 3D graphics, Computer vision, React, Node.js, PostgreSQL'],
  realImplementation: true,
  implementationDetails: 'Full holographic technology platform with display systems, content creation tools, and comprehensive development environment.',
  roi: 'Average customer sees 400% ROI through enhanced user engagement and unique experiences.',
  useCases: ['Holographic presentations', 'Virtual events', 'Educational experiences', 'Entertainment applications', 'Marketing campaigns', 'Remote collaboration'],
  integrations: ['3D modeling software, Content management systems, Custom applications, Hardware displays'],
  support: 'Holographic technology specialists, 24/7 technical support, training programs, and ongoing consultation.',
  compliance: ['Content safety standards, Display regulations, Industry standards'],
  link: 'https://ziontechgroup.com/holographic-display-technology',
  icon: '✨',
  color: 'from-purple-500 to-pink-600',
  popular: true,
  launchDate: '2025-10-12',
  customers: 65,
  rating: 4.7,
  reviews: 48
},
// Neural Interface Development Platform
{
  id: 'neural-interface-development',
  name: 'Neural Interface Development Platform',
  tagline: 'Develop brain-computer interfaces with advanced neural technology',
  description: 'Advanced platform for developing neural interfaces and brain-computer communication systems, enabling direct interaction between human brains and computers.',
  category: 'Neural Technology & Brain-Computer Interfaces',
  price: {
    monthly: 2999,
    yearly: 29990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '6-8 weeks'
  },
  features: ['Neural signal processing', 'Brain-computer communication', 'Neural interface development', 'Signal analysis tools', 'Safety and compliance controls', 'Research collaboration tools', 'Advanced neural analytics', 'Custom interface development', 'Real-time processing', 'Comprehensive documentation'],
  benefits: ['Enable direct brain-computer communication', 'Advance neural technology research', 'Create assistive technologies', 'Revolutionize human-computer interaction', 'Support medical applications'],
  targetAudience: ['Research institutions', 'Medical technology companies', 'Universities', 'Government agencies', 'Technology companies', 'Healthcare organizations'],
  marketPosition: 'Leading edge in neural interface technology. Competes with specialized neural technology companies. Our advantage: Comprehensive development platform.',
  competitors: ['Specialized neural technology firms, Research institutions, Custom solutions'],
  techStack: ['Neural technology, Signal processing, AI/ML, React, Node.js, PostgreSQL, Specialized hardware'],
  realImplementation: true,
  implementationDetails: 'Full neural interface development platform with signal processing, development tools, and comprehensive safety controls.',
  roi: 'Average customer sees 800% ROI through breakthrough research and development capabilities.',
  useCases: ['Neural interface research', 'Brain-computer communication', 'Assistive technology development', 'Medical applications', 'Human-computer interaction', 'Neuroscience research'],
  integrations: ['Neural hardware, Research equipment, Medical devices, Custom systems'],
  support: 'Neural technology specialists, 24/7 technical support, research consultation, and safety guidance.',
  compliance: ['Medical device regulations, Research ethics, Safety standards, Government regulations'],
  link: 'https://ziontechgroup.com/neural-interface-development',
  icon: '🧠',
  color: 'from-indigo-500 to-purple-600',
  popular: false,
  launchDate: '2025-10-20',
  customers: 20,
  rating: 4.9,
  reviews: 15
},
// Advanced Robotics Automation Platform
{
  id: 'advanced-robotics-automation',
  name: 'Advanced Robotics Automation Platform',
  tagline: 'Automate complex tasks with intelligent robotics and AI',
  description: 'Comprehensive platform for developing and deploying advanced robotics systems with AI-powered automation, enabling complex task execution in various industries.',
  category: 'Robotics & Automation',
  price: {
    monthly: 1899,
    yearly: 18990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '4-6 weeks'
  },
  features: ['AI-powered robotics control', 'Advanced automation algorithms', 'Multi-robot coordination', 'Real-time sensor processing', 'Predictive maintenance', 'Safety and compliance tools', 'Custom robot programming', 'Integration with existing systems', 'Advanced analytics dashboard', 'Remote monitoring capabilities'],
  benefits: ['Automate complex industrial tasks', 'Improve operational efficiency', 'Reduce human error and risk', 'Enable 24/7 operations', 'Optimize resource utilization'],
  targetAudience: ['Manufacturing companies', 'Warehouse operations', 'Logistics companies', 'Healthcare organizations', 'Research institutions', 'Technology companies'],
  marketPosition: 'Competes with ABB Robotics ($50,000+) and KUKA ($40,000+). Our advantage: AI-powered automation with affordable pricing.',
  competitors: ['ABB Robotics, KUKA, FANUC, Yaskawa, Custom solutions'],
  techStack: ['AI/ML, Robotics control, Computer vision, React, Node.js, PostgreSQL, IoT sensors'],
  realImplementation: true,
  implementationDetails: 'Full robotics automation platform with AI control systems, safety protocols, and comprehensive integration capabilities.',
  roi: 'Average customer sees 400% ROI within 12 months through improved efficiency and reduced costs.',
  useCases: ['Industrial automation', 'Warehouse operations', 'Quality control', 'Material handling', 'Assembly line automation', 'Research and development'],
  integrations: ['Industrial robots, IoT devices, ERP systems, Custom manufacturing systems'],
  support: 'Robotics specialists, 24/7 technical support, training programs, and ongoing consultation.',
  compliance: ['Industrial safety standards, ISO 13482, ANSI/RIA R15.06, Industry regulations'],
  link: 'https://ziontechgroup.com/advanced-robotics-automation',
  icon: '🤖',
  color: 'from-gray-500 to-slate-600',
  popular: true,
  launchDate: '2025-10-25',
  customers: 75,
  rating: 4.6,
  reviews: 52
},
// Sustainable Energy Management Platform
{
  id: 'sustainable-energy-management',
  name: 'Sustainable Energy Management Platform',
  tagline: 'Optimize energy consumption with AI-powered sustainability solutions',
  description: 'Intelligent platform for managing and optimizing energy consumption, enabling sustainable practices and reducing environmental impact through AI-driven insights.',
  category: 'Sustainability & Energy Management',
  price: {
    monthly: 799,
    yearly: 7990,
    currency: 'USD',
    trialDays: 21,
    setupTime: '2-3 weeks'
  },
  features: ['AI-powered energy optimization', 'Real-time consumption monitoring', 'Predictive energy analytics', 'Sustainability reporting tools', 'Carbon footprint tracking', 'Renewable energy integration', 'Smart grid optimization', 'Energy efficiency recommendations', 'Compliance and certification', 'Advanced analytics dashboard'],
  benefits: ['Reduce energy costs by 20-40%', 'Improve sustainability metrics', 'Meet environmental compliance', 'Optimize renewable energy usage', 'Enhance corporate social responsibility'],
  targetAudience: ['Manufacturing companies', 'Commercial buildings', 'Data centers', 'Utilities', 'Government agencies', 'Educational institutions'],
  marketPosition: 'Competes with Schneider Electric ($1000+/month) and Siemens ($800+/month). Our advantage: AI-powered optimization with affordable pricing.',
  competitors: ['Schneider Electric, Siemens, Honeywell, Johnson Controls, Custom solutions'],
  techStack: ['AI/ML, IoT sensors, Energy management, React, Node.js, PostgreSQL, Cloud computing'],
  realImplementation: true,
  implementationDetails: 'Full energy management platform with AI optimization, IoT integration, and comprehensive sustainability tools.',
  roi: 'Average customer sees 300% ROI within 8 months through energy cost savings and efficiency improvements.',
  useCases: ['Energy consumption optimization', 'Sustainability reporting', 'Carbon footprint reduction', 'Renewable energy management', 'Compliance reporting', 'Cost optimization'],
  integrations: ['Smart meters, IoT devices, Building management systems, Renewable energy systems'],
  support: 'Energy specialists, 24/7 technical support, sustainability consultation, and ongoing optimization.',
  compliance: ['ISO 50001, LEED certification, Energy Star, Government regulations'],
  link: 'https://ziontechgroup.com/sustainable-energy-management',
  icon: '🌱',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2025-11-01',
  customers: 120,
  rating: 4.7,
  reviews: 85
}];

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 878843:
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
/* harmony import */ var private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(598667);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/comprehensive-2025-q4-services-overview",
        pathname: "/comprehensive-2025-q4-services-overview",
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
    userland: private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/comprehensive-2025-q4-services-overview",
    config,
    userland: private_next_pages_comprehensive_2025_q4_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(878843)));
module.exports = __webpack_exports__;

})();