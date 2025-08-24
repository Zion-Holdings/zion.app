"use strict";
(() => {
var exports = {};
exports.id = 258007;
exports.ids = [258007,890636];
exports.modules = {

/***/ 30697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7887);
/* harmony import */ var _data_2025_innovative_ai_automation_suite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67249);
/* harmony import */ var _data_2025_innovative_it_infrastructure_suite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210918);
/* harmony import */ var _data_2025_innovative_cybersecurity_suite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(731022);
/* harmony import */ var _data_2025_innovative_data_analytics_suite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86408);
/* harmony import */ var _data_2025_innovative_business_automation_suite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(763597);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





// Import all our innovative service suites






// Combine all services

var allServices = [..._data_2025_innovative_ai_automation_suite__WEBPACK_IMPORTED_MODULE_2__.innovativeAIAutomationSuite, ..._data_2025_innovative_it_infrastructure_suite__WEBPACK_IMPORTED_MODULE_3__.innovativeITInfrastructureSuite, ..._data_2025_innovative_cybersecurity_suite__WEBPACK_IMPORTED_MODULE_4__.innovativeCybersecuritySuite, ..._data_2025_innovative_data_analytics_suite__WEBPACK_IMPORTED_MODULE_5__.innovativeDataAnalyticsSuite, ..._data_2025_innovative_business_automation_suite__WEBPACK_IMPORTED_MODULE_6__.innovativeBusinessAutomationSuite];

