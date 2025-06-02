import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import NextHead from '@/components/NextHead';
import ProductReviews from '@/components/ProductReviews';
// Using a more robust placeholder that handles null/undefined values for rating
const RatingStarsDisplay = ({ value, count }) => {
    const ratingValue = value ?? 0; // Default to 0 if value is null
    const roundedRating = Math.round(ratingValue);
    return (_jsxs("div", { className: "flex items-center", children: [Array.from({ length: 5 }, (_, i) => (_jsx("span", { className: i < roundedRating ? 'text-yellow-400' : 'text-gray-300', children: "\u2605" }, i))), _jsx("span", { className: "ml-1 text-sm text-gray-600 dark:text-gray-400", children: ratingValue > 0 ? `${ratingValue.toFixed(1)}/5` : 'Not rated' }), typeof count !== 'undefined' && (_jsxs("span", { className: "ml-2 text-sm text-gray-600 dark:text-gray-400", children: ["(", count, " reviews)"] }))] }));
};
const MarketplaceListingPage = ({ product, error }) => {
    if (error) {
        return _jsxs("div", { className: "text-red-500 max-w-3xl mx-auto py-8 px-4", children: ["Error: ", error] });
    }
    if (!product) {
        // This case should ideally be handled by notFound: true in getServerSideProps
        return _jsx("div", { className: "max-w-3xl mx-auto py-8 px-4", children: "Product not found." });
    }
    // The slug from URL is product.id because our API uses product.id for fetching
    const productId = product.id;
    return (_jsxs(_Fragment, { children: [_jsx(NextHead, { title: product.name, description: product.description ?? undefined, openGraph: {
                    title: product.name,
                    description: product.description ?? undefined,
                    image: product.imageUrl ?? product.images?.[0]?.url ?? undefined,
                } }), _jsxs("main", { className: "prose dark:prose-invert max-w-3xl mx-auto py-8 px-4", children: [_jsx("h1", { children: product.name }), " ", _jsxs("div", { className: "my-4", children: [_jsx("h2", { className: "text-lg font-semibold mb-2", children: "Overall Rating" }), product.reviewCount > 0 && product.averageRating !== null ? (_jsx(RatingStarsDisplay, { value: product.averageRating, count: product.reviewCount })) : (_jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "No ratings yet for this product." }))] }), product.description && (_jsxs("div", { className: "mt-4 mb-6", children: [_jsx("h2", { className: "text-lg font-semibold mb-2", children: "Description" }), _jsx("p", { children: product.description })] })), _jsx("hr", { className: "my-8" }), _jsx(ProductReviews, { productId: productId })] })] }));
};
export const getServerSideProps = async (context) => {
    const slug = context.params?.slug;
    if (!slug) {
        return { notFound: true };
    }
    try {
        // Fetch product details including review stats
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const res = await fetch(`${appUrl}/api/products/${slug}/details`);
        if (!res.ok) {
            if (res.status === 404) {
                return { notFound: true };
            }
            let errorMsg = `Failed to fetch product: ${res.status}`;
            try {
                const errorData = await res.json();
                errorMsg = errorData.error || errorMsg;
            }
            catch (jsonError) {
                // If response is not JSON, use the status text or default message
                errorMsg = res.statusText || errorMsg;
            }
            return { props: { product: null, error: errorMsg } };
        }
        const product = await res.json();
        return { props: { product, error: undefined } }; // Ensure error is undefined on success
    }
    catch (e) {
        console.error('Error in getServerSideProps for [slug]:', e);
        // More generic error for the client
        return { props: { product: null, error: 'An unexpected error occurred while trying to load product details.' } };
    }
};
export default MarketplaceListingPage;
