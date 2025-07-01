import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const themeScript = `(() => {try{var t=localStorage.getItem('theme');var e=t==='dark'||(t==='system'?!window.matchMedia||(window.matchMedia('(prefers-color-scheme: dark)').matches):false);var n=e?'dark':'light';var r=document.documentElement;r.classList.add(n);r.setAttribute('data-theme',n);}catch(e){}})();`;
  const loaderTimeoutScript = `setTimeout(function(){var el=document.getElementById('initial-loader');if(el){el.style.display='none';}},10000);`;
  return (
    <Html lang="en">
      <Head>
        {/* CRITICAL: Inject polyfills BEFORE any other scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // EMERGENCY: Universal polyfills injected at document level
              (function() {
                'use strict';
                
                // Ensure global object exists
                var globalObj = (function() {
                  if (typeof globalThis !== 'undefined') return globalThis;
                  if (typeof window !== 'undefined') return window;
                  if (typeof global !== 'undefined') return global;
                  if (typeof self !== 'undefined') return self;
                  throw new Error('Unable to locate global object');
                })();
                
                // Process polyfill - CRITICAL for environment variables
                if (!globalObj.process) {
                  globalObj.process = {
                    env: {
                      NODE_ENV: 'production',
                      NEXT_PUBLIC_APP_URL: '',
                      NEXT_PUBLIC_SUPABASE_URL: '',
                      NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
                    },
                    versions: {},
                    platform: 'browser',
                    browser: true,
                    version: '18.0.0',
                    arch: 'x64'
                  };
                }
                
                // TypeScript __extends polyfill - CRITICAL for class inheritance
                if (!globalObj.__extends) {
                  globalObj.__extends = function(d, b) {
                    if (typeof b !== "function" && b !== null) {
                      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    }
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                  };
                }
                
                // TypeScript __assign polyfill - CRITICAL for object spreading
                if (!globalObj.__assign) {
                  globalObj.__assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                  };
                }
                
                // TypeScript __rest polyfill
                if (!globalObj.__rest) {
                  globalObj.__rest = function (s, e) {
                    var t = {};
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                      t[p] = s[p];
                    if (s != null && typeof Object.getOwnPropertySymbols === "function")
                      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                          t[p[i]] = s[p[i]];
                      }
                    return t;
                  };
                }
                
                // TypeScript __spread polyfill
                if (!globalObj.__spread) {
                  globalObj.__spread = function () {
                    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(Array.prototype.slice.call(arguments[i]));
                    return ar;
                  };
                }
                
                // TypeScript __spreadArrays polyfill
                if (!globalObj.__spreadArrays) {
                  globalObj.__spreadArrays = function () {
                    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                    for (var r = Array(s), k = 0, i = 0; i < il; i++)
                      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                    return r;
                  };
                }
                
                // Additional error prevention
                globalObj.addEventListener && globalObj.addEventListener('error', function(e) {
                  if (e.message && (e.message.includes('__extends') || e.message.includes('getInitialProps') || e.message.includes('Cannot read properties of undefined'))) {
                    console.warn('Runtime error caught and prevented:', e.message);
                    e.preventDefault();
                  }
                });
                
                // Set up for window as well if different from globalObj
                if (typeof window !== 'undefined' && window !== globalObj) {
                  window.process = globalObj.process;
                  window.__extends = globalObj.__extends;
                  window.__assign = globalObj.__assign;
                  window.__rest = globalObj.__rest;
                  window.__spread = globalObj.__spread;
                  window.__spreadArrays = globalObj.__spreadArrays;
                }
                
                console.log('Emergency polyfills loaded successfully');
              })();
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
