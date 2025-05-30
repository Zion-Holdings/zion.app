// import '@testing-library/jest-dom'; // KEEP THIS COMMENTED OUT
import { cleanup } from '@testing-library/react';

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() { /* do nothing */ }
  unobserve() { /* do nothing */ }
  disconnect() { /* do nothing */ }
};

// Mock window.scrollTo
// Assuming 'vi' is globally available due to 'globals: true' in vitest.config.ts
if (typeof vi !== 'undefined') {
  global.window.scrollTo = vi.fn();
} else {
  // Fallback if vi is not available for some reason in this context
  global.window.scrollTo = () => { /* do nothing */ };
  console.warn('vi not available in tests/setup.ts for scrollTo mock');
}

afterEach(() => {
  cleanup();
  if (typeof vi !== 'undefined') {
    vi.restoreAllMocks();
  } else {
    console.warn('vi not available in tests/setup.ts for afterEach mock restoration');
  }
});

console.log('tests/setup.ts: Executed without jest-dom, with other mocks and cleanup.');
