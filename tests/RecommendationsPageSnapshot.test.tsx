import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecommendationsPage from '@/pages/RecommendationsPage.jsx';

jest.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: '1' } }) }));

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [],
  }) as any;
});

test('RecommendationsPage renders header', async () => {
  const { asFragment } = render(
    <MemoryRouter>
      <RecommendationsPage />
    </MemoryRouter>
  );

  expect(await screen.findByRole('heading', { name: /ai equipment recommendations/i })).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
