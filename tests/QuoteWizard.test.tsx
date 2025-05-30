import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { QuoteWizard } from '@/components/quote/QuoteWizard';
import { RequestQuoteWizardProvider } from '@/context';

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: '1', title: 'Service A' },
      { id: '2', title: 'Service B' },
    ],
  }) as unknown as vi.Mock;
});

afterEach(() => {
  vi.resetAllMocks();
});

function setup() {
  render(
    <RequestQuoteWizardProvider>
      <QuoteWizard />
    </RequestQuoteWizardProvider>
  );
}

test('advances to step 2 after selecting a service', async () => {
  setup();

  const card = await screen.findByTestId('service-card-1');
  fireEvent.click(card);
  fireEvent.click(screen.getByRole('button', { name: /continue/i }));

  expect(await screen.findByTestId('details-step')).toBeInTheDocument();
});

test('shows error message when fetch fails', async () => {
  (global.fetch as vi.Mock).mockRejectedValue(new Error('fail'));
  setup();
  expect(await screen.findByText(/service temporarily unavailable/i)).toBeInTheDocument();
});

// ensures loading indicator appears before data loads
// we check for spinner via class name on initial render
// fetch promise never resolves

test('shows loader while fetching', async () => {
  (global.fetch as vi.Mock).mockImplementation(() => new Promise(() => {}));
  const { container } = render(
    <RequestQuoteWizardProvider>
      <QuoteWizard />
    </RequestQuoteWizardProvider>
  );
  expect(container.querySelector('.animate-spin')).toBeInTheDocument();
});
