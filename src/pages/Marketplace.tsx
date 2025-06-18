import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/ProductCard';

// Define a more specific product type based on API response.
// This interface should mirror the structure of products returned by the
// `/api/marketplace/products` endpoint, including any aggregated stats.
// `ProductModel` properties (like id, name, description, price) are assumed
// to be part of this structure, along with `averageRating`, `reviewCount`,
// and `title` (which is often derived from `p.name` in the API).
interface ProductWithStats {
  id: string; // Unique identifier for the product
  name: string; // Name of the product
  description?: string; // Optional: Detailed description of the product
  price?: number; // Optional: Price of the product
  imageUrl?: string; // Optional: URL for the product image
  averageRating: number | null; // Average user rating, can be null if no ratings
  reviewCount: number; // Total number of reviews
  title: string; // Display title for the product, often same as product name
  [key: string]: any; // Allows for other dynamic properties if necessary
}

/**
 * Fetches products from the API endpoint.
 * This function is used by React Query's `useQuery` hook.
 * Network errors are logged, and the error is re-thrown to be handled by React Query.
 * @returns A promise that resolves to an array of ProductWithStats.
 */
async function fetchProducts(): Promise<ProductWithStats[]> {
  try {
    // Attempt to fetch products from the backend API.
    const res = await fetch('/api/marketplace/products?limit=20');
    if (!res.ok) {
      // Attempt to get more details from the response body if possible
      const errorBody = await res.text();
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`, errorBody);
      throw new Error(`Failed to fetch products: ${res.status} - ${errorBody || res.statusText}`);
    }
    return res.json() as Promise<ProductWithStats[]>;
  } catch (error) {
    // During static export, allow build to succeed with empty data
    if (process.env.NEXT_PHASE === 'phase-export') {
      console.warn('Static export: fetchProducts failed, returning empty array');
      return [];
    }
    // Log the originally caught error or a new one if this is from the fetch operation itself.
    console.error('Error in fetchProducts:', error instanceof Error ? error.message : error);
    throw error; // Re-throw for React Query to handle and trigger error state.
  }
}

export interface MarketplaceProps {
  products?: ProductWithStats[]; // Products passed from getStaticProps (can be empty on error or for client fetch)
}

/**
 * Marketplace component renders a list of products.
 * It attempts to use initial products provided by `getStaticProps`.
 * If initial products are empty, it falls back to client-side fetching using React Query,
 * including retry logic for resilience.
 */
export default function Marketplace({ products: initialProducts = [] }: MarketplaceProps) {
  const router = useRouter();

  // useQuery hook from React Query to fetch products client-side.
  const {
    data: products = [], // `data` is the fetched products, defaults to an empty array if undefined.
    isLoading,            // True if the query is in its initial loading state (no data yet).
    error,                // Contains error object if the query fails.
    isFetching,           // True if the query is currently fetching, including background refetches or retries.
  } = useQuery<ProductWithStats[], Error>({ // Explicitly typing the query for better safety.
    queryKey: ['products'], // Unique key for this query, used for caching.
    queryFn: fetchProducts, // The function that performs the data fetching.

    // `initialData`: If `initialProducts` (from getStaticProps) are available and not empty,
    // they are used as the initial data for the query. This avoids an immediate client-side fetch.
    // If `initialProducts` is empty, `initialData` is `undefined`, prompting React Query to fetch.
    initialData: initialProducts && initialProducts.length > 0 ? initialProducts : undefined,

    // `retry`: Number of retries React Query will attempt after an initial failed fetch.
    // Here, it's set to 3, meaning 1 initial attempt + 3 retries = 4 total attempts.
    retry: 3,

    // `retryDelay`: Defines the delay between retry attempts.
    // Uses exponential backoff: 1st retry after 1s, 2nd after 2s, 3rd after 4s.
    // Capped at 30 seconds to prevent excessively long delays.
    retryDelay: (attemptIndex) => Math.min(1000 * Math.pow(2, attemptIndex), 30000),

    // `enabled`: Controls whether the query automatically runs on mount.
    // If `initialProducts` is empty (e.g., `getStaticProps` failed or skipped), this is true,
    // enabling client-side fetching. Otherwise, it's false, relying on `initialData`.
    enabled: !initialProducts || initialProducts.length === 0,
  });

  // Conditional Rendering Logic:
  // 1. Loading State: Displayed if products are being fetched for the first time
  //    or during background refetches/retries when no data is yet available.
  if ((isLoading || isFetching) && (!products || products.length === 0)) {
    return <div className="p-6 text-white text-center">Loading products...</div>;
  }

  // 2. Error State: Displayed if all fetch attempts (including retries) fail
  //    AND there are no products (either from initialProps or a previous successful fetch).
  if (error && (!products || products.length === 0)) {
    return (
      <div className="p-6 text-white text-center">
        <p className="text-xl mb-4">We couldn't load the marketplace products at this moment.</p>
        <p className="mb-2">Please try again later.</p>
        {/* Note: A manual refetch button could be added here by calling `refetch()` from `useQuery`.
            For this implementation, we stick to the specified fallback message. */}
      </div>
    );
  }

  // 3. Empty/Fallback State: If, after all attempts, products are still empty (e.g., API returned empty)
  //    or if initial products were empty and fetch failed (already covered by error state, but good as a catch-all).
  if (!products || products.length === 0) {
    return (
      <div className="p-6 text-white text-center">
        <p className="text-xl mb-4">We couldn't load the marketplace products at this moment.</p>
        <p className="mb-2">Please try again later.</p>
      </div>
    );
  }

  // 4. Success State: If products are available (either from `initialProducts` or successful client fetch),
  //    render the list of products.
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter(p => p && p.id) // Filter out any potentially malformed product data.
          .map((p) => (
            <ProductCard
              key={p.id}
              product={p} // Pass the full product object to ProductCard.
              onBuy={() => router.push(`/checkout/${p.id}`)} // Navigate to checkout page on buy.
            />
          ))}
      </div>
    </div>
  );
}
