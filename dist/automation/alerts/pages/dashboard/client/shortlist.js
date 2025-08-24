"use strict";
(() => {
var exports = {};
exports.id = 512749;
exports.ids = [512749,890636];
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

/***/ 184771:
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
/* harmony import */ var private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(955959);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/dashboard/client/shortlist",
        pathname: "/dashboard/client/shortlist",
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
    userland: private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/dashboard/client/shortlist",
    config,
    userland: private_next_pages_dashboard_client_shortlist_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 245195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HiringBoard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TalentCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(636184);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var DEFAULT_COLUMNS = [{
  key: "applied",
  title: "Applied"
}, {
  key: "shortlisted",
  title: "Shortlisted"
}, {
  key: "interview",
  title: "Interview"
}, {
  key: "offer",
  title: "Offer"
}, {
  key: "hired",
  title: "Hired"
}];
function HiringBoard(_ref) {
  var {
    applications,
    onMove,
    columns = DEFAULT_COLUMNS
  } = _ref;
  var appsByStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var map = {
      applied: [],
      shortlisted: [],
      interview: [],
      offer: [],
      hired: [],
      rejected: []
    };
    for (var app of applications) {
      if (!map[app.status]) map[app.status] = [];
      map[app.status].push(app);
    }
    return map;
  }, [applications]);
  var counts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var c = {};
    for (var col of columns) {
      var _appsByStatus$col$key;
      c[col.key] = ((_appsByStatus$col$key = appsByStatus[col.key]) === null || _appsByStatus$col$key === void 0 ? void 0 : _appsByStatus$col$key.length) || 0;
    }
    return c;
  }, [columns, appsByStatus]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "grid grid-cols-1 md:grid-cols-5 gap-4",
    children: columns.map(col => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-200 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-800",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-sm font-semibold",
          children: col.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-xs text-gray-500",
          children: counts[col.key] || 0
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "flex-1 p-3 min-h-[200px] space-y-3",
        onDragOver: e => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
        },
        onDrop: e => {
          e.preventDefault();
          var id = e.dataTransfer.getData("text/application-id");
          if (id) onMove(id, col.key);
        },
        children: (appsByStatus[col.key] || []).map(app => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TalentCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          application: app,
          draggable: true,
          onStatusChange: (id, status) => onMove(id, status)
        }, app.id))
      })]
    }, col.key))
  });
}

/***/ }),

/***/ 294463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchJobApplications: () => (/* binding */ fetchJobApplications),
/* harmony export */   touchApplicationActivity: () => (/* binding */ touchApplicationActivity),
/* harmony export */   updateApplicationNotes: () => (/* binding */ updateApplicationNotes),
/* harmony export */   updateApplicationStatus: () => (/* binding */ updateApplicationStatus)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(860076);
/* harmony import */ var _supabase_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45393);


