"use strict";
(() => {
var exports = {};
exports.id = 281954;
exports.ids = [281954,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 493094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Revolutionary2025Pricing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7887);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416729);
/* harmony import */ var _components_ui_UltraQuantumHolographicBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(436694);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_revolutionary_2025_ai_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(489219);
/* harmony import */ var _data_revolutionary_2025_it_infrastructure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(284633);
/* harmony import */ var _data_revolutionary_2025_micro_saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(956425);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











function Revolutionary2025Pricing() {
  var [billingCycle, setBillingCycle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('monthly');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all revolutionary services
  var allRevolutionaryServices = [..._data_revolutionary_2025_ai_services__WEBPACK_IMPORTED_MODULE_5__.revolutionaryAI2025Services, ..._data_revolutionary_2025_it_infrastructure__WEBPACK_IMPORTED_MODULE_6__.revolutionaryITInfrastructure2025Services, ..._data_revolutionary_2025_micro_saas__WEBPACK_IMPORTED_MODULE_7__.revolutionary2025MicroSaasServices];

  // Service categories
  var serviceCategories = [{
    id: 'all',
    name: 'All Services',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__.Sparkles,
    count: allRevolutionaryServices.length
  }, {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__.Brain,
    count: _data_revolutionary_2025_ai_services__WEBPACK_IMPORTED_MODULE_5__.revolutionaryAI2025Services.length
  }, {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__.Cpu,
    count: _data_revolutionary_2025_it_infrastructure__WEBPACK_IMPORTED_MODULE_6__.revolutionaryITInfrastructure2025Services.length
  }, {
    id: 'saas',
    name: 'Micro SaaS',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__.Zap,
    count: _data_revolutionary_2025_micro_saas__WEBPACK_IMPORTED_MODULE_7__.revolutionary2025MicroSaasServices.length
  }];

  // Filter services based on selected category
  var filteredServices = selectedCategory === 'all' ? allRevolutionaryServices : allRevolutionaryServices.filter(service => {
    if (selectedCategory === 'ai') return service.category.includes('AI');
    if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing');
    if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative');
    return true;
  });

  // Calculate pricing with billing cycle
  var getPrice = service => {
    var basePrice = parseInt(service.price.replace('$', '').replace(',', ''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly
    }
    return basePrice;
  };

  // Pricing tiers for comparison
  var pricingTiers = [{
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: billingCycle === 'monthly' ? 99 : 79,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to 25+ Core Services', 'Basic AI Integration', 'Standard Support (24/7)', '30-Day Free Trial', 'Basic Analytics Dashboard', 'Email Support', '99.5% Uptime Guarantee', 'Standard Security Features'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Sparkles, {
      className: "w-8 h-8"
    }),
    variant: 'quantum',
    popular: false,
    cta: 'Start Free Trial',
    ctaVariant: 'secondary'
  }, {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: billingCycle === 'monthly' ? 299 : 239,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to 50+ Services', 'Advanced AI Integration', 'Priority Support (24/7)', '60-Day Free Trial', 'Advanced Analytics Dashboard', 'Phone & Email Support', '99.9% Uptime Guarantee', 'Advanced Security Features', 'Custom Integrations', 'Performance Monitoring'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Rocket, {
      className: "w-8 h-8"
    }),
    variant: 'ai-futuristic',
    popular: true,
    cta: 'Start Free Trial',
    ctaVariant: 'primary'
  }, {
    name: 'Enterprise',
    description: 'For large organizations and enterprises',
    price: billingCycle === 'monthly' ? 999 : 799,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to ALL Services', 'Full AI & Quantum Integration', 'Dedicated Support Team', '90-Day Free Trial', 'Enterprise Analytics Suite', '24/7 Dedicated Support', '99.99% Uptime Guarantee', 'Enterprise Security Features', 'Custom Development', 'White-label Solutions', 'API Access', 'SLA Guarantees'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Crown, {
      className: "w-8 h-8"
    }),
    variant: 'quantum-futuristic',
    popular: false,
    cta: 'Contact Sales',
    ctaVariant: 'primary'
  }];

  // Market analysis
  var marketAnalysis = {
    totalMarketSize: '$150B+',
    growthRate: '250% annually',
    customerSatisfaction: '98%',
    averageROI: '500%',
    timeToValue: '< 30 days',
    globalReach: '150+ countries'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ui_UltraQuantumHolographicBackground__WEBPACK_IMPORTED_MODULE_3__["default"], {
      intensity: 2.0,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "min-h-screen",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("title", {
            children: "Revolutionary 2025 Pricing - Zion Tech Group"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            name: "description",
            content: "Competitive pricing for cutting-edge AI, quantum computing, and IT infrastructure services. Contact: +1 302 464 0950"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            name: "keywords",
            content: "AI pricing, quantum computing pricing, IT infrastructure pricing, Zion Tech Group, revolutionary technology pricing"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            name: "author",
            content: "Zion Tech Group"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            name: "robots",
            content: "index, follow"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            property: "og:title",
            content: "Revolutionary 2025 Pricing - Zion Tech Group"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            property: "og:description",
            content: "Competitive pricing for cutting-edge AI, quantum computing, and IT infrastructure services. Contact: +1 302 464 0950"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            property: "og:url",
            content: "https://ziontechgroup.com/revolutionary-2025-pricing"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
            property: "og:type",
            content: "website"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("link", {
            rel: "canonical",
            href: "https://ziontechgroup.com/revolutionary-2025-pricing"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "relative py-20 px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "max-w-7xl mx-auto text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
                className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6",
                children: "Revolutionary 2025 Pricing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
                children: "Experience the future of technology at competitive prices. Our revolutionary services deliver 10x better performance at 50% lower costs than traditional solutions."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex items-center justify-center gap-4 mb-12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Monthly"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  onClick: () => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly'),
                  className: "relative inline-flex h-8 w-16 items-center rounded-full transition-colors ".concat(billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "inline-block h-6 w-6 transform rounded-full bg-white transition-transform ".concat(billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1')
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Yearly (Save 20%)"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                    delay: 0.1
                  },
                  className: "bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-2xl font-bold text-blue-400",
                    children: marketAnalysis.totalMarketSize
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Market Size"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                    delay: 0.2
                  },
                  className: "bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-2xl font-bold text-green-400",
                    children: marketAnalysis.growthRate
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Growth Rate"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                    delay: 0.3
                  },
                  className: "bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-2xl font-bold text-purple-400",
                    children: marketAnalysis.customerSatisfaction
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Satisfaction"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                    delay: 0.4
                  },
                  className: "bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-2xl font-bold text-orange-400",
                    children: marketAnalysis.averageROI
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Average ROI"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                    delay: 0.5
                  },
                  className: "bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-2xl font-bold text-cyan-400",
                    children: marketAnalysis.timeToValue
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Time to Value"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                    delay: 0.6
                  },
                  className: "bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-2xl font-bold text-pink-400",
                    children: marketAnalysis.globalReach
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Global Reach"
                  })]
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "py-20 px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-6",
                children: "Choose Your Transformation Plan"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "text-xl text-gray-300 max-w-3xl mx-auto",
                children: "Start with our starter plan and scale up as you grow. All plans include our revolutionary AI and quantum computing services."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
              children: pricingTiers.map((tier, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
                  delay: index * 0.2
                },
                viewport: {
                  once: true
                },
                className: "relative ".concat(tier.popular ? 'scale-105 border-2 border-blue-500' : 'border border-gray-700', " bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8"),
                children: [tier.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold",
                    children: "Most Popular"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "text-center mb-8",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4",
                    children: tier.icon
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: tier.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                    className: "text-gray-400 mb-6",
                    children: tier.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                      className: "text-4xl font-bold text-white",
                      children: ["$", tier.price]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      className: "text-gray-400",
                      children: tier.period
                    })]
                  }), tier.savings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "text-green-400 text-sm font-semibold mb-6",
                    children: tier.savings
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
                  className: "space-y-4 mb-8",
                  children: tier.features.map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
                    className: "flex items-start gap-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Check, {
                      className: "w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      className: "text-gray-300",
                      children: feature
                    })]
                  }, featureIndex))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: tier.ctaVariant,
                  size: "lg",
                  className: "w-full",
                  children: tier.cta
                })]
              }, tier.name))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "py-20 px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-6",
                children: "Individual Service Pricing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "text-xl text-gray-300 max-w-3xl mx-auto",
                children: "Choose individual services or bundle them for maximum savings. All services include free trials and comprehensive support."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "flex flex-wrap justify-center gap-4 mb-12",
              children: serviceCategories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                onClick: () => setSelectedCategory(category.id),
                className: "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 text-white' : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(category.icon, {
                  className: "w-5 h-5"
                }), category.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "bg-white/20 px-2 py-1 rounded-full text-xs",
                  children: category.count
                })]
              }, category.id))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: filteredServices.map(service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.5,
                  delay: 0.1
                },
                viewport: {
                  once: true
                },
                className: "group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-start justify-between mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "text-3xl",
                      children: service.icon
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                        className: "text-xl font-bold text-white group-hover:text-blue-400 transition-colors",
                        children: service.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                        className: "text-gray-400 text-sm",
                        children: service.tagline
                      })]
                    })]
                  }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Star, {
                      className: "w-3 h-3"
                    }), "Popular"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                  className: "text-gray-300 mb-4 line-clamp-3",
                  children: service.description
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                      className: "text-2xl font-bold text-blue-400",
                      children: ["$", getPrice(service)]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      className: "text-gray-400",
                      children: service.period
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Star, {
                      className: "w-4 h-4 text-yellow-400 fill-current"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      className: "text-white",
                      children: service.rating
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                      className: "text-gray-400 text-sm",
                      children: ["(", service.reviews, ")"]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
                    className: "text-sm font-semibold text-gray-300 mb-2",
                    children: "Key Features:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "grid grid-cols-1 gap-1",
                    children: [service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "flex items-center gap-2 text-sm text-gray-400",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                        className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                      }), feature]
                    }, idx)), service.features.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "text-xs text-gray-500 mt-1",
                      children: ["+", service.features.length - 3, " more features"]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "mb-4 p-3 bg-gray-800/50 rounded-lg",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
                    className: "text-xs font-semibold text-gray-300 mb-1",
                    children: "Market Position:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                    className: "text-xs text-gray-400 line-clamp-2",
                    children: service.marketPosition
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "primary",
                    size: "sm",
                    className: "flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.ExternalLink, {
                      className: "w-4 h-4 mr-2"
                    }), "Learn More"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "secondary",
                    size: "sm",
                    className: "border-blue-500 text-blue-400 hover:bg-blue-500/20",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Phone, {
                      className: "w-4 h-4"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                })]
              }, service.id))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "py-20 px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "max-w-4xl mx-auto text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-6",
                children: "Ready to Get Started?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "text-xl text-gray-300 mb-8",
                children: "Contact our team to discuss your specific needs and get a custom quote. We offer flexible pricing and payment options to fit your budget."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Phone, {
                    className: "w-8 h-8 text-blue-400 mx-auto mb-3"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                    className: "text-lg font-semibold text-white mb-2",
                    children: "Call Us"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                    className: "text-blue-400 font-mono",
                    children: contactInfo.mobile
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Mail, {
                    className: "w-8 h-8 text-green-400 mx-auto mb-3"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                    className: "text-lg font-semibold text-white mb-2",
                    children: "Email Us"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                    className: "text-green-400",
                    children: contactInfo.email
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.MapPin, {
                    className: "w-8 h-8 text-purple-400 mx-auto mb-3"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                    className: "text-lg font-semibold text-white mb-2",
                    children: "Visit Us"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                    className: "text-purple-400 text-sm",
                    children: contactInfo.address
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "primary",
                  size: "lg",
                  className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Phone, {
                    className: "w-5 h-5 mr-2"
                  }), "Get Custom Quote"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "secondary",
                  size: "lg",
                  className: "border-blue-500 text-blue-400 hover:bg-blue-500/20",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.BookOpen, {
                    className: "w-5 h-5 mr-2"
                  }), "Download Pricing Guide"]
                })]
              })]
            })
          })
        })]
      })
    })
  });
}

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

/***/ 885807:
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
/* harmony import */ var private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(493094);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/revolutionary-2025-pricing",
        pathname: "/revolutionary-2025-pricing",
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
    userland: private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/revolutionary-2025-pricing",
    config,
    userland: private_next_pages_revolutionary_2025_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(885807)));
module.exports = __webpack_exports__;

})();