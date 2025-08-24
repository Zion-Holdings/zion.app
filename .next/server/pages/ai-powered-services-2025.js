"use strict";
(() => {
var exports = {};
exports.id = 659430;
exports.ids = [659430,890636];
exports.modules = {

/***/ 252474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7887);
/* harmony import */ var _data_innovative_2025_ai_powered_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(978494);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var AIPoweredServices2025 = () => {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [selectedService, setSelectedService] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Brain
  }, {
    id: 'Cybersecurity & AI',
    name: 'Cybersecurity',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield
  }, {
    id: 'DevOps & Automation',
    name: 'DevOps',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Zap
  }, {
    id: 'Financial Technology & AI',
    name: 'FinTech',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.TrendingUp
  }, {
    id: 'Healthcare & AI',
    name: 'Healthcare',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Heart
  }];
  var filteredServices = selectedCategory === 'all' ? _data_innovative_2025_ai_powered_services__WEBPACK_IMPORTED_MODULE_2__.innovative2025AIPoweredServices : _data_innovative_2025_ai_powered_services__WEBPACK_IMPORTED_MODULE_2__.innovative2025AIPoweredServices.filter(service => service.category === selectedCategory);
  var handleServiceClick = serviceId => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "AI-Powered Services 2025 | Zion Tech Group",
      description: "Discover our cutting-edge AI-powered services including cybersecurity, DevOps automation, financial analytics, and healthcare solutions. Transform your business with intelligent automation.",
      keywords: ["AI services", "cybersecurity", "DevOps automation", "financial analytics", "healthcare AI", "machine learning", "artificial intelligence"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "relative py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h1", {
            className: "text-4xl md:text-6xl font-bold text-white mb-6",
            children: ["AI-Powered Services", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",
              children: "Revolution 2025"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Transform your business with cutting-edge artificial intelligence solutions. From cybersecurity to healthcare, our AI-powered services deliver unprecedented efficiency, accuracy, and innovation."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
              children: "Explore Services"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              className: "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300",
              children: "Contact Sales"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "py-12 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex flex-wrap justify-center gap-4",
          children: categories.map(category => {
            var Icon = category.icon;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
              onClick: () => setSelectedCategory(category.id),
              className: "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                className: "w-5 h-5"
              }), category.name]
            }, category.id);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "py-16 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",
          children: filteredServices.map(service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.6
            },
            className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-start justify-between mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-4xl",
                children: service.icon
              }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium",
                children: "Popular"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-3",
              children: service.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300 mb-6",
              children: service.tagline
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "space-y-4 mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2 text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Star, {
                  className: "w-5 h-5 text-yellow-500"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: [service.rating, "/5 (", service.reviews, " reviews)"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2 text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users, {
                  className: "w-5 h-5 text-blue-500"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: [service.customers, "+ customers"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2 text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Clock, {
                  className: "w-5 h-5 text-green-500"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: ["Setup: ", service.pricing.setupTime]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                className: "text-lg font-semibold text-white mb-3",
                children: "Pricing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "grid grid-cols-3 gap-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "text-sm text-gray-400",
                    children: "Starter"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "text-xl font-bold text-white",
                    children: ["$", service.pricing.starter]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "text-xs text-gray-500",
                    children: "/month"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "text-sm text-gray-400",
                    children: "Professional"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "text-xl font-bold text-white",
                    children: ["$", service.pricing.professional]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "text-xs text-gray-500",
                    children: "/month"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "text-sm text-gray-400",
                    children: "Enterprise"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "text-xl font-bold text-white",
                    children: ["$", service.pricing.enterprise]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "text-xs text-gray-500",
                    children: "/month"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: () => handleServiceClick(service.id),
              className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mb-4",
              children: selectedService === service.id ? 'Hide Details' : 'View Details'
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
              children: selectedService === service.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                initial: {
                  opacity: 0,
                  height: 0
                },
                animate: {
                  opacity: 1,
                  height: 'auto'
                },
                exit: {
                  opacity: 0,
                  height: 0
                },
                transition: {
                  duration: 0.3
                },
                className: "overflow-hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "border-t border-white/20 pt-6 space-y-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                      className: "text-lg font-semibold text-white mb-3",
                      children: "Key Features"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
                      className: "space-y-2",
                      children: service.features.slice(0, 5).map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                        className: "flex items-center gap-2 text-gray-300",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Check, {
                          className: "w-4 h-4 text-green-500 flex-shrink-0"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "text-sm",
                          children: feature
                        })]
                      }, index))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                      className: "text-lg font-semibold text-white mb-3",
                      children: "Benefits"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
                      className: "space-y-2",
                      children: service.benefits.slice(0, 3).map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                        className: "flex items-center gap-2 text-gray-300",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Award, {
                          className: "w-4 h-4 text-yellow-500 flex-shrink-0"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "text-sm",
                          children: benefit
                        })]
                      }, index))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                      className: "text-lg font-semibold text-white mb-3",
                      children: "ROI"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      className: "text-gray-300 text-sm",
                      children: service.roi
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "pt-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                      href: service.link,
                      className: "inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium",
                      children: ["Learn More ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {
                        className: "w-4 h-4"
                      })]
                    })
                  })]
                })
              })
            })]
          }, service.id))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "py-20 px-4 sm:px-6 lg:px-8 bg-white/5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-3xl md:text-4xl font-bold text-white mb-6",
            children: "Why Choose Zion Tech Group?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "We combine cutting-edge AI technology with deep industry expertise to deliver solutions that transform businesses and drive measurable results."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Brain, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-3",
              children: "AI-First Approach"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Built from the ground up with artificial intelligence at the core"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Rocket, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-3",
              children: "Rapid Implementation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Get up and running in days, not months with our streamlined setup"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Target, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-3",
              children: "Proven Results"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "Track record of delivering 200-400% ROI for our customers"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-xl font-semibold text-white mb-3",
              children: "Enterprise Security"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300",
              children: "SOC 2 Type II, ISO 27001, and industry-leading compliance"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-4xl mx-auto text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-3xl md:text-4xl font-bold text-white mb-6",
          children: "Ready to Transform Your Business?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-xl text-gray-300 mb-8",
          children: "Let's discuss how our AI-powered services can drive innovation, efficiency, and growth for your organization."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Clock, {
                  className: "w-6 h-6 text-white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: "24/7 Support"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-300 text-sm",
                children: "Round-the-clock technical support and monitoring"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users, {
                  className: "w-6 h-6 text-white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: "Dedicated Team"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-300 text-sm",
                children: "Expert engineers and consultants assigned to your project"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Award, {
                  className: "w-6 h-6 text-white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: "Guaranteed Results"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-300 text-sm",
                children: "Performance guarantees and ROI commitments"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center justify-center gap-4 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.DollarSign, {
                className: "w-5 h-5 text-green-500"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: "Free consultation and demo"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center justify-center gap-4 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Check, {
                className: "w-5 h-5 text-blue-500"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: "30-day free trial on all services"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center justify-center gap-4 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Star, {
                className: "w-5 h-5 text-yellow-500"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: "No setup fees or hidden costs"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mt-8 space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-2",
                children: "Contact Information"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "space-y-2 text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: "\uD83D\uDCF1 Mobile: +1 302 464 0950"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: "\u2709\uFE0F Email: kleber@ziontechgroup.com"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: "\uD83D\uDCCD Address: 364 E Main St STE 1008, Middletown DE 19709"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "tel:+13024640950",
                className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
                children: "Call Now"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "mailto:kleber@ziontechgroup.com",
                className: "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300",
                children: "Send Email"
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("footer", {
      className: "py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "text-gray-400",
          children: ["\xA9 2025 Zion Tech Group. All rights reserved. |", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: "https://ziontechgroup.com",
            className: "text-blue-400 hover:text-blue-300 ml-2",
            children: "Visit our website"
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AIPoweredServices2025);

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 459015:
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
/* harmony import */ var private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(252474);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/ai-powered-services-2025",
        pathname: "/ai-powered-services-2025",
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
    userland: private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/ai-powered-services-2025",
    config,
    userland: private_next_pages_ai_powered_services_2025_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ }),

/***/ 978494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2025AIPoweredServices: () => (/* binding */ innovative2025AIPoweredServices)
/* harmony export */ });
var innovative2025AIPoweredServices = [{
  id: 'ai-cybersecurity-intelligence-platform',
  name: 'AI Cybersecurity Intelligence Platform',
  tagline: 'Next-generation AI-powered threat detection and automated incident response',
  description: 'Advanced cybersecurity platform that uses machine learning to detect, analyze, and respond to security threats in real-time. Provides automated incident response, threat intelligence, and predictive security analytics to protect your organization from evolving cyber threats.',
  category: 'Cybersecurity & AI',
  pricing: {
    starter: 299,
    professional: 799,
    enterprise: 2499,
    currency: 'USD',
    trialDays: 30,
    setupTime: '24 hours'
  },
  features: ['AI-powered threat detection with 99.9% accuracy', 'Automated incident response and remediation', 'Real-time threat intelligence feeds', 'Behavioral analysis and anomaly detection', 'Automated security orchestration', 'Compliance monitoring and reporting', 'Threat hunting and forensics', 'Zero-day exploit detection', 'Automated vulnerability assessment', 'Security metrics and analytics dashboard'],
  benefits: ['Reduce security incident response time by 90%', 'Prevent 95% of cyber attacks before they occur', 'Automate 80% of routine security tasks', 'Achieve 99.9% threat detection accuracy', 'Reduce security operations costs by 60%', 'Maintain continuous compliance with SOC 2, ISO 27001'],
  targetAudience: ['Enterprise organizations', 'Financial institutions', 'Healthcare providers', 'Government agencies', 'Technology companies', 'Retail and e-commerce'],
  marketPosition: 'Competitive with CrowdStrike ($8.99/user), Palo Alto Networks ($50-200/user), and Darktrace ($50-100/user). Our advantage: Superior AI accuracy, automated response, and cost-effectiveness.',
  competitors: ['CrowdStrike, Palo Alto Networks, Darktrace, SentinelOne, Cylance'],
  techStack: ['TensorFlow, PyTorch, AWS, Azure, Kubernetes, Elasticsearch, Redis'],
  realImplementation: true,
  implementationDetails: 'Production-ready cybersecurity platform with real-time threat detection, automated response workflows, and comprehensive security analytics. Includes mobile app, API access, and enterprise-grade security.',
  roi: 'Average customer sees 400% ROI within 6 months through reduced security incidents, automated response, and compliance automation.',
  useCases: ['Enterprise threat detection and response', 'Compliance automation and reporting', 'Security operations center (SOC) automation', 'Incident response orchestration', 'Threat intelligence and analysis', 'Vulnerability management and assessment'],
  integrations: ['SIEM systems, EDR solutions, Cloud platforms, Security tools, ITSM systems'],
  support: '24/7 security operations center, dedicated security engineers, threat intelligence updates, and emergency response team.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, FedRAMP'],
  link: 'https://ziontechgroup.com/ai-cybersecurity',
  icon: '🛡️',
  color: 'from-blue-600 to-indigo-700',
  popular: true,
  launchDate: '2025-01-15',
  customers: 150,
  rating: 4.9,
  reviews: 89
}, {
  id: 'ai-devops-automation-suite',
  name: 'AI DevOps Automation Suite',
  tagline: 'Intelligent CI/CD pipeline optimization and automated deployment orchestration',
  description: 'AI-powered DevOps platform that automatically optimizes CI/CD pipelines, predicts deployment failures, and provides intelligent recommendations for improving development velocity and deployment reliability.',
  category: 'DevOps & Automation',
  pricing: {
    starter: 199,
    professional: 599,
    enterprise: 1799,
    currency: 'USD',
    trialDays: 21,
    setupTime: '48 hours'
  },
  features: ['AI-powered pipeline optimization', 'Predictive failure analysis', 'Automated testing and quality gates', 'Intelligent deployment strategies', 'Performance monitoring and alerting', 'Automated rollback mechanisms', 'Resource optimization recommendations', 'Security scanning integration', 'Compliance automation', 'Real-time deployment analytics'],
  benefits: ['Reduce deployment failures by 85%', 'Increase deployment frequency by 300%', 'Reduce mean time to recovery by 70%', 'Automate 90% of testing and deployment tasks', 'Optimize infrastructure costs by 40%', 'Improve developer productivity by 50%'],
  targetAudience: ['Development teams', 'DevOps engineers', 'Platform teams', 'Engineering managers', 'Startups and scale-ups', 'Enterprise IT departments'],
  marketPosition: 'Competitive with GitLab ($19-99/user), Jenkins (free + infrastructure), and CircleCI ($15-300/month). Our advantage: AI-powered optimization, predictive analytics, and automated quality gates.',
  competitors: ['GitLab, Jenkins, CircleCI, GitHub Actions, Azure DevOps, AWS CodePipeline'],
  techStack: ['Kubernetes, Docker, AWS, Azure, GCP, Terraform, Ansible, Prometheus'],
  realImplementation: true,
  implementationDetails: 'Full-featured DevOps automation platform with AI-powered pipeline optimization, automated testing, and intelligent deployment orchestration. Includes web dashboard, CLI tools, and comprehensive API.',
  roi: 'Average customer sees 350% ROI within 4 months through reduced deployment failures, increased velocity, and infrastructure cost optimization.',
  useCases: ['CI/CD pipeline automation', 'Automated testing and quality assurance', 'Deployment orchestration and monitoring', 'Infrastructure as code automation', 'Performance optimization and scaling', 'Security and compliance automation'],
  integrations: ['Git platforms, Cloud providers, Monitoring tools, Security scanners, ITSM systems'],
  support: '24/7 technical support, dedicated DevOps engineers, training programs, and community forums.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
  link: 'https://ziontechgroup.com/ai-devops-automation',
  icon: '⚡',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2025-02-01',
  customers: 200,
  rating: 4.8,
  reviews: 156
}, {
  id: 'ai-financial-analytics-trading-platform',
  name: 'AI Financial Analytics & Trading Platform',
  tagline: 'Intelligent market analysis and automated trading strategies powered by AI',
  description: 'Advanced financial analytics platform that uses machine learning to analyze market data, generate trading signals, and optimize investment portfolios. Provides real-time market insights, risk management, and automated trading capabilities.',
  category: 'Financial Technology & AI',
  pricing: {
    starter: 399,
    professional: 999,
    enterprise: 2999,
    currency: 'USD',
    trialDays: 14,
    setupTime: '72 hours'
  },
  features: ['AI-powered market analysis and predictions', 'Real-time trading signals and alerts', 'Portfolio optimization and rebalancing', 'Risk management and analytics', 'Automated trading strategies', 'Market sentiment analysis', 'Technical and fundamental analysis', 'Performance tracking and reporting', 'Multi-asset class support', 'Regulatory compliance tools'],
  benefits: ['Improve trading performance by 25-40%', 'Reduce portfolio risk by 30%', 'Automate 80% of trading decisions', 'Generate 15-25% annual returns', 'Reduce trading costs by 50%', 'Achieve better risk-adjusted returns'],
  targetAudience: ['Individual investors', 'Financial advisors', 'Hedge funds', 'Asset management firms', 'Trading desks', 'Institutional investors'],
  marketPosition: 'Competitive with Bloomberg Terminal ($24,000/year), TradingView ($14.95-29.95/month), and MetaTrader (free + commissions). Our advantage: AI-powered analysis, automated strategies, and cost-effective pricing.',
  competitors: ['Bloomberg Terminal, TradingView, MetaTrader, Interactive Brokers, TD Ameritrade'],
  techStack: ['Python, TensorFlow, PyTorch, AWS, Redis, PostgreSQL, React, Node.js'],
  realImplementation: true,
  implementationDetails: 'Production-ready financial analytics platform with real-time market data, AI-powered analysis, and automated trading capabilities. Includes web dashboard, mobile app, and API access.',
  roi: 'Average customer sees 200-300% ROI within 12 months through improved trading performance, reduced risk, and automated portfolio management.',
  useCases: ['Individual trading and investment', 'Portfolio management and optimization', 'Risk management and analytics', 'Algorithmic trading strategies', 'Market research and analysis', 'Compliance and reporting'],
  integrations: ['Brokerage platforms, Market data providers, Risk management systems, Accounting software'],
  support: '24/7 market support, dedicated financial advisors, training programs, and market analysis reports.',
  compliance: ['SEC compliance, FINRA regulations, GDPR, SOC 2 Type II'],
  link: 'https://ziontechgroup.com/ai-financial-analytics',
  icon: '📈',
  color: 'from-yellow-500 to-orange-600',
  popular: true,
  launchDate: '2025-01-20',
  customers: 75,
  rating: 4.7,
  reviews: 67
}, {
  id: 'ai-healthcare-analytics-telemedicine',
  name: 'AI Healthcare Analytics & Telemedicine Platform',
  tagline: 'Intelligent patient monitoring and AI-powered diagnostic assistance',
  description: 'Comprehensive healthcare platform that combines AI-powered analytics, telemedicine capabilities, and predictive health monitoring. Provides intelligent diagnostic assistance, patient risk assessment, and automated healthcare workflows.',
  category: 'Healthcare & AI',
  pricing: {
    starter: 499,
    professional: 1299,
    enterprise: 3499,
    currency: 'USD',
    trialDays: 30,
    setupTime: '1 week'
  },
  features: ['AI-powered diagnostic assistance', 'Predictive health analytics', 'Telemedicine and virtual consultations', 'Patient monitoring and alerts', 'Automated health assessments', 'Risk prediction and prevention', 'Electronic health records integration', 'Compliance and security tools', 'Mobile health applications', 'Healthcare analytics dashboard'],
  benefits: ['Improve diagnostic accuracy by 35%', 'Reduce patient wait times by 60%', 'Lower healthcare costs by 25%', 'Increase patient satisfaction by 40%', 'Automate 70% of routine healthcare tasks', 'Improve patient outcomes and prevention'],
  targetAudience: ['Healthcare providers', 'Hospitals and clinics', 'Telemedicine companies', 'Health insurance providers', 'Medical device companies', 'Healthcare administrators'],
  marketPosition: 'Competitive with Epic ($1,200/user/month), Cerner ($500-1,000/user/month), and Teladoc ($75-150/consultation). Our advantage: AI-powered diagnostics, cost-effectiveness, and modern telemedicine capabilities.',
  competitors: ['Epic, Cerner, Teladoc, Amwell, Doximity, HealthTap'],
  techStack: ['Python, TensorFlow, AWS, HIPAA-compliant infrastructure, React Native, Node.js'],
  realImplementation: true,
  implementationDetails: 'Full-featured healthcare platform with AI diagnostics, telemedicine capabilities, and comprehensive patient management. Includes web dashboard, mobile apps, and healthcare integrations.',
  roi: 'Average customer sees 300% ROI within 8 months through improved efficiency, reduced costs, and better patient outcomes.',
  useCases: ['Primary care and telemedicine', 'Specialist consultations', 'Patient monitoring and management', 'Diagnostic assistance and support', 'Healthcare analytics and reporting', 'Compliance and security management'],
  integrations: ['EHR systems, Medical devices, Insurance providers, Pharmacy systems, Lab systems'],
  support: '24/7 healthcare support, dedicated healthcare specialists, training programs, and compliance assistance.',
  compliance: ['HIPAA, HITECH, SOC 2 Type II, ISO 27001, FDA compliance'],
  link: 'https://ziontechgroup.com/ai-healthcare-analytics',
  icon: '🏥',
  color: 'from-red-500 to-pink-600',
  popular: true,
  launchDate: '2025-01-10',
  customers: 45,
  rating: 4.9,
  reviews: 123
}];

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(459015)));
module.exports = __webpack_exports__;

})();