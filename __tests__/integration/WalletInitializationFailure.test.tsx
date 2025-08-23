// __tests__/integration/WalletInitializationFailure.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '@/App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Store original import.meta if it exists for cleanup
const originalImportMeta = globalThis.importMeta;

beforeAll(() => {
  // Mock import.meta.env to simulate an invalid VITE_REOWN_PROJECT_ID
  globalThis.importMeta = {
    env: {
      VITE_REOWN_PROJECT_ID: 'YOUR_DEFAULT_PROJECT_ID_ENV_MISSING',
      // Add other environment variables that App.tsx or its children might require
      // to prevent unrelated errors during rendering. These are examples.
      VITE_API_BASE_URL: 'http://localhost:3001/api',
      VITE_APP_NAME: 'Zion Test App',
      VITE_ENABLE_MAINTENANCE_MODE: 'false',
      VITE_SENTRY_DSN: '', // Assuming Sentry might be initialized
      VITE_ENVIRONMENT: 'test',
      VITE_FLAG_SHOW_NEW_FEATURE: 'false', // Example feature flag
      // Ensure all critical env vars for App init are present
    },
  };
});

afterAll(() => {
  // Restore original import.meta to avoid affecting other tests
  globalThis.importMeta = originalImportMeta;
});

vi.mock('@reown/appkit/react', () => ({
  createAppKit: vi.fn().mockReturnValue(undefined),
  useAppKit: vi.fn().mockReturnValue(undefined),
}));

vi.mock('@/config/env', () => ({
  getAppKitProjectId: () => 'test_project_id_from_mock',
}));

describe('App Integration - Wallet Initialization Failure', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    // Spy on console.error and mock its implementation to suppress output during tests
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore the original console.error implementation
    consoleErrorSpy.mockRestore();
  });

  test('should log critical error and still render basic app layout when VITE_REOWN_PROJECT_ID is invalid', async () => {
    render(
      <MemoryRouter initialEntries={['/']}> {/* Wrap with MemoryRouter if App uses react-router */}
        <App />
      </MemoryRouter>
    );

    // Wait for WalletContext to log the error message due to invalid project ID
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        // The error message from WalletContext concatenates these details into one string
        expect.stringContaining('WalletContext: CRITICAL - Wallet system disabled. Invalid, missing, or placeholder VITE_REOWN_PROJECT_ID. Detected ID: "YOUR_DEFAULT_PROJECT_ID_ENV_MISSING"')
      );
    });

    // Verify that a fundamental part of the application layout is still rendered.
    // This assumes that your App.tsx renders a header component (e.g., AppHeader)
    // which includes an HTML element with the role 'banner'.
    // Adjust the selector if your layout is different (e.g., a 'main' role, or a data-testid).
    const headerElement = await screen.findByRole('banner');
    expect(headerElement).toBeInTheDocument();

    // Verify that components dependent on a functional wallet system are not rendered,
    // or are in a state indicating unavailability.
    // This assumes ConnectWalletButton is not rendered if the wallet system is down.
    const connectWalletButton = screen.queryByRole('button', { name: /connect wallet/i });
    expect(connectWalletButton).not.toBeInTheDocument(); // Or .toBeNull()
  });
});
