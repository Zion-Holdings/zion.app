"use strict";
exports.id = 497096;
exports.ids = [497096];
exports.modules = {

/***/ 216981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   speakers: () => (/* binding */ speakers)
/* harmony export */ });
var speakers = [{
  name: 'Ari Zion',
  role: 'Founder & CEO',
  org: 'Zion',
  type: 'Founder'
}, {
  name: 'Minister L.',
  role: 'Digital Affairs',
  org: 'Nation X',
  type: 'Nation'
}, {
  name: 'Nova DAO',
  role: 'Protocol Council',
  org: 'Nova',
  type: 'DAO'
}];

/***/ }),

/***/ 249702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   partners: () => (/* binding */ partners)
/* harmony export */ });
var partners = [{
  name: 'Atlas University',
  category: 'University',
  description: 'Research on AI governance, crypto-economics, and decentralized identity.',
  url: 'https://example.edu'
}, {
  name: 'Union Bank',
  category: 'Bank',
  description: 'Cross-border settlement pilots with stable assets and CBDC bridges.',
  url: 'https://examplebank.com'
}, {
  name: 'Nova DAO',
  category: 'DAO',
  description: 'Open innovation challenges and grants for multiverse builders.',
  url: 'https://exampledao.org'
}];

/***/ }),

/***/ 295068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletConnectButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function WalletConnectButton(_ref) {
  var {
    onConnected
  } = _ref;
  var [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [available, setAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAvailable( false && 0);
  }, []);
  function connect() {
    return _connect.apply(this, arguments);
  }
  function _connect() {
    _connect = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      if (!window.ethereum) return;
      var accounts = yield window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      var addr = accounts === null || accounts === void 0 ? void 0 : accounts[0];
      setAddress(addr);
      onConnected === null || onConnected === void 0 || onConnected(addr);
    });
    return _connect.apply(this, arguments);
  }
  if (!available) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "text-sm opacity-70",
    children: "No wallet detected"
  });
  return address ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "text-sm",
    children: ["Connected: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
      className: "font-mono",
      children: [address.slice(0, 6), "\u2026", address.slice(-4)]
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: connect,
    className: "px-3 py-1.5 rounded border",
    children: "Connect Wallet"
  });
}

/***/ }),

/***/ 313251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExportsBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WalletConnectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(295068);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function ExportsBar() {
  var [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  function emailSummary() {
    return _emailSummary.apply(this, arguments);
  }
  function _emailSummary() {
    _emailSummary = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      setStatus('Sending summary…');
      var res = yield fetch('/api/events/expo/email-summary', {
        method: 'POST'
      });
      var data = yield res.json();
      setStatus(res.ok ? 'Summary queued for email' : "Email failed: ".concat(data.error || 'unknown'));
    });
    return _emailSummary.apply(this, arguments);
  }
  function claimNft() {
    return _claimNft.apply(this, arguments);
  }
  function _claimNft() {
    _claimNft = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      if (!connected) {
        setStatus('Connect wallet first');
        return;
      }
      var msg = "Zion Expo Ticket \u2022 ".concat(connected);
      var sig = yield window.ethereum.request({
        method: 'personal_sign',
        params: [msg, connected]
      });
      var res = yield fetch('/api/events/expo/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          address: connected,
          signature: sig
        })
      });
      var data = yield res.json();
      setStatus(res.ok ? 'NFT ticket claim recorded' : "Claim failed: ".concat(data.error || 'unknown'));
    });
    return _claimNft.apply(this, arguments);
  }
  var [vip, setVip] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      if (connected) {
        var res = yield fetch("/api/events/expo/vip?address=".concat(connected));
        var data = yield res.json();
        setVip(Boolean(data === null || data === void 0 ? void 0 : data.allowed));
      } else {
        setVip(false);
      }
    })();
  }, [connected]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "sticky bottom-4 z-30",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "rounded-xl border bg-white/80 dark:bg-black/60 backdrop-blur p-4 flex flex-col md:flex-row items-center gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: emailSummary,
            className: "px-3 py-1.5 rounded border",
            children: "Email Summary"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: claimNft,
            className: "px-3 py-1.5 rounded border",
            children: "Claim NFT Ticket"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "md:ml-auto flex items-center gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_WalletConnectButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
            onConnected: addr => setConnected(addr)
          }), vip ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "px-3 py-1.5 rounded bg-black text-white dark:bg-white dark:text-black",
            href: "/vip/stream",
            onClick: e => e.preventDefault(),
            children: "VIP Stream (Gated)"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text-xs opacity-70",
            children: "Connect an allowlisted wallet for VIP stream"
          })]
        })]
      }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mt-2 text-sm opacity-80",
        children: status
      })]
    })
  });
}

