import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Marketplace from '@/pages/Marketplace'; // Adjust path as necessary
import { server } from '@/mocks/server'; // MSW server
import { http, HttpResponse } from 'msw';
import { ProductListing } from '@/types/listings';

// Mock ProductCard to simplify Marketplace tests
jest.mock('@/components/ProductCard', () => {
  return function DummyProductCard({ product }: { product: ProductListing }) {
    return <div data-testid="product-card">{product.title}</div>;
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
      http.get('/api/products', ({ request }) => {
        // Check if it's the initial fetch
        const url = new URL(request.url);
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

  // TODO: Add tests for filtering and sorting interactions
  // Example:
  // test('filters products by category', async () => { ... });
  // test('sorts products by price', async () => { ... });
});