function mapRowToApplication(row) {
  var _row$talent$id, _ref, _row$talent$name, _ref2, _row$talent$title, _ref3, _row$talent$photo_url, _row$talent_name, _row$talent_title, _row$talent_photo, _row$score, _row$resume_url, _row$notes, _row$created_at, _row$updated_at, _row$last_activity_at;
  var talent = row.talent ? {
    id: (_row$talent$id = row.talent.id) !== null && _row$talent$id !== void 0 ? _row$talent$id : row.talent_id,
    name: (_ref = (_row$talent$name = row.talent.name) !== null && _row$talent$name !== void 0 ? _row$talent$name : row.talent_name) !== null && _ref !== void 0 ? _ref : "Unnamed Talent",
    title: (_ref2 = (_row$talent$title = row.talent.title) !== null && _row$talent$title !== void 0 ? _row$talent$title : row.talent_title) !== null && _ref2 !== void 0 ? _ref2 : undefined,
    photoUrl: (_ref3 = (_row$talent$photo_url = row.talent.photo_url) !== null && _row$talent$photo_url !== void 0 ? _row$talent$photo_url : row.talent_photo) !== null && _ref3 !== void 0 ? _ref3 : undefined
  } : {
    id: row.talent_id,
    name: (_row$talent_name = row.talent_name) !== null && _row$talent_name !== void 0 ? _row$talent_name : "Unnamed Talent",
    title: (_row$talent_title = row.talent_title) !== null && _row$talent_title !== void 0 ? _row$talent_title : undefined,
    photoUrl: (_row$talent_photo = row.talent_photo) !== null && _row$talent_photo !== void 0 ? _row$talent_photo : undefined
  };
  return {
    id: row.id,
    jobId: row.job_id,
    talentId: row.talent_id,
    status: row.status,
    score: (_row$score = row.score) !== null && _row$score !== void 0 ? _row$score : null,
    resumeUrl: (_row$resume_url = row.resume_url) !== null && _row$resume_url !== void 0 ? _row$resume_url : null,
    notes: (_row$notes = row.notes) !== null && _row$notes !== void 0 ? _row$notes : null,
    createdAt: (_row$created_at = row.created_at) !== null && _row$created_at !== void 0 ? _row$created_at : undefined,
    updatedAt: (_row$updated_at = row.updated_at) !== null && _row$updated_at !== void 0 ? _row$updated_at : undefined,
    lastActivityAt: (_row$last_activity_at = row.last_activity_at) !== null && _row$last_activity_at !== void 0 ? _row$last_activity_at : null,
    talent
  };
}
function fetchJobApplications(_x, _x2) {
  return _fetchJobApplications.apply(this, arguments);
}
function _fetchJobApplications() {
  _fetchJobApplications = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (jobId, filters) {
    var query = _supabase_client__WEBPACK_IMPORTED_MODULE_0__.supabase.from("job_applications").select("id, job_id, talent_id, status, score, resume_url, notes, created_at, updated_at, last_activity_at, talent_name, talent_title, talent_photo");
    if (jobId) {
      query = query.eq("job_id", jobId);
    }
    if (filters !== null && filters !== void 0 && filters.status && filters.status !== "all") {
      query = query.eq("status", filters.status);
    }
    if (typeof (filters === null || filters === void 0 ? void 0 : filters.minScore) === "number") {
      query = query.gte("score", filters.minScore);
    }
    if (filters !== null && filters !== void 0 && filters.fromDate) {
      query = query.gte("created_at", filters.fromDate.toISOString());
    }
    if (filters !== null && filters !== void 0 && filters.toDate) {
      query = query.lte("created_at", filters.toDate.toISOString());
    }
    var {
      data,
      error
    } = yield query.order("created_at", {
      ascending: false
    });
    if (error) {
      console.error("Error fetching applications", error);
      return [];
    }
    return (data !== null && data !== void 0 ? data : []).map(mapRowToApplication);
  });
  return _fetchJobApplications.apply(this, arguments);
}
function updateApplicationStatus(_x3, _x4) {
  return _updateApplicationStatus.apply(this, arguments);
}
function _updateApplicationStatus() {
  _updateApplicationStatus = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (applicationId, newStatus) {
    var {
      error
    } = yield _supabase_client__WEBPACK_IMPORTED_MODULE_0__.supabase.from("job_applications").update({
      status: newStatus,
      last_activity_at: new Date().toISOString()
    }).eq("id", applicationId);
    if (error) {
      console.error("Error updating application status", error);
      return false;
    }
    return true;
  });
  return _updateApplicationStatus.apply(this, arguments);
}
function updateApplicationNotes(_x5, _x6) {
  return _updateApplicationNotes.apply(this, arguments);
}
function _updateApplicationNotes() {
  _updateApplicationNotes = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (applicationId, notes) {
    var {
      error
    } = yield _supabase_client__WEBPACK_IMPORTED_MODULE_0__.supabase.from("job_applications").update({
      notes,
      last_activity_at: new Date().toISOString()
    }).eq("id", applicationId);
    if (error) {
      console.error("Error updating application notes", error);
      return false;
    }
    return true;
  });
  return _updateApplicationNotes.apply(this, arguments);
}
function touchApplicationActivity(_x7) {
  return _touchApplicationActivity.apply(this, arguments);
}
function _touchApplicationActivity() {
  _touchApplicationActivity = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (applicationId) {
    yield _supabase_client__WEBPACK_IMPORTED_MODULE_0__.supabase.from("job_applications").update({
      last_activity_at: new Date().toISOString()
    }).eq("id", applicationId);
  });
  return _touchApplicationActivity.apply(this, arguments);
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

