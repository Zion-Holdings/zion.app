"use strict";
(() => {
var exports = {};
exports.id = 238671;
exports.ids = [238671];
exports.modules = {

/***/ 354877:
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
/* harmony import */ var private_next_pages_api_blog_posts_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(729410);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(858112);
/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(918766);
/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);




// Import the userland code.



// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_blog_posts_index_ts__WEBPACK_IMPORTED_MODULE_4__, 'default'));
// Re-export config.
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(private_next_pages_api_blog_posts_index_ts__WEBPACK_IMPORTED_MODULE_4__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,
        page: "/api/blog/posts",
        pathname: "/api/blog/posts",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: private_next_pages_api_blog_posts_index_ts__WEBPACK_IMPORTED_MODULE_4__,
    distDir: ".next" || 0,
    relativeProjectDir:  false || ''
});
async function handler(req, res, ctx) {
    let srcPage = "/api/blog/posts";
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
                page: "/api/blog/posts",
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

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 729410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1052);
/* harmony import */ var _utils_data_blogStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(276290);
/* harmony import */ var _utils_api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849721);



function handler(req, res) {
  if (req.method === 'GET') {
    var {
      status,
      topic,
      tag,
      author,
      limit,
      offset
    } = req.query;
    var posts = (0,_utils_data_blogStore__WEBPACK_IMPORTED_MODULE_1__.readPosts)();
    if (status && typeof status === 'string') posts = posts.filter(p => p.status === status);
    if (topic && typeof topic === 'string') posts = posts.filter(p => (p.topics || []).includes(topic));
    if (tag && typeof tag === 'string') posts = posts.filter(p => (p.tags || []).includes(tag));
    if (author && typeof author === 'string') posts = posts.filter(p => p.author === author);
    posts = posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    var o = parseInt(String(offset || 0), 10) || 0;
    var l = parseInt(String(limit || 20), 10) || 20;
    return res.status(200).json({
      items: posts.slice(o, o + l),
      total: posts.length
    });
  }
  if (req.method === 'POST') {
    var _body$seo, _body$seo2, _body$seo3;
    if (!(0,_utils_api_auth__WEBPACK_IMPORTED_MODULE_2__.requireAdmin)(req, res)) return;
    var body = req.body;
    if (!body.title || !body.slug || !body.author || !body.publishDate) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }
    var _posts = (0,_utils_data_blogStore__WEBPACK_IMPORTED_MODULE_1__.readPosts)();
    if (_posts.some(p => p.slug === body.slug)) {
      return res.status(409).json({
        error: 'Slug already exists'
      });
    }
    var post = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
      title: body.title,
      slug: body.slug,
      coverImageUrl: body.coverImageUrl || '',
      author: body.author,
      publishDate: body.publishDate,
      tags: body.tags || [],
      topics: body.topics || [],
      seo: {
        metaTitle: ((_body$seo = body.seo) === null || _body$seo === void 0 ? void 0 : _body$seo.metaTitle) || body.title,
        metaDescription: ((_body$seo2 = body.seo) === null || _body$seo2 === void 0 ? void 0 : _body$seo2.metaDescription) || '',
        ogImageUrl: ((_body$seo3 = body.seo) === null || _body$seo3 === void 0 ? void 0 : _body$seo3.ogImageUrl) || body.coverImageUrl || ''
      },
      body: body.body || '',
      status: body.status || 'draft',
      metrics: {
        views: 0,
        likes: 0,
        shares: 0
      }
    };
    _posts.unshift(post);
    (0,_utils_data_blogStore__WEBPACK_IMPORTED_MODULE_1__.writePosts)(_posts);
    return res.status(201).json(post);
  }
  return res.status(405).end();
}

/***/ }),

/***/ 775600:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(354877)));
module.exports = __webpack_exports__;

})();