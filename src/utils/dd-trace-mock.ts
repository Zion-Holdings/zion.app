/**
 * DD-Trace Mock Implementation
 * 
 * This mock replaces the dd-trace package during CI/build environments
 * to avoid native module compilation issues while maintaining API compatibility.
 */

// Mock implementation for DD-Trace to prevent native module import issues during build
// This mock provides all the necessary DD-Trace APIs without importing any native modules

const noop = () => {};
const noopReturn = () => null;
const noopReturnThis = function(this: any) { return this; };

// Mock tracer with all common DD-Trace methods
const mockTracer = {
  // Core tracing methods
  trace: (name: string, options?: any, callback?: Function) => {
    if (typeof options === 'function') {
      callback = options;
    }
    if (callback) {
      return callback();
    }
    return Promise.resolve();
  },
  
  // Span management
  startSpan: () => mockSpan,
  scope: () => mockScope,
  
  // Configuration
  init: noop,
  use: noopReturnThis,
  
  // Context management
  setUser: noop,
  setTag: noop,
  
  // Export methods
  exportTracer: noopReturn,
  
  // Utilities
  getRumData: noopReturn,
  setUrl: noop,
  
  // Plugin management
  plugin: noopReturnThis,
  
  // Sampling
  setSamplingRules: noop,
  
  // Custom methods for compatibility
  wrap: (name: string, fn: Function) => fn,
  bind: (fn: Function) => fn,
};

// Mock span
const mockSpan = {
  setTag: noop,
  setTags: noop,
  log: noop,
  addTags: noop,
  finish: noop,
  context: () => mockSpanContext,
  getBaggageItem: noopReturn,
  setBaggageItem: noop,
  setOperationName: noop,
  tracer: () => mockTracer,
};

// Mock span context
const mockSpanContext = {
  toTraceId: () => 'mock-trace-id',
  toSpanId: () => 'mock-span-id',
};

// Mock scope
const mockScope = {
  active: noopReturn,
  activate: (span: any, callback: Function) => callback(),
  bind: (fn: Function) => fn,
};

// Export the mock tracer as default export
export default mockTracer;

// Named exports for compatibility
export const initialize = mockTracer.init;
export const trace = mockTracer.trace;
export const startSpan = mockTracer.startSpan;
export const scope = mockTracer.scope;
export const use = mockTracer.use;
export const setUser = mockTracer.setUser;
export const setTag = mockTracer.setTag;
export const exportTracer = mockTracer.exportTracer;
export const getRumData = mockTracer.getRumData;
export const setUrl = mockTracer.setUrl;
export const plugin = mockTracer.plugin;
export const setSamplingRules = mockTracer.setSamplingRules;
export const wrap = mockTracer.wrap;
export const bind = mockTracer.bind;

// CommonJS compatibility
module.exports = mockTracer;