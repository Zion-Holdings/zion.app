import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function EnhancedServiceCard({ service, onViewDetails, onRequestQuote }) {
    const { id, title, description, price, rating, reviewCount, location, deliveryTime, category, image, features = [], isVerified = false, isPopular = false } = service;
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (_jsx(Star, { className: `w-4 h-4 ${i < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : i < rating
                    ? 'text-yellow-400 fill-current opacity-60'
                    : 'text-gray-400'}` }, i)));
    };
    return (_jsxs(motion.div, { variants: cardVariants, initial: "hidden", whileInView: "visible", whileHover: "hover", viewport: { once: true }, className: "group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-purple/20 backdrop-blur-sm rounded-2xl border border-zion-purple/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300", children: [isPopular && (_jsx("div", { className: "absolute top-4 left-4 z-10", children: _jsxs("div", { className: "bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1", children: [_jsx(TrendingUp, { className: "w-3 h-3" }), "Popular"] }) })), isVerified && (_jsx("div", { className: "absolute top-4 right-4 z-10", children: _jsxs("div", { className: "bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1", children: [_jsx(Shield, { className: "w-3 h-3" }), "Verified"] }) })), _jsxs("div", { className: "relative h-48 overflow-hidden", children: [image ? (_jsx("img", { src: image, alt: title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" })) : (_jsx("div", { className: "w-full h-full bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 flex items-center justify-center", children: _jsx("div", { className: "text-zion-purple/40 text-6xl font-bold", children: title.charAt(0) }) })), _jsx("div", { className: "absolute bottom-4 left-4", children: _jsx("div", { className: "bg-zion-blue-dark/80 backdrop-blur-sm text-zion-cyan text-xs font-medium px-3 py-1 rounded-full border border-zion-cyan/30", children: category }) }), _jsx("div", { className: "absolute bottom-4 right-4", children: _jsx("div", { className: "bg-zion-purple/90 backdrop-blur-sm text-white text-lg font-bold px-4 py-2 rounded-xl border border-zion-purple/30", children: price }) })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-zion-cyan transition-colors duration-300", children: title }), _jsx("div", { className: "flex items-center justify-between", children: _jsxs("div", { className: "flex items-center gap-2", children: [renderStars(rating), _jsxs("span", { className: "text-zion-slate-light text-sm", children: ["(", reviewCount, " reviews)"] })] }) })] }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4 line-clamp-3 leading-relaxed", children: description }), features.length > 0 && (_jsx("div", { className: "mb-4", children: _jsxs("div", { className: "flex flex-wrap gap-2", children: [features.slice(0, 3).map((feature, index) => (_jsx("span", { className: "bg-zion-purple/10 text-zion-purple text-xs px-2 py-1 rounded-full border border-zion-purple/20", children: feature }, index))), features.length > 3 && (_jsxs("span", { className: "bg-zion-cyan/10 text-zion-cyan text-xs px-2 py-1 rounded-full border border-zion-cyan/20", children: ["+", features.length - 3, " more"] }))] }) })), _jsxs("div", { className: "flex items-center justify-between mb-6 text-sm text-zion-slate-light", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4 text-zion-purple" }), _jsx("span", { children: location })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { children: deliveryTime })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { onClick: () => onViewDetails === null || onViewDetails === void 0 ? void 0 : onViewDetails(id), className: "flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105", children: "View Details" }), _jsx(Button, { onClick: () => onRequestQuote === null || onRequestQuote === void 0 ? void 0 : onRequestQuote(id), variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold py-3 px-4 rounded-xl transition-all duration-300", children: "Get Quote" })] })] }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-zion-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" })] }));
}
