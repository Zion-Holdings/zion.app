"use strict";
(() => {
var exports = {};
exports.id = 656001;
exports.ids = [656001,890636];
exports.modules = {

/***/ 72759:
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
/* harmony import */ var _data_2025_advanced_enterprise_automation_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(821749);
/* harmony import */ var _data_2025_advanced_ai_ml_enterprise_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(254294);
/* harmony import */ var _data_2025_advanced_cloud_devops_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(261987);
/* harmony import */ var _data_2025_advanced_fintech_blockchain_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689216);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





// Import our new enterprise service data





var Comprehensive2025EnterpriseServicesShowcase = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('popularity');

  // Combine all services
  var allServices = [..._data_2025_advanced_enterprise_automation_services__WEBPACK_IMPORTED_MODULE_2__.advancedEnterpriseAutomationServices2025, ..._data_2025_advanced_ai_ml_enterprise_services__WEBPACK_IMPORTED_MODULE_3__.advancedAIMLEnterpriseServices2025, ..._data_2025_advanced_cloud_devops_services__WEBPACK_IMPORTED_MODULE_4__.advancedCloudDevOpsServices2025, ..._data_2025_advanced_fintech_blockchain_services__WEBPACK_IMPORTED_MODULE_5__.advancedFintechBlockchainServices2025];

  // Get unique categories
  var categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });
  var getServiceCard = service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5
    },
    className: "bg-gradient-to-br ".concat(service.color, " p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "text-center mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "text-4xl mb-3",
        children: service.icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "text-xl font-bold text-white mb-2",
        children: service.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-white/90 text-sm mb-3",
        children: service.tagline
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium",
        children: service.category
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "text-2xl font-bold text-white mb-1",
          children: service.pricing.starter
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "text-white/80 text-sm",
          children: "Starting Price"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "space-y-2",
        children: service.keyFeatures.slice(0, 5).map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center text-white/90 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
            className: "w-4 h-4 mr-2 text-white"
          }), feature]
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "pt-4 border-t border-white/20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center justify-between text-white/80 text-sm mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            children: ["Rating: ", service.rating, "/5"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            children: [service.reviews, " reviews"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center justify-between text-white/80 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            children: [service.customers, " customers"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            children: ["Launch: ", new Date(service.launchDate).toLocaleDateString()]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: service.link,
        className: "block w-full text-center bg-white text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200",
        children: "Learn More"
      })]
    })]
  }, service.id);
  var getServiceList = service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      duration: 0.5
    },
    className: "bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex items-start space-x-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "text-3xl p-3 rounded-lg bg-gradient-to-br ".concat(service.color),
        children: service.icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-start justify-between mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-1",
              children: service.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-300 text-sm mb-2",
              children: service.tagline
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "inline-flex items-center px-2 py-1 bg-blue-600 rounded-full text-white text-xs font-medium",
              children: service.category
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-xl font-bold text-white",
              children: service.pricing.starter
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Starting Price"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "text-gray-300 text-sm mb-4",
          children: service.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "grid grid-cols-2 gap-4 mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
              className: "text-white font-semibold mb-2",
              children: "Key Benefits:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
              className: "space-y-1",
              children: service.benefits.slice(0, 3).map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                className: "text-gray-300 text-sm flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
                  className: "w-3 h-3 mr-2 text-green-400"
                }), benefit]
              }, index))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
              className: "text-white font-semibold mb-2",
              children: "Target Audience:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
              className: "space-y-1",
              children: service.targetAudience.slice(0, 3).map((audience, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                className: "text-gray-300 text-sm flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Users, {
                  className: "w-3 h-3 mr-2 text-blue-400"
                }), audience]
              }, index))
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-center space-x-4 text-sm text-gray-400",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: ["Rating: ", service.rating, "/5 \u2B50"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: [service.reviews, " reviews"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              children: [service.customers, " customers"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
            href: service.link,
            className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center",
            children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
              className: "w-4 h-4 ml-2"
            })]
          })]
        })]
      })]
    })
  }, service.id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "Comprehensive 2025 Enterprise Services Showcase | Zion Tech Group",
      description: "Discover our comprehensive suite of enterprise services including AI/ML, automation, cloud DevOps, fintech, and blockchain solutions. Transform your business with cutting-edge technology.",
      keywords: ['enterprise services', 'AI services', 'automation services', 'cloud services', 'DevOps services', 'fintech services', 'blockchain services', 'business transformation'],
      image: "/og-enterprise-services.jpg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
        className: "pt-20 pb-16 px-4 relative overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "max-w-6xl mx-auto relative z-10 text-center",
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Star, {
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: "Enterprise Innovation 2025"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
              className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent",
              children: "Enterprise Services Showcase"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed",
              children: "Transform your business with our comprehensive suite of cutting-edge enterprise services. From AI-powered automation to blockchain solutions, we deliver innovation that drives results."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center mb-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: "#services",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  className: "group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    className: "flex items-center gap-2",
                    children: ["Explore Services", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
                      className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: "tel:+13024640950",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  className: "px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105",
                  children: "Call Now: +1 302 464 0950"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "text-3xl font-bold text-blue-400",
                  children: [allServices.length, "+"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-gray-400 text-sm",
                  children: "Enterprise Services"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-3xl font-bold text-purple-400",
                  children: "24/7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-gray-400 text-sm",
                  children: "Support Available"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-3xl font-bold text-pink-400",
                  children: "99.9%"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-gray-400 text-sm",
                  children: "Uptime Guarantee"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-3xl font-bold text-green-400",
                  children: "500+"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "text-gray-400 text-sm",
                  children: "Happy Customers"
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
        className: "py-8 px-4 bg-gradient-to-r from-blue-600 to-purple-600",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "max-w-6xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-white",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Globe, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "font-semibold",
                  children: "Website"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: "https://ziontechgroup.com",
                  className: "text-blue-100 hover:text-white transition-colors",
                  children: "ziontechgroup.com"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Zap, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "font-semibold",
                  children: "Phone"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: "tel:+13024640950",
                  className: "text-blue-100 hover:text-white transition-colors",
                  children: "+1 302 464 0950"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Building, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "font-semibold",
                  children: "Address"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "text-blue-100",
                  children: ["364 E Main St STE 1008", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), "Middletown DE 19709"]
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
        id: "services",
        className: "py-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "mb-8 space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col lg:flex-row gap-4 items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "flex-1 max-w-md",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "relative",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                    type: "text",
                    placeholder: "Search services...",
                    value: searchTerm,
                    onChange: e => setSearchTerm(e.target.value),
                    className: "w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center space-x-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
                  value: selectedCategory,
                  onChange: e => setSelectedCategory(e.target.value),
                  className: "px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                    value: category,
                    children: category
                  }, category))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
                  value: sortBy,
                  onChange: e => setSortBy(e.target.value),
                  className: "px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                    value: "popularity",
                    children: "Sort by Popularity"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                    value: "name",
                    children: "Sort by Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                    value: "price",
                    children: "Sort by Price"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                    value: "rating",
                    children: "Sort by Rating"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex items-center bg-gray-800 rounded-lg p-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    onClick: () => setViewMode('grid'),
                    className: "p-2 rounded ".concat(viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                      className: "w-5 h-5"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    onClick: () => setViewMode('list'),
                    className: "p-2 rounded ".concat(viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.List, {
                      className: "w-5 h-5"
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-gray-400 text-sm",
              children: ["Showing ", filteredServices.length, " of ", allServices.length, " services"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
            mode: "wait",
            children: viewMode === 'grid' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: filteredServices.map(service => getServiceCard(service))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "space-y-6",
              children: filteredServices.map(service => getServiceList(service))
            })
          }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center py-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-6xl mb-4",
              children: "\uD83D\uDD0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-2",
              children: "No services found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-400",
              children: "Try adjusting your search terms or filters"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
        className: "py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "text-4xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8",
            children: "Our enterprise services are designed to drive innovation, efficiency, and growth. Contact us today to discuss how we can help you achieve your business objectives."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              href: "tel:+13024640950",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                className: "px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
                children: "Call +1 302 464 0950"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              href: "mailto:kleber@ziontechgroup.com",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                className: "px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105",
                children: "Email kleber@ziontechgroup.com"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "mt-8 text-gray-400 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              children: "\uD83D\uDCCD 364 E Main St STE 1008, Middletown DE 19709"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              children: ["\uD83C\uDF10 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: "https://ziontechgroup.com",
                className: "text-blue-400 hover:text-white transition-colors",
                children: "ziontechgroup.com"
              })]
            })]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comprehensive2025EnterpriseServicesShowcase);

