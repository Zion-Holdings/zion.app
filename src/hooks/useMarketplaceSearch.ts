
import { useState, useMemo, useEffect } from "react";
import { ProductListing } from "@/types/listings";
import { SearchSuggestion, FilterOptions } from "@/types/search";
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData";
import { useDebounce } from "./useDebounce"; // Import the debounce hook

export function useMarketplaceSearch() {
  // Immediate search query from input
  const [immediateSearchQuery, setImmediateSearchQuery] = useState("");
  
  // Debounced search query
  const debouncedSearchQuery = useDebounce(immediateSearchQuery, 300);

  // This state will now hold the debounced search query for filtering
  // and will be what's exposed as `searchQuery` to the consuming component.
  // We need to effectively replace the old `searchQuery`'s role with `debouncedSearchQuery`
  // for filtering, but components might still expect a `searchQuery` prop that reflects the input value.
  // Let's rename the exposed `searchQuery` to `currentSearchInput` and use `debouncedSearchQuery` for filtering.
  // Or, more simply, keep `searchQuery` as the debounced value and `setSearchQuery` updates the immediate one.

  const [searchQuery, setSearchQueryInternal] = useState(""); // This will store the debounced value

  useEffect(() => {
    setSearchQueryInternal(debouncedSearchQuery);
  }, [debouncedSearchQuery]);


  // Filter states
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  // Generate search suggestions and filter options
  const searchSuggestions: SearchSuggestion[] = useMemo(
    () => generateSearchSuggestions(),
    [],
  );
  const filterOptions: FilterOptions = useMemo(
    () => generateFilterOptions(),
    [],
  );
  
  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS.filter(listing => {
      // Search query filter
      const matchesSearch = !searchQuery || 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Product type filter
      const matchesProductType = selectedProductTypes.length === 0 || 
        selectedProductTypes.includes(listing.category);
      
      // Location filter
      const matchesLocation = selectedLocations.length === 0 || 
        (listing.location && selectedLocations.includes(listing.location));
      
      // Availability filter
      const matchesAvailability = selectedAvailability.length === 0 || 
        (listing.availability && selectedAvailability.includes(listing.availability));
      
      // Rating filter
      const matchesRating = selectedRating === null || 
        (listing.rating !== undefined && listing.rating >= selectedRating);
      
      return matchesSearch && 
        matchesProductType && 
        matchesLocation && 
        matchesAvailability && 
        matchesRating;
    });
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);
  
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes((prev: string[]) =>
          prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
        );
        break;
      case 'locations':
        setSelectedLocations((prev: string[]) =>
          prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value]
        );
        break;
      case 'availability':
        setSelectedAvailability((prev: string[]) =>
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
        );
        break;
      default:
        break;
    }
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setImmediateSearchQuery(""); // Clear immediate input
    // setSearchQueryInternal(""); // Debounced version will update via useEffect
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
  };
  
  return {
    searchQuery: immediateSearchQuery, // Expose the immediate value for the input field
    setSearchQuery: setImmediateSearchQuery, // Setter updates the immediate value
    // The actual filtering logic will use `searchQuery` (which is `debouncedSearchQuery` via useEffect)
    searchSuggestions,
    selectedProductTypes,
    selectedLocations,
    selectedAvailability,
    selectedRating,
    setSelectedRating,
    filteredListings,
    handleFilterChange,
    clearAllFilters,
    filterOptions
  };
}
