"use strict";
(() => {
var exports = {};
exports.id = 234239;
exports.ids = [234239,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 485914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommunityPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_EnhancedLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328453);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





var fetchJson = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(function* (url, opts) {
    var res = yield fetch(url, _objectSpread(_objectSpread({}, opts), {}, {
      headers: _objectSpread({
        'Content-Type': 'application/json'
      }, (opts === null || opts === void 0 ? void 0 : opts.headers) || {})
    }));
    if (!res.ok) throw new Error(yield res.text());
    return res.json();
  });
  return function fetchJson(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function CommunityPage() {
  var [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var [activeCategory, setActiveCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  var [threads, setThreads] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var [sort, setSort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('new');
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [showNewThread, setShowNewThread] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [newThread, setNewThread] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    title: '',
    body: '',
    tags: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchJson('/api/community/categories').then(d => {
      setCategories(d.categories);
      var first = d.categories.find(c => !c.isAdminOnly) || d.categories[0];
      setActiveCategory(first === null || first === void 0 ? void 0 : first.id);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!activeCategory) return;
    setLoading(true);
    fetchJson("/api/community/threads?categoryId=".concat(encodeURIComponent(activeCategory), "&sort=").concat(sort)).then(d => setThreads(d.threads)).finally(() => setLoading(false));
  }, [activeCategory, sort]);
  var pinned = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => threads.filter(t => t.isPinned), [threads]);
  var normal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => threads.filter(t => !t.isPinned), [threads]);
  var submitNewThread = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(function* () {
      var payload = {
        categoryId: activeCategory,
        title: newThread.title.trim(),
        body: newThread.body.trim(),
        tags: newThread.tags.split(',').map(s => s.trim()).filter(Boolean)
      };
      if (!payload.title || !payload.body) return;
      // Demo auth: set a cookie if not present via fetch header; users can override with real auth headers
      yield fetchJson('/api/community/threads', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'x-user-id': 'demo-user',
          'x-user-name': 'Demo User',
          'x-user-role': 'Talent'
        }
      });
      setShowNewThread(false);
      setNewThread({
        title: '',
        body: '',
        tags: ''
      });
      // refresh
      var d = yield fetchJson("/api/community/threads?categoryId=".concat(encodeURIComponent(activeCategory), "&sort=").concat(sort));
      setThreads(d.threads);
    });
    return function submitNewThread() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout_EnhancedLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("title", {
        children: "Community Forum \u2014 Zion AI Marketplace"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("aside", {
        className: "w-64 hidden md:block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "sticky top-20 space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400",
            children: "Categories"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
            className: "space-y-1",
            children: categories.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                className: "w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900 ".concat(activeCategory === c.id ? 'bg-gray-100 dark:bg-gray-900 font-medium' : ''),
                onClick: () => setActiveCategory(c.id),
                children: [c.name, " ", c.isAdminOnly ? '🔒' : '']
              })
            }, c.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "pt-4 text-xs text-gray-500",
            children: "Discourse-like forum UI"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "flex-1 min-w-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center justify-between mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex items-center gap-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              className: "px-2 py-1 rounded bg-gray-100 dark:bg-gray-900",
              value: sort,
              onChange: e => setSort(e.target.value),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "new",
                children: "New"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "top",
                children: "Top"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "active",
                children: "Active"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-500",
            onClick: () => setShowNewThread(true),
            children: "New Thread"
          })]
        }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "py-10 text-center text-gray-500",
          children: "Loading threads\u2026"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "space-y-2",
          children: [pinned.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "text-xs uppercase tracking-wide text-gray-500 mb-1",
              children: "Pinned"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
              className: "divide-y divide-gray-200 dark:divide-gray-800 rounded border border-gray-200 dark:border-gray-800 overflow-hidden",
              children: pinned.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ThreadRow, {
                t: t
              }, t.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
            className: "divide-y divide-gray-200 dark:divide-gray-800 rounded border border-gray-200 dark:border-gray-800 overflow-hidden",
            children: [normal.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ThreadRow, {
              t: t
            }, t.id)), normal.length === 0 && pinned.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
              className: "p-8 text-center text-gray-500",
              children: "No threads yet. Be the first to post!"
            })]
          })]
        })]
      })]
    }), showNewThread && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "bg-white dark:bg-gray-950 rounded-lg shadow-xl w-full max-w-2xl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "p-4 border-b border-gray-200 dark:border-gray-800 font-medium",
          children: "Create New Thread"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "p-4 space-y-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "text-sm block mb-1",
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              className: "w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-900",
              value: newThread.title,
              onChange: e => setNewThread(_objectSpread(_objectSpread({}, newThread), {}, {
                title: e.target.value
              }))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "text-sm block mb-1",
              children: "Body"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
              className: "w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-900 min-h-[140px]",
              value: newThread.body,
              onChange: e => setNewThread(_objectSpread(_objectSpread({}, newThread), {}, {
                body: e.target.value
              }))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "text-sm block mb-1",
              children: "Tags (comma separated)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              className: "w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-900",
              value: newThread.tags,
              onChange: e => setNewThread(_objectSpread(_objectSpread({}, newThread), {}, {
                tags: e.target.value
              }))
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "px-3 py-2 rounded bg-gray-200 dark:bg-gray-800",
            onClick: () => setShowNewThread(false),
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-500",
            onClick: submitNewThread,
            children: "Post"
          })]
        })]
      })
    })]
  });
}
function ThreadRow(_ref3) {
  var {
    t
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
    className: "p-4 flex items-start gap-4 bg-white dark:bg-gray-950",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-col items-center w-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "text-gray-500 hover:text-blue-600",
        children: "\u25B2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "font-semibold ".concat(t.votes >= 0 ? 'text-gray-900 dark:text-gray-100' : 'text-red-500'),
        children: t.votes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "text-gray-500 hover:text-blue-600",
        children: "\u25BC"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "min-w-0 flex-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex items-center gap-2 text-xs text-gray-500",
        children: [t.isPinned && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "px-2 py-0.5 rounded bg-yellow-100 text-yellow-800",
          children: "Pinned"
        }), t.isFeatured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "px-2 py-0.5 rounded bg-purple-100 text-purple-800",
          children: "Featured"
        }), t.isLocked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "px-2 py-0.5 rounded bg-gray-200 text-gray-700",
          children: "Locked"
        }), t.isAnswered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "px-2 py-0.5 rounded bg-green-100 text-green-800",
          children: "Answered"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/community/thread/".concat(t.id),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "block font-medium text-lg truncate hover:underline",
          children: t.title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2",
        children: t.body
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mt-2 flex items-center justify-between text-xs text-gray-500",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex items-center gap-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "w-6 h-6 rounded-full bg-gray-200"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: t.authorName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800",
              children: t.authorRole
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: "\u2022"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: new Date(t.createdAt).toLocaleString()
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex gap-1",
            children: t.tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "px-2 py-0.5 rounded bg-blue-50 text-blue-700",
              children: ["#", tag]
            }, tag))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "ml-2",
            children: ["\uD83D\uDCAC ", t.replyCount]
          })]
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

/***/ 860448:
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
/* harmony import */ var private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(485914);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/community",
        pathname: "/community",
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
    userland: private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/community",
    config,
    userland: private_next_pages_community_index_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(860448)));
module.exports = __webpack_exports__;

})();