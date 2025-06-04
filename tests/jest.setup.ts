// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

// Jest-DOM matchers
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder and TextDecoder for JSDOM environment
global.TextEncoder = TextEncoder;
// @ts-ignore // Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests
global.TextDecoder = TextDecoder;


// Set up a mock for Vite environment variables accessed via import.meta.env
// This assumes that Babel (via babel-plugin-transform-import-meta or similar)
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR
// or that import.meta itself is transformed into an object where 'env' can be populated.
process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup';


// Jest-axe matchers for accessibility
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// Mock window.matchMedia for Jest
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false, // Default to false (light theme)
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock import.meta.env for Jest - This was ineffective for the SyntaxError
// @ts-ignore
// global.import = {
//   // @ts-ignore
//   meta: {
//     env: {
//       VITE_SUPABASE_URL: 'mock_supabase_url',
//       VITE_SUPABASE_ANON_KEY: 'mock_supabase_anon_key',
//       MODE: 'test',
//     },
//   },
// };

// Mock the supabase client module to prevent import.meta.env parsing errors
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
      // Add any other specific methods from supabase.auth if they get called
    },
    // Add other top-level Supabase client methods if they get called
    // e.g., from: jest.fn(), rpc: jest.fn(), etc.
    // For now, keeping it minimal.
  },
}));