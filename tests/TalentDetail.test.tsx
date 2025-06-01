import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TalentDetail from '@/pages/TalentDetail';

const server = setupServer(
  rest.get('/api/talent/t-001', (_req, res, ctx) =>
    res(ctx.json({
      profile: {
        id: 't-001',
        full_name: 'Test Talent',
        bio: 'Bio',
        skills: ['React'],
        average_rating: 4.5,
      },
    }))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function renderPage() {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/talent/t-001']}>
        <Routes>
          <Route path="/talent/:id" element={<TalentDetail />} />
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
