import { useRouter } from 'next/router';
import { useMarketplaceSearch } from '@/hooks/useMarketplaceSearch';
import { ProductListing } from '@/types/listings';
import { ListingCard } from '@/components/ListingCard'; // Assuming this component exists
import { AppLayout } from '@/layout/AppLayout'; // Assuming this component exists
import { NextPageWithLayout } from '@/types/next';
import React, { useEffect } from 'react';

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { q } = router.query;
  const {
    searchQuery,
    setSearchQuery,
    filteredListings,
    isLoading,
    error,
  } = useMarketplaceSearch();

  useEffect(() => {
    if (q) {
      setSearchQuery(q as string);
    }
  }, [q, setSearchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{searchQuery}"</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error loading results: {error.message}</p>}
      {!isLoading && !error && filteredListings.length === 0 && (
        <p>No results found for "{searchQuery}".</p>
      )}
      {!isLoading && !error && filteredListings.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredListings.map((listing: ProductListing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      )}
    </div>
  );
};

SearchPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default SearchPage;
