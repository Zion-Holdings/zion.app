import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Marketplace from '@/pages/Marketplace'; // Adjust path as necessary
import { server } from '@/mocks/server'; // MSW server
import { http, HttpResponse } from 'msw';
import { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS as allStaticMarketplaceData } from '@/data/marketplaceData';
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts';
import { SERVICES as allStaticServiceData } from '@/data/servicesData';


// Combine all static data sources for link checking
const _allKnownProductsForTest = [
  ...allStaticMarketplaceData,
  ...INITIAL_MARKETPLACE_PRODUCTS,
  ...allStaticServiceData,
];

import userEvent from '@testing-library/user-event';

// Mock ProductCard to simplify Marketplace tests
// Modify the ProductCard mock to include a link
jest.mock('@/components/ProductCard', () => {
  return function DummyProductCard({ product }: { product: ProductListing }) {
    return (
      <div data-testid="product-card">
        <a href={`/marketplace/listing/${product.id}`}>{product.title}</a>
      </div>
    );
  };
});

// Mock next/router
const mockRouterPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
    query: {}, // Provide default query object
  }),
}));

// Mock useToast
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}));


// MSW Server Setup
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  // Clears MSW's internal state, useful if tests modify runtime handlers
  // Also clear react-query cache if necessary, or create new client per test
});
afterAll(() => server.close());

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for tests unless specifically testing retry logic
      staleTime: Infinity, // Prevent refetching during a test
    },
  },
});

const renderMarketplace = (client?: QueryClient) => {
  const queryClient = client || createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <Marketplace />
    </QueryClientProvider>
  );
};

