"use strict";
(() => {
var exports = {};
exports.id = 829395;
exports.ids = [829395,890636];
exports.modules = {

/***/ 79742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainFrontIndex)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function MainFrontIndex() {
  var {
    scrollYProgress
  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();
  var progressX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.2
  });
  var [showToTop, setShowToTop] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var onScroll = () => setShowToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "relative min-h-screen overflow-hidden bg-slate-950 text-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
        children: "Zion \u2014 Front Systems Hub | Autonomous Cloud Automations"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "description",
        content: "Futuristic front experience showcasing Zion's autonomous cloud automations \u2014 features, capabilities, and benefits."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:title",
        content: "Zion \u2014 Front Systems Hub"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:description",
        content: "Explore the features, capabilities, and benefits behind our autonomous cloud automations."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:image",
        content: "/og-image.png"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
      style: {
        scaleX: progressX
      },
      className: "fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 -z-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 opacity-[0.06] hex-grid"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "twinkle-field absolute inset-0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 bg-aurora opacity-[0.18]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "absolute inset-0 flex items-center justify-center opacity-30",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "absolute h-[52rem] w-[52rem] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_infinite]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "absolute h-[36rem] w-[36rem] rounded-full border border-fuchsia-400/10 animate-[spin_80s_linear_infinite] [animation-direction:reverse]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "absolute h-[24rem] w-[24rem] rounded-full border border-violet-400/10 animate-[spin_100s_linear_infinite]"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 mix-blend-soft-light opacity-[0.07] scanlines"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 beams-layer beams-45"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 beams-layer beams--45"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute inset-0 beams opacity-[0.06]"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
      className: "sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
        className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-2xl font-bold tracking-wide",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon",
            children: "Zion"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "hidden items-center gap-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Home"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#command-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Command"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#features",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Features"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#feature-map",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Map"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#suites",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Suites"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#capabilities",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Capabilities"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#use-cases",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Use Cases"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#pillars",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Pillars"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#benefits",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Benefits"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#templates",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Templates"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#demos",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Demos"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#highlights",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Highlights"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#cases",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Cases"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#reports",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Reports"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#roadmap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Docs"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/automation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              className: "text-white/80 hover:text-white",
              children: "Automations"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          "aria-label": "Open menu",
          onClick: () => setMobileOpen(true),
          className: "md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80",
          children: "Menu"
        })]
      }), mobileOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        className: "fixed inset-0 z-40 bg-slate-950/80 backdrop-blur",
        onClick: () => setMobileOpen(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
          initial: {
            y: -20,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          transition: {
            duration: 0.2
          },
          className: "mx-auto mt-20 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl",
          onClick: e => e.stopPropagation(),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mb-4 flex items-center justify-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Navigate"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              "aria-label": "Close menu",
              onClick: () => setMobileOpen(false),
              className: "rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs",
              children: "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-2 gap-3 text-sm",
            children: [['Home', '/'], ['Command', '#command-center'], ['Features', '#features'], ['Map', '#feature-map'], ['Suites', '#suites'], ['Capabilities', '#capabilities'], ['Use Cases', '#use-cases'], ['Pillars', '#pillars'], ['Benefits', '#benefits'], ['Templates', '#templates'], ['Demos', '#demos'], ['Highlights', '#highlights'], ['Cases', '#cases'], ['Reports', '#reports'], ['Docs', '#roadmap'], ['Automations', '/automation']].map(_ref => {
              var [label, href] = _ref;
              return href.startsWith('#') ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: href,
                onClick: () => setMobileOpen(false),
                className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10",
                children: label
              }, label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: href,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  onClick: () => setMobileOpen(false),
                  className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10",
                  children: label
                })
              }, label);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "mt-4 flex justify-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/automation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                onClick: () => setMobileOpen(false),
                className: "rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold",
                children: "Launch Hub"
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      role: "main",
      className: "relative z-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
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
        className: "mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
            }), "Front systems hub \u2014 tailored view of our autonomous capabilities"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
            className: "mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "gradient-text animate-shimmer bg-[length:200%_100%]",
              children: "Futuristic Front Experience"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-xs text-white/60",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "#feature-map",
              className: "hover:text-white",
              children: "Feature Map"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              "aria-hidden": true,
              children: "\u2022"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "#capabilities",
              className: "hover:text-white",
              children: "Capabilities"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              "aria-hidden": true,
              children: "\u2022"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "#benefits",
              className: "hover:text-white",
              children: "Benefits"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              "aria-hidden": true,
              children: "\u2022"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "#reports",
              className: "hover:text-white",
              children: "Integrations"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "mx-auto mt-5 max-w-3xl text-lg text-white/80",
            children: "Explore the features, capabilities, and benefits that power Zion's autonomous cloud automations \u2014 optimized for your front\u2011of\u2011house experience."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mt-8 flex flex-wrap justify-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/automation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow",
                children: "Explore Automations"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/automation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10",
                children: "View Cloud Automations"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mx-auto mt-6 max-w-5xl text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mb-2 text-xs uppercase tracking-wide text-white/60",
              children: "Cloud Automations (live)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "/.netlify/functions/agent-swarm-orchestrator",
                children: "Agent Swarm Orchestrator \u2197"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/ultra-rapid-sync.yml",
                target: "_blank",
                rel: "noopener",
                children: "Ultra Rapid Sync \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/automation-advertiser.yml",
                target: "_blank",
                rel: "noopener",
                children: "Automation Advertiser \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/knowledge-graph-radar.yml",
                target: "_blank",
                rel: "noopener",
                children: "Knowledge Graph & Radar \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/site-health-guardian.yml",
                target: "_blank",
                rel: "noopener",
                children: "Site Health Guardian \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "/.netlify/functions/autonomous-meta-orchestrator",
                children: "Meta Orchestrator \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-error-guardian.yml",
                target: "_blank",
                rel: "noopener",
                children: "Autonomous Error Guardian \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/a11y-contrast-guardian.yml",
                target: "_blank",
                rel: "noopener",
                children: "A11y & Contrast Guardian \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/marketing-pulse.yml",
                target: "_blank",
                rel: "noopener",
                children: "Marketing Pulse \u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10",
                href: "https://github.com/Zion-Holdings/zion.app/actions/workflows/repo-radar-knowledge.yml",
                target: "_blank",
                rel: "noopener",
                children: "Repo Radar & Knowledge \u2192"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4",
            children: [['24/7', 'Autonomous'], ['Main', 'Direct Sync'], ['0 Ops', 'Cloud‑Native'], ['Safety', 'Guardrails']].map(_ref2 => {
              var [k, v] = _ref2;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "text-lg font-bold text-white",
                  children: k
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "text-xs text-white/70",
                  children: v
                })]
              }, k);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "relative mx-auto mt-8 max-w-5xl overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "marquee",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "marquee__track",
                children: ['Autonomous Agents', 'Repo Sync to Main', 'Zero‑Ops Cloud', 'Safety Guardrails', 'A11y + Performance', 'Observability', 'SEO Automation', 'Design Evolution'].flatMap(label => [label, label]).map((label, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "h-1.5 w-1.5 rounded-full bg-cyan-400"
                  }), " ", label]
                }, "".concat(label, "-").concat(idx)))
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2",
            children: [['Automation Hub', '/automation'], ['SEO Audit', '/reports/seo'], ['AI Trends', '/reports/ai-trends'], ['Newsroom', '/newsroom'], ['Site Health', '/site-health']].map(_ref3 => {
              var [label, href] = _ref3;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: href,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  className: "rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10",
                  children: label
                })
              }, label);
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "showcase",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Showcase: Features, Capabilities, Benefits"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#features",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: "Explore Features"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: "Self\u2011improving systems, composable factories, observability and more."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#capabilities",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: "Browse Capabilities"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: "Design evolution, SEO, a11y, performance, refactors, and policy."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#benefits",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: "See Benefits"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: "Momentum, quality, safety, and measurable outcomes."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#feature-map",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: "Feature Map"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: "A quick overview of what you can explore right now."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#guardrails",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: "Guardrails"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: "Defense\u2011in\u2011depth checks and safety before shipping."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/automation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: "Automation Hub"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: "Factories, agents, and live workflows in one place."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/automation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Automation Hub"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Live agents & workflows"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/site-health",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Site Health"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "A11y, performance, links"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/seo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "AI SEO Auditor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "On\u2011site improvements"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/ai-trends",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "AI Trends Radar"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Signals powering strategy"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/newsroom",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Newsroom"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Product evolution"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/reports/seo",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Docs & Guides"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Technical notes"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/newsroom",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "AI Changelog"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Summarized updates"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("aside", {
        className: "fixed left-4 top-1/2 z-30 -translate-y-1/2 block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
          "aria-label": "Quick section navigation",
          className: "space-y-2",
          children: [['#command-center', 'Command'], ['#feature-map', 'Map'], ['#engines', 'Engines'], ['#suites', 'Suites'], ['#capabilities', 'Capabilities'], ['#use-cases', 'Use Cases'], ['#pillars', 'Pillars'], ['#benefits', 'Benefits'], ['#templates', 'Templates'], ['#demos', 'Demos'], ['#highlights', 'Highlights'], ['#cases', 'Cases'], ['#reports', 'Reports'], ['#guardrails', 'Guardrails'], ['#roadmap', 'Docs']].map(_ref4 => {
            var [href, label] = _ref4;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: href,
              className: "block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white",
              children: label
            }, href);
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "engines",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Autonomous Engines (Beyond GitHub Actions)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/front-enhancer",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Netlify Scheduled Functions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Cron-like cloud jobs that run every 20 minutes to enhance the front experience."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "View logs via Netlify \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "https://github.com/Zion-Holdings/zion.app/tree/main/automation",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Local Orchestrators"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Node-based orchestrators that can run on any scheduler or platform."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Browse orchestration scripts \u2197"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/automation",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Autonomous Cloud Orchestrator"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "End-to-end agents launching factories and syncing safe diffs to main."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Open Automation Hub \u2192"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/internal-link-graph-runner",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Internal Link Graph"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Live graph of internal navigation across pages."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Run now \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/robots-enhancer-runner",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Robots.txt Enhancer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Ensures sitemap and sensible defaults for crawling."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Run now \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/alt-text-indexer-runner",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Alt Text Indexer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Humanized alt suggestions for images across the site."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Run now \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/content-registry-runner",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Content Registry Builder"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Continuously indexes pages and reports for discovery."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Run now \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/autonomous-meta-orchestrator",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Autonomous Meta Orchestrator"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Optimizes metadata, changelogs, and docs; commits results every 3m."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Run now \u2197"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/rapid-sync",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Rapid Sync (2m)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "High\u2011frequency repo sync to push autonomous changes quickly."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Run now \u2197"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/content-freshness-runner",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Content Freshness Audit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Scores pages and docs by last update; commits freshness reports."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Open \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/docs-link-audit-runner",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Docs Link Audit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Scans docs for broken relative links and commits a CSV report."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Open \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/image-dimension-audit-runner",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Image Dimension Audit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Detects missing width/height in images and logs a report."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Open \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/autonomous-master-orchestrator",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Autonomous Master Orchestrator"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Runs every minute: triggers all cloud functions and syncs to main."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Open \u2197"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "innovations",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Autonomous Innovations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "New intelligent cloud automations running 24/7 \u2014 no human intervention required."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/autonomous-content-curator",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity, {
                className: "h-5 w-5 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: "Autonomous Content Curator"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Curates and promotes highlights on front pages; syncs to main."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2192"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/revenue-ideas-lab",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.LineChart, {
                className: "h-5 w-5 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: "Revenue Ideas Lab"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Monetization experiments with safe, automatic repository sync."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2192"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/autonomous-invention-orchestrator",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
                className: "h-5 w-5 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: "Autonomous Invention Orchestrator"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Continuously invents and applies front enhancements."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2192"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        id: "cloud-runners",
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Autonomous Cloud Runners"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            title: 'Automation Guardian (10m)',
            desc: 'Monitors and auto-heals automations; commits fixes safely.',
            href: '/.netlify/functions/automation-guardian-runner'
          }, {
            title: 'Components Docs Runner (30m)',
            desc: 'Regenerates components/docs indexes and README, then pushes.',
            href: '/.netlify/functions/components-docs-runner'
          }].map(tool => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: tool.href,
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold",
              children: tool.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: tool.desc
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, tool.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        id: "command-center",
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Command Center"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            title: 'Automation Hub',
            desc: 'Runbooks, factories, and live autonomous agents.',
            href: '/automation'
          }, {
            title: 'Site Health',
            desc: 'A11y, performance, and link‑health dashboards.',
            href: '/site-health'
          }, {
            title: 'SEO Audit',
            desc: 'Continuous on‑site SEO scans with proposed diffs.',
            href: '/reports/seo'
          }, {
            title: 'AI Trends',
            desc: 'Intelligence signals from the AI/cloud ecosystem.',
            href: '/reports/ai-trends'
          }, {
            title: 'Newsroom',
            desc: 'Curated updates and product evolution highlights.',
            href: '/newsroom'
          }, {
            title: 'Cloud Automations',
            desc: 'Netlify scheduled functions powering jobs 24/7.',
            href: '/automation'
          }, {
            title: 'Docs',
            desc: 'Technical notes and guides for the platform.',
            href: '/reports/seo',
            external: true
          }, {
            title: 'AI Changelog',
            desc: 'Summarized autonomous changes and highlights.',
            href: '/newsroom',
            external: true
          }].map(card => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 holo tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold",
              children: card.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: card.desc
            }), card.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: card.href,
              target: "_blank",
              rel: "noopener",
              className: "mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline",
              children: "Open"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: card.href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline",
                children: "Open"
              })
            })]
          }, card.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "netlify-automations",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Netlify Automations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Zero\u2011ops scheduled functions power background tasks that improve the site and ship small, safe diffs to main."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            label: 'Autonomous Cloud Brain (1m)',
            desc: 'Selectively triggers and syncs key pipelines every minute.',
            href: '/.netlify/functions/autonomous-cloud-brain'
          }, {
            label: 'Homepage Advertiser',
            desc: 'Curates and updates the home explore section.',
            href: '/.netlify/functions/homepage_advertiser'
          }, {
            label: 'Autonomous Meta Orchestrator',
            desc: 'Intelligently triggers cloud functions and syncs to main every minute.',
            href: '/.netlify/functions/autonomous-meta-orchestrator'
          }, {
            label: 'Cloud Orchestrator',
            desc: 'Runs fast improvement cycle and git sync.',
            href: '/.netlify/functions/cloud_orchestrator'
          }, {
            label: 'Autonomous Meta Orchestrator (1m)',
            desc: 'Curates and triggers critical cloud functions, then syncs.',
            href: '/.netlify/functions/autonomous-meta-orchestrator'
          }, {
            label: 'Cloud Trigger Hub (2m)',
            desc: 'Triggers most functions concurrently, then rebuilds/stamps.',
            href: '/.netlify/functions/cloud-trigger-hub'
          }, {
            label: 'Sitemap Runner',
            desc: 'Keeps sitemap fresh for SEO visibility.',
            href: '/.netlify/functions/sitemap_runner'
          }, {
            label: 'SEO Audit Runner',
            desc: 'Analyzes meta and content signals; writes public report.',
            href: '/.netlify/functions/seo-audit-runner'
          }, {
            label: 'AI Trends Radar',
            desc: 'Builds AI trends report from curated sources.',
            href: '/.netlify/functions/ai-trends-radar-runner'
          }, {
            label: 'Dependency Auto‑Upgrade',
            desc: 'Safely bumps deps and verifies a clean build.',
            href: '/.netlify/functions/deps-auto-upgrade-runner'
          }, {
            label: 'Autonomous Meta Orchestrator',
            desc: 'Invents and triggers cloud automations; syncs changes.',
            href: '/.netlify/functions/autonomous-meta-orchestrator'
          }, {
            label: 'Trigger All & Commit',
            desc: 'Invokes all functions and triggers a build or commit.',
            href: '/.netlify/functions/trigger-all-and-commit'
          }].map(f => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: f.href,
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: f.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: f.desc
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Trigger ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, f.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "text-center text-xl font-bold tracking-wide text-white/90",
          children: "New Cloud Automations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/stale-content-auditor-runner",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Stale Content Auditor"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Finds stale pages/components/docs and publishes a report."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Trigger ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/.netlify/functions/autonomous-invention-orchestrator",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Autonomous Invention Orchestrator"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Invents and curates fresh automations and safely syncs diffs to main."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Trigger ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Feature Spotlight"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "A quick tour of the most impactful capabilities \u2014 each card links to a deep dive."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket,
            title: 'Automation Hub',
            desc: 'Factories, agents, and live workflows',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'AI SEO Auditor',
            desc: 'Continuous on‑site SEO improvements',
            href: '/reports/seo'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Site Health',
            desc: 'A11y, performance, and link integrity',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe,
            title: 'AI Trends Radar',
            desc: 'Signals that inspire new automations',
            href: '/reports/ai-trends'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Main Sync',
            desc: 'Safe, incremental diffs shipped continuously',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Guardrails',
            desc: 'Defense‑in‑depth quality gates',
            href: '/site-health'
          }].map(_ref5 => {
            var {
              Icon,
              title,
              desc,
              href
            } = _ref5;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                    className: "h-5 w-5 text-cyan-300"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-lg font-semibold",
                    children: title
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: desc
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10 p-6 backdrop-blur-xl",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,2.5rem_2.5rem,2.5rem_2.5rem] animate-grid"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-center text-2xl font-bold tracking-wide text-white/90",
            children: "Explore Zion Systems"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
            children: "Discover key features, capabilities, and benefits. Each card links to a dedicated page or live hub."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/automation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-base font-semibold",
                  children: "Automation Hub"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: "Factories, agents, and live workflows"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/reports/seo",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-base font-semibold",
                  children: "AI SEO Auditor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: "Continuous on\u2011site SEO improvements"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/site-health",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-base font-semibold",
                  children: "Site Health"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: "A11y, performance, and link integrity"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/reports/ai-trends",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-base font-semibold",
                  children: "AI Trends Radar"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: "Signals that inspire new automations"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/newsroom",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-base font-semibold",
                  children: "Newsroom"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: "Latest autonomous updates"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: "https://github.com/Zion-Holdings/zion.app/actions",
              target: "_blank",
              rel: "noopener",
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-base font-semibold",
                children: "Live Workflows"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: "Observe pipelines running 24/7"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Outcome\u2011Focused Benefits"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Choose an outcome and jump to the relevant systems that make it happen."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            label: 'Grow organic traffic',
            desc: 'On‑site SEO improvements, better metadata, richer links',
            href: '/reports/seo'
          }, {
            label: 'Improve UX quality',
            desc: 'A11y fixes, performance gains, resilient links',
            href: '/site-health'
          }, {
            label: 'Reduce engineering toil',
            desc: 'Automated upgrades, refactors, and maintenance',
            href: '/automation'
          }, {
            label: 'Ship faster with confidence',
            desc: 'Small safe diffs synced to main',
            href: '/automation'
          }, {
            label: 'Stay compliant & accessible',
            desc: 'Policy guardrails and WCAG checks',
            href: '/site-health'
          }, {
            label: 'Learn from market signals',
            desc: 'AI + cloud trends to guide strategy',
            href: '/reports/ai-trends'
          }].map(b => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: b.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                className: "text-sm text-white/80",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "font-semibold text-white",
                  children: b.label
                }), " \u2014 ", b.desc, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "ml-1 text-cyan-300/90",
                  children: "\u2192"
                })]
              })]
            })
          }, b.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "suites",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Automation Suites"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            title: 'Quick Fixes',
            desc: 'Build rescue, sitemap/robots, security remediation',
            href: '/automation'
          }, {
            title: 'Deep Maintenance',
            desc: 'Orchestrated smoke tests and link checks',
            href: '/automation'
          }, {
            title: 'Marketing & SEO',
            desc: 'Content factories and on‑site optimizations',
            href: '/automation'
          }, {
            title: 'Content Curation',
            desc: 'Homepage promos generated continuously',
            href: '/automation'
          }, {
            title: 'Dependency Upgrades',
            desc: 'Minor/patch bumps with safe auto‑merge',
            href: '/automation'
          }, {
            title: 'Live Workflows',
            desc: 'Observe pipelines running 24/7',
            href: '/site-health',
            external: true
          }, {
            title: 'Site Health',
            desc: 'A11y, performance, link checks dashboards',
            href: '/site-health'
          }, {
            title: 'AI SEO Auditor',
            desc: 'Continuous on‑site audits with safe proposed diffs',
            href: '/reports/seo'
          }, {
            title: 'AI Trends Radar',
            desc: 'Signal scanning to inspire new factories',
            href: '/reports/ai-trends'
          }].map(suite => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold",
              children: suite.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: suite.desc
            }), suite.href && (suite.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: suite.href,
              target: "_blank",
              rel: "noopener",
              className: "mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline",
              children: "Open"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: suite.href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline",
                children: "Open"
              })
            }))]
          }, suite.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Superpowers"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 md:grid-cols-3",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket,
            title: 'Generative Factories',
            desc: 'Spins up domain‑specific automation factories that build for you.'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Safety by Design',
            desc: 'Layered validations — type checks, builds, a11y, links, and more.'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Main Sync',
            desc: 'Small, reviewable edits committed and pushed continuously.'
          }].map(_ref6 => {
            var {
              Icon,
              title,
              desc
            } = _ref6;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                className: "h-6 w-6 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "mt-3 text-lg font-semibold",
                children: title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: desc
              })]
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Get Started in Minutes"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/automation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm font-semibold",
                  children: "1. Explore Automations"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-xs text-white/75",
                children: "See live autonomous suites and workflows."
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/seo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm font-semibold",
                  children: "2. Run SEO Audit"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-xs text-white/75",
                children: "Get prioritized improvements and artifacts."
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/site-health",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm font-semibold",
                  children: "3. Check Site Health"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-xs text-white/75",
                children: "A11y, performance, and link health dashboards."
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/ai-trends",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm font-semibold",
                  children: "4. Track AI Trends"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-xs text-white/75",
                children: "Stay ahead with intelligence signals."
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "features",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Features"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap,
            title: 'Self‑Improving',
            desc: 'Agents continuously analyze, invent, and evolve automations.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Repo Sync',
            desc: 'Changes are committed and pushed automatically to main.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu,
            title: 'Zero Ops',
            desc: 'Runs fully in the cloud—no servers or manual intervention.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Safety‑First',
            desc: 'Conservative edits with logs, reports, and guardrails.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Observability',
            desc: 'Dashboards, reports, and cloud automation artifacts.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'Composable Systems',
            desc: 'Chain multiple factories into higher‑order workflows.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity,
            title: 'AI SEO Auditor',
            desc: 'Continuously scans pages and proposes SEO improvements.',
            href: '/reports/seo'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe,
            title: 'AI Trends Radar',
            desc: 'Tracks AI and cloud signals to inspire new automations.',
            href: '/reports/ai-trends'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'Deep Indexing',
            desc: 'Content and code search powering smart linking and PRs.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3,
            title: 'Live Dashboards',
            desc: 'Real‑time quality and impact metrics at a glance.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity,
            title: 'Health Monitors',
            desc: 'A11y, links, and performance monitored 24/7.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe,
            title: 'Intelligence Signals',
            desc: 'AI research integrated into product improvements.',
            href: '/reports/ai-trends'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Security Scans',
            desc: 'Audit dependencies and surface risks with reports.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Automated Changelogs',
            desc: 'Summarized changes and AI notes published continuously.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket,
            title: 'OG Image Maker',
            desc: 'Auto‑generates rich Open Graph images for content.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Policy & Compliance',
            desc: 'Safety rails and audits applied before shipping.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'Factories Library',
            desc: 'Reusable building blocks for new automations.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Site Health API',
            desc: 'Programmatic access to health signals and artifacts.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'Link Integrity',
            desc: 'Broken links detected and fixed before shipping.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette,
            title: 'Design System Evolution',
            desc: 'Consistent, modern UI upgrades across the app.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3,
            title: 'Analytics Exports',
            desc: 'Download artifacts and reports for deeper analysis.',
            href: '/reports/seo'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'Automated PR Reviews',
            desc: 'Bots review diffs for quality, style, and policy.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Asset Optimizer',
            desc: 'Compresses images and scripts for faster pages.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'i18n Readiness',
            desc: 'Prepares content and routes for localization.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe,
            title: 'Sitemap & Robots',
            desc: 'Maintains search‑friendly routing metadata.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette,
            title: 'Design Tokens',
            desc: 'Automates consistent theming and spacing.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.LineChart,
            title: 'Experiment Telemetry',
            desc: 'Measures impact across experiments and releases.',
            href: '/reports/seo'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity,
            title: 'Automated Dependencies',
            desc: 'Minor/patch upgrades proposed and merged safely.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'Broken Link Defender',
            desc: 'Continuously scans and fixes link integrity issues.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.LineChart,
            title: 'Experimentation',
            desc: 'Automate A/B setups and monitor telemetry automatically.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette,
            title: 'Design Tokens & Theming',
            desc: 'Enforce consistent theming, spacing, and motion.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Image Pipeline',
            desc: 'Optimize and transform media assets automatically.',
            href: '/site-health'
          }].map(_ref7 => {
            var {
              Icon,
              title,
              desc,
              href
            } = _ref7;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group glow-card relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30 tilt-on-hover neon-ring",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                    className: "h-5 w-5 text-cyan-300"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-lg font-semibold",
                    children: title
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-2 text-sm text-white/75",
                  children: desc
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Learn more ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Link2, {
                    className: "h-3.5 w-3.5"
                  })]
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Outcomes"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Tangible, measurable wins delivered by autonomous cloud agents."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "relative mx-auto mt-6 max-w-6xl overflow-hidden",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "marquee",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "marquee__track",
              children: [{
                label: 'Accessibility fixes',
                href: '/site-health'
              }, {
                label: 'Performance boosts',
                href: '/site-health'
              }, {
                label: 'SEO improvements',
                href: '/reports/seo'
              }, {
                label: 'Safer main merges',
                href: '/automation'
              }, {
                label: 'Cleaner codebase',
                href: '/automation'
              }, {
                label: 'Better content curation',
                href: '/newsroom'
              }, {
                label: 'Operational visibility',
                href: '/site-health'
              }, {
                label: 'Experiment velocity',
                href: '/automation'
              }].flatMap(item => [item, item]).map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: item.href,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  className: "mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "h-1.5 w-1.5 rounded-full bg-cyan-400"
                  }), " ", item.label]
                })
              }, "".concat(item.label, "-").concat(idx)))
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "feature-map",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Feature Map"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "A fast overview of what you can explore right now across the platform."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [{
            label: 'Automation Hub',
            desc: 'Live agents & workflows',
            href: '/automation'
          }, {
            label: 'Repo Sync to Main',
            desc: 'Safe, incremental edits',
            href: '/automation'
          }, {
            label: 'Zero‑Ops Cloud',
            desc: 'Fully managed execution',
            href: '/automation'
          }, {
            label: 'Safety Guardrails',
            desc: 'Defense‑in‑depth checks',
            href: '/site-health'
          }, {
            label: 'Observability',
            desc: 'Dashboards & artifacts',
            href: '/site-health'
          }, {
            label: 'Composable Systems',
            desc: 'Higher‑order workflows',
            href: '/automation'
          }, {
            label: 'AI SEO Auditor',
            desc: 'On‑site improvements',
            href: '/reports/seo'
          }, {
            label: 'AI Trends Radar',
            desc: 'Intelligence signals',
            href: '/reports/ai-trends'
          }, {
            label: 'Deep Indexing',
            desc: 'Smart linking & PRs',
            href: '/newsroom'
          }, {
            label: 'Live Dashboards',
            desc: 'Impact at a glance',
            href: '/site-health'
          }, {
            label: 'Health Monitors',
            desc: 'A11y, perf, links',
            href: '/site-health'
          }, {
            label: 'Docs & Guides',
            desc: 'Technical notes',
            href: '/reports/seo',
            external: true
          }].map(item => item.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: item.href,
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: item.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: item.desc
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, item.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: item.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: item.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: item.desc
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, item.label))
        })]
      }),
      /*#__PURE__*/
      /* AUTO:FRONT_INDEX_DIRECTORY_START */
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        id: "auto-catalog",
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Autonomous Catalog"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Auto\u2011discovered features, capabilities, and resources. Kept fresh by in\u2011repo Node tools."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/automation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Automation Hub"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Factories, agents, and live workflows"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/site-health",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Site Health"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "A11y, performance, and link dashboards"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/seo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "AI SEO Auditor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Continuous on\u2011site SEO improvements"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/ai-trends",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "AI Trends Radar"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Signals that inspire new automations"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/newsroom",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Newsroom"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Curated updates and product evolution highlights"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/main/front",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Front Systems Hub"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Curated, futuristic front experience"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/reports/seo",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Docs & Guides"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Technical notes and architecture"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/newsroom",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "AI Changelog"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Summarized autonomous changes"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/site-health",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Live Pipelines"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "CI logs & artifacts 24/7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "https://ziontechgroup.com",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Zion Cloud"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Deployments and cloud platform"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          })]
        })]
      })

      /* AUTO:FRONT_INDEX_DIRECTORY_END */, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "modules",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Platform Modules"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket,
            title: 'Autonomous Factories',
            desc: 'Composable, domain‑specific automation factories.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Guardrails',
            desc: 'Defense‑in‑depth validations and policy enforcement.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Observability',
            desc: 'Dashboards, artifacts, and live CI telemetry.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity,
            title: 'SEO Ops',
            desc: 'Continuous audits and safe, suggested diffs.',
            href: '/reports/seo'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe,
            title: 'AI Intelligence',
            desc: 'Trends radar to guide new automation ideas.',
            href: '/reports/ai-trends'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'Workflow Composer',
            desc: 'Chain factories into higher‑order systems.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Main Sync Engine',
            desc: 'Small, reviewable edits merged continuously.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu,
            title: 'Zero‑Ops Runtime',
            desc: 'Cloud‑native execution with no servers to manage.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3,
            title: 'Impact Analytics',
            desc: 'Track outcomes and ROI from automations.',
            href: '/site-health'
          }].map(_ref8 => {
            var {
              Icon,
              title,
              desc,
              href
            } = _ref8;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                    className: "h-5 w-5 text-cyan-300"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-lg font-semibold",
                    children: title
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-2 text-sm text-white/75",
                  children: desc
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Link2, {
                    className: "h-3.5 w-3.5"
                  })]
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Neural Feature Matrix"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "A denser, at-a-glance atlas of what Zion ships autonomously. Every tile links to the live hub, report, or docs."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [{
            label: 'Automation Hub',
            desc: 'Factories, agents, workflows',
            href: '/automation'
          }, {
            label: 'Main Sync Engine',
            desc: 'Safe diffs to main',
            href: '/automation'
          }, {
            label: 'Zero‑Ops Cloud',
            desc: 'Run in the cloud, no servers',
            href: '/automation'
          }, {
            label: 'Guardrails',
            desc: 'Policy + safety gates',
            href: '/site-health'
          }, {
            label: 'Site Health',
            desc: 'A11y, performance, links',
            href: '/site-health'
          }, {
            label: 'AI SEO Auditor',
            desc: 'Continuous on‑site SEO',
            href: '/reports/seo'
          }, {
            label: 'AI Trends Radar',
            desc: 'Signals powering strategy',
            href: '/reports/ai-trends'
          }, {
            label: 'Content Curation',
            desc: 'Promos and deep links',
            href: '/newsroom'
          }, {
            label: 'Factories Library',
            desc: 'Composable building blocks',
            href: '/automation'
          }, {
            label: 'Impact Dashboards',
            desc: 'Artifacts and telemetry',
            href: '/site-health'
          }, {
            label: 'Link Integrity',
            desc: 'Broken links defender',
            href: '/site-health'
          }, {
            label: 'Design Evolution',
            desc: 'Futuristic UI upgrades',
            href: '/newsroom'
          }, {
            label: 'Docs & Guides',
            desc: 'Technical notes',
            href: '/reports/seo',
            external: true
          }, {
            label: 'AI Changelog',
            desc: 'Summarized updates',
            href: '/newsroom',
            external: true
          }, {
            label: 'Cloud Automations',
            desc: 'Netlify scheduled functions',
            href: '/automation'
          }, {
            label: 'Roadmap & Issues',
            desc: "What's next",
            href: '//issues',
            external: true
          }].map(item => item.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: item.href,
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: item.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: item.desc
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, item.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: item.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: item.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: item.desc
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, item.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Extended Feature Directory"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Automated Changelogs',
            desc: 'AI-authored CHANGELOG with continuous updates.',
            href: '/newsroom',
            external: true
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket,
            title: 'Content Curation',
            desc: 'Homepage promos and deep links generated on the fly.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'Deep Site Index',
            desc: 'Smarter internal linking and content discovery.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Policy & Compliance',
            desc: 'Safety rails and audits before changes ship.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3,
            title: 'Impact Dashboards',
            desc: 'Real-time visibility into outcomes and ROI.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'Factories Library',
            desc: 'Composable building blocks for new automations.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity,
            title: 'Health Monitors',
            desc: 'A11y, links, and performance monitored 24/7.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu,
            title: 'Zero-Ops Runtime',
            desc: 'Fully managed cloud execution with no servers.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe,
            title: 'Intelligence Signals',
            desc: 'AI + cloud trend tracking fueling new ideas.',
            href: '/reports/ai-trends'
          }].map(_ref9 => {
            var {
              Icon,
              title,
              desc,
              href,
              external
            } = _ref9;
            return external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: href,
              target: "_blank",
              rel: "noopener",
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                  className: "h-5 w-5 text-cyan-300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: title
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: desc
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2197"
                })]
              })]
            }, title) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                    className: "h-5 w-5 text-cyan-300"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-lg font-semibold",
                    children: title
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: desc
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Capability Deep Links"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Jump directly to the systems that deliver each capability."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [['SEO Automation', 'On-site scans and safe diffs to improve visibility', '/reports/seo'], ['Site Health', 'A11y, performance, and resilient links at a glance', '/site-health'], ['Automation Hub', 'Factories and live autonomous workflows', '/automation'], ['AI Trends Radar', 'Signals inspiring new factories and experiments', '/reports/ai-trends'], ['Newsroom', 'Curated updates and product evolution highlights', '/newsroom'], ['Live Pipelines', 'Observe CI pipelines, logs, and artifacts', '/site-health'], ['Documentation', 'Technical notes, guides, and changelog', '/reports/seo'], ['AI Changelog', 'Summarized autonomous changes and highlights', '/newsroom']].map(_ref10 => {
            var [label, desc, href] = _ref10;
            return href.startsWith('http') ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: href,
              target: "_blank",
              rel: "noopener",
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: desc
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2197"
                })]
              })]
            }, label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "text-base font-semibold",
                  children: label
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "mt-1 text-sm text-white/75",
                  children: desc
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }, label);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "use-cases",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Use Cases"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
          children: [{
            title: 'AI SEO Auditor',
            desc: 'Continuously scans pages and proposes SEO improvements with safe diffs.'
          }, {
            title: 'Design Beautifier',
            desc: 'Upgrades UI components with modern, cohesive visual language.'
          }, {
            title: 'Content Curator',
            desc: 'Surfaces and promotes high‑value content with links and metadata.'
          }, {
            title: 'Performance Tuner',
            desc: 'Optimizes bundles, images, and scripts for faster loads.'
          }, {
            title: 'A11y Guardian',
            desc: 'Catches and fixes accessibility issues before they ship.'
          }, {
            title: 'Growth Experiments',
            desc: 'Spins up micro‑experiments and measures impact automatically.'
          }].map(u => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold",
              children: u.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: u.desc
            })]
          }, u.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "neon-divider mx-auto mb-8 h-px w-full max-w-5xl"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Live Impact"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
          children: [{
            label: 'Workflows',
            value: '1,200+',
            href: '/site-health',
            external: true
          }, {
            label: 'Commits Synced',
            value: '800+',
            href: '/automation'
          }, {
            label: 'Automated Edits',
            value: '3,500+',
            href: '/automation'
          }, {
            label: 'Uptime',
            value: '99.95%',
            href: '/site-health'
          }, {
            label: 'A11y Checks',
            value: '20k+',
            href: '/site-health'
          }, {
            label: 'SEO Fixes',
            value: '4.2k+',
            href: '/reports/seo'
          }].map(item => item.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: item.href,
            target: "_blank",
            rel: "noopener",
            className: "rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-2xl font-extrabold tracking-tight",
              children: item.value
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-xs text-white/70",
              children: item.label
            })]
          }, item.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: item.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-2xl font-extrabold tracking-tight",
                children: item.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-xs text-white/70",
                children: item.label
              })]
            })
          }, item.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "capabilities",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Capabilities"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 md:grid-cols-3",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette,
            title: 'Design Evolution',
            desc: 'Autonomously beautifies UI with consistent, futuristic patterns.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3,
            title: 'Performance & A11y',
            desc: 'Optimizes bundles, assets, and accessibility with continuous checks.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.LineChart,
            title: 'Content & SEO',
            desc: 'Curates content, updates promos, and tunes metadata for reach.',
            href: '/reports/seo'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'Code Quality & Refactors',
            desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Observability & Reports',
            desc: 'Artifacts, dashboards, and live logs for every automation.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe,
            title: 'Intelligence Signals',
            desc: 'AI + cloud trend tracking to spark new factory ideas.',
            href: '/reports/ai-trends'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Repo Sync to Main',
            desc: 'Small, safe diffs merged continuously for momentum.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Guardrails & Policy',
            desc: 'Organization‑wide safety rules enforced automatically.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu,
            title: 'Zero‑Ops Cloud',
            desc: 'Fully managed cloud execution with no servers to babysit.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity,
            title: 'Automated Dependencies',
            desc: 'Minor/patch upgrades proposed and merged safely.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'Broken Link Defender',
            desc: 'Continuously scans and fixes link integrity issues.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.LineChart,
            title: 'Experimentation',
            desc: 'Automate A/B setups and monitor telemetry automatically.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette,
            title: 'Design Tokens & Theming',
            desc: 'Enforce consistent theming, spacing, and motion.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Image Pipeline',
            desc: 'Optimize and transform media assets automatically.',
            href: '/site-health'
          }].map(_ref11 => {
            var {
              Icon,
              title,
              desc,
              href
            } = _ref11;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                    className: "h-5 w-5 text-cyan-300"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-lg font-semibold",
                    children: title
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: desc
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Why Zion"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3",
          children: [['🚀', 'Speed', 'Continuous delivery to main with safe, incremental changes.'], ['🛡️', 'Safety', 'Conservative edits and guardrails keep production stable.'], ['📈', 'Scale', 'Automatically generates new factories as your needs grow.']].map(_ref12 => {
            var [icon, title, desc] = _ref12;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-2xl",
                children: icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-2 text-base font-semibold",
                children: title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: desc
              })]
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "pillars",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Value Pillars"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Four pillars that guide every autonomous change \u2014 jump into the systems behind each."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck,
            title: 'Security & Safety',
            desc: 'Guardrails, policy, and quality gates.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket,
            title: 'Speed & Momentum',
            desc: 'Small diffs shipped continuously.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Quality & Reliability',
            desc: 'A11y, performance, and link integrity.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'Scale & Composability',
            desc: 'Factories chained into higher‑order workflows.',
            href: '/automation'
          }].map(_ref13 => {
            var {
              Icon,
              title,
              desc,
              href
            } = _ref13;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                    className: "h-5 w-5 text-cyan-300"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-lg font-semibold",
                    children: title
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: desc
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "benefits",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Benefits"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "relative mx-auto mt-4 max-w-5xl overflow-hidden",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "marquee",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "marquee__track",
              children: [{
                label: '24/7 autonomous progress',
                href: '/automation'
              }, {
                label: 'Main branch delivery',
                href: '/automation'
              }, {
                label: 'A11y & performance wins',
                href: '/site-health'
              }, {
                label: 'Continuous SEO gains',
                href: '/reports/seo'
              }, {
                label: 'Transparent artifacts',
                href: '/site-health'
              }, {
                label: 'Guardrails & policy',
                href: '/site-health'
              }, {
                label: 'Faster iteration loops',
                href: '/newsroom'
              }, {
                label: 'Lower operational toil',
                href: '/automation'
              }].flatMap(i => [i, i]).map((i, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: i.href,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  className: "mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "h-1.5 w-1.5 rounded-full bg-emerald-400"
                  }), " ", i.label]
                })
              }, "".concat(i.label, "-").concat(idx)))
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2",
          children: ['24/7 progress without human intervention', 'Rapid feedback loop with safe, incremental edits', 'Continuous delivery directly to main branch', 'Fewer regressions via layered checks and reports', 'Higher velocity with automated maintenance', 'Reduced costs via zero‑ops and automated QA', 'Consistent design language and UX quality', 'Transparent artifacts and live workflow logs', 'Faster experiment velocity with measurable impact', 'Improved search visibility via continuous SEO', 'Happier users thanks to performance & a11y wins', 'Lower operational risk through guardrails', 'Improved discoverability via deep indexing and SEO', 'Happier engineers with less toil and more creation', 'Confident shipping through automated guardrails', 'Predictable quality gates and SLOs upheld automatically', 'Auditability for compliance with full traceability', 'Happier teams: less toil, more product value', 'Automated dependency upgrades and security scans', 'Clear analytics and downloadable artifacts for every run', 'Composable factories accelerate new initiatives'].map(b => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-sm text-white/80",
              children: b
            })]
          }, b))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Benefits in Practice"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "See where each benefit shows up in the product."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",
          children: [{
            label: '24/7 progress',
            desc: 'Agents keep shipping while you sleep',
            href: '/automation'
          }, {
            label: 'Rapid feedback loop',
            desc: 'Tight iteration cycles on UX & code',
            href: '/newsroom'
          }, {
            label: 'Main branch delivery',
            desc: 'Small, safe diffs merged continuously',
            href: '/site-health',
            external: true
          }, {
            label: 'Fewer regressions',
            desc: 'Layered checks catch issues early',
            href: '/site-health'
          }, {
            label: 'Increased reach',
            desc: 'Continuous SEO improvements',
            href: '/reports/seo'
          }, {
            label: 'Strategic insights',
            desc: 'AI + cloud trend tracking',
            href: '/reports/ai-trends'
          }].map(b => b.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: b.href,
            target: "_blank",
            rel: "noopener",
            className: "group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "text-sm text-white/80",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "font-semibold text-white",
                children: b.label
              }), " \u2014 ", b.desc, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "ml-1 text-cyan-300/90",
                children: "\u2197"
              })]
            })]
          }, b.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: b.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                className: "text-sm text-white/80",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "font-semibold text-white",
                  children: b.label
                }), " \u2014 ", b.desc, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "ml-1 text-cyan-300/90",
                  children: "\u2192"
                })]
              })]
            })
          }, b.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Tailored Value by Team"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
          children: [{
            title: 'Developers',
            desc: 'Code quality, refactors, upgrades, reliability',
            href: '/automation'
          }, {
            title: 'Product',
            desc: 'Faster UX improvements, experiments, insights',
            href: '/newsroom'
          }, {
            title: 'Marketing',
            desc: 'SEO automation, content curation, reach',
            href: '/reports/seo'
          }, {
            title: 'Operations',
            desc: 'A11y, performance, and link‑health dashboards',
            href: '/site-health'
          }].map(card => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: card.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: card.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: card.desc
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Link2, {
                  className: "h-3.5 w-3.5"
                })]
              })]
            })
          }, card.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "reports",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Ecosystem & Integrations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/site-health",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
                className: "h-5 w-5 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: "GitHub Actions"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Live pipelines, logs, and artifacts powering automations."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Open \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "https://www.netlify.com/",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
                className: "h-5 w-5 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: "Netlify"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Zero\u2011ops hosting and functions for maintenance schedules."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Learn more \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "https://supabase.com/",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers, {
                className: "h-5 w-5 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: "Supabase"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Realtime data and storage for emerging automation needs."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Explore \u2192"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "https://www.framer.com/motion/",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette, {
                className: "h-5 w-5 text-cyan-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: "Framer Motion"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: "Futuristic micro\u2011interactions and motion design system."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-3 text-xs text-cyan-300/90",
              children: "Docs \u2192"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "guardrails",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Quality Gates & Guardrails"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
          children: [{
            title: 'Accessibility',
            desc: 'Automated checks and fixes for WCAG compliance.',
            href: '/site-health'
          }, {
            title: 'Link Integrity',
            desc: 'Broken links detected before release.',
            href: '/site-health'
          }, {
            title: 'Performance',
            desc: 'Budgets enforced and improved continuously.',
            href: '/site-health'
          }, {
            title: 'Safe Diffs',
            desc: 'Conservative, reviewable changes synced to main.',
            href: '/automation'
          }].map(g => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: g.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-semibold",
                children: g.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: g.desc
              })]
            })
          }, g.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-white/70",
            children: "Powered by modern cloud and AI tooling"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "mt-4 flex flex-wrap items-center justify-center gap-6",
            children: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Supabase', 'Netlify'].map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse",
              children: t
            }, t))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "mx-auto max-w-7xl px-6 pb-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Quick Start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4",
          children: [['Explore', 'Browse live automations', '/automation'], ['Audit', 'Check site health', '/site-health'], ['Optimize', 'Run the SEO auditor', '/reports/seo'], ['Learn', 'Follow AI trends', '/reports/ai-trends']].map(_ref14 => {
            var [title, desc, href] = _ref14;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl hover:border-cyan-400/30",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "text-sm font-semibold text-white",
                  children: title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "mt-1 text-xs text-white/70",
                  children: desc
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            className: "text-2xl font-bold",
            children: "Ready to build with autonomous cloud agents?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "mx-auto mt-2 max-w-2xl text-white/80",
            children: "Scale development with a tireless fleet of self\u2011improving automations."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mt-6 flex flex-wrap justify-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/automation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white",
                children: "Get Started"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/automation",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10",
                children: "View Automations"
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        id: "front-futurizer",
        className: "mx-auto max-w-7xl px-6 pb-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Explore More \u2014 Features, Capabilities, Benefits"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "A quick portal to the most impactful areas across Zion. Every tile and list item links to a live hub, report, or doc."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Features"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "mt-3 space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Self\u2011improving autonomous agents"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Repo sync to main with safe diffs"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Zero\u2011ops, cloud\u2011native runtime"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Defense\u2011in\u2011depth guardrails"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Capabilities"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "mt-3 space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Code quality and refactors"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "A11y and performance tuning"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Content curation and SEO"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Observability and analytics"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-semibold",
              children: "Benefits"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "mt-3 space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "24/7 progress without manual ops"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Faster feedback with small edits"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Higher confidence via layered checks"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-sm text-white/80",
                  children: "Links to hubs, reports, and docs"
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/automation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Automation Hub"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Factories, agents, and live workflows"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, "Automation Hub"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/site-health",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Site Health"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "A11y, performance, and link integrity"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, "Site Health"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/seo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "SEO Audit"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Continuous on\u2011site improvements and artifacts"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, "SEO Audit"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/ai-trends",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "AI Trends"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Signals inspiring new factories and experiments"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, "AI Trends"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/newsroom",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Newsroom"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Autonomous updates and product evolution"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, "Newsroom"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/reports/seo",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Documentation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Technical notes and guides"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, "Documentation"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/newsroom",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "AI Changelog"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Summarized autonomous changes and highlights"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, "AI Changelog"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "/site-health",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Live Pipelines"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Observe CI pipelines, logs, and artifacts"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, "Live Pipelines")]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("footer", {
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center justify-between gap-4 md:flex-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-lg font-bold tracking-wide",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon",
                children: "Zion"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-wrap justify-center gap-4 text-sm text-white/70",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/automation",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  children: "Automations"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/newsroom",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  children: "Newsroom"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/site-health",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  children: "Site Health"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: "/",
                target: "_blank",
                rel: "noopener",
                children: "GitHub"
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "agents",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "AI Agents Gallery"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Meet the autonomous agents powering your outcomes. Each card links to a live system."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Search,
            title: 'AI SEO Auditor',
            desc: 'Continuously improves on‑site SEO with safe diffs.',
            href: '/reports/seo'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Link2,
            title: 'Link Healer',
            desc: 'Finds and fixes broken links with dashboards.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette,
            title: 'Design Beautifier',
            desc: 'Evolves UI with cohesive, futuristic patterns.',
            href: '/newsroom'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Gauge,
            title: 'Performance Tuner',
            desc: 'Optimizes bundles and runtime for speed.',
            href: '/site-health'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Layers,
            title: 'Factory Composer',
            desc: 'Chains automations into higher‑order workflows.',
            href: '/automation'
          }, {
            Icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.GitBranch,
            title: 'Main Sync',
            desc: 'Ships small, safe diffs to main continuously.',
            href: '/automation'
          }].map(_ref15 => {
            var {
              Icon,
              title,
              desc,
              href
            } = _ref15;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: href,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
                    className: "h-5 w-5 text-cyan-300"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-lg font-semibold",
                    children: title
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "mt-1 text-sm text-white/75",
                  children: desc
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                  children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "aria-hidden": true,
                    children: "\u2192"
                  })]
                })]
              })
            }, title);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "capability-matrix",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Capabilities Matrix"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          children: [{
            title: 'Autonomous Agents',
            desc: 'Self‑improving cloud workers',
            href: '/automation'
          }, {
            title: 'Repo Sync to Main',
            desc: 'Safe, continuous delivery',
            href: '/automation'
          }, {
            title: 'AI SEO Auditor',
            desc: 'On‑site improvements daily',
            href: '/reports/seo'
          }, {
            title: 'AI Trends Radar',
            desc: 'Signals for new factories',
            href: '/reports/ai-trends'
          }, {
            title: 'Site Health',
            desc: 'A11y, performance, links',
            href: '/site-health'
          }, {
            title: 'Guardrails',
            desc: 'Defense‑in‑depth quality',
            href: '/site-health'
          }, {
            title: 'Design Evolution',
            desc: 'Cohesive futuristic UI',
            href: '/newsroom'
          }, {
            title: 'Observability',
            desc: 'Dashboards & artifacts',
            href: '/site-health'
          }, {
            title: 'Analytics',
            desc: 'Outcomes & insights',
            href: '/site-health'
          }, {
            title: 'Link Integrity',
            desc: 'Broken link healing',
            href: '/site-health'
          }, {
            title: 'Factory Composer',
            desc: 'Higher‑order workflows',
            href: '/automation'
          }, {
            title: 'Docs & Changelog',
            desc: 'Technical notes & AI log',
            href: '/reports/seo',
            external: true
          }].map(item => item.external ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: item.href,
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: item.desc
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2197"
              })]
            })]
          }, item.title) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: item.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: item.desc
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, item.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "benefits-directory",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Benefits Directory"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Outcome\u2011focused advantages with direct links to the systems that deliver them."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            label: '24/7 Progress',
            desc: 'Always‑on autonomous delivery',
            href: '/automation'
          }, {
            label: 'Safe Incremental Diffs',
            desc: 'Small, reviewable changes',
            href: '/automation'
          }, {
            label: 'Zero‑Ops Cloud‑Native',
            desc: 'No servers to babysit',
            href: '/automation'
          }, {
            label: 'Layered Quality Checks',
            desc: 'Guardrails & audits',
            href: '/site-health'
          }, {
            label: 'Faster Iteration Loops',
            desc: 'Shorten idea‑to‑impact',
            href: '/newsroom'
          }, {
            label: 'SEO Visibility Gains',
            desc: 'Continuous improvements',
            href: '/reports/seo'
          }].map(b => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: b.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-base font-semibold",
                  children: b.label
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mt-1 text-sm text-white/75",
                children: b.desc
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
                children: ["Explore ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  "aria-hidden": true,
                  children: "\u2192"
                })]
              })]
            })
          }, b.label))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        id: "auto-ads",
        className: "mx-auto max-w-7xl px-6 pb-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Auto\u2011advertised Highlights"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/automation",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Automation Hub"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Factories, agents, and live workflows"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/site-health",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Site Health"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "A11y, performance, and link integrity"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/seo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "SEO Audit"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Continuous on\u2011site improvements"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/reports/ai-trends",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "AI Trends"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Ecosystem intelligence signals"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/newsroom",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Newsroom"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Autonomous updates & evolution"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/main/front",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Front Systems Hub"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Curated futuristic front experience"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/.netlify/functions/deps-auto-upgrade-runner",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Deps Auto\u2011Upgrade"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Keeps dependencies fresh safely"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/.netlify/functions/frontpage-advertiser",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-base font-semibold",
                children: "Frontpage Advertiser"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-1 text-sm text-white/75",
                children: "Refreshes front promos automatically"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "https://github.com/Zion-Holdings/zion.app/actions",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Live Pipelines"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "CI logs & artifacts"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: "https://github.com/Zion-Holdings/zion.app/tree/main/docs",
            target: "_blank",
            rel: "noopener",
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold",
              children: "Docs & Guides"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-sm text-white/75",
              children: "Technical notes"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "feature-highlights",
        initial: {
          opacity: 0,
          y: 24
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.5
        },
        className: "mx-auto max-w-7xl px-6 pb-14",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-center text-2xl font-bold tracking-wide text-white/90",
          children: "Feature Highlights"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
          children: "Explore deep links across the app that showcase our capabilities and benefits."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: [{
            title: 'SEO Audit',
            desc: 'Continuous on‑site improvements and artifacts.',
            href: '/reports/seo'
          }, {
            title: 'AI Trends',
            desc: 'Signals that inspire new automation factories.',
            href: '/reports/ai-trends'
          }, {
            title: 'Site Health',
            desc: 'A11y, performance and link integrity.',
            href: '/site-health'
          }, {
            title: 'Automation Hub',
            desc: 'Factories, agents and live workflows.',
            href: '/automation'
          }, {
            title: 'Newsroom',
            desc: 'Autonomous updates and product evolution.',
            href: '/newsroom'
          }, {
            title: 'Front Systems Hub',
            desc: 'Futuristic templates, effects and layouts.',
            href: '/main/front'
          }].map(card => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: card.href,
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-lg font-semibold",
              children: card.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mt-1 text-sm text-white/75",
              children: card.desc
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
              children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                "aria-hidden": true,
                children: "\u2192"
              })]
            })]
          }, card.title))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        id: "reports",
        className: "mx-auto max-w-7xl px-6 pb-16"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        id: "automations",
        className: "mx-auto max-w-7xl px-6 pb-20",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "text-2xl font-bold tracking-wide text-white/90 text-center",
          children: "New Intelligent Automations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [{
            title: 'SEO Audit Runner',
            href: '/.netlify/functions/seo-audit-runner'
          }, {
            title: 'AI Trends Radar',
            href: '/.netlify/functions/ai-trends-radar-runner'
          }, {
            title: 'Front Index Directory Builder',
            href: '/.netlify/functions/front-index-directory-builder'
          }, {
            title: 'Revenue Ideas Promoter',
            href: '/.netlify/functions/revenue-ideas-promoter'
          }].map(tool => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
            href: tool.href,
            className: "rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-base font-semibold text-white",
              children: tool.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mt-1 text-xs text-white/70",
              children: "Open \u2197"
            })]
          }, tool.title))
        })]
      })]
    }), showToTop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      onClick: () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }),
      className: "fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]",
      "aria-label": "Scroll to top",
      children: "\u2191 Top"
    })]
  });
}

