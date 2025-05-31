import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QuoteWizard } from '@/components/quote/QuoteWizard';
import { vi } from 'vitest';

beforeEach(() => {
  global.fetch = vi.fn((url) => {
    if (url === '/api/services?type=quote') {
      return Promise.resolve({
        ok: true,
        json: async () => [
          { id: '1', title: 'Service A' },
          { id: '2', title: 'Service B' },
        ],
      });
    }
    if (url === '/api/quotes') {
      return Promise.resolve({
        ok: true,
        json: async () => ({ success: true }), // Mock for submit
      });
    }
    return Promise.reject(new Error(`Unhandled fetch: ${url}`));
  }) as any;
});

afterEach(() => {
  vi.restoreAllMocks();
});

function setup() {
  render(<QuoteWizard />);
}

test('shows step indicator for each step', async () => {
  setup();

  expect(screen.getByTestId('step-indicator')).toHaveTextContent('1/3');

  const button = await screen.findByTestId('request-quote-1');
  fireEvent.click(button);

  await screen.findByTestId('details-step');
  expect(screen.getByTestId('step-indicator')).toHaveTextContent('2/3');
});

test('advances to step 2 after selecting a service', async () => {
  setup();

  const button = await screen.findByTestId('request-quote-1');
  fireEvent.click(button);

  expect(await screen.findByTestId('details-step')).toBeInTheDocument();
});

test('fetches services from the correct endpoint', async () => {
  setup();
  await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('/api/services?type=quote'));
  expect(await screen.findByText('Service A')).toBeInTheDocument();
});

test('displays an error alert when service fetch fails', async () => {
  (global.fetch as any).mockImplementationOnce((url: string) => {
    if (url === '/api/services?type=quote') {
      return Promise.resolve({
        ok: false,
        status: 500,
        json: async () => ({ error: 'Server Error' }),
      });
    }
    // Fallback for other URLs like /api/quotes, though not expected in this specific test flow
    return Promise.resolve({
      ok: true,
      json: async () => ({ success: true })
    });
  });

  setup();

  const alert = await screen.findByTestId('service-fetch-error-alert');
  expect(alert).toBeInTheDocument();
  expect(alert).toHaveTextContent('Network Error');
  expect(alert).toHaveTextContent('There was a problem fetching the services. Please check your internet connection and try again.');
  // Intentionally not checking for specific destructive variant classes to avoid brittleness
  // The data-testid and text content are strong indicators.
});

test('submits quote', async () => {
  // The beforeEach mock already handles /api/services?type=quote and /api/quotes
  // No need to mockResolvedValueOnce specifically for the initial service load if beforeEach is robust.
  // However, if a test needs a specific sequence beyond the default beforeEach, it can still be done.

  setup();

  const button = await screen.findByTestId('request-quote-1');
  fireEvent.click(button);

  fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'hi' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await screen.findByTestId('success-step');

  // Ensure the correct endpoint was called for submission
  expect(global.fetch).toHaveBeenCalledWith(
    '/api/quotes',
    expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ service_id: '1', user_message: 'hi' })
    })
  );
  // Also ensure the service fetch was called
  expect(global.fetch).toHaveBeenCalledWith('/api/services?type=quote');
});
