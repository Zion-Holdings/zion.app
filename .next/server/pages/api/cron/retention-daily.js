"use strict";
(() => {
var exports = {};
exports.id = 376132;
exports.ids = [376132];
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

/***/ 187797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateEmailCopy: () => (/* binding */ generateEmailCopy)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405206);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(783045);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);


var OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
var client = new (openai__WEBPACK_IMPORTED_MODULE_0___default())({
  apiKey: OPENAI_API_KEY
});
function generateEmailCopy(_x) {
  return _generateEmailCopy.apply(this, arguments);
}
function _generateEmailCopy() {
  _generateEmailCopy = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (input) {
    var _response$choices;
    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured");
    }
    var system = "You are an expert lifecycle email copywriter for the Zion AI Marketplace. Tone: friendly, concise, helpful. Keep subject lines under 60 chars. Email body under 140 words. Include one clear CTA.";
    var user = "Write a re-engagement email.\nPersona: ".concat(input.persona, "\nName: ").concat(input.firstName || "there", "\nContext: ").concat(input.context, "\nCTA: ").concat(input.callToAction, "\n").concat(input.incentive ? "Incentive: ".concat(input.incentive) : "", "\n");
    var response = yield client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{
        role: "system",
        content: system
      }, {
        role: "user",
        content: user
      }]
    });
    var content = ((_response$choices = response.choices) === null || _response$choices === void 0 || (_response$choices = _response$choices[0]) === null || _response$choices === void 0 || (_response$choices = _response$choices.message) === null || _response$choices === void 0 ? void 0 : _response$choices.content) || "";

    // naive split: expect first line as subject if prefixed or use first sentence
    var subject = "Quick update from Zion";
    var body = content;
    var lines = content.split("\n").map(l => l.trim()).filter(Boolean);
    var subjectLine = lines.find(l => /^subject[:\-]/i.test(l));
    if (subjectLine) {
      subject = subjectLine.replace(/^subject[:\-]\s*/i, "").trim();
      body = lines.filter(l => l !== subjectLine).join("\n");
    } else if (lines.length > 1) {
      subject = lines[0].replace(/\.$/, "");
      body = lines.slice(1).join("\n");
    }
    return {
      subject,
      bodyHtml: body.replace(/\n/g, "<br/>")
    };
  });
  return _generateEmailCopy.apply(this, arguments);
}

/***/ }),

