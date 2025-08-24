"use strict";
(() => {
var exports = {};
exports.id = 559207;
exports.ids = [559207,890636];
exports.modules = {

/***/ 5500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



var ServiceSearch = _ref => {
  var {
    services,
    onServiceSelect,
    placeholder = "Search for services, technologies, or solutions...",
    showFilters = true,
    maxResults = 12
  } = _ref;
  var [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('popular');

  // Extract unique categories and tags
  var categories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var cats = new Set();
    services.forEach(service => {
      if (service.category) cats.add(service.category);
    });
    return Array.from(cats).sort();
  }, [services]);
  var allTags = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var tags = new Set();
    services.forEach(service => {
      if (service.tags) {
        service.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [services]);

  // Filter and sort services
  var filteredServices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var filtered = services;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        var _service$category;
        return ((_service$category = service.category) === null || _service$category === void 0 ? void 0 : _service$category.toLowerCase()) === selectedCategory.toLowerCase();
      });
    }

    // Tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(service => {
        var _service$tags;
        return (_service$tags = service.tags) === null || _service$tags === void 0 ? void 0 : _service$tags.some(tag => selectedTags.includes(tag));
      });
    }

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(service => {
        var _service$description, _service$tagline, _service$tags2;
        return service.name.toLowerCase().includes(searchQuery.toLowerCase()) || ((_service$description = service.description) === null || _service$description === void 0 ? void 0 : _service$description.toLowerCase().includes(searchQuery.toLowerCase())) || ((_service$tagline = service.tagline) === null || _service$tagline === void 0 ? void 0 : _service$tagline.toLowerCase().includes(searchQuery.toLowerCase())) || ((_service$tags2 = service.tags) === null || _service$tags2 === void 0 ? void 0 : _service$tags2.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          {
            return a.name.localeCompare(b.name);
          }
        case 'popular':
          {
            return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
          }
        case 'price':
          {
            var _a$price, _b$price;
            var priceA = parseFloat(((_a$price = a.price) === null || _a$price === void 0 ? void 0 : _a$price.replace(/[^0-9.]/g, '')) || '0');
            var priceB = parseFloat(((_b$price = b.price) === null || _b$price === void 0 ? void 0 : _b$price.replace(/[^0-9.]/g, '')) || '0');
            return priceA - priceB;
          }
        default:
          return 0;
      }
    });
    return filtered.slice(0, maxResults);
  }, [services, searchQuery, selectedCategory, selectedTags, sortBy, maxResults]);
  var handleTagToggle = tag => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  var clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTags([]);
    setSortBy('popular');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "w-full max-w-6xl mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "text",
        placeholder: placeholder,
        value: searchQuery,
        onChange: e => setSearchQuery(e.target.value),
        className: "w-full px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute right-4 top-1/2 transform -translate-y-1/2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          className: "w-6 h-6 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          })
        })
      })]
    }), showFilters && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
      initial: {
        opacity: 0,
        y: 20
      },
      animate: {
        opacity: 1,
        y: 0
      },
      className: "mb-8 space-y-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          className: "text-white font-semibold mb-3",
          children: "Categories"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex flex-wrap gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            onClick: () => setSelectedCategory('all'),
            className: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ".concat(selectedCategory === 'all' ? 'bg-cyan-400 text-black' : 'bg-white/10 text-gray-300 hover:bg-white/20'),
            children: "All Categories"
          }), categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            onClick: () => setSelectedCategory(category),
            className: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ".concat(selectedCategory === category ? 'bg-cyan-400 text-black' : 'bg-white/10 text-gray-300 hover:bg-white/20'),
            children: category
          }, category))]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          className: "text-white font-semibold mb-3",
          children: "Tags"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex flex-wrap gap-2",
          children: allTags.slice(0, 20).map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            onClick: () => handleTagToggle(tag),
            className: "px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ".concat(selectedTags.includes(tag) ? 'bg-purple-400 text-black' : 'bg-white/10 text-gray-300 hover:bg-white/20'),
            children: tag
          }, tag))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center space-x-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-white font-semibold",
            children: "Sort by:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
            value: sortBy,
            onChange: e => setSortBy(e.target.value),
            className: "px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
              value: "popular",
              children: "Most Popular"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
              value: "name",
              children: "Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
              value: "price",
              children: "Price"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: clearFilters,
          className: "px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm",
          children: "Clear Filters"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mb-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        className: "text-gray-300",
        children: ["Showing ", filteredServices.length, " of ", services.length, " services", searchQuery && " for \"".concat(searchQuery, "\"")]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
      mode: "wait",
      children: filteredServices.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: index * 0.1
          },
          className: "bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer",
          onClick: () => onServiceSelect === null || onServiceSelect === void 0 ? void 0 : onServiceSelect(service),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-start justify-between mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "text-3xl",
              children: service.icon || '🚀'
            }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-semibold",
              children: "Popular"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "text-xl font-semibold text-white mb-2",
            children: service.name
          }), service.tagline && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "text-gray-400 text-sm mb-3",
            children: service.tagline
          }), service.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "text-gray-300 text-sm mb-4 line-clamp-2",
            children: service.description
          }), service.tags && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "flex flex-wrap gap-1 mb-4",
            children: service.tags.slice(0, 3).map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full",
              children: tag
            }, tag))
          }), service.price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "text-cyan-400 font-bold",
            children: [service.price, service.period]
          })]
        }, service.id))
      }, "".concat(searchQuery, "-").concat(selectedCategory, "-").concat(selectedTags.join(','))) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        className: "text-center py-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "text-6xl mb-4",
          children: "\uD83D\uDD0D"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          className: "text-xl font-semibold text-white mb-2",
          children: "No services found"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "text-gray-400 mb-4",
          children: "Try adjusting your search criteria or filters"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: clearFilters,
          className: "px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors",
          children: "Clear All Filters"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceSearch);

/***/ }),

/***/ 238239:
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
/* harmony import */ var private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(243365);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/services-enhanced",
        pathname: "/services-enhanced",
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
    userland: private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/services-enhanced",
    config,
    userland: private_next_pages_services_enhanced_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 243365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_ui_ServiceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5500);
/* harmony import */ var _data_2025_innovative_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(846957);
/* harmony import */ var _data_2025_innovative_ai_services_enhanced__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(485562);
/* harmony import */ var _data_2025_innovative_it_services_enhanced__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(184699);
/* harmony import */ var _data_2025_emerging_tech_services_enhanced__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(276837);
/* harmony import */ var _data_2026_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503533);
/* harmony import */ var _data_2026_quantum_cybersecurity_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(722233);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











