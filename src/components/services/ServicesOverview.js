import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getFeaturedServices, getServicesByCategory } from '@/data/microSaasServices';
import { Brain, Cloud, Zap, Star, CheckCircle, ArrowRight, Mail, Phone, ExternalLink, Eye, Clock } from 'lucide-react';
const categoryIcons = {
    'AI Services': _jsx(Brain, { className: "w-6 h-6" }),
    'IT Services': _jsx(Cloud, { className: "w-6 h-6" }),
    'Innovative Solutions': _jsx(Zap, { className: "w-6 h-6" })
};
const categoryColors = {
    'AI Services': 'from-purple-500 to-indigo-600',
    'IT Services': 'from-blue-500 to-cyan-600',
    'Innovative Solutions': 'from-green-500 to-emerald-600'
};
const categoryDescriptions = {
    'AI Services': 'Cutting-edge artificial intelligence solutions to automate, optimize, and transform your business operations.',
    'IT Services': 'Professional IT consulting, infrastructure management, and digital transformation services.',
    'Innovative Solutions': 'Next-generation technology solutions including blockchain, IoT, and AR/VR applications.'
};
export function ServicesOverview() {
    const featuredServices = getFeaturedServices();
    const aiServices = getServicesByCategory('AI Services');
    const itServices = getServicesByCategory('IT Services');
    const innovativeServices = getServicesByCategory('Innovative Solutions');
    const formatPrice = (price, model) => {
        if (model === 'monthly')
            return `$${price}/month`;
        if (model === 'yearly')
            return `$${price}/year`;
        if (model === 'per-user')
            return `$${price}/user`;
        if (model === 'usage-based')
            return `$${price}/usage`;
        return `$${price}`;
    };
    const getSupportLevelColor = (level) => {
        switch (level) {
            case 'basic': return 'bg-gray-100 text-gray-800';
            case 'standard': return 'bg-blue-100 text-blue-800';
            case 'premium': return 'bg-purple-100 text-purple-800';
            case 'enterprise': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Comprehensive Technology Services" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-4xl mx-auto mb-8", children: "From AI-powered automation to enterprise IT solutions, we provide the technology services your business needs to thrive in the digital age." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/micro-saas-services", children: _jsxs(Button, { size: "lg", className: "bg-zion-purple hover:bg-zion-purple-dark", children: ["View All Services", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }) }), _jsx(Link, { to: "/services-pricing", children: _jsx(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-zion-blue", children: "Compare Pricing" }) })] })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h3", { className: "text-2xl font-bold text-white text-center mb-8", children: "Featured Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: featuredServices.map((service) => (_jsxs(Card, { className: "h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("div", { className: `rounded-full w-16 h-16 bg-gradient-to-br ${categoryColors[service.category]} flex items-center justify-center`, children: _jsx("div", { className: "text-white", children: categoryIcons[service.category] }) }), _jsx(Badge, { variant: "secondary", className: "bg-zion-purple/10 text-zion-purple border-zion-purple/20", children: "Featured" })] }), _jsx(CardTitle, { className: "text-xl mb-3 text-gray-900", children: service.title }), _jsx(CardDescription, { className: "text-gray-600 line-clamp-3", children: service.description })] }), _jsxs(CardContent, { className: "pt-0", children: [_jsxs("div", { className: "mb-4", children: [_jsx("div", { className: "text-2xl font-bold text-zion-purple", children: formatPrice(service.price, service.pricingModel) }), service.freeTrial && (_jsxs("div", { className: "text-sm text-green-600 flex items-center gap-1", children: [_jsx(CheckCircle, { className: "w-4 h-4" }), service.freeTrialDays, "-day free trial"] }))] }), _jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Key Benefits:" }), _jsx("div", { className: "space-y-1", children: service.benefits.slice(0, 2).map((benefit, index) => (_jsxs("div", { className: "text-sm text-gray-600 flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }), benefit] }, index))) })] }), _jsx("div", { className: "flex items-center gap-2 mb-4", children: _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-500 fill-current" }), _jsx("span", { className: "text-sm font-medium", children: service.rating }), _jsxs("span", { className: "text-sm text-gray-500", children: ["(", service.reviewCount, " reviews)"] })] }) }), _jsxs("div", { className: "space-y-2", children: [_jsx(Button, { className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: "Get Started" }), _jsxs("div", { className: "flex gap-2", children: [service.website && (_jsxs(Button, { variant: "outline", size: "sm", className: "flex-1", children: [_jsx(ExternalLink, { className: "w-4 h-4 mr-1" }), "Website"] })), service.demoUrl && (_jsxs(Button, { variant: "outline", size: "sm", className: "flex-1", children: [_jsx(Eye, { className: "w-4 h-4 mr-1" }), "Demo"] }))] })] })] })] }, service.id))) })] }), _jsxs(Tabs, { defaultValue: "ai", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 bg-white/10", children: [_jsxs(TabsTrigger, { value: "ai", className: "text-white data-[state=active]:bg-zion-purple", children: [_jsx(Brain, { className: "w-5 h-5 mr-2" }), "AI Services"] }), _jsxs(TabsTrigger, { value: "it", className: "text-white data-[state=active]:bg-zion-purple", children: [_jsx(Cloud, { className: "w-5 h-5 mr-2" }), "IT Services"] }), _jsxs(TabsTrigger, { value: "innovative", className: "text-white data-[state=active]:bg-zion-purple", children: [_jsx(Zap, { className: "w-5 h-5 mr-2" }), "Innovative Solutions"] })] }), _jsxs(TabsContent, { value: "ai", className: "mt-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "AI Services" }), _jsx("p", { className: "text-zion-slate-light max-w-2xl mx-auto", children: categoryDescriptions['AI Services'] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: aiServices.map((service) => (_jsx(ServiceCard, { service: service }, service.id))) })] }), _jsxs(TabsContent, { value: "it", className: "mt-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "IT Services" }), _jsx("p", { className: "text-zion-slate-light max-w-2xl mx-auto", children: categoryDescriptions['IT Services'] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: itServices.map((service) => (_jsx(ServiceCard, { service: service }, service.id))) })] }), _jsxs(TabsContent, { value: "innovative", className: "mt-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Innovative Solutions" }), _jsx("p", { className: "text-zion-slate-light max-w-2xl mx-auto", children: categoryDescriptions['Innovative Solutions'] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: innovativeServices.map((service) => (_jsx(ServiceCard, { service: service }, service.id))) })] })] }), _jsx("div", { className: "mt-20 text-center", children: _jsxs("div", { className: "bg-white rounded-2xl p-8 md:p-12 shadow-xl", children: [_jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto mb-8", children: "Our expert team can create tailored technology solutions that perfectly fit your business needs. Get in touch for a free consultation and discover how we can help you succeed." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-purple hover:bg-zion-purple-dark", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Schedule Free Consultation"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white", children: [_jsx(Phone, { className: "w-5 h-5 mr-2" }), "Call +1 302 464 0950"] })] }), _jsxs("div", { className: "mt-6 text-sm text-gray-500", children: [_jsx("p", { children: "\uD83D\uDCCD 364 E Main St STE 1008, Middletown DE 19709" }), _jsxs("p", { children: ["\uD83C\uDF10 ", _jsx("a", { href: "https://ziontechgroup.com", className: "text-zion-purple hover:underline", children: "ziontechgroup.com" })] })] })] }) })] }) }));
}
// Service Card Component
function ServiceCard({ service }) {
    const formatPrice = (price, model) => {
        if (model === 'monthly')
            return `$${price}/month`;
        if (model === 'yearly')
            return `$${price}/year`;
        if (model === 'per-user')
            return `$${price}/user`;
        if (model === 'usage-based')
            return `$${price}/usage`;
        return `$${price}`;
    };
    return (_jsxs(Card, { className: "h-full bg-white hover:shadow-lg transition-shadow duration-300", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsx("div", { className: `rounded-full w-12 h-12 bg-gradient-to-br ${categoryColors[service.category]} flex items-center justify-center`, children: _jsx("div", { className: "text-white", children: categoryIcons[service.category] }) }), _jsx(Badge, { variant: "secondary", className: "bg-zion-purple/10 text-zion-purple border-zion-purple/20", children: service.subcategory })] }), _jsx(CardTitle, { className: "text-lg mb-2 text-gray-900", children: service.title }), _jsx(CardDescription, { className: "text-gray-600 text-sm line-clamp-3", children: service.description })] }), _jsxs(CardContent, { className: "pt-0", children: [_jsxs("div", { className: "mb-3", children: [_jsx("div", { className: "text-xl font-bold text-zion-purple", children: formatPrice(service.price, service.pricingModel) }), service.freeTrial && (_jsxs("div", { className: "text-sm text-green-600 flex items-center gap-1", children: [_jsx(CheckCircle, { className: "w-4 h-4" }), service.freeTrialDays, "-day free trial"] }))] }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500 mb-4", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsxs("span", { children: ["Setup: ", service.setupTime] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Button, { size: "sm", className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: "Get Started" }), _jsx(Link, { to: `/micro-saas-services#${service.id}`, children: _jsxs(Button, { size: "sm", variant: "outline", className: "w-full", children: ["Learn More", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] }) })] })] })] }));
}
