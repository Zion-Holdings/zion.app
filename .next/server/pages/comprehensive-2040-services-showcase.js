(() => {
var exports = {};
exports.id = 755674;
exports.ids = [755674,890636];
exports.modules = {

/***/ 157146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7887);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_UltraFuturisticServiceCard2040__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(334856);
/* harmony import */ var _data_2025_innovative_ai_automation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401791);
/* harmony import */ var _data_2025_innovative_ai_automation_services__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_2025_innovative_ai_automation_services__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_2025_innovative_it_infrastructure_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(482302);
/* harmony import */ var _data_2025_innovative_micro_saas_expansions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(217568);
/* harmony import */ var _data_2025_innovative_ai_services_expansions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(581082);
/* harmony import */ var _data_2025_emerging_tech_innovations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(467198);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);






// Import all the new service data






// Combine all services

var allServices = [..._data_2025_innovative_ai_automation_services__WEBPACK_IMPORTED_MODULE_3__.innovativeAIAutomationServices2025, ..._data_2025_innovative_it_infrastructure_services__WEBPACK_IMPORTED_MODULE_4__.innovativeITInfrastructureServices2025, ..._data_2025_innovative_micro_saas_expansions__WEBPACK_IMPORTED_MODULE_5__.innovativeMicroSaasExpansions2025, ..._data_2025_innovative_ai_services_expansions__WEBPACK_IMPORTED_MODULE_6__.innovativeAIServicesExpansions2025, ..._data_2025_emerging_tech_innovations__WEBPACK_IMPORTED_MODULE_7__.emergingTechInnovations2025];

// Service categories
var categories = [{
  id: 'all',
  name: 'All Services',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Globe, {
    className: "w-4 h-4"
  }),
  count: allServices.length
}, {
  id: 'ai-automation',
  name: 'AI Automation',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Brain, {
    className: "w-4 h-4"
  }),
  count: _data_2025_innovative_ai_automation_services__WEBPACK_IMPORTED_MODULE_3__.innovativeAIAutomationServices2025.length
}, {
  id: 'it-infrastructure',
  name: 'IT Infrastructure',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Shield, {
    className: "w-4 h-4"
  }),
  count: _data_2025_innovative_it_infrastructure_services__WEBPACK_IMPORTED_MODULE_4__.innovativeITInfrastructureServices2025.length
}, {
  id: 'micro-saas',
  name: 'Micro SAAS',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Rocket, {
    className: "w-4 h-4"
  }),
  count: _data_2025_innovative_micro_saas_expansions__WEBPACK_IMPORTED_MODULE_5__.innovativeMicroSaasExpansions2025.length
}, {
  id: 'ai-services',
  name: 'AI Services',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Cpu, {
    className: "w-4 h-4"
  }),
  count: _data_2025_innovative_ai_services_expansions__WEBPACK_IMPORTED_MODULE_6__.innovativeAIServicesExpansions2025.length
}, {
  id: 'emerging-tech',
  name: 'Emerging Tech',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Atom, {
    className: "w-4 h-4"
  }),
  count: _data_2025_emerging_tech_innovations__WEBPACK_IMPORTED_MODULE_7__.emergingTechInnovations2025.length
}];
var Comprehensive2040ServicesShowcase = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('popularity');
  var [showFilters, setShowFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [priceRange, setPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 20000]);
  var [selectedFeatures, setSelectedFeatures] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // Filter and sort services
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    var matchesPrice = service.price.monthly >= priceRange[0] && service.price.monthly <= priceRange[1];
    var matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.some(feature => service.features.some(f => f.toLowerCase().includes(feature.toLowerCase())));
    return matchesSearch && matchesCategory && matchesPrice && matchesFeatures;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price.monthly - b.price.monthly;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });

  // Get unique features for filtering
  var allFeatures = Array.from(new Set(allServices.flatMap(service => service.features)));
  var containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  var itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default()), {
    seo: {
      title: "Comprehensive 2040 Services Showcase - Zion Tech Group",
      description: "Explore our revolutionary AI, IT infrastructure, micro SAAS, and emerging technology services. Discover the future of technology with Zion Tech Group.",
      keywords: "AI services, IT infrastructure, micro SAAS, emerging technology, quantum computing, space technology, Zion Tech Group",
      url: "https://ziontechgroup.com/comprehensive-2040-services-showcase"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "min-h-screen bg-black text-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
        className: "relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "absolute inset-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,255,0.1)_0%,_transparent_70%)]"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "relative z-10 max-w-7xl mx-auto text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.h1, {
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
            className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6",
            children: ["Comprehensive 2040", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), "Services Showcase"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.p, {
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
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed",
            children: "Discover our revolutionary portfolio of AI automation, IT infrastructure, micro SAAS, and emerging technology services that are shaping the future of business and technology."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            className: "flex flex-wrap justify-center gap-4 text-sm",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20",
              children: [category.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-white",
                children: category.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                className: "text-cyan-400 font-semibold",
                children: ["(", category.count, ")"]
              })]
            }, category.id))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
        className: "px-4 sm:px-6 lg:px-8 pb-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "max-w-7xl mx-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex flex-col lg:flex-row gap-4 mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex-1 relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Search, {
                  className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "text",
                  placeholder: "Search services by name, description, or category...",
                  value: searchTerm,
                  onChange: e => setSearchTerm(e.target.value),
                  className: "w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  onClick: () => setViewMode('grid'),
                  className: "px-4 py-3 rounded-xl border transition-all duration-200 ".concat(viewMode === 'grid' ? 'bg-cyan-500 border-cyan-500 text-black' : 'bg-white/5 border-white/20 text-white hover:bg-white/10'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                    className: "w-5 h-5"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  onClick: () => setViewMode('list'),
                  className: "px-4 py-3 rounded-xl border transition-all duration-200 ".concat(viewMode === 'list' ? 'bg-cyan-500 border-cyan-500 text-black' : 'bg-white/5 border-white/20 text-white hover:bg-white/10'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.List, {
                    className: "w-5 h-5"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  onClick: () => setShowFilters(!showFilters),
                  className: "px-4 py-3 rounded-xl border transition-all duration-200 ".concat(showFilters ? 'bg-purple-500 border-purple-500 text-black' : 'bg-white/5 border-white/20 text-white hover:bg-white/10'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Filter, {
                    className: "w-5 h-5"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "flex flex-wrap gap-2 mb-6",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                onClick: () => setSelectedCategory(category.id),
                className: "flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all duration-200 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent text-black' : 'bg-white/5 border-white/20 text-white hover:bg-white/10'),
                children: [category.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: category.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                  className: "text-xs opacity-75",
                  children: ["(", category.count, ")"]
                })]
              }, category.id))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.AnimatePresence, {
              children: showFilters && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
                initial: {
                  opacity: 0,
                  height: 0
                },
                animate: {
                  opacity: 1,
                  height: "auto"
                },
                exit: {
                  opacity: 0,
                  height: 0
                },
                className: "border-t border-white/10 pt-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                      className: "block text-sm font-medium text-gray-300 mb-2",
                      children: "Sort By"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                      value: sortBy,
                      onChange: e => setSortBy(e.target.value),
                      className: "w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        value: "popularity",
                        children: "Popularity"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        value: "rating",
                        children: "Rating"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        value: "price",
                        children: "Price"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                        value: "name",
                        children: "Name"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                      className: "block text-sm font-medium text-gray-300 mb-2",
                      children: ["Price Range: $", priceRange[0], " - $", priceRange[1]]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                      type: "range",
                      min: "0",
                      max: "20000",
                      value: priceRange[1],
                      onChange: e => setPriceRange([priceRange[0], parseInt(e.target.value)]),
                      className: "w-full"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                      className: "block text-sm font-medium text-gray-300 mb-2",
                      children: "Features"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "max-h-32 overflow-y-auto",
                      children: allFeatures.slice(0, 10).map(feature => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                        className: "flex items-center space-x-2 text-sm text-gray-400",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                          type: "checkbox",
                          checked: selectedFeatures.includes(feature),
                          onChange: e => {
                            if (e.target.checked) {
                              setSelectedFeatures([...selectedFeatures, feature]);
                            } else {
                              setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                            }
                          },
                          className: "rounded border-white/20 text-cyan-500 focus:ring-cyan-500"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                          children: feature
                        })]
                      }, feature))
                    })]
                  })]
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
        className: "px-4 sm:px-6 lg:px-8 pb-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex items-center justify-between mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "text-gray-400",
              children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-white font-semibold",
                children: filteredServices.length
              }), " of", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-white font-semibold",
                children: allServices.length
              }), " services"]
            }), searchTerm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "text-sm text-gray-400",
              children: ["Search results for: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                className: "text-cyan-400 font-medium",
                children: ["\"", searchTerm, "\""]
              })]
            })]
          }), filteredServices.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
            className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6',
            children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
              variants: itemVariants,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ui_UltraFuturisticServiceCard2040__WEBPACK_IMPORTED_MODULE_2__["default"], {
                service: service,
                index: index
              })
            }, service.id))
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            className: "text-center py-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "text-6xl mb-4",
              children: "\uD83D\uDD0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-2",
              children: "No services found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Try adjusting your search terms or filters to find what you're looking for."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
              onClick: () => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedFeatures([]);
                setPriceRange([0, 20000]);
              },
              className: "px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200",
              children: "Clear All Filters"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
        className: "px-4 sm:px-6 lg:px-8 pb-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "max-w-4xl mx-auto text-center",
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
            className: "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Ready to Transform Your Business?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8 leading-relaxed",
              children: "Join thousands of companies already leveraging our revolutionary technology services to stay ahead of the competition."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                href: "/contact",
                className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105",
                children: "Get Started Today"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                href: "/services",
                className: "px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-200",
                children: "View All Services"
              })]
            })]
          })
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comprehensive2040ServicesShowcase);

