import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { SERVICES } from "@/data/servicesData";
import { TrustedBySection } from "@/components/TrustedBySection";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

import useSWR from 'swr';
import { captureException } from "@/utils/sentry";
import { SkeletonCard } from '@/components/ui';
import { FilterSidebarSkeleton } from "@/components/skeletons/FilterSidebarSkeleton";
import { useDelayedError } from '@/hooks/useDelayedError';

// Filter options specific to services
const SERVICE_FILTERS = [
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

async function fetchServices(): Promise<ProductListing[]> {
  try {
    const res = await fetch('/api/services');
    if (!res.ok) {
      throw new Error(`Failed to fetch services: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as ProductListing[];
  } catch (err) {
    captureException(err);
    throw err;
  }
}

export default function ServicesPage() {
  const { data, error, isLoading, mutate } = useSWR<ProductListing[]>(
    '/api/services',
    fetchServices,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );
  const delayedError = useDelayedError(error);

  const listings = data || SERVICES;

  if (isLoading || (error && !delayedError)) {
    return (
      <div data-testid="loading-state" className="container mx-auto px-4 py-12" aria-busy="true">
        {/* Optional: you can add a skeleton for the page title if needed */}
        {/* <Skeleton className="h-8 w-1/3 mb-8" /> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterSidebarSkeleton />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (delayedError) {
    return (
      <div data-testid="error-state" className="py-12 text-center space-y-4">
        <p className="text-red-400">Failed to load services. {delayedError?.message}</p>
        <Button data-testid="retry-button" onClick={() => mutate()}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <ErrorBoundary>
    <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <DynamicListingPage
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />
      <div className="bg-zion-blue-dark py-8 text-center">
        <p className="text-white">
          New to Zion? Learn more{' '}
          <Link to="/about" className="text-zion-cyan underline">about our mission</Link>{' '}
          or <Link to="/contact" className="text-zion-cyan underline">contact our team</Link> for custom solutions.
        </p>
      </div>
      <TrustedBySection />
    </>
    </ErrorBoundary>
  );
}
