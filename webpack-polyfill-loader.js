/**
 * Custom Webpack Loader to inject polyfills into every module
 * This ensures polyfills are available before any module code executes
 */

const polyfillCode = `
// POLYFILL INJECTION - MODULE LEVEL
if (typeof globalThis !== 'undefined') {
  if (!globalThis.__extends) {
    globalThis.__extends = function(d, b) {
      if (typeof b !== "function" && b !== null) {
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      }
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }
  if (!globalThis.__assign) {
    globalThis.__assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  }
  if (!globalThis.process) {
    globalThis.process = {
      env: { NODE_ENV: 'production' },
      versions: {},
      platform: 'browser',
      browser: true
    };
  }
}
if (typeof window !== 'undefined') {
  window.__extends = globalThis.__extends;
  window.__assign = globalThis.__assign;
  window.process = globalThis.process;
}
`;

module.exports = function(source) {
  // Only inject into JavaScript files, not CSS or other assets
  if (this.resourcePath && (this.resourcePath.endsWith('.js') || this.resourcePath.endsWith('.ts') || this.resourcePath.endsWith('.tsx') || this.resourcePath.endsWith('.jsx'))) {
    // Skip if this is already our polyfill code to prevent infinite recursion
    if (source.includes('POLYFILL INJECTION - MODULE LEVEL')) {
      return source;
    }
    
    // Inject polyfill at the very beginning of the module
    return polyfillCode + '\n' + source;
  }
  
  return source;
};