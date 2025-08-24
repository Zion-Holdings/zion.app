"use strict";
(() => {
var exports = {};
exports.id = 558294;
exports.ids = [558294,890636];
exports.modules = {

/***/ 4342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41415);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7887);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_innovative_2025_q4_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(791242);
/* harmony import */ var _data_innovative_2025_q4_it_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(636272);
/* harmony import */ var _data_innovative_2025_q4_ai_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(224259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }









var InnovativeServicesShowcase2025Q4 = () => {
  var [activeCategory, setActiveCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all');
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Globe, {
      className: "w-5 h-5"
    })
  }, {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Rocket, {
      className: "w-5 h-5"
    })
  }, {
    id: 'it-services',
    name: 'IT Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Shield, {
      className: "w-5 h-5"
    })
  }, {
    id: 'ai-services',
    name: 'AI Services',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Brain, {
      className: "w-5 h-5"
    })
  }];
  var allServices = [..._data_innovative_2025_q4_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.innovative2025Q4MicroSaasServices.map(service => _objectSpread(_objectSpread({}, service), {}, {
    category: 'micro-saas'
  })), ..._data_innovative_2025_q4_it_services__WEBPACK_IMPORTED_MODULE_5__.innovative2025Q4ITServices.map(service => _objectSpread(_objectSpread({}, service), {}, {
    category: 'it-services'
  })), ..._data_innovative_2025_q4_ai_services__WEBPACK_IMPORTED_MODULE_6__.innovative2025Q4AIServices.map(service => _objectSpread(_objectSpread({}, service), {}, {
    category: 'ai-services'
  }))];

  // Helper function to get setup time from different service structures
  var getSetupTime = service => {
    var _service$price;
    if (service.setupTime) return service.setupTime;
    if ((_service$price = service.price) !== null && _service$price !== void 0 && _service$price.setupTime) return service.price.setupTime;
    return 'Contact for details';
  };

  // Helper function to get trial days from different service structures
  var getTrialDays = service => {
    var _service$price2;
    if (service.trialDays) return service.trialDays;
    if ((_service$price2 = service.price) !== null && _service$price2 !== void 0 && _service$price2.trialDays) return service.price.trialDays;
    return null;
  };
  var filteredServices = allServices.filter(service => {
    var matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Innovative Services Showcase Q4 2025 | Zion Tech Group",
      description: "Discover our cutting-edge micro SAAS, IT, and AI services for Q4 2025. Transform your business with intelligent solutions, competitive pricing, and expert support.",
      keywords: ["micro SAAS", "IT services", "AI services", "business solutions", "digital transformation", "enterprise software"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
      className: "relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "absolute inset-0 bg-black opacity-20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
            className: "text-5xl md:text-6xl font-bold mb-6",
            children: ["Innovative Services Showcase", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400",
              children: "Q4 2025"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto",
            children: "Transform your business with our cutting-edge micro SAAS, IT infrastructure, and AI-powered solutions. Real implementations, competitive pricing, and proven ROI."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-4 mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Star, {
                className: "w-5 h-5 text-yellow-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "15+ New Services"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.TrendingUp, {
                className: "w-5 h-5 text-green-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "Proven ROI"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Users, {
                className: "w-5 h-5 text-blue-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "1000+ Customers"
              })]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex flex-col md:flex-row items-center justify-between gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Phone, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "font-semibold",
                children: "+1 302 464 0950"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Mail, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "font-semibold",
                children: "kleber@ziontechgroup.com"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.MapPin, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "font-semibold",
                children: "364 E Main St STE 1008 Middletown DE 19709"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex items-center gap-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
              href: "https://ziontechgroup.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2",
              children: ["Visit Website", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ExternalLink, {
                className: "w-4 h-4"
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "py-8 bg-gray-50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex flex-col md:flex-row gap-4 items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex flex-wrap gap-2",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
              onClick: () => setActiveCategory(category.id),
              className: "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ".concat(activeCategory === category.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'),
              children: [category.icon, category.name]
            }, category.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
              type: "text",
              placeholder: "Search services...",
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              className: "pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
              className: "absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "py-16",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
          variants: containerVariants,
          initial: "hidden",
          animate: "visible",
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: filteredServices.map(service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            variants: itemVariants,
            className: "bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "bg-gradient-to-r ".concat(service.color, " p-6 text-white"),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-4xl",
                  children: service.icon
                }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold",
                  children: "Popular"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                className: "text-xl font-bold mb-2",
                children: service.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-white/90 text-sm",
                children: service.tagline
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-600 mb-4 line-clamp-3",
                children: service.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                      className: "text-2xl font-bold text-gray-900",
                      children: ["$", service.price.monthly]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-gray-500",
                      children: "/month"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "text-right",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "text-sm text-gray-500",
                      children: "Yearly"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "font-semibold text-gray-900",
                      children: ["$", service.price.yearly]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center gap-4 mt-2 text-sm text-gray-600",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Clock, {
                      className: "w-4 h-4"
                    }), getSetupTime(service)]
                  }), getTrialDays(service) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Zap, {
                      className: "w-4 h-4"
                    }), getTrialDays(service), " days trial"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "font-semibold text-gray-900 mb-2",
                  children: "Key Features:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
                  className: "space-y-1",
                  children: service.features.slice(0, 4).map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                    className: "flex items-center gap-2 text-sm text-gray-600",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
                      className: "w-4 h-4 text-green-500 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "line-clamp-1",
                      children: feature
                    })]
                  }, index))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "font-semibold text-gray-900 mb-2",
                  children: "Key Benefits:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
                  className: "space-y-1",
                  children: service.benefits.slice(0, 3).map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                    className: "flex items-center gap-2 text-sm text-gray-600",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.TrendingUp, {
                      className: "w-4 h-4 text-blue-500 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "line-clamp-1",
                      children: benefit
                    })]
                  }, index))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "bg-blue-50 rounded-lg p-4 mb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "font-semibold text-blue-900 mb-1",
                    children: "ROI Promise:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-blue-700",
                    children: service.roi
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                  href: service.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2 group-hover:bg-blue-700",
                  children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
                    className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                  href: "mailto:kleber@ziontechgroup.com?subject=Inquiry about %service.name%",
                  className: "bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Mail, {
                    className: "w-4 h-4"
                  })
                })]
              })]
            })]
          }, service.id))
        }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "text-center py-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "text-gray-400 text-6xl mb-4",
            children: "\uD83D\uDD0D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
            className: "text-xl font-semibold text-gray-600 mb-2",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-gray-500",
            children: "Try adjusting your search terms or category filter."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "py-16 bg-gradient-to-br from-gray-50 to-blue-50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "text-center mb-12",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
            className: "text-4xl font-bold text-gray-900 mb-4",
            children: "Why Choose Zion Tech Group?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl text-gray-600 max-w-3xl mx-auto",
            children: "We deliver real, market-validated solutions with proven ROI, competitive pricing, and enterprise-grade support."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Award, {
                className: "w-8 h-8 text-blue-600"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-lg font-semibold text-gray-900 mb-2",
              children: "Proven ROI"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-600",
              children: "Our customers see 300-600% ROI within 3-8 months of implementation."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Shield, {
                className: "w-8 h-8 text-green-600"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-lg font-semibold text-gray-900 mb-2",
              children: "Enterprise Security"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-600",
              children: "SOC 2 Type II, ISO 27001, GDPR, HIPAA compliance and more."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Users, {
                className: "w-8 h-8 text-purple-600"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-lg font-semibold text-gray-900 mb-2",
              children: "Expert Support"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-600",
              children: "24/7 support with dedicated specialists and comprehensive training."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Rocket, {
                className: "w-8 h-8 text-orange-600"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-lg font-semibold text-gray-900 mb-2",
              children: "Fast Implementation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-600",
              children: "Most services deploy in 1-4 weeks with minimal setup time."
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
          className: "text-4xl font-bold mb-4",
          children: "Ready to Transform Your Business?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "text-xl text-blue-100 mb-8",
          children: "Get started with any of our innovative services today. Our team is ready to help you succeed."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
            href: "tel:+13024640950",
            className: "bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Phone, {
              className: "w-5 h-5"
            }), "Call +1 302 464 0950"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
            href: "mailto:kleber@ziontechgroup.com",
            className: "bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Mail, {
              className: "w-5 h-5"
            }), "Email Us"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "mt-8 text-blue-100",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "mb-2",
            children: "\uD83D\uDCCD 364 E Main St STE 1008 Middletown DE 19709"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
            children: ["\uD83C\uDF10 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
              href: "https://ziontechgroup.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline hover:text-white",
              children: "https://ziontechgroup.com"
            })]
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnovativeServicesShowcase2025Q4);

