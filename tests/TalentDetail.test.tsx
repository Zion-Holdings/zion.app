import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TalentDetail from '@/pages/TalentDetail';

const server = setupServer(
  rest.get('/api/talent/test-slug', (_req, res, ctx) =>
    res(ctx.json({
      profile: {
        id: 't-001',
        full_name: 'Test Talent',
        bio: 'Bio',
        skills: ['React'],
        average_rating: 4.5,
      },
    }))
  ),
  rest.get('/api/talent/missing-slug', (_req, res, ctx) => res(ctx.status(404)))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function renderPage() {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/talent/test-slug']}>
        <Routes>
          <Route path="/talent/:slug" element={<TalentDetail />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
}

test('renders profile data from API', async () => {
  renderPage();
  expect(await screen.findByTestId('talent-name')).toHaveTextContent('Test Talent');
  expect(await screen.findByTestId('talent-skills')).toHaveTextContent('React');
});

test('shows not found message on 404', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/talent/missing-slug']}>
        <Routes>
          <Route path="/talent/:slug" element={<TalentDetail />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );

  expect(await screen.findByTestId('talent-not-found')).toHaveTextContent('Talent not found');
});
