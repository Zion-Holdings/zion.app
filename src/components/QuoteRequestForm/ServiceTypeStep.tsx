import { useEffect, useState, useCallback } from "react";
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ListingScoreCard } from "@/components/ListingScoreCard";
import { SAMPLE_SERVICES } from "@/data/sampleServices";
import { Skeleton } from "@/components/ui/skeleton";

interface ServiceTypeStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}


export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setListings(data as ListingItem[]);
    } catch (err) {
      console.error('Failed to fetch services', err);
      setError('Failed to load services');
      setListings(SAMPLE_SERVICES);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch services once on mount
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);
  
  const handleTypeSelect = (type: ServiceType) => {
    updateFormData({ serviceType: type });
  };
  
  const handleItemSelect = (item: ListingItem) => {
    updateFormData({ 
      specificItem: item,
      serviceCategory: item.category,
      serviceType: item.category.toLowerCase() as ServiceType
    });
  };
  
  const filteredListings = (listings.length ? listings : SAMPLE_SERVICES).filter(item => {
    // Filter by category only when a service type has been selected
    if (formData.serviceType !== "") {
      const categoryMatch = item.category.toLowerCase() === formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;
    }
    
    if (searchQuery.trim() === "") return true;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card 
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("service")}
          >
            <h4 className="font-medium text-white">Services</h4>
            <p className="text-sm text-zion-slate-light">AI solutions, consulting, development</p>
          </Card>
          
          <Card 
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("talent")}
          >
            <h4 className="font-medium text-white">Talent</h4>
            <p className="text-sm text-zion-slate-light">AI specialists, developers, consultants</p>
          </Card>
          
          <Card 
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("equipment")}
          >
            <h4 className="font-medium text-white">Equipment</h4>
            <p className="text-sm text-zion-slate-light">Servers, workstations, specialized hardware</p>
          </Card>
        </div>
      </div>
      
      {formData.serviceType && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
              placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple"
            />
          </div>

          {error && (
            <Alert variant="destructive" className="text-center">
              <AlertDescription>
                {error}
                <Button size="sm" className="ml-2" onClick={fetchServices}>
                  Retry
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
          <div className="grid grid-cols-1 gap-4 mt-4">
            {loading ? (
              <>
                <Skeleton className="h-[120px] w-full" />
                <Skeleton className="h-[120px] w-full" />
                <Skeleton className="h-[120px] w-full" />
              </>
            ) : filteredListings.length > 0 ? (
              filteredListings.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`cursor-pointer transition-all ${
                    formData.specificItem?.id === item.id ? "ring-2 ring-zion-purple rounded-lg" : ""
                  }`}
                >
                  <ListingScoreCard
                    title={item.title}
                    category={item.category}
                    aiScore={Math.floor(Math.random() * 30) + 70}
                    rating={Math.floor(Math.random() * 2) + 3}
                    reviewCount={Math.floor(Math.random() * 50) + 10}
                    image={item.image}
                    description="Sample listing description"
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-zion-slate-light">
                No items found. Please try a different search.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
