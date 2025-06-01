
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { SERVICES } from "@/data/servicesData";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "@/services/apiClient";
import { captureException } from "@/utils/sentry";
import { Skeleton } from "@/components/ui/skeleton";

// Filter options specific to services
const SERVICE_FILTERS = [
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

async function fetchServices(pageParam?: number) {
  try {
    const url = pageParam ? `/services?page=${pageParam}` : "/services";
    const res = await apiClient.get(url);
    // Assuming API returns { data: ProductListing[], nextPage: number | null }
    return res.data as { data: ProductListing[]; nextPage: number | null };
  } catch (err) {
    captureException(err);
    throw err;
  }
}

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICES);

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch
  } = useInfiniteQuery<{ data: ProductListing[]; nextPage: number | null }, Error>({
    queryKey: ['services'],
    queryFn: ({ pageParam = 1 }) => fetchServices(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });

  useEffect(() => {
    if (data) {
      const allListings = data.pages.flatMap(page => page.data);
      setListings(allListings);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const buffer = 150; // Pixels before bottom
      const isAtBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - buffer;

      if (isAtBottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div data-testid="loading-state" className="p-4 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-[120px] w-full" />
        <Skeleton className="h-[120px] w-full" />
        <Skeleton className="h-[120px] w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="error-state" className="py-12 text-center space-y-4">
        <p className="text-red-400">Failed to load services. {error?.message}</p>
        <Button data-testid="retry-button" onClick={() => refetch()}>
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
        // Pass down fetchNextPage and hasNextPage if DynamicListingPage handles infinite scroll
        // fetchNextPage={fetchNextPage}
        // hasNextPage={hasNextPage}
        // isFetchingNextPage={isFetchingNextPage}
      />
      {isFetchingNextPage && (
        <div className="text-center py-4">
          <Skeleton className="h-8 w-32 mx-auto" />
        </div>
      )}
      <TrustedBySection />
    </>
    </ErrorBoundary>
  );
}
