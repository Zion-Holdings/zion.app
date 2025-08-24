"use strict";
(() => {
var exports = {};
exports.id = 607084;
exports.ids = [607084,890636];
exports.modules = {

/***/ 227563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminBlog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


var emptyPost = {
  title: '',
  slug: '',
  author: '',
  publishDate: new Date().toISOString().slice(0, 10),
  tags: [],
  topics: [],
  seo: {
    metaTitle: '',
    metaDescription: '',
    ogImageUrl: ''
  },
  body: '',
  status: 'draft'
};
function AdminBlog() {
  var _editing$seo, _editing$seo2;
  var [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyPost);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var t = localStorage.getItem('adminToken') || '';
    setToken(t);
    fetch('/api/blog/posts?status=draft').then(r => r.json()).then(d => setPosts(d.items || [])).catch(() => {});
    fetch('/api/blog/posts?status=published').then(r => r.json()).then(d => setPosts(p => [...p, ...(d.items || [])])).catch(() => {});
  }, []);
  var saveToken = () => {
    localStorage.setItem('adminToken', token);
  };
  var save = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      var publish = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var payload = _objectSpread(_objectSpread({}, editing), {}, {
        status: publish ? 'published' : editing.status || 'draft'
      });
      var isCreate = !payload.id;
      var res = yield fetch(isCreate ? '/api/blog/posts' : "/api/blog/posts/".concat(payload.id), {
        method: isCreate ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': token
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        var saved = yield res.json();
        setEditing(saved);
        // refresh list
        var list = yield fetch('/api/blog/posts').then(r => r.json());
        setPosts(list.items || []);
        alert('Saved');
      } else {
        var err = yield res.json().catch(() => ({}));
        alert('Error: ' + (err.error || res.statusText));
      }
    });
    return function save() {
      return _ref.apply(this, arguments);
    };
  }();
  var startEdit = p => {
    if (p) setEditing(p);else setEditing(_objectSpread({}, emptyPost));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "mx-auto max-w-5xl",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "text-3xl font-bold mb-4",
      children: "Blog Admin"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "mb-6 flex gap-2 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        value: token,
        onChange: e => setToken(e.target.value),
        placeholder: "Admin token",
        className: "border rounded px-3 py-2 w-72"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        onClick: saveToken,
        className: "px-3 py-2 border rounded",
        children: "Save token"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        onClick: () => startEdit(),
        className: "ml-auto px-3 py-2 bg-indigo-600 text-white rounded",
        children: "New Post"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "md:col-span-1 border rounded p-3 h-[70vh] overflow-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "font-semibold mb-2",
          children: "All Posts"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          className: "space-y-2",
          children: posts.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: () => startEdit(p),
              className: "text-left underline",
              children: p.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-xs px-2 py-1 rounded ".concat(p.status === 'published' ? 'bg-green-100' : 'bg-yellow-100'),
              children: p.status
            })]
          }, p.id))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "md:col-span-2 border rounded p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "font-semibold mb-3",
          children: "Editor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "Title",
            value: editing.title || '',
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              title: e.target.value,
              seo: _objectSpread(_objectSpread({}, s.seo || {
                metaTitle: '',
                metaDescription: ''
              }), {}, {
                metaTitle: e.target.value
              })
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "Slug (permalink)",
            value: editing.slug || '',
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              slug: e.target.value
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "Cover Image URL",
            value: editing.coverImageUrl || '',
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              coverImageUrl: e.target.value
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "Author",
            value: editing.author || '',
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              author: e.target.value
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "date",
            className: "border rounded px-3 py-2",
            value: (editing.publishDate || '').slice(0, 10),
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              publishDate: new Date(e.target.value).toISOString()
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "Tags (comma separated)",
            value: (editing.tags || []).join(', '),
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              tags: e.target.value.split(',').map(x => x.trim()).filter(Boolean)
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "Topics (comma separated)",
            value: (editing.topics || []).join(', '),
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              topics: e.target.value.split(',').map(x => x.trim()).filter(Boolean)
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "SEO Meta Title",
            value: ((_editing$seo = editing.seo) === null || _editing$seo === void 0 ? void 0 : _editing$seo.metaTitle) || '',
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              seo: _objectSpread(_objectSpread({}, s.seo || {}), {}, {
                metaTitle: e.target.value
              })
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            className: "border rounded px-3 py-2",
            placeholder: "SEO Meta Description",
            value: ((_editing$seo2 = editing.seo) === null || _editing$seo2 === void 0 ? void 0 : _editing$seo2.metaDescription) || '',
            onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
              seo: _objectSpread(_objectSpread({}, s.seo || {}), {}, {
                metaDescription: e.target.value
              })
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
          className: "border rounded px-3 py-2 mt-3 w-full h-64",
          placeholder: "Body (Markdown or HTML)",
          value: editing.body || '',
          onChange: e => setEditing(s => _objectSpread(_objectSpread({}, s), {}, {
            body: e.target.value
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "mt-3 flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: () => save(false),
            className: "px-4 py-2 border rounded",
            children: "Save Draft"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: () => save(true),
            className: "px-4 py-2 bg-green-600 text-white rounded",
            children: "Publish"
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

/***/ 848684:
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
/* harmony import */ var private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(227563);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/admin/blog",
        pathname: "/admin/blog",
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
    userland: private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/admin/blog",
    config,
    userland: private_next_pages_admin_blog_index_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(848684)));
module.exports = __webpack_exports__;

})();