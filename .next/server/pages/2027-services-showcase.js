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

  // Sort options
  var sortOptions = [{
    value: 'name',
    label: 'Sort by Name'
  }, {
    value: 'price',
    label: 'Sort by Price'
  }, {
    value: 'roi',
    label: 'Sort by ROI'
  }];
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
      case 'roi':
        return parseInt(a.roi.replace(/[^0-9]/g, '')) - parseInt(b.roi.replace(/[^0-9]/g, ''));
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
var cuttingEdge2027Innovations = [{
  id: 'ai-consciousness-platform',
  name: 'AI Consciousness Platform',
  description: 'Advanced AI platform that simulates human consciousness and emotional intelligence for customer interactions, therapy, and creative applications.',
  category: 'AI & Machine Learning',
  price: '$5,999/month',
  features: ['Emotional intelligence simulation', 'Context-aware conversations', 'Personality adaptation', 'Ethical decision making', 'Continuous learning', 'Multi-modal consciousness'],
  benefits: ['400% increase in customer satisfaction', '90% reduction in response time', 'Personalized user experiences', 'Scalable emotional support', '24/7 availability'],
  useCases: ['Customer service automation', 'Mental health support', 'Creative writing assistance', 'Educational tutoring', 'Therapeutic applications'],
  targetAudience: ['Healthcare providers', 'E-commerce platforms', 'Educational institutions', 'Mental health organizations', 'Creative agencies'],
  marketSize: '$15.2B by 2027',
  competitiveAdvantage: 'First-to-market consciousness simulation with ethical AI framework',
  implementationTime: '2-3 weeks',
  roi: '500% within 6 months',
  link: 'https://ziontechgroup.com/services/ai-consciousness-platform',
  tags: ['AI', 'Consciousness', 'Emotional Intelligence', 'Customer Experience', 'Healthcare']
}, {
  id: 'quantum-neural-interface',
  name: 'Quantum Neural Interface',
  description: 'Revolutionary interface that combines quantum computing with neural networks for ultra-fast AI processing and decision making.',
  category: 'Quantum Computing',
  price: '$8,999/month',
  features: ['Quantum neural processing', 'Real-time decision making', 'Quantum encryption', 'Neural network optimization', 'Quantum memory management', 'Hybrid classical-quantum algorithms'],
  benefits: ['1000x faster AI processing', 'Unbreakable quantum encryption', 'Real-time complex calculations', 'Energy efficiency', 'Scalable architecture'],
  useCases: ['Financial trading algorithms', 'Drug discovery', 'Climate modeling', 'Cryptographic systems', 'Scientific research'],
  targetAudience: ['Financial institutions', 'Pharmaceutical companies', 'Research institutions', 'Government agencies', 'Tech companies'],
  marketSize: '$8.9B by 2027',
  competitiveAdvantage: 'Only platform combining quantum computing with neural networks',
  implementationTime: '4-6 weeks',
  roi: '800% within 8 months',
  link: 'https://ziontechgroup.com/services/quantum-neural-interface',
  tags: ['Quantum Computing', 'Neural Networks', 'AI', 'Encryption', 'Research']
}, {
  id: 'holographic-metaverse-platform',
  name: 'Holographic Metaverse Platform',
  description: 'Next-generation metaverse platform with holographic projections, spatial computing, and immersive social experiences.',
  category: 'Metaverse & VR/AR',
  price: '$3,999/month',
  features: ['Holographic projections', 'Spatial computing', 'Real-time collaboration', '3D asset marketplace', 'Cross-platform compatibility', 'AI-powered avatars'],
  benefits: ['Immersive user experiences', 'Real-time global collaboration', 'Reduced travel costs', 'Enhanced creativity', 'New revenue streams'],
  useCases: ['Virtual meetings', 'Product demonstrations', 'Virtual events', 'Training simulations', 'Social networking'],
  targetAudience: ['Corporations', 'Event organizers', 'Educational institutions', 'Real estate companies', 'Entertainment industry'],
  marketSize: '$74.4B by 2027',
  competitiveAdvantage: 'First holographic metaverse with spatial computing capabilities',
  implementationTime: '3-4 weeks',
  roi: '600% within 6 months',
  link: 'https://ziontechgroup.com/services/holographic-metaverse-platform',
  tags: ['Metaverse', 'Holographic', 'VR/AR', 'Collaboration', 'Immersive']
}, {
  id: 'biotech-neural-enhancement',
  name: 'Biotech Neural Enhancement Platform',
  description: 'Advanced platform for neural enhancement, brain-computer interfaces, and cognitive augmentation using cutting-edge biotechnology.',
  category: 'Healthcare & Biotechnology',
  price: '$12,999/month',
  features: ['Neural interface protocols', 'Cognitive enhancement algorithms', 'Biometric monitoring', 'Personalized treatments', 'Real-time brain mapping', 'Safety protocols'],
  benefits: ['Enhanced cognitive abilities', 'Improved learning speed', 'Better memory retention', 'Personalized healthcare', 'Preventive medicine'],
  useCases: ['Medical research', 'Educational enhancement', 'Cognitive rehabilitation', 'Performance optimization', 'Aging research'],
  targetAudience: ['Research institutions', 'Hospitals', 'Educational organizations', 'Sports teams', 'Aging care facilities'],
  marketSize: '$27.1B by 2027',
  competitiveAdvantage: 'Only platform combining biotechnology with neural enhancement',
  implementationTime: '6-8 weeks',
  roi: '1000% within 12 months',
  link: 'https://ziontechgroup.com/services/biotech-neural-enhancement',
  tags: ['Biotechnology', 'Neural Enhancement', 'Healthcare', 'Cognitive', 'Research']
}, {
  id: 'space-quantum-communications',
  name: 'Space Quantum Communications Network',
  description: 'Revolutionary quantum communication network for space exploration, satellite communications, and interplanetary data transfer.',
  category: 'Space Technology',
  price: '$15,999/month',
  features: ['Quantum entanglement communication', 'Interplanetary data transfer', 'Satellite quantum networks', 'Space weather monitoring', 'Astronomical data processing', 'Deep space exploration tools'],
  benefits: ['Instantaneous communication', 'Unhackable data transfer', 'Real-time space monitoring', 'Enhanced exploration capabilities', 'Global satellite coverage'],
  useCases: ['Space exploration', 'Satellite communications', 'Astronomical research', 'Climate monitoring', 'Global positioning systems'],
  targetAudience: ['Space agencies', 'Satellite companies', 'Research institutions', 'Government agencies', 'Telecommunications'],
  marketSize: '$12.3B by 2027',
  competitiveAdvantage: 'First quantum communication network for space applications',
  implementationTime: '8-12 weeks',
  roi: '1200% within 18 months',
  link: 'https://ziontechgroup.com/services/space-quantum-communications',
  tags: ['Space Technology', 'Quantum Communications', 'Satellites', 'Exploration', 'Research']
}, {
  id: 'autonomous-ai-agents',
  name: 'Autonomous AI Agents Platform',
  description: 'Platform for creating, deploying, and managing autonomous AI agents that can operate independently and make complex decisions.',
  category: 'AI & Machine Learning',
  price: '$4,999/month',
  features: ['Agent creation tools', 'Autonomous decision making', 'Multi-agent coordination', 'Learning algorithms', 'Ethical frameworks', 'Performance monitoring'],
  benefits: ['Automated complex tasks', '24/7 operation', 'Scalable workforce', 'Cost reduction', 'Improved efficiency'],
  useCases: ['Customer service', 'Process automation', 'Data analysis', 'Predictive maintenance', 'Supply chain management'],
  targetAudience: ['Enterprises', 'Manufacturing companies', 'Service providers', 'E-commerce platforms', 'Financial institutions'],
  marketSize: '$19.2B by 2027',
  competitiveAdvantage: 'Most advanced autonomous agent platform with ethical AI',
  implementationTime: '3-4 weeks',
  roi: '700% within 8 months',
  link: 'https://ziontechgroup.com/services/autonomous-ai-agents',
  tags: ['AI', 'Autonomous Agents', 'Automation', 'Decision Making', 'Ethics']
}, {
  id: 'quantum-financial-trading',
  name: 'Quantum Financial Trading Platform',
  description: 'Advanced financial trading platform using quantum algorithms for ultra-fast market analysis, prediction, and automated trading.',
  category: 'Financial Technology',
  price: '$9,999/month',
  features: ['Quantum market analysis', 'Real-time predictions', 'Automated trading', 'Risk management', 'Portfolio optimization', 'Regulatory compliance'],
  benefits: ['1000x faster analysis', 'Improved predictions', 'Risk reduction', 'Higher returns', '24/7 trading'],
  useCases: ['Stock trading', 'Cryptocurrency trading', 'Forex trading', 'Commodity trading', 'Portfolio management'],
  targetAudience: ['Investment firms', 'Banks', 'Hedge funds', 'Individual traders', 'Financial institutions'],
  marketSize: '$22.8B by 2027',
  competitiveAdvantage: 'Only quantum-powered financial trading platform',
  implementationTime: '4-6 weeks',
  roi: '900% within 10 months',
  link: 'https://ziontechgroup.com/services/quantum-financial-trading',
  tags: ['Financial Technology', 'Quantum Computing', 'Trading', 'AI', 'Risk Management']
}, {
  id: 'cyber-physical-security',
  name: 'Cyber-Physical Security Platform',
  description: 'Comprehensive security platform that protects both digital and physical assets using AI, IoT, and advanced threat detection.',
  category: 'Cybersecurity',
  price: '$6,999/month',
  features: ['AI threat detection', 'IoT security monitoring', 'Physical access control', 'Real-time alerts', 'Incident response', 'Compliance management'],
  benefits: ['Comprehensive protection', 'Real-time monitoring', 'Automated response', 'Compliance assurance', 'Cost reduction'],
  useCases: ['Critical infrastructure', 'Manufacturing facilities', 'Office buildings', 'Data centers', 'Government facilities'],
  targetAudience: ['Manufacturing companies', 'Government agencies', 'Financial institutions', 'Healthcare facilities', 'Educational institutions'],
  marketSize: '$31.8B by 2027',
  competitiveAdvantage: 'Only platform combining cyber and physical security',
  implementationTime: '3-5 weeks',
  roi: '600% within 8 months',
  link: 'https://ziontechgroup.com/services/cyber-physical-security',
  tags: ['Cybersecurity', 'IoT', 'Physical Security', 'AI', 'Compliance']
}, {
  id: 'sustainable-tech-platform',
  name: 'Sustainable Technology Platform',
  description: 'Platform for developing, deploying, and monitoring sustainable technologies including renewable energy, carbon capture, and green infrastructure.',
  category: 'Green Technology',
  price: '$5,499/month',
  features: ['Renewable energy management', 'Carbon footprint tracking', 'Sustainability analytics', 'Green infrastructure planning', 'Environmental monitoring', 'Compliance reporting'],
  benefits: ['Environmental impact reduction', 'Cost savings', 'Regulatory compliance', 'Brand enhancement', 'Stakeholder satisfaction'],
  useCases: ['Energy companies', 'Manufacturing', 'Construction', 'Transportation', 'Agriculture'],
  targetAudience: ['Energy companies', 'Manufacturing companies', 'Construction firms', 'Transportation companies', 'Agricultural businesses'],
  marketSize: '$18.7B by 2027',
  competitiveAdvantage: 'Most comprehensive sustainable technology platform',
  implementationTime: '4-6 weeks',
  roi: '500% within 9 months',
  link: 'https://ziontechgroup.com/services/sustainable-tech-platform',
  tags: ['Green Technology', 'Sustainability', 'Renewable Energy', 'Carbon Capture', 'Compliance']
}, {
  id: 'quantum-internet-protocol',
  name: 'Quantum Internet Protocol Platform',
  description: 'Next-generation internet protocol using quantum entanglement for ultra-secure, ultra-fast global communications.',
  category: 'Quantum Computing',
  price: '$7,999/month',
  features: ['Quantum entanglement networks', 'Instantaneous communication', 'Quantum encryption', 'Global quantum routing', 'Quantum memory networks', 'Hybrid classical-quantum protocols'],
  benefits: ['Instantaneous communication', 'Unhackable networks', 'Global coverage', 'Energy efficiency', 'Future-proof technology'],
  useCases: ['Government communications', 'Financial transactions', 'Healthcare data transfer', 'Military communications', 'Research collaboration'],
  targetAudience: ['Government agencies', 'Financial institutions', 'Healthcare organizations', 'Military organizations', 'Research institutions'],
  marketSize: '$11.5B by 2027',
  competitiveAdvantage: 'First quantum internet protocol platform',
  implementationTime: '6-8 weeks',
  roi: '800% within 12 months',
  link: 'https://ziontechgroup.com/services/quantum-internet-protocol',
  tags: ['Quantum Computing', 'Internet Protocol', 'Communications', 'Encryption', 'Global']
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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





var UltraFuturisticNavigation2027 = () => {
  var [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [activeDropdown, setActiveDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isClient) return;
    var handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);
  var navigation = [{
    name: 'AI & Machine Learning',
    href: '/services?category=AI%20%26%20Machine%20Learning',
    description: '200+ AI & ML Solutions',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Brain, {
      className: "w-5 h-5"
    }),
    color: 'from-purple-500 to-indigo-600',
    children: [{
      name: 'AI Consciousness Platform',
      href: '/services/ai-consciousness-platform',
      description: 'Advanced AI consciousness simulation',
      price: '$5,999/month',
      icon: '🧠'
    }, {
      name: 'Quantum Machine Learning',
      href: '/services/quantum-machine-learning',
      description: 'Quantum-powered ML platform',
      price: '$12,999/month',
      icon: '⚛️'
    }, {
      name: 'Autonomous AI Agents',
      href: '/services/autonomous-ai-agents',
      description: 'Self-operating AI systems',
      price: '$4,999/month',
      icon: '🤖'
    }, {
      name: 'AI Content Factory',
      href: '/services/ai-content-factory',
      description: 'Automated content creation',
      price: '$299/month',
      icon: '📝'
    }, {
      name: 'View All AI Services',
      href: '/services?category=AI%20%26%20Machine%20Learning',
      description: 'Explore 200+ AI solutions',
      icon: '🚀'
    }]
  }, {
    name: 'Quantum Technology',
    href: '/services?category=Quantum%20Computing',
    description: '50+ Quantum Solutions',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Atom, {
      className: "w-5 h-5"
    }),
    color: 'from-blue-500 to-cyan-600',
    children: [{
      name: 'Quantum Neural Interface',
      href: '/services/quantum-neural-interface',
      description: 'Quantum + Neural Networks',
      price: '$8,999/month',
      icon: '⚛️'
    }, {
      name: 'Quantum Financial Trading',
      href: '/services/quantum-financial-trading',
      description: 'Quantum-powered trading',
      price: '$9,999/month',
      icon: '💰'
    }, {
      name: 'Quantum Internet Protocol',
      href: '/services/quantum-internet-protocol',
      description: 'Quantum communication network',
      price: '$7,999/month',
      icon: '🌐'
    }, {
      name: 'Quantum Sensors Network',
      href: '/services/quantum-sensors-network',
      description: 'Ultra-precise quantum sensors',
      price: '$9,999/month',
      icon: '📡'
    }, {
      name: 'View All Quantum Services',
      href: '/services?category=Quantum%20Computing',
      description: 'Explore quantum solutions',
      icon: '🚀'
    }]
  }, {
    name: 'Emerging Tech',
    href: '/services?category=Emerging%20Technology',
    description: '100+ Future Solutions',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket, {
      className: "w-5 h-5"
    }),
    color: 'from-green-500 to-emerald-600',
    children: [{
      name: 'Holographic Metaverse',
      href: '/services/holographic-metaverse-platform',
      description: '3D immersive experiences',
      price: '$3,999/month',
      icon: '🎭'
    }, {
      name: 'Neuromorphic Computing',
      href: '/services/neuromorphic-computing',
      description: 'Brain-inspired computing',
      price: '$8,999/month',
      icon: '🧠'
    }, {
      name: 'Synthetic Biology',
      href: '/services/synthetic-biology-platform',
      description: 'AI-powered bioengineering',
      price: '$15,999/month',
      icon: '🧬'
    }, {
      name: 'Brain-Computer Interface',
      href: '/services/brain-computer-interface',
      description: 'Direct brain communication',
      price: '$19,999/month',
      icon: '💻'
    }, {
      name: 'View All Emerging Tech',
      href: '/services?category=Emerging%20Technology',
      description: 'Explore future solutions',
      icon: '🚀'
    }]
  }, {
    name: 'Business Solutions',
    href: '/services?category=Business%20Operations',
    description: '150+ Business Tools',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Target, {
      className: "w-5 h-5"
    }),
    color: 'from-orange-500 to-red-600',
    children: [{
      name: 'Smart Inventory Manager',
      href: '/services/smart-inventory-manager',
      description: 'AI-powered inventory optimization',
      price: '$199/month',
      icon: '📦'
    }, {
      name: 'Customer Success Automation',
      href: '/services/customer-success-automation',
      description: 'Automated customer retention',
      price: '$399/month',
      icon: '🎯'
    }, {
      name: 'AI Sales Coach',
      href: '/services/ai-sales-coach',
      description: 'Intelligent sales training',
      price: '$249/month',
      icon: '📞'
    }, {
      name: 'Smart HR Assistant',
      href: '/services/smart-hr-assistant',
      description: 'AI-powered HR automation',
      price: '$349/month',
      icon: '👥'
    }, {
      name: 'View All Business Solutions',
      href: '/services?category=Business%20Operations',
      description: 'Explore business tools',
      icon: '🚀'
    }]
  }, {
    name: 'Cybersecurity',
    href: '/services?category=Cybersecurity',
    description: '75+ Security Solutions',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Shield, {
      className: "w-5 h-5"
    }),
    color: 'from-red-500 to-pink-600',
    children: [{
      name: 'Cyber-Physical Security',
      href: '/services/cyber-physical-security',
      description: 'Digital + Physical protection',
      price: '$6,999/month',
      icon: '🛡️'
    }, {
      name: 'Quantum Internet Security',
      href: '/services/quantum-internet-security',
      description: 'Unhackable quantum security',
      price: '$7,999/month',
      icon: '🔐'
    }, {
      name: 'Zero Trust Architecture',
      href: '/services/zero-trust-network-architecture',
      description: 'Continuous verification',
      price: '$4,999/month',
      icon: '✅'
    }, {
      name: 'AI Threat Detection',
      href: '/services/ai-threat-detection',
      description: 'Intelligent security monitoring',
      price: '$3,999/month',
      icon: '👁️'
    }, {
      name: 'View All Security Solutions',
      href: '/services?category=Cybersecurity',
      description: 'Explore security tools',
      icon: '🚀'
    }]
  }, {
    name: 'Enterprise IT',
    href: '/services?category=Enterprise%20IT',
    description: '100+ Enterprise Solutions',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Building, {
      className: "w-5 h-5"
    }),
    color: 'from-indigo-500 to-purple-600',
    children: [{
      name: 'Cloud Platform',
      href: '/cloud-platform',
      description: 'Scalable cloud infrastructure',
      price: 'Custom',
      icon: '☁️'
    }, {
      name: 'Edge Computing Orchestration',
      href: '/services/edge-computing-orchestration',
      description: 'Distributed edge management',
      price: '$3,499/month',
      icon: '🌐'
    }, {
      name: 'AI Operations Center',
      href: '/services/enterprise-ai-operations-center',
      description: 'Centralized AI management',
      price: '$8,999/month',
      icon: '🏢'
    }, {
      name: 'Infrastructure Drift Detection',
      href: '/services/infrastructure-drift-detector',
      description: 'Automated infrastructure monitoring',
      price: '$2,999/month',
      icon: '🔍'
    }, {
      name: 'View All Enterprise Solutions',
      href: '/services?category=Enterprise%20IT',
      description: 'Explore enterprise tools',
      icon: '🚀'
    }]
  }];
  var contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
  var quickLinks = [{
    name: 'Pricing',
    href: '/pricing',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.CreditCard, {
      className: "w-4 h-4"
    })
  }, {
    name: 'Case Studies',
    href: '/case-studies',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.FileText, {
      className: "w-4 h-4"
    })
  }, {
    name: 'Support',
    href: '/support',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.MessageSquare, {
      className: "w-4 h-4"
    })
  }, {
    name: 'Contact',
    href: '/contact',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Mail, {
      className: "w-4 h-4"
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ".concat(isScrolled ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' : 'bg-transparent'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative container mx-auto px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center justify-between h-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          className: "flex items-center space-x-3 group relative z-10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            className: "w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30",
            whileHover: {
              rotate: 5,
              scale: 1.1
            },
            whileTap: {
              scale: 0.95
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Zap, {
              className: "w-7 h-7 text-white"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "hidden sm:block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300",
              children: "Zion Tech Group"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xs text-gray-400 group-hover:text-cyan-300 transition-colors",
              children: "Revolutionary Technology Solutions"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
          className: "hidden xl:flex items-center space-x-1",
          children: navigation.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "relative group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
              className: "flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20",
              onMouseEnter: () => setActiveDropdown(item.name),
              onMouseLeave: () => setActiveDropdown(null),
              whileHover: {
                y: -2
              },
              whileTap: {
                scale: 0.95
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-2 rounded-lg bg-gradient-to-br ".concat(item.color, " shadow-lg"),
                children: item.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "font-medium",
                children: item.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
                className: "w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
              children: activeDropdown === item.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                initial: {
                  opacity: 0,
                  y: 10,
                  scale: 0.95
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                },
                exit: {
                  opacity: 0,
                  y: 10,
                  scale: 0.95
                },
                transition: {
                  duration: 0.2
                },
                className: "absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "flex items-center space-x-3 mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-3 rounded-xl bg-gradient-to-br ".concat(item.color, " shadow-lg"),
                      children: item.icon
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                        className: "text-lg font-semibold text-white",
                        children: item.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                        className: "text-sm text-gray-400",
                        children: item.description
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "space-y-2",
                    children: item.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: child.href,
                      className: "flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        className: "text-2xl",
                        children: child.icon
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "flex-1",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                          className: "font-medium text-white group-hover:text-cyan-300 transition-colors",
                          children: child.name
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                          className: "text-sm text-gray-400",
                          children: child.description
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "text-right",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                          className: "text-sm font-medium text-cyan-400",
                          children: child.price
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronRight, {
                          className: "w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors"
                        })]
                      })]
                    }, child.name))
                  })]
                })
              })
            })]
          }, item.name))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center space-x-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "hidden lg:flex items-center space-x-4 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: "tel:".concat(contactInfo.mobile),
              className: "flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Phone, {
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: contactInfo.mobile
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: "mailto:".concat(contactInfo.email),
              className: "flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Mail, {
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: contactInfo.email
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            whileHover: {
              scale: 1.05
            },
            whileTap: {
              scale: 0.95
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/contact",
              className: "hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket, {
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                children: "Get Started"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: "xl:hidden p-2 text-gray-300 hover:text-white transition-colors",
            children: isMenuOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.X, {
              className: "w-6 h-6"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {
              className: "w-6 h-6"
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
      children: isMenuOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
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
        className: "xl:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "container mx-auto px-4 py-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "text-lg font-semibold text-white mb-4",
                children: "Services"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "space-y-3",
                children: navigation.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: item.href,
                    className: "flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-2 rounded-lg bg-gradient-to-br ".concat(item.color),
                      children: item.icon
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        className: "font-medium text-white",
                        children: item.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        className: "text-sm text-gray-400",
                        children: item.description
                      })]
                    })]
                  })
                }, item.name))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "space-y-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                  className: "text-lg font-semibold text-white mb-4",
                  children: "Quick Links"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "space-y-2",
                  children: quickLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: link.href,
                    className: "flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200",
                    children: [link.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-white",
                      children: link.name
                    })]
                  }, link.name))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                  className: "text-lg font-semibold text-white mb-4",
                  children: "Contact Info"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "space-y-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                    href: "tel:".concat(contactInfo.mobile),
                    className: "flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Phone, {
                      className: "w-4 h-4 text-cyan-400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-white",
                      children: contactInfo.mobile
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                    href: "mailto:".concat(contactInfo.email),
                    className: "flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Mail, {
                      className: "w-4 h-4 text-cyan-400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-white",
                      children: contactInfo.email
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "flex items-center space-x-3 p-3 rounded-xl",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.MapPin, {
                      className: "w-4 h-4 text-cyan-400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "text-white text-sm",
                      children: contactInfo.address
                    })]
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "mt-6 pt-6 border-t border-gray-700/50",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/contact",
              className: "inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket, {
                className: "w-4 h-4 mr-2"
              }), "Get Started Today"]
            })
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UltraFuturisticNavigation2027);

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
var practicalMicroSaas2027 = [{
  id: 'ai-content-factory',
  name: 'AI Content Factory',
  description: 'Automated content creation platform that generates high-quality articles, videos, and social media posts using advanced AI.',
  category: 'AI & Content Creation',
  price: '$299/month',
  features: ['Multi-format content generation', 'SEO optimization', 'Brand voice consistency', 'Content scheduling', 'Performance analytics', 'Plagiarism detection'],
  benefits: ['90% reduction in content creation time', 'Consistent brand messaging', 'Improved SEO rankings', 'Cost-effective content production', 'Scalable content strategy'],
  useCases: ['Blog content creation', 'Social media management', 'Marketing campaigns', 'Product descriptions', 'Email newsletters'],
  targetAudience: ['Marketing agencies', 'E-commerce businesses', 'Content creators', 'Small businesses', 'Startups'],
  marketSize: '$13.8B by 2027',
  competitiveAdvantage: 'Most advanced AI content generation with brand consistency',
  implementationTime: '1-2 weeks',
  roi: '400% within 3 months',
  link: 'https://ziontechgroup.com/services/ai-content-factory',
  tags: ['AI', 'Content Creation', 'Marketing', 'SEO', 'Automation']
}, {
  id: 'smart-inventory-manager',
  name: 'Smart Inventory Manager',
  description: 'Intelligent inventory management system with AI-powered demand forecasting, automated reordering, and real-time tracking.',
  category: 'Business Operations',
  price: '$199/month',
  features: ['AI demand forecasting', 'Automated reordering', 'Real-time tracking', 'Multi-location support', 'Supplier management', 'Cost optimization'],
  benefits: ['30% reduction in inventory costs', 'Elimination of stockouts', 'Improved cash flow', 'Better supplier relationships', 'Data-driven decisions'],
  useCases: ['Retail businesses', 'Manufacturing', 'E-commerce', 'Wholesale distribution', 'Restaurants'],
  targetAudience: ['Retail businesses', 'Manufacturing companies', 'E-commerce platforms', 'Distribution companies', 'Service businesses'],
  marketSize: '$4.2B by 2027',
  competitiveAdvantage: 'Only AI-powered inventory system with demand forecasting',
  implementationTime: '2-3 weeks',
  roi: '300% within 4 months',
  link: 'https://ziontechgroup.com/services/smart-inventory-manager',
  tags: ['Inventory Management', 'AI', 'Business Operations', 'Automation', 'Analytics']
}, {
  id: 'customer-success-automation',
  name: 'Customer Success Automation',
  description: 'Automated customer success platform that increases retention, reduces churn, and improves customer satisfaction scores.',
  category: 'Customer Success',
  price: '$399/month',
  features: ['Automated onboarding', 'Proactive support', 'Success metrics tracking', 'Churn prediction', 'Personalized engagement', 'Integration capabilities'],
  benefits: ['25% increase in customer retention', '40% reduction in support tickets', 'Improved customer satisfaction', 'Higher lifetime value', 'Scalable customer success'],
  useCases: ['SaaS companies', 'Subscription businesses', 'E-commerce platforms', 'Service providers', 'B2B companies'],
  targetAudience: ['SaaS companies', 'Subscription businesses', 'E-commerce platforms', 'Service providers', 'B2B companies'],
  marketSize: '$8.9B by 2027',
  competitiveAdvantage: 'Most comprehensive customer success automation platform',
  implementationTime: '2-3 weeks',
  roi: '500% within 6 months',
  link: 'https://ziontechgroup.com/services/customer-success-automation',
  tags: ['Customer Success', 'Automation', 'Retention', 'Support', 'Analytics']
}, {
  id: 'ai-sales-coach',
  name: 'AI Sales Coach',
  description: 'Intelligent sales coaching platform that analyzes calls, provides real-time feedback, and improves sales performance.',
  category: 'Sales & Marketing',
  price: '$249/month',
  features: ['Call analysis and scoring', 'Real-time coaching', 'Performance tracking', 'Best practices library', 'Team collaboration', 'ROI measurement'],
  benefits: ['35% increase in sales conversion', 'Improved sales skills', 'Better team performance', 'Data-driven coaching', 'Reduced training time'],
  useCases: ['Sales teams', 'Call centers', 'Customer service', 'Business development', 'Account management'],
  targetAudience: ['Sales organizations', 'Call centers', 'Customer service teams', 'Business development teams', 'Account management teams'],
  marketSize: '$6.7B by 2027',
  competitiveAdvantage: 'Only AI-powered sales coaching with real-time feedback',
  implementationTime: '1-2 weeks',
  roi: '400% within 4 months',
  link: 'https://ziontechgroup.com/services/ai-sales-coach',
  tags: ['Sales', 'AI', 'Coaching', 'Performance', 'Analytics']
}, {
  id: 'smart-expense-tracker',
  name: 'Smart Expense Tracker',
  description: 'Intelligent expense management system with receipt scanning, automated categorization, and expense policy compliance.',
  category: 'Financial Management',
  price: '$99/month',
  features: ['Receipt scanning', 'Automated categorization', 'Policy compliance', 'Expense approval workflows', 'Real-time reporting', 'Mobile app'],
  benefits: ['80% reduction in expense processing time', 'Improved compliance', 'Better cost control', 'Real-time visibility', 'Mobile accessibility'],
  useCases: ['Business expense management', 'Travel expense tracking', 'Project cost tracking', 'Department budgeting', 'Compliance reporting'],
  targetAudience: ['Small businesses', 'Startups', 'Freelancers', 'Consulting firms', 'Service businesses'],
  marketSize: '$3.8B by 2027',
  competitiveAdvantage: 'Most intelligent expense tracking with AI categorization',
  implementationTime: '1 week',
  roi: '300% within 2 months',
  link: 'https://ziontechgroup.com/services/smart-expense-tracker',
  tags: ['Expense Management', 'AI', 'Financial', 'Compliance', 'Mobile']
}, {
  id: 'ai-project-manager',
  name: 'AI Project Manager',
  description: 'Intelligent project management platform that automates task allocation, predicts delays, and optimizes resource utilization.',
  category: 'Project Management',
  price: '$179/month',
  features: ['AI task allocation', 'Delay prediction', 'Resource optimization', 'Progress tracking', 'Team collaboration', 'Performance analytics'],
  benefits: ['20% faster project completion', 'Better resource utilization', 'Reduced project delays', 'Improved team productivity', 'Data-driven decisions'],
  useCases: ['Software development', 'Marketing campaigns', 'Construction projects', 'Event planning', 'Product launches'],
  targetAudience: ['Project managers', 'Development teams', 'Marketing teams', 'Construction companies', 'Event planners'],
  marketSize: '$5.9B by 2027',
  competitiveAdvantage: 'Only AI-powered project management with predictive analytics',
  implementationTime: '2-3 weeks',
  roi: '350% within 5 months',
  link: 'https://ziontechgroup.com/services/ai-project-manager',
  tags: ['Project Management', 'AI', 'Automation', 'Analytics', 'Collaboration']
}, {
  id: 'smart-hr-assistant',
  name: 'Smart HR Assistant',
  description: 'AI-powered HR platform that automates recruitment, employee onboarding, and performance management processes.',
  category: 'Human Resources',
  price: '$349/month',
  features: ['AI recruitment screening', 'Automated onboarding', 'Performance tracking', 'Employee engagement', 'Compliance management', 'Analytics dashboard'],
  benefits: ['50% faster hiring process', 'Improved candidate quality', 'Better employee retention', 'Reduced HR workload', 'Compliance assurance'],
  useCases: ['Recruitment and hiring', 'Employee onboarding', 'Performance management', 'Employee engagement', 'HR compliance'],
  targetAudience: ['HR departments', 'Recruitment agencies', 'Small businesses', 'Startups', 'Growing companies'],
  marketSize: '$7.2B by 2027',
  competitiveAdvantage: 'Most comprehensive AI-powered HR automation platform',
  implementationTime: '2-3 weeks',
  roi: '450% within 6 months',
  link: 'https://ziontechgroup.com/services/smart-hr-assistant',
  tags: ['Human Resources', 'AI', 'Recruitment', 'Automation', 'Compliance']
}, {
  id: 'ai-legal-assistant',
  name: 'AI Legal Assistant',
  description: 'Intelligent legal document analysis, contract review, and compliance monitoring platform for businesses and legal professionals.',
  category: 'Legal Technology',
  price: '$499/month',
  features: ['Document analysis', 'Contract review', 'Compliance monitoring', 'Legal research', 'Risk assessment', 'Document generation'],
  benefits: ['70% faster document review', 'Improved accuracy', 'Cost reduction', 'Better compliance', 'Risk mitigation'],
  useCases: ['Contract review', 'Legal document analysis', 'Compliance monitoring', 'Legal research', 'Risk assessment'],
  targetAudience: ['Law firms', 'Corporate legal departments', 'Small businesses', 'Startups', 'Compliance officers'],
  marketSize: '$9.8B by 2027',
  competitiveAdvantage: 'Most advanced AI legal assistant with comprehensive analysis',
  implementationTime: '2-3 weeks',
  roi: '600% within 8 months',
  link: 'https://ziontechgroup.com/services/ai-legal-assistant',
  tags: ['Legal Technology', 'AI', 'Compliance', 'Document Analysis', 'Risk Management']
}, {
  id: 'smart-supply-chain',
  name: 'Smart Supply Chain Manager',
  description: 'AI-powered supply chain optimization platform that improves efficiency, reduces costs, and enhances visibility across the entire supply chain.',
  category: 'Supply Chain Management',
  price: '$599/month',
  features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Supplier management', 'Risk assessment', 'Real-time tracking'],
  benefits: ['25% reduction in supply chain costs', 'Improved efficiency', 'Better risk management', 'Enhanced visibility', 'Optimized operations'],
  useCases: ['Manufacturing', 'Retail', 'Logistics', 'Distribution', 'E-commerce'],
  targetAudience: ['Manufacturing companies', 'Retail businesses', 'Logistics companies', 'Distribution companies', 'E-commerce platforms'],
  marketSize: '$11.3B by 2027',
  competitiveAdvantage: 'Most comprehensive AI-powered supply chain optimization',
  implementationTime: '3-4 weeks',
  roi: '500% within 7 months',
  link: 'https://ziontechgroup.com/services/smart-supply-chain',
  tags: ['Supply Chain', 'AI', 'Optimization', 'Logistics', 'Analytics']
}, {
  id: 'ai-quality-control',
  name: 'AI Quality Control System',
  description: 'Intelligent quality control platform that uses computer vision and AI to detect defects, ensure consistency, and improve product quality.',
  category: 'Quality Assurance',
  price: '$449/month',
  features: ['Computer vision inspection', 'Defect detection', 'Quality analytics', 'Process optimization', 'Real-time monitoring', 'Predictive maintenance'],
  benefits: ['90% reduction in defect rates', 'Improved product quality', 'Cost reduction', 'Better compliance', 'Process optimization'],
  useCases: ['Manufacturing', 'Food processing', 'Pharmaceuticals', 'Electronics', 'Automotive'],
  targetAudience: ['Manufacturing companies', 'Food processing companies', 'Pharmaceutical companies', 'Electronics manufacturers', 'Automotive companies'],
  marketSize: '$6.4B by 2027',
  competitiveAdvantage: 'Most advanced AI quality control with computer vision',
  implementationTime: '3-4 weeks',
  roi: '400% within 6 months',
  link: 'https://ziontechgroup.com/services/ai-quality-control',
  tags: ['Quality Control', 'AI', 'Computer Vision', 'Manufacturing', 'Automation']
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