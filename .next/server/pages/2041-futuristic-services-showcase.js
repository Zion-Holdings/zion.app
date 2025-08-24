"use strict";
(() => {
var exports = {};
exports.id = 528401;
exports.ids = [528401,890636];
exports.modules = {

/***/ 296683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FuturisticServicesShowcase2041)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41415);
/* harmony import */ var _components_ui_UltraFuturisticBackground2041__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(668668);
/* harmony import */ var _components_ui_UltraFuturisticServiceCard2026__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56196);
/* harmony import */ var _components_ui_UltraFuturisticServiceCard2026__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ui_UltraFuturisticServiceCard2026__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_innovative_2041_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(337056);
/* harmony import */ var _data_innovative_2041_it_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(329434);
/* harmony import */ var _data_innovative_2041_ai_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(976621);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);








function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
var categories = ['All Services', 'AI & Consciousness', 'Quantum Computing', 'Space Technology', 'Metaverse & VR', 'AI & Automation', 'Cybersecurity', 'Cloud Infrastructure', 'DevOps & Automation', 'AI & Creativity', 'AI & Analytics', 'AI & Psychology', 'AI & Education', 'AI & Ethics', 'AI & Finance', 'AI & Healthcare', 'Neural Technology', 'Data Center Infrastructure', 'Network Security', 'IT Operations'];
function FuturisticServicesShowcase2041() {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All Services');
  var [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var allServices = [..._data_innovative_2041_micro_saas_services__WEBPACK_IMPORTED_MODULE_5__.innovative2041MicroSaasServices, ..._data_innovative_2041_it_services__WEBPACK_IMPORTED_MODULE_6__.innovative2041ITServices, ..._data_innovative_2041_ai_services__WEBPACK_IMPORTED_MODULE_7__.innovative2041AIServices];
  var filteredServices = allServices.filter(service => {
    var matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    var matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase()) || service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  var handleCategoryChange = category => {
    setSelectedCategory(category);
  };
  var handleSearch = e => {
    e.preventDefault();
    // Search functionality is handled by the filter
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "2041 Futuristic Services Showcase - Zion Tech Group",
      description: "Explore our revolutionary 2041 futuristic services including AI consciousness evolution, quantum computing, space mining automation, and more cutting-edge solutions.",
      keywords: ["2041 services", "futuristic technology", "AI consciousness", "quantum computing", "space mining", "metaverse", "brain-computer interface", "Zion Tech Group"],
      image: "/images/2041-futuristic-services-showcase.jpg",
      url: "https://ziontechgroup.com/2041-futuristic-services-showcase"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ui_UltraFuturisticBackground2041__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "min-h-screen relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "pt-32 pb-20 px-4 text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h1, {
              className: "text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8",
              initial: {
                opacity: 0,
                y: 50
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8
              },
              children: "2041 Futuristic Services"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
              className: "text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed",
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
              children: "Experience the future of technology with our revolutionary 2041 services. From AI consciousness evolution to quantum space mining, discover solutions that redefine what's possible."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "max-w-2xl mx-auto mb-12",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: 0.4
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
                onSubmit: handleSearch,
                className: "relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "text",
                  placeholder: "Search futuristic services...",
                  value: searchQuery,
                  onChange: e => setSearchQuery(e.target.value),
                  className: "w-full px-6 py-4 bg-black/50 border border-cyan-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  type: "submit",
                  className: "absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300",
                  children: "Search"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "px-4 mb-16",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "flex flex-wrap justify-center gap-4",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: 0.6
              },
              children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                onClick: () => handleCategoryChange(category),
                className: "px-6 py-3 rounded-2xl font-medium transition-all duration-300 ".concat(selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-black/30 border border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'),
                children: category
              }, category))
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "px-4 pb-20",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "mb-12 text-center",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: 0.8
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-4",
                children: selectedCategory === 'All Services' ? 'All Futuristic Services' : selectedCategory
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                className: "text-xl text-gray-400",
                children: [filteredServices.length, " revolutionary services available"]
              })]
            }), filteredServices.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "text-center py-20",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                duration: 0.5
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "text-6xl mb-6",
                children: "\uD83D\uDD0D"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "No services found"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "text-gray-400 mb-8",
                children: "Try adjusting your search or category filter"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                onClick: () => {
                  setSearchQuery('');
                  setSelectedCategory('All Services');
                },
                className: "px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300",
                children: "Reset Filters"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
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
                delay: 1.0
              },
              children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                initial: {
                  opacity: 0,
                  y: 30
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.5,
                  delay: 1.2 + index * 0.1
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((_components_ui_UltraFuturisticServiceCard2026__WEBPACK_IMPORTED_MODULE_3___default()), {
                  service: service
                })
              }, service.id))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("section", {
          className: "px-4 pb-20",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "max-w-4xl mx-auto text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
              className: "bg-gradient-to-r from-black/50 to-gray-900/50 border border-cyan-500/30 rounded-3xl p-12 backdrop-blur-sm",
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
                delay: 1.5
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-6",
                children: "Ready to Experience the Future?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "text-xl text-gray-300 mb-8 leading-relaxed",
                children: "Join the technological revolution with our cutting-edge 2041 services. Transform your business, accelerate innovation, and lead the future."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/contact",
                  className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105",
                  children: "Get Started Today"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/services",
                  className: "px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300",
                  children: "Explore All Services"
                })]
              })]
            })
          })
        })]
      })
    })]
  });
}

