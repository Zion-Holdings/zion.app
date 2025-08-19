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

test('shows only 10 listings per page when itemsPerPage is 10', () => {
  const listings: ProductListing[] = Array.from({ length: 15 }, (_, i) => ({
    id: String(i),
    title: `Item ${i}`,
    description: 'desc',
    category: 'test',
    price: 100,
    currency: '$',
    tags: [],
    author: { name: 'Author', id: 'a' },
    images: [],
    createdAt: '2020-01-01'
  }));

  const { container } = render(
    <MemoryRouter>
      <DynamicListingPage
        title="t"
        description="d"
        categorySlug="test"
        listings={listings}
        categoryFilters={[]}
        itemsPerPage={10}
      />
    </MemoryRouter>
  );

  const buyButtons = container.querySelectorAll('button');
  // expect one "Buy Now" per listing, plus other buttons (view toggles etc.)
  // Filter to buy now buttons by text
  const listingButtons = Array.from(buyButtons).filter(b => b.textContent === 'Buy Now');
  expect(listingButtons).toHaveLength(10);
});
