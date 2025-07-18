<<<<<<< HEAD
import { useState, useMemo, useEffect } from 'react';
import type { ProductListing } from '@/types/listings'
import type { SearchSuggestion, FilterOptions } from '@/types/search'
// import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData"
import { useDebounce } from './useDebounce // Import the debounce hook;;
import { logErrorToProduction } from '@/utils/productionLogger;;
'
// Remove staticSearchSuggestions and staticFilterOptions. Fetch suggestions and filter options from real API/data source instead.;
export function useMarketplaceSearch(): '
  // Immediate search query from input;
  const [immediateSearchQuery, setImmediateSearchQuery] = useState('');
  // Debounced search query'
  const debouncedSearchQuery: useDebounce(immediateSearchQuery", 300);"
;
  const [searchQuery, setSearchQueryInternal] = useState(''); // This will store the debounced value;
=======
import { useState, useMemo, useEffect } from 'react';';
import type { ProductListing } from '@/types/listings;'';
import type { SearchSuggestion, FilterOptions } from '@/types/search;''
// import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData";";";";";"";
import { useDebounce } from './useDebounce // Import the debounce hook;;';
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
// Remove staticSearchSuggestions and staticFilterOptions. Fetch suggestions and filter options from real API/data source instead.;
;
export function useMarketplaceSearch(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  // Immediate search query from input;;
  const [immediateSearchQuery, setImmediateSearchQuery] = useState('');'
;
  // Debounced search query;''
  const debouncedSearchQuery: unknown "unknown = useDebounce(immediateSearchQuery", 300);";";";""
;;
  const [searchQuery, setSearchQueryInternal] = useState(''); // This will store the debounced value;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  // API Data states;
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setSearchQueryInternal(debouncedSearchQuery)
  }, [debouncedSearchQuery])
  useEffect(() => {;
<<<<<<< HEAD
    const fetchProducts = async () => {;
      setIsLoading(true)'
      setError(null);
      try {;
        // Changed to /api/search endpoint'
        const response = await fetch(`/api/search?q=${searchQuery"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`);"
        if (!response.ok) {;
          throw new Error(`API error: "${response.statusText"}`);
=======
    setSearchQueryInternal(debouncedSearchQuery);
  }, [debouncedSearchQuery]);
;
  useEffect(() => {;
    const fetchProducts: unknown = async () => {;
      setIsLoading(true);''
      setError(null);
      try {;
        // Changed to /api/search endpoint;''
        const response: unknown "unknown = await fetch(`/api/search?q=${searchQuery"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`);";";";""
        if (!response.ok) {;;
          throw new Error(`API error: "${response.statusText"}`);"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        };
        const responseData = await response.json(); // Get the full response object;
        if (;
          responseData &&;
          responseData.results &&;
<<<<<<< HEAD
          Array.isArray(responseData.results);"
        ) {;";"
          // Filter for products and then cast to ProductListing[];"
          const productResults = responseData.results.filter(;"
            (item: unknown) =>;"
              typeof item === 'object' &&'
              item !== null &&;
              'type' in item &&;
              (item as { type: "string "}).type === 'product','
          );
          setListings(productResults as ProductListing[]); // Use the 'results' array'
        } else {;
          setListings([]); // Default to empty if structure is wrong;
          // Optional: log an error'
          logErrorToProduction(;
            'Search API response structure in useMarketplaceSearch is not as expected:',;
            { data: "responseData "},;"
          );";"
        };"
      } catch {;"
        setError(e as Error);"
        logErrorToProduction('Failed to fetch products:', { data: "e "});
=======
          Array.isArray(responseData.results);""
        ) {;";""
          // Filter for products and then cast to ProductListing[];";";""
          const productResults: unknown = responseData.results.filter(;";";";""
            (item: unknown) =>;";";";";""
              typeof item === 'object' &&;''
              item !== null &&;;
              'type' in item &&;;'
              (item as { type: "string "}).type === 'product',;''
          );;
          setListings(productResults as ProductListing[]); // Use the 'results' array;''
        } else {;
          setListings([]); // Default to empty if structure is wrong;
          // Optional: log an error;''
          logErrorToProduction(;;
            'Search API response structure in useMarketplaceSearch is not as expected:',;;'
            { data: "responseData "},;""
          );";""
        };";";""
      } catch {;";";";""
        setError(e as Error);";";";";""
        logErrorToProduction('Failed to fetch products:', { data: "e "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        setListings([]); // Clear listings on error or set to a default error state;
      } finally {;
        setIsLoading(false);
      };
    };
    // Fetch when the component mounts or debouncedSearchQuery changes;
    fetchProducts();
  }, [searchQuery]); // searchQuery here is the debounced value;
  // Filter states;
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(;
    [],;
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(;
    [],;
  );
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [searchSuggestions, setSearchSuggestions] = useState<;
    SearchSuggestion[];
  >([]);
  // Fetch dynamic search suggestions when the query changes;
  useEffect(() => {;
    const fetchSuggestions = async () => {;
      if (!searchQuery) {;
        setSearchSuggestions([]); // Clear suggestions if query is empty;
        return;
      };
      try {;
        const res = await fetch(;
          `/api/search/suggest?q=${encodeURIComponent(searchQuery)} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`,;
        );
        if (res.ok) {;
          const data: unknown SearchSuggestion[] = await res.json();
          setSearchSuggestions(data);
        } else {;
          setSearchSuggestions([]); // Fallback to empty if API call fails;
        };
      } catch {;
        // Failed to fetch suggestions, fallback to empty;
        setSearchSuggestions([]);
      };
    };
    fetchSuggestions();
  }, [searchQuery]);
  const searchSuggestionList: unknown SearchSuggestion[] = useMemo(;
    () => searchSuggestions,;
<<<<<<< HEAD
    [searchSuggestions],;"
  );";"
  const filterOptions: unknown FilterOptions = useMemo(;"
    () => ({;"
      productTypes: [;"
        { value: 'app', label: 'Web App' },;
        { value: 'script', label: 'Script' },;
        { value: 'site', label: 'Website' },;
        { value: 'game', label: 'Game' },;
        { value: 'bot', label: 'Bot' },;
      ],'
      locations: [;
        { value: 'us', label: 'United States' },;
        { value: 'eu', label: 'Europe' },;
        { value: 'asia', label: 'Asia' },;
        { value: 'online', label: 'Online' },;
      ],;
      availabilityOptions: ['
        // Renamed from availability;
        { value: 'immediate', label: 'Immediate' },;
        { value: '1-week', label: 'Within 1 Week' },;
        { value: '1-month', label: 'Within 1 Month' },'
      ],;
      ratingOptions: [5, 4, 3], // Changed to array of numbers;"
      // Assuming minPrice and maxPrice should be part of actual filter options,;"
      // but they are not in the original staticFilterOptions.;"
      // Adding them with default values based on FilterOptions type.;"
      minPrice: 0, // Default value;"
      maxPrice: 10000, // Default value;
=======
    [searchSuggestions],;""
  );";""
  const filterOptions: unknown FilterOptions = useMemo(;";";""
    () => ({;";";";""
      productTypes: [;";";";";""
        { value: 'app', label: 'Web App' },;;'
        { value: 'script', label: 'Script' },;;'
        { value: 'site', label: 'Website' },;;'
        { value: 'game', label: 'Game' },;;'
        { value: 'bot', label: 'Bot' },;'
      ],;''
      locations: [;;
        { value: 'us', label: 'United States' },;;'
        { value: 'eu', label: 'Europe' },;;'
        { value: 'asia', label: 'Asia' },;;'
        { value: 'online', label: 'Online' },;'
      ],;
      availabilityOptions: [;''
        // Renamed from availability;;
        { value: 'immediate', label: 'Immediate' },;;'
        { value: '1-week', label: 'Within 1 Week' },;;'
        { value: '1-month', label: 'Within 1 Month' },;''
      ],;;
      ratingOptions: "[5", 4, 3], // Changed to array of numbers;";""
      // Assuming minPrice and maxPrice should be part of actual filter options,;";";""
      // but they are not in the original staticFilterOptions.;";";";""
      // Adding them with default values based on FilterOptions type.;";";";";""
      minPrice: "0", // Default value;";";";";""
      maxPrice: "10000", // Default value;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    }),;
    [],;
  );
  // Removed client-side filtering logic as the API now handles it.;
<<<<<<< HEAD
  const filteredListings = useMemo(() => {;"
    return listings;";"
  }, [listings]);"
;"
  // Handle filter changes;"
  const handleFilterChange = (filterType: string, _value: string) => {;"
    switch (filterType) {;"
      case 'productTypes':;
        setSelectedProductTypes((prev: string[]) =>;
          prev.includes(value)'
            ? prev.filter((t) => t !== value);
            : [...prev, value],;
        )'
        break;
      case 'locations':;
        setSelectedLocations((prev: string[]) =>;
          prev.includes(value)'
            ? prev.filter((l) => l !== value);
            : [...prev, value],;
        )'
        break;
      case 'availability':;
=======
  const filteredListings: unknown = useMemo(() => {;""
    return listings;";""
  }, [listings]);";";""
;";";";""
  // Handle filter changes;";";";";""
  const handleFilterChange: unknown = (filterType: "string", _value: string) => {;";";";""
    switch (filterType) {;";";";";""
      case 'productTypes':;'
        setSelectedProductTypes((prev: string[]) =>;
          prev.includes(value);''
            ? prev.filter((t) => t !== value);
            : [...prev, value],;
        );''
        break;;
      case 'locations':;'
        setSelectedLocations((prev: string[]) =>;
          prev.includes(value);''
            ? prev.filter((l) => l !== value);
            : [...prev, value],;
        );''
        break;;
      case 'availability':;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        setSelectedAvailability((prev: string[]) =>;
          prev.includes(value);
            ? prev.filter((a) => a !== value);
            : [...prev, value],;
        );
        break;
        break;
<<<<<<< HEAD
    }'
  };
  // Clear all filters'
  const clearAllFilters = () => {;
    setImmediateSearchQuery(''); // Clear immediate input;
    // setSearchQueryInternal(""); // Debounced version will update via useEffect;
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);"
    setSelectedRating(null);";"
  };"
;"
  return {;"
    searchQuery: immediateSearchQuery, // Expose the immediate value for the input field;"
    setSearchQuery: setImmediateSearchQuery, // Setter updates the immediate value;"
    searchSuggestions: searchSuggestionList,;
=======
    };''
  };
;
  // Clear all filters;''
  const clearAllFilters: unknown = () => {;;
    setImmediateSearchQuery(''); // Clear immediate input;;'
    // setSearchQueryInternal(""); // Debounced version will update via useEffect;"
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);""
    setSelectedRating(null);";""
  };";";""
;";";";""
  return {;";";";";""
    searchQuery: "immediateSearchQuery", // Expose the immediate value for the input field;";";";";""
    setSearchQuery: "setImmediateSearchQuery", // Setter updates the immediate value;";";";";""
    searchSuggestions: "searchSuggestionList",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    selectedProductTypes,;
    selectedLocations,;
    selectedAvailability,;
    selectedRating,;
    setSelectedRating,;
    filteredListings,;
    handleFilterChange,;
    clearAllFilters,;
    filterOptions,;
<<<<<<< HEAD
    isLoading,;"
    error,;";"
  };"
};"
"
}"
}";"
}"
}"
=======
    isLoading,;""
    error,;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
