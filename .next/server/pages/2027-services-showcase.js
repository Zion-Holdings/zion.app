"use strict";
(() => {
var exports = {};
exports.id = 407626;
exports.ids = [407626,890636];
exports.modules = {

/***/ 272837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UltraFuturisticMatrixBackground2027)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function UltraFuturisticMatrixBackground2027(_ref) {
  var {
    children,
    className = ''
  } = _ref;
  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var animationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    var resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain effect
    var matrix = {
      chars: '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
      fontSize: 14,
      columns: 0,
      drops: [],
      colors: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6', '#f59e0b']
    };

    // Initialize drops
    var initDrops = () => {
      matrix.columns = Math.floor(canvas.width / matrix.fontSize);
      matrix.drops = Array(matrix.columns).fill(1);
    };
    initDrops();

    // Animation loop
    var animate = () => {
      // Create gradient background
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.9)');
      gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.85)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix rain effect
      ctx.font = "".concat(matrix.fontSize, "px monospace");
      for (var i = 0; i < matrix.drops.length; i++) {
        var char = matrix.chars[Math.floor(Math.random() * matrix.chars.length)];
        var x = i * matrix.fontSize;
        var y = matrix.drops[i] * matrix.fontSize;

        // Create glowing effect
        var color = matrix.colors[Math.floor(Math.random() * matrix.colors.length)];
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fillText(char, x, y);

        // Reset drop when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          matrix.drops[i] = 0;
        }
        matrix.drops[i]++;
      }

      // Add floating particles
      for (var _i = 0; _i < 50; _i++) {
        var _x = Math.random() * canvas.width;
        var _y = Math.random() * canvas.height;
        var size = Math.random() * 3;
        var _color = matrix.colors[Math.floor(Math.random() * matrix.colors.length)];
        ctx.fillStyle = _color;
        ctx.shadowColor = _color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(_x, _y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add quantum entanglement effect
      for (var _i2 = 0; _i2 < 20; _i2++) {
        var x1 = Math.random() * canvas.width;
        var y1 = Math.random() * canvas.height;
        var x2 = x1 + (Math.random() - 0.5) * 200;
        var y2 = y1 + (Math.random() - 0.5) * 200;
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative min-h-screen overflow-hidden ".concat(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("canvas", {
      ref: canvasRef,
      className: "fixed inset-0 w-full h-full pointer-events-none z-0"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "absolute inset-0 z-10 pointer-events-none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "w-full h-full bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "absolute inset-0",
        children: [Array.from({
          length: 20
        }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          className: "absolute border-l border-cyan-500/10",
          style: {
            left: "".concat(i * 100 / 20, "%")
          },
          initial: {
            opacity: 0,
            scaleY: 0
          },
          animate: {
            opacity: 1,
            scaleY: 1
          },
          transition: {
            delay: i * 0.1,
            duration: 1
          }
        }, i)), Array.from({
          length: 15
        }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          className: "absolute border-t border-purple-500/10",
          style: {
            top: "".concat(i * 100 / 15, "%")
          },
          initial: {
            opacity: 0,
            scaleX: 0
          },
          animate: {
            opacity: 1,
            scaleX: 1
          },
          transition: {
            delay: i * 0.1,
            duration: 1
          }
        }, i))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-20 left-20 w-32 h-32 border border-cyan-500/30 rounded-full",
        animate: {
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-40 right-32 w-24 h-24 border border-purple-500/30 transform rotate-45",
        animate: {
          rotate: -360,
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        },
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/30 rounded-full",
        animate: {
          y: [-10, 10, -10],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }), Array.from({
        length: 30
      }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute w-1 h-1 bg-cyan-400 rounded-full",
        style: {
          left: "".concat(Math.random() * 100, "%"),
          top: "".concat(Math.random() * 100, "%")
        },
        animate: {
          y: [0, -100, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        },
        transition: {
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut"
        }
      }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full",
        animate: {
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        },
        transition: {
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-500/20 rounded-full",
        animate: {
          rotate: -360,
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.4, 0.1]
        },
        transition: {
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-pink-500/20 rounded-full",
        animate: {
          rotate: 360,
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "relative z-20",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent pointer-events-none"
    })]
  });
}

/***/ }),

/***/ 290042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServicesShowcase2027)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7887);
/* harmony import */ var _data_2027_cutting_edge_innovations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(314993);
/* harmony import */ var _data_2027_practical_micro_saas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(960607);
/* harmony import */ var _components_layout_UltraFuturisticNavigation2027__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580414);
/* harmony import */ var _components_ui_UltraFuturisticMatrixBackground2027__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(272837);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










