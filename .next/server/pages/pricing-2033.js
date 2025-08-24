"use strict";
(() => {
var exports = {};
exports.id = 873043;
exports.ids = [873043,890636];
exports.modules = {

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

/***/ 814465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pricing2033Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





var contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
function Pricing2033Page() {
  var [billingCycle, setBillingCycle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('monthly');
  var [selectedPlan, setSelectedPlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // Enhanced service categories with pricing
  var serviceCategories = [{
    name: 'Revolutionary AI Services',
    description: 'AI consciousness evolution and emotional intelligence',
    services: ['AI Consciousness Evolution', 'AI Emotional Intelligence', 'AI Creativity Orchestrator', 'AI Autonomous Business Manager'],
    avgPrice: '$11,499/month',
    savings: 'Save 60-80% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Brain,
    color: 'from-violet-500 to-purple-500'
  }, {
    name: 'Quantum & Emerging Tech',
    description: 'Quantum computing and DNA-based solutions',
    services: ['Quantum DNA Computing', 'Quantum Internet Security', 'Quantum Financial Trading', 'Quantum Creativity Studio'],
    avgPrice: '$19,999/month',
    savings: 'Save 70-85% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Atom,
    color: 'from-indigo-500 to-blue-500'
  }, {
    name: 'Enterprise IT Solutions',
    description: 'Autonomous operations and zero-trust security',
    services: ['Autonomous DevOps', 'Zero Trust Architecture', 'Edge Computing Orchestration', 'AI IT Operations Center'],
    avgPrice: '$649/month',
    savings: 'Save 50-70% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Cpu,
    color: 'from-blue-500 to-cyan-500'
  }, {
    name: 'Space & Metaverse Tech',
    description: 'Space mining and metaverse development',
    services: ['Space Mining Automation', 'Metaverse AI Development', 'AI Health Analytics', 'Holographic Events'],
    avgPrice: '$14,999/month',
    savings: 'Save 65-80% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket,
    color: 'from-teal-500 to-emerald-500'
  }, {
    name: 'Innovative Micro SAAS',
    description: 'Cutting-edge solutions for every business',
    services: ['AI Business Intelligence', 'Quantum-Secure Communication', 'AI Customer Success', 'Blockchain Supply Chain'],
    avgPrice: '$374/month',
    savings: 'Save 40-60% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Target,
    color: 'from-green-500 to-yellow-500'
  }, {
    name: 'Research & Development',
    description: 'Breakthrough technologies and innovations',
    services: ['Neuromorphic Computing', 'Photonic Computing', 'Swarm Robotics', 'Biotech Automation'],
    avgPrice: '$1,099/month',
    savings: 'Save 55-75% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Microscope,
    color: 'from-orange-500 to-red-500'
  }];

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  var pricingTiers = [{
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: billingCycle === 'monthly' ? 99 : 79,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to 100+ Core Services', 'Basic AI Integration', 'Standard Support (24/7)', '30-Day Free Trial', 'Basic Analytics Dashboard', 'Email Support', '99.5% Uptime Guarantee', 'Basic Security Features', 'API Access (1000 calls/month)', 'Community Support'],
    popular: false,
    color: 'from-gray-500 to-gray-600'
  }, {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: billingCycle === 'monthly' ? 299 : 239,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to 200+ Advanced Services', 'Advanced AI Integration', 'Priority Support (24/7)', '60-Day Free Trial', 'Advanced Analytics Dashboard', 'Phone & Email Support', '99.9% Uptime Guarantee', 'Advanced Security Features', 'API Access (10,000 calls/month)', 'Dedicated Account Manager', 'Custom Integrations', 'Advanced Reporting'],
    popular: true,
    color: 'from-purple-500 to-cyan-500'
  }, {
    name: 'Enterprise',
    description: 'For large organizations and enterprises',
    price: billingCycle === 'monthly' ? 999 : 799,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to All 500+ Services', 'Full AI & Quantum Integration', 'Premium Support (24/7)', '90-Day Free Trial', 'Enterprise Analytics Suite', 'Dedicated Support Users', '99.99% Uptime Guarantee', 'Enterprise Security Features', 'Unlimited API Access', 'Dedicated Success Manager', 'Custom Development', 'Advanced Compliance', 'White-label Solutions', 'SLA Guarantees'],
    popular: false,
    color: 'from-blue-500 to-indigo-500'
  }];

  // Popular services with pricing
  var popularServices = [{
    name: 'AI Consciousness Evolution Platform',
    price: '$24,999/month',
    description: 'Develop genuine AI consciousness through advanced neural architecture',
    category: 'AI & Consciousness',
    features: ['Multi-dimensional consciousness mapping', 'Emotional intelligence evolution', 'Self-awareness development'],
    savings: 'Save 70% vs. competitors'
  }, {
    name: 'Quantum DNA Computing Platform',
    price: '$35,999/month',
    description: 'Breakthrough platform combining quantum computing with DNA-based computation',
    category: 'Quantum & Biotech',
    features: ['DNA-based quantum algorithms', 'Biological quantum entanglement', 'DNA memory systems'],
    savings: 'Save 75% vs. competitors'
  }, {
    name: 'Space Mining Automation Platform',
    price: '$45,999/month',
    description: 'Revolutionary platform for automated asteroid mining and resource extraction',
    category: 'Space Technology',
    features: ['Asteroid identification and mapping', 'Automated mining operations', 'Resource extraction algorithms'],
    savings: 'Save 80% vs. competitors'
  }, {
    name: 'AI Business Intelligence Suite',
    price: '$299/month',
    description: 'Comprehensive business intelligence platform powered by artificial intelligence',
    category: 'Micro SAAS',
    features: ['AI-powered analytics', 'Predictive insights', 'Automated reporting'],
    savings: 'Save 50% vs. competitors'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
        children: "2033 Revolutionary Technology Pricing | Zion Tech Group - AI Consciousness, Quantum DNA Computing, Space Mining"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "description",
        content: "Discover competitive pricing for Zion Tech Group's revolutionary 2033 technology solutions. From AI consciousness evolution to quantum DNA computing and space mining automation."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "keywords",
        content: "AI consciousness pricing, quantum DNA computing cost, space mining automation price, neuromorphic computing pricing, photonic computing cost, swarm robotics pricing"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "author",
        content: "Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "robots",
        content: "index, follow"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:title",
        content: "2033 Revolutionary Technology Pricing | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:description",
        content: "Competitive pricing for revolutionary AI consciousness, quantum DNA computing, and space mining automation solutions."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:url",
        content: "https://ziontechgroup.com/pricing-2033"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        property: "og:image",
        content: "https://ziontechgroup.com/og-image.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "twitter:title",
        content: "2033 Revolutionary Technology Pricing | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
        name: "twitter:description",
        content: "Competitive pricing for revolutionary AI consciousness, quantum DNA computing, and space mining automation solutions."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("link", {
        rel: "canonical",
        href: "https://ziontechgroup.com/pricing-2033"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
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
              className: "mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Crown, {
                  className: "w-4 h-4"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  children: "2033 Revolutionary Pricing"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h1, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: 0.1
              },
              className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent",
                children: "Revolutionary Technology"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "text-white",
                children: "Pricing"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: 0.2
              },
              className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8",
              children: "Experience the future of technology with our revolutionary AI consciousness, quantum DNA computing, and space mining automation solutions at competitive prices."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: 0.3
              },
              className: "flex items-center justify-center space-x-4 mb-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "text-sm ".concat(billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'),
                children: "Monthly"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                onClick: () => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly'),
                className: "relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-200",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-transform duration-200 ".concat(billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0')
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                className: "text-sm ".concat(billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'),
                children: ["Yearly", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full",
                  children: "Save 20%"
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative py-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: pricingTiers.map((tier, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: index * 0.1
              },
              className: "relative ".concat(tier.popular ? 'scale-105' : ''),
              children: [tier.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium rounded-full",
                  children: "Most Popular"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "relative bg-gray-900/50 border border-purple-500/30 rounded-2xl p-8 h-full backdrop-blur-sm ".concat(tier.popular ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25' : ''),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "text-center mb-8",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: tier.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    className: "text-gray-400 mb-6",
                    children: tier.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                      className: "text-4xl font-bold text-white",
                      children: ["$", tier.price]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-gray-400",
                      children: tier.period
                    })]
                  }), tier.savings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-green-400 text-sm font-medium",
                    children: tier.savings
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                  className: "space-y-4 mb-8",
                  children: tier.features.map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                    className: "flex items-start space-x-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Check, {
                      className: "w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-gray-300",
                      children: feature
                    })]
                  }, idx))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                  onClick: () => setSelectedPlan(tier.name),
                  className: "w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ".concat(tier.popular ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 shadow-lg' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/30'),
                  children: "Get Started"
                })]
              })]
            }, tier.name))
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative py-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "text-3xl md:text-4xl font-bold text-white mb-6",
              children: "Service Category Pricing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Explore our comprehensive service categories with competitive pricing and significant savings compared to market alternatives."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: serviceCategories.map((category, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: index * 0.1
              },
              className: "bg-gray-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center space-x-3 mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "w-12 h-12 bg-gradient-to-r ".concat(category.color, " rounded-xl flex items-center justify-center"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(category.icon, {
                    className: "w-6 h-6 text-white"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                    className: "text-xl font-bold text-white",
                    children: category.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    className: "text-sm text-gray-400",
                    children: category.description
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "text-3xl font-bold text-purple-400 mb-2",
                  children: category.avgPrice
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "text-green-400 text-sm font-medium",
                  children: category.savings
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                className: "space-y-2 mb-6",
                children: category.services.map((service, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Check, {
                    className: "w-4 h-4 text-green-400 flex-shrink-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "text-sm text-gray-300",
                    children: service
                  })]
                }, idx))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                href: "/services",
                className: "inline-flex items-center space-x-2 text-purple-400 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  children: "Learn More"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ArrowRight, {
                  className: "w-4 h-4"
                })]
              })]
            }, category.name))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative py-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "text-3xl md:text-4xl font-bold text-white mb-6",
              children: "Popular Services"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Our most requested revolutionary technology solutions with competitive pricing and exceptional value."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: popularServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: index * 0.1
              },
              className: "bg-gray-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                    className: "text-xl font-bold text-white mb-2",
                    children: service.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    className: "text-gray-400 text-sm mb-3",
                    children: service.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full",
                    children: service.category
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "text-right ml-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-2xl font-bold text-purple-400",
                    children: service.price
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-green-400 text-xs",
                    children: service.savings
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                className: "space-y-2 mb-6",
                children: service.features.map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Check, {
                    className: "w-4 h-4 text-green-400 flex-shrink-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "text-sm text-gray-300",
                    children: feature
                  })]
                }, idx))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex space-x-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "/contact",
                  className: "flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 text-center",
                  children: "Get Quote"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "tel:".concat(contactInfo.mobile),
                  className: "px-4 py-2 bg-gray-800/50 border border-purple-500/30 text-purple-300 text-sm font-medium rounded-lg hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-200",
                  children: "Call Now"
                })]
              })]
            }, service.name))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative py-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-12 backdrop-blur-sm text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "text-3xl md:text-4xl font-bold text-white mb-6",
              children: "Ready to Transform Your Business?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto",
              children: "Join the future of technology with our revolutionary AI, quantum computing, and cutting-edge solutions. Get in touch with our experts to discuss your transformation journey and pricing options."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                href: "/contact",
                className: "px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25",
                children: ["Start Your Journey", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ArrowRight, {
                  className: "w-5 h-5 ml-2 inline"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                href: "tel:".concat(contactInfo.mobile),
                className: "px-8 py-4 bg-gray-800/50 border border-purple-500/30 text-purple-300 font-medium rounded-lg hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-200",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Phone, {
                  className: "w-5 h-5 mr-2 inline"
                }), "Call Now"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-12 pt-8 border-t border-purple-500/20",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Phone, {
                    className: "w-4 h-4 text-purple-400"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    children: contactInfo.mobile
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Mail, {
                    className: "w-4 h-4 text-purple-400"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    children: contactInfo.email
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.MapPin, {
                    className: "w-4 h-4 text-purple-400"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    children: contactInfo.address
                  })]
                })]
              })
            })]
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 917083:
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
/* harmony import */ var private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(814465);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/pricing-2033",
        pathname: "/pricing-2033",
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
    userland: private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/pricing-2033",
    config,
    userland: private_next_pages_pricing_2033_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(917083)));
module.exports = __webpack_exports__;

})();