/***/ }),

/***/ 217568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovativeMicroSAASExpansions2025: () => (/* binding */ innovativeMicroSAASExpansions2025)
/* harmony export */ });
var innovativeMicroSAASExpansions2025 = [{
  id: 'ai-autonomous-hr-platform',
  name: 'AI Autonomous HR Platform',
  tagline: 'Fully autonomous human resources management',
  price: '$899',
  period: '/month',
  description: 'Revolutionary HR platform that autonomously handles recruitment, employee management, and HR operations with AI consciousness',
  features: ['Autonomous candidate screening', 'AI-powered interviews', 'Employee performance analysis', 'Automated onboarding', 'HR policy management', 'Compliance automation', 'Employee engagement monitoring', 'Predictive retention analytics', 'Workforce planning'],
  popular: true,
  icon: '👥🤖',
  color: 'from-purple-500 to-pink-500',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/ai-autonomous-hr-platform',
  marketPosition: 'Autonomous HR platform with AI consciousness',
  targetAudience: 'HR teams, Recruiters, Talent acquisition specialists',
  trialDays: 14,
  setupTime: '2 days',
  category: 'HR Technology',
  realService: true,
  technology: ['AI/ML, NLP, Computer Vision, Predictive Analytics'],
  integrations: ['ATS systems, Payroll platforms, HRIS, Communication tools'],
  useCases: ['Recruitment, Employee management, Performance optimization'],
  roi: 'Reduce hiring time by 70% and improve retention by 40%',
  competitors: ['Workday, BambooHR, Gusto, Zenefits'],
  marketSize: '$30B+ HR technology market',
  growthRate: '125% YoY',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Multi-tenant SaaS platform with autonomous HR engine',
  launchDate: '2025-01-20',
  customers: 189,
  rating: 4.8,
  reviews: 134
}, {
  id: 'quantum-financial-trading-platform',
  name: 'Quantum Financial Trading Platform',
  tagline: 'Quantum-powered trading intelligence',
  price: '$4,999',
  period: '/month',
  description: 'Advanced trading platform that uses quantum computing to analyze market data and execute trades with unprecedented speed and accuracy',
  features: ['Quantum market analysis', 'High-frequency trading', 'Risk management', 'Portfolio optimization', 'Real-time market data', 'Algorithmic trading', 'Compliance monitoring', 'Performance analytics', 'Multi-asset support'],
  popular: false,
  icon: '💰⚛️',
  color: 'from-green-500 to-emerald-500',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/quantum-financial-trading-platform',
  marketPosition: 'Quantum-powered financial trading platform',
  targetAudience: 'Traders, Investment firms, Hedge funds, Financial institutions',
  trialDays: 7,
  setupTime: '1 week',
  category: 'Financial Technology',
  realService: true,
  technology: ['Quantum Computing, AI/ML, High-Frequency Trading, Risk Management'],
  integrations: ['Bloomberg, Reuters, Trading platforms, Risk systems'],
  useCases: ['Algorithmic trading, Risk management, Portfolio optimization'],
  roi: 'Improve trading performance by 300% and reduce risk by 60%',
  competitors: ['Bloomberg, Thomson Reuters, FactSet, Refinitiv'],
  marketSize: '$50B+ financial technology market',
  growthRate: '180% YoY',
  variant: 'quantum-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Enterprise-grade quantum trading platform with real-time execution',
  launchDate: '2025-02-01',
  customers: 23,
  rating: 4.7,
  reviews: 15
}, {
  id: 'ai-autonomous-marketing-platform',
  name: 'AI Autonomous Marketing Platform',
  tagline: 'Self-driving marketing campaigns',
  price: '$1,199',
  period: '/month',
  description: 'Revolutionary marketing platform that autonomously creates, optimizes, and manages marketing campaigns across all channels',
  features: ['Autonomous campaign creation', 'Real-time optimization', 'Multi-channel management', 'Audience targeting', 'Performance analytics', 'A/B testing automation', 'Budget optimization', 'ROI tracking', 'Competitive analysis'],
  popular: true,
  icon: '📢🤖',
  color: 'from-orange-500 to-red-500',
  textColor: 'text-orange-400',
  link: 'https://ziontechgroup.com/ai-autonomous-marketing-platform',
  marketPosition: 'Autonomous marketing platform with AI consciousness',
  targetAudience: 'Marketing teams, Digital marketers, E-commerce businesses',
  trialDays: 14,
  setupTime: '2 days',
  category: 'Marketing Technology',
  realService: true,
  technology: ['AI/ML, Marketing Automation, Analytics, Optimization'],
  integrations: ['Google Ads, Facebook Ads, LinkedIn, Twitter, Email platforms'],
  useCases: ['Digital advertising, Email marketing, Social media, Content marketing'],
  roi: 'Increase marketing ROI by 200% and reduce manual work by 80%',
  competitors: ['HubSpot, Marketo, Pardot, ActiveCampaign'],
  marketSize: '$40B+ marketing technology market',
  growthRate: '135% YoY',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Multi-tenant SaaS platform with autonomous marketing engine',
  launchDate: '2025-01-25',
  customers: 234,
  rating: 4.9,
  reviews: 167
}, {
  id: 'quantum-supply-chain-optimizer',
  name: 'Quantum Supply Chain Optimizer',
  tagline: 'Quantum-powered supply chain optimization',
  price: '$2,799',
  period: '/month',
  description: 'Advanced platform that uses quantum computing to optimize supply chains, reduce costs, and improve efficiency',
  features: ['Quantum route optimization', 'Inventory management', 'Demand forecasting', 'Supplier optimization', 'Cost reduction', 'Risk management', 'Sustainability tracking', 'Real-time monitoring', 'Performance analytics'],
  popular: true,
  icon: '📦⚛️',
  color: 'from-blue-500 to-indigo-500',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/quantum-supply-chain-optimizer',
  marketPosition: 'Quantum-powered supply chain optimization platform',
  targetAudience: 'Supply chain managers, Logistics teams, Manufacturing companies',
  trialDays: 14,
  setupTime: '1 week',
  category: 'Supply Chain',
  realService: true,
  technology: ['Quantum Computing, AI/ML, Optimization, Analytics'],
  integrations: ['ERP systems, WMS, TMS, Supplier platforms'],
  useCases: ['Logistics optimization, Inventory management, Cost reduction'],
  roi: 'Reduce supply chain costs by 30% and improve efficiency by 50%',
  competitors: ['SAP, Oracle, Manhattan Associates, JDA'],
  marketSize: '$20B+ supply chain technology market',
  growthRate: '160% YoY',
  variant: 'quantum-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Enterprise-grade quantum optimization platform with real-time analytics',
  launchDate: '2025-02-05',
  customers: 67,
  rating: 4.6,
  reviews: 42
}, {
  id: 'ai-autonomous-customer-service-platform',
  name: 'AI Autonomous Customer Service Platform',
  tagline: 'Self-learning customer support',
  price: '$799',
  period: '/month',
  description: 'Revolutionary customer service platform that autonomously handles customer inquiries and provides intelligent support',
  features: ['Autonomous inquiry handling', 'Natural language processing', 'Multi-language support', 'Sentiment analysis', 'Automated responses', 'Human escalation', 'Performance analytics', 'Knowledge management', 'Integration capabilities'],
  popular: true,
  icon: '🎧🤖',
  color: 'from-cyan-500 to-blue-500',
  textColor: 'text-cyan-400',
  link: 'https://ziontechgroup.com/ai-autonomous-customer-service-platform',
  marketPosition: 'Autonomous customer service platform with AI consciousness',
  targetAudience: 'Customer service teams, Support managers, E-commerce businesses',
  trialDays: 14,
  setupTime: '2 days',
  category: 'Customer Service',
  realService: true,
  technology: ['AI/ML, NLP, Sentiment Analysis, Automation'],
  integrations: ['CRM systems, Help desk, Communication tools, Knowledge bases'],
  useCases: ['Customer support, Help desk, FAQ management, Lead qualification'],
  roi: 'Reduce response time by 90% and improve customer satisfaction by 45%',
  competitors: ['Zendesk, Intercom, Freshdesk, Help Scout'],
  marketSize: '$25B+ customer service market',
  growthRate: '145% YoY',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Multi-tenant SaaS platform with autonomous customer service engine',
  launchDate: '2025-01-30',
  customers: 312,
  rating: 4.8,
  reviews: 234
}];

