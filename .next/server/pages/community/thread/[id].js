"use strict";
(() => {
var exports = {};
exports.id = 902460;
exports.ids = [890636,902460];
exports.modules = {

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 197025:
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
/* harmony import */ var private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(992376);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/community/thread/[id]",
        pathname: "/community/thread/[id]",
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
    userland: private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/community/thread/[id]",
    config,
    userland: private_next_pages_community_thread_id_tsx__WEBPACK_IMPORTED_MODULE_5__,
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

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 992376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThreadDetailPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_EnhancedLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328453);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var fetchJson = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (url, opts) {
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
function ThreadDetailPage() {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var {
    id
  } = router.query;
  var [thread, setThread] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [replies, setReplies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [replyBody, setReplyBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!id) return;
    setLoading(true);
    fetchJson("/api/community/thread/".concat(id)).then(d => {
      setThread(d.thread);
      setReplies(d.replies);
    }).finally(() => setLoading(false));
  }, [id]);
  var topLevelReplies = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => replies.filter(r => !r.parentReplyId), [replies]);
  var childRepliesMap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var m = {};
    replies.forEach(r => {
      var _r$parentReplyId;
      if (!r.parentReplyId) return;
      (m[_r$parentReplyId = r.parentReplyId] || (m[_r$parentReplyId] = [])).push(r);
    });
    return m;
  }, [replies]);
  var vote = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (type, targetId, direction) {
      yield fetchJson('/api/community/vote', {
        method: 'POST',
        body: JSON.stringify({
          type,
          id: targetId,
          direction
        }),
        headers: {
          'x-user-id': 'demo-user',
          'x-user-name': 'Demo User',
          'x-user-role': 'Talent'
        }
      });
      var d = yield fetchJson("/api/community/thread/".concat(id));
      setThread(d.thread);
      setReplies(d.replies);
    });
    return function vote(_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();
  var submitReply = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (parentReplyId) {
      if (!replyBody.trim()) return;
      yield fetchJson("/api/community/thread/".concat(id, "/reply"), {
        method: 'POST',
        body: JSON.stringify({
          body: replyBody.trim(),
          parentReplyId
        }),
        headers: {
          'x-user-id': 'demo-user',
          'x-user-name': 'Demo User',
          'x-user-role': 'Talent'
        }
      });
      setReplyBody('');
      var d = yield fetchJson("/api/community/thread/".concat(id));
      setThread(d.thread);
      setReplies(d.replies);
    });
    return function submitReply(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();
  var markAnswered = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (answered) {
      yield fetchJson("/api/community/thread/".concat(id, "/answer"), {
        method: 'POST',
        body: JSON.stringify({
          answered
        }),
        headers: {
          'x-user-id': 'demo-user',
          'x-user-name': 'Demo User',
          'x-user-role': 'Moderator'
        }
      });
      var d = yield fetchJson("/api/community/thread/".concat(id));
      setThread(d.thread);
      setReplies(d.replies);
    });
    return function markAnswered(_x7) {
      return _ref4.apply(this, arguments);
    };
  }();
  var adminUpdate = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (updates) {
      yield fetchJson("/api/community/thread/".concat(id, "/admin"), {
        method: 'POST',
        body: JSON.stringify(updates),
        headers: {
          'x-user-id': 'admin',
          'x-user-name': 'Admin',
          'x-user-role': 'Admin'
        }
      });
      var d = yield fetchJson("/api/community/thread/".concat(id));
      setThread(d.thread);
      setReplies(d.replies);
    });
    return function adminUpdate(_x8) {
      return _ref5.apply(this, arguments);
    };
  }();
  var report = /*#__PURE__*/function () {
    var _ref6 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* (targetType, targetId) {
      yield fetchJson('/api/community/report', {
        method: 'POST',
        body: JSON.stringify({
          targetType,
          targetId,
          reason: 'Abusive'
        }),
        headers: {
          'x-user-id': 'demo-user',
          'x-user-name': 'Demo User',
          'x-user-role': 'Talent'
        }
      });
      alert('Reported. Thanks for keeping the community safe.');
    });
    return function report(_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }();
  if (loading || !thread) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_layout_EnhancedLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "py-10 text-center text-gray-500",
      children: "Loading\u2026"
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_layout_EnhancedLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("article", {
      className: "max-w-3xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("header", {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex items-center gap-2 text-xs text-gray-500",
          children: [thread.isPinned && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "px-2 py-0.5 rounded bg-yellow-100 text-yellow-800",
            children: "Pinned"
          }), thread.isFeatured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "px-2 py-0.5 rounded bg-purple-100 text-purple-800",
            children: "Featured"
          }), thread.isLocked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "px-2 py-0.5 rounded bg-gray-200 text-gray-700",
            children: "Locked"
          }), thread.isAnswered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "px-2 py-0.5 rounded bg-green-100 text-green-800",
            children: "Answered"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-2xl font-semibold mt-1",
          children: thread.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "mt-2 text-sm text-gray-600 dark:text-gray-300",
          children: ["Posted by ", thread.authorName, " \u2022 ", new Date(thread.createdAt).toLocaleString()]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "prose dark:prose-invert max-w-none mb-6 whitespace-pre-wrap",
        children: thread.body
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex items-center gap-3 mb-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "px-3 py-2 rounded bg-gray-100 dark:bg-gray-900",
          onClick: () => vote('thread', thread.id, 1),
          children: "\uD83D\uDC4D Upvote"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "px-3 py-2 rounded bg-gray-100 dark:bg-gray-900",
          onClick: () => vote('thread', thread.id, -1),
          children: "\uD83D\uDC4E Downvote"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "px-3 py-2 rounded bg-gray-100 dark:bg-gray-900",
          onClick: () => report('thread', thread.id),
          children: "\uD83D\uDEA9 Report"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "px-3 py-2 rounded bg-green-600 text-white",
          onClick: () => markAnswered(!thread.isAnswered),
          children: thread.isAnswered ? 'Unmark Answered' : 'Mark as Answered'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ml-auto flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-2 rounded bg-yellow-600 text-white",
            onClick: () => adminUpdate({
              isPinned: !thread.isPinned
            }),
            children: thread.isPinned ? 'Unpin' : 'Pin'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-2 rounded bg-gray-600 text-white",
            onClick: () => adminUpdate({
              isLocked: !thread.isLocked
            }),
            children: thread.isLocked ? 'Unlock' : 'Lock'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-2 rounded bg-purple-600 text-white",
            onClick: () => adminUpdate({
              isFeatured: !thread.isFeatured
            }),
            children: thread.isFeatured ? 'Unfeature' : 'Feature'
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h2", {
          className: "text-lg font-medium mb-3",
          children: ["Replies (", replies.length, ")"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
          className: "space-y-3",
          children: topLevelReplies.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            className: "p-3 rounded border border-gray-200 dark:border-gray-800",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "text-sm text-gray-500",
              children: [r.authorName, " \u2022 ", new Date(r.createdAt).toLocaleString()]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "mt-2 whitespace-pre-wrap",
              children: r.body
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "mt-2 flex items-center gap-2 text-sm text-gray-500",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                onClick: () => vote('reply', r.id, 1),
                children: ["\uD83D\uDC4D ", r.votes]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: () => vote('reply', r.id, -1),
                children: "\uD83D\uDC4E"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: () => report('reply', r.id),
                children: "\uD83D\uDEA9 Report"
              })]
            }), (childRepliesMap[r.id] || []).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
              className: "mt-3 ml-6 space-y-2",
              children: (childRepliesMap[r.id] || []).map(cr => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                className: "p-2 rounded border border-gray-200 dark:border-gray-800",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "text-xs text-gray-500",
                  children: [cr.authorName, " \u2022 ", new Date(cr.createdAt).toLocaleString()]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1 whitespace-pre-wrap",
                  children: cr.body
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mt-1 flex items-center gap-2 text-xs text-gray-500",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                    onClick: () => vote('reply', cr.id, 1),
                    children: ["\uD83D\uDC4D ", cr.votes]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                    onClick: () => vote('reply', cr.id, -1),
                    children: "\uD83D\uDC4E"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                    onClick: () => report('reply', cr.id),
                    children: "\uD83D\uDEA9 Report"
                  })]
                })]
              }, cr.id))
            })]
          }, r.id))
        })]
      }), !thread.isLocked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "mt-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          className: "text-md font-medium mb-2",
          children: "Add a reply"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
          className: "w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-900 min-h-[120px]",
          value: replyBody,
          onChange: e => setReplyBody(e.target.value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "mt-2 flex justify-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "px-3 py-2 rounded bg-blue-600 text-white",
            onClick: () => submitReply(),
            children: "Reply"
          })
        })]
      })]
    })
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(197025)));
module.exports = __webpack_exports__;

})();