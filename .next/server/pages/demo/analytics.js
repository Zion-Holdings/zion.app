"use strict";
(() => {
var exports = {};
exports.id = 990432;
exports.ids = [890636,990432];
exports.modules = {

/***/ 22470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   navigationService: () => (/* binding */ navigationService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(860076);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _navigationGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(870344);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

class NavigationService {
  constructor() {
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscribers", new Set());
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navigationConfig", null);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updateInterval", null);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isInitialized", false);
    this.generator = new _navigationGenerator__WEBPACK_IMPORTED_MODULE_1__.NavigationGenerator();
    this.initialize();
  }
  initialize() {
    var _this = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      try {
        _this.navigationConfig = yield _this.generator.getNavigationConfig();
        _this.isInitialized = true;
        _this.notifySubscribers();

        // Set up automatic refresh
        _this.startAutoRefresh();
      } catch (error) {
        console.error('Failed to initialize navigation service:', error);
      }
    })();
  }

  // Subscribe to navigation updates
  subscribe(callback) {
    this.subscribers.add(callback);

    // Immediately call with current config if available
    if (this.navigationConfig) {
      callback(this.navigationConfig);
    }

    // Return unsubscribe function
    return () => {
      this.subscribers.delete(callback);
    };
  }

  // Notify all subscribers of updates
  notifySubscribers() {
    if (this.navigationConfig) {
      this.subscribers.forEach(callback => {
        try {
          callback(this.navigationConfig);
        } catch (error) {
          console.error('Error in navigation subscriber:', error);
        }
      });
    }
  }

  // Start automatic refresh
  startAutoRefresh() {
    var _this2 = this;
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    this.updateInterval = setInterval(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      yield _this2.refresh();
    }), 30000); // Refresh every 30 seconds
  }

  // Stop automatic refresh
  stopAutoRefresh() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  // Manual refresh
  refresh() {
    var _this3 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      try {
        yield _this3.generator.updateNavigation();
        _this3.navigationConfig = yield _this3.generator.getNavigationConfig();
        _this3.notifySubscribers();
      } catch (error) {
        console.error('Failed to refresh navigation:', error);
      }
    })();
  }

  // Get current navigation configuration
  getNavigationConfig() {
    return this.navigationConfig;
  }

  // Get navigation for specific context
  getContextualNavigation(context) {
    if (!this.navigationConfig) return null;
    return _objectSpread(_objectSpread({}, this.navigationConfig), {}, {
      sidebar: this.generator.generateSidebarNavigation(context)
    });
  }

  // Get services by category
  getServicesByCategory(categoryId) {
    if (!this.navigationConfig) return [];
    var category = this.navigationConfig.categories.find(c => c.id === categoryId);
    if (!category) return [];
    return this.navigationConfig.services.filter(service => service.category === category.name);
  }

  // Get service by ID
  getServiceById(serviceId) {
    if (!this.navigationConfig) return null;
    return this.navigationConfig.services.find(service => service.id === serviceId) || null;
  }

  // Get category by ID
  getCategoryById(categoryId) {
    if (!this.navigationConfig) return null;
    return this.navigationConfig.categories.find(category => category.id === categoryId) || null;
  }

  // Search services
  searchServices(query, filters) {
    if (!this.navigationConfig) return [];
    var results = this.navigationConfig.services;

    // Apply text search
    if (query) {
      var searchTerm = query.toLowerCase();
      results = results.filter(service => {
        var _service$description, _service$technologySt;
        return service.label.toLowerCase().includes(searchTerm) || ((_service$description = service.description) === null || _service$description === void 0 ? void 0 : _service$description.toLowerCase().includes(searchTerm)) || ((_service$technologySt = service.technologyStack) === null || _service$technologySt === void 0 ? void 0 : _service$technologySt.some(tech => tech.toLowerCase().includes(searchTerm)));
      });
    }

    // Apply category filter
    if (filters !== null && filters !== void 0 && filters.category) {
      results = results.filter(service => service.category === filters.category);
    }

    // Apply status filter
    if (filters !== null && filters !== void 0 && filters.status) {
      results = results.filter(service => service.status === filters.status);
    }

    // Apply technology filter
    if (filters !== null && filters !== void 0 && filters.technology) {
      results = results.filter(service => {
        var _service$technologySt2;
        return (_service$technologySt2 = service.technologyStack) === null || _service$technologySt2 === void 0 ? void 0 : _service$technologySt2.some(tech => tech.toLowerCase().includes(filters.technology.toLowerCase()));
      });
    }
    return results.sort((a, b) => (a.priority || 0) - (b.priority || 0));
  }

  // Get navigation statistics
  getNavigationStats() {
    if (!this.navigationConfig) return null;
    var totalServices = this.navigationConfig.services.length;
    var totalCategories = this.navigationConfig.categories.length;
    var totalPages = this.navigationConfig.pages.length;
    var servicesByStatus = this.navigationConfig.services.reduce((acc, service) => {
      acc[service.status || 'unknown'] = (acc[service.status || 'unknown'] || 0) + 1;
      return acc;
    }, {});
    var servicesByCategory = this.navigationConfig.services.reduce((acc, service) => {
      if (service.category) {
        acc[service.category] = (acc[service.category] || 0) + 1;
      }
      return acc;
    }, {});
    return {
      totalServices,
      totalCategories,
      totalPages,
      servicesByStatus,
      servicesByCategory,
      lastUpdated: new Date().toISOString()
    };
  }

  // Check if service is available
  isServiceAvailable(serviceId) {
    var service = this.getServiceById(serviceId);
    return (service === null || service === void 0 ? void 0 : service.status) === 'active';
  }

  // Get recommended services
  getRecommendedServices(userPreferences) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    if (!this.navigationConfig) return [];
    var recommendations = this.navigationConfig.services.filter(service => service.status === 'active').sort((a, b) => (a.priority || 0) - (b.priority || 0));

    // Apply user preferences if available
    if (userPreferences) {
      if (userPreferences.favoriteServices.length > 0) {
        // Prioritize favorite categories
        var favoriteCategories = new Set(userPreferences.favoriteServices.map(id => {
          var service = this.getServiceById(id);
          return service === null || service === void 0 ? void 0 : service.category;
        }).filter(Boolean));
        recommendations = recommendations.sort((a, b) => {
          var aIsFavorite = a.category && favoriteCategories.has(a.category);
          var bIsFavorite = b.category && favoriteCategories.has(b.category);
          if (aIsFavorite && !bIsFavorite) return -1;
          if (!aIsFavorite && bIsFavorite) return 1;
          return (a.priority || 0) - (b.priority || 0);
        });
      }

      // Filter based on user preferences
      if (!userPreferences.showBetaServices) {
        recommendations = recommendations.filter(service => service.status !== 'beta');
      }
      if (!userPreferences.showDevelopmentServices) {
        recommendations = recommendations.filter(service => service.status !== 'development');
      }
    }
    return recommendations.slice(0, limit);
  }

  // Cleanup
  destroy() {
    this.stopAutoRefresh();
    this.subscribers.clear();
  }
}