// Import motion from framer-motion



/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 451083:
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
/* harmony import */ var private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(296683);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2041-futuristic-services-showcase",
        pathname: "/2041-futuristic-services-showcase",
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
    userland: private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2041-futuristic-services-showcase",
    config,
    userland: private_next_pages_2041_futuristic_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ 668668:
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



var UltraFuturisticBackground2041 = _ref => {
  var {
    children
  } = _ref;
  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var animationFrameId;
    var particles = [];

    // Initialize particles
    var initParticles = () => {
      particles = [];
      for (var i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: "hsl(".concat(200 + Math.random() * 60, ", 70%, 60%)")
        });
      }
    };

    // Animate particles
    var animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          var distance = Math.sqrt(Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2));
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = "rgba(100, 200, 255, ".concat(0.1 * (1 - distance / 100), ")");
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    initParticles();
    animate();
    var handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative min-h-screen bg-black overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("canvas", {
      ref: canvasRef,
      className: "fixed inset-0 w-full h-full pointer-events-none",
      style: {
        zIndex: 0
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "fixed inset-0 pointer-events-none",
      style: {
        zIndex: 1
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl",
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-32 right-32 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl",
        animate: {
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute bottom-32 left-32 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl",
        animate: {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        },
        transition: {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2",
        animate: {
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3]
        },
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "fixed inset-0 pointer-events-none",
      style: {
        zIndex: 2
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full",
        animate: {
          x: [0, 50, 0],
          y: [0, -50, 0],
          opacity: [0, 0.8, 0],
          scale: [0.5, 1, 0.5]
        },
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full",
        animate: {
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0, 0.6, 0],
          scale: [0.3, 1, 0.3]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute bottom-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full",
        animate: {
          x: [0, 30, 0],
          y: [0, -30, 0],
          opacity: [0, 0.7, 0],
          scale: [0.4, 1, 0.4]
        },
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-400 rounded-full",
        animate: {
          x: [0, -35, 0],
          y: [0, -35, 0],
          opacity: [0, 0.5, 0],
          scale: [0.2, 1, 0.2]
        },
        transition: {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "fixed inset-0 pointer-events-none",
      style: {
        zIndex: 1
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "w-full h-full opacity-10",
        style: {
          backgroundImage: "\n              linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px),\n              linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px)\n            ",
          backgroundSize: '50px 50px'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "relative z-10",
      children: children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UltraFuturisticBackground2041);

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(451083)));
module.exports = __webpack_exports__;

})();