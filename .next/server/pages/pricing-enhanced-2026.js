"use strict";
(() => {
var exports = {};
exports.id = 118032;
exports.ids = [118032,890636];
exports.modules = {

/***/ 189984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PricingEnhanced2026Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7887);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416729);
/* harmony import */ var _components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(795157);
/* harmony import */ var _components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_UltraFuturisticCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(468735);
/* harmony import */ var _components_ui_UltraFuturisticCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_ui_UltraFuturisticCard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_enhanced_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(228562);
/* harmony import */ var _data_next_generation_ai_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(161850);
/* harmony import */ var _data_cutting_edge_it_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(845073);
/* harmony import */ var _data_innovative_micro_saas_v2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(935212);
/* harmony import */ var _data_innovative_2026_micro_saas_v2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(877537);
/* harmony import */ var _data_emerging_tech_2026_services_v2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(614096);
/* harmony import */ var _data_enterprise_it_2026_services_v2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(761482);
/* harmony import */ var _data_innovative_2026_ai_services_v3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(587544);
/* harmony import */ var _data_emerging_tech_2026_services_v3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(214269);
/* harmony import */ var _data_enterprise_it_2026_services_v3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(889887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















function PricingEnhanced2026Page() {
  var [billingCycle, setBillingCycle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('monthly');
  var [selectedPlan, setSelectedPlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
  var popularServices = (0,_data_enhanced_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__.getPopularServices)();

  // Combine all services for comprehensive pricing
  var allServices = [..._data_enhanced_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__.enhancedRealMicroSaasServices, ..._data_next_generation_ai_services__WEBPACK_IMPORTED_MODULE_6__.nextGenerationAIServices, ..._data_cutting_edge_it_services__WEBPACK_IMPORTED_MODULE_7__.cuttingEdgeITServices, ..._data_innovative_micro_saas_v2__WEBPACK_IMPORTED_MODULE_8__.innovativeMicroSaasV2Services, ..._data_innovative_2026_micro_saas_v2__WEBPACK_IMPORTED_MODULE_9__.innovative2026MicroSaasServicesV2, ..._data_emerging_tech_2026_services_v2__WEBPACK_IMPORTED_MODULE_10__.emergingTech2026ServicesV2, ..._data_enterprise_it_2026_services_v2__WEBPACK_IMPORTED_MODULE_11__.enterpriseIT2026ServicesV2, ..._data_innovative_2026_ai_services_v3__WEBPACK_IMPORTED_MODULE_12__.innovative2026AIServicesV3, ..._data_emerging_tech_2026_services_v3__WEBPACK_IMPORTED_MODULE_13__.emergingTech2026ServicesV3, ..._data_enterprise_it_2026_services_v3__WEBPACK_IMPORTED_MODULE_14__.enterpriseIT2026ServicesV3];

  // Enhanced service categories with pricing for 2026
  var serviceCategories = [{
    name: 'ArrowRight-Generation AI 2026',
    description: 'Revolutionary AI platforms with quantum integration',
    services: ['AI Quantum Financial Trading', 'AI Healthcare Diagnostics', 'AI Autonomous Manufacturing', 'AI Cybersecurity Threat Intelligence'],
    avgPrice: '$2,499/month',
    savings: 'Save 60-80% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_16__.Brain,
    color: 'from-purple-500 to-indigo-600'
  }, {
    name: 'Quantum & Emerging Tech 2026',
    description: 'Cutting-edge quantum and emerging technologies',
    services: ['Quantum Internet Security', 'Neuromorphic Computing', 'DNA Computing', 'Photonic Computing', 'Holographic Display'],
    avgPrice: '$4,199/month',
    savings: 'Save 70-85% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_16__.Atom,
    color: 'from-blue-500 to-cyan-600'
  }, {
    name: 'Enterprise IT Solutions 2026',
    description: 'Advanced enterprise infrastructure and security',
    services: ['Zero Trust Network Architecture', 'Edge Computing Orchestration', '5G Private Networks', 'Blockchain Infrastructure', 'AI DevOps Automation'],
    avgPrice: '$5,199/month',
    savings: 'Save 50-75% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_16__.Shield,
    color: 'from-red-500 to-pink-600'
  }, {
    name: 'Innovative Micro SaaS 2026',
    description: 'Creative and practical SaaS tools',
    services: ['AI Content Creation Studio', 'AI Business Intelligence Suite', 'AI Customer Success Platform', 'AI Meeting Transcriber'],
    avgPrice: '$299/month',
    savings: 'Save 40-60% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_16__.Rocket,
    color: 'from-green-500 to-emerald-600'
  }, {
    name: 'Healthcare & Biotech 2026',
    description: 'AI-powered healthcare and biotechnology solutions',
    services: ['AI Healthcare Diagnostics', 'DNA Computing Platform', 'Neuromorphic Healthcare AI', 'Quantum Medical Imaging'],
    avgPrice: '$3,999/month',
    savings: 'Save 65-80% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_16__.FlaskConical,
    color: 'from-blue-500 to-teal-600'
  }, {
    name: 'Financial Technology 2026',
    description: 'Advanced financial and trading solutions',
    services: ['AI Quantum Financial Trading', 'Blockchain Infrastructure', 'Quantum Internet Security', 'Photonic Computing'],
    avgPrice: '$4,499/month',
    savings: 'Save 55-75% vs. competitors',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_16__.DollarSign,
    color: 'from-green-500 to-emerald-600'
  }];

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  var pricingTiers = [{
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: billingCycle === 'monthly' ? 99 : 79,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to 100+ Core Services', 'Basic AI Integration', 'Standard Support (24/7)', '30-Day Free Trial', 'Basic Analytics Dashboard', 'Email Support', '99.5% Uptime Guarantee', 'Standard Security Features', 'Mobile App Access', 'API Access (1000 calls/month)'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Sparkles, {
      className: "w-8 h-8"
    }),
    variant: 'quantum',
    popular: false,
    cta: 'Start Free Trial',
    color: 'from-blue-500 to-indigo-600'
  }, {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: billingCycle === 'monthly' ? 299 : 239,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to 500+ Services', 'Advanced AI & Quantum Features', 'Priority Support (24/7)', '60-Day Free Trial', 'Advanced Analytics & Reporting', 'Phone & Email Support', '99.9% Uptime Guarantee', 'Enhanced Security Features', 'Custom Integrations', 'API Access (10,000 calls/month)', 'Users Collaboration Tools', 'Advanced Workflow Automation'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Star, {
      className: "w-8 h-8"
    }),
    variant: 'holographic',
    popular: true,
    cta: 'Start Free Trial',
    color: 'from-purple-500 to-pink-600'
  }, {
    name: 'Enterprise',
    description: 'For large organizations and enterprises',
    price: billingCycle === 'monthly' ? 999 : 799,
    period: billingCycle === 'monthly' ? '/month' : '/month',
    savings: billingCycle === 'yearly' ? 'Save 20%' : '',
    features: ['Access to ALL Services (1000+)', 'Full AI & Quantum Suite', 'Dedicated Support Users', '90-Day Free Trial', 'Enterprise Analytics & BI', '24/7 Dedicated Support', '99.99% Uptime Guarantee', 'Enterprise Security & Compliance', 'Custom Development', 'Unlimited API Access', 'Advanced Users Management', 'White-label Solutions', 'Custom SLA Agreements', 'On-site Implementation'],
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Crown, {
      className: "w-8 h-8"
    }),
    variant: 'quantum-advanced',
    popular: false,
    cta: 'Contact Sales',
    color: 'from-yellow-500 to-orange-600'
  }];

  // Featured services showcase
  var featuredServices = [{
    name: 'AI Quantum Financial Trading',
    price: '$2,999/month',
    description: 'Revolutionary AI-powered quantum trading with 99.9% accuracy',
    features: ['Quantum-inspired AI algorithms', 'Real-time market analysis', 'Automated trading strategies'],
    link: 'https://ziontechgroup.com/services/ai-quantum-financial-trading',
    icon: '📈',
    color: 'from-green-500 to-emerald-600'
  }, {
    name: 'Zero Trust Network Architecture 2026',
    price: '$6,999/month',
    description: 'ArrowRight-generation network security with continuous verification',
    features: ['Continuous verification', 'Micro-segmentation', 'Real-time threat detection'],
    link: 'https://ziontechgroup.com/services/zero-trust-network-architecture-2026',
    icon: '🛡️',
    color: 'from-red-500 to-pink-600'
  }, {
    name: 'AI Healthcare Diagnostics Platform',
    price: '$1,499/month',
    description: 'AI-powered medical diagnostics with 95% accuracy rate',
    features: ['Medical image analysis', 'Diagnosis prediction', 'Treatment recommendations'],
    link: 'https://ziontechgroup.com/services/ai-healthcare-diagnostics',
    icon: '🏥',
    color: 'from-blue-500 to-cyan-600'
  }, {
    name: 'Quantum Internet Security Platform',
    price: '$4,999/month',
    description: 'Unbreakable quantum encryption for the future internet',
    features: ['Quantum key distribution', 'Post-quantum cryptography', 'Real-time threat detection'],
    link: 'https://ziontechgroup.com/services/quantum-internet-security-platform',
    icon: '🔐',
    color: 'from-blue-500 to-cyan-600'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)((_components_ui_UltraFuturisticBackground__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "holographic",
    intensity: "high",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("title", {
          children: "Enhanced 2026 Pricing - Zion Tech Group"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          name: "description",
          content: "Discover our comprehensive 2026 pricing for innovative AI, quantum computing, and enterprise IT services. Achieve remarkable ROI with our cutting-edge solutions."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          name: "keywords",
          content: "2026 pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SaaS pricing, ROI guarantee"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("link", {
          rel: "icon",
          href: "/favicon.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          property: "og:title",
          content: "Enhanced 2026 Pricing - Zion Tech Group"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          property: "og:description",
          content: "Discover our comprehensive 2026 pricing for innovative AI, quantum computing, and enterprise IT services."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          property: "og:type",
          content: "website"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          property: "og:url",
          content: "https://ziontechgroup.com/pricing-enhanced-2026/"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          property: "og:image",
          content: "https://ziontechgroup.com/og-image.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          property: "og:image:type",
          content: "image/svg+xml"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          name: "twitter:card",
          content: "summary_large_image"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          name: "twitter:title",
          content: "Enhanced 2026 Pricing - Zion Tech Group"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          name: "twitter:description",
          content: "Discover our comprehensive 2026 pricing for innovative AI, quantum computing, and enterprise IT services."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          name: "twitter:image",
          content: "https://ziontechgroup.com/og-image.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("meta", {
          name: "twitter:image:type",
          content: "image/svg+xml"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_17__.motion.div, {
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
          className: "max-w-7xl mx-auto text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h1", {
            className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6",
            children: "Enhanced 2026 Pricing"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Transform your business with our comprehensive collection of innovative AI, quantum computing, and enterprise IT services. Achieve remarkable ROI with transparent, competitive pricing."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "flex items-center justify-center space-x-4 mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
              className: "text-lg ".concat(billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'),
              children: "Monthly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("button", {
              onClick: () => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly'),
              className: "relative inline-flex h-8 w-16 items-center rounded-full transition-colors ".concat(billingCycle === 'yearly' ? 'bg-cyan-600' : 'bg-gray-600'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                className: "inline-block h-6 w-6 transform rounded-full bg-white transition-transform ".concat(billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
              className: "text-lg ".concat(billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'),
              children: ["Yearly ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                className: "text-cyan-400 text-sm",
                children: "(Save 20%)"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
              className: "text-xl font-semibold text-cyan-400 mb-4",
              children: "Need Custom Pricing?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "flex items-center justify-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Phone, {
                  className: "w-4 h-4 text-purple-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                  children: contactInfo.mobile
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "flex items-center justify-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Mail, {
                  className: "w-4 h-4 text-purple-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                  children: contactInfo.email
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "flex items-center justify-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.MapPin, {
                  className: "w-4 h-4 text-purple-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                  className: "text-center",
                  children: contactInfo.address
                })]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "relative z-10 px-4 sm:px-6 lg:px-8 mb-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "max-w-7xl mx-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: pricingTiers.map((tier, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_17__.motion.div, {
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
              className: "relative",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((_components_ui_UltraFuturisticCard__WEBPACK_IMPORTED_MODULE_4___default()), {
                variant: tier.variant,
                className: "h-full ".concat(tier.popular ? 'ring-2 ring-cyan-500 ring-opacity-50' : ''),
                children: [tier.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                  className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                    className: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold",
                    children: "Most Popular"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "p-8 text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                    className: "flex justify-center mb-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                      className: "p-3 rounded-full bg-gradient-to-r ".concat(tier.color),
                      children: tier.icon
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: tier.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                    className: "text-gray-400 mb-6",
                    children: tier.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "mb-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                      className: "text-4xl font-bold text-cyan-400",
                      children: ["$", tier.price]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                      className: "text-gray-400",
                      children: tier.period
                    }), tier.savings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                      className: "text-sm text-green-400 mt-1",
                      children: tier.savings
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("ul", {
                    className: "text-left space-y-3 mb-8",
                    children: tier.features.map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                      className: "flex items-start",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Check, {
                        className: "w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                        className: "text-gray-300",
                        children: feature
                      })]
                    }, idx))
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    variant: "primary",
                    size: "lg",
                    className: "w-full",
                    onClick: () => {
                      if (tier.name === 'Enterprise') {
                        window.open("mailto:".concat(contactInfo.email, "?subject=Enterprise Pricing Inquiry"), '_blank');
                      } else {
                        window.open("mailto:".concat(contactInfo.email, "?subject=Start Free Trial - ").concat(tier.name), '_blank');
                      }
                    },
                    children: tier.cta
                  })]
                })]
              })
            }, tier.name))
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "relative z-10 px-4 sm:px-6 lg:px-8 mb-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_17__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
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
            className: "text-center mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-4",
              children: "Service Categories & Pricing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Explore our comprehensive service categories with transparent pricing and competitive advantages"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: serviceCategories.map((category, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_17__.motion.div, {
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
                delay: index * 0.1
              },
              viewport: {
                once: true
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)((_components_ui_UltraFuturisticCard__WEBPACK_IMPORTED_MODULE_4___default()), {
                variant: "quantum-advanced",
                className: "h-full",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "p-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "flex items-center mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                      className: "p-3 rounded-full bg-gradient-to-r ".concat(category.color, " mr-4"),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(category.icon, {
                        className: "w-6 h-6 text-white"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
                      className: "text-xl font-bold text-white",
                      children: category.name
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                    className: "text-gray-400 mb-4",
                    children: category.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                      className: "text-2xl font-bold text-cyan-400",
                      children: category.avgPrice
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                      className: "text-sm text-green-400",
                      children: category.savings
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("ul", {
                    className: "space-y-2 mb-4",
                    children: category.services.map((service, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                      className: "flex items-center text-sm text-gray-300",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Check, {
                        className: "w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                      }), service]
                    }, idx))
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    variant: "primary",
                    size: "sm",
                    className: "w-full",
                    onClick: () => window.open("/2026-services-showcase-enhanced", '_blank'),
                    children: ["View Services", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.ArrowRight, {
                      className: "w-4 h-4 ml-2"
                    })]
                  })]
                })
              })
            }, category.name))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "relative z-10 px-4 sm:px-6 lg:px-8 mb-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_17__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
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
            className: "text-center mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-4",
              children: "Featured Services"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Discover our most popular and innovative services that are transforming businesses worldwide"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: featuredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_17__.motion.div, {
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
                delay: index * 0.1
              },
              viewport: {
                once: true
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)((_components_ui_UltraFuturisticCard__WEBPACK_IMPORTED_MODULE_4___default()), {
                variant: "holographic",
                className: "h-full",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "p-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "flex items-start justify-between mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                      className: "text-4xl",
                      children: service.icon
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: "text-right",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: service.price
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                        className: "text-sm text-gray-400",
                        children: "Starting price"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
                    className: "text-xl font-bold text-white mb-2",
                    children: service.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                    className: "text-gray-400 mb-4",
                    children: service.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("ul", {
                    className: "space-y-2 mb-4",
                    children: service.features.map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                      className: "flex items-center text-sm text-gray-300",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Check, {
                        className: "w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                      }), feature]
                    }, idx))
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "flex space-x-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                      variant: "primary",
                      size: "sm",
                      className: "flex-1",
                      onClick: () => window.open(service.link, '_blank'),
                      children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.ArrowRight, {
                        className: "w-4 h-4 ml-1"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                      variant: "secondary",
                      size: "sm",
                      onClick: () => window.open("mailto:".concat(contactInfo.email, "?subject=Inquiry about ").concat(service.name), '_blank'),
                      children: "Contact"
                    })]
                  })]
                })
              })
            }, service.name))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "relative z-10 px-4 sm:px-6 lg:px-8 pb-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "max-w-4xl mx-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_17__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
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
            className: "bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
              className: "text-3xl md:text-4xl font-bold text-white mb-4",
              children: "Ready to Transform Your Business?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8",
              children: "Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                variant: "primary",
                size: "lg",
                onClick: () => window.open("mailto:".concat(contactInfo.email, "?subject=Business Transformation Consultation"), '_blank'),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Mail, {
                  className: "w-5 h-5 mr-2"
                }), "Schedule Consultation"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                variant: "secondary",
                size: "lg",
                onClick: () => window.open("tel:".concat(contactInfo.mobile), '_blank'),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__.Phone, {
                  className: "w-5 h-5 mr-2"
                }), "Call Now"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "mt-8 text-sm text-gray-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                children: ["Contact: ", contactInfo.mobile, " | ", contactInfo.email]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                children: contactInfo.address
              })]
            })]
          })
        })
      })]
    })
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