// Create singleton instance
var navigationService = new NavigationService();

// Export for use in components
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationService);

/***/ }),

/***/ 148685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(787389);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




var SidebarItem = _ref => {
  var {
    item,
    level = 0
  } = _ref;
  var [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var hasChildren = item.children && item.children.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "space-y-1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: item.href,
        className: "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ".concat(level === 0 ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5 ml-4'),
        children: [item.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: item.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "truncate",
          children: item.label
        })]
      }), hasChildren && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => setIsExpanded(!isExpanded),
        className: "p-1 hover:bg-white/10 rounded transition-colors",
        "aria-label": isExpanded ? 'Collapse' : 'Expand',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
          className: "w-4 h-4 text-white/60 transition-transform ".concat(isExpanded ? 'rotate-180' : ''),
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
          })
        })
      })]
    }), hasChildren && isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "ml-4 space-y-1",
      children: item.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SidebarItem, {
        item: child,
        level: level + 1
      }, child.id))
    })]
  });
};
function SmartSidebar(_ref2) {
  var {
    pageType,
    currentService,
    currentCategory,
    className = ''
  } = _ref2;
  var {
    navigation,
    isLoading
  } = (0,_hooks_useNavigation__WEBPACK_IMPORTED_MODULE_2__.useNavigationContext)({
    pageType,
    currentService,
    currentCategory
  });
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("aside", {
      className: "bg-white/5 backdrop-blur-md border-r border-white/10 p-4 ".concat(className),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "space-y-4",
        children: [...Array(6)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "w-32 h-4 bg-white/20 rounded animate-pulse"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "w-24 h-3 bg-white/20 rounded animate-pulse"
          })]
        }, i))
      })
    });
  }
  if (!navigation) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("aside", {
      className: "bg-white/5 backdrop-blur-md border-r border-white/10 p-4 ".concat(className),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-center text-white/60",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: "Navigation not available"
        })
      })
    });
  }

  // Generate context-specific sidebar content
  var generateSidebarContent = () => {
    switch (pageType) {
      case 'service':
        return generateServiceSidebar();
      case 'category':
        return generateCategorySidebar();
      case 'dashboard':
        return generateDashboardSidebar();
      case 'search':
        return generateSearchSidebar();
      case 'explore':
        return generateExploreSidebar();
      default:
        return generateDefaultSidebar();
    }
  };
  var generateServiceSidebar = () => {
    if (!currentService) return generateDefaultSidebar();
    var service = navigation.services.find(s => s.id === currentService);
    if (!service) return generateDefaultSidebar();
    return [{
      id: 'service-overview',
      label: 'Overview',
      href: service.href,
      icon: '📋',
      priority: 1
    }, {
      id: 'service-demo',
      label: 'Live Demo',
      href: service.href,
      icon: '🚀',
      priority: 2
    }, {
      id: 'service-docs',
      label: 'Documentation',
      href: service.href.replace('/demo/', '/docs/'),
      icon: '📚',
      priority: 3
    }, {
      id: 'service-code',
      label: 'Source Code',
      href: "https://github.com/ai-factory/".concat(service.id),
      icon: '💻',
      priority: 4,
      isExternal: true
    }, {
      id: 'related-services',
      label: 'Related Services',
      href: '#',
      icon: '🔗',
      priority: 5,
      children: navigation.services.filter(s => s.category === service.category && s.id !== service.id).slice(0, 3).map(s => ({
        id: "related-".concat(s.id),
        label: s.label,
        href: s.href,
        status: s.status
      }))
    }];
  };
  var generateCategorySidebar = () => {
    if (!currentCategory) return generateDefaultSidebar();
    var category = navigation.categories.find(c => c.id === currentCategory);
    if (!category) return generateDefaultSidebar();
    var categoryServices = navigation.services.filter(s => s.category === category.name);
    return [{
      id: 'category-overview',
      label: "".concat(category.name, " Overview"),
      href: "/category/".concat(category.slug),
      icon: category.icon,
      priority: 1
    }, {
      id: 'category-services',
      label: 'Services in Category',
      href: '#',
      icon: '🚀',
      priority: 2,
      children: categoryServices.map(service => ({
        id: "service-".concat(service.id),
        label: service.label,
        href: service.href,
        status: service.status
      }))
    }, {
      id: 'category-stats',
      label: 'Category Statistics',
      href: '#',
      icon: '📊',
      priority: 3,
      children: [{
        id: 'total-services',
        label: "Total Services: ".concat(categoryServices.length),
        href: '#'
      }, {
        id: 'active-services',
        label: "Active: ".concat(categoryServices.filter(s => s.status === 'active').length),
        href: '#'
      }, {
        id: 'beta-services',
        label: "Beta: ".concat(categoryServices.filter(s => s.status === 'beta').length),
        href: '#'
      }]
    }];
  };
  var generateDashboardSidebar = () => {
    return [{
      id: 'dashboard-overview',
      label: 'Dashboard Overview',
      href: '/dashboard',
      icon: '📊',
      priority: 1
    }, {
      id: 'my-services',
      label: 'My Services',
      href: '/dashboard/services',
      icon: '🚀',
      priority: 2
    }, {
      id: 'analytics',
      label: 'Analytics',
      href: '/dashboard/analytics',
      icon: '📈',
      priority: 3
    }, {
      id: 'settings',
      label: 'Settings',
      href: '/dashboard/settings',
      icon: '⚙️',
      priority: 4
    }, {
      id: 'quick-actions',
      label: 'Quick Actions',
      href: '#',
      icon: '⚡',
      priority: 5,
      children: [{
        id: 'add-service',
        label: 'Add New Service',
        href: '/dashboard/services/new'
      }, {
        id: 'view-reports',
        label: 'View Reports',
        href: '/reports'
      }, {
        id: 'system-status',
        label: 'System Status',
        href: '/system-status'
      }]
    }];
  };
  var generateSearchSidebar = () => {
    return [{
      id: 'search-filters',
      label: 'Search Filters',
      href: '#',
      icon: '🔍',
      priority: 1,
      children: [{
        id: 'filter-category',
        label: 'By Category',
        href: '#'
      }, {
        id: 'filter-status',
        label: 'By Status',
        href: '#'
      }, {
        id: 'filter-technology',
        label: 'By Technology',
        href: '#'
      }]
    }, {
      id: 'recent-searches',
      label: 'Recent Searches',
      href: '#',
      icon: '🕒',
      priority: 2
    }, {
      id: 'popular-searches',
      label: 'Popular Searches',
      href: '#',
      icon: '🔥',
      priority: 3
    }];
  };
  var generateExploreSidebar = () => {
    return [{
      id: 'explore-categories',
      label: 'Browse Categories',
      href: '#',
      icon: '📂',
      priority: 1,
      children: navigation.categories.map(category => ({
        id: "explore-".concat(category.id),
        label: category.name,
        href: "/category/".concat(category.slug),
        icon: category.icon
      }))
    }, {
      id: 'explore-services',
      label: 'All Services',
      href: '/services',
      icon: '🚀',
      priority: 2
    }, {
      id: 'explore-featured',
      label: 'Featured Services',
      href: '#',
      icon: '⭐',
      priority: 3,
      children: navigation.services.filter(s => s.status === 'active').sort((a, b) => (a.priority || 0) - (b.priority || 0)).slice(0, 5).map(service => ({
        id: "featured-".concat(service.id),
        label: service.label,
        href: service.href,
        status: service.status
      }))
    }];
  };
  var generateDefaultSidebar = () => {
    return [{
      id: 'quick-start',
      label: 'Quick Start',
      href: '/#services',
      icon: '🚀',
      priority: 1
    }, {
      id: 'popular-services',
      label: 'Popular Services',
      href: '/services',
      icon: '🔥',
      priority: 2
    }, {
      id: 'browse-categories',
      label: 'Browse Categories',
      href: '/explore',
      icon: '📂',
      priority: 3
    }, {
      id: 'latest-updates',
      label: 'Latest Updates',
      href: '/newsroom',
      icon: '📰',
      priority: 4
    }];
  };
  var sidebarItems = generateSidebarContent();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("aside", {
    className: "bg-white/5 backdrop-blur-md border-r border-white/10 ".concat(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "p-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mb-6 pb-4 border-b border-white/20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "text-white font-semibold text-lg",
          children: "Navigation"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "text-white/60 text-sm",
          children: [pageType === 'service' && 'Service Details', pageType === 'category' && 'Category Overview', pageType === 'dashboard' && 'Dashboard Tools', pageType === 'search' && 'Search & Filters', pageType === 'explore' && 'Explore Services', pageType === 'home' && 'Quick Access']
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
        className: "space-y-2",
        children: sidebarItems.sort((a, b) => (a.priority || 0) - (b.priority || 0)).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SidebarItem, {
          item: item
        }, item.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-8 pt-4 border-t border-white/20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-center text-white/40 text-xs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: "Navigation powered by"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "font-semibold text-white/60",
            children: "Zion AI"
          })]
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

