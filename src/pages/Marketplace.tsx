import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProductCard from '@/components/ProductCard';
import { SkeletonCard } from '@/components/ui/skeleton';
import { ErrorState } from '@/components/jobs/applications/ErrorState';
import { ProductListing } from '@/types/listings';

/** Marketplace component props */
export interface MarketplaceProps {
  products?: ProductListing[]; // (kept for fallback but not used now)
}

/**
 * Marketplace component renders a list of products.
 * It attempts to use initial products provided by `getStaticProps`.
 * If initial products are empty, it falls back to client-side fetching using React Query,
 * including retry logic for resilience.
 */
export default function Marketplace({ products: _initialProducts = [] }: MarketplaceProps) {
  const router = useRouter();

  // SWR fetcher
  const fetcher = (url: string) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return res.json();
    });

  const { data, error } = useSWR<ProductListing[]>(
    '/api/marketplace/overview',
    fetcher,
    { shouldRetryOnError: true, errorRetryCount: 3 }
  );

  // Loading skeletons
  if (!data && !error) {
    return (
      <div className="container py-8" data-testid="marketplace-loading">
        <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container py-8">
        <ErrorState error={error.message || 'Unable to load products'} />
      </div>
    );
  }

  // Empty state
  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-white text-center">
        <p className="text-xl mb-2">No products found.</p>
      </div>
    );
  }

  // Success
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data
          .filter((p) => p && p.id)
          .map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onBuy={() => router.push(`/checkout/${p.id}`)}
            />
          ))}
      </div>
    </div>
  );
}
