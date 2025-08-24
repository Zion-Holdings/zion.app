"use strict";
(() => {
var exports = {};
exports.id = 233438;
exports.ids = [233438,890636];
exports.modules = {

/***/ 11997:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 39399:
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
/* harmony import */ var private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(724878);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/dashboard/client",
        pathname: "/dashboard/client",
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
    userland: private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/dashboard/client",
    config,
    userland: private_next_pages_dashboard_client_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 55591:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 74075:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 724878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientDashboardSuggestedTalents)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45393);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





var SUGGESTION_TABLE_ENV = process.env.NEXT_PUBLIC_AI_MATCHES_TABLE || "ai_matches";
var MAX_SUGGESTIONS_PER_JOB = 5;
var badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
  className: "ml-2 inline-flex items-center rounded-full bg-indigo-600/10 px-2 py-0.5 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/20",
  children: "Matched by AI"
});
function InviteModal(_ref) {
  var {
    open,
    onClose,
    talent,
    jobTitle
  } = _ref;
  if (!open || !talent) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "mb-4 flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-lg font-semibold",
          children: "Invite to apply"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: onClose,
          className: "rounded p-1 hover:bg-gray-100",
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: talent.talent_photo_url || "/default-avatar.svg",
            alt: talent.talent_name,
            className: "h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500/20"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "font-medium",
              children: talent.talent_name
            }), talent.talent_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "text-xs text-gray-500",
              children: talent.talent_title
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            className: "mb-1 block text-sm font-medium text-gray-700",
            children: "Job"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            value: jobTitle || "",
            readOnly: true,
            className: "w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            className: "mb-1 block text-sm font-medium text-gray-700",
            children: "Message (optional)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
            placeholder: "Share context or request a quote...",
            className: "h-28 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center justify-end gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: onClose,
            className: "rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100",
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: onClose,
            className: "rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700",
            children: "Send Invite"
          })]
        })]
      })]
    })
  });
}
function ClientDashboardSuggestedTalents() {
  var [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var [groups, setGroups] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [inviteOpen, setInviteOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [inviteTalent, setInviteTalent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [inviteJobTitle, setInviteJobTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var mounted = true;
    function init() {
      return _init.apply(this, arguments);
    }
    function _init() {
      _init = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
        try {
          var _data$user;
          var {
            data
          } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.getUser();
          var currentUserId = ((_data$user = data.user) === null || _data$user === void 0 ? void 0 : _data$user.id) || null;
          if (!mounted) return;
          setUserId(currentUserId);
          if (!currentUserId) {
            setGroups([]);
            setLoading(false);
            return;
          }
          yield fetchSuggestions(currentUserId);
          setupRealtime(currentUserId);
        } finally {
          if (mounted) setLoading(false);
        }
      });
      return _init.apply(this, arguments);
    }
    init();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var fetchSuggestions = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (currentUserId) {
      setLoading(true);
      var {
        data,
        error
      } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.from(SUGGESTION_TABLE_ENV).select(["id", "match_type", "job_id", "job_title", "client_id", "talent_id", "talent_name", "talent_title", "talent_photo_url", "summary", "skills", "hourly_rate", "status", "score", "created_at"].join(",")).eq("client_id", currentUserId).or("match_type.eq.talent_for_job,match_type.is.null").order("score", {
        ascending: false
      }).order("created_at", {
        ascending: false
      });
      if (error) {
        // fail softly
        setGroups([]);
        setLoading(false);
        return;
      }
      var grouped = groupByJob(data || []);
      setGroups(grouped);
      setLoading(false);
    });
    return function fetchSuggestions(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var setupRealtime = currentUserId => {
    var channel = _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.channel("ai-matches-client-".concat(currentUserId)).on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: SUGGESTION_TABLE_ENV,
      filter: "client_id=eq.".concat(currentUserId)
    }, () => fetchSuggestions(currentUserId)).subscribe();

    // Optional: listen for updates to status
    _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.channel("ai-matches-client-upd-".concat(currentUserId)).on("postgres_changes", {
      event: "UPDATE",
      schema: "public",
      table: SUGGESTION_TABLE_ENV,
      filter: "client_id=eq.".concat(currentUserId)
    }, () => fetchSuggestions(currentUserId)).subscribe();
    return () => {
      _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.removeChannel(channel);
    };
  };
  var groupByJob = rows => {
    var byJob = new Map();
    for (var row of rows) {
      var key = row.job_id;
      if (!key) continue;
      var group = byJob.get(key) || {
        jobId: key,
        jobTitle: row.job_title || "Untitled Job",
        suggestions: []
      };
      if (group.suggestions.length < MAX_SUGGESTIONS_PER_JOB) {
        group.suggestions.push(row);
      }
      byJob.set(key, group);
    }
    return Array.from(byJob.values());
  };
  var content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "h-6 w-40 animate-pulse rounded bg-gray-200"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex gap-4 overflow-x-auto pb-2",
          children: Array.from({
            length: 3
          }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "h-48 w-72 min-w-[18rem] animate-pulse rounded-xl bg-gray-100"
          }, i))
        })]
      });
    }
    if (!userId) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800",
        children: "Please sign in to view AI-suggested talents for your jobs."
      });
    }
    if (!groups.length) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "mb-1 text-lg font-medium",
          children: "No suggestions yet \u2014 check back soon or explore manually"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "text-sm",
          children: "Our AI will populate matches as candidates align with your jobs."
        })]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "space-y-10",
      children: groups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "space-y-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "text-lg font-semibold text-gray-900",
          children: group.jobTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex gap-4 overflow-x-auto pb-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
            initial: false,
            children: group.suggestions.map(s => {
              var _s$skills;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                initial: {
                  opacity: 0,
                  y: 10
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  y: 10
                },
                transition: {
                  duration: 0.2
                },
                className: "relative min-w-[18rem] max-w-xs flex-1 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm ring-1 ring-transparent hover:shadow-md",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "absolute right-3 top-3",
                  children: badge
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    src: s.talent_photo_url || "/default-avatar.svg",
                    alt: s.talent_name,
                    className: "h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/10"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "font-medium text-gray-900",
                      children: s.talent_name
                    }), s.talent_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "text-xs text-gray-500",
                      children: s.talent_title
                    })]
                  })]
                }), s.summary && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "mt-3 line-clamp-3 text-sm text-gray-600",
                  children: s.summary
                }), !!((_s$skills = s.skills) !== null && _s$skills !== void 0 && _s$skills.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "mt-3 flex flex-wrap gap-1",
                  children: [s.skills.slice(0, 6).map(skill => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 ring-1 ring-inset ring-indigo-200",
                    children: skill
                  }, skill)), s.skills.length > 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                    className: "text-xs text-gray-400",
                    children: ["+", s.skills.length - 6, " more"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "mt-4 flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-sm text-gray-700",
                    children: s.hourly_rate ? "$".concat(s.hourly_rate, "/hr") : "Rate N/A"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                    onClick: () => {
                      setInviteTalent(s);
                      setInviteJobTitle(group.jobTitle);
                      setInviteOpen(true);
                    },
                    className: "rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700",
                    children: "Invite to Apply"
                  })]
                })]
              }, s.id);
            })
          })
        })]
      }, group.jobId))
    });
  }, [badge, groups, loading, userId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "mx-auto max-w-6xl space-y-6 px-4 py-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "text-2xl font-bold text-gray-900",
        children: "Suggested Talents"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-sm text-gray-600",
        children: "Top AI-picked candidates for your open jobs."
      })]
    }), content, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InviteModal, {
      open: inviteOpen,
      onClose: () => setInviteOpen(false),
      talent: inviteTalent,
      jobTitle: inviteJobTitle
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(39399)));
module.exports = __webpack_exports__;

})();