/***/ 715511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnalyticsDemoPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SmartSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148685);
/* harmony import */ var _hooks_useNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(787389);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function AnalyticsDemoPage() {
  var _service$technologySt, _service$performance, _service$performance2, _service$performance3;
  var {
    serviceNavigation,
    isLoading,
    error
  } = (0,_hooks_useNavigation__WEBPACK_IMPORTED_MODULE_2__.useServiceNavigation)('ai-analytics');
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SmartSidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          pageType: "service",
          currentService: "ai-analytics",
          className: "w-64"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex-1 p-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "animate-pulse space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "h-8 bg-white/20 rounded w-1/3"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "h-4 bg-white/20 rounded w-1/2"
            })]
          })
        })]
      })
    });
  }
  if (error || !serviceNavigation) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text-center text-white",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
          className: "text-2xl font-bold mb-4",
          children: "Error Loading Service"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-white/70",
          children: error || 'Service not found'
        })]
      })
    });
  }
  var {
    service
  } = serviceNavigation;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SmartSidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        pageType: "service",
        currentService: "ai-analytics",
        className: "w-64"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex-1 p-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex items-center gap-3 mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-4xl",
              children: "\uD83E\uDD16"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
                className: "text-4xl font-bold text-white",
                children: service.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-white/60 text-lg",
                children: "AI-Powered Data Analytics Platform"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex items-center gap-4 mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "px-3 py-1 rounded-full text-sm font-medium ".concat(service.status === 'active' ? 'bg-green-500/20 text-green-300' : service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300'),
              children: service.status
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-white/60",
              children: "\u2022"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "text-white/60",
              children: ["Last updated: ", service.lastUpdated]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-white/60",
              children: "\u2022"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-white/60",
              children: service.pricing
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-xl text-white/80 leading-relaxed",
            children: service.description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-2xl font-bold text-white mb-4",
            children: "Technology Stack"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex flex-wrap gap-3",
            children: (_service$technologySt = service.technologyStack) === null || _service$technologySt === void 0 ? void 0 : _service$technologySt.map(tech => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "px-4 py-2 bg-white/10 rounded-lg text-white/80 border border-white/20",
              children: tech
            }, tech))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-2xl font-bold text-white mb-4",
            children: "Performance Metrics"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-md rounded-lg p-6 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl font-bold text-white mb-2",
                children: (_service$performance = service.performance) === null || _service$performance === void 0 ? void 0 : _service$performance.uptime
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-white/60",
                children: "Uptime"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-md rounded-lg p-6 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl font-bold text-white mb-2",
                children: (_service$performance2 = service.performance) === null || _service$performance2 === void 0 ? void 0 : _service$performance2.response
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-white/60",
                children: "Response Time"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-md rounded-lg p-6 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl font-bold text-white mb-2",
                children: (_service$performance3 = service.performance) === null || _service$performance3 === void 0 ? void 0 : _service$performance3.users
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-white/60",
                children: "Active Users"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-2xl font-bold text-white mb-4",
            children: "Live Demo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center py-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-6xl mb-4",
                children: "\uD83D\uDCCA"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-xl font-semibold text-white mb-2",
                children: "Interactive Analytics Dashboard"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-white/60 mb-6",
                children: "Experience the power of AI-driven analytics with real-time data visualization"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex justify-center gap-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
                  children: "\uD83D\uDE80 Launch Demo"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  className: "px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-colors",
                  children: "\uD83D\uDCDA View Documentation"
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-2xl font-bold text-white mb-4",
            children: "Key Features"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl mb-3",
                children: "\uD83E\uDDE0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: "Machine Learning Models"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-white/70 text-sm",
                children: "Advanced ML algorithms for predictive analytics and pattern recognition"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl mb-3",
                children: "\u26A1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: "Real-time Processing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-white/70 text-sm",
                children: "Instant data processing and analysis for immediate insights"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl mb-3",
                children: "\uD83D\uDCC8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: "Interactive Dashboards"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-white/70 text-sm",
                children: "Beautiful, responsive dashboards with customizable widgets"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl mb-3",
                children: "\uD83D\uDD12"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: "Enterprise Security"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-white/70 text-sm",
                children: "SOC 2 compliant with advanced encryption and access controls"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Ready to Get Started?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-white/80 mb-6",
              children: "Join thousands of businesses using AI-powered analytics to drive growth"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex justify-center gap-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                className: "px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors",
                children: "Start Free Trial"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                className: "px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors",
                children: "Contact Sales"
              })]
            })]
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ 787389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCategoryNavigation: () => (/* binding */ useCategoryNavigation),
/* harmony export */   useNavigation: () => (/* binding */ useNavigation),
/* harmony export */   useNavigationContext: () => (/* binding */ useNavigationContext),
/* harmony export */   useServiceNavigation: () => (/* binding */ useServiceNavigation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22470);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