// Service categories with detailed information
var serviceCategories = [{
  id: 'ai-automation',
  name: 'AI & Automation',
  description: 'Intelligent automation solutions powered by artificial intelligence',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Brain,
  color: 'from-blue-500 to-indigo-600',
  services: _data_2025_innovative_ai_automation_suite__WEBPACK_IMPORTED_MODULE_2__.innovativeAIAutomationSuite,
  benefits: ['Reduce manual tasks by 80%', 'Improve accuracy by 95%', 'Scale operations without headcount increase', 'Enable 24/7 business operations']
}, {
  id: 'it-infrastructure',
  name: 'IT Infrastructure',
  description: 'Enterprise-grade infrastructure and cloud solutions',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Cpu,
  color: 'from-green-500 to-emerald-600',
  services: _data_2025_innovative_it_infrastructure_suite__WEBPACK_IMPORTED_MODULE_3__.innovativeITInfrastructureSuite,
  benefits: ['Future-proof quantum-resistant security', 'Reduce deployment failures by 80%', 'Lower infrastructure costs by 25-35%', 'Achieve 99.99% uptime guarantee']
}, {
  id: 'cybersecurity',
  name: 'Cybersecurity',
  description: 'Advanced security solutions with AI-powered threat detection',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Shield,
  color: 'from-red-500 to-pink-600',
  services: _data_2025_innovative_cybersecurity_suite__WEBPACK_IMPORTED_MODULE_4__.innovativeCybersecuritySuite,
  benefits: ['Detect threats 10x faster', 'Reduce security breaches by 90%', 'Automate 70% of security operations', 'Ensure comprehensive compliance']
}, {
  id: 'data-analytics',
  name: 'Data Analytics',
  description: 'Intelligent data processing and business intelligence',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.ChartBar,
  color: 'from-purple-500 to-pink-600',
  services: _data_2025_innovative_data_analytics_suite__WEBPACK_IMPORTED_MODULE_5__.innovativeDataAnalyticsSuite,
  benefits: ['Reduce forecasting errors by 60%', 'Process millions of events per second', 'Improve data quality by 80%', 'Enable real-time decision making']
}, {
  id: 'business-automation',
  name: 'Business Automation',
  description: 'Streamline business processes with intelligent automation',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Workflow,
  color: 'from-yellow-500 to-orange-600',
  services: _data_2025_innovative_business_automation_suite__WEBPACK_IMPORTED_MODULE_6__.innovativeBusinessAutomationSuite,
  benefits: ['Automate 80% of repetitive tasks', 'Optimize workflow efficiency by 40%', 'Generate reports 10x faster', 'Improve team productivity by 40%']
}];
var Comprehensive2025InnovativeServicesOverview = () => {
  var _serviceCategories$fi;
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [filteredServices, setFilteredServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(allServices);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var filtered = allServices;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        var category = serviceCategories.find(cat => cat.id === selectedCategory);
        return category && category.services.includes(service);
      });
    }
    if (searchTerm) {
      filtered = filtered.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);
  var getCategoryIcon = category => {
    var cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.icon : lucide_react__WEBPACK_IMPORTED_MODULE_8__.Rocket;
  };
  var getCategoryColor = category => {
    var cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Comprehensive 2025 Innovative Services Overview - Zion Tech Group",
      description: "Explore our complete portfolio of cutting-edge micro SAAS services, IT solutions, and AI innovations. From AI automation to quantum security, discover how Zion Tech Group transforms businesses.",
      keywords: ["AI automation", "IT infrastructure", "cybersecurity", "data analytics", "business automation", "micro SAAS", "Zion Tech Group", "innovative services 2025"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "relative py-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
            className: "text-5xl md:text-7xl font-bold text-white mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
              children: "Comprehensive 2025"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent",
              children: "Innovative Services Overview"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Discover our complete portfolio of cutting-edge micro SAAS services, IT solutions, and AI innovations. From AI automation to quantum security, we deliver real, market-ready solutions that transform businesses and drive measurable growth across all industries."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 max-w-3xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Contact Zion Tech Group"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Phone, {
                  className: "w-6 h-6 text-cyan-400 mb-2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-300 text-sm",
                  children: "Phone"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-white font-semibold",
                  children: "+1 302 464 0950"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Mail, {
                  className: "w-6 h-6 text-purple-400 mb-2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-300 text-sm",
                  children: "Email"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-white font-semibold",
                  children: "kleber@ziontechgroup.com"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.MapPin, {
                  className: "w-6 h-6 text-green-400 mb-2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-300 text-sm",
                  children: "Address"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                  className: "text-white font-semibold text-sm",
                  children: ["364 E Main St STE 1008", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), "Middletown DE 19709"]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: 0.95
              },
              className: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300",
              children: "Explore All Services"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: 0.95
              },
              className: "bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300",
              children: "Schedule Consultation"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "text-center mb-12",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: ["Our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
              children: "Service Categories"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Comprehensive solutions across five key technology domains, each designed to address specific business challenges and drive measurable results."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: serviceCategories.map((category, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
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
            className: "group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r ".concat(category.color, " rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(category.icon, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-2xl font-bold text-white text-center mb-3",
              children: category.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-300 text-center mb-6",
              children: category.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "space-y-3 mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                className: "text-white font-semibold text-sm",
                children: "Key Benefits:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
                className: "space-y-2",
                children: category.benefits.map((benefit, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                  className: "flex items-center text-gray-300 text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
                    className: "w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                  }), benefit]
                }, idx))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                className: "text-gray-400 text-sm mb-3",
                children: [category.services.length, " innovative services available"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
                whileHover: {
                  scale: 1.02
                },
                whileTap: {
                  scale: 0.98
                },
                onClick: () => setSelectedCategory(category.id),
                className: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300",
                children: "View Services"
              })]
            })]
          }, category.id))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "bg-white/10 backdrop-blur-xl rounded-2xl p-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col lg:flex-row gap-6 items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex-1 relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                type: "text",
                placeholder: "Search innovative services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-wrap gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setSelectedCategory('all'),
                className: "px-4 py-2 rounded-lg font-medium transition-all duration-300 ".concat(selectedCategory === 'all' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' : 'bg-white/20 text-gray-300 hover:bg-white/30'),
                children: "All Categories"
              }), serviceCategories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setSelectedCategory(category.id),
                className: "px-4 py-2 rounded-lg font-medium transition-all duration-300 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' : 'bg-white/20 text-gray-300 hover:bg-white/30'),
                children: category.name
              }, category.id))]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex bg-white/20 rounded-lg p-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setViewMode('grid'),
                className: "p-2 rounded-md transition-all duration-300 ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                  className: "w-5 h-5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setViewMode('list'),
                className: "p-2 rounded-md transition-all duration-300 ".concat(viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.List, {
                  className: "w-5 h-5"
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
            className: "text-3xl md:text-4xl font-bold text-white mb-4",
            children: selectedCategory === 'all' ? 'All Innovative Services' : "".concat((_serviceCategories$fi = serviceCategories.find(c => c.id === selectedCategory)) === null || _serviceCategories$fi === void 0 ? void 0 : _serviceCategories$fi.name, " Services")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
            className: "text-gray-300 text-lg",
            children: [filteredServices.length, " cutting-edge services available"]
          })]
        }), viewMode === 'grid' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
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
            className: "group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "w-12 h-12 bg-gradient-to-r ".concat(getCategoryColor(service.category), " rounded-xl flex items-center justify-center shadow-lg"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "text-2xl",
                    children: service.icon
                  })
                }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full",
                  children: "POPULAR"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                className: "text-xl font-bold text-white mb-2",
                children: service.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-300 text-sm mb-3",
                children: service.tagline
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-400 text-sm mb-4 line-clamp-3",
                children: service.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "bg-white/10 rounded-lg p-3 mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "text-gray-300 text-sm",
                    children: "Starting at"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    className: "text-2xl font-bold text-white",
                    children: ["$", service.price.monthly, "/mo"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                  className: "text-gray-400 text-xs text-center mt-1",
                  children: ["$", service.price.yearly, "/year (save $", (service.price.monthly * 12 - service.price.yearly).toLocaleString(), ")"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-white font-semibold mb-2 text-sm",
                  children: "Key Benefits:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
                  className: "space-y-1",
                  children: service.benefits.slice(0, 3).map((benefit, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                    className: "flex items-center text-gray-300 text-xs",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
                      className: "w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                    }), benefit]
                  }, idx))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center justify-between text-xs text-gray-400 mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Star, {
                    className: "w-3 h-3 text-yellow-400 mr-1"
                  }), service.rating, " (", service.reviews, " reviews)"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Users, {
                    className: "w-3 h-3 text-blue-400 mr-1"
                  }), service.customers.toLocaleString(), "+ customers"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
                whileHover: {
                  scale: 1.02
                },
                whileTap: {
                  scale: 0.98
                },
                className: "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center",
                children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
                  className: "w-4 h-4 ml-2"
                })]
              })]
            })
          }, service.id))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "space-y-6",
          children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
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
            className: "group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-col lg:flex-row gap-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-start gap-4 mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "w-16 h-16 bg-gradient-to-r ".concat(getCategoryColor(service.category), " rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-3xl",
                      children: service.icon
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex items-center gap-3 mb-2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                        className: "text-2xl font-bold text-white",
                        children: service.name
                      }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full",
                        children: "POPULAR"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "text-gray-300 text-lg mb-2",
                      children: service.tagline
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "text-gray-400",
                      children: service.description
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                      className: "text-white font-semibold mb-2",
                      children: "Key Features:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
                      className: "space-y-1",
                      children: service.features.slice(0, 5).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                        className: "flex items-center text-gray-300 text-sm",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
                          className: "w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                        }), feature]
                      }, idx))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                      className: "text-white font-semibold mb-2",
                      children: "Benefits:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
                      className: "space-y-1",
                      children: service.benefits.slice(0, 5).map((benefit, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                        className: "flex items-center text-gray-300 text-sm",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.TrendingUp, {
                          className: "w-3 h-3 text-blue-400 mr-2 flex-shrink-0"
                        }), benefit]
                      }, idx))
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "lg:w-80 flex-shrink-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "bg-white/10 rounded-xl p-4 mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                    className: "text-white font-bold text-lg mb-3",
                    children: "Pricing"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "text-center mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                      className: "text-3xl font-bold text-white",
                      children: ["$", service.price.monthly]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-gray-300",
                      children: "/month"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "text-center mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                      className: "text-lg text-white",
                      children: ["$", service.price.yearly]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-gray-300",
                      children: "/year"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                      className: "text-green-400 text-sm",
                      children: ["Save $", (service.price.monthly * 12 - service.price.yearly).toLocaleString()]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "text-center text-gray-400 text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                      children: [service.price.trialDays, "-day free trial"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                      children: ["Setup in ", service.price.setupTime]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "bg-white/10 rounded-xl p-4 mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                    className: "text-white font-bold text-lg mb-3",
                    children: "Performance"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "space-y-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-gray-300",
                        children: "Rating:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                        className: "text-white font-semibold",
                        children: [service.rating, "/5"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-gray-300",
                        children: "Reviews:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-white font-semibold",
                        children: service.reviews
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-gray-300",
                        children: "Customers:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                        className: "text-white font-semibold",
                        children: [service.customers.toLocaleString(), "+"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-gray-300",
                        children: "Launch:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-white font-semibold",
                        children: service.launchDate
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  className: "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center",
                  children: ["Get Started Today", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
                    className: "w-4 h-4 ml-2"
                  })]
                })]
              })]
            })
          }, service.id))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "text-center mb-12",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: ["Why Choose ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
              children: "Zion Tech Group"
            }), "?"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "We deliver cutting-edge, market-ready solutions that transform businesses and drive measurable results."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: [{
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Award,
            title: "Proven Excellence",
            description: "4.8+ average rating across all services with thousands of satisfied customers worldwide."
          }, {
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Zap,
            title: "Cutting-Edge Technology",
            description: "Latest AI, quantum computing, and cybersecurity innovations for future-proof solutions."
          }, {
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Shield,
            title: "Enterprise Security",
            description: "SOC 2 Type II, ISO 27001, and industry-leading compliance standards for maximum security."
          }, {
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.TrendingUp,
            title: "Measurable ROI",
            description: "Average 300-600% ROI within 6-12 months through our innovative solutions."
          }].map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
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
            className: "text-center group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(feature.icon, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-2",
              children: feature.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-300",
              children: feature.description
            })]
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-4xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12 text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8",
            children: "Join thousands of businesses already leveraging our innovative solutions. Get started today and experience the future of technology."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: 0.95
              },
              className: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300",
              children: "Schedule a Demo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: 0.95
              },
              className: "bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300",
              children: "Contact Sales Team"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "mt-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-300 mb-2",
              children: "Contact us directly:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center text-white",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center justify-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Phone, {
                  className: "w-4 h-4 mr-2 text-cyan-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  children: "+1 302 464 0950"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center justify-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Mail, {
                  className: "w-4 h-4 mr-2 text-purple-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  children: "kleber@ziontechgroup.com"
                })]
              })]
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comprehensive2025InnovativeServicesOverview);

