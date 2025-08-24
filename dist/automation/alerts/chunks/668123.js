"use strict";
exports.id = 668123;
exports.ids = [668123];
exports.modules = {

/***/ 668123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatWidget)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function generateId() {
  return Math.random().toString(36).slice(2);
}
var SUGGESTED_QUESTIONS = ['What is the Zion AI Marketplace?', 'How do I list my AI model or service?', 'How does pricing and fees work?', 'How do I integrate the API into my app?', 'How do I contact support?'];
function ChatWidget() {
  var [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [isSending, setIsSending] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) return;
    if (messages.length === 0) {
      setMessages([{
        id: generateId(),
        role: 'assistant',
        content: 'Hi! I\'m the Zion Assistant. I can help you explore features, answer FAQs, and guide you around the Zion AI Marketplace. How can I help today?'
      }]);
    }
    var t = setTimeout(() => {
      var _inputRef$current;
      return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    }, 150);
    return () => clearTimeout(t);
  }, [isOpen]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _scrollRef$current;
    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 || _scrollRef$current.scrollTo({
      top: 999999,
      behavior: 'smooth'
    });
  }, [messages, isOpen]);
  var canSend = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => input.trim().length > 0 && !isSending, [input, isSending]);
  function sendMessage(_x) {
    return _sendMessage.apply(this, arguments);
  }
  function _sendMessage() {
    _sendMessage = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (text) {
      var trimmed = text.trim();
      if (!trimmed) return;
      var userMsg = {
        id: generateId(),
        role: 'user',
        content: trimmed
      };
      setMessages(prev => [...prev, userMsg]);
      setInput('');
      setIsSending(true);
      try {
        var _data$message$content, _data$message;
        var res = yield fetch('/api/assistant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messages: [...messages, userMsg].map(m => ({
              role: m.role,
              content: m.content
            }))
          })
        });
        if (!res.ok) {
          throw new Error("Request failed: ".concat(res.status));
        }
        var data = yield res.json();
        var content = (_data$message$content = data === null || data === void 0 || (_data$message = data.message) === null || _data$message === void 0 ? void 0 : _data$message.content) !== null && _data$message$content !== void 0 ? _data$message$content : 'Sorry, I could not generate a response right now.';
        setMessages(prev => [...prev, {
          id: generateId(),
          role: 'assistant',
          content
        }]);
      } catch (err) {
        setMessages(prev => [...prev, {
          id: generateId(),
          role: 'assistant',
          content: 'Sorry, something went wrong connecting to the assistant. Please try again, and ensure your network is online.'
        }]);
      } finally {
        setIsSending(false);
      }
    });
    return _sendMessage.apply(this, arguments);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (canSend) sendMessage(input);
  }
  function handleSuggestedClick(q) {
    sendMessage(q);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      "aria-label": isOpen ? 'Close chat' : 'Open chat',
      onClick: () => setIsOpen(o => !o),
      className: "fixed bottom-4 right-4 z-[99] rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      children: isOpen ? 'Close' : 'Chat with Zion'
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "fixed inset-0 z-[98] flex items-end sm:items-center justify-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute inset-0 bg-black/30",
        onClick: () => setIsOpen(false)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "relative w-full sm:max-w-md mx-auto sm:mx-0 sm:mr-6 sm:mb-6 rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "text-sm font-semibold",
              children: "Zion Assistant"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            onClick: () => setIsOpen(false),
            "aria-label": "Close chat",
            className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
            children: "Esc"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          ref: scrollRef,
          className: "h-[60vh] sm:h-[420px] overflow-y-auto px-4 py-3 space-y-3",
          children: [messages.map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: m.role === 'user' ? 'text-right' : 'text-left',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: 'inline-block max-w-[85%] px-3 py-2 rounded-2xl text-sm ' + (m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-sm' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-bl-sm'),
              children: m.content
            })
          }, m.id)), messages.length <= 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "text-xs text-gray-500 mt-2",
            children: ["Quick questions:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "mt-2 flex flex-wrap gap-2",
              children: SUGGESTED_QUESTIONS.map(q => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                onClick: () => handleSuggestedClick(q),
                className: "px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200",
                children: q
              }, q))
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
          onSubmit: handleSubmit,
          className: "border-t border-gray-200 dark:border-gray-800 p-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              ref: inputRef,
              type: "text",
              value: input,
              onChange: e => setInput(e.target.value),
              placeholder: isSending ? 'Sending…' : 'Ask about features, pricing, onboarding…',
              className: "flex-1 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",
              disabled: isSending,
              "aria-disabled": isSending
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              type: "submit",
              disabled: !canSend,
              className: "rounded-lg bg-indigo-600 text-white text-sm font-medium px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed",
              children: "Send"
            })]
          })
        })]
      })]
    })]
  });
}

/***/ })

};
;