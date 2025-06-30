import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { I18nextProvider } from 'react-i18next';
import { WalletProvider } from '@/context/WalletContext';
import { CartProvider } from '@/context/CartContext';
import { AnalyticsProvider } from '@/context/AnalyticsContext';
import { ThemeProvider } from '@/components/ThemeProvider'; // Assuming ThemeProvider is a component
import { ErrorProvider } from '@/context/ErrorContext';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { store } from '@/store'; // Fix: Use named import instead of default import
import i18n from '@/i18n'; // Assuming this is the correct path to i18n config

// Initialize a new QueryClient for each test run to ensure test isolation
const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for tests to make them faster and more deterministic
      staleTime: Infinity, // Prevent automatic refetching during tests
    },
  },
});

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const testQueryClient = createTestQueryClient();

  return (
    <MemoryRouterProvider>
      <QueryClientProvider client={testQueryClient}>
        <ReduxProvider store={store}>
          <AuthProvider>
              <WhitelabelProvider>
                <I18nextProvider i18n={i18n}>
                  <WalletProvider>
                    <CartProvider>
                      <AnalyticsProvider>
                        <ThemeProvider defaultTheme="light">
                          <ErrorProvider>
                            {children}
                          </ErrorProvider>
                        </ThemeProvider>
                      </AnalyticsProvider>
                    </CartProvider>
                  </WalletProvider>
                </I18nextProvider>
              </WhitelabelProvider>
            </AuthProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </MemoryRouterProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override the render method with our custom one
export { customRender as renderWithProviders };

// Export the AllTheProviders component for direct use if needed
export { AllTheProviders };
