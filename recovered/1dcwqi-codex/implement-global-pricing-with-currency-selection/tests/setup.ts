import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

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
