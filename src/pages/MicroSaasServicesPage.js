import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, ExternalLink, Play, FileText, DollarSign, Zap, Shield, BarChart3, MessageSquare, Calendar, Mail, Heart, ShoppingCart, GraduationCap, Building, Globe, TrendingUp, Award, Clock, Code } from "lucide-react";
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";
export default function MicroSaasServicesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const [filteredServices, setFilteredServices] = useState(MICRO_SAAS_SERVICES);
    const categories = [
        { value: 'all', label: 'All Categories', icon: _jsx(Globe, { className: "h-4 w-4" }) },
        { value: 'AI & ML', label: 'AI & Machine Learning', icon: _jsx(Zap, { className: "h-4 w-4" }) },
        { value: 'Development', label: 'Development Tools', icon: _jsx(Code, { className: "h-4 w-4" }) },
        { value: 'Business Tools', label: 'Business Tools', icon: _jsx(Building, { className: "h-4 w-4" }) },
        { value: 'Security', label: 'Security', icon: _jsx(Shield, { className: "h-4 w-4" }) },
        { value: 'Analytics', label: 'Analytics', icon: _jsx(BarChart3, { className: "h-4 w-4" }) },
        { value: 'Communication', label: 'Communication', icon: _jsx(MessageSquare, { className: "h-4 w-4" }) },
        { value: 'Productivity', label: 'Productivity', icon: _jsx(Calendar, { className: "h-4 w-4" }) },
        { value: 'Marketing', label: 'Marketing', icon: _jsx(Mail, { className: "h-4 w-4" }) },
        { value: 'Finance', label: 'Finance', icon: _jsx(DollarSign, { className: "h-4 w-4" }) },
        { value: 'Healthcare', label: 'Healthcare', icon: _jsx(Heart, { className: "h-4 w-4" }) },
        { value: 'Education', label: 'Education', icon: _jsx(GraduationCap, { className: "h-4 w-4" }) },
        { value: 'E-commerce', label: 'E-commerce', icon: _jsx(ShoppingCart, { className: "h-4 w-4" }) }
    ];
    const priceRanges = [
        { value: 'all', label: 'All Prices' },
        { value: '0-50', label: '$0 - $50' },
        { value: '50-100', label: '$50 - $100' },
        { value: '100-200', label: '$100 - $200' },
        { value: '200+', label: '$200+' }
    ];
    const sortOptions = [
        { value: 'featured', label: 'Featured' },
        { value: 'rating', label: 'Highest Rated' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'newest', label: 'Newest' }
    ];
    useEffect(() => {
        let filtered = MICRO_SAAS_SERVICES;
        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(service => service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        }
        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service => service.category === selectedCategory);
        }
        // Filter by price range
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            filtered = filtered.filter(service => {
                if (priceRange === '200+') {
                    return service.pricing.starter >= 200;
                }
                return service.pricing.starter >= min && service.pricing.starter <= max;
            });
        }
        // Sort services
        switch (sortBy) {
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'price-low':
                filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.pricing.starter - a.pricing.starter);
                break;
            case 'newest':
                filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
                break;
            case 'featured':
            default:
                filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
        }
        setFilteredServices(filtered);
    }, [searchQuery, selectedCategory, priceRange, sortBy]);
    const getPriceRange = (service) => {
        const { starter, professional, enterprise, currency } = service.pricing;
        return `${currency}${starter} - ${currency}${enterprise}`;
    };
    const getCategoryIcon = (category) => {
        const cat = categories.find(c => c.value === category);
        return cat ? cat.icon : _jsx(Globe, { className: "h-4 w-4" });
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark", children: [_jsx(SEO, { title: "Micro SAAS Services - Zion Tech Group", description: "Discover innovative micro SAAS solutions for your business needs. AI, security, analytics, and more with competitive pricing and expert support.", keywords: "micro saas, software as a service, business tools, AI solutions, security, analytics", canonical: "https://ziontechgroup.com/micro-saas-services" }), _jsxs("div", { className: "relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20", children: [_jsx("div", { className: "absolute inset-0 bg-black/20" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30" }), _jsx("div", { className: "absolute top-10 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full animate-pulse" }), _jsx("div", { className: "absolute top-32 right-20 w-16 h-16 bg-zion-purple/20 rounded-full animate-ping" }), _jsx("div", { className: "absolute bottom-20 left-1/4 w-12 h-12 bg-zion-blue/20 rounded-full animate-bounce" }), _jsx("div", { className: "container mx-auto px-4 relative z-10", children: _jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent", children: "Micro SAAS Solutions" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-cyan-light mb-8 leading-relaxed", children: "Transform your business with our curated collection of intelligent, innovative, and cost-effective micro SAAS services. From AI-powered tools to enterprise security solutions." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold px-8 py-3", children: [_jsx(TrendingUp, { className: "h-5 w-5 mr-2" }), "Explore Services"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold px-8 py-3", children: [_jsx(Award, { className: "h-5 w-5 mr-2" }), "View Pricing"] })] })] }) })] }), _jsx("div", { className: "py-16 bg-zion-slate-dark/50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "text-3xl md:text-4xl font-bold text-zion-cyan", children: [MICRO_SAAS_SERVICES.length, "+"] }), _jsx("div", { className: "text-zion-slate-light", children: "Micro SAAS Services" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-zion-purple-light", children: "12" }), _jsx("div", { className: "text-zion-slate-light", children: "Categories" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-zion-blue-light", children: "4.8" }), _jsx("div", { className: "text-zion-slate-light", children: "Average Rating" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-zion-cyan-light", children: "24/7" }), _jsx("div", { className: "text-zion-slate-light", children: "Support Available" })] })] }) }) }), _jsx("div", { className: "py-8 bg-zion-slate-dark border-b border-zion-blue-light", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-6 items-center justify-between", children: [_jsxs("div", { className: "relative flex-1 max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" }), _jsx(Input, { placeholder: "Search micro SAAS services...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10 bg-zion-slate border-zion-blue-light text-white placeholder-zion-slate-light" })] }), _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "w-48 bg-zion-slate border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Select Category" }) }), _jsx(SelectContent, { className: "bg-zion-slate border-zion-blue-light", children: categories.map((category) => (_jsx(SelectItem, { value: category.value, className: "text-white hover:bg-zion-blue-dark", children: _jsxs("div", { className: "flex items-center gap-2", children: [category.icon, category.label] }) }, category.value))) })] }), _jsxs(Select, { value: priceRange, onValueChange: setPriceRange, children: [_jsx(SelectTrigger, { className: "w-40 bg-zion-slate border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Price Range" }) }), _jsx(SelectContent, { className: "bg-zion-slate border-zion-blue-light", children: priceRanges.map((range) => (_jsx(SelectItem, { value: range.value, className: "text-white hover:bg-zion-blue-dark", children: range.label }, range.value))) })] }), _jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [_jsx(SelectTrigger, { className: "w-40 bg-zion-slate border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Sort by" }) }), _jsx(SelectContent, { className: "bg-zion-slate border-zion-blue-light", children: sortOptions.map((option) => (_jsx(SelectItem, { value: option.value, className: "text-white hover:bg-zion-blue-dark", children: option.label }, option.value))) })] })] }) }) }), _jsx("div", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredServices.map((service) => (_jsxs(Card, { className: "group overflow-hidden bg-zion-slate-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: service.image, alt: service.title, className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" }), service.featured && (_jsxs(Badge, { className: "absolute top-4 right-4 bg-zion-cyan text-zion-slate-dark font-semibold", children: [_jsx(Star, { className: "h-3 w-3 mr-1" }), "Featured"] })), _jsx("div", { className: "absolute top-4 left-4", children: _jsxs(Badge, { variant: "secondary", className: "bg-zion-purple/20 text-zion-purple-light border-zion-purple-light", children: [getCategoryIcon(service.category), _jsx("span", { className: "ml-1", children: service.category })] }) })] }), _jsxs(CardHeader, { className: "pb-3", children: [_jsx(CardTitle, { className: "text-xl text-white group-hover:text-zion-cyan transition-colors", children: service.title }), _jsx(CardDescription, { className: "text-zion-slate-light line-clamp-2", children: service.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}` }, i))) }), _jsxs("span", { className: "text-zion-slate-light text-sm", children: [service.rating, " (", service.reviewCount, " reviews)"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "h-4 w-4 text-zion-cyan" }), _jsx("span", { className: "text-white font-semibold", children: getPriceRange(service) }), _jsx("span", { className: "text-zion-slate-light text-sm", children: "/month" })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: service.tags.slice(0, 3).map((tag, index) => (_jsx(Badge, { variant: "outline", className: "text-xs border-zion-blue-light text-zion-slate-light", children: tag }, index))) }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-sm font-semibold text-zion-cyan", children: "Key Benefits:" }), _jsx("ul", { className: "text-xs text-zion-slate-light space-y-1", children: service.benefits.slice(0, 2).map((benefit, index) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" }), benefit] }, index))) })] })] }), _jsxs(CardFooter, { className: "flex flex-col gap-3 pt-0", children: [_jsxs("div", { className: "flex gap-2 w-full", children: [_jsx(Button, { asChild: true, className: "flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold", children: _jsxs("a", { href: service.website, target: "_blank", rel: "noopener noreferrer", children: [_jsx(ExternalLink, { className: "h-4 w-4 mr-2" }), "Visit Site"] }) }), _jsx(Button, { asChild: true, variant: "outline", className: "border-zion-purple text-zion-purple-light hover:bg-zion-purple/10", children: _jsx("a", { href: service.demo, target: "_blank", rel: "noopener noreferrer", children: _jsx(Play, { className: "h-4 w-4" }) }) })] }), _jsxs("div", { className: "flex gap-2 w-full", children: [_jsx(Button, { asChild: true, variant: "outline", className: "flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20", children: _jsxs("a", { href: service.documentation, target: "_blank", rel: "noopener noreferrer", children: [_jsx(FileText, { className: "h-4 w-4 mr-2" }), "Docs"] }) }), _jsx(Button, { asChild: true, variant: "outline", className: "flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20", children: _jsxs("a", { href: `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`, children: [_jsx(Mail, { className: "h-4 w-4 mr-2" }), "Contact"] }) })] })] })] }, service.id))) }), filteredServices.length === 0 && (_jsxs("div", { className: "text-center py-16", children: [_jsx("div", { className: "text-zion-slate-light text-lg mb-4", children: "No services found matching your criteria" }), _jsx(Button, { onClick: () => {
                                        setSearchQuery('');
                                        setSelectedCategory('all');
                                        setPriceRange('all');
                                        setSortBy('featured');
                                    }, variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: "Clear Filters" })] }))] }) }), _jsx("div", { className: "py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto", children: "Our micro SAAS solutions are designed to scale with your business. Get started today with expert support and implementation guidance." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "bg-white text-zion-slate-dark hover:bg-zion-cyan-light font-semibold px-8 py-3", children: [_jsx(Clock, { className: "h-5 w-5 mr-2" }), "Schedule Demo"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10 font-semibold px-8 py-3", children: [_jsx(MessageSquare, { className: "h-5 w-5 mr-2" }), "Contact Sales"] })] })] }) })] }));
}
