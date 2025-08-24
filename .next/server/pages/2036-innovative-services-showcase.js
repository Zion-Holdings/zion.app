"use strict";
(() => {
var exports = {};
exports.id = 329806;
exports.ids = [329806,890636];
exports.modules = {

/***/ 33422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InnovativeServicesShowcase2036)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_SEO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7887);
/* harmony import */ var _data_real_2036_innovative_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56229);
/* harmony import */ var _data_real_2036_specialized_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200849);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var categories = ['All Services', 'AI & Data', 'Quantum Technology', 'Space Technology', 'IT Infrastructure', 'Cybersecurity', 'Edge Computing', 'Blockchain', 'Manufacturing', 'Healthcare AI', 'Emerging Technology', 'Biotechnology', 'Human-Computer Interaction', 'Metaverse', 'Autonomous Systems', 'Climate Technology'];
var categoryIcons = {
  'AI & Data': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Brain, {
    className: "w-5 h-5"
  }),
  'Quantum Technology': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Atom, {
    className: "w-5 h-5"
  }),
  'Space Technology': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Rocket, {
    className: "w-5 h-5"
  }),
  'IT Infrastructure': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Cpu, {
    className: "w-5 h-5"
  }),
  'Cybersecurity': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Shield, {
    className: "w-5 h-5"
  }),
  'Edge Computing': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Zap, {
    className: "w-5 h-5"
  }),
  'Blockchain': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Globe, {
    className: "w-5 h-5"
  }),
  'Manufacturing': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Building, {
    className: "w-5 h-5"
  }),
  'Healthcare AI': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Eye, {
    className: "w-5 h-5"
  }),
  'Emerging Technology': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Lightbulb, {
    className: "w-5 h-5"
  }),
  'Biotechnology': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Target, {
    className: "w-5 h-5"
  }),
  'Human-Computer Interaction': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Users, {
    className: "w-5 h-5"
  }),
  'Metaverse': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Globe, {
    className: "w-5 h-5"
  }),
  'Autonomous Systems': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Rocket, {
    className: "w-5 h-5"
  }),
  'Climate Technology': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Globe, {
    className: "w-5 h-5"
  })
};
function InnovativeServicesShowcase2036() {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All Services');
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name');
  var allServices = [..._data_real_2036_innovative_services__WEBPACK_IMPORTED_MODULE_3__.real2036InnovativeServices, ..._data_real_2036_specialized_services__WEBPACK_IMPORTED_MODULE_4__.real2036SpecializedServices];
  var filteredServices = allServices.filter(service => {
    var matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  var sortedServices = [...filteredServices].sort((a, b) => {
    var _b$marketSize, _a$marketSize;
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'marketSize':
        return parseFloat(((_b$marketSize = b.marketSize) === null || _b$marketSize === void 0 ? void 0 : _b$marketSize.replace('$', '').replace('B', '')) || '0') - parseFloat(((_a$marketSize = a.marketSize) === null || _a$marketSize === void 0 ? void 0 : _a$marketSize.replace('$', '').replace('B', '')) || '0');
      default:
        return a.name.localeCompare(b.name);
    }
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((_components_SEO__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: "2036 Innovative Services Showcase | Zion Tech Group",
      description: "Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology.",
      keywords: "2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "relative min-h-screen flex items-center justify-center px-4 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [...Array(20)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "absolute w-2 h-2 bg-cyan-400/30 rounded-full",
          style: {
            left: "".concat(Math.random() * 100, "%"),
            top: "".concat(Math.random() * 100, "%")
          },
          animate: {
            y: [0, -100, 0],
            opacity: [0.3, 1, 0.3]
          },
          transition: {
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }
        }, i))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "relative z-10 text-center max-w-6xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h1, {
          className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
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
          children: "2036 Innovative Services"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p, {
          className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed",
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
          children: "Experience the future of technology with our cutting-edge micro SAAS services, AI platforms, and quantum solutions. Transform your business with next-generation innovation."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",
            children: "Explore Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105",
            children: "Contact Us"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "max-w-6xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.6
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Phone, {
              className: "w-8 h-8 mx-auto mb-4 text-cyan-400"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Phone"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-gray-300",
              children: contactInfo.mobile
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Mail, {
              className: "w-8 h-8 mx-auto mb-4 text-cyan-400"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-gray-300",
              children: contactInfo.email
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.MapPin, {
              className: "w-8 h-8 mx-auto mb-4 text-cyan-400"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Address"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-gray-300",
              children: contactInfo.address
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-20 px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "text-center mb-16",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.6
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
            children: "Revolutionary Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Discover our comprehensive portfolio of innovative micro SAAS services, AI platforms, and cutting-edge technology solutions designed for the future."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "mb-12 space-y-6",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.6
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col lg:flex-row gap-4 justify-between items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "relative flex-1 max-w-md",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                type: "text",
                placeholder: "Search services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex gap-4 items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
                value: sortBy,
                onChange: e => setSortBy(e.target.value),
                className: "px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                  value: "name",
                  children: "Sort by Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                  value: "price",
                  children: "Sort by Price"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                  value: "rating",
                  children: "Sort by Rating"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                  value: "marketSize",
                  children: "Sort by Market Size"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex bg-gray-800/50 border border-gray-700 rounded-lg p-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onClick: () => setViewMode('grid'),
                  className: "p-2 rounded ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                    className: "w-5 h-5"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onClick: () => setViewMode('list'),
                  className: "p-2 rounded ".concat(viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.List, {
                    className: "w-5 h-5"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex flex-wrap gap-3 justify-center",
            children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
              onClick: () => setSelectedCategory(category),
              className: "px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ".concat(selectedCategory === category ? 'bg-cyan-500 text-black border-cyan-500' : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400'),
              children: [categoryIcons[category] || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Star, {
                className: "w-4 h-4"
              }), category]
            }, category))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            once: true
          },
          className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6',
          children: sortedServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            variants: itemVariants,
            className: "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ".concat(viewMode === 'list' ? 'flex gap-6' : ''),
            children: [viewMode === 'list' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl",
                children: categoryIcons[service.category] || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Star, {
                  className: "w-8 h-8"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex items-start justify-between mb-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                    className: "text-xl font-bold text-white mb-2",
                    children: service.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "text-cyan-400 font-semibold",
                      children: service.price
                    }), service.period && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "text-gray-400 text-sm",
                      children: service.period
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-cyan-400 font-medium mb-2",
                  children: service.tagline
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-gray-300 text-sm leading-relaxed",
                  children: service.description
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "space-y-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700",
                    children: service.category
                  }), service.rating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Star, {
                      className: "w-4 h-4 text-yellow-400 fill-current"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "text-sm text-gray-300",
                      children: service.rating
                    })]
                  })]
                }), service.marketSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "text-sm text-gray-400",
                  children: ["Market Size: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "text-green-400 font-medium",
                    children: service.marketSize
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                    className: "text-sm font-semibold text-gray-300 mb-2",
                    children: "Key Features:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "grid grid-cols-1 gap-1",
                    children: [service.features.slice(0, 4).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "flex items-center gap-2 text-sm text-gray-400",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "w-1.5 h-1.5 bg-cyan-400 rounded-full"
                      }), feature]
                    }, idx)), service.features.length > 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "text-xs text-gray-500 mt-1",
                      children: ["+", service.features.length - 4, " more features"]
                    })]
                  })]
                }), service.targetAudience && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                    className: "text-sm font-semibold text-gray-300 mb-2",
                    children: "Target Audience:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "text-sm text-gray-400",
                    children: service.targetAudience
                  })]
                }), service.competitiveAdvantage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                    className: "text-sm font-semibold text-gray-300 mb-2",
                    children: "Competitive Advantage:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "text-sm text-gray-400",
                    children: service.competitiveAdvantage
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "mt-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                    href: service.link,
                    className: "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",
                    children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ArrowRight, {
                      className: "w-4 h-4"
                    })]
                  })
                })]
              })]
            })]
          }, service.id))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "mt-12 text-center text-gray-400",
          initial: {
            opacity: 0
          },
          whileInView: {
            opacity: 1
          },
          transition: {
            duration: 0.6
          },
          viewport: {
            once: true
          },
          children: ["Showing ", sortedServices.length, " of ", allServices.length, " services"]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "max-w-4xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.6
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8 max-w-2xl mx-auto",
            children: "Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              href: "mailto:".concat(contactInfo.email),
              className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",
              children: "Get Started Today"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              href: "tel:".concat(contactInfo.mobile),
              className: "px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105",
              children: "Call Us Now"
            })]
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ 200849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   real2036SpecializedServices: () => (/* binding */ real2036SpecializedServices)
/* harmony export */ });
var real2036SpecializedServices = [
// Neuromorphic Computing Platform
{
  id: 'neuromorphic-computing-platform',
  name: 'Neuromorphic Computing Platform',
  tagline: 'Brain-inspired computing for next-generation AI applications',
  description: 'Revolutionary platform that leverages neuromorphic computing architecture to process information like the human brain, enabling ultra-efficient AI applications and edge computing.',
  category: 'Emerging Technology',
  price: '$3,999',
  period: '/month',
  features: ['Brain-inspired neural architecture', 'Ultra-low power consumption', 'Real-time learning capabilities', 'Adaptive processing algorithms', 'Edge computing optimization', 'Custom neural models', 'Performance benchmarking', 'Expert consultation'],
  link: 'https://ziontechgroup.com/services/neuromorphic-computing-platform',
  launchDate: '2036-04-01',
  rating: 4.9,
  marketSize: '$1.8B',
  targetAudience: 'Research institutions, AI companies, Semiconductor firms',
  competitiveAdvantage: 'Brain-inspired architecture, Ultra-efficiency, Real-time learning',
  integration: ['AI frameworks', 'Edge devices', 'IoT platforms', 'Cloud services'],
  useCases: ['Edge AI processing', 'Autonomous systems', 'Cognitive computing', 'Energy-efficient AI'],
  technology: ['Neuromorphic chips', 'Spiking neural networks', 'Analog computing', 'Bio-inspired algorithms']
},
// Synthetic Biology Platform
{
  id: 'synthetic-biology-platform',
  name: 'Synthetic Biology Platform',
  tagline: 'Design and engineer biological systems with AI',
  description: 'Advanced platform that combines synthetic biology with artificial intelligence to design, engineer, and optimize biological systems for various applications.',
  category: 'Biotechnology',
  price: '$5,999',
  period: '/month',
  features: ['AI-powered DNA design', 'Biological system simulation', 'Automated lab protocols', 'Genetic circuit optimization', 'Safety and compliance tools', 'Real-time monitoring', 'Custom organism design', 'Expert consultation'],
  link: 'https://ziontechgroup.com/services/synthetic-biology-platform',
  launchDate: '2036-04-05',
  rating: 4.8,
  marketSize: '$3.2B',
  targetAudience: 'Pharmaceutical companies, Biotech firms, Research institutions',
  competitiveAdvantage: 'AI integration, Automated protocols, Safety focus',
  integration: ['Lab automation systems', 'DNA synthesis platforms', 'Sequencing services', 'Cloud platforms'],
  useCases: ['Drug discovery', 'Biofuel production', 'Environmental remediation', 'Agricultural optimization'],
  technology: ['CRISPR', 'Gene editing', 'DNA synthesis', 'Bioinformatics']
},
// Quantum Internet Protocol Suite
{
  id: 'quantum-internet-protocol-suite',
  name: 'Quantum Internet Protocol Suite',
  tagline: 'Next-generation internet protocols for quantum networks',
  description: 'Comprehensive suite of protocols and standards for building and operating quantum internet networks, enabling secure quantum communication worldwide.',
  category: 'Quantum Technology',
  price: '$2,999',
  period: '/month',
  features: ['Quantum network protocols', 'Interoperability standards', 'Security frameworks', 'Network management tools', 'Performance optimization', 'Compliance certification', 'Custom protocol development', 'Expert consultation'],
  link: 'https://ziontechgroup.com/services/quantum-internet-protocol-suite',
  launchDate: '2036-04-10',
  rating: 4.9,
  marketSize: '$2.1B',
  targetAudience: 'Internet service providers, Government agencies, Research institutions',
  competitiveAdvantage: 'Quantum protocols, Interoperability, Security focus',
  integration: ['Quantum networks', 'Internet infrastructure', 'Security systems', 'Cloud platforms'],
  useCases: ['Quantum networks', 'Secure communications', 'Internet infrastructure', 'Government networks'],
  technology: ['Quantum protocols', 'Network standards', 'Security frameworks', 'Interoperability']
},
// Brain-Computer Interface Platform
{
  id: 'brain-computer-interface-platform',
  name: 'Brain-Computer Interface Platform',
  tagline: 'Direct neural interface for human-computer interaction',
  description: 'Advanced platform that enables direct communication between the human brain and computers, opening new possibilities for accessibility and human augmentation.',
  category: 'Human-Computer Interaction',
  price: '$4,999',
  period: '/month',
  features: ['Neural signal processing', 'Real-time brain monitoring', 'Custom interface design', 'Safety and compliance', 'Performance optimization', 'User training tools', 'Custom applications', 'Expert consultation'],
  link: 'https://ziontechgroup.com/services/brain-computer-interface-platform',
  launchDate: '2036-04-15',
  rating: 4.7,
  marketSize: '$2.8B',
  targetAudience: 'Healthcare providers, Research institutions, Accessibility companies',
  competitiveAdvantage: 'Direct neural interface, Real-time processing, Safety focus',
  integration: ['Medical devices', 'Accessibility tools', 'Gaming platforms', 'Research systems'],
  useCases: ['Assistive technology', 'Medical research', 'Gaming and entertainment', 'Human augmentation'],
  technology: ['EEG', 'Neural implants', 'Signal processing', 'Machine learning']
},
// Metaverse Development Studio Pro
{
  id: 'metaverse-development-studio-pro',
  name: 'Metaverse Development Studio Pro',
  tagline: 'Professional metaverse creation and management platform',
  description: 'Comprehensive platform for designing, building, and managing immersive metaverse experiences with advanced 3D graphics, AI, and blockchain integration.',
  category: 'Metaverse',
  price: '$1,999',
  period: '/month',
  features: ['3D world building tools', 'AI-powered NPCs', 'Blockchain integration', 'Multi-user environments', 'VR/AR support', 'Performance optimization', 'Custom development', 'Expert consultation'],
  link: 'https://ziontechgroup.com/services/metaverse-development-studio-pro',
  launchDate: '2036-04-20',
  rating: 4.6,
  marketSize: '$8.9B',
  targetAudience: 'Gaming companies, Real estate firms, Educational institutions',
  competitiveAdvantage: '3D tools, AI integration, Blockchain support',
  integration: ['VR headsets', 'AR devices', 'Blockchain platforms', '3D engines'],
  useCases: ['Virtual worlds', 'Digital real estate', 'Educational experiences', 'Social platforms'],
  technology: ['3D graphics', 'Virtual reality', 'Augmented reality', 'Blockchain']
},
// Autonomous Vehicle AI Platform
{
  id: 'autonomous-vehicle-ai-platform',
  name: 'Autonomous Vehicle AI Platform',
  tagline: 'Advanced AI for self-driving vehicles and transportation',
  description: 'Comprehensive AI platform for autonomous vehicles, providing perception, decision-making, and control systems for safe and efficient self-driving operations.',
  category: 'Autonomous Systems',
  price: '$3,999',
  period: '/month',
  features: ['Computer vision systems', 'Sensor fusion algorithms', 'Path planning and navigation', 'Safety and redundancy', 'Real-time processing', 'Performance optimization', 'Custom vehicle integration', 'Expert consultation'],
  link: 'https://ziontechgroup.com/services/autonomous-vehicle-ai-platform',
  launchDate: '2036-04-25',
  rating: 4.8,
  marketSize: '$12.4B',
  targetAudience: 'Automotive companies, Transportation firms, Logistics providers',
  competitiveAdvantage: 'Advanced AI, Safety focus, Real-time processing',
  integration: ['Vehicle systems', 'Sensor arrays', 'Navigation systems', 'Cloud platforms'],
  useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery robots', 'Public transportation'],
  technology: ['Computer vision', 'Machine learning', 'Sensor fusion', 'Control systems']
},
// Quantum Materials Discovery Platform
{
  id: 'quantum-materials-discovery-platform',
  name: 'Quantum Materials Discovery Platform',
  tagline: 'AI-powered discovery of next-generation materials',
  description: 'Revolutionary platform that uses quantum computing and AI to discover and design new materials with extraordinary properties for various applications.',
  category: 'Quantum Technology',
  price: '$4,999',
  period: '/month',
  features: ['Quantum material simulation', 'AI-powered discovery', 'Property prediction', 'Synthesis optimization', 'Performance testing', 'Custom material design', 'Expert consultation', 'Research collaboration'],
  link: 'https://ziontechgroup.com/services/quantum-materials-discovery-platform',
  launchDate: '2036-04-30',
  rating: 4.9,
  marketSize: '$1.6B',
  targetAudience: 'Materials companies, Research institutions, Manufacturing firms',
  competitiveAdvantage: 'Quantum simulation, AI discovery, Custom design',
  integration: ['Quantum computers', 'AI platforms', 'Lab systems', 'Research databases'],
  useCases: ['New materials', 'Energy storage', 'Electronics', 'Manufacturing'],
  technology: ['Quantum computing', 'Machine learning', 'Materials science', 'Simulation']
},
// AI-Powered Climate Modeling Platform
{
  id: 'ai-climate-modeling-platform',
  name: 'AI Climate Modeling Platform',
  tagline: 'Advanced climate prediction and analysis with AI',
  description: 'Comprehensive platform that uses artificial intelligence to model and predict climate patterns, enabling better understanding and response to climate change.',
  category: 'Climate Technology',
  price: '$2,499',
  period: '/month',
  features: ['AI climate models', 'Real-time data analysis', 'Predictive modeling', 'Scenario simulation', 'Data visualization', 'Custom analysis', 'Expert consultation', 'Research collaboration'],
  link: 'https://ziontechgroup.com/services/ai-climate-modeling-platform',
  launchDate: '2036-05-05',
  rating: 4.7,
  marketSize: '$3.8B',
  targetAudience: 'Government agencies, Research institutions, Environmental organizations',
  competitiveAdvantage: 'AI modeling, Real-time analysis, Predictive capabilities',
  integration: ['Climate sensors', 'Satellite data', 'Weather services', 'Research databases'],
  useCases: ['Climate prediction', 'Policy planning', 'Environmental research', 'Risk assessment'],
  technology: ['Machine learning', 'Climate models', 'Data analysis', 'Simulation']
},
// Quantum Neural Network Platform
{
  id: 'quantum-neural-network-platform',
  name: 'Quantum Neural Network Platform',
  tagline: 'Quantum-enhanced neural networks for advanced AI',
  description: 'Revolutionary platform that combines quantum computing with neural networks to create more powerful and efficient artificial intelligence systems.',
  category: 'Quantum Technology',
  price: '$3,499',
  period: '/month',
  features: ['Quantum neural networks', 'Hybrid quantum-classical AI', 'Advanced optimization', 'Performance benchmarking', 'Custom model development', 'Expert consultation', 'Research collaboration', 'Training and support'],
  link: 'https://ziontechgroup.com/services/quantum-neural-network-platform',
  launchDate: '2036-05-10',
  rating: 4.8,
  marketSize: '$2.2B',
  targetAudience: 'AI companies, Research institutions, Technology firms',
  competitiveAdvantage: 'Quantum enhancement, Advanced AI, Performance optimization',
  integration: ['Quantum computers', 'AI frameworks', 'Cloud platforms', 'Research tools'],
  useCases: ['Advanced AI', 'Research applications', 'Commercial AI', 'Scientific computing'],
  technology: ['Quantum computing', 'Neural networks', 'Machine learning', 'Optimization']
},
// Space Tourism Platform
{
  id: 'space-tourism-platform',
  name: 'Space Tourism Platform',
  tagline: 'Comprehensive platform for space tourism operations',
  description: 'Advanced platform that manages all aspects of space tourism, from booking and training to flight operations and safety management.',
  category: 'Space Technology',
  price: '$6,999',
  period: '/month',
  features: ['Tourism management system', 'Safety protocols', 'Training programs', 'Flight operations', 'Customer management', 'Compliance tools', 'Custom development', 'Expert consultation'],
  link: 'https://ziontechgroup.com/services/space-tourism-platform',
  launchDate: '2036-05-15',
  rating: 4.6,
  marketSize: '$1.2B',
  targetAudience: 'Space tourism companies, Aerospace firms, Travel agencies',
  competitiveAdvantage: 'Space expertise, Safety focus, Comprehensive management',
  integration: ['Spacecraft systems', 'Training facilities', 'Booking systems', 'Safety systems'],
  useCases: ['Space tourism', 'Training programs', 'Safety management', 'Customer experience'],
  technology: ['Space systems', 'Safety protocols', 'Training technology', 'Customer management']
}];

/***/ }),

/***/ 278261:
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
/* harmony import */ var private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33422);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2036-innovative-services-showcase",
        pathname: "/2036-innovative-services-showcase",
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
    userland: private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2036-innovative-services-showcase",
    config,
    userland: private_next_pages_2036_innovative_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(278261)));
module.exports = __webpack_exports__;

})();