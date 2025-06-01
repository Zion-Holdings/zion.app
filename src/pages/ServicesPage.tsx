import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { SERVICES } from "@/data/servicesData";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

import useSWR from 'swr';
import { captureException } from "@/utils/sentry";
import { Skeleton } from "@/components/ui/skeleton";
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
      <div data-testid="loading-state" className="p-4 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-[120px] w-full" />
        <Skeleton className="h-[120px] w-full" />
        <Skeleton className="h-[120px] w-full" />
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
      <TrustedBySection />
    </>
    </ErrorBoundary>
  );
}