/***/ }),

/***/ 330943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keynotes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Keynotes(_ref) {
  var {
    speakers
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
    children: speakers.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "p-4 border rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 inline-block mb-2",
        children: s.type
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "font-medium",
        children: s.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "text-sm opacity-80",
        children: s.role
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "text-sm opacity-60",
        children: s.org
      })]
    }, s.name))
  });
}

/***/ }),

/***/ 497096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpoPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WelcomeManifesto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(873429);
/* harmony import */ var _AgendaTimeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607736);
/* harmony import */ var _Keynotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(330943);
/* harmony import */ var _PartnerBooths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(994294);
/* harmony import */ var _GlobeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(953514);
/* harmony import */ var _Livestream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(745593);
/* harmony import */ var _GPTAssistant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(497520);
/* harmony import */ var _ExportsBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(313251);
/* harmony import */ var _data_expo_manifesto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(973659);
/* harmony import */ var _data_expo_agenda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(861743);
/* harmony import */ var _data_expo_speakers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(216981);
/* harmony import */ var _data_expo_partners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(249702);
/* harmony import */ var _data_expo_locations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(751001);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);















function ExpoPage() {
  var [activeTrack, setActiveTrack] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: "space-y-12",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_WelcomeManifesto__WEBPACK_IMPORTED_MODULE_1__["default"], {
      manifesto: _data_expo_manifesto__WEBPACK_IMPORTED_MODULE_9__.expoManifesto
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("section", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
          className: "text-2xl font-semibold",
          children: "Agenda"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "flex gap-2 text-sm",
          children: ['All', 'AI', 'DAO', 'Talent', 'Global'].map(track => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
            onClick: () => setActiveTrack(track),
            className: "px-3 py-1 rounded border ".concat(activeTrack === track ? 'bg-black text-white dark:bg-white dark:text-black' : ''),
            children: track
          }, track))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_AgendaTimeline__WEBPACK_IMPORTED_MODULE_2__["default"], {
        items: _data_expo_agenda__WEBPACK_IMPORTED_MODULE_10__.agendaItems,
        activeTrack: activeTrack
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("section", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
        className: "text-2xl font-semibold",
        children: "Keynotes"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Keynotes__WEBPACK_IMPORTED_MODULE_3__["default"], {
        speakers: _data_expo_speakers__WEBPACK_IMPORTED_MODULE_11__.speakers
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("section", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
        className: "text-2xl font-semibold",
        children: "Partner Booths"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_PartnerBooths__WEBPACK_IMPORTED_MODULE_4__["default"], {
        partners: _data_expo_partners__WEBPACK_IMPORTED_MODULE_12__.partners
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("section", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
        className: "text-2xl font-semibold",
        children: "Interactive Map"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_GlobeMap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        locations: _data_expo_locations__WEBPACK_IMPORTED_MODULE_13__.locations
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("section", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
        className: "text-2xl font-semibold",
        children: "Livestream & Replays"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Livestream__WEBPACK_IMPORTED_MODULE_6__["default"], {
        agenda: _data_expo_agenda__WEBPACK_IMPORTED_MODULE_10__.agendaItems
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("section", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
        className: "text-2xl font-semibold",
        children: "ZionGPT Assistant"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_GPTAssistant__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ExportsBar__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
  });
}

/***/ }),

/***/ 497520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GPTAssistant)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function GPTAssistant() {
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  function handleSummarize() {
    return _handleSummarize.apply(this, arguments);
  }
  function _handleSummarize() {
    _handleSummarize = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      setLoading(true);
      setError('');
      try {
        var res = yield fetch('/api/events/expo/highlights');
        var data = yield res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to summarize');
        setSummary(data.summary);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    });
    return _handleSummarize.apply(this, arguments);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "space-y-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-sm opacity-80",
      children: "Prompt: Summarize today\u2019s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      onClick: handleSummarize,
      disabled: loading,
      className: "px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black disabled:opacity-50",
      children: loading ? 'Summarizing…' : 'Generate Summary'
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-sm text-red-600",
      children: error
    }), summary && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre", {
      className: "p-3 border rounded bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap text-sm",
      children: summary
    })]
  });
}

