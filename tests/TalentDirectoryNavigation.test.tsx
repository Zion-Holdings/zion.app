import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TalentDirectory from '@/pages/TalentDirectory';
import TalentDetail from '@/pages/TalentDetail';

function renderWithRouter() {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/talent']}>
        <Routes>
          <Route path="/talent" element={<TalentDirectory />} />
          <Route path="/talent/:id" element={<TalentDetail />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
}

test('opens first talent profile from directory', async () => {
  renderWithRouter();
  const firstCard = await screen.findByText('Alexandra Chen');
  fireEvent.click(firstCard);
  expect(await screen.findByTestId('talent-details')).toHaveTextContent('Alexandra Chen');
});
