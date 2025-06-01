import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteWizard } from '@/components/quote/QuoteWizard';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { SWRConfig } from 'swr';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const sample = [
  { id: '1', title: 'Service A' },
  { id: '2', title: 'Service B' },
];

function renderWizard() {
  return render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <QuoteWizard />
    </SWRConfig>
  );
}

it('loads services and advances to step 2', async () => {
  let requestedCategory = '';
  server.use(
    rest.get('/api/items', (req, res, ctx) => {
      requestedCategory = req.url.searchParams.get('category') || '';
      return res(ctx.json(sample));
    }),
    rest.post('/api/quotes', (_req, res, ctx) => res(ctx.json({ success: true })))
  );

  renderWizard();

  expect(await screen.findByText('Service A')).toBeInTheDocument();
  expect(requestedCategory).toBe('services');

  fireEvent.click(screen.getByTestId('request-quote-1'));
  expect(await screen.findByTestId('details-step')).toBeInTheDocument();
});

it('shows error and allows retry', async () => {
  server.use(rest.get('/api/items', (_req, res, ctx) => res(ctx.status(500))));

  renderWizard();

  expect(await screen.findByTestId('service-fetch-error-alert')).toBeInTheDocument();

  server.use(rest.get('/api/items', (_req, res, ctx) => res(ctx.json(sample))));
  fireEvent.click(screen.getByTestId('retry-button'));

  expect(await screen.findByText('Service A')).toBeInTheDocument();
});

it('submits quote', async () => {
  let submitted = false;
  server.use(
    rest.get('/api/items', (_req, res, ctx) => res(ctx.json(sample))),
    rest.post('/api/quotes', (_req, res, ctx) => {
      submitted = true;
      return res(ctx.json({ success: true }));
    })
  );

  renderWizard();

  fireEvent.click(await screen.findByTestId('request-quote-1'));
  fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'hi' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await screen.findByTestId('success-step');
  expect(submitted).toBe(true);
});

it('recovers after a transient error', async () => {
  let callCount = 0;
  server.use(
    rest.get('/api/items', (_req, res, ctx) => {
      callCount++;
      if (callCount === 1) {
        return res(ctx.status(500));
      }
      return res(ctx.json(sample));
    })
  );

  renderWizard();

  expect(await screen.findByText('Service A', {}, { timeout: 8000 })).toBeInTheDocument();
  expect(callCount).toBeGreaterThan(1);
});

it('stays on step 1 if no service selected', async () => {
  server.use(
    rest.get('/api/items', (_req, res, ctx) => res(ctx.json(sample)))
  );

  renderWizard();

  await screen.findByText('Service A');

  fireEvent.click(screen.getByRole('button', { name: /continue/i }));

  expect(screen.getByTestId('step-indicator')).toHaveTextContent('1/3');
  expect(
    screen.getByTestId('service-selection-error')
  ).toBeInTheDocument();
});
