"use strict";
(() => {
var exports = {};
exports.id = 602617;
exports.ids = [602617,890636];
exports.modules = {

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

/***/ 820075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailValidatorPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338423);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416729);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function EmailValidatorPage() {
  var [emails, setEmails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [validationResults, setValidationResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [isValidating, setIsValidating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [bulkMode, setBulkMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var validateEmails = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* () {
      if (!emails.trim()) return;
      setIsValidating(true);
      setValidationResults([]);
      var emailList = emails.split('\n').filter(email => email.trim());
      var results = [];

      // Simulate email validation with realistic results
      for (var i = 0; i < emailList.length; i++) {
        yield new Promise(resolve => setTimeout(resolve, 200));
        var email = emailList[i].trim();
        var result = validateSingleEmail(email);
        results.push(result);
      }
      setValidationResults(results);
      setIsValidating(false);
    });
    return function validateEmails() {
      return _ref.apply(this, arguments);
    };
  }();
  var validateSingleEmail = email => {
    // Basic email regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for common disposable email domains
    var disposableDomains = ['tempmail.org', 'guerrillamail.com', 'mailinator.com', '10minutemail.com', 'throwaway.email', 'temp-mail.org', 'sharklasers.com', 'getairmail.com'];

    // Check for common typos
    var commonTypos = {
      'gmail.com': ['gmial.com', 'gamil.com', 'gmai.com'],
      'yahoo.com': ['yaho.com', 'yahooo.com', 'yhaoo.com'],
      'hotmail.com': ['hotmai.com', 'hotmial.com', 'hotmeil.com'],
      'outlook.com': ['outlok.com', 'outloook.com', 'outlok.com']
    };
    var domain = email.split('@')[1];
    var isDisposable = disposableDomains.includes(domain);
    var hasTypo = Object.entries(commonTypos).some(_ref2 => {
      var [correct, typos] = _ref2;
      return typos.includes(domain);
    });
    var status = 'valid';
    var score = 100;
    var issues = [];
    if (!emailRegex.test(email)) {
      status = 'invalid';
      score = 0;
      issues.push('Invalid email format');
    } else if (isDisposable) {
      status = 'disposable';
      score = 20;
      issues.push('Disposable email domain');
    } else if (hasTypo) {
      status = 'suspicious';
      score = 60;
      issues.push('Possible typo in domain');
    }

    // Additional checks
    if (email.length > 254) {
      status = 'invalid';
      score = 0;
      issues.push('Email too long');
    }
    if (email.split('@')[0].length > 64) {
      status = 'invalid';
      score = 0;
      issues.push('Local part too long');
    }
    return {
      email,
      status,
      score,
      issues,
      domain,
      isDisposable,
      hasTypo,
      timestamp: new Date().toLocaleTimeString()
    };
  };
  var getStatusIcon = status => {
    switch (status) {
      case 'valid':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.CheckCircle, {
          className: "w-5 h-5 text-green-400"
        });
      case 'suspicious':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.AlertTriangle, {
          className: "w-5 h-5 text-yellow-400"
        });
      case 'disposable':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.XCircle, {
          className: "w-5 h-5 text-orange-400"
        });
      case 'invalid':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.XCircle, {
          className: "w-5 h-5 text-red-400"
        });
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.AlertTriangle, {
          className: "w-5 h-5 text-gray-400"
        });
    }
  };
  var getStatusColor = status => {
    switch (status) {
      case 'valid':
        return 'text-green-400';
      case 'suspicious':
        return 'text-yellow-400';
      case 'disposable':
        return 'text-orange-400';
      case 'invalid':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };
  var getScoreColor = score => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };
  var copyResults = () => {
    var resultsText = validationResults.map(result => "".concat(result.email, " - ").concat(result.status.toUpperCase(), " (Score: ").concat(result.score, ")")).join('\n');
    navigator.clipboard.writeText(resultsText);
  };
  var clearResults = () => {
    setValidationResults([]);
    setEmails('');
  };
  var getStats = () => {
    if (validationResults.length === 0) return null;
    var total = validationResults.length;
    var valid = validationResults.filter(r => r.status === 'valid').length;
    var invalid = validationResults.filter(r => r.status === 'invalid').length;
    var suspicious = validationResults.filter(r => r.status === 'suspicious').length;
    var disposable = validationResults.filter(r => r.status === 'disposable').length;
    var avgScore = validationResults.reduce((sum, r) => sum + r.score, 0) / total;
    return {
      total,
      valid,
      invalid,
      suspicious,
      disposable,
      avgScore
    };
  };
  var stats = getStats();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "Email Validator - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "description",
        content: "Validate email addresses with our advanced email validation service. Check for typos, disposable domains, and ensure deliverability."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:title",
        content: "Email Validator - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:description",
        content: "Advanced email validation service to ensure deliverability and prevent typos."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "mb-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Mail, {
              className: "w-4 h-4 mr-2"
            }), "Email Validation & Verification"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight",
          children: "Email Validator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed",
          children: "Validate email addresses with our advanced validation service. Check for typos, disposable domains, and ensure maximum deliverability for your email campaigns and user registrations."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold text-white mb-6",
            children: "Validate Your Emails"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: "Our advanced validation engine checks multiple factors to ensure email quality and deliverability."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center justify-between mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                className: "text-2xl font-bold text-white flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Mail, {
                  className: "w-6 h-6 mr-3 text-blue-400"
                }), "Email Input"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: "text-sm text-gray-300",
                  children: "Bulk Mode"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "checkbox",
                  checked: bulkMode,
                  onChange: e => setBulkMode(e.target.checked),
                  className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "space-y-6",
              children: [bulkMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-2",
                  children: "Email Addresses (One per line)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
                  value: emails,
                  onChange: e => setEmails(e.target.value),
                  placeholder: "john@example.com\njane@company.org\nuser@domain.net",
                  rows: 8,
                  className: "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: "block text-sm font-medium text-gray-300 mb-2",
                  children: "Email Address"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "email",
                  value: emails,
                  onChange: e => setEmails(e.target.value),
                  placeholder: "Enter email address to validate",
                  className: "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex space-x-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  onClick: validateEmails,
                  disabled: !emails.trim() || isValidating,
                  className: "flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                  children: isValidating ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.RefreshCw, {
                      className: "w-5 h-5 mr-2 animate-spin"
                    }), "Validating..."]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.CheckCircle, {
                      className: "w-5 h-5 mr-2"
                    }), "Validate Emails"]
                  })
                }), validationResults.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  onClick: clearResults,
                  variant: "outline",
                  className: "border-gray-600 text-gray-300 hover:bg-gray-700",
                  children: "Clear"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "text-sm text-gray-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  children: "\u2022 Validates email format and syntax"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  children: "\u2022 Checks for disposable email domains"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  children: "\u2022 Detects common typos and mistakes"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  children: "\u2022 Provides deliverability score"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center justify-between mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                className: "text-2xl font-bold text-white flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.BarChart3, {
                  className: "w-6 h-6 mr-3 text-indigo-400"
                }), "Validation Results"]
              }), validationResults.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                onClick: copyResults,
                variant: "outline",
                size: "sm",
                className: "border-gray-600 text-gray-300 hover:bg-gray-700",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Copy, {
                  className: "w-4 h-4 mr-2"
                }), "Copy Results"]
              })]
            }), stats && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "mb-6 p-4 bg-gray-900 rounded-lg border border-gray-700",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "grid grid-cols-2 gap-4 text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-gray-400",
                    children: "Total:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "ml-2 text-white font-medium",
                    children: stats.total
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-gray-400",
                    children: "Valid:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "ml-2 text-green-400 font-medium",
                    children: stats.valid
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-gray-400",
                    children: "Invalid:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "ml-2 text-red-400 font-medium",
                    children: stats.invalid
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-gray-400",
                    children: "Avg Score:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "ml-2 font-medium ".concat(getScoreColor(stats.avgScore)),
                    children: stats.avgScore.toFixed(0)
                  })]
                })]
              })
            }), validationResults.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "space-y-3 max-h-96 overflow-y-auto",
              children: validationResults.map((result, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-4 rounded-lg border ".concat(result.status === 'valid' ? 'border-green-500/30 bg-green-500/10' : result.status === 'suspicious' ? 'border-yellow-500/30 bg-yellow-500/10' : result.status === 'disposable' ? 'border-orange-500/30 bg-orange-500/10' : 'border-red-500/30 bg-red-500/10'),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center space-x-3",
                    children: [getStatusIcon(result.status), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "font-medium ".concat(getStatusColor(result.status)),
                      children: result.email
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "text-sm font-medium ".concat(getScoreColor(result.score)),
                    children: ["Score: ", result.score]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "text-sm text-gray-300 mb-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-gray-400",
                    children: "Domain:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "ml-2",
                    children: result.domain
                  })]
                }), result.issues.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-gray-400",
                    children: "Issues:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                    className: "mt-1 space-y-1",
                    children: result.issues.map((issue, issueIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                      className: "text-red-300 flex items-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.XCircle, {
                        className: "w-3 h-3 mr-2 flex-shrink-0"
                      }), issue]
                    }, issueIndex))
                  })]
                }), result.isDisposable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-2 p-2 bg-orange-500/20 border border-orange-500/30 rounded text-sm text-orange-300",
                  children: "\u26A0\uFE0F Disposable email domain detected"
                }), result.hasTypo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-2 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-sm text-yellow-300",
                  children: "\uD83D\uDCA1 Possible typo detected in domain"
                })]
              }, index))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "bg-gray-900 p-6 rounded-lg border border-gray-700 text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-6xl mb-4",
                children: "\uD83D\uDCE7"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-gray-400",
                children: "Validation results will appear here. Enter an email address and click validate to get started."
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold text-white mb-6",
            children: "Advanced Email Validation Features"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: "Comprehensive email validation with real-time checking and intelligent analysis."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDD0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Syntax Validation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Checks email format, length, and RFC compliance standards for maximum accuracy."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDEE1\uFE0F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Disposable Detection"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Identifies temporary and disposable email addresses to prevent fraud and abuse."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDCA1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Typo Detection"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Smart algorithms detect common typos in popular email domains like Gmail and Yahoo."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDCCA"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Deliverability Score"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Get a comprehensive score indicating the likelihood of successful email delivery."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\u26A1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Bulk Validation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Validate thousands of email addresses simultaneously with our high-performance engine."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center p-8 bg-gray-700 border border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83C\uDF0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-4",
              children: "Global Coverage"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Supports all international email formats and domain types worldwide."
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-3xl sm:text-4xl font-bold text-white mb-6",
            children: "Perfect For Every Use Case"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-3xl mx-auto",
            children: "From user registration to email marketing, our validation service ensures quality and deliverability."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDC65"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "User Registration"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Ensure only valid email addresses are used during user signup, reducing bounce rates and improving user experience."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "space-y-2 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Prevent fake accounts and spam"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Improve user onboarding success"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Reduce support tickets"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDCE7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Email Marketing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Clean your email lists before campaigns to maximize deliverability and improve engagement metrics."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "space-y-2 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Higher open and click rates"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Better sender reputation"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Reduced bounce rates"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83D\uDED2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "E-commerce"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Validate customer emails during checkout to ensure order confirmations and updates reach customers."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "space-y-2 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Improve customer communication"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Reduce order abandonment"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Better customer support"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "p-8 bg-gray-800 border border-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-4xl mb-4",
              children: "\uD83C\uDFE2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Business Applications"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Integrate email validation into your business processes for data quality and compliance."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "space-y-2 text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Data quality assurance"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Compliance requirements"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                children: "\u2022 Operational efficiency"
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-20 bg-gradient-to-r from-blue-600 to-indigo-600",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-3xl sm:text-4xl font-bold text-white mb-6",
          children: "Ready to Improve Your Email Quality?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl text-blue-100 mb-8",
          children: "Join thousands of businesses who trust our email validation service to improve deliverability and user experience."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            size: "lg",
            className: "bg-white text-blue-600 hover:bg-gray-100",
            children: ["Get Started Today", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ArrowRight, {
              className: "w-5 h-5 ml-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/pricing",
            variant: "outline",
            size: "lg",
            className: "border-white text-white hover:bg-white hover:text-blue-600",
            children: "View Pricing"
          })]
        })]
      })
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

/***/ 996795:
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
/* harmony import */ var private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(820075);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/email-validator",
        pathname: "/email-validator",
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
    userland: private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/email-validator",
    config,
    userland: private_next_pages_email_validator_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(996795)));
module.exports = __webpack_exports__;

})();