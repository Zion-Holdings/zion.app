"use strict";
(() => {
var exports = {};
exports.id = 173888;
exports.ids = [173888,890636];
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

/***/ 248696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalaryInsightsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_salary_InsightCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(805622);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function SalaryInsightsPage() {
  var [roleTitle, setRoleTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Senior AI Engineer');
  var [skills, setSkills] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('OpenAI, RAG, TypeScript');
  var [region, setRegion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Remote, Global');
  var [experienceLevel, setExperienceLevel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Senior');
  var [remote, setRemote] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var [employmentType, setEmploymentType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('contract');
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Lightweight login check via Supabase client if available; otherwise public mode
    (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      try {
        var {
          supabase
        } = yield Promise.all(/* import() */[__webpack_require__.e(618096), __webpack_require__.e(472076)]).then(__webpack_require__.bind(__webpack_require__, 45393));
        var user = yield supabase.auth.getUser();
        setIsLoggedIn(!!user.data.user);
      } catch (_unused) {
        setIsLoggedIn(false);
      }
    })();
  }, []);
  function fetchInsights() {
    return _fetchInsights.apply(this, arguments);
  }
  function _fetchInsights() {
    _fetchInsights = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      setLoading(true);
      setError(null);
      try {
        var res = yield fetch('/api/salary-insights', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            roleTitle,
            skills: skills.split(',').map(s => s.trim()).filter(Boolean),
            region,
            experienceLevel,
            remote,
            employmentType
          })
        });
        if (!res.ok) throw new Error('Failed to fetch insights');
        var json = yield res.json();
        setData(json);
      } catch (e) {
        setError(e.message || 'Unexpected error');
      } finally {
        setLoading(false);
      }
    });
    return _fetchInsights.apply(this, arguments);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function saveInsight() {
    var payload = {
      createdAt: new Date().toISOString(),
      input: {
        roleTitle,
        skills,
        region,
        experienceLevel,
        remote,
        employmentType
      },
      output: data
    };
    (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      try {
        var {
          supabase
        } = yield Promise.all(/* import() */[__webpack_require__.e(618096), __webpack_require__.e(472076)]).then(__webpack_require__.bind(__webpack_require__, 45393));
        var user = yield supabase.auth.getUser();
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
          yield supabase.from('salary_insights').insert({
            user_id: user.data.user.id,
            payload
          });
          alert('Insight saved to your profile');
          return;
        }
      } catch (_unused2) {
        // fall back
      }
      try {
        var key = 'zion.salary-insights.history';
        var history = JSON.parse(localStorage.getItem(key) || '[]');
        history.unshift(payload);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50)));
        alert('Insight saved locally');
      } catch (_unused3) {}
    })();
  }
  var donutData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!data) return [];
    var min = data.minHourlyUsd;
    var median = data.medianHourlyUsd;
    var max = data.maxHourlyUsd;
    var lower = Math.max(0, median - min);
    var upper = Math.max(0, max - median);
    return [{
      label: 'Below Median',
      value: lower || 1
    }, {
      label: 'Median',
      value: median || 1
    }, {
      label: 'Above Median',
      value: upper || 1
    }];
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-2xl font-semibold",
          children: "Salary Insights"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "opacity-90",
          children: "Benchmark rates and set competitive offers in real-time."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "lg:col-span-1 space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "font-medium mb-3",
            children: "Filters"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            className: "block text-sm mb-2",
            children: "Role title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            value: roleTitle,
            onChange: e => setRoleTitle(e.target.value),
            className: "w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm",
            placeholder: "e.g., Senior AI Engineer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            className: "block text-sm mt-3 mb-2",
            children: "Skills"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            value: skills,
            onChange: e => setSkills(e.target.value),
            className: "w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm",
            placeholder: "Comma-separated"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            className: "block text-sm mt-3 mb-2",
            children: "Region"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            value: region,
            onChange: e => setRegion(e.target.value),
            className: "w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm",
            placeholder: "City, Country"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "grid grid-cols-2 gap-3 mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                className: "block text-sm mb-2",
                children: "Experience"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
                value: experienceLevel,
                onChange: e => setExperienceLevel(e.target.value),
                className: "w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "Junior"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "Mid"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "Senior"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "Lead"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                className: "block text-sm mb-2",
                children: "Employment"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
                value: employmentType,
                onChange: e => setEmploymentType(e.target.value),
                className: "w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  value: "contract",
                  children: "Contract"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  value: "freelance",
                  children: "Freelance"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  value: "full-time",
                  children: "Full-time"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center gap-2 mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              id: "remote",
              type: "checkbox",
              checked: remote,
              onChange: e => setRemote(e.target.checked)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "remote",
              className: "text-sm",
              children: "Remote role"
            })]
          }), !isLoggedIn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "mt-3 text-xs text-gray-500",
            children: "Advanced filters are available when you sign in."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: fetchInsights,
            disabled: loading,
            className: "mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50",
            children: loading ? 'Calculating…' : 'Update Insights'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "font-medium mb-2",
            children: "Actions"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: saveInsight,
              className: "rounded border border-gray-300 dark:border-gray-700 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900",
              children: "Save insight"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: () => alert('This would prefill a job posting flow.'),
              className: "rounded bg-emerald-600 text-white py-2 text-sm hover:bg-emerald-700",
              children: "Use in Job Post"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: () => alert('This would suggest a resume rate optimization.'),
              className: "rounded bg-blue-600 text-white py-2 text-sm hover:bg-blue-700",
              children: "Optimize Resume Rate"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "lg:col-span-2 space-y-6",
        children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "rounded border border-red-300 bg-red-50 text-red-800 p-3 text-sm",
          children: error
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xs text-gray-500",
              children: "Recommended Hourly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xl font-semibold",
              children: data ? "$".concat(data.recommendedHourlyUsd) : '—'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xs text-gray-500",
              children: "Recommended Monthly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xl font-semibold",
              children: data ? "$".concat(data.recommendedMonthlyUsd) : '—'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xs text-gray-500",
              children: "Median"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xl font-semibold",
              children: data ? "$".concat(data.medianHourlyUsd) : '—'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xs text-gray-500",
              children: "Confidence"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xl font-semibold",
              children: data ? "".concat(Math.round(data.confidence * 100), "%") : '—'
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "font-medium mb-3",
            children: "Trend: Last 12 months"
          }), data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_salary_InsightCharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {
            points: data.trendMonthly
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "font-medium mb-3",
              children: "Regional comparison"
            }), data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_salary_InsightCharts__WEBPACK_IMPORTED_MODULE_1__.BarChart, {
              data: data.regionalComparison.map(r => ({
                label: r.region,
                value: r.medianHourlyUsd
              }))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded"
            }), data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
              className: "w-full mt-3 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                  className: "text-left text-xs text-gray-500",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "py-1",
                    children: "Region"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "py-1",
                    children: "Median (USD/hr)"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
                children: data.regionalComparison.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                  className: "border-t border-gray-100 dark:border-gray-900",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "py-1",
                    children: r.region
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
                    className: "py-1",
                    children: ["$", r.medianHourlyUsd]
                  })]
                }, r.region))
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "font-medium mb-3",
              children: "Distribution"
            }), data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_salary_InsightCharts__WEBPACK_IMPORTED_MODULE_1__.DonutChart, {
                slices: donutData.map((d, i) => ({
                  label: d.label,
                  value: d.value
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "flex gap-2 flex-wrap justify-center text-xs",
                children: donutData.map(d => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0.5",
                  children: d.label
                }, d.label))
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded"
            })]
          })]
        }), (data === null || data === void 0 ? void 0 : data.gptRecommendation) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "font-medium mb-2",
            children: "GPT Recommendation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap",
            children: data.gptRecommendation
          })]
        }), data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "rounded-lg border border-gray-200 dark:border-gray-800 p-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "font-medium mb-3",
            children: "Signals"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex gap-2 flex-wrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs",
              children: ["Range: $", data.minHourlyUsd, " - $", data.maxHourlyUsd, " / hr"]
            }), data.tags.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs",
              children: t
            }, t))]
          })]
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

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 395129:
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
/* harmony import */ var private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(248696);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/salary-insights",
        pathname: "/salary-insights",
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
    userland: private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/salary-insights",
    config,
    userland: private_next_pages_salary_insights_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 805622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChart: () => (/* binding */ BarChart),
