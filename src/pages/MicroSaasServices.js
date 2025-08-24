import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MICRO_SAAS_SERVICES, getServiceByCategory, getPopularServices, getNewServices } from '@/data/microSaasServices';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, TrendingUp, Sparkles, Shield, Zap, Globe, Code, BarChart3, Settings, Monitor, Database, Bot } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { FuturisticAnimatedBackground } from '@/components/ui/FuturisticAnimatedBackground';
import { FuturisticNeonButton } from '@/components/ui/FuturisticNeonButton';
const categoryIcons = {
    AI: _jsx(Sparkles, { className: "w-5 h-5" }),
    IT: _jsx(Settings, { className: "w-5 h-5" }),
    Development: _jsx(Code, { className: "w-5 h-5" }),
    Analytics: _jsx(BarChart3, { className: "w-5 h-5" }),
    Security: _jsx(Shield, { className: "w-5 h-5" }),
    Automation: _jsx(Zap, { className: "w-5 h-5" }),
    Integration: _jsx(Database, { className: "w-5 h-5" }),
    Monitoring: _jsx(Monitor, { className: "w-5 h-5" })
};
const categoryColors = {
    AI: 'from-purple-500 to-pink-500',
    IT: 'from-blue-500 to-cyan-500',
    Development: 'from-green-500 to-emerald-500',
    Analytics: 'from-orange-500 to-red-500',
    Security: 'from-red-500 to-pink-500',
    Automation: 'from-yellow-500 to-orange-500',
    Integration: 'from-indigo-500 to-purple-500',
    Monitoring: 'from-teal-500 to-blue-500'
};
export default function MicroSaasServices() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('rating');
    const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    const sortedServices = [...filteredServices].sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'aiScore':
                return b.aiScore - a.aiScore;
            case 'price':
                return a.pricing.monthly - b.pricing.monthly;
            case 'name':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
    const popularServices = getPopularServices();
    const newServices = getNewServices();
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative", children: [_jsx(FuturisticAnimatedBackground, { intensity: "medium", colorScheme: "zion" }), _jsx(SEO, { title: "Micro SAAS Services - Zion Tech Group", description: "Discover innovative micro SAAS solutions for AI, IT, development, analytics, security, and automation. Real pricing, features, and benefits.", keywords: "micro SAAS, AI services, IT solutions, development tools, analytics platform, cybersecurity, automation", canonical: "https://ziontechgroup.com/micro-saas-services" }), _jsxs("div", { className: "relative overflow-hidden z-10", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20" }), _jsxs("div", { className: "relative container mx-auto px-4 py-20 text-center", children: [_jsxs("h1", { className: "text-5xl md:text-7xl font-bold text-white mb-6", children: [_jsx("span", { className: "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", children: "Micro SAAS" }), _jsx("br", {}), _jsx("span", { className: "text-zion-slate-light", children: "Solutions" })] }), _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto", children: "Discover cutting-edge micro SAAS services designed to transform your business. From AI-powered solutions to enterprise-grade tools, we've got everything you need to succeed." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(FuturisticNeonButton, { size: "lg", variant: "primary", glowIntensity: "high", icon: _jsx(TrendingUp, { className: "w-5 h-5" }), children: "Explore Services" }), _jsx(FuturisticNeonButton, { size: "lg", variant: "secondary", glowIntensity: "medium", icon: _jsx(Globe, { className: "w-5 h-5" }), children: "Contact Sales" })] })] })] }), _jsx("div", { className: "container mx-auto px-4 py-8 relative z-10", children: _jsx("div", { className: "bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light/20", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx("div", { children: _jsx(Input, { placeholder: "Search services...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light" }) }), _jsx("div", { children: _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "bg-zion-blue-dark border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Select Category" }) }), _jsxs(SelectContent, { className: "bg-zion-blue-dark border-zion-blue-light", children: [_jsx(SelectItem, { value: "all", children: "All Categories" }), Object.keys(categoryIcons).map(category => (_jsx(SelectItem, { value: category, children: category }, category)))] })] }) }), _jsx("div", { children: _jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [_jsx(SelectTrigger, { className: "bg-zion-blue-dark border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Sort by" }) }), _jsxs(SelectContent, { className: "bg-zion-blue-dark border-zion-blue-light", children: [_jsx(SelectItem, { value: "rating", children: "Highest Rated" }), _jsx(SelectItem, { value: "aiScore", children: "Best AI Score" }), _jsx(SelectItem, { value: "price", children: "Lowest Price" }), _jsx(SelectItem, { value: "name", children: "Alphabetical" })] })] }) })] }) }) }), _jsx("div", { className: "container mx-auto px-4 py-12 relative z-10", children: _jsxs(Tabs, { defaultValue: "all", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 bg-zion-blue-dark/50 backdrop-blur-md border border-zion-blue-light/20", children: [_jsx(TabsTrigger, { value: "all", className: "text-zion-cyan", children: "All Services" }), _jsx(TabsTrigger, { value: "popular", className: "text-zion-cyan", children: "Popular" }), _jsx(TabsTrigger, { value: "new", className: "text-zion-cyan", children: "New" }), _jsx(TabsTrigger, { value: "ai", className: "text-zion-cyan", children: "AI Focus" })] }), _jsx(TabsContent, { value: "all", className: "mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: sortedServices.map((service) => (_jsx(ServiceCard, { service: service }, service.id))) }) }), _jsx(TabsContent, { value: "popular", className: "mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: popularServices.map((service) => (_jsx(ServiceCard, { service: service }, service.id))) }) }), _jsx(TabsContent, { value: "new", className: "mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: newServices.map((service) => (_jsx(ServiceCard, { service: service }, service.id))) }) }), _jsx(TabsContent, { value: "ai", className: "mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: getServiceByCategory('AI').map((service) => (_jsx(ServiceCard, { service: service }, service.id))) }) })] }) }), _jsx("div", { className: "container mx-auto px-4 py-16 relative z-10", children: _jsxs("div", { className: "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-3xl p-12 text-center border border-zion-purple/30", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Contact our team to learn more about our micro SAAS services and how they can transform your business." }), _jsxs("div", { className: "flex flex-col md:flex-row justify-center items-center gap-6 text-zion-slate-light", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-5 h-5 text-zion-cyan" }), _jsx("span", { children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Bot, { className: "w-5 h-5 text-zion-cyan" }), _jsx("span", { children: "kleber@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-5 h-5 text-zion-cyan" }), _jsx("span", { children: "364 E Main St STE 1008 Middletown DE 19709" })] })] })] }) })] }));
}
function ServiceCard({ service }) {
    return (_jsxs(Card, { className: "bg-zion-blue-dark/50 backdrop-blur-md border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 group", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColors[service.category]} flex items-center justify-center`, children: categoryIcons[service.category] }), _jsxs("div", { className: "flex items-center gap-2", children: [service.isNew && (_jsxs(Badge, { className: "bg-gradient-to-r from-zion-cyan to-zion-blue text-white", children: [_jsx(Sparkles, { className: "w-3 h-3 mr-1" }), "New"] })), service.isPopular && (_jsxs(Badge, { className: "bg-gradient-to-r from-zion-purple to-zion-pink text-white", children: [_jsx(TrendingUp, { className: "w-3 h-3 mr-1" }), "Popular"] }))] })] }), _jsx(CardTitle, { className: "text-xl text-white group-hover:text-zion-cyan transition-colors", children: service.title }), _jsx(CardDescription, { className: "text-zion-slate-light", children: service.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold text-zion-cyan mb-2", children: "Key Features" }), _jsx("div", { className: "flex flex-wrap gap-1", children: service.features.slice(0, 4).map((feature, index) => (_jsx(Badge, { variant: "secondary", className: "text-xs bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light/30", children: feature }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold text-zion-cyan mb-2", children: "Benefits" }), _jsx("ul", { className: "text-sm text-zion-slate-light space-y-1", children: service.benefits.slice(0, 3).map((benefit, index) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-zion-cyan mt-2 flex-shrink-0" }), benefit] }, index))) })] }), _jsxs("div", { className: "border-t border-zion-blue-light/20 pt-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm text-zion-slate-light", children: "Starting from" }), _jsxs("span", { className: "text-2xl font-bold text-white", children: ["$", service.pricing.monthly] })] }), _jsxs("div", { className: "flex items-center justify-between text-sm text-zion-slate-light", children: [_jsxs("span", { children: ["Market average: $", service.marketPrice.average] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }), _jsx("span", { children: service.rating }), _jsxs("span", { className: "text-zion-slate-light", children: ["(", service.reviewCount, ")"] })] })] })] }), _jsxs("div", { className: "flex gap-2 pt-4", children: [_jsx(FuturisticNeonButton, { className: "flex-1", variant: "primary", glowIntensity: "medium", children: "Learn More" }), _jsx(FuturisticNeonButton, { variant: "secondary", glowIntensity: "low", children: "Contact" })] })] })] }));
}
