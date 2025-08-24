"use strict";
exports.id = 107700;
exports.ids = [107700];
exports.modules = {

/***/ 86084:
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


var ROLE_OPTIONS = ['Admin', 'Lead', 'Builder', 'Delegate'];
function Filters(_ref) {
  var {
    filters,
    onChange: _onChange,
    displayMode,
    onDisplayModeChange,
    showPhotos,
    onTogglePhotos
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-wrap gap-3 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "font-medium",
        children: "View:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
        className: "px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
        value: filters.view || 'all',
        onChange: e => _onChange(_objectSpread(_objectSpread({}, filters), {}, {
          view: e.target.value
        })),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "all",
          children: "All"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "dao",
          children: "DAO only"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          id: "teamOnly",
          type: "checkbox",
          className: "h-4 w-4",
          checked: !!filters.teamOnly,
          onChange: e => _onChange(_objectSpread(_objectSpread({}, filters), {}, {
            teamOnly: e.target.checked
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          htmlFor: "teamOnly",
          children: "Core Team only"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "font-medium ml-2",
        children: "Roles:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        multiple: true,
        className: "px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
        value: filters.roleTypes || [],
        onChange: e => {
          var selected = Array.from(e.target.selectedOptions).map(o => o.value);
          _onChange(_objectSpread(_objectSpread({}, filters), {}, {
            roleTypes: selected
          }));
        },
        children: ROLE_OPTIONS.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: r,
          children: r
        }, r))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        className: "px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex-1 min-w-[200px]",
        placeholder: "Search name, title, region...",
        value: filters.search || '',
        onChange: e => _onChange(_objectSpread(_objectSpread({}, filters), {}, {
          search: e.target.value
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-wrap gap-3 items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "font-medium",
        children: "Zone:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        className: "px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
        placeholder: "e.g., Africa, Europe, Global",
        onBlur: e => {
          var val = e.target.value.trim();
          _onChange(_objectSpread(_objectSpread({}, filters), {}, {
            zones: val ? [val] : []
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "font-medium",
        children: "Region:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        className: "px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
        placeholder: "e.g., Zion Africa",
        onBlur: e => {
          var val = e.target.value.trim();
          _onChange(_objectSpread(_objectSpread({}, filters), {}, {
            regions: val ? [val] : []
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "font-medium",
        children: "Country:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        className: "px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
        placeholder: "e.g., US, KE",
        onBlur: e => {
          var val = e.target.value.trim();
          _onChange(_objectSpread(_objectSpread({}, filters), {}, {
            countries: val ? [val] : []
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "ml-auto flex items-center gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "px-3 py-2 rounded-lg border ".concat(displayMode === 'tree' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800', " border-gray-300 dark:border-gray-700"),
            onClick: () => onDisplayModeChange('tree'),
            children: "Tree"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "px-3 py-2 rounded-lg border ".concat(displayMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800', " border-gray-300 dark:border-gray-700"),
            onClick: () => onDisplayModeChange('grid'),
            children: "Grid"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            id: "photos",
            type: "checkbox",
            className: "h-4 w-4",
            checked: showPhotos,
            onChange: e => onTogglePhotos(e.target.checked)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            htmlFor: "photos",
            children: "Photos"
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 107700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrgChartPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86084);
/* harmony import */ var _OrgTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(256581);
/* harmony import */ var _OrgGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(648981);
/* harmony import */ var _utils_org__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(483152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function OrgChartPage() {
  var [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    view: 'all'
  });
  var [displayMode, setDisplayMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('tree');
  var [showPhotos, setShowPhotos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    founders: [],
    coreTeam: [],
    contributors: [],
    delegates: []
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var controller = new AbortController();
    var fetchData = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(function* () {
        var qs = (0,_utils_org__WEBPACK_IMPORTED_MODULE_6__.buildOrgQuery)({
          view: filters.view,
          roleTypes: filters.roleTypes,
          departments: filters.departments,
          categories: filters.categories,
          zones: filters.zones,
          regions: filters.regions,
          countries: filters.countries,
          search: filters.search,
          teamOnly: !!filters.teamOnly
        });
        var res = yield fetch("/api/org".concat(qs), {
          signal: controller.signal
        });
        if (!res.ok) return;
        var json = yield res.json();
        setData(json);
      });
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchData();
    return () => controller.abort();
  }, [filters]);
  var gaps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_org__WEBPACK_IMPORTED_MODULE_6__.detectGaps)(data, [{
    department: 'Tech',
    region: 'Zion Africa'
  }, {
    department: 'Ops',
    region: 'Zion Africa'
  }, {
    department: 'Growth',
    region: 'Zion Africa'
  }, {
    department: 'Legal',
    region: 'Zion Africa'
  }]), [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex items-end justify-between gap-4 flex-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-2xl font-bold",
          children: "Zion Organization"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-sm text-gray-600 dark:text-gray-300",
          children: "Core team, contributors, and DAO delegates"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
      filters: filters,
      onChange: setFilters,
      displayMode: displayMode,
      onDisplayModeChange: setDisplayMode,
      showPhotos: showPhotos,
      onTogglePhotos: setShowPhotos
    }), gaps.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 p-3 rounded-lg text-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
        children: "Gaps:"
      }), " ", gaps.join(' • ')]
    }), displayMode === 'tree' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_OrgTree__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data,
      showPhotos: showPhotos
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_OrgGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: data,
      showPhotos: showPhotos
    })]
  });
}

/***/ }),

/***/ 256581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrgTree)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PersonCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(881842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function OrgTree(_ref) {
  var {
    data,
    showPhotos
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "space-y-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "Founders",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        children: data.founders.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          person: p,
          showPhoto: showPhotos
        }, p.id))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "Core Team",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "space-y-6",
        children: ['Ops', 'Tech', 'Growth', 'Legal'].map(dept => {
          var members = data.coreTeam.filter(m => m.department.toLowerCase() === dept.toLowerCase());
          if (members.length === 0) return null;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
              className: "text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2",
              children: dept
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: members.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
                person: p,
                showPhoto: showPhotos
              }, p.id))
            })]
          }, dept);
        })
      })
    }), data.contributors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "Contributors",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        children: data.contributors.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          person: p,
          showPhoto: showPhotos
        }, p.id))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "DAO Delegates",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        children: data.delegates.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            person: p,
            showPhoto: showPhotos
          }), p.votingPower !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mt-2 text-xs text-gray-600 dark:text-gray-300",
            children: ["Voting power: ", p.votingPower]
          })]
        }, p.id))
      })
    })]
  });
}
function Section(_ref2) {
  var {
    title,
    children
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      className: "text-lg font-semibold mb-3",
      children: title
    }), children]
  });
}

