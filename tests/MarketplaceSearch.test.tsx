import { render, screen, fireEvent } from '@testing-library/react';
import MarketplaceSearch from '@/components/search/MarketplaceSearch';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';

test('shows suggestion for typed query', async () => {
  render(<MarketplaceSearch products={MARKETPLACE_LISTINGS} />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'GP' } });
  expect(await screen.findByText('GPT-4 API Integration Package')).toBeInTheDocument();
});
