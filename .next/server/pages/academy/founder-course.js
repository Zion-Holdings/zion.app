"use strict";
(() => {
var exports = {};
exports.id = 358840;
exports.ids = [358840,890636];
exports.modules = {

/***/ 54388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FounderCoursePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_academy_ModuleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(348723);
/* harmony import */ var _components_academy_ProgressTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75282);
/* harmony import */ var _components_academy_CertificateView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(806769);
/* harmony import */ var _components_academy_courseData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74446);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






var STORAGE_KEY = 'founder_course_progress_v1';
function FounderCoursePage() {
  var [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));
    } catch (_unused) {}
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch (_unused2) {}
  }, [completed]);
  var totalCount = _components_academy_courseData__WEBPACK_IMPORTED_MODULE_5__.founderCourseModules.length;
  var completedCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => _components_academy_courseData__WEBPACK_IMPORTED_MODULE_5__.founderCourseModules.filter(m => completed[m.id]).length, [completed]);
  var toggleComplete = moduleId => {
    setCompleted(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [moduleId]: !prev[moduleId]
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "space-y-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "space-y-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        className: "text-2xl sm:text-3xl font-semibold",
        children: "Founder Course: Launch Your Zion Instance"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-gray-700 dark:text-gray-300 max-w-3xl",
        children: "An interactive, step-by-step onboarding course for founders and builders launching their own Zion instance or vertical. Use the AI tools embedded in each module to test readiness and generate summaries."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_academy_ProgressTracker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        completedCount: completedCount,
        totalCount: totalCount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "space-y-6",
      children: _components_academy_courseData__WEBPACK_IMPORTED_MODULE_5__.founderCourseModules.map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_academy_ModuleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        moduleId: m.id,
        title: m.title,
        points: m.points,
        isCompleted: !!completed[m.id],
        onComplete: toggleComplete
      }, m.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_academy_CertificateView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      completedCount: completedCount,
      totalCount: totalCount
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "text-xs text-gray-500 dark:text-gray-400",
      children: "Operator prompt: Create a 5-module course for founders launching a decentralized AI work protocol \u2014 include mission, DAO, token, governance, and deployment tools."
    })]
  });
}

/***/ }),

/***/ 75282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressTracker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ProgressTracker(_ref) {
  var {
    completedCount,
    totalCount
  } = _ref;
  var progress = totalCount > 0 ? Math.round(completedCount / totalCount * 100) : 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex items-center justify-between mb-2 text-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "font-medium",
        children: "Progress"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        className: "text-gray-500",
        children: [completedCount, "/", totalCount, " (", progress, "%)"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "h-2 w-full bg-gray-200 dark:bg-gray-800 rounded",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "h-2 bg-blue-600 dark:bg-blue-500 rounded",
        style: {
          width: "".concat(progress, "%")
        }
      })
    })]
  });
}

/***/ }),

/***/ 155351:
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
/* harmony import */ var private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54388);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/academy/founder-course",
        pathname: "/academy/founder-course",
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
    userland: private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/academy/founder-course",
    config,
    userland: private_next_pages_academy_founder_course_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ 348723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModuleCard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


function ModuleCard(_ref) {
  var {
    moduleId,
    title,
    points,
    isCompleted,
    onComplete
  } = _ref;
  var [isLoadingSummary, setIsLoadingSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [isLoadingQuiz, setIsLoadingQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [quiz, setQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  var [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var contentForAI = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var bullets = points.map((p, i) => "".concat(i + 1, ". ").concat(p)).join('\n');
    return "".concat(title, "\n").concat(bullets);
  }, [title, points]);
  var handleSummarize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
    setIsLoadingSummary(true);
    setSummary(null);
    try {
      var res = yield fetch('/api/academy/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          moduleTitle: title,
          moduleContent: contentForAI
        })
      });
      var data = yield res.json();
      setSummary(data.summary || 'No summary available.');
    } catch (err) {
      setSummary('Failed to summarize.');
    } finally {
      setIsLoadingSummary(false);
    }
  }), [title, contentForAI]);
  var handleGenerateQuiz = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
    setIsLoadingQuiz(true);
    setQuiz(null);
    setAnswers({});
    setScore(null);
    try {
      var res = yield fetch('/api/academy/generate-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          moduleTitle: title,
          moduleContent: contentForAI
        })
      });
      var data = yield res.json();
      setQuiz(data.questions || null);
    } catch (err) {
      setQuiz(null);
    } finally {
      setIsLoadingQuiz(false);
    }
  }), [title, contentForAI]);
  var submitQuiz = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!quiz) return;
    var s = 0;
    quiz.forEach((q, idx) => {
      if (answers[idx] === q.answerIndex) s += 1;
    });
    setScore(s);
  }, [quiz, answers]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "rounded-xl border border-gray-200 dark:border-gray-800 p-5 space-y-4 bg-white/60 dark:bg-white/5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-start justify-between gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-lg font-semibold",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          className: "mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1",
          children: points.map((p, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: p
          }, i))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col items-end gap-2 min-w-[180px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: () => onComplete(moduleId),
          className: "px-3 py-1.5 rounded-md text-sm font-medium border transition ".concat(isCompleted ? 'bg-green-600 text-white border-green-700' : 'bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'),
          children: isCompleted ? 'Completed' : 'Mark as complete'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: handleGenerateQuiz,
          className: "px-3 py-1.5 rounded-md text-sm font-medium border bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900",
          children: isLoadingQuiz ? 'Generating quiz…' : 'AI Quiz'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: handleSummarize,
          className: "px-3 py-1.5 rounded-md text-sm font-medium border bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900",
          children: isLoadingSummary ? 'Summarizing…' : 'Summarize This Module'
        })]
      })]
    }), summary && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-4 text-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "font-medium mb-1",
        children: "Module Summary"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "whitespace-pre-wrap",
        children: summary
      })]
    }), quiz && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "rounded-lg border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/30 p-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "font-medium mb-2",
        children: "Quiz"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "space-y-4",
        children: quiz.map((q, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "text-sm font-medium",
            children: [idx + 1, ". ", q.question]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
            children: q.options.map((opt, oIdx) => {
              var isSelected = answers[idx] === oIdx;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                onClick: () => setAnswers(prev => _objectSpread(_objectSpread({}, prev), {}, {
                  [idx]: oIdx
                })),
                className: "text-left px-3 py-2 rounded-md border text-sm transition ".concat(isSelected ? 'border-purple-600 bg-white dark:bg-black' : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'),
                children: opt
              }, oIdx);
            })
          })]
        }, idx))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "mt-4 flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: submitQuiz,
          className: "px-3 py-1.5 rounded-md text-sm font-medium border bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900",
          children: "Submit Answers"
        }), score !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "text-sm",
          children: ["Score: ", score, "/", quiz.length]
        })]
      })]
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(155351)));
module.exports = __webpack_exports__;

})();