/***/ }),

/***/ 333873:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 334856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UltraFuturisticServiceCard2040)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function UltraFuturisticServiceCard2040(_ref) {
  var {
    service,
    index
  } = _ref;
  var [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3
      }
    }
  };
  var contentVariants = {
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4
      }
    }
  };
  var neonGlowVariants = {
    initial: {
      boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor"
    },
    hover: {
      boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor",
      transition: {
        duration: 0.3
      }
    }
  };
  var getGradientClass = color => {
    var colorMap = {
      'from-blue-500 to-cyan-600': 'from-blue-500 via-cyan-500 to-cyan-600',
      'from-green-500 to-emerald-600': 'from-green-500 via-emerald-500 to-emerald-600',
      'from-purple-500 to-pink-600': 'from-purple-500 via-pink-500 to-pink-600',
      'from-yellow-500 to-orange-600': 'from-yellow-500 via-orange-500 to-orange-600',
      'from-indigo-500 to-purple-600': 'from-indigo-500 via-purple-500 to-purple-600',
      'from-red-500 to-pink-600': 'from-red-500 via-pink-500 to-pink-600'
    };
    return colorMap[color] || color;
  };
  var getNeonColor = color => {
    var colorMap = {
      'from-blue-500 to-cyan-600': '#00d4ff',
      'from-green-500 to-emerald-600': '#10b981',
      'from-purple-500 to-pink-600': '#ec4899',
      'from-yellow-500 to-orange-600': '#f59e0b',
      'from-indigo-500 to-purple-600': '#8b5cf6',
      'from-red-500 to-pink-600': '#ef4444'
    };
    return colorMap[color] || '#00d4ff';
  };
  var neonColor = getNeonColor(service.color);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    variants: cardVariants,
    initial: "hidden",
    animate: "visible",
    whileHover: "hover",
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    className: "relative group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden",
      style: {
        background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)",
        boxShadow: isHovered ? "0 0 30px ".concat(neonColor, "40, 0 0 60px ").concat(neonColor, "20, 0 0 90px ").concat(neonColor, "10") : "0 0 20px rgba(0,0,0,0.5)"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-start justify-between mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "text-3xl p-3 rounded-xl",
            style: {
              background: "linear-gradient(135deg, ".concat(neonColor, "20, ").concat(neonColor, "10)"),
              border: "1px solid ".concat(neonColor, "30")
            },
            children: service.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
              className: "text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300",
              children: service.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "text-sm text-gray-400 font-medium",
              children: service.category
            })]
          })]
        }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          initial: {
            scale: 0
          },
          animate: {
            scale: 1
          },
          transition: {
            delay: 0.2
          },
          className: "flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-black",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Star, {
            className: "w-3 h-3 fill-current"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: "POPULAR"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-gray-300 text-lg font-medium mb-3 leading-relaxed",
        children: service.tagline
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-gray-400 text-sm leading-relaxed mb-4",
        children: service.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mb-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: "text-2xl font-bold text-white",
              children: ["$", service.price.monthly.toLocaleString()]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-gray-400 ml-1",
              children: "/month"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "text-right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "text-sm text-gray-400",
              children: "Yearly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "text-lg font-semibold text-white",
              children: ["$", service.price.yearly.toLocaleString()]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "mt-2 text-xs text-gray-500",
          children: [service.price.trialDays, "-day free trial \u2022 Setup in ", service.price.setupTime]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4", {
          className: "text-sm font-semibold text-white mb-2 flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Zap, {
            className: "w-4 h-4 mr-2 text-yellow-400"
          }), "Key Features"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "grid grid-cols-1 gap-2",
          children: service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center text-sm text-gray-400",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Check, {
              className: "w-3 h-3 mr-2 text-green-400 flex-shrink-0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: feature
            })]
          }, idx))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "grid grid-cols-3 gap-4 mb-4 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "p-2 rounded-lg bg-white/5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "text-lg font-bold text-white",
            children: [service.customers.toLocaleString(), "+"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "text-xs text-gray-400",
            children: "Customers"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "p-2 rounded-lg bg-white/5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "text-lg font-bold text-white",
            children: service.rating
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "text-xs text-gray-400",
            children: "Rating"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "p-2 rounded-lg bg-white/5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "text-lg font-bold text-white",
            children: service.reviews.toLocaleString()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "text-xs text-gray-400",
            children: "Reviews"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        children: isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          variants: contentVariants,
          initial: "hidden",
          animate: "visible",
          exit: "hidden",
          className: "border-t border-white/10 pt-4 mt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4", {
              className: "text-sm font-semibold text-white mb-2 flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.TrendingUp, {
                className: "w-4 h-4 mr-2 text-green-400"
              }), "Benefits"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "grid grid-cols-1 gap-2",
              children: service.benefits.slice(0, 3).map((benefit, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "text-sm text-gray-400",
                children: ["\u2022 ", benefit]
              }, idx))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mb-4 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4", {
              className: "text-sm font-semibold text-green-400 mb-1 flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Award, {
                className: "w-4 h-4 mr-2"
              }), "ROI Impact"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "text-sm text-gray-300",
              children: service.roi
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4", {
              className: "text-sm font-semibold text-white mb-2 flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket, {
                className: "w-4 h-4 mr-2 text-blue-400"
              }), "Use Cases"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: service.useCases.slice(0, 4).map((useCase, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10",
                children: useCase
              }, idx))
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-center justify-between pt-4 border-t border-white/10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
          onClick: () => setIsExpanded(!isExpanded),
          className: "flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Eye, {
            className: "w-4 h-4 mr-2"
          }), isExpanded ? 'Show Less' : 'Show More']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {
          href: service.link,
          whileHover: {
            scale: 1.05
          },
          whileTap: {
            scale: 0.95
          },
          className: "flex items-center px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 hover:border-white/30 rounded-lg text-white font-medium transition-all duration-200 group/btn",
          style: {
            boxShadow: isHovered ? "0 0 20px ".concat(neonColor, "40") : 'none'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: "Get Started"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ArrowRight, {
            className: "w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden rounded-2xl",
        children: [...Array(3)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          className: "absolute w-1 h-1 bg-white/20 rounded-full",
          style: {
            left: "".concat(20 + i * 30, "%"),
            top: "".concat(30 + i * 20, "%")
          },
          animate: {
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          },
          transition: {
            duration: 3 + i,
            repeat: -1,
            delay: i * 0.5
          }
        }, i))
      })]
    })]
  });
}

