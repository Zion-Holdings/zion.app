import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { useEffect, useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { generateRandomEquipment } from "@/utils/generateRandomEquipment";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import Skeleton, { SkeletonCard } from "@/components/ui/skeleton"; // Import SkeletonCard
import { FilterSidebarSkeleton } from "@/components/skeletons/FilterSidebarSkeleton"; // Import FilterSidebarSkeleton
import { useDelayedError } from '@/hooks/useDelayedError';
import ErrorBoundary from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary

// The EQUIPMENT_LISTINGS constant has been removed as it was commented out
// and the page primarily relies on API calls and dynamic data generation.
// This helps simplify the file and eliminate potential parsing issues.

const EQUIPMENT_FILTERS = [
  { label: "Servers", value: "Servers" },
  { label: "Networking", value: "Networking" },
  { label: "Power", value: "Power" },
  { label: "Cooling", value: "Cooling" },
  { label: "Storage", value: "Storage" },
  { label: "Security", value: "Security" },
  { label: "Management", value: "Management" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "AI", value: "AI" },
  { label: "Robotics", value: "Robotics" },
];

export async function fetchEquipment(): Promise<ProductListing[]> {
  try {
    const { data } = await axios.get('/api/equipment', { timeout: 15000 });
    return data;
  } catch (error: any) {
    console.error("Raw error object in fetchEquipment:", error);
    
    let errorMessage = 'Failed to fetch equipment';
    
    if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
      errorMessage = 'Request timed out - please try again';
    } else if (error.response) {
      console.error("Error response data in fetchEquipment:", error.response.data);
      errorMessage = error.response.data?.error || `Server error: ${error.response.status}`;
    } else if (error.request) {
      errorMessage = 'Network error - please check your connection';
    }
    
    console.error("Failed to fetch equipment:", errorMessage);
    
    // Create a more informative error object
    const enhancedError = new Error(errorMessage);
    enhancedError.name = 'EquipmentFetchError';
    throw enhancedError;
  }
}

