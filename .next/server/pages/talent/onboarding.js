"use strict";
(() => {
var exports = {};
exports.id = 152086;
exports.ids = [152086,890636];
exports.modules = {

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

/***/ 732978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TalentOnboardingPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var steps = ['Basic Info', 'Experience', 'Skills & Tech', 'Availability'];
var containerVariants = {
  initial: {
    opacity: 0,
    y: 16
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -16
  }
};
function useInitialFormState() {
  return {
    fullName: '',
    professionalTitle: '',
    profilePicture: null,
    bio: '',
    projects: '',
    yearsOfExperience: '',
    skills: '',
    tools: '',
    availability: '',
    timezone: '',
    hourlyRate: '',
    portfolioLinks: '',
    cvFile: null
  };
}
function fileToBase64(_x) {
  return _fileToBase.apply(this, arguments);
}
function _fileToBase() {
  _fileToBase = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (file) {
    var toBase64 = fileInner => new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(fileInner);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    var base64 = yield toBase64(file);
    return {
      name: file.name,
      type: file.type,
      size: file.size,
      base64
    };
  });
  return _fileToBase.apply(this, arguments);
}
function TalentOnboardingPage() {
  var [stepIndex, setStepIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  var [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(useInitialFormState);
  var [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var currentStep = steps[stepIndex];
  var progressPercent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (stepIndex + 1) / steps.length * 100, [stepIndex]);
  function nextStep() {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  }
  function prevStep() {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  }
  function update(key, value) {
    setFormData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [key]: value
    }));
  }
  function requiredMissingForStep() {
    if (currentStep === 'Basic Info') {
      if (!formData.fullName.trim()) return 'Full Name is required.';
      if (!formData.professionalTitle.trim()) return 'Professional Title is required.';
    }
    if (currentStep === 'Experience') {
      if (!formData.bio.trim()) return 'Short Bio is required.';
      if (!formData.yearsOfExperience.trim()) return 'Years of Experience is required.';
    }
    if (currentStep === 'Skills & Tech') {
      if (!formData.skills.trim()) return 'Please list at least one skill.';
    }
    if (currentStep === 'Availability') {
      if (!formData.availability) return 'Please select your current availability.';
      if (!formData.timezone.trim()) return 'Preferred Timezone is required.';
    }
    return null;
  }
  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      var missing = requiredMissingForStep();
      if (missing) {
        setErrorMessage(missing);
        return;
      }
      setErrorMessage(null);
      setSubmitting(true);
      try {
        var response = yield fetch('/api/talent/onboard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(_objectSpread({}, formData))
        });
        if (!response.ok) throw new Error('Submission failed');
        setSubmitted(true);
      } catch (err) {
        setErrorMessage('Submission failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    });
    return _handleSubmit.apply(this, arguments);
  }
  if (submitted) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "max-w-xl w-full bg-glass/60 rounded-2xl p-8 shadow-xl border border-[var(--border-primary)] animate-fade-in",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "text-center space-y-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
            className: "text-2xl md:text-3xl font-semibold text-high-contrast",
            children: "Thanks! We\u2019re using AI to optimize your profile."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-high-contrast-secondary",
            children: "You\u2019ll appear in search results shortly."
          })]
        })
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-4 md:p-8",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "w-full max-w-3xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-2xl md:text-3xl font-semibold",
          children: "Zion AI Marketplace: Talent Onboarding"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-high-contrast-muted mt-1",
          children: "Create your public profile in a few quick steps."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "w-full h-2 bg-[var(--border-secondary)] rounded-full overflow-hidden mb-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "h-full bg-[var(--text-accent)] transition-all duration-500",
          style: {
            width: "".concat(progressPercent, "%")
          }
        })
      }), errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mb-4 rounded-lg border border-[var(--border-error)] text-high-contrast-error px-4 py-3 bg-[rgba(239,68,68,0.1)]",
        children: errorMessage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "bg-glass/60 rounded-2xl p-6 md:p-8 shadow-xl border border-[var(--border-primary)]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
          mode: "wait",
          children: [currentStep === 'Basic Info' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            variants: containerVariants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: {
              duration: 0.3
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "fullName",
                label: "Full Name",
                value: formData.fullName,
                onChange: v => update('fullName', v),
                required: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "professionalTitle",
                label: "Professional Title",
                placeholder: "e.g., AI Developer, Network Engineer",
                value: formData.professionalTitle,
                onChange: v => update('professionalTitle', v),
                required: true
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FileUpload, {
                id: "profilePicture",
                label: "Profile Picture (optional)",
                accept: "image/*",
                fileData: formData.profilePicture,
                onFileChange: f => update('profilePicture', f)
              })
            })]
          }, "step-basic"), currentStep === 'Experience' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            variants: containerVariants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: {
              duration: 0.3
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "grid grid-cols-1 gap-4 md:gap-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingTextarea, {
                id: "bio",
                label: "Short Bio or Work History",
                value: formData.bio,
                onChange: v => update('bio', v),
                required: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingTextarea, {
                id: "projects",
                label: "Key Projects or Roles (optional)",
                placeholder: "Use bullets or short lines",
                value: formData.projects,
                onChange: v => update('projects', v)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "yearsOfExperience",
                label: "Years of Experience",
                type: "number",
                min: 0,
                value: formData.yearsOfExperience,
                onChange: v => update('yearsOfExperience', v),
                required: true
              })]
            })
          }, "step-experience"), currentStep === 'Skills & Tech' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            variants: containerVariants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: {
              duration: 0.3
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "grid grid-cols-1 gap-4 md:gap-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "skills",
                label: "Skills (comma-separated)",
                placeholder: "e.g., Python, LLMs, Kubernetes",
                value: formData.skills,
                onChange: v => update('skills', v),
                required: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "tools",
                label: "Tools/Platforms (optional, comma-separated)",
                placeholder: "e.g., AWS, GCP, Docker, Snowflake",
                value: formData.tools,
                onChange: v => update('tools', v)
              })]
            })
          }, "step-skills"), currentStep === 'Availability' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            variants: containerVariants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: {
              duration: 0.3
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "grid grid-cols-1 gap-4 md:gap-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                  htmlFor: "availability",
                  className: "block text-sm mb-2 text-high-contrast-secondary",
                  children: "Current Availability"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
                  id: "availability",
                  className: "w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
                  value: formData.availability,
                  onChange: e => update('availability', e.target.value),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                    value: "",
                    children: "Select..."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                    value: "Full-time",
                    children: "Full-time"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                    value: "Part-time",
                    children: "Part-time"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                    value: "Project-based",
                    children: "Project-based"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "timezone",
                label: "Preferred Timezone",
                placeholder: "e.g., UTC-5, PST, CET",
                value: formData.timezone,
                onChange: v => update('timezone', v),
                required: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "hourlyRate",
                label: "Hourly Rate (optional)",
                type: "number",
                min: 0,
                value: formData.hourlyRate || '',
                onChange: v => update('hourlyRate', v)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FloatingInput, {
                id: "portfolioLinks",
                label: "Portfolio Links (optional)",
                placeholder: "e.g., https://github.com/you, https://your-site.com",
                value: formData.portfolioLinks || '',
                onChange: v => update('portfolioLinks', v)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FileUpload, {
                id: "cvFile",
                label: "Upload CV (optional)",
                accept: ".pdf,.doc,.docx,.txt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                fileData: formData.cvFile,
                onFileChange: f => update('cvFile', f)
              })]
            })
          }, "step-availability")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "mt-8 flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "px-4 py-2 rounded-lg border border-[var(--border-secondary)] text-high-contrast-secondary hover:bg-high-contrast-tertiary/60 transition-colors",
            onClick: prevStep,
            disabled: stepIndex === 0,
            children: "Back"
          }), stepIndex < steps.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50",
            onClick: () => {
              var missing = requiredMissingForStep();
              if (missing) {
                setErrorMessage(missing);
                return;
              }
              setErrorMessage(null);
              nextStep();
            },
            children: "Next"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50",
            onClick: handleSubmit,
            disabled: submitting,
            children: submitting ? 'Submitting…' : 'Submit'
          })]
        })]
      })]
    })
  });
}
function FloatingInput(props) {
  var {
    id,
    label,
    value,
    onChange: _onChange,
    placeholder,
    type = 'text',
    min,
    required
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      id: id,
      name: id,
      type: type,
      min: min,
      value: value,
      onChange: e => _onChange(e.target.value),
      placeholder: placeholder,
      className: "w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-5 pb-2 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent",
      "aria-required": required
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      htmlFor: id,
      className: "absolute left-4 top-2 text-xs text-high-contrast-muted",
      children: label
    })]
  });
}
function FloatingTextarea(props) {
  var {
    id,
    label,
    value,
    onChange: _onChange2,
    placeholder,
    required
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
      id: id,
      name: id,
      rows: 6,
      value: value,
      onChange: e => _onChange2(e.target.value),
      placeholder: placeholder,
      className: "w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-6 pb-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent",
      "aria-required": required
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      htmlFor: id,
      className: "absolute left-4 top-2 text-xs text-high-contrast-muted",
      children: label
    })]
  });
}
function FileUpload(props) {
  var {
    id,
    label,
    accept,
    fileData,
    onFileChange
  } = props;
  var [localError, setLocalError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      htmlFor: id,
      className: "block text-sm mb-2 text-high-contrast-secondary",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      id: id,
      type: "file",
      accept: accept,
      className: "block w-full text-sm text-high-contrast-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--text-accent)] file:text-black hover:file:bg-[var(--text-accent)]/90",
      onChange: (/*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (e) {
          var _e$target$files;
          var file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
          if (!file) {
            onFileChange(null);
            return;
          }
          try {
            var base64 = yield fileToBase64(file);
            onFileChange(base64);
            setLocalError(null);
          } catch (err) {
            setLocalError('Failed to read file.');
          }
        });
        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }())
    }), fileData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "mt-2 text-xs text-high-contrast-muted",
      children: ["Selected: ", fileData.name, " (", Math.round(fileData.size / 1024 * 10) / 10, " KB)"]
    }), localError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "mt-1 text-xs text-high-contrast-error",
      children: localError
    })]
  });
}

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 919961:
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
/* harmony import */ var private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(732978);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/talent/onboarding",
        pathname: "/talent/onboarding",
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
    userland: private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/talent/onboarding",
    config,
    userland: private_next_pages_talent_onboarding_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(919961)));
module.exports = __webpack_exports__;

})();