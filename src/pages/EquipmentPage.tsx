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
  const { data } = await apiClient.get('/equipment');
  return data;
}

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<ProductListing[]>([]); // Initial empty or fallback
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
  }, [fetchedEquipment]);

  const {
    trigger: fetchRecommendations,
    isMutating: isFetchingRecommendations,
  } = useSWRMutation(
    "/api/equipment/recommendations",
    (
      url: string,
      { arg }: { arg: { userId: string } }
    ) =>
      fetch(`${url}?userId=${arg.userId}`).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recommendations");
        return res.json();
      })
  );

  // Interval for adding random equipment - might need adjustment
  // This will add to the local 'equipment' state, which is initially populated by useQuery
  useEffect(() => {
    const interval = setInterval(() => {
      setEquipment((prev) => [...prev, generateRandomEquipment()]);
    }, 120000); // add new equipment every 2 minutes
    return () => clearInterval(interval);
  }, []);

  const handleRecommendations = async () => {
    if (!user) {
      navigate('/login?next=/equipment&reco=1');
      return;
    }
    try {
      const data = await fetchRecommendations({ userId: user.id });
      setEquipment(data as ProductListing[]);
      toast({ title: 'Showing personalized recommendations' });
    } catch (err) {
      console.error(err);
      toast({ title: 'Failed to load recommendations', variant: 'destructive' });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('reco') === '1' && user) {
      handleRecommendations();
    }
  }, [user, location.search]);

  if (isLoadingEquipment || (equipmentError && !delayedError)) {
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

  if (delayedError) {
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
          listings={equipment} // This 'equipment' state is updated by useQuery and the interval
          categoryFilters={EQUIPMENT_FILTERS}
          initialPrice={{ min: 400, max: 50000 }}
          detailBasePath="/equipment"
        />
      )}
    </>
  );
}
