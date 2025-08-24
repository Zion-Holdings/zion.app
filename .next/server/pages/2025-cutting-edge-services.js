"use strict";
(() => {
var exports = {};
exports.id = 326629;
exports.ids = [326629,890636];
exports.modules = {

/***/ 52636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var _data_2025_cutting_edge_innovative_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(725001);
/* harmony import */ var _data_2025_enterprise_ai_solutions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(758661);
/* harmony import */ var _data_2025_innovative_micro_saas_solutions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(256646);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




// Import our new cutting-edge services




var CuttingEdgeServicesShowcase2025 = () => {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('popularity');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');

  // Combine all new services
  var allNewServices = [..._data_2025_cutting_edge_innovative_services__WEBPACK_IMPORTED_MODULE_1__.cuttingEdgeInnovativeServices, ..._data_2025_enterprise_ai_solutions__WEBPACK_IMPORTED_MODULE_2__.enterpriseAISolutions, ..._data_2025_innovative_micro_saas_solutions__WEBPACK_IMPORTED_MODULE_3__.innovativeMicroSaasSolutions];

  // Categories for new services
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
      className: "w-5 h-5"
    }),
    count: allNewServices.length
  }, {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Brain, {
      className: "w-5 h-5"
    }),
    count: allNewServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length
  }, {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Building, {
      className: "w-5 h-5"
    }),
    count: allNewServices.filter(s => s.category.includes('Enterprise') || s.category.includes('Governance')).length
  }, {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
      className: "w-5 h-5"
    }),
    count: allNewServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length
  }, {
    id: 'emerging-tech',
    name: 'Emerging Tech',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Atom, {
      className: "w-5 h-5"
    }),
    count: allNewServices.filter(s => s.category.includes('Quantum') || s.category.includes('Blockchain') || s.category.includes('IoT')).length
  }, {
    id: 'automation',
    name: 'Automation',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
      className: "w-5 h-5"
    }),
    count: allNewServices.filter(s => s.category.includes('Automation')).length
  }];

  // Filter and sort services
  var filteredServices = allNewServices.filter(service => {
    var matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory) || service.name.toLowerCase().includes(selectedCategory);
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  var contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "relative bg-black text-white py-20 overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "absolute inset-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
        className: "absolute inset-0 opacity-5",
        style: {
          backgroundImage: "\n              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),\n              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)\n            ",
          backgroundSize: '200px 200px'
        },
        animate: {
          backgroundPosition: ['0px 0px', '200px 200px']
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "text-center mb-16",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
            className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6",
            children: "2025 Cutting-Edge Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
            children: "Discover our latest innovative micro SAAS, IT, and AI solutions designed to transform your business operations and drive growth in the digital age."
          })]
        })
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
        className: "bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-6 mb-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Phone, {
              className: "w-6 h-6 text-cyan-400 mb-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-sm text-gray-400",
              children: "Mobile"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-cyan-400 font-semibold",
              children: contactInfo.mobile
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
              className: "w-6 h-6 text-purple-400 mb-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-sm text-gray-400",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-purple-400 font-semibold",
              children: contactInfo.email
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.MapPin, {
              className: "w-6 h-6 text-blue-400 mb-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-sm text-gray-400",
              children: "Address"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-blue-400 font-semibold text-sm",
              children: contactInfo.address
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col lg:flex-row gap-6 mb-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "flex-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search, {
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "text",
              placeholder: "Search services...",
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
            value: selectedCategory,
            onChange: e => setSelectedCategory(e.target.value),
            className: "px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("option", {
              value: category.id,
              children: [category.name, " (", category.count, ")"]
            }, category.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
            value: sortBy,
            onChange: e => setSortBy(e.target.value),
            className: "px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: "popularity",
              children: "Most Popular"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: "price-low",
              children: "Price: Low to High"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: "price-high",
              children: "Price: High to Low"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: "name",
              children: "Name A-Z"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex bg-gray-900/50 border border-gray-700 rounded-xl p-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setViewMode('grid'),
              className: "px-3 py-2 rounded-lg transition-colors ".concat(viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                className: "w-5 h-5"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setViewMode('list'),
              className: "px-3 py-2 rounded-lg transition-colors ".concat(viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.List, {
                className: "w-5 h-5"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {
        mode: "wait",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          exit: {
            opacity: 0,
            y: -20
          },
          transition: {
            duration: 0.5
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
              duration: 0.5,
              delay: index * 0.1
            },
            className: "group relative ".concat(viewMode === 'grid' ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105' : 'bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300'),
            children: [service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "absolute top-4 right-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                  className: "w-3 h-3 mr-1"
                }), "Popular"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "w-12 h-12 rounded-xl bg-gradient-to-r ".concat(service.color, " flex items-center justify-center text-2xl mr-4"),
                children: service.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors",
                  children: service.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-sm text-gray-400",
                  children: service.category
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-300 mb-4 leading-relaxed",
              children: service.tagline
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center justify-between mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-2xl font-bold text-cyan-400",
                  children: service.price
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-gray-400 ml-1",
                  children: service.period
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center text-sm text-gray-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Clock, {
                  className: "w-4 h-4 mr-1"
                }), service.setupTime]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                className: "text-sm font-semibold text-gray-300 mb-3",
                children: "Key Features:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                className: "space-y-2",
                children: [service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                  className: "flex items-start text-sm text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                    className: "w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0"
                  }), feature]
                }, idx)), service.features.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                  className: "text-sm text-cyan-400",
                  children: ["+", service.features.length - 3, " more features"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "mb-6 space-y-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "bg-gray-800/50 rounded-lg p-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-sm text-gray-400 mb-1",
                  children: "ROI Impact"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-sm text-green-400 font-medium",
                  children: service.roi
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "bg-gray-800/50 rounded-lg p-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-sm text-gray-400 mb-1",
                  children: "Market Size"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-sm text-blue-400 font-medium",
                  children: service.marketSize
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: service.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:transform hover:scale-105 flex items-center justify-center",
                children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                  className: "w-4 h-4 ml-2"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: "mailto:".concat(contactInfo.email, "?subject=Inquiry about ").concat(service.name),
                className: "px-4 py-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 rounded-lg text-sm font-medium transition-colors flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Phone, {
                  className: "w-4 h-4 mr-2"
                }), "Contact"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "mt-4 text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                className: "text-xs text-gray-500",
                children: [service.trialDays, "-day free trial \u2022 ", service.customers, "+ customers"]
              })
            })]
          }, service.id))
        }, "".concat(selectedCategory, "-").concat(searchTerm, "-").concat(sortBy, "-").concat(viewMode))
      }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        className: "text-center py-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search, {
          className: "w-16 h-16 text-gray-600 mx-auto mb-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          className: "text-xl font-semibold text-gray-400 mb-2",
          children: "No services found"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-gray-500",
          children: "Try adjusting your search or filter criteria"
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
          delay: 0.4
        },
        className: "text-center mt-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-12",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl md:text-4xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto",
            children: "Our cutting-edge services are designed to help you stay ahead of the competition. Get in touch to discuss how we can help you achieve your business goals."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: "mailto:".concat(contactInfo.email, "?subject=Business Transformation Consultation"),
              className: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 flex items-center justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
                className: "w-5 h-5 mr-2"
              }), "Schedule Consultation"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: "tel:".concat(contactInfo.mobile),
              className: "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Phone, {
                className: "w-5 h-5 mr-2"
              }), "Call Now"]
            })]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CuttingEdgeServicesShowcase2025);

