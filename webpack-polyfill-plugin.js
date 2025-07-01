/**
 * Custom Webpack Plugin to inject polyfills at compilation level
 * This is the most aggressive approach possible
 */

class PolyfillInjectionPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    const polyfillCode = `
;(function() {
  // ULTIMATE POLYFILL INJECTION - COMPILATION LEVEL
  var g = (function() {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    if (typeof self !== 'undefined') return self;
    return {};
  })();
  
  if (!g.__extends) {
    g.__extends = function(d, b) {
      if (typeof b !== "function" && b !== null) {
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      }
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }
  
  if (!g.__assign) {
    g.__assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  }
  
  if (!g.process) {
    g.process = {
      env: { NODE_ENV: 'production' },
      versions: {},
      platform: 'browser',
      browser: true
    };
  }
  
  // Ensure these are available on all possible global objects
  if (typeof window !== 'undefined') {
    window.__extends = g.__extends;
    window.__assign = g.__assign;
    window.process = g.process;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.__extends = g.__extends;
    globalThis.__assign = g.__assign;
    globalThis.process = g.process;
  }
  if (typeof global !== 'undefined') {
    global.__extends = g.__extends;
    global.__assign = g.__assign;
    global.process = g.process;
  }
})();
`;

    compiler.hooks.compilation.tap('PolyfillInjectionPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'PolyfillInjectionPlugin',
          stage: compilation.constructor.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (assets) => {
          Object.keys(assets).forEach(filename => {
            // Only process JavaScript files
            if (filename.endsWith('.js')) {
              const asset = assets[filename];
              const source = asset.source();
              
              // Skip if polyfill already exists
              if (typeof source === 'string' && !source.includes('ULTIMATE POLYFILL INJECTION')) {
                const newSource = polyfillCode + '\n' + source;
                
                compilation.updateAsset(filename, {
                  source: () => newSource,
                  size: () => newSource.length
                });
              }
            }
          });
        }
      );
    });

    // Also hook into the runtime code generation
    compiler.hooks.compilation.tap('PolyfillInjectionPlugin', (compilation) => {
      compilation.hooks.runtimeRequirementInTree.tap(
        'PolyfillInjectionPlugin',
        (chunk, set) => {
          // Ensure our polyfills are available for all runtime requirements
          set.add('__extends');
          set.add('__assign');
          set.add('process');
        }
      );
    });
  }
}

module.exports = PolyfillInjectionPlugin;