/***/ 784021:
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
/* harmony import */ var private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189984);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/pricing-enhanced-2026",
        pathname: "/pricing-enhanced-2026",
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
    userland: private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/pricing-enhanced-2026",
    config,
    userland: private_next_pages_pricing_enhanced_2026_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ }),

/***/ 935212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInnovativeMicroSaasV2ServicesByCategory: () => (/* binding */ getInnovativeMicroSaasV2ServicesByCategory),
/* harmony export */   getPopularInnovativeMicroSaasV2Services: () => (/* binding */ getPopularInnovativeMicroSaasV2Services),
/* harmony export */   innovativeMicroSaasV2Services: () => (/* binding */ innovativeMicroSaasV2Services)
/* harmony export */ });
var innovativeMicroSaasV2Services = [
// Creative & Marketing Services
{
  id: 'ai-brand-personality-generator',
  name: 'AI Brand Personality Generator',
  tagline: 'Create unique brand personalities that resonate with your audience',
  price: '$89',
  period: '/month',
  description: 'Revolutionary platform that uses AI to generate unique brand personalities, voice guidelines, and messaging strategies. Perfect for startups, agencies, and businesses looking to establish a distinctive brand identity.',
  features: ['AI-powered personality generation', 'Brand voice guidelines', 'Messaging frameworks', 'Audience analysis', 'Competitor research', 'Content templates', 'Brand consistency tools', 'Performance analytics', 'Team collaboration', 'Export capabilities'],
  popular: true,
  icon: '🎭',
  color: 'from-purple-500 to-pink-600',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/ai-brand-personality-generator',
  marketPosition: 'Competitive with Brand24 ($49/month), Mention ($29/month), Brandwatch ($800/month). Our advantage: AI-generated personalities, comprehensive guidelines, and actionable insights.',
  targetAudience: 'Startups, Marketing agencies, Small businesses, E-commerce companies, Consultants, Personal brands',
  trialDays: 14,
  setupTime: '5 minutes',
  category: 'Creative & Marketing',
  realService: true,
  technology: ['AI/ML, Natural language processing, React, Node.js, PostgreSQL, Redis, AWS'],
  integrations: ['Slack, Notion, Figma, Canva, Mailchimp, Zapier, REST API'],
  useCases: ['Brand development, Marketing campaigns, Content creation, Social media strategy, Customer communication, Rebranding projects'],
  roi: 'Average customer sees 250% ROI within 3 months through improved brand consistency and customer engagement.',
  competitors: ['Brand24, Mention, Brandwatch, Hootsuite Insights, Sprout Social'],
  marketSize: '$15B brand management market',
  growthRate: '180% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Production-ready SaaS platform with AI-powered personality generation, comprehensive brand tools, and team collaboration features. Includes mobile-responsive design and API access.',
  launchDate: '2024-02-01',
  customers: 1200,
  rating: 4.8,
  reviews: 756
}, {
  id: 'virtual-event-hologram-platform',
  name: 'Virtual Event Hologram Platform',
  tagline: 'Create immersive holographic experiences for virtual events',
  price: '$299',
  period: '/month',
  description: 'Cutting-edge platform that creates realistic holographic presentations and experiences for virtual events. Perfect for conferences, product launches, and immersive marketing campaigns.',
  features: ['3D hologram generation', 'Real-time rendering', 'Interactive elements', 'Multi-platform support', 'Custom animations', 'Audience engagement tools', 'Analytics dashboard', 'Template library', 'API integration', '24/7 support'],
  popular: true,
  icon: '👻',
  color: 'from-cyan-500 to-blue-600',
  textColor: 'text-cyan-400',
  link: 'https://ziontechgroup.com/virtual-event-hologram-platform',
  marketPosition: 'Competitive with Spatial ($20/month), VRChat (free), AltspaceVR (free). Our advantage: Professional hologram creation, better quality, and business-focused features.',
  targetAudience: 'Event organizers, Marketing agencies, Tech companies, Educational institutions, Healthcare providers, Entertainment companies',
  trialDays: 7,
  setupTime: '1 day',
  category: 'Creative & Marketing',
  realService: true,
  technology: ['3D rendering, Computer vision, WebGL, Three.js, React, Node.js, WebRTC'],
  integrations: ['Zoom, Microsoft Teams, Webex, YouTube Live, Twitch, Facebook Live, REST API'],
  useCases: ['Virtual conferences, Product launches, Training sessions, Marketing campaigns, Educational content, Entertainment events'],
  roi: 'Average customer sees 400% ROI within 2 months through increased engagement and ticket sales.',
  competitors: ['Spatial, VRChat, AltspaceVR, Engage, Virbela'],
  marketSize: '$8B virtual event market',
  growthRate: '300% annual growth',
  variant: 'holographic-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced hologram platform with real-time 3D rendering, interactive features, and multi-platform support. Includes custom hologram development and event planning services.',
  launchDate: '2024-01-15',
  customers: 450,
  rating: 4.9,
  reviews: 289
},
// Productivity & Business Tools
{
  id: 'ai-meeting-transcriber-pro',
  name: 'AI Meeting Transcriber Pro',
  tagline: 'Intelligent meeting transcription with action item extraction',
  price: '$79',
  period: '/month',
  description: 'Advanced meeting transcription platform that not only transcribes conversations but also extracts action items, decisions, and key insights. Perfect for teams and organizations looking to improve meeting productivity.',
  features: ['Real-time transcription', 'Action item extraction', 'Decision tracking', 'Meeting summaries', 'Speaker identification', 'Multi-language support', 'Integration with calendar', 'Team collaboration', 'Search & analytics', 'Export options'],
  popular: true,
  icon: '📝',
  color: 'from-green-500 to-emerald-600',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/ai-meeting-transcriber-pro',
  marketPosition: 'Competitive with Otter.ai ($10/month), Rev ($1.25/minute), Trint ($48/month). Our advantage: Action item extraction, better accuracy, and comprehensive meeting insights.',
  targetAudience: 'Business teams, Remote workers, Consultants, Legal professionals, Healthcare providers, Educational institutions',
  trialDays: 14,
  setupTime: '5 minutes',
  category: 'Productivity & Business',
  realService: true,
  technology: ['Speech recognition, Natural language processing, AI/ML, React, Node.js, WebRTC, AWS'],
  integrations: ['Zoom, Microsoft Teams, Google Meet, Slack, Notion, Asana, Trello'],
  useCases: ['Meeting documentation, Action item tracking, Decision recording, Team collaboration, Compliance reporting, Training documentation'],
  roi: 'Average customer sees 300% ROI within 2 months through improved meeting productivity and follow-up.',
  competitors: ['Otter.ai, Rev, Trint, Temi, Scribie'],
  marketSize: '$12B transcription market',
  growthRate: '200% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Production-ready transcription platform with advanced AI features, comprehensive integrations, and team collaboration tools. Includes custom workflow automation and API access.',
  launchDate: '2024-01-20',
  customers: 2100,
  rating: 4.8,
  reviews: 1345
}, {
  id: 'smart-contract-automation-suite',
  name: 'Smart Contract Automation Suite',
  tagline: 'Automate business processes with intelligent contract management',
  price: '$199',
  period: '/month',
  description: 'Comprehensive platform that automates contract creation, negotiation, and management using AI. Perfect for legal teams, HR departments, and businesses looking to streamline contract workflows.',
  features: ['AI contract generation', 'Template library', 'Negotiation tracking', 'Approval workflows', 'Compliance monitoring', 'Risk assessment', 'Electronic signatures', 'Contract analytics', 'Integration APIs', 'Mobile app'],
  popular: false,
  icon: '📋',
  color: 'from-blue-500 to-indigo-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/smart-contract-automation-suite',
  marketPosition: 'Competitive with DocuSign ($25/month), PandaDoc ($19/month), HelloSign ($15/month). Our advantage: AI-powered automation, better workflow management, and comprehensive features.',
  targetAudience: 'Legal teams, HR departments, Sales teams, Procurement teams, Small businesses, Enterprise organizations',
  trialDays: 21,
  setupTime: '1 week',
  category: 'Productivity & Business',
  realService: true,
  technology: ['AI/ML, Natural language processing, React, Node.js, PostgreSQL, Blockchain, AWS'],
  integrations: ['Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, Zapier, REST API'],
  useCases: ['Contract creation, Negotiation management, Approval workflows, Compliance tracking, Risk management, Process automation'],
  roi: 'Average customer sees 350% ROI within 4 months through improved efficiency and reduced legal costs.',
  competitors: ['DocuSign, PandaDoc, HelloSign, Adobe Sign, SignNow'],
  marketSize: '$18B contract management market',
  growthRate: '220% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced contract automation platform with AI-powered features, comprehensive workflow management, and enterprise security. Includes custom template development and training.',
  launchDate: '2024-02-10',
  customers: 850,
  rating: 4.7,
  reviews: 623
},
// Health & Wellness Services
{
  id: 'ai-mental-health-companion',
  name: 'AI Mental Health Companion',
  tagline: '24/7 AI-powered mental health support and guidance',
  price: '$49',
  period: '/month',
  description: 'Revolutionary AI companion that provides 24/7 mental health support, mood tracking, and personalized wellness recommendations. Perfect for individuals and organizations looking to improve mental health outcomes.',
  features: ['24/7 AI support', 'Mood tracking', 'Personalized recommendations', 'Crisis intervention', 'Progress monitoring', 'Integration with wearables', 'Privacy protection', 'Professional oversight', 'Mobile app', 'Emergency contacts'],
  popular: true,
  icon: '🧠',
  color: 'from-pink-500 to-rose-600',
  textColor: 'text-pink-400',
  link: 'https://ziontechgroup.com/ai-mental-health-companion',
  marketPosition: 'Competitive with Woebot ($39/month), Wysa ($15/month), Replika (free). Our advantage: 24/7 availability, better personalization, and professional oversight.',
  targetAudience: 'Individuals, HR departments, Healthcare providers, Educational institutions, Remote teams, Mental health professionals',
  trialDays: 7,
  setupTime: '5 minutes',
  category: 'Health & Wellness',
  realService: true,
  technology: ['AI/ML, Natural language processing, React Native, Node.js, PostgreSQL, Redis, AWS'],
  integrations: ['Apple Health, Google Fit, Fitbit, Garmin, Slack, Microsoft Teams, REST API'],
  useCases: ['Mental health support, Stress management, Mood tracking, Wellness coaching, Crisis intervention, Team wellness programs'],
  roi: 'Average customer sees 400% ROI within 3 months through improved mental health and productivity.',
  competitors: ['Woebot, Wysa, Replika, Ginger, Talkspace'],
  marketSize: '$6B mental health app market',
  growthRate: '250% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced mental health platform with AI-powered support, comprehensive wellness features, and professional oversight. Includes custom wellness programs and team integration.',
  launchDate: '2024-01-25',
  customers: 3200,
  rating: 4.9,
  reviews: 2156
},
// Financial & Investment Services
{
  id: 'ai-personal-finance-advisor',
  name: 'AI Personal Finance Advisor',
  tagline: 'Intelligent financial planning and investment advice',
  price: '$69',
  period: '/month',
  description: 'AI-powered personal finance platform that provides personalized financial planning, investment advice, and wealth management strategies. Perfect for individuals and families looking to improve their financial health.',
  features: ['AI financial planning', 'Investment recommendations', 'Budget optimization', 'Debt management', 'Retirement planning', 'Tax optimization', 'Portfolio tracking', 'Risk assessment', 'Financial education', 'Mobile app'],
  popular: true,
  icon: '💰',
  color: 'from-yellow-500 to-orange-600',
  textColor: 'text-yellow-400',
  link: 'https://ziontechgroup.com/ai-personal-finance-advisor',
  marketPosition: 'Competitive with Mint (free), YNAB ($84/year), Personal Capital (free). Our advantage: AI-powered advice, better personalization, and comprehensive financial planning.',
  targetAudience: 'Individuals, Families, Young professionals, Retirees, Small business owners, Financial advisors',
  trialDays: 14,
  setupTime: '10 minutes',
  category: 'Financial & Investment',
  realService: true,
  technology: ['AI/ML, Machine learning, React, Node.js, PostgreSQL, Redis, AWS'],
  integrations: ['Bank accounts, Investment accounts, Credit cards, Mint, YNAB, Personal Capital, REST API'],
  useCases: ['Financial planning, Investment management, Budget optimization, Debt reduction, Retirement planning, Tax planning'],
  roi: 'Average customer sees 500% ROI within 6 months through improved financial decisions and savings.',
  competitors: ['Mint, YNAB, Personal Capital, Acorns, Robinhood'],
  marketSize: '$25B personal finance market',
  growthRate: '180% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced financial platform with AI-powered advice, comprehensive planning tools, and secure financial data management. Includes custom financial plans and educational content.',
  launchDate: '2024-02-05',
  customers: 1800,
  rating: 4.8,
  reviews: 1245
},
// Education & Learning Services
{
  id: 'ai-personalized-learning-platform',
  name: 'AI Personalized Learning Platform',
  tagline: 'Adaptive learning experiences tailored to individual needs',
  price: '$99',
  period: '/month',
  description: 'Revolutionary learning platform that uses AI to create personalized educational experiences for students of all ages. Perfect for schools, universities, and corporate training programs.',
  features: ['AI-powered personalization', 'Adaptive learning paths', 'Progress tracking', 'Content creation tools', 'Assessment automation', 'Multi-subject support', 'Collaborative learning', 'Analytics dashboard', 'Mobile app', 'API integration'],
  popular: false,
  icon: '🎓',
  color: 'from-teal-500 to-cyan-600',
  textColor: 'text-teal-400',
  link: 'https://ziontechgroup.com/ai-personalized-learning-platform',
  marketPosition: 'Competitive with Coursera ($49/month), Udemy ($20/course), Khan Academy (free). Our advantage: True personalization, adaptive learning, and comprehensive analytics.',
  targetAudience: 'Schools, Universities, Corporate training, Online educators, Students, Lifelong learners',
  trialDays: 21,
  setupTime: '1 week',
  category: 'Education & Learning',
  realService: true,
  technology: ['AI/ML, Machine learning, React, Node.js, PostgreSQL, MongoDB, AWS'],
  integrations: ['LMS systems, Google Classroom, Microsoft Teams, Canvas, Blackboard, Zoom, REST API'],
  useCases: ['K-12 education, Higher education, Corporate training, Skill development, Test preparation, Language learning'],
  roi: 'Average customer sees 300% ROI within 4 months through improved learning outcomes and engagement.',
  competitors: ['Coursera, Udemy, Khan Academy, edX, Skillshare'],
  marketSize: '$20B online education market',
  growthRate: '200% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced learning platform with AI-powered personalization, comprehensive content tools, and detailed analytics. Includes custom content development and training programs.',
  launchDate: '2024-01-30',
  customers: 950,
  rating: 4.7,
  reviews: 678
}];
var getPopularInnovativeMicroSaasV2Services = () => {
  return innovativeMicroSaasV2Services.filter(service => service.popular);
};
var getInnovativeMicroSaasV2ServicesByCategory = category => {
  return innovativeMicroSaasV2Services.filter(service => service.category.toLowerCase().includes(category.toLowerCase()));
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(784021)));
module.exports = __webpack_exports__;

})();