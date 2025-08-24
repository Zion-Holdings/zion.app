"use strict";
(() => {
var exports = {};
exports.id = 780181;
exports.ids = [780181,890636];
exports.modules = {

/***/ 300111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RevolutionaryServicesPricing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7887);
/* harmony import */ var _data_2025_advanced_ai_autonomous_ecosystem_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89764);
/* harmony import */ var _data_2025_cutting_edge_it_infrastructure_innovations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(921717);
/* harmony import */ var _data_2025_cutting_edge_it_infrastructure_innovations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_2025_cutting_edge_it_infrastructure_innovations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_2025_revolutionary_micro_saas_innovations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25446);
/* harmony import */ var _data_2025_emerging_technology_breakthroughs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(987683);
/* harmony import */ var _data_2025_specialized_enterprise_solutions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(290960);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





// Import all our revolutionary services






// Combine all services

var allRevolutionaryServices = [..._data_2025_advanced_ai_autonomous_ecosystem_services__WEBPACK_IMPORTED_MODULE_2__.advancedAIAutonomousEcosystemServices2025, ..._data_2025_cutting_edge_it_infrastructure_innovations__WEBPACK_IMPORTED_MODULE_3__.cuttingEdgeITInfrastructureInnovations2025, ..._data_2025_revolutionary_micro_saas_innovations__WEBPACK_IMPORTED_MODULE_4__.revolutionaryMicroSaasInnovations2025, ..._data_2025_emerging_technology_breakthroughs__WEBPACK_IMPORTED_MODULE_5__.emergingTechnologyBreakthroughs2025, ..._data_2025_specialized_enterprise_solutions__WEBPACK_IMPORTED_MODULE_6__.specializedEnterpriseSolutions2025];
var pricingTiers = [{
  name: 'Starter',
  description: 'Perfect for small businesses and startups',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Target, {
    className: "w-8 h-8"
  }),
  color: 'from-green-500 to-emerald-500',
  features: ['Basic service access', 'Standard support', 'Core features', 'Community forum access', 'Basic analytics', 'Email support'],
  popular: false
}, {
  name: 'Professional',
  description: 'Ideal for growing businesses and teams',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Users, {
    className: "w-8 h-8"
  }),
  color: 'from-blue-500 to-purple-500',
  features: ['All Starter features', 'Advanced features', 'Priority support', 'Team collaboration', 'Advanced analytics', 'Phone & email support', 'Custom integrations', 'Training sessions'],
  popular: true
}, {
  name: 'Enterprise',
  description: 'For large organizations with complex needs',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Crown, {
    className: "w-8 h-8"
  }),
  color: 'from-purple-500 to-pink-500',
  features: ['All Professional features', 'Custom development', 'Dedicated support manager', 'SLA guarantees', 'Custom integrations', 'On-site training', 'White-label options', 'Custom AI model training', '24/7 priority support'],
  popular: false
}, {
  name: 'Custom',
  description: 'Tailored solutions for unique requirements',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Sparkles, {
    className: "w-8 h-8"
  }),
  color: 'from-cyan-500 to-blue-500',
  features: ['Everything in Enterprise', 'Custom architecture', 'Dedicated development team', 'Custom AI models', 'Exclusive features', 'Source code access', 'Custom deployment', 'Strategic partnership'],
  popular: false
}];
var ServicePricingCard = _ref => {
  var {
    service,
    tier
  } = _ref;
  var getPricing = tier => {
    switch (tier) {
      case 'Starter':
        return service.pricing.starter;
      case 'Professional':
        return service.pricing.professional || service.pricing.starter;
      case 'Enterprise':
        return service.pricing.enterprise || service.pricing.professional || service.pricing.starter;
      case 'Custom':
        return service.pricing.custom || 'Contact for pricing';
      default:
        return service.pricing.starter;
    }
  };
  var getFeatures = tier => {
    var baseFeatures = service.features.slice(0, 4);
    var advancedFeatures = service.features.slice(4, 8);
    var enterpriseFeatures = service.features.slice(8, 12);
    switch (tier) {
      case 'Starter':
        return baseFeatures;
      case 'Professional':
        return [...baseFeatures, ...advancedFeatures];
      case 'Enterprise':
        return [...baseFeatures, ...advancedFeatures, ...enterpriseFeatures];
      case 'Custom':
        return service.features;
      default:
        return baseFeatures;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
    className: "bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105",
    whileHover: {
      y: -8
    },
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "text-center mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
        className: "text-xl font-bold text-white mb-2",
        children: service.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "text-gray-300 text-sm mb-4",
        children: service.tagline
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "text-3xl font-bold text-cyan-400 mb-2",
        children: getPricing(tier)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "text-sm text-gray-400",
        children: "per month"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
        className: "text-sm font-semibold text-white mb-3",
        children: "Features:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
        className: "space-y-2",
        children: getFeatures(tier).map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          className: "flex items-center text-xs text-gray-300",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
            className: "w-3 h-3 text-cyan-400 mr-2 flex-shrink-0"
          }), feature]
        }, index))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "mb-6 p-3 bg-white/5 rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "text-xs text-gray-400 mb-1",
        children: "Market Size"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "text-sm font-semibold text-green-400",
        children: service.marketSize
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
      onClick: () => window.location.href = service.slug,
      className: "w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group",
      children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.ArrowRight, {
        className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
      })]
    })]
  });
};
var PricingTierCard = _ref2 => {
  var {
    tier,
    isSelected,
    onSelect
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
    className: "relative cursor-pointer transition-all duration-300 ".concat(isSelected ? 'scale-105' : 'hover:scale-102'),
    onClick: onSelect,
    whileHover: {
      y: -4
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "p-6 rounded-2xl border-2 transition-all duration-300 ".concat(isSelected ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' : 'border-white/10 bg-gradient-to-br from-white/5 to-white/10'),
      children: [tier.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "absolute -top-3 left-1/2 transform -translate-x-1/2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full",
          children: "Most Popular"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "text-center mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ".concat(tier.color, " rounded-xl mb-3"),
          children: tier.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
          className: "text-xl font-bold text-white mb-2",
          children: tier.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "text-gray-300 text-sm",
          children: tier.description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
        className: "space-y-3 mb-6",
        children: tier.features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          className: "flex items-center text-sm text-gray-300",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__.Check, {
            className: "w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"
          }), feature]
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "text-center p-3 rounded-lg transition-all duration-300 ".concat(isSelected ? 'bg-cyan-500/20' : 'bg-white/5'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "text-xs text-gray-400 mb-1",
          children: "Select Tier"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "text-sm font-semibold text-cyan-400",
          children: isSelected ? 'Selected' : 'Click to Select'
        })]
      })]
    })
  });
};
function RevolutionaryServicesPricing() {
  var _categories$find;
  var [selectedTier, setSelectedTier] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Professional');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsVisible(true);
  }, []);
  var categories = [{
    id: 'all',
    name: 'All Services',
    count: allRevolutionaryServices.length
  }, {
    id: 'ai-autonomous-ecosystem',
    name: 'AI Autonomous Ecosystem',
    count: _data_2025_advanced_ai_autonomous_ecosystem_services__WEBPACK_IMPORTED_MODULE_2__.advancedAIAutonomousEcosystemServices2025.length
  }, {
    id: 'it-infrastructure-innovations',
    name: 'IT Infrastructure',
    count: _data_2025_cutting_edge_it_infrastructure_innovations__WEBPACK_IMPORTED_MODULE_3__.cuttingEdgeITInfrastructureInnovations2025.length
  }, {
    id: 'revolutionary-micro-saas',
    name: 'Micro SAAS',
    count: _data_2025_revolutionary_micro_saas_innovations__WEBPACK_IMPORTED_MODULE_4__.revolutionaryMicroSaasInnovations2025.length
  }, {
    id: 'emerging-technology',
    name: 'Emerging Tech',
    count: _data_2025_emerging_technology_breakthroughs__WEBPACK_IMPORTED_MODULE_5__.emergingTechnologyBreakthroughs2025.length
  }, {
    id: 'specialized-enterprise',
    name: 'Enterprise',
    count: _data_2025_specialized_enterprise_solutions__WEBPACK_IMPORTED_MODULE_6__.specializedEnterpriseSolutions2025.length
  }];
  var getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    switch (selectedCategory) {
      case 'ai-autonomous-ecosystem':
        return _data_2025_advanced_ai_autonomous_ecosystem_services__WEBPACK_IMPORTED_MODULE_2__.advancedAIAutonomousEcosystemServices2025;
      case 'it-infrastructure-innovations':
        return _data_2025_cutting_edge_it_infrastructure_innovations__WEBPACK_IMPORTED_MODULE_3__.cuttingEdgeITInfrastructureInnovations2025;
      case 'revolutionary-micro-saas':
        return _data_2025_revolutionary_micro_saas_innovations__WEBPACK_IMPORTED_MODULE_4__.revolutionaryMicroSaasInnovations2025;
      case 'emerging-technology':
        return _data_2025_emerging_technology_breakthroughs__WEBPACK_IMPORTED_MODULE_5__.emergingTechnologyBreakthroughs2025;
      case 'specialized-enterprise':
        return _data_2025_specialized_enterprise_solutions__WEBPACK_IMPORTED_MODULE_6__.specializedEnterpriseSolutions2025;
      default:
        return allRevolutionaryServices;
    }
  };
  var filteredServices = getFilteredServices();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "2025 Revolutionary Services Pricing | Zion Tech Group",
      description: "Comprehensive pricing for our revolutionary micro SAAS services, AI autonomous ecosystem, quantum computing solutions, and cutting-edge IT infrastructure innovations.",
      keywords: ["revolutionary services pricing", "AI autonomous ecosystem pricing", "quantum computing pricing", "micro SAAS pricing", "IT infrastructure pricing", "Zion Tech Group"],
      image: "/og-revolutionary-pricing.jpg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
        className: "relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "max-w-7xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 30
            },
            transition: {
              duration: 0.8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
              className: "text-5xl md:text-7xl font-bold text-white mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
                children: "Revolutionary Services"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-white",
                children: "Pricing & Plans"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed",
              children: "Choose the perfect plan for your business needs. All our revolutionary services come with flexible pricing tiers designed to scale with your growth."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                className: "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105",
                children: "Get Started Today"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                className: "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300",
                children: "Contact Sales"
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            className: "text-center mb-16",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 30
            },
            transition: {
              duration: 0.8,
              delay: 0.2
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Choose Your Plan"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Select the pricing tier that best fits your business requirements and scale up as you grow"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
            children: pricingTiers.map((tier, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PricingTierCard, {
              tier: tier,
              isSelected: selectedTier === tier.name,
              onSelect: () => setSelectedTier(tier.name)
            }, tier.name))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
        className: "py-10 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "max-w-7xl mx-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            className: "text-center mb-8",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 30
            },
            transition: {
              duration: 0.8,
              delay: 0.4
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Filter by Category"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "flex flex-wrap justify-center gap-4",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                onClick: () => setSelectedCategory(category.id),
                className: "px-4 py-2 rounded-lg transition-all duration-300 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'),
                children: [category.name, " (", category.count, ")"]
              }, category.id))
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            className: "text-center mb-16",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 30
            },
            transition: {
              duration: 0.8,
              delay: 0.6
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: [selectedCategory === 'all' ? 'All Services' : (_categories$find = categories.find(c => c.id === selectedCategory)) === null || _categories$find === void 0 ? void 0 : _categories$find.name, " Pricing"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: ["Detailed pricing for ", selectedTier, " tier across all ", filteredServices.length, " services"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ServicePricingCard, {
              service: service,
              tier: selectedTier
            }, service.id))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "max-w-4xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 30
            },
            transition: {
              duration: 0.8,
              delay: 0.8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Ready to Get Started?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8",
              children: "Contact our sales team to discuss custom pricing and implementation options"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                className: "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105",
                children: "Contact Sales Team"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                className: "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300",
                children: "Schedule Demo"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "mt-8 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-gray-400 mb-2",
                children: "Contact Information"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-cyan-400 font-semibold",
                children: "kleber@ziontechgroup.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-cyan-400 font-semibold",
                children: "+1 302 464 0950"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-gray-300 text-sm",
                children: "364 E Main St STE 1008 Middletown DE 19709"
              })]
            })]
          })
        })
      })]
    })]
  });
}

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

/***/ 999387:
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
/* harmony import */ var private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(300111);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2025-revolutionary-services-pricing",
        pathname: "/2025-revolutionary-services-pricing",
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
    userland: private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2025-revolutionary-services-pricing",
    config,
    userland: private_next_pages_2025_revolutionary_services_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(999387)));
module.exports = __webpack_exports__;

})();