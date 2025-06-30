// __tests__/integration/WalletInitializationFailure.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '@/App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { vi, describe, test, expect, beforeAll, afterAll, beforeEach, afterEach, type SpyInstance } from 'vitest';

// Store original import.meta if it exists for cleanup
// @ts-ignore
const originalImportMeta = globalThis.importMeta;

beforeAll(() => {
  // Mock import.meta.env to simulate an invalid VITE_REOWN_PROJECT_ID
  // @ts-ignore
  globalThis.importMeta = {
    env: {
      VITE_REOWN_PROJECT_ID: 'YOUR_DEFAULT_PROJECT_ID_ENV_MISSING',
      VITE_API_BASE_URL: 'http://localhost:3001/api',
      VITE_APP_NAME: 'Zion Test App',
      VITE_ENABLE_MAINTENANCE_MODE: 'false',
      VITE_SENTRY_DSN: '',
      VITE_ENVIRONMENT: 'test',
      VITE_FLAG_SHOW_NEW_FEATURE: 'false',
    },
  };
});

afterAll(() => {
  // Restore original import.meta to avoid affecting other tests
  // @ts-ignore
  globalThis.importMeta = originalImportMeta;
});

describe('App Integration - Wallet Initialization Failure', () => {
  let consoleErrorSpy: SpyInstance<[message?: any, ...optionalParams: any[]], void>;

  beforeEach(() => {
    // Spy on console.error and mock its implementation to suppress output during tests
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore the original console.error implementation
    consoleErrorSpy.mockRestore();
  });

  test('should log critical error and still render basic app layout when VITE_REOWN_PROJECT_ID is invalid', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('WalletContext: CRITICAL - Wallet system disabled. Invalid, missing, or placeholder VITE_REOWN_PROJECT_ID. Detected ID: "YOUR_DEFAULT_PROJECT_ID_ENV_MISSING"')
      );
    });

    const headerElement = await screen.findByRole('banner');
    expect(headerElement).toBeInTheDocument();

    const connectWalletButton = screen.queryByRole('button', { name: /connect wallet/i });
    expect(connectWalletButton).not.toBeInTheDocument();
  });
});
