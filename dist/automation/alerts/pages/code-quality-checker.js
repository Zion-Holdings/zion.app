"use strict";
(() => {
var exports = {};
exports.id = 513145;
exports.ids = [513145,890636];
exports.modules = {

/***/ 327603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeQualityCheckerPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338423);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416729);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function CodeQualityCheckerPage() {
  var [isAnalyzing, setIsAnalyzing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [analysisResults, setAnalysisResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [codeInput, setCodeInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var features = [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Code, {
      className: "w-8 h-8 text-white"
    }),
    title: 'Multi-Language Support',
    description: 'Support for JavaScript, TypeScript, Python, Java, C++, Go, and many more programming languages.',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    gradient: 'from-teal-400 to-cyan-500'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
      className: "w-8 h-8 text-white"
    }),
    title: 'Code Quality Metrics',
    description: 'Comprehensive analysis including complexity, maintainability, test coverage, and security vulnerabilities.',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    gradient: 'from-green-400 to-emerald-500'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
      className: "w-8 h-8 text-white"
    }),
    title: 'Real-Time Analysis',
    description: 'Instant code quality feedback with detailed explanations and improvement suggestions.',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    gradient: 'from-orange-400 to-red-500'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield, {
      className: "w-8 h-8 text-white"
    }),
    title: 'Security Scanning',
    description: 'Automated detection of security vulnerabilities, dependency issues, and best practice violations.',
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    gradient: 'from-purple-400 to-indigo-500'
  }];
  var supportedLanguages = [{
    name: 'JavaScript/TypeScript',
    icon: '⚡',
    features: ['ESLint rules', 'TypeScript checks', 'React best practices']
  }, {
    name: 'Python',
    icon: '🐍',
    features: ['PEP 8 compliance', 'Type hints', 'Security scanning']
  }, {
    name: 'Java',
    icon: '☕',
    features: ['PMD rules', 'Checkstyle', 'SonarQube integration']
  }, {
    name: 'C++',
    icon: '⚙️',
    features: ['Clang-tidy', 'Static analysis', 'Memory leak detection']
  }, {
    name: 'Go',
    icon: '🟢',
    features: ['Golangci-lint', 'Go vet', 'Performance analysis']
  }, {
    name: 'PHP',
    icon: '🐘',
    features: ['PHPStan', 'PHP CS Fixer', 'Security analysis']
  }];
  var pricing = [{
    name: 'Developer',
    price: '$29',
    period: '/month',
    description: 'Perfect for individual developers and small projects',
    features: ['100 code analyses/month', 'Basic quality metrics', '5 programming languages', 'Email support', 'Basic reporting', 'Community rules'],
    popular: false
  }, {
    name: 'Team',
    price: '$79',
    period: '/month',
    description: 'Ideal for development teams and growing companies',
    features: ['500 code analyses/month', 'Advanced quality metrics', 'All programming languages', 'Priority support', 'Advanced reporting', 'Custom rules', 'Team collaboration', 'API access'],
    popular: true
  }, {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For large organizations with complex codebases',
    features: ['Unlimited analyses', 'Enterprise metrics', 'Custom language support', '24/7 dedicated support', 'Custom reporting', 'White-label options', 'On-premise deployment', 'Custom integrations'],
    popular: false
  }];
  var handleAnalyzeCode = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(function* () {
      if (!codeInput.trim()) return;
      setIsAnalyzing(true);
      // Simulate code analysis
      setTimeout(() => {
        setAnalysisResults({
          language: 'JavaScript',
          qualityScore: 85,
          issues: [{
            type: 'warning',
            message: 'Consider using const instead of let for variables that are not reassigned',
            line: 5,
            severity: 'medium'
          }, {
            type: 'info',
            message: 'Function is quite long (25 lines). Consider breaking it into smaller functions',
            line: 12,
            severity: 'low'
          }, {
            type: 'error',
            message: 'Missing semicolon at end of statement',
            line: 18,
            severity: 'high'
          }],
          metrics: {
            complexity: 'Medium',
            maintainability: 'Good',
            testCoverage: '85%',
            securityScore: '92%'
          },
          recommendations: ['Use const for immutable variables to improve code clarity', 'Break down large functions into smaller, more focused functions', 'Add proper error handling for better robustness', 'Consider adding JSDoc comments for better documentation']
        });
        setIsAnalyzing(false);
      }, 3000);
    });
    return function handleAnalyzeCode() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "Code Quality Checker - Zion Tech Group | Professional Code Analysis & Improvement Tool"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "description",
        content: "Analyze and improve your code quality with our comprehensive checker. Support for multiple languages, security scanning, and detailed improvement recommendations."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:title",
        content: "Code Quality Checker - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:description",
        content: "Professional code quality analysis tool with multi-language support and security scanning."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "relative section-padding bg-gradient-cursor overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.06),transparent_50%)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-grid opacity-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative z-10 container-cursor text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Code, {
            className: "w-4 h-4 mr-2"
          }), "Professional Code Analysis"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-responsive-xl font-black mb-8 gradient-text text-shadow-lg",
          children: "Code Quality Checker"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12",
          children: "Analyze and improve your code quality with our comprehensive checker. Support for multiple programming languages, security scanning, and detailed improvement recommendations. Write better, safer, and more maintainable code."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "max-w-4xl mx-auto mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
            placeholder: "Paste your code here for analysis... (Supports JavaScript, TypeScript, Python, Java, C++, Go, PHP, and more)",
            value: codeInput,
            onChange: e => setCodeInput(e.target.value),
            className: "w-full h-32 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-mono text-sm"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onClick: handleAnalyzeCode,
            size: "lg",
            className: "w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-2xl hover-glow",
            disabled: isAnalyzing || !codeInput.trim(),
            children: isAnalyzing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
              }), "Analyzing Code..."]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Play, {
                className: "w-5 h-5 mr-2"
              }), "Analyze Code Quality"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-6 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "#pricing",
            variant: "outline",
            size: "lg",
            className: "border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl",
            children: "View Pricing"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            variant: "outline",
            size: "lg",
            className: "border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl",
            children: "Schedule Demo"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "section-padding bg-gradient-cursor-accent",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-responsive-lg font-bold mb-8 gradient-text text-shadow",
            children: "Powerful Analysis Features"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "Our code quality checker provides comprehensive analysis and improvement suggestions for better code."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "card-hover group border-gradient-teal",
            style: {
              animationDelay: "".concat(index * 0.1, "s")
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-start space-x-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ".concat(feature.color, " shadow-xl group-hover:scale-110 transition-transform duration-300"),
                  children: feature.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "absolute -inset-2 bg-gradient-to-r from-transparent via-".concat(feature.gradient, " to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "text-2xl font-bold mb-4 text-white",
                  children: feature.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-gray-400 leading-relaxed",
                  children: feature.description
                })]
              })]
            })
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "section-padding bg-gradient-cursor",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-responsive-lg font-bold mb-8 gradient-text text-shadow",
            children: "Multi-Language Support"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "We support a wide range of programming languages with language-specific analysis rules and best practices."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: supportedLanguages.map((language, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "card-hover border-gradient-teal",
            style: {
              animationDelay: "".concat(index * 0.1, "s")
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "text-center mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-4xl mb-3",
                children: language.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                className: "text-xl font-bold text-white mb-3",
                children: language.name
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
              className: "space-y-2",
              children: language.features.map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                className: "flex items-center text-gray-300 text-sm",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                  className: "w-4 h-4 text-teal-400 mr-3 flex-shrink-0"
                }), feature]
              }, featureIndex))
            })]
          }, index))
        })]
      })
    }), analysisResults && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "section-padding bg-gradient-cursor-accent",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-12",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-responsive-lg font-bold mb-8 gradient-text text-shadow",
            children: "Code Quality Analysis Results"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "Here's a sample code quality analysis. Get comprehensive insights for your own code."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "border-gradient-teal text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-bold mb-6 text-white",
              children: "Overall Quality Score"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "text-6xl font-bold text-teal-400 mb-4",
              children: [analysisResults.qualityScore, "/100"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-32 h-32 mx-auto mb-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                className: "w-full h-full transform -rotate-90",
                viewBox: "0 0 36 36",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeDasharray: "".concat(analysisResults.qualityScore / 100 * 100, ", 100"),
                  className: "text-teal-500"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400",
              children: "Good code quality with room for improvement"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "border-gradient-teal",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-bold mb-6 text-white",
              children: "Issues Found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "space-y-3",
              children: analysisResults.issues.map((issue, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-start space-x-3",
                children: [issue.type === 'error' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.AlertTriangle, {
                  className: "w-5 h-5 text-red-400 mt-1 flex-shrink-0"
                }) : issue.type === 'warning' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.AlertTriangle, {
                  className: "w-5 h-5 text-yellow-400 mt-1 flex-shrink-0"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                  className: "w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-gray-300 text-sm",
                    children: issue.message
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-xs text-gray-500 mt-1",
                    children: ["Line ", issue.line, " \u2022 Severity: ", issue.severity]
                  })]
                })]
              }, index))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "border-gradient-teal",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-2xl font-bold mb-6 text-white",
              children: "Quality Metrics"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Complexity"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-orange-400 font-bold",
                  children: analysisResults.metrics.complexity
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Maintainability"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-green-400 font-bold",
                  children: analysisResults.metrics.maintainability
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Test Coverage"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-blue-400 font-bold",
                  children: analysisResults.metrics.testCoverage
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Security Score"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-green-400 font-bold",
                  children: analysisResults.metrics.securityScore
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "border-gradient-teal",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
            className: "text-2xl font-bold mb-6 text-white",
            children: "Improvement Recommendations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: analysisResults.recommendations.map((rec, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-start space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                className: "w-5 h-5 text-teal-400 mt-1 flex-shrink-0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-gray-300",
                children: rec
              })]
            }, index))
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      id: "pricing",
      className: "section-padding bg-gradient-cursor",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-responsive-lg font-bold mb-8 gradient-text text-shadow",
            children: "Simple Pricing"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "Choose the code quality analysis plan that best fits your development needs."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: pricing.map((plan, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "card-hover border-gradient-teal ".concat(plan.popular ? 'ring-2 ring-teal-500 scale-105' : ''),
            style: {
              animationDelay: "".concat(index * 0.1, "s")
            },
            children: [plan.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium",
                children: "Most Popular"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "text-center mb-8",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: plan.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-4xl font-bold text-white",
                  children: plan.price
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-gray-400",
                  children: plan.period
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-gray-400",
                children: plan.description
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
              className: "space-y-4 mb-8",
              children: plan.features.map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                className: "flex items-center text-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                  className: "w-5 h-5 text-teal-400 mr-3 flex-shrink-0"
                }), feature]
              }, featureIndex))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "/contact",
              size: "lg",
              className: "w-full ".concat(plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600', " text-white"),
              children: ["Get Started", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                className: "w-5 h-5 ml-2"
              })]
            })]
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "section-padding bg-gradient-to-r from-teal-600 to-cyan-700 relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor text-center relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-responsive-lg font-bold text-white mb-8 text-shadow-lg",
          children: "Ready to Improve Your Code Quality?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-responsive-md text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed",
          children: "Join thousands of developers using our code quality checker to write better, safer, and more maintainable code."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-6 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            size: "lg",
            className: "bg-white text-teal-600 hover:bg-gray-100 shadow-2xl",
            children: ["Start Free Trial", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
              className: "w-5 h-5 ml-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            variant: "outline",
            size: "lg",
            className: "border-white text-white hover:bg-white hover:text-teal-600 shadow-2xl",
            children: "Schedule Demo"
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

/***/ 424595:
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
/* harmony import */ var private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(327603);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/code-quality-checker",
        pathname: "/code-quality-checker",
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
    userland: private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/code-quality-checker",
    config,
    userland: private_next_pages_code_quality_checker_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(424595)));
module.exports = __webpack_exports__;

})();