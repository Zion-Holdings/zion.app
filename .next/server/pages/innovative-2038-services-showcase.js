"use strict";
(() => {
var exports = {};
exports.id = 825488;
exports.ids = [825488,890636];
exports.modules = {

/***/ 190076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7887);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(297012);
/* harmony import */ var _data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(528190);
/* harmony import */ var _data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_innovative_2038_ai_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(367705);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






// Import our new innovative 2038 services




var Innovative2038ServicesShowcase = () => {
  var [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name');

  // Combine all services
  var allServices = [..._data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_3__.innovative2038MicroSaasServices, ..._data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4__.innovative2038ITServices, ..._data_innovative_2038_ai_services__WEBPACK_IMPORTED_MODULE_5__.innovative2038AIServices];

  // Filter and sort services
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase()) || service.category.toLowerCase().includes(searchQuery.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    var _a$price, _b$price;
    switch (sortBy) {
      case 'price':
        return (((_a$price = a.price) === null || _a$price === void 0 ? void 0 : _a$price.monthly) || 0) - (((_b$price = b.price) === null || _b$price === void 0 ? void 0 : _b$price.monthly) || 0);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Get unique categories
  var categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Get service pricing display
  var getServicePricing = service => {
    var _service$pricing, _service$price;
    if ((_service$pricing = service.pricing) !== null && _service$pricing !== void 0 && _service$pricing.starter) return "$".concat(service.pricing.starter, "/month");
    if ((_service$price = service.price) !== null && _service$price !== void 0 && _service$price.monthly) return "$".concat(service.price.monthly, "/month");
    return 'Contact for pricing';
  };

  // Get service features
  var getServiceFeatures = service => {
    if (service.features) return service.features;
    if (service.keyFeatures) return service.keyFeatures;
    return [];
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "min-h-screen bg-black text-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "Innovative 2038 Services Showcase | Zion Tech Group",
      description: "Discover our cutting-edge 2038 services featuring AI consciousness, quantum computing, autonomous systems, and revolutionary micro SAAS solutions.",
      keywords: ["AI consciousness", "quantum computing", "autonomous systems", "micro SAAS", "2038 services", "Zion Tech Group"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: "relative py-20 px-4 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "relative z-10 max-w-7xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
          className: "space-y-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            initial: {
              opacity: 0,
              scale: 0.8
            },
            animate: {
              opacity: 1,
              scale: 1
            },
            transition: {
              duration: 0.6,
              delay: 0.2
            },
            className: "inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Star, {
              className: "w-4 h-4"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "Innovation Leader 2038"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
            className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
            children: "Innovative 2038 Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed",
            children: "Experience the future with our revolutionary AI consciousness, quantum computing, and autonomous systems that transform industries and drive human progress"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
                delay: 0.4
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-cyan-400 mb-2",
                children: allServices.length
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Total Services"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
                delay: 0.5
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-blue-400 mb-2",
                children: "3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Categories"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
                delay: 0.6
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-purple-400 mb-2",
                children: "100%"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Market Ready"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
                delay: 0.7
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl font-bold text-green-400 mb-2",
                children: "24/7"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-gray-400 text-sm",
                children: "Support"
              })]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-8 px-4 border-b border-cyan-400/20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col lg:flex-row items-center justify-between gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col sm:flex-row items-center gap-4 flex-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "relative flex-1 max-w-md",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                type: "text",
                placeholder: "Search services...",
                value: searchQuery,
                onChange: e => setSearchQuery(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
              value: selectedCategory,
              onChange: e => setSelectedCategory(e.target.value),
              className: "px-4 py-3 bg-black/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: category,
                children: category === 'all' ? 'All Categories' : category
              }, category))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              value: sortBy,
              onChange: e => setSortBy(e.target.value),
              className: "px-4 py-3 bg-black/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "name",
                children: "Sort by Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "price",
                children: "Sort by Price"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "category",
                children: "Sort by Category"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              onClick: () => setViewMode('grid'),
              className: "p-2 rounded-lg transition-all duration-200 ".concat(viewMode === 'grid' ? 'bg-cyan-400/20 text-cyan-400' : 'bg-gray-800/50 text-gray-400 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                className: "w-5 h-5"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              onClick: () => setViewMode('list'),
              className: "p-2 rounded-lg transition-all duration-200 ".concat(viewMode === 'list' ? 'bg-cyan-400/20 text-cyan-400' : 'bg-gray-800/50 text-gray-400 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.List, {
                className: "w-5 h-5"
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: filteredServices.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "text-center py-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "text-6xl mb-4",
            children: "\uD83D\uDD0D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "text-2xl font-bold text-white mb-2",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-gray-400",
            children: "Try adjusting your search or filter criteria"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6',
          children: filteredServices.map((service, index) => {
            var _service$contactInfo, _service$contactInfo2;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
              className: "group ".concat(viewMode === 'grid' ? 'bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105' : 'bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300'),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex items-center space-x-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "text-3xl",
                    children: service.icon
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                      className: "text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200",
                      children: service.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                      className: "text-sm text-cyan-400 font-medium",
                      children: service.category
                    })]
                  })]
                }), service.marketReady && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex items-center space-x-1 px-2 py-1 bg-green-400/20 rounded-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Check, {
                    className: "w-3 h-3 text-green-400"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "text-xs text-green-400 font-medium",
                    children: "Ready"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-300 mb-4 leading-relaxed",
                children: service.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                  className: "text-sm font-semibold text-white mb-2",
                  children: "Key Features:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "grid grid-cols-1 gap-1",
                  children: getServiceFeatures(service).slice(0, 4).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex items-center space-x-2 text-sm text-gray-400",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Check, {
                      className: "w-3 h-3 text-cyan-400 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      children: feature
                    })]
                  }, idx))
                })]
              }), service.benefits && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                  className: "text-sm font-semibold text-white mb-2",
                  children: "Benefits:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "flex flex-wrap gap-2",
                  children: service.benefits.slice(0, 3).map((benefit, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full",
                    children: benefit
                  }, idx))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-2xl font-bold text-cyan-400",
                  children: getServicePricing(service)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-sm text-gray-400",
                  children: service.targetAudience
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/services/".concat(service.id),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
                    children: "Learn More"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "px-4 py-2 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300",
                    children: "Get Started"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "mt-4 pt-4 border-t border-cyan-400/20",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex items-center justify-between text-sm text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    children: ["Contact: ", (_service$contactInfo = service.contactInfo) === null || _service$contactInfo === void 0 ? void 0 : _service$contactInfo.phone]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    children: (_service$contactInfo2 = service.contactInfo) === null || _service$contactInfo2 === void 0 ? void 0 : _service$contactInfo2.email
                  })]
                })
              })]
            }, service.id);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-4xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
          className: "space-y-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-2xl mx-auto",
            children: "Join the future with our innovative 2038 services. Contact us today to learn how we can help you achieve unprecedented success."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                  className: "flex items-center gap-2",
                  children: ["Get Started Today", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
                    className: "w-5 h-5"
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/services",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                className: "px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105",
                children: "View All Services"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Phone, {
                className: "w-8 h-8 text-cyan-400 mx-auto mb-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-white font-semibold",
                children: "Phone"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-400",
                children: "+1 302 464 0950"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Mail, {
                className: "w-8 h-8 text-cyan-400 mx-auto mb-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-white font-semibold",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-400",
                children: "kleber@ziontechgroup.com"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.MapPin, {
                className: "w-8 h-8 text-cyan-400 mx-auto mb-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-white font-semibold",
                children: "Address"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-400",
                children: "364 E Main St STE 1008, Middletown DE 19709"
              })]
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Innovative2038ServicesShowcase);

/***/ }),

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

/***/ 954109:
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
/* harmony import */ var private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(190076);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/innovative-2038-services-showcase",
        pathname: "/innovative-2038-services-showcase",
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
    userland: private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/innovative-2038-services-showcase",
    config,
    userland: private_next_pages_innovative_2038_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(954109)));
module.exports = __webpack_exports__;

})();