/* harmony export */   DonutChart: () => (/* binding */ DonutChart),
/* harmony export */   LineChart: () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function LineChart(_ref) {
  var {
    points,
    height = 160
  } = _ref;
  var width = Math.max(320, points.length * 40);
  var padding = 24;
  var values = points.map(p => p.value);
  var min = Math.min(...values);
  var max = Math.max(...values);
  var range = max - min || 1;
  var xStep = (width - padding * 2) / Math.max(1, points.length - 1);
  var toX = i => padding + i * xStep;
  var toY = v => padding + (height - padding * 2) * (1 - (v - min) / range);
  var pathD = points.map((p, i) => "".concat(i === 0 ? 'M' : 'L', " ").concat(toX(i), " ").concat(toY(p.value))).join(' ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "w-full overflow-x-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: width,
      height: height,
      className: "text-blue-500",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("linearGradient", {
          id: "lineGradient",
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("stop", {
            offset: "0%",
            stopColor: "#60a5fa",
            stopOpacity: "0.35"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("stop", {
            offset: "100%",
            stopColor: "#60a5fa",
            stopOpacity: "0"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: pathD,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "".concat(pathD, " L ").concat(toX(points.length - 1), " ").concat(height - padding, " L ").concat(toX(0), " ").concat(height - padding, " Z"),
        fill: "url(#lineGradient)",
        stroke: "none"
      }), points.map((p, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
        cx: toX(i),
        cy: toY(p.value),
        r: 3,
        fill: "#3b82f6"
      }, p.label)), points.map((p, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
        x: toX(i),
        y: height - 4,
        textAnchor: "middle",
        className: "fill-gray-500 text-[10px]",
        children: p.label
      }, "x-".concat(p.label)))]
    })
  });
}
function BarChart(_ref2) {
  var {
    data,
    height = 180
  } = _ref2;
  var width = Math.max(320, data.length * 60);
  var padding = 24;
  var values = data.map(d => d.value);
  var max = Math.max(...values, 1);
  var barWidth = (width - padding * 2) / Math.max(1, data.length);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "w-full overflow-x-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: width,
      height: height,
      children: data.map((d, i) => {
        var barHeight = (height - padding * 2) * d.value / max;
        var x = padding + i * barWidth + 8;
        var y = height - padding - barHeight;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
            x: x,
            y: y,
            width: barWidth - 16,
            height: barHeight,
            rx: 6,
            className: "fill-emerald-500/80"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
            x: x + (barWidth - 16) / 2,
            y: height - 6,
            textAnchor: "middle",
            className: "fill-gray-500 text-[10px]",
            children: d.label
          })]
        }, d.label);
      })
    })
  });
}
function DonutChart(_ref3) {
  var {
    slices,
    size = 160
  } = _ref3;
  var total = slices.reduce((sum, s) => sum + s.value, 0) || 1;
  var radius = size / 2;
  var thickness = 18;
  var cumulative = 0;
  var colors = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#a78bfa'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    className: "mx-auto",
    children: [slices.map((s, i) => {
      var startAngle = cumulative / total * 2 * Math.PI;
      cumulative += s.value;
      var endAngle = cumulative / total * 2 * Math.PI;
      var largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
      var sx = radius + radius * Math.cos(startAngle);
      var sy = radius + radius * Math.sin(startAngle);
      var ex = radius + radius * Math.cos(endAngle);
      var ey = radius + radius * Math.sin(endAngle);
      var pathData = "M ".concat(sx, " ").concat(sy, " A ").concat(radius, " ").concat(radius, " 0 ").concat(largeArc, " 1 ").concat(ex, " ").concat(ey, " L ").concat(radius, " ").concat(radius, " Z");
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: pathData,
        fill: s.color || colors[i % colors.length],
        opacity: 0.85
      }, s.label);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: radius,
      cy: radius,
      r: radius - thickness,
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
      x: radius,
      y: radius,
      textAnchor: "middle",
      dominantBaseline: "middle",
      className: "fill-gray-700 text-xs",
      children: "Distribution"
    })]
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

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(395129)));
module.exports = __webpack_exports__;

})();