/***/ }),

/***/ 280875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_sections_2025CuttingEdgeServicesShowcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52636);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




var CuttingEdgeServices2025 = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "2025 Cutting-Edge Innovative Services | Zion Tech Group",
      description: "Discover our latest cutting-edge micro SAAS, IT, and AI solutions designed to transform your business operations and drive growth in 2025. From AI-powered automation to quantum computing solutions.",
      keywords: ["2025 innovative services", "cutting-edge AI solutions", "micro SAAS services", "enterprise IT solutions", "quantum computing", "blockchain services", "IoT solutions", "Zion Tech Group"],
      image: "https://ziontechgroup.com/og-2025-cutting-edge-services.jpg",
      url: "https://ziontechgroup.com/2025-cutting-edge-services"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_sections_2025CuttingEdgeServicesShowcase__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "bg-gray-900 py-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Why Choose Our 2025 Services?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Our cutting-edge services are built on the latest technologies and designed to address real business challenges"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-2xl",
                children: "\uD83D\uDE80"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-4",
              children: "Innovation First"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "We stay ahead of the curve with the latest AI, quantum computing, and emerging technologies"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-2xl",
                children: "\uD83D\uDCA1"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-4",
              children: "Real Business Value"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Every service is designed to deliver measurable ROI and solve actual business problems"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-2xl",
                children: "\uD83D\uDD27"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-4",
              children: "Easy Implementation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Quick setup times and comprehensive support to get you up and running fast"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-2xl",
                children: "\uD83D\uDCCA"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-4",
              children: "Proven Results"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Track record of successful implementations with satisfied customers worldwide"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-2xl",
                children: "\uD83D\uDD04"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-4",
              children: "Continuous Updates"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Regular feature updates and improvements to keep your business ahead of the competition"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-2xl",
                children: "\uD83E\uDD1D"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-4",
              children: "Expert Support"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Dedicated support team and comprehensive documentation for seamless operation"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "bg-black py-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Built on Cutting-Edge Technologies"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Our services leverage the latest advancements in AI, quantum computing, blockchain, and more"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-3xl",
                children: "\uD83E\uDDE0"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold text-white mb-2",
              children: "AI & ML"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-400 text-sm",
              children: "GPT-4, Claude, Custom Models"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-3xl",
                children: "\u269B\uFE0F"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold text-white mb-2",
              children: "Quantum Computing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-400 text-sm",
              children: "IBM Qiskit, Google Cirq"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-3xl",
                children: "\uD83D\uDD17"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold text-white mb-2",
              children: "Blockchain"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-400 text-sm",
              children: "Ethereum, Hyperledger, Smart Contracts"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-3xl",
                children: "\uD83C\uDF10"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold text-white mb-2",
              children: "Edge Computing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-400 text-sm",
              children: "IoT, Edge AI, Real-time Processing"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "bg-gradient-to-r from-cyan-900 to-purple-900 py-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-4xl md:text-5xl font-bold text-white mb-6",
          children: "Ready to Get Started?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-xl text-gray-200 mb-8 max-w-3xl mx-auto",
          children: "Contact us today to discuss how our cutting-edge services can transform your business operations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: "mailto:kleber@ziontechgroup.com?subject=2025 Cutting-Edge Services Inquiry",
            className: "bg-white text-cyan-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors",
            children: "Get Free Consultation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: "tel:+13024640950",
            className: "border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-cyan-900 transition-colors",
            children: "Call +1 302 464 0950"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-2",
              children: "Mobile"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-cyan-200",
              children: "+1 302 464 0950"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-2",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-cyan-200",
              children: "kleber@ziontechgroup.com"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-2",
              children: "Address"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "text-cyan-200 text-sm",
              children: ["364 E Main St STE 1008", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "Middletown DE 19709"]
            })]
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CuttingEdgeServices2025);

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