function useNavigation() {
  var [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  var [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Subscribe to navigation updates
    var unsubscribe = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(config => {
      setNavigation(config);
      setIsLoading(false);
      setError(null);
    });

    // Get initial navigation if available
    var initialConfig = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getNavigationConfig();
    if (initialConfig) {
      setNavigation(initialConfig);
      setIsLoading(false);
    }
    return unsubscribe;
  }, []);

  // Get contextual navigation
  var getContextualNavigation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return context => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getContextualNavigation(context);
    };
  }, []);

  // Get services by category
  var getServicesByCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return categoryId => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getServicesByCategory(categoryId);
    };
  }, []);

  // Get service by ID
  var getServiceById = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return serviceId => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getServiceById(serviceId);
    };
  }, []);

  // Get category by ID
  var getCategoryById = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return categoryId => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getCategoryById(categoryId);
    };
  }, []);

  // Search services
  var searchServices = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (query, filters) => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].searchServices(query, filters);
    };
  }, []);

  // Get navigation statistics
  var getNavigationStats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return () => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getNavigationStats();
    };
  }, []);

  // Check if service is available
  var isServiceAvailable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return serviceId => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].isServiceAvailable(serviceId);
    };
  }, []);

  // Get recommended services
  var getRecommendedServices = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (userPreferences, limit) => {
      return _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getRecommendedServices(userPreferences, limit);
    };
  }, []);

  // Manual refresh
  var refresh = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      try {
        setIsLoading(true);
        yield _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to refresh navigation');
      }
    });
    return function refresh() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    navigation,
    isLoading,
    error,
    getContextualNavigation,
    getServicesByCategory,
    getServiceById,
    getCategoryById,
    searchServices,
    getNavigationStats,
    isServiceAvailable,
    getRecommendedServices,
    refresh
  };
}

