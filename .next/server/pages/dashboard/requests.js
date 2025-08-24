"use strict";
(() => {
var exports = {};
exports.id = 665933;
exports.ids = [665933,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 461055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUOTE_REQUESTS: () => (/* binding */ QUOTE_REQUESTS)
/* harmony export */ });
var QUOTE_REQUESTS = [{
  id: 'qr_001',
  talentSlug: 'ava-chen',
  talentName: 'Ava Chen',
  requesterName: 'Jordan Lee',
  summary: 'Build RAG pipeline for product search across 50k docs',
  budgetUsd: 18000,
  timeline: '4-6 weeks',
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
  adminStatus: 'New',
  talentStatus: 'New',
  unread: true,
  details: 'We need a retrieval augmented generation system with evaluation, safety guardrails, and admin dashboard.'
}, {
  id: 'qr_002',
  talentSlug: 'marco-silva',
  talentName: 'Marco Silva',
  requesterName: 'Acme Cloud',
  summary: 'Multi-account AWS landing zone with IaC and SSO',
  budgetUsd: 35000,
  timeline: '8 weeks',
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
  adminStatus: 'In Review',
  talentStatus: 'Viewed',
  unread: false,
  details: 'Terraform based control tower alternative with security baseline and cost monitoring.'
}, {
  id: 'qr_003',
  talentSlug: 'nina-patel',
  talentName: 'Nina Patel',
  requesterName: 'DataWave Inc.',
  summary: 'LLM evaluation harness + dashboard',
  budgetUsd: 12000,
  timeline: '3-4 weeks',
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
  adminStatus: 'Responded',
  talentStatus: 'Replied',
  unread: false,
  details: 'Build a metrics dashboard for prompt variants, datasets, and safety scoring.'
}, {
  id: 'qr_004',
  talentSlug: 'kenji-yamada',
  talentName: 'Kenji Yamada',
  requesterName: 'Zed Labs',
  summary: 'Full-stack MVP for AI note-taking app',
  budgetUsd: 22000,
  timeline: '6 weeks',
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20).toISOString(),
  adminStatus: 'Accepted',
  talentStatus: 'Replied',
  unread: false,
  details: 'Next.js app with OpenAI, RAG, and social login.'
}, {
  id: 'qr_005',
  talentSlug: 'lena-mueller',
  talentName: 'Lena Müller',
  requesterName: 'SecureCo',
  summary: 'Threat modeling and AppSec review for web platform',
  budgetUsd: 9000,
  timeline: '2 weeks',
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
  adminStatus: 'Closed',
  talentStatus: 'Viewed',
  unread: false,
  details: 'Review SDLC, add SAST/DAST, and define zero trust perimeter.'
}];

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

/***/ 850199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TalentRequestsPage),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7887);
/* harmony import */ var _data_quote_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(461055);
/* harmony import */ var _data_talent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(609030);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






