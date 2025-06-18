import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect } from 'react';
import { SkeletonCard } from '@/components/ui/skeleton';
import { ErrorState } from '@/components/jobs/applications/ErrorState';
import { ProductListing } from '@/types/listings';
import { fetchMarketplaceData } from '@/utils/fetchMarketplaceData';

/** Marketplace component props */
export interface MarketplaceProps {
  products?: ProductListing[]; // (kept for fallback but not used now)
}

/**
 * Marketplace component renders a list of products.
 * It uses the fetchMarketplaceData function with proper error handling.
 * Includes retry logic for resilience and fallback to empty array on errors.
 */
export default function Marketplace({ products: _initialProducts = [] }: MarketplaceProps) {
  const router = useRouter();
  const [showLongLoadingMessage, setShowLongLoadingMessage] = useState(false);

  // SWR fetcher using the new fetchMarketplaceData function
  const fetcher = () => fetchMarketplaceData({ limit: 20 });

  const { handleApiError, retryQuery } = useApiErrorHandling();
  
  const { data, error, isLoading } = useSWR<ProductListing[]>(
    '/api/marketplace/overview',
    fetcher,
    { 
      shouldRetryOnError: true, 
      errorRetryCount: 3,
      onError: (error) => {
        handleApiError(error, {
          customMessage: 'Failed to load marketplace products',
          showToast: false, // Don't show toast since we have inline error UI
        });
      }
    }
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading && (!data || data.length === 0) && !error) {
      timer = setTimeout(() => {
        setShowLongLoadingMessage(true);
      }, 15000); // 15 seconds
    }

    return () => {
      clearTimeout(timer);
      // Reset if loading completes or error occurs before timer fires
      if (!isLoading || (data && data.length > 0) || error) {
        setShowLongLoadingMessage(false);
      }
    };
  }, [isLoading, data, error]);

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

  // Error state with retry functionality
  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <ErrorState error={error.message || 'Unable to load products'} />
          <button
            onClick={() => retryQuery(['/api/marketplace/overview'])}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state - this will be the fallback when fetchMarketplaceData returns []
  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-white text-center">
        <p className="text-xl mb-2">No products found.</p>
        <p className="text-sm text-muted-foreground">
          {showLongLoadingMessage ? 'This is taking longer than expected.' : 'Try refreshing the page.'}
        </p>
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