/***/ }),

/***/ 483152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildOrgQuery: () => (/* binding */ buildOrgQuery),
/* harmony export */   detectGaps: () => (/* binding */ detectGaps)
/* harmony export */ });
function detectGaps(data, required) {
  var messages = [];
  required.forEach(req => {
    var hasLeadInDept = data.coreTeam.some(m => {
      var _m$location, _m$location2;
      return m.department.toLowerCase() === req.department.toLowerCase() && m.roleType === 'Lead' && (!req.zone || ((_m$location = m.location) === null || _m$location === void 0 ? void 0 : _m$location.zone) === req.zone) && (!req.region || ((_m$location2 = m.location) === null || _m$location2 === void 0 ? void 0 : _m$location2.region) === req.region);
    });
    if (!hasLeadInDept) {
      var scope = req.region ? req.region : req.zone ? req.zone : 'Global';
      messages.push("No ".concat(req.department, " Lead in ").concat(scope));
    }
  });
  return messages;
}
function buildOrgQuery(params) {
  var q = new URLSearchParams();
  Object.entries(params).forEach(_ref => {
    var [key, val] = _ref;
    if (val === undefined || val === '' || Array.isArray(val) && val.length === 0) return;
    if (Array.isArray(val)) {
      q.set(key, val.join(','));
    } else if (typeof val === 'boolean') {
      q.set(key, val ? 'true' : 'false');
    } else {
      q.set(key, String(val));
    }
  });
  var qs = q.toString();
  return qs ? "?".concat(qs) : '';
}

/***/ }),

/***/ 648981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrgGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PersonCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(881842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function OrgGrid(_ref) {
  var {
    data,
    showPhotos
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "grid grid-cols-1 gap-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "Founders",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4",
        children: data.founders.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          person: p,
          showPhoto: showPhotos
        }, p.id))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "Core Team (Ops, Tech, Growth, Legal)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4",
        children: data.coreTeam.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          person: p,
          showPhoto: showPhotos
        }, p.id))
      })
    }), data.contributors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "Contributors (bounties, academy mentors, devs)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4",
        children: data.contributors.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          person: p,
          showPhoto: showPhotos
        }, p.id))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Section, {
      title: "DAO Delegates",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4",
        children: data.delegates.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PersonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          person: p,
          showPhoto: showPhotos
        }, p.id))
      })
    })]
  });
}
function Section(_ref2) {
  var {
    title,
    children
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      className: "text-lg font-semibold mb-3",
      children: title
    }), children]
  });
}

/***/ }),

/***/ 881842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PersonCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PersonCard(_ref) {
  var {
    person,
    showPhoto = true
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm hover:shadow-md transition",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex items-center gap-4",
      children: [showPhoto ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center text-sm",
        children: person.photoUrl ?
        /*#__PURE__*/
        // eslint-disable-next-line @next/next/no-img-element
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: person.photoUrl,
          alt: person.name,
          className: "h-full w-full object-cover"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: person.name.split(' ').map(n => n[0]).join('').slice(0, 2)
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: person.name.split(' ').map(n => n[0]).join('').slice(0, 2)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "min-w-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "font-semibold truncate",
          children: person.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "text-xs text-gray-500 dark:text-gray-400 truncate",
          children: person.title || person.alias || person.roleType
        }), person.location && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "text-xs text-gray-500 dark:text-gray-400",
          children: person.location.region || person.location.zone || person.location.country
        })]
      })]
    }), person.bio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3",
      children: person.bio
    }), person.links && person.links.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-3 flex flex-wrap gap-2",
      children: person.links.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: l.url,
        target: "_blank",
        rel: "noreferrer",
        className: "text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
        children: l.label
      }, l.url))
    })]
  });
}

/***/ })

};
;