import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, DollarSign, Heart } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addToWishlist, getApiUrl } from "@/store/wishlistSlice";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
export function ProductListingCard({ listing, view = 'grid', onRequestQuote, detailBasePath = '/marketplace/listing' }) {
    const isGrid = view === 'grid';
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const dispatch = useAppDispatch();
    // Get the first image or use a placeholder
    const imageUrl = listing.images && listing.images.length > 0
        ? listing.images[0]
        : '/placeholder.svg';
    // Format price display
    const formatPrice = () => {
        if (listing.price === null)
            return "Custom pricing";
        return `${listing.currency}${listing.price.toLocaleString()}`;
    };
    // Handle image loading errors
    const handleImageError = (e) => {
        e.currentTarget.src = '/placeholder.svg';
    };
    // Handle navigating to listing detail
    const handleViewListing = () => {
        navigate(`${detailBasePath}/${listing.id}`);
    };
    // Handle request quote button click
    const handleRequestQuote = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onRequestQuote) {
            onRequestQuote(listing.id);
        }
        else {
            // Default behavior if no handler provided
            navigate(`/request-quote?listing=${listing.id}`);
        }
    };
    const handleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!user) {
            toast.info('Log in to save favorites');
            navigate(`/login?next=${encodeURIComponent(location.pathname + location.search)}`);
            return;
        }
        dispatch(addToWishlist({ id: listing.id, type: 'product', data: listing }));
        fetch(`${getApiUrl()}/wishlist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: listing.id, type: 'product' }),
        }).catch(() => { });
    };
    return (_jsxs("div", { className: `bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple`, onClick: handleViewListing, tabIndex: 0, children: [_jsx("div", { className: isGrid ? 'block w-full' : 'block w-48 flex-shrink-0', onClick: handleViewListing, children: _jsxs("div", { className: `relative ${isGrid ? 'h-48' : 'h-32 w-48'}`, children: [_jsx("img", { src: imageUrl, alt: listing.title, className: "w-full h-full object-cover", onError: handleImageError }), listing.featured && (_jsx(Badge, { className: "absolute top-2 right-2 bg-zion-purple text-white border-none", children: "Featured" }))] }) }), _jsxs("div", { className: `flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`, children: [_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx(Badge, { variant: "outline", className: "bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light", children: listing.category }), listing.rating && (_jsxs("div", { className: "flex items-center text-zion-slate-light", children: [_jsx(Star, { className: "h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" }), _jsx("span", { children: listing.rating }), listing.reviewCount && (_jsxs("span", { className: "text-xs ml-1", children: ["(", listing.reviewCount, ")"] }))] }))] }), _jsx("div", { onClick: handleViewListing, className: "block", children: _jsx("h3", { className: "text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors", children: listing.title }) }), _jsx("p", { className: "text-sm text-zion-slate line-clamp-2 mb-4", children: listing.description }), listing.tags && listing.tags.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-1 mb-4", children: listing.tags.map((tag, idx) => (_jsx("span", { className: "text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full", children: tag }, idx))) }))] }), _jsxs("div", { className: "flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light", children: [_jsx("div", { className: "text-sm font-medium", children: listing.price !== null ? (_jsxs("div", { className: "flex items-center text-zion-purple", children: [_jsx(DollarSign, { className: "h-4 w-4 mr-1" }), formatPrice()] })) : (_jsx("span", { className: "text-zion-slate-light", children: formatPrice() })) }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: handleSave, "aria-label": "save-to-wishlist", className: "text-zion-slate-light hover:text-zion-cyan", children: _jsx(Heart, { className: "h-5 w-5" }) }), _jsx(Link, { to: `${detailBasePath}/${listing.id}`, onClick: (e) => e.stopPropagation(), children: _jsx(Button, { size: "sm", className: "bg-zion-purple hover:bg-zion-purple-dark text-white", children: "Buy Now" }) }), onRequestQuote && (_jsx(Button, { size: "sm", variant: "outline", onClick: handleRequestQuote, className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: "Request Quote" }))] })] })] })] }));
}
