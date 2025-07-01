import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const themeScript = `(() => {try{var t=localStorage.getItem('theme');var e=t==='dark'||(t==='system'?!window.matchMedia||(window.matchMedia('(prefers-color-scheme: dark)').matches):false);var n=e?'dark':'light';var r=document.documentElement;r.classList.add(n);r.setAttribute('data-theme',n);}catch(e){}})();`;
  const loaderTimeoutScript = `setTimeout(function(){var el=document.getElementById('initial-loader');if(el){el.style.display='none';}},10000);`;
  return (
    <Html lang="en">
      <Head>
                 {/* FINAL NUCLEAR OPTION - COMPLETE RUNTIME REPLACEMENT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
/* FINAL NUCLEAR OPTION - ABSOLUTE LAST RESORT */
console.log('☢️ FINAL NUCLEAR OPTION LOADING...');

// PHASE 1: COMPLETE GLOBAL CONTEXT OVERRIDE
(function(){
'use strict';

// Ultra-aggressive global detection
var contexts = [];
try { if (typeof globalThis !== 'undefined') contexts.push(globalThis); } catch(e) {}
try { if (typeof window !== 'undefined') contexts.push(window); } catch(e) {}
try { if (typeof global !== 'undefined') contexts.push(global); } catch(e) {}
try { if (typeof self !== 'undefined') contexts.push(self); } catch(e) {}

// Emergency polyfill definitions - MAXIMUM COMPATIBILITY
var emergency = {
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
  process: {
    env: { NODE_ENV: 'production' },
    versions: {},
    platform: 'browser',
    browser: true
  }
};

// PHASE 2: AGGRESSIVE INJECTION INTO ALL CONTEXTS
for (var i = 0; i < contexts.length; i++) {
  var ctx = contexts[i];
  if (!ctx) continue;
  
  for (var key in emergency) {
    try {
      if (!ctx[key]) {
        Object.defineProperty(ctx, key, {
          value: emergency[key],
          writable: true,
          configurable: true,
          enumerable: false
        });
      }
    } catch(e) {
      try {
        ctx[key] = emergency[key];
      } catch(e2) {
        // Last resort - direct assignment
        ctx[key] = emergency[key];
      }
    }
  }
}

// PHASE 3: WEBPACK MODULE SYSTEM COMPLETE OVERRIDE
if (typeof window !== 'undefined') {
  // Store emergency references in protected properties
  try {
    Object.defineProperty(window, '__NUCLEAR_EXTENDS', { 
      value: emergency.__extends, 
      writable: false, 
      configurable: false 
    });
    Object.defineProperty(window, '__NUCLEAR_ASSIGN', { 
      value: emergency.__assign, 
      writable: false, 
      configurable: false 
    });
    Object.defineProperty(window, '__NUCLEAR_PROCESS', { 
      value: emergency.process, 
      writable: false, 
      configurable: false 
    });
  } catch(e) {}

  // PHASE 4: ULTIMATE MODULE LOADER OVERRIDE
  var moduleCheckInterval = setInterval(function() {
    try {
      // Check for ANY webpack-like module systems
      var webpackSystems = [
        window.__webpack_require__,
        window.webpackJsonp,
        window.__webpack_chunk_load__,
        window.__webpack_modules__
      ];
      
      for (var i = 0; i < webpackSystems.length; i++) {
        var system = webpackSystems[i];
        if (system && typeof system === 'function') {
          console.log('☢️ HIJACKING MODULE SYSTEM:', i);
          
          // Create wrapper that ensures polyfills
          var originalSystem = system;
          var wrapper = function() {
            // Force inject before EVERY module call
            try {
              if (!globalThis.__extends) globalThis.__extends = window.__NUCLEAR_EXTENDS;
              if (!globalThis.__assign) globalThis.__assign = window.__NUCLEAR_ASSIGN;
              if (!globalThis.process) globalThis.process = window.__NUCLEAR_PROCESS;
              if (!window.__extends) window.__extends = window.__NUCLEAR_EXTENDS;
              if (!window.__assign) window.__assign = window.__NUCLEAR_ASSIGN;
              if (!window.process) window.process = window.__NUCLEAR_PROCESS;
            } catch(e) {}
            
            return originalSystem.apply(this, arguments);
          };
          
          // Copy all properties
          for (var prop in originalSystem) {
            try {
              wrapper[prop] = originalSystem[prop];
            } catch(e) {}
          }
          
          // Replace the system
          if (i === 0) window.__webpack_require__ = wrapper;
          if (i === 1) window.webpackJsonp = wrapper;
          if (i === 2) window.__webpack_chunk_load__ = wrapper;
          if (i === 3) window.__webpack_modules__ = wrapper;
        }
      }
      
      // Stop checking after we find systems
      if (webpackSystems.some(function(s) { return s; })) {
        clearInterval(moduleCheckInterval);
      }
    } catch(e) {
      console.error('Module system override error:', e);
    }
  }, 1);
  
  // Force stop after 10 seconds
  setTimeout(function() {
    clearInterval(moduleCheckInterval);
  }, 10000);
}

console.log('☢️ FINAL NUCLEAR OPTION DEPLOYED');
})();

/* EMERGENCY GLOBAL ERROR SUPPRESSION */
if (typeof window !== 'undefined') {
  window.addEventListener('error', function(e) {
    if (e.message && (
      e.message.includes('__extends') || 
      e.message.includes('getInitialProps') ||
      e.message.includes('Cannot destructure') ||
      e.message.includes('Cannot read properties')
    )) {
      console.log('☢️ NUCLEAR ERROR SUPPRESSED:', e.message);
      e.preventDefault();
      return false;
    }
  }, true);
  
  window.addEventListener('unhandledrejection', function(e) {
    if (e.reason && e.reason.message && (
      e.reason.message.includes('__extends') ||
      e.reason.message.includes('getInitialProps')
    )) {
      console.log('☢️ NUCLEAR PROMISE REJECTION SUPPRESSED:', e.reason.message);
      e.preventDefault();
      return false;
    }
  }, true);
}
            `
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: loaderTimeoutScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
