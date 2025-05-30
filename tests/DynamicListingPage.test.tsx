import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DynamicListingPage } from '@/components/DynamicListingPage';
import { ProductListing } from '@/types/listings';

test('slider min is 0', () => {
  const listings: ProductListing[] = [
    {
      id: '1',
      title: 'Item 1',
      description: 'desc',
      category: 'test',
      price: 100,
      currency: '$',
      tags: [],
      author: { name: 'Author', id: 'a' },
      images: [],
      createdAt: '2020-01-01'
    }
  ];

  render(
    <MemoryRouter>
      <DynamicListingPage
        title="t"
        description="d"
        categorySlug="test"
        listings={listings}
        categoryFilters={[]}
      />
    </MemoryRouter>
  );

  const slider = screen.getByLabelText(/price range/i);
  expect(slider).toHaveAttribute('min', '0');
});
