import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QuoteWizard } from '@/components/quote/QuoteWizard';

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: '1', title: 'Service A' },
      { id: '2', title: 'Service B' },
    ],
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

test('submits quote', async () => {
  (global.fetch as any)
    .mockResolvedValueOnce({ ok: true, json: async () => [{ id: '1', title: 'Service A' }] })
    .mockResolvedValueOnce({ ok: true, json: async () => ({}) });

  setup();

  const button = await screen.findByTestId('request-quote-1');
  fireEvent.click(button);

  fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'hi' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await screen.findByTestId('success-step');

  expect(global.fetch).toHaveBeenCalledWith(
    '/api/quotes',
    expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ service_id: '1', user_message: 'hi' })
    })
  );
});