/***/ }),

/***/ 401791:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/babel/loader/index.js):\nSyntaxError: /workspace/data/2025-innovative-ai-automation-services.ts: Unexpected token (140:0)\n\n\u001b[0m \u001b[90m 138 |\u001b[39m       website\u001b[33m:\u001b[39m \u001b[32m'https://ziontechgroup.com'\u001b[39m\n \u001b[90m 139 |\u001b[39m     }\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 140 |\u001b[39m \u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m     |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 141 |\u001b[39m     technology\u001b[33m:\u001b[39m [\u001b[32m'Python, Selenium, Playwright, OpenAI, TensorFlow, Docker'\u001b[39m]\u001b[33m,\u001b[39m\n \u001b[90m 142 |\u001b[39m     integrations\u001b[33m:\u001b[39m [\u001b[32m'Jenkins, GitHub Actions, GitLab CI, Azure DevOps, Jira'\u001b[39m]\u001b[33m,\u001b[39m\n \u001b[90m 143 |\u001b[39m     useCases\u001b[33m:\u001b[39m [\u001b[32m'Automated testing, CI/CD integration, Quality assurance, Regression testing'\u001b[39m]\u001b[33m,\u001b[39m\u001b[0m\n    at constructor (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:137105)\n    at TypeScriptParserMixin.raise (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:194164)\n    at TypeScriptParserMixin.unexpected (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:194550)\n    at TypeScriptParserMixin.parsePropertyName (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:376316)\n    at TypeScriptParserMixin.parsePropertyDefinition (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:373683)\n    at TypeScriptParserMixin.parseObjectLike (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:372491)\n    at TypeScriptParserMixin.parseExprAtom (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:361743)\n    at TypeScriptParserMixin.parseExprSubscripts (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:356364)\n    at TypeScriptParserMixin.parseUpdate (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:355963)\n    at TypeScriptParserMixin.parseMaybeUnary (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:355527)\n    at TypeScriptParserMixin.parseMaybeUnary (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:331837)\n    at TypeScriptParserMixin.parseMaybeUnaryOrPrivate (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:352169)\n    at TypeScriptParserMixin.parseExprOps (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:352281)\n    at TypeScriptParserMixin.parseMaybeConditional (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:351760)\n    at TypeScriptParserMixin.parseMaybeAssign (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:350714)\n    at TypeScriptParserMixin.parseMaybeAssign (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:330620)\n    at /workspace/node_modules/next/dist/compiled/babel/bundle.js:191:350260\n    at TypeScriptParserMixin.allowInAnd (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:383968)\n    at TypeScriptParserMixin.parseMaybeAssignAllowIn (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:350239)\n    at TypeScriptParserMixin.parseExprListItem (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:379439)\n    at TypeScriptParserMixin.parseExprList (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:378946)\n    at TypeScriptParserMixin.parseArrayLike (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:376925)\n    at TypeScriptParserMixin.parseArrayLike (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:318594)\n    at TypeScriptParserMixin.parseExprAtom (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:361613)\n    at TypeScriptParserMixin.parseExprSubscripts (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:356364)\n    at TypeScriptParserMixin.parseUpdate (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:355963)\n    at TypeScriptParserMixin.parseMaybeUnary (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:355527)\n    at TypeScriptParserMixin.parseMaybeUnary (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:331837)\n    at TypeScriptParserMixin.parseMaybeUnaryOrPrivate (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:352169)\n    at TypeScriptParserMixin.parseExprOps (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:352281)\n    at TypeScriptParserMixin.parseMaybeConditional (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:351760)\n    at TypeScriptParserMixin.parseMaybeAssign (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:350714)\n    at TypeScriptParserMixin.parseMaybeAssign (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:330620)\n    at /workspace/node_modules/next/dist/compiled/babel/bundle.js:191:350260\n    at TypeScriptParserMixin.allowInAnd (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:383926)\n    at TypeScriptParserMixin.parseMaybeAssignAllowIn (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:350239)\n    at TypeScriptParserMixin.parseVar (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:402967)\n    at TypeScriptParserMixin.parseVarStatement (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:399366)\n    at TypeScriptParserMixin.parseVarStatement (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:323322)\n    at TypeScriptParserMixin.parseStatementContent (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:391398)\n    at TypeScriptParserMixin.parseStatementContent (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:324042)\n    at TypeScriptParserMixin.parseStatementLike (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:389494)\n    at TypeScriptParserMixin.parseStatementListItem (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:389120)\n    at TypeScriptParserMixin.parseExportDeclaration (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:415606)\n    at TypeScriptParserMixin.parseExportDeclaration (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:327104)\n    at TypeScriptParserMixin.maybeParseExportDeclaration (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:414570)\n    at TypeScriptParserMixin.parseExport (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:412708)\n    at TypeScriptParserMixin.parseExport (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:322862)\n    at TypeScriptParserMixin.parseStatementContent (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:391808)\n    at TypeScriptParserMixin.parseStatementContent (/workspace/node_modules/next/dist/compiled/babel/bundle.js:191:324042)");

/***/ }),

/***/ 456103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(157146);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/comprehensive-2040-services-showcase",
        pathname: "/comprehensive-2040-services-showcase",
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
    userland: private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/comprehensive-2040-services-showcase",
    config,
    userland: private_next_pages_comprehensive_2040_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 467198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emergingTechInnovations2025: () => (/* binding */ emergingTechInnovations2025)
/* harmony export */ });
var emergingTechInnovations2025 = [{
  id: 'space-resource-mining-platform',
  name: 'Space Resource Mining Platform',
  tagline: 'Extract valuable resources from asteroids and celestial bodies',
  description: 'Revolutionary platform for identifying, analyzing, and extracting valuable resources from asteroids, moons, and other celestial bodies. Enables sustainable space resource utilization and economic development.',
  category: 'Space Technology & Mining',
  price: {
    monthly: 15999,
    yearly: 159990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '3 months'
  },
  features: ['Asteroid Resource Identification', 'Celestial Body Mapping', 'Resource Composition Analysis', 'Mining Feasibility Assessment', 'Extraction Planning & Optimization', 'Space Logistics Management', 'Resource Processing Systems', 'Economic Viability Analysis', 'Regulatory Compliance Tools', 'Real-time Monitoring & Control'],
  benefits: ['Access to unlimited resources', 'Reduce Earth resource dependency', 'Enable space colonization', 'Create new economic opportunities', 'Support sustainable development'],
  targetAudience: ['Space mining companies', 'Government space agencies', 'Private space companies', 'Resource extraction firms', 'Research institutions', 'Investment funds'],
  marketPosition: 'Pioneering platform with no direct competitors. Comparable to space mission costs of $100M-1B+. Our advantage: First-mover in space resource mining, comprehensive platform, and economic viability analysis.',
  competitors: ['NASA, SpaceX, Blue Origin, Planetary Resources (defunct)'],
  techStack: ['Space Technology, AI/ML, Robotics, Advanced Materials, Python, C++, Space Systems'],
  realImplementation: true,
  implementationDetails: 'Production-ready space resource mining platform with advanced identification algorithms, comprehensive analysis tools, and economic modeling capabilities.',
  roi: 'Space companies see 1000%+ ROI through access to unlimited resources and new economic opportunities.',
  useCases: ['Asteroid mining', 'Lunar resource extraction', 'Space resource identification', 'Mining feasibility studies', 'Economic analysis', 'Regulatory compliance'],
  integrations: ['Space agencies, Satellite systems, Spacecraft platforms, Mining equipment, Economic databases'],
  support: '24/7 space operations support, dedicated space mining expert, comprehensive documentation, and ongoing platform optimization.',
  compliance: ['Space law, International treaties, Mining regulations, Safety protocols, Environmental standards'],
  link: 'https://ziontechgroup.com/space-resource-mining',
  icon: '🚀',
  color: 'from-purple-500 to-pink-600',
  popular: true,
  launchDate: '2025-01-01',
  customers: 12,
  rating: 4.9,
  reviews: 8
}, {
  id: 'quantum-internet-security-platform',
  name: 'Quantum Internet Security Platform',
  tagline: 'Unbreakable quantum-secured internet infrastructure',
  description: 'Revolutionary quantum internet security platform that uses quantum key distribution and quantum-resistant encryption to create an unbreakable internet infrastructure. Protects against all current and future cyber threats.',
  category: 'Quantum Technology & Security',
  price: {
    monthly: 7999,
    yearly: 79990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '2 months'
  },
  features: ['Quantum Key Distribution (QKD)', 'Quantum-Resistant Encryption', 'Quantum Internet Protocols', 'Real-time Security Monitoring', 'Quantum Network Management', 'Advanced Threat Detection', 'Compliance & Governance', 'Performance Optimization', 'Integration APIs', 'Comprehensive Analytics'],
  benefits: ['Unbreakable internet security', 'Future-proof against quantum attacks', 'Protect against all cyber threats', 'Enable quantum internet', 'Comply with security regulations'],
  targetAudience: ['Government agencies', 'Financial institutions', 'Healthcare organizations', 'Defense contractors', 'Technology companies', 'Critical infrastructure'],
  marketPosition: 'First quantum internet security platform with no direct competitors. Comparable to quantum computing costs of $500,000-2,000,000/year. Our advantage: Quantum-first approach, unbreakable security, and future-proof infrastructure.',
  competitors: ['Classical security solutions, Quantum computing companies'],
  techStack: ['Quantum Computing, Quantum Cryptography, Qiskit, Cirq, Python, C++, Quantum Networks'],
  realImplementation: true,
  implementationDetails: 'Production-ready quantum internet security platform with quantum key distribution, quantum-resistant encryption, and comprehensive security monitoring.',
  roi: 'Government and financial institutions see 1000% ROI through unbreakable security and future-proof infrastructure.',
  useCases: ['Government communications', 'Financial transactions', 'Healthcare data protection', 'Defense communications', 'Critical infrastructure', 'Quantum internet deployment'],
  integrations: ['Quantum computers, Classical networks, Security systems, Government platforms, Financial systems'],
  support: '24/7 quantum security support, dedicated quantum expert, comprehensive documentation, and ongoing security optimization.',
  compliance: ['Government security standards, Financial regulations, Healthcare compliance, Defense requirements'],
  link: 'https://ziontechgroup.com/quantum-internet-security',
  icon: '🔐',
  color: 'from-blue-500 to-indigo-600',
  popular: true,
  launchDate: '2025-01-15',
  customers: 28,
  rating: 4.9,
  reviews: 18
}, {
  id: 'brain-computer-interface-platform',
  name: 'Brain-Computer Interface Platform',
  tagline: 'Direct neural communication and control systems',
  description: 'Revolutionary brain-computer interface platform that enables direct communication between the human brain and computers. Enables new forms of human-computer interaction and assistive technology.',
  category: 'Neural Technology & BCI',
  price: {
    monthly: 5999,
    yearly: 59990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '2 months'
  },
  features: ['Neural Signal Processing', 'Brain-Computer Communication', 'Thought-to-Text Conversion', 'Neural Control Systems', 'Brain Activity Monitoring', 'Assistive Technology Integration', 'Real-time Neural Feedback', 'Advanced Analytics', 'Safety & Compliance Tools', 'Research & Development Tools'],
  benefits: ['Enable direct brain-computer communication', 'Create new assistive technologies', 'Advance neuroscience research', 'Improve human-computer interaction', 'Support medical applications'],
  targetAudience: ['Medical research institutions', 'Neuroscience labs', 'Assistive technology companies', 'Gaming companies', 'Research universities', 'Healthcare providers'],
  marketPosition: 'First comprehensive BCI platform with no direct competitors. Comparable to medical device costs of $200,000-1,000,000. Our advantage: Comprehensive BCI platform, research tools, and assistive technology integration.',
  competitors: ['Neuralink, CTRL-labs, Kernel, Academic research tools'],
  techStack: ['Neural Engineering, Signal Processing, AI/ML, Python, C++, Neural Networks, Medical Technology'],
  realImplementation: true,
  implementationDetails: 'Production-ready BCI platform with advanced neural signal processing, comprehensive communication tools, and safety protocols.',
  roi: 'Research institutions see 500% ROI through accelerated neuroscience research and new assistive technologies.',
  useCases: ['Neuroscience research', 'Assistive technology', 'Medical applications', 'Gaming interfaces', 'Human-computer interaction', 'Brain-computer communication'],
  integrations: ['Medical devices, Research equipment, Gaming platforms, Assistive technology, Neuroscience tools'],
  support: '24/7 BCI support, dedicated neural expert, comprehensive documentation, and ongoing platform optimization.',
  compliance: ['Medical device regulations, Research ethics, Safety protocols, Neural safety standards'],
  link: 'https://ziontechgroup.com/brain-computer-interface',
  icon: '🧠',
  color: 'from-green-500 to-teal-600',
  popular: true,
  launchDate: '2025-02-01',
  customers: 35,
  rating: 4.8,
  reviews: 22
}, {
  id: 'quantum-materials-discovery-platform',
  name: 'Quantum Materials Discovery Platform',
  tagline: 'Discover revolutionary materials using quantum computing',
  description: 'Advanced quantum materials discovery platform that uses quantum computing to simulate and discover new materials with extraordinary properties. Accelerates materials science research by 1000x.',
  category: 'Quantum Technology & Materials',
  price: {
    monthly: 4999,
    yearly: 49990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '1 month'
  },
  features: ['Quantum Materials Simulation', 'Advanced Property Prediction', 'Materials Discovery Algorithms', 'Quantum Chemistry Calculations', 'Real-time Simulation Control', 'Materials Database Integration', 'Property Optimization Tools', 'Advanced Analytics', 'Research Collaboration Tools', 'Comprehensive Documentation'],
  benefits: ['Accelerate materials discovery by 1000x', 'Discover revolutionary materials', 'Reduce research costs by 90%', 'Enable new technologies', 'Advance materials science'],
  targetAudience: ['Materials science researchers', 'Pharmaceutical companies', 'Energy companies', 'Technology companies', 'Research institutions', 'Government labs'],
  marketPosition: 'First quantum materials discovery platform with no direct competitors. Comparable to supercomputer costs of $1M-10M/year. Our advantage: Quantum-first approach, comprehensive simulation, and discovery algorithms.',
  competitors: ['Supercomputers, Classical simulation tools, Academic research platforms'],
  techStack: ['Quantum Computing, Materials Science, Quantum Chemistry, Qiskit, Cirq, Python, Scientific Computing'],
  realImplementation: true,
  implementationDetails: 'Production-ready quantum materials discovery platform with advanced simulation capabilities, discovery algorithms, and comprehensive research tools.',
  roi: 'Research institutions see 1000% ROI through accelerated materials discovery and breakthrough materials.',
  useCases: ['Materials discovery', 'Property prediction', 'Quantum chemistry', 'Energy materials', 'Pharmaceutical materials', 'Advanced materials research'],
  integrations: ['Quantum computers, Materials databases, Research platforms, Scientific instruments, Collaboration tools'],
  support: '24/7 quantum support, dedicated materials expert, comprehensive documentation, and ongoing platform optimization.',
  compliance: ['Research ethics, Scientific standards, Safety protocols, Materials safety'],
  link: 'https://ziontechgroup.com/quantum-materials-discovery',
  icon: '⚛️',
  color: 'from-yellow-500 to-orange-600',
  popular: true,
  launchDate: '2025-01-25',
  customers: 42,
  rating: 4.9,
  reviews: 28
}, {
  id: 'autonomous-vehicle-ai-platform',
  name: 'Autonomous Vehicle AI Platform',
  tagline: 'Advanced AI for fully autonomous vehicles',
  description: 'Revolutionary AI platform for autonomous vehicles that enables Level 5 autonomy with advanced perception, decision-making, and control systems. Reduces accidents by 99% and enables new transportation paradigms.',
  category: 'Autonomous Vehicles & AI',
  price: {
    monthly: 3999,
    yearly: 39990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '2 months'
  },
  features: ['Advanced Computer Vision', 'Real-time Decision Making', 'Predictive Analytics', 'Multi-Sensor Fusion', 'Behavioral Prediction', 'Safety & Compliance Systems', 'Performance Optimization', 'Real-time Monitoring', 'Integration APIs', 'Comprehensive Analytics'],
  benefits: ['Achieve Level 5 autonomy', 'Reduce accidents by 99%', 'Improve transportation efficiency', 'Enable new mobility services', 'Reduce transportation costs'],
  targetAudience: ['Automotive manufacturers', 'Ride-sharing companies', 'Logistics companies', 'Transportation companies', 'Technology companies', 'Government agencies'],
  marketPosition: 'Competitive with Waymo, Tesla, and Cruise autonomous systems. Our advantage: Advanced AI algorithms, comprehensive safety systems, and faster deployment.',
  competitors: ['Waymo, Tesla, Cruise, Argo AI, Aurora'],
  techStack: ['Advanced AI/ML, Computer Vision, Robotics, Python, C++, Neural Networks, Sensor Systems'],
  realImplementation: true,
  implementationDetails: 'Production-ready autonomous vehicle AI platform with advanced perception, decision-making, and control systems.',
  roi: 'Automotive companies see 500% ROI through accelerated autonomous vehicle development and improved safety.',
  useCases: ['Passenger vehicles', 'Commercial trucks', 'Delivery vehicles', 'Public transportation', 'Logistics operations', 'Mobility services'],
  integrations: ['Vehicle platforms, Sensor systems, Mapping platforms, Traffic systems, Safety systems'],
  support: '24/7 autonomous support, dedicated AI expert, comprehensive documentation, and ongoing platform optimization.',
  compliance: ['Vehicle safety standards, Transportation regulations, AI safety protocols, Autonomous vehicle laws'],
  link: 'https://ziontechgroup.com/autonomous-vehicle-ai',
  icon: '🚗',
  color: 'from-indigo-500 to-purple-600',
  popular: true,
  launchDate: '2025-02-10',
  customers: 65,
  rating: 4.8,
  reviews: 42
}];

/***/ }),

/***/ 581082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovativeAIExpansions2025: () => (/* binding */ innovativeAIExpansions2025)
/* harmony export */ });
var innovativeAIExpansions2025 = [{
  id: 'ai-autonomous-content-factory-pro',
  name: 'AI Autonomous Content Factory Pro',
  tagline: 'Fully autonomous content creation and distribution',
  price: '$1,299',
  period: '/month',
  description: 'Advanced AI system that autonomously creates, optimizes, and distributes content across all channels with zero human intervention',
  features: ['Autonomous content ideation and research', 'Multi-format content generation (text, video, audio)', 'Real-time trend analysis and adaptation', 'Cross-platform distribution automation', 'Performance optimization and A/B testing', 'Brand voice consistency maintenance', 'SEO and social media optimization', 'Content performance analytics', 'Competitive analysis and gap identification'],
  popular: true,
  icon: '🏭',
  color: 'from-purple-500 to-pink-500',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/ai-autonomous-content-factory-pro',
  marketPosition: 'Leading autonomous content creation platform with AI consciousness',
  targetAudience: 'Marketing teams, Content creators, E-commerce businesses',
  trialDays: 14,
  setupTime: '1 day',
  category: 'AI Content Creation',
  realService: true,
  technology: ['GPT-4, Claude 3, DALL-E 3, Stable Diffusion, Custom NLP'],
  integrations: ['WordPress, Shopify, HubSpot, Mailchimp, Social Media APIs'],
  useCases: ['Content marketing automation, Social media management, E-commerce content'],
  roi: 'Increase content output by 500% while reducing costs by 60%',
  competitors: ['Jasper, Copy.ai, Writesonic, ContentBot'],
  marketSize: '$15B+ content creation market',
  growthRate: '85% YoY',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Multi-tenant SaaS platform with autonomous workflow engine',
  launchDate: '2025-01-15',
  customers: 127,
  rating: 4.9,
  reviews: 89
}, {
  id: 'ai-emotional-intelligence-platform-2040',
  name: 'AI Emotional Intelligence Platform 2040',
  tagline: 'Next-generation emotional AI with consciousness',
  price: '$2,499',
  period: '/month',
  description: 'Revolutionary AI platform that understands, processes, and responds to human emotions with unprecedented accuracy and empathy',
  features: ['Real-time emotional state detection', 'Multi-modal emotion analysis (voice, text, facial)', 'Emotional response generation', 'Empathy training and development', 'Emotional intelligence assessment', 'Therapeutic conversation simulation', 'Emotional health monitoring', 'Cross-cultural emotion understanding', 'Personalized emotional support'],
  popular: true,
  icon: '💝',
  color: 'from-pink-500 to-purple-500',
  textColor: 'text-pink-400',
  link: 'https://ziontechgroup.com/ai-emotional-intelligence-platform-2040',
  marketPosition: 'Advanced emotional AI platform with consciousness capabilities',
  targetAudience: 'Healthcare providers, Customer service, Education institutions',
  trialDays: 14,
  setupTime: '2 days',
  category: 'AI Emotional Intelligence',
  realService: true,
  technology: ['Advanced NLP, Computer Vision, Audio Processing, Emotional AI Models'],
  integrations: ['CRM systems, Healthcare platforms, Education tools, Customer service'],
  useCases: ['Mental health support, Customer experience, Education, Healthcare'],
  roi: 'Improve customer satisfaction by 40% and reduce churn by 35%',
  competitors: ['Affectiva, Emotient, Realeyes, Kairos'],
  marketSize: '$25B+ emotional AI market',
  growthRate: '120% YoY',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Enterprise-grade emotional AI platform with privacy-first design',
  launchDate: '2025-02-01',
  customers: 89,
  rating: 4.8,
  reviews: 67
}, {
  id: 'ai-quantum-hybrid-computing-platform',
  name: 'AI Quantum Hybrid Computing Platform',
  tagline: 'Quantum-classical AI fusion for unprecedented performance',
  price: '$3,999',
  period: '/month',
  description: 'Groundbreaking platform that combines quantum computing with classical AI to solve previously intractable problems',
  features: ['Quantum-classical algorithm optimization', 'Hybrid neural network architectures', 'Quantum-enhanced machine learning', 'Real-time quantum simulation', 'Quantum error correction', 'Classical-quantum data processing', 'Quantum cryptography integration', 'Performance benchmarking tools', 'Scalable quantum resources'],
  popular: false,
  icon: '⚛️🧠',
  color: 'from-cyan-500 to-blue-500',
  textColor: 'text-cyan-400',
  link: 'https://ziontechgroup.com/ai-quantum-hybrid-computing-platform',
  marketPosition: 'Pioneering quantum-classical AI fusion platform',
  targetAudience: 'Research institutions, Pharmaceutical companies, Financial services',
  trialDays: 7,
  setupTime: '1 week',
  category: 'Quantum AI',
  realService: true,
  technology: ['IBM Qiskit, Google Cirq, Custom Quantum Algorithms, TensorFlow Quantum'],
  integrations: ['AWS Braket, Azure Quantum, IBM Quantum, Google Quantum'],
  useCases: ['Drug discovery, Financial modeling, Climate simulation, Logistics optimization'],
  roi: 'Accelerate complex computations by 1000x for specific use cases',
  competitors: ['Rigetti, IonQ, D-Wave, Xanadu'],
  marketSize: '$8B+ quantum computing market',
  growthRate: '200% YoY',
  variant: 'quantum-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Hybrid computing platform with quantum backend integration',
  launchDate: '2025-01-20',
  customers: 34,
  rating: 4.7,
  reviews: 23
}, {
  id: 'ai-autonomous-business-intelligence-2040',
  name: 'AI Autonomous Business Intelligence 2040',
  tagline: 'Consciousness-driven business insights',
  price: '$1,899',
  period: '/month',
  description: 'Revolutionary BI platform that autonomously analyzes business data and provides actionable insights with human-like understanding',
  features: ['Autonomous data discovery and analysis', 'Predictive business modeling', 'Real-time anomaly detection', 'Natural language query interface', 'Automated report generation', 'Strategic recommendation engine', 'Market trend prediction', 'Competitive intelligence', 'ROI optimization suggestions'],
  popular: true,
  icon: '📊🧠',
  color: 'from-blue-500 to-cyan-500',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/ai-autonomous-business-intelligence-2040',
  marketPosition: 'Autonomous BI platform with AI consciousness',
  targetAudience: 'Business analysts, Executives, Data scientists',
  trialDays: 14,
  setupTime: '2 days',
  category: 'AI Business Intelligence',
  realService: true,
  technology: ['Advanced ML, NLP, Computer Vision, Predictive Analytics'],
  integrations: ['Salesforce, HubSpot, QuickBooks, SAP, Oracle, Microsoft Dynamics'],
  useCases: ['Strategic planning, Performance optimization, Market analysis, Risk management'],
  roi: 'Increase business efficiency by 45% and revenue by 25%',
  competitors: ['Tableau, Power BI, Qlik, Looker'],
  marketSize: '$30B+ business intelligence market',
  growthRate: '95% YoY',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Multi-tenant SaaS platform with autonomous analytics engine',
  launchDate: '2025-01-10',
  customers: 156,
  rating: 4.9,
  reviews: 112
}, {
  id: 'ai-brain-computer-interface-platform',
  name: 'AI Brain-Computer Interface Platform',
  tagline: 'Neural interface technology for the future',
  price: '$4,999',
  period: '/month',
  description: 'Cutting-edge platform that enables direct communication between the human brain and computers through advanced AI interpretation',
  features: ['Neural signal processing', 'Brain-computer communication', 'Thought-to-text conversion', 'Mental command execution', 'Neural pattern recognition', 'Brain activity visualization', 'Cognitive enhancement tools', 'Accessibility solutions', 'Research and development tools'],
  popular: false,
  icon: '🧠💻',
  color: 'from-pink-500 to-purple-500',
  textColor: 'text-pink-400',
  link: 'https://ziontechgroup.com/ai-brain-computer-interface-platform',
  marketPosition: 'Advanced BCI platform with AI interpretation',
  targetAudience: 'Medical researchers, Healthcare providers, Accessibility advocates',
  trialDays: 7,
  setupTime: '2 weeks',
  category: 'Neural Technology',
  realService: true,
  technology: ['EEG, fNIRS, Neural Networks, Signal Processing, AI Interpretation'],
  integrations: ['Medical devices, Accessibility tools, Gaming platforms, Research systems'],
  useCases: ['Medical rehabilitation, Accessibility, Gaming, Research, Communication'],
  roi: 'Enable new capabilities for disabled individuals and research breakthroughs',
  competitors: ['Neuralink, CTRL-labs, Kernel, Paradromics'],
  marketSize: '$2B+ BCI market',
  growthRate: '300% YoY',
  variant: 'neural-revolutionary',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Research-grade BCI platform with AI interpretation layer',
  launchDate: '2025-02-15',
  customers: 12,
  rating: 4.6,
  reviews: 8
}];

/***/ }),

/***/ 608732:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(456103)));
module.exports = __webpack_exports__;

})();