"use strict";
exports.id = 201937;
exports.ids = [201937];
exports.modules = {

/***/ 201937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationCenter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(780135);
/* harmony import */ var _hooks_useNotifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(343121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




var FILTERS = ['All', 'Unread', 'Onboarding', 'Messages', 'System Alerts'];
function NotificationCenter() {
  var {
    notifications,
    loading,
    error,
    activeFilter,
    setFilter,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismiss
  } = (0,_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_2__.useNotifications)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "mx-auto w-full max-w-3xl",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "mb-6 flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
          className: "text-2xl font-semibold",
          children: "Notifications"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-sm text-gray-600 dark:text-gray-300",
          children: "Stay on top of reminders, nudges, and system alerts."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "flex items-center gap-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          onClick: markAllAsRead,
          className: "inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800",
          children: "Mark all as read"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "mb-4 flex flex-wrap gap-2",
      children: FILTERS.map(f => {
        var isActive = activeFilter === f;
        var base = 'inline-flex items-center rounded-full px-3 py-1.5 text-sm border';
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
          className: isActive ? "".concat(base, " border-transparent text-white bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500") : "".concat(base, " border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"),
          onClick: () => setFilter(f),
          children: [f, f === 'Unread' && unreadCount > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white/20 px-1 text-xs font-semibold",
            children: unreadCount
          }) : null]
        }, f);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "space-y-3",
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-300",
        children: "Loading notifications..."
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "rounded-xl border border-red-300/60 bg-red-50 dark:border-red-900/50 dark:bg-red-950/30 p-3 text-sm text-red-700 dark:text-red-300",
        children: error
      }), !loading && notifications.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-center text-sm text-gray-600 dark:text-gray-300",
        children: "You're all caught up. No notifications."
      }), notifications.map(n => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        item: n,
        onMarkRead: markAsRead,
        onDismiss: dismiss
      }, n.id))]
    })]
  });
}

/***/ }),

/***/ 343121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNotifications: () => (/* binding */ useNotifications)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45393);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


var LOCAL_STORAGE_KEY = 'zion.notifications';
function isSupabaseConfigured() {
  // Fallback detection based on placeholder values
  var url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  var anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  if (!url || !anon) return false;
  if (url.includes('placeholder.supabase.co') || anon.includes('placeholder')) return false;
  return true;
}
function loadLocalNotifications() {
  if (true) return [];
  try {
    var raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_unused) {}
  // Seed sample data
  var now = new Date();
  var iso = minsAgo => new Date(now.getTime() - minsAgo * 60000).toISOString();
  var seeded = [{
    id: 'seed-1',
    title: 'Set your availability to get matched',
    message: 'Add now',
    created_at: iso(10),
    status: 'New',
    category: 'Onboarding',
    cta_label: 'Finish Profile',
    cta_href: '/talent/profile'
  }, {
    id: 'seed-2',
    title: 'Invite talent to your open job',
    message: 'Find candidates fast',
    created_at: iso(120),
    status: 'Viewed',
    category: 'System Alerts',
    cta_label: 'Open Job',
    cta_href: '/talent/jobs'
  }, {
    id: 'seed-3',
    title: 'We sent a reminder email',
    message: 'You can follow-up in messages',
    created_at: iso(60 * 24),
    status: 'Viewed',
    category: 'Messages',
    cta_label: 'Open Messages',
    cta_href: '/chat-content'
  }];
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seeded));
  } catch (_unused2) {}
  return seeded;
}
function saveLocalNotifications(notifications) {
  if (true) return;
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notifications));
  } catch (_unused3) {}
}
function useNotifications() {
  var [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  var [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('All');
  var refresh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
    setLoading(true);
    setError(null);
    try {
      if (isSupabaseConfigured()) {
        var {
          data,
          error: sbError
        } = yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('notifications').select('*').order('created_at', {
          ascending: false
        });
        if (sbError) throw sbError;
        var mapped = (data || []).map(row => ({
          id: String(row.id),
          title: row.title,
          message: row.message,
          created_at: row.created_at,
          status: row.status || 'New',
          category: row.category || 'System Alerts',
          cta_label: row.cta_label || undefined,
          cta_href: row.cta_href || undefined
        }));
        setNotifications(mapped);
      } else {
        var local = loadLocalNotifications();
        setNotifications(local);
      }
    } catch (e) {
      setError((e === null || e === void 0 ? void 0 : e.message) || 'Failed to load notifications');
      var _local = loadLocalNotifications();
      setNotifications(_local);
    } finally {
      setLoading(false);
    }
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    refresh();
  }, [refresh]);
  var filtered = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (activeFilter === 'All') return notifications;
    if (activeFilter === 'Unread') return notifications.filter(n => n.status === 'New');
    return notifications.filter(n => n.category === activeFilter);
  }, [notifications, activeFilter]);
  var unreadCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => notifications.filter(n => n.status === 'New').length, [notifications]);
  var markAsRead = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (id) {
      try {
        if (isSupabaseConfigured()) {
          yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('notifications').update({
            status: 'Viewed'
          }).eq('id', id);
        }
        setNotifications(prev => {
          var next = prev.map(n => n.id === id ? _objectSpread(_objectSpread({}, n), {}, {
            status: 'Viewed'
          }) : n);
          saveLocalNotifications(next);
          return next;
        });
      } catch (_unused4) {}
    });
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  var markAllAsRead = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
    try {
      if (isSupabaseConfigured()) {
        yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('notifications').update({
          status: 'Viewed'
        }).neq('status', 'Viewed');
      }
      setNotifications(prev => {
        var next = prev.map(n => _objectSpread(_objectSpread({}, n), {}, {
          status: 'Viewed'
        }));
        saveLocalNotifications(next);
        return next;
      });
    } catch (_unused5) {}
  }), []);
  var dismiss = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (id) {
      try {
        if (isSupabaseConfigured()) {
          yield _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.supabase.from('notifications').delete().eq('id', id);
        }
        setNotifications(prev => {
          var next = prev.filter(n => n.id !== id);
          saveLocalNotifications(next);
          return next;
        });
      } catch (_unused6) {}
    });
    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }(), []);
  var setFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(filter => setActiveFilter(filter), []);
  return {
    notifications: filtered,
    allNotifications: notifications,
    loading,
    error,
    unreadCount,
    activeFilter,
    setFilter,
    refresh,
    markAsRead,
    markAllAsRead,
    dismiss
  };
}

