import { beforeAll, afterEach, afterAll, vi } from 'vitest'
import { server } from './mocks/server'
import '@testing-library/jest-dom' // Extends Vitest's expect with jest-dom matchers

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: vi.fn(() => []),
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Mock Shoplocket if it's used and causes issues - this is a placeholder
if (typeof window.Shoplocket === 'undefined') {
  (window as any).Shoplocket = {
    open: vi.fn(),
    close: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  };
}

// If you are using `use-toast` or a similar toast library, you might need to mock its provider
// or the toast function itself if it interferes with tests (e.g., by trying to render Toaster components).
// Example:
// vi.mock('@/hooks/use-toast', () => ({
//   toast: vi.fn(),
// }));

// Mock safeStorage and safeSessionStorage to prevent actual storage operations during tests
// and allow assertions on their usage.
vi.mock('@/utils/safeStorage', async (importOriginal) => {
  const actual = await importOriginal() as any;
  return {
    ...actual,
    safeStorage: {
      getItem: vi.fn((key) => null), // Default to returning null
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
    safeSessionStorage: {
      getItem: vi.fn((key) => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
  };
});