/***/ 636184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TalentCard: () => (/* binding */ TalentCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_STATUSES = ["applied", "shortlisted", "interview", "offer", "hired", "rejected"];
function TalentCard(_ref) {
  var _application$notes, _application$talent, _application$talent2, _application$talent3, _application$talent4;
  var {
    application,
    onStatusChange,
    onNotesChange,
    onMessage,
    statuses = DEFAULT_STATUSES,
    stalledAfterDays = 7,
    draggable = false
  } = _ref;
  var [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_application$notes = application.notes) !== null && _application$notes !== void 0 ? _application$notes : "");
  var isStalled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _ref2, _application$lastActi;
    var ref = (_ref2 = (_application$lastActi = application.lastActivityAt) !== null && _application$lastActi !== void 0 ? _application$lastActi : application.updatedAt) !== null && _ref2 !== void 0 ? _ref2 : application.createdAt;
    if (!ref) return false;
    var days = (Date.now() - new Date(ref).getTime()) / (1000 * 60 * 60 * 24);
    return days >= stalledAfterDays;
  }, [application.createdAt, application.updatedAt, application.lastActivityAt, stalledAfterDays]);
  var handleSaveNotes = () => {
    if (onNotesChange) onNotesChange(application.id, notes);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 shadow-sm p-4 backdrop-blur-sm ".concat(isStalled ? "ring-2 ring-amber-400" : ""),
    draggable: draggable,
    onDragStart: e => {
      if (!draggable) return;
      e.dataTransfer.setData("text/application-id", application.id);
      e.dataTransfer.effectAllowed = "move";
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex items-center gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: ((_application$talent = application.talent) === null || _application$talent === void 0 ? void 0 : _application$talent.photoUrl) || "/avatar-placeholder.png",
        alt: ((_application$talent2 = application.talent) === null || _application$talent2 === void 0 ? void 0 : _application$talent2.name) || "Talent",
        className: "h-12 w-12 rounded-full object-cover"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex-1 min-w-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "font-semibold truncate",
            children: ((_application$talent3 = application.talent) === null || _application$talent3 === void 0 ? void 0 : _application$talent3.name) || "Talent"
          }), typeof application.score === "number" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            className: "ml-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700",
            children: ["Score ", application.score]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "text-sm text-gray-500 truncate",
          children: ((_application$talent4 = application.talent) === null || _application$talent4 === void 0 ? void 0 : _application$talent4.title) || "Candidate"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          className: "text-xs text-gray-500",
          children: "Status"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
          className: "mt-1 w-full rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm",
          value: application.status,
          onChange: e => onStatusChange === null || onStatusChange === void 0 ? void 0 : onStatusChange(application.id, e.target.value),
          children: statuses.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: s,
            children: s.charAt(0).toUpperCase() + s.slice(1)
          }, s))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-end gap-2",
        children: [application.resumeUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: application.resumeUrl,
          className: "inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50",
          target: "_blank",
          rel: "noreferrer",
          children: "Resume"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "text-xs text-gray-400",
          children: "No resume"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "ml-auto inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700",
          onClick: () => onMessage === null || onMessage === void 0 ? void 0 : onMessage(application.talentId),
          children: "Message"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        className: "text-xs text-gray-500",
        children: "Notes"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
        className: "mt-1 w-full rounded-md border border-gray-300 bg-white dark:bg-gray-800 p-2 text-sm",
        rows: 3,
        placeholder: "Add private notes",
        value: notes,
        onChange: e => setNotes(e.target.value),
        onBlur: handleSaveNotes
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TalentCard);

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 703735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


