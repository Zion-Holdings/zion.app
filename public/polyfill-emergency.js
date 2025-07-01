/**
 * EMERGENCY POLYFILL SCRIPT - LOADS BEFORE WEBPACK
 * This script must load before any webpack chunks to prevent destructuring errors
 */

;(function() {
  'use strict';
  
  // Universal global object detection
  var globalObj = (function() {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    if (typeof self !== 'undefined') return self;
    return {};
  })();
  
  // Ensure globalThis exists everywhere
  if (typeof globalThis === 'undefined') {
    if (typeof window !== 'undefined') {
      window.globalThis = window;
    } else if (typeof global !== 'undefined') {
      global.globalThis = global;
    } else if (typeof self !== 'undefined') {
      self.globalThis = self;
    }
  }
  
  // Core polyfill implementations
  var polyfills = {
    __extends: function(d, b) {
      if (typeof b !== "function" && b !== null) {
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      }
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    },
    
    __assign: Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    },
    
    __rest: function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    },
    
    __spread: function() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(Array.prototype.slice.call(arguments[i]));
      return ar;
    },
    
    __spreadArrays: function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    },
    
    process: {
      env: { NODE_ENV: 'production' },
      versions: {},
      platform: 'browser',
      browser: true,
      version: '18.0.0',
      arch: 'x64'
    }
  };
  
  // Apply polyfills to all global contexts
  var contexts = [globalObj];
  if (typeof window !== 'undefined' && window !== globalObj) contexts.push(window);
  if (typeof global !== 'undefined' && global !== globalObj) contexts.push(global);
  if (typeof self !== 'undefined' && self !== globalObj) contexts.push(self);
  if (typeof globalThis !== 'undefined' && globalThis !== globalObj) contexts.push(globalThis);
  
  for (var i = 0; i < contexts.length; i++) {
    var ctx = contexts[i];
    for (var key in polyfills) {
      if (!ctx[key]) {
        try {
          Object.defineProperty(ctx, key, {
            value: polyfills[key],
            writable: true,
            configurable: true,
            enumerable: false
          });
        } catch (e) {
          // Fallback to direct assignment
          ctx[key] = polyfills[key];
        }
      }
    }
  }
  
  // Create safe error handler to prevent cascading failures
  if (typeof window !== 'undefined') {
    window.addEventListener('error', function(e) {
      if (e.message && (
        e.message.includes('__extends') ||
        e.message.includes('__assign') ||
        e.message.includes('getInitialProps') ||
        e.message.includes('Cannot destructure property') ||
        e.message.includes('Cannot read properties of undefined')
      )) {
        console.warn('Emergency polyfill caught error:', e.message);
        e.preventDefault();
        return false;
      }
    });
  }
  
  console.log('Emergency polyfills loaded and active');
})();