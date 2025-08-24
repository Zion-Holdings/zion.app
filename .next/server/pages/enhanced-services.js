"use strict";
(() => {
var exports = {};
exports.id = 457055;
exports.ids = [457055,890636];
exports.modules = {

/***/ 98173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7887);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_2025_innovative_micro_saas_expansion_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(408034);
/* harmony import */ var _data_2025_innovative_micro_saas_expansion_v2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_2025_innovative_micro_saas_expansion_v2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_2025_innovative_it_services_expansion_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(279305);
/* harmony import */ var _data_2025_innovative_it_services_expansion_v2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_2025_innovative_it_services_expansion_v2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_2025_innovative_ai_services_expansion_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(287280);
/* harmony import */ var _data_2025_innovative_ai_services_expansion_v2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_2025_innovative_ai_services_expansion_v2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






// Import our new innovative services




var EnhancedServicesPage = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name');
  var [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Combine all services
  var allServices = [..._data_2025_innovative_micro_saas_expansion_v2__WEBPACK_IMPORTED_MODULE_3__.innovativeMicroSaasSolutions2025V2, ..._data_2025_innovative_it_services_expansion_v2__WEBPACK_IMPORTED_MODULE_4__.innovativeITServices2025V2, ..._data_2025_innovative_ai_services_expansion_v2__WEBPACK_IMPORTED_MODULE_5__.innovativeAIServices2025V2];

  // Filter and sort services
  var getFilteredServices = () => {
    var filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()) || service.type.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          var priceA = parseFloat(a.pricing.starter.replace(/[^0-9.]/g, ''));
          var priceB = parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });
    return filtered;
  };
  var filteredServices = getFilteredServices();
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__.Layers,
    count: allServices.length,
    color: 'from-purple-500 to-pink-500'
  }, {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain,
    count: _data_2025_innovative_ai_services_expansion_v2__WEBPACK_IMPORTED_MODULE_5__.innovativeAIServices2025V2.length,
    color: 'from-cyan-500 to-blue-500'
  }, {
    id: 'it',
    name: 'IT Infrastructure',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__.Cpu,
    count: _data_2025_innovative_it_services_expansion_v2__WEBPACK_IMPORTED_MODULE_4__.innovativeITServices2025V2.length,
    color: 'from-blue-500 to-indigo-500'
  }, {
    id: 'saas',
    name: 'Micro SAAS',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__.Target,
    count: _data_2025_innovative_micro_saas_expansion_v2__WEBPACK_IMPORTED_MODULE_3__.innovativeMicroSaasSolutions2025V2.length,
    color: 'from-emerald-500 to-teal-500'
  }, {
    id: 'security',
    name: 'Cybersecurity',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__.Shield,
    count: allServices.filter(s => s.category.includes('Security') || s.type.includes('Security')).length,
    color: 'from-red-500 to-orange-500'
  }, {
    id: 'quantum',
    name: 'Quantum Technology',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__.Atom,
    count: allServices.filter(s => s.technology.includes('Quantum')).length,
    color: 'from-indigo-500 to-purple-500'
  }];
  var contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Innovative Technology Services - Zion Tech Group",
      description: "Discover cutting-edge AI, quantum computing, and IT infrastructure services. Transform your business with our revolutionary technology solutions.",
      keywords: ["AI services", "quantum computing", "IT infrastructure", "cybersecurity", "micro SAAS", "business solutions"],
      canonical: "https://ziontechgroup.com/enhanced-services"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "relative pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
            className: "text-5xl md:text-6xl font-bold text-white mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
              children: "Innovative"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-white",
              children: "Technology Services"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: ["Transform your business with cutting-edge AI, quantum computing, and IT infrastructure solutions. Choose from ", allServices.length, "+ innovative services designed for the future."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "max-w-2xl mx-auto mb-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
                className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                type: "text",
                placeholder: "Search for services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-12 pr-4 py-4 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-xl"
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-16 bg-slate-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex flex-wrap gap-2",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              onClick: () => setSelectedCategory(category.id),
              className: "flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ".concat(selectedCategory === category.id ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400' : 'border-gray-600 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400'),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(category.icon, {
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: category.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs",
                children: category.count
              })]
            }, category.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-center space-x-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              value: sortBy,
              onChange: e => setSortBy(e.target.value),
              className: "bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "name",
                children: "Sort by Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "price",
                children: "Sort by Price"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "rating",
                children: "Sort by Rating"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "popularity",
                children: "Sort by Popularity"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex bg-black/20 border border-white/20 rounded-lg p-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                onClick: () => setViewMode('grid'),
                className: "p-2 rounded-md transition-colors ".concat(viewMode === 'grid' ? 'bg-cyan-400/20 text-cyan-400' : 'text-gray-400 hover:text-white'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                  className: "w-5 h-5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                onClick: () => setViewMode('list'),
                className: "p-2 rounded-md transition-colors ".concat(viewMode === 'list' ? 'bg-cyan-400/20 text-cyan-400' : 'text-gray-400 hover:text-white'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.List, {
                  className: "w-5 h-5"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "mb-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: "text-gray-300",
            children: ["Showing ", filteredServices.length, " of ", allServices.length, " services"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4',
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
              delay: index * 0.05
            },
            className: viewMode === 'grid' ? 'group' : '',
            children: viewMode === 'grid' ?
            /*#__PURE__*/
            // Grid View
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
                    className: "w-6 h-6 text-white"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "text-right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "text-sm text-cyan-400 font-medium",
                    children: service.category
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex items-center space-x-1 mt-1",
                    children: [[...Array(5)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Star, {
                      className: "w-3 h-3 ".concat(i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600')
                    }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                      className: "text-xs text-gray-400 ml-1",
                      children: ["(", service.reviews, ")"]
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors",
                children: service.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-300 text-sm mb-4 line-clamp-3",
                children: service.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "space-y-3 mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "text-sm text-gray-400",
                    children: "Starting at:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "text-2xl font-bold text-white",
                    children: service.pricing.starter
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex items-center space-x-2 text-xs text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Users, {
                    className: "w-3 h-3"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    children: [service.customers, " customers"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Clock, {
                    className: "w-3 h-3 ml-2"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    children: ["Launched ", new Date(service.launchDate).toLocaleDateString()]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "flex flex-wrap gap-1",
                  children: service.technology.slice(0, 3).map((tech, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-md",
                    children: tech
                  }, i))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: service.slug,
                  className: "text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    children: "Learn More"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {
                    className: "w-4 h-4"
                  })]
                })]
              })]
            }) :
            /*#__PURE__*/
            // List View
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center space-x-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
                    className: "w-8 h-8 text-white"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex-1 min-w-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex items-start justify-between mb-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                      className: "text-xl font-semibold text-white truncate",
                      children: service.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "text-2xl font-bold text-white ml-4",
                      children: service.pricing.starter
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                    className: "text-gray-300 text-sm mb-3 line-clamp-2",
                    children: service.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex items-center space-x-4 text-sm text-gray-400",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                      className: "flex items-center space-x-1",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Users, {
                        className: "w-4 h-4"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                        children: [service.customers, " customers"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                      className: "flex items-center space-x-1",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Star, {
                        className: "w-4 h-4 text-yellow-400 fill-current"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                        children: [service.rating, "/5 (", service.reviews, " reviews)"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                      className: "flex items-center space-x-1",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Clock, {
                        className: "w-4 h-4"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        children: new Date(service.launchDate).toLocaleDateString()
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex flex-col items-end space-y-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "text-sm text-cyan-400 font-medium",
                    children: service.category
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: service.slug,
                    className: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm",
                    children: "View Details"
                  })]
                })]
              })
            })
          }, service.id))
        }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          className: "text-center py-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
              className: "w-12 h-12 text-gray-400"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "text-2xl font-semibold text-white mb-2",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-gray-400 mb-6",
            children: "Try adjusting your search terms or category filters"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            onClick: () => {
              setSearchTerm('');
              setSelectedCategory('all');
            },
            className: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300",
            children: "Clear Filters"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-20 bg-gradient-to-br from-slate-900 to-purple-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
          className: "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-3xl p-8 md:p-12 text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: ["Ready to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
              children: "Transform"
            }), " Your Business?"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto",
            children: "Our team of experts is ready to help you implement the perfect technology solution. Get in touch today to start your transformation journey."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Phone, {
                className: "w-5 h-5 text-cyan-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: contactInfo.mobile
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Mail, {
                className: "w-5 h-5 text-cyan-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: contactInfo.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.MapPin, {
                className: "w-5 h-5 text-cyan-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: contactInfo.address
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              className: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",
              children: "Get Started Today"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/solutions",
              className: "border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300",
              children: "View Solutions"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnhancedServicesPage);

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 636255:
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
/* harmony import */ var private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98173);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/enhanced-services",
        pathname: "/enhanced-services",
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
    userland: private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/enhanced-services",
    config,
    userland: private_next_pages_enhanced_services_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(636255)));
module.exports = __webpack_exports__;

})();