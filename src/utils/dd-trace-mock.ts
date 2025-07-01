/**
 * DD-Trace Mock Implementation
 * 
 * This mock replaces the dd-trace package during CI/build environments
 * to avoid native module compilation issues while maintaining API compatibility.
 */

// Mock tracer instance
const mockTracer = {
  // Scope management
  scope: () => ({
    active: () => null,
    activate: (span: any, fn: Function) => fn ? fn() : Promise.resolve(),
  }),
  
  // Tracing methods
  trace: (name: string, fn?: Function) => fn ? fn() : Promise.resolve(),
  startSpan: (name: string, options?: any) => mockSpan,
  wrap: (name: string, fn: Function) => fn,
  
  // Context management
  setUser: (user: any) => {},
  addTags: (tags: any) => {},
  setTag: (key: string, value: any) => {},
  
  // Plugin management
  plugin: (name: string, config?: any) => mockTracer,
  use: (plugin: any, config?: any) => mockTracer,
  
  // Service configuration
  setUrl: (url: string) => {},
  setService: (service: string) => {},
  
  // Sampling
  setSamplingRate: (rate: number) => {},
  
  // Manual instrumentation
  instrument: (name: string, fn: Function) => fn,
  
  // Error handling
  captureException: (error: any) => {
    console.warn('DD-Trace Mock: captureException called', error.message || error);
  },
  
  // Metrics (basic no-op implementations)
  increment: (metric: string, value?: number, tags?: any) => {},
  decrement: (metric: string, value?: number, tags?: any) => {},
  histogram: (metric: string, value: number, tags?: any) => {},
  gauge: (metric: string, value: number, tags?: any) => {},
  
  // Custom metrics
  distribution: (metric: string, value: number, tags?: any) => {},
  timing: (metric: string, value: number, tags?: any) => {},
  
  // Shutdown
  flush: () => Promise.resolve(),
  close: () => Promise.resolve(),
};

// Mock span implementation
const mockSpan = {
  context: () => ({
    toTraceId: () => '0000000000000000',
    toSpanId: () => '0000000000000000',
    toString: () => '0000000000000000',
  }),
  
  setTag: (key: string, value: any) => mockSpan,
  addTags: (tags: any) => mockSpan,
  setOperationName: (name: string) => mockSpan,
  
  log: (fields: any) => mockSpan,
  logEvent: (name: string, fields?: any) => mockSpan,
  
  setBaggageItem: (key: string, value: string) => mockSpan,
  getBaggageItem: (key: string) => null,
  
  finish: (finishTime?: number) => {},
  
  // Error handling
  setError: (error: any) => mockSpan,
  
  // Timing
  setStartTime: (time: number) => mockSpan,
};

// Mock scope manager
const mockScopeManager = {
  active: () => null,
  activate: (span: any, fn: Function) => fn ? fn() : Promise.resolve(),
  bind: (fn: Function, span?: any) => fn,
  bindEmitter: (emitter: any, span?: any) => {},
};

// Export the mock tracer as default (matches dd-trace export)
export default {
  init: (options?: any) => {
    console.log('🚫 DD-Trace Mock: init called with options', options ? 'provided' : 'none');
    return mockTracer;
  },
  ...mockTracer,
};

// Named exports for compatibility
export const tracer = mockTracer;
export const scope = mockScopeManager;
export const span = mockSpan;

// CommonJS compatibility
module.exports = {
  init: (options?: any) => {
    console.log('🚫 DD-Trace Mock: init called with options', options ? 'provided' : 'none');
    return mockTracer;
  },
  ...mockTracer,
};