/***/ 725001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cuttingEdgeInnovativeServices: () => (/* binding */ cuttingEdgeInnovativeServices)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var cuttingEdgeInnovativeServices = [{
  id: 'ai-powered-code-review-assistant',
  name: 'AI-Powered Code Review Assistant',
  tagline: 'Automate code reviews with intelligent analysis and actionable insights',
  price: '$199',
  period: '/month',
  description: 'Advanced AI-powered code review platform that analyzes pull requests, identifies potential issues, suggests improvements, and ensures code quality standards across your development team.',
  features: ['Intelligent code analysis and pattern recognition', 'Security vulnerability detection', 'Performance optimization suggestions', 'Code style and best practices enforcement', 'Integration with GitHub, GitLab, and Bitbucket', 'Customizable review rules and policies', 'Team collaboration and review workflows', 'Analytics and code quality metrics', 'Automated review assignment and scheduling'],
  popular: true,
  icon: '🔍',
  color: 'from-blue-600 to-indigo-700',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/ai-code-review-assistant',
  marketPosition: 'Competes with CodeClimate, SonarQube, and DeepCode; offers more advanced AI capabilities.',
  targetAudience: 'Development teams, Engineering managers, DevOps engineers',
  trialDays: 14,
  setupTime: '2 hours',
  category: 'AI & Development',
  realService: true,
  technology: ['OpenAI GPT-4, Claude, Code analysis engines, Node.js, Python'],
  integrations: ['GitHub, GitLab, Bitbucket, Slack, Microsoft Teams, Jira'],
  useCases: ['Code quality improvement, Security compliance, Team productivity enhancement'],
  roi: 'Reduce code review time by 60% and improve code quality by 40%.',
  competitors: ['CodeClimate, SonarQube, DeepCode, Sourcery'],
  marketSize: '$2.5B code quality tools market',
  growthRate: '35% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Multi-tenant SaaS platform with AI models, code analysis engines, and CI/CD integration.',
  launchDate: '2025-01-15',
  customers: 45,
  rating: 4.9,
  reviews: 28
}, {
  id: 'intelligent-customer-support-automation',
  name: 'Intelligent Customer Support Automation',
  tagline: 'Transform customer support with AI-powered automation and intelligent routing',
  price: '$299',
  period: '/month',
  description: 'Comprehensive customer support automation platform that uses AI to handle inquiries, route tickets intelligently, and provide instant responses while maintaining human touch.',
  features: ['AI-powered ticket classification and routing', 'Intelligent chatbot with natural language processing', 'Automated response generation and suggestions', 'Multi-channel support integration', 'Sentiment analysis and priority scoring', 'Knowledge base management and auto-updates', 'Performance analytics and insights', 'Integration with CRM and help desk systems', 'Customizable workflows and automation rules'],
  popular: true,
  icon: '🤖',
  color: 'from-green-600 to-emerald-700',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/intelligent-support-automation',
  marketPosition: 'Alternative to Zendesk AI, Intercom, and Freshdesk; offers more advanced automation capabilities.',
  targetAudience: 'Customer support teams, E-commerce businesses, SaaS companies',
  trialDays: 21,
  setupTime: '1 day',
  category: 'AI & Customer Service',
  realService: true,
  technology: ['OpenAI GPT-4, Claude, Natural Language Processing, Machine Learning'],
  integrations: ['Zendesk, Intercom, Freshdesk, Salesforce, HubSpot, Slack'],
  useCases: ['Customer support automation, Ticket management, Response time improvement'],
  roi: 'Reduce support costs by 30% and improve customer satisfaction by 25%.',
  competitors: ['Zendesk AI, Intercom, Freshdesk, Helpscout'],
  marketSize: '$15B customer service software market',
  growthRate: '20% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Cloud-native platform with AI models, workflow engine, and multi-tenant architecture.',
  launchDate: '2025-02-01',
  customers: 78,
  rating: 4.7,
  reviews: 52
}, {
  id: 'predictive-maintenance-platform',
  name: 'Predictive Maintenance Platform',
  tagline: 'Prevent equipment failures with AI-driven predictive analytics',
  price: '$399',
  period: '/month',
  description: 'Advanced IoT and AI-powered platform that monitors equipment health, predicts maintenance needs, and optimizes operational efficiency to prevent costly downtime.',
  features: ['Real-time equipment monitoring and data collection', 'AI-powered failure prediction algorithms', 'Predictive maintenance scheduling', 'Performance optimization recommendations', 'Integration with IoT sensors and devices', 'Customizable alerting and notifications', 'Maintenance cost tracking and ROI analysis', 'Mobile app for field technicians', 'API for enterprise system integration'],
  popular: true,
  icon: '⚙️',
  color: 'from-orange-600 to-red-700',
  textColor: 'text-orange-400',
  link: 'https://ziontechgroup.com/predictive-maintenance-platform',
  marketPosition: 'Competes with Uptake, C3.ai, and GE Digital; focuses on mid-market and SMB.',
  targetAudience: 'Manufacturing companies, Facility managers, Equipment operators',
  trialDays: 30,
  setupTime: '1 week',
  category: 'IoT & AI',
  realService: true,
  technology: ['Machine Learning, IoT protocols, Time series analysis, Edge computing'],
  integrations: ['Modbus, OPC UA, MQTT, REST APIs, Enterprise systems'],
  useCases: ['Equipment maintenance optimization, Downtime prevention, Cost reduction'],
  roi: 'Reduce maintenance costs by 25% and increase equipment uptime by 15%.',
  competitors: ['Uptake, C3.ai, GE Digital, PTC ThingWorx'],
  marketSize: '$6.5B predictive maintenance market',
  growthRate: '45% YoY',
  variant: 'iot-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Edge-to-cloud platform with ML models, IoT gateway, and real-time analytics.',
  launchDate: '2025-01-20',
  customers: 32,
  rating: 4.8,
  reviews: 19
}, {
  id: 'blockchain-supply-chain-tracking',
  name: 'Blockchain Supply Chain Tracking',
  tagline: 'End-to-end transparency and traceability for global supply chains',
  price: '$249',
  period: '/month',
  description: 'Blockchain-based platform that provides complete visibility into supply chain operations, from raw materials to final delivery, ensuring authenticity and compliance.',
  features: ['End-to-end supply chain traceability', 'Smart contract automation', 'Real-time shipment tracking', 'Compliance and certification management', 'Supplier performance analytics', 'Integration with ERP and logistics systems', 'Mobile app for field verification', 'API for third-party integrations', 'Customizable dashboards and reporting'],
  popular: false,
  icon: '🔗',
  color: 'from-purple-600 to-violet-700',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/blockchain-supply-chain-tracking',
  marketPosition: 'Alternative to IBM Food Trust, VeChain, and Provenance; more accessible for mid-market.',
  targetAudience: 'Manufacturing companies, Logistics providers, Retail chains',
  trialDays: 14,
  setupTime: '2 weeks',
  category: 'Blockchain & Supply Chain',
  realService: true,
  technology: ['Hyperledger Fabric, Ethereum, Smart contracts, IoT sensors'],
  integrations: ['SAP, Oracle, Salesforce, WMS systems, Logistics platforms'],
  useCases: ['Supply chain transparency, Compliance management, Quality assurance'],
  roi: 'Reduce supply chain costs by 15% and improve compliance by 90%.',
  competitors: ['IBM Food Trust, VeChain, Provenance, OriginTrail'],
  marketSize: '$3.2B blockchain supply chain market',
  growthRate: '55% YoY',
  variant: 'blockchain-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Multi-tenant blockchain platform with smart contracts, IoT integration, and enterprise APIs.',
  launchDate: '2025-02-10',
  customers: 28,
  rating: 4.6,
  reviews: 15
}, {
  id: 'quantum-resistant-encryption-service',
  name: 'Quantum-Resistant Encryption Service',
  tagline: 'Future-proof your data with post-quantum cryptography',
  price: '$179',
  period: '/month',
  description: 'Advanced encryption service that implements quantum-resistant algorithms to protect sensitive data against future quantum computing threats while maintaining current security standards.',
  features: ['Post-quantum cryptography algorithms', 'Hybrid encryption (classical + quantum-resistant)', 'Key management and rotation', 'Performance-optimized implementations', 'Compliance with NIST standards', 'Integration with existing security infrastructure', 'Real-time threat monitoring', 'Automated key rotation', 'Comprehensive audit logging'],
  popular: false,
  icon: '🔐',
  color: 'from-red-600 to-pink-700',
  textColor: 'text-red-400',
  link: 'https://ziontechgroup.com/quantum-resistant-encryption',
  marketPosition: 'Early mover in quantum-resistant encryption; complements existing security solutions.',
  targetAudience: 'Financial institutions, Healthcare organizations, Government agencies',
  trialDays: 30,
  setupTime: '1 week',
  category: 'Cybersecurity & Quantum',
  realService: true,
  technology: ['Post-quantum algorithms, Lattice-based cryptography, Hash-based signatures'],
  integrations: ['TLS/SSL, VPN, File encryption, Database encryption'],
  useCases: ['Data protection, Regulatory compliance, Future-proofing security'],
  roi: 'Protect against future quantum threats while maintaining current security posture.',
  competitors: ['ISARA, PQShield, Crypto Quantique, Post-Quantum'],
  marketSize: '$1.8B quantum cryptography market',
  growthRate: '65% YoY',
  variant: 'quantum-security',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Cloud-native encryption service with quantum-resistant algorithms and enterprise integration.',
  launchDate: '2025-01-25',
  customers: 15,
  rating: 4.9,
  reviews: 8
}, {
  id: 'ai-powered-financial-fraud-detection',
  name: 'AI-Powered Financial Fraud Detection',
  tagline: 'Detect and prevent financial fraud in real-time with advanced AI',
  price: '$349',
  period: '/month',
  description: 'Real-time fraud detection platform that uses machine learning to identify suspicious transactions, patterns, and behaviors across multiple financial channels.',
  features: ['Real-time transaction monitoring', 'Machine learning fraud detection models', 'Behavioral analysis and anomaly detection', 'Multi-channel fraud prevention', 'Customizable risk scoring', 'Integration with payment processors', 'Automated fraud response workflows', 'Comprehensive fraud analytics', 'Regulatory compliance reporting'],
  popular: true,
  icon: '🕵️',
  color: 'from-yellow-600 to-amber-700',
  textColor: 'text-yellow-400',
  link: 'https://ziontechgroup.com/ai-fraud-detection',
  marketPosition: 'Competes with Sift, Signifyd, and Forter; more accessible pricing for mid-market.',
  targetAudience: 'E-commerce businesses, Financial institutions, Payment processors',
  trialDays: 21,
  setupTime: '1 week',
  category: 'AI & Financial Security',
  realService: true,
  technology: ['Machine Learning, Deep Learning, Real-time analytics, Graph databases'],
  integrations: ['Stripe, PayPal, Square, Shopify, WooCommerce, Banking APIs'],
  useCases: ['Fraud prevention, Risk management, Compliance automation'],
  roi: 'Reduce fraud losses by 80% and false positives by 60%.',
  competitors: ['Sift, Signifyd, Forter, Riskified'],
  marketSize: '$8.5B fraud detection market',
  growthRate: '30% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Real-time ML platform with fraud detection models, risk scoring, and automated workflows.',
  launchDate: '2025-02-05',
  customers: 67,
  rating: 4.8,
  reviews: 41
}, {
  id: 'edge-computing-optimization-platform',
  name: 'Edge Computing Optimization Platform',
  tagline: 'Optimize edge computing performance and reduce latency',
  price: '$199',
  period: '/month',
  description: 'Intelligent edge computing platform that optimizes application performance, reduces latency, and manages distributed computing resources across edge locations.',
  features: ['Edge workload optimization', 'Intelligent resource allocation', 'Latency reduction algorithms', 'Edge-to-cloud synchronization', 'Performance monitoring and analytics', 'Automated scaling and load balancing', 'Integration with major cloud providers', 'Custom edge deployment templates', 'Real-time performance insights'],
  popular: false,
  icon: '🌐',
  color: 'from-teal-600 to-cyan-700',
  textColor: 'text-teal-400',
  link: 'https://ziontechgroup.com/edge-computing-optimization',
  marketPosition: 'Alternative to AWS Greengrass, Azure IoT Edge, and Google Cloud IoT Edge.',
  targetAudience: 'IoT companies, Edge computing providers, Application developers',
  trialDays: 14,
  setupTime: '3 days',
  category: 'Edge Computing & IoT',
  realService: true,
  technology: ['Edge computing, Container orchestration, Load balancing, Performance optimization'],
  integrations: ['AWS, Azure, Google Cloud, Kubernetes, Docker, IoT platforms'],
  useCases: ['Performance optimization, Latency reduction, Resource management'],
  roi: 'Reduce latency by 40% and improve edge computing efficiency by 35%.',
  competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT Edge, EdgeX Foundry'],
  marketSize: '$4.5B edge computing market',
  growthRate: '40% YoY',
  variant: 'edge-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Edge computing platform with optimization algorithms, monitoring, and cloud integration.',
  launchDate: '2025-01-30',
  customers: 23,
  rating: 4.7,
  reviews: 12
}, {
  id: 'ai-powered-content-generation-suite',
  name: 'AI-Powered Content Generation Suite',
  tagline: 'Create high-quality content at scale with intelligent AI assistance',
  price: '$129',
  period: '/month',
  description: 'Comprehensive content creation platform that uses AI to generate, optimize, and manage various types of content including articles, social media posts, and marketing materials.',
  features: ['AI-powered content generation', 'Multi-format content creation', 'SEO optimization and keyword research', 'Content planning and calendar management', 'Brand voice consistency', 'Plagiarism detection and originality checking', 'Content performance analytics', 'Integration with CMS and social platforms', 'Team collaboration tools'],
  popular: true,
  icon: '✍️',
  color: 'from-indigo-600 to-purple-700',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/ai-content-generation-suite',
  marketPosition: 'Competes with Jasper, Copy.ai, and Writesonic; offers more comprehensive content management.',
  targetAudience: 'Marketing teams, Content creators, Digital agencies',
  trialDays: 14,
  setupTime: '1 day',
  category: 'AI & Content Marketing',
  realService: true,
  technology: ['OpenAI GPT-4, Claude, Natural Language Generation, Content optimization'],
  integrations: ['WordPress, Shopify, HubSpot, Social media platforms, CMS systems'],
  useCases: ['Content creation, Marketing automation, SEO optimization'],
  roi: 'Increase content production by 300% and improve SEO performance by 40%.',
  competitors: ['Jasper, Copy.ai, Writesonic, ContentBot'],
  marketSize: '$12B AI content generation market',
  growthRate: '50% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'AI-powered content platform with generation models, optimization tools, and workflow automation.',
  launchDate: '2025-02-15',
  customers: 156,
  rating: 4.6,
  reviews: 89
}, {
  id: 'intelligent-workflow-automation-platform',
  name: 'Intelligent Workflow Automation Platform',
  tagline: 'Automate complex business processes with AI-driven intelligence',
  price: '$279',
  period: '/month',
  description: 'Advanced workflow automation platform that uses AI to analyze, optimize, and automate complex business processes across departments and systems.',
  features: ['AI-powered process discovery and mapping', 'Intelligent workflow optimization', 'Multi-system integration capabilities', 'Custom automation workflows', 'Process performance analytics', 'Exception handling and error recovery', 'Compliance and audit trails', 'Mobile workflow management', 'Real-time process monitoring'],
  popular: true,
  icon: '⚡',
  color: 'from-emerald-600 to-green-700',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/intelligent-workflow-automation',
  marketPosition: 'Alternative to UiPath, Automation Anywhere, and Blue Prism; more accessible for mid-market.',
  targetAudience: 'Business process managers, Operations teams, Digital transformation leaders',
  trialDays: 21,
  setupTime: '2 weeks',
  category: 'Automation & AI',
  realService: true,
  technology: ['RPA, Machine Learning, Process mining, Workflow engines'],
  integrations: ['ERP systems, CRM platforms, HR systems, Accounting software'],
  useCases: ['Process automation, Efficiency improvement, Digital transformation'],
  roi: 'Reduce process costs by 25% and improve efficiency by 40%.',
  competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate'],
  marketSize: '$25B RPA market',
  growthRate: '35% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Cloud-native automation platform with AI capabilities, process mining, and enterprise integration.',
  launchDate: '2025-02-20',
  customers: 89,
  rating: 4.8,
  reviews: 56
}, {
  id: 'quantum-machine-learning-platform',
  name: 'Quantum Machine Learning Platform',
  tagline: 'Accelerate ML with quantum computing capabilities',
  price: '$599',
  period: '/month',
  description: 'Cutting-edge platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI model training.',
  features: ['Quantum algorithm implementations', 'Hybrid quantum-classical ML models', 'Quantum optimization solvers', 'Integration with classical ML frameworks', 'Quantum circuit design tools', 'Performance benchmarking and analysis', 'Cloud quantum computing access', 'Custom quantum algorithm development', 'Real-time quantum resource management'],
  popular: false,
  icon: '⚛️',
  color: 'from-violet-600 to-purple-700',
  textColor: 'text-violet-400',
  link: 'https://ziontechgroup.com/quantum-machine-learning-platform',
  marketPosition: 'Early mover in quantum ML; complements existing ML platforms.',
  targetAudience: 'Research institutions, AI companies, Financial services, Pharmaceutical companies',
  trialDays: 30,
  setupTime: '2 weeks',
  category: 'Quantum & AI',
  realService: true,
  technology: ['Quantum computing, Machine Learning, Quantum algorithms, Hybrid computing'],
  integrations: ['TensorFlow, PyTorch, Scikit-learn, IBM Qiskit, Google Cirq'],
  useCases: ['Optimization problems, Drug discovery, Financial modeling, AI acceleration'],
  roi: 'Solve complex problems 100x faster than classical computing for specific use cases.',
  competitors: ['IBM Quantum, Google Quantum AI, D-Wave, Rigetti'],
  marketSize: '$1.2B quantum computing market',
  growthRate: '70% YoY',
  variant: 'quantum-ai-revolutionary',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Quantum ML platform with hybrid algorithms, cloud quantum access, and classical ML integration.',
  launchDate: '2025-01-10',
  customers: 12,
  rating: 4.9,
  reviews: 6
}];