/***/ }),

/***/ 254294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedAIMLEnterpriseServices2025: () => (/* binding */ advancedAIMLEnterpriseServices2025)
/* harmony export */ });
var advancedAIMLEnterpriseServices2025 = [{
  id: 'enterprise-mlops-platform',
  name: 'Enterprise MLOps Platform',
  tagline: 'End-to-end machine learning operations platform for enterprise AI deployment',
  description: 'Comprehensive MLOps platform that streamlines the entire machine learning lifecycle from development to production deployment, monitoring, and management.',
  category: 'AI/ML Operations',
  pricing: {
    starter: '$799/month',
    professional: '$1,999/month',
    enterprise: '$4,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-3 weeks'
  },
  keyFeatures: ['Model development pipeline', 'Automated model training', 'Model versioning and registry', 'A/B testing framework', 'Production deployment', 'Real-time monitoring', 'Model performance tracking', 'Automated retraining', 'Scalable infrastructure', 'Multi-cloud support'],
  benefits: ['Reduce time-to-production by 80%', 'Improve model accuracy by 25%', 'Cut operational costs by 40%', 'Ensure model reliability', 'Scale AI operations efficiently'],
  targetAudience: ['Technology companies', 'Financial institutions', 'Healthcare organizations', 'Manufacturing companies', 'Retail enterprises', 'Research institutions'],
  marketPosition: 'Competitive with DataRobot ($1,000/month), H2O.ai ($1,500/month), and Databricks ($1,200/month). Our advantage: Enterprise-grade MLOps with comprehensive automation.',
  competitors: ['DataRobot, H2O.ai, Databricks, AWS SageMaker, Azure ML, Google Vertex AI'],
  techStack: ['Python, Kubernetes, Docker, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis'],
  realImplementation: true,
  implementationDetails: 'Enterprise MLOps platform with automated pipelines, model management, and production deployment. Includes training, support, and customization.',
  roi: 'Organizations typically see 300-500% ROI through faster AI deployment and improved model performance.',
  useCases: ['Predictive analytics', 'Computer vision', 'Natural language processing', 'Recommendation systems', 'Fraud detection', 'Demand forecasting'],
  integrations: ['AWS, Azure, GCP, Kubernetes, Docker, Git, CI/CD tools, Monitoring platforms'],
  support: '24/7 enterprise support, MLOps consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, SOX'],
  link: 'https://ziontechgroup.com/enterprise-mlops-platform',
  icon: '🤖',
  color: 'from-indigo-500 to-purple-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 75,
  rating: 4.9,
  reviews: 134
}, {
  id: 'ai-powered-business-intelligence-suite',
  name: 'AI-Powered Business Intelligence Suite',
  tagline: 'Intelligent business intelligence with AI-driven insights and predictive analytics',
  description: 'Advanced BI platform that combines traditional business intelligence with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
  category: 'Business Intelligence',
  pricing: {
    starter: '$399/month',
    professional: '$999/month',
    enterprise: '$2,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '1-2 weeks'
  },
  keyFeatures: ['AI-powered data analysis', 'Predictive analytics', 'Automated reporting', 'Natural language queries', 'Real-time dashboards', 'Data visualization', 'Advanced analytics', 'Mobile BI access', 'Collaborative features', 'Custom dashboards'],
  benefits: ['Uncover hidden insights automatically', 'Predict future trends accurately', 'Reduce reporting time by 90%', 'Improve decision making', 'Enable self-service analytics'],
  targetAudience: ['Large enterprises', 'Mid-market companies', 'Financial services', 'Healthcare organizations', 'Retail chains', 'Manufacturing companies'],
  marketPosition: 'Competitive with Tableau ($70/user/month), Power BI ($9.99/user/month), and Qlik ($30/user/month). Our advantage: AI-powered insights and predictive analytics.',
  competitors: ['Tableau, Power BI, Qlik, Looker, Sisense, Domo'],
  techStack: ['Python, React, Node.js, PostgreSQL, MongoDB, Redis, AWS, Azure, AI/ML'],
  realImplementation: true,
  implementationDetails: 'AI-powered BI platform with predictive analytics, automated insights, and comprehensive reporting. Includes training and customization.',
  roi: 'Typical ROI of 250-400% within 6-12 months through improved insights and decision making.',
  useCases: ['Sales analytics', 'Financial reporting', 'Operational insights', 'Customer analytics', 'Performance monitoring', 'Trend analysis'],
  integrations: ['ERP systems, CRM platforms, Databases, Cloud storage, REST APIs, Webhooks'],
  support: '24/7 support, BI consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, SOX'],
  link: 'https://ziontechgroup.com/ai-powered-business-intelligence-suite',
  icon: '📊',
  color: 'from-blue-500 to-indigo-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 140,
  rating: 4.8,
  reviews: 189
}, {
  id: 'enterprise-nlp-platform',
  name: 'Enterprise NLP Platform',
  tagline: 'Advanced natural language processing for enterprise text analysis and automation',
  description: 'Comprehensive NLP platform that provides advanced text analysis, sentiment analysis, document processing, and language understanding capabilities for enterprise applications.',
  category: 'Natural Language Processing',
  pricing: {
    starter: '$599/month',
    professional: '$1,499/month',
    enterprise: '$3,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-3 weeks'
  },
  keyFeatures: ['Advanced text analysis', 'Sentiment analysis', 'Document processing', 'Language detection', 'Entity extraction', 'Text classification', 'Summarization', 'Translation support', 'Custom model training', 'API access'],
  benefits: ['Process documents 10x faster', 'Extract insights automatically', 'Improve accuracy to 95%', 'Scale language processing', 'Reduce manual review time'],
  targetAudience: ['Legal firms', 'Healthcare organizations', 'Financial institutions', 'Media companies', 'E-commerce businesses', 'Government agencies'],
  marketPosition: 'Competitive with OpenAI ($0.002-0.12 per token), Google Cloud NLP ($0.50-1.50 per 1K characters), and AWS Comprehend ($0.0001 per unit). Our advantage: Enterprise-grade NLP with custom training.',
  competitors: ['OpenAI, Google Cloud NLP, AWS Comprehend, Azure Text Analytics, IBM Watson'],
  techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
  realImplementation: true,
  implementationDetails: 'Enterprise NLP platform with advanced text analysis, custom model training, and comprehensive API access. Includes training and customization.',
  roi: 'Organizations typically see 200-400% ROI through automated document processing and improved insights.',
  useCases: ['Document analysis', 'Customer feedback analysis', 'Legal document review', 'Content moderation', 'Market research', 'Compliance monitoring'],
  integrations: ['Document management systems, CRM platforms, Email systems, Social media, REST APIs'],
  support: '24/7 support, NLP consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, SOX'],
  link: 'https://ziontechgroup.com/enterprise-nlp-platform',
  icon: '📝',
  color: 'from-green-500 to-teal-600',
  popular: true,
  launchDate: '2024-11-15',
  customers: 95,
  rating: 4.7,
  reviews: 156
}, {
  id: 'computer-vision-enterprise-platform',
  name: 'Computer Vision Enterprise Platform',
  tagline: 'Advanced computer vision solutions for enterprise image and video analysis',
  description: 'Comprehensive computer vision platform that provides advanced image recognition, object detection, video analysis, and visual AI capabilities for enterprise applications.',
  category: 'Computer Vision',
  pricing: {
    starter: '$699/month',
    professional: '$1,799/month',
    enterprise: '$4,499/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-3 weeks'
  },
  keyFeatures: ['Image recognition', 'Object detection', 'Video analysis', 'Face recognition', 'Quality inspection', 'Document scanning', 'Custom model training', 'Real-time processing', 'Batch processing', 'API access'],
  benefits: ['Automate visual inspections', 'Improve accuracy to 99%', 'Process images 100x faster', 'Reduce manual review', 'Enable 24/7 monitoring'],
  targetAudience: ['Manufacturing companies', 'Retail chains', 'Security firms', 'Healthcare organizations', 'Automotive industry', 'Quality control companies'],
  marketPosition: 'Competitive with Google Cloud Vision ($1.50 per 1K images), AWS Rekognition ($1.00 per 1K images), and Azure Computer Vision ($1.00 per 1K images). Our advantage: Custom training and enterprise features.',
  competitors: ['Google Cloud Vision, AWS Rekognition, Azure Computer Vision, IBM Watson Visual Recognition'],
  techStack: ['Python, TensorFlow, PyTorch, OpenCV, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
  realImplementation: true,
  implementationDetails: 'Enterprise computer vision platform with advanced image analysis, custom model training, and comprehensive API access. Includes training and customization.',
  roi: 'Typical ROI of 300-500% within 6-12 months through automated inspections and quality control.',
  useCases: ['Quality control', 'Security monitoring', 'Retail analytics', 'Medical imaging', 'Automotive safety', 'Document processing'],
  integrations: ['Camera systems, Video feeds, Image databases, Quality control systems, REST APIs'],
  support: '24/7 support, computer vision consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, SOX'],
  link: 'https://ziontechgroup.com/computer-vision-enterprise-platform',
  icon: '👁️',
  color: 'from-yellow-500 to-orange-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 65,
  rating: 4.8,
  reviews: 98
}, {
  id: 'ai-powered-predictive-maintenance',
  name: 'AI-Powered Predictive Maintenance',
  tagline: 'Intelligent predictive maintenance using AI to prevent equipment failures',
  description: 'Advanced predictive maintenance platform that uses AI and IoT sensors to predict equipment failures, optimize maintenance schedules, and reduce downtime for industrial operations.',
  category: 'Predictive Maintenance',
  pricing: {
    starter: '$499/month',
    professional: '$1,299/month',
    enterprise: '$3,499/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-4 weeks'
  },
  keyFeatures: ['IoT sensor integration', 'AI failure prediction', 'Maintenance optimization', 'Real-time monitoring', 'Performance analytics', 'Alert system', 'Mobile app access', 'Custom dashboards', 'API integration', 'Multi-site support'],
  benefits: ['Reduce downtime by 50-80%', 'Cut maintenance costs by 30%', 'Extend equipment life by 25%', 'Improve safety', 'Optimize maintenance schedules'],
  targetAudience: ['Manufacturing companies', 'Energy companies', 'Transportation companies', 'Mining operations', 'Chemical plants', 'Utilities'],
  marketPosition: 'Competitive with PTC ThingWorx ($1,200/month), GE Predix ($1,500/month), and Siemens Mindsphere ($1,800/month). Our advantage: AI-powered predictions and easy IoT integration.',
  competitors: ['PTC ThingWorx, GE Predix, Siemens Mindsphere, IBM Watson IoT, Microsoft Azure IoT'],
  techStack: ['Python, Node.js, React, PostgreSQL, InfluxDB, MQTT, AWS IoT, Azure IoT, AI/ML'],
  realImplementation: true,
  implementationDetails: 'AI-powered predictive maintenance platform with IoT integration, real-time monitoring, and predictive analytics. Includes training and customization.',
  roi: 'Organizations typically see 200-400% ROI within 12-18 months through reduced downtime and maintenance costs.',
  useCases: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Performance optimization', 'Safety monitoring', 'Cost optimization'],
  integrations: ['IoT sensors, SCADA systems, ERP systems, CMMS platforms, REST APIs'],
  support: '24/7 support, predictive maintenance consulting, training programs, and custom development.',
  compliance: ['ISO 9001, ISO 14001, SOC 2 Type II, Industry-specific standards'],
  link: 'https://ziontechgroup.com/ai-powered-predictive-maintenance',
  icon: '🔧',
  color: 'from-gray-500 to-slate-600',
  popular: true,
  launchDate: '2024-11-01',
  customers: 85,
  rating: 4.7,
  reviews: 123
}];

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 379627:
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
/* harmony import */ var private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72759);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/comprehensive-2025-enterprise-services-showcase",
        pathname: "/comprehensive-2025-enterprise-services-showcase",
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
    userland: private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/comprehensive-2025-enterprise-services-showcase",
    config,
    userland: private_next_pages_comprehensive_2025_enterprise_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ 689216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedFintechBlockchainServices2025: () => (/* binding */ advancedFintechBlockchainServices2025)
