import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/apiClient";
import { generateRandomEquipment } from "@/utils/generateRandomEquipment";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import { Skeleton } from "@/components/ui/skeleton";
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

async function fetchEquipment(): Promise<ProductListing[]> {
  // Added a try-catch block for better error handling during API call
  try {
    const { data } = await apiClient.get('/equipment');
    return data;
  } catch (error) {
    console.error("Failed to fetch equipment:", error);
    // Propagate the error or return an empty array/handle as per application's error strategy
    throw error;
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
  });
  const delayedError = useDelayedError(equipmentError);

  useEffect(() => {
    if (fetchedEquipment) {
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
      const data: ProductListing[] = await fetchRecommendations({ userId: user.id });
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

  // Updated loading condition to specifically check for equipment being undefined
  if (isLoadingEquipment && equipment === undefined) {
    return (
      <div data-testid="loading-state-equipment" className="container mx-auto p-4 space-y-4">
        <div className="flex justify-end mb-6">
            <Skeleton className="h-10 w-48 bg-zion-blue-light/20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">
              <Skeleton className="h-48 w-full bg-zion-blue-light/20" />
              <div className="p-4">
                <Skeleton className="h-6 w-2/3 mb-2 bg-zion-blue-light/20" />
                <Skeleton className="h-4 w-full mb-1 bg-zion-blue-light/20" />
                <Skeleton className="h-4 w-5/6 mb-3 bg-zion-blue-light/20" />
                <Skeleton className="h-4 w-1/2 mb-4 bg-zion-blue-light/20" />
                <div className="flex justify-between items-center pt-4">
                  <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />
                  <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // If there's an error and we don't have any equipment to show (even stale), show error.
  if (delayedError && (!equipment || equipment.length === 0)) {
    return (
      <div data-testid="error-state-equipment" className="py-12 text-center space-y-4">
        <p className="text-red-400">Failed to load equipment: {delayedError.message}</p>
        <Button data-testid="retry-button-equipment" onClick={() => refetchEquipment()}>
          Retry
        </Button>
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
        {isFetchingRecommendations ? ( // This is the skeleton for AI recommendations, keep as is
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
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
            ))}
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
