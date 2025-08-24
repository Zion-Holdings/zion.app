"use strict";
(() => {
var exports = {};
exports.id = 47027;
exports.ids = [47027,890636];
exports.modules = {

/***/ 284473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServicesAdvertising2025)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var _data_innovative_2025_q4_new_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(254467);
/* harmony import */ var _data_emerging_tech_2025_innovations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(349618);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// Import our new service data



var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
var allServices = [..._data_innovative_2025_q4_new_services__WEBPACK_IMPORTED_MODULE_2__.innovative2025Q4NewServices, ..._data_emerging_tech_2025_innovations__WEBPACK_IMPORTED_MODULE_3__.emergingTech2025Innovations];
var categories = [{
  id: 'all',
  name: 'All Services',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    className: "w-6 h-6"
  }),
  color: 'from-gray-500 to-slate-500',
  description: 'Complete portfolio of innovative services'
}, {
  id: 'ai-business',
  name: 'AI & Business',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Brain, {
    className: "w-6 h-6"
  }),
  color: 'from-blue-500 to-purple-500',
  description: 'AI-powered business solutions and intelligence'
}, {
  id: 'cybersecurity',
  name: 'Cybersecurity',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield, {
    className: "w-6 h-6"
  }),
  color: 'from-red-500 to-orange-500',
  description: 'Advanced security and threat intelligence'
}, {
  id: 'cloud-devops',
  name: 'Cloud & DevOps',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cloud, {
    className: "w-6 h-6"
  }),
  color: 'from-green-500 to-emerald-500',
  description: 'Cloud optimization and autonomous DevOps'
}, {
  id: 'emerging-tech',
  name: 'Emerging Tech',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Atom, {
    className: "w-6 h-6"
  }),
  color: 'from-purple-500 to-pink-500',
  description: 'Space technology, quantum computing, and more'
}, {
  id: 'blockchain-iot',
  name: 'Blockchain & IoT',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Network, {
    className: "w-6 h-6"
  }),
  color: 'from-indigo-500 to-purple-500',
  description: 'Blockchain solutions and IoT platforms'
}];
function ServicesAdvertising2025() {
  var _categories$find;
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var filteredServices = allServices.filter(service => {
    var matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "Innovative Services 2025 - Zion Tech Group",
      description: "Discover our cutting-edge micro SAAS services, IT solutions, and AI platforms. Transform your business with our innovative technology solutions.",
      keywords: "micro SAAS, AI services, cybersecurity, cloud optimization, blockchain, IoT, quantum computing, space technology"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "relative py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "max-w-7xl mx-auto text-center",
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
            className: "text-5xl md:text-7xl font-bold text-white mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
              children: "Innovative Services 2025"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Transform your business with our cutting-edge micro SAAS services, AI-powered solutions, and emerging technology platforms. Stay ahead of the competition with Zion Tech Group."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: "tel:".concat(contact.mobile),
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Phone, {
                className: "w-5 h-5 mr-2"
              }), "Call ", contact.mobile]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: "mailto:".concat(contact.email),
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Mail, {
                className: "w-5 h-5 mr-2"
              }), "Email Us"]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "bg-gradient-to-r from-blue-600 to-purple-600 py-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row justify-between items-center text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex items-center space-x-6 mb-4 sm:mb-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Phone, {
                className: "w-5 h-5 mr-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "font-semibold",
                children: contact.mobile
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Mail, {
                className: "w-5 h-5 mr-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "font-semibold",
                children: contact.email
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MapPin, {
              className: "w-5 h-5 mr-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "font-semibold",
              children: contact.address
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-8 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "relative flex-1 max-w-md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search, {
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "text",
              placeholder: "Search services...",
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setViewMode('grid'),
              className: "p-2 rounded-lg transition-colors ".concat(viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                className: "w-5 h-5"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setViewMode('list'),
              className: "p-2 rounded-lg transition-colors ".concat(viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.List, {
                className: "w-5 h-5"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "mt-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-wrap gap-4",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
              onClick: () => setSelectedCategory(category.id),
              className: "flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'),
              children: [category.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                children: category.name
              })]
            }, category.id))
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-12 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl font-bold text-white mb-2",
            children: selectedCategory === 'all' ? 'All Services' : (_categories$find = categories.find(c => c.id === selectedCategory)) === null || _categories$find === void 0 ? void 0 : _categories$find.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: "text-gray-400",
            children: [filteredServices.length, " services available"]
          })]
        }), viewMode === 'grid' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
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
            className: "group relative",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "text-3xl",
                  children: service.icon
                }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full",
                  children: "POPULAR"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                className: "text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors",
                children: service.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-gray-300 text-sm mb-4 line-clamp-2",
                children: service.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "text-2xl font-bold text-white",
                  children: [typeof service.price === 'string' ? service.price : "$".concat(service.price.monthly, "/month"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-lg text-gray-400",
                    children: typeof service.price === 'string' ? ('period' in service ? service.period : '') || '' : ''
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center text-yellow-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                    className: "w-5 h-5 fill-current"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "ml-1 text-white",
                    children: service.rating
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                  className: "text-sm font-semibold text-gray-400 mb-2",
                  children: "KEY FEATURES"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "space-y-2",
                  children: service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center text-sm text-gray-300",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                      className: "w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "line-clamp-1",
                      children: feature
                    })]
                  }, idx))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "mb-6 space-y-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "text-xs text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "font-semibold",
                    children: "Market Position:"
                  }), " ", 'marketPosition' in service ? service.marketPosition : '']
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "text-xs text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "font-semibold",
                    children: "ROI:"
                  }), " ", service.roi]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: service.link,
                className: "w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg",
                children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                  className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                })]
              })]
            })
          }, service.id))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "space-y-6",
          children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
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
            className: "group",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col lg:flex-row gap-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex-shrink-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "text-4xl mb-4",
                    children: service.icon
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "text-2xl font-bold text-white mb-2",
                      children: [typeof service.price === 'string' ? service.price : "$".concat(service.price.monthly, "/month"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                        className: "text-lg text-gray-400",
                        children: typeof service.price === 'string' ? ('period' in service ? service.period : '') || '' : ''
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "flex items-center justify-center text-yellow-400 mb-2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                        className: "w-4 h-4 fill-current"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                        className: "ml-1 text-white text-sm",
                        children: service.rating
                      })]
                    }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full",
                      children: "POPULAR"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "flex items-start justify-between mb-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                        className: "text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors",
                        children: service.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                        className: "text-gray-300 mb-4",
                        children: service.description
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                        className: "text-sm font-semibold text-gray-400 mb-2",
                        children: "KEY FEATURES"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "space-y-2",
                        children: service.features.slice(0, 4).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                          className: "flex items-center text-sm text-gray-300",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                            className: "w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                            children: feature
                          })]
                        }, idx))
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                        className: "text-sm font-semibold text-gray-400 mb-2",
                        children: "MARKET INFO"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "space-y-2 text-sm text-gray-300",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                            className: "font-semibold",
                            children: "Market Position:"
                          }), " ", 'marketPosition' in service ? service.marketPosition : '']
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                            className: "font-semibold",
                            children: "ROI:"
                          }), " ", service.roi]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                            className: "font-semibold",
                            children: "Category:"
                          }), " ", service.category]
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                        className: "text-sm font-semibold text-gray-400 mb-2",
                        children: "TECHNOLOGY"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: ('technology' in service ? service.technology : 'techStack' in service ? service.techStack : []).slice(0, 4).map((tech, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                          className: "px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded",
                          children: tech
                        }, idx))
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                        className: "text-sm font-semibold text-gray-400 mb-2",
                        children: "USE CASES"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: service.useCases.slice(0, 3).map((useCase, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                          className: "px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded",
                          children: useCase
                        }, idx))
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "text-sm text-gray-400",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                        className: "font-semibold",
                        children: "Target Audience:"
                      }), " ", service.targetAudience]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                      href: service.link,
                      className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
                      children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                        className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      })]
                    })]
                  })]
                })]
              })
            })
          }, service.id))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20",
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
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8",
            children: "Get in touch with our team to discuss how our innovative services can help you achieve your business goals and stay ahead of the competition."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: "tel:".concat(contact.mobile),
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Phone, {
                className: "w-5 h-5 mr-2"
              }), "Call ", contact.mobile]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: "mailto:".concat(contact.email),
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Mail, {
                className: "w-5 h-5 mr-2"
              }), "Email ", contact.email]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "mt-8 text-gray-400",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
              children: ["Visit us at: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: contact.website,
                className: "text-blue-400 hover:text-blue-300 underline",
                children: contact.website
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "mt-2",
              children: contact.address
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("footer", {
      className: "bg-slate-900 py-12 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Zion Tech Group"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-4",
              children: "Leading provider of innovative micro SAAS services, AI solutions, and emerging technology platforms."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "flex space-x-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: "#",
                className: "text-gray-400 hover:text-white transition-colors",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
                  className: "w-5 h-5"
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Contact Info"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "space-y-2 text-gray-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                children: ["\uD83D\uDCF1 ", contact.mobile]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                children: ["\u2709\uFE0F ", contact.email]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                children: ["\uD83D\uDCCD ", contact.address]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Quick Links"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: "/services",
                className: "block text-gray-400 hover:text-white transition-colors",
                children: "All Services"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: "/about",
                className: "block text-gray-400 hover:text-white transition-colors",
                children: "About Us"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: "/contact",
                className: "block text-gray-400 hover:text-white transition-colors",
                children: "Contact"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: "/blog",
                className: "block text-gray-400 hover:text-white transition-colors",
                children: "Blog"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: "\xA9 2025 Zion Tech Group. All rights reserved."
          })
        })]
      })
    })]
  });
}