/* harmony export */ });
var advancedFintechBlockchainServices2025 = [{
  id: 'enterprise-blockchain-platform',
  name: 'Enterprise Blockchain Platform',
  tagline: 'Enterprise-grade blockchain infrastructure for secure, scalable business applications',
  description: 'Advanced blockchain platform that provides enterprise-grade infrastructure, smart contract development, and comprehensive governance tools for business blockchain applications.',
  category: 'Blockchain Infrastructure',
  pricing: {
    starter: '$999/month',
    professional: '$2,499/month',
    enterprise: '$6,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '3-4 weeks'
  },
  keyFeatures: ['Multi-chain support', 'Smart contract development', 'Enterprise governance', 'Scalability solutions', 'Security features', 'Compliance tools', 'API access', 'Custom dashboards', 'Multi-tenant support', 'Integration capabilities'],
  benefits: ['Reduce transaction costs by 60%', 'Improve security and transparency', 'Automate complex processes', 'Ensure regulatory compliance', 'Enable new business models'],
  targetAudience: ['Financial institutions', 'Supply chain companies', 'Healthcare organizations', 'Government agencies', 'Real estate companies', 'Insurance companies'],
  marketPosition: 'Competitive with Hyperledger Fabric ($0), Ethereum Enterprise ($0), and Corda ($0). Our advantage: Enterprise-grade features, compliance tools, and comprehensive support.',
  competitors: ['Hyperledger Fabric, Ethereum Enterprise, Corda, Quorum, MultiChain'],
  techStack: ['Go, Python, JavaScript, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes'],
  realImplementation: true,
  implementationDetails: 'Enterprise blockchain platform with multi-chain support, smart contract development, and comprehensive governance tools. Includes training and customization.',
  roi: 'Organizations typically see 200-400% ROI within 12-18 months through process automation and cost reduction.',
  useCases: ['Supply chain tracking', 'Digital identity management', 'Smart contracts', 'Asset tokenization', 'Cross-border payments', 'Regulatory compliance'],
  integrations: ['ERP systems, Banking platforms, Payment gateways, Identity providers, REST APIs'],
  support: '24/7 enterprise support, blockchain consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, SOX, PCI DSS, Industry-specific regulations'],
  link: 'https://ziontechgroup.com/enterprise-blockchain-platform',
  icon: '⛓️',
  color: 'from-purple-500 to-indigo-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 45,
  rating: 4.8,
  reviews: 78
}, {
  id: 'ai-powered-fraud-detection-system',
  name: 'AI-Powered Fraud Detection System',
  tagline: 'Advanced fraud detection using machine learning and real-time analytics',
  description: 'Comprehensive fraud detection platform that uses AI and machine learning to identify and prevent fraudulent activities in real-time across multiple channels.',
  category: 'Fraud Detection',
  pricing: {
    starter: '$799/month',
    professional: '$1,999/month',
    enterprise: '$4,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-3 weeks'
  },
  keyFeatures: ['AI-powered detection', 'Real-time monitoring', 'Multi-channel analysis', 'Behavioral analytics', 'Risk scoring', 'Automated alerts', 'Custom rules engine', 'Compliance reporting', 'API integration', 'Mobile app access'],
  benefits: ['Detect fraud 10x faster', 'Reduce false positives by 70%', 'Cut fraud losses by 80%', 'Improve customer experience', 'Ensure regulatory compliance'],
  targetAudience: ['Financial institutions', 'E-commerce businesses', 'Payment processors', 'Insurance companies', 'Gaming platforms', 'Healthcare organizations'],
  marketPosition: 'Competitive with Sift ($0.10/transaction), Signifyd ($0.15/transaction), and Forter ($0.20/transaction). Our advantage: AI-powered detection with comprehensive analytics.',
  competitors: ['Sift, Signifyd, Forter, Riskified, Kount, ClearSale'],
  techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
  realImplementation: true,
  implementationDetails: 'AI-powered fraud detection platform with real-time monitoring, behavioral analytics, and comprehensive reporting. Includes training and customization.',
  roi: 'Organizations typically see 300-500% ROI within 6-12 months through reduced fraud losses and improved security.',
  useCases: ['Payment fraud detection', 'Account takeover prevention', 'Identity verification', 'Transaction monitoring', 'Risk assessment', 'Compliance reporting'],
  integrations: ['Payment gateways, Banking systems, E-commerce platforms, CRM systems, REST APIs'],
  support: '24/7 support, fraud prevention consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, PCI DSS, SOX, Industry-specific regulations'],
  link: 'https://ziontechgroup.com/ai-powered-fraud-detection-system',
  icon: '🕵️',
  color: 'from-red-500 to-pink-600',
  popular: true,
  launchDate: '2024-11-15',
  customers: 120,
  rating: 4.9,
  reviews: 189
}, {
  id: 'intelligent-payment-orchestration-platform',
  name: 'Intelligent Payment Orchestration Platform',
  tagline: 'AI-powered payment routing and optimization for maximum success rates',
  description: 'Advanced payment orchestration platform that uses AI to route payments through optimal gateways, reduce costs, and maximize transaction success rates.',
  category: 'Payment Processing',
  pricing: {
    starter: '$299/month',
    professional: '$799/month',
    enterprise: '$2,499/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '1-2 weeks'
  },
  keyFeatures: ['AI-powered routing', 'Multi-gateway support', 'Success rate optimization', 'Cost optimization', 'Real-time analytics', 'Fraud prevention', 'Compliance management', 'Custom dashboards', 'API access', 'Mobile app support'],
  benefits: ['Increase success rates by 15-25%', 'Reduce payment costs by 20-30%', 'Improve customer experience', 'Optimize gateway performance', 'Ensure compliance'],
  targetAudience: ['E-commerce businesses', 'SaaS companies', 'Financial institutions', 'Marketplaces', 'Subscription services', 'Digital platforms'],
  marketPosition: 'Competitive with Spreedly ($0.10/transaction), Payoneer ($0.30/transaction), and Stripe ($0.029 + 2.9%). Our advantage: AI-powered optimization and multi-gateway support.',
  competitors: ['Spreedly, Payoneer, Stripe, Square, PayPal, Adyen'],
  techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Azure, AI/ML'],
  realImplementation: true,
  implementationDetails: 'AI-powered payment orchestration platform with intelligent routing, optimization, and comprehensive analytics. Includes training and customization.',
  roi: 'Typical ROI of 200-400% within 6-12 months through improved success rates and cost optimization.',
  useCases: ['Payment routing', 'Success rate optimization', 'Cost optimization', 'Gateway management', 'Fraud prevention', 'Compliance monitoring'],
  integrations: ['Payment gateways, Banking systems, E-commerce platforms, Accounting systems, REST APIs'],
  support: '24/7 support, payment consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, PCI DSS, SOX'],
  link: 'https://ziontechgroup.com/intelligent-payment-orchestration-platform',
  icon: '💳',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 180,
  rating: 4.8,
  reviews: 245
}, {
  id: 'regulatory-compliance-automation-suite',
  name: 'Regulatory Compliance Automation Suite',
  tagline: 'Automated compliance management for financial services and regulated industries',
  description: 'Comprehensive compliance automation platform that streamlines regulatory reporting, automates compliance checks, and ensures adherence to financial regulations.',
  category: 'Regulatory Compliance',
  pricing: {
    starter: '$599/month',
    professional: '$1,499/month',
    enterprise: '$3,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-3 weeks'
  },
  keyFeatures: ['Automated compliance checks', 'Regulatory reporting', 'Risk assessment', 'Audit trail management', 'Policy enforcement', 'Real-time monitoring', 'Custom dashboards', 'API integration', 'Mobile app access', 'Multi-regulation support'],
  benefits: ['Reduce compliance costs by 50%', 'Automate 80% of compliance tasks', 'Ensure regulatory adherence', 'Improve audit efficiency', 'Reduce compliance risks'],
  targetAudience: ['Financial institutions', 'Insurance companies', 'Healthcare organizations', 'Government agencies', 'Legal firms', 'Regulated industries'],
  marketPosition: 'Competitive with Compliance.ai ($500/month), LogicGate ($1,000/month), and MetricStream ($2,000/month). Our advantage: Comprehensive automation and multi-regulation support.',
  competitors: ['Compliance.ai, LogicGate, MetricStream, NAVEX Global, Diligent'],
  techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Azure, AI/ML'],
  realImplementation: true,
  implementationDetails: 'Comprehensive compliance automation platform with automated checks, reporting, and risk management. Includes training and customization.',
  roi: 'Organizations typically see 200-350% ROI within 6-12 months through automated compliance and reduced risks.',
  useCases: ['Regulatory reporting', 'Compliance monitoring', 'Risk assessment', 'Policy management', 'Audit preparation', 'Incident management'],
  integrations: ['ERP systems, Banking platforms, HR systems, Document management, REST APIs'],
  support: '24/7 support, compliance consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, SOX, HIPAA, Industry-specific regulations'],
  link: 'https://ziontechgroup.com/regulatory-compliance-automation-suite',
  icon: '📋',
  color: 'from-blue-500 to-cyan-600',
  popular: true,
  launchDate: '2024-11-01',
  customers: 95,
  rating: 4.7,
  reviews: 134
}, {
  id: 'ai-powered-credit-risk-assessment',
  name: 'AI-Powered Credit Risk Assessment',
  tagline: 'Intelligent credit risk evaluation using machine learning and alternative data',
  description: 'Advanced credit risk assessment platform that uses AI and alternative data sources to provide accurate credit scoring and risk evaluation for financial institutions.',
  category: 'Credit Risk Management',
  pricing: {
    starter: '$699/month',
    professional: '$1,799/month',
    enterprise: '$4,499/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-3 weeks'
  },
  keyFeatures: ['AI-powered scoring', 'Alternative data analysis', 'Real-time risk assessment', 'Custom scoring models', 'Portfolio analytics', 'Compliance reporting', 'API integration', 'Custom dashboards', 'Mobile app access', 'Multi-lender support'],
  benefits: ['Improve credit decisions by 30%', 'Reduce default rates by 25%', 'Expand credit access', 'Optimize portfolio performance', 'Ensure regulatory compliance'],
  targetAudience: ['Banks and credit unions', 'Lending platforms', 'Credit card companies', 'Insurance companies', 'Fintech startups', 'Alternative lenders'],
  marketPosition: 'Competitive with FICO ($0.50-2.00 per score), Experian ($0.50-1.50 per score), and TransUnion ($0.50-1.50 per score). Our advantage: AI-powered scoring with alternative data.',
  competitors: ['FICO, Experian, TransUnion, Equifax, VantageScore, Custom solutions'],
  techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Azure'],
  realImplementation: true,
  implementationDetails: 'AI-powered credit risk assessment platform with alternative data analysis, custom scoring models, and comprehensive analytics. Includes training and customization.',
  roi: 'Organizations typically see 250-400% ROI within 12-18 months through improved credit decisions and reduced defaults.',
  useCases: ['Credit scoring', 'Risk assessment', 'Portfolio analysis', 'Lending decisions', 'Compliance reporting', 'Fraud prevention'],
  integrations: ['Banking systems, Credit bureaus, Alternative data sources, CRM platforms, REST APIs'],
  support: '24/7 support, credit risk consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, FCRA, ECOA, Industry-specific regulations'],
  link: 'https://ziontechgroup.com/ai-powered-credit-risk-assessment',
  icon: '📊',
  color: 'from-indigo-500 to-purple-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 75,
  rating: 4.8,
  reviews: 112
}];

