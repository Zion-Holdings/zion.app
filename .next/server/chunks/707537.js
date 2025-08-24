"use strict";
exports.id = 707537;
exports.ids = [707537];
exports.modules = {

/***/ 11457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Heatmap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Heatmap(_ref) {
  var {
    rows,
    cols,
    data,
    title
  } = _ref;
  var max = Math.max(1, ...data.map(d => d.value));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mb-2 text-sm text-gray-600 dark:text-gray-400",
      children: title
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "grid gap-1",
      style: {
        gridTemplateColumns: "repeat(".concat(cols, ", minmax(0, 1fr))")
      },
      children: data.map((cell, idx) => {
        var intensity = cell.value / max;
        var bg = "rgba(59,130,246,".concat(0.1 + intensity * 0.9, ")");
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "h-4 rounded",
          style: {
            backgroundColor: bg
          }
        }, idx);
      })
    })]
  });
}

/***/ }),

/***/ 45709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportToCsv: () => (/* binding */ exportToCsv)
/* harmony export */ });
function exportToCsv(filename, rows) {
  if (!rows || rows.length === 0) return;
  var separator = ',';
  var keys = Object.keys(rows[0]);
  var csvContent = [keys.join(separator), ...rows.map(row => keys.map(k => {
    var _row$k;
    var cell = (_row$k = row[k]) !== null && _row$k !== void 0 ? _row$k : '';
    if (cell instanceof Date) cell = cell.toISOString();
    var str = String(cell).replace(/"/g, '""');
    if (str.search(/([",\n])/g) >= 0) return '"' + str + '"';
    return str;
  }).join(separator))].join('\n');
  var blob = new Blob([csvContent], {
    type: 'text/csv;charset=utf-8;'
  });
  var link = document.createElement('a');
  var url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/***/ }),

/***/ 345470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetricCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


var colorToClasses = {
  blue: 'border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-950/30',
  green: 'border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-950/30',
  amber: 'border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30',
  purple: 'border-purple-200 bg-purple-50 dark:border-purple-900/50 dark:bg-purple-950/30',
  rose: 'border-rose-200 bg-rose-50 dark:border-rose-900/50 dark:bg-rose-950/30',
  gray: 'border-gray-200 bg-gray-50 dark:border-gray-900/50 dark:bg-gray-950/30'
};
function MetricCard(_ref) {
  var {
    title,
    value,
    subtitle,
    color = 'gray',
    rightAdornment,
    onClick
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "rounded-xl border ".concat(colorToClasses[color], " p-4 transition hover:shadow-sm"),
    onClick: onClick,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex items-start justify-between gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "mt-1 text-2xl font-semibold",
          children: value
        }), subtitle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "mt-1 text-xs text-gray-500 dark:text-gray-400",
          children: subtitle
        }) : null]
      }), rightAdornment]
    })
  });
}

/***/ }),

/***/ 646308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BarChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).register(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function BarChart(_ref) {
  var {
    labels,
    data,
    color = '#10b981',
    height = 160
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      height
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: color + '88',
          borderRadius: 6
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        }
      }
    })
  });
}

/***/ }),

/***/ 652947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRealtimeMetrics: () => (/* binding */ useRealtimeMetrics)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45393);



function isSupabaseConfigured() {
  return typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
}
function useRealtimeMetrics() {
  var [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var isMounted = true;
    function fetchOnce() {
      return _fetchOnce.apply(this, arguments);
    }
    function _fetchOnce() {
      _fetchOnce = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
        try {
          var res = yield fetch('/api/metrics');
          var json = yield res.json();
          if (isMounted) setData(json);
        } catch (e) {
          console.error('Metrics fetch failed', e);
        }
      });
      return _fetchOnce.apply(this, arguments);
    }
    fetchOnce();
    if (isSupabaseConfigured()) {
      var channel = _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.channel('kpi-changes').on('postgres_changes', {
        event: '*',
        schema: 'public'
      }, payload => {
        // For demo: simply re-fetch on any change
        fetchOnce();
      }).subscribe();
      return () => {
        isMounted = false;
        _utils_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.removeChannel(channel);
      };
    } else {
      intervalRef.current = setInterval(fetchOnce, 10000);
      return () => {
        isMounted = false;
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, []);
  return data;
}

/***/ }),

