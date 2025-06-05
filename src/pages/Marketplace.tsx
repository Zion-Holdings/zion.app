import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Grid3X3, ListFilter } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { FilterSidebar } from '@/components/search/FilterSidebar';
import { ActiveFiltersBar } from '@/components/search/ActiveFiltersBar';
import { ProductListingCard } from '@/components/ProductListingCard';
import { ProductListing } from '@/types/listings';
// MARKETPLACE_LISTINGS and generateRandomListing removed
import {
  generateSearchSuggestions,
  generateFilterOptions,
} from '@/data/marketplaceData';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { SearchSuggestion } from '@/types/search';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function Marketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(
    []
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedMinPrice, setSelectedMinPrice] = useState<number | null>(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number | null>(null);
  const [listings, setListings] = useState<ProductListing[]>([]); // Initialize with empty array
  const [isLoading, setIsLoading] = useState(false); // isLoading already exists
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Removed useEffect that appends a random listing

  // Add useEffect to fetch products from /api/products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        // Assuming API returns data compatible with ProductWithReviewStats structure
        // And ProductWithReviewStats is designed to be compatible with ProductListing
        const data = await response.json();

        // Adjust images: API provides { url: string; alt?: string }[], ProductListing expects string[]
        // Also map averageRating to rating
        const formattedData: ProductListing[] = data.map((product: any) => ({
          ...product,
          images: product.images?.map((img: { url: string }) => img.url) || [], // Ensure images is string[]
          rating: product.averageRating, // Map averageRating to rating
        }));

        setListings(formattedData);
      } catch (error: any) {
        console.error('Raw error object:', error);
        if (error.response) {
          console.error('Error response data:', await error.response.text());
        }
        console.error('Error fetching products:', error);
        toast({
          title: 'Error',
          description: `Could not fetch products: ${error.message}`,
          variant: 'destructive',
        });
        setListings([]); // Set to empty on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means it runs once on mount

  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions();
  const filterOptions = useMemo(
    () => generateFilterOptions(listings),
    [listings]
  );

  useEffect(() => {
    setIsLoading(true);
    setCurrentPage(1);
    const timeout = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [
    searchQuery,
    selectedProductTypes,
    selectedLocations,
    selectedAvailability,
    selectedRating,
    selectedMinPrice,
    selectedMaxPrice,
  ]);

  // Filter listings based on selected filters
  const filteredListings = listings.filter((listing) => {
    // Search filter
    if (
      searchQuery &&
      !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !listing.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    // Product type filter
    if (
      selectedProductTypes.length > 0 &&
      !selectedProductTypes.includes(listing.category)
    ) {
      return false;
    }

    // Location filter
    if (
      selectedLocations.length > 0 &&
      listing.location &&
      !selectedLocations.includes(listing.location)
    ) {
      return false;
    }

    // Availability filter
    if (
      selectedAvailability.length > 0 &&
      listing.availability &&
      !selectedAvailability.includes(listing.availability)
    ) {
      return false;
    }

    // Rating filter
    if (
      selectedRating &&
      (!listing.rating || listing.rating < selectedRating)
    ) {
      return false;
    }

    // Price filter
    if (selectedMinPrice !== null && listing.price < selectedMinPrice) {
      return false;
    }
    if (selectedMaxPrice !== null && listing.price > selectedMaxPrice) {
      return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (filterType: string, value: string) => {
    console.log(`Filter changed: ${filterType} = ${value}`);
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case 'locations':
        setSelectedLocations((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case 'availability':
        setSelectedAvailability((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
    setSelectedMinPrice(filterOptions.minPrice); // Reset to overall min
    setSelectedMaxPrice(filterOptions.maxPrice); // Reset to overall max
  };

  const handlePriceChange = (newMinPrice: number, newMaxPrice: number) => {
    setSelectedMinPrice(newMinPrice);
    setSelectedMaxPrice(newMaxPrice);
  };

  const handleRemovePriceFilter = () => {
    setSelectedMinPrice(filterOptions.minPrice);
    setSelectedMaxPrice(filterOptions.maxPrice);
  };

  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find((item) => item.id === listingId);

    if (listing) {
      toast({
        title: 'Quote Requested',
        description: `Your quote request for ${listing.title} has been sent.`,
      });

      // Navigate to the quote request page with the listing information
      navigate('/request-quote', {
        state: {
          serviceType: listing.category,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0],
          },
        },
      });
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="font-bold text-white mb-4 text-[clamp(1.5rem,3vw,1.875rem)]">
          AI & Tech Marketplace
        </h1>
        <p className="text-zion-slate-light text-[clamp(1rem,2.5vw,1.125rem)]">
          Discover professional services and products for your AI and tech
          projects. Browse our curated collection of solutions from verified
          providers.
        </p>
      </div>

      {/* Search and filter bar */}
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <EnhancedSearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              onSelectSuggestion={setSearchQuery}
              placeholder="Search the marketplace..."
              searchSuggestions={searchSuggestions}
            />
          </div>
          <div className="flex gap-2">
            <Grid3X3
              onClick={() => setView('grid')}
              aria-label="Grid view"
              className={`h-4 w-4 cursor-pointer text-zion-slate-light ${view === 'grid' ? 'text-green-400' : ''}`}
              data-testid="grid-icon"
            />
            <ListFilter
              onClick={() => setView('list')}
              aria-label="List view"
              className={`h-4 w-4 cursor-pointer text-zion-slate-light ${view === 'list' ? 'text-green-400' : ''}`}
              data-testid="list-icon"
            />
          </div>
        </div>
      </div>

      {/* Main layout with sidebar and results */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <FilterSidebar
            filters={{
              selectedProductTypes,
              selectedLocations,
              selectedAvailability,
              selectedRating,
            }}
            filterOptions={filterOptions} // This now includes minPrice and maxPrice
            onFilterChange={handleFilterChange}
            onRatingChange={setSelectedRating}
            onClearFilters={clearAllFilters}
            selectedMinPrice={selectedMinPrice}
            selectedMaxPrice={selectedMaxPrice}
            handlePriceChange={handlePriceChange}
            // Pass overall min/max from filterOptions for the slider component
            overallMinPrice={filterOptions.minPrice}
            overallMaxPrice={filterOptions.maxPrice}
          />
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          {/* Active filters display */}
          <ActiveFiltersBar
            selectedProductTypes={selectedProductTypes}
            selectedLocations={selectedLocations}
            selectedAvailability={selectedAvailability}
            selectedRating={selectedRating}
            searchQuery={searchQuery}
            onRemoveFilter={handleFilterChange}
            onRemoveRating={() => setSelectedRating(null)}
            onClearSearch={() => setSearchQuery('')}
            selectedMinPrice={selectedMinPrice}
            selectedMaxPrice={selectedMaxPrice}
            onRemovePriceFilter={handleRemovePriceFilter}
          />

          {/* Results count */}
          <div className="mb-6">
            <p className="text-zion-slate-light">
              Showing {filteredListings.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Display actual marketplace listings */}
          {isLoading ? (
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 gap-6'
                  : 'flex flex-col gap-4'
              }
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden border border-zion-blue-light"
                >
                  <Skeleton height={192} width="100%" />
                  <div className="p-4">
                    <Skeleton height={24} width="33%" className="mb-2" />
                    <Skeleton height={32} width="83%" className="mb-4" />
                    <Skeleton height={16} width="100%" className="mb-2" />
                    <Skeleton height={16} width="80%" className="mb-4" />
                    <div className="flex justify-between items-center pt-4">
                      <Skeleton height={24} width="25%" />
                      <Skeleton height={32} width="25%" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : !isLoading &&
            !listings.length &&
            !searchQuery &&
            !selectedProductTypes.length &&
            !selectedLocations.length &&
            !selectedAvailability.length &&
            !selectedRating &&
            selectedMinPrice === null &&
            selectedMaxPrice === null ? (
            <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Marketplace Currently Empty
              </h2>
              <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                No listings are currently available. Please check back later.
              </p>
            </div>
          ) : filteredListings.length > 0 ? (
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 gap-6'
                  : 'flex flex-col gap-4'
              }
              data-testid="product-container"
            >
              {paginatedListings.map((listing) => (
                <ProductListingCard
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                  view={view}
                />
              ))}
            </div>
          ) : (
            <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                No Results Found
              </h2>
              <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                We couldn't find any listings matching your filters. Try
                adjusting your search criteria.
              </p>
              <Button
                onClick={clearAllFilters}
                className="bg-zion-purple hover:bg-zion-purple-dark"
              >
                Clear Filters
              </Button>
            </div>
          )}
          {totalPages > 1 && (
            <div className="mt-6">
              <Pagination className="justify-center">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href={`?page=${currentPage - 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(Math.max(1, currentPage - 1));
                      }}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationButton
                          page={page}
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        />
                      </PaginationItem>
                    )
                  )}
                  <PaginationItem>
                    <PaginationNext
                      href={`?page=${currentPage + 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(Math.min(totalPages, currentPage + 1));
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