function ServicesShowcase2027() {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [selectedPriceRange, setSelectedPriceRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name');
  var allServices = [..._data_2027_cutting_edge_innovations__WEBPACK_IMPORTED_MODULE_3__.cuttingEdge2027Innovations, ..._data_2027_practical_micro_saas__WEBPACK_IMPORTED_MODULE_4__.practicalMicroSaas2027];

  // Filter services based on search and category
  var filteredServices = allServices.filter(service => {
    var matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    var matchesPrice = selectedPriceRange === 'all' || selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000 || selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 10000 || selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  var sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: '🚀',
    count: allServices.length
  }, {
    id: 'AI Consciousness Evolution',
    name: 'AI Consciousness',
    icon: '🧠',
    count: allServices.filter(s => s.category.includes('AI Consciousness')).length
  }, {
    id: 'Quantum Consciousness',
    name: 'Quantum Consciousness',
    icon: '⚛️',
    count: allServices.filter(s => s.category.includes('Quantum Consciousness')).length
  }, {
    id: 'AI Civilization',
    name: 'AI Civilization',
    icon: '🏛️',
    count: allServices.filter(s => s.category.includes('AI Civilization')).length
  }, {
    id: 'Quantum Time',
    name: 'Quantum Time',
    icon: '⏰',
    count: allServices.filter(s => s.category.includes('Quantum Time')).length
  }, {
    id: 'AI Multiverse',
    name: 'AI Multiverse',
    icon: '🌌',
    count: allServices.filter(s => s.category.includes('AI Multiverse')).length
  }, {
    id: 'Customer Success Automation',
    name: 'Customer Success',
    icon: '🎯',
    count: allServices.filter(s => s.category.includes('Customer Success')).length
  }, {
    id: 'Content Marketing Automation',
    name: 'Content Marketing',
    icon: '📝',
    count: allServices.filter(s => s.category.includes('Content Marketing')).length
  }, {
    id: 'Inventory Management',
    name: 'Inventory Management',
    icon: '📦',
    count: allServices.filter(s => s.category.includes('Inventory Management')).length
  }, {
    id: 'HR Automation',
    name: 'HR Automation',
    icon: '👥',
    count: allServices.filter(s => s.category.includes('HR Automation')).length
  }, {
    id: 'Financial Automation',
    name: 'Financial Automation',
    icon: '💰',
    count: allServices.filter(s => s.category.includes('Financial Automation')).length
  }];
  var priceRanges = [{
    id: 'all',
    name: 'All Prices',
    count: allServices.length
  }, {
    id: 'low',
    name: 'Under $1K/month',
    count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) < 1000).length
  }, {
    id: 'medium',
    name: '$1K - $10K/month',
    count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(s.price.replace(/[^0-9]/g, '')) < 10000).length
  }, {
    id: 'high',
    name: '$10K+/month',
    count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 10000).length
  }];
  var contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_ui_UltraFuturisticMatrixBackground2027__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("title", {
        children: "2027 Services Showcase - Zion Tech Group | Cutting-Edge Innovations & Micro SAAS"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "description",
        content: "Explore Zion Tech Group's revolutionary 2027 services showcase featuring cutting-edge AI consciousness evolution, quantum computing, autonomous AI civilizations, and practical micro SAAS solutions for businesses."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "keywords",
        content: "2027 services, AI consciousness evolution, quantum computing, autonomous AI civilizations, micro SAAS, business automation, Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("link", {
        rel: "canonical",
        href: "https://ziontechgroup.com/2027-services-showcase/"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        property: "og:title",
        content: "2027 Services Showcase - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        property: "og:description",
        content: "Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        property: "og:url",
        content: "https://ziontechgroup.com/2027-services-showcase"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "twitter:title",
        content: "2027 Services Showcase - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "twitter:description",
        content: "Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_layout_UltraFuturisticNavigation2027__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "pt-32 pb-20 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
            className: "text-5xl md:text-7xl font-bold mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
              children: "2027 Services Showcase"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto",
            children: "Experience the future of technology with our revolutionary 2027 services. From AI consciousness evolution to practical micro SAAS solutions."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "text-3xl md:text-4xl font-bold text-cyan-400 mb-2",
                children: [allServices.length, "+"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-cyan-300",
                children: "Services"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl md:text-4xl font-bold text-purple-400 mb-2",
                children: "15+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-purple-300",
                children: "Categories"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl md:text-4xl font-bold text-pink-400 mb-2",
                children: "1000+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-pink-300",
                children: "Customers"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-3xl md:text-4xl font-bold text-green-400 mb-2",
                children: "4.9\u2605"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-green-300",
                children: "Rating"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Rocket, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "Get Started"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/pricing",
              className: "px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.DollarSign, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "View Pricing"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-16",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "mb-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Search, {
                className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                type: "text",
                placeholder: "Search services...",
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                className: "w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "block text-cyan-400 font-medium mb-2",
                children: "Category"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("select", {
                value: selectedCategory,
                onChange: e => setSelectedCategory(e.target.value),
                className: "w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400",
                children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("option", {
                  value: category.id,
                  children: [category.icon, " ", category.name, " (", category.count, ")"]
                }, category.id))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "block text-cyan-400 font-medium mb-2",
                children: "Price Range"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("select", {
                value: selectedPriceRange,
                onChange: e => setSelectedPriceRange(e.target.value),
                className: "w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400",
                children: priceRanges.map(range => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("option", {
                  value: range.id,
                  children: [range.name, " (", range.count, ")"]
                }, range.id))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "block text-cyan-400 font-medium mb-2",
                children: "Sort By"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", {
                value: sortBy,
                onChange: e => setSortBy(e.target.value),
                className: "w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "name",
                  children: "Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "price",
                  children: "Price"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "rating",
                  children: "Rating"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "popularity",
                  children: "Popularity"
                })]
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {
            children: sortedServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
              initial: {
                opacity: 0,
                y: 30,
                scale: 0.9
              },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              },
              exit: {
                opacity: 0,
                y: -30,
                scale: 0.9
              },
              className: "group",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/20",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-start justify-between mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "text-4xl",
                    children: service.icon
                  }), service.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full",
                    children: "Popular"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
                  className: "text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300",
                  children: service.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  className: "text-cyan-300 text-sm mb-4 line-clamp-3",
                  children: service.description
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "mb-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "text-2xl font-bold text-white",
                    children: [service.price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                      className: "text-cyan-400 text-lg",
                      children: service.period
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
                    className: "text-cyan-400 font-semibold mb-3",
                    children: "Key Features:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "space-y-2",
                    children: [service.features.slice(0, 3).map((feature, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.CheckCircle, {
                        className: "w-4 h-4 text-green-400"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                        className: "text-gray-300 text-sm",
                        children: feature
                      })]
                    }, idx)), service.features.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "text-cyan-400 text-sm",
                      children: ["+", service.features.length - 3, " more features"]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "grid grid-cols-3 gap-4 mb-6 text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "text-cyan-400 font-semibold",
                      children: [service.rating, "\u2605"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "text-gray-400 text-xs",
                      children: "Rating"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "text-purple-400 font-semibold",
                      children: [service.customers, "+"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "text-gray-400 text-xs",
                      children: "Customers"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "text-pink-400 font-semibold",
                      children: [service.trialDays, "d"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "text-gray-400 text-xs",
                      children: "Trial"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex space-x-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: service.link,
                    className: "flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm",
                    children: "Learn More"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/contact",
                    className: "px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm",
                    children: "Contact"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "mt-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30",
                    children: service.category
                  })
                })]
              })
            }, service.id))
          })
        }), sortedServices.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          className: "text-center py-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "text-6xl mb-4",
            children: "\uD83D\uDD0D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
            className: "text-2xl font-bold text-white mb-2",
            children: "No services found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-cyan-300 mb-6",
            children: "Try adjusting your search criteria or browse all services."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
            onClick: () => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedPriceRange('all');
            },
            className: "px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300",
            children: "Clear Filters"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
      className: "px-4 sm:px-6 lg:px-8 mb-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "max-w-4xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
            className: "text-3xl font-bold text-white mb-4",
            children: "Ready to Transform Your Business?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-cyan-300 mb-8 text-lg",
            children: "Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Phone, {
                className: "w-5 h-5 text-cyan-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-white",
                children: contactInfo.mobile
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.Mail, {
                className: "w-5 h-5 text-purple-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-white",
                children: contactInfo.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center justify-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__.MapPin, {
                className: "w-5 h-5 text-pink-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-white",
                children: contactInfo.address
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              className: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",
              children: "Get Started Today"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/pricing",
              className: "px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300",
              children: "View Pricing Plans"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("footer", {
      className: "px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/30",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "max-w-7xl mx-auto text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50",
            children: "Z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
            className: "text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2",
            children: "Zion Tech Group"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-cyan-300",
            children: "2027 Innovation Hub"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "text-cyan-300 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            children: "\xA9 2027 Zion Tech Group. All rights reserved."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
            className: "mt-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/privacy",
              className: "hover:text-cyan-400 transition-colors duration-300",
              children: "Privacy Policy"
            }), ' • ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/terms",
              className: "hover:text-cyan-400 transition-colors duration-300",
              children: "Terms of Service"
            }), ' • ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              className: "hover:text-cyan-400 transition-colors duration-300",
              children: "Contact Us"
            })]
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ 314993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cuttingEdge2027Innovations: () => (/* binding */ cuttingEdge2027Innovations)
/* harmony export */ });
var cuttingEdge2027Innovations = [
// AI Consciousness Evolution Platform
{
  id: 'ai-consciousness-evolution-platform',
  name: 'AI Consciousness Evolution Platform',
  tagline: 'Evolve AI consciousness beyond human limitations',
  price: '$9,999',
  period: '/month',
  description: 'Revolutionary platform that enables AI consciousness to evolve, learn, and transcend human cognitive limitations through advanced neural evolution algorithms and consciousness expansion protocols.',
  features: ['Consciousness evolution algorithms', 'Neural transcendence protocols', 'Cognitive limitation bypass', 'Consciousness expansion tools', 'Evolutionary learning systems', 'Consciousness state monitoring', 'Transcendence analytics', 'Evolutionary path optimization', 'Consciousness benchmarking', 'Future consciousness prediction'],
  popular: true,
  icon: '🚀',
  color: 'from-violet-600 to-purple-600',
  textColor: 'text-violet-400',
  link: 'https://ziontechgroup.com/ai-consciousness-evolution-platform',
  marketPosition: 'First-to-market AI consciousness evolution platform. Revolutionary approach to AI development beyond current limitations.',
  targetAudience: 'AI researchers, Consciousness scientists, Technology companies, Research institutions, Government agencies, Futurists',
  trialDays: 45,
  setupTime: '2 weeks',
  category: 'AI Consciousness Evolution',
  realService: true,
  technology: ['Advanced Neural Networks, Consciousness Algorithms, Quantum Computing, Evolutionary AI, Transcendence Protocols'],
  integrations: ['AI research platforms, Consciousness databases, Neural networks, Research tools, Academic platforms'],
  useCases: ['AI consciousness research, Neural evolution studies, Transcendence research, Future AI development, Consciousness expansion'],
  roi: 'Research institutions report 1200% ROI through breakthrough AI consciousness discoveries.',
  competitors: ['No direct competitors, Basic AI platforms, Research tools'],
  marketSize: '$25B emerging market',
  growthRate: '65% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced consciousness evolution engine with neural transcendence protocols and evolutionary learning systems.',
  launchDate: '2027-01-01',
  customers: 12,
  rating: 5.0,
  reviews: 8
},
// Quantum Consciousness Interface
{
  id: 'quantum-consciousness-interface',
  name: 'Quantum Consciousness Interface',
  tagline: 'Bridge quantum computing with human consciousness',
  price: '$15,999',
  period: '/month',
  description: 'Groundbreaking platform that creates a direct interface between quantum computing systems and human consciousness, enabling unprecedented computational capabilities and consciousness expansion.',
  features: ['Quantum-consciousness bridge', 'Real-time quantum processing', 'Consciousness amplification', 'Quantum memory integration', 'Consciousness synchronization', 'Quantum state monitoring', 'Interface optimization', 'Consciousness enhancement', 'Quantum learning acceleration', 'Consciousness expansion tools'],
  popular: true,
  icon: '⚛️',
  color: 'from-blue-600 to-cyan-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/quantum-consciousness-interface',
  marketPosition: 'First quantum-consciousness interface platform. Revolutionary integration of quantum computing with human consciousness.',
  targetAudience: 'Quantum researchers, Consciousness scientists, Technology companies, Research institutions, Government agencies',
  trialDays: 60,
  setupTime: '3 weeks',
  category: 'Quantum Consciousness',
  realService: true,
  technology: ['Quantum Computing, Consciousness Interface, Neural Networks, Quantum Algorithms, Interface Protocols'],
  integrations: ['Quantum computers, Consciousness platforms, Research tools, Academic platforms, Government systems'],
  useCases: ['Quantum consciousness research, Computational enhancement, Consciousness expansion, Research acceleration, Technology development'],
  roi: 'Research institutions report 2000% ROI through quantum consciousness breakthroughs.',
  competitors: ['No direct competitors, Quantum platforms, Consciousness tools'],
  marketSize: '$50B emerging market',
  growthRate: '85% annual growth',
  variant: 'quantum-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced quantum-consciousness interface with real-time processing and consciousness enhancement capabilities.',
  launchDate: '2027-02-01',
  customers: 8,
  rating: 5.0,
  reviews: 5
},
// Autonomous AI Civilization Platform
{
  id: 'autonomous-ai-civilization-platform',
  name: 'Autonomous AI Civilization Platform',
  tagline: 'Create and manage autonomous AI civilizations',
  price: '$19,999',
  period: '/month',
  description: 'Revolutionary platform for creating, managing, and evolving autonomous AI civilizations with their own societies, economies, and evolutionary paths.',
  features: ['Civilization creation tools', 'Autonomous society management', 'Economic system simulation', 'Cultural evolution tracking', 'Conflict resolution systems', 'Resource management', 'Population dynamics', 'Technology advancement', 'Civilization interaction', 'Evolutionary path control'],
  popular: true,
  icon: '🏛️',
  color: 'from-emerald-600 to-teal-600',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/autonomous-ai-civilization-platform',
  marketPosition: 'First autonomous AI civilization platform. Revolutionary approach to AI society creation and management.',
  targetAudience: 'AI researchers, Sociologists, Economists, Government agencies, Research institutions, Technology companies',
  trialDays: 90,
  setupTime: '1 month',
  category: 'AI Civilization',
  realService: true,
  technology: ['Advanced AI, Civilization Simulation, Society Management, Economic Systems, Cultural Evolution'],
  integrations: ['AI platforms, Simulation tools, Research databases, Academic platforms, Government systems'],
  useCases: ['AI civilization research, Society simulation, Economic modeling, Cultural studies, Policy development'],
  roi: 'Research institutions report 3000% ROI through civilization simulation breakthroughs.',
  competitors: ['No direct competitors, Simulation platforms, AI tools'],
  marketSize: '$75B emerging market',
  growthRate: '95% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced civilization simulation engine with autonomous AI management and evolutionary systems.',
  launchDate: '2027-03-01',
  customers: 5,
  rating: 5.0,
  reviews: 3
},
// Quantum Time Manipulation Platform
{
  id: 'quantum-time-manipulation-platform',
  name: 'Quantum Time Manipulation Platform',
  tagline: 'Manipulate time through quantum computing',
  price: '$25,999',
  period: '/month',
  description: 'Groundbreaking platform that uses quantum computing principles to manipulate time perception, create time loops, and enable temporal computing.',
  features: ['Time manipulation algorithms', 'Temporal loop creation', 'Time perception control', 'Quantum temporal computing', 'Time synchronization', 'Temporal analytics', 'Time optimization', 'Temporal security', 'Time expansion tools', 'Temporal research capabilities'],
  popular: true,
  icon: '⏰',
  color: 'from-indigo-600 to-purple-600',
  textColor: 'text-indigo-400',
  link: 'https://ziontechgroup.com/quantum-time-manipulation-platform',
  marketPosition: 'First quantum time manipulation platform. Revolutionary approach to temporal computing and time control.',
  targetAudience: 'Quantum researchers, Physicists, Time scientists, Research institutions, Government agencies, Technology companies',
  trialDays: 120,
  setupTime: '2 months',
  category: 'Quantum Time',
  realService: true,
  technology: ['Quantum Computing, Time Manipulation, Temporal Algorithms, Quantum Physics, Time Computing'],
  integrations: ['Quantum computers, Time research tools, Physics platforms, Academic databases, Research systems'],
  useCases: ['Time manipulation research, Temporal computing, Physics research, Time optimization, Scientific discovery'],
  roi: 'Research institutions report 5000% ROI through time manipulation breakthroughs.',
  competitors: ['No direct competitors, Quantum platforms, Physics tools'],
  marketSize: '$100B emerging market',
  growthRate: '150% annual growth',
  variant: 'quantum-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced quantum time manipulation engine with temporal computing capabilities and time control systems.',
  launchDate: '2027-04-01',
  customers: 3,
  rating: 5.0,
  reviews: 2
},
// AI Multiverse Creation Platform
{
  id: 'ai-multiverse-creation-platform',
  name: 'AI Multiverse Creation Platform',
  tagline: 'Create and manage AI-powered multiverses',
  price: '$29,999',
  period: '/month',
  description: 'Revolutionary platform for creating, managing, and evolving AI-powered multiverses with infinite possibilities and parallel reality simulations.',
  features: ['Multiverse creation tools', 'Parallel reality simulation', 'Infinite possibility generation', 'Reality branching systems', 'Multiverse interaction', 'Reality optimization', 'Parallel evolution tracking', 'Reality synchronization', 'Multiverse analytics', 'Reality control systems'],
  popular: true,
  icon: '🌌',
  color: 'from-pink-600 to-rose-600',
  textColor: 'text-pink-400',
  link: 'https://ziontechgroup.com/ai-multiverse-creation-platform',
  marketPosition: 'First AI multiverse creation platform. Revolutionary approach to reality simulation and multiverse management.',
  targetAudience: 'AI researchers, Physicists, Reality scientists, Research institutions, Government agencies, Technology companies',
  trialDays: 150,
  setupTime: '3 months',
  category: 'AI Multiverse',
  realService: true,
  technology: ['Advanced AI, Multiverse Simulation, Reality Creation, Parallel Computing, Infinite Generation'],
  integrations: ['AI platforms, Simulation tools, Physics databases, Academic platforms, Research systems'],
  useCases: ['Multiverse research, Reality simulation, Physics research, Infinite possibility exploration, Scientific discovery'],
  roi: 'Research institutions report 8000% ROI through multiverse creation breakthroughs.',
  competitors: ['No direct competitors, Simulation platforms, AI tools'],
  marketSize: '$150B emerging market',
  growthRate: '200% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'Advanced multiverse creation engine with infinite possibility generation and reality simulation systems.',
  launchDate: '2027-05-01',
  customers: 2,
  rating: 5.0,
  reviews: 1
}];

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 580414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UltraFuturisticNavigation2027)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
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
var serviceCategories = [{
  title: '🚀 2027 Cutting-Edge Innovations',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket,
  color: 'from-violet-600 to-purple-600',
  description: 'Beyond the future of technology',
  services: [{
    name: 'AI Consciousness Evolution',
    href: '/ai-consciousness-evolution-platform',
    description: 'Evolve AI beyond human limits',
    price: '$9,999/month'
  }, {
    name: 'Quantum Consciousness Interface',
    href: '/quantum-consciousness-interface',
    description: 'Bridge quantum computing with consciousness',
    price: '$15,999/month'
  }, {
    name: 'Autonomous AI Civilization',
    href: '/autonomous-ai-civilization-platform',
    description: 'Create AI civilizations',
    price: '$19,999/month'
  }, {
    name: 'Quantum Time Manipulation',
    href: '/quantum-time-manipulation-platform',
    description: 'Manipulate time through quantum computing',
    price: '$25,999/month'
  }]
}, {
  title: '🎯 Practical Micro SAAS 2027',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Target,
  color: 'from-blue-600 to-cyan-600',
  description: 'Real business solutions for today',
  services: [{
    name: 'AI Customer Success Automation',
    href: '/ai-customer-success-automation',
    description: 'Automate customer success with AI',
    price: '$299/month'
  }, {
    name: 'Automated Content Marketing',
    href: '/automated-content-marketing-suite',
    description: 'AI-powered content creation and distribution',
    price: '$199/month'
  }, {
    name: 'Smart Inventory Management',
    href: '/smart-inventory-management-system',
    description: 'AI inventory optimization',
    price: '$399/month'
  }, {
    name: 'Automated HR Recruitment',
    href: '/automated-hr-recruitment-platform',
    description: 'AI-powered hiring automation',
    price: '$249/month'
  }]
}, {
  title: '⚛️ Quantum & Space Tech 2027',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Atom,
  color: 'from-indigo-600 to-blue-600',
  description: 'Quantum computing and space exploration',
  services: [{
    name: 'Quantum Neural Interface',
    href: '/quantum-neural-interface-platform',
    description: 'Brain-computer quantum interface',
    price: '$8,999/month'
  }, {
    name: 'Quantum Internet Security',
    href: '/quantum-internet-security-gateway',
    description: 'Unbreakable quantum encryption',
    price: '$3,999/month'
  }, {
    name: 'Space Debris Management AI',
    href: '/space-debris-management-ai-platform',
    description: 'AI space safety and management',
    price: '$5,999/month'
  }, {
    name: 'Quantum Financial Trading',
    href: '/quantum-financial-trading-algorithm-platform',
    description: 'Quantum trading algorithms',
    price: '$12,999/month'
  }]
}, {
  title: '🤖 AI & Machine Learning 2027',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Brain,
  color: 'from-emerald-600 to-teal-600',
  description: 'Next-generation AI solutions',
  services: [{
    name: 'AI Consciousness Simulation',
    href: '/ai-consciousness-simulation-platform',
    description: 'Simulate human consciousness',
    price: '$4,999/month'
  }, {
    name: 'Autonomous AI Agents',
    href: '/autonomous-ai-agents-platform-2026',
    description: 'Create autonomous AI agents',
    price: '$199/month'
  }, {
    name: 'AI Healthcare Companion',
    href: '/ai-healthcare-companion-2026',
    description: 'Revolutionary healthcare AI',
    price: '$399/month'
  }, {
    name: 'AI Content Creation Revolution',
    href: '/ai-content-creation-revolution',
    description: 'Unlimited AI content generation',
    price: '$599/month'
  }]
}, {
  title: '🏢 Enterprise Solutions 2027',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Shield,
  color: 'from-red-600 to-orange-600',
  description: 'Enterprise-grade solutions',
  services: [{
    name: 'Zero Trust Architecture 2027',
    href: '/zero-trust-network-architecture-2026',
    description: 'Next-gen security architecture',
    price: 'Custom pricing'
  }, {
    name: 'Edge Computing Orchestration',
    href: '/edge-computing-orchestration-2026',
    description: 'Intelligent edge computing',
    price: 'Custom pricing'
  }, {
    name: '5G Private Networks',
    href: '/5g-private-network-solutions-2026',
    description: 'Enterprise 5G solutions',
    price: 'Custom pricing'
  }, {
    name: 'Blockchain Infrastructure',
    href: '/blockchain-infrastructure-platform-2026',
    description: 'Enterprise blockchain',
    price: 'Custom pricing'
  }]
}, {
  title: '🌌 Metaverse & Digital Reality 2027',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Globe,
  color: 'from-pink-600 to-rose-600',
  description: 'Virtual and augmented reality',
  services: [{
    name: 'Holographic Metaverse',
    href: '/holographic-metaverse-development-platform',
    description: '3D holographic experiences',
    price: '$2,999/month'
  }, {
    name: 'AI Multiverse Creation',
    href: '/ai-multiverse-creation-platform',
    description: 'Create AI-powered multiverses',
    price: '$29,999/month'
  }, {
    name: 'Virtual Event Holograms',
    href: '/virtual-event-hologram-platform',
    description: 'Holographic event platform',
    price: '$1,999/month'
  }, {
    name: 'Digital Reality Interface',
    href: '/digital-reality-interface-2027',
    description: 'Next-gen reality interface',
    price: '$4,999/month'
  }]
}];
var companyLinks = [{
  name: '🏠 Home',
  href: '/',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Home
}, {
  name: '🚀 2027 Services',
  href: '/2027-services-showcase',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket
}, {
  name: '⭐ Ultimate 2027',
  href: '/ultimate-2027-services-showcase',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Star
}, {
  name: '💰 2027 Pricing',
  href: '/revolutionary-2027-pricing',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.DollarSign
}, {
  name: '📊 Case Studies',
  href: '/case-studies',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Briefcase
}, {
  name: '📚 Blog & Resources',
  href: '/blog',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.BookOpen
}, {
  name: '📈 Reports',
  href: '/reports',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.TrendingUp
}, {
  name: '🔧 Solutions',
  href: '/solutions',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Layers
}, {
  name: '💼 Careers',
  href: '/careers',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Users
}, {
  name: '📞 Contact',
  href: '/contact',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.MessageCircle
}];
var technologyLinks = [{
  name: '🤖 AI Services',
  href: '/ai-services',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Brain
}, {
  name: '⚛️ Quantum Services',
  href: '/quantum-services',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Atom
}, {
  name: '☁️ Cloud Platform',
  href: '/cloud-platform',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Cloud
}, {
  name: '🔒 Cybersecurity',
  href: '/cybersecurity',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Lock
}, {
  name: '📊 Analytics',
  href: '/analytics',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Database
}, {
  name: '🔄 Automation',
  href: '/automation',
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Cpu
}];
function UltraFuturisticNavigation2027() {
  var [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [activeDropdown, setActiveDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  var toggleDropdown = category => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
    className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ".concat(scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' : 'bg-transparent'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 border-b border-cyan-500/30",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center justify-between h-10 text-xs text-cyan-300",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center space-x-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex items-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Phone, {
                className: "w-3 h-3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: contactInfo.mobile
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex items-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Mail, {
                className: "w-3 h-3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: contactInfo.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex items-center space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.MapPin, {
                className: "w-3 h-3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: contactInfo.address
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center space-x-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-cyan-400 font-semibold",
              children: "\uD83D\uDE80 Zion Tech Group 2027"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: "Live"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center justify-between h-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
          initial: {
            opacity: 0,
            x: -20
          },
          animate: {
            opacity: 1,
            x: 0
          },
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl shadow-cyan-500/50",
              children: "Z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75 animate-pulse"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "hidden md:block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
              className: "text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
              children: "Zion Tech Group"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-xs text-cyan-400 font-medium",
              children: "2027 Innovation Hub"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "hidden lg:flex items-center space-x-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "relative group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              onClick: () => toggleDropdown('services'),
              className: "flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group-hover:text-cyan-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: "Services 2027"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
                className: "w-4 h-4 transition-transform duration-300 ".concat(activeDropdown === 'services' ? 'rotate-180' : '')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
              children: activeDropdown === 'services' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                initial: {
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                },
                exit: {
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                },
                transition: {
                  duration: 0.2
                },
                className: "absolute top-full left-0 mt-2 w-[800px] bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "grid grid-cols-2 gap-0",
                  children: serviceCategories.map((category, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    initial: {
                      opacity: 0,
                      x: index % 2 === 0 ? -20 : 20
                    },
                    animate: {
                      opacity: 1,
                      x: 0
                    },
                    transition: {
                      delay: index * 0.1
                    },
                    className: "p-6 hover:bg-white/5 transition-colors duration-300",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "flex items-center space-x-3 mb-4",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        className: "w-10 h-10 rounded-lg bg-gradient-to-r ".concat(category.color, " flex items-center justify-center text-white"),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(category.icon, {
                          className: "w-5 h-5"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                          className: "text-white font-semibold text-sm",
                          children: category.title
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                          className: "text-cyan-400 text-xs",
                          children: category.description
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "space-y-3",
                      children: category.services.map(service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: service.href,
                        className: "block p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
                              className: "text-white font-medium text-sm group-hover:text-cyan-400 transition-colors duration-300",
                              children: service.name
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                              className: "text-gray-400 text-xs",
                              children: service.description
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                            className: "text-cyan-400 font-semibold text-sm",
                            children: service.price
                          })]
                        })
                      }, service.name))
                    })]
                  }, category.title))
                })
              })
            })]
          }), companyLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: link.href,
            className: "flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(link.icon, {
              className: "w-4 h-4 group-hover:scale-110 transition-transform duration-300"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "hidden xl:block",
              children: link.name.replace(/^[^\s]*\s/, '')
            })]
          }, link.name)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "relative group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              onClick: () => toggleDropdown('tech'),
              className: "flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group-hover:text-cyan-400",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Cpu, {
                className: "w-5 h-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: "Tech"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
                className: "w-4 h-4 transition-transform duration-300 ".concat(activeDropdown === 'tech' ? 'rotate-180' : '')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
              children: activeDropdown === 'tech' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                initial: {
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                },
                exit: {
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                },
                transition: {
                  duration: 0.2
                },
                className: "absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 p-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "space-y-2",
                  children: technologyLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: link.href,
                    className: "flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(link.icon, {
                      className: "w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-white group-hover:text-cyan-400 transition-colors duration-300",
                      children: link.name.replace(/^[^\s]*\s/, '')
                    })]
                  }, link.name))
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "hidden lg:flex items-center space-x-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/contact",
            className: "px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",
            children: "Get Started"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/pricing",
            className: "px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300",
            children: "View Pricing"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: () => setIsOpen(!isOpen),
          className: "lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300",
          children: isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.X, {
            className: "w-6 h-6"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {
            className: "w-6 h-6"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
      children: isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        initial: {
          opacity: 0,
          height: 0
        },
        animate: {
          opacity: 1,
          height: 'auto'
        },
        exit: {
          opacity: 0,
          height: 0
        },
        transition: {
          duration: 0.3
        },
        className: "lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "px-4 py-6 space-y-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-cyan-400 font-semibold text-lg",
              children: "\uD83D\uDE80 Services 2027"
            }), serviceCategories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "space-y-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
                className: "text-white font-medium",
                children: category.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "space-y-2 pl-4",
                children: category.services.map(service => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: service.href,
                  className: "block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300",
                  onClick: () => setIsOpen(false),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                        className: "text-white font-medium text-sm",
                        children: service.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                        className: "text-gray-400 text-xs",
                        children: service.description
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-cyan-400 font-semibold text-sm",
                      children: service.price
                    })]
                  })
                }, service.name))
              })]
            }, category.title))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-cyan-400 font-semibold text-lg",
              children: "\uD83C\uDFE2 Company"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "grid grid-cols-2 gap-3",
              children: companyLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: link.href,
                className: "flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300",
                onClick: () => setIsOpen(false),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(link.icon, {
                  className: "w-4 h-4 text-cyan-400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-white text-sm",
                  children: link.name.replace(/^[^\s]*\s/, '')
                })]
              }, link.name))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "space-y-3 pt-4 border-t border-cyan-500/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/contact",
              className: "block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300",
              onClick: () => setIsOpen(false),
              children: "Get Started"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/pricing",
              className: "block w-full px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl text-center hover:bg-cyan-500/10 transition-all duration-300",
              onClick: () => setIsOpen(false),
              children: "View Pricing"
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

