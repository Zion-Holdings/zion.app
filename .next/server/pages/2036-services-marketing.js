"use strict";
(() => {
var exports = {};
exports.id = 841453;
exports.ids = [841453,890636];
exports.modules = {

/***/ 39419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_real_2036_innovative_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56229);
/* harmony import */ var _data_real_2036_it_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(140391);
/* harmony import */ var _data_real_2036_ai_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(139276);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








var ServicesMarketing2036 = () => {
  var allServices = [..._data_real_2036_innovative_services__WEBPACK_IMPORTED_MODULE_3__.real2036InnovativeServices, ..._data_real_2036_it_services__WEBPACK_IMPORTED_MODULE_4__.real2036ITServices, ..._data_real_2036_ai_services__WEBPACK_IMPORTED_MODULE_5__.real2036AIServices];
  var categories = [...new Set(allServices.map(service => service.category))];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "2036 Services Marketing - Zion Tech Group",
      description: "Comprehensive marketing information for our 2036 innovative services. Discover features, benefits, pricing, and market opportunities.",
      keywords: "AI services marketing, quantum computing solutions, IT services pricing, micro SAAS marketing, 2036 technology solutions"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: "min-h-screen flex items-center justify-center px-4 relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [...Array(25)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "absolute w-2 h-2 bg-cyan-400/30 rounded-full",
          animate: {
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3]
          },
          transition: {
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.5
          },
          style: {
            left: "".concat(Math.random() * 100, "%"),
            top: "".concat(Math.random() * 100, "%")
          }
        }, i))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "text-center max-w-6xl mx-auto relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h1, {
          className: "text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
          initial: {
            opacity: 0,
            y: 50
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 1
          },
          children: "2036 Services Marketing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p, {
          className: "text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed",
          initial: {
            opacity: 0,
            y: 50
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 1,
            delay: 0.2
          },
          children: "Comprehensive marketing information for our cutting-edge 2036 services. Discover features, benefits, pricing, and market opportunities that will transform your business."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "flex flex-col sm:flex-row gap-6 justify-center",
          initial: {
            opacity: 0,
            y: 50
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 1,
            delay: 0.4
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            href: "#services",
            className: "px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25",
            children: "Explore Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            href: "/contact",
            className: "px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105",
            children: "Get Started"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-20 px-4 bg-gradient-to-b from-black to-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "max-w-6xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h2, {
          className: "text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
          initial: {
            opacity: 0,
            y: 50
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
          children: "Market Opportunity & Competitive Landscape"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30",
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.1
            },
            viewport: {
              once: true
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl font-bold text-purple-400 mb-4",
              children: "$450B+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-xl text-gray-300",
              children: "Total Addressable Market"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 mt-2",
              children: "AI, Quantum, and IT Services"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-500/30",
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.2
            },
            viewport: {
              once: true
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl font-bold text-cyan-400 mb-4",
              children: "25%+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-xl text-gray-300",
              children: "Annual Growth Rate"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 mt-2",
              children: "Emerging Technology Sector"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30",
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.3
            },
            viewport: {
              once: true
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl font-bold text-green-400 mb-4",
              children: "10,000+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-xl text-gray-300",
              children: "Enterprise Customers"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 mt-2",
              children: "Global Market Reach"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30",
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.4
            },
            viewport: {
              once: true
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl font-bold text-orange-400 mb-4",
              children: "$2.5M+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-xl text-gray-300",
              children: "Average Customer Value"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 mt-2",
              children: "Enterprise Solutions"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50",
          initial: {
            opacity: 0,
            y: 50
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.5
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "text-2xl font-bold text-white mb-6 text-center",
            children: "Competitive Advantages"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl mb-3",
                children: "\uD83D\uDE80"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                className: "text-lg font-semibold text-cyan-400 mb-2",
                children: "First-Mover Advantage"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-400 text-sm",
                children: "Pioneering 2036 technology solutions before competitors"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl mb-3",
                children: "\uD83E\uDDE0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                className: "text-lg font-semibold text-purple-400 mb-2",
                children: "AI Innovation"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-400 text-sm",
                children: "Advanced AI consciousness and emotional intelligence"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-3xl mb-3",
                children: "\u269B\uFE0F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                className: "text-lg font-semibold text-green-400 mb-2",
                children: "Quantum Computing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-400 text-sm",
                children: "Quantum-AI hybrid solutions for complex problems"
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      id: "services",
      className: "py-20 px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "max-w-6xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h2, {
          className: "text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
          initial: {
            opacity: 0,
            y: 50
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
          children: "Service Portfolio & Marketing Details"
        }), categories.map((category, categoryIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.section, {
          className: "mb-20",
          initial: {
            opacity: 0,
            y: 50
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: categoryIndex * 0.1
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
            children: category
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
            children: allServices.filter(service => service.category === category).map((service, serviceIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              className: "group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105",
              initial: {
                opacity: 0,
                y: 50
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: serviceIndex * 0.1
              },
              viewport: {
                once: true
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20",
                    children: service.category
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "text-yellow-400",
                      children: "\u2605"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "text-sm text-gray-300",
                      children: service.rating
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                  className: "text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",
                  children: service.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "text-gray-400 text-sm mb-4",
                  children: service.tagline
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-gray-300 mb-6 leading-relaxed",
                children: service.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                  className: "text-white font-semibold mb-3",
                  children: "Key Features:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                  className: "space-y-2",
                  children: service.features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                    className: "flex items-center text-sm text-gray-400",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "w-2 h-2 bg-cyan-400 rounded-full mr-3"
                    }), feature]
                  }, index))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4 text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "text-2xl font-bold text-cyan-400 mb-1",
                      children: [service.price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        className: "text-sm text-gray-400",
                        children: service.period
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "text-sm text-gray-400",
                      children: "Pricing"
                    })]
                  }), service.marketSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "text-2xl font-bold text-green-400 mb-1",
                      children: service.marketSize
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "text-sm text-gray-400",
                      children: "Market Size"
                    })]
                  })]
                })
              }), service.benefits && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                  className: "text-white font-semibold mb-3",
                  children: "Benefits:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                  className: "space-y-2",
                  children: service.benefits.slice(0, 3).map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                    className: "flex items-center text-sm text-gray-400",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "w-2 h-2 bg-green-400 rounded-full mr-3"
                    }), benefit]
                  }, index))
                })]
              }), service.useCases && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                  className: "text-white font-semibold mb-3",
                  children: "Use Cases:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "flex flex-wrap gap-2",
                  children: service.useCases.slice(0, 4).map((useCase, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded border border-blue-700/50",
                    children: useCase
                  }, index))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: service.link,
                  className: "px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
                  children: "Learn More"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "text-right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "text-sm text-gray-400",
                    children: "Launch Date"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "text-sm text-cyan-400",
                    children: service.launchDate
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              })]
            }, service.id))
          })]
        }, category))]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-20 px-4 bg-gradient-to-b from-gray-900 to-black",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "max-w-6xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h2, {
          className: "text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
          initial: {
            opacity: 0,
            y: 50
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
          children: "Pricing Strategy & Market Positioning"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30",
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.1
            },
            viewport: {
              once: true
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDCB0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Premium Pricing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-400 text-sm leading-relaxed",
              children: "Positioned as premium solutions for enterprise customers, with pricing reflecting the advanced technology and value delivered."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-500/30",
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.2
            },
            viewport: {
              once: true
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83C\uDFAF"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Value-Based Pricing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-400 text-sm leading-relaxed",
              children: "Pricing based on the value delivered to customers, including cost savings, efficiency gains, and competitive advantages."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30",
            initial: {
              opacity: 0,
              y: 50
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: 0.3
            },
            viewport: {
              once: true
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDCC8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Market Penetration"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-400 text-sm leading-relaxed",
              children: "Strategic pricing to penetrate new markets and establish market leadership in emerging technology sectors."
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-20 px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "max-w-4xl mx-auto text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h2, {
          className: "text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
          initial: {
            opacity: 0,
            y: 50
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
          children: "Ready to Market Our 2036 Services?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p, {
          className: "text-xl text-gray-300 mb-12 max-w-2xl mx-auto",
          initial: {
            opacity: 0,
            y: 50
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.2
          },
          viewport: {
            once: true
          },
          children: "Partner with us to bring cutting-edge 2036 technology solutions to your market. Join our network of enterprise partners and resellers."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
          initial: {
            opacity: 0,
            y: 50
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.4
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-2xl font-bold text-cyan-400 mb-2",
              children: "\uD83D\uDCF1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-white font-semibold",
              children: "Mobile"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400",
              children: "+1 302 464 0950"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-2xl font-bold text-cyan-400 mb-2",
              children: "\u2709\uFE0F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-white font-semibold",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400",
              children: "kleber@ziontechgroup.com"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-2xl font-bold text-cyan-400 mb-2",
              children: "\uD83D\uDCCD"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-white font-semibold",
              children: "Address"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "text-gray-400",
              children: ["364 E Main St STE 1008", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), "Middletown DE 19709"]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "flex flex-col sm:flex-row gap-6 justify-center",
          initial: {
            opacity: 0,
            y: 50
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.6
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            href: "/contact",
            className: "px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25",
            children: "Partner With Us"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            href: "/quote",
            className: "px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105",
            children: "Get Marketing Kit"
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesMarketing2036);

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

/***/ 904427:
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
/* harmony import */ var private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39419);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2036-services-marketing",
        pathname: "/2036-services-marketing",
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
    userland: private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2036-services-marketing",
    config,
    userland: private_next_pages_2036_services_marketing_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(904427)));
module.exports = __webpack_exports__;

})();