// Hook for specific navigation context
function useNavigationContext(context) {
  var {
    navigation,
    isLoading,
    error
  } = useNavigation();
  var contextualNavigation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _navigationService$ge;
    if (!navigation) return null;
    return _objectSpread(_objectSpread({}, navigation), {}, {
      sidebar: ((_navigationService$ge = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getContextualNavigation(context)) === null || _navigationService$ge === void 0 ? void 0 : _navigationService$ge.sidebar) || []
    });
  }, [navigation, context]);
  return {
    navigation: contextualNavigation,
    isLoading,
    error
  };
}

// Hook for service-specific navigation
function useServiceNavigation(serviceId) {
  var {
    navigation,
    isLoading,
    error
  } = useNavigation();
  var serviceNavigation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _navigationService$ge2;
    if (!navigation) return null;
    var service = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getServiceById(serviceId);
    if (!service) return null;
    return {
      service,
      sidebar: ((_navigationService$ge2 = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getContextualNavigation({
        pageType: 'service',
        currentService: serviceId
      })) === null || _navigationService$ge2 === void 0 ? void 0 : _navigationService$ge2.sidebar) || []
    };
  }, [navigation, serviceId]);
  return {
    serviceNavigation,
    isLoading,
    error
  };
}

// Hook for category-specific navigation
function useCategoryNavigation(categoryId) {
  var {
    navigation,
    isLoading,
    error
  } = useNavigation();
  var categoryNavigation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _navigationService$ge3;
    if (!navigation) return null;
    var category = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getCategoryById(categoryId);
    if (!category) return null;
    var services = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getServicesByCategory(categoryId);
    return {
      category,
      services,
      sidebar: ((_navigationService$ge3 = _utils_navigationService__WEBPACK_IMPORTED_MODULE_2__["default"].getContextualNavigation({
        pageType: 'category',
        currentCategory: categoryId
      })) === null || _navigationService$ge3 === void 0 ? void 0 : _navigationService$ge3.sidebar) || []
    };
  }, [navigation, categoryId]);
  return {
    categoryNavigation,
    isLoading,
    error
  };
}

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 870344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationGenerator: () => (/* binding */ NavigationGenerator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(860076);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);


