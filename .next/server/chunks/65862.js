"use strict";
exports.id = 65862;
exports.ids = [65862];
exports.modules = {

/***/ 65862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BridgeForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559377);
/* harmony import */ var _ChainBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(698553);
/* harmony import */ var _TokenSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(633583);
/* harmony import */ var _StatusTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(556609);
/* harmony import */ var _hooks_useWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(611788);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(714396);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_erc20__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(744911);
/* harmony import */ var _utils_layerzero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(279452);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











var RATE_LIMIT_SECONDS = 30;
function createProvider(rpcUrl) {
  return new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.JsonRpcProvider(rpcUrl);
}
function BridgeForm() {
  var {
    account,
    connect,
    chainId
  } = (0,_hooks_useWallet__WEBPACK_IMPORTED_MODULE_5__.useWallet)();
  var [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('ZION');
  var [fromKey, setFromKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('ethereum');
  var [toKey, setToKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('polygon');
  var [balances, setBalances] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  var [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [txHash, setTxHash] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var [startedAt, setStartedAt] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var [arrived, setArrived] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [arrivalSeconds, setArrivalSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var from = _utils_chains__WEBPACK_IMPORTED_MODULE_1__.CHAINS[fromKey];
  var to = _utils_chains__WEBPACK_IMPORTED_MODULE_1__.CHAINS[toKey];

  // Fetch balances across chains
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var mounted = true;
    function load() {
      return _load.apply(this, arguments);
    }
    function _load() {
      _load = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(function* () {
        if (!account) return;
        var results = {};
        yield Promise.all(_utils_chains__WEBPACK_IMPORTED_MODULE_1__.SUPPORTED_CHAIN_KEYS.map(/*#__PURE__*/function () {
          var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(function* (key) {
            var chain = _utils_chains__WEBPACK_IMPORTED_MODULE_1__.CHAINS[key];
            var provider = createProvider(chain.rpcUrl);
            try {
              var oftAddress = _utils_layerzero__WEBPACK_IMPORTED_MODULE_6__.OFT_CONFIG.addresses[key];
              if (!oftAddress) {
                results[key] = '—';
                return;
              }
              var bal = yield (0,_utils_erc20__WEBPACK_IMPORTED_MODULE_10__.getErc20Balance)(provider, oftAddress, account);
              results[key] = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(bal, 18);
            } catch (_unused) {
              results[key] = '—';
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()));
        if (mounted) setBalances(results);
      });
      return _load.apply(this, arguments);
    }
    load();
    return () => {
      mounted = false;
    };
  }, [account]);
  var canBridge = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!account) return false;
    if (fromKey === toKey) return false;
    if (!amount || Number(amount) <= 0) return false;
    if (!(0,_utils_layerzero__WEBPACK_IMPORTED_MODULE_6__.isOftConfigured)(fromKey) || !(0,_utils_layerzero__WEBPACK_IMPORTED_MODULE_6__.isOftConfigured)(toKey)) return false;
    return true;
  }, [account, fromKey, toKey, amount]);
  function saveTxLog(hash) {
    try {
      var key = 'zion_tx_logs';
      var logs = JSON.parse(localStorage.getItem(key) || '[]');
      logs.push({
        hash,
        from: fromKey,
        to: toKey,
        amount,
        ts: Date.now()
      });
      localStorage.setItem(key, JSON.stringify(logs));
      fetch('/api/logs/tx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hash,
          from: fromKey,
          to: toKey,
          amount
        })
      }).catch(() => {});
    } catch (_unused2) {}
  }
  function isRateLimited() {
    var key = 'zion_last_bridge_at';
    var last = Number(localStorage.getItem(key) || '0');
    var now = Date.now();
    if (now - last < RATE_LIMIT_SECONDS * 1000) return true;
    localStorage.setItem(key, String(now));
    return false;
  }
  function handleBridge() {
    return _handleBridge.apply(this, arguments);
  }
  function _handleBridge() {
    _handleBridge = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(function* () {
      setError(null);
      if (!account) {
        yield connect();
        return;
      }
      if (isRateLimited()) {
        setError("Please wait ".concat(RATE_LIMIT_SECONDS, "s between transfers."));
        return;
      }
      try {
        setBusy(true);
        setArrived(false);
        setArrivalSeconds(undefined);
        setTxHash(undefined);
        setStartedAt(Date.now());

        // In a real setup, we'd call OFT contract's sendFrom on the source chain using signer.
        // Here we simulate by creating a dummy tx if OFT addresses are configured but we cannot sign without user confirmation.
        // We attempt to detect wallet network and warn if mismatched.
        if (chainId !== from.id) {
          setError("Switch wallet to ".concat(from.name, " network."));
          setBusy(false);
          return;
        }
        var provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(window.ethereum);
        var signer = provider.getSigner();
        var oftAddress = _utils_layerzero__WEBPACK_IMPORTED_MODULE_6__.OFT_CONFIG.addresses[fromKey];
        var _token = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(oftAddress, _utils_erc20__WEBPACK_IMPORTED_MODULE_10__.ERC20_ABI, signer);

        // Placeholder: we simply do an approve to self with 0 value to generate a tx hash for tracking UX in demo mode.
        var tx = yield _token.approve(oftAddress, 0);
        setTxHash(tx.hash);
        saveTxLog(tx.hash);

        // Simulate arrival by polling destination balance difference for up to 60s
        var destProvider = createProvider(to.rpcUrl);
        var destTokenAddr = _utils_layerzero__WEBPACK_IMPORTED_MODULE_6__.OFT_CONFIG.addresses[toKey];
        var before = ethers__WEBPACK_IMPORTED_MODULE_8__.BigNumber.from(0);
        try {
          before = yield (0,_utils_erc20__WEBPACK_IMPORTED_MODULE_10__.getErc20Balance)(destProvider, destTokenAddr, account);
        } catch (_unused3) {}
        var start = Date.now();
        var deadline = start + 60000;
        var interval = 2000;
        function poll() {
          return _poll.apply(this, arguments);
        }
        function _poll() {
          _poll = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(function* () {
            try {
              var cur = yield (0,_utils_erc20__WEBPACK_IMPORTED_MODULE_10__.getErc20Balance)(destProvider, destTokenAddr, account);
              if (cur.gt(before)) return true;
            } catch (_unused4) {}
            return false;
          });
          return _poll.apply(this, arguments);
        }
        var ok = false;
        while (Date.now() < deadline) {
          // eslint-disable-next-line no-await-in-loop
          ok = yield poll();
          if (ok) break;
          // eslint-disable-next-line no-await-in-loop
          yield new Promise(r => setTimeout(r, interval));
        }
        var sec = Math.floor((Date.now() - start) / 1000);
        setArrived(ok);
        setArrivalSeconds(sec);
        setBusy(false);
      } catch (e) {
        setBusy(false);
        setError((e === null || e === void 0 ? void 0 : e.message) || 'Failed to bridge');
      }
    });
    return _handleBridge.apply(this, arguments);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "space-y-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
        className: "text-xl font-semibold",
        children: "LayerZero Cross-Chain Bridge"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        onClick: () => account ? null : connect(),
        className: "px-4 py-2 rounded bg-blue-600 text-white",
        children: account ? "".concat(account.slice(0, 6), "...").concat(account.slice(-4)) : 'Connect Wallet'
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "md:col-span-2 p-4 border rounded border-gray-200 dark:border-gray-800",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
              className: "text-xs text-gray-500",
              children: "From"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "mt-1 grid grid-cols-2 gap-2",
              children: _utils_chains__WEBPACK_IMPORTED_MODULE_1__.SUPPORTED_CHAIN_KEYS.map(key => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setFromKey(key),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChainBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  chain: _utils_chains__WEBPACK_IMPORTED_MODULE_1__.CHAINS[key],
                  selected: fromKey === key
                })
              }, key))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
              className: "text-xs text-gray-500",
              children: "To"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "mt-1 grid grid-cols-2 gap-2",
              children: _utils_chains__WEBPACK_IMPORTED_MODULE_1__.SUPPORTED_CHAIN_KEYS.map(key => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                onClick: () => setToKey(key),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChainBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  chain: _utils_chains__WEBPACK_IMPORTED_MODULE_1__.CHAINS[key],
                  selected: toKey === key
                })
              }, key))
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_TokenSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
            value: token,
            onChange: setToken
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
              className: "text-xs text-gray-500",
              children: "Amount"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
              type: "number",
              min: "0",
              step: "0.000001",
              value: amount,
              onChange: e => setAmount(e.target.value),
              placeholder: "0.0",
              className: "border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-black"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              onClick: handleBridge,
              disabled: !canBridge || busy,
              className: "w-full px-4 py-2 rounded ".concat(canBridge && !busy ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400', " text-white"),
              children: busy ? 'Processing…' : 'Bridge Now'
            })
          })]
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "text-red-600 text-sm mt-2",
          children: error
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "mt-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StatusTracker__WEBPACK_IMPORTED_MODULE_4__["default"], {
            from: from,
            to: to,
            txHash: txHash,
            startedAt: startedAt,
            arrived: arrived,
            arrivalSeconds: arrivalSeconds
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "p-4 border rounded border-gray-200 dark:border-gray-800",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
          className: "font-medium mb-2",
          children: "Balances"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "space-y-2 text-sm",
          children: _utils_chains__WEBPACK_IMPORTED_MODULE_1__.SUPPORTED_CHAIN_KEYS.map(key => {
            var _balances$key;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: _utils_chains__WEBPACK_IMPORTED_MODULE_1__.CHAINS[key].name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "tabular-nums",
                children: (_balances$key = balances[key]) !== null && _balances$key !== void 0 ? _balances$key : '—'
              })]
            }, key);
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 279452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LZ_EIDS: () => (/* binding */ LZ_EIDS),
/* harmony export */   OFT_CONFIG: () => (/* binding */ OFT_CONFIG),
/* harmony export */   isOftConfigured: () => (/* binding */ isOftConfigured)
/* harmony export */ });
/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(559377);

