import { render, fireEvent, waitFor } from '@testing-library/react'; // Added waitFor

// Mock Sentry to prevent errors in test environment
jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
  init: jest.fn(),
  // Add any other Sentry functions that might be called by the component or its dependencies
  // For example, if it uses withSentryConfig, Sentry.XYZ, etc.
  // For now, init and captureException are common ones.
}));

import { ModeToggle } from '@/components/ModeToggle';
// Use the ThemeProvider from src/components to match the hook used by ModeToggle
import { ThemeProvider } from '@/components/ThemeProvider';

it('saves theme to localStorage when toggled', async () => {
  localStorage.setItem('theme', 'light');

  render(
    <ThemeProvider>
      <ModeToggle />
    </ThemeProvider>
  );

  const button = document.querySelector('button');
  fireEvent.click(button!);

  await waitFor(() => {
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
