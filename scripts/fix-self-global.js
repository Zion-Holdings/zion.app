// Global webpack runtime polyfill for Node.js environment
// This must run before any webpack chunks are loaded

console.log('🔧 Applying webpack runtime polyfills...');

// Ensure self is defined globally in Node.js
if (typeof global !== 'undefined') {
  if (typeof global.self === 'undefined') {
    global.self = global;
    console.log('  ✅ self -> global');
  }
  
  // Ensure webpackChunk array exists and is properly initialized
  if (!global.webpackChunk_N_E) {
    global.webpackChunk_N_E = [];
    console.log('  ✅ webpackChunk_N_E -> []');
  }
  
  // Ensure the webpack chunk array has push method
  if (global.webpackChunk_N_E && typeof global.webpackChunk_N_E.push !== 'function') {
    global.webpackChunk_N_E.push = function(...args) {
      return Array.prototype.push.apply(this, args);
    };
    console.log('  ✅ webpackChunk_N_E.push -> function');
  }
}

if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }
  
  if (!globalThis.webpackChunk_N_E) {
    globalThis.webpackChunk_N_E = [];
  }
}

console.log('🔧 Webpack runtime polyfills applied successfully');