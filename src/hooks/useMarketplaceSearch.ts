
import { useState, useMemo } from "react";
import { ProductListing } from "@/types/listings";
import { SearchSuggestion, FilterOptions } from "@/types/search";
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData";

export function useMarketplaceSearch() {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter states
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  // Generate search suggestions and filter options
  const searchSuggestions = useMemo<SearchSuggestion[]>(() => generateSearchSuggestions(), []);
  const filterOptions = useMemo<FilterOptions>(() => generateFilterOptions(), []);
  
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
        setSelectedProductTypes(prev => 
          prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
        );
        break;
      case 'locations':
        setSelectedLocations(prev => 
          prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value]
        );
        break;
      case 'availability':
        setSelectedAvailability(prev => 
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
        );
        break;
      default:
        break;
    }
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
  };
  
  return {
    searchQuery,
    setSearchQuery,
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
