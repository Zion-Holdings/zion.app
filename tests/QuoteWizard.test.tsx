import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteWizard } from '@/components/quote/QuoteWizard';
import { RequestQuoteWizardProvider } from '@/context';

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: '1', title: 'Service A' },
      { id: '2', title: 'Service B' },
    ],
  }) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
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