/***/ }),

/***/ 67249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovativeAIAutomationSuite: () => (/* binding */ innovativeAIAutomationSuite)
/* harmony export */ });
var innovativeAIAutomationSuite = [{
  id: 'ai-workflow-orchestrator',
  name: 'AI Workflow Orchestrator',
  tagline: 'Intelligent process automation with AI-powered decision making',
  description: 'Advanced workflow automation platform that uses AI to optimize business processes, predict bottlenecks, and automatically adjust workflows for maximum efficiency. Perfect for enterprises looking to streamline operations.',
  category: 'AI & Automation',
  price: {
    monthly: 299,
    yearly: 2990,
    currency: 'USD',
    trialDays: 21,
    setupTime: '2 hours'
  },
  features: ['AI-powered process optimization', 'Predictive bottleneck detection', 'Dynamic workflow adjustment', 'Real-time performance analytics', 'Custom automation templates', 'Multi-department integration', 'Compliance tracking', 'Mobile workflow management', 'API-first architecture', 'Advanced reporting dashboard'],
  benefits: ['Reduce process time by 40-60%', 'Eliminate manual workflow errors', 'Improve resource allocation efficiency', 'Ensure compliance with automated tracking', 'Scale operations without proportional headcount increase'],
  targetAudience: ['Enterprise operations teams', 'Process improvement consultants', 'Manufacturing companies', 'Healthcare organizations', 'Financial services firms', 'Logistics companies'],
  marketPosition: 'Competitive with UiPath ($25-420), Automation Anywhere ($750-1500), and Microsoft Power Automate ($15-500). Our advantage: AI-powered optimization, predictive analytics, and seamless enterprise integration.',
  competitors: ['UiPath, Automation Anywhere, Microsoft Power Automate, Zapier, Integromat'],
  techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, Kubernetes, AWS'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade SaaS platform with microservices architecture, real-time AI processing, comprehensive API ecosystem, and advanced security features. Includes mobile apps for iOS and Android.',
  roi: 'Average enterprise customer sees 400% ROI within 6 months through process optimization and resource efficiency gains.',
  useCases: ['Order processing automation', 'Customer service workflow optimization', 'HR process automation', 'Financial reporting workflows', 'Quality control processes', 'Supply chain optimization'],
  integrations: ['Salesforce, SAP, Oracle, Microsoft 365, Slack, Teams, Jira, ServiceNow'],
  support: '24/7 enterprise support, dedicated success manager, custom training programs, and white-glove onboarding.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS'],
  link: 'https://ziontechgroup.com/ai-workflow-orchestrator',
  icon: '🤖',
  color: 'from-blue-500 to-indigo-600',
  popular: true,
  launchDate: '2024-03-15',
  customers: 1800,
  rating: 4.8,
  reviews: 450
}, {
  id: 'ai-customer-intelligence-platform',
  name: 'AI Customer Intelligence Platform',
  tagline: '360-degree customer insights powered by advanced AI analytics',
  description: 'Comprehensive customer intelligence platform that combines behavioral analytics, sentiment analysis, and predictive modeling to deliver actionable insights for personalized customer experiences.',
  category: 'AI & Analytics',
  price: {
    monthly: 199,
    yearly: 1990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '1 hour'
  },
  features: ['Real-time customer behavior tracking', 'AI-powered sentiment analysis', 'Predictive customer lifetime value', 'Personalization engine', 'Customer journey mapping', 'Churn prediction models', 'Multi-channel data integration', 'Advanced segmentation', 'Automated insights generation', 'ROI attribution tracking'],
  benefits: ['Increase customer retention by 25-35%', 'Improve conversion rates by 20-30%', 'Reduce customer acquisition costs', 'Enable hyper-personalized marketing', 'Predict and prevent customer churn'],
  targetAudience: ['E-commerce businesses', 'SaaS companies', 'Retail chains', 'Financial services', 'Telecommunications', 'Healthcare providers'],
  marketPosition: 'Competitive with Segment ($120-1000), Mixpanel ($25-1000), and Amplitude ($995-2000). Our advantage: AI-powered insights, predictive analytics, and comprehensive customer journey mapping.',
  competitors: ['Segment, Mixpanel, Amplitude, Google Analytics 360, Adobe Analytics'],
  techStack: ['OpenAI GPT-4, TensorFlow, PyTorch, React, Node.js, Apache Kafka, Elasticsearch, AWS'],
  realImplementation: true,
  implementationDetails: 'Cloud-native SaaS platform with real-time data processing, machine learning pipelines, comprehensive API ecosystem, and enterprise-grade security. Includes mobile SDKs and web tracking libraries.',
  roi: 'Average customer sees 300% ROI within 4 months through improved customer retention and conversion optimization.',
  useCases: ['Customer segmentation and targeting', 'Personalized marketing campaigns', 'Product recommendation engines', 'Customer support optimization', 'Loyalty program management', 'Market research and insights'],
  integrations: ['Shopify, WooCommerce, Salesforce, HubSpot, Mailchimp, Facebook Ads, Google Ads'],
  support: '24/7 technical support, dedicated customer success team, comprehensive documentation, and training webinars.',
  compliance: ['GDPR, CCPA, SOC 2 Type II, ISO 27001'],
  link: 'https://ziontechgroup.com/ai-customer-intelligence',
  icon: '🧠',
  color: 'from-purple-500 to-pink-600',
  popular: true,
  launchDate: '2024-02-20',
  customers: 3200,
  rating: 4.9,
  reviews: 780
}, {
  id: 'ai-content-optimization-engine',
  name: 'AI Content Optimization Engine',
  tagline: 'AI-powered content performance optimization across all channels',
  description: 'Intelligent content optimization platform that uses machine learning to analyze content performance, suggest improvements, and automatically optimize content for maximum engagement and conversion.',
  category: 'AI & Content',
  price: {
    monthly: 89,
    yearly: 890,
    currency: 'USD',
    trialDays: 14,
    setupTime: '30 minutes'
  },
  features: ['AI-powered content analysis', 'Performance prediction models', 'Automatic A/B testing', 'SEO optimization suggestions', 'Content scoring system', 'Multi-channel optimization', 'Real-time performance tracking', 'Competitor content analysis', 'Content calendar optimization', 'ROI measurement tools'],
  benefits: ['Increase content engagement by 40-60%', 'Improve SEO rankings by 25-35%', 'Reduce content creation time by 30%', 'Optimize content ROI across channels', 'Data-driven content strategy decisions'],
  targetAudience: ['Content marketers', 'Digital agencies', 'E-commerce businesses', 'Bloggers and influencers', 'SaaS companies', 'Publishing companies'],
  marketPosition: 'Competitive with Clearscope ($170-350), MarketMuse ($600-2000), and Frase ($44.95-114.95). Our advantage: AI-powered optimization, real-time performance tracking, and comprehensive ROI measurement.',
  competitors: ['Clearscope, MarketMuse, Frase, Surfer SEO, Ahrefs Content Explorer'],
  techStack: ['OpenAI GPT-4, BERT, React, Node.js, PostgreSQL, Redis, Elasticsearch, AWS'],
  realImplementation: true,
  implementationDetails: 'Full-featured SaaS platform with AI content analysis, performance tracking, optimization recommendations, and comprehensive reporting. Includes browser extensions and API access.',
  roi: 'Average customer sees 250% ROI within 3 months through improved content performance and engagement.',
  useCases: ['Blog post optimization', 'Social media content optimization', 'Email marketing optimization', 'Landing page optimization', 'Product description optimization', 'Content strategy planning'],
  integrations: ['WordPress, Shopify, HubSpot, Mailchimp, Buffer, Hootsuite, Google Analytics'],
  support: '24/7 support, comprehensive knowledge base, video tutorials, and dedicated success manager for enterprise plans.',
  compliance: ['GDPR, CCPA, SOC 2 Type II'],
  link: 'https://ziontechgroup.com/ai-content-optimization',
  icon: '📊',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2024-01-10',
  customers: 4500,
  rating: 4.7,
  reviews: 920
}];

