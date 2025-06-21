import useSWR from 'swr';
import { ProductListing } from '@/types/listings';
import { ProductListingCard } from '@/components/ProductListingCard';
import ErrorBoundary from '@/components/GlobalErrorBoundary';
import { SkeletonCard } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { captureException } from '@/utils/sentry';

async function fetchServices(): Promise<ProductListing[]> {
  try {
    const res = await fetch('/api/services');
    if (!res.ok) {
      // Gracefully handle 404 by returning an empty list
      if (res.status === 404) {
        return [];
      }
      throw new Error(`Failed to fetch services: ${res.status}`);
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error(`Invalid content type: ${contentType}`);
    }

    return (await res.json()) as ProductListing[];
  } catch (err) {
    captureException(err);
    throw err;
  }
}

export default function ServicesList() {
  const { data, error, mutate } = useSWR<ProductListing[]>(
    '/api/services',
    fetchServices,
    { shouldRetryOnError: false }
  );

  if (!data && !error) {
    return (
      <div
        data-testid="services-loading"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="services-error" className="text-center space-y-4">
        <p className="text-red-400">Failed to load services.</p>
        <Button onClick={() => mutate()}>Retry</Button>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div
        data-testid="services-list"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {data?.map((service) => (
          <ProductListingCard key={service.id} listing={service} />
        ))}
      </div>
    </ErrorBoundary>
  );
}