function formatDate(iso) {
  var d = new Date(iso);
  return d.toLocaleDateString();
}
var TALENT_STATUSES = ['New', 'Viewed', 'Replied'];
var getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(function* (_ref) {
    var {
      req
    } = _ref;
    var cookies = (req.headers.cookie || '').split(';').reduce((acc, cur) => {
      var [k, v] = cur.trim().split('=');
      if (k && v) acc[k] = decodeURIComponent(v);
      return acc;
    }, {});
    var role = cookies['role'] || 'guest';
    var userId = cookies['userId'] || null;
    var talentSlug = cookies['talentSlug'] || null;
    return {
      props: {
        role,
        userId,
        talentSlug
      }
    };
  });
  return function getServerSideProps(_x) {
    return _ref2.apply(this, arguments);
  };
}();
function TalentRequestsPage(_ref3) {
  var {
    role,
    talentSlug
  } = _ref3;
  var [statusFilter, setStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('All');
  var [dateFilter, setDateFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    start: null,
    end: null
  });
  var [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_quote_requests__WEBPACK_IMPORTED_MODULE_3__.QUOTE_REQUESTS);
  var currentTalent = _data_talent__WEBPACK_IMPORTED_MODULE_4__.TALENT_PROFILES.find(t => t.slug === talentSlug || '');
  var visibleRows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return rows.filter(r => {
      if (r.archived) return false;
      if (!talentSlug) return false;
      if (r.talentSlug !== talentSlug) return false;
      if (statusFilter !== 'All' && r.talentStatus !== statusFilter) return false;
      if (dateFilter.start && new Date(r.createdAt) < new Date(dateFilter.start)) return false;
      if (dateFilter.end && new Date(r.createdAt) > new Date(dateFilter.end)) return false;
      return true;
    });
  }, [rows, statusFilter, dateFilter, talentSlug]);
  if (role !== 'talent' || !talentSlug) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "max-w-5xl mx-auto py-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
          children: "My Requests"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl p-6 mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
          className: "text-xl font-semibold",
          children: "Sign in as Talent"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "opacity-90 mt-1 text-sm",
          children: "Please sign in to view quote requests sent to your profile."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "border rounded-lg p-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "text-sm",
          children: ["No access. Go to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "text-blue-600 underline",
            href: "/auth",
            children: "Login"
          }), "."]
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "max-w-6xl mx-auto py-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
        children: "My Requests"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-2xl p-6 mb-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col sm:flex-row sm:items-center gap-4 justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            className: "text-2xl font-semibold",
            children: "My Hire Requests"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-white/80 text-sm",
            children: [currentTalent ? currentTalent.name : 'Talent', " \u2022 Stay on top of new opportunities"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center gap-3 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "bg-white/10 px-3 py-1 rounded-full",
            children: ["New: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              children: rows.filter(r => r.talentSlug === talentSlug && r.talentStatus === 'New').length
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "bg-white/10 px-3 py-1 rounded-full",
            children: ["Replied: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              children: rows.filter(r => r.talentSlug === talentSlug && r.talentStatus === 'Replied').length
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-4 border-b border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-4 gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
          value: statusFilter,
          onChange: e => setStatusFilter(e.target.value),
          className: "px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "All",
            children: "All Statuses"
          }), TALENT_STATUSES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: s,
            children: s
          }, s))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "date",
          value: dateFilter.start || '',
          onChange: e => setDateFilter(df => _objectSpread(_objectSpread({}, df), {}, {
            start: e.target.value || null
          })),
          className: "px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "date",
          value: dateFilter.end || '',
          onChange: e => setDateFilter(df => _objectSpread(_objectSpread({}, df), {}, {
            end: e.target.value || null
          })),
          className: "px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "divide-y divide-gray-100 dark:divide-gray-800",
        children: [visibleRows.map(row => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "p-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between hover:bg-gray-50/60 dark:hover:bg-gray-900/40",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "space-y-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.UserRound, {
                size: 16
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "font-medium",
                children: row.requesterName
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-gray-400",
                children: "\u2022"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "rounded-full text-xs px-2 py-0.5 border border-gray-300 dark:border-gray-700",
                children: row.adminStatus
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "font-medium",
              children: row.summary
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "inline-flex items-center gap-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.BadgeDollarSign, {
                  size: 16
                }), " $", row.budgetUsd.toLocaleString()]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "inline-flex items-center gap-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.CalendarDays, {
                  size: 16
                }), " ", formatDate(row.createdAt)]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [row.talentStatus !== 'Replied' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
              onClick: () => setRows(prev => prev.map(r => r.id === row.id ? _objectSpread(_objectSpread({}, r), {}, {
                talentStatus: 'Replied'
              }) : r)),
              className: "inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.MailCheck, {
                size: 16
              }), " Mark as Replied"]
            }), row.talentStatus === 'New' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
              onClick: () => setRows(prev => prev.map(r => r.id === row.id ? _objectSpread(_objectSpread({}, r), {}, {
                talentStatus: 'Viewed'
              }) : r)),
              className: "inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Eye, {
                size: 16
              }), " Mark as Viewed"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: "mailto:contact@client.com?subject=Re:%20".concat(encodeURIComponent(row.summary)),
              className: "inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.Check, {
                size: 16
              }), " Contact Client"]
            })]
          })]
        }, row.id)), visibleRows.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "p-10 text-center text-gray-500",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "text-lg font-medium mb-2",
            children: "You haven\u2019t received any hire requests yet \u2014 promote your profile!"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-sm",
            children: "Keep your profile updated and share it to attract more clients."
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

/***/ 894739:
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
/* harmony import */ var private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(850199);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/dashboard/requests",
        pathname: "/dashboard/requests",
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
    userland: private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/dashboard/requests",
    config,
    userland: private_next_pages_dashboard_requests_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(894739)));
module.exports = __webpack_exports__;

})();