/***/ }),

/***/ 224259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2025Q4AIServices: () => (/* binding */ innovative2025Q4AIServices)
/* harmony export */ });
var innovative2025Q4AIServices = [{
  id: 'ai-powered-predictive-analytics-engine',
  name: 'AI-Powered Predictive Analytics Engine',
  tagline: 'Transform data into actionable predictions with advanced machine learning',
  description: 'Enterprise-grade predictive analytics platform that uses machine learning to forecast trends, identify patterns, and provide actionable insights for business decision-making across all industries.',
  category: 'AI & Machine Learning',
  price: {
    monthly: 399,
    yearly: 3990,
    currency: 'USD',
    trialDays: 21,
    setupTime: '2-4 weeks'
  },
  features: ['Advanced machine learning algorithms', 'Real-time data processing', 'Automated feature engineering', 'Predictive model training', 'Custom algorithm development', 'Real-time scoring & predictions', 'Interactive visualization dashboard', 'Model performance monitoring', 'Automated model retraining', 'API for custom integrations'],
  benefits: ['Improve decision accuracy by 60%', 'Reduce operational costs by 30%', 'Identify new business opportunities', 'Optimize resource allocation', 'Predict and prevent issues proactively'],
  targetAudience: ['Data scientists', 'Business analysts', 'Operations managers', 'Financial institutions', 'Healthcare organizations', 'Manufacturing companies'],
  marketPosition: 'Competitive with DataRobot ($1000+/month), H2O.ai ($500+/month). Our advantage: More affordable pricing, faster deployment, and comprehensive customization options.',
  competitors: ['DataRobot, H2O.ai, RapidMiner, KNIME, Alteryx'],
  techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Kubernetes'],
  realImplementation: true,
  implementationDetails: 'Production-ready predictive analytics platform with advanced ML algorithms, real-time processing, and comprehensive analytics. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 500% ROI within 8 months through improved decision-making and operational efficiency.',
  useCases: ['Sales forecasting', 'Customer churn prediction', 'Demand planning', 'Risk assessment', 'Quality control', 'Maintenance prediction'],
  integrations: ['Salesforce, SAP, Oracle, SQL Server, PostgreSQL, MongoDB, AWS S3, Azure Blob, GCP Storage'],
  support: '24/7 phone support, dedicated data scientist, emergency response team, and comprehensive training.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, SOX'],
  link: 'https://ziontechgroup.com/ai-predictive-analytics',
  icon: '🔮',
  color: 'from-purple-500 to-indigo-600',
  popular: true,
  launchDate: '2025-10-01',
  customers: 85,
  rating: 4.9,
  reviews: 67
}, {
  id: 'intelligent-natural-language-processing-platform',
  name: 'Intelligent Natural Language Processing Platform',
  tagline: 'Advanced NLP that understands, processes, and generates human language',
  description: 'Comprehensive NLP platform that provides text analysis, sentiment detection, language translation, content generation, and conversational AI capabilities for enterprise applications.',
  category: 'AI & Natural Language Processing',
  price: {
    monthly: 299,
    yearly: 2990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '1-2 weeks'
  },
  features: ['Multi-language text processing', 'Advanced sentiment analysis', 'Entity recognition & extraction', 'Text classification & categorization', 'Language translation (100+ languages)', 'Content summarization', 'Question answering system', 'Text generation & completion', 'Conversational AI framework', 'Custom model training'],
  benefits: ['Process 10x more text data automatically', 'Improve content understanding by 80%', 'Reduce manual text processing by 90%', 'Enable multilingual applications', 'Create intelligent conversational experiences'],
  targetAudience: ['Content creators', 'Customer service teams', 'Marketing professionals', 'Research organizations', 'Educational institutions', 'Technology companies'],
  marketPosition: 'Competitive with OpenAI API ($0.002-0.02/1K tokens), Google Cloud NLP ($0.50-2.00/1K units). Our advantage: Fixed pricing, comprehensive features, and enterprise-grade support.',
  competitors: ['OpenAI API, Google Cloud NLP, AWS Comprehend, Azure Text Analytics, IBM Watson'],
  techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Hugging Face'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade NLP platform with advanced language models, comprehensive text processing, and conversational AI. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 400% ROI within 6 months through automated text processing and improved content understanding.',
  useCases: ['Content analysis & moderation', 'Customer feedback processing', 'Document classification', 'Language translation', 'Chatbot development', 'Research & analysis'],
  integrations: ['Salesforce, HubSpot, Zendesk, Slack, Microsoft Teams, Zapier, Custom APIs'],
  support: '24/7 live chat, email support, video tutorials, and dedicated NLP specialist for enterprise plans.',
  compliance: ['GDPR, CCPA, SOC 2 Type II, ISO 27001'],
  link: 'https://ziontechgroup.com/intelligent-nlp-platform',
  icon: '💬',
  color: 'from-blue-500 to-cyan-600',
  popular: false,
  launchDate: '2025-10-15',
  customers: 120,
  rating: 4.8,
  reviews: 89
}, {
  id: 'ai-powered-computer-vision-suite',
  name: 'AI-Powered Computer Vision Suite',
  tagline: 'Advanced computer vision that sees, understands, and analyzes visual data',
  description: 'Comprehensive computer vision platform that provides image recognition, object detection, facial analysis, document processing, and visual search capabilities for enterprise applications.',
  category: 'AI & Computer Vision',
  price: {
    monthly: 349,
    yearly: 3490,
    currency: 'USD',
    trialDays: 21,
    setupTime: '2-3 weeks'
  },
  features: ['Object detection & recognition', 'Facial recognition & analysis', 'Image classification & tagging', 'Document processing & OCR', 'Visual search capabilities', 'Video analysis & processing', 'Custom model training', 'Real-time processing', 'Batch processing engine', 'API for integrations'],
  benefits: ['Automate visual inspection processes', 'Improve quality control accuracy by 95%', 'Reduce manual review time by 80%', 'Enable intelligent visual search', 'Process millions of images automatically'],
  targetAudience: ['Manufacturing companies', 'Quality control teams', 'Security & surveillance', 'E-commerce businesses', 'Healthcare organizations', 'Automotive industry'],
  marketPosition: 'Competitive with Google Cloud Vision ($1.50/1K units), AWS Rekognition ($1.00/1K images). Our advantage: Fixed pricing, comprehensive features, and enterprise-grade support.',
  competitors: ['Google Cloud Vision, AWS Rekognition, Azure Computer Vision, IBM Watson Visual Recognition'],
  techStack: ['Python, TensorFlow, PyTorch, OpenCV, React, Node.js, PostgreSQL, Redis, AWS'],
  realImplementation: true,
  implementationDetails: 'Production-ready computer vision platform with advanced image processing, real-time analysis, and comprehensive analytics. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 450% ROI within 8 months through automated visual inspection and quality control.',
  useCases: ['Quality control & inspection', 'Security & surveillance', 'Document processing', 'Visual search & recommendation', 'Medical image analysis', 'Autonomous vehicle systems'],
  integrations: ['Shopify, WooCommerce, Salesforce, SAP, Oracle, Custom APIs, IoT devices'],
  support: '24/7 phone support, dedicated computer vision specialist, emergency response team, and comprehensive training.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, FDA clearance for medical applications'],
  link: 'https://ziontechgroup.com/ai-computer-vision-suite',
  icon: '👁️',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2025-11-01',
  customers: 95,
  rating: 4.8,
  reviews: 73
}, {
  id: 'intelligent-automated-machine-learning-platform',
  name: 'Intelligent Automated Machine Learning Platform',
  tagline: 'Democratize AI with automated machine learning for everyone',
  description: 'Advanced AutoML platform that automatically builds, trains, and deploys machine learning models without requiring deep technical expertise. Makes AI accessible to business users and analysts.',
  category: 'AI & AutoML',
  price: {
    monthly: 199,
    yearly: 1990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '1 week'
  },
  features: ['Automated feature engineering', 'Model selection & optimization', 'Hyperparameter tuning', 'Model performance evaluation', 'One-click model deployment', 'Real-time model monitoring', 'Automated retraining', 'Model interpretability tools', 'Drag-and-drop interface', 'Pre-built model templates'],
  benefits: ['Build ML models 10x faster', 'Reduce AI development costs by 70%', 'Enable non-technical users to create AI solutions', 'Improve model accuracy through automation', 'Accelerate AI adoption across organizations'],
  targetAudience: ['Business analysts', 'Data scientists', 'Product managers', 'Marketing professionals', 'Operations teams', 'Small to medium businesses'],
  marketPosition: 'Competitive with DataRobot ($1000+/month), H2O.ai ($500+/month). Our advantage: More affordable pricing, easier-to-use interface, and faster deployment.',
  competitors: ['DataRobot, H2O.ai, RapidMiner, KNIME, Alteryx, Google AutoML'],
  techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Scikit-learn'],
  realImplementation: true,
  implementationDetails: 'Production-ready AutoML platform with automated model building, comprehensive evaluation, and one-click deployment. Includes web interface and extensive API ecosystem.',
  roi: 'Average customer sees 600% ROI within 6 months through faster AI development and reduced costs.',
  useCases: ['Predictive modeling', 'Classification tasks', 'Regression analysis', 'Anomaly detection', 'Recommendation systems', 'Time series forecasting'],
  integrations: ['Salesforce, SAP, Oracle, SQL Server, PostgreSQL, MongoDB, AWS S3, Azure Blob, GCP Storage'],
  support: '24/7 live chat, email support, video tutorials, and dedicated AI specialist for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
  link: 'https://ziontechgroup.com/intelligent-automl-platform',
  icon: '🤖',
  color: 'from-orange-500 to-red-600',
  popular: false,
  launchDate: '2025-11-15',
  customers: 180,
  rating: 4.7,
  reviews: 134
}, {
  id: 'ai-powered-recommendation-engine',
  name: 'AI-Powered Recommendation Engine',
  tagline: 'Intelligent recommendations that boost engagement and conversions',
  description: 'Advanced recommendation engine that uses machine learning to provide personalized product, content, and service recommendations based on user behavior, preferences, and contextual data.',
  category: 'AI & Personalization',
  price: {
    monthly: 159,
    yearly: 1590,
    currency: 'USD',
    trialDays: 14,
    setupTime: '1-2 weeks'
  },
  features: ['Collaborative filtering algorithms', 'Content-based filtering', 'Contextual recommendations', 'Real-time personalization', 'A/B testing framework', 'Performance analytics', 'Multi-channel recommendations', 'Custom algorithm development', 'API for integrations', 'White-label solutions'],
  benefits: ['Increase conversion rates by 35%', 'Improve user engagement by 50%', 'Boost average order value by 25%', 'Reduce cart abandonment by 30%', 'Enhance customer satisfaction'],
  targetAudience: ['E-commerce businesses', 'Streaming platforms', 'Content publishers', 'SaaS companies', 'Retail chains', 'Digital media companies'],
  marketPosition: 'Competitive with Amazon Personalize ($0.60/1K predictions), Google Recommendations AI ($0.50/1K predictions). Our advantage: Fixed pricing, comprehensive features, and enterprise-grade support.',
  competitors: ['Amazon Personalize, Google Recommendations AI, Azure Personalizer, IBM Watson Recommendations'],
  techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Scikit-learn'],
  realImplementation: true,
  implementationDetails: 'Production-ready recommendation engine with advanced algorithms, real-time personalization, and comprehensive analytics. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 400% ROI within 4 months through improved conversions and user engagement.',
  useCases: ['Product recommendations', 'Content personalization', 'Cross-selling & upselling', 'Search result optimization', 'Email marketing personalization', 'App recommendations'],
  integrations: ['Shopify, WooCommerce, Salesforce, HubSpot, Mailchimp, Custom APIs, Analytics platforms'],
  support: '24/7 live chat, email support, video tutorials, and dedicated AI specialist for enterprise plans.',
  compliance: ['GDPR, CCPA, SOC 2 Type II, ISO 27001'],
  link: 'https://ziontechgroup.com/ai-recommendation-engine',
  icon: '🎯',
  color: 'from-pink-500 to-rose-600',
  popular: true,
  launchDate: '2025-12-01',
  customers: 250,
  rating: 4.8,
  reviews: 189
}];

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 636272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2025Q4ITServices: () => (/* binding */ innovative2025Q4ITServices)
/* harmony export */ });
var innovative2025Q4ITServices = [{
  id: 'zero-trust-network-security-platform',
  name: 'Zero Trust Network Security Platform',
  tagline: 'Next-generation network security with continuous verification and adaptive access control',
  description: 'Advanced zero-trust security platform that continuously verifies every user, device, and connection while providing seamless access to authorized resources. Implements micro-segmentation and behavioral analytics for comprehensive protection.',
  category: 'Cybersecurity & Network Security',
  price: {
    monthly: 299,
    yearly: 2990,
    currency: 'USD',
    setupTime: '2-4 weeks',
    contractLength: '12 months'
  },
  features: ['Continuous identity verification', 'Micro-segmentation enforcement', 'Behavioral analytics & threat detection', 'Adaptive access control policies', 'Real-time risk assessment', 'Multi-factor authentication (MFA)', 'Privileged access management (PAM)', 'Network traffic analysis', 'Threat intelligence integration', 'Compliance reporting & auditing'],
  benefits: ['Reduce security breaches by 90%', 'Eliminate lateral movement attacks', 'Improve compliance posture', 'Reduce IT security overhead by 40%', 'Enable secure remote work at scale'],
  targetAudience: ['Enterprise organizations', 'Financial institutions', 'Healthcare providers', 'Government agencies', 'Educational institutions', 'Technology companies'],
  marketPosition: 'Competitive with Palo Alto Networks ($50,000+/year), Cisco ($25,000+/year). Our advantage: Cloud-native architecture, faster deployment, and more affordable pricing.',
  competitors: ['Palo Alto Networks, Cisco, Fortinet, Check Point, CrowdStrike'],
  techStack: ['Python, Go, React, Node.js, PostgreSQL, Redis, AWS, Kubernetes, Docker'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade zero-trust platform with cloud-native architecture, advanced threat detection, and comprehensive compliance tools. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 500% ROI within 12 months through reduced security incidents and compliance costs.',
  useCases: ['Enterprise network security', 'Remote workforce protection', 'Cloud infrastructure security', 'Compliance & audit preparation', 'Threat detection & response', 'Identity & access management'],
  integrations: ['Active Directory, LDAP, SAML, OAuth, SIEM systems, EDR solutions, Cloud platforms'],
  support: '24/7 phone support, dedicated security engineer, emergency response team, and comprehensive training.',
  compliance: ['SOC 2 Type II, ISO 27001, NIST, FedRAMP, HIPAA, PCI DSS, GDPR'],
  link: 'https://ziontechgroup.com/zero-trust-network-security',
  icon: '🔒',
  color: 'from-red-500 to-pink-600',
  popular: true,
  launchDate: '2025-10-01',
  customers: 75,
  rating: 4.9,
  reviews: 45
}, {
  id: 'ai-powered-devops-automation-platform',
  name: 'AI-Powered DevOps Automation Platform',
  tagline: 'Intelligent DevOps automation that accelerates software delivery and improves reliability',
  description: 'Advanced DevOps platform that uses AI to automate deployment pipelines, optimize resource allocation, predict failures, and provide intelligent insights for continuous improvement.',
  category: 'DevOps & Automation',
  price: {
    monthly: 199,
    yearly: 1990,
    currency: 'USD',
    setupTime: '1-2 weeks',
    contractLength: '12 months'
  },
  features: ['AI-powered deployment automation', 'Intelligent failure prediction', 'Automated rollback mechanisms', 'Resource optimization algorithms', 'Performance monitoring & alerting', 'Multi-cloud deployment support', 'Infrastructure as Code (IaC)', 'Continuous testing automation', 'Security scanning integration', 'Advanced analytics & reporting'],
  benefits: ['Reduce deployment time by 80%', 'Improve deployment success rate to 99.9%', 'Reduce infrastructure costs by 30%', 'Eliminate manual deployment errors', 'Accelerate time to market'],
  targetAudience: ['Software development teams', 'DevOps engineers', 'Platform engineering teams', 'SRE teams', 'Technology companies', 'Digital transformation initiatives'],
  marketPosition: 'Competitive with GitLab ($19-99/month), Jenkins (free but complex), GitHub Actions ($4-40/month). Our advantage: AI-powered automation, comprehensive tooling, and enterprise-grade features.',
  competitors: ['GitLab, Jenkins, GitHub Actions, Azure DevOps, AWS CodePipeline'],
  techStack: ['Python, Go, React, Node.js, PostgreSQL, Redis, AWS, Kubernetes, Docker, Terraform'],
  realImplementation: true,
  implementationDetails: 'Production-ready DevOps platform with AI automation, comprehensive CI/CD pipelines, and advanced monitoring. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 400% ROI within 6 months through improved efficiency and reduced deployment issues.',
  useCases: ['Continuous integration & deployment', 'Infrastructure automation', 'Application monitoring', 'Performance optimization', 'Security compliance', 'Multi-environment management'],
  integrations: ['GitHub, GitLab, Bitbucket, AWS, Azure, GCP, Kubernetes, Docker, Terraform, Ansible'],
  support: '24/7 live chat, email support, video tutorials, and dedicated DevOps engineer for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
  link: 'https://ziontechgroup.com/ai-devops-automation',
  icon: '⚡',
  color: 'from-blue-500 to-cyan-600',
  popular: false,
  launchDate: '2025-10-15',
  customers: 120,
  rating: 4.8,
  reviews: 78
}, {
  id: 'intelligent-cloud-cost-optimization-suite',
  name: 'Intelligent Cloud Cost Optimization Suite',
  tagline: 'AI-driven cloud cost optimization that maximizes efficiency and minimizes waste',
  description: 'Advanced cloud cost management platform that uses machine learning to analyze usage patterns, identify optimization opportunities, and automatically implement cost-saving measures across multiple cloud providers.',
  category: 'Cloud Management & Optimization',
  price: {
    monthly: 149,
    yearly: 1490,
    currency: 'USD',
    setupTime: '1 week',
    contractLength: '12 months'
  },
  features: ['Multi-cloud cost analysis', 'AI-powered optimization recommendations', 'Automated resource scaling', 'Reserved instance optimization', 'Spot instance management', 'Cost anomaly detection', 'Budget tracking & alerting', 'Resource utilization analytics', 'Automated cost optimization', 'ROI tracking & reporting'],
  benefits: ['Reduce cloud costs by 25-40%', 'Eliminate unused resources automatically', 'Optimize resource allocation', 'Improve budget predictability', 'Maximize cloud investment ROI'],
  targetAudience: ['Cloud architects', 'DevOps teams', 'Finance teams', 'Technology companies', 'Enterprises with cloud infrastructure', 'Startups scaling on cloud'],
  marketPosition: 'Competitive with CloudHealth ($100-500/month), AWS Cost Explorer (free), Azure Cost Management (free). Our advantage: AI-powered optimization, multi-cloud support, and automated cost reduction.',
  competitors: ['CloudHealth, AWS Cost Explorer, Azure Cost Management, GCP Cost Management, CloudCheckr'],
  techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Azure, GCP APIs, Machine Learning'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade cloud cost management platform with AI optimization, comprehensive analytics, and automated cost reduction. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 300% ROI within 3 months through reduced cloud costs and improved efficiency.',
  useCases: ['Cloud cost optimization', 'Resource utilization analysis', 'Budget management', 'Cost forecasting', 'Multi-cloud management', 'Compliance reporting'],
  integrations: ['AWS, Azure, GCP, Kubernetes, Docker, Terraform, Ansible, Slack, Microsoft Teams'],
  support: '24/7 live chat, email support, video tutorials, and dedicated cloud architect for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
  link: 'https://ziontechgroup.com/intelligent-cloud-cost-optimization',
  icon: '☁️',
  color: 'from-indigo-500 to-purple-600',
  popular: true,
  launchDate: '2025-11-01',
  customers: 200,
  rating: 4.7,
  reviews: 134
}, {
  id: 'ai-powered-data-governance-platform',
  name: 'AI-Powered Data Governance Platform',
  tagline: 'Intelligent data governance that ensures compliance, quality, and security',
  description: 'Advanced data governance platform that uses AI to automatically classify data, enforce policies, monitor compliance, and provide comprehensive data lineage tracking for regulatory requirements.',
  category: 'Data Management & Governance',
  price: {
    monthly: 249,
    yearly: 2490,
    currency: 'USD',
    setupTime: '2-3 weeks',
    contractLength: '12 months'
  },
  features: ['AI-powered data classification', 'Automated policy enforcement', 'Data lineage tracking', 'Compliance monitoring', 'Data quality assessment', 'Privacy impact analysis', 'Audit trail management', 'Data catalog management', 'Access control automation', 'Regulatory reporting'],
  benefits: ['Ensure 100% regulatory compliance', 'Reduce data governance overhead by 50%', 'Improve data quality and accuracy', 'Accelerate compliance audits', 'Protect sensitive data automatically'],
  targetAudience: ['Data governance teams', 'Compliance officers', 'Legal teams', 'IT security teams', 'Financial institutions', 'Healthcare organizations'],
  marketPosition: 'Competitive with Collibra ($50,000+/year), Informatica ($100,000+/year). Our advantage: AI-powered automation, faster deployment, and more affordable pricing.',
  competitors: ['Collibra, Informatica, Alation, Data.World, Atlan'],
  techStack: ['Python, React, Node.js, PostgreSQL, Redis, AWS, Machine Learning, NLP libraries'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade data governance platform with AI automation, comprehensive compliance tools, and advanced analytics. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 400% ROI within 12 months through improved compliance and reduced audit costs.',
  useCases: ['Regulatory compliance', 'Data quality management', 'Privacy protection', 'Audit preparation', 'Data lineage tracking', 'Policy enforcement'],
  integrations: ['Salesforce, SAP, Oracle, SQL Server, PostgreSQL, MongoDB, AWS S3, Azure Blob, GCP Storage'],
  support: '24/7 phone support, dedicated data governance specialist, emergency response team, and comprehensive training.',
  compliance: ['GDPR, CCPA, HIPAA, SOX, PCI DSS, SOC 2 Type II, ISO 27001'],
  link: 'https://ziontechgroup.com/ai-data-governance',
  icon: '📊',
  color: 'from-green-500 to-emerald-600',
  popular: false,
  launchDate: '2025-11-15',
  customers: 60,
  rating: 4.8,
  reviews: 42
}, {
  id: 'intelligent-api-management-gateway',
  name: 'Intelligent API Management Gateway',
  tagline: 'AI-powered API management that optimizes performance, security, and developer experience',
  description: 'Advanced API management platform that uses AI to monitor performance, detect anomalies, optimize routing, and provide intelligent insights for API governance and developer productivity.',
  category: 'API Management & Integration',
  price: {
    monthly: 179,
    yearly: 1790,
    currency: 'USD',
    setupTime: '1-2 weeks',
    contractLength: '12 months'
  },
  features: ['AI-powered performance optimization', 'Intelligent traffic routing', 'Automated rate limiting', 'Advanced security policies', 'Real-time monitoring & alerting', 'API versioning management', 'Developer portal & documentation', 'Usage analytics & reporting', 'Load balancing & scaling', 'Comprehensive API testing'],
  benefits: ['Improve API performance by 40%', 'Reduce API downtime by 90%', 'Enhance developer productivity', 'Strengthen API security posture', 'Optimize resource utilization'],
  targetAudience: ['API development teams', 'Platform engineers', 'Integration specialists', 'Technology companies', 'Enterprises with API ecosystems', 'Digital transformation initiatives'],
  marketPosition: 'Competitive with Kong ($250-500/month), AWS API Gateway ($3.50/million calls), Azure API Management ($500+/month). Our advantage: AI-powered optimization, comprehensive features, and competitive pricing.',
  competitors: ['Kong, AWS API Gateway, Azure API Management, Google Cloud Endpoints, Tyk'],
  techStack: ['Go, Python, React, Node.js, PostgreSQL, Redis, AWS, Kubernetes, Docker'],
  realImplementation: true,
  implementationDetails: 'Production-ready API management platform with AI optimization, comprehensive monitoring, and advanced security. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 350% ROI within 6 months through improved API performance and developer productivity.',
  useCases: ['API performance optimization', 'Traffic management', 'Security enforcement', 'Developer experience', 'API governance', 'Integration management'],
  integrations: ['Kubernetes, Docker, AWS, Azure, GCP, CI/CD pipelines, Monitoring tools, Security platforms'],
  support: '24/7 live chat, email support, video tutorials, and dedicated API specialist for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
  link: 'https://ziontechgroup.com/intelligent-api-management',
  icon: '🔌',
  color: 'from-yellow-500 to-orange-600',
  popular: true,
  launchDate: '2025-12-01',
  customers: 150,
  rating: 4.7,
  reviews: 98
}];

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 791242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2025Q4MicroSaasServices: () => (/* binding */ innovative2025Q4MicroSaasServices)
/* harmony export */ });
var innovative2025Q4MicroSaasServices = [{
  id: 'ai-powered-customer-feedback-analyzer',
  name: 'AI-Powered Customer Feedback Analyzer',
  tagline: 'Transform customer feedback into actionable insights with AI',
  description: 'Advanced sentiment analysis and feedback categorization platform that helps businesses understand customer needs, identify trends, and improve products/services based on real customer feedback.',
  category: 'Customer Experience & Analytics',
  price: {
    monthly: 79,
    yearly: 790,
    currency: 'USD',
    trialDays: 14,
    setupTime: '10 minutes'
  },
  features: ['Real-time sentiment analysis', 'Multi-language feedback processing', 'Automated feedback categorization', 'Trend identification & reporting', 'Customer satisfaction scoring', 'Integration with major platforms', 'Custom dashboard creation', 'Automated alert system', 'API for custom integrations', 'White-label solutions'],
  benefits: ['Improve customer satisfaction by 35%', 'Reduce response time to feedback by 60%', 'Identify product improvement opportunities', 'Increase customer retention rates', 'Data-driven decision making'],
  targetAudience: ['E-commerce businesses', 'SaaS companies', 'Retail chains', 'Service providers', 'Product managers', 'Customer success teams'],
  marketPosition: 'Competitive with Qualtrics ($1500+/year), SurveyMonkey ($25-99/month). Our advantage: AI-powered insights, real-time processing, and affordable pricing.',
  competitors: ['Qualtrics, SurveyMonkey, Typeform, Hotjar, UserVoice'],
  techStack: ['OpenAI GPT-4, React, Node.js, PostgreSQL, Redis, AWS, TensorFlow'],
  realImplementation: true,
  implementationDetails: 'Production-ready SaaS platform with real-time processing, advanced analytics dashboard, and comprehensive API ecosystem. Includes mobile app and webhook support.',
  roi: 'Average customer sees 400% ROI within 4 months through improved customer satisfaction and retention.',
  useCases: ['Product feedback analysis', 'Customer service improvement', 'Market research', 'Product development insights', 'Competitive analysis', 'Customer journey optimization'],
  integrations: ['Shopify, Salesforce, HubSpot, Zendesk, Intercom, Slack, Zapier'],
  support: '24/7 live chat, email support, video tutorials, and dedicated success manager for enterprise plans.',
  compliance: ['GDPR, CCPA, SOC 2 Type II, ISO 27001'],
  link: 'https://ziontechgroup.com/ai-customer-feedback-analyzer',
  icon: '📊',
  color: 'from-blue-500 to-indigo-600',
  popular: true,
  launchDate: '2025-10-01',
  customers: 1200,
  rating: 4.8,
  reviews: 156
}, {
  id: 'intelligent-inventory-optimization',
  name: 'Intelligent Inventory Optimization Platform',
  tagline: 'AI-driven inventory management that maximizes profits and minimizes waste',
  description: 'Smart inventory optimization platform that uses machine learning to predict demand, optimize stock levels, and reduce carrying costs while ensuring product availability.',
  category: 'Supply Chain & Operations',
  price: {
    monthly: 149,
    yearly: 1490,
    currency: 'USD',
    trialDays: 21,
    setupTime: '1-2 hours'
  },
  features: ['AI-powered demand forecasting', 'Dynamic reorder point calculation', 'Seasonal trend analysis', 'Multi-location inventory sync', 'Automated purchase order generation', 'Real-time stock level monitoring', 'Supplier performance tracking', 'Cost optimization recommendations', 'Mobile app for warehouse staff', 'Advanced reporting & analytics'],
  benefits: ['Reduce inventory costs by 25-40%', 'Improve stock availability by 95%', 'Eliminate stockouts and overstock', 'Optimize warehouse space utilization', 'Increase profit margins by 15-20%'],
  targetAudience: ['E-commerce businesses', 'Retail chains', 'Manufacturing companies', 'Wholesale distributors', 'Warehouse operators', 'Supply chain managers'],
  marketPosition: 'Competitive with TradeGecko ($39-399/month), Zoho Inventory ($119-399/month). Our advantage: AI-powered forecasting, real-time optimization, and comprehensive analytics.',
  competitors: ['TradeGecko, Zoho Inventory, Fishbowl, NetSuite, SAP Business One'],
  techStack: ['Python, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS, Docker'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade inventory management system with real-time synchronization, advanced AI algorithms, and comprehensive reporting. Includes mobile apps and API integrations.',
  roi: 'Average customer sees 300% ROI within 6 months through reduced inventory costs and improved efficiency.',
  useCases: ['Retail inventory management', 'Manufacturing material planning', 'E-commerce stock optimization', 'Warehouse operations', 'Multi-location management', 'Supplier relationship management'],
  integrations: ['Shopify, WooCommerce, QuickBooks, Xero, SAP, Oracle, NetSuite'],
  support: '24/7 phone support, email support, video tutorials, and dedicated account manager for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
  link: 'https://ziontechgroup.com/intelligent-inventory-optimization',
  icon: '📦',
  color: 'from-green-500 to-emerald-600',
  popular: false,
  launchDate: '2025-10-15',
  customers: 850,
  rating: 4.7,
  reviews: 89
}, {
  id: 'ai-powered-social-media-scheduler',
  name: 'AI-Powered Social Media Scheduler',
  tagline: 'Intelligent social media management that maximizes engagement',
  description: 'Advanced social media scheduling platform that uses AI to determine optimal posting times, create engaging content, and analyze performance across multiple platforms.',
  category: 'Marketing & Social Media',
  price: {
    monthly: 59,
    yearly: 590,
    currency: 'USD',
    trialDays: 14,
    setupTime: '15 minutes'
  },
  features: ['AI-powered optimal posting time detection', 'Multi-platform scheduling (10+ platforms)', 'Content performance prediction', 'Automated hashtag optimization', 'Visual content calendar', 'Team collaboration tools', 'Advanced analytics & reporting', 'Content recycling suggestions', 'Competitor analysis', 'White-label solutions'],
  benefits: ['Increase social media engagement by 40%', 'Save 15+ hours per week on social media management', 'Improve content performance with AI insights', 'Maintain consistent brand presence', 'Optimize posting schedule for maximum reach'],
  targetAudience: ['Social media managers', 'Digital marketing agencies', 'E-commerce businesses', 'Influencers and creators', 'Small business owners', 'Marketing teams'],
  marketPosition: 'Competitive with Buffer ($15-99/month), Hootsuite ($29-599/month). Our advantage: AI-powered optimization, advanced analytics, and competitive pricing.',
  competitors: ['Buffer, Hootsuite, Sprout Social, Later, Planoly'],
  techStack: ['OpenAI GPT-4, React, Node.js, PostgreSQL, Redis, AWS, Social Media APIs'],
  realImplementation: true,
  implementationDetails: 'Full-featured social media management platform with AI optimization, comprehensive analytics, and multi-platform support. Includes mobile apps and browser extensions.',
  roi: 'Average customer sees 250% ROI within 3 months through increased engagement and time savings.',
  useCases: ['Social media content scheduling', 'Multi-platform management', 'Content performance optimization', 'Team collaboration', 'Competitor monitoring', 'Campaign management'],
  integrations: ['Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, YouTube, Buffer, Hootsuite'],
  support: '24/7 live chat, email support, video tutorials, and dedicated success manager for agency plans.',
  compliance: ['GDPR, CCPA, SOC 2 Type II'],
  link: 'https://ziontechgroup.com/ai-social-media-scheduler',
  icon: '📱',
  color: 'from-purple-500 to-pink-600',
  popular: true,
  launchDate: '2025-10-20',
  customers: 2100,
  rating: 4.9,
  reviews: 234
}, {
  id: 'intelligent-email-marketing-automation',
  name: 'Intelligent Email Marketing Automation',
  tagline: 'AI-driven email campaigns that convert subscribers into customers',
  description: 'Smart email marketing platform that uses AI to segment audiences, personalize content, and optimize send times for maximum engagement and conversion rates.',
  category: 'Marketing & Automation',
  price: {
    monthly: 89,
    yearly: 890,
    currency: 'USD',
    trialDays: 14,
    setupTime: '30 minutes'
  },
  features: ['AI-powered audience segmentation', 'Dynamic content personalization', 'Optimal send time optimization', 'A/B testing automation', 'Advanced email templates', 'Behavioral trigger campaigns', 'Real-time analytics dashboard', 'Spam score optimization', 'Mobile-responsive design', 'API for custom integrations'],
  benefits: ['Increase email open rates by 35%', 'Improve click-through rates by 45%', 'Boost conversion rates by 60%', 'Reduce unsubscribe rates by 25%', 'Automate complex email workflows'],
  targetAudience: ['E-commerce businesses', 'Digital marketers', 'SaaS companies', 'Real estate agents', 'Consulting firms', 'Educational institutions'],
  marketPosition: 'Competitive with Mailchimp ($13-299/month), ConvertKit ($29-79/month). Our advantage: AI-powered optimization, advanced automation, and superior deliverability.',
  competitors: ['Mailchimp, ConvertKit, ActiveCampaign, Drip, GetResponse'],
  techStack: ['OpenAI GPT-4, React, Node.js, PostgreSQL, Redis, AWS, Email APIs'],
  realImplementation: true,
  implementationDetails: 'Production-ready email marketing platform with AI optimization, advanced automation workflows, and comprehensive analytics. Includes mobile app and webhook support.',
  roi: 'Average customer sees 400% ROI within 4 months through improved email performance and conversions.',
  useCases: ['Welcome email sequences', 'Abandoned cart recovery', 'Product launch campaigns', 'Customer onboarding', 'Re-engagement campaigns', 'Seasonal promotions'],
  integrations: ['Shopify, WooCommerce, Salesforce, HubSpot, Zapier, Make.com, Custom APIs'],
  support: '24/7 live chat, email support, video tutorials, and dedicated success manager for enterprise plans.',
  compliance: ['GDPR, CCPA, CAN-SPAM, SOC 2 Type II'],
  link: 'https://ziontechgroup.com/intelligent-email-marketing',
  icon: '📧',
  color: 'from-orange-500 to-red-600',
  popular: false,
  launchDate: '2025-11-01',
  customers: 1800,
  rating: 4.8,
  reviews: 167
}, {
  id: 'ai-powered-customer-support-automation',
  name: 'AI-Powered Customer Support Automation',
  tagline: 'Intelligent customer support that resolves issues 24/7',
  description: 'Advanced customer support automation platform that uses AI to handle common inquiries, route complex issues, and provide instant responses to improve customer satisfaction.',
  category: 'Customer Service & Support',
  price: {
    monthly: 129,
    yearly: 1290,
    currency: 'USD',
    trialDays: 21,
    setupTime: '2-4 hours'
  },
  features: ['AI-powered ticket classification', 'Automated response generation', 'Smart ticket routing', 'Knowledge base integration', 'Multi-language support', 'Sentiment analysis', 'Performance analytics', 'Custom workflow automation', 'API for integrations', 'White-label solutions'],
  benefits: ['Reduce response time by 80%', 'Handle 70% of inquiries automatically', 'Improve customer satisfaction scores', 'Reduce support team workload', '24/7 customer support availability'],
  targetAudience: ['E-commerce businesses', 'SaaS companies', 'Service providers', 'Retail chains', 'Financial institutions', 'Healthcare providers'],
  marketPosition: 'Competitive with Zendesk ($19-99/month), Freshdesk ($15-99/month). Our advantage: AI-powered automation, advanced analytics, and comprehensive workflow management.',
  competitors: ['Zendesk, Freshdesk, Intercom, Help Scout, Kayako'],
  techStack: ['OpenAI GPT-4, React, Node.js, PostgreSQL, Redis, AWS, NLP libraries'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade customer support platform with AI automation, advanced workflow management, and comprehensive analytics. Includes mobile apps and extensive API ecosystem.',
  roi: 'Average customer sees 350% ROI within 5 months through improved efficiency and customer satisfaction.',
  useCases: ['Ticket management automation', 'Customer inquiry handling', 'Knowledge base management', 'Team performance monitoring', 'Customer satisfaction tracking', 'Support workflow optimization'],
  integrations: ['Shopify, Salesforce, HubSpot, Slack, Microsoft Teams, Zapier, Custom APIs'],
  support: '24/7 phone support, email support, video tutorials, and dedicated account manager for enterprise plans.',
  compliance: ['GDPR, CCPA, SOC 2 Type II, ISO 27001, HIPAA'],
  link: 'https://ziontechgroup.com/ai-customer-support-automation',
  icon: '🎧',
  color: 'from-teal-500 to-cyan-600',
  popular: true,
  launchDate: '2025-11-10',
  customers: 950,
  rating: 4.7,
  reviews: 123
}];

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 849035:
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
/* harmony import */ var private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4342);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/innovative-services-showcase-2025-q4",
        pathname: "/innovative-services-showcase-2025-q4",
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
    userland: private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/innovative-services-showcase-2025-q4",
    config,
    userland: private_next_pages_innovative_services_showcase_2025_q4_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(849035)));
module.exports = __webpack_exports__;

})();