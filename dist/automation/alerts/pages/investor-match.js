"use strict";
(() => {
var exports = {};
exports.id = 244652;
exports.ids = [244652,890636];
exports.modules = {

/***/ 25856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvestorMatchPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_EnhancedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328453);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function InvestorMatchPage() {
  var [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // TODO: replace with real auth check

  var [startupName, setStartupName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [industry, setIndustry] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('AI Marketplaces');
  var [roundType, setRoundType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Seed');
  var [teamSize, setTeamSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [pitchSummary, setPitchSummary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [deckOrWebsite, setDeckOrWebsite] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [investors, setInvestors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Mock session check
    fetch('/api/auth-session').then(r => r.json()).then(d => setSession(Boolean(d === null || d === void 0 ? void 0 : d.authenticated))).catch(() => setSession(false));
    try {
      var fav = JSON.parse(localStorage.getItem('investorFavorites') || '[]');
      if (Array.isArray(fav)) setFavorites(fav);
    } catch (_unused) {}
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem('investorFavorites', JSON.stringify(favorites));
  }, [favorites]);
  var isFormValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return startupName && industry && roundType && pitchSummary;
  }, [startupName, industry, roundType, pitchSummary]);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (e) {
      e.preventDefault();
      if (!isFormValid) return;
      setLoading(true);
      setError(null);
      setInvestors([]);
      try {
        var res = yield fetch('/api/investor-match', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            startupName,
            industry,
            roundType,
            teamSize,
            pitchSummary,
            deckOrWebsite,
            location
          })
        });
        var data = yield res.json();
        if (!res.ok) throw new Error(data.error || 'Failed');
        setInvestors(data.investors || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    });
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var toggleFavorite = name => {
    setFavorites(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  };
  var generateEmail = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (inv) {
      try {
        var res = yield fetch('/api/generate-intro-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            startupName,
            investorName: inv.name,
            investorType: inv.type || 'Investor',
            highlights: [industry, roundType, teamSize ? "".concat(teamSize, " FTE") : ''],
            pitchSummary,
            website: deckOrWebsite
          })
        });
        var data = yield res.json();
        if (!res.ok) throw new Error(data.error || 'Failed');
        var blob = new Blob(["Subject: ".concat(data.subject, "\n\n").concat(data.body_markdown)], {
          type: 'text/markdown'
        });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "intro-".concat(inv.name.replace(/\s+/g, '-').toLowerCase(), ".md");
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        alert(e.message || 'Failed to generate email');
      }
    });
    return function generateEmail(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_layout_EnhancedLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
        children: "Investor Match \u2013 Zion"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "description",
        content: "GPT-based investor matchmaking for startups"
      })]
    }), !session ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "max-w-2xl mx-auto p-6 border rounded-xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        className: "text-2xl font-semibold mb-2",
        children: "Founder profile required"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "text-sm opacity-80",
        children: "Please sign in to access Investor Match. Investor contact details are protected behind a privacy wall."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          className: "inline-flex items-center px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black",
          href: "/auth",
          children: "Sign in"
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "grid gap-8 md:grid-cols-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "p-6 border rounded-2xl bg-white/60 dark:bg-white/5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
          className: "text-2xl font-semibold",
          children: "Investor Match"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-sm opacity-70 mb-4",
          children: "Find ideal VCs, angels, and funds by scope, location, and stage."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
          onSubmit: handleSubmit,
          className: "grid gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              className: "block text-sm mb-1",
              children: "Startup Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              className: "w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20",
              value: startupName,
              onChange: e => setStartupName(e.target.value),
              required: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              className: "block text-sm mb-1",
              children: "Industry"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              className: "w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20",
              value: industry,
              onChange: e => setIndustry(e.target.value),
              placeholder: "AI Marketplaces",
              required: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "grid grid-cols-2 gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                className: "block text-sm mb-1",
                children: "Round Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                className: "w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20",
                value: roundType,
                onChange: e => setRoundType(e.target.value),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                  children: "Pre-seed"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                  children: "Seed"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                  children: "Series A"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                  children: "Token Sale"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                className: "block text-sm mb-1",
                children: "Team size"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                className: "w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20",
                value: teamSize,
                onChange: e => setTeamSize(e.target.value),
                placeholder: "e.g., 6"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              className: "block text-sm mb-1",
              children: "Location"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              className: "w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20",
              value: location,
              onChange: e => setLocation(e.target.value),
              placeholder: "City, Country"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              className: "block text-sm mb-1",
              children: "Pitch summary"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
              className: "w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20 min-h-[120px]",
              value: pitchSummary,
              onChange: e => setPitchSummary(e.target.value),
              placeholder: "One-liner + traction, market, differentiator",
              required: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              className: "block text-sm mb-1",
              children: "Deck or website"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              className: "w-full px-3 py-2 rounded-md border bg-white/80 dark:bg-black/20",
              value: deckOrWebsite,
              onChange: e => setDeckOrWebsite(e.target.value),
              placeholder: "https://..."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            disabled: !isFormValid || loading,
            className: "inline-flex items-center justify-center px-4 py-2 rounded-md bg-black text-white disabled:opacity-50 dark:bg-white dark:text-black",
            children: loading ? 'Matching…' : 'Find Matches'
          }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-red-600 text-sm",
            children: error
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "space-y-4",
        children: [favorites.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "p-4 border rounded-xl bg-yellow-50 dark:bg-yellow-900/20 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "font-medium mb-1",
            children: "Saved to dashboard"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex flex-wrap gap-2",
            children: favorites.map(f => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "px-2 py-0.5 rounded-md border",
              children: f
            }, f))
          })]
        }), investors.length === 0 && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "p-6 border rounded-2xl text-sm opacity-70",
          children: "No results yet. Submit the form to see recommendations."
        }), investors.map(inv => {
          var _inv$stages, _inv$notable_investme;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            className: "p-5 border rounded-2xl bg-white/60 dark:bg-white/5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-start justify-between gap-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-lg font-semibold",
                  children: inv.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "text-sm opacity-70 flex gap-2 flex-wrap",
                  children: [inv.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "px-2 py-0.5 rounded-md border",
                    children: inv.type
                  }), (_inv$stages = inv.stages) !== null && _inv$stages !== void 0 && _inv$stages.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "px-2 py-0.5 rounded-md border",
                    children: inv.stages.join(', ')
                  }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                    className: "px-2 py-0.5 rounded-md border",
                    children: ["Score: ", Math.round(inv.relevance_score)]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                onClick: () => toggleFavorite(inv.name),
                className: "px-3 py-1 rounded-md border text-sm ".concat(favorites.includes(inv.name) ? 'bg-yellow-100 dark:bg-yellow-900/30' : ''),
                children: favorites.includes(inv.name) ? 'Saved' : 'Save'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-sm mt-2",
              children: inv.why_fit
            }), (_inv$notable_investme = inv.notable_investments) !== null && _inv$notable_investme !== void 0 && _inv$notable_investme.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "text-sm mt-2 opacity-80",
              children: ["Notable investments: ", inv.notable_investments.join(', ')]
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-wrap items-center gap-3 mt-3 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                className: "underline",
                href: inv.website,
                target: "_blank",
                rel: "noreferrer",
                children: "Website"
              }), inv.contact ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "opacity-70",
                children: "Contact hidden \u2014 available via intro"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "opacity-70",
                children: "Contact not publicly listed"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex gap-2 mt-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                onClick: () => alert('Intro request sent (mock).'),
                className: "px-3 py-2 rounded-md border text-sm",
                children: "Contact via Intro"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                onClick: () => generateEmail(inv),
                className: "px-3 py-2 rounded-md border text-sm",
                children: "Generate Custom Pitch Email"
              })]
            })]
          }, inv.name);
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 450083:
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
/* harmony import */ var private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25856);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/investor-match",
        pathname: "/investor-match",
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
    userland: private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/investor-match",
    config,
    userland: private_next_pages_investor_match_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(450083)));
module.exports = __webpack_exports__;

})();