/***/ }),

/***/ 607736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AgendaTimeline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AgendaTimeline(_ref) {
  var {
    items,
    activeTrack
  } = _ref;
  var filtered = activeTrack === 'All' ? items : items.filter(i => i.track === activeTrack);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "space-y-3",
    children: filtered.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col md:flex-row md:items-center md:justify-between p-3 border rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800",
          children: item.time
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "text-xs px-2 py-0.5 rounded border",
          children: item.track
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "font-medium",
            children: item.title
          }), item.speaker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "text-sm opacity-70",
            children: item.speaker
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-2 md:mt-0 flex items-center gap-2 text-sm",
        children: [item.replay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          className: "px-3 py-1 rounded border",
          href: item.replay.provider === 'youtube' ? "https://www.youtube.com/watch?v=".concat(item.replay.idOrCid) : "https://ipfs.io/ipfs/".concat(item.replay.idOrCid),
          target: "_blank",
          rel: "noreferrer",
          children: "Replay"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          className: "px-3 py-1 rounded border",
          href: "/api/events/expo/transcript?id=".concat(item.id),
          children: "Transcript"
        })]
      })]
    }, item.id))
  });
}

/***/ }),

/***/ 745593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Livestream)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Livestream(_ref) {
  var _agenda$;
  var {
    agenda
  } = _ref;
  var live = (_agenda$ = agenda[0]) !== null && _agenda$ !== void 0 && _agenda$.replay ? agenda[0] : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "space-y-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "grid md:grid-cols-2 gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "aspect-video border rounded-lg overflow-hidden",
        children: live !== null && live !== void 0 && live.replay ? live.replay.provider === 'youtube' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
          className: "w-full h-full",
          src: "https://www.youtube.com/embed/".concat(live.replay.idOrCid),
          title: live.title,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
          className: "w-full h-full",
          controls: true,
          src: "https://ipfs.io/ipfs/".concat(live.replay.idOrCid)
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "w-full h-full grid place-items-center text-sm opacity-70",
          children: "The livestream will appear here"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border rounded-lg p-3 overflow-auto max-h-[60vh]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "font-semibold mb-2",
          children: "Replays"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "space-y-2",
          children: agenda.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-between gap-2 text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "min-w-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "truncate font-medium",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "opacity-60 truncate",
                children: [item.time, " \u2022 ", item.track]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex items-center gap-2 shrink-0",
              children: [item.replay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                className: "px-2 py-1 rounded border",
                href: item.replay.provider === 'youtube' ? "https://www.youtube.com/watch?v=".concat(item.replay.idOrCid) : "https://ipfs.io/ipfs/".concat(item.replay.idOrCid),
                target: "_blank",
                rel: "noreferrer",
                children: "Watch"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                className: "px-2 py-1 rounded border",
                href: "/api/events/expo/transcript?id=".concat(item.id),
                children: "Transcript"
              })]
            })]
          }, item.id))
        })]
      })]
    })
  });
}

/***/ }),

/***/ 751001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locations: () => (/* binding */ locations)
/* harmony export */ });
var locations = [{
  name: 'Zion / Global HQ',
  xPercent: 55,
  yPercent: 35,
  talent: 98,
  daoActivity: 92,
  tokenFlow: 95,
  url: 'https://global.zion.example'
}, {
  name: 'Nation X',
  xPercent: 62,
  yPercent: 40,
  talent: 76,
  daoActivity: 81,
  tokenFlow: 70,
  url: 'https://nationx.zion.example'
}, {
  name: 'Nova DAO',
  xPercent: 30,
  yPercent: 50,
  talent: 84,
  daoActivity: 93,
  tokenFlow: 88,
  url: 'https://nova.zion.example'
}];

/***/ }),