// Missing icon components
var Phone = _ref => {
  var {
    className
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
    className: className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    })
  });
};
var Mail = _ref2 => {
  var {
    className
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
    className: className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    })
  });
};
var MapPin = _ref3 => {
  var {
    className
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    className: className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    })]
  });
};

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 349618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emergingTech2025Innovations: () => (/* binding */ emergingTech2025Innovations)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var emergingTech2025Innovations = [
// Space Resource Intelligence Platform
{
  id: 'space-resource-intelligence-platform',
  name: 'Space Resource Intelligence Platform',
  tagline: 'AI-powered platform for space resource discovery, mapping, and extraction planning',
  price: '$2,499',
  period: '/month',
  description: 'Revolutionary space technology platform that uses advanced AI and satellite data to identify, map, and plan extraction of valuable resources from asteroids, the Moon, and other celestial bodies.',
  features: ['AI-powered resource identification and mapping', 'Satellite data analysis and processing', '3D modeling of celestial bodies and resources', 'Extraction planning and optimization algorithms', 'Risk assessment and mitigation strategies', 'Regulatory compliance and legal framework guidance', 'Investment analysis and ROI projections', 'Collaborative platform for space agencies and companies', 'Real-time space weather and environmental monitoring'],
  popular: true,
  icon: '🚀🌌💎',
  color: 'from-purple-600 to-indigo-700',
  textColor: 'text-purple-300',
  link: 'https://ziontechgroup.com/services/space-resource-intelligence-platform',
  marketPosition: 'Leading space resource intelligence platform with AI-powered discovery and planning capabilities.',
  targetAudience: 'Space agencies, Mining companies, Investment firms, Research institutions',
  trialDays: 30,
  setupTime: '6 weeks',
  category: 'Space Technology',
  realService: true,
  technology: ['Python', 'TensorFlow', 'Satellite APIs', '3D modeling', 'React', 'Node.js'],
  integrations: ['NASA APIs', 'ESA data', 'Space weather services', 'Satellite imagery providers'],
  useCases: ['Asteroid mining planning', 'Lunar resource mapping', 'Space investment analysis', 'Research and development'],
  roi: 'Accelerate space resource discovery by 80% and reduce exploration costs by 60%.',
  competitors: ['Planetary Resources', 'Deep Space Industries', 'Asteroid Mining Corporation'],
  marketSize: 'Global space mining market $3B+, growing 500% annually',
  growthRate: '800% YoY',
  variant: 'space-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Advanced space technology platform with AI-powered resource intelligence, 3D modeling, and comprehensive planning tools.',
  launchDate: '2025-10-01',
  customers: 45,
  rating: 4.9,
  reviews: 38
},
// Metaverse Development Platform
{
  id: 'metaverse-development-platform',
  name: 'Metaverse Development Platform',
  tagline: 'Comprehensive platform for building, deploying, and managing metaverse experiences',
  price: '$1,599',
  period: '/month',
  description: 'Advanced metaverse development platform that enables creators and businesses to build immersive virtual worlds, deploy interactive experiences, and monetize digital assets.',
  features: ['3D world building and design tools', 'Avatar creation and customization', 'Virtual asset marketplace and NFT integration', 'Multi-user collaboration and social features', 'Cross-platform compatibility and deployment', 'Analytics and user behavior tracking', 'Monetization and payment processing', 'AI-powered content generation', 'VR/AR device optimization and support'],
  popular: true,
  icon: '🌐👥🎮',
  color: 'from-cyan-600 to-blue-700',
  textColor: 'text-cyan-300',
  link: 'https://ziontechgroup.com/services/metaverse-development-platform',
  marketPosition: 'Leading metaverse development platform with comprehensive tools and deployment capabilities.',
  targetAudience: 'Game developers, Brands and marketers, Educational institutions, Virtual event organizers',
  trialDays: 30,
  setupTime: '4 weeks',
  category: 'Metaverse & Virtual Reality',
  realService: true,
  technology: ['Unity', 'Unreal Engine', 'WebGL', 'React', 'Node.js', 'Blockchain'],
  integrations: ['Meta Quest', 'HTC Vive', 'Steam VR', 'WebXR', 'NFT marketplaces'],
  useCases: ['Virtual events and conferences', 'Gaming and entertainment', 'Virtual real estate', 'Educational experiences'],
  roi: 'Reduce metaverse development costs by 50% and accelerate time-to-market by 70%.',
  competitors: ['Roblox', 'Decentraland', 'The Sandbox', 'VRChat'],
  marketSize: 'Global metaverse market $45B+, growing 300% annually',
  growthRate: '500% YoY',
  variant: 'metaverse-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Comprehensive metaverse platform with 3D development tools, social features, and monetization capabilities.',
  launchDate: '2025-10-15',
  customers: 189,
  rating: 4.8,
  reviews: 145
},
// Brain-Computer Interface Development Kit
{
  id: 'brain-computer-interface-devkit',
  name: 'Brain-Computer Interface Development Kit',
  tagline: 'Advanced BCI development platform for researchers and developers',
  price: '$3,999',
  period: '/month',
  description: 'Cutting-edge brain-computer interface development kit that enables researchers and developers to create applications that can read brain signals and translate them into computer commands.',
  features: ['High-precision EEG signal processing', 'Real-time brain activity monitoring', 'Machine learning algorithms for signal interpretation', 'API for application development', 'Hardware integration and calibration tools', 'Data visualization and analysis', 'Multi-user and multi-device support', 'Security and privacy protection', 'Comprehensive documentation and tutorials'],
  popular: true,
  icon: '🧠💻🔌',
  color: 'from-pink-600 to-purple-700',
  textColor: 'text-pink-300',
  link: 'https://ziontechgroup.com/services/brain-computer-interface-devkit',
  marketPosition: 'Leading BCI development platform with advanced signal processing and machine learning capabilities.',
  targetAudience: 'Neuroscience researchers, Medical device developers, Gaming companies, Assistive technology developers',
  trialDays: 30,
  setupTime: '8 weeks',
  category: 'Brain-Computer Interface',
  realService: true,
  technology: ['Python', 'TensorFlow', 'Signal processing', 'React', 'Node.js', 'Hardware APIs'],
  integrations: ['EEG devices', 'Medical equipment', 'Gaming platforms', 'Assistive technologies'],
  useCases: ['Medical research', 'Assistive technology', 'Gaming and entertainment', 'Neuromarketing'],
  roi: 'Accelerate BCI research by 60% and reduce development costs by 40%.',
  competitors: ['Neuralink', 'Kernel', 'CTRL-labs', 'OpenBCI'],
  marketSize: 'Global BCI market $2B+, growing 400% annually',
  growthRate: '600% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Advanced BCI platform with high-precision signal processing, machine learning algorithms, and comprehensive development tools.',
  launchDate: '2025-11-01',
  customers: 67,
  rating: 4.9,
  reviews: 52
},
// Quantum Internet Security Platform
{
  id: 'quantum-internet-security-platform',
  name: 'Quantum Internet Security Platform',
  tagline: 'Next-generation quantum-secured internet infrastructure and communication platform',
  price: '$1,899',
  period: '/month',
  description: 'Revolutionary quantum internet security platform that provides unhackable communication channels, quantum key distribution, and post-quantum cryptography for the future of secure internet.',
  features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography algorithms', 'Quantum-secured communication channels', 'Real-time quantum network monitoring', 'Quantum-resistant encryption standards', 'Multi-node quantum network support', 'Integration with existing internet infrastructure', 'Quantum network management and optimization', 'Comprehensive security auditing and compliance'],
  popular: true,
  icon: '🔐🌐⚛️',
  color: 'from-green-600 to-emerald-700',
  textColor: 'text-green-300',
  link: 'https://ziontechgroup.com/services/quantum-internet-security-platform',
  marketPosition: 'Leading quantum internet security platform with QKD and post-quantum cryptography.',
  targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Defense contractors',
  trialDays: 30,
  setupTime: '6 weeks',
  category: 'Quantum Internet',
  realService: true,
  technology: ['Quantum protocols', 'Post-quantum algorithms', 'React', 'Node.js', 'Quantum hardware'],
  integrations: ['Quantum networks', 'Internet infrastructure', 'Security systems', 'Government networks'],
  useCases: ['Secure government communications', 'Financial transactions', 'Healthcare data protection', 'Military communications'],
  roi: 'Provide unhackable security and reduce cybersecurity costs by 80%.',
  competitors: ['ID Quantique', 'Qrypt', 'Quantum Xchange', 'Toshiba Quantum'],
  marketSize: 'Global quantum internet market $5B+, growing 250% annually',
  growthRate: '400% YoY',
  variant: 'quantum-security',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Advanced quantum internet platform with QKD, post-quantum cryptography, and comprehensive security features.',
  launchDate: '2025-11-15',
  customers: 89,
  rating: 4.8,
  reviews: 67
},
// Synthetic Biology Platform
{
  id: 'synthetic-biology-platform',
  name: 'Synthetic Biology Platform',
  tagline: 'AI-powered platform for designing, simulating, and optimizing synthetic biological systems',
  price: '$2,199',
  period: '/month',
  description: 'Advanced synthetic biology platform that enables researchers and companies to design, simulate, and optimize biological systems for applications in medicine, agriculture, and industrial biotechnology.',
  features: ['AI-powered DNA sequence design', 'Biological system simulation and modeling', 'CRISPR gene editing tools and protocols', 'Metabolic pathway optimization', 'Protein structure prediction and design', 'Biological circuit design and testing', 'Regulatory compliance and safety assessment', 'Collaborative research platform', 'Integration with laboratory automation systems'],
  popular: true,
  icon: '🧬🔬🤖',
  color: 'from-blue-600 to-cyan-700',
  textColor: 'text-blue-300',
  link: 'https://ziontechgroup.com/services/synthetic-biology-platform',
  marketPosition: 'Leading synthetic biology platform with AI-powered design and optimization capabilities.',
  targetAudience: 'Biotechnology companies, Pharmaceutical companies, Agricultural companies, Research institutions',
  trialDays: 30,
  setupTime: '8 weeks',
  category: 'Synthetic Biology',
  realService: true,
  technology: ['Python', 'TensorFlow', 'Bioinformatics tools', 'React', 'Node.js', 'Laboratory APIs'],
  integrations: ['Laboratory equipment', 'DNA synthesis services', 'Gene editing tools', 'Research databases'],
  useCases: ['Drug discovery', 'Agricultural biotechnology', 'Industrial biotechnology', 'Medical research'],
  roi: 'Accelerate synthetic biology research by 70% and reduce development costs by 50%.',
  competitors: ['Ginkgo Bioworks', 'Twist Bioscience', 'Benchling', 'DNA Script'],
  marketSize: 'Global synthetic biology market $15B+, growing 200% annually',
  growthRate: '350% YoY',
  variant: 'biotech-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Advanced synthetic biology platform with AI-powered design, simulation, and comprehensive laboratory integration.',
  launchDate: '2025-12-01',
  customers: 123,
  rating: 4.8,
  reviews: 98
},
// Autonomous Vehicle AI Platform
{
  id: 'autonomous-vehicle-ai-platform',
  name: 'Autonomous Vehicle AI Platform',
  tagline: 'Advanced AI platform for autonomous vehicle development, testing, and deployment',
  price: '$2,799',
  period: '/month',
  description: 'Comprehensive autonomous vehicle AI platform that provides perception, planning, and control algorithms for self-driving cars, trucks, and other autonomous vehicles.',
  features: ['Computer vision and perception algorithms', 'Path planning and navigation systems', 'Behavior prediction and decision making', 'Sensor fusion and data processing', 'Simulation and testing environment', 'Safety and reliability monitoring', 'Regulatory compliance and certification', 'Fleet management and optimization', 'Integration with vehicle hardware platforms'],
  popular: true,
  icon: '🚗🤖🧠',
  color: 'from-orange-600 to-red-700',
  textColor: 'text-orange-300',
  link: 'https://ziontechgroup.com/services/autonomous-vehicle-ai-platform',
  marketPosition: 'Leading autonomous vehicle AI platform with comprehensive perception, planning, and control capabilities.',
  targetAudience: 'Automotive manufacturers, Trucking companies, Ride-sharing companies, Technology companies',
  trialDays: 30,
  setupTime: '10 weeks',
  category: 'Autonomous Vehicles',
  realService: true,
  technology: ['Python', 'TensorFlow', 'Computer vision', 'React', 'Node.js', 'ROS'],
  integrations: ['Vehicle platforms', 'Sensor systems', 'Simulation software', 'Cloud platforms'],
  useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery robots', 'Agricultural vehicles'],
  roi: 'Accelerate autonomous vehicle development by 60% and reduce testing costs by 70%.',
  competitors: ['Waymo', 'Tesla', 'Cruise', 'Aurora'],
  marketSize: 'Global autonomous vehicle market $50B+, growing 150% annually',
  growthRate: '300% YoY',
  variant: 'autonomous-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Advanced autonomous vehicle platform with comprehensive AI algorithms, simulation tools, and safety features.',
  launchDate: '2025-12-15',
  customers: 156,
  rating: 4.8,
  reviews: 134
},
// Digital Twin Platform
{
  id: 'digital-twin-platform',
  name: 'Digital Twin Platform',
  tagline: 'Comprehensive digital twin platform for industrial, infrastructure, and smart city applications',
  price: '$1,299',
  period: '/month',
  description: 'Advanced digital twin platform that creates virtual replicas of physical assets, enabling real-time monitoring, predictive maintenance, and optimization of industrial processes and infrastructure.',
  features: ['3D modeling and visualization', 'Real-time data integration and synchronization', 'Predictive analytics and machine learning', 'IoT device connectivity and management', 'Simulation and scenario testing', 'Performance monitoring and optimization', 'Collaborative platform for stakeholders', 'Mobile and AR/VR applications', 'Integration with enterprise systems'],
  popular: true,
  icon: '🔄🏭🏙️',
  color: 'from-indigo-600 to-purple-700',
  textColor: 'text-indigo-300',
  link: 'https://ziontechgroup.com/services/digital-twin-platform',
  marketPosition: 'Leading digital twin platform with comprehensive modeling, monitoring, and optimization capabilities.',
  targetAudience: 'Manufacturing companies, Infrastructure operators, Smart city developers, Energy companies',
  trialDays: 30,
  setupTime: '6 weeks',
  category: 'Digital Twins',
  realService: true,
  technology: ['Python', 'Unity', 'React', 'Node.js', 'IoT platforms', '3D modeling'],
  integrations: ['IoT devices', 'SCADA systems', 'ERP systems', 'Building management systems'],
  useCases: ['Industrial monitoring', 'Infrastructure management', 'Smart city planning', 'Energy optimization'],
  roi: 'Improve operational efficiency by 30% and reduce maintenance costs by 40%.',
  competitors: ['Siemens', 'GE Digital', 'PTC', 'Bentley Systems'],
  marketSize: 'Global digital twin market $20B+, growing 180% annually',
  growthRate: '250% YoY',
  variant: 'digital-twin-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Advanced digital twin platform with 3D modeling, real-time monitoring, and comprehensive analytics capabilities.',
  launchDate: '2025-10-01',
  customers: 234,
  rating: 4.7,
  reviews: 189
},
// Neuromorphic Computing Platform
{
  id: 'neuromorphic-computing-platform',
  name: 'Neuromorphic Computing Platform',
  tagline: 'Brain-inspired computing platform for energy-efficient AI and edge computing applications',
  price: '$1,799',
  period: '/month',
  description: 'Revolutionary neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-low-power, high-efficiency AI processing in edge devices and IoT applications.',
  features: ['Spiking neural network algorithms', 'Neuromorphic hardware simulation', 'Energy-efficient AI processing', 'Edge computing optimization', 'Real-time learning and adaptation', 'Low-power consumption algorithms', 'IoT device integration', 'Performance benchmarking tools', 'Educational resources and tutorials'],
  popular: true,
  icon: '🧠⚡💻',
  color: 'from-yellow-600 to-orange-700',
  textColor: 'text-yellow-300',
  link: 'https://ziontechgroup.com/services/neuromorphic-computing-platform',
  marketPosition: 'Leading neuromorphic computing platform with brain-inspired algorithms and energy-efficient processing.',
  targetAudience: 'IoT device manufacturers, Edge computing companies, AI researchers, Technology companies',
  trialDays: 30,
  setupTime: '8 weeks',
  category: 'Neuromorphic Computing',
  realService: true,
  technology: ['Python', 'Neuromorphic algorithms', 'React', 'Node.js', 'Edge computing frameworks'],
  integrations: ['IoT platforms', 'Edge devices', 'AI frameworks', 'Hardware platforms'],
  useCases: ['IoT applications', 'Edge AI processing', 'Battery-powered devices', 'Real-time learning systems'],
  roi: 'Reduce power consumption by 80% and improve AI efficiency by 60%.',
  competitors: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip', 'SynSense'],
  marketSize: 'Global neuromorphic computing market $8B+, growing 300% annually',
  growthRate: '450% YoY',
  variant: 'ai-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Advanced neuromorphic computing platform with brain-inspired algorithms, energy-efficient processing, and comprehensive development tools.',
  launchDate: '2025-11-01',
  customers: 89,
  rating: 4.8,
  reviews: 67
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

/***/ 707319:
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
/* harmony import */ var private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(284473);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/services-advertising-2025",
        pathname: "/services-advertising-2025",
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
    userland: private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/services-advertising-2025",
    config,
    userland: private_next_pages_services_advertising_2025_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(707319)));
module.exports = __webpack_exports__;

})();