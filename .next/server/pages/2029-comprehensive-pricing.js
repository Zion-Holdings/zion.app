"use strict";
(() => {
var exports = {};
exports.id = 884951;
exports.ids = [884951,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 412283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FuturisticAnimatedBackground2029)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function FuturisticAnimatedBackground2029(_ref) {
  var {
    className = ''
  } = _ref;
  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
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

    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.color = "hsl(".concat(Math.random() * 60 + 200, ", 70%, 60%)");
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Add some gravity effect
        this.vy += 0.01;
      }
      draw() {
        if (ctx) {
          var alpha = this.life / this.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();
        }
      }
      isDead() {
        return this.life <= 0;
      }
    }

    // Grid system
    class Grid {
      constructor() {
        this.spacing = 60;
        this.offset = 0;
      }
      update() {
        this.offset += 0.5;
      }
      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
          ctx.lineWidth = 1;

          // Vertical lines
          for (var x = this.offset % this.spacing; x < canvas.width; x += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }

          // Horizontal lines
          for (var y = this.offset % this.spacing; y < canvas.height; y += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      }
    }

    // Wave system
    class Wave {
      constructor() {
        this.amplitude = 50;
        this.frequency = 0.02;
        this.speed = 0.02;
        this.offset = 0;
      }
      update() {
        this.offset += this.speed;
      }
      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(150, 100, 255, 0.3)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (var x = 0; x < canvas.width; x++) {
            var y = Math.sin(x * this.frequency + this.offset) * this.amplitude + canvas.height / 2;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }
    }

    // Create instances
    var particles = [];
    var grid = new Grid();
    var waves = [];

    // Initialize particles
    for (var i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Initialize waves
    for (var _i = 0; _i < 3; _i++) {
      var wave = new Wave();
      wave.amplitude = 30 + _i * 20;
      wave.frequency = 0.01 + _i * 0.005;
      wave.speed = 0.01 + _i * 0.005;
      waves.push(wave);
    }

    // Animation loop
    var animationId;
    var animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw grid
      grid.update();
      grid.draw();

      // Update and draw waves
      waves.forEach(wave => {
        wave.update();
        wave.draw();
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.isDead()) {
          particles[index] = new Particle();
        }
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 1;
      for (var _i2 = 0; _i2 < particles.length; _i2++) {
        for (var j = _i2 + 1; j < particles.length; j++) {
          var dx = particles[_i2].x - particles[j].x;
          var dy = particles[_i2].y - particles[j].y;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            var alpha = 1 - distance / 100;
            ctx.strokeStyle = "rgba(100, 200, 255, ".concat(alpha * 0.1, ")");
            ctx.beginPath();
            ctx.moveTo(particles[_i2].x, particles[_i2].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add floating geometric shapes
      var time = Date.now() * 0.001;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(time * 0.1);

      // Draw rotating hexagon
      ctx.strokeStyle = 'rgba(255, 100, 200, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (var _i3 = 0; _i3 < 6; _i3++) {
        var angle = _i3 * Math.PI / 3;
        var x = Math.cos(angle) * 150;
        var y = Math.sin(angle) * 150;
        if (_i3 === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Draw inner triangle
      ctx.strokeStyle = 'rgba(100, 255, 200, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (var _i4 = 0; _i4 < 3; _i4++) {
        var _angle = _i4 * Math.PI * 2 / 3 + time * 0.5;
        var _x = Math.cos(_angle) * 100;
        var _y = Math.sin(_angle) * 100;
        if (_i4 === 0) {
          ctx.moveTo(_x, _y);
        } else {
          ctx.lineTo(_x, _y);
        }
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "fixed inset-0 pointer-events-none ".concat(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("canvas", {
      ref: canvasRef,
      className: "w-full h-full",
      style: {
        background: 'radial-gradient(ellipse at center, rgba(20, 20, 40, 0.8) 0%, rgba(0, 0, 0, 1) 100%)'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-transparent"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute inset-0 bg-gradient-to-tl from-transparent via-blue-900/10 to-transparent"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse",
      style: {
        animationDelay: '1s'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse",
      style: {
        animationDelay: '2s'
      }
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

/***/ 716049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComprehensivePricing2029)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7887);
/* harmony import */ var _components_layout_UltraFuturisticNavigation2029__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(446620);
/* harmony import */ var _components_layout_UltraFuturisticNavigation2029__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_layout_UltraFuturisticNavigation2029__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_UltraFuturisticFooter2029__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(637213);
/* harmony import */ var _components_ui_FuturisticAnimatedBackground2029__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(412283);
/* harmony import */ var _data_2029_ai_autonomous_ecosystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(192594);
/* harmony import */ var _data_2029_emerging_tech_breakthroughs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31397);
/* harmony import */ var _data_2029_practical_business_solutions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(399713);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












var contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
function ComprehensivePricing2029() {
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var [billingCycle, setBillingCycle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('monthly');
  var allServices = [..._data_2029_ai_autonomous_ecosystem__WEBPACK_IMPORTED_MODULE_6__.aiAutonomousEcosystemServices2029, ..._data_2029_emerging_tech_breakthroughs__WEBPACK_IMPORTED_MODULE_7__.emergingTechBreakthroughServices2029, ..._data_2029_practical_business_solutions__WEBPACK_IMPORTED_MODULE_8__.practicalBusinessSolutionServices2029];
  var categories = [{
    id: 'all',
    name: 'All Services',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_10__.Briefcase,
    count: allServices.length
  }, {
    id: 'ai-autonomous',
    name: 'AI Autonomous',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_10__.Brain,
    count: _data_2029_ai_autonomous_ecosystem__WEBPACK_IMPORTED_MODULE_6__.aiAutonomousEcosystemServices2029.length
  }, {
    id: 'emerging-tech',
    name: 'Emerging Tech',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_10__.Atom,
    count: _data_2029_emerging_tech_breakthroughs__WEBPACK_IMPORTED_MODULE_7__.emergingTechBreakthroughServices2029.length
  }, {
    id: 'business-solutions',
    name: 'Business Solutions',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_10__.Target,
    count: _data_2029_practical_business_solutions__WEBPACK_IMPORTED_MODULE_8__.practicalBusinessSolutionServices2029.length
  }];
  var filteredServices = selectedCategory === 'all' ? allServices : allServices.filter(service => {
    if (selectedCategory === 'ai-autonomous') {
      return service.category.some(cat => cat.includes('AI') && cat.includes('Autonomous'));
    } else if (selectedCategory === 'emerging-tech') {
      return service.category.some(cat => cat.includes('Quantum') || cat.includes('Biotech') || cat.includes('Space'));
    } else if (selectedCategory === 'business-solutions') {
      return service.category.some(cat => cat.includes('Business') || cat.includes('Marketing') || cat.includes('Education'));
    }
    return true;
  });
  var getPrice = price => {
    var numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    return billingCycle === 'monthly' ? numericPrice : Math.round(numericPrice * 0.8);
  };
  var getBillingText = price => {
    var numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (billingCycle === 'monthly') {
      return "$".concat(numericPrice.toLocaleString(), "/month");
    } else {
      return "$".concat(Math.round(numericPrice * 0.8).toLocaleString(), "/month (billed annually)");
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "min-h-screen bg-black text-white relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_FuturisticAnimatedBackground2029__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("title", {
        children: "2029 Comprehensive Pricing - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "description",
        content: "Explore our comprehensive 2029 pricing for AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transparent pricing with flexible billing options."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "keywords",
        content: "2029 pricing, AI services pricing, quantum technology pricing, business solutions pricing, Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("link", {
        rel: "canonical",
        href: "https://ziontechgroup.com/2029-comprehensive-pricing"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((_components_layout_UltraFuturisticNavigation2029__WEBPACK_IMPORTED_MODULE_3___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "relative overflow-hidden py-32",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "relative z-10 container mx-auto px-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
            className: "text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8",
            children: "2029 Comprehensive Pricing"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto",
            children: "Transparent pricing for our revolutionary 2029 services. Choose the perfect plan for your business transformation journey."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex items-center justify-center gap-4 mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-gray-400",
              children: "Monthly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              onClick: () => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly'),
              className: "relative w-16 h-8 bg-gray-700 rounded-full transition-colors duration-300 ".concat(billingCycle === 'annual' ? 'bg-purple-600' : ''),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ".concat(billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-gray-400",
              children: "Annual (20% off)"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "py-12 bg-gradient-to-b from-black to-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "container mx-auto px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "flex flex-wrap justify-center gap-4",
          children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.button, {
            onClick: () => setSelectedCategory(category.id),
            className: "flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ".concat(selectedCategory === category.id ? 'border-purple-500 bg-purple-500/20 text-purple-300' : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'),
            whileHover: {
              scale: 1.05
            },
            whileTap: {
              scale: 0.95
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(category.icon, {
              className: "w-5 h-5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: category.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "px-2 py-1 bg-gray-700 rounded-full text-xs",
              children: category.count
            })]
          }, category.id))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "py-20 bg-black",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "container mx-auto px-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
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
            className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6",
            children: "Service Pricing"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            children: [filteredServices.length, " cutting-edge services available to transform your business. Each service includes comprehensive features, support, and implementation."]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "grid lg:grid-cols-2 xl:grid-cols-3 gap-8",
          children: filteredServices.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
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
              delay: index * 0.1
            },
            viewport: {
              once: true
            },
            className: "relative group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity duration-500"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-500 h-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "text-center mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Brain, {
                    className: "w-8 h-8 text-white"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: service.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                  className: "text-gray-400 text-sm mb-4",
                  children: service.description
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "text-center mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "text-4xl font-bold text-purple-400 mb-2",
                  children: getBillingText(service.price)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "text-sm text-gray-400",
                  children: billingCycle === 'annual' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                    className: "text-green-400",
                    children: "Save 20% with annual billing"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "flex flex-wrap gap-2 mb-6 justify-center",
                children: service.category.slice(0, 3).map((cat, catIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                  className: "px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600",
                  children: cat
                }, catIndex))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
                  className: "text-lg font-semibold text-white mb-3",
                  children: "Key Features"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", {
                  className: "space-y-2",
                  children: service.features.slice(0, 4).map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                    className: "flex items-center gap-2 text-gray-300 text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.CheckCircle, {
                      className: "w-4 h-4 text-green-400 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      children: feature
                    })]
                  }, featureIndex))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
                  className: "text-lg font-semibold text-white mb-3",
                  children: "Key Benefits"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", {
                  className: "space-y-2",
                  children: service.benefits.slice(0, 2).map((benefit, benefitIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                    className: "flex items-center gap-2 text-gray-300 text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Star, {
                      className: "w-4 h-4 text-yellow-400 flex-shrink-0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      children: benefit
                    })]
                  }, benefitIndex))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "grid grid-cols-2 gap-4 mb-6 text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "text-gray-400 text-xs mb-1",
                    children: "Market Size"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "text-sm font-semibold text-blue-400",
                    children: service.marketSize
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "text-gray-400 text-xs mb-1",
                    children: "ROI"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "text-sm font-semibold text-green-400",
                    children: service.roi
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "flex gap-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/services/".concat(service.id),
                  className: "flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm",
                  children: "Learn More"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/contact",
                  className: "flex-1 inline-flex items-center justify-center px-4 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm",
                  children: "Get Started"
                })]
              })]
            })]
          }, service.id))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "container mx-auto px-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
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
            className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6",
            children: "Enterprise Solutions"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-xl text-gray-300 mb-12 max-w-3xl mx-auto",
            children: "Need a custom solution or enterprise package? We offer tailored solutions for large organizations with specific requirements."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "grid md:grid-cols-3 gap-8 mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Users, {
                  className: "w-8 h-8 text-white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Custom Development"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-300 mb-6",
                children: "Tailored solutions built specifically for your business needs and requirements."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-2xl font-bold text-purple-400 mb-4",
                children: "Custom Pricing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/contact",
                className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300",
                children: "Contact Sales"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Shield, {
                  className: "w-8 h-8 text-white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Enterprise Security"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-300 mb-6",
                children: "Advanced security features and compliance for enterprise environments."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-2xl font-bold text-purple-400 mb-4",
                children: "Custom Pricing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/contact",
                className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300",
                children: "Contact Sales"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Globe, {
                  className: "w-8 h-8 text-white"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Global Deployment"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-gray-300 mb-6",
                children: "Multi-region deployment and global support for international organizations."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-2xl font-bold text-purple-400 mb-4",
                children: "Custom Pricing"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/contact",
                className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300",
                children: "Contact Sales"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section", {
      className: "py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "container mx-auto px-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
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
            className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6",
            children: "Ready to Get Started?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-xl text-gray-300 mb-12 max-w-3xl mx-auto",
            children: "Contact our team to discuss your specific needs and get a personalized quote for our revolutionary 2029 services."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "grid md:grid-cols-3 gap-8 mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex items-center justify-center gap-4 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Phone, {
                className: "w-6 h-6 text-purple-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                children: contactInfo.mobile
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex items-center justify-center gap-4 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.Mail, {
                className: "w-6 h-6 text-blue-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                children: contactInfo.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex items-center justify-center gap-4 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.MapPin, {
                className: "w-6 h-6 text-green-400"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                children: contactInfo.address
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: 0.95
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/contact",
                className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg",
                children: ["Contact Us Now", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__.ArrowRight, {
                  className: "ml-2 h-5 w-5"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: 0.95
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/2029-innovative-services-showcase",
                className: "inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg",
                children: "View All Services"
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_layout_UltraFuturisticFooter2029__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
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

/***/ 947931:
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
/* harmony import */ var private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(716049);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/2029-comprehensive-pricing",
        pathname: "/2029-comprehensive-pricing",
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
    userland: private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/2029-comprehensive-pricing",
    config,
    userland: private_next_pages_2029_comprehensive_pricing_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(947931)));
module.exports = __webpack_exports__;

})();