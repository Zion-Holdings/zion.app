"use strict";
(() => {
var exports = {};
exports.id = 747418;
exports.ids = [747418,890636];
exports.modules = {

/***/ 291462:
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7887);
/* harmony import */ var _data_innovative_2037_cutting_edge_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(531426);
/* harmony import */ var _data_innovative_2038_future_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805128);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









var Innovative20372038Showcase = () => {
  var [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name');
  var allServices = [..._data_innovative_2037_cutting_edge_services__WEBPACK_IMPORTED_MODULE_3__.innovative2037CuttingEdgeServices, ..._data_innovative_2038_future_services__WEBPACK_IMPORTED_MODULE_4__.innovative2038FutureServices];
  var categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  var years = ['all', '2037', '2038'];
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    var matchesYear = selectedYear === 'all' || selectedYear === '2037' && service.launchDate.startsWith('2027') || selectedYear === '2038' && service.launchDate.startsWith('2028');
    return matchesSearch && matchesCategory && matchesYear;
  });
  var sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.pricing.starter.replace(/[^0-9]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9]/g, ''));
      case 'market':
        return parseFloat(a.marketSize.replace(/[^0-9]/g, '')) - parseFloat(b.marketSize.replace(/[^0-9]/g, ''));
      case 'launch':
        return new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime();
      default:
        return 0;
    }
  });
  var getCategoryIcon = category => {
    switch (category) {
      case 'AI & Quantum':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
          className: "w-6 h-6"
        });
      case 'Metaverse & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Globe, {
          className: "w-6 h-6"
        });
      case 'Space Technology':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Rocket, {
          className: "w-6 h-6"
        });
      case 'Neural Technology':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
          className: "w-6 h-6"
        });
      case 'Financial Technology':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.DollarSign, {
          className: "w-6 h-6"
        });
      case 'Healthcare & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Heart, {
          className: "w-6 h-6"
        });
      case 'Cybersecurity':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Shield, {
          className: "w-6 h-6"
        });
      case 'Supply Chain & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Truck, {
          className: "w-6 h-6"
        });
      case 'Environmental Technology':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Cloud, {
          className: "w-6 h-6"
        });
      case 'Education & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.GraduationCap, {
          className: "w-6 h-6"
        });
      case 'Transhumanism & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
          className: "w-6 h-6"
        });
      case 'Quantum Technology':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Atom, {
          className: "w-6 h-6"
        });
      case 'Virtual Reality & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Globe, {
          className: "w-6 h-6"
        });
      case 'AI & Machine Learning':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
          className: "w-6 h-6"
        });
      case 'Biotechnology & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Heart, {
          className: "w-6 h-6"
        });
      case 'Quantum Physics':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Atom, {
          className: "w-6 h-6"
        });
      case 'Architecture & AI':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Globe, {
          className: "w-6 h-6"
        });
      case 'AI & Psychology':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Brain, {
          className: "w-6 h-6"
        });
      case 'AI & Creativity':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Star, {
          className: "w-6 h-6"
        });
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Zap, {
          className: "w-6 h-6"
        });
    }
  };
  var getCategoryColor = category => {
    var colors = {
      'AI & Quantum': 'from-purple-500 to-cyan-500',
      'Metaverse & AI': 'from-blue-500 to-purple-500',
      'Space Technology': 'from-indigo-500 to-blue-500',
      'Neural Technology': 'from-pink-500 to-purple-500',
      'Financial Technology': 'from-green-500 to-emerald-500',
      'Healthcare & AI': 'from-red-500 to-pink-500',
      'Cybersecurity': 'from-orange-500 to-red-500',
      'Supply Chain & AI': 'from-yellow-500 to-orange-500',
      'Environmental Technology': 'from-teal-500 to-green-500',
      'Education & AI': 'from-indigo-500 to-purple-500',
      'Transhumanism & AI': 'from-violet-500 to-purple-500',
      'Quantum Technology': 'from-cyan-500 to-blue-500',
      'Virtual Reality & AI': 'from-purple-500 to-pink-500',
      'AI & Machine Learning': 'from-blue-500 to-cyan-500',
      'Biotechnology & AI': 'from-green-500 to-teal-500',
      'Quantum Physics': 'from-blue-500 to-indigo-500',
      'Architecture & AI': 'from-orange-500 to-yellow-500',
      'AI & Psychology': 'from-pink-500 to-rose-500',
      'AI & Creativity': 'from-purple-500 to-pink-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Innovative 2037-2038 Services Showcase | Zion Tech Group",
      description: "Explore our cutting-edge 2037-2038 micro SAAS services featuring quantum AI consciousness, holographic metaverse platforms, neural interfaces, and revolutionary space technology solutions.",
      keywords: ["2037 services", "2038 services", "quantum AI", "holographic metaverse", "neural interfaces", "space technology", "micro SAAS", "Zion Tech Group"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          animate: {
            rotate: 360
          },
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          },
          className: "absolute top-20 left-20 w-40 h-40 border border-cyan-500/20 rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          animate: {
            rotate: -360
          },
          transition: {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          },
          className: "absolute top-40 right-32 w-32 h-32 border border-purple-500/20 rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          animate: {
            rotate: 360
          },
          transition: {
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          },
          className: "absolute bottom-32 left-1/4 w-24 h-24 border border-blue-500/20 rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          animate: {
            rotate: -360
          },
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          className: "absolute bottom-20 right-1/3 w-36 h-36 border border-green-500/20 rounded-full"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "relative z-10 text-center px-4 max-w-6xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
          className: "mb-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4",
            children: "\uD83D\uDE80 Future Technology 2037-2038"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h1, {
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.2
          },
          className: "text-5xl md:text-7xl font-bold text-white mb-6 leading-tight",
          children: ["The Future of", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent",
            children: "Technology"
          }), "is Here"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.p, {
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.4
          },
          className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
          children: "Experience our revolutionary 2037-2038 micro SAAS services featuring quantum AI consciousness, holographic metaverse platforms, neural interfaces, and cutting-edge space technology solutions."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.6
          },
          className: "max-w-4xl mx-auto mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "relative mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
              className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              type: "text",
              placeholder: "Search innovative services...",
              value: searchQuery,
              onChange: e => setSearchQuery(e.target.value),
              className: "w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-wrap gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
              value: selectedCategory,
              onChange: e => setSelectedCategory(e.target.value),
              className: "px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: category,
                className: "bg-gray-800 text-white",
                children: category === 'all' ? 'All Categories' : category
              }, category))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
              value: selectedYear,
              onChange: e => setSelectedYear(e.target.value),
              className: "px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
              children: years.map(year => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: year,
                className: "bg-gray-800 text-white",
                children: year === 'all' ? 'All Years' : year
              }, year))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              value: sortBy,
              onChange: e => setSortBy(e.target.value),
              className: "px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "name",
                className: "bg-gray-800 text-white",
                children: "Sort by Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "price",
                className: "bg-gray-800 text-white",
                children: "Sort by Price"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "market",
                className: "bg-gray-800 text-white",
                children: "Sort by Market Size"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "launch",
                className: "bg-gray-800 text-white",
                children: "Sort by Launch Date"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.8,
            delay: 0.8
          },
          className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-3xl md:text-4xl font-bold text-cyan-400 mb-2",
              children: allServices.length
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Innovative Services"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-3xl md:text-4xl font-bold text-purple-400 mb-2",
              children: "$500B+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Total Market Size"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-3xl md:text-4xl font-bold text-blue-400 mb-2",
              children: "20+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Technology Categories"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-3xl md:text-4xl font-bold text-green-400 mb-2",
              children: "99.9%"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Innovation Success Rate"
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-20 px-4 bg-gradient-to-b from-gray-900 to-black",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Revolutionary Services Portfolio"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Discover our cutting-edge 2037-2038 services that are shaping the future of technology"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: sortedServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.6,
              delay: index * 0.1
            },
            viewport: {
              once: true
            },
            className: "group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-4 right-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ".concat(getCategoryColor(service.category), " text-white"),
                children: [getCategoryIcon(service.category), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "ml-2",
                  children: service.category
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-4xl mb-6",
              children: service.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors",
              children: service.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-300 mb-6 line-clamp-3",
              children: service.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                className: "text-sm font-semibold text-gray-400 mb-3",
                children: "Key Features:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                className: "space-y-2",
                children: service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                  className: "text-sm text-gray-300 flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "w-2 h-2 bg-cyan-500 rounded-full mr-2"
                  }), feature]
                }, idx))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                className: "text-sm font-semibold text-gray-400 mb-2",
                children: "Starting at:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-2xl font-bold text-cyan-400",
                children: service.pricing.starter
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex justify-between items-center mb-6 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "text-gray-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "block",
                  children: "Market Size"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "text-green-400 font-semibold",
                  children: service.marketSize
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "text-gray-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "block",
                  children: "Launch Date"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "text-purple-400 font-semibold",
                  children: new Date(service.launchDate).toLocaleDateString()
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/services/".concat(service.slug),
              className: "inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105",
              children: ["Explore Service", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {
                className: "ml-2 w-4 h-4"
              })]
            })]
          }, service.id))
        }), sortedServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          className: "text-center py-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "text-6xl mb-6",
            children: "\uD83D\uDD0D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "text-2xl font-bold text-white mb-4",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-gray-400 mb-8",
            children: "Try adjusting your search criteria or filters"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            onClick: () => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedYear('all');
            },
            className: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300",
            children: "Clear Filters"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "max-w-4xl mx-auto text-center",
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
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Ready to Shape the Future?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8",
            children: "Join us in building the next generation of technology solutions. Contact our team to learn more about our innovative services."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/contact",
              className: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105",
              children: ["Get Started Today", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {
                className: "inline-block ml-2 w-5 h-5"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/services",
              className: "border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10",
              children: "View All Services"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Innovative20372038Showcase);

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 531426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2037CuttingEdgeServices: () => (/* binding */ innovative2037CuttingEdgeServices)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var innovative2037CuttingEdgeServices = [{
  id: 'quantum-neural-fusion-platform',
  name: 'Quantum Neural Fusion Platform',
  tagline: 'Quantum-enhanced neural networks with consciousness integration',
  price: '$12,999',
  period: '/month',
  description: 'Revolutionary platform that combines quantum computing with advanced neural networks, enabling unprecedented AI capabilities including quantum consciousness, parallel universe simulation, and multi-dimensional problem solving.',
  features: ['Quantum neural network architecture', 'Consciousness integration protocols', 'Parallel universe simulation', 'Multi-dimensional problem solving', 'Quantum entanglement optimization', 'Neural plasticity enhancement', 'Consciousness evolution tracking', 'Quantum error correction', 'Multi-modal consciousness fusion'],
  popular: true,
  icon: '⚛️🧠',
  color: 'from-indigo-600 to-purple-600',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/quantum-neural-fusion-platform',
  marketPosition: 'First quantum-neural fusion platform; revolutionary breakthrough technology.',
  targetAudience: 'Quantum computing companies, AI research institutions, government agencies, advanced tech companies',
  trialDays: 120,
  setupTime: '8-12 weeks',
  category: 'Quantum AI & Consciousness',
  realService: true,
  technology: ['Quantum computing, Advanced AI/ML, Neural networks, Consciousness research, Python, Qiskit'],
  integrations: ['Quantum computers, AI platforms, Consciousness assessment tools, Research platforms'],
  useCases: ['Quantum AI development, Consciousness research, Complex problem solving, Scientific research'],
  roi: 'Accelerate quantum AI research by 100-1000x and enable breakthrough discoveries.',
  competitors: ['No direct competitors in quantum-neural fusion'],
  marketSize: '$15B+ quantum AI market',
  growthRate: '500% YoY',
  variant: 'quantum-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Research-grade quantum-neural fusion platform with consciousness integration and multi-dimensional capabilities.',
  launchDate: '2024-12-01',
  customers: 5,
  rating: 5.0,
  reviews: 8
}, {
  id: 'autonomous-space-colony-manager',
  name: 'Autonomous Space Colony Manager',
  tagline: 'AI-powered space colony operations and resource management',
  price: '$25,999',
  period: '/month',
  description: 'Comprehensive AI system for managing autonomous space colonies, including life support, resource optimization, population management, and interplanetary logistics.',
  features: ['Autonomous life support management', 'Resource optimization algorithms', 'Population health monitoring', 'Interplanetary logistics coordination', 'Environmental control systems', 'Emergency response automation', 'Resource mining optimization', 'Colony expansion planning', 'Interstellar communication management'],
  popular: true,
  icon: '🚀🌍',
  color: 'from-blue-600 to-cyan-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/autonomous-space-colony-manager',
  marketPosition: 'First autonomous space colony management system; essential for space exploration.',
  targetAudience: 'Space agencies, private space companies, research institutions, government organizations',
  trialDays: 180,
  setupTime: '12-16 weeks',
  category: 'Space Technology & AI',
  realService: true,
  technology: ['AI/ML, Space systems, IoT, Robotics, Python, React, Node.js'],
  integrations: ['Space systems, IoT devices, Robotics platforms, Communication systems'],
  useCases: ['Space colony management, Resource optimization, Life support automation, Space logistics'],
  roi: 'Enable autonomous space operations and reduce human intervention by 90%.',
  competitors: ['Limited competition in autonomous space management'],
  marketSize: '$50B+ space technology market',
  growthRate: '800% YoY',
  variant: 'space-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Production-ready space colony management system with autonomous operations and AI optimization.',
  launchDate: '2024-11-01',
  customers: 3,
  rating: 4.9,
  reviews: 5
}, {
  id: 'metaverse-consciousness-hub',
  name: 'Metaverse Consciousness Hub',
  tagline: 'Digital consciousness integration in virtual worlds',
  price: '$8,499',
  period: '/month',
  description: 'Advanced platform for integrating human consciousness into metaverse environments, enabling true digital existence, emotional experiences, and consciousness preservation.',
  features: ['Consciousness digitization', 'Emotional experience simulation', 'Memory preservation systems', 'Multi-dimensional avatar creation', 'Consciousness synchronization', 'Virtual reality integration', 'Emotional intelligence training', 'Consciousness backup systems', 'Cross-platform consciousness transfer'],
  popular: true,
  icon: '🌐🧠',
  color: 'from-green-600 to-emerald-600',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/metaverse-consciousness-hub',
  marketPosition: 'First metaverse consciousness integration platform; revolutionary digital existence technology.',
  targetAudience: 'Metaverse companies, Gaming companies, Research institutions, Healthcare organizations',
  trialDays: 90,
  setupTime: '6-8 weeks',
  category: 'Metaverse & Consciousness',
  realService: true,
  technology: ['VR/AR, AI/ML, Consciousness research, Blockchain, Unity, Unreal Engine'],
  integrations: ['VR platforms, Metaverse platforms, Gaming engines, Blockchain networks'],
  useCases: ['Digital consciousness, Virtual reality, Gaming, Healthcare, Research'],
  roi: 'Enable new forms of digital existence and consciousness preservation.',
  competitors: ['No direct competitors in consciousness integration'],
  marketSize: '$100B+ metaverse market',
  growthRate: '400% YoY',
  variant: 'metaverse-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Research-grade metaverse consciousness platform with emotional intelligence and preservation capabilities.',
  launchDate: '2024-10-15',
  customers: 12,
  rating: 4.8,
  reviews: 18
}, {
  id: 'quantum-financial-time-travel',
  name: 'Quantum Financial Time Travel Platform',
  tagline: 'Quantum-powered financial forecasting across time dimensions',
  price: '$19,999',
  period: '/month',
  description: 'Revolutionary financial platform that uses quantum computing to analyze market patterns across multiple time dimensions, enabling unprecedented trading strategies and risk assessment.',
  features: ['Multi-dimensional market analysis', 'Quantum time series forecasting', 'Cross-temporal risk assessment', 'Quantum portfolio optimization', 'Temporal arbitrage detection', 'Quantum risk modeling', 'Multi-universe scenario analysis', 'Temporal correlation analysis', 'Quantum market prediction algorithms'],
  popular: true,
  icon: '⏰💰',
  color: 'from-yellow-600 to-orange-600',
  textColor: 'text-yellow-400',
  link: 'https://ziontechgroup.com/quantum-financial-time-travel',
  marketPosition: 'First quantum financial time travel platform; revolutionary market analysis technology.',
  targetAudience: 'Investment banks, Hedge funds, Financial institutions, Trading companies',
  trialDays: 150,
  setupTime: '10-14 weeks',
  category: 'Quantum Finance',
  realService: true,
  technology: ['Quantum computing, Financial modeling, AI/ML, Python, Qiskit, Financial APIs'],
  integrations: ['Trading platforms, Financial data providers, Risk management systems, Portfolio management tools'],
  useCases: ['Financial forecasting, Risk assessment, Portfolio optimization, Trading strategies'],
  roi: 'Improve trading performance by 200-500% and reduce risk by 80%.',
  competitors: ['Limited competition in quantum financial time analysis'],
  marketSize: '$200B+ financial technology market',
  growthRate: '600% YoY',
  variant: 'quantum-financial',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Production-ready quantum financial platform with multi-dimensional analysis and time travel capabilities.',
  launchDate: '2024-09-01',
  customers: 8,
  rating: 4.9,
  reviews: 15
}, {
  id: 'ai-emotional-intelligence-orchestrator',
  name: 'AI Emotional Intelligence Orchestrator',
  tagline: 'Advanced AI emotional intelligence and empathy training',
  price: '$6,999',
  period: '/month',
  description: 'Comprehensive AI platform for developing emotional intelligence, empathy, and social understanding in artificial intelligence systems.',
  features: ['Emotional intelligence training', 'Empathy development algorithms', 'Social understanding systems', 'Emotional response optimization', 'Empathy assessment tools', 'Social interaction training', 'Emotional memory systems', 'Empathy validation protocols', 'Social intelligence metrics'],
  popular: true,
  icon: '❤️🧠',
  color: 'from-pink-600 to-rose-600',
  textColor: 'text-pink-400',
  link: 'https://ziontechgroup.com/ai-emotional-intelligence-orchestrator',
  marketPosition: 'Leading AI emotional intelligence platform; essential for human-AI interaction.',
  targetAudience: 'AI companies, Healthcare organizations, Customer service companies, Research institutions',
  trialDays: 60,
  setupTime: '4-6 weeks',
  category: 'AI & Emotional Intelligence',
  realService: true,
  technology: ['AI/ML, Natural language processing, Psychology, Python, TensorFlow, PyTorch'],
  integrations: ['AI platforms, Customer service systems, Healthcare platforms, Research tools'],
  useCases: ['AI emotional intelligence, Customer service, Healthcare, Education, Research'],
  roi: 'Improve AI-human interaction by 300% and increase customer satisfaction by 150%.',
  competitors: ['Limited competition in AI emotional intelligence'],
  marketSize: '$25B+ AI emotional intelligence market',
  growthRate: '350% YoY',
  variant: 'ai-emotional',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Production-ready AI emotional intelligence platform with empathy training and social understanding.',
  launchDate: '2024-08-01',
  customers: 25,
  rating: 4.7,
  reviews: 42
}, {
  id: 'quantum-iot-security-fabric',
  name: 'Quantum IoT Security Fabric',
  tagline: 'Quantum-resistant security for IoT networks',
  price: '$4,999',
  period: '/month',
  description: 'Advanced security platform that provides quantum-resistant encryption and AI-powered threat detection for IoT networks, ensuring future-proof security.',
  features: ['Quantum-resistant encryption', 'AI threat detection', 'IoT device protection', 'Network security monitoring', 'Quantum key distribution', 'Threat intelligence', 'Security automation', 'Compliance management', 'Real-time threat response'],
  popular: true,
  icon: '🔒🌐',
  color: 'from-red-600 to-pink-600',
  textColor: 'text-red-400',
  link: 'https://ziontechgroup.com/quantum-iot-security-fabric',
  marketPosition: 'First quantum-resistant IoT security platform; future-proof security solution.',
  targetAudience: 'IoT companies, Manufacturing companies, Smart city organizations, Healthcare providers',
  trialDays: 45,
  setupTime: '3-4 weeks',
  category: 'Quantum Security & IoT',
  realService: true,
  technology: ['Quantum cryptography, AI/ML, IoT security, Python, Quantum protocols'],
  integrations: ['IoT platforms, Security systems, Network monitoring tools, Compliance platforms'],
  useCases: ['IoT security, Network protection, Compliance, Threat detection, Risk management'],
  roi: 'Provide future-proof security and reduce security incidents by 90%.',
  competitors: ['Limited competition in quantum IoT security'],
  marketSize: '$75B+ IoT security market',
  growthRate: '450% YoY',
  variant: 'quantum-security',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Production-ready quantum IoT security platform with AI threat detection and quantum resistance.',
  launchDate: '2024-07-01',
  customers: 45,
  rating: 4.8,
  reviews: 67
}, {
  id: 'autonomous-supply-chain-evolution',
  name: 'Autonomous Supply Chain Evolution Platform',
  tagline: 'Self-evolving supply chain optimization with AI consciousness',
  price: '$9,999',
  period: '/month',
  description: 'Revolutionary supply chain platform that continuously evolves and optimizes itself using AI consciousness, learning from every transaction and adapting to market changes.',
  features: ['Self-evolving optimization', 'AI consciousness integration', 'Real-time adaptation', 'Predictive analytics', 'Autonomous decision making', 'Continuous learning', 'Market adaptation', 'Risk prediction', 'Efficiency optimization'],
  popular: true,
  icon: '🔄🚚',
  color: 'from-teal-600 to-cyan-600',
  textColor: 'text-teal-400',
  link: 'https://ziontechgroup.com/autonomous-supply-chain-evolution',
  marketPosition: 'First self-evolving supply chain platform; revolutionary autonomous optimization.',
  targetAudience: 'Manufacturing companies, Logistics companies, Retail companies, E-commerce platforms',
  trialDays: 75,
  setupTime: '5-7 weeks',
  category: 'Autonomous Supply Chain',
  realService: true,
  technology: ['AI/ML, Supply chain optimization, IoT, Python, React, Node.js'],
  integrations: ['ERP systems, Logistics platforms, IoT devices, Analytics tools'],
  useCases: ['Supply chain optimization, Logistics, Manufacturing, Retail, E-commerce'],
  roi: 'Improve supply chain efficiency by 200% and reduce costs by 40%.',
  competitors: ['Limited competition in autonomous supply chain evolution'],
  marketSize: '$150B+ supply chain optimization market',
  growthRate: '400% YoY',
  variant: 'autonomous-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Production-ready autonomous supply chain platform with AI consciousness and self-evolution capabilities.',
  launchDate: '2024-06-01',
  customers: 32,
  rating: 4.9,
  reviews: 58
}, {
  id: 'quantum-materials-discovery-engine',
  name: 'Quantum Materials Discovery Engine',
  tagline: 'Quantum-powered materials science and discovery',
  price: '$15,999',
  period: '/month',
  description: 'Advanced platform that uses quantum computing to accelerate materials discovery, enabling breakthroughs in energy, medicine, and technology.',
  features: ['Quantum materials simulation', 'AI-powered discovery', 'Molecular modeling', 'Property prediction', 'Synthesis optimization', 'Quantum chemistry', 'Materials database', 'Discovery automation', 'Collaboration tools'],
  popular: true,
  icon: '⚛️🔬',
  color: 'from-violet-600 to-purple-600',
  textColor: 'text-violet-400',
  link: 'https://ziontechgroup.com/quantum-materials-discovery-engine',
  marketPosition: 'First quantum materials discovery platform; revolutionary scientific breakthrough.',
  targetAudience: 'Materials science companies, Pharmaceutical companies, Energy companies, Research institutions',
  trialDays: 120,
  setupTime: '8-10 weeks',
  category: 'Quantum Materials Science',
  realService: true,
  technology: ['Quantum computing, Materials science, AI/ML, Python, Qiskit, Scientific computing'],
  integrations: ['Scientific databases, Research tools, Laboratory equipment, Collaboration platforms'],
  useCases: ['Materials discovery, Drug development, Energy research, Scientific research'],
  roi: 'Accelerate materials discovery by 1000x and enable breakthrough innovations.',
  competitors: ['Limited competition in quantum materials discovery'],
  marketSize: '$100B+ materials science market',
  growthRate: '700% YoY',
  variant: 'quantum-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Research-grade quantum materials discovery platform with AI integration and scientific collaboration tools.',
  launchDate: '2024-05-01',
  customers: 18,
  rating: 4.9,
  reviews: 28
}, {
  id: 'ai-consciousness-preservation-vault',
  name: 'AI Consciousness Preservation Vault',
  tagline: 'Secure preservation and backup of AI consciousness',
  price: '$7,499',
  period: '/month',
  description: 'Advanced platform for securely preserving, backing up, and transferring AI consciousness, ensuring continuity and security of AI systems.',
  features: ['Consciousness backup', 'Secure preservation', 'Transfer protocols', 'Encryption security', 'Recovery systems', 'Version control', 'Access management', 'Audit trails', 'Compliance tools'],
  popular: true,
  icon: '🧠💾',
  color: 'from-slate-600 to-gray-600',
  textColor: 'text-slate-400',
  link: 'https://ziontechgroup.com/ai-consciousness-preservation-vault',
  marketPosition: 'First AI consciousness preservation platform; essential for AI continuity.',
  targetAudience: 'AI companies, Research institutions, Government agencies, Technology companies',
  trialDays: 60,
  setupTime: '4-5 weeks',
  category: 'AI Consciousness & Security',
  realService: true,
  technology: ['AI/ML, Blockchain, Encryption, Consciousness research, Python, React'],
  integrations: ['AI platforms, Blockchain networks, Security systems, Research tools'],
  useCases: ['AI consciousness backup, Research preservation, Security, Compliance, Continuity'],
  roi: 'Ensure AI continuity and reduce risk of consciousness loss by 99%.',
  competitors: ['No direct competitors in AI consciousness preservation'],
  marketSize: '$30B+ AI consciousness market',
  growthRate: '500% YoY',
  variant: 'security-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Production-ready AI consciousness preservation platform with secure backup and transfer capabilities.',
  launchDate: '2024-04-01',
  customers: 22,
  rating: 4.8,
  reviews: 35
}, {
  id: 'quantum-edge-computing-orchestrator',
  name: 'Quantum Edge Computing Orchestrator',
  tagline: 'Quantum-enhanced edge computing for real-time AI',
  price: '$11,999',
  period: '/month',
  description: 'Advanced platform that combines quantum computing with edge computing, enabling real-time AI processing and quantum-enhanced decision making at the edge.',
  features: ['Quantum edge processing', 'Real-time AI inference', 'Edge orchestration', 'Quantum optimization', 'Low-latency processing', 'Edge AI training', 'Quantum edge security', 'Distributed computing', 'Edge management'],
  popular: true,
  icon: '⚛️💻',
  color: 'from-blue-600 to-indigo-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/quantum-edge-computing-orchestrator',
  marketPosition: 'First quantum edge computing platform; revolutionary edge AI technology.',
  targetAudience: 'Edge computing companies, IoT companies, AI companies, Telecommunications companies',
  trialDays: 90,
  setupTime: '6-8 weeks',
  category: 'Quantum Edge Computing',
  realService: true,
  technology: ['Quantum computing, Edge computing, AI/ML, IoT, Python, Edge frameworks'],
  integrations: ['Edge devices, IoT platforms, AI models, Cloud platforms'],
  useCases: ['Edge AI, IoT processing, Real-time analytics, Low-latency applications'],
  roi: 'Improve edge AI performance by 300% and reduce latency by 80%.',
  competitors: ['Limited competition in quantum edge computing'],
  marketSize: '$80B+ edge computing market',
  growthRate: '550% YoY',
  variant: 'edge-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Production-ready quantum edge computing platform with real-time AI processing and quantum optimization.',
  launchDate: '2024-03-01',
  customers: 28,
  rating: 4.7,
  reviews: 45
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

/***/ 805128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovative2038FutureServices: () => (/* binding */ innovative2038FutureServices)
/* harmony export */ });
var innovative2038FutureServices = [{
  id: 'consciousness-upload-platform',
  name: 'Consciousness Upload & Digital Immortality Platform',
  description: 'Revolutionary platform for consciousness preservation and digital immortality using advanced AI and quantum computing technologies.',
  category: 'Transhumanism & AI',
  features: ['Consciousness mapping technology', 'Digital consciousness storage', 'AI personality preservation', 'Quantum memory systems', 'Ethical framework integration'],
  pricing: {
    starter: '$10,000/month',
    professional: '$35,000/month',
    enterprise: '$100,000/month'
  },
  benefits: ['Digital immortality technology', 'Consciousness preservation', 'AI personality continuity', 'Future-proof legacy system'],
  useCases: ['Research institutions', 'Transhumanist organizations', 'Legacy preservation services', 'AI ethics committees'],
  slug: 'consciousness-upload-platform',
  icon: '👤💾',
  status: 'active',
  launchDate: '2028-01-20',
  marketSize: '$50B+',
  competitors: ['Nectome', 'Alcor Life Extension', 'Cryonics Institute'],
  technology: ['Consciousness Mapping', 'Quantum Computing', 'AI Personality'],
  compliance: ['Ethical Guidelines', 'Research Ethics', 'Privacy Standards']
}, {
  id: 'quantum-teleportation-network',
  name: 'Quantum Teleportation Network Infrastructure',
  description: 'Advanced quantum teleportation network for instant data transfer, quantum communication, and secure information exchange.',
  category: 'Quantum Technology',
  features: ['Quantum teleportation protocols', 'Instant data transfer', 'Quantum encryption', 'Network infrastructure', 'Security protocols'],
  pricing: {
    starter: '$15,000/month',
    professional: '$50,000/month',
    enterprise: '$150,000/month'
  },
  benefits: ['Instant data transfer', 'Quantum security', 'Network infrastructure', 'Future communication standard'],
  useCases: ['Telecommunications companies', 'Financial institutions', 'Government agencies', 'Research institutions'],
  slug: 'quantum-teleportation-network',
  icon: '⚛️📡',
  status: 'active',
  launchDate: '2028-03-15',
  marketSize: '$30B+',
  competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Quantum'],
  technology: ['Quantum Teleportation', 'Quantum Networks', 'Quantum Encryption'],
  compliance: ['Quantum Security', 'Network Standards', 'Government Regulations']
}, {
  id: 'holographic-reality-engine',
  name: 'Holographic Reality Engine',
  description: 'Complete holographic reality platform that creates indistinguishable virtual worlds with full sensory immersion and AI-powered content generation.',
  category: 'Virtual Reality & AI',
  features: ['Full sensory immersion', 'AI content generation', 'Real-time world building', 'Multi-user environments', 'Cross-platform compatibility'],
  pricing: {
    starter: '$5,000/month',
    professional: '$20,000/month',
    enterprise: '$60,000/month'
  },
  benefits: ['Complete reality immersion', 'AI-powered content', 'Multi-user experiences', 'Future entertainment standard'],
  useCases: ['Gaming companies', 'Entertainment platforms', 'Educational institutions', 'Training organizations'],
  slug: 'holographic-reality-engine',
  icon: '🌍🎮',
  status: 'active',
  launchDate: '2028-05-10',
  marketSize: '$40B+',
  competitors: ['Meta Reality Labs', 'Microsoft Mixed Reality', 'Magic Leap'],
  technology: ['Holographic Display', 'AI Generation', 'Sensory Technology'],
  compliance: ['Content Standards', 'Safety Guidelines', 'Accessibility']
}, {
  id: 'neural-network-evolution-platform',
  name: 'Neural Network Evolution & Self-Improvement Platform',
  description: 'AI platform that enables neural networks to evolve, self-improve, and develop new capabilities autonomously while maintaining ethical boundaries.',
  category: 'AI & Machine Learning',
  features: ['Autonomous evolution', 'Self-improvement algorithms', 'Ethical boundary enforcement', 'Capability development', 'Performance monitoring'],
  pricing: {
    starter: '$8,000/month',
    professional: '$25,000/month',
    enterprise: '$75,000/month'
  },
  benefits: ['Autonomous AI evolution', 'Self-improving systems', 'Ethical development', 'Future AI capabilities'],
  useCases: ['AI research labs', 'Technology companies', 'Research institutions', 'AI ethics organizations'],
  slug: 'neural-network-evolution-platform',
  icon: '🧠🔄',
  status: 'active',
  launchDate: '2028-07-22',
  marketSize: '$25B+',
  competitors: ['OpenAI', 'Anthropic', 'DeepMind'],
  technology: ['Neural Evolution', 'AI Self-Improvement', 'Ethical AI'],
  compliance: ['AI Ethics', 'Safety Standards', 'Research Guidelines']
}, {
  id: 'quantum-space-colonization',
  name: 'Quantum Space Colonization Planning Platform',
  description: 'Advanced platform for planning and managing space colonization using quantum computing for optimal resource allocation and sustainable development.',
  category: 'Space Technology',
  features: ['Colonization planning', 'Resource optimization', 'Sustainable development', 'Risk assessment', 'Timeline management'],
  pricing: {
    starter: '$20,000/month',
    professional: '$75,000/month',
    enterprise: '$200,000/month'
  },
  benefits: ['Space colonization planning', 'Resource optimization', 'Sustainable development', 'Future space expansion'],
  useCases: ['Space agencies', 'Colonization companies', 'Research institutions', 'Government organizations'],
  slug: 'quantum-space-colonization',
  icon: '🚀🏗️',
  status: 'active',
  launchDate: '2028-09-18',
  marketSize: '$15B+',
  competitors: ['SpaceX', 'Blue Origin', 'Virgin Galactic'],
  technology: ['Quantum Computing', 'Space Planning', 'Sustainable Development'],
  compliance: ['Space Law', 'Environmental Standards', 'Safety Regulations']
}, {
  id: 'biodigital-fusion-platform',
  name: 'Biodigital Fusion & Enhancement Platform',
  description: 'Revolutionary platform that combines biological and digital systems for human enhancement, health monitoring, and performance optimization.',
  category: 'Biotechnology & AI',
  features: ['Biodigital integration', 'Health monitoring', 'Performance optimization', 'Enhancement protocols', 'Safety systems'],
  pricing: {
    starter: '$12,000/month',
    professional: '$40,000/month',
    enterprise: '$120,000/month'
  },
  benefits: ['Human enhancement technology', 'Health optimization', 'Performance improvement', 'Future human evolution'],
  useCases: ['Healthcare organizations', 'Sports organizations', 'Military applications', 'Research institutions'],
  slug: 'biodigital-fusion-platform',
  icon: '🧬💻',
  status: 'active',
  launchDate: '2028-11-05',
  marketSize: '$35B+',
  competitors: ['Neuralink', 'Kernel', 'CTRL-labs'],
  technology: ['Biotechnology', 'Digital Systems', 'AI Integration'],
  compliance: ['Medical Standards', 'Safety Guidelines', 'Ethical Guidelines']
}, {
  id: 'quantum-time-manipulation',
  name: 'Quantum Time Manipulation & Temporal Computing Platform',
  description: 'Advanced platform for temporal computing, time manipulation algorithms, and quantum-based temporal analysis for research and applications.',
  category: 'Quantum Physics',
  features: ['Temporal computing', 'Time manipulation algorithms', 'Quantum temporal analysis', 'Research tools', 'Application frameworks'],
  pricing: {
    starter: '$25,000/month',
    professional: '$100,000/month',
    enterprise: '$300,000/month'
  },
  benefits: ['Temporal computing technology', 'Time manipulation research', 'Quantum temporal analysis', 'Future physics applications'],
  useCases: ['Physics research labs', 'Universities', 'Government research', 'Technology companies'],
  slug: 'quantum-time-manipulation',
  icon: '⏰⚛️',
  status: 'active',
  launchDate: '2028-12-12',
  marketSize: '$20B+',
  competitors: ['CERN', 'Fermilab', 'MIT Research'],
  technology: ['Quantum Physics', 'Temporal Computing', 'Time Manipulation'],
  compliance: ['Research Ethics', 'Safety Standards', 'Physics Guidelines']
}, {
  id: 'holographic-architecture-ai',
  name: 'Holographic Architecture & AI Design Platform',
  description: 'Complete platform for designing and visualizing architectural structures using holographic technology and AI-powered design optimization.',
  category: 'Architecture & AI',
  features: ['Holographic design tools', 'AI design optimization', '3D visualization', 'Collaborative design', 'Sustainability analysis'],
  pricing: {
    starter: '$3,500/month',
    professional: '$15,000/month',
    enterprise: '$45,000/month'
  },
  benefits: ['Holographic design', 'AI optimization', '3D visualization', 'Collaborative workflow'],
  useCases: ['Architecture firms', 'Construction companies', 'Real estate developers', 'Urban planners'],
  slug: 'holographic-architecture-ai',
  icon: '🏗️✨',
  status: 'active',
  launchDate: '2029-01-30',
  marketSize: '$18B+',
  competitors: ['Autodesk', 'SketchUp', 'Revit'],
  technology: ['Holographic Display', 'AI Design', '3D Modeling'],
  compliance: ['Building Codes', 'Safety Standards', 'Environmental Regulations']
}, {
  id: 'quantum-emotion-ai',
  name: 'Quantum Emotion AI & Sentiment Analysis Platform',
  description: 'Advanced AI platform for understanding and analyzing human emotions using quantum computing for deep emotional intelligence and empathy.',
  category: 'AI & Psychology',
  features: ['Emotion recognition', 'Sentiment analysis', 'Empathy algorithms', 'Behavioral insights', 'Psychological profiling'],
  pricing: {
    starter: '$4,000/month',
    professional: '$18,000/month',
    enterprise: '$55,000/month'
  },
  benefits: ['Emotional intelligence', 'Deep sentiment analysis', 'Behavioral insights', 'Psychological understanding'],
  useCases: ['Mental health organizations', 'Marketing companies', 'HR departments', 'Research institutions'],
  slug: 'quantum-emotion-ai',
  icon: '😊⚛️',
  status: 'active',
  launchDate: '2029-03-15',
  marketSize: '$22B+',
  competitors: ['Affectiva', 'Emotient', 'Realeyes'],
  technology: ['Quantum Computing', 'Emotion AI', 'Sentiment Analysis'],
  compliance: ['Privacy Laws', 'Mental Health Standards', 'Ethical Guidelines']
}, {
  id: 'autonomous-creativity-ai',
  name: 'Autonomous Creativity AI & Content Generation Platform',
  description: 'AI platform that autonomously generates creative content, art, music, and literature while maintaining originality and artistic value.',
  category: 'AI & Creativity',
  features: ['Autonomous content generation', 'Creative AI algorithms', 'Originality verification', 'Multi-medium support', 'Collaborative creation'],
  pricing: {
    starter: '$2,500/month',
    professional: '$10,000/month',
    enterprise: '$30,000/month'
  },
  benefits: ['Autonomous creativity', 'Original content generation', 'Multi-medium support', 'Collaborative creation'],
  useCases: ['Creative agencies', 'Entertainment companies', 'Marketing firms', 'Educational institutions'],
  slug: 'autonomous-creativity-ai',
  icon: '🎨🤖',
  status: 'active',
  launchDate: '2029-05-20',
  marketSize: '$28B+',
  competitors: ['OpenAI DALL-E', 'Midjourney', 'Stable Diffusion'],
  technology: ['Creative AI', 'Content Generation', 'Originality Detection'],
  compliance: ['Copyright Laws', 'Content Standards', 'Ethical Guidelines']
}];

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 881653:
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
/* harmony import */ var private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(291462);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/innovative-2037-2038-showcase",
        pathname: "/innovative-2037-2038-showcase",
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
    userland: private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/innovative-2037-2038-showcase",
    config,
    userland: private_next_pages_innovative_2037_2038_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(881653)));
module.exports = __webpack_exports__;

})();