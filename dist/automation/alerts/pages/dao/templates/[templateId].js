"use strict";
(() => {
var exports = {};
exports.id = 634412;
exports.ids = [634412,890636];
exports.modules = {

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 325687:
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
/* harmony import */ var private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(841300);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/dao/templates/[templateId]",
        pathname: "/dao/templates/[templateId]",
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
    userland: private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/dao/templates/[templateId]",
    config,
    userland: private_next_pages_dao_templates_templateId_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ 422326:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 629021:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 841300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZgpDraftPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860076);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



function TextArea(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", _objectSpread(_objectSpread({}, props), {}, {
    className: "w-full border rounded px-3 py-2 min-h-[120px] ".concat(props.className || '')
  }));
}
function ZgpDraftPage() {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var {
    templateId
  } = router.query;
  var [template, setTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [motivation, setMotivation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [specificationImpact, setSpecificationImpact] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [codeModuleAffected, setCodeModuleAffected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [votingOptions, setVotingOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(['For', 'Against', 'Abstain']);
  var [fundingAmount, setFundingAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [fundingCurrency, setFundingCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('ZION');
  var [brief, setBrief] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [review, setReview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [proposal, setProposal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var fundingNeeded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (fundingAmount === '' || Number.isNaN(Number(fundingAmount))) return null;
    return {
      amount: Number(fundingAmount),
      currency: fundingCurrency
    };
  }, [fundingAmount, fundingCurrency]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!templateId) return;
    fetch('/api/zgp/templates').then(r => r.json()).then(data => {
      var t = (data.templates || []).find(x => x.id === templateId);
      setTemplate(t);
      if (t) {
        setTitle("".concat(t.code, " \xB7 ").concat(t.title));
        setSummary(t.defaults.summary || '');
        setMotivation(t.defaults.motivation || '');
        setSpecificationImpact(t.defaults.specificationImpact || '');
        setCodeModuleAffected(t.defaults.codeModuleAffected || '');
        setVotingOptions(t.defaults.votingOptions || ['For', 'Against', 'Abstain']);
      }
    });
  }, [templateId]);
  function handleAutofill() {
    return _handleAutofill.apply(this, arguments);
  }
  function _handleAutofill() {
    _handleAutofill = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* () {
      if (!template) return;
      var r = yield fetch('/api/zgp/autofill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          templateId: template.id,
          brief
        })
      });
      var data = yield r.json();
      var s = data.suggestion || {};
      if (s.summary) setSummary(s.summary);
      if (s.motivation) setMotivation(s.motivation);
      if (s.specificationImpact) setSpecificationImpact(s.specificationImpact);
      if (s.codeModuleAffected) setCodeModuleAffected(s.codeModuleAffected);
      if (Array.isArray(s.votingOptions)) setVotingOptions(s.votingOptions);
    });
    return _handleAutofill.apply(this, arguments);
  }
  function handleReview() {
    return _handleReview.apply(this, arguments);
  }
  function _handleReview() {
    _handleReview = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* () {
      var text = [title, summary, motivation, specificationImpact].join('\n\n');
      var r = yield fetch('/api/zgp/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text
        })
      });
      var data = yield r.json();
      setReview(data.review || '');
    });
    return _handleReview.apply(this, arguments);
  }
  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (status) {
      if (!template) return;
      setSaving(true);
      try {
        var r = yield fetch('/api/zgp/proposals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            templateId: template.id,
            title,
            summary,
            motivation,
            specificationImpact,
            codeModuleAffected,
            votingOptions,
            fundingNeeded
          })
        });
        var data = yield r.json();
        if (data.proposal) {
          if (status === 'submitted') {
            // Immediately update status to submitted as a new version
            yield fetch("/api/zgp/proposals/".concat(data.proposal.id), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                status: 'submitted'
              })
            });
          }
          setProposal(data.proposal);
        }
      } finally {
        setSaving(false);
      }
    });
    return _handleSubmit.apply(this, arguments);
  }
  var exportHref = proposal ? "/api/zgp/export?id=".concat(proposal.id) : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "min-h-screen px-6 py-10 max-w-5xl mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex items-center justify-between mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
          className: "text-2xl font-semibold",
          children: "Draft Proposal"
        }), template && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "text-gray-600 text-sm",
          children: ["Template: ", template.code, " \u2014 ", template.title, " (", template.category, ")"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => router.push('/dao/templates'),
        className: "text-blue-600 underline",
        children: "Back to Library"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "md:col-span-2 space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          value: title,
          onChange: e => setTitle(e.target.value),
          placeholder: "Proposal title",
          className: "w-full border rounded px-3 py-2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex items-center justify-between",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              className: "font-medium",
              children: "Summary"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TextArea, {
            value: summary,
            onChange: e => setSummary(e.target.value)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
            className: "font-medium",
            children: "Motivation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TextArea, {
            value: motivation,
            onChange: e => setMotivation(e.target.value)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
            className: "font-medium",
            children: "Specification / Impact"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TextArea, {
            value: specificationImpact,
            onChange: e => setSpecificationImpact(e.target.value)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
            className: "font-medium",
            children: "Code / Module to be Affected"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            value: codeModuleAffected,
            onChange: e => setCodeModuleAffected(e.target.value),
            className: "w-full border rounded px-3 py-2"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
            className: "font-medium",
            children: "Voting Options"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            value: votingOptions.join(', '),
            onChange: e => setVotingOptions(e.target.value.split(',').map(s => s.trim()).filter(Boolean)),
            className: "w-full border rounded px-3 py-2"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
            className: "font-medium",
            children: "Funding Needed (optional)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              type: "number",
              placeholder: "Amount",
              value: fundingAmount,
              onChange: e => setFundingAmount(e.target.value === '' ? '' : Number(e.target.value)),
              className: "w-1/2 border rounded px-3 py-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              placeholder: "Currency",
              value: fundingCurrency,
              onChange: e => setFundingCurrency(e.target.value),
              className: "w-1/2 border rounded px-3 py-2"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex gap-3 pt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            onClick: () => handleSubmit('draft'),
            disabled: saving,
            className: "px-4 py-2 rounded bg-gray-900 text-white disabled:opacity-50",
            children: "Save Draft"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            onClick: () => handleSubmit('submitted'),
            disabled: saving,
            className: "px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50",
            children: "Submit to DAO"
          }), proposal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: exportHref,
            className: "px-4 py-2 rounded border",
            target: "_blank",
            rel: "noreferrer",
            children: "Export PDF"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("aside", {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "border rounded p-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "font-medium mb-2",
            children: "AI Tools"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
            value: brief,
            onChange: e => setBrief(e.target.value),
            placeholder: "Brief for autofill (what are you trying to do?)",
            className: "w-full border rounded px-3 py-2 min-h-[80px]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex gap-2 mt-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: handleAutofill,
              className: "px-3 py-2 rounded border",
              children: "Auto-fill"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: handleReview,
              className: "px-3 py-2 rounded border",
              children: "AI Review"
            })]
          }), review && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "mt-3 text-sm text-gray-700 whitespace-pre-wrap",
            children: review
          })]
        }), proposal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "border rounded p-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "font-medium",
            children: "Submission Preview"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-xs text-gray-500",
            children: proposal.proposalNumber
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-sm mt-2",
            children: ["Latest Version: v", proposal.latestVersion]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            onClick: () => router.push("/dao/templates"),
            className: "text-blue-600 underline mt-2",
            children: "Draft another"
          })]
        })]
      })]
    })]
  });
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(325687)));
module.exports = __webpack_exports__;

})();