/***/ }),

/***/ 86408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovativeDataAnalyticsSuite: () => (/* binding */ innovativeDataAnalyticsSuite)
/* harmony export */ });
var innovativeDataAnalyticsSuite = [{
  id: 'ai-predictive-analytics-engine',
  name: 'AI Predictive Analytics Engine',
  tagline: 'Advanced predictive analytics powered by machine learning',
  description: 'Sophisticated predictive analytics platform that uses machine learning algorithms to forecast trends, identify patterns, and provide actionable insights for business decision-making. Reduces forecasting errors by 60% and improves decision accuracy.',
  category: 'Data Analytics',
  price: {
    monthly: 249,
    yearly: 2490,
    currency: 'USD',
    trialDays: 21,
    setupTime: '3 hours'
  },
  features: ['Machine learning algorithms', 'Predictive modeling', 'Time series forecasting', 'Anomaly detection', 'Pattern recognition', 'Real-time data processing', 'Automated insights generation', 'Custom model training', 'API access', 'Advanced visualization'],
  benefits: ['Reduce forecasting errors by 60%', 'Improve decision accuracy by 40%', 'Automate routine analysis tasks', 'Identify hidden business opportunities', 'Optimize resource allocation'],
  targetAudience: ['Data scientists', 'Business analysts', 'Financial analysts', 'Marketing teams', 'Operations managers', 'Executive leadership'],
  marketPosition: 'Competitive with Tableau ($70-35), Power BI ($9.99-20), and Qlik ($30-70). Our advantage: AI-powered predictions, automated insights, and comprehensive machine learning capabilities.',
  competitors: ['Tableau, Power BI, Qlik, SAS, IBM SPSS, RapidMiner'],
  techStack: ['TensorFlow, PyTorch, Scikit-learn, React, Node.js, PostgreSQL, Redis, Apache Spark, AWS'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade analytics platform with machine learning capabilities, real-time processing, comprehensive visualization, and extensive API access. Includes mobile apps and custom model training.',
  roi: 'Average customer sees 450% ROI within 8 months through improved decision-making and operational efficiency.',
  useCases: ['Sales forecasting', 'Demand planning', 'Risk assessment', 'Customer behavior prediction', 'Market trend analysis', 'Operational optimization'],
  integrations: ['Salesforce, SAP, Oracle, Microsoft 365, Google Analytics, social media platforms'],
  support: '24/7 technical support, data science consulting, custom training programs, and dedicated success manager.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA'],
  link: 'https://ziontechgroup.com/ai-predictive-analytics',
  icon: '📈',
  color: 'from-blue-500 to-cyan-600',
  popular: true,
  launchDate: '2024-02-10',
  customers: 2100,
  rating: 4.8,
  reviews: 480
}, {
  id: 'real-time-data-streaming-platform',
  name: 'Real-Time Data Streaming Platform',
  tagline: 'High-performance real-time data processing and analytics',
  description: 'Advanced data streaming platform that processes millions of events per second in real-time, providing instant insights and enabling real-time decision-making. Built for applications requiring sub-second latency and high throughput.',
  category: 'Data Analytics',
  price: {
    monthly: 179,
    yearly: 1790,
    currency: 'USD',
    trialDays: 14,
    setupTime: '2 hours'
  },
  features: ['Real-time data processing', 'Stream analytics', 'Event streaming', 'Low latency processing', 'High throughput handling', 'Real-time dashboards', 'Alert system', 'Data transformation', 'API streaming', 'Performance monitoring'],
  benefits: ['Process millions of events per second', 'Achieve sub-second latency', 'Enable real-time decision-making', 'Scale automatically with demand', 'Reduce infrastructure costs'],
  targetAudience: ['IoT platform providers', 'Financial trading platforms', 'Gaming companies', 'E-commerce platforms', 'Telecommunications', 'Healthcare monitoring'],
  marketPosition: 'Competitive with Apache Kafka ($varies), AWS Kinesis ($varies), and Azure Event Hubs ($varies). Our advantage: Managed service, real-time analytics, and comprehensive monitoring.',
  competitors: ['Apache Kafka, AWS Kinesis, Azure Event Hubs, Google Cloud Pub/Sub, Confluent'],
  techStack: ['Apache Kafka, Apache Flink, React, Node.js, PostgreSQL, Redis, Kubernetes, AWS'],
  realImplementation: true,
  implementationDetails: 'Cloud-native streaming platform with high-performance processing, real-time analytics, comprehensive monitoring, and extensive API ecosystem. Includes managed infrastructure and auto-scaling.',
  roi: 'Average customer sees 350% ROI within 6 months through improved real-time capabilities and operational efficiency.',
  useCases: ['Real-time monitoring', 'Live analytics', 'Event processing', 'Stream processing', 'Real-time dashboards', 'Alert systems'],
  integrations: ['IoT platforms, databases, analytics tools, visualization platforms, notification systems'],
  support: '24/7 technical support, performance optimization consulting, comprehensive documentation, and dedicated account manager.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, regional compliance'],
  link: 'https://ziontechgroup.com/real-time-streaming',
  icon: '⚡',
  color: 'from-purple-500 to-pink-600',
  popular: true,
  launchDate: '2024-01-15',
  customers: 3200,
  rating: 4.7,
  reviews: 720
}, {
  id: 'data-governance-automation',
  name: 'Data Governance Automation',
  tagline: 'Automated data governance with compliance and quality management',
  description: 'Comprehensive data governance platform that automates data quality management, compliance monitoring, and governance processes. Ensures data accuracy, consistency, and compliance with regulatory requirements.',
  category: 'Data Analytics',
  price: {
    monthly: 159,
    yearly: 1590,
    currency: 'USD',
    trialDays: 14,
    setupTime: '2 hours'
  },
  features: ['Data quality monitoring', 'Compliance automation', 'Data lineage tracking', 'Policy management', 'Automated data profiling', 'Data catalog management', 'Access control', 'Audit logging', 'Data classification', 'Quality scoring'],
  benefits: ['Improve data quality by 80%', 'Automate compliance processes', 'Reduce governance overhead', 'Ensure regulatory compliance', 'Improve data trust and reliability'],
  targetAudience: ['Data governance teams', 'Compliance officers', 'Data stewards', 'IT administrators', 'Legal teams', 'Risk management'],
  marketPosition: 'Competitive with Collibra ($varies), Alation ($varies), and Informatica ($varies). Our advantage: Automation, comprehensive compliance, and user-friendly interface.',
  competitors: ['Collibra, Alation, Informatica, IBM InfoSphere, SAP Data Governance'],
  techStack: ['AI/ML, React, Node.js, PostgreSQL, Redis, Elasticsearch, Apache Atlas, AWS'],
  realImplementation: true,
  implementationDetails: 'Full-featured governance platform with automated quality monitoring, compliance management, comprehensive cataloging, and extensive integration capabilities. Includes mobile apps and web console.',
  roi: 'Average customer sees 300% ROI within 6 months through improved data quality and compliance automation.',
  useCases: ['Data quality management', 'Compliance monitoring', 'Data cataloging', 'Policy enforcement', 'Audit and reporting', 'Data lineage tracking'],
  integrations: ['Databases, data warehouses, BI tools, ETL platforms, compliance systems'],
  support: '24/7 support, compliance consulting, comprehensive documentation, and dedicated success manager.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, CCPA, HIPAA, SOX'],
  link: 'https://ziontechgroup.com/data-governance',
  icon: '📊',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2024-03-20',
  customers: 1800,
  rating: 4.6,
  reviews: 420
}];