/***/ 861743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agendaItems: () => (/* binding */ agendaItems)
/* harmony export */ });
var agendaItems = [{
  id: 'k1',
  time: '09:00',
  track: 'Global',
  title: 'Founder Keynote: The Zion Multiverse',
  speaker: 'Zion Founder',
  replay: {
    provider: 'youtube',
    idOrCid: 'M7lc1UVf-VE'
  }
}, {
  id: 'd1',
  time: '10:00',
  track: 'DAO',
  title: 'DAO Governance: Nations as Networks',
  speaker: 'DAO Council'
}, {
  id: 'a1',
  time: '11:00',
  track: 'AI',
  title: 'AI Protocol Upgrades: Autonomous Cities',
  speaker: 'Chief Scientist',
  replay: {
    provider: 'ipfs',
    idOrCid: 'bafybeigdyrzt...example'
  }
}, {
  id: 't1',
  time: '12:00',
  track: 'Talent',
  title: 'Global Talent Graph: Onchain Credentials',
  speaker: 'Head of Talent'
}];

/***/ }),

/***/ 873429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeManifesto)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function WelcomeManifesto(_ref) {
  var {
    manifesto
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: "grid md:grid-cols-2 gap-6 items-start",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "aspect-video w-full rounded-lg overflow-hidden border",
      children: manifesto.videoProvider === 'youtube' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
        className: "w-full h-full",
        src: "https://www.youtube.com/embed/".concat(manifesto.videoIdOrCid),
        title: manifesto.title,
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
        className: "w-full h-full",
        controls: true,
        src: "https://ipfs.io/ipfs/".concat(manifesto.videoIdOrCid)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "prose dark:prose-invert max-w-none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        children: manifesto.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: manifesto.text
      })]
    })]
  });
}

/***/ }),

/***/ 953514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlobeMap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function GlobeMap(_ref) {
  var {
    locations
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "relative w-full max-w-3xl aspect-square mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "absolute inset-0 rounded-full border bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-indigo-900"
    }), locations.map(loc => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      className: "absolute -translate-x-1/2 -translate-y-1/2",
      style: {
        left: "".concat(loc.xPercent, "%"),
        top: "".concat(loc.yPercent, "%")
      },
      href: loc.url,
      target: "_blank",
      rel: "noreferrer",
      title: "".concat(loc.name, " \u2022 Talent: ").concat(loc.talent, " \u2022 DAO: ").concat(loc.daoActivity, " \u2022 Token: ").concat(loc.tokenFlow),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-black shadow"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "text-xs mt-1 bg-white/80 dark:bg-black/60 px-1.5 py-0.5 rounded border backdrop-blur",
          children: loc.name
        })]
      })
    }, loc.name)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "absolute bottom-2 left-1/2 -translate-x-1/2 text-xs flex gap-3 bg-white/70 dark:bg-black/50 px-2 py-1 rounded border",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        children: "Talent \u25CF"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        children: "DAO \u25B2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        children: "Token \u25C6"
      })]
    })]
  });
}

/***/ }),

/***/ 973659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expoManifesto: () => (/* binding */ expoManifesto)
/* harmony export */ });
var expoManifesto = {
  title: 'Zion Global Expo — Multiverse Innovation Summit',
  videoProvider: 'youtube',
  videoIdOrCid: 'dQw4w9WgXcQ',
  text: 'A manifesto for sovereign innovation: bridging nations, DAOs, and global talent into an interoperable multiverse. Explore protocol updates, partner breakthroughs, and new launches.'
};

/***/ }),

/***/ 994294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PartnerBooths)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PartnerBooths(_ref) {
  var {
    partners
  } = _ref;
  var [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
      children: partners.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        onClick: () => setActive(p),
        className: "p-4 border rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-900",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 inline-block mb-2",
          children: p.category
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "font-medium",
          children: p.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "text-sm opacity-70 line-clamp-2",
          children: p.description
        })]
      }, p.name))
    }), active && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
      onClick: () => setActive(null),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "bg-white dark:bg-black max-w-lg w-full rounded-lg p-6 border",
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center justify-between mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "font-semibold",
            children: active.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            onClick: () => setActive(null),
            className: "opacity-70",
            children: "\u2715"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "opacity-80 mb-4",
          children: active.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          className: "px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black",
          href: active.url,
          target: "_blank",
          rel: "noreferrer",
          children: "Open Showcase"
        })]
      })
    })]
  });
}

/***/ })

};
;