"use strict";
(() => {
var exports = {};
exports.id = 543220;
exports.ids = [543220,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 368624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdvancedAIAutomationServices)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7887);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(117442);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var heroStats = [{
  label: 'AI Services Delivered',
  value: '200+',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Brain, {
    className: "w-5 h-5"
  })
}, {
  label: 'Happy AI Clients',
  value: '500+',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Users, {
    className: "w-5 h-5"
  })
}, {
  label: 'AI Success Rate',
  value: '99.8%',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Award, {
    className: "w-5 h-5"
  })
}, {
  label: 'AI ROI Average',
  value: '500%',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.TrendingUp, {
    className: "w-5 h-5"
  })
}];
var serviceCategories = [{
  title: 'AI Development Tools',
  description: 'Advanced AI-powered development and testing automation',
  services: _data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_4__.advancedAIAutomationServices2025.filter(s => s.category === 'AI Development Tools'),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Code,
  color: 'from-emerald-500 to-teal-600',
  features: ['Code Review Automation', 'AI Testing', 'DevOps Intelligence']
}, {
  title: 'AI Testing & Quality Assurance',
  description: 'Intelligent testing automation with AI-driven insights',
  services: _data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_4__.advancedAIAutomationServices2025.filter(s => s.category === 'AI Testing & Quality Assurance'),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.TestTube,
  color: 'from-purple-500 to-indigo-600',
  features: ['Test Generation', 'Performance Testing', 'Quality Assurance']
}, {
  title: 'AI DevOps & Infrastructure',
  description: 'Self-managing infrastructure with AI optimization',
  services: _data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_4__.advancedAIAutomationServices2025.filter(s => s.category === 'AI DevOps & Infrastructure'),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Server,
  color: 'from-blue-500 to-indigo-600',
  features: ['Infrastructure Management', 'Deployment Optimization', 'Performance Monitoring']
}, {
  title: 'AI Cybersecurity',
  description: 'Proactive threat detection and response with AI',
  services: _data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_4__.advancedAIAutomationServices2025.filter(s => s.category === 'AI Cybersecurity'),
  icon: SecurityIcon,
  color: 'from-red-500 to-pink-600',
  features: ['Threat Detection', 'Incident Response', 'Security Automation']
}, {
  title: 'AI Data Management',
  description: 'Intelligent data infrastructure with AI automation',
  services: _data_2025_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_4__.advancedAIAutomationServices2025.filter(s => s.category === 'AI Data Management'),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Database,
  color: 'from-cyan-500 to-blue-600',
  features: ['Pipeline Management', 'Quality Assurance', 'Governance Automation']
}];
var heroFeatures = [{
  title: 'AI-Powered Automation',
  description: 'Advanced AI algorithms that automate complex development, testing, and operations tasks.',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Brain,
  gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
}, {
  title: 'Intelligent Optimization',
  description: 'AI-driven optimization that continuously improves performance, security, and efficiency.',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Sparkles,
  gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
}, {
  title: 'Autonomous Operations',
  description: 'Self-managing systems that operate independently with minimal human intervention.',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Settings,
  gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
}, {
  title: 'Predictive Analytics',
  description: 'AI-powered insights that predict issues before they occur and optimize performance.',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.BarChart3,
  gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
}];
var testimonials = [{
  name: 'Dr. Michael Chen',
  role: 'CTO, TechFlow Solutions',
  company: 'TechFlow Solutions',
  content: 'Zion Tech Group\'s AI automation platform has revolutionized our development process. We\'ve reduced testing time by 90% and improved code quality significantly.',
  rating: 5,
  avatar: '👨‍💻'
}, {
  name: 'Sarah Rodriguez',
  role: 'DevOps Director, CloudScale Inc.',
  company: 'CloudScale Inc.',
  content: 'The autonomous DevOps platform has transformed our infrastructure management. We now have 99.9% uptime with 60% lower operational costs.',
  rating: 5,
  avatar: '👩‍💼'
}, {
  name: 'David Kim',
  role: 'Security Manager, SecureNet Corp.',
  company: 'SecureNet Corp.',
  content: 'Their AI security platform provides proactive threat detection that has prevented multiple security incidents. The ROI has been incredible.',
  rating: 5,
  avatar: '👨‍🔒'
}];
function AdvancedAIAutomationServices() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
        children: "Advanced AI Automation Services - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "description",
        content: "Revolutionary AI automation services for development, testing, DevOps, security, and data management. Transform your operations with intelligent automation."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "keywords",
        content: "AI automation, development automation, testing automation, DevOps automation, security automation, data automation"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:title",
        content: "Advanced AI Automation Services - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:description",
        content: "Revolutionary AI automation services for development, testing, DevOps, security, and data management."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:url",
        content: "https://ziontechgroup.com/advanced-ai-automation-services"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link", {
        rel: "canonical",
        href: "https://ziontechgroup.com/advanced-ai-automation-services"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "relative py-20 lg:py-32 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            className: "text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6",
            children: "Advanced AI Automation Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Transform your development, testing, DevOps, and security operations with revolutionary AI automation that works 24/7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex flex-wrap justify-center gap-4 mb-12",
            children: heroStats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              initial: {
                opacity: 0,
                scale: 0.8
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              },
              className: "flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-cyan-500/30",
              children: [stat.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-cyan-400 font-semibold",
                children: stat.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-gray-300 text-sm",
                children: stat.label
              })]
            }, index))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "#services",
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
              children: ["Explore Services", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ArrowRight, {
                className: "ml-2 w-5 h-5"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "tel:".concat(contactInfo.mobile),
              className: "inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Phone, {
                className: "mr-2 w-5 h-5"
              }), "Get Started"]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-20 bg-gradient-to-b from-black to-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-3xl lg:text-4xl font-bold text-white mb-4",
            children: "Why Choose Our AI Automation Services?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Our AI automation services provide unprecedented efficiency, accuracy, and cost savings across all aspects of technology operations"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: heroFeatures.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
            className: "relative group",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "".concat(feature.gradient, " p-1 rounded-xl"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "bg-gray-900 rounded-xl p-6 h-full",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "".concat(feature.gradient, " w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(feature.icon, {
                      className: "w-8 h-8 text-white"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                    className: "text-xl font-semibold text-white mb-3",
                    children: feature.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "text-gray-300",
                    children: feature.description
                  })]
                })
              })
            })
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      id: "services",
      className: "py-20 bg-black",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-3xl lg:text-4xl font-bold text-white mb-4",
            children: "AI Automation Service Categories"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Comprehensive AI automation solutions covering every aspect of modern technology operations"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "space-y-16",
          children: serviceCategories.map((category, categoryIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8,
              delay: categoryIndex * 0.2
            },
            viewport: {
              once: true
            },
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center mb-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "inline-flex items-center justify-center w-20 h-20 ".concat(category.color, " rounded-2xl mb-6"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(category.icon, {
                  className: "w-10 h-10 text-white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "text-3xl font-bold text-white mb-4",
                children: category.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "text-xl text-gray-300 max-w-2xl mx-auto",
                children: category.description
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8",
              children: category.services.map((service, serviceIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                initial: {
                  opacity: 0,
                  scale: 0.9
                },
                whileInView: {
                  opacity: 1,
                  scale: 1
                },
                transition: {
                  duration: 0.5,
                  delay: serviceIndex * 0.1
                },
                viewport: {
                  once: true
                },
                className: "relative group",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "".concat(service.color, " p-1 rounded-xl"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "bg-gray-900 rounded-xl p-6 h-full",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "text-3xl",
                        children: service.icon
                      }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full",
                        children: "Popular"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                      className: "text-xl font-semibold text-white mb-2",
                      children: service.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                      className: "text-gray-300 text-sm mb-4",
                      children: service.tagline
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        className: "text-2xl font-bold text-white",
                        children: ["$", service.price.monthly]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "text-gray-400",
                        children: "/month"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                      className: "text-gray-300 text-sm mb-4",
                      children: service.description
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "space-y-2 mb-6",
                      children: service.features.slice(0, 3).map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                        className: "flex items-center text-sm text-gray-300",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.CheckCircle, {
                          className: "w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                        }), feature]
                      }, featureIndex))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: service.link,
                        className: "inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300",
                        children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ArrowRight, {
                          className: "ml-1 w-4 h-4"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "tel:".concat(contactInfo.mobile),
                        className: "inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300",
                        children: "Get Started"
                      })]
                    })]
                  })
                })
              }, service.id))
            })]
          }, categoryIndex))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-20 bg-gradient-to-b from-gray-900 to-black",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-3xl lg:text-4xl font-bold text-white mb-4",
            children: "What Our Clients Say"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: "Real feedback from organizations that have transformed their operations with our AI automation services"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: testimonials.map((testimonial, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
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
            className: "bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-center mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-3xl mr-3",
                children: testimonial.avatar
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "text-white font-semibold",
                  children: testimonial.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-cyan-400 text-sm",
                  children: testimonial.role
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-gray-400 text-sm",
                  children: testimonial.company
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-gray-300 mb-4",
              children: testimonial.content
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "flex items-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "flex text-yellow-400",
                children: [...Array(testimonial.rating)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Star, {
                  className: "w-4 h-4 fill-current"
                }, i))
              })
            })]
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
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
            duration: 0.8
          },
          viewport: {
            once: true
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-3xl lg:text-4xl font-bold text-white mb-6",
            children: "Ready to Transform Your Operations with AI Automation?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto",
            children: "Join hundreds of organizations that have already revolutionized their technology operations with our AI automation services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "tel:".concat(contactInfo.mobile),
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Phone, {
                className: "mr-2 w-5 h-5"
              }), "Call Now: ", contactInfo.mobile]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "mailto:".concat(contactInfo.email),
              className: "inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Mail, {
                className: "mr-2 w-5 h-5"
              }), "Email Us"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "mt-8 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: "text-gray-300 mb-2",
              children: ["\uD83D\uDCCD ", contactInfo.address]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: "text-gray-300",
              children: ["\uD83C\uDF10 ", contactInfo.website]
            })]
          })]
        })
      })
    })]
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

/***/ 968989:
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
/* harmony import */ var private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(368624);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/advanced-ai-automation-services",
        pathname: "/advanced-ai-automation-services",
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
    userland: private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/advanced-ai-automation-services",
    config,
    userland: private_next_pages_advanced_ai_automation_services_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(968989)));
module.exports = __webpack_exports__;

})();