var STATUSES = ["all", "applied", "shortlisted", "interview", "offer", "hired", "rejected"];
function Filters(_ref) {
  var _filters$status;
  var {
    filters,
    onChange: _onChange
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex flex-col md:flex-row gap-3 items-end",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "text-xs text-gray-500",
        children: "Status"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        className: "mt-1 w-full rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm",
        value: (_filters$status = filters.status) !== null && _filters$status !== void 0 ? _filters$status : "all",
        onChange: e => _onChange(_objectSpread(_objectSpread({}, filters), {}, {
          status: e.target.value
        })),
        children: STATUSES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: s,
          children: typeof s === "string" ? s.charAt(0).toUpperCase() + s.slice(1) : s
        }, s))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "text-xs text-gray-500",
        children: "Min Score"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "number",
        placeholder: "e.g. 70",
        className: "mt-1 w-28 rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm px-2 py-1",
        value: typeof filters.minScore === "number" ? filters.minScore : "",
        onChange: e => _onChange(_objectSpread(_objectSpread({}, filters), {}, {
          minScore: e.target.value === "" ? undefined : Number(e.target.value)
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-end gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          className: "text-xs text-gray-500",
          children: "From"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "date",
          className: "mt-1 w-40 rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm px-2 py-1",
          value: filters.fromDate ? new Date(filters.fromDate).toISOString().substring(0, 10) : "",
          onChange: e => _onChange(_objectSpread(_objectSpread({}, filters), {}, {
            fromDate: e.target.value ? new Date(e.target.value) : null
          }))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          className: "text-xs text-gray-500",
          children: "To"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "date",
          className: "mt-1 w-40 rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm px-2 py-1",
          value: filters.toDate ? new Date(filters.toDate).toISOString().substring(0, 10) : "",
          onChange: e => _onChange(_objectSpread(_objectSpread({}, filters), {}, {
            toDate: e.target.value ? new Date(e.target.value) : null
          }))
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

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

/***/ 955959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientShortlistPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44233);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45393);
/* harmony import */ var _components_hiring_HiringBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(245195);
/* harmony import */ var _components_hiring_TalentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(636184);
/* harmony import */ var _components_hiring_Filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(703735);
/* harmony import */ var _utils_api_hiring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(294463);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








function useToast() {
  var [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("info");
  var show = function show(msg) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    setMessage(msg);
    setType(t);
    setTimeout(() => setMessage(null), 2500);
  };
  var node = message ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "fixed top-4 right-4 z-50 rounded-md px-4 py-2 shadow-lg text-white ".concat(type === "success" ? "bg-emerald-600" : type === "error" ? "bg-rose-600" : "bg-gray-800"),
    children: message
  }) : null;
  return {
    show,
    node
  };
}
function ClientShortlistPage() {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var [isAuthChecked, setIsAuthChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [jobId, setJobId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    status: "all"
  });
  var [applications, setApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("board");
  var {
    show,
    node
  } = useToast();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _utils_supabase_client__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession().then(res => {
      if (!res.data.session) {
        router.replace("/auth/login");
        return;
      }
      setIsAuthChecked(true);
    });
  }, [router]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isAuthChecked) return;
    setLoading(true);
    (0,_utils_api_hiring__WEBPACK_IMPORTED_MODULE_7__.fetchJobApplications)(jobId || undefined, filters).then(data => setApplications(data)).finally(() => setLoading(false));
  }, [isAuthChecked, jobId, filters]);
  var shortlistedOnly = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => applications.filter(a => a.status === "shortlisted"), [applications]);
  var analytics = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var total = applications.length;
    var hired = applications.filter(a => a.status === "hired");
    var hiredCount = hired.length;
    var avgTimeToHireDays = hired.length ? Math.round(hired.reduce((acc, a) => {
      var start = a.createdAt ? new Date(a.createdAt).getTime() : Date.now();
      var end = a.updatedAt ? new Date(a.updatedAt).getTime() : Date.now();
      return acc + (end - start);
    }, 0) / hired.length / (1000 * 60 * 60 * 24)) : 0;
    var ratio = total ? Math.round(hiredCount / total * 100) : 0;
    var stageCounts = {
      applied: applications.filter(a => a.status === "applied").length,
      shortlisted: applications.filter(a => a.status === "shortlisted").length,
      interview: applications.filter(a => a.status === "interview").length,
      offer: applications.filter(a => a.status === "offer").length,
      hired: applications.filter(a => a.status === "hired").length,
      rejected: applications.filter(a => a.status === "rejected").length
    };
    return {
      total,
      hiredCount,
      avgTimeToHireDays,
      ratio,
      stageCounts
    };
  }, [applications]);
  var handleMove = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(function* (id, status) {
      if (yield (0,_utils_api_hiring__WEBPACK_IMPORTED_MODULE_7__.updateApplicationStatus)(id, status)) {
        setApplications(prev => prev.map(a => a.id === id ? _objectSpread(_objectSpread({}, a), {}, {
          status
        }) : a));
        show("Talent moved to ".concat(status.charAt(0).toUpperCase() + status.slice(1), " stage"), "success");
      } else {
        show("Failed to update status", "error");
      }
    });
    return function handleMove(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleNotes = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(function* (id, notes) {
      var ok = yield (0,_utils_api_hiring__WEBPACK_IMPORTED_MODULE_7__.updateApplicationNotes)(id, notes);
      if (ok) {
        setApplications(prev => prev.map(a => a.id === id ? _objectSpread(_objectSpread({}, a), {}, {
          notes
        }) : a));
        show("Notes saved", "success");
      } else {
        show("Failed to save notes", "error");
      }
    });
    return function handleNotes(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var filteredList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var list = shortlistedOnly;
    if (filters.status && filters.status !== "all") {
      list = list.filter(a => a.status === filters.status);
    }
    if (typeof filters.minScore === "number") {
      list = list.filter(a => typeof a.score === "number" && a.score >= filters.minScore);
    }
    if (filters.fromDate) {
      list = list.filter(a => a.createdAt && new Date(a.createdAt) >= filters.fromDate);
    }
    if (filters.toDate) {
      list = list.filter(a => a.createdAt && new Date(a.createdAt) <= filters.toDate);
    }
    return list;
  }, [shortlistedOnly, filters]);
  if (!isAuthChecked) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900",
    children: [node, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "mx-auto max-w-7xl px-4 py-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "text-2xl font-bold",
          children: "Shortlist & Hiring Tracker"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
            className: "text-sm text-gray-600",
            children: "Job ID"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            className: "w-56 rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-2 py-1 text-sm",
            placeholder: "Optional: filter by job id",
            value: jobId,
            onChange: e => setJobId(e.target.value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "ml-2 inline-flex rounded-md border border-gray-300 p-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
              className: "px-3 py-1 text-sm rounded ".concat(view === "board" ? "bg-gray-200 dark:bg-gray-700" : ""),
              onClick: () => setView("board"),
              children: "Board"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
              className: "px-3 py-1 text-sm rounded ".concat(view === "list" ? "bg-gray-200 dark:bg-gray-700" : ""),
              onClick: () => setView("list"),
              children: "List"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "lg:col-span-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h2", {
                className: "font-semibold",
                children: ["Hiring ", view === "board" ? "Board" : "Shortlist"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_hiring_Filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
                filters: filters,
                onChange: setFilters
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "mt-4",
              children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "py-10 text-center text-sm text-gray-500",
                children: "Loading..."
              }) : view === "board" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_hiring_HiringBoard__WEBPACK_IMPORTED_MODULE_4__["default"], {
                applications: applications,
                onMove: handleMove
              }) : filteredList.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: filteredList.map(app => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_hiring_TalentCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  application: app,
                  onStatusChange: handleMove,
                  onNotesChange: handleNotes,
                  onMessage: talentId => router.push("/chat-content?to=".concat(encodeURIComponent(talentId)))
                }, app.id))
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "py-10 text-center text-sm text-gray-500",
                children: ["No one shortlisted yet \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: "/talent",
                  className: "text-indigo-600 underline",
                  children: "explore top matches"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "lg:col-span-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              className: "font-semibold",
              children: "Analytics"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "mt-3 space-y-2 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: "Time to Hire"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                  className: "font-medium",
                  children: [analytics.avgTimeToHireDays, " days"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: "Application \u2192 Hire"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                  className: "font-medium",
                  children: [analytics.ratio, "%"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "mt-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                  className: "text-xs text-gray-500",
                  children: "Funnel"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "mt-1 space-y-1",
                  children: ["applied", "shortlisted", "interview", "offer", "hired"].map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      className: "capitalize",
                      children: s
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      className: "font-medium",
                      children: analytics.stageCounts[s]
                    })]
                  }, s))
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mt-4 rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              className: "font-semibold",
              children: "Tips"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
              className: "mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
                children: "Drag candidates across stages to update status"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
                children: "Use filters to focus by score and date"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
                children: "Notes are private to your team"
              })]
            })]
          })]
        })]
      })]
    })]
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(184771)));
module.exports = __webpack_exports__;

})();