/***/ }),

/***/ 162115:
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
/* harmony import */ var private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30697);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/comprehensive-2025-innovative-services-overview",
        pathname: "/comprehensive-2025-innovative-services-overview",
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
    userland: private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/comprehensive-2025-innovative-services-overview",
    config,
    userland: private_next_pages_comprehensive_2025_innovative_services_overview_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 210918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovativeITInfrastructureSuite: () => (/* binding */ innovativeITInfrastructureSuite)
/* harmony export */ });
var innovativeITInfrastructureSuite = [{
  id: 'quantum-secure-cloud-platform',
  name: 'Quantum-Secure Cloud Platform',
  tagline: 'Next-generation cloud infrastructure with quantum-resistant security',
  description: 'Advanced cloud platform that combines quantum-resistant cryptography, AI-powered threat detection, and zero-trust architecture to provide the most secure cloud infrastructure available. Built for enterprises requiring military-grade security.',
  category: 'Cloud & Security',
  price: {
    monthly: 599,
    yearly: 5990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '4 hours'
  },
  features: ['Quantum-resistant cryptography', 'AI-powered threat detection', 'Zero-trust architecture', 'Real-time security monitoring', 'Automated incident response', 'Compliance automation', 'Multi-cloud orchestration', 'Disaster recovery automation', 'Performance optimization', 'Cost management tools'],
  benefits: ['Future-proof security against quantum threats', 'Reduce security incidents by 90%', 'Achieve compliance 3x faster', 'Lower cloud costs by 25-35%', '99.99% uptime guarantee'],
  targetAudience: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Defense contractors', 'Legal firms', 'Research institutions'],
  marketPosition: 'Competitive with AWS GovCloud ($varies), Azure Government ($varies), and Google Cloud Government ($varies). Our advantage: Quantum-resistant security, AI-powered threat detection, and comprehensive compliance automation.',
  competitors: ['AWS GovCloud, Azure Government, Google Cloud Government, Oracle Cloud Government'],
  techStack: ['Post-quantum cryptography, AI/ML, Kubernetes, Terraform, React, Node.js, PostgreSQL, Redis, AWS'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade cloud platform with quantum-resistant cryptography, AI-powered security, comprehensive compliance automation, and multi-cloud orchestration. Includes dedicated support and custom deployment options.',
  roi: 'Average enterprise customer sees 500% ROI within 12 months through security improvements, compliance automation, and cost optimization.',
  useCases: ['Secure government applications', 'Financial trading platforms', 'Healthcare data management', 'Legal document storage', 'Research data protection', 'Critical infrastructure hosting'],
  integrations: ['Active Directory, LDAP, SAML, OAuth, SIEM systems, compliance tools'],
  support: '24/7 dedicated support, security incident response team, compliance consulting, and custom training programs.',
  compliance: ['FedRAMP High, SOC 2 Type II, ISO 27001, HIPAA, PCI DSS, FISMA'],
  link: 'https://ziontechgroup.com/quantum-secure-cloud',
  icon: '🔐',
  color: 'from-red-500 to-orange-600',
  popular: true,
  launchDate: '2024-04-01',
  customers: 850,
  rating: 4.9,
  reviews: 320
}, {
  id: 'ai-powered-devops-automation',
  name: 'AI-Powered DevOps Automation',
  tagline: 'Intelligent DevOps automation with predictive deployment optimization',
  description: 'Advanced DevOps platform that uses AI to predict deployment risks, optimize CI/CD pipelines, and automatically resolve common issues. Reduces deployment failures by 80% and speeds up releases by 3x.',
  category: 'DevOps & Automation',
  price: {
    monthly: 199,
    yearly: 1990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '2 hours'
  },
  features: ['AI-powered deployment prediction', 'Automated issue resolution', 'Intelligent pipeline optimization', 'Real-time performance monitoring', 'Automated rollback triggers', 'Security vulnerability scanning', 'Cost optimization recommendations', 'Team productivity analytics', 'Multi-environment management', 'Advanced reporting dashboard'],
  benefits: ['Reduce deployment failures by 80%', 'Speed up releases by 3x', 'Lower infrastructure costs by 20-30%', 'Improve team productivity by 40%', 'Automate 90% of routine DevOps tasks'],
  targetAudience: ['Software development teams', 'DevOps engineers', 'Platform engineering teams', 'Startups and scale-ups', 'Enterprise IT teams', 'Cloud-native companies'],
  marketPosition: 'Competitive with GitLab ($19-99), GitHub Actions ($varies), and Jenkins (free). Our advantage: AI-powered optimization, predictive analytics, and comprehensive automation capabilities.',
  competitors: ['GitLab, GitHub Actions, Jenkins, CircleCI, Travis CI, Azure DevOps'],
  techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes, AWS'],
  realImplementation: true,
  implementationDetails: 'Full-featured DevOps platform with AI-powered optimization, comprehensive automation, real-time monitoring, and advanced analytics. Includes mobile apps and extensive API access.',
  roi: 'Average customer sees 400% ROI within 6 months through improved deployment success rates and team productivity gains.',
  useCases: ['CI/CD pipeline optimization', 'Automated testing and deployment', 'Infrastructure as code management', 'Security scanning automation', 'Performance monitoring', 'Cost optimization'],
  integrations: ['GitHub, GitLab, Bitbucket, Jira, Slack, Teams, AWS, Azure, GCP'],
  support: '24/7 support, comprehensive documentation, video tutorials, and dedicated success manager for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR'],
  link: 'https://ziontechgroup.com/ai-devops-automation',
  icon: '⚡',
  color: 'from-yellow-500 to-orange-600',
  popular: true,
  launchDate: '2024-02-15',
  customers: 2800,
  rating: 4.8,
  reviews: 650
}, {
  id: 'edge-computing-orchestrator',
  name: 'Edge Computing Orchestrator',
  tagline: 'Intelligent edge computing management with global optimization',
  description: 'Advanced edge computing platform that intelligently distributes workloads across global edge locations, optimizing for latency, cost, and performance. Perfect for applications requiring real-time processing and global reach.',
  category: 'Edge Computing',
  price: {
    monthly: 149,
    yearly: 1490,
    currency: 'USD',
    trialDays: 14,
    setupTime: '1 hour'
  },
  features: ['Global edge location management', 'Intelligent workload distribution', 'Real-time performance optimization', 'Automatic failover and scaling', 'Cost optimization algorithms', 'Multi-cloud edge orchestration', 'Advanced analytics dashboard', 'API-first architecture', 'Mobile app management', 'Comprehensive monitoring'],
  benefits: ['Reduce latency by 60-80%', 'Lower bandwidth costs by 30-40%', 'Improve user experience globally', 'Scale automatically based on demand', 'Reduce infrastructure management overhead'],
  targetAudience: ['IoT device manufacturers', 'Gaming companies', 'Video streaming services', 'E-commerce platforms', 'Financial trading platforms', 'Healthcare applications'],
  marketPosition: 'Competitive with Cloudflare Workers ($5-200), AWS Lambda@Edge ($varies), and Azure Edge Zones ($varies). Our advantage: Intelligent workload distribution, global optimization, and comprehensive edge management.',
  competitors: ['Cloudflare Workers, AWS Lambda@Edge, Azure Edge Zones, Google Cloud CDN'],
  techStack: ['AI/ML, React, Node.js, PostgreSQL, Redis, Docker, Kubernetes, global CDN'],
  realImplementation: true,
  implementationDetails: 'Global edge computing platform with intelligent workload distribution, real-time optimization, comprehensive monitoring, and extensive API ecosystem. Includes mobile SDKs and web management console.',
  roi: 'Average customer sees 300% ROI within 4 months through reduced latency, improved user experience, and cost optimization.',
  useCases: ['IoT data processing', 'Real-time gaming', 'Video streaming optimization', 'E-commerce acceleration', 'Financial trading', 'Healthcare monitoring'],
  integrations: ['AWS, Azure, GCP, Cloudflare, major CDNs, IoT platforms'],
  support: '24/7 global support, comprehensive documentation, API reference, and dedicated account manager for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, regional compliance'],
  link: 'https://ziontechgroup.com/edge-computing-orchestrator',
  icon: '🌐',
  color: 'from-cyan-500 to-blue-600',
  popular: true,
  launchDate: '2024-01-20',
  customers: 3600,
  rating: 4.7,
  reviews: 890
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

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 731022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovativeCybersecuritySuite: () => (/* binding */ innovativeCybersecuritySuite)
/* harmony export */ });
var innovativeCybersecuritySuite = [{
  id: 'ai-threat-hunting-platform',
  name: 'AI Threat Hunting Platform',
  tagline: 'Proactive threat detection with AI-powered hunting capabilities',
  description: 'Advanced threat hunting platform that uses artificial intelligence to proactively identify and neutralize cyber threats before they cause damage. Combines behavioral analysis, machine learning, and threat intelligence for comprehensive protection.',
  category: 'Cybersecurity',
  price: {
    monthly: 399,
    yearly: 3990,
    currency: 'USD',
    trialDays: 21,
    setupTime: '3 hours'
  },
  features: ['AI-powered threat detection', 'Behavioral anomaly analysis', 'Proactive threat hunting', 'Real-time threat intelligence', 'Automated incident response', 'Threat correlation engine', 'Advanced forensics tools', 'Compliance reporting', 'Mobile threat detection', 'Cloud security monitoring'],
  benefits: ['Detect threats 10x faster than traditional methods', 'Reduce false positives by 80%', 'Prevent 95% of cyber attacks', 'Automate 70% of security operations', 'Achieve compliance requirements automatically'],
  targetAudience: ['Enterprise security teams', 'MSSPs and security consultants', 'Financial institutions', 'Healthcare organizations', 'Government agencies', 'Critical infrastructure'],
  marketPosition: 'Competitive with CrowdStrike ($8.99-15.99), SentinelOne ($3.99-7.99), and Carbon Black ($6.99-12.99). Our advantage: AI-powered threat hunting, proactive detection, and comprehensive automation.',
  competitors: ['CrowdStrike, SentinelOne, Carbon Black, Cylance, Microsoft Defender ATP'],
  techStack: ['OpenAI GPT-4, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Elasticsearch, AWS'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade cybersecurity platform with AI-powered threat detection, comprehensive monitoring, automated response, and advanced analytics. Includes mobile apps and extensive API access.',
  roi: 'Average enterprise customer sees 600% ROI within 8 months through threat prevention, incident reduction, and compliance automation.',
  useCases: ['Endpoint threat detection', 'Network security monitoring', 'Cloud security protection', 'Incident response automation', 'Threat intelligence sharing', 'Compliance monitoring'],
  integrations: ['SIEM systems, EDR platforms, firewalls, identity providers, ticketing systems'],
  support: '24/7 security operations center, incident response team, compliance consulting, and custom training programs.',
  compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, HIPAA, PCI DSS'],
  link: 'https://ziontechgroup.com/ai-threat-hunting',
  icon: '🛡️',
  color: 'from-red-500 to-pink-600',
  popular: true,
  launchDate: '2024-03-01',
  customers: 1200,
  rating: 4.9,
  reviews: 280
}, {
  id: 'quantum-encryption-gateway',
  name: 'Quantum Encryption Gateway',
  tagline: 'Future-proof encryption with quantum-resistant algorithms',
  description: 'Next-generation encryption gateway that implements quantum-resistant cryptographic algorithms to protect data against future quantum computing threats. Provides military-grade security for sensitive communications and data storage.',
  category: 'Cybersecurity',
  price: {
    monthly: 299,
    yearly: 2990,
    currency: 'USD',
    trialDays: 30,
    setupTime: '2 hours'
  },
  features: ['Quantum-resistant cryptography', 'Post-quantum algorithms', 'Hybrid encryption schemes', 'Key management automation', 'Performance optimization', 'Compliance validation', 'Multi-protocol support', 'Hardware acceleration', 'Cloud integration', 'Advanced monitoring'],
  benefits: ['Future-proof security against quantum threats', 'Maintain high performance with advanced algorithms', 'Automate key management processes', 'Ensure compliance with future standards', 'Protect sensitive data for decades'],
  targetAudience: ['Government agencies', 'Defense contractors', 'Financial institutions', 'Healthcare organizations', 'Research institutions', 'Legal firms'],
  marketPosition: 'Competitive with specialized encryption solutions ($500-2000). Our advantage: Quantum-resistant algorithms, hybrid encryption, and comprehensive key management.',
  competitors: ['Specialized encryption vendors, custom solutions, research implementations'],
  techStack: ['Post-quantum cryptography, React, Node.js, PostgreSQL, Redis, hardware acceleration, AWS'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade encryption gateway with quantum-resistant algorithms, comprehensive key management, performance optimization, and extensive integration capabilities. Includes hardware acceleration options.',
  roi: 'Average enterprise customer sees 400% ROI within 12 months through future-proof security and compliance benefits.',
  useCases: ['Secure communications', 'Data encryption at rest', 'Key management automation', 'Compliance validation', 'Performance optimization', 'Hardware integration'],
  integrations: ['Active Directory, LDAP, SIEM systems, compliance tools, hardware security modules'],
  support: '24/7 technical support, security consulting, compliance assistance, and custom training programs.',
  compliance: ['FIPS 140-2, Common Criteria, SOC 2 Type II, ISO 27001'],
  link: 'https://ziontechgroup.com/quantum-encryption',
  icon: '🔒',
  color: 'from-indigo-500 to-purple-600',
  popular: true,
  launchDate: '2024-04-15',
  customers: 650,
  rating: 4.8,
  reviews: 180
}, {
  id: 'zero-trust-access-platform',
  name: 'Zero Trust Access Platform',
  tagline: 'Comprehensive zero trust implementation with continuous verification',
  description: 'Advanced zero trust platform that continuously verifies user identity, device health, and network security before granting access to resources. Implements the principle of "never trust, always verify" for maximum security.',
  category: 'Cybersecurity',
  price: {
    monthly: 199,
    yearly: 1990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '2 hours'
  },
  features: ['Continuous identity verification', 'Device health monitoring', 'Network security validation', 'Access policy automation', 'Real-time threat detection', 'Compliance monitoring', 'Multi-factor authentication', 'Single sign-on integration', 'Mobile device management', 'Advanced analytics'],
  benefits: ['Reduce security breaches by 90%', 'Eliminate lateral movement attacks', 'Simplify compliance requirements', 'Improve user experience', 'Reduce IT administration overhead'],
  targetAudience: ['Enterprise IT teams', 'Security professionals', 'Compliance officers', 'Remote work organizations', 'Healthcare providers', 'Financial services'],
  marketPosition: 'Competitive with Okta ($2-17), Duo ($3-6), and Microsoft Azure AD ($6-15). Our advantage: Comprehensive zero trust implementation, continuous verification, and advanced threat detection.',
  competitors: ['Okta, Duo, Microsoft Azure AD, Ping Identity, ForgeRock'],
  techStack: ['AI/ML, React, Node.js, PostgreSQL, Redis, SAML, OAuth, OIDC, AWS'],
  realImplementation: true,
  implementationDetails: 'Full-featured zero trust platform with continuous verification, comprehensive monitoring, automated policy management, and extensive integration capabilities. Includes mobile apps and web management console.',
  roi: 'Average customer sees 350% ROI within 6 months through improved security, simplified compliance, and reduced administration overhead.',
  useCases: ['User access management', 'Device security validation', 'Network access control', 'Compliance monitoring', 'Threat detection', 'Policy automation'],
  integrations: ['Active Directory, LDAP, SAML, OAuth, OIDC, SIEM systems, ticketing systems'],
  support: '24/7 support, comprehensive documentation, video tutorials, and dedicated success manager for enterprise plans.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS'],
  link: 'https://ziontechgroup.com/zero-trust-access',
  icon: '🔐',
  color: 'from-green-500 to-teal-600',
  popular: true,
  launchDate: '2024-02-01',
  customers: 2400,
  rating: 4.7,
  reviews: 520
}];

/***/ }),

