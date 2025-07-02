import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecommendationsPage from '@/pages/RecommendationsPage.jsx';

jest.mock('@/hooks/useAuth', () => ({ 
  useAuth: () => ({ user: { id: '1' } }) 
}));

jest.mock('@/hooks/useDelayedError', () => ({
  useDelayedError: (error) => error
}));

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

  // Wait for the loading state to complete and the header to appear
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: /ai equipment recommendations/i })).toBeInTheDocument();
  }, { timeout: 3000 });
  
  expect(asFragment()).toMatchSnapshot();
});