var OFT_CONFIG = {
  addresses: {
    ethereum: process.env.NEXT_PUBLIC_ZION_OFT_ETHEREUM || '',
    polygon: process.env.NEXT_PUBLIC_ZION_OFT_POLYGON || '',
    arbitrum: process.env.NEXT_PUBLIC_ZION_OFT_ARBITRUM || '',
    optimism: process.env.NEXT_PUBLIC_ZION_OFT_OPTIMISM || '',
    avalanche: process.env.NEXT_PUBLIC_ZION_OFT_AVALANCHE || '',
    bnb: process.env.NEXT_PUBLIC_ZION_OFT_BNB || ''
  }
};
function isOftConfigured(chainKey) {
  var address = OFT_CONFIG.addresses[chainKey];
  return !!address && address !== '0x0000000000000000000000000000000000000000';
}

// LayerZero V2 EIDs are included in CHAINS; any advanced config can be added here later.
var LZ_EIDS = Object.fromEntries(Object.entries(_chains__WEBPACK_IMPORTED_MODULE_0__.CHAINS).map(_ref => {
  var [k, v] = _ref;
  return [k, v.lzEid];
}));

/***/ }),

/***/ 556609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatusTracker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function StatusTracker(_ref) {
  var {
    from,
    to,
    txHash,
    startedAt,
    arrived,
    arrivalSeconds
  } = _ref;
  var [elapsed, setElapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!startedAt || arrived) return;
    var id = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 500);
    return () => clearInterval(id);
  }, [startedAt, arrived]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "p-3 border rounded bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-sm",
    children: txHash ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col gap-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: ["Tracking transfer from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: from.name
        }), " to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: to.name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "text-xs text-gray-500",
        children: ["Tx: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          className: "underline",
          href: "".concat(from.explorerUrl, "/tx/").concat(txHash),
          target: "_blank",
          rel: "noreferrer",
          children: [txHash.slice(0, 10), "..."]
        })]
      }), !arrived && startedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: ["Elapsed: ", elapsed, "s"]
      }), arrived && arrivalSeconds !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "text-green-600",
        children: ["ZION$ arrived on ", to.name, " in ", arrivalSeconds, "s"]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: "No transfer in progress"
    })
  });
}

