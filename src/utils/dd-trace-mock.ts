/**
 * DD-Trace Mock Implementation
 * 
 * This mock replaces the dd-trace package during CI/build environments
 * to avoid native module compilation issues while maintaining API compatibility.
 */

// Mock implementation for DD-Trace to prevent native module import issues during build
// This mock provides all the necessary DD-Trace APIs without importing any native modules

const noop = (): void => {};
const noopReturn = (): null => null;
const noopReturnThis = function(this: unknown): unknown { return this; };

// Mock tracer with all common DD-Trace methods
const mockTracer = {
  // Core tracing methods
  trace: (
    name: string,
    options?: unknown,
    callback?: (...args: unknown[]) => unknown
  ): Promise<unknown> | unknown => {
    let cb = callback;
    if (typeof options === 'function') {
      cb = options as (...args: unknown[]) => unknown;
    }
    if (cb) {
      return cb();
    }
    return Promise.resolve();
  },

  // Span management
  startSpan: (): typeof mockSpan => mockSpan,
  scope: (): typeof mockScope => mockScope,

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
  wrap: (name: string, fn: (...args: unknown[]) => unknown): typeof fn => fn,
  bind: (fn: (...args: unknown[]) => unknown): typeof fn => fn,
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
  activate: (span: unknown, callback: (...args: unknown[]) => unknown): unknown => callback(),
  bind: (fn: (...args: unknown[]) => unknown): typeof fn => fn,
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