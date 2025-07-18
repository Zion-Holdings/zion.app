import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
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
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Mock Shoplocket
declare global {
  interface Window {
    Shoplocket: {
      open: () => void;
      close: () => void;
      on: () => void;
    };
  }
}

(window as any).Shoplocket = {
  open: vi.fn(),
  close: vi.fn(),
  on: vi.fn(),
};

// Example:
// This allows you to mock global objects and functions
// and allow assertions on their usage.

// Mock localStorage and sessionStorage
const safeStorage = {
  getItem: vi.fn((key: string) => null), // Default to returning null
  setItem: vi.fn(),
  removeItem: vi.fn(),
};

const safeSessionStorage = {
  getItem: vi.fn((key: string) => null),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: safeStorage,
});

Object.defineProperty(window, 'sessionStorage', {
  value: safeSessionStorage,
});