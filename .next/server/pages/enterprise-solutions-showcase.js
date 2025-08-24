"use strict";
(() => {
var exports = {};
exports.id = 301976;
exports.ids = [301976,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 549318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enterpriseITSolutions: () => (/* binding */ enterpriseITSolutions)
/* harmony export */ });
var contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var enterpriseITSolutions = [{
  id: 'enterprise-sso-scim-accelerator-2034',
  name: 'Enterprise SSO + SCIM Accelerator',
  tagline: 'Ship enterprise SSO and provisioning 5x faster',
  price: '$299',
  period: '/month',
  description: 'Production-grade SAML/OIDC with SCIM provisioning adapters, test suites, audit logs, and branding for faster enterprise deals.',
  features: ['SAML/OIDC providers ready-to-go', 'SCIM provisioning adapters', 'Compliance-friendly audit logs', 'End-to-end conformance tests', 'Tenant branding and theming', 'Example enterprise app'],
  popular: true,
  icon: '🔐',
  color: 'from-indigo-700 to-purple-800',
  textColor: 'text-indigo-300',
  link: 'https://ziontechgroup.com/services/sso-scim-accelerator',
  marketPosition: 'Alternative to custom builds; complements WorkOS/Auth0 PS.',
  targetAudience: 'SaaS teams targeting enterprise procurement',
  trialDays: 14,
  setupTime: '3–7 days',
  category: 'Enterprise IT',
  realService: true,
  technology: ['NextAuth', 'WorkOS/Custom', 'Node.js'],
  integrations: ['Okta', 'Azure AD', 'Google Workspace', 'OneLogin'],
  useCases: ['Enterprise pilots', 'User lifecycle', 'SSO rollout'],
  roi: 'Shorten security reviews by 50–70%',
  competitors: ['WorkOS', 'Auth0 PS'],
  marketSize: '$6B identity',
  growthRate: '20% CAGR',
  variant: 'quantum-cyberpunk',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'Adapters, sample app, e2e tests, and docs.',
  launchDate: '2025-03-17',
  customers: 4,
  rating: 4.8,
  reviews: 2
}, {
  id: 'managed-apple-mdm-2034',
  name: 'Managed Apple MDM (ABM/DEP)',
  tagline: 'Zero‑touch enrollment and compliance for macOS/iOS fleets',
  price: '$8',
  period: '/device/month',
  description: 'Design and operate Apple MDM with ABM/DEP, app management, profiles, and compliance checks. Includes runbooks and SLAs.',
  features: ['ABM/DEP integration', 'App and profile management', 'Compliance and reporting', 'Incident playbooks', 'Onboarding automation', 'Helpdesk workflows'],
  popular: false,
  icon: '🍎',
  color: 'from-rose-700 to-red-800',
  textColor: 'text-rose-200',
  link: 'https://ziontechgroup.com/services/apple-mdm-suite',
  marketPosition: 'Brings SMB-friendly services to Apple fleet ops.',
  targetAudience: 'IT teams, MSPs',
  trialDays: 0,
  setupTime: '2–4 weeks',
  category: 'Enterprise IT',
  realService: true,
  technology: ['ABM/DEP', 'MDM'],
  integrations: ['Jamf', 'Kandji'],
  useCases: ['Zero‑touch onboarding', 'Compliance', 'App lifecycle'],
  roi: 'Reduce manual device setup by 90%',
  competitors: ['Jamf PS', 'Kandji PS'],
  marketSize: '$2B MDM services',
  growthRate: '18% CAGR',
  variant: 'itsm-futuristic',
  contactInfo: contact,
  realImplementation: true,
  implementationDetails: 'ABM/DEP setup, profile catalog, compliance dashboards.',
  launchDate: '2025-03-22',
  customers: 3,
  rating: 4.6,
  reviews: 2
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

/***/ 814144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnterpriseSolutionsShowcase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7887);
/* harmony import */ var _data_2034_enterprise_it_solutions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549318);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





// Import enterprise IT solutions


var contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var solutionCategories = [{
  id: 'all',
  title: '🏢 All Enterprise Solutions',
  description: 'Complete portfolio of enterprise IT solutions',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Building,
  color: 'from-blue-500 to-purple-500',
  solutions: _data_2034_enterprise_it_solutions__WEBPACK_IMPORTED_MODULE_2__.enterpriseITSolutions,
  gradient: 'from-blue-500/20 to-purple-500/20'
}, {
  id: 'Enterprise Security',
  title: '🔒 Enterprise Security',
  description: 'Advanced security solutions for enterprise protection',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield,
  color: 'from-red-500 to-pink-500',
  solutions: _data_2034_enterprise_it_solutions__WEBPACK_IMPORTED_MODULE_2__.enterpriseITSolutions.filter(s => s.category === 'Enterprise Security'),
  gradient: 'from-red-500/20 to-pink-500/20'
}, {
  id: 'DevOps & Automation',
  title: '⚙️ DevOps & Automation',
  description: 'Intelligent automation and DevOps solutions',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.GitBranch,
  color: 'from-green-500 to-emerald-500',
  solutions: _data_2034_enterprise_it_solutions__WEBPACK_IMPORTED_MODULE_2__.enterpriseITSolutions.filter(s => s.category === 'DevOps & Automation'),
  gradient: 'from-green-500/20 to-emerald-500/20'
}, {
  id: 'Data & Analytics',
  title: '📊 Data & Analytics',
  description: 'Enterprise data analytics and business intelligence',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.BarChart3,
  color: 'from-indigo-500 to-blue-500',
  solutions: _data_2034_enterprise_it_solutions__WEBPACK_IMPORTED_MODULE_2__.enterpriseITSolutions.filter(s => s.category === 'Data & Analytics'),
  gradient: 'from-indigo-500/20 to-blue-500/20'
}, {
  id: 'Cloud Services',
  title: '☁️ Cloud Services',
  description: 'Cloud migration and transformation solutions',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Cloud,
  color: 'from-cyan-500 to-blue-500',
  solutions: _data_2034_enterprise_it_solutions__WEBPACK_IMPORTED_MODULE_2__.enterpriseITSolutions.filter(s => s.category === 'Cloud Services'),
  gradient: 'from-cyan-500/20 to-blue-500/20'
}, {
  id: 'Cybersecurity',
  title: '🛡️ Cybersecurity',
  description: 'Comprehensive cybersecurity and threat protection',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.ShieldCheck,
  color: 'from-orange-500 to-red-500',
  solutions: _data_2034_enterprise_it_solutions__WEBPACK_IMPORTED_MODULE_2__.enterpriseITSolutions.filter(s => s.category === 'Cybersecurity'),
  gradient: 'from-orange-500/20 to-red-500/20'
}];
function EnterpriseSolutionsShowcase() {
  var _solutionCategories$f, _solutionCategories$f2;
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [priceRange, setSelectedPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var filteredSolutions = ((_solutionCategories$f = solutionCategories.find(cat => cat.id === selectedCategory)) === null || _solutionCategories$f === void 0 ? void 0 : _solutionCategories$f.solutions) || [].filter(solution => {
    var matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) || solution.description.toLowerCase().includes(searchTerm.toLowerCase()) || solution.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    if (priceRange === 'all') return matchesSearch;

    // Handle different pricing structures
    var priceValue = 0;
    if (solution.pricing.starter) {
      priceValue = parseInt(solution.pricing.starter.replace(/[^0-9]/g, ''));
    }
    switch (priceRange) {
      case 'low':
        return matchesSearch && priceValue < 3000;
      case 'medium':
        return matchesSearch && priceValue >= 3000 && priceValue < 8000;
      case 'high':
        return matchesSearch && priceValue >= 8000;
      default:
        return matchesSearch;
    }
  });
  var getCategoryIcon = category => {
    switch (category) {
      case 'Enterprise Security':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield, {
          className: "w-6 h-6 text-red-400"
        });
      case 'DevOps & Automation':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.GitBranch, {
          className: "w-6 h-6 text-green-400"
        });
      case 'Data & Analytics':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.BarChart3, {
          className: "w-6 h-6 text-indigo-400"
        });
      case 'Cloud Services':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Cloud, {
          className: "w-6 h-6 text-cyan-400"
        });
      case 'Cybersecurity':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ShieldCheck, {
          className: "w-6 h-6 text-orange-400"
        });
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Building, {
          className: "w-6 h-6 text-blue-400"
        });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
        children: "Enterprise IT Solutions Showcase | Zion Tech Group - Security, DevOps, Analytics, Cloud"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "description",
        content: "Discover our comprehensive enterprise IT solutions: Zero Trust Security, AI-Powered DevOps, Data Analytics, Cloud Migration, and Cybersecurity Operations Center."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "keywords",
        content: "enterprise IT solutions, zero trust security, DevOps automation, data analytics, cloud migration, cybersecurity, enterprise software"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "author",
        content: "Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "robots",
        content: "index, follow"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:title",
        content: "Enterprise IT Solutions Showcase | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:description",
        content: "Comprehensive enterprise IT solutions for security, DevOps, analytics, and cloud transformation."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:url",
        content: "https://ziontechgroup.com/enterprise-solutions-showcase"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "contact:phone",
        content: "+1 302 464 0950"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "contact:email",
        content: "kleber@ziontechgroup.com"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "contact:address",
        content: "364 E Main St STE 1008 Middletown DE 19709"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
        rel: "canonical",
        href: "https://ziontechgroup.com/enterprise-solutions-showcase"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "min-h-screen bg-black text-white pt-24",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "py-20 relative overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "absolute inset-0 pointer-events-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-full blur-3xl"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Building, {
                className: "w-4 h-4 mr-2 text-blue-400"
              }), "Enterprise IT Solutions"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h1", {
              className: "text-4xl md:text-6xl font-bold text-white mb-6",
              children: ["Enterprise ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent",
                children: "Solutions"
              }), " for the Digital Age"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Transform your enterprise with cutting-edge IT solutions: Zero Trust Security, AI-Powered DevOps, Advanced Analytics, Cloud Migration, and 24/7 Cybersecurity Operations."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
            className: "mb-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col lg:flex-row gap-6 items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "relative flex-1 max-w-md",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Search, {
                  className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                  type: "text",
                  placeholder: "Search enterprise solutions...",
                  value: searchTerm,
                  onChange: e => setSearchTerm(e.target.value),
                  className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "flex flex-wrap gap-2",
                children: solutionCategories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {
                  onClick: () => setSelectedCategory(category.id),
                  whileHover: {
                    scale: 1.05
                  },
                  whileTap: {
                    scale: 0.95
                  },
                  className: "px-4 py-2 rounded-lg border transition-all duration-200 flex items-center space-x-2 ".concat(selectedCategory === category.id ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500 text-white shadow-lg shadow-blue-500/25' : 'bg-black/50 border-blue-500/30 text-gray-300 hover:border-blue-500/50 hover:text-blue-300'),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(category.icon, {
                    className: "w-4 h-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "hidden sm:inline",
                    children: category.title.replace(/(?:[\u2601\u2699]|\uD83D[\uDCCA\uDD12\uDDBC\uDEE1])/g, '').trim()
                  })]
                }, category.id))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Filter, {
                  className: "w-5 h-5 text-blue-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                  value: priceRange,
                  onChange: e => setSelectedPriceRange(e.target.value),
                  className: "px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "all",
                    children: "All Prices"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "low",
                    children: "Under $3K/month"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "medium",
                    children: "$3K - $8K/month"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "high",
                    children: "Over $8K/month"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  onClick: () => setViewMode('grid'),
                  className: "p-2 rounded-lg border transition-all duration-200 ".concat(viewMode === 'grid' ? 'bg-blue-500/20 border-blue-500 text-blue-300' : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                      d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  onClick: () => setViewMode('list'),
                  className: "p-2 rounded-lg border transition-all duration-200 ".concat(viewMode === 'list' ? 'bg-blue-500/20 border-blue-500 text-blue-300' : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                      fillRule: "evenodd",
                      d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                      clipRule: "evenodd"
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
            className: "text-center mb-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "text-gray-300",
              children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-blue-400 font-semibold",
                children: filteredSolutions.length
              }), " enterprise solutions", selectedCategory !== 'all' && " in ".concat((_solutionCategories$f2 = solutionCategories.find(cat => cat.id === selectedCategory)) === null || _solutionCategories$f2 === void 0 ? void 0 : _solutionCategories$f2.title.replace(/(?:[\u2601\u2699]|\uD83D[\uDCCA\uDD12\uDDBC\uDEE1])/g, '').trim())]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: filteredSolutions.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
            className: viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6",
            children: filteredSolutions.map((solution, index) => {
              var _solutionCategories$f3;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
                whileHover: {
                  y: -8
                },
                className: "group relative ".concat(viewMode === 'list' ? 'flex items-start space-x-6' : ''),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "relative bg-gradient-to-br ".concat(((_solutionCategories$f3 = solutionCategories.find(cat => cat.id === solution.category)) === null || _solutionCategories$f3 === void 0 ? void 0 : _solutionCategories$f3.gradient) || 'from-gray-500/20 to-slate-500/20', " border border-blue-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 ").concat(viewMode === 'list' ? 'flex-1' : ''),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "absolute top-4 right-4 flex items-center space-x-2",
                    children: [getCategoryIcon(solution.category), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                      className: "text-xs font-medium text-blue-300 bg-black/50 px-2 py-1 rounded-full",
                      children: solution.category
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "mb-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                      className: "text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors",
                      children: solution.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      className: "text-blue-300 text-sm font-medium mb-2",
                      children: solution.tagline
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      className: "text-gray-300 text-sm leading-relaxed",
                      children: solution.description
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "mb-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                      className: "text-sm font-semibold text-blue-300 mb-3",
                      children: "Key Features"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "space-y-2",
                      children: [solution.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "flex items-start space-x-2",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                          className: "w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "text-xs text-gray-300",
                          children: feature
                        })]
                      }, idx)), solution.features.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "text-xs text-blue-400",
                        children: ["+", solution.features.length - 3, " more features"]
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "mb-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                      className: "text-sm font-semibold text-blue-300 mb-2",
                      children: "Starting at"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "text-2xl font-bold text-white",
                      children: solution.pricing.starter
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "text-xs text-gray-400",
                      children: solution.pricing.professional
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "mb-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "flex items-center justify-between text-xs",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "text-gray-400",
                        children: "Market Size:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "text-green-400 font-medium",
                        children: solution.marketSize
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "flex items-center justify-between text-xs mt-1",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "text-gray-400",
                        children: "Customers:"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                        className: "text-blue-400 font-medium",
                        children: [solution.customerCount, "+"]
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "flex flex-col space-y-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                      href: solution.demo,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      whileHover: {
                        scale: 1.02
                      },
                      whileTap: {
                        scale: 0.98
                      },
                      className: "flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        children: "View Demo"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ExternalLink, {
                        className: "w-4 h-4"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                      href: "mailto:".concat(solution.contact, "?subject=Inquiry about ").concat(solution.name),
                      whileHover: {
                        scale: 1.02
                      },
                      whileTap: {
                        scale: 0.98
                      },
                      className: "flex items-center justify-center space-x-2 px-4 py-3 bg-black/50 border border-blue-500/30 text-blue-300 font-medium rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-200",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Mail, {
                        className: "w-4 h-4"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        children: "Contact Sales"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  })]
                })
              }, solution.id);
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
            className: "text-center py-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-6xl mb-6",
              children: "\uD83D\uDD0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "No solutions found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-gray-300 mb-8",
              children: "Try adjusting your search terms or filters to find the enterprise solutions you're looking for."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: () => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              },
              className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200",
              children: "Clear Filters"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
            className: "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 border border-blue-500/30 rounded-3xl p-12 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: ["Ready to Transform Your ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",
                children: "Enterprise"
              }), "?"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto",
              children: "Join leading enterprises that trust Zion Tech Group for their digital transformation. Our expert team is ready to guide you through your enterprise IT journey."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-6 justify-center mb-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                href: "/contact",
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                className: "inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-blue-500/25",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: "Get Enterprise Consultation"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {
                  className: "w-6 h-6"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                href: "tel:+13024640950",
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: 0.95
                },
                className: "inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-blue-500/50 text-blue-300 font-bold text-lg rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Phone, {
                  className: "w-6 h-6"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: "Call +1 302 464 0950"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center justify-center space-x-3 text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Phone, {
                  className: "w-5 h-5 text-blue-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: contactInfo.mobile
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center justify-center space-x-3 text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Mail, {
                  className: "w-5 h-5 text-blue-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: contactInfo.email
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center justify-center space-x-3 text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.MapPin, {
                  className: "w-5 h-5 text-blue-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  children: contactInfo.address
                })]
              })]
            })]
          })
        })
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

/***/ 958553:
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
/* harmony import */ var private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(814144);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/enterprise-solutions-showcase",
        pathname: "/enterprise-solutions-showcase",
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
    userland: private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/enterprise-solutions-showcase",
    config,
    userland: private_next_pages_enterprise_solutions_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(958553)));
module.exports = __webpack_exports__;

})();