"use strict";
(() => {
var exports = {};
exports.id = 343584;
exports.ids = [343584,890636];
exports.modules = {

/***/ 11997:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 185164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TalentPortfolioBuilder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(860076);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(350014);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(971238);
/* harmony import */ var _utils_api_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(874304);
/* harmony import */ var _data_talent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(609030);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _excluded = ["children", "variant"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






function SectionCard(_ref) {
  var {
    title,
    children
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-700 rounded-xl p-4 shadow-sm",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex items-center justify-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "text-lg font-semibold",
        children: title
      })
    }), children]
  });
}
function TextInput(props) {
  var _props$className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", _objectSpread(_objectSpread({}, props), {}, {
    className: "w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 ".concat((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : "")
  }));
}
function TextArea(props) {
  var _props$className2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", _objectSpread(_objectSpread({}, props), {}, {
    className: "w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 ".concat((_props$className2 = props.className) !== null && _props$className2 !== void 0 ? _props$className2 : "")
  }));
}
function Button(_ref2) {
  var {
      children,
      variant = "primary"
    } = _ref2,
    rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, _excluded);
  var base = "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium";
  var styles = variant === "primary" ? "bg-indigo-600 text-white hover:bg-indigo-700" : variant === "ghost" ? "bg-transparent text-indigo-600 hover:bg-indigo-50" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", _objectSpread(_objectSpread({}, rest), {}, {
    className: "".concat(base, " ").concat(styles, " disabled:opacity-50"),
    children: children
  }));
}
function aiAssist(_x, _x2, _x3) {
  return _aiAssist.apply(this, arguments);
}
function _aiAssist() {
  _aiAssist = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(function* (action, text, context) {
    var res = yield fetch("/api/ai/portfolio-assist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action,
        text,
        context
      })
    });
    return yield res.json();
  });
  return _aiAssist.apply(this, arguments);
}
function WizardProgress(_ref3) {
  var {
    step,
    total
  } = _ref3;
  var pct = Math.round((step + 1) / total * 100);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex justify-between text-xs mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        children: "Progress"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        children: [pct, "%"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "h-2 bg-indigo-600 rounded-full",
        style: {
          width: "".concat(pct, "%")
        }
      })
    })]
  });
}
function ResumePreview(_ref4) {
  var {
    version
  } = _ref4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "bg-white shadow print:shadow-none p-6 rounded-xl border border-zinc-200 text-zinc-900 print:bg-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "mb-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        className: "text-2xl font-bold",
        children: version.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "text-sm whitespace-pre-line mb-4",
      children: version.personalSummary
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "font-semibold mb-2",
          children: "Skills"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "flex flex-wrap gap-1 mb-4",
          children: version.skills.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "text-xs bg-zinc-100 px-2 py-1 rounded-md border border-zinc-200",
            children: s
          }, s))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "font-semibold mb-2",
          children: "Technologies"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "flex flex-wrap gap-1 mb-4",
          children: version.technologies.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "text-xs bg-zinc-100 px-2 py-1 rounded-md border border-zinc-200",
            children: t
          }, t))
        }), version.certifications.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "font-semibold mb-2",
            children: "Certifications"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
            className: "list-disc list-inside text-sm mb-4",
            children: version.certifications.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
              children: c
            }, c))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "font-semibold mb-2",
          children: "Work Experience"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "space-y-3",
          children: version.workHistory.map(w => {
            var _w$bulletPoints;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "border border-zinc-200 rounded-md p-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "font-medium",
                    children: [w.role, " \u2022 ", w.company]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "text-xs text-zinc-600",
                    children: [w.startDate, " \u2013 ", w.endDate]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-sm mt-2 whitespace-pre-line",
                children: w.description
              }), ((_w$bulletPoints = w.bulletPoints) === null || _w$bulletPoints === void 0 ? void 0 : _w$bulletPoints.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                className: "list-disc list-inside text-sm mt-2",
                children: w.bulletPoints.map((b, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                  children: b
                }, idx))
              })]
            }, w.id);
          })
        })]
      })]
    }), version.education.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "mt-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "font-semibold mb-2",
        children: "Education"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "space-y-2",
        children: version.education.map(e => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "border border-zinc-200 rounded-md p-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "font-medium",
            children: [e.degree, " \u2022 ", e.school]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-xs text-zinc-600",
            children: [e.startDate, " \u2013 ", e.endDate]
          }), e.details && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-sm mt-2 whitespace-pre-line",
            children: e.details
          })]
        }, e.id))
      })]
    }), version.projects.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "mt-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "font-semibold mb-2",
        children: "Projects"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: version.projects.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "border border-zinc-200 rounded-md p-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "font-medium",
            children: p.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-sm mt-1 whitespace-pre-line",
            children: p.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex flex-wrap gap-1 mt-2",
            children: p.technologies.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-xs bg-zinc-100 px-2 py-1 rounded-md border border-zinc-200",
              children: t
            }, t))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-xs text-indigo-700 mt-2 space-x-3",
            children: [p.media.githubUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              className: "underline",
              href: p.media.githubUrl,
              target: "_blank",
              rel: "noreferrer",
              children: "GitHub"
            }), p.media.demoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              className: "underline",
              href: p.media.demoUrl,
              target: "_blank",
              rel: "noreferrer",
              children: "Demo"
            }), p.media.pdfUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              className: "underline",
              href: p.media.pdfUrl,
              target: "_blank",
              rel: "noreferrer",
              children: "PDF"
            })]
          })]
        }, p.id))
      })]
    })]
  });
}
function TalentPortfolioBuilder() {
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  var [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  var steps = ["Personal Summary", "Work History", "Education", "Skills & Technologies", "Certifications", "Projects", "Preview"];
  var [portfolio, setPortfolio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    versions: [],
    activeVersionId: undefined
  });
  var activeVersion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _portfolio$versions$f;
    return (_portfolio$versions$f = portfolio.versions.find(v => v.id === portfolio.activeVersionId)) !== null && _portfolio$versions$f !== void 0 ? _portfolio$versions$f : null;
  }, [portfolio]);
  var [autoGenerate, setAutoGenerate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(function* () {
      var existing = yield (0,_utils_api_portfolio__WEBPACK_IMPORTED_MODULE_4__.loadPortfolio)();
      if (existing) {
        setPortfolio(existing);
      } else {
        var initialVersion = {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
          name: "General",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          personalSummary: "",
          skills: [],
          technologies: [],
          certifications: [],
          workHistory: [],
          education: [],
          projects: []
        };
        setPortfolio({
          versions: [initialVersion],
          activeVersionId: initialVersion.id
        });
      }
      setLoading(false);
    })();
  }, []);
  var updateActive = updater => {
    setPortfolio(prev => {
      var versions = prev.versions.map(v => v.id === prev.activeVersionId ? updater(_objectSpread({}, v)) : v);
      var next = _objectSpread(_objectSpread({}, prev), {}, {
        versions
      });
      (0,_utils_api_portfolio__WEBPACK_IMPORTED_MODULE_4__.savePortfolio)(next);
      return next;
    });
  };
  var handlePrint = () => {
    window.print();
  };
  var importFromTalentProfile = () => {
    var profile = _data_talent__WEBPACK_IMPORTED_MODULE_5__.TALENT_PROFILES[0];
    if (!profile || !activeVersion) return;
    updateActive(v => {
      var _v$skills, _v$technologies;
      return _objectSpread(_objectSpread({}, v), {}, {
        personalSummary: profile.bio,
        skills: Array.from(new Set([...((_v$skills = v.skills) !== null && _v$skills !== void 0 ? _v$skills : []), ...profile.skills])),
        technologies: Array.from(new Set([...((_v$technologies = v.technologies) !== null && _v$technologies !== void 0 ? _v$technologies : []), ...profile.skills])),
        updatedAt: new Date().toISOString()
      });
    });
  };
  if (loading || !activeVersion) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "p-6",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "text-sm text-zinc-500",
      children: "Loading..."
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "min-h-screen p-4 md:p-8 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-950 dark:to-zinc-900",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("title", {
        children: "Zion | Talent Portfolio"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "max-w-6xl mx-auto space-y-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
              className: "text-2xl font-bold",
              children: "Talent Portfolio & Resume Builder"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-sm text-zinc-600",
              children: "Create AI-assisted resumes and showcase projects."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-center gap-2 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "Version:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("select", {
              className: "border border-zinc-300 dark:border-zinc-700 rounded-md px-2 py-1 bg-white dark:bg-zinc-800",
              value: portfolio.activeVersionId,
              onChange: e => setPortfolio(prev => {
                var next = _objectSpread(_objectSpread({}, prev), {}, {
                  activeVersionId: e.target.value
                });
                (0,_utils_api_portfolio__WEBPACK_IMPORTED_MODULE_4__.savePortfolio)(next);
                return next;
              }),
              children: portfolio.versions.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: v.id,
                children: v.name
              }, v.id))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              variant: "secondary",
              onClick: () => {
                var newVersion = {
                  id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
                  name: "New Version ".concat(portfolio.versions.length + 1),
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                  personalSummary: "",
                  skills: [],
                  technologies: [],
                  certifications: [],
                  workHistory: [],
                  education: [],
                  projects: []
                };
                setPortfolio(prev => {
                  var next = _objectSpread(_objectSpread({}, prev), {}, {
                    versions: [...prev.versions, newVersion],
                    activeVersionId: newVersion.id
                  });
                  (0,_utils_api_portfolio__WEBPACK_IMPORTED_MODULE_4__.savePortfolio)(next);
                  return next;
                });
              },
              children: "New"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "w-64",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(WizardProgress, {
            step: step,
            total: steps.length
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
          className: "flex items-center gap-2 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            type: "checkbox",
            checked: autoGenerate,
            onChange: e => setAutoGenerate(e.target.checked)
          }), "Auto-generate from Talent Profile"]
        }), autoGenerate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
          onClick: importFromTalentProfile,
          variant: "secondary",
          children: "Import Now"
        })]
      }), step === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SectionCard, {
        title: "Personal Summary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextArea, {
            rows: 6,
            placeholder: "Write a concise, compelling summary...",
            value: activeVersion.personalSummary,
            onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
              personalSummary: e.target.value
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              onClick: /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(function* () {
                var res = yield aiAssist("improve-summary", activeVersion.personalSummary);
                if (res.ok && typeof res.result === "string") updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                  personalSummary: res.result
                }));
              }),
              children: "AI Improve"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "flex-1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              variant: "ghost",
              onClick: () => setStep(1),
              children: "Next"
            })]
          })]
        })
      }), step === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SectionCard, {
        title: "Work History",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "space-y-4",
          children: [activeVersion.workHistory.map(w => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "border border-zinc-200 dark:border-zinc-700 rounded-md p-3 space-y-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                placeholder: "Company",
                value: w.company,
                onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                  workHistory: v.workHistory.map(x => x.id === w.id ? _objectSpread(_objectSpread({}, x), {}, {
                    company: e.target.value
                  }) : x)
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                placeholder: "Role",
                value: w.role,
                onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                  workHistory: v.workHistory.map(x => x.id === w.id ? _objectSpread(_objectSpread({}, x), {}, {
                    role: e.target.value
                  }) : x)
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                placeholder: "Start (YYYY-MM)",
                value: w.startDate,
                onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                  workHistory: v.workHistory.map(x => x.id === w.id ? _objectSpread(_objectSpread({}, x), {}, {
                    startDate: e.target.value
                  }) : x)
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                placeholder: "End (YYYY-MM or Present)",
                value: w.endDate,
                onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                  workHistory: v.workHistory.map(x => x.id === w.id ? _objectSpread(_objectSpread({}, x), {}, {
                    endDate: e.target.value
                  }) : x)
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextArea, {
              rows: 4,
              placeholder: "Description",
              value: w.description,
              onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                workHistory: v.workHistory.map(x => x.id === w.id ? _objectSpread(_objectSpread({}, x), {}, {
                  description: e.target.value
                }) : x)
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
                onClick: /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(function* () {
                  var res = yield aiAssist("format-description", w.description);
                  if (res.ok && typeof res.result === "string") updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    workHistory: v.workHistory.map(x => x.id === w.id ? _objectSpread(_objectSpread({}, x), {}, {
                      description: res.result
                    }) : x)
                  }));
                }),
                children: "AI Format"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
                onClick: /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(function* () {
                  var res = yield aiAssist("suggest-bullets", w.description, {
                    company: w.company,
                    role: w.role
                  });
                  if (res.ok) {
                    var bullets = Array.isArray(res.result) ? res.result : String(res.result || "").split("\n").filter(Boolean);
                    updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                      workHistory: v.workHistory.map(x => x.id === w.id ? _objectSpread(_objectSpread({}, x), {}, {
                        bulletPoints: bullets
                      }) : x)
                    }));
                  }
                }),
                children: "AI Bullets"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "flex-1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
                variant: "ghost",
                onClick: () => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                  workHistory: v.workHistory.filter(x => x.id !== w.id)
                })),
                children: "Remove"
              })]
            })]
          }, w.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            onClick: () => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
              workHistory: [...v.workHistory, {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
                company: "",
                role: "",
                startDate: "",
                endDate: "",
                description: "",
                bulletPoints: []
              }]
            })),
            children: "Add Role"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              variant: "ghost",
              onClick: () => setStep(2),
              children: "Next"
            })
          })]
        })
      }), step === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SectionCard, {
        title: "Education",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "space-y-4",
          children: [activeVersion.education.map(e => {
            var _e$details;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "border border-zinc-200 dark:border-zinc-700 rounded-md p-3 space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "School",
                  value: e.school,
                  onChange: ev => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    education: v.education.map(x => x.id === e.id ? _objectSpread(_objectSpread({}, x), {}, {
                      school: ev.target.value
                    }) : x)
                  }))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "Degree",
                  value: e.degree,
                  onChange: ev => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    education: v.education.map(x => x.id === e.id ? _objectSpread(_objectSpread({}, x), {}, {
                      degree: ev.target.value
                    }) : x)
                  }))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "Start (YYYY-MM)",
                  value: e.startDate,
                  onChange: ev => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    education: v.education.map(x => x.id === e.id ? _objectSpread(_objectSpread({}, x), {}, {
                      startDate: ev.target.value
                    }) : x)
                  }))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "End (YYYY-MM)",
                  value: e.endDate,
                  onChange: ev => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    education: v.education.map(x => x.id === e.id ? _objectSpread(_objectSpread({}, x), {}, {
                      endDate: ev.target.value
                    }) : x)
                  }))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "Details",
                  value: (_e$details = e.details) !== null && _e$details !== void 0 ? _e$details : "",
                  onChange: ev => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    education: v.education.map(x => x.id === e.id ? _objectSpread(_objectSpread({}, x), {}, {
                      details: ev.target.value
                    }) : x)
                  }))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
                  variant: "ghost",
                  onClick: () => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    education: v.education.filter(x => x.id !== e.id)
                  })),
                  children: "Remove"
                })
              })]
            }, e.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            onClick: () => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
              education: [...v.education, {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
                details: ""
              }]
            })),
            children: "Add Education"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              variant: "ghost",
              onClick: () => setStep(3),
              children: "Next"
            })
          })]
        })
      }), step === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(SectionCard, {
        title: "Skills & Technologies",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
              className: "text-sm",
              children: "Skills (comma-separated)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
              value: activeVersion.skills.join(", "),
              onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
              }))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
              className: "text-sm",
              children: "Technologies (comma-separated)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
              value: activeVersion.technologies.join(", "),
              onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                technologies: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
              }))
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "flex justify-end mt-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            variant: "ghost",
            onClick: () => setStep(4),
            children: "Next"
          })
        })]
      }), step === 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SectionCard, {
        title: "Certifications",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextArea, {
            rows: 3,
            placeholder: "Comma-separated certifications",
            value: activeVersion.certifications.join(", "),
            onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
              certifications: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              variant: "ghost",
              onClick: () => setStep(5),
              children: "Next"
            })
          })]
        })
      }), step === 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SectionCard, {
        title: "Projects",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "space-y-4",
          children: [activeVersion.projects.map(p => {
            var _p$media$imageUrl, _p$media$pdfUrl, _p$media$githubUrl, _p$media$demoUrl;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "border border-zinc-200 dark:border-zinc-700 rounded-md p-3 space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "Title",
                  value: p.title,
                  onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                      title: e.target.value
                    }) : x)
                  }))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "Technologies (comma-separated)",
                  value: p.technologies.join(", "),
                  onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                      technologies: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
                    }) : x)
                  }))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextArea, {
                rows: 4,
                placeholder: "Description",
                value: p.description,
                onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                  projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                    description: e.target.value
                  }) : x)
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "Image URL",
                  value: (_p$media$imageUrl = p.media.imageUrl) !== null && _p$media$imageUrl !== void 0 ? _p$media$imageUrl : "",
                  onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                      media: _objectSpread(_objectSpread({}, x.media), {}, {
                        imageUrl: e.target.value
                      })
                    }) : x)
                  }))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "PDF URL",
                  value: (_p$media$pdfUrl = p.media.pdfUrl) !== null && _p$media$pdfUrl !== void 0 ? _p$media$pdfUrl : "",
                  onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                      media: _objectSpread(_objectSpread({}, x.media), {}, {
                        pdfUrl: e.target.value
                      })
                    }) : x)
                  }))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "GitHub URL",
                  value: (_p$media$githubUrl = p.media.githubUrl) !== null && _p$media$githubUrl !== void 0 ? _p$media$githubUrl : "",
                  onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                      media: _objectSpread(_objectSpread({}, x.media), {}, {
                        githubUrl: e.target.value
                      })
                    }) : x)
                  }))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
                  placeholder: "Demo URL",
                  value: (_p$media$demoUrl = p.media.demoUrl) !== null && _p$media$demoUrl !== void 0 ? _p$media$demoUrl : "",
                  onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                      media: _objectSpread(_objectSpread({}, x.media), {}, {
                        demoUrl: e.target.value
                      })
                    }) : x)
                  }))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex justify-end gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
                  onClick: /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(function* () {
                    var res = yield aiAssist("format-description", p.description);
                    if (res.ok && typeof res.result === "string") updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                      projects: v.projects.map(x => x.id === p.id ? _objectSpread(_objectSpread({}, x), {}, {
                        description: res.result
                      }) : x)
                    }));
                  }),
                  children: "AI Improve"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
                  variant: "ghost",
                  onClick: () => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
                    projects: v.projects.filter(x => x.id !== p.id)
                  })),
                  children: "Remove"
                })]
              })]
            }, p.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            onClick: () => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
              projects: [...v.projects, {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
                title: "",
                description: "",
                technologies: [],
                media: {}
              }]
            })),
            children: "Add Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              variant: "ghost",
              onClick: () => setStep(6),
              children: "Next"
            })
          })]
        })
      }), step === 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(SectionCard, {
        title: "Preview & Export",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-2 mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            onClick: handlePrint,
            children: "Download PDF / Print"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            variant: "secondary",
            onClick: () => {
              var _TALENT_PROFILES$0$sl, _TALENT_PROFILES$;
              return window.open("/talent/".concat((_TALENT_PROFILES$0$sl = (_TALENT_PROFILES$ = _data_talent__WEBPACK_IMPORTED_MODULE_5__.TALENT_PROFILES[0]) === null || _TALENT_PROFILES$ === void 0 ? void 0 : _TALENT_PROFILES$.slug) !== null && _TALENT_PROFILES$0$sl !== void 0 ? _TALENT_PROFILES$0$sl : "public"), "_blank");
            },
            children: "View Public Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex-1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextInput, {
            placeholder: "Version name (e.g., AI Engineer)",
            value: activeVersion.name,
            onChange: e => updateActive(v => _objectSpread(_objectSpread({}, v), {}, {
              name: e.target.value
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ResumePreview, {
          version: activeVersion
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            variant: "secondary",
            onClick: () => {
              var newVersion = _objectSpread(_objectSpread({}, activeVersion), {}, {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
                name: "".concat(activeVersion.name, " Copy"),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              });
              setPortfolio(prev => {
                var next = _objectSpread(_objectSpread({}, prev), {}, {
                  versions: [...prev.versions, newVersion],
                  activeVersionId: newVersion.id
                });
                (0,_utils_api_portfolio__WEBPACK_IMPORTED_MODULE_4__.savePortfolio)(next);
                return next;
              });
            },
            children: "Save as New Version"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "text-xs text-zinc-500 self-center",
            children: "Multiple versions for different roles"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            variant: "ghost",
            disabled: step === 0,
            onClick: () => setStep(s => Math.max(0, s - 1)),
            children: "Back"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
            variant: "primary",
            disabled: step === steps.length - 1,
            onClick: () => setStep(s => Math.min(steps.length - 1, s + 1)),
            children: "Continue"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
      jsx: true,
      global: true,
      children: "\n        @media print {\n          body { background: white !important; }\n          nav, header, footer, .no-print { display: none !important; }\n        }\n      "
    })]
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 730111:
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
/* harmony import */ var private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(185164);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/dashboard/talent/portfolio",
        pathname: "/dashboard/talent/portfolio",
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
    userland: private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/dashboard/talent/portfolio",
    config,
    userland: private_next_pages_dashboard_talent_portfolio_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 874304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPortfolio: () => (/* binding */ loadPortfolio),
/* harmony export */   savePortfolio: () => (/* binding */ savePortfolio)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(860076);
/* harmony import */ var _supabase_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45393);


var STORAGE_KEY = "zion.talent.portfolio";
function loadPortfolio(_x) {
  return _loadPortfolio.apply(this, arguments);
}
function _loadPortfolio() {
  _loadPortfolio = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (talentSlug) {
    try {
      if (talentSlug) {
        var {
          data,
          error
        } = yield _supabase_client__WEBPACK_IMPORTED_MODULE_0__.supabase.from("talent_portfolios").select("data").eq("talent_slug", talentSlug).single();
        if (!error && data !== null && data !== void 0 && data.data) return data.data;
      }
    } catch (_) {}
    try {
      var raw =  false ? 0 : null;
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return null;
  });
  return _loadPortfolio.apply(this, arguments);
}
function savePortfolio(_x2) {
  return _savePortfolio.apply(this, arguments);
}
function _savePortfolio() {
  _savePortfolio = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (portfolio) {
    try {
      if (false) {}
    } catch (_) {}

    // attempt Supabase save (best-effort)
    try {
      var _portfolio$talentSlug;
      var {
        error
      } = yield _supabase_client__WEBPACK_IMPORTED_MODULE_0__.supabase.from("talent_portfolios").upsert({
        talent_slug: (_portfolio$talentSlug = portfolio.talentSlug) !== null && _portfolio$talentSlug !== void 0 ? _portfolio$talentSlug : null,
        data: portfolio,
        updated_at: new Date().toISOString()
      }, {
        onConflict: "talent_slug"
      });
      if (error) {
        // ignore for now; localStorage is fallback
      }
    } catch (_) {}
  });
  return _savePortfolio.apply(this, arguments);
}

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(730111)));
module.exports = __webpack_exports__;

})();