/***/ 201516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   handler: () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(806665);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(708667);
/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(233480);
/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(886435);
/* harmony import */ var private_next_pages_api_cron_retention_daily_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(415856);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_cron_retention_daily_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_cron_retention_daily_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/cron/retention-daily",
        pathname: "/api/cron/retention-daily",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_cron_retention_daily_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/cron/retention-daily";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if (false) {}
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return;
    }
    const { query, params, prerenderManifest, routerServerContext } = prepareResult;
    try {
        const method = req.method || 'GET';
        const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__.getTracer)();
        const activeSpan = tracer.getActiveScopeSpan();
        const onRequestError = routeModule.instrumentationOnRequestError.bind(routeModule);
        const invokeRouteModule = async (span)=>routeModule.render(req, res, {
                query: {
                    ...query,
                    ...params
                },
                params,
                allowedRevalidateHeaderKeys: [],
                multiZoneDraftMode: Boolean(false),
                trustHostHeader: false,
                // TODO: get this from from runtime env so manifest
                // doesn't need to load
                previewProps: prerenderManifest.preview,
                propagateError: false,
                dev: routeModule.isDev,
                page: "/api/cron/retention-daily",
                internalRevalidate: routerServerContext == null ? void 0 : routerServerContext.revalidate,
                onError: (...args)=>onRequestError(req, ...args)
            }).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__.BaseServerSpan.handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${req.url}`);
                }
            });
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await invokeRouteModule(activeSpan);
        } else {
            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__.BaseServerSpan.handleRequest, {
                    spanName: `${method} ${req.url}`,
                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__.SpanKind.SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, invokeRouteModule));
        }
    } catch (err) {
        // we re-throw in dev to show the error overlay
        if (routeModule.isDev) {
            throw err;
        }
        // this is technically an invariant as error handling
        // should be done inside of api-resolver onError
        (0,next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__.sendError)(res, 500, 'Internal Server Error');
    } finally{
        // We don't allow any waitUntil work in pages API routes currently
        // so if callback is present return with resolved promise since no
        // pending work
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
    }
}

//# sourceMappingURL=pages-api.js.map


/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 415856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(405206);
/* harmony import */ var _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20743);
/* harmony import */ var _utils_email_resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(702979);
/* harmony import */ var _utils_email_gpt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187797);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1052);





var WEBHOOK_SECRET = process.env.RETENTION_WEBHOOK_SECRET || "";
function upsertEmailLog(_x) {
  return _upsertEmailLog.apply(this, arguments);
}
function _upsertEmailLog() {
  _upsertEmailLog = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (log) {
    var {
      error
    } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("email_logs").upsert(log, {
      onConflict: "dedupe_key"
    });
    if (error) throw error;
  });
  return _upsertEmailLog.apply(this, arguments);
}
function requireSecret(req) {
  var secret = req.headers["x-operator-secret"] || req.query.secret;
  if (!WEBHOOK_SECRET || secret !== WEBHOOK_SECRET) {
    throw new Error("Unauthorized");
  }
}
function handler(_x2, _x3) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(function* (req, res) {
    try {
      if (req.method !== "POST") return res.status(405).end();
      requireSecret(req);

      // 1) Day 0: Welcome for new users created in last 24h and not sent
      var {
        data: newUsers,
        error: nuErr
      } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("user_metrics").select("user_id, email, first_name, created_at").gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
      if (nuErr) throw nuErr;
      for (var user of newUsers || []) {
        var dedupeKey = "".concat(user.user_id, ":welcome:day0");
        var {
          data: existing
        } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("email_logs").select("id").eq("dedupe_key", dedupeKey).limit(1).maybeSingle();
        if (existing) continue;
        var copy = yield (0,_utils_email_gpt__WEBPACK_IMPORTED_MODULE_2__.generateEmailCopy)({
          persona: "talent",
          firstName: user.first_name || undefined,
          context: "New user signup. Send a warm, actionable welcome with onboarding checklist link",
          callToAction: "Open your Zion checklist"
        });
        var html = "\n        <div style=\"font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;\">\n          <p>Hi ".concat(user.first_name || "there", ",</p>\n          ").concat(copy.bodyHtml, "\n          <p><a href=\"https://zion.app/onboarding\" style=\"color:#4f46e5;\">View your onboarding checklist \u2192</a></p>\n        </div>");
        var resp = yield (0,_utils_email_resend__WEBPACK_IMPORTED_MODULE_1__.sendEmail)({
          to: user.email,
          subject: copy.subject || "Welcome to Zion! Here's what to do next",
          html,
          tags: [{
            name: "flow",
            value: "welcome"
          }, {
            name: "step",
            value: "day0"
          }]
        });
        yield upsertEmailLog({
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
          user_id: user.user_id,
          email: user.email,
          flow: "welcome",
          step: "day0",
          dedupe_key: dedupeKey,
          subject: copy.subject,
          status: resp !== null && resp !== void 0 && resp.error ? "error" : "sent"
        });
      }

      // 2) Inactivity 3/7/30 days
      var now = Date.now();
      var windows = [3, 7, 30];
      for (var days of windows) {
        var cutoff = new Date(now - days * 24 * 60 * 60 * 1000).toISOString();
        var {
          data: inactive,
          error: inErr
        } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("user_metrics").select("user_id, email, first_name, last_active_at, persona, profile_complete").lte("last_active_at", cutoff);
        if (inErr) throw inErr;
        for (var u of inactive || []) {
          var step = "inactive-".concat(days, "d");
          var _dedupeKey = "".concat(u.user_id, ":reactivation:").concat(step);
          var {
            data: _existing
          } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("email_logs").select("id").eq("dedupe_key", _dedupeKey).limit(1).maybeSingle();
          if (_existing) continue;
          var incompleteProfile = u.profile_complete === false;
          var contextParts = ["User inactive ".concat(days, " days"), incompleteProfile ? "Profile incomplete" : ""].filter(Boolean);
          var _copy = yield (0,_utils_email_gpt__WEBPACK_IMPORTED_MODULE_2__.generateEmailCopy)({
            persona: u.persona || "talent",
            firstName: u.first_name || undefined,
            context: contextParts.join("; ") || "Inactivity ".concat(days, " days"),
            callToAction: incompleteProfile ? "Complete your profile" : "Browse top talent/projects",
            incentive: incompleteProfile ? "Complete your profile this week and unlock premium visibility" : undefined
          });
          var _html = "\n          <div style=\"font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;\">\n            <p>Hi ".concat(u.first_name || "there", ",</p>\n            ").concat(_copy.bodyHtml, "\n            <p><a href=\"https://zion.app/").concat(u.persona === "hirer" ? "talent" : "projects", "\" style=\"color:#4f46e5;\">Take action \u2192</a></p>\n          </div>");
          var _resp = yield (0,_utils_email_resend__WEBPACK_IMPORTED_MODULE_1__.sendEmail)({
            to: u.email,
            subject: _copy.subject || (incompleteProfile ? "Add your availability to get matched" : "Zion’s top talent this week — don’t miss out"),
            html: _html,
            tags: [{
              name: "flow",
              value: "reactivation"
            }, {
              name: "step",
              value: step
            }]
          });
          yield upsertEmailLog({
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
            user_id: u.user_id,
            email: u.email,
            flow: "reactivation",
            step,
            dedupe_key: _dedupeKey,
            subject: _copy.subject,
            status: _resp !== null && _resp !== void 0 && _resp.error ? "error" : "sent"
          });
        }
      }

      // 3) Job not filled: jobs open > 7 days without accepted applications
      var {
        data: jobs
      } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("jobs").select("id, owner_user_id, title, created_at, status, invited_count, application_count, filled_at, owner_email, owner_first_name").eq("status", "open").lte("created_at", new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString());
      for (var j of jobs || []) {
        var _dedupeKey2 = "".concat(j.owner_user_id, ":job-not-filled:").concat(j.id);
        var {
          data: _existing2
        } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("email_logs").select("id").eq("dedupe_key", _dedupeKey2).limit(1).maybeSingle();
        if (_existing2) continue;
        var _copy2 = yield (0,_utils_email_gpt__WEBPACK_IMPORTED_MODULE_2__.generateEmailCopy)({
          persona: "hirer",
          firstName: j.owner_first_name || undefined,
          context: "Job not filled: ".concat(j.title, ". Encourage sending invites to talent to get quotes faster"),
          callToAction: "Invite talent now"
        });
        var _html2 = "\n        <div style=\"font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;\">\n          <p>Hi ".concat(j.owner_first_name || "there", ",</p>\n          ").concat(_copy2.bodyHtml, "\n          <p><a href=\"https://zion.app/jobs/").concat(j.id, "/invite\" style=\"color:#4f46e5;\">Invite talent now \u2192</a></p>\n        </div>");
        var _resp2 = yield (0,_utils_email_resend__WEBPACK_IMPORTED_MODULE_1__.sendEmail)({
          to: j.owner_email,
          subject: _copy2.subject || "Invite talent now to get quotes faster",
          html: _html2,
          tags: [{
            name: "flow",
            value: "job-not-filled"
          }, {
            name: "step",
            value: "reminder"
          }]
        });
        yield upsertEmailLog({
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
          user_id: j.owner_user_id,
          email: j.owner_email,
          flow: "job-not-filled",
          step: "reminder",
          dedupe_key: _dedupeKey2,
          subject: _copy2.subject,
          status: _resp2 !== null && _resp2 !== void 0 && _resp2.error ? "error" : "sent"
        });
      }

      // 4) Talent not receiving applications: users with persona=talent and 0 applications in last 7 days
      var sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
      var {
        data: talents
      } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("user_metrics").select("user_id, email, first_name").eq("persona", "talent").lte("last_received_application_at", sevenDaysAgo);
      for (var t of talents || []) {
        var _dedupeKey3 = "".concat(t.user_id, ":talent-no-apps:7d");
        var {
          data: _existing3
        } = yield _utils_supabase_admin__WEBPACK_IMPORTED_MODULE_0__.supabaseAdmin.from("email_logs").select("id").eq("dedupe_key", _dedupeKey3).limit(1).maybeSingle();
        if (_existing3) continue;
        var _copy3 = yield (0,_utils_email_gpt__WEBPACK_IMPORTED_MODULE_2__.generateEmailCopy)({
          persona: "talent",
          firstName: t.first_name || undefined,
          context: "Talent has not received applications in 7 days. Re-engage with new projects and profile tuning.",
          callToAction: "Discover new projects"
        });
        var _html3 = "\n        <div style=\"font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;\">\n          <p>Hi ".concat(t.first_name || "there", ",</p>\n          ").concat(_copy3.bodyHtml, "\n          <p><a href=\"https://zion.app/projects\" style=\"color:#4f46e5;\">See new projects \u2192</a></p>\n        </div>");
        var _resp3 = yield (0,_utils_email_resend__WEBPACK_IMPORTED_MODULE_1__.sendEmail)({
          to: t.email,
          subject: _copy3.subject || "New projects waiting for your expertise",
          html: _html3,
          tags: [{
            name: "flow",
            value: "talent-reactivation"
          }, {
            name: "step",
            value: "7d"
          }]
        });
        yield upsertEmailLog({
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
          user_id: t.user_id,
          email: t.email,
          flow: "talent-reactivation",
          step: "7d",
          dedupe_key: _dedupeKey3,
          subject: _copy3.subject,
          status: _resp3 !== null && _resp3 !== void 0 && _resp3.error ? "error" : "sent"
        });
      }
      return res.json({
        ok: true
      });
    } catch (e) {
      var message = (e === null || e === void 0 ? void 0 : e.message) || "Internal Error";
      return res.status(message === "Unauthorized" ? 401 : 500).json({
        error: message
      });
    }
  });
  return _handler.apply(this, arguments);
}

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 702979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resend: () => (/* binding */ resend),
/* harmony export */   sendEmail: () => (/* binding */ sendEmail)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405206);
/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(824459);
/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(resend__WEBPACK_IMPORTED_MODULE_0__);


var RESEND_API_KEY = process.env.RESEND_API_KEY || "";
var DEFAULT_FROM = process.env.RETENTION_EMAIL_FROM || "Zion <noreply@zion.ai>";
var resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(RESEND_API_KEY);
function sendEmail(_x) {
  return _sendEmail.apply(this, arguments);
}
function _sendEmail() {
  _sendEmail = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (params) {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    var {
      to,
      subject,
      html,
      from = DEFAULT_FROM,
      headers,
      tags
    } = params;
    return yield resend.emails.send({
      to,
      subject,
      html,
      from,
      headers,
      tags
    });
  });
  return _sendEmail.apply(this, arguments);
}

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ }),

/***/ 781630:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 927910:
/***/ ((module) => {

module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(201516)));
module.exports = __webpack_exports__;

})();