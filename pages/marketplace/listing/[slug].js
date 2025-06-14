import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import * as Sentry from '@sentry/nextjs';
const ListingPage = ({ listing }) => {
    if (!listing) {
        return _jsx("div", { className: "max-w-3xl mx-auto py-8 px-4", children: "Listing not found." });
    }
    return (_jsxs("main", { className: "max-w-3xl mx-auto py-8 px-4", children: [_jsx("h1", { children: listing.title }), listing.images?.length ? (_jsx("div", { className: "mb-4", children: _jsx("img", { src: listing.images[0], alt: listing.title }) })) : null, _jsxs("div", { className: "font-bold mb-2", children: [listing.currency, listing.price] }), _jsx("p", { className: "mb-4", children: listing.description }), _jsxs("div", { className: "mb-4", children: ["Seller: ", listing.author.name] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { children: "Add to Cart" }), _jsx("button", { children: "Add to Wishlist" })] })] }));
};
export const getServerSideProps = async ({ params }) => {
    const slug = params?.slug;
    // Example: Add a breadcrumb for tracing
    // Sentry.addBreadcrumb({
    //   category: 'ssr',
    //   message: `getServerSideProps for Marketplace Listing: ${slug}`,
    //   level: 'info',
    // });
    try {
        const listing = MARKETPLACE_LISTINGS.find((l) => l.id === slug) || null;
        if (!listing) {
            // This will be handled by Next.js to show a 404 page.
            // Sentry typically doesn't report 404s as errors unless configured to do so,
            // or if an error occurs while trying to render the 404 page itself.
            return { notFound: true };
        }
        return { props: { listing } };
    }
    catch (error) {
        Sentry.captureException(error);
        // This catch block would handle any unexpected errors during the listing lookup.
        // console.error(`Error in getServerSideProps for marketplace listing ${slug}:`, error);
        // Re-throw the error so withSentryGetServerSideProps can capture it.
        throw error;
    }
};
export default ListingPage;
