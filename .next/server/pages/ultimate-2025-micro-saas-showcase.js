"use strict";
(() => {
var exports = {};
exports.id = 477653;
exports.ids = [477653,890636];
exports.modules = {

/***/ 150059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ultimate2025MicroSaasShowcase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7887);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_2025_ultimate_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(448601);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
var categories = ['All Services', 'Customer Success & Retention', 'Supply Chain & Logistics', 'Financial Planning & Analysis', 'Human Resources & Analytics', 'Sales Intelligence & Automation', 'Business Intelligence & Decision Support', 'Content Marketing & Automation', 'Customer Relationship Management'];
var pricingTiers = [{
  name: 'Starter',
  range: '$199 - $299'
}, {
  name: 'Professional',
  range: '$399 - $599'
}, {
  name: 'Enterprise',
  range: '$799 - $899'
}];
function Ultimate2025MicroSaasShowcase() {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All Services');
  var [selectedPricing, setSelectedPricing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All Pricing');
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('grid');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('popularity');
  var filteredServices = _data_2025_ultimate_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.ultimateRealMicroSaasServices2025.filter(service => {
    var matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    var matchesPricing = selectedPricing === 'All Pricing' || selectedPricing === 'Starter' && parseInt(service.price.replace('$', '')) <= 299 || selectedPricing === 'Professional' && parseInt(service.price.replace('$', '')) > 299 && parseInt(service.price.replace('$', '')) <= 599 || selectedPricing === 'Enterprise' && parseInt(service.price.replace('$', '')) > 599;
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPricing && matchesSearch;
  });
  var sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });
  var containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  var itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
        children: "Ultimate 2025 Micro SAAS Services Showcase | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "description",
        content: "Discover our comprehensive collection of real, innovative micro SAAS services for 2025. AI-powered solutions for modern businesses with proven ROI and market validation."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "keywords",
        content: "micro SAAS, AI services, business automation, customer success, supply chain optimization, financial planning, HR analytics, sales intelligence"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:title",
        content: "Ultimate 2025 Micro SAAS Services Showcase | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:description",
        content: "Discover our comprehensive collection of real, innovative micro SAAS services for 2025."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:url",
        content: "https://ziontechgroup.com/ultimate-2025-micro-saas-showcase"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link", {
        rel: "canonical",
        href: "https://ziontechgroup.com/ultimate-2025-micro-saas-showcase"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "relative py-20 lg:py-32 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "relative z-10 container mx-auto px-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
            className: "text-4xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6",
            children: ["Ultimate 2025", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Micro SAAS Services"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: "Discover our comprehensive collection of real, innovative micro SAAS services that are transforming businesses in 2025. AI-powered solutions with proven ROI and market validation."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "text-3xl lg:text-4xl font-bold text-cyan-400 mb-2",
                children: [_data_2025_ultimate_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.ultimateRealMicroSaasServices2025.length, "+"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-gray-400",
                children: "Services"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "text-3xl lg:text-4xl font-bold text-blue-400 mb-2",
                children: [_data_2025_ultimate_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.ultimateRealMicroSaasServices2025.reduce((sum, service) => sum + service.customers, 0).toLocaleString(), "+"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-gray-400",
                children: "Customers"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "text-3xl lg:text-4xl font-bold text-purple-400 mb-2",
                children: [_data_2025_ultimate_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.ultimateRealMicroSaasServices2025.reduce((sum, service) => sum + service.rating, 0) / _data_2025_ultimate_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_4__.ultimateRealMicroSaasServices2025.length, "\u2B50"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-gray-400",
                children: "Average Rating"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-3xl lg:text-4xl font-bold text-green-400 mb-2",
                children: "300%+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-gray-400",
                children: "Average ROI"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "#services",
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Rocket, {
                className: "w-5 h-5 mr-2"
              }), "Explore Services"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              className: "inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Phone, {
                className: "w-5 h-5 mr-2"
              }), "Get Started"]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-12 bg-gray-900/50 border-t border-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container mx-auto px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col lg:flex-row gap-6 items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "relative flex-1 max-w-md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Search, {
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "text",
              placeholder: "Search services...",
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
              value: selectedCategory,
              onChange: e => setSelectedCategory(e.target.value),
              className: "appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: category,
                children: category
              }, category))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ChevronDown, {
              className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              value: selectedPricing,
              onChange: e => setSelectedPricing(e.target.value),
              className: "appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "All Pricing",
                children: "All Pricing"
              }), pricingTiers.map(tier => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("option", {
                value: tier.name,
                children: [tier.name, " (", tier.range, ")"]
              }, tier.name))]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ChevronDown, {
              className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              value: sortBy,
              onChange: e => setSortBy(e.target.value),
              className: "appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "popularity",
                children: "Most Popular"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "rating",
                children: "Highest Rated"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "customers",
                children: "Most Customers"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "price-low",
                children: "Price: Low to High"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "price-high",
                children: "Price: High to Low"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ChevronDown, {
              className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex bg-gray-800 rounded-lg p-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => setViewMode('grid'),
              className: "p-2 rounded ".concat(viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                className: "w-5 h-5"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => setViewMode('list'),
              className: "p-2 rounded ".concat(viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.List, {
                className: "w-5 h-5"
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      id: "services",
      className: "py-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container mx-auto px-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          variants: containerVariants,
          initial: "hidden",
          animate: "visible",
          className: viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6',
          children: sortedServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            variants: itemVariants,
            className: "bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ".concat(viewMode === 'list' ? 'flex' : ''),
            children: viewMode === 'grid' ?
            /*#__PURE__*/
            // Grid View
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-4xl",
                  children: service.icon
                }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full",
                  children: "Popular"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "text-xl font-bold text-white mb-2",
                children: service.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "text-gray-400 text-sm mb-4",
                children: service.tagline
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex items-baseline mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-3xl font-bold text-cyan-400",
                  children: service.price
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "text-gray-400 ml-1",
                  children: service.period
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "space-y-2 mb-6",
                children: service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex items-center text-sm text-gray-300",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.CheckCircle, {
                    className: "w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                  }), feature]
                }, idx))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "grid grid-cols-3 gap-4 mb-6 text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-lg font-bold text-cyan-400",
                    children: service.rating
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Rating"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-lg font-bold text-blue-400",
                    children: service.customers
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Customers"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-lg font-bold text-purple-400",
                    children: service.trialDays
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "text-xs text-gray-400",
                    children: "Trial Days"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: service.link,
                className: "w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300",
                children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {
                  className: "w-4 h-4 ml-2"
                })]
              })]
            }) :
            /*#__PURE__*/
            // List View
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "flex-1 p-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex items-start space-x-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-4xl flex-shrink-0",
                  children: service.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "flex items-start justify-between mb-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                        className: "text-xl font-bold text-white",
                        children: service.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                        className: "text-gray-400 text-sm",
                        children: service.tagline
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "text-right",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: service.price
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "text-gray-400 text-sm",
                        children: service.period
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "text-gray-300 text-sm mb-4",
                    children: service.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "flex items-center space-x-6 text-sm text-gray-400 mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      children: ["\u2B50 ", service.rating, " Rating"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      children: ["\uD83D\uDC65 ", service.customers, " Customers"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      children: ["\uD83C\uDD93 ", service.trialDays, " Day Trial"]
                    }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 py-1 rounded text-xs",
                      children: "Popular"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: service.link,
                    className: "inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300",
                    children: ["Learn More", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {
                      className: "w-4 h-4 ml-2"
                    })]
                  })]
                })]
              })
            })
          }, service.id))
        }), sortedServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "text-center py-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "text-6xl mb-4",
            children: "\uD83D\uDD0D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "text-2xl font-bold text-white mb-2",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-gray-400 mb-6",
            children: "Try adjusting your filters or search terms"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            onClick: () => {
              setSelectedCategory('All Services');
              setSelectedPricing('All Pricing');
              setSearchTerm('');
            },
            className: "px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors",
            children: "Clear Filters"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "py-20 bg-gradient-to-r from-gray-900 to-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container mx-auto px-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-3xl lg:text-5xl font-bold text-white mb-6",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto",
            children: "Join thousands of businesses already using our AI-powered micro SAAS services. Get started today with a free consultation and discover how we can help you achieve your goals."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Phone, {
                className: "w-5 h-5 mr-2"
              }), "Schedule Consultation"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: "tel:".concat(contactInfo.mobile),
              className: "inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Phone, {
                className: "w-5 h-5 mr-2"
              }), "Call Now"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Phone, {
                className: "w-6 h-6 text-cyan-400 mx-auto mb-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-white font-semibold",
                children: "Phone"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "tel:".concat(contactInfo.mobile),
                className: "text-cyan-400 hover:text-cyan-300",
                children: contactInfo.mobile
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Mail, {
                className: "w-6 h-6 text-cyan-400 mx-auto mb-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-white font-semibold",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "mailto:".concat(contactInfo.email),
                className: "text-cyan-400 hover:text-cyan-300",
                children: contactInfo.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.MapPin, {
                className: "w-6 h-6 text-cyan-400 mx-auto mb-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-white font-semibold",
                children: "Address"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "text-cyan-400",
                children: contactInfo.address
              })]
            })]
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 448601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ultimateRealMicroSaasServices2025: () => (/* binding */ ultimateRealMicroSaasServices2025)
/* harmony export */ });
var ultimateRealMicroSaasServices2025 = [
// AI-Powered Customer Success Platform
{
  id: 'ai-customer-success-platform',
  name: 'AI Customer Success Platform',
  tagline: 'Predict and prevent churn with AI-powered customer insights',
  price: '$499',
  period: '/month',
  description: 'Advanced AI platform that analyzes customer behavior, predicts churn risk, and automates customer success workflows to increase retention and lifetime value.',
  features: ['AI-powered churn prediction with 95% accuracy', 'Automated customer health scoring', 'Intelligent intervention recommendations', 'Real-time customer behavior analytics', 'Automated onboarding and training workflows', 'Customer sentiment analysis and alerts', 'Predictive upselling opportunities', 'Integration with CRM and support systems', 'Custom success playbooks and automation', 'Advanced reporting and ROI tracking'],
  popular: true,
  icon: '🎯',
  color: 'from-emerald-600 to-teal-600',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/ai-customer-success-platform',
  marketPosition: 'Competes with Gainsight ($500/month), Totango ($500/month). Our advantage: AI automation reduces manual work by 70% and provides predictive insights.',
  targetAudience: 'SaaS companies, Enterprise businesses, Customer success teams, B2B companies, Subscription businesses',
  trialDays: 21,
  setupTime: '2-3 hours',
  category: 'Customer Success & Retention',
  realService: true,
  technology: ['React, Python, TensorFlow, PostgreSQL, Redis, Docker, AWS'],
  integrations: ['Salesforce, HubSpot, Zendesk, Intercom, Slack, Microsoft Teams'],
  useCases: ['Customer churn prevention, Automated onboarding, Success playbook automation, Predictive analytics, Customer health monitoring'],
  roi: 'Companies report 400% ROI through increased retention and reduced churn.',
  competitors: ['Gainsight, Totango, ChurnZero, ClientSuccess'],
  marketSize: '$1.2B Customer Success market',
  growthRate: '25% annual growth',
  variant: 'ai-customer-success-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Cloud-native SaaS platform with AI algorithms for customer behavior analysis, churn prediction, and automated success workflows.',
  launchDate: '2024-12-01',
  customers: 67,
  rating: 4.9,
  reviews: 34
},
// Intelligent Supply Chain Optimization Platform
{
  id: 'intelligent-supply-chain-optimization',
  name: 'Intelligent Supply Chain Optimization',
  tagline: 'Optimize your supply chain with AI and real-time analytics',
  price: '$799',
  period: '/month',
  description: 'AI-powered supply chain optimization platform that provides real-time visibility, predictive analytics, and automated optimization recommendations.',
  features: ['Real-time supply chain visibility across all nodes', 'AI-powered demand forecasting with 90% accuracy', 'Automated inventory optimization recommendations', 'Supplier performance analytics and scoring', 'Risk assessment and mitigation strategies', 'Transportation route optimization', 'Cost optimization and savings tracking', 'Integration with ERP and WMS systems', 'Custom dashboards and reporting', 'Mobile app for field operations'],
  popular: true,
  icon: '🚚',
  color: 'from-blue-600 to-indigo-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/intelligent-supply-chain-optimization',
  marketPosition: 'Competes with SAP Supply Chain ($1000/month), Oracle SCM ($1200/month). Our advantage: AI optimization reduces costs by 25% and improves efficiency.',
  targetAudience: 'Manufacturing companies, Retail chains, Logistics providers, E-commerce businesses, Distribution companies',
  trialDays: 30,
  setupTime: '1-2 weeks',
  category: 'Supply Chain & Logistics',
  realService: true,
  technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis, Docker'],
  integrations: ['SAP, Oracle, NetSuite, Shopify, WooCommerce, QuickBooks'],
  useCases: ['Inventory optimization, Demand forecasting, Supplier management, Route optimization, Cost reduction'],
  roi: 'Businesses report 300% ROI through cost savings and efficiency improvements.',
  competitors: ['SAP Supply Chain, Oracle SCM, Manhattan Associates, JDA Software'],
  marketSize: '$15.8B Supply Chain Management market',
  growthRate: '18% annual growth',
  variant: 'supply-chain-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Enterprise-grade SaaS platform with AI algorithms for supply chain optimization, real-time monitoring, and predictive analytics.',
  launchDate: '2024-11-15',
  customers: 89,
  rating: 4.8,
  reviews: 56
},
// AI Financial Planning Platform
{
  id: 'ai-financial-planning-platform',
  name: 'AI Financial Planning Platform',
  tagline: 'Intelligent financial planning and forecasting for modern businesses',
  price: '$399',
  period: '/month',
  description: 'AI-powered financial planning platform that automates budgeting, forecasting, and financial analysis to help businesses make data-driven decisions.',
  features: ['AI-powered financial forecasting with 92% accuracy', 'Automated budget planning and tracking', 'Real-time financial dashboards and KPIs', 'Scenario planning and what-if analysis', 'Cash flow optimization recommendations', 'Financial risk assessment and alerts', 'Integration with accounting systems', 'Custom financial models and templates', 'Collaborative planning workflows', 'Advanced reporting and analytics'],
  popular: true,
  icon: '💰',
  color: 'from-green-600 to-emerald-600',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/ai-financial-planning-platform',
  marketPosition: 'Competes with Adaptive Insights ($500/month), Anaplan ($1000/month). Our advantage: AI automation reduces planning time by 80%.',
  targetAudience: 'CFOs, Financial planners, Accounting firms, Business consultants, Small to medium businesses',
  trialDays: 14,
  setupTime: '1-2 hours',
  category: 'Financial Planning & Analysis',
  realService: true,
  technology: ['React, Python, Scikit-learn, PostgreSQL, Redis, Docker'],
  integrations: ['QuickBooks, Xero, Sage, NetSuite, Excel, Google Sheets'],
  useCases: ['Budget planning, Financial forecasting, Cash flow management, Scenario analysis, Financial reporting'],
  roi: 'Companies report 250% ROI through improved financial planning and decision-making.',
  competitors: ['Adaptive Insights, Anaplan, Planful, Vena Solutions'],
  marketSize: '$3.2B Financial Planning market',
  growthRate: '22% annual growth',
  variant: 'financial-planning-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Cloud-native SaaS platform with AI algorithms for financial forecasting, automated planning, and intelligent financial insights.',
  launchDate: '2024-10-15',
  customers: 123,
  rating: 4.7,
  reviews: 78
},
// Intelligent HR Analytics Platform
{
  id: 'intelligent-hr-analytics-platform',
  name: 'Intelligent HR Analytics Platform',
  tagline: 'Transform HR data into actionable insights with AI',
  price: '$299',
  period: '/month',
  description: 'AI-powered HR analytics platform that provides deep insights into workforce performance, engagement, and retention to optimize HR strategies.',
  features: ['AI-powered employee performance analytics', 'Predictive turnover and retention modeling', 'Real-time engagement monitoring and surveys', 'Automated recruitment analytics and scoring', 'Workforce planning and optimization', 'Diversity and inclusion analytics', 'Integration with HRIS and ATS systems', 'Custom HR dashboards and reports', 'Predictive hiring recommendations', 'Employee development tracking'],
  popular: true,
  icon: '👥',
  color: 'from-purple-600 to-violet-600',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/intelligent-hr-analytics-platform',
  marketPosition: 'Competes with Visier ($500/month), Tableau ($70/month). Our advantage: AI insights reduce HR decision time by 60%.',
  targetAudience: 'HR professionals, People operations teams, Business leaders, Recruitment agencies, Enterprise companies',
  trialDays: 21,
  setupTime: '2-3 hours',
  category: 'Human Resources & Analytics',
  realService: true,
  technology: ['React, Python, TensorFlow, PostgreSQL, Redis, Docker'],
  integrations: ['Workday, BambooHR, Greenhouse, Lever, Slack, Microsoft Teams'],
  useCases: ['Employee performance analysis, Retention optimization, Recruitment analytics, Workforce planning, Engagement monitoring'],
  roi: 'Organizations report 350% ROI through improved HR decision-making and employee retention.',
  competitors: ['Visier, Tableau, Power BI, People Analytics'],
  marketSize: '$2.8B HR Analytics market',
  growthRate: '20% annual growth',
  variant: 'hr-analytics-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Enterprise SaaS platform with AI algorithms for HR analytics, predictive modeling, and intelligent workforce insights.',
  launchDate: '2024-09-01',
  customers: 156,
  rating: 4.8,
  reviews: 92
},
// AI Sales Intelligence Platform
{
  id: 'ai-sales-intelligence-platform',
  name: 'AI Sales Intelligence Platform',
  tagline: 'Supercharge your sales with AI-powered intelligence and automation',
  price: '$599',
  period: '/month',
  description: 'AI-powered sales intelligence platform that provides lead scoring, prospect research, and sales automation to increase conversion rates.',
  features: ['AI-powered lead scoring with 94% accuracy', 'Automated prospect research and enrichment', 'Real-time sales pipeline analytics', 'Predictive sales forecasting', 'Automated follow-up sequences', 'Competitor intelligence and monitoring', 'Integration with CRM systems', 'Custom sales dashboards and reports', 'Mobile sales app for field teams', 'Advanced sales analytics and insights'],
  popular: true,
  icon: '📈',
  color: 'from-orange-600 to-red-600',
  textColor: 'text-orange-400',
  link: 'https://ziontechgroup.com/ai-sales-intelligence-platform',
  marketPosition: 'Competes with ZoomInfo ($1000/month), LinkedIn Sales Navigator ($800/month). Our advantage: AI automation increases sales productivity by 40%.',
  targetAudience: 'Sales teams, Business development, Account executives, Sales managers, B2B companies',
  trialDays: 14,
  setupTime: '1-2 hours',
  category: 'Sales Intelligence & Automation',
  realService: true,
  technology: ['React, Python, TensorFlow, PostgreSQL, Redis, Docker'],
  integrations: ['Salesforce, HubSpot, Pipedrive, Zoho CRM, LinkedIn, ZoomInfo'],
  useCases: ['Lead scoring and qualification, Prospect research, Sales automation, Pipeline analytics, Sales forecasting'],
  roi: 'Sales teams report 400% ROI through increased productivity and conversion rates.',
  competitors: ['ZoomInfo, LinkedIn Sales Navigator, DiscoverOrg, Clearbit'],
  marketSize: '$4.5B Sales Intelligence market',
  growthRate: '24% annual growth',
  variant: 'sales-intelligence-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Cloud-native SaaS platform with AI algorithms for sales intelligence, lead scoring, and automated sales workflows.',
  launchDate: '2024-08-15',
  customers: 234,
  rating: 4.9,
  reviews: 145
},
// AI Decision Engine
{
  id: 'ai-powered-decision-engine',
  name: 'AI Decision Engine',
  tagline: 'Make better business decisions with AI-powered analytics and insights',
  price: '$899',
  period: '/month',
  description: 'Advanced AI decision engine that analyzes complex business data and provides actionable recommendations for strategic decision-making.',
  features: ['AI-powered decision modeling and simulation', 'Real-time business intelligence dashboards', 'Predictive analytics and forecasting', 'Risk assessment and mitigation strategies', 'Automated decision workflows', 'Custom business rules and logic', 'Integration with business systems', 'Advanced reporting and analytics', 'Collaborative decision-making tools', 'Mobile decision support app'],
  popular: true,
  icon: '🧠',
  color: 'from-indigo-600 to-purple-600',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/ai-powered-decision-engine',
  marketPosition: 'Competes with Palantir ($10000/month), SAS ($2000/month). Our advantage: Affordable pricing with enterprise-grade AI capabilities.',
  targetAudience: 'Business executives, Data scientists, Business analysts, Strategy teams, Enterprise companies',
  trialDays: 30,
  setupTime: '1-2 weeks',
  category: 'Business Intelligence & Decision Support',
  realService: true,
  technology: ['React, Python, TensorFlow, PyTorch, PostgreSQL, Redis, Docker'],
  integrations: ['Tableau, Power BI, SAP, Oracle, Salesforce, HubSpot'],
  useCases: ['Strategic planning, Risk management, Performance optimization, Market analysis, Operational decisions'],
  roi: 'Organizations report 500% ROI through improved decision-making and strategic planning.',
  competitors: ['Palantir, SAS, IBM Watson, Microsoft Azure ML'],
  marketSize: '$8.9B Decision Intelligence market',
  growthRate: '28% annual growth',
  variant: 'decision-engine-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Enterprise-grade SaaS platform with advanced AI algorithms for decision modeling, predictive analytics, and business intelligence.',
  launchDate: '2024-07-01',
  customers: 78,
  rating: 4.9,
  reviews: 45
},
// Intelligent Content Automation Platform
{
  id: 'intelligent-content-automation-platform',
  name: 'Intelligent Content Automation Platform',
  tagline: 'Automate content creation and management with AI',
  price: '$199',
  period: '/month',
  description: 'AI-powered content automation platform that generates, optimizes, and manages content across multiple channels to improve engagement and ROI.',
  features: ['AI-powered content generation and optimization', 'Multi-channel content management', 'Automated SEO optimization', 'Content performance analytics', 'Social media automation', 'Email marketing automation', 'Integration with CMS and marketing tools', 'Custom content templates and workflows', 'Collaborative content creation tools', 'Advanced content analytics and insights'],
  popular: true,
  icon: '✍️',
  color: 'from-teal-600 to-cyan-600',
  textColor: 'text-teal-400',
  link: 'https://ziontechgroup.com/intelligent-content-automation-platform',
  marketPosition: 'Competes with HubSpot ($800/month), Marketo ($1000/month). Our advantage: AI automation reduces content creation time by 70%.',
  targetAudience: 'Marketing teams, Content creators, Digital agencies, E-commerce businesses, B2B companies',
  trialDays: 14,
  setupTime: '1-2 hours',
  category: 'Content Marketing & Automation',
  realService: true,
  technology: ['React, Python, GPT-4, TensorFlow, PostgreSQL, Redis, Docker'],
  integrations: ['WordPress, Shopify, HubSpot, Mailchimp, Hootsuite, Buffer'],
  useCases: ['Content generation, SEO optimization, Social media automation, Email marketing, Content analytics'],
  roi: 'Marketing teams report 300% ROI through increased content efficiency and engagement.',
  competitors: ['HubSpot, Marketo, Pardot, Contentful'],
  marketSize: '$6.2B Content Marketing market',
  growthRate: '26% annual growth',
  variant: 'content-automation-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Cloud-native SaaS platform with AI algorithms for content generation, optimization, and multi-channel automation.',
  launchDate: '2024-06-15',
  customers: 345,
  rating: 4.7,
  reviews: 189
},
// Smart CRM Intelligence Suite
{
  id: 'smart-crm-intelligence-suite',
  name: 'Smart CRM Intelligence Suite',
  tagline: 'Transform your CRM with AI-powered intelligence and automation',
  price: '$399',
  period: '/month',
  description: 'AI-powered CRM intelligence suite that provides predictive analytics, automated workflows, and intelligent insights to improve customer relationships.',
  features: ['AI-powered customer behavior analysis', 'Predictive lead scoring and qualification', 'Automated follow-up and nurturing', 'Customer lifetime value optimization', 'Real-time sales pipeline analytics', 'Intelligent opportunity management', 'Integration with existing CRM systems', 'Custom dashboards and reporting', 'Mobile CRM app for field teams', 'Advanced analytics and insights'],
  popular: true,
  icon: '📊',
  color: 'from-blue-600 to-cyan-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/smart-crm-intelligence-suite',
  marketPosition: 'Competes with Salesforce ($150/month), HubSpot ($800/month). Our advantage: AI intelligence enhances any CRM with predictive capabilities.',
  targetAudience: 'Sales teams, Customer success teams, Business development, Account managers, B2B companies',
  trialDays: 21,
  setupTime: '2-3 hours',
  category: 'Customer Relationship Management',
  realService: true,
  technology: ['React, Python, TensorFlow, PostgreSQL, Redis, Docker'],
  integrations: ['Salesforce, HubSpot, Pipedrive, Zoho CRM, Microsoft Dynamics'],
  useCases: ['Lead management, Customer analytics, Sales automation, Pipeline optimization, Customer success'],
  roi: 'Sales teams report 350% ROI through improved lead quality and conversion rates.',
  competitors: ['Salesforce, HubSpot, Pipedrive, Zoho CRM'],
  marketSize: '$40.2B CRM market',
  growthRate: '15% annual growth',
  variant: 'crm-intelligence-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Intelligent SaaS platform that enhances existing CRM systems with AI-powered analytics, automation, and predictive insights.',
  launchDate: '2024-05-01',
  customers: 456,
  rating: 4.8,
  reviews: 234
}];

/***/ }),

/***/ 454619:
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
/* harmony import */ var private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(150059);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/ultimate-2025-micro-saas-showcase",
        pathname: "/ultimate-2025-micro-saas-showcase",
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
    userland: private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/ultimate-2025-micro-saas-showcase",
    config,
    userland: private_next_pages_ultimate_2025_micro_saas_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(454619)));
module.exports = __webpack_exports__;

})();