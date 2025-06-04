
import { useState, useMemo, useEffect } from "react";
import { ProductListing } from "@/types/listings";
import { SearchSuggestion, FilterOptions } from "@/types/search";
// import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData";
import { useDebounce } from "./useDebounce"; // Import the debounce hook

// TODO: These could be fetched from the API or generated from listings in the future
const staticSearchSuggestions: SearchSuggestion[] = [
  { id: "1", type: "recent", text: "Modern web app" },
  { id: "2", type: "recent", text: "Data analysis script" },
  { id: "3", type: "saved", text: "E-commerce site" },
  { id: "4", type: "saved", text: "Mobile game" },
];

const staticFilterOptions: FilterOptions = {
  productTypes: [
    { id: "app", label: "Web App" },
    { id: "script", label: "Script" },
    { id: "site", label: "Website" },
    { id: "game", label: "Game" },
    { id: "bot", label: "Bot" },
  ],
  locations: [
    { id: "us", label: "United States" },
    { id: "eu", label: "Europe" },
    { id: "asia", label: "Asia" },
    { id: "online", label: "Online" },
  ],
  availability: [
    { id: "immediate", label: "Immediate" },
    { id: "1-week", label: "Within 1 Week" },
    { id: "1-month", label: "Within 1 Month" },
  ],
  ratings: [
    { id: "5-stars", label: "5 Stars", value: 5 },
    { id: "4-stars", label: "4 Stars & Up", value: 4 },
    { id: "3-stars", label: "3 Stars & Up", value: 3 },
  ],
};


export function useMarketplaceSearch() {
  // Immediate search query from input
  const [immediateSearchQuery, setImmediateSearchQuery] = useState("");

  // Debounced search query
  const debouncedSearchQuery = useDebounce(immediateSearchQuery, 300);

  const [searchQuery, setSearchQueryInternal] = useState(""); // This will store the debounced value

  // API Data states
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setSearchQueryInternal(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // TODO: Add query parameters for search and filtering to the API call
        const response = await fetch(`/api/products?q=${searchQuery}`);
        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }
        const data: ProductListing[] = await response.json();
        setListings(data);
      } catch (e) {
        setError(e as Error);
        console.error("Failed to fetch products:", e);
        setListings([]); // Clear listings on error or set to a default error state
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch when the component mounts or debouncedSearchQuery changes
    // For now, we fetch all and filter client-side.
    // Ideally, the API would handle filtering and search.
    fetchProducts();
  }, [searchQuery]); // searchQuery here is the debounced value


  // Filter states
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Use static suggestions and options for now
  const searchSuggestions: SearchSuggestion[] = useMemo(
    () => staticSearchSuggestions,
    [],
  );
  const filterOptions: FilterOptions = useMemo(
    () => staticFilterOptions,
    [],
  );

  // Filter listings based on current search query and filters
  // This filtering is now client-side after fetching all listings.
  // For larger datasets, filtering should ideally be done server-side.
  const filteredListings = useMemo(() => {
    // Use `listings` from API data instead of MARKETPLACE_LISTINGS
    return listings.filter(listing => {
      // Search query filter (applied client-side for now, ideally server-side)
      const matchesSearch = !searchQuery || // searchQuery is the debounced value
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags && listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

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
  }, [listings, searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);

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
    searchSuggestions, // Still using static/derived for now
    selectedProductTypes,
    selectedLocations,
    selectedAvailability,
    selectedRating,
    setSelectedRating,
    filteredListings, // Now based on API data + client-side filters
    handleFilterChange,
    clearAllFilters,
    filterOptions, // Still using static/derived for now
    isLoading, // Expose loading state
    error // Expose error state
  };
}