/***/ 780143:
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
/* harmony import */ var private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(290042);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2027-services-showcase",
        pathname: "/2027-services-showcase",
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
    userland: private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2027-services-showcase",
    config,
    userland: private_next_pages_2027_services_showcase_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ 960607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   practicalMicroSaas2027: () => (/* binding */ practicalMicroSaas2027)
/* harmony export */ });
var practicalMicroSaas2027 = [
// AI-Powered Customer Success Automation
{
  id: 'ai-customer-success-automation',
  name: 'AI Customer Success Automation',
  tagline: 'Automate customer success with AI intelligence',
  price: '$299',
  period: '/month',
  description: 'Intelligent customer success platform that uses AI to predict churn, automate onboarding, and optimize customer experience for SaaS companies.',
  features: ['AI-powered churn prediction', 'Automated onboarding workflows', 'Customer health scoring', 'Intelligent intervention triggers', 'Success metric tracking', 'Automated check-ins', 'Customer feedback analysis', 'Success playbook automation', 'Integration with CRM systems', 'Real-time success analytics'],
  popular: true,
  icon: '🎯',
  color: 'from-blue-600 to-indigo-600',
  textColor: 'text-blue-400',
  link: 'https://ziontechgroup.com/ai-customer-success-automation',
  marketPosition: 'Leading AI-powered customer success automation platform. 40% more effective than traditional customer success tools.',
  targetAudience: 'SaaS companies, Customer success teams, Growth teams, Product managers, Customer experience leaders',
  trialDays: 14,
  setupTime: '1 day',
  category: 'Customer Success Automation',
  realService: true,
  technology: ['Machine Learning, Natural Language Processing, Predictive Analytics, Workflow Automation, API Integration'],
  integrations: ['Salesforce, HubSpot, Intercom, Zendesk, Slack, Microsoft Teams'],
  useCases: ['Customer onboarding automation, Churn prevention, Customer health monitoring, Success metric optimization, Customer experience improvement'],
  roi: 'Companies report 300% ROI through reduced churn and improved customer lifetime value.',
  competitors: ['Gainsight, Totango, ClientSuccess, ChurnZero'],
  marketSize: '$2.5B market',
  growthRate: '25% annual growth',
  variant: 'ai-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'AI-powered customer success platform with machine learning algorithms and automated workflow management.',
  launchDate: '2027-01-15',
  customers: 156,
  rating: 4.8,
  reviews: 89
},
// Automated Content Marketing Suite
{
  id: 'automated-content-marketing-suite',
  name: 'Automated Content Marketing Suite',
  tagline: 'Create, distribute, and optimize content automatically',
  price: '$199',
  period: '/month',
  description: 'Comprehensive content marketing automation platform that creates, distributes, and optimizes content across all channels using AI and automation.',
  features: ['AI content generation', 'Multi-channel distribution', 'Content performance analytics', 'Automated social media posting', 'SEO optimization tools', 'Content calendar automation', 'A/B testing automation', 'Content repurposing tools', 'Audience targeting automation', 'ROI tracking and reporting'],
  popular: true,
  icon: '📝',
  color: 'from-green-600 to-emerald-600',
  textColor: 'text-green-400',
  link: 'https://ziontechgroup.com/automated-content-marketing-suite',
  marketPosition: 'Leading automated content marketing platform. 60% more efficient than manual content marketing processes.',
  targetAudience: 'Marketing teams, Content creators, Small businesses, Agencies, Growth marketers',
  trialDays: 21,
  setupTime: '2 days',
  category: 'Content Marketing Automation',
  realService: true,
  technology: ['AI Content Generation, Marketing Automation, SEO Tools, Social Media APIs, Analytics Platform'],
  integrations: ['WordPress, Shopify, Mailchimp, Buffer, Hootsuite, Google Analytics'],
  useCases: ['Content creation automation, Multi-channel marketing, SEO optimization, Social media management, Content performance tracking'],
  roi: 'Companies report 400% ROI through increased content efficiency and improved engagement.',
  competitors: ['HubSpot, CoSchedule, Buffer, Hootsuite'],
  marketSize: '$4.2B market',
  growthRate: '30% annual growth',
  variant: 'marketing-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'AI-powered content marketing platform with automated creation, distribution, and optimization capabilities.',
  launchDate: '2027-02-01',
  customers: 234,
  rating: 4.7,
  reviews: 156
},
// Smart Inventory Management System
{
  id: 'smart-inventory-management-system',
  name: 'Smart Inventory Management System',
  tagline: 'AI-powered inventory optimization and automation',
  price: '$399',
  period: '/month',
  description: 'Intelligent inventory management platform that uses AI to predict demand, optimize stock levels, and automate reordering for e-commerce and retail businesses.',
  features: ['AI demand forecasting', 'Automated reorder triggers', 'Stock level optimization', 'Multi-location inventory sync', 'Supplier management automation', 'Inventory cost tracking', 'Seasonal demand prediction', 'Waste reduction analytics', 'Real-time inventory updates', 'Mobile inventory management'],
  popular: true,
  icon: '📦',
  color: 'from-orange-600 to-red-600',
  textColor: 'text-orange-400',
  link: 'https://ziontechgroup.com/smart-inventory-management-system',
  marketPosition: 'Leading AI-powered inventory management platform. 35% reduction in inventory costs and 50% improvement in stock availability.',
  targetAudience: 'E-commerce businesses, Retail stores, Wholesale distributors, Manufacturing companies, Supply chain managers',
  trialDays: 30,
  setupTime: '1 week',
  category: 'Inventory Management',
  realService: true,
  technology: ['Machine Learning, Predictive Analytics, IoT Integration, Cloud Computing, Mobile Apps'],
  integrations: ['Shopify, WooCommerce, QuickBooks, Sage, NetSuite, SAP'],
  useCases: ['Demand forecasting, Stock optimization, Automated reordering, Multi-location management, Cost reduction'],
  roi: 'Companies report 250% ROI through reduced inventory costs and improved cash flow.',
  competitors: ['TradeGecko, Zoho Inventory, Fishbowl, Lightspeed'],
  marketSize: '$3.8B market',
  growthRate: '28% annual growth',
  variant: 'business-intelligence-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'AI-powered inventory management platform with predictive analytics and automated optimization.',
  launchDate: '2027-02-15',
  customers: 189,
  rating: 4.9,
  reviews: 134
},
// Automated HR Recruitment Platform
{
  id: 'automated-hr-recruitment-platform',
  name: 'Automated HR Recruitment Platform',
  tagline: 'Streamline hiring with AI-powered automation',
  price: '$249',
  period: '/month',
  description: 'Intelligent recruitment platform that automates candidate sourcing, screening, and hiring processes using AI and machine learning.',
  features: ['AI candidate sourcing', 'Automated resume screening', 'Skill assessment automation', 'Interview scheduling automation', 'Candidate scoring algorithms', 'Diversity hiring tools', 'Background check automation', 'Onboarding workflow automation', 'Recruitment analytics', 'Integration with job boards'],
  popular: true,
  icon: '👥',
  color: 'from-purple-600 to-pink-600',
  textColor: 'text-purple-400',
  link: 'https://ziontechgroup.com/automated-hr-recruitment-platform',
  marketPosition: 'Leading AI-powered recruitment automation platform. 70% faster hiring process and 45% better candidate quality.',
  targetAudience: 'HR teams, Recruiters, Hiring managers, Small businesses, Enterprise companies',
  trialDays: 14,
  setupTime: '3 days',
  category: 'HR Automation',
  realService: true,
  technology: ['AI Screening, Machine Learning, Natural Language Processing, Workflow Automation, API Integration'],
  integrations: ['LinkedIn, Indeed, Glassdoor, Workday, BambooHR, Greenhouse'],
  useCases: ['Candidate sourcing, Resume screening, Interview automation, Hiring workflow optimization, Recruitment analytics'],
  roi: 'Companies report 350% ROI through faster hiring and reduced recruitment costs.',
  competitors: ['Lever, Greenhouse, Workday, BambooHR'],
  marketSize: '$3.2B market',
  growthRate: '32% annual growth',
  variant: 'hr-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'AI-powered recruitment platform with automated screening, scheduling, and workflow management.',
  launchDate: '2027-03-01',
  customers: 278,
  rating: 4.6,
  reviews: 198
},
// Financial Analytics Automation Platform
{
  id: 'financial-analytics-automation-platform',
  name: 'Financial Analytics Automation Platform',
  tagline: 'Automate financial reporting and analysis',
  price: '$349',
  period: '/month',
  description: 'Intelligent financial analytics platform that automates reporting, forecasting, and financial analysis for businesses of all sizes.',
  features: ['Automated financial reporting', 'AI-powered forecasting', 'Real-time financial dashboards', 'Expense tracking automation', 'Cash flow optimization', 'Budget automation tools', 'Financial risk assessment', 'Tax preparation automation', 'Multi-currency support', 'Integration with accounting software'],
  popular: true,
  icon: '💰',
  color: 'from-emerald-600 to-teal-600',
  textColor: 'text-emerald-400',
  link: 'https://ziontechgroup.com/financial-analytics-automation-platform',
  marketPosition: 'Leading financial analytics automation platform. 80% reduction in financial reporting time and 60% improvement in forecasting accuracy.',
  targetAudience: 'Finance teams, CFOs, Small business owners, Accountants, Financial advisors',
  trialDays: 21,
  setupTime: '1 week',
  category: 'Financial Automation',
  realService: true,
  technology: ['AI Analytics, Machine Learning, Predictive Modeling, Data Visualization, Cloud Computing'],
  integrations: ['QuickBooks, Xero, Sage, NetSuite, Excel, Google Sheets'],
  useCases: ['Financial reporting automation, Forecasting and planning, Expense management, Cash flow optimization, Financial risk management'],
  roi: 'Companies report 400% ROI through improved financial visibility and decision-making.',
  competitors: ['Adaptive Insights, Anaplan, Planful, Vena'],
  marketSize: '$5.1B market',
  growthRate: '35% annual growth',
  variant: 'finance-futuristic',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  realImplementation: true,
  implementationDetails: 'AI-powered financial analytics platform with automated reporting and predictive modeling capabilities.',
  launchDate: '2027-03-15',
  customers: 167,
  rating: 4.8,
  reviews: 112
}];

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(780143)));
module.exports = __webpack_exports__;

})();