/***/ 763597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innovativeBusinessAutomationSuite: () => (/* binding */ innovativeBusinessAutomationSuite)
/* harmony export */ });
var innovativeBusinessAutomationSuite = [{
  id: 'intelligent-process-automation',
  name: 'Intelligent Process Automation',
  tagline: 'AI-powered business process automation with cognitive capabilities',
  description: 'Advanced process automation platform that combines robotic process automation (RPA) with artificial intelligence to automate complex business processes. Learns from human actions and continuously improves automation efficiency.',
  category: 'Business Automation',
  price: {
    monthly: 399,
    yearly: 3990,
    currency: 'USD',
    trialDays: 21,
    setupTime: '4 hours'
  },
  features: ['AI-powered process learning', 'Cognitive automation', 'Natural language processing', 'Document understanding', 'Process optimization', 'Workflow automation', 'Integration capabilities', 'Analytics and reporting', 'Mobile automation', 'Cloud deployment'],
  benefits: ['Automate 80% of repetitive tasks', 'Reduce process time by 60%', 'Improve accuracy by 95%', 'Scale operations without headcount increase', 'Enable 24/7 business operations'],
  targetAudience: ['Enterprise operations teams', 'Shared services centers', 'Finance and accounting', 'Human resources', 'Customer service', 'Supply chain management'],
  marketPosition: 'Competitive with UiPath ($25-420), Automation Anywhere ($750-1500), and Blue Prism ($varies). Our advantage: AI-powered learning, cognitive capabilities, and comprehensive automation.',
  competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, Zapier'],
  techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, Docker, AWS'],
  realImplementation: true,
  implementationDetails: 'Enterprise-grade automation platform with AI-powered learning, comprehensive process automation, extensive integration capabilities, and advanced analytics. Includes mobile apps and cloud deployment.',
  roi: 'Average enterprise customer sees 500% ROI within 12 months through process automation and operational efficiency gains.',
  useCases: ['Invoice processing', 'Customer onboarding', 'Data entry automation', 'Report generation', 'Email processing', 'Document classification'],
  integrations: ['ERP systems, CRM platforms, databases, email systems, document management systems'],
  support: '24/7 enterprise support, process consulting, custom training programs, and dedicated success manager.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, HIPAA, SOX'],
  link: 'https://ziontechgroup.com/intelligent-process-automation',
  icon: '🤖',
  color: 'from-blue-500 to-indigo-600',
  popular: true,
  launchDate: '2024-02-15',
  customers: 1600,
  rating: 4.8,
  reviews: 380
}, {
  id: 'smart-workflow-orchestrator',
  name: 'Smart Workflow Orchestrator',
  tagline: 'Intelligent workflow management with predictive optimization',
  description: 'Advanced workflow management platform that uses machine learning to optimize business workflows, predict bottlenecks, and automatically adjust processes for maximum efficiency. Perfect for complex, multi-step business processes.',
  category: 'Business Automation',
  price: {
    monthly: 199,
    yearly: 1990,
    currency: 'USD',
    trialDays: 14,
    setupTime: '2 hours'
  },
  features: ['AI-powered workflow optimization', 'Predictive bottleneck detection', 'Dynamic process adjustment', 'Real-time performance monitoring', 'Automated decision routing', 'Workflow templates', 'Integration management', 'Mobile workflow access', 'Advanced analytics', 'Compliance tracking'],
  benefits: ['Optimize workflow efficiency by 40%', 'Reduce process bottlenecks by 70%', 'Improve decision-making speed', 'Ensure compliance automatically', 'Enhance team collaboration'],
  targetAudience: ['Business process managers', 'Operations teams', 'Project managers', 'Compliance officers', 'Quality assurance teams', 'Cross-functional teams'],
  marketPosition: 'Competitive with Monday.com ($8-16), Asana ($10.99-24.99), and Smartsheet ($7-25). Our advantage: AI-powered optimization, predictive analytics, and intelligent automation.',
  competitors: ['Monday.com, Asana, Smartsheet, Trello, Jira, Microsoft Project'],
  techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, AWS'],
  realImplementation: true,
  implementationDetails: 'Full-featured workflow platform with AI-powered optimization, comprehensive management, extensive integration, and advanced analytics. Includes mobile apps and web console.',
  roi: 'Average customer sees 350% ROI within 6 months through workflow optimization and process efficiency improvements.',
  useCases: ['Project management', 'Approval workflows', 'Quality control processes', 'Compliance workflows', 'Customer service processes', 'Sales processes'],
  integrations: ['CRM systems, ERP platforms, communication tools, document management, notification systems'],
  support: '24/7 support, workflow consulting, comprehensive documentation, and dedicated success manager.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, regional compliance'],
  link: 'https://ziontechgroup.com/smart-workflow-orchestrator',
  icon: '🔄',
  color: 'from-green-500 to-emerald-600',
  popular: true,
  launchDate: '2024-01-20',
  customers: 2800,
  rating: 4.7,
  reviews: 650
}, {
  id: 'business-intelligence-automation',
  name: 'Business Intelligence Automation',
  tagline: 'Automated insights generation with intelligent reporting',
  description: 'Comprehensive business intelligence platform that automatically generates insights, creates reports, and provides actionable recommendations. Uses AI to identify trends, anomalies, and opportunities in business data.',
  category: 'Business Automation',
  price: {
    monthly: 149,
    yearly: 1490,
    currency: 'USD',
    trialDays: 14,
    setupTime: '2 hours'
  },
  features: ['Automated report generation', 'AI-powered insights', 'Predictive analytics', 'Real-time dashboards', 'Custom KPI tracking', 'Data visualization', 'Scheduled reporting', 'Mobile BI access', 'Collaboration tools', 'Export capabilities'],
  benefits: ['Generate reports 10x faster', 'Identify hidden business opportunities', 'Improve decision-making with data', 'Reduce manual reporting overhead', 'Enable self-service analytics'],
  targetAudience: ['Business analysts', 'Data analysts', 'Executive leadership', 'Department managers', 'Sales teams', 'Marketing teams'],
  marketPosition: 'Competitive with Tableau ($70-35), Power BI ($9.99-20), and Qlik ($30-70). Our advantage: AI-powered insights, automated reporting, and intelligent recommendations.',
  competitors: ['Tableau, Power BI, Qlik, Looker, Sisense, Domo'],
  techStack: ['OpenAI GPT-4, TensorFlow, React, Node.js, PostgreSQL, Redis, Apache Spark, AWS'],
  realImplementation: true,
  implementationDetails: 'Full-featured BI platform with AI-powered insights, automated reporting, comprehensive visualization, and extensive integration. Includes mobile apps and web console.',
  roi: 'Average customer sees 300% ROI within 4 months through improved insights and reporting automation.',
  useCases: ['Sales performance analysis', 'Financial reporting', 'Marketing campaign analysis', 'Operational metrics', 'Customer analytics', 'Competitive analysis'],
  integrations: ['Databases, data warehouses, CRM systems, ERP platforms, cloud applications'],
  support: '24/7 support, BI consulting, comprehensive documentation, and dedicated success manager.',
  compliance: ['SOC 2 Type II, ISO 27001, GDPR, regional compliance'],
  link: 'https://ziontechgroup.com/business-intelligence-automation',
  icon: '📊',
  color: 'from-purple-500 to-pink-600',
  popular: true,
  launchDate: '2024-03-10',
  customers: 2200,
  rating: 4.6,
  reviews: 480
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(162115)));
module.exports = __webpack_exports__;

})();