/***/ 665680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RadialChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).register(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function RadialChart(_ref) {
  var {
    labels,
    data,
    colors = ['#6366f1', '#22d3ee', '#f59e0b'],
    size = 180
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      width: size,
      height: size
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: colors,
          borderWidth: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  });
}

/***/ }),

/***/ 707537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KpiDashboard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MetricCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(345470);
/* harmony import */ var _charts_LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(916707);
/* harmony import */ var _charts_BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(646308);
/* harmony import */ var _charts_RadialChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(665680);
/* harmony import */ var _Heatmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11457);
/* harmony import */ var _MapOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(904141);
/* harmony import */ var _hooks_useRealtimeMetrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(652947);
/* harmony import */ var _utils_export__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45709);
/* harmony import */ var _utils_exportImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(920488);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












function SectionHeader(_ref) {
  var {
    title,
    color
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "flex items-center justify-between mb-3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
      className: "text-sm font-semibold",
      style: {
        color
      },
      children: title
    })
  });
}
function KpiDashboard(_ref2) {
  var _metrics$marketplace$2, _metrics$marketplace$3, _metrics$history$mark, _metrics$history, _metrics$marketplace$4, _metrics$marketplace$5, _metrics$history$mark2, _metrics$history2, _metrics$marketplace$6, _metrics$marketplace$7, _metrics$marketplace$8, _metrics$marketplace$9, _metrics$history$mark3, _metrics$history3, _metrics$marketplace$10, _metrics$marketplace$11, _metrics$history$mark4, _metrics$history4, _metrics$marketplace$12, _metrics$marketplace$13, _metrics$marketplace$14, _metrics$marketplace$15, _metrics$marketplace$16, _metrics$marketplace$17, _metrics$dao$0$value, _metrics$dao$, _metrics$history$dao$, _metrics$history5, _metrics$dao$1$value, _metrics$dao$2, _metrics$history$dao$2, _metrics$history6, _metrics$dao$3$value, _metrics$dao$4, _ref4, _toLocaleString, _toLocaleString2, _ref5, _metrics$token$0$valu, _metrics$token$, _metrics$token$2, _metrics$history$toke, _metrics$history7, _ref6, _toLocaleString3, _toLocaleString4, _ref7, _metrics$token$1$valu, _metrics$token$3, _metrics$token$4, _metrics$history$toke2, _metrics$history8, _ref8, _toLocaleString5, _toLocaleString6, _ref9, _metrics$token$2$valu, _metrics$token$5, _metrics$token$6, _metrics$history$toke3, _metrics$history9, _ref10, _toLocaleString7, _toLocaleString8, _ref11, _metrics$token$3$valu, _metrics$token$7, _metrics$token$8, _metrics$history$toke4, _metrics$history10, _metrics$token$4$valu, _metrics$token$9, _metrics$multiverse$, _metrics$multiverse$2, _metrics$history$mult, _metrics$history11, _metrics$multiverse$3, _metrics$multiverse$4, _metrics$history$mult2, _metrics$history12, _metrics$multiverse$5, _metrics$multiverse$6, _metrics$multiverse$7, _metrics$multiverse$8, _metrics$multiverse$9, _metrics$multiverse$10, _metrics$multiverse$11, _metrics$multiverse$12, _metrics$multiverse$13, _metrics$multiverse$14, _ref12, _toLocaleString9, _toLocaleString10, _ref13, _metrics$multiverse$15, _metrics$multiverse$16, _metrics$multiverse$17, _metrics$history$mult3, _metrics$history13, _metrics$compare;
  var {
    admin = false
  } = _ref2;
  var metrics = (0,_hooks_useRealtimeMetrics__WEBPACK_IMPORTED_MODULE_7__.useRealtimeMetrics)();
  var [publicView, setPublicView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!admin);
  var [compareQuarter, setCompareQuarter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var labels = (metrics === null || metrics === void 0 ? void 0 : metrics.labels) || [];
  var operatorSummary = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _metrics$marketplace$, _metrics$dao$find, _metrics$token$find, _metrics$token$find2, _metrics$multiverse$f;
    if (!metrics) return [];
    var jobs24 = ((_metrics$marketplace$ = metrics.marketplace.find(m => m.key === 'jobs_24h')) === null || _metrics$marketplace$ === void 0 ? void 0 : _metrics$marketplace$.value) || 0;
    var voters = ((_metrics$dao$find = metrics.dao.find(m => m.key === 'voter_participation')) === null || _metrics$dao$find === void 0 ? void 0 : _metrics$dao$find.value) || 0;
    var wallets = ((_metrics$token$find = metrics.token.find(m => m.key === 'active_wallets')) === null || _metrics$token$find === void 0 ? void 0 : _metrics$token$find.value) || 0;
    var tx = ((_metrics$token$find2 = metrics.token.find(m => m.key === 'tx_volume_daily')) === null || _metrics$token$find2 === void 0 ? void 0 : _metrics$token$find2.value) || 0;
    var instances = ((_metrics$multiverse$f = metrics.multiverse.find(m => m.key === 'active_instances')) === null || _metrics$multiverse$f === void 0 ? void 0 : _metrics$multiverse$f.value) || 0;
    return ["Marketplace steady: ".concat(jobs24, " jobs posted in the last 24h, fill rates improving"), "DAO engagement at ".concat(voters, "% voter participation with active delegates"), "Token momentum: ".concat(wallets, " active wallets; daily volume around ").concat(tx.toLocaleString()), "Multiverse scale: ".concat(instances, " active sub-instances with cross-instance flows"), "Treasury stable and contributors earning consistently across regions"];
  }, [metrics]);
  var handleExportCsv = () => {
    if (!metrics) return;
    var rows = [];
    var pushRows = (bucket, items) => {
      for (var it of items) rows.push({
        bucket,
        key: it.key,
        label: it.label,
        value: it.value
      });
    };
    pushRows('marketplace', metrics.marketplace);
    pushRows('dao', metrics.dao);
    pushRows('token', metrics.token);
    pushRows('multiverse', metrics.multiverse);
    (0,_utils_export__WEBPACK_IMPORTED_MODULE_9__.exportToCsv)('zion-metrics.csv', rows);
  };
  var handleExportPng = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])(function* () {
      if (rootRef.current) yield (0,_utils_exportImage__WEBPACK_IMPORTED_MODULE_11__.exportElementPng)(rootRef.current, 'zion-dashboard.png');
    });
    return function handleExportPng() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    ref: rootRef,
    className: "space-y-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
          className: "text-xl font-semibold",
          children: "Zion Metrics Dashboard"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "text-xs text-gray-500",
          children: "Real-time KPIs across marketplace, DAO, token, and multiverse"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          onClick: handleExportCsv,
          className: "px-3 py-1.5 text-xs rounded border bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800",
          children: "Export CSV"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          onClick: handleExportPng,
          className: "px-3 py-1.5 text-xs rounded border bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800",
          children: "Export PNG"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
          className: "flex items-center gap-2 text-xs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            type: "checkbox",
            checked: compareQuarter,
            onChange: e => setCompareQuarter(e.target.checked)
          }), "Compare prev quarter"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
          className: "flex items-center gap-2 text-xs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            type: "checkbox",
            checked: !publicView,
            onChange: e => setPublicView(!e.target.checked)
          }), "Admin view"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "rounded-lg border bg-gray-50 dark:bg-gray-900/40 p-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "text-xs text-gray-600 dark:text-gray-400 mb-1",
        children: "Operator Summary"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
        className: "list-disc pl-5 text-sm",
        children: operatorSummary.map((line, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
          children: line
        }, idx))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SectionHeader, {
        title: "Marketplace Metrics",
        color: "#3b82f6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Jobs posted (24h)",
          value: (_metrics$marketplace$2 = metrics === null || metrics === void 0 || (_metrics$marketplace$3 = metrics.marketplace[0]) === null || _metrics$marketplace$3 === void 0 ? void 0 : _metrics$marketplace$3.value) !== null && _metrics$marketplace$2 !== void 0 ? _metrics$marketplace$2 : '—',
          color: "blue",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            labels: labels,
            data: ((_metrics$history$mark = metrics === null || metrics === void 0 || (_metrics$history = metrics.history) === null || _metrics$history === void 0 || (_metrics$history = _metrics$history.marketplace) === null || _metrics$history === void 0 ? void 0 : _metrics$history[0]) !== null && _metrics$history$mark !== void 0 ? _metrics$history$mark : []).slice(-14),
            color: "#3b82f6"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Jobs posted (7d)",
          value: (_metrics$marketplace$4 = metrics === null || metrics === void 0 || (_metrics$marketplace$5 = metrics.marketplace[1]) === null || _metrics$marketplace$5 === void 0 ? void 0 : _metrics$marketplace$5.value) !== null && _metrics$marketplace$4 !== void 0 ? _metrics$marketplace$4 : '—',
          color: "blue",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            labels: labels,
            data: ((_metrics$history$mark2 = metrics === null || metrics === void 0 || (_metrics$history2 = metrics.history) === null || _metrics$history2 === void 0 || (_metrics$history2 = _metrics$history2.marketplace) === null || _metrics$history2 === void 0 ? void 0 : _metrics$history2[1]) !== null && _metrics$history$mark2 !== void 0 ? _metrics$history$mark2 : []).slice(-14),
            color: "#60a5fa"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Jobs posted (total)",
          value: (_metrics$marketplace$6 = metrics === null || metrics === void 0 || (_metrics$marketplace$7 = metrics.marketplace[2]) === null || _metrics$marketplace$7 === void 0 ? void 0 : _metrics$marketplace$7.value) !== null && _metrics$marketplace$6 !== void 0 ? _metrics$marketplace$6 : '—',
          color: "blue"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Talent onboarded",
          value: (_metrics$marketplace$8 = metrics === null || metrics === void 0 || (_metrics$marketplace$9 = metrics.marketplace[3]) === null || _metrics$marketplace$9 === void 0 ? void 0 : _metrics$marketplace$9.value) !== null && _metrics$marketplace$8 !== void 0 ? _metrics$marketplace$8 : '—',
          color: "blue",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            labels: labels,
            data: ((_metrics$history$mark3 = metrics === null || metrics === void 0 || (_metrics$history3 = metrics.history) === null || _metrics$history3 === void 0 || (_metrics$history3 = _metrics$history3.marketplace) === null || _metrics$history3 === void 0 ? void 0 : _metrics$history3[3]) !== null && _metrics$history$mark3 !== void 0 ? _metrics$history$mark3 : []).slice(-14),
            color: "#60a5fa"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Proposal conversions",
          value: (_metrics$marketplace$10 = metrics === null || metrics === void 0 || (_metrics$marketplace$11 = metrics.marketplace[4]) === null || _metrics$marketplace$11 === void 0 ? void 0 : _metrics$marketplace$11.value) !== null && _metrics$marketplace$10 !== void 0 ? _metrics$marketplace$10 : '—',
          color: "blue",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            labels: labels,
            data: ((_metrics$history$mark4 = metrics === null || metrics === void 0 || (_metrics$history4 = metrics.history) === null || _metrics$history4 === void 0 || (_metrics$history4 = _metrics$history4.marketplace) === null || _metrics$history4 === void 0 ? void 0 : _metrics$history4[4]) !== null && _metrics$history$mark4 !== void 0 ? _metrics$history$mark4 : []).slice(-14),
            color: "#3b82f6"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Job fill rate",
          value: "".concat((_metrics$marketplace$12 = metrics === null || metrics === void 0 || (_metrics$marketplace$13 = metrics.marketplace[5]) === null || _metrics$marketplace$13 === void 0 ? void 0 : _metrics$marketplace$13.value) !== null && _metrics$marketplace$12 !== void 0 ? _metrics$marketplace$12 : '—', "%"),
          color: "blue",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_RadialChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
            labels: ["Filled", "Open", "Other"],
            data: [(_metrics$marketplace$14 = metrics === null || metrics === void 0 || (_metrics$marketplace$15 = metrics.marketplace[5]) === null || _metrics$marketplace$15 === void 0 ? void 0 : _metrics$marketplace$15.value) !== null && _metrics$marketplace$14 !== void 0 ? _metrics$marketplace$14 : 0, 100 - ((_metrics$marketplace$16 = metrics === null || metrics === void 0 || (_metrics$marketplace$17 = metrics.marketplace[5]) === null || _metrics$marketplace$17 === void 0 ? void 0 : _metrics$marketplace$17.value) !== null && _metrics$marketplace$16 !== void 0 ? _metrics$marketplace$16 : 0), 0],
            colors: ["#3b82f6", "#dbeafe", "#93c5fd"]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SectionHeader, {
        title: "DAO Metrics",
        color: "#ef4444"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Proposals created",
          value: (_metrics$dao$0$value = metrics === null || metrics === void 0 || (_metrics$dao$ = metrics.dao[0]) === null || _metrics$dao$ === void 0 ? void 0 : _metrics$dao$.value) !== null && _metrics$dao$0$value !== void 0 ? _metrics$dao$0$value : '—',
          color: "rose",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            labels: labels,
            data: ((_metrics$history$dao$ = metrics === null || metrics === void 0 || (_metrics$history5 = metrics.history) === null || _metrics$history5 === void 0 || (_metrics$history5 = _metrics$history5.dao) === null || _metrics$history5 === void 0 ? void 0 : _metrics$history5[0]) !== null && _metrics$history$dao$ !== void 0 ? _metrics$history$dao$ : []).slice(-14),
            color: "#f87171"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Voter participation",
          value: "".concat((_metrics$dao$1$value = metrics === null || metrics === void 0 || (_metrics$dao$2 = metrics.dao[1]) === null || _metrics$dao$2 === void 0 ? void 0 : _metrics$dao$2.value) !== null && _metrics$dao$1$value !== void 0 ? _metrics$dao$1$value : '—', "%"),
          color: "rose",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            labels: labels,
            data: ((_metrics$history$dao$2 = metrics === null || metrics === void 0 || (_metrics$history6 = metrics.history) === null || _metrics$history6 === void 0 || (_metrics$history6 = _metrics$history6.dao) === null || _metrics$history6 === void 0 ? void 0 : _metrics$history6[1]) !== null && _metrics$history$dao$2 !== void 0 ? _metrics$history$dao$2 : []).slice(-14),
            color: "#ef4444"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "sm:col-span-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Heatmap__WEBPACK_IMPORTED_MODULE_5__["default"], {
            rows: 7,
            cols: 24,
            data: Array.from({
              length: 7 * 24
            }, (_, i) => {
              var _metrics$dao$2$value, _metrics$dao$3;
              return {
                value: ((_metrics$dao$2$value = metrics === null || metrics === void 0 || (_metrics$dao$3 = metrics.dao[2]) === null || _metrics$dao$3 === void 0 ? void 0 : _metrics$dao$3.value) !== null && _metrics$dao$2$value !== void 0 ? _metrics$dao$2$value : 0) * Math.random()
              };
            }),
            title: "Delegate activity heatmap (7d x 24h)"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Region quorum (regions above)",
          value: (_metrics$dao$3$value = metrics === null || metrics === void 0 || (_metrics$dao$4 = metrics.dao[3]) === null || _metrics$dao$4 === void 0 ? void 0 : _metrics$dao$4.value) !== null && _metrics$dao$3$value !== void 0 ? _metrics$dao$3$value : '—',
          color: "rose"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SectionHeader, {
        title: "Token Metrics (ZION$)",
        color: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Circulating supply",
          value: (_ref4 = (_toLocaleString = (_toLocaleString2 = (_ref5 = (_metrics$token$0$valu = metrics === null || metrics === void 0 || (_metrics$token$ = metrics.token[0]) === null || _metrics$token$ === void 0 ? void 0 : _metrics$token$.value) !== null && _metrics$token$0$valu !== void 0 ? _metrics$token$0$valu : '—').toLocaleString) === null || _toLocaleString2 === void 0 ? void 0 : _toLocaleString2.call(_ref5)) !== null && _toLocaleString !== void 0 ? _toLocaleString : metrics === null || metrics === void 0 || (_metrics$token$2 = metrics.token[0]) === null || _metrics$token$2 === void 0 ? void 0 : _metrics$token$2.value) !== null && _ref4 !== void 0 ? _ref4 : '—',
          color: "green",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            labels: labels,
            data: ((_metrics$history$toke = metrics === null || metrics === void 0 || (_metrics$history7 = metrics.history) === null || _metrics$history7 === void 0 || (_metrics$history7 = _metrics$history7.token) === null || _metrics$history7 === void 0 ? void 0 : _metrics$history7[0]) !== null && _metrics$history$toke !== void 0 ? _metrics$history$toke : []).slice(-14),
            color: "#10b981"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Active wallets",
          value: (_ref6 = (_toLocaleString3 = (_toLocaleString4 = (_ref7 = (_metrics$token$1$valu = metrics === null || metrics === void 0 || (_metrics$token$3 = metrics.token[1]) === null || _metrics$token$3 === void 0 ? void 0 : _metrics$token$3.value) !== null && _metrics$token$1$valu !== void 0 ? _metrics$token$1$valu : '—').toLocaleString) === null || _toLocaleString4 === void 0 ? void 0 : _toLocaleString4.call(_ref7)) !== null && _toLocaleString3 !== void 0 ? _toLocaleString3 : metrics === null || metrics === void 0 || (_metrics$token$4 = metrics.token[1]) === null || _metrics$token$4 === void 0 ? void 0 : _metrics$token$4.value) !== null && _ref6 !== void 0 ? _ref6 : '—',
          color: "green",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            labels: labels,
            data: ((_metrics$history$toke2 = metrics === null || metrics === void 0 || (_metrics$history8 = metrics.history) === null || _metrics$history8 === void 0 || (_metrics$history8 = _metrics$history8.token) === null || _metrics$history8 === void 0 ? void 0 : _metrics$history8[1]) !== null && _metrics$history$toke2 !== void 0 ? _metrics$history$toke2 : []).slice(-14),
            color: "#34d399"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Tx volume (daily)",
          value: (_ref8 = (_toLocaleString5 = (_toLocaleString6 = (_ref9 = (_metrics$token$2$valu = metrics === null || metrics === void 0 || (_metrics$token$5 = metrics.token[2]) === null || _metrics$token$5 === void 0 ? void 0 : _metrics$token$5.value) !== null && _metrics$token$2$valu !== void 0 ? _metrics$token$2$valu : '—').toLocaleString) === null || _toLocaleString6 === void 0 ? void 0 : _toLocaleString6.call(_ref9)) !== null && _toLocaleString5 !== void 0 ? _toLocaleString5 : metrics === null || metrics === void 0 || (_metrics$token$6 = metrics.token[2]) === null || _metrics$token$6 === void 0 ? void 0 : _metrics$token$6.value) !== null && _ref8 !== void 0 ? _ref8 : '—',
          color: "green",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            labels: labels,
            data: ((_metrics$history$toke3 = metrics === null || metrics === void 0 || (_metrics$history9 = metrics.history) === null || _metrics$history9 === void 0 || (_metrics$history9 = _metrics$history9.token) === null || _metrics$history9 === void 0 ? void 0 : _metrics$history9[2]) !== null && _metrics$history$toke3 !== void 0 ? _metrics$history$toke3 : []).slice(-14),
            color: "#34d399"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Treasury health (USD)",
          value: (_ref10 = (_toLocaleString7 = (_toLocaleString8 = (_ref11 = (_metrics$token$3$valu = metrics === null || metrics === void 0 || (_metrics$token$7 = metrics.token[3]) === null || _metrics$token$7 === void 0 ? void 0 : _metrics$token$7.value) !== null && _metrics$token$3$valu !== void 0 ? _metrics$token$3$valu : '—').toLocaleString) === null || _toLocaleString8 === void 0 ? void 0 : _toLocaleString8.call(_ref11)) !== null && _toLocaleString7 !== void 0 ? _toLocaleString7 : metrics === null || metrics === void 0 || (_metrics$token$8 = metrics.token[3]) === null || _metrics$token$8 === void 0 ? void 0 : _metrics$token$8.value) !== null && _ref10 !== void 0 ? _ref10 : '—',
          color: "green",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            labels: labels,
            data: ((_metrics$history$toke4 = metrics === null || metrics === void 0 || (_metrics$history10 = metrics.history) === null || _metrics$history10 === void 0 || (_metrics$history10 = _metrics$history10.token) === null || _metrics$history10 === void 0 ? void 0 : _metrics$history10[3]) !== null && _metrics$history$toke4 !== void 0 ? _metrics$history$toke4 : []).slice(-14),
            color: "#10b981"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Top earners / contributors",
          value: (_metrics$token$4$valu = metrics === null || metrics === void 0 || (_metrics$token$9 = metrics.token[4]) === null || _metrics$token$9 === void 0 ? void 0 : _metrics$token$9.value) !== null && _metrics$token$4$valu !== void 0 ? _metrics$token$4$valu : '—',
          color: "green"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SectionHeader, {
        title: "Multiverse Metrics",
        color: "#8b5cf6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Active sub-instances",
          value: (_metrics$multiverse$ = metrics === null || metrics === void 0 || (_metrics$multiverse$2 = metrics.multiverse[0]) === null || _metrics$multiverse$2 === void 0 ? void 0 : _metrics$multiverse$2.value) !== null && _metrics$multiverse$ !== void 0 ? _metrics$multiverse$ : '—',
          color: "purple",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            labels: labels,
            data: ((_metrics$history$mult = metrics === null || metrics === void 0 || (_metrics$history11 = metrics.history) === null || _metrics$history11 === void 0 || (_metrics$history11 = _metrics$history11.multiverse) === null || _metrics$history11 === void 0 ? void 0 : _metrics$history11[0]) !== null && _metrics$history$mult !== void 0 ? _metrics$history$mult : []).slice(-14),
            color: "#8b5cf6"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Top 5 by user growth (sum)",
          value: (_metrics$multiverse$3 = metrics === null || metrics === void 0 || (_metrics$multiverse$4 = metrics.multiverse[2]) === null || _metrics$multiverse$4 === void 0 ? void 0 : _metrics$multiverse$4.value) !== null && _metrics$multiverse$3 !== void 0 ? _metrics$multiverse$3 : '—',
          color: "purple",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            labels: labels,
            data: ((_metrics$history$mult2 = metrics === null || metrics === void 0 || (_metrics$history12 = metrics.history) === null || _metrics$history12 === void 0 || (_metrics$history12 = _metrics$history12.multiverse) === null || _metrics$history12 === void 0 ? void 0 : _metrics$history12[2]) !== null && _metrics$history$mult2 !== void 0 ? _metrics$history$mult2 : []).slice(-14),
            color: "#a78bfa"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "lg:col-span-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MapOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
            data: [{
              region: 'NA',
              value: Math.round(((_metrics$multiverse$5 = metrics === null || metrics === void 0 || (_metrics$multiverse$6 = metrics.multiverse[1]) === null || _metrics$multiverse$6 === void 0 ? void 0 : _metrics$multiverse$6.value) !== null && _metrics$multiverse$5 !== void 0 ? _metrics$multiverse$5 : 0) * 0.25)
            }, {
              region: 'EU',
              value: Math.round(((_metrics$multiverse$7 = metrics === null || metrics === void 0 || (_metrics$multiverse$8 = metrics.multiverse[1]) === null || _metrics$multiverse$8 === void 0 ? void 0 : _metrics$multiverse$8.value) !== null && _metrics$multiverse$7 !== void 0 ? _metrics$multiverse$7 : 0) * 0.22)
            }, {
              region: 'APAC',
              value: Math.round(((_metrics$multiverse$9 = metrics === null || metrics === void 0 || (_metrics$multiverse$10 = metrics.multiverse[1]) === null || _metrics$multiverse$10 === void 0 ? void 0 : _metrics$multiverse$10.value) !== null && _metrics$multiverse$9 !== void 0 ? _metrics$multiverse$9 : 0) * 0.30)
            }, {
              region: 'LATAM',
              value: Math.round(((_metrics$multiverse$11 = metrics === null || metrics === void 0 || (_metrics$multiverse$12 = metrics.multiverse[1]) === null || _metrics$multiverse$12 === void 0 ? void 0 : _metrics$multiverse$12.value) !== null && _metrics$multiverse$11 !== void 0 ? _metrics$multiverse$11 : 0) * 0.13)
            }, {
              region: 'AFR',
              value: Math.round(((_metrics$multiverse$13 = metrics === null || metrics === void 0 || (_metrics$multiverse$14 = metrics.multiverse[1]) === null || _metrics$multiverse$14 === void 0 ? void 0 : _metrics$multiverse$14.value) !== null && _metrics$multiverse$13 !== void 0 ? _metrics$multiverse$13 : 0) * 0.10)
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Cross-instance token movement",
          value: (_ref12 = (_toLocaleString9 = (_toLocaleString10 = (_ref13 = (_metrics$multiverse$15 = metrics === null || metrics === void 0 || (_metrics$multiverse$16 = metrics.multiverse[3]) === null || _metrics$multiverse$16 === void 0 ? void 0 : _metrics$multiverse$16.value) !== null && _metrics$multiverse$15 !== void 0 ? _metrics$multiverse$15 : '—').toLocaleString) === null || _toLocaleString10 === void 0 ? void 0 : _toLocaleString10.call(_ref13)) !== null && _toLocaleString9 !== void 0 ? _toLocaleString9 : metrics === null || metrics === void 0 || (_metrics$multiverse$17 = metrics.multiverse[3]) === null || _metrics$multiverse$17 === void 0 ? void 0 : _metrics$multiverse$17.value) !== null && _ref12 !== void 0 ? _ref12 : '—',
          color: "purple",
          rightAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
            labels: labels,
            data: ((_metrics$history$mult3 = metrics === null || metrics === void 0 || (_metrics$history13 = metrics.history) === null || _metrics$history13 === void 0 || (_metrics$history13 = _metrics$history13.multiverse) === null || _metrics$history13 === void 0 ? void 0 : _metrics$history13[3]) !== null && _metrics$history$mult3 !== void 0 ? _metrics$history$mult3 : []).slice(-14),
            color: "#8b5cf6"
          })
        })]
      })]
    }), compareQuarter && metrics !== null && metrics !== void 0 && (_metrics$compare = metrics.compare) !== null && _metrics$compare !== void 0 && _metrics$compare.prevQuarter ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "rounded-lg border p-4 text-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "font-medium mb-2",
        children: "Quarter-over-Quarter"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        children: metrics.compare.prevQuarter.marketplace.slice(0, 3).map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Prev: ".concat(m.label),
          value: m.value,
          color: "gray"
        }, m.key))
      })]
    }) : null]
  });
}