var ServicesEnhanced = () => {
  // Combine all services
  var allServices = [..._data_2025_innovative_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_3__.innovativeRealMicroSaasServices2025, ..._data_2025_innovative_ai_services_enhanced__WEBPACK_IMPORTED_MODULE_4__.innovativeAIServicesEnhanced2025, ..._data_2025_innovative_it_services_enhanced__WEBPACK_IMPORTED_MODULE_5__.innovativeITServicesEnhanced2025, ..._data_2025_emerging_tech_services_enhanced__WEBPACK_IMPORTED_MODULE_6__.emergingTechServicesEnhanced2025, ..._data_2026_advanced_ai_automation_services__WEBPACK_IMPORTED_MODULE_7__.advancedAIAutomationServices, ..._data_2026_quantum_cybersecurity_services__WEBPACK_IMPORTED_MODULE_8__.quantumCybersecurityServices];
  var handleServiceSelect = _service => {
    // Scroll to service details or open modal
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Enhanced Services - Zion Tech Group",
      description: "Explore our comprehensive suite of revolutionary micro SAAS services, AI solutions, quantum cybersecurity, and emerging technologies."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "min-h-screen bg-black text-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
        className: "relative py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "max-w-7xl mx-auto text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.h1, {
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
            className: "text-5xl md:text-7xl font-bold mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
              children: "Our Services"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.p, {
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
            className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto",
            children: ["Discover our revolutionary portfolio of ", allServices.length, "+ cutting-edge services designed to transform your business and drive innovation."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83D\uDE80"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "font-semibold text-white",
                children: "Micro SAAS"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                className: "text-sm text-gray-300",
                children: [_data_2025_innovative_real_micro_saas_services__WEBPACK_IMPORTED_MODULE_3__.innovativeRealMicroSaasServices2025.length, " services"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83E\uDDE0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "font-semibold text-white",
                children: "AI & ML"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                className: "text-sm text-gray-300",
                children: [_data_2025_innovative_ai_services_enhanced__WEBPACK_IMPORTED_MODULE_4__.innovativeAIServicesEnhanced2025.length, " services"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83D\uDCBB"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "font-semibold text-white",
                children: "IT Solutions"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                className: "text-sm text-gray-300",
                children: [_data_2025_innovative_it_services_enhanced__WEBPACK_IMPORTED_MODULE_5__.innovativeITServicesEnhanced2025.length, " services"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-xl p-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-3xl mb-2",
                children: "\uD83C\uDF1F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "font-semibold text-white",
                children: "Emerging Tech"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                className: "text-sm text-gray-300",
                children: [_data_2025_emerging_tech_services_enhanced__WEBPACK_IMPORTED_MODULE_6__.emergingTechServicesEnhanced2025.length, " services"]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-black/20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
                children: "Find Your Perfect Solution"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Use our advanced search and filtering system to discover services that match your specific needs and requirements."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_ServiceSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
            services: allServices,
            onServiceSelect: handleServiceSelect,
            placeholder: "Search for AI services, quantum solutions, automation tools...",
            showFilters: true,
            maxResults: 24
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                className: "bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",
                children: "Featured Services"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Our most popular and innovative solutions that are transforming businesses worldwide."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: allServices.filter(service => service.popular).slice(0, 9).map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
              initial: {
                opacity: 0,
                y: 50
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: index * 0.1
              },
              viewport: {
                once: true
              },
              className: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer",
              onClick: () => handleServiceSelect(service),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "flex items-start justify-between mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "text-4xl",
                  children: service.icon || '🚀'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                  className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-3 py-1 rounded-full font-semibold",
                  children: "Featured"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-2",
                children: service.name
              }), service.tagline && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-400 text-sm mb-3",
                children: service.tagline
              }), service.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-300 text-sm mb-4 line-clamp-3",
                children: service.description
              }), service.tags && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "flex flex-wrap gap-1 mb-4",
                children: service.tags.slice(0, 3).map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                  className: "bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full",
                  children: tag
                }, tag))
              }), service.price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "text-cyan-400 font-bold text-lg",
                children: [service.price, service.period]
              })]
            }, service.id))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-black/20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                className: "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent",
                children: "Why Choose Zion Tech Group?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "We combine cutting-edge technology with proven business solutions to deliver exceptional value."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
              initial: {
                opacity: 0,
                y: 30
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: 0.1
              },
              viewport: {
                once: true
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-5xl mb-4",
                children: "\u26A1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-3",
                children: "Rapid Deployment"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-300",
                children: "Get your solutions up and running in days, not months, with our streamlined implementation process."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
              initial: {
                opacity: 0,
                y: 30
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: 0.2
              },
              viewport: {
                once: true
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-5xl mb-4",
                children: "\uD83D\uDD12"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-3",
                children: "Enterprise Security"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-300",
                children: "Bank-grade security and compliance built into every solution, ensuring your data stays protected."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
              initial: {
                opacity: 0,
                y: 30
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: 0.3
              },
              viewport: {
                once: true
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-5xl mb-4",
                children: "\uD83D\uDCC8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-3",
                children: "Proven ROI"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-300",
                children: "Our clients see measurable improvements in efficiency, cost savings, and business performance."
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "max-w-4xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
                children: "Ready to Get Started?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8",
              children: "Contact our team to discuss your requirements and discover how our services can transform your business."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
                href: "/contact",
                className: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",
                children: "Contact Us"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
                href: "tel:+13024640950",
                className: "border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105",
                children: "Call Now"
              })]
            })]
          })
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesEnhanced);

/***/ }),

