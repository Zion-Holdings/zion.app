import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { SWRConfig } from 'swr';
import ServicesPage from '@/pages/ServicesPage';
import * as sentry from '@/utils/sentry';

jest.mock('@/utils/sentry');

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  jest.resetAllMocks();
});
afterAll(() => server.close());

function renderPage() {
  return render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>
    </SWRConfig>
  );
}

const sampleData = [
  {
    id: 's1',
    title: 'Test Service',
    description: 'desc',
    category: 'dev',
    price: 1000,
    currency: '$',
    tags: [],
    author: { name: 'A', id: 'a' },
    images: [],
    createdAt: '2020-01-01',
  },
];

test('renders services from API', async () => {
  server.use(
    rest.get('/api/services', (_req, res, ctx) => res(ctx.json(sampleData)))
  );
  renderPage();
  expect(screen.getByTestId('loading-state')).toBeInTheDocument();
  expect(await screen.findByText('Test Service')).toBeInTheDocument();
});

test('shows error and allows retry', async () => {
  server.use(rest.get('/api/services', (_req, res, ctx) => res(ctx.status(500))));
  renderPage();
  expect(await screen.findByTestId('error-state')).toBeInTheDocument();
  expect(sentry.captureException).toHaveBeenCalled();

  server.use(
    rest.get('/api/services', (_req, res, ctx) => res(ctx.json(sampleData)))
  );
  fireEvent.click(screen.getByTestId('retry-button'));
  expect(await screen.findByText('Test Service')).toBeInTheDocument();
});
