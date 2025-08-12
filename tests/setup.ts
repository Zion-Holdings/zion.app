import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { vi, afterEach } from 'vitest';

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() { /* do nothing */ }
  unobserve() { /* do nothing */ }
  disconnect() { /* do nothing */ }
};

// Mock window.scrollTo
global.window.scrollTo = vi.fn(); // vi should be globally available

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup();
  vi.restoreAllMocks(); // Changed from jest to vi
});

// -----------------------------------------------------------------------------
// Jest-compatibility shim ------------------------------------------------------
// -----------------------------------------------------------------------------
// A lot of legacy test files still call `jest.fn()`, `jest.mock()` etc.  Rather
// than refactor them all at once we map those calls to Vitest's equivalent
// (`vi`).  The shim only runs in the test environment and has no effect on
// production bundles.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).jest = {
  // Core mocking utilities
  fn: vi.fn.bind(vi),
  mock: vi.mock.bind(vi),
  spyOn: vi.spyOn.bind(vi),
  // Timing helpers
  useFakeTimers: vi.useFakeTimers.bind(vi),
  useRealTimers: vi.useRealTimers.bind(vi),
  advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
  runAllTimers: vi.runAllTimers.bind(vi),
  // Reset / clear mocks
  resetAllMocks: vi.resetAllMocks.bind(vi),
  restoreAllMocks: vi.restoreAllMocks.bind(vi),
  clearAllMocks: vi.clearAllMocks.bind(vi),
  // Snapshot placeholder (no-op) – Vitest has its own snapshot system.
  // We expose it so imports compile even if we don't use it.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  SnapshotSerializer: () => {},
};
