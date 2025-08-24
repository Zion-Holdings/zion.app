"use strict";
(() => {
var exports = {};
exports.id = 371544;
exports.ids = [371544,890636];
exports.modules = {

/***/ 175788:
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
/* harmony import */ var _data_2025_innovative_ai_autonomous_ecosystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831644);
/* harmony import */ var _data_2025_innovative_ai_autonomous_ecosystem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_2025_innovative_ai_autonomous_ecosystem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_2025_innovative_it_infrastructure_ecosystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(987566);
/* harmony import */ var _data_2025_innovative_micro_saas_ecosystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(757878);
/* harmony import */ var _data_2025_innovative_cybersecurity_ecosystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1974);
/* harmony import */ var _data_2025_innovative_emerging_tech_ecosystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(734740);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





// Import all our innovative ecosystem services






var InnovativePricingShowcase2025 = () => {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [selectedPricingTier, setSelectedPricingTier] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');

  // Combine all services
  var allServices = [..._data_2025_innovative_ai_autonomous_ecosystem__WEBPACK_IMPORTED_MODULE_2__.innovativeAIAutonomousEcosystem2025, ..._data_2025_innovative_it_infrastructure_ecosystem__WEBPACK_IMPORTED_MODULE_3__.innovativeITInfrastructureEcosystem2025, ..._data_2025_innovative_micro_saas_ecosystem__WEBPACK_IMPORTED_MODULE_4__.innovativeMicroSaasEcosystem2025, ..._data_2025_innovative_cybersecurity_ecosystem__WEBPACK_IMPORTED_MODULE_5__.innovativeCybersecurityEcosystem2025, ..._data_2025_innovative_emerging_tech_ecosystem__WEBPACK_IMPORTED_MODULE_6__.innovativeEmergingTechEcosystem2025];

  // Filter services based on search, category, and pricing tier
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    var matchesCategory = selectedCategory === 'all' || service.category.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
    var matchesPricing = selectedPricingTier === 'all' || selectedPricingTier === 'budget' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 1000 || selectedPricingTier === 'mid-range' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 1000 && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) < 5000 || selectedPricingTier === 'enterprise' && parseFloat(service.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000;
    return matchesSearch && matchesCategory && matchesPricing;
  });
  var categories = [{
    id: 'all',
    name: 'All Categories',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Sparkles,
    count: allServices.length
  }, {
    id: 'ai',
    name: 'AI & ML',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Brain,
    count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length
  }, {
    id: 'quantum',
    name: 'Quantum',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Atom,
    count: allServices.filter(s => s.category.includes('Quantum')).length
  }, {
    id: 'cybersecurity',
    name: 'Security',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Shield,
    count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length
  }, {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Server,
    count: allServices.filter(s => s.category.includes('Infrastructure') || s.category.includes('Cloud') || s.category.includes('Network')).length
  }, {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Target,
    count: allServices.filter(s => s.type === 'Micro SAAS').length
  }, {
    id: 'emerging',
    name: 'Emerging Tech',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Rocket,
    count: allServices.filter(s => s.type === 'Emerging Technology Service').length
  }];
  var pricingTiers = [{
    id: 'all',
    name: 'All Pricing',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.DollarSign,
    count: allServices.length
  }, {
    id: 'budget',
    name: 'Budget (<$1K)',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.DollarSign,
    count: allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 1000).length
  }, {
    id: 'mid-range',
    name: 'Mid-Range ($1K-$5K)',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.DollarSign,
    count: allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 1000 && parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 5000).length
  }, {
    id: 'enterprise',
    name: 'Enterprise ($5K+)',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.DollarSign,
    count: allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000).length
  }];
  var stats = [{
    number: allServices.length.toString(),
    label: 'Innovative Services',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Star
  }, {
    number: '3',
    label: 'Pricing Tiers',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.DollarSign
  }, {
    number: '25+',
    label: 'Technology Categories',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.Cpu
  }, {
    number: '$2.5B+',
    label: 'Total Market Value',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__.TrendingUp
  }];
  var fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  };
  var staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  var getPricingColor = price => {
    var numPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (numPrice < 1000) return 'text-green-400';
    if (numPrice < 5000) return 'text-yellow-400';
    return 'text-red-400';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "2025 Innovative Ecosystem Pricing Showcase - Zion Tech Group",
      description: "Comprehensive pricing for Zion Tech Group's revolutionary 2025 innovative ecosystem services. Compare pricing tiers for AI consciousness, quantum computing, cybersecurity, and emerging technologies.",
      keywords: ["2025 innovative services pricing", "AI consciousness pricing", "quantum computing pricing", "cybersecurity pricing", "emerging technologies pricing", "Zion Tech Group"],
      canonical: "https://ziontechgroup.com/2025-innovative-pricing-showcase"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "min-h-screen bg-black text-white overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "fixed inset-0 z-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "absolute inset-0 overflow-hidden",
          children: [...Array(50)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            className: "absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20",
            style: {
              left: "".concat(Math.random() * 100, "%"),
              top: "".concat(Math.random() * 100, "%")
            },
            animate: {
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2]
            },
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: 999999,
              ease: "linear"
            }
          }, i))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
          className: "text-center py-20 px-4",
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h1, {
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
              duration: 0.8,
              delay: 0.2
            },
            children: "2025 Innovative Ecosystem"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h2, {
            className: "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent",
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
            children: "Pricing Showcase"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
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
            children: "Transparent pricing for revolutionary AI consciousness, quantum computing, and emerging technologies"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12",
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
            children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-cyan-500/20",
              initial: {
                opacity: 0,
                scale: 0.8
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: 0.6,
                delay: 1.0 + index * 0.1
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(stat.icon, {
                className: "w-8 h-8 mx-auto mb-2 text-cyan-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-2xl font-bold text-cyan-400",
                children: stat.number
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-sm text-gray-400",
                children: stat.label
              })]
            }, stat.label))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
          className: "max-w-6xl mx-auto px-4 mb-12",
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
            delay: 1.2
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col md:flex-row gap-4 items-center justify-between mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "relative flex-1 max-w-md",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                type: "text",
                placeholder: "Search services by name, description, or category...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setViewMode('grid'),
                className: "p-2 rounded-lg transition-colors ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                  className: "w-5 h-5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setViewMode('list'),
                className: "p-2 rounded-lg transition-colors ".concat(viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.List, {
                  className: "w-5 h-5"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex flex-wrap gap-3 justify-center mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-wrap gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-sm text-gray-400 font-medium flex items-center",
                children: "Categories:"
              }), categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
                onClick: () => setSelectedCategory(category.id),
                className: "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ".concat(selectedCategory === category.id ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400' : 'border-gray-600 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-400/10'),
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(category.icon, {
                  className: "w-4 h-4"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  children: category.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-xs bg-white/20 px-2 py-1 rounded-full",
                  children: category.count
                })]
              }, category.id))]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex flex-wrap gap-3 justify-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-wrap gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-sm text-gray-400 font-medium flex items-center",
                children: "Pricing Tiers:"
              }), pricingTiers.map(tier => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {
                onClick: () => setSelectedPricingTier(tier.id),
                className: "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ".concat(selectedPricingTier === tier.id ? 'border-green-400 bg-green-400/20 text-green-400' : 'border-gray-600 bg-white/5 text-gray-300 hover:border-green-400/50 hover:bg-green-400/10'),
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tier.icon, {
                  className: "w-4 h-4"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  children: tier.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-xs bg-white/20 px-2 py-1 rounded-full",
                  children: tier.count
                })]
              }, tier.id))]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
          className: "max-w-7xl mx-auto px-4 pb-20",
          variants: staggerContainer,
          initial: "initial",
          animate: "animate",
          children: [viewMode === 'grid' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "group relative bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300",
              variants: fadeInUp,
              whileHover: {
                y: -5,
                scale: 1.02
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                  className: "text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors",
                  children: service.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-400 text-sm leading-relaxed mb-4",
                  children: service.description
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-sm font-medium text-cyan-400 mb-3",
                  children: "Pricing Tiers"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "space-y-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-sm text-gray-400",
                      children: "Starter:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "font-bold ".concat(getPricingColor(service.pricing.starter)),
                      children: service.pricing.starter
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-sm text-gray-400",
                      children: "Professional:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "font-bold ".concat(getPricingColor(service.pricing.professional)),
                      children: service.pricing.professional
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-sm text-gray-400",
                      children: "Enterprise:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "font-bold ".concat(getPricingColor(service.pricing.enterprise)),
                      children: service.pricing.enterprise
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex flex-wrap gap-2 mb-4",
                children: service.category.slice(0, 3).map((cat, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "px-2 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30",
                  children: cat
                }, idx))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "text-xs text-gray-500 mb-4",
                children: ["Market Size: ", service.marketSize]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                  href: service.contactInfo.website,
                  className: "text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all",
                  children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
                    className: "w-4 h-4"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "text-xs text-gray-500",
                  children: service.type
                })]
              })]
            }, service.id))
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "space-y-4",
            children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "group bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300",
              variants: fadeInUp,
              whileHover: {
                x: 5
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "lg:col-span-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                    className: "text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors",
                    children: service.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                    className: "text-gray-400 mb-4",
                    children: service.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "flex flex-wrap gap-2 mb-4",
                    children: service.category.slice(0, 4).map((cat, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "px-2 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30",
                      children: cat
                    }, idx))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "lg:col-span-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                    className: "text-sm font-medium text-cyan-400 mb-3",
                    children: "Pricing"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "space-y-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-sm text-gray-400",
                        children: "Starter:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "font-bold ".concat(getPricingColor(service.pricing.starter)),
                        children: service.pricing.starter
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-sm text-gray-400",
                        children: "Professional:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "font-bold ".concat(getPricingColor(service.pricing.professional)),
                        children: service.pricing.professional
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-sm text-gray-400",
                        children: "Enterprise:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "font-bold ".concat(getPricingColor(service.pricing.enterprise)),
                        children: service.pricing.enterprise
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "lg:col-span-1 text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-xs text-gray-500 mb-3",
                    children: service.type
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                    href: service.contactInfo.website,
                    className: "inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200",
                    children: "View Details"
                  })]
                })]
              })
            }, service.id))
          }), filteredServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            className: "text-center py-20",
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Search, {
              className: "w-16 h-16 mx-auto mb-4 text-gray-500"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-xl font-semibold text-gray-400 mb-2",
              children: "No services found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-gray-500",
              children: "Try adjusting your search terms, category, or pricing filters"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
          className: "max-w-6xl mx-auto px-4 pb-20",
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
            delay: 1.4
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-2xl font-bold text-center text-white mb-8",
              children: "Pricing Summary"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "text-center p-6 rounded-lg bg-green-500/10 border border-green-500/30",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-lg font-semibold text-green-400 mb-2",
                  children: "Budget Tier"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-300 mb-4",
                  children: "Perfect for startups and small businesses"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "text-2xl font-bold text-green-400 mb-2",
                  children: "Under $1K/month"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "text-sm text-gray-400",
                  children: [allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 1000).length, " services available"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "text-center p-6 rounded-lg bg-yellow-500/10 border border-yellow-500/30",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-lg font-semibold text-yellow-400 mb-2",
                  children: "Mid-Range Tier"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-300 mb-4",
                  children: "Ideal for growing businesses and enterprises"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "text-2xl font-bold text-yellow-400 mb-2",
                  children: "$1K - $5K/month"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "text-sm text-gray-400",
                  children: [allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 1000 && parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) < 5000).length, " services available"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "text-center p-6 rounded-lg bg-red-500/10 border border-red-500/30",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                  className: "text-lg font-semibold text-red-400 mb-2",
                  children: "Enterprise Tier"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-gray-300 mb-4",
                  children: "For large corporations and government agencies"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "text-2xl font-bold text-red-400 mb-2",
                  children: "$5K+/month"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "text-sm text-gray-400",
                  children: [allServices.filter(s => parseFloat(s.pricing.starter.replace(/[^0-9.]/g, '')) >= 5000).length, " services available"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center mt-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-gray-300 mb-4",
                children: "All pricing includes enterprise-grade support, 99.99% uptime guarantee, and 24/7 AI assistance"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                href: "/contact",
                className: "inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-8 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200",
                children: "Contact Sales for Custom Pricing"
              })]
            })]
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnovativePricingShowcase2025);

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

/***/ 675439:
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
/* harmony import */ var private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175788);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2025-innovative-pricing-showcase",
        pathname: "/2025-innovative-pricing-showcase",
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
    userland: private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2025-innovative-pricing-showcase",
    config,
    userland: private_next_pages_2025_innovative_pricing_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(675439)));
module.exports = __webpack_exports__;

})();