/* AUTO-GENERATED: FRONT_ACTIONS_START */
/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
  className: "mx-auto max-w-7xl px-6 pb-14",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
    className: "text-center text-2xl font-bold tracking-wide text-white/90",
    children: "GitHub Actions \u2014 Live Automations"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
    className: "mx-auto mt-2 max-w-3xl text-center text-sm text-white/70",
    children: "Cloud\u2011native workflows that maintain, heal, and evolve the repo automatically."
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Actions Catalog & README"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: */5 * * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Autonomous Auto-Fix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: */30 * * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Auto-merge to main"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "On push / schedule"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Autonomous Meta Factory"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: */30 * * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "CI Self-Heal"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "On push / schedule"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "CI"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "On push / schedule"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Cloud Maintenance Automations"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: */30 * * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Cloud Marketing Automations"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: 0 */6 * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Continuous Improvement"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: 0 */6 * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Cursor Rules Auto Update"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: 17 */6 * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Dependency Maintenance"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: 17 5 * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: "https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml",
      target: "_blank",
      rel: "noopener",
      className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-base font-semibold",
        children: "Diverse Agent Matrix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-1 text-sm text-white/75",
        children: "Scheduled: 7 * * * *"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90",
        children: ["Open ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "aria-hidden": true,
          children: "\u2197"
        })]
      })]
    })]
  })]
});
/* AUTO-GENERATED: FRONT_ACTIONS_END */

/***/ }),

/***/ 93972:
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
/* harmony import */ var private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79742);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/main/front",
        pathname: "/main/front",
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
    userland: private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/main/front",
    config,
    userland: private_next_pages_main_front_index_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(93972)));
module.exports = __webpack_exports__;

})();