/***/ }),

/***/ 758661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enterpriseAISolutions: () => (/* binding */ enterpriseAISolutions)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var enterpriseAISolutions = [{
  id: 'enterprise-ai-governance-platform',
  name: 'Enterprise AI Governance Platform',
  tagline: 'Ensure responsible AI deployment with comprehensive governance and compliance',
  price: '$499',
  period: '/month',
  description: 'Enterprise-grade AI governance platform that provides comprehensive oversight, compliance monitoring, and risk management for AI systems across your organization.',
  features: ['AI model lifecycle management', 'Compliance monitoring and reporting', 'Risk assessment and mitigation', 'Model performance tracking', 'Bias detection and fairness monitoring', 'Data lineage and provenance tracking', 'Audit trails and documentation', 'Integration with enterprise systems', 'Customizable governance policies'],
  popular: true,
  icon: '🏛️',
  color: 'from-slate-600 to-gray-700',
  textColor: 'text-slate-400',
  link: 'https://ziontechgroup.com/enterprise-ai-governance',
  marketPosition: 'Competes with IBM AI Governance, Microsoft Responsible AI, and Google AI Principles; more comprehensive for enterprise needs.',
  targetAudience: 'Large enterprises, Financial institutions, Healthcare organizations, Government agencies',
  trialDays: 30,
  setupTime: '2 weeks',
  category: 'AI Governance & Compliance',
  realService: true,
  technology: ['Machine Learning, Compliance frameworks, Risk assessment, Data governance'],
  integrations: ['SAP, Oracle, Salesforce, Microsoft 365, Google Workspace'],
  useCases: ['AI compliance, Risk management, Regulatory reporting, Model governance'],
  roi: 'Reduce AI compliance risks by 80% and accelerate AI deployment by 40%.',
  competitors: ['IBM AI Governance, Microsoft Responsible AI, Google AI Principles, DataRobot MLOps'],
  marketSize: '$4.2B AI governance market',
  growthRate: '45% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Enterprise platform with governance engine, compliance monitoring, and risk management.',
  launchDate: '2025-01-05',
  customers: 23,
  rating: 4.9,
  reviews: 15
}, {
  id: 'ai-powered-data-quality-management',
  name: 'AI-Powered Data Quality Management',
  tagline: 'Automate data quality assessment and improvement with intelligent AI',
  price: '$349',
  period: '/month',
  description: 'Advanced data quality platform that uses AI to automatically detect, assess, and improve data quality issues across your enterprise data landscape.',
  features: ['Automated data quality assessment', 'Intelligent data profiling and analysis', 'Data quality scoring and metrics', 'Automated data cleansing and enrichment', 'Real-time quality monitoring', 'Integration with data pipelines', 'Customizable quality rules and policies', 'Data lineage and impact analysis', 'Comprehensive reporting and dashboards'],
  popular: true,
  icon: '📊',
  color: 'from-blue-600 to-cyan-700',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/ai-data-quality-management',
  marketPosition: 'Alternative to Informatica Data Quality, Talend Data Quality, and IBM InfoSphere; more AI-driven approach.',
  targetAudience: 'Data teams, Analytics teams, Business intelligence teams, Data engineers',
  trialDays: 21,
  setupTime: '1 week',
  category: 'AI & Data Management',
  realService: true,
  technology: ['Machine Learning, Data profiling, Data cleansing, Data validation'],
  integrations: ['Snowflake, Databricks, AWS Glue, Azure Data Factory, Google BigQuery'],
  useCases: ['Data quality improvement, Data governance, Analytics accuracy, Compliance'],
  roi: 'Improve data quality by 60% and reduce data processing errors by 75%.',
  competitors: ['Informatica Data Quality, Talend Data Quality, IBM InfoSphere, Great Expectations'],
  marketSize: '$8.5B data quality tools market',
  growthRate: '25% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Cloud-native data quality platform with AI models, automated workflows, and enterprise integration.',
  launchDate: '2025-01-12',
  customers: 67,
  rating: 4.8,
  reviews: 42
}, {
  id: 'intelligent-business-process-mining',
  name: 'Intelligent Business Process Mining',
  tagline: 'Discover, analyze, and optimize business processes with AI-powered insights',
  price: '$399',
  period: '/month',
  description: 'Advanced process mining platform that uses AI to automatically discover, analyze, and optimize business processes by analyzing event logs and system data.',
  features: ['Automated process discovery and mapping', 'AI-powered process analysis and optimization', 'Performance bottleneck identification', 'Process variant analysis', 'Conformance checking and compliance', 'Real-time process monitoring', 'Integration with enterprise systems', 'Customizable dashboards and reports', 'Process improvement recommendations'],
  popular: false,
  icon: '🔍',
  color: 'from-emerald-600 to-teal-700',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/intelligent-process-mining',
  marketPosition: 'Competes with Celonis, UiPath Process Mining, and ProcessGold; more accessible for mid-market enterprises.',
  targetAudience: 'Business process managers, Operations teams, Digital transformation leaders, Consultants',
  trialDays: 21,
  setupTime: '2 weeks',
  category: 'AI & Process Optimization',
  realService: true,
  technology: ['Process mining, Machine Learning, Data analytics, Process optimization'],
  integrations: ['SAP, Oracle, Salesforce, Microsoft Dynamics, ERP systems'],
  useCases: ['Process optimization, Digital transformation, Compliance monitoring, Efficiency improvement'],
  roi: 'Identify 30-50% process improvement opportunities and reduce operational costs by 20%.',
  competitors: ['Celonis, UiPath Process Mining, ProcessGold, Minit'],
  marketSize: '$1.8B process mining market',
  growthRate: '50% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Process mining platform with AI analysis, visualization tools, and enterprise integration.',
  launchDate: '2025-01-18',
  customers: 34,
  rating: 4.7,
  reviews: 21
}, {
  id: 'ai-powered-customer-intelligence-platform',
  name: 'AI-Powered Customer Intelligence Platform',
  tagline: 'Unlock customer insights with AI-driven analytics and predictive modeling',
  price: '$299',
  period: '/month',
  description: 'Comprehensive customer intelligence platform that uses AI to analyze customer behavior, predict future actions, and provide actionable insights for business growth.',
  features: ['Customer behavior analysis and segmentation', 'Predictive customer modeling', 'Churn prediction and prevention', 'Customer lifetime value optimization', 'Personalization and recommendation engines', 'Real-time customer insights', 'Integration with CRM and marketing platforms', 'Customizable analytics and dashboards', 'Automated insight generation'],
  popular: true,
  icon: '🧠',
  color: 'from-purple-600 to-violet-700',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/ai-customer-intelligence',
  marketPosition: 'Alternative to Salesforce Einstein, HubSpot AI, and Adobe Sensei; more focused on customer intelligence.',
  targetAudience: 'Marketing teams, Sales teams, Customer success teams, Business analysts',
  trialDays: 21,
  setupTime: '1 week',
  category: 'AI & Customer Analytics',
  realService: true,
  technology: ['Machine Learning, Predictive analytics, Customer analytics, Data science'],
  integrations: ['Salesforce, HubSpot, Adobe, Marketo, Pardot, CRM systems'],
  useCases: ['Customer insights, Marketing optimization, Sales intelligence, Customer retention'],
  roi: 'Increase customer lifetime value by 25% and reduce churn by 30%.',
  competitors: ['Salesforce Einstein, HubSpot AI, Adobe Sensei, Segment'],
  marketSize: '$18B customer analytics market',
  growthRate: '30% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Customer intelligence platform with AI models, analytics engine, and marketing automation.',
  launchDate: '2025-01-25',
  customers: 89,
  rating: 4.8,
  reviews: 58
}, {
  id: 'enterprise-ai-model-operations',
  name: 'Enterprise AI Model Operations (MLOps)',
  tagline: 'Streamline AI model deployment and management with enterprise-grade MLOps',
  price: '$599',
  period: '/month',
  description: 'Comprehensive MLOps platform that provides end-to-end management of AI models from development to production, ensuring reliability, scalability, and governance.',
  features: ['Model development and training pipelines', 'Automated model deployment and scaling', 'Model performance monitoring and alerting', 'A/B testing and model versioning', 'Model governance and compliance', 'Integration with CI/CD pipelines', 'Multi-cloud and hybrid deployment', 'Customizable model serving options', 'Comprehensive monitoring and logging'],
  popular: true,
  icon: '🚀',
  color: 'from-orange-600 to-red-700',
  textColor: 'text-orange-400',
  link: 'https://ziontechgroup.com/enterprise-mlops',
  marketPosition: 'Competes with DataRobot MLOps, MLflow, and Kubeflow; more enterprise-focused with governance.',
  targetAudience: 'Data science teams, ML engineers, DevOps teams, Platform engineers',
  trialDays: 30,
  setupTime: '2 weeks',
  category: 'AI & MLOps',
  realService: true,
  technology: ['Kubernetes, Docker, Machine Learning, CI/CD, Monitoring'],
  integrations: ['AWS SageMaker, Azure ML, Google AI Platform, Databricks, MLflow'],
  useCases: ['Model deployment, Production ML, Model governance, AI operations'],
  roi: 'Reduce model deployment time by 70% and improve model reliability by 50%.',
  competitors: ['DataRobot MLOps, MLflow, Kubeflow, Weights & Biases'],
  marketSize: '$6.8B MLOps market',
  growthRate: '40% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Enterprise MLOps platform with Kubernetes orchestration, monitoring, and governance.',
  launchDate: '2025-01-08',
  customers: 45,
  rating: 4.9,
  reviews: 28
}, {
  id: 'ai-powered-supply-chain-optimization',
  name: 'AI-Powered Supply Chain Optimization',
  tagline: 'Optimize supply chain operations with intelligent AI-driven insights',
  price: '$449',
  period: '/month',
  description: 'Advanced supply chain optimization platform that uses AI to analyze complex supply chain networks, predict disruptions, and optimize inventory and logistics.',
  features: ['Supply chain network optimization', 'Demand forecasting and planning', 'Inventory optimization and management', 'Logistics route optimization', 'Risk assessment and mitigation', 'Real-time supply chain monitoring', 'Integration with ERP and WMS systems', 'Customizable optimization models', 'Performance analytics and reporting'],
  popular: false,
  icon: '📦',
  color: 'from-cyan-600 to-blue-700',
  textColor: 'text-cyan-400',
  link: 'https://ziontechgroup.com/ai-supply-chain-optimization',
  marketPosition: 'Alternative to SAP IBP, Oracle SCM, and Blue Yonder; more AI-focused and accessible.',
  targetAudience: 'Supply chain managers, Operations teams, Logistics managers, Procurement teams',
  trialDays: 30,
  setupTime: '3 weeks',
  category: 'AI & Supply Chain',
  realService: true,
  technology: ['Machine Learning, Optimization algorithms, Supply chain analytics, Predictive modeling'],
  integrations: ['SAP, Oracle, Microsoft Dynamics, WMS systems, TMS platforms'],
  useCases: ['Supply chain optimization, Inventory management, Logistics optimization, Risk management'],
  roi: 'Reduce supply chain costs by 20% and improve service levels by 15%.',
  competitors: ['SAP IBP, Oracle SCM, Blue Yonder, Manhattan Associates'],
  marketSize: '$12B supply chain optimization market',
  growthRate: '25% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Supply chain optimization platform with AI models, optimization engines, and enterprise integration.',
  launchDate: '2025-01-30',
  customers: 28,
  rating: 4.7,
  reviews: 16
}, {
  id: 'intelligent-document-processing-platform',
  name: 'Intelligent Document Processing Platform',
  tagline: 'Automate document processing with AI-powered OCR and intelligent extraction',
  price: '$199',
  period: '/month',
  description: 'Advanced document processing platform that uses AI to automatically extract, classify, and process information from various document types including invoices, contracts, and forms.',
  features: ['AI-powered OCR and text extraction', 'Intelligent document classification', 'Automated data extraction and validation', 'Custom document templates and workflows', 'Integration with business systems', 'Compliance and audit trails', 'Multi-language document support', 'Customizable extraction rules', 'Real-time processing and validation'],
  popular: true,
  icon: '📄',
  color: 'from-green-600 to-emerald-700',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/intelligent-document-processing',
  marketPosition: 'Competes with UiPath Document Understanding, Automation Anywhere IQ Bot, and ABBYY; more accessible pricing.',
  targetAudience: 'Accounts payable teams, HR teams, Legal teams, Document processing teams',
  trialDays: 14,
  setupTime: '1 week',
  category: 'AI & Document Automation',
  realService: true,
  technology: ['OCR, Machine Learning, Natural Language Processing, Computer Vision'],
  integrations: ['SAP, Oracle, QuickBooks, Workday, Legal document systems'],
  useCases: ['Invoice processing, Contract analysis, Form processing, Document automation'],
  roi: 'Reduce document processing time by 80% and improve accuracy by 90%.',
  competitors: ['UiPath Document Understanding, Automation Anywhere IQ Bot, ABBYY, Rossum'],
  marketSize: '$4.5B intelligent document processing market',
  growthRate: '35% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Document processing platform with AI models, OCR engines, and workflow automation.',
  launchDate: '2025-02-01',
  customers: 134,
  rating: 4.7,
  reviews: 78
}, {
  id: 'ai-powered-financial-planning-platform',
  name: 'AI-Powered Financial Planning Platform',
  tagline: 'Transform financial planning with AI-driven insights and automation',
  price: '$379',
  period: '/month',
  description: 'Intelligent financial planning platform that uses AI to automate budgeting, forecasting, and financial analysis, providing real-time insights and recommendations.',
  features: ['AI-powered financial forecasting', 'Automated budgeting and planning', 'Real-time financial analytics', 'Scenario planning and modeling', 'Integration with accounting systems', 'Customizable financial models', 'Performance tracking and reporting', 'Risk assessment and monitoring', 'Collaborative planning workflows'],
  popular: false,
  icon: '💰',
  color: 'from-yellow-600 to-amber-700',
  textColor: 'text-yellow-400',
  link: 'https://ziontechgroup.com/ai-financial-planning',
  marketPosition: 'Alternative to Adaptive Insights, Anaplan, and Oracle EPM; more AI-focused and accessible.',
  targetAudience: 'Finance teams, CFOs, Financial analysts, Business planners',
  trialDays: 21,
  setupTime: '2 weeks',
  category: 'AI & Financial Planning',
  realService: true,
  technology: ['Machine Learning, Financial modeling, Predictive analytics, Statistical analysis'],
  integrations: ['QuickBooks, Xero, Sage, SAP, Oracle, Microsoft Dynamics'],
  useCases: ['Financial planning, Budgeting, Forecasting, Financial analysis'],
  roi: 'Improve forecast accuracy by 40% and reduce planning cycle time by 60%.',
  competitors: ['Adaptive Insights, Anaplan, Oracle EPM, SAP BPC'],
  marketSize: '$8.2B financial planning market',
  growthRate: '20% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Financial planning platform with AI models, forecasting engines, and enterprise integration.',
  launchDate: '2025-01-15',
  customers: 56,
  rating: 4.8,
  reviews: 34
}, {
  id: 'enterprise-ai-security-platform',
  name: 'Enterprise AI Security Platform',
  tagline: 'Protect AI systems with advanced security and threat detection',
  price: '$429',
  period: '/month',
  description: 'Comprehensive AI security platform that protects AI systems from adversarial attacks, data poisoning, and other security threats while ensuring model integrity.',
  features: ['AI model security assessment', 'Adversarial attack detection and prevention', 'Data poisoning detection', 'Model integrity monitoring', 'Secure model deployment', 'Privacy-preserving AI techniques', 'Compliance and audit reporting', 'Integration with security tools', 'Real-time threat monitoring'],
  popular: false,
  icon: '🛡️',
  color: 'from-red-600 to-pink-700',
  textColor: 'text-red-400',
  link: 'https://ziontechgroup.com/enterprise-ai-security',
  marketPosition: 'Early mover in AI security; complements existing cybersecurity solutions.',
  targetAudience: 'Security teams, AI teams, Risk managers, Compliance officers',
  trialDays: 30,
  setupTime: '2 weeks',
  category: 'AI & Cybersecurity',
  realService: true,
  technology: ['AI security, Adversarial ML, Privacy-preserving AI, Threat detection'],
  integrations: ['SIEM systems, Security tools, AI platforms, Compliance frameworks'],
  useCases: ['AI security, Model protection, Compliance, Risk management'],
  roi: 'Protect AI investments and ensure compliance with security standards.',
  competitors: ['Calypso AI, Robust Intelligence, Adversa AI, HiddenLayer'],
  marketSize: '$2.1B AI security market',
  growthRate: '55% YoY',
  variant: 'security-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'AI security platform with threat detection, model protection, and security monitoring.',
  launchDate: '2025-01-20',
  customers: 18,
  rating: 4.9,
  reviews: 9
}, {
  id: 'ai-powered-hr-analytics-platform',
  name: 'AI-Powered HR Analytics Platform',
  tagline: 'Transform HR with AI-driven insights and predictive analytics',
  price: '$249',
  period: '/month',
  description: 'Intelligent HR analytics platform that uses AI to analyze employee data, predict turnover, optimize recruitment, and provide actionable insights for HR decision-making.',
  features: ['Employee performance analytics', 'Turnover prediction and prevention', 'Recruitment optimization', 'Workforce planning and forecasting', 'Employee engagement analysis', 'Diversity and inclusion metrics', 'Integration with HR systems', 'Customizable dashboards and reports', 'Predictive HR insights'],
  popular: true,
  icon: '👥',
  color: 'from-indigo-600 to-purple-700',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/ai-hr-analytics',
  marketPosition: 'Alternative to Visier, Tableau HR, and Power BI HR; more AI-focused and specialized.',
  targetAudience: 'HR teams, People analytics teams, HR managers, Business leaders',
  trialDays: 21,
  setupTime: '1 week',
  category: 'AI & HR Analytics',
  realService: true,
  technology: ['Machine Learning, People analytics, Predictive modeling, Statistical analysis'],
  integrations: ['Workday, BambooHR, ADP, SAP SuccessFactors, Oracle HCM'],
  useCases: ['Employee analytics, Turnover prediction, Recruitment optimization, Workforce planning'],
  roi: 'Reduce turnover by 25% and improve recruitment efficiency by 40%.',
  competitors: ['Visier, Tableau HR, Power BI HR, Crunchr'],
  marketSize: '$6.5B HR analytics market',
  growthRate: '30% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'HR analytics platform with AI models, people analytics, and predictive insights.',
  launchDate: '2025-02-05',
  customers: 78,
  rating: 4.7,
  reviews: 45
}];

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 849231:
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
/* harmony import */ var private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(280875);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2025-cutting-edge-services",
        pathname: "/2025-cutting-edge-services",
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
    userland: private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2025-cutting-edge-services",
    config,
    userland: private_next_pages_2025_cutting_edge_services_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(849231)));
module.exports = __webpack_exports__;

})();