/***/ }),

/***/ 780135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationItem)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7887);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function formatTimeAgo(iso) {
  var date = new Date(iso);
  var diffMs = Date.now() - date.getTime();
  var minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return "".concat(minutes, "m ago");
  var hours = Math.floor(minutes / 60);
  if (hours < 24) return "".concat(hours, "h ago");
  var days = Math.floor(hours / 24);
  return "".concat(days, "d ago");
}
function CategoryIcon(_ref) {
  var {
    category
  } = _ref;
  var base = 'h-5 w-5';
  switch (category) {
    case 'Onboarding':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Rocket, {
        className: "".concat(base, " text-purple-500")
      });
    case 'Messages':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Mail, {
        className: "".concat(base, " text-cyan-500")
      });
    case 'System Alerts':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.AlertTriangle, {
        className: "".concat(base, " text-blue-500")
      });
    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Bell, {
        className: "".concat(base, " text-gray-500")
      });
  }
}
function NotificationItem(_ref2) {
  var {
    item,
    onMarkRead,
    onDismiss
  } = _ref2;
  var isNew = item.status === 'New';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm transition hover:shadow-md",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-start gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mt-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CategoryIcon, {
          category: item.category
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex-1 min-w-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "font-medium text-gray-900 dark:text-gray-100 truncate",
            children: item.title
          }), isNew && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            className: "inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 text-xs",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "h-1.5 w-1.5 rounded-full bg-blue-500"
            }), " New"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "mt-1 text-sm text-gray-600 dark:text-gray-300",
          children: item.message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: formatTimeAgo(item.created_at)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: "\u2022"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: item.category
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [item.cta_label && item.cta_href && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: item.cta_href,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:opacity-90",
            children: item.cta_label
          })
        }), isNew ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          onClick: () => onMarkRead(item.id),
          className: "inline-flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.CheckCircle, {
            className: "h-4 w-4 text-emerald-500"
          }), " Mark read"]
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: () => onDismiss(item.id),
          className: "inline-flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800",
          "aria-label": "Dismiss",
          title: "Dismiss",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.X, {
            className: "h-4 w-4"
          })
        })]
      })]
    })
  });
}

/***/ })

};
;