"use strict";
exports.id = 638853;
exports.ids = [638853];
exports.modules = {

/***/ 638853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPipelineItem: () => (/* binding */ addPipelineItem),
/* harmony export */   getVendorById: () => (/* binding */ getVendorById),
/* harmony export */   getVendorBySlug: () => (/* binding */ getVendorBySlug),
/* harmony export */   listPipelineForVendor: () => (/* binding */ listPipelineForVendor),
/* harmony export */   listVendors: () => (/* binding */ listVendors),
/* harmony export */   registerVendor: () => (/* binding */ registerVendor),
/* harmony export */   saveVendors: () => (/* binding */ saveVendors),
/* harmony export */   setVendorApproval: () => (/* binding */ setVendorApproval),
/* harmony export */   setVendorCommission: () => (/* binding */ setVendorCommission),
/* harmony export */   suspendVendor: () => (/* binding */ suspendVendor),
/* harmony export */   updatePipelineItemStatus: () => (/* binding */ updatePipelineItemStatus),
/* harmony export */   upsertVendor: () => (/* binding */ upsertVendor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913092);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(629021);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333873);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


var dataDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'data');
var vendorsFile = path__WEBPACK_IMPORTED_MODULE_2___default().join(dataDir, 'vendors.json');
var pipelineFile = path__WEBPACK_IMPORTED_MODULE_2___default().join(dataDir, 'vendor-pipeline.json');
function ensureFiles() {
  if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(dataDir)) fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(dataDir, {
    recursive: true
  });
  if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(vendorsFile)) fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(vendorsFile, JSON.stringify({
    vendors: []
  }, null, 2));
  if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(pipelineFile)) fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(pipelineFile, JSON.stringify({
    items: []
  }, null, 2));
}
function listVendors() {
  ensureFiles();
  var raw = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(vendorsFile, 'utf-8'));
  return raw.vendors;
}
function getVendorBySlug(slug) {
  return listVendors().find(v => v.slug === slug);
}
function getVendorById(id) {
  return listVendors().find(v => v.id === id);
}
function saveVendors(vendors) {
  ensureFiles();
  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(vendorsFile, JSON.stringify({
    vendors
  }, null, 2));
}
function upsertVendor(vendor) {
  var existing = listVendors();
  var idx = existing.findIndex(v => v.id === vendor.id);
  if (idx >= 0) {
    existing[idx] = vendor;
  } else {
    existing.push(vendor);
  }
  saveVendors(existing);
  return vendor;
}
function registerVendor(input) {
  var id = "v_".concat(Date.now());
  var vendor = _objectSpread(_objectSpread({}, input), {}, {
    id,
    verified: false,
    suspended: false,
    tokens: 0,
    rating: 0
  });
  return upsertVendor(vendor);
}
function setVendorApproval(vendorId, verified) {
  var vendor = getVendorById(vendorId);
  if (!vendor) throw new Error('Vendor not found');
  vendor.verified = verified;
  upsertVendor(vendor);
}
function setVendorCommission(vendorId, pct) {
  var vendor = getVendorById(vendorId);
  if (!vendor) throw new Error('Vendor not found');
  vendor.commissionSplitPct = pct;
  upsertVendor(vendor);
}
function suspendVendor(vendorId, suspended) {
  var vendor = getVendorById(vendorId);
  if (!vendor) throw new Error('Vendor not found');
  vendor.suspended = suspended;
  upsertVendor(vendor);
}
function readPipeline() {
  ensureFiles();
  var raw = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(pipelineFile, 'utf-8'));
  return raw.items;
}
function writePipeline(items) {
  ensureFiles();
  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(pipelineFile, JSON.stringify({
    items
  }, null, 2));
}
function listPipelineForVendor(vendorId) {
  return readPipeline().filter(i => i.vendorId === vendorId);
}
function addPipelineItem(vendorId, title) {
  var now = new Date().toISOString();
  var item = {
    id: "p_".concat(Date.now()),
    vendorId,
    title,
    status: 'lead',
    createdAt: now,
    updatedAt: now
  };
  var items = readPipeline();
  items.push(item);
  writePipeline(items);
  return item;
}
function updatePipelineItemStatus(itemId, status) {
  var items = readPipeline();
  var idx = items.findIndex(i => i.id === itemId);
  if (idx < 0) throw new Error('Pipeline item not found');
  items[idx].status = status;
  items[idx].updatedAt = new Date().toISOString();
  writePipeline(items);
}

/***/ })

};
;