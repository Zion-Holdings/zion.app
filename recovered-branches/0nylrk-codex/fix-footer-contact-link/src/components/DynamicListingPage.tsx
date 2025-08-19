import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GradientHeading } from "@/components/GradientHeading";
import { ProductListingCard } from "@/components/ProductListingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { ProductListing, ListingView } from "@/types/listings";
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PriceRange {
  min: number;
  max: number;
}

interface DynamicListingPageProps {
  title: string;
  description: string;
  categorySlug: string;
  listings: ProductListing[];
  categoryFilters: { label: string; value: string }[];
  initialPrice?: PriceRange;
}

export function DynamicListingPage({
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [view, setView] = useState<ListingView>("grid");
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice);

  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null);
    if (listingsWithPrice.length > 0) {
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0));
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0));
      setPriceRange({ min, max });
    }
  }, [allListings]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min,
    initialPrice.max
  ]);

  const handleSliderChange = (values: number[]) => {
    setCurrentPriceFilter([values[0], values[1]]);
  };

  const filteredListings = allListings.filter(listing => {
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 
      listing.price <= currentPriceFilter[1]
    );
    
    const matchesRating = 
      selectedRating === null || 
      (listing.rating !== undefined && listing.rating >= selectedRating);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true);
    
    const listing = allListings.find(item => item.id === listingId);
    
    setTimeout(() => {
      setIsLoading(false);
      if (listing) {
        toast({
          title: "Quote Requested",
          description: `Your quote request for ${listing.title} has been sent.`
        });
        
        navigate("/request-quote", {
          state: { 
            serviceType: categorySlug, 
            specificItem: {
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0]
            }
          }
        });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Category
                </label>
                <Select 
                  value={selectedCategory} 
                  onValueChange={(value: string) => {
                    console.log("Category selected:", value);
                    setSelectedCategory(value);
                  }}
                >
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
                    {categoryFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value} className="text-white">
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Price Range
                </label>
                <div className="mt-6 px-2">
                  <Slider
                    defaultValue={[priceRange.min, priceRange.max]}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        console.log("Rating selected:", rating);
                        setSelectedRating(rating);
                      }}
                      className={`${
                        selectedRating === rating 
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" 
                          : "border-zion-blue-light text-zion-slate-light"
                      }`}
                    >
                      {rating === null ? (
                        "Any"
                      ) : (
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />
                          ))}
                          <span className="ml-1">& Up</span>
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                onClick={() => {
                  console.log("Resetting filters");
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
                  setSelectedRating(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search listings..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      console.log("Search query:", e.target.value);
                      setSearchQuery(e.target.value);
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                  />
                </div>
                
                <div className="flex items-center gap-2 ml-auto">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("grid")}
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("list")}
                    className={`${view === "list" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {filteredListings.length} results
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {isLoading ? (
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
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
            ) : filteredListings.length > 0 ? (
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {filteredListings.map((listing) => (
                  <ProductListingCard 
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);
                    setSelectedRating(null);
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}