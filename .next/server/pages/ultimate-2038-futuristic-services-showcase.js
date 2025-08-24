"use strict";
(() => {
var exports = {};
exports.id = 645895;
exports.ids = [645895,890636];
exports.modules = {

/***/ 239561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7887);
/* harmony import */ var _data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297012);
/* harmony import */ var _data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_innovative_2038_ai_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(367705);
/* harmony import */ var _data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(528190);
/* harmony import */ var _data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_innovative_2037_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(248299);
/* harmony import */ var _data_innovative_2037_micro_saas_services__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_innovative_2037_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_innovative_2037_ai_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(138870);
/* harmony import */ var _data_innovative_2037_ai_services__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_innovative_2037_ai_services__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_innovative_2037_it_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(352881);
/* harmony import */ var _data_innovative_2037_it_services__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_innovative_2037_it_services__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);





// Import our new service data




// Import existing service data




// Create unified services array

var allServices = [..._data_innovative_2038_micro_saas_services__WEBPACK_IMPORTED_MODULE_2__.innovative2038MicroSaasServices, ..._data_innovative_2038_ai_services__WEBPACK_IMPORTED_MODULE_3__.innovative2038AIServices, ..._data_innovative_2038_it_services__WEBPACK_IMPORTED_MODULE_4__.innovative2038ITServices, ..._data_innovative_2037_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__.innovative2037MicroSaasServices, ..._data_innovative_2037_ai_services__WEBPACK_IMPORTED_MODULE_6__.innovative2037AIServices, ..._data_innovative_2037_it_services__WEBPACK_IMPORTED_MODULE_7__.innovative2037ITServices];
var categories = [{
  id: 'all',
  name: 'All Services',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Grid, {
    className: "w-6 h-6"
  }),
  color: 'from-gray-500 to-slate-500',
  description: 'Complete portfolio of all services'
}, {
  id: 'micro-saas',
  name: 'Micro SAAS Solutions',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Rocket, {
    className: "w-6 h-6"
  }),
  color: 'from-cyan-500 to-blue-500',
  description: 'Innovative business solutions'
}, {
  id: 'ai-services',
  name: 'AI & Machine Learning',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Brain, {
    className: "w-6 h-6"
  }),
  color: 'from-purple-500 to-pink-500',
  description: 'Advanced AI solutions'
}, {
  id: 'it-services',
  name: 'IT Infrastructure',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Shield, {
    className: "w-6 h-6"
  }),
  color: 'from-green-500 to-emerald-500',
  description: 'Enterprise IT solutions'
}, {
  id: 'quantum',
  name: 'Quantum Technology',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Atom, {
    className: "w-6 h-6"
  }),
  color: 'from-indigo-500 to-purple-500',
  description: 'Quantum computing solutions'
}, {
  id: 'space-tech',
  name: 'Space Technology',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Globe, {
    className: "w-6 h-6"
  }),
  color: 'from-orange-500 to-red-500',
  description: 'Space exploration solutions'
}];
var Ultimate2038FuturisticServicesShowcase = () => {
  var _categories$find;
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('rating');
  var [priceRange, setPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 5000]);

  // Filter and sort services
  var filteredServices = allServices.filter(service => {
    var matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory) || service.id.includes(selectedCategory);
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesPrice = parseFloat(service.pricing.starter.replace(/[^0-9]/g, '')) >= priceRange[0] && parseFloat(service.pricing.enterprise.replace(/[^0-9]/g, '')) <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.pricing.starter.replace(/[^0-9]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'launchDate':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });
  var getServiceCategory = service => {
    if (service.category) return service.category;
    if (service.id.includes('ai-')) return 'AI & Machine Learning';
    if (service.id.includes('quantum-')) return 'Quantum Technology';
    if (service.id.includes('space-')) return 'Space Technology';
    return 'Micro SAAS Solutions';
  };
  var getServicePricing = service => {
    var _service$pricing, _service$pricing2;
    if ((_service$pricing = service.pricing) !== null && _service$pricing !== void 0 && _service$pricing.starter) return service.pricing.starter;
    if ((_service$pricing2 = service.pricing) !== null && _service$pricing2 !== void 0 && _service$pricing2.monthly) return "$".concat(service.pricing.monthly, "/month");
    return 'Contact for pricing';
  };
  var getServiceFeatures = service => {
    if (service.features) return service.features;
    if (service.keyFeatures) return service.keyFeatures;
    return [];
  };
  var getServiceDescription = service => {
    if (service.description) return service.description;
    if (service.tagline) return service.tagline;
    return 'No description available';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "min-h-screen bg-black text-white relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
        className: "relative py-20 px-4 overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "absolute inset-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "absolute top-0 left-0 w-full h-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "absolute top-1/2 right-1/4 w-16 h-16 border border-blue-400/20 rounded-lg animate-pulse delay-1500"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "relative z-10 max-w-6xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Sparkles, {
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: "2038 Futuristic Services"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
              className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
              children: "Ultimate 2038 Services Showcase"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed",
              children: "Discover our revolutionary portfolio of cutting-edge technology solutions that define the future of business transformation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
              className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "text-3xl font-bold text-cyan-400 mb-2",
                  children: [allServices.length, "+"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-gray-300 text-sm",
                  children: "Innovative Services"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-3xl font-bold text-blue-400 mb-2",
                  children: "15+"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-gray-300 text-sm",
                  children: "Technology Categories"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-3xl font-bold text-purple-400 mb-2",
                  children: "4.8+"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-gray-300 text-sm",
                  children: "Average Rating"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-3xl font-bold text-green-400 mb-2",
                  children: "24/7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "text-gray-300 text-sm",
                  children: "Support Available"
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
        className: "py-8 px-4 bg-black/50 backdrop-blur-sm border-b border-white/10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex flex-col lg:flex-row gap-6 items-center justify-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "relative flex-1 max-w-md",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "text",
                placeholder: "Search services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                onClick: () => setSelectedCategory(category.id),
                className: "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg' : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                  className: "flex items-center gap-2",
                  children: [category.icon, category.name]
                })
              }, category.id))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex items-center bg-white/5 rounded-lg border border-white/10",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  onClick: () => setViewMode('grid'),
                  className: "p-2 rounded-l-lg transition-colors ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                    className: "w-5 h-5"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  onClick: () => setViewMode('list'),
                  className: "p-2 rounded-r-lg transition-colors ".concat(viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.List, {
                    className: "w-5 h-5"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                value: sortBy,
                onChange: e => setSortBy(e.target.value),
                className: "px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                  value: "rating",
                  children: "Sort by Rating"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                  value: "price",
                  children: "Sort by Price"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                  value: "name",
                  children: "Sort by Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                  value: "launchDate",
                  children: "Sort by Launch Date"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mt-6 flex items-center gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-gray-300 text-sm",
              children: "Price Range:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "number",
                placeholder: "Min",
                value: priceRange[0],
                onChange: e => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]]),
                className: "w-20 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-gray-400",
                children: "-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "number",
                placeholder: "Max",
                value: priceRange[1],
                onChange: e => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000]),
                className: "w-20 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
        className: "py-16 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "mb-8 text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              className: "text-gray-400",
              children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-cyan-400 font-semibold",
                children: filteredServices.length
              }), " services", selectedCategory !== 'all' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [" in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-purple-400 font-semibold",
                  children: (_categories$find = categories.find(c => c.id === selectedCategory)) === null || _categories$find === void 0 ? void 0 : _categories$find.name
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.AnimatePresence, {
            mode: "wait",
            children: viewMode === 'grid' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              },
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
                className: "group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex items-start justify-between mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "flex-1",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                        className: "text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",
                        children: service.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                        className: "text-gray-300 text-sm mb-3",
                        children: service.tagline
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "flex items-center space-x-1",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Star, {
                        className: "w-4 h-4 text-yellow-400 fill-current"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                        className: "text-sm text-gray-300",
                        children: service.rating
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-400 font-medium",
                    children: getServiceCategory(service)
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                  className: "text-gray-400 text-sm mb-4 line-clamp-3",
                  children: getServiceDescription(service)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-2xl font-bold text-white mb-1",
                    children: getServicePricing(service)
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "text-xs text-gray-400",
                    children: ["Market Price: ", service.marketPrice]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
                    className: "text-sm font-semibold text-gray-300 mb-2",
                    children: "Key Features:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "space-y-1",
                    children: [getServiceFeatures(service).slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "flex items-center text-xs text-gray-400",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Check, {
                        className: "w-3 h-3 text-cyan-400 mr-2 flex-shrink-0"
                      }), feature]
                    }, idx)), getServiceFeatures(service).length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-xs text-cyan-400",
                      children: ["+", getServiceFeatures(service).length - 3, " more features"]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                    href: service.link,
                    className: "flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group-hover:scale-105",
                    children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.ArrowRight, {
                      className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "text-xs text-gray-400",
                    children: ["Launch: ", new Date(service.launchDate).toLocaleDateString()]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                })]
              }, service.id))
            }, "grid") : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              },
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
                className: "group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex flex-col lg:flex-row gap-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "flex items-start justify-between mb-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                          className: "text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",
                          children: service.name
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                          className: "text-gray-300 mb-3",
                          children: service.tagline
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                          className: "flex items-center space-x-1",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Star, {
                            className: "w-4 h-4 text-yellow-400 fill-current"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                            className: "text-sm text-gray-300",
                            children: service.rating
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                          className: "inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-400 font-medium",
                          children: getServiceCategory(service)
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                      className: "text-gray-400 mb-4",
                      children: getServiceDescription(service)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                      children: getServiceFeatures(service).slice(0, 6).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "flex items-center text-sm text-gray-300",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Check, {
                          className: "w-4 h-4 text-cyan-400 mr-2 flex-shrink-0"
                        }), feature]
                      }, idx))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "lg:w-64 flex flex-col justify-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-center mb-4",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "text-3xl font-bold text-white mb-1",
                        children: getServicePricing(service)
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "text-sm text-gray-400 mb-2",
                        children: ["Market Price: ", service.marketPrice]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                        className: "text-xs text-gray-400",
                        children: ["Launch: ", new Date(service.launchDate).toLocaleDateString()]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                      href: service.link,
                      className: "w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-center",
                      children: "Get Started"
                    })]
                  })]
                })
              }, service.id))
            }, "list")
          }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            className: "text-center py-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "text-6xl mb-4",
              children: "\uD83D\uDD0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-2",
              children: "No services found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Try adjusting your search criteria or filters"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
              onClick: () => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 5000]);
              },
              className: "px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300",
              children: "Clear All Filters"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
        className: "py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "max-w-4xl mx-auto text-center relative z-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
              children: "Ready to Transform Your Business?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8 max-w-2xl mx-auto",
              children: "Join the future of technology with Zion Tech Group. Let's build something extraordinary together."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                href: "/contact",
                className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",
                children: "Get Started Today"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                href: "/quote",
                className: "px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105",
                children: "Request Custom Quote"
              })]
            })]
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ultimate2038FuturisticServicesShowcase);

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 502331:
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
/* harmony import */ var private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(239561);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/ultimate-2038-futuristic-services-showcase",
        pathname: "/ultimate-2038-futuristic-services-showcase",
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
    userland: private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/ultimate-2038-futuristic-services-showcase",
    config,
    userland: private_next_pages_ultimate_2038_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(502331)));
module.exports = __webpack_exports__;

})();