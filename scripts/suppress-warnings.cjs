#!/usr/bin/env node

/**
 * Suppress Node.js Deprecation Warnings Script
 * Suppresses specific deprecation warnings that come from dependencies
 * until they can be properly updated
 */

// Suppress specific deprecation warnings
process.noDeprecation = false; // Keep other deprecation warnings
process.emitWarning = (function(originalEmitWarning) {
  return function(warning, type, code, ctor) {
    // Suppress the punycode deprecation warning until dependencies are updated
    if (code === 'DEP0040' && warning.includes('punycode')) {
      return; // Suppress this specific warning
    }
    
    // Allow all other warnings through
    return originalEmitWarning.call(process, warning, type, code, ctor);
  };
})(process.emitWarning);

console.log('✅ Deprecation warnings suppressed for known dependency issues');
module.exports = {}; 