/**
 * ESM Polyfill for Next.js 15 + React 19 build compatibility
 * Fixes "Module not found: ESM packages need to be imported" errors
 */

// Force proper ESM resolution for problematic packages
if (typeof window === 'undefined') {
  // Server-side polyfill
  try {
    // Ensure lodash modules are properly resolved to lodash-es
    const Module = eval('require')('module');
    const originalResolveFilename = Module._resolveFilename;
    
    Module._resolveFilename = function (request: string, parent: any, isMain: boolean, options: any) {
      // Map lodash imports to lodash-es
      if (request.startsWith('lodash/')) {
        const lodashModule = request.replace('lodash/', 'lodash-es/');
        try {
          return originalResolveFilename.call(this, lodashModule, parent, isMain, options);
        } catch (e) {
          // Fallback to original if lodash-es module doesn't exist
          return originalResolveFilename.call(this, request, parent, isMain, options);
        }
      }
      
      // Map lodash to lodash-es
      if (request === 'lodash') {
        try {
          return originalResolveFilename.call(this, 'lodash-es', parent, isMain, options);
        } catch (e) {
          return originalResolveFilename.call(this, request, parent, isMain, options);
        }
      }
      
      return originalResolveFilename.call(this, request, parent, isMain, options);
    };
  } catch (error: unknown) {
    // Ignore errors in serverless environments where Module might not be available
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.debug('ESM polyfill: Unable to patch Module._resolveFilename:', errorMessage);
  }
}

// Client-side compatibility fixes
if (typeof window !== 'undefined') {
  // Ensure proper module resolution for dynamic imports
  const globalObj = window as any;
  const originalImport = globalObj.require;
  if (originalImport) {
    globalObj.require = function(id: string) {
      // Map lodash imports to lodash-es for client-side
      if (id.startsWith('lodash/')) {
        const esmModule = id.replace('lodash/', 'lodash-es/');
        try {
          return originalImport(esmModule);
        } catch (e) {
          return originalImport(id);
        }
      }
      
      if (id === 'lodash') {
        try {
          return originalImport('lodash-es');
        } catch (e) {
          return originalImport(id);
        }
      }
      
      return originalImport(id);
    };
  }
}

// Export empty object to satisfy module requirements
export {};