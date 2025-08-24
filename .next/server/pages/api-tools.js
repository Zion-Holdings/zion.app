"use strict";
(() => {
var exports = {};
exports.id = 737554;
exports.ids = [737554,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 340422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiToolsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338423);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416729);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function ApiToolsPage() {
  var apiTools = [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Code, {
      className: "w-8 h-8 text-white"
    }),
    title: 'CodeGen API - AI-Powered Code Generation',
    description: 'Generate production-ready code in multiple languages using natural language descriptions and AI.',
    features: ['Support for 20+ programming languages', 'Real-time code completion and suggestions', 'Custom code templates and patterns', 'Integration with popular IDEs', 'Code review and optimization suggestions'],
    pricing: {
      free: '100 requests/month',
      pro: '$49/month',
      enterprise: 'Custom'
    },
    category: 'Development',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    gradient: 'from-blue-400 to-cyan-500',
    website: 'https://codegen.api',
    docs: 'https://docs.codegen.api',
    github: 'https://github.com/codegen-api',
    status: 'Live',
    users: '15,000+',
    rating: 4.8,
    responseTime: '<100ms'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Database, {
      className: "w-8 h-8 text-white"
    }),
    title: 'DataSync API - Real-time Data Synchronization',
    description: 'Seamlessly sync data across multiple databases, applications, and cloud services in real-time.',
    features: ['Multi-database support (PostgreSQL, MySQL, MongoDB)', 'Real-time change detection and propagation', 'Conflict resolution and data validation', 'Webhook support for custom integrations', 'Comprehensive audit logging and monitoring'],
    pricing: {
      free: '1,000 syncs/month',
      pro: '$79/month',
      enterprise: 'Custom'
    },
    category: 'Data',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    gradient: 'from-green-400 to-emerald-500',
    website: 'https://datasync.api',
    docs: 'https://docs.datasync.api',
    github: 'https://github.com/datasync-api',
    status: 'Live',
    users: '8,500+',
    rating: 4.9,
    responseTime: '<50ms'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
      className: "w-8 h-8 text-white"
    }),
    title: 'GeoAPI - Advanced Geospatial Services',
    description: 'Comprehensive geolocation, mapping, and spatial analysis APIs for location-based applications.',
    features: ['Global geocoding and reverse geocoding', 'Real-time traffic and routing optimization', 'Geofencing and location tracking', 'Map visualization and customization', 'Spatial data analysis and clustering'],
    pricing: {
      free: '10,000 requests/month',
      pro: '$99/month',
      enterprise: 'Custom'
    },
    category: 'Location',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    gradient: 'from-purple-400 to-pink-500',
    website: 'https://geo.api',
    docs: 'https://docs.geo.api',
    github: 'https://github.com/geo-api',
    status: 'Live',
    users: '12,000+',
    rating: 4.7,
    responseTime: '<75ms'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield, {
      className: "w-8 h-8 text-white"
    }),
    title: 'AuthGuard API - Enterprise Authentication',
    description: 'Secure, scalable authentication and authorization system with advanced security features.',
    features: ['Multi-factor authentication (MFA)', 'OAuth 2.0 and OpenID Connect support', 'Role-based access control (RBAC)', 'Advanced threat detection and prevention', 'Compliance with SOC2, GDPR, and HIPAA'],
    pricing: {
      free: '1,000 users/month',
      pro: '$149/month',
      enterprise: 'Custom'
    },
    category: 'Security',
    color: 'bg-gradient-to-br from-red-500 to-orange-600',
    gradient: 'from-red-400 to-orange-500',
    website: 'https://authguard.api',
    docs: 'https://docs.authguard.api',
    github: 'https://github.com/authguard-api',
    status: 'Live',
    users: '6,800+',
    rating: 4.9,
    responseTime: '<25ms'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
      className: "w-8 h-8 text-white"
    }),
    title: 'WebhookHub - Intelligent Webhook Management',
    description: 'Reliable webhook delivery, retry logic, and event processing for modern applications.',
    features: ['Guaranteed webhook delivery with retry logic', 'Event filtering and transformation', 'Real-time monitoring and analytics', 'Custom authentication and security', 'Integration with popular platforms'],
    pricing: {
      free: '5,000 webhooks/month',
      pro: '$39/month',
      enterprise: 'Custom'
    },
    category: 'Integration',
    color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    gradient: 'from-yellow-400 to-orange-500',
    website: 'https://webhookhub.api',
    docs: 'https://docs.webhookhub.api',
    github: 'https://github.com/webhookhub-api',
    status: 'Live',
    users: '9,200+',
    rating: 4.8,
    responseTime: '<30ms'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Bot, {
      className: "w-8 h-8 text-white"
    }),
    title: 'NLP API - Natural Language Processing',
    description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.',
    features: ['Text classification and categorization', 'Sentiment analysis and emotion detection', 'Named entity recognition (NER)', 'Language detection and translation', 'Custom model training and fine-tuning'],
    pricing: {
      free: '5,000 requests/month',
      pro: '$69/month',
      enterprise: 'Custom'
    },
    category: 'AI/ML',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    gradient: 'from-indigo-400 to-purple-500',
    website: 'https://nlp.api',
    docs: 'https://docs.nlp.api',
    github: 'https://github.com/nlp-api',
    status: 'Live',
    users: '11,500+',
    rating: 4.7,
    responseTime: '<200ms'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3, {
      className: "w-8 h-8 text-white"
    }),
    title: 'Analytics API - Business Intelligence',
    description: 'Comprehensive analytics and reporting APIs for data-driven decision making.',
    features: ['Real-time data aggregation and analysis', 'Custom dashboard creation and sharing', 'Advanced filtering and segmentation', 'Export capabilities (CSV, JSON, PDF)', 'Scheduled reports and alerts'],
    pricing: {
      free: '10,000 events/month',
      pro: '$89/month',
      enterprise: 'Custom'
    },
    category: 'Analytics',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    gradient: 'from-teal-400 to-cyan-500',
    website: 'https://analytics.api',
    docs: 'https://docs.analytics.api',
    github: 'https://github.com/analytics-api',
    status: 'Live',
    users: '7,800+',
    rating: 4.8,
    responseTime: '<150ms'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Lock, {
      className: "w-8 h-8 text-white"
    }),
    title: 'EncryptAPI - Data Encryption Services',
    description: 'Enterprise-grade encryption, hashing, and cryptographic operations for secure applications.',
    features: ['AES-256 encryption and decryption', 'Secure key management and rotation', 'Digital signatures and certificates', 'Compliance with FIPS 140-2 standards', 'Hardware security module (HSM) support'],
    pricing: {
      free: '1,000 operations/month',
      pro: '$119/month',
      enterprise: 'Custom'
    },
    category: 'Security',
    color: 'bg-gradient-to-br from-gray-500 to-slate-600',
    gradient: 'from-gray-400 to-slate-500',
    website: 'https://encrypt.api',
    docs: 'https://docs.encrypt.api',
    github: 'https://github.com/encrypt-api',
    status: 'Live',
    users: '4,200+',
    rating: 4.9,
    responseTime: '<20ms'
  }];
  var categories = ['All', 'Development', 'Data', 'Location', 'Security', 'Integration', 'AI/ML', 'Analytics'];
  var [selectedCategory, setSelectedCategory] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('All');
  var filteredTools = selectedCategory === 'All' ? apiTools : apiTools.filter(tool => tool.category === selectedCategory);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "API Tools & Developer Services | Zion Tech Group - Powerful APIs for Modern Applications"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "description",
        content: "Discover powerful APIs and developer tools for building modern applications. From AI-powered code generation to real-time data synchronization, we provide the building blocks you need."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:title",
        content: "API Tools & Developer Services | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:description",
        content: "Powerful APIs and developer tools for modern applications. AI, security, analytics, and more."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Terminal, {
            className: "w-4 h-4 mr-2"
          }), "Developer-First API Solutions"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight",
          children: "Powerful API Tools & Services"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed",
          children: "Build faster, scale better, and deliver more with our comprehensive collection of developer APIs. Each tool is designed for performance, reliability, and ease of integration."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "flex flex-wrap justify-center gap-4 mb-8",
          children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            onClick: () => setSelectedCategory(category),
            className: "px-6 py-3 rounded-full font-medium transition-all duration-300 ".concat(selectedCategory === category ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'),
            children: category
          }, category))
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-24 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold mb-6 text-white",
            children: selectedCategory === 'All' ? 'All API Tools' : "".concat(selectedCategory, " APIs")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: [filteredTools.length, " APIs available. Each tool is production-ready with comprehensive documentation, SDKs, and support."]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: filteredTools.map((tool, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "group border border-gray-800 hover:border-indigo-500/30 transition-all duration-300",
            style: {
              animationDelay: "".concat(index * 0.1, "s")
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-start space-x-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ".concat(tool.color, " shadow-xl group-hover:scale-110 transition-transform duration-300"),
                  children: tool.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "absolute -inset-2 bg-gradient-to-r from-transparent via-".concat(tool.gradient, " to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                    className: "text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300",
                    children: tool.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "flex items-center text-yellow-400",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                        className: "w-4 h-4 fill-current"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                        className: "ml-1 text-sm font-medium",
                        children: tool.rating
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium",
                      children: tool.status
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-gray-400 leading-relaxed mb-6",
                  children: tool.description
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "grid grid-cols-3 gap-4 mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-center p-3 bg-gray-800/50 rounded-lg",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-lg font-bold text-indigo-400",
                      children: tool.users
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-xs text-gray-500",
                      children: "Users"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-center p-3 bg-gray-800/50 rounded-lg",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-lg font-bold text-green-400",
                      children: tool.responseTime
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-xs text-gray-500",
                      children: "Response"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-center p-3 bg-gray-800/50 rounded-lg",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-sm font-medium text-gray-300",
                      children: "Starting at"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-lg font-bold text-green-400",
                      children: tool.pricing.free
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                  className: "space-y-2 mb-6",
                  children: tool.features.slice(0, 3).map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                    className: "flex items-center text-gray-300 text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                      className: "w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                    }), feature]
                  }, featureIndex))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: tool.website,
                    variant: "primary",
                    size: "sm",
                    className: "bg-indigo-600 hover:bg-indigo-700",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {
                      className: "w-4 h-4 mr-2"
                    }), "Visit API"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: tool.docs,
                    variant: "outline",
                    size: "sm",
                    className: "border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.BookOpen, {
                      className: "w-4 h-4 mr-2"
                    }), "Documentation"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: tool.github,
                    variant: "ghost",
                    size: "sm",
                    className: "text-gray-400 hover:text-indigo-400",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Github, {
                      className: "w-4 h-4 mr-2"
                    }), "GitHub"]
                  })]
                })]
              })]
            })
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-24 bg-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold mb-6 text-white",
            children: "Developer Resources"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: "Everything you need to get started and build amazing applications with our APIs."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center border border-gray-700 hover:border-indigo-500/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.BookOpen, {
                className: "w-8 h-8 text-indigo-400"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Comprehensive Documentation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Detailed API references, code examples, and integration guides for every service."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "/docs",
              variant: "outline",
              size: "sm",
              children: ["Explore Docs", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                className: "w-4 h-4 ml-2"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center border border-gray-700 hover:border-indigo-500/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Play, {
                className: "w-8 h-8 text-indigo-400"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Interactive Playground"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Test APIs directly in your browser with our interactive testing environment."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "/playground",
              variant: "outline",
              size: "sm",
              children: ["Try Playground", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                className: "w-4 h-4 ml-2"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center border border-gray-700 hover:border-indigo-500/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Github, {
                className: "w-8 h-8 text-indigo-400"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Open Source SDKs"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Official SDKs and client libraries for popular programming languages and frameworks."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "/sdk",
              variant: "outline",
              size: "sm",
              children: ["Browse SDKs", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                className: "w-4 h-4 ml-2"
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-4xl sm:text-5xl font-bold text-white mb-8",
          children: "Ready to Build Something Amazing?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed",
          children: "Start integrating our APIs today and join thousands of developers building the future."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-6 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            variant: "secondary",
            size: "lg",
            className: "bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl",
            children: ["Get API Access", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
              className: "w-5 h-5 ml-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/docs",
            variant: "outline",
            size: "lg",
            className: "border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl",
            children: "View Documentation"
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 369241:
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
/* harmony import */ var private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(340422);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/api-tools",
        pathname: "/api-tools",
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
    userland: private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/api-tools",
    config,
    userland: private_next_pages_api_tools_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(369241)));
module.exports = __webpack_exports__;

})();