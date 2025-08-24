import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Zap, Shield, Brain, Code, BarChart3, Settings, Globe } from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '../data/microSaasServices';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
const categoryIcons = {
    'AI': Brain,
    'IT': Settings,
    'Business': TrendingUp,
    'Development': Code,
    'Marketing': Zap,
    'Analytics': BarChart3,
    'Security': Shield,
    'Automation': Settings
};
const MicroSaasServices = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [priceRange, setPriceRange] = useState(1000);
    const filteredServices = useMemo(() => {
        let filtered = MICRO_SAAS_SERVICES.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
            const matchesPrice = service.pricing.some(plan => plan.price <= priceRange);
            return matchesSearch && matchesCategory && matchesPrice;
        });
        // Sort services
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'price':
                    const aMinPrice = Math.min(...a.pricing.map(p => p.price));
                    const bMinPrice = Math.min(...b.pricing.map(p => p.price));
                    return aMinPrice - bMinPrice;
                case 'category':
                    return a.category.localeCompare(b.category);
                default:
                    return 0;
            }
        });
        return filtered;
    }, [searchTerm, selectedCategory, sortBy, priceRange]);
    const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category)))];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden", children: [_jsx(FuturisticAnimatedBackground, {}), _jsxs(motion.div, { className: "relative z-10 text-center py-20 px-4", initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx(motion.h1, { className: "text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.2 }, children: "Micro SAAS Solutions" }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: "Discover innovative, intelligent, and diversified micro SAAS services designed to transform your business operations and drive growth" }), _jsxs(motion.div, { className: "flex flex-wrap justify-center gap-4 text-zion-cyan", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.6 }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6" }), _jsx("span", { children: "AI-Powered" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Zap, { className: "w-6 h-6" }), _jsx("span", { children: "Lightning Fast" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-6 h-6" }), _jsx("span", { children: "Enterprise Ready" })] })] })] }), _jsx(motion.div, { className: "relative z-10 max-w-6xl mx-auto px-4 mb-12", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: _jsx(Card, { className: "bg-zion-blue-dark/50 backdrop-blur-lg border-zion-blue-light/30 p-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" }), _jsx(Input, { type: "text", placeholder: "Search services...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan" })] }), _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx("option", { value: "all", children: "All Categories" }), categories.filter(cat => cat !== 'all').map(category => (_jsx("option", { value: category, children: category }, category)))] }), _jsxs(Select, { value: sortBy, onValueChange: (value) => setSortBy(value), children: [_jsx("option", { value: "name", children: "Sort by Name" }), _jsx("option", { value: "price", children: "Sort by Price" }), _jsx("option", { value: "category", children: "Sort by Category" })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm text-zion-slate-light mb-2", children: ["Max Price: $", priceRange] }), _jsx("input", { type: "range", min: "0", max: "10000", step: "100", value: priceRange, onChange: (e) => setPriceRange(Number(e.target.value)), className: "w-full h-2 bg-zion-slate-dark rounded-lg appearance-none cursor-pointer slider" })] })] }) }) }), _jsxs(motion.div, { className: "relative z-10 max-w-7xl mx-auto px-4 pb-20", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredServices.map((service) => {
                            const CategoryIcon = categoryIcons[service.category] || Globe;
                            const minPrice = Math.min(...service.pricing.map(p => p.price));
                            const maxPrice = Math.max(...service.pricing.map(p => p.price));
                            return (_jsx(motion.div, { variants: itemVariants, whileHover: { y: -10, scale: 1.02 }, className: "group", children: _jsxs(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full overflow-hidden", children: [_jsxs("div", { className: "p-6 border-b border-zion-blue-light/20", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-2 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg", children: _jsx(CategoryIcon, { className: "w-6 h-6 text-white" }) }), _jsx(Badge, { variant: "outline", className: "border-zion-cyan/50 text-zion-cyan", children: service.category })] }), service.status === 'coming-soon' && (_jsx(Badge, { variant: "secondary", className: "bg-zion-purple/20 text-zion-purple border-zion-purple/30", children: "Coming Soon" }))] }), _jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors", children: service.title }), _jsx("p", { className: "text-zion-slate-light text-sm leading-relaxed mb-4", children: service.description }), _jsxs("div", { className: "bg-zion-slate-dark/30 rounded-lg p-4 mb-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-zion-slate-light text-sm", children: "Starting from" }), _jsxs("span", { className: "text-zion-cyan font-bold", children: ["$", minPrice, minPrice !== maxPrice && ` - $${maxPrice}`] })] }), _jsxs("div", { className: "text-xs text-zion-slate-light", children: [service.pricing.length, " pricing plans available"] })] })] }), _jsxs("div", { className: "p-6", children: [_jsxs("h4", { className: "text-white font-semibold mb-3 flex items-center gap-2", children: [_jsx(Zap, { className: "w-4 h-4 text-zion-cyan" }), "Key Features"] }), _jsxs("div", { className: "grid grid-cols-1 gap-2 mb-4", children: [service.features.slice(0, 4).map((feature, index) => (_jsxs("div", { className: "flex items-center gap-2 text-sm text-zion-slate-light", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-zion-cyan rounded-full" }), feature] }, index))), service.features.length > 4 && (_jsxs("div", { className: "text-xs text-zion-cyan", children: ["+", service.features.length - 4, " more features"] }))] }), _jsxs("div", { className: "mb-4", children: [_jsxs("h4", { className: "text-white font-semibold mb-2 flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-4 h-4 text-zion-cyan" }), "Benefits"] }), _jsxs("div", { className: "text-sm text-zion-slate-light", children: [service.benefits[0], " \u2022 ", service.benefits[1]] })] }), _jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: service.tags.slice(0, 3).map((tag, index) => (_jsx(Badge, { variant: "outline", className: "text-xs border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan transition-colors", children: tag }, index))) }), _jsxs("div", { className: "flex gap-3", children: [_jsx(FuturisticNeonButton, { onClick: () => window.location.href = `mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`, className: "flex-1", children: "Get Quote" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => window.location.href = `tel:${service.contactInfo.phone}`, className: "border-zion-blue-light/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan", children: "Call Now" })] })] })] }) }, service.id));
                        }) }), filteredServices.length === 0 && (_jsxs(motion.div, { className: "text-center py-20", initial: { opacity: 0 }, animate: { opacity: 1 }, children: [_jsx("div", { className: "text-zion-slate-light text-lg mb-4", children: "No services found matching your criteria" }), _jsx(Button, { onClick: () => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                    setPriceRange(10000);
                                }, className: "bg-zion-cyan hover:bg-zion-cyan-light text-white", children: "Clear Filters" })] }))] }), _jsx(motion.div, { className: "relative z-10 max-w-4xl mx-auto px-4 pb-20", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1.2 }, children: _jsxs(Card, { className: "bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto", children: "Our team of experts is ready to help you implement the perfect solution for your business needs. Get in touch today for a personalized consultation." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(FuturisticNeonButton, { onClick: () => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request', size: "lg", children: "Schedule Consultation" }), _jsx(Button, { variant: "outline", size: "lg", onClick: () => window.location.href = 'tel:+13024640950', className: "border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan", children: "Call +1 (302) 464-0950" })] }), _jsxs("div", { className: "mt-6 text-zion-slate-light", children: [_jsx("p", { children: "\uD83D\uDCCD 364 E Main St STE 1008, Middletown DE 19709" }), _jsx("p", { children: "\uD83D\uDCE7 kleber@ziontechgroup.com" })] })] }) })] }));
};
export default MicroSaasServices;