/***/ }),

/***/ 821749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedEnterpriseAutomationServices2025: () => (/* binding */ advancedEnterpriseAutomationServices2025)
/* harmony export */ });
var advancedEnterpriseAutomationServices2025 = [{
  id: 'intelligent-process-orchestrator',
  name: 'Intelligent Process Orchestrator',
  tagline: 'AI-powered workflow automation that learns and optimizes your business processes',
  description: 'Advanced process automation platform that uses machine learning to identify bottlenecks, optimize workflows, and automatically improve business processes in real-time.',
  category: 'Enterprise Automation',
  pricing: {
    starter: '$299/month',
    professional: '$799/month',
    enterprise: '$2,499/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-3 days'
  },
  keyFeatures: ['AI-powered process discovery', 'Automated workflow optimization', 'Real-time performance monitoring', 'Predictive analytics', 'Custom automation rules', 'Multi-department integration', 'Compliance tracking', 'Performance dashboards', 'API-first architecture', 'Mobile app support'],
  benefits: ['Reduce process time by 60-80%', 'Cut operational costs by 40%', 'Improve accuracy to 99.9%', 'Enable 24/7 automated operations', 'Real-time process insights'],
  targetAudience: ['Large enterprises', 'Manufacturing companies', 'Healthcare organizations', 'Financial services', 'Retail chains', 'Logistics companies'],
  marketPosition: 'Competitive with UiPath ($420/month), Automation Anywhere ($750/month), and Blue Prism ($1,200/month). Our advantage: AI-powered learning and real-time optimization.',
  competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate'],
  techStack: ['Python, Node.js, React, PostgreSQL, Redis, AWS, Azure, Kubernetes, Docker'],
  realImplementation: true,
  implementationDetails: 'Full-stack automation platform with AI/ML capabilities, real-time monitoring, and comprehensive integration options. Includes training, support, and customization.',
  roi: 'Typical ROI of 300-500% within 6-12 months through process optimization and cost reduction.',
  useCases: ['Invoice processing automation', 'Customer service workflows', 'HR onboarding processes', 'Supply chain optimization', 'Quality control automation', 'Compliance monitoring'],
  integrations: ['SAP, Oracle, Salesforce, Microsoft 365, Slack, Teams, REST APIs'],
  support: '24/7 enterprise support, dedicated success manager, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, SOX'],
  link: 'https://ziontechgroup.com/intelligent-process-orchestrator',
  icon: '⚡',
  color: 'from-blue-500 to-cyan-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 85,
  rating: 4.8,
  reviews: 127
}, {
  id: 'enterprise-data-governance-suite',
  name: 'Enterprise Data Governance Suite',
  tagline: 'Comprehensive data governance, quality, and compliance management platform',
  description: 'Enterprise-grade data governance solution that ensures data quality, compliance, and security across all organizational data assets with automated monitoring and enforcement.',
  category: 'Data Governance',
  pricing: {
    starter: '$499/month',
    professional: '$1,299/month',
    enterprise: '$3,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '1-2 weeks'
  },
  keyFeatures: ['Data quality monitoring', 'Automated compliance checks', 'Data lineage tracking', 'Privacy impact assessments', 'Data catalog management', 'Access control automation', 'Audit trail generation', 'Real-time alerts', 'Custom policy engine', 'Multi-cloud support'],
  benefits: ['Ensure 99.9% data accuracy', 'Reduce compliance risks by 90%', 'Automate data quality checks', 'Centralize data governance', 'Meet regulatory requirements'],
  targetAudience: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Retail enterprises', 'Manufacturing companies', 'Technology companies'],
  marketPosition: 'Competitive with Collibra ($1,500/month), Informatica ($2,000/month), and Alation ($1,800/month). Our advantage: Automated compliance and real-time monitoring.',
  competitors: ['Collibra, Informatica, Alation, IBM InfoSphere, SAP Data Hub'],
  techStack: ['Java, Python, React, Angular, PostgreSQL, MongoDB, AWS, Azure, Kubernetes'],
  realImplementation: true,
  implementationDetails: 'Enterprise data governance platform with automated compliance monitoring, data quality management, and comprehensive reporting. Includes training and customization.',
  roi: 'Organizations typically see 200-400% ROI through reduced compliance costs and improved data quality.',
  useCases: ['GDPR compliance management', 'Data quality monitoring', 'Master data management', 'Data lineage tracking', 'Privacy impact assessments', 'Regulatory reporting'],
  integrations: ['Snowflake, Databricks, AWS S3, Azure Data Lake, Google BigQuery, REST APIs'],
  support: '24/7 enterprise support, compliance consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, SOX, HIPAA'],
  link: 'https://ziontechgroup.com/enterprise-data-governance-suite',
  icon: '🛡️',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2024-11-15',
  customers: 120,
  rating: 4.9,
  reviews: 203
}, {
  id: 'intelligent-supply-chain-optimizer',
  name: 'Intelligent Supply Chain Optimizer',
  tagline: 'AI-powered supply chain optimization with predictive analytics and real-time monitoring',
  description: 'Advanced supply chain management platform that uses machine learning to predict demand, optimize inventory, and automate procurement processes for maximum efficiency.',
  category: 'Supply Chain Management',
  pricing: {
    starter: '$399/month',
    professional: '$999/month',
    enterprise: '$2,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '1-2 weeks'
  },
  keyFeatures: ['Demand forecasting AI', 'Inventory optimization', 'Automated procurement', 'Real-time tracking', 'Supplier performance analytics', 'Cost optimization', 'Risk assessment', 'Compliance monitoring', 'Multi-warehouse support', 'Mobile app access'],
  benefits: ['Reduce inventory costs by 25-40%', 'Improve forecast accuracy by 85%', 'Cut procurement time by 70%', 'Optimize supplier relationships', 'Real-time supply chain visibility'],
  targetAudience: ['Manufacturing companies', 'Retail chains', 'E-commerce businesses', 'Logistics providers', 'Distribution companies', 'Food and beverage industry'],
  marketPosition: 'Competitive with SAP Ariba ($1,200/month), Oracle Procurement Cloud ($1,500/month), and Coupa ($1,000/month). Our advantage: AI-powered optimization and real-time analytics.',
  competitors: ['SAP Ariba, Oracle Procurement Cloud, Coupa, Jaggaer, Basware'],
  techStack: ['Python, Java, React, Node.js, PostgreSQL, Redis, AWS, Azure, Machine Learning'],
  realImplementation: true,
  implementationDetails: 'AI-powered supply chain platform with predictive analytics, automated procurement, and comprehensive monitoring. Includes training and customization.',
  roi: 'Typical ROI of 250-400% within 8-12 months through inventory optimization and cost reduction.',
  useCases: ['Demand forecasting', 'Inventory management', 'Procurement automation', 'Supplier management', 'Cost optimization', 'Risk mitigation'],
  integrations: ['SAP, Oracle, NetSuite, QuickBooks, Shopify, WooCommerce, REST APIs'],
  support: '24/7 support, supply chain consulting, training programs, and custom development.',
  compliance: ['ISO 9001, ISO 14001, SOC 2 Type II, GDPR, CCPA'],
  link: 'https://ziontechgroup.com/intelligent-supply-chain-optimizer',
  icon: '🚚',
  color: 'from-orange-500 to-red-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 95,
  rating: 4.7,
  reviews: 156
}, {
  id: 'enterprise-cybersecurity-operations-center',
  name: 'Enterprise Cybersecurity Operations Center',
  tagline: '24/7 cybersecurity monitoring and incident response with AI-powered threat detection',
  description: 'Comprehensive cybersecurity operations center that provides continuous monitoring, threat detection, and automated incident response for enterprise security.',
  category: 'Cybersecurity',
  pricing: {
    starter: '$1,999/month',
    professional: '$4,999/month',
    enterprise: '$12,999/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '2-4 weeks'
  },
  keyFeatures: ['24/7 security monitoring', 'AI-powered threat detection', 'Automated incident response', 'Vulnerability management', 'Compliance reporting', 'Security analytics', 'Threat intelligence', 'Incident management', 'Security awareness training', 'Mobile security'],
  benefits: ['Detect threats 10x faster', 'Reduce incident response time by 80%', 'Automate 70% of security tasks', 'Ensure compliance 24/7', 'Protect against advanced threats'],
  targetAudience: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Technology companies', 'Manufacturing enterprises', 'Retail chains'],
  marketPosition: 'Competitive with CrowdStrike ($8.99/endpoint/month), Palo Alto Networks ($10,000/month), and Fortinet ($5,000/month). Our advantage: 24/7 monitoring and AI-powered automation.',
  competitors: ['CrowdStrike, Palo Alto Networks, Fortinet, Cisco, IBM Security'],
  techStack: ['Python, Java, React, Node.js, Elasticsearch, PostgreSQL, AWS, Azure, AI/ML'],
  realImplementation: true,
  implementationDetails: 'Enterprise cybersecurity platform with 24/7 monitoring, AI-powered threat detection, and automated response. Includes training and 24/7 support.',
  roi: 'Organizations typically see 200-300% ROI through reduced security incidents and automated operations.',
  useCases: ['Threat detection and response', 'Vulnerability management', 'Compliance monitoring', 'Incident management', 'Security analytics', 'Threat intelligence'],
  integrations: ['SIEM systems, EDR solutions, Firewalls, IDS/IPS, Cloud platforms, REST APIs'],
  support: '24/7 security operations center, dedicated security analysts, training programs, and custom development.',
  compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, SOX, PCI DSS'],
  link: 'https://ziontechgroup.com/enterprise-cybersecurity-operations-center',
  icon: '🔒',
  color: 'from-red-500 to-pink-600',
  popular: true,
  launchDate: '2024-11-01',
  customers: 65,
  rating: 4.9,
  reviews: 89
}, {
  id: 'intelligent-customer-experience-platform',
  name: 'Intelligent Customer Experience Platform',
  tagline: 'AI-powered customer experience management with predictive analytics and automation',
  description: 'Comprehensive customer experience platform that uses AI to predict customer needs, automate interactions, and optimize every touchpoint for maximum satisfaction.',
  category: 'Customer Experience',
  pricing: {
    starter: '$299/month',
    professional: '$799/month',
    enterprise: '$2,499/month',
    currency: 'USD',
    trialDays: 30,
    setupTime: '1-2 weeks'
  },
  keyFeatures: ['AI-powered customer insights', 'Predictive analytics', 'Automated customer service', 'Omnichannel support', 'Customer journey mapping', 'Sentiment analysis', 'Personalization engine', 'A/B testing', 'Real-time analytics', 'Mobile app support'],
  benefits: ['Increase customer satisfaction by 40%', 'Reduce customer churn by 30%', 'Improve response time by 80%', 'Personalize customer interactions', 'Optimize customer journeys'],
  targetAudience: ['E-commerce businesses', 'SaaS companies', 'Retail chains', 'Financial services', 'Healthcare organizations', 'Telecommunications'],
  marketPosition: 'Competitive with Zendesk ($89/month), Intercom ($74/month), and HubSpot ($800/month). Our advantage: AI-powered insights and predictive analytics.',
  competitors: ['Zendesk, Intercom, HubSpot, Salesforce Service Cloud, Freshdesk'],
  techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Azure, AI/ML, Analytics'],
  realImplementation: true,
  implementationDetails: 'AI-powered customer experience platform with predictive analytics, automation, and comprehensive insights. Includes training and customization.',
  roi: 'Typical ROI of 200-350% within 6-12 months through improved customer satisfaction and retention.',
  useCases: ['Customer service automation', 'Customer journey optimization', 'Personalization', 'Sentiment analysis', 'Customer insights', 'A/B testing'],
  integrations: ['CRM systems, Marketing platforms, E-commerce platforms, Social media, REST APIs'],
  support: '24/7 support, customer experience consulting, training programs, and custom development.',
  compliance: ['SOC 2 Type II, GDPR, CCPA, ISO 27001'],
  link: 'https://ziontechgroup.com/intelligent-customer-experience-platform',
  icon: '💬',
  color: 'from-purple-500 to-indigo-600',
  popular: true,
  launchDate: '2024-12-01',
  customers: 180,
  rating: 4.8,
  reviews: 245
}];

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(379627)));
module.exports = __webpack_exports__;

})();