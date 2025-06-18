import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Marketplace, { MarketplaceProps } from '@/pages/Marketplace'; // Adjust path as necessary
import { server } from '@/mocks/server'; // MSW server

// Mock ProductCard
jest.mock('@/components/ProductCard', () => {
  return function DummyProductCard({ product }: { product: any }) {
    return <div data-testid="product-card">{product.title || product.name}</div>;
  };
});

// Mock next/router
const mockRouterPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

// Define ProductWithStats for mock data
interface ProductWithStats {
  id: string;
  name: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  averageRating: number | null;
  reviewCount: number;
  title: string;
  [key: string]: any;
}

const mockProductsData: ProductWithStats[] = [
  { id: '1', name: 'Product 1', title: 'Product 1', averageRating: 4.5, reviewCount: 10 },
  { id: '2', name: 'Product 2', title: 'Product 2', averageRating: 3.0, reviewCount: 5 },
];

// Global fetch mock - Keep for tests not using MSW or as a fallback if MSW isn't hit.
// MSW will take precedence for matched requests.
global.fetch = jest.fn() as jest.Mock;


// MSW Server Setup
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());


const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries globally for most tests unless overridden
    },
  },
});

const renderMarketplace = (props?: Partial<MarketplaceProps>, client?: QueryClient) => {
  const queryClient = client || createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <Marketplace {...props} />
    </QueryClientProvider>
  );
};

describe('Marketplace Page', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear(); // Clear jest.fn mock
    mockRouterPush.mockClear();
    // server.resetHandlers() is handled in afterEach
  });

  test('renders initial products from props and does not fetch', () => {
    renderMarketplace({ products: mockProductsData });

    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProductsData.length);
    expect(screen.getByText(mockProductsData[0].name)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled(); // MSW doesn't use global.fetch mock
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
    expect(screen.queryByText(/We couldn't load the marketplace products/i)).not.toBeInTheDocument();
  });

  test('fetches products client-side when initial products are empty (MSW success)', async () => {
    // This test will now use MSW if a success handler for /api/marketplace/products is added.
    // For now, assuming it might fall back to global.fetch or MSW handles it.
    // If MSW is intended, ensure a success handler is also in src/mocks/handlers.ts
    // For this example, we'll assume it relies on a non-error MSW response or jest.fn if not matched by MSW.
     (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProductsData),
    });


    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false, staleTime: Infinity } },
    });
    renderMarketplace({ products: [] }, queryClient);

    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();
    // If MSW handles this, global.fetch won't be called.
    // If MSW does not have a GET /api/marketplace/products success handler, this will use the jest.fn mock.
    // For the purpose of this file, we assume this specific test might still rely on the global.fetch mock for success.
    expect(global.fetch).toHaveBeenCalledWith('/api/marketplace/products?limit=20');


    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(mockProductsData.length);
    });
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
  });

  // THIS IS THE NEW TEST CASE USING MSW FOR ERROR HANDLING
  it('MSW: should display an error message if API call fails to fetch products', async () => {
    // MSW is already configured in src/mocks/handlers.ts to return 500 for this route.
    // server.use() could be used here to override for this specific test if needed.
    const queryClient = createTestQueryClient(); // Uses retry: false

    render(
      <QueryClientProvider client={queryClient}>
        <Marketplace initialProducts={[]} />
      </QueryClientProvider>
    );

    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/We couldn't load the marketplace products at this moment./i)).toBeInTheDocument();
    }, { timeout: 5000 }); // Standard timeout

    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled(); // Verify MSW handled it, not jest.fn()
  });


  test('shows error message if client-side fetch fails after retries (using jest.fn mock)', async () => {
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        text: () => Promise.resolve('Internal Server Error from jest.fn'),
      })
    );

    const queryClientWithRetries = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 3,
          retryDelay: 10,
        },
      },
    });

    renderMarketplace({ products: [] }, queryClientWithRetries);

    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/We couldn't load the marketplace products at this moment./i)).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(global.fetch).toHaveBeenCalledTimes(4);
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
  });

  test('displays loading during retries and then shows error (using jest.fn mock)', async () => {
    jest.useFakeTimers();
    let fetchAttempt = 0;
    (global.fetch as jest.Mock).mockImplementation(() => {
      fetchAttempt++;
      return Promise.resolve({
        ok: false,
        status: 500,
        text: () => Promise.resolve(`Simulated server error attempt ${fetchAttempt}`),
      });
    });

    const queryClientForRetryTiming = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 3,
          retryDelay: (attemptIndex) => (attemptIndex + 1) * 100,
        },
      },
    });

    renderMarketplace({ products: [] }, queryClientForRetryTiming);

    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();
    expect(fetchAttempt).toBe(1);

    await jest.advanceTimersByTimeAsync(100);
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
    expect(fetchAttempt).toBe(2);

    await jest.advanceTimersByTimeAsync(200);
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
    expect(fetchAttempt).toBe(3);

    await jest.advanceTimersByTimeAsync(300);
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
    expect(fetchAttempt).toBe(4);

    await jest.advanceTimersByTimeAsync(100);
    await waitFor(() => {
      expect(screen.getByText(/We couldn't load the marketplace products at this moment./i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
    expect(fetchAttempt).toBe(4);

    jest.useRealTimers();
  });

  test('handles empty products from API correctly (using jest.fn mock)', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]),
    });
    const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    renderMarketplace({ products: [] }, queryClient);

    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/We couldn't load the marketplace products at this moment./i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

});
