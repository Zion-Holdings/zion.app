import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INNOVATIVE_SERVICES } from '../data/innovativeServices';
export function ServicesShowcase() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    // Get unique categories from services
    const categories = Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)));
    // Filter services based on search and category
    const filteredServices = INNOVATIVE_SERVICES.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
    const getCategoryIcon = (categoryName) => {
        const categoryIcons = {
            'AI Services': '🤖',
            'Micro SAAS': '💻',
            'IT Services': '🖥️',
            'Blockchain & Web3': '⛓️',
            'IoT & Edge Computing': '🌐',
            'Emerging Technologies': '🔮',
            'Cybersecurity Services': '🔒',
            'Data Science & Analytics': '📊'
        };
        return categoryIcons[categoryName] || '💼';
    };
    const formatPrice = (price, pricingModel) => {
        if (pricingModel === 'monthly') {
            return `$${price}/month`;
        }
        else if (pricingModel === 'yearly') {
            return `$${price}/year`;
        }
        else if (pricingModel === 'one-time') {
            return `$${price}`;
        }
        else if (pricingModel === 'per-user') {
            return `$${price}/user`;
        }
        else if (pricingModel === 'per-project') {
            return `$${price}/project`;
        }
        else if (pricingModel === 'usage-based') {
            return `$${price}/usage`;
        }
        else if (pricingModel === 'freemium') {
            return `Free + Premium`;
        }
        return `$${price}`;
    };
    const getSupportLevelColor = (level) => {
        const colors = {
            'basic': 'bg-gray-100 text-gray-800',
            'standard': 'bg-blue-100 text-blue-800',
            'premium': 'bg-purple-100 text-purple-800',
            'enterprise': 'bg-green-100 text-green-800'
        };
        return colors[level] || 'bg-gray-100 text-gray-800';
    };
    return (_jsx("div", { className: "py-20 bg-gradient-to-br from-slate-50 to-blue-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-5xl font-bold text-gray-900 mb-6", children: "Comprehensive Tech Solutions" }), _jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed", children: "Discover our complete range of AI, Micro SAAS, IT, Blockchain, IoT, and Emerging Tech services designed to transform your business." }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto", children: [
                                { number: INNOVATIVE_SERVICES.length.toString(), label: "Total Services" },
                                { number: categories.length.toString(), label: "Categories" },
                                { number: INNOVATIVE_SERVICES.filter(s => s.featured).length.toString(), label: "Featured" },
                                { number: "4.9", label: "Rating" }
                            ].map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: stat.number }), _jsx("div", { className: "text-gray-600 text-sm", children: stat.label })] }, index))) })] }), _jsx("div", { className: "mb-12", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-center", children: [_jsxs("div", { className: "relative w-full max-w-md", children: [_jsx("input", { type: "text", placeholder: "Search services, features, or tags...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm" }), _jsx("svg", { className: "absolute left-3 top-3.5 h-5 w-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) })] }), _jsxs("select", { value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), className: "px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm", children: [_jsx("option", { value: "all", children: "All Categories" }), categories.map(category => (_jsxs("option", { value: category, children: [category, " (", INNOVATIVE_SERVICES.filter(s => s.category === category).length, ")"] }, category)))] })] }) }), _jsxs("div", { className: "flex flex-wrap justify-center gap-3 mb-12", children: [_jsxs("button", { onClick: () => setSelectedCategory('all'), className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === 'all'
                                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:shadow-md'}`, children: ["All Services (", INNOVATIVE_SERVICES.length, ")"] }), categories.map(category => (_jsxs("button", { onClick: () => setSelectedCategory(category), className: `px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:shadow-md'}`, children: [_jsx("span", { children: getCategoryIcon(category) }), category, " (", INNOVATIVE_SERVICES.filter(s => s.category === category).length, ")"] }, category)))] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16", children: filteredServices.map((service, index) => (_jsxs("div", { className: `bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.1}s` }, children: [_jsxs("div", { className: "h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative", children: [_jsx("span", { className: "text-6xl", children: getCategoryIcon(service.category) }), service.featured && (_jsx("div", { className: "absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold", children: "\u2B50 Featured" })), service.aiScore && (_jsxs("div", { className: "absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold", children: ["AI: ", service.aiScore] }))] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("span", { className: "text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full", children: service.category }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("span", { className: "text-yellow-400", children: "\u2605" }), _jsx("span", { className: "text-sm font-medium text-gray-700", children: service.rating || 4.5 }), service.reviewCount && (_jsxs("span", { className: "text-xs text-gray-500", children: ["(", service.reviewCount, ")"] }))] })] }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3 line-clamp-2", children: service.title }), _jsx("p", { className: "text-gray-600 mb-4 line-clamp-3", children: service.description }), _jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-700 mb-2", children: "Key Features:" }), _jsxs("ul", { className: "space-y-1", children: [service.features.slice(0, 3).map((feature, idx) => (_jsxs("li", { className: "text-sm text-gray-600 flex items-center gap-2", children: [_jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full" }), feature] }, idx))), service.features.length > 3 && (_jsxs("li", { className: "text-sm text-blue-600 font-medium", children: ["+", service.features.length - 3, " more features"] }))] })] }), _jsx("div", { className: "mb-4", children: _jsxs("span", { className: `text-xs px-2 py-1 rounded-full ${getSupportLevelColor(service.supportLevel)}`, children: [service.supportLevel, " Support"] }) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "text-2xl font-bold text-gray-900", children: formatPrice(service.price, service.pricingModel) }), _jsx(Link, { to: `/services/${service.id}`, className: "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium", children: "Learn More" })] }), _jsx("div", { className: "flex flex-wrap gap-1 mt-3", children: service.tags.slice(0, 3).map((tag, idx) => (_jsx("span", { className: "text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded", children: tag }, idx))) })] })] }, service.id))) }), _jsx("div", { className: "text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white", children: [_jsx("h3", { className: "text-4xl font-bold mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl mb-8 opacity-90 max-w-3xl mx-auto", children: "Get in touch with our experts to discuss your specific needs and find the perfect solution from our comprehensive service catalog." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Link, { to: "/request-quote", className: "bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors", children: "Schedule Consultation" }), _jsx(Link, { to: "/services", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors", children: "View All Services" })] })] }) })] }) }));
}
