import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Marketplace from '@/pages/Marketplace';

// Mock child components
jest.mock('@/components/search/EnhancedSearchInput', () => {
  const React = require('react');
  return { EnhancedSearchInput: (props: any) => React.createElement("input", { "data-testid": "enhanced-search-input", ...props }) };
});

jest.mock('@/components/search/FilterSidebar', () => {
  const React = require('react');
  return { FilterSidebar: (props: any) => React.createElement("div", { "data-testid": "filter-sidebar", ...props }) };
});

jest.mock('@/components/search/ActiveFiltersBar', () => {
  const React = require('react');
  return { ActiveFiltersBar: (props: any) => React.createElement("div", { "data-testid": "active-filters-bar", ...props }) };
});

// Updated mock to render something identifiable for products
jest.mock('@/components/ProductListingCard', () => {
  const React = require('react');
  // Ensure props.listing and props.listing.title are accessed safely
  return { ProductListingCard: jest.fn((props: any) =>
    React.createElement("div", { "data-testid": "product-listing-card" }, props.listing ? props.listing.title : null)
  )};
});

jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}));

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
) as jest.Mock;


describe('Marketplace Page', () => {
  beforeEach(() => {
    // Clear mock history before each test
    (global.fetch as jest.Mock).mockClear();
    jest.clearAllMocks(); // Clears all mocks, including jest.fn() ones like toast

    // Default fetch mock for each test
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );
  });

  it('renders without throwing errors and displays a heading', async () => {
    render(
      <MemoryRouter>
        <Marketplace />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/AI & Tech Marketplace/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith('/api/products');
  });

  it('displays product listings when API returns data', async () => {
    const mockProducts = [
      { id: '1', title: 'Test Product 1', description: 'Desc 1', category: 'Service', price: 100, images: ['img1.jpg'], rating: 4.5, tags: ['tag1'], merchant: { id: 'merchant1', name: 'Merchant 1' } },
      { id: '2', title: 'Test Product 2', description: 'Desc 2', category: 'Software', price: 200, images: ['img2.jpg'], rating: 4.0, tags: ['tag2'], merchant: { id: 'merchant2', name: 'Merchant 2' } },
    ];

    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProducts),
      })
    );

    render(
      <MemoryRouter>
        <Marketplace />
      </MemoryRouter>
    );

    await waitFor(() => {
      // Check for product titles
      expect(screen.getByText(/Test Product 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Product 2/i)).toBeInTheDocument();
      // Check that two ProductListingCard mocks are rendered
      expect(screen.getAllByTestId('product-listing-card')).toHaveLength(2);
    });
  });

  it('handles API error when fetching products', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Server Error',
        json: () => Promise.resolve({}),
      })
    );

    const { toast } = require('@/hooks/use-toast'); // Get the mocked toast

    render(
      <MemoryRouter>
        <Marketplace />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Error",
        description: "Could not fetch products: Failed to fetch products: Server Error",
        variant: "destructive",
      }));
    });
  });
});