/***/ }),

/***/ 633583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TokenSelector(_ref) {
  var {
    value,
    onChange: _onChange
  } = _ref;
  var options = [{
    symbol: 'ZION$',
    label: 'ZION$',
    value: 'ZION'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex flex-col gap-1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      className: "text-xs text-gray-500",
      children: "Token"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
      value: value,
      onChange: e => _onChange(e.target.value),
      className: "border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-black",
      children: options.map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: o.value,
        children: o.label
      }, o.value))
    })]
  });
}

/***/ }),

/***/ 698553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChainBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ChainBadge(_ref) {
  var {
    chain,
    selected = false
  } = _ref;
  var initials = chain.name.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex items-center gap-2 px-3 py-2 rounded border ".concat(selected ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-700'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold",
      children: initials
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "text-sm",
      children: chain.name
    })]
  });
}

/***/ }),

/***/ 744911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERC20_ABI: () => (/* binding */ ERC20_ABI),
/* harmony export */   getErc20Balance: () => (/* binding */ getErc20Balance),
/* harmony export */   getErc20Contract: () => (/* binding */ getErc20Contract)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(860076);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(714396);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);


var ERC20_ABI = ['function balanceOf(address owner) view returns (uint256)', 'function allowance(address owner, address spender) view returns (uint256)', 'function approve(address spender, uint256 amount) returns (bool)', 'function decimals() view returns (uint8)', 'function symbol() view returns (string)', 'function name() view returns (string)'];
function getErc20Balance(_x, _x2, _x3) {
  return _getErc20Balance.apply(this, arguments);
}
function _getErc20Balance() {
  _getErc20Balance = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (provider, tokenAddress, userAddress) {
    var token = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(tokenAddress, ERC20_ABI, provider);
    return token.balanceOf(userAddress);
  });
  return _getErc20Balance.apply(this, arguments);
}
function getErc20Contract(provider, tokenAddress) {
  return new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(tokenAddress, ERC20_ABI, provider);
}

/***/ })

};
;