class NavigationGenerator {
  constructor() {
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "services", []);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "categories", []);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pages", []);
    this.initializeNavigation();
  }
  initializeNavigation() {
    var _this = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      yield _this.discoverServices();
      yield _this.discoverPages();
      yield _this.generateCategories();
    })();
  }

  // Auto-discover services from data and generate navigation
  discoverServices() {
    var _this2 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      // This would typically scan a services directory or API
      // For now, using the services from the website analysis
      _this2.services = [{
        id: 'ai-analytics',
        label: 'AI-Powered Data Analytics Platform',
        href: '/demo/analytics/',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Advanced analytics platform with machine learning capabilities',
        technologyStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
        pricing: '$99/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '10,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 1
      }, {
        id: 'support-bot',
        label: 'Intelligent Customer Support Bot',
        href: '/demo/support-bot/',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'AI-powered chatbot with natural language processing',
        technologyStack: ['Python', 'NLP', 'React', 'FastAPI'],
        pricing: '$0.10/conversation',
        performance: {
          uptime: '99.8%',
          response: '<100ms',
          users: '50,000+'
        },
        lastUpdated: '2025-01-14',
        priority: 2
      }, {
        id: 'predictive-maintenance',
        label: 'Predictive Maintenance System',
        href: '/demo/predictive-maintenance/',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'AI-driven predictive maintenance system',
        technologyStack: ['Python', 'Scikit-learn', 'React', 'PostgreSQL'],
        pricing: '$50/equipment/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '15,000+'
        },
        lastUpdated: '2025-01-08',
        priority: 3
      }, {
        id: 'video-analytics',
        label: 'Real-time Video Analytics',
        href: '/demo/video-analytics/',
        category: 'AI & Machine Learning',
        status: 'beta',
        description: 'Advanced video analytics with real-time object detection',
        technologyStack: ['Python', 'OpenCV', 'TensorFlow', 'WebRTC'],
        pricing: '$25/stream/month',
        performance: {
          uptime: '99.7%',
          response: '<500ms',
          users: '8,000+'
        },
        lastUpdated: '2025-01-07',
        priority: 4
      }, {
        id: 'iot-pipeline',
        label: 'Real-time IoT Data Pipeline',
        href: '/demo/iot-pipeline/',
        category: 'IoT & Edge',
        status: 'beta',
        description: 'High-performance data pipeline for IoT sensor data',
        technologyStack: ['Apache Kafka', 'Python', 'Node.js', 'MongoDB'],
        pricing: '$5/device/month',
        performance: {
          uptime: '99.7%',
          response: '<50ms',
          users: '5,000+'
        },
        lastUpdated: '2025-01-13',
        priority: 5
      }, {
        id: 'edge-orchestrator',
        label: 'Edge Computing Orchestrator',
        href: '/demo/edge-orchestrator/',
        category: 'IoT & Edge',
        status: 'development',
        description: 'Intelligent edge computing platform',
        technologyStack: ['Kubernetes', 'Docker', 'Python', 'Go'],
        pricing: '$20/node/month',
        performance: {
          uptime: '99.8%',
          response: '<200ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-09',
        priority: 6
      }, {
        id: 'blockchain',
        label: 'Blockchain Smart Contract Platform',
        href: '/demo/blockchain/',
        category: 'Blockchain',
        status: 'development',
        description: 'Enterprise-grade blockchain platform',
        technologyStack: ['Ethereum', 'Solidity', 'Web3.js', 'React'],
        pricing: '$0.01/transaction',
        performance: {
          uptime: '99.5%',
          response: '<500ms',
          users: '2,000+'
        },
        lastUpdated: '2025-01-12',
        priority: 7
      }, {
        id: 'quantum',
        label: 'Quantum Computing Simulator',
        href: '/demo/quantum/',
        category: 'Quantum Computing',
        status: 'beta',
        description: 'Advanced quantum computing simulator',
        technologyStack: ['Python', 'Qiskit', 'React', 'WebAssembly'],
        pricing: '$0.50/minute',
        performance: {
          uptime: '99.6%',
          response: '<1s',
          users: '1,000+'
        },
        lastUpdated: '2025-01-11',
        priority: 8
      }, {
        id: 'api-gateway',
        label: 'Microservice API Gateway',
        href: '/demo/api-gateway/',
        category: 'Microservices',
        status: 'active',
        description: 'High-performance API gateway for microservices',
        technologyStack: ['Node.js', 'Express', 'Redis', 'Docker'],
        pricing: '$0.001/request',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '25,000+'
        },
        lastUpdated: '2025-01-10',
        priority: 9
      }];
      return _this2.services;
    })();
  }

  // Auto-discover pages from the pages directory
  discoverPages() {
    var _this3 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      _this3.pages = [{
        id: 'home',
        label: 'Home',
        href: '/',
        priority: 1
      }, {
        id: 'explore',
        label: 'Explore',
        href: '/explore',
        priority: 2
      }, {
        id: 'services',
        label: 'Services',
        href: '/services',
        priority: 3
      }, {
        id: 'automation',
        label: 'Automations',
        href: '/automation',
        priority: 4
      }, {
        id: 'reports',
        label: 'Reports',
        href: '/reports',
        priority: 5
      }, {
        id: 'newsroom',
        label: 'Updates',
        href: '/newsroom',
        priority: 6
      }, {
        id: 'search',
        label: 'Search',
        href: '/search',
        priority: 7
      }, {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/dashboard',
        priority: 8
      }, {
        id: 'system-status',
        label: 'System Status',
        href: '/system-status',
        priority: 9
      }, {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        priority: 10
      }];
      return _this3.pages;
    })();
  }

  // Auto-generate category-based navigation
  generateCategories() {
    var _this4 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var categoryMap = new Map();

      // Group services by category
      _this4.services.forEach(service => {
        if (service.category) {
          if (!categoryMap.has(service.category)) {
            categoryMap.set(service.category, []);
          }
          categoryMap.get(service.category).push(service);
        }
      });

      // Generate category objects
      _this4.categories = Array.from(categoryMap.entries()).map(_ref => {
        var [name, services] = _ref;
        return {
          id: name.toLowerCase().replace(/\s+/g, '-'),
          name,
          slug: name.toLowerCase().replace(/\s+/g, '-'),
          description: "".concat(name, " solutions and services"),
          serviceCount: services.length,
          icon: _this4.getCategoryIcon(name),
          color: _this4.getCategoryColor(name)
        };
      });
      return _this4.categories;
    })();
  }
  getCategoryIcon(category) {
    var iconMap = {
      'AI & Machine Learning': '🤖',
      'IoT & Edge': '🌐',
      'Blockchain': '⛓️',
      'Quantum Computing': '⚛️',
      'Microservices': '🔧'
    };
    return iconMap[category] || '📱';
  }
  getCategoryColor(category) {
    var colorMap = {
      'AI & Machine Learning': 'from-blue-500 to-purple-600',
      'IoT & Edge': 'from-green-500 to-teal-600',
      'Blockchain': 'from-yellow-500 to-orange-600',
      'Quantum Computing': 'from-purple-500 to-pink-600',
      'Microservices': 'from-indigo-500 to-blue-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  }

  // Generate header navigation
  generateHeaderNavigation() {
    return [{
      id: 'home',
      label: '🏠 Home',
      href: '/',
      priority: 1
    }, {
      id: 'explore',
      label: '🔍 Explore',
      href: '/explore',
      priority: 2
    }, {
      id: 'services',
      label: '🚀 Services',
      href: '/services',
      priority: 3
    }, {
      id: 'automation',
      label: '⚡ Automations',
      href: '/automation',
      priority: 4
    }, {
      id: 'reports',
      label: '📊 Reports',
      href: '/reports',
      priority: 5
    }, {
      id: 'newsroom',
      label: '📰 Updates',
      href: '/newsroom',
      priority: 6
    }, {
      id: 'search',
      label: '🔎 Search',
      href: '/search',
      priority: 7
    }];
  }

  // Generate footer navigation
  generateFooterNavigation() {
    return [{
      id: 'explore',
      label: 'Explore',
      href: '/explore',
      priority: 1
    }, {
      id: 'automation',
      label: 'Automations',
      href: '/automation',
      priority: 2
    }, {
      id: 'reports',
      label: 'Reports',
      href: '/reports',
      priority: 3
    }, {
      id: 'newsroom',
      label: 'Updates',
      href: '/newsroom',
      priority: 4
    }, {
      id: 'site-health',
      label: 'Site Health',
      href: '/site-health',
      priority: 5
    }, {
      id: 'search',
      label: 'Search',
      href: '/search',
      priority: 6
    }, {
      id: 'sitemap',
      label: 'Sitemap',
      href: '/sitemap.xml',
      priority: 7
    }];
  }

  // Generate sidebar navigation based on context
  generateSidebarNavigation(context) {
    switch (context.pageType) {
      case 'service':
        return this.generateServiceSidebar(context.currentService);
      case 'category':
        return this.generateCategorySidebar(context.currentCategory);
      case 'dashboard':
        return this.generateDashboardSidebar();
      default:
        return this.generateDefaultSidebar();
    }
  }
  generateServiceSidebar(serviceId) {
    if (!serviceId) return this.generateDefaultSidebar();
    var service = this.services.find(s => s.id === serviceId);
    if (!service) return this.generateDefaultSidebar();
    return [{
      id: 'service-overview',
      label: 'Overview',
      href: service.href,
      priority: 1
    }, {
      id: 'service-demo',
      label: 'Demo',
      href: service.href.replace('/demo/', '/demo/'),
      priority: 2
    }, {
      id: 'service-docs',
      label: 'Documentation',
      href: service.href.replace('/demo/', '/docs/'),
      priority: 3
    }, {
      id: 'service-code',
      label: 'Source Code',
      href: "https://github.com/ai-factory/".concat(service.id),
      priority: 4,
      isExternal: true
    }];
  }
  generateCategorySidebar(categoryId) {
    if (!categoryId) return this.generateDefaultSidebar();
    var category = this.categories.find(c => c.id === categoryId);
    if (!category) return this.generateDefaultSidebar();
    var categoryServices = this.services.filter(s => s.category === category.name);
    return [{
      id: 'category-overview',
      label: "".concat(category.name, " Overview"),
      href: "/category/".concat(category.slug),
      priority: 1
    }, ...categoryServices.map(service => ({
      id: "service-".concat(service.id),
      label: service.label,
      href: service.href,
      status: service.status,
      priority: service.priority || 10
    }))];
  }
  generateDashboardSidebar() {
    return [{
      id: 'dashboard-overview',
      label: 'Dashboard Overview',
      href: '/dashboard',
      priority: 1
    }, {
      id: 'my-services',
      label: 'My Services',
      href: '/dashboard/services',
      priority: 2
    }, {
      id: 'analytics',
      label: 'Analytics',
      href: '/dashboard/analytics',
      priority: 3
    }, {
      id: 'settings',
      label: 'Settings',
      href: '/dashboard/settings',
      priority: 4
    }];
  }
  generateDefaultSidebar() {
    return [{
      id: 'quick-start',
      label: 'Quick Start',
      href: '/#services',
      priority: 1
    }, {
      id: 'popular-services',
      label: 'Popular Services',
      href: '/services',
      priority: 2
    }, {
      id: 'categories',
      label: 'Browse Categories',
      href: '/explore',
      priority: 3
    }];
  }

  // Auto-update navigation when new services are added
  updateNavigation() {
    var _this5 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      yield _this5.discoverServices();
      yield _this5.generateCategories();
    })();
  }

  // Get complete navigation configuration
  getNavigationConfig() {
    var _this6 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      return {
        header: _this6.generateHeaderNavigation(),
        footer: _this6.generateFooterNavigation(),
        sidebar: _this6.generateSidebarNavigation({
          pageType: 'home'
        }),
        services: _this6.services,
        categories: _this6.categories,
        pages: _this6.pages,
        importantLinks: [{
          id: 'github',
          label: 'GitHub',
          href: 'https://github.com/Zion-Holdings/zion.app',
          isExternal: true,
          priority: 1
        }, {
          id: 'website',
          label: 'Website',
          href: 'https://ziontechgroup.com',
          isExternal: true,
          priority: 2
        }]
      };
    })();
  }
}

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 968816:
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
/* harmony import */ var private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(715511);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/demo/analytics",
        pathname: "/demo/analytics",
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
    userland: private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/demo/analytics",
    config,
    userland: private_next_pages_demo_analytics_index_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(968816)));
module.exports = __webpack_exports__;

})();