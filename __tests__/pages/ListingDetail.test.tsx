import React from 'react';
import { render, screen } from '@testing-library/react';
import ListingPage from '../../pages/marketplace/listing/[slug]';
import type { ProductListing } from '@/types/listings';

test('render with listing shows title', () => {
  const listing: ProductListing = {
    id: 'test-id',
    title: 'Test Listing',
    description: 'desc',
    category: 'cat',
    price: 10,
    currency: '$',
    tags: [],
    author: { name: 'Seller', id: 'seller' },
    images: [],
    createdAt: '2024-01-01'
  };
  render(<ListingPage listing={listing} />);
  expect(screen.getByText('Test Listing')).toBeInTheDocument();
});
