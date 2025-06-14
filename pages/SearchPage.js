import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from 'next/router';
import { useMarketplaceSearch } from '@/hooks/useMarketplaceSearch';
import { ListingCard } from '@/components/ListingCard'; // Assuming this component exists
import { AppLayout } from '@/layout/AppLayout'; // Assuming this component exists
import { useEffect } from 'react';
const SearchPage = () => {
    const router = useRouter();
    const { q } = router.query;
    const { searchQuery, setSearchQuery, filteredListings, isLoading, error, } = useMarketplaceSearch();
    useEffect(() => {
        if (q) {
            setSearchQuery(q);
        }
    }, [q, setSearchQuery]);
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("h1", { className: "text-3xl font-bold mb-8", children: ["Search Results for \"", searchQuery, "\""] }), isLoading && _jsx("p", { children: "Loading..." }), error && _jsxs("p", { className: "text-red-500", children: ["Error loading results: ", error.message] }), !isLoading && !error && filteredListings.length === 0 && (_jsxs("p", { children: ["No results found for \"", searchQuery, "\"."] })), !isLoading && !error && filteredListings.length > 0 && (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: filteredListings.map((listing) => (_jsx(ListingCard, { ...listing }, listing.id))) }))] }));
};
SearchPage.getLayout = function getLayout(page) {
    return _jsx(AppLayout, { children: page });
};
export default SearchPage;