/***/ 276837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emergingTechServicesEnhanced2025: () => (/* binding */ emergingTechServicesEnhanced2025)
/* harmony export */ });
var emergingTechServicesEnhanced2025 = [
// Space Resource Mining Platform
{
  id: 'space-resource-mining-platform',
  name: 'Space Resource Mining Platform',
  tagline: 'Mine asteroids and space resources with advanced technology',
  price: '$2,999',
  period: '/month',
  description: 'Revolutionary space resource mining platform that enables organizations to identify, analyze, and plan mining operations for asteroids and other space resources.',
  features: ['Asteroid identification and analysis', 'Resource composition assessment', 'Mining feasibility analysis', 'Orbital trajectory planning', 'Resource value estimation', 'Mining operation planning', 'Regulatory compliance tools', 'Risk assessment and mitigation', 'Investment analysis tools', '24/7 space monitoring'],
  popular: true,
  icon: '🚀',
  color: 'from-blue-600 to-indigo-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/space-resource-mining-platform',
  marketPosition: 'Leading space resource mining platform. Our advantage: First to market with comprehensive asteroid mining analysis and planning tools.',
  targetAudience: 'Space mining companies, Aerospace companies, Investment firms, Research institutions, Government agencies',
  trialDays: 60,
  setupTime: '4-6 weeks',
  category: 'Space Technology & Mining',
  realService: true,
  technology: ['Python, Space analytics, Orbital mechanics, AI/ML, Remote sensing, 3D modeling'],
  integrations: ['NASA APIs, ESA data, Space tracking systems, Satellite networks, Investment platforms'],
  useCases: ['Asteroid mining planning, Resource assessment, Investment analysis, Regulatory compliance, Space mission planning'],
  roi: 'Space companies report 500% ROI through optimized mining operations and reduced exploration costs.',
  competitors: ['No direct competitors - first mover advantage in space mining'],
  marketSize: '$3.5B space mining market',
  growthRate: '85% annual growth',
  variant: 'space-mining-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Space resource mining platform with advanced analytics and comprehensive mining planning capabilities.',
  launchDate: '2024-12-01',
  customers: 8,
  rating: 4.9,
  reviews: 5
},
// Brain-Computer Interface Platform
{
  id: 'brain-computer-interface-platform',
  name: 'Brain-Computer Interface Platform',
  tagline: 'Connect human brains to computers with advanced neural interfaces',
  price: '$1,899',
  period: '/month',
  description: 'Advanced brain-computer interface platform that enables direct communication between the human brain and computers for research, medical applications, and human enhancement.',
  features: ['Neural signal processing', 'Brain pattern recognition', 'Real-time brain monitoring', 'Custom algorithm development', 'Multi-device compatibility', 'Clinical trial support', 'Regulatory compliance tools', 'Performance analytics', 'API for custom applications', 'Expert consultation included'],
  popular: true,
  icon: '🧠',
  color: 'from-purple-600 to-pink-600',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/brain-computer-interface-platform',
  marketPosition: 'Leading BCI platform. Our advantage: Advanced neural processing and comprehensive development tools.',
  targetAudience: 'Research institutions, Medical device companies, Gaming companies, Accessibility developers, Neuroscience researchers',
  trialDays: 90,
  setupTime: '4-6 weeks',
  category: 'Neuroscience & BCI',
  realService: true,
  technology: ['Python, AI/ML, Signal processing, Neuroscience algorithms, Real-time systems'],
  integrations: ['OpenBCI hardware, Emotiv devices, Medical EEG systems, Research platforms'],
  useCases: ['Medical research, Gaming interfaces, Accessibility tools, Cognitive enhancement, Brain monitoring'],
  roi: 'Research institutions report 400% improvement in data quality and 300% faster development cycles.',
  competitors: ['OpenBCI, Emotiv, NeuroSky, Muse'],
  marketSize: '$1.9B BCI market',
  growthRate: '45% annual growth',
  variant: 'bci-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Brain-computer interface platform with advanced signal processing and neuroscience algorithms.',
  launchDate: '2024-11-15',
  customers: 15,
  rating: 4.8,
  reviews: 9
},
// Quantum Materials Discovery Platform
{
  id: 'quantum-materials-discovery-platform',
  name: 'Quantum Materials Discovery Platform',
  tagline: 'Accelerate materials science with quantum computing',
  price: '$1,599',
  period: '/month',
  description: 'Revolutionary quantum materials discovery platform that uses quantum computing to accelerate the discovery and development of new materials with unprecedented properties.',
  features: ['Quantum materials simulation', 'Property prediction algorithms', 'Materials database integration', 'Discovery workflow automation', 'Performance optimization', 'Collaboration tools', 'Research analytics', 'Patent analysis tools', 'Integration with lab equipment', '24/7 quantum processing'],
  popular: true,
  icon: '⚛️',
  color: 'from-cyan-600 to-blue-600',
  textColor: 'text-cyan-400',
  link: 'https://ziontechgroup.com/quantum-materials-discovery-platform',
  marketPosition: 'Leading quantum materials platform. Our advantage: Quantum computing accelerates materials discovery by 1000x compared to classical methods.',
  targetAudience: 'Materials science companies, Research institutions, Pharmaceutical companies, Energy companies, Manufacturing companies',
  trialDays: 45,
  setupTime: '3-4 weeks',
  category: 'Quantum Computing & Materials Science',
  realService: true,
  technology: ['Python, Quantum algorithms, Materials science, AI/ML, Simulation tools'],
  integrations: ['Quantum computers, Materials databases, Lab equipment, Research platforms'],
  useCases: ['New materials discovery, Property optimization, Drug development, Energy storage, Manufacturing materials'],
  roi: 'Materials companies report 1000x acceleration in discovery and 500% improvement in material properties.',
  competitors: ['Limited competition - specialized quantum materials platform'],
  marketSize: '$12.5B materials science market',
  growthRate: '35% annual growth',
  variant: 'quantum-materials-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Quantum materials discovery platform with advanced simulation and prediction capabilities.',
  launchDate: '2024-10-20',
  customers: 22,
  rating: 4.7,
  reviews: 14
},
// Autonomous Vehicle AI Platform
{
  id: 'autonomous-vehicle-ai-platform',
  name: 'Autonomous Vehicle AI Platform',
  tagline: 'Develop self-driving AI systems with advanced algorithms',
  price: '$1,299',
  period: '/month',
  description: 'Comprehensive autonomous vehicle AI platform that provides advanced algorithms, simulation tools, and testing capabilities for developing self-driving vehicles.',
  features: ['Advanced AI algorithms', 'Real-time perception systems', 'Path planning and navigation', 'Simulation and testing tools', 'Safety validation systems', 'Performance optimization', 'Multi-sensor fusion', 'Edge computing support', 'Regulatory compliance tools', '24/7 AI development support'],
  popular: true,
  icon: '🚗',
  color: 'from-green-600 to-emerald-600',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
  marketPosition: 'Leading autonomous vehicle AI platform. Our advantage: Advanced algorithms that improve safety by 300% and reduce development time by 50%.',
  targetAudience: 'Automotive companies, Autonomous vehicle startups, Transportation companies, Research institutions, Government agencies',
  trialDays: 30,
  setupTime: '3-4 weeks',
  category: 'Autonomous Vehicles & AI',
  realService: true,
  technology: ['Python, TensorFlow, Computer vision, Robotics, Edge computing, Simulation'],
  integrations: ['Vehicle platforms, Sensor systems, Simulation environments, Testing frameworks'],
  useCases: ['Self-driving car development, Safety validation, Performance testing, Algorithm optimization, Regulatory compliance'],
  roi: 'Automotive companies report 300% improvement in safety and 50% reduction in development time.',
  competitors: ['Waymo, Cruise, Tesla, Mobileye'],
  marketSize: '$45.5B autonomous vehicle market',
  growthRate: '40% annual growth',
  variant: 'av-ai-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Autonomous vehicle AI platform with advanced algorithms and comprehensive development tools.',
  launchDate: '2024-09-25',
  customers: 28,
  rating: 4.8,
  reviews: 18
},
// Quantum Bio-Computing Platform
{
  id: 'quantum-bio-computing-platform',
  name: 'Quantum Bio-Computing Platform',
  tagline: 'Merge quantum computing with biological systems',
  price: '$2,199',
  period: '/month',
  description: 'Revolutionary quantum bio-computing platform that combines quantum computing with biological systems for breakthrough applications in medicine, biotechnology, and synthetic biology.',
  features: ['Quantum-biological hybrid processing', 'DNA computing algorithms', 'Protein folding simulation', 'Biological system modeling', 'Quantum genetic algorithms', 'Bio-molecular simulation', 'Drug discovery tools', 'Synthetic biology design', 'Performance analytics', '24/7 quantum bio-processing'],
  popular: true,
  icon: '🧬',
  color: 'from-pink-600 to-purple-600',
  textColor: 'text-pink-400',
  link: 'https://ziontechgroup.com/quantum-bio-computing-platform',
  marketPosition: 'First quantum bio-computing platform. Our advantage: Revolutionary combination of quantum computing and biological systems.',
  targetAudience: 'Biotechnology companies, Pharmaceutical companies, Research institutions, Healthcare organizations, Synthetic biology companies',
  trialDays: 60,
  setupTime: '4-6 weeks',
  category: 'Quantum Computing & Biotechnology',
  realService: true,
  technology: ['Python, Quantum algorithms, Biology, AI/ML, Simulation tools'],
  integrations: ['Quantum computers, Biological databases, Lab equipment, Research platforms'],
  useCases: ['Drug discovery, Protein folding, DNA computing, Synthetic biology, Medical research'],
  roi: 'Biotech companies report 1000x acceleration in drug discovery and 500% improvement in biological modeling.',
  competitors: ['No direct competitors - revolutionary quantum bio-computing approach'],
  marketSize: '$18.5B quantum bio-computing market',
  growthRate: '75% annual growth',
  variant: 'quantum-bio-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Quantum bio-computing platform with hybrid quantum-biological processing capabilities.',
  launchDate: '2024-08-30',
  customers: 12,
  rating: 4.9,
  reviews: 7
},
// Metaverse Development Studio
{
  id: 'metaverse-development-studio',
  name: 'Metaverse Development Studio',
  tagline: 'Build immersive 3D worlds and experiences',
  price: '$799',
  period: '/month',
  description: 'Comprehensive platform for creating, deploying, and monetizing metaverse experiences with advanced 3D graphics and AI-powered interactions.',
  features: ['3D world builder with drag-and-drop', 'AI-powered NPCs and interactions', 'Multi-user collaboration tools', 'VR/AR compatibility', 'Monetization and NFT integration', 'Performance optimization', 'Cross-platform deployment', 'Analytics and user insights', 'API for custom integrations', 'Enterprise security features'],
  popular: true,
  icon: '🌐',
  color: 'from-indigo-600 to-purple-600',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/metaverse-development-studio',
  marketPosition: 'Competes with Roblox Studio (free), Unity Pro ($180/month). Our advantage: AI-powered content generation and metaverse-specific tools.',
  targetAudience: 'Game developers, Brands, Educational institutions, Event organizers, Real estate companies',
  trialDays: 21,
  setupTime: '1-2 days',
  category: 'Metaverse & 3D Development',
  realService: true,
  technology: ['Three.js, WebGL, WebXR, AI/ML, Blockchain, Web3'],
  integrations: ['Meta Quest, HTC Vive, SteamVR, Unreal Engine, Blender'],
  useCases: ['Virtual events, Brand experiences, Educational simulations, Gaming, Virtual real estate'],
  roi: 'Brands report 400% increase in user engagement and 250% improvement in brand recall.',
  competitors: ['Roblox, Unity, Unreal Engine, Decentraland'],
  marketSize: '$47.5B metaverse market',
  growthRate: '35% annual growth',
  variant: 'metaverse-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Cloud-based metaverse development platform with AI-powered tools and Web3 integration.',
  launchDate: '2024-07-15',
  customers: 45,
  rating: 4.7,
  reviews: 28
},
// Quantum Energy Platform
{
  id: 'quantum-energy-platform',
  name: 'Quantum Energy Platform',
  tagline: 'Optimize energy systems with quantum computing',
  price: '$1,799',
  period: '/month',
  description: 'Advanced quantum energy platform that uses quantum computing to optimize energy generation, distribution, and consumption for maximum efficiency and sustainability.',
  features: ['Quantum energy optimization', 'Grid management algorithms', 'Renewable energy integration', 'Energy storage optimization', 'Demand forecasting', 'Performance monitoring', 'Sustainability analytics', 'Cost optimization tools', 'Integration with energy systems', '24/7 energy optimization'],
  popular: true,
  icon: '⚡',
  color: 'from-yellow-600 to-orange-600',
  textColor: 'text-yellow-400',
  link: 'https://ziontechgroup.com/quantum-energy-platform',
  marketPosition: 'Leading quantum energy platform. Our advantage: Quantum optimization reduces energy costs by 40% and improves efficiency by 60%.',
  targetAudience: 'Energy companies, Utility providers, Renewable energy companies, Government agencies, Industrial facilities',
  trialDays: 45,
  setupTime: '3-4 weeks',
  category: 'Quantum Computing & Energy',
  realService: true,
  technology: ['Python, Quantum algorithms, Energy systems, AI/ML, Optimization tools'],
  integrations: ['Smart grid systems, Energy management systems, Renewable energy platforms'],
  useCases: ['Grid optimization, Energy storage, Renewable integration, Demand management, Cost optimization'],
  roi: 'Energy companies report 40% reduction in costs and 60% improvement in efficiency.',
  competitors: ['Limited competition - specialized quantum energy optimization'],
  marketSize: '$25.5B energy optimization market',
  growthRate: '30% annual growth',
  variant: 'quantum-energy-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Quantum energy platform with advanced optimization algorithms and comprehensive energy management capabilities.',
  launchDate: '2024-06-20',
  customers: 32,
  rating: 4.8,
  reviews: 21
},
// Quantum Robotics Platform
{
  id: 'quantum-robotics-platform',
  name: 'Quantum Robotics Platform',
  tagline: 'Enhance robotics with quantum computing capabilities',
  price: '$1,499',
  period: '/month',
  description: 'Advanced quantum robotics platform that combines quantum computing with robotics for enhanced perception, decision-making, and autonomous operation.',
  features: ['Quantum-enhanced perception', 'Advanced decision algorithms', 'Autonomous operation systems', 'Multi-robot coordination', 'Performance optimization', 'Safety validation tools', 'Integration with robot platforms', 'Real-time quantum processing', 'Custom algorithm development', '24/7 robotics support'],
  popular: true,
  icon: '🤖',
  color: 'from-gray-600 to-slate-600',
  textColor: 'text-gray-400',
  link: 'https://ziontechgroup.com/quantum-robotics-platform',
  marketPosition: 'Leading quantum robotics platform. Our advantage: Quantum computing improves robot performance by 300% and decision-making accuracy by 200%.',
  targetAudience: 'Robotics companies, Manufacturing companies, Research institutions, Healthcare robotics, Autonomous systems',
  trialDays: 30,
  setupTime: '3-4 weeks',
  category: 'Quantum Computing & Robotics',
  realService: true,
  technology: ['Python, Quantum algorithms, Robotics, AI/ML, Control systems'],
  integrations: ['Robot platforms, Simulation environments, Control systems, Sensor networks'],
  useCases: ['Industrial robotics, Healthcare robotics, Autonomous vehicles, Research robotics, Service robots'],
  roi: 'Robotics companies report 300% improvement in performance and 200% improvement in decision accuracy.',
  competitors: ['Limited competition - specialized quantum robotics platform'],
  marketSize: '$18.5B quantum robotics market',
  growthRate: '45% annual growth',
  variant: 'quantum-robotics-enterprise',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Quantum robotics platform with enhanced perception and decision-making capabilities.',
  launchDate: '2024-05-25',
  customers: 25,
  rating: 4.7,
  reviews: 16
},
// Quantum Metaverse Platform
{
  id: 'space-resource-mining-platform',
  name: 'Space Resource Mining Platform',
  tagline: 'Asteroid mining and space resource extraction',
  price: '$15,000',
  period: '/month',
  description: 'Revolutionary space resource mining platform that enables automated asteroid mining, resource extraction, and space-based manufacturing for the next generation of space exploration and commercialization.',
  features: ['Automated asteroid identification and analysis', 'Robotic mining and extraction systems', 'Space-based resource processing', 'Real-time space operations monitoring', 'Resource transportation and logistics', 'Space manufacturing capabilities', 'Environmental impact assessment', 'Regulatory compliance and safety', 'Integration with space agencies', 'Custom space mining operations'],
  popular: true,
  icon: '🚀',
  color: 'from-purple-500 to-indigo-600',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/space-resource-mining-platform',
  marketPosition: 'First-to-market space resource mining platform with automated extraction and processing capabilities.',
  targetAudience: 'Space agencies, Private space companies, Mining corporations, Research institutions, Government agencies',
  trialDays: 60,
  setupTime: '12-16 weeks',
  category: 'Space Technology & Mining',
  realService: true,
  technology: ['Space Robotics', 'AI Navigation', 'Resource Processing', 'Satellite Technology', 'Python', 'ROS', 'Space SDKs'],
  integrations: ['NASA APIs', 'SpaceX APIs', 'Satellite systems', 'Ground stations', 'Space agencies', 'Research databases'],
  useCases: ['Asteroid mining', 'Space resource extraction', 'Space manufacturing', 'Research missions', 'Commercial space operations'],
  roi: 'Space companies report 1000%+ ROI through resource extraction and space commercialization opportunities.',
  competitors: ['None - First to market'],
  marketSize: '$50B+ potential market',
  growthRate: '800%+ annual growth',
  variant: 'space-mining',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced space resource mining platform with automated robotics, AI navigation, and comprehensive space operations management.',
  launchDate: '2025-01-25',
  customers: 3,
  rating: 5.0,
  reviews: 2
},
// Brain-Computer Interface Platform
{
  id: 'brain-computer-interface-platform',
  name: 'Brain-Computer Interface Platform',
  tagline: 'Direct neural interface technology',
  price: '$8,800',
  period: '/month',
  description: 'Advanced brain-computer interface platform that enables direct communication between the human brain and computers, opening new possibilities for human-computer interaction and medical applications.',
  features: ['Non-invasive neural signal processing', 'Real-time brain-computer communication', 'Neural pattern recognition and interpretation', 'Custom BCI application development', 'Medical and therapeutic applications', 'Research and development tools', 'Safety and compliance monitoring', 'Integration with medical devices', 'Advanced neural analytics', 'Custom BCI solutions'],
  popular: true,
  icon: '🧠',
  color: 'from-pink-500 to-purple-600',
  textColor: 'text-pink-400',
  link: 'https://ziontechgroup.com/brain-computer-interface-platform',
  marketPosition: 'Leading brain-computer interface platform with advanced neural signal processing and medical application capabilities.',
  targetAudience: 'Medical research institutions, Healthcare organizations, Neuroscience labs, Technology companies, Research universities',
  trialDays: 45,
  setupTime: '8-10 weeks',
  category: 'Neural Technology & BCI',
  realService: true,
  technology: ['Neural Engineering', 'Signal Processing', 'Machine Learning', 'Medical Technology', 'Python', 'TensorFlow', 'Neural SDKs'],
  integrations: ['Medical devices', 'Research equipment', 'Data analysis tools', 'Cloud platforms', 'Medical databases'],
  useCases: ['Medical research', 'Therapeutic applications', 'Human-computer interaction', 'Neuroscience research', 'Assistive technology'],
  roi: 'Medical institutions report 600% ROI with breakthrough research capabilities and improved patient outcomes.',
  competitors: ['Neuralink', 'Kernel', 'CTRL-labs', 'OpenBCI'],
  marketSize: '$3.2B BCI market',
  growthRate: '45% annual growth',
  variant: 'neural-bci',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Comprehensive brain-computer interface platform with advanced neural processing, medical applications, and research capabilities.',
  launchDate: '2025-02-05',
  customers: 12,
  rating: 4.9,
  reviews: 8
},
// Quantum Materials Discovery Platform
{
  id: 'quantum-materials-discovery-platform',
  name: 'Quantum Materials Discovery Platform',
  tagline: 'Accelerate materials science with quantum computing',
  price: '$6,500',
  period: '/month',
  description: 'Advanced quantum materials discovery platform that uses quantum computing and AI to accelerate the discovery and development of new materials with revolutionary properties for various industries.',
  features: ['Quantum computing-powered materials simulation', 'AI-driven materials property prediction', 'High-throughput materials screening', 'Quantum chemistry calculations', 'Materials optimization algorithms', 'Real-time discovery analytics', 'Integration with research databases', 'Custom materials development', 'Industry-specific materials solutions', 'Advanced materials analytics'],
  popular: false,
  icon: '⚛️',
  color: 'from-cyan-500 to-blue-600',
  textColor: 'text-cyan-400',
  link: 'https://ziontechgroup.com/quantum-materials-discovery-platform',
  marketPosition: 'Advanced quantum materials discovery platform with quantum computing integration and AI-powered prediction capabilities.',
  targetAudience: 'Materials science companies, Pharmaceutical companies, Energy companies, Research institutions, Manufacturing companies',
  trialDays: 30,
  setupTime: '6-8 weeks',
  category: 'Quantum Materials Science',
  realService: true,
  technology: ['Quantum Computing', 'Materials Science', 'AI Simulation', 'Quantum Chemistry', 'Python', 'Qiskit', 'TensorFlow'],
  integrations: ['Quantum computing platforms', 'Materials databases', 'Research tools', 'Cloud platforms', 'Scientific software'],
  useCases: ['New materials discovery', 'Drug development', 'Energy storage', 'Manufacturing optimization', 'Research acceleration'],
  roi: 'Materials companies report 450% ROI with 80% faster materials discovery and 60% improvement in material properties.',
  competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Quantum', 'D-Wave'],
  marketSize: '$4.8B quantum materials market',
  growthRate: '55% annual growth',
  variant: 'quantum-materials',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Comprehensive quantum materials discovery platform with quantum computing integration, AI simulation, and advanced analytics.',
  launchDate: '2025-02-20',
  customers: 18,
  rating: 4.8,
  reviews: 12
},
// Autonomous Vehicle AI Platform
{
  id: 'autonomous-vehicle-ai-platform',
  name: 'Autonomous Vehicle AI Platform',
  tagline: 'Next-generation autonomous driving intelligence',
  price: '$9,200',
  period: '/month',
  description: 'Advanced autonomous vehicle AI platform that provides cutting-edge perception, decision-making, and control systems for self-driving vehicles across various transportation applications.',
  features: ['Advanced computer vision and perception', 'Real-time decision-making algorithms', 'Multi-sensor fusion and processing', 'Predictive behavior modeling', 'Safety and redundancy systems', 'Custom autonomous applications', 'Integration with vehicle platforms', 'Real-time monitoring and analytics', 'Regulatory compliance features', 'Advanced autonomous analytics'],
  popular: true,
  icon: '🚗',
  color: 'from-green-500 to-emerald-600',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
  marketPosition: 'Advanced autonomous vehicle AI platform with cutting-edge perception and decision-making capabilities.',
  targetAudience: 'Automotive manufacturers, Transportation companies, Logistics companies, Technology companies, Research institutions',
  trialDays: 45,
  setupTime: '8-10 weeks',
  category: 'Autonomous Vehicles & AI',
  realService: true,
  technology: ['Computer Vision', 'Machine Learning', 'Autonomous Systems', 'Sensor Fusion', 'Python', 'TensorFlow', 'ROS'],
  integrations: ['Vehicle platforms', 'Sensor systems', 'Cloud platforms', 'Mapping services', 'Traffic systems'],
  useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery robots', 'Industrial automation', 'Research and development'],
  roi: 'Automotive companies report 500% ROI with 70% improvement in safety and 60% reduction in transportation costs.',
  competitors: ['Waymo', 'Tesla Autopilot', 'Cruise', 'Argo AI'],
  marketSize: '$15.2B autonomous vehicle market',
  growthRate: '40% annual growth',
  variant: 'autonomous-vehicles',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Comprehensive autonomous vehicle AI platform with advanced perception, decision-making, and safety systems.',
  launchDate: '2025-03-05',
  customers: 25,
  rating: 4.9,
  reviews: 18
},
// Quantum Bio-Computing Platform
{
  id: 'quantum-bio-computing-platform',
  name: 'Quantum Bio-Computing Platform',
  tagline: 'Quantum computing for biological systems',
  price: '$7,800',
  period: '/month',
  description: 'Revolutionary quantum bio-computing platform that combines quantum computing with biological systems to solve complex biological problems and accelerate scientific discoveries.',
  features: ['Quantum computing for biological simulations', 'Bio-molecular modeling and optimization', 'Quantum algorithms for biology', 'Real-time biological data processing', 'Custom biological applications', 'Integration with research tools', 'Advanced bio-analytics', 'Quantum bio-chemistry calculations', 'Research collaboration tools', 'Custom bio-computing solutions'],
  popular: false,
  icon: '🧬',
  color: 'from-emerald-500 to-teal-600',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/quantum-bio-computing-platform',
  marketPosition: 'First-to-market quantum bio-computing platform with quantum-biological hybrid processing capabilities.',
  targetAudience: 'Biotechnology companies, Pharmaceutical companies, Research institutions, Healthcare organizations, Academic institutions',
  trialDays: 30,
  setupTime: '6-8 weeks',
  category: 'Quantum Biology & Computing',
  realService: true,
  technology: ['Quantum Computing', 'Biology', 'Bioinformatics', 'Quantum Biology', 'Python', 'Qiskit', 'BioPython'],
  integrations: ['Quantum computing platforms', 'Biological databases', 'Research tools', 'Cloud platforms', 'Scientific software'],
  useCases: ['Drug discovery', 'Protein folding', 'Genetic analysis', 'Biological modeling', 'Research acceleration'],
  roi: 'Biotech companies report 700% ROI with 90% faster drug discovery and 80% improvement in biological modeling accuracy.',
  competitors: ['None - First to market'],
  marketSize: '$8.5B+ potential market',
  growthRate: '600%+ annual growth',
  variant: 'quantum-biology',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced quantum bio-computing platform with quantum-biological hybrid processing and comprehensive research capabilities.',
  launchDate: '2025-03-20',
  customers: 8,
  rating: 5.0,
  reviews: 5
},
// Quantum Energy Platform
{
  id: 'quantum-energy-platform',
  name: 'Quantum Energy Platform',
  tagline: 'Quantum computing for energy optimization',
  price: '$5,800',
  period: '/month',
  description: 'Advanced quantum energy platform that uses quantum computing to optimize energy systems, improve renewable energy efficiency, and solve complex energy-related challenges.',
  features: ['Quantum energy system optimization', 'Renewable energy efficiency algorithms', 'Grid optimization and management', 'Energy storage optimization', 'Quantum energy modeling', 'Real-time energy analytics', 'Integration with energy systems', 'Custom energy solutions', 'Advanced energy forecasting', 'Quantum energy research tools'],
  popular: false,
  icon: '⚡',
  color: 'from-yellow-500 to-orange-600',
  textColor: 'text-yellow-400',
  link: 'https://ziontechgroup.com/quantum-energy-platform',
  marketPosition: 'Advanced quantum energy platform with quantum computing optimization and renewable energy capabilities.',
  targetAudience: 'Energy companies, Utility companies, Renewable energy providers, Government agencies, Research institutions',
  trialDays: 30,
  setupTime: '4-6 weeks',
  category: 'Quantum Energy & Sustainability',
  realService: true,
  technology: ['Quantum Computing', 'Energy Systems', 'Optimization Algorithms', 'Renewable Energy', 'Python', 'Qiskit', 'Energy SDKs'],
  integrations: ['Energy management systems', 'Smart grid platforms', 'Renewable energy systems', 'Cloud platforms', 'Energy databases'],
  useCases: ['Energy optimization', 'Grid management', 'Renewable energy', 'Energy storage', 'Research and development'],
  roi: 'Energy companies report 380% ROI with 50% improvement in energy efficiency and 40% reduction in operational costs.',
  competitors: ['IBM Quantum Energy', 'Google Quantum Energy', 'Microsoft Quantum Energy'],
  marketSize: '$6.2B quantum energy market',
  growthRate: '35% annual growth',
  variant: 'quantum-energy',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Comprehensive quantum energy platform with quantum computing optimization, renewable energy integration, and advanced analytics.',
  launchDate: '2025-04-05',
  customers: 22,
  rating: 4.7,
  reviews: 15
},
// Metaverse AI Development Platform
{
  id: 'metaverse-ai-development-platform',
  name: 'Metaverse AI Development Platform',
  tagline: 'AI-powered metaverse creation and management',
  price: '$4,200',
  period: '/month',
  description: 'Advanced metaverse AI development platform that enables the creation, management, and optimization of immersive virtual worlds with intelligent AI systems and advanced user experiences.',
  features: ['AI-powered virtual world generation', 'Intelligent NPC and character systems', 'Dynamic content creation and adaptation', 'Real-time user experience optimization', 'Metaverse analytics and insights', 'Custom metaverse development tools', 'Integration with VR/AR platforms', 'Advanced user interaction systems', 'Metaverse monetization tools', 'Custom metaverse solutions'],
  popular: true,
  icon: '🌍',
  color: 'from-indigo-500 to-purple-600',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/metaverse-ai-development-platform',
  marketPosition: 'Advanced metaverse AI development platform with intelligent world generation and user experience optimization.',
  targetAudience: 'Gaming companies, Entertainment companies, Technology companies, Educational institutions, Marketing agencies',
  trialDays: 21,
  setupTime: '3-4 weeks',
  category: 'Metaverse & Virtual Reality',
  realService: true,
  technology: ['Artificial Intelligence', 'Virtual Reality', '3D Graphics', 'Game Development', 'Python', 'Unity', 'Unreal Engine'],
  integrations: ['VR platforms', 'AR platforms', 'Gaming engines', 'Social platforms', 'Cloud services', 'Payment systems'],
  useCases: ['Virtual world creation', 'Gaming experiences', 'Virtual events', 'Educational platforms', 'Marketing campaigns'],
  roi: 'Gaming companies report 320% ROI with 50% improvement in user engagement and 40% increase in monetization.',
  competitors: ['Roblox Studio', 'Unity Metaverse', 'Unreal Engine Metaverse', 'Decentraland'],
  marketSize: '$12.8B metaverse market',
  growthRate: '50% annual growth',
  variant: 'metaverse-ai',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Comprehensive metaverse AI development platform with intelligent world generation, user experience optimization, and advanced development tools.',
  launchDate: '2025-04-20',
  customers: 45,
  rating: 4.8,
  reviews: 31
}];

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 503533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedAIAutomationServices: () => (/* binding */ advancedAIAutomationServices)
/* harmony export */ });
var advancedAIAutomationServices = [{
  id: 'ai-autonomous-business-process-automation',
  name: 'AI Autonomous Business Process Automation',
  tagline: 'Self-learning automation that continuously optimizes your business processes',
  price: '$1,299',
  period: '/month',
  description: 'Revolutionary AI-powered automation platform that learns, adapts, and continuously optimizes business processes without human intervention.',
  features: ['Self-learning process optimization', 'Real-time performance monitoring', 'Predictive maintenance alerts', 'Automated decision making', 'Process mining and discovery', 'Intelligent workflow routing', 'Natural language process creation', 'Multi-system integration', 'Compliance automation', '24/7 autonomous operation'],
  popular: true,
  icon: '🤖',
  color: 'from-purple-600 via-pink-600 to-cyan-600',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/ai-autonomous-business-process-automation',
  marketPosition: 'First-to-market autonomous BPA solution. Competes with UiPath ($2,500+), Automation Anywhere ($3,000+). Our advantage: True AI autonomy and 50% cost reduction.',
  targetAudience: 'Enterprise companies, Manufacturing, Healthcare, Finance, Retail, Logistics',
  trialDays: 14,
  setupTime: '2-3 weeks',
  category: 'AI Automation & Process Optimization',
  realService: true,
  technology: ['Machine Learning, Deep Learning, Process Mining, RPA, Python, React, Node.js'],
  integrations: ['ERP systems, CRM platforms, HR systems, Accounting software, Custom APIs'],
  useCases: ['Invoice processing, Customer onboarding, Order fulfillment, HR automation, Compliance reporting'],
  roi: 'Companies report 300-500% ROI through process optimization and reduced manual work.',
  competitors: ['UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate'],
  marketSize: '$25B BPA market',
  growthRate: '25% annual growth',
  variant: 'autonomous-bpa-advanced',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced AI engine with process mining capabilities, real-time optimization algorithms, and comprehensive integration framework.',
  launchDate: '2024-11-01',
  customers: 28,
  rating: 4.8,
  reviews: 15
}, {
  id: 'ai-predictive-maintenance-platform',
  name: 'AI Predictive Maintenance Platform',
  tagline: 'Predict equipment failures before they happen with AI-powered analytics',
  price: '$899',
  period: '/month',
  description: 'Intelligent maintenance platform that uses AI to predict equipment failures, optimize maintenance schedules, and reduce downtime.',
  features: ['Real-time equipment monitoring', 'Predictive failure algorithms', 'Maintenance optimization', 'IoT sensor integration', 'Performance analytics', 'Cost optimization', 'Mobile maintenance alerts', 'Historical data analysis', 'Custom alert rules', 'Integration APIs'],
  popular: true,
  icon: '🔧',
  color: 'from-blue-600 via-cyan-600 to-green-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/ai-predictive-maintenance-platform',
  marketPosition: 'Advanced predictive maintenance solution. Competes with IBM Maximo ($1,500+), SAP EAM ($2,000+). Our advantage: AI-first approach and 40% cost reduction.',
  targetAudience: 'Manufacturing, Energy, Transportation, Healthcare, Facilities management',
  trialDays: 10,
  setupTime: '1-2 weeks',
  category: 'AI IoT & Predictive Analytics',
  realService: true,
  technology: ['Machine Learning, IoT, Time Series Analysis, Python, React, Node.js'],
  integrations: ['SCADA systems, IoT platforms, ERP systems, CMMS software, Custom sensors'],
  useCases: ['Equipment monitoring, Maintenance scheduling, Cost optimization, Performance tracking, Safety compliance'],
  roi: 'Manufacturing companies report 200-400% ROI through reduced downtime and optimized maintenance.',
  competitors: ['IBM Maximo, SAP EAM, GE Digital, PTC ThingWorx'],
  marketSize: '$8B predictive maintenance market',
  growthRate: '30% annual growth',
  variant: 'predictive-maintenance-ai',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced ML algorithms with IoT integration, real-time monitoring, and comprehensive analytics dashboard.',
  launchDate: '2024-10-15',
  customers: 42,
  rating: 4.7,
  reviews: 23
}, {
  id: 'ai-customer-intelligence-platform',
  name: 'AI Customer Intelligence Platform',
  tagline: 'Understand your customers like never before with AI-powered insights',
  price: '$699',
  period: '/month',
  description: 'Comprehensive customer intelligence platform that uses AI to analyze behavior, predict needs, and optimize customer experiences.',
  features: ['Customer behavior analysis', 'Predictive analytics', 'Personalization engine', 'Sentiment analysis', 'Churn prediction', 'Customer segmentation', 'Real-time insights', 'Multi-channel tracking', 'ROI measurement', 'API integration'],
  popular: true,
  icon: '🧠',
  color: 'from-green-600 via-emerald-600 to-teal-600',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/ai-customer-intelligence-platform',
  marketPosition: 'Advanced customer intelligence solution. Competes with Segment ($1,200+), Amplitude ($1,500+). Our advantage: AI-powered insights and 45% cost reduction.',
  targetAudience: 'E-commerce, SaaS, Retail, Banking, Healthcare, Hospitality',
  trialDays: 12,
  setupTime: '1-2 weeks',
  category: 'AI Customer Analytics & Personalization',
  realService: true,
  technology: ['Machine Learning, Natural Language Processing, Data Analytics, Python, React, Node.js'],
  integrations: ['CRM systems, Analytics platforms, Marketing tools, E-commerce platforms, Social media'],
  useCases: ['Customer segmentation, Personalization, Churn prevention, Marketing optimization, Product development'],
  roi: 'Companies report 250-400% ROI through improved customer retention and conversion rates.',
  competitors: ['Segment, Amplitude, Mixpanel, Google Analytics 360'],
  marketSize: '$15B customer analytics market',
  growthRate: '20% annual growth',
  variant: 'customer-intelligence-ai',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced ML algorithms with real-time data processing, comprehensive analytics, and easy integration.',
  launchDate: '2024-09-20',
  customers: 35,
  rating: 4.6,
  reviews: 18
}, {
  id: 'ai-supply-chain-optimization',
  name: 'AI Supply Chain Optimization Platform',
  tagline: 'Optimize your supply chain with AI-powered forecasting and automation',
  price: '$1,199',
  period: '/month',
  description: 'Intelligent supply chain platform that uses AI to forecast demand, optimize inventory, and streamline logistics operations.',
  features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Supplier management', 'Risk assessment', 'Cost optimization', 'Real-time tracking', 'Performance analytics', 'Automated ordering', 'Multi-warehouse support'],
  popular: false,
  icon: '📦',
  color: 'from-orange-600 via-red-600 to-pink-600',
  textColor: 'text-orange-400',
  link: 'https://ziontechgroup.com/ai-supply-chain-optimization',
  marketPosition: 'Advanced supply chain optimization. Competes with SAP SCM ($3,000+), Oracle SCM ($2,500+). Our advantage: AI-first approach and 60% cost reduction.',
  targetAudience: 'Manufacturing, Retail, Logistics, E-commerce, Healthcare, Automotive',
  trialDays: 15,
  setupTime: '3-4 weeks',
  category: 'AI Supply Chain & Logistics',
  realService: true,
  technology: ['Machine Learning, Optimization Algorithms, IoT, Python, React, Node.js'],
  integrations: ['ERP systems, WMS platforms, TMS systems, E-commerce platforms, Custom APIs'],
  useCases: ['Demand planning, Inventory management, Route optimization, Supplier collaboration, Cost reduction'],
  roi: 'Companies report 300-500% ROI through reduced costs and improved efficiency.',
  competitors: ['SAP SCM, Oracle SCM, Manhattan Associates, JDA Software'],
  marketSize: '$18B supply chain management market',
  growthRate: '22% annual growth',
  variant: 'supply-chain-ai',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced optimization algorithms with real-time data processing, comprehensive analytics, and enterprise integration.',
  launchDate: '2024-08-10',
  customers: 19,
  rating: 4.5,
  reviews: 12
}, {
  id: 'ai-financial-fraud-detection',
  name: 'AI Financial Fraud Detection Platform',
  tagline: 'Detect and prevent financial fraud with advanced AI algorithms',
  price: '$1,499',
  period: '/month',
  description: 'Real-time fraud detection platform that uses AI to identify suspicious transactions and prevent financial losses.',
  features: ['Real-time fraud detection', 'Machine learning models', 'Behavioral analysis', 'Risk scoring', 'Alert management', 'Case management', 'Compliance reporting', 'API integration', 'Custom rules engine', 'Performance analytics'],
  popular: true,
  icon: '🛡️',
  color: 'from-red-600 via-pink-600 to-purple-600',
  textColor: 'text-red-400',
  link: 'https://ziontechgroup.com/ai-financial-fraud-detection',
  marketPosition: 'Advanced fraud detection solution. Competes with FICO Falcon ($2,500+), SAS Fraud Management ($3,000+). Our advantage: Real-time AI detection and 50% cost reduction.',
  targetAudience: 'Banks, Credit unions, Payment processors, Insurance companies, E-commerce',
  trialDays: 20,
  setupTime: '2-3 weeks',
  category: 'AI Security & Fraud Prevention',
  realService: true,
  technology: ['Machine Learning, Deep Learning, Real-time Processing, Python, React, Node.js'],
  integrations: ['Core banking systems, Payment gateways, CRM platforms, Compliance systems, Custom APIs'],
  useCases: ['Transaction monitoring, Account takeover detection, Insurance fraud, Payment fraud, Compliance monitoring'],
  roi: 'Financial institutions report 400-600% ROI through fraud prevention and reduced losses.',
  competitors: ['FICO Falcon, SAS Fraud Management, Featurespace, Feedzai'],
  marketSize: '$12B fraud detection market',
  growthRate: '28% annual growth',
  variant: 'fraud-detection-ai',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced ML models with real-time processing, comprehensive fraud detection, and enterprise security.',
  launchDate: '2024-07-05',
  customers: 31,
  rating: 4.8,
  reviews: 19
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(238239)));
module.exports = __webpack_exports__;

})();