import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ClientBrowserRouter from './ClientBrowserRouter';

// Mock react-router-dom BrowserRouter
// Define the mock implementation directly within the factory.
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: jest.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="browser-router">{children}</div>
  )),
}));

describe('ClientBrowserRouter', () => {
  const MockChildren = () => <div data-testid="mock-children">Hello World</div>;
  let BrowserRouterMockFn: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    // Retrieve the mock function Jest is using for BrowserRouter
    BrowserRouterMockFn = require('react-router-dom').BrowserRouter as jest.Mock;
  });

  it('should render children wrapped in BrowserRouter on the client after mount', async () => {
    render(
      <ClientBrowserRouter>
        <MockChildren />
      </ClientBrowserRouter>
    );

    // Wait for the useEffect to run and setShowRouter(true) to trigger a re-render
    // The mock BrowserRouter should then be in the document.
    await waitFor(() => {
      expect(screen.getByTestId('browser-router')).toBeInTheDocument();
    });

    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(BrowserRouterMockFn).toHaveBeenCalledTimes(1);
  });

  // The initial "null" state is too transient to reliably test with RTL's default render
  // behavior for useEffect with empty deps, as the effect and re-render can happen
  // before assertions on the initial state are made. The key behavior is that
  // it *does* render the BrowserRouter on the client, which the above test covers.
  // On a true SSR environment, useEffect would not run, and it would render null.
});
