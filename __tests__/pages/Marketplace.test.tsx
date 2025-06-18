import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Marketplace, { MarketplaceProps } from '@/pages/Marketplace'; // Adjust path as necessary

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

// Global fetch mock
global.fetch = jest.fn() as jest.Mock;

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
    (global.fetch as jest.Mock).mockClear();
    mockRouterPush.mockClear();
    // Clean up React Query cache between tests
    // Note: A new client is created for each test in renderMarketplace or specific tests
  });

  test('renders initial products from props and does not fetch', () => {
    renderMarketplace({ products: mockProductsData });

    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProductsData.length);
    expect(screen.getByText(mockProductsData[0].name)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
    expect(screen.queryByText(/We couldn't load the marketplace products/i)).not.toBeInTheDocument();
  });

  test('fetches products client-side when initial products are empty', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProductsData),
    });

    // Need a client that allows the query to run
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false, staleTime: Infinity } },
    });
    renderMarketplace({ products: [] }, queryClient);

    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith('/api/marketplace/products?limit=20');

    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(mockProductsData.length);
    });
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
  });

  test('shows error message if client-side fetch fails after retries', async () => {
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        text: () => Promise.resolve('Internal Server Error'),
      })
    );

    // Configure a client for retries as per component logic
    const queryClientWithRetries = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 3,
          retryDelay: 10, // Use a small delay for faster tests
        },
      },
    });

    renderMarketplace({ products: [] }, queryClientWithRetries);

    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();

    // Wait for the error message to appear after retries
    await waitFor(() => {
      expect(screen.getByText(/We couldn't load the marketplace products at this moment./i)).toBeInTheDocument();
    }, { timeout: 5000 }); // Increased timeout for retries

    expect(global.fetch).toHaveBeenCalledTimes(4); // Initial attempt + 3 retries
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
  });

  test('displays loading during retries and then shows error', async () => {
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
          retryDelay: (attemptIndex) => (attemptIndex + 1) * 100, // e.g. 100ms, 200ms, 300ms for test
        },
      },
    });

    renderMarketplace({ products: [] }, queryClientForRetryTiming);

    // Initial loading
    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();
    expect(fetchAttempt).toBe(1); // First attempt

    // Advance time for first retry
    await jest.advanceTimersByTimeAsync(100); // delay for attempt 0 (retry 1)
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument(); // Still loading
    expect(fetchAttempt).toBe(2); // Second attempt (first retry)

    // Advance time for second retry
    await jest.advanceTimersByTimeAsync(200); // delay for attempt 1 (retry 2)
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument(); // Still loading
    expect(fetchAttempt).toBe(3); // Third attempt (second retry)

    // Advance time for third retry
    await jest.advanceTimersByTimeAsync(300); // delay for attempt 2 (retry 3)
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument(); // Still loading
    expect(fetchAttempt).toBe(4); // Fourth attempt (third retry)

    // After all retries, error message should appear
    await jest.advanceTimersByTimeAsync(100); // Allow final state update
    await waitFor(() => {
      expect(screen.getByText(/We couldn't load the marketplace products at this moment./i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/Loading products.../i)).not.toBeInTheDocument();
    expect(fetchAttempt).toBe(4); // Total 4 attempts

    jest.useRealTimers();
  });

  test('handles empty products from API correctly', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]), // API returns empty array
    });
    const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    renderMarketplace({ products: [] }, queryClient);

    expect(await screen.findByText(/Loading products.../i)).toBeInTheDocument();

    // Should show the "couldn't load" message as per component logic for empty final product list
    await waitFor(() => {
      expect(screen.getByText(/We couldn't load the marketplace products at this moment./i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

});