/***/ }),

/***/ 904141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapOverlay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


var regions = [{
  region: 'NA',
  value: 0
}, {
  region: 'EU',
  value: 0
}, {
  region: 'APAC',
  value: 0
}, {
  region: 'LATAM',
  value: 0
}, {
  region: 'AFR',
  value: 0
}];
function MapOverlay(_ref) {
  var {
    data
  } = _ref;
  var byRegion = Object.fromEntries(regions.map(r => [r.region, 0]));
  data.forEach(d => byRegion[d.region] = (byRegion[d.region] || 0) + d.value);
  var max = Math.max(1, ...Object.values(byRegion));
  var color = v => "rgba(34,197,94,".concat(0.15 + v / max * 0.85, ")");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "w-full rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/20 p-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-sm mb-2 text-emerald-800 dark:text-emerald-200",
      children: "Global activity"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-200/30 to-emerald-300/10 dark:from-emerald-900/20 dark:to-emerald-800/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        viewBox: "0 0 800 400",
        className: "absolute inset-0 w-full h-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "0",
          y: "0",
          width: "800",
          height: "400",
          fill: "transparent"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
          cx: "180",
          cy: "160",
          rx: "110",
          ry: "70",
          fill: color(byRegion['NA'] || 0)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
          cx: "420",
          cy: "150",
          rx: "120",
          ry: "60",
          fill: color(byRegion['EU'] || 0)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
          cx: "640",
          cy: "180",
          rx: "120",
          ry: "80",
          fill: color(byRegion['APAC'] || 0)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
          cx: "280",
          cy: "260",
          rx: "100",
          ry: "60",
          fill: color(byRegion['LATAM'] || 0)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
          cx: "420",
          cy: "280",
          rx: "110",
          ry: "70",
          fill: color(byRegion['AFR'] || 0)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-3 flex gap-3 text-xs text-emerald-900 dark:text-emerald-100 flex-wrap",
      children: Object.entries(byRegion).map(_ref2 => {
        var [region, v] = _ref2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "inline-block h-3 w-3 rounded",
            style: {
              backgroundColor: color(v)
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            children: [region, ": ", v]
          })]
        }, region);
      })
    })]
  });
}

/***/ }),

/***/ 916707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).register(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function LineChart(_ref) {
  var {
    labels,
    data,
    color = '#3b82f6',
    height = 160
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      height
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      data: {
        labels,
        datasets: [{
          data,
          borderColor: color,
          backgroundColor: color + '33',
          fill: true,
          tension: 0.35,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            intersect: false,
            mode: 'index'
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        }
      }
    })
  });
}

/***/ }),

/***/ 920488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportElementPng: () => (/* binding */ exportElementPng)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(860076);

function exportElementPng(_x) {
  return _exportElementPng.apply(this, arguments);
}
function _exportElementPng() {
  _exportElementPng = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
    var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dashboard.png';
    var {
      toPng
    } = yield Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'html-to-image'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    var dataUrl = yield toPng(element, {
      cacheBust: true,
      pixelRatio: 2
    });
    var link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
  });
  return _exportElementPng.apply(this, arguments);
}

/***/ })

};
;