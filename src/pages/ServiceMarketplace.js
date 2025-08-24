import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Search, Star, Clock, Users, Zap, Shield, Cloud, Brain, Globe, Database } from 'lucide-react';
import { EXPANDED_SERVICES } from '@/data/expandedServices';
const ServiceMarketplace = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPricing, setSelectedPricing] = useState('all');
    const [selectedSupport, setSelectedSupport] = useState('all');
    const [sortBy, setSortBy] = useState('popularity');
    const categories = [
        { id: 'all', name: 'All Categories', icon: Globe },
        { id: 'AI & Machine Learning', name: 'AI & ML', icon: Brain },
        { id: 'Cybersecurity', name: 'Security', icon: Shield },
        { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud },
        { id: 'Data & Analytics', name: 'Data & Analytics', icon: Database },
        { id: 'Emerging Technologies', name: 'Emerging Tech', icon: Zap }
    ];
    const pricingModels = [
        { id: 'all', name: 'All Pricing' },
        { id: 'hourly', name: 'Hourly' },
        { id: 'project', name: 'Project-based' },
        { id: 'subscription', name: 'Subscription' },
        { id: 'one-time', name: 'One-time' }
    ];
    const supportLevels = [
        { id: 'all', name: 'All Support' },
        { id: 'basic', name: 'Basic' },
        { id: 'premium', name: 'Premium' },
        { id: 'enterprise', name: 'Enterprise' }
    ];
    const filteredServices = useMemo(() => {
        return EXPANDED_SERVICES.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
            const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
            const matchesSupport = selectedSupport === 'all' || service.supportLevel === selectedSupport;
            return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
        }).sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'ai-score':
                    return b.aiScore - a.aiScore;
                default:
                    return b.rating - a.rating; // popularity
            }
        });
    }, [searchTerm, selectedCategory, selectedPricing, selectedSupport, sortBy]);
    const getCategoryIcon = (category) => {
        const categoryData = categories.find(c => c.id === category);
        return categoryData ? React.createElement(categoryData.icon, { className: "w-5 h-5" }) : _jsx(Globe, { className: "w-5 h-5" });
    };
    const getPricingDisplay = (service) => {
        switch (service.pricingModel) {
            case 'hourly':
                return `$${service.price}/hr`;
            case 'project':
                return `$${service.price.toLocaleString()}`;
            case 'subscription':
                return `$${service.price}/mo`;
            case 'one-time':
                return `$${service.price.toLocaleString()}`;
            default:
                return `$${service.price}`;
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Service Marketplace - Zion Tech Group", description: "Browse and discover our comprehensive marketplace of IT and AI services with advanced filtering and search capabilities." }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "Service Marketplace" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Discover and compare our comprehensive range of IT and AI services. Find the perfect solution for your business needs with advanced filtering and search." })] }), _jsxs("div", { className: "bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30 mb-12", children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" }), _jsx("input", { type: "text", placeholder: "Search services, features, or tags...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan" })] }), _jsx("div", { children: _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan", children: [_jsx("option", { value: "popularity", children: "Sort by: Popularity" }), _jsx("option", { value: "rating", children: "Sort by: Rating" }), _jsx("option", { value: "ai-score", children: "Sort by: AI Score" }), _jsx("option", { value: "price-low", children: "Sort by: Price (Low to High)" }), _jsx("option", { value: "price-high", children: "Sort by: Price (High to Low)" })] }) })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Categories" }), _jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((category) => (_jsxs("button", { onClick: () => setSelectedCategory(category.id), className: `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                                                            ? 'bg-zion-cyan text-zion-blue-dark'
                                                            : 'bg-zion-blue-light/20 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30'}`, children: [React.createElement(category.icon, { className: "w-4 h-4" }), category.name] }, category.id))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Pricing Models" }), _jsx("div", { className: "flex flex-wrap gap-2", children: pricingModels.map((pricing) => (_jsx("button", { onClick: () => setSelectedPricing(pricing.id), className: `px-4 py-2 rounded-lg transition-colors ${selectedPricing === pricing.id
                                                            ? 'bg-zion-cyan text-zion-blue-dark'
                                                            : 'bg-zion-blue-light/20 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30'}`, children: pricing.name }, pricing.id))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Support Levels" }), _jsx("div", { className: "flex flex-wrap gap-2", children: supportLevels.map((support) => (_jsx("button", { onClick: () => setSelectedSupport(support.id), className: `px-4 py-2 rounded-lg transition-colors ${selectedSupport === support.id
                                                            ? 'bg-zion-cyan text-zion-blue-dark'
                                                            : 'bg-zion-blue-light/20 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30'}`, children: support.name }, support.id))) })] })] })] }), _jsx("div", { className: "mb-8", children: _jsxs("p", { className: "text-zion-slate-light", children: ["Showing ", filteredServices.length, " of ", EXPANDED_SERVICES.length, " services"] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredServices.map((service) => (_jsxs("div", { className: "bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/20", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [getCategoryIcon(service.category), _jsx("span", { className: "text-zion-cyan text-sm font-medium", children: service.category })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }), _jsx("span", { className: "text-white text-sm", children: service.rating })] })] }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: service.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4 line-clamp-3", children: service.description }), _jsxs("div", { className: "mb-4", children: [_jsx("p", { className: "text-zion-slate-light text-xs mb-2", children: "Key Features:" }), _jsx("div", { className: "flex flex-wrap gap-1", children: service.features.slice(0, 3).map((feature, index) => (_jsx("span", { className: "px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded", children: feature }, index))) })] }), _jsxs("div", { className: "grid grid-cols-3 gap-4 mb-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex items-center justify-center w-8 h-8 bg-zion-cyan/20 rounded-lg mx-auto mb-1", children: _jsx(Brain, { className: "w-4 h-4 text-zion-cyan" }) }), _jsx("p", { className: "text-white text-sm font-medium", children: service.aiScore }), _jsx("p", { className: "text-zion-slate-light text-xs", children: "AI Score" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex items-center justify-center w-8 h-8 bg-zion-cyan/20 rounded-lg mx-auto mb-1", children: _jsx(Clock, { className: "w-4 h-4 text-zion-cyan" }) }), _jsx("p", { className: "text-white text-sm font-medium", children: service.deliveryTime }), _jsx("p", { className: "text-zion-slate-light text-xs", children: "Delivery" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex items-center justify-center w-8 h-8 bg-zion-cyan/20 rounded-lg mx-auto mb-1", children: _jsx(Users, { className: "w-4 h-4 text-zion-cyan" }) }), _jsx("p", { className: "text-white text-sm font-medium", children: service.reviewCount }), _jsx("p", { className: "text-zion-slate-light text-xs", children: "Reviews" })] })] }), _jsxs("div", { className: "border-t border-zion-blue-light/30 pt-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-zion-cyan text-2xl font-bold", children: getPricingDisplay(service) }), _jsxs("p", { className: "text-zion-slate-light text-sm", children: ["Market: $", service.marketPrice.average.toLocaleString()] })] }), _jsx("div", { className: "text-right", children: _jsxs("p", { className: "text-green-400 text-sm font-medium", children: ["Save $", ((service.marketPrice.average - service.price) / service.marketPrice.average * 100).toFixed(0), "%"] }) })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { className: "flex-1 px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors", children: "Get Quote" }), _jsx("button", { className: "px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors", children: "Details" })] })] })] }, service.id))) }), filteredServices.length === 0 && (_jsxs("div", { className: "text-center py-20", children: [_jsx("div", { className: "w-24 h-24 bg-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(Search, { className: "w-12 h-12 text-zion-slate-light" }) }), _jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "No Services Found" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Try adjusting your search terms or filters to find what you're looking for." }), _jsx("button", { onClick: () => {
                                        setSearchTerm('');
                                        setSelectedCategory('all');
                                        setSelectedPricing('all');
                                        setSelectedSupport('all');
                                    }, className: "px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors", children: "Clear All Filters" })] }))] }) })] }));
};
export default ServiceMarketplace;
