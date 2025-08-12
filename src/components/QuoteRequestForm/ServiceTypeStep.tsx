import { useEffect, useState } from "react";
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from 'lucide-react';

import { ListingScoreCard } from "@/components/ListingScoreCard";
import { captureException } from "@/utils/sentry";
import Skeleton from "@/components/ui/skeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { useIsMounted } from "@/hooks/useIsMounted";
import { z } from "zod";
import {logErrorToProduction} from '@/utils/productionLogger';


const listingSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  image: z.string().optional(),
});

const listingsSchema = z.array(listingSchema);

interface ServiceTypeStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}


export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 300);
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useIsMounted();

  // Fetch services when the service type or query changes
  useEffect(() => {
    if (!formData.serviceType) {
      setListings([]);
      return;
    }

    const fetchServices = async () => {
      setLoading(true);
      setError(null);
      const url = `/api/public/services?category=${encodeURIComponent(
        formData.serviceType
      )}&q=${encodeURIComponent(debouncedQuery)}`;
      const maxRetries = 3;

      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch');
          const data = await response.json();
          const parsed = listingsSchema.safeParse(data);
          if (!parsed.success) throw new Error('Invalid response');
          if (isMounted.current) {
            setListings(parsed.data as ListingItem[]);
            setError(null);
          }
          return;
        } catch (err) {
          if (attempt === maxRetries - 1) {
            if (process.env.NODE_ENV === 'development') {
              logErrorToProduction('Failed to load services:', { data: err });
            } else {
              captureException(err);
            }
            if (isMounted.current) {
              setListings([]);
              setError('Failed to load services');
            }
          } else {
            await new Promise((res) => setTimeout(res, Math.pow(2, attempt) * 500));
          }
        } finally {
          if (isMounted.current) setLoading(false);
        }
      }
    };

    fetchServices();
  }, [formData.serviceType, debouncedQuery, isMounted]);
  
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
  
  const sourceListings = listings;

  const filteredListings = sourceListings.filter(item => {
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
            <div className="text-center text-red-400 text-sm">{error}</div>
          )}
          
          <div className="grid grid-cols-1 gap-4 mt-4" aria-busy={loading}>
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