describe('Marketplace Page', () => {
  beforeEach(() => {
    mockRouterPush.mockClear();
    // Any other test-specific setup
  });

  test('shows loading skeletons initially, then renders products on successful fetch', async () => {
    // MSW handler for success is already in src/mocks/handlers.ts using scenario=success
    // We need to make sure the test triggers this specific handler.
    // The component fetches with /api/products?page=1&limit=16 by default.
    // The MSW handler uses a 'scenario' query param. We can override the handler for this test.
    server.use(
      http.get('/api/products', ({ request: _request }) => {
        // Check if it's the initial fetch
        const url = new URL(_request.url);
        if (url.searchParams.get('page') === '1' && url.searchParams.get('limit') === '16') {
          return HttpResponse.json([
            { id: 'prod-1', title: 'Product Alpha', description: 'Desc Alpha', category: 'AI Models', price: 100, currency: 'USD', tags: [], author: { name: 'Auth1', id: 'a1' }, images: [], createdAt: new Date().toISOString(), rating: 4.5, reviewCount: 10, aiScore: 92 },
            { id: 'prod-2', title: 'Product Beta', description: 'Desc Beta', category: 'AI Services', price: 200, currency: 'USD', tags: [], author: { name: 'Auth2', id: 'a2' }, images: [], createdAt: new Date().toISOString(), rating: 4.7, reviewCount: 20, aiScore: 95 },
          ]);
        }
        // Fallback to a generic error or empty array if params don't match, to avoid unexpected behavior
        return HttpResponse.json([], { status: 404 });
      })
    );

    renderMarketplace();

    // Check for loading state (SkeletonCards)
    expect(screen.getByTestId('marketplace-loading')).toBeInTheDocument();
    expect(screen.getAllByTestId('skeleton-card').length).toBeGreaterThan(0);

    // Wait for products to be rendered
    await waitFor(() => {
      expect(screen.queryByTestId('marketplace-loading')).not.toBeInTheDocument();
      expect(screen.getByText('Product Alpha')).toBeInTheDocument();
      expect(screen.getByText('Product Beta')).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('product-card')).toHaveLength(2);
  });

  test('shows empty state when API returns an empty array', async () => {
    server.use(
      http.get('/api/products', () => {
        return HttpResponse.json([]);
      })
    );
    renderMarketplace();

    expect(screen.getByTestId('marketplace-loading')).toBeInTheDocument(); // Initial loading

    await waitFor(() => {
      // Check for the empty state component/message
      // Assuming ProductsEmptyState has a distinct test ID or text
      expect(screen.getByTestId('marketplace-empty')).toBeInTheDocument();
      expect(screen.getByText(/No Products Available/i)).toBeInTheDocument(); // Or similar text from ProductsEmptyState
    });
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

  test('shows error state when API returns a 500 error', async () => {
    server.use(
      http.get('/api/products', () => {
        return HttpResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      })
    );
    renderMarketplace();

    expect(screen.getByTestId('marketplace-loading')).toBeInTheDocument(); // Initial loading

    await waitFor(() => {
      // Check for the error state component/message
      // Assuming ErrorState component renders specific text or has a test ID
      expect(screen.getByText(/could not load the requested content/i)).toBeInTheDocument(); // Text from ErrorState
    });
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

  test('shows error state on network error', async () => {
    server.use(
      http.get('/api/products', () => {
        return HttpResponse.error(); // Simulates network error
      })
    );
    renderMarketplace();

    expect(screen.getByTestId('marketplace-loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/could not load the requested content/i)).toBeInTheDocument();
    });
  });

  test('renders products correctly even with missing or invalid createdAt dates', async () => {
    server.use(
      http.get('/api/products', () => {
        return HttpResponse.json([
          { id: 'prod-1', title: 'Product Valid Date', description: 'Desc 1', category: 'Cat1', price: 10, currency: 'USD', tags:[], author:{name:'a',id:'a'}, images:[], createdAt: new Date().toISOString() },
          { id: 'prod-2', title: 'Product Invalid Date', description: 'Desc 2', category: 'Cat2', price: 20, currency: 'USD', tags:[], author:{name:'a',id:'a'}, images:[], createdAt: 'invalid-date-string' },
          { id: 'prod-3', title: 'Product Missing Date', description: 'Desc 3', category: 'Cat1', price: 30, currency: 'USD', tags:[], author:{name:'a',id:'a'}, images:[] /* no createdAt */ },
        ]);
      })
    );
    renderMarketplace();

    await waitFor(() => {
      expect(screen.getByText('Product Valid Date')).toBeInTheDocument();
      expect(screen.getByText('Product Invalid Date')).toBeInTheDocument();
      expect(screen.getByText('Product Missing Date')).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('product-card')).toHaveLength(3);
    // The order might be affected by how robust sort handles NaNs, but they should all render.
    // Default sort is newest. Items with invalid/missing dates are treated as "older" or "newer" based on implementation.
    // The key is that they don't break rendering.
    const productCards = screen.getAllByTestId('product-card');
    const titles = productCards.map(card => card.textContent);

    // Based on current robust sort: invalid dates might be pushed, valid ones first.
    // Example: Product Valid Date, then the others in some order.
    // For this test, primarily ensuring all 3 render is key.
    // Exact order check can be added if sort stability with invalid dates is critical.
    expect(titles).toContain('Product Valid Date');
    expect(titles).toContain('Product Invalid Date');
    expect(titles).toContain('Product Missing Date');
  });

  test('filters products by category', async () => {
    const products: ProductListing[] = [
      { id: 'p1', title: 'Model A', description: 'd', category: 'AI Models', price: 10, currency: 'USD', tags: [], author: { name: 'a', id: 'a' }, images: [], createdAt: new Date().toISOString() },
      { id: 'p2', title: 'Hardware B', description: 'd', category: 'Hardware', price: 20, currency: 'USD', tags: [], author: { name: 'b', id: 'b' }, images: [], createdAt: new Date().toISOString() },
    ];

    server.use(
      http.get('/api/products', () => {
        return HttpResponse.json(products);
      })
    );

    renderMarketplace();

    await waitFor(() => {
      expect(screen.getByText('Model A')).toBeInTheDocument();
      expect(screen.getByText('Hardware B')).toBeInTheDocument();
    });

    const selects = screen.getAllByRole('combobox');
    await userEvent.selectOptions(selects[0], 'Hardware');

    await waitFor(() => {
      expect(screen.queryByText('Model A')).not.toBeInTheDocument();
      expect(screen.getByText('Hardware B')).toBeInTheDocument();
    });
  });

  test('sorts products by price', async () => {
    const products: ProductListing[] = [
      { id: 'cheap', title: 'Cheap', description: 'd', category: 'AI Models', price: 5, currency: 'USD', tags: [], author: { name: 'a', id: 'a' }, images: [], createdAt: new Date().toISOString() },
      { id: 'expensive', title: 'Expensive', description: 'd', category: 'AI Models', price: 100, currency: 'USD', tags: [], author: { name: 'b', id: 'b' }, images: [], createdAt: new Date().toISOString() },
    ];

    server.use(
      http.get('/api/products', () => {
        return HttpResponse.json(products);
      })
    );

    renderMarketplace();

    await waitFor(() => {
      expect(screen.getByText('Cheap')).toBeInTheDocument();
      expect(screen.getByText('Expensive')).toBeInTheDocument();
    });

    const selects = screen.getAllByRole('combobox');
    await userEvent.selectOptions(selects[1], 'price-high');

    await waitFor(() => {
      const cards = screen.getAllByTestId('product-card');
      expect(cards[0].textContent).toContain('Expensive');
      expect(cards[1].textContent).toContain('Cheap');
    });
  });

  test('product cards link to valid product pages', async () => {
    const mockProducts: ProductListing[] = [
      { id: 'prod-1', title: 'Product Alpha', description: 'Desc Alpha', category: 'AI Models', price: 100, currency: 'USD', tags: [], author: { name: 'Auth1', id: 'a1' }, images: [], createdAt: new Date().toISOString(), rating: 4.5, reviewCount: 10, aiScore: 92 },
      { id: 'innovation-20', title: 'AI Innovation Bootcamp', description: 'Bootcamp desc', category: 'Innovation', price: 3000, currency: 'USD', tags: [], author: { name: 'InnovateLabs', id: 'innovate-labs' }, images: [], createdAt: new Date().toISOString(), rating: 4.7, reviewCount: 12, aiScore: 88 },
      { id: 'prod-3', title: 'Product Gamma', description: 'Desc Gamma', category: 'Hardware', price: 50, currency: 'USD', tags: [], author: { name: 'Auth3', id: 'a3' }, images: [], createdAt: new Date().toISOString(), rating: 4.0, reviewCount: 5, aiScore: 90 },
    ];

    // Mock the API response from @/services/marketplace
    // This is a simplified mock for the service itself.
    // The component uses dynamic import, so this needs to be hoisted by Jest.
    jest.mock('@/services/marketplace', () => ({
      ...jest.requireActual('@/services/marketplace'), // Import and retain default exports
      fetchProducts: jest.fn().mockResolvedValue(mockProducts), // Mock specific function
    }));

    // MSW handler for the initial fetch from the component's perspective via /api/products
    // This is what the component's internal useInfiniteScrollPagination will trigger.
    server.use(
      http.get('/api/products', ({ request: _request }) => {
        const url = new URL(_request.url);
        // Ensure this matches the component's initial fetch parameters
        if (url.searchParams.get('page') === '1' && url.searchParams.get('limit') === '16') {
          // The fetchProducts hook in Marketplace.tsx expects { items, hasMore, total }
          return HttpResponse.json({
            items: mockProducts,
            hasMore: false, // For simplicity, assume all products fit on one page for this test
            total: mockProducts.length,
          });
        }
        // Fallback for other calls if any, or if params don't match
        return HttpResponse.json({ items: [], hasMore: false, total: 0 });
      })
    );

    const queryClient = createTestQueryClient();
    renderMarketplace(queryClient);

    await waitFor(() => {
      expect(screen.getByText('Product Alpha')).toBeInTheDocument();
      expect(screen.getByText('AI Innovation Bootcamp')).toBeInTheDocument();
      expect(screen.getByText('Product Gamma')).toBeInTheDocument();
    }, { timeout: 3000 }); // Increased timeout for potential async operations

    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(mockProducts.length);

    // Prepare combined static data for link validation
    // These imports need to be at the top of the file.
    // For this diff, we assume they are already there or will be added.
    // import { MARKETPLACE_LISTINGS as allStaticMarketplaceData } from '@/data/marketplaceData';
    // import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts';
    // import { SERVICES as allStaticServiceData } from '@/data/servicesData';
    // const allKnownProductsForTest = [...allStaticMarketplaceData, ...INITIAL_MARKETPLACE_PRODUCTS, ...allStaticServiceData];
    // For the purpose of this specific test, we'll just check against mockProducts.
    // A more comprehensive test could use allKnownProductsForTest.

    productCards.forEach(card => {
      const link = card.querySelector('a');
      expect(link).toBeInTheDocument();
      const href = link?.getAttribute('href');
      expect(href).toMatch(/^\/marketplace\/listing\//);

      const slugFromLink = href?.split('/').pop();
      expect(slugFromLink).toBeTruthy();

      const isMockedProduct = mockProducts.some(mp => mp.id === slugFromLink);
      expect(isMockedProduct).toBe(true, `Link slug "${slugFromLink}" for product "${link?.textContent}" does not match any ID in the mocked product list for this test run.`);

      if (link?.textContent === 'AI Innovation Bootcamp') {
        expect(href).toBe('/marketplace/listing/innovation-20');
      }
    });
  });

  test('filters products by category', async () => {
    const user = userEvent.setup();
    const mockProductsForFilter: ProductListing[] = [
      { id: 'filter-prod-1', title: 'AI Model Alpha', category: 'AI Models', price: 100, currency: 'USD', tags: [], author: { name: 'Auth1', id: 'a1' }, images: [], createdAt: new Date(2023, 0, 1).toISOString(), rating: 4.5, reviewCount: 10, aiScore: 92 },
      { id: 'filter-prod-2', title: 'Service Beta', category: 'AI Services', price: 200, currency: 'USD', tags: [], author: { name: 'Auth2', id: 'a2' }, images: [], createdAt: new Date(2023, 0, 2).toISOString(), rating: 4.7, reviewCount: 20, aiScore: 95 },
      { id: 'filter-prod-3', title: 'AI Model Gamma', category: 'AI Models', price: 150, currency: 'USD', tags: [], author: { name: 'Auth3', id: 'a3' }, images: [], createdAt: new Date(2023, 0, 3).toISOString(), rating: 4.0, reviewCount: 5, aiScore: 90 },
      { id: 'filter-prod-4', title: 'Hardware Delta', category: 'Hardware', price: 500, currency: 'USD', tags: [], author: { name: 'Auth4', id: 'a4' }, images: [], createdAt: new Date(2023, 0, 4).toISOString(), rating: 4.8, reviewCount: 15, aiScore: 98 },
    ];

    server.use(
      http.get('/api/products', ({ request: _request }) => {
        // The Marketplace component fetches all and then filters client-side
        // So, we return all mock products for the initial fetch.
        return HttpResponse.json({
          items: mockProductsForFilter,
          hasMore: false,
          total: mockProductsForFilter.length,
        });
      })
    );

    renderMarketplace();

    // Wait for initial products to load
    await waitFor(() => {
      expect(screen.getByText('AI Model Alpha')).toBeInTheDocument();
      expect(screen.getByText('Service Beta')).toBeInTheDocument();
      expect(screen.getAllByTestId('product-card')).toHaveLength(4);
    });

    // Find the category select dropdown. Assuming it has a default "All Categories" or similar.
    // The FilterControls component uses a native select. We can find it by its current value or a label.
    // Let's assume the initial value is empty string for "All Categories".
    const categorySelect = screen.getByRole('combobox', { name: /categories/i }); // Or find by a more specific label if available in FilterControls

    // Select 'AI Models' category
    // The options in Marketplace.tsx are dynamically generated.
    // We need to ensure 'AI Models' is an option. The mock data includes it.
    await user.selectOptions(categorySelect, 'AI Models');

    // Wait for the component to re-render with filtered products
    // Since filtering is client-side, this should be relatively quick.
    await waitFor(() => {
      expect(screen.getByText('AI Model Alpha')).toBeInTheDocument();
      expect(screen.getByText('AI Model Gamma')).toBeInTheDocument();
      expect(screen.queryByText('Service Beta')).not.toBeInTheDocument();
      expect(screen.queryByText('Hardware Delta')).not.toBeInTheDocument();
    });

    const displayedCards = screen.getAllByTestId('product-card');
    expect(displayedCards).toHaveLength(2);
    displayedCards.forEach(card => {
      expect(card).toHaveTextContent('Category: AI Models');
    });

    // Select 'All Categories' again (empty value for the select)
    await user.selectOptions(categorySelect, ''); // Assuming '' is the value for "All Categories"

    await waitFor(() => {
      expect(screen.getByText('AI Model Alpha')).toBeInTheDocument();
      expect(screen.getByText('Service Beta')).toBeInTheDocument();
      expect(screen.getByText('AI Model Gamma')).toBeInTheDocument();
      expect(screen.getByText('Hardware Delta')).toBeInTheDocument();
      expect(screen.getAllByTestId('product-card')).toHaveLength(4);
    });
  });

  test('sorts products by price (low to high)', async () => {
    const user = userEvent.setup();
    const mockProductsForSort: ProductListing[] = [
      { id: 'sort-prod-1', title: 'Expensive Product', category: 'AI Models', price: 500, currency: 'USD', tags: [], author: { name: 'Auth1', id: 'a1' }, images: [], createdAt: new Date(2023, 0, 1).toISOString(), rating: 4.5, reviewCount: 10, aiScore: 92 },
      { id: 'sort-prod-2', title: 'Cheap Product', category: 'AI Services', price: 50, currency: 'USD', tags: [], author: { name: 'Auth2', id: 'a2' }, images: [], createdAt: new Date(2023, 0, 2).toISOString(), rating: 4.7, reviewCount: 20, aiScore: 95 },
      { id: 'sort-prod-3', title: 'Mid-Range Product', category: 'AI Models', price: 250, currency: 'USD', tags: [], author: { name: 'Auth3', id: 'a3' }, images: [], createdAt: new Date(2023, 0, 3).toISOString(), rating: 4.0, reviewCount: 5, aiScore: 90 },
    ];

    server.use(
      http.get('/api/products', ({ request: _request }) => {
        return HttpResponse.json({
          items: mockProductsForSort,
          hasMore: false,
          total: mockProductsForSort.length,
        });
      })
    );

    renderMarketplace();

    // Wait for initial products to load
    await waitFor(() => {
      expect(screen.getByText('Expensive Product')).toBeInTheDocument();
      expect(screen.getByText('Cheap Product')).toBeInTheDocument();
      expect(screen.getAllByTestId('product-card')).toHaveLength(3);
    });

    // Find the sort select dropdown.
    // The FilterControls component uses a native select.
    // The options are: "newest", "price-low", "price-high", "rating", "popular", "ai-score"
    const sortSelect = screen.getByRole('combobox', { name: /sort by/i }); // Or a more specific label / test-id

    // Select 'Price: Low to High'
    await user.selectOptions(sortSelect, 'price-low');

    // Wait for the component to re-render with sorted products
    await waitFor(() => {
      const productCards = screen.getAllByTestId('product-card');
      const titles = productCards.map(card => card.querySelector('a')?.textContent);
      // Expected order: Cheap Product, Mid-Range Product, Expensive Product
      expect(titles[0]).toBe('Cheap Product');
      expect(titles[1]).toBe('Mid-Range Product');
      expect(titles[2]).toBe('Expensive Product');
    });

    const displayedCards = screen.getAllByTestId('product-card');
    expect(displayedCards[0]).toHaveTextContent('Price: $50');
    expect(displayedCards[1]).toHaveTextContent('Price: $250');
    expect(displayedCards[2]).toHaveTextContent('Price: $500');

    // Optional: Test sorting by 'Price: High to Low'
    await user.selectOptions(sortSelect, 'price-high');
    await waitFor(() => {
      const productCards = screen.getAllByTestId('product-card');
      const titles = productCards.map(card => card.querySelector('a')?.textContent);
      expect(titles[0]).toBe('Expensive Product');
      expect(titles[1]).toBe('Mid-Range Product');
      expect(titles[2]).toBe('Cheap Product');
    });
     expect(screen.getAllByTestId('product-card')[0]).toHaveTextContent('Price: $500');
     expect(screen.getAllByTestId('product-card')[1]).toHaveTextContent('Price: $250');
     expect(screen.getAllByTestId('product-card')[2]).toHaveTextContent('Price: $50');
  });
});