export default function EquipmentPage() {
  // Initialize with undefined or null to better distinguish between empty data and loading states
  const [equipment, setEquipment] = useState<ProductListing[] | undefined>(undefined);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    data: fetchedEquipment,
    error: equipmentError,
    isLoading: isLoadingEquipment,
    refetch: refetchEquipment
  } = useQuery<ProductListing[], Error>({
    queryKey: ['equipment'],
    queryFn: fetchEquipment,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * Math.pow(2, attemptIndex), 10000),
    // Add 30-second timeout
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
  const delayedError = useDelayedError(equipmentError);

  useEffect(() => {
    if (fetchedEquipment && Array.isArray(fetchedEquipment)) {
      setEquipment(fetchedEquipment);
    }
    // Added equipmentError to dependency array for useEffect,
    // so if an error occurs, we can potentially clear existing equipment or handle error state.
  }, [fetchedEquipment, equipmentError]);

  const {
    trigger: fetchRecommendations,
    isMutating: isFetchingRecommendations,
  } = useSWRMutation(
    "/api/equipment/recommendations",
    async ( // Added async here
      url: string,
      { arg }: { arg: { userId: string } }
    ): Promise<ProductListing[]> => { // Added return type
      const res = await fetch(`${url}?userId=${arg.userId}`); // Added await
      if (!res.ok) {
        // Enhanced error handling for failed recommendations fetch
        const errorData = await res.json().catch(() => ({ message: "Failed to fetch recommendations, and error response is not JSON."}));
        console.error("Raw error object in fetchRecommendations:", errorData);
        // The errorData is already logged, but this is to ensure it's captured before throwing.
        console.error("Recommendation fetch error:", errorData);
        throw new Error(errorData.message || "Failed to fetch recommendations");
      }
      return res.json();
    }
  );

  // Interval for adding random equipment
  // useEffect(() => {
  //   // Only set interval if equipment is already loaded/exists to prevent adding to undefined
  //   if (equipment && equipment.length > 0) {
  //     const interval = setInterval(() => {
  //       setEquipment((prev = []) => [...prev, generateRandomEquipment()]); // Ensure prev is an array
  //     }, 120000);
  //     return () => clearInterval(interval);
  //   }
  // }, [equipment]); // Added equipment to dependency array
  // Removed the random equipment generation interval to rely on API data.

  const handleRecommendations = async () => {
    if (!user) {
      navigate('/login?next=/equipment&reco=1');
      return;
    }
    try {
      // Ensure data is correctly typed or cast if necessary
      const data: ProductListing[] = await fetchRecommendations({ userId: user?.id ?? "" });
      setEquipment(data); // data should be ProductListing[]
      toast({ title: 'Showing personalized recommendations' });
    } catch (err: any) { // Typed error
      console.error("Error in handleRecommendations:", err);
      toast({ title: err.message || 'Failed to load recommendations', variant: 'destructive' });
    }
  };

  // Make sure handleRecommendations is memoized or stable if it's a dependency elsewhere, though not strictly required here.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('reco') === '1' && user) {
      handleRecommendations();
    }
    // Added handleRecommendations to dependency array, ensure it's stable (e.g. via useCallback if it were passed down)
    // For now, this is okay as it's defined in the same scope.
  }, [user, location.search, handleRecommendations]);

  // Memoize skeleton placeholders to avoid re-render loop
  const skeletonPlaceholders = useMemo(
    () => Array.from({ length: 6 }).map((_, index) => (
      <SkeletonCard key={index} />
    )),
    []
  );

  const aiRecommendationSkeletons = useMemo(
    () => [1, 2, 3, 4].map((i) => (
      <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">
        <Skeleton className="h-48 w-full bg-zion-blue-light/20" />
        <div className="p-4">
          <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />
          <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />
          <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />
          <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />
          <div className="flex justify-between items-center pt-4">
            <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />
            <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />
          </div>
        </div>
      </div>
    )),
    []
  );

  // Updated loading condition to specifically check for equipment being undefined
  if (isLoadingEquipment && equipment === undefined) {
    return (
      <div data-testid="loading-state-equipment" className="container mx-auto p-4 space-y-4" aria-busy="true">
        {/* Skeleton for the top button (e.g., AI Recommendations) */}
        <div className="flex justify-end mb-6">
            <Skeleton className="h-10 w-48" />
        </div>
        {/* Main layout for sidebar and cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterSidebarSkeleton />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {skeletonPlaceholders}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If there's an error and we don't have any equipment to show (even stale), show error.
  if (delayedError && (!fetchedEquipment || !Array.isArray(fetchedEquipment) || fetchedEquipment.length === 0)) {
    return (
      <div data-testid="error-state-equipment" className="py-12 text-center space-y-4">
        <p className="text-red-400">Failed to load equipment: {delayedError.message}</p>
        <Button data-testid="retry-button-equipment" onClick={() => refetchEquipment()}>
          Retry
        </Button>
      </div>
    );
  }

  if (!isLoadingEquipment && !equipmentError && (!equipment || equipment.length === 0) && !isFetchingRecommendations) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-white mb-4">Equipment Catalog Currently Empty</h2>
        <p className="text-zion-slate-light max-w-md mx-auto">
          No equipment listings are currently available. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex justify-end">
          <Button onClick={handleRecommendations} disabled={isFetchingRecommendations} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
            {isFetchingRecommendations ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4 mr-2" />
            )}
            AI Recommendations
          </Button>
        </div>
      </div>
      <ErrorBoundary>
        {isFetchingRecommendations ? (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiRecommendationSkeletons}
          </div>
        ) : (
          <DynamicListingPage
            title="Datacenter Equipment"
            description="Browse professional hardware for modern datacenter and network deployments."
            categorySlug="equipment"
            listings={equipment || []} // Pass empty array if equipment is undefined to prevent errors in DynamicListingPage
            categoryFilters={EQUIPMENT_FILTERS}
            initialPrice={{ min: 400, max: 50000 }}
            detailBasePath="/equipment"
          />
        )}
      </ErrorBoundary>
    </>
  );
}
