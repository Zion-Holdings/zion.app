import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { EXPANDED_SERVICES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Mail, Phone, Globe, CheckCircle, X, BarChart3, Users } from 'lucide-react';
import Target from 'lucide-react/dist/esm/icons/target';
import { SEO } from '@/components/SEO';
export default function ServiceComparisonPage() {
    const [selectedServices, setSelectedServices] = useState([]);
    const [comparisonServices, setComparisonServices] = useState([]);
    useEffect(() => {
        const services = EXPANDED_SERVICES.filter(service => selectedServices.includes(service.id));
        setComparisonServices(services);
    }, [selectedServices]);
    const handleServiceToggle = (serviceId) => {
        if (selectedServices.includes(serviceId)) {
            setSelectedServices(selectedServices.filter(id => id !== serviceId));
        }
        else {
            if (selectedServices.length < 4) {
                setSelectedServices([...selectedServices, serviceId]);
            }
        }
    };
    const getPricingModelLabel = (model) => {
        switch (model) {
            case 'hourly': return 'Hourly';
            case 'project': return 'Project-based';
            case 'subscription': return 'Subscription';
            case 'one-time': return 'One-time';
            default: return model;
        }
    };
    const getSupportLevelLabel = (level) => {
        switch (level) {
            case 'basic': return 'Basic';
            case 'premium': return 'Premium';
            case 'enterprise': return 'Enterprise';
            default: return level;
        }
    };
    const getCategoryIcon = (category) => {
        const icons = {
            'AI & Machine Learning': '🤖',
            'Cybersecurity': '🔒',
            'Cloud & DevOps': '☁️',
            'Data & Analytics': '📊',
            'Emerging Technologies': '🚀'
        };
        return icons[category] || '🔧';
    };
    const calculateSavings = (service) => {
        const marketAvg = service.marketPrice.average;
        const ourPrice = service.price;
        const savings = ((marketAvg - ourPrice) / marketAvg) * 100;
        return savings.toFixed(0);
    };
    const getFeatureComparison = (feature) => {
        return comparisonServices.map(service => {
            const hasFeature = service.features.includes(feature);
            return { serviceId: service.id, hasFeature };
        });
    };
    const getCommonFeatures = () => {
        if (comparisonServices.length === 0)
            return [];
        const allFeatures = comparisonServices.flatMap(service => service.features);
        const featureCounts = allFeatures.reduce((acc, feature) => {
            acc[feature] = (acc[feature] || 0) + 1;
            return acc;
        }, {});
        return Object.entries(featureCounts)
            .filter(([_, count]) => count > 1)
            .sort(([_, a], [__, b]) => b - a)
            .map(([feature]) => feature);
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Service Comparison - ZionTech Group", description: "Compare our comprehensive range of IT and AI services side by side. Find the perfect solution for your business needs with detailed feature comparisons and pricing analysis.", keywords: "service comparison, IT services comparison, AI services comparison, pricing comparison, feature comparison, ZionTech Group", canonical: "https://ziontechgroup.com/service-comparison" }), _jsx("div", { className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsxs("div", { className: "flex items-center justify-center mb-6", children: [_jsx(BarChart3, { className: "w-12 h-12 mr-3 text-zion-cyan" }), _jsx("h1", { className: "text-5xl font-bold", children: "Service Comparison" })] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Compare our comprehensive range of IT and AI services side by side. Find the perfect solution for your business needs with detailed feature comparisons and pricing analysis." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark", children: [_jsx(Globe, { className: "w-5 h-5 mr-2" }), "Start Comparing"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Get Expert Advice"] })] })] }) }), _jsx("div", { className: "bg-white border-b py-8", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "mb-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Select Services to Compare" }), _jsx("p", { className: "text-gray-600", children: "Choose up to 4 services to compare side by side. Select the services that best fit your business requirements." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: EXPANDED_SERVICES.map((service) => (_jsxs(Card, { className: `cursor-pointer transition-all duration-200 ${selectedServices.includes(service.id)
                                    ? 'ring-2 ring-zion-purple shadow-lg'
                                    : 'hover:shadow-md'}`, onClick: () => handleServiceToggle(service.id), children: [_jsxs(CardHeader, { className: "pb-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Checkbox, { checked: selectedServices.includes(service.id), onChange: () => handleServiceToggle(service.id) }), _jsxs(Badge, { className: "bg-zion-purple text-white text-xs", children: [getCategoryIcon(service.category), " ", service.category.split(' ')[0]] })] }), _jsx(CardTitle, { className: "text-lg leading-tight", children: service.title }), _jsx(CardDescription, { className: "text-sm line-clamp-2", children: service.description })] }), _jsx(CardContent, { className: "pt-0", children: _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "text-zion-purple font-semibold", children: [service.currency, service.price.toLocaleString()] }), _jsx("div", { className: "text-gray-500", children: getPricingModelLabel(service.pricingModel) })] }) })] }, service.id))) }), selectedServices.length > 0 && (_jsx("div", { className: "mt-6 text-center", children: _jsxs(Button, { onClick: () => setSelectedServices([]), variant: "outline", className: "text-red-600 border-red-600 hover:bg-red-50", children: [_jsx(X, { className: "w-4 h-4 mr-2" }), "Clear Selection"] }) }))] }) }), comparisonServices.length > 0 && (_jsxs("div", { className: "container mx-auto px-4 py-12", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: ["Service Comparison (", comparisonServices.length, " services)"] }), _jsx("p", { className: "text-gray-600", children: "Detailed comparison of selected services to help you make an informed decision" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-12", children: comparisonServices.map((service) => (_jsxs(Card, { className: "h-full", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs(Badge, { className: "bg-zion-purple text-white", children: [getCategoryIcon(service.category), " ", service.category] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-500 fill-current mr-1" }), _jsx("span", { className: "text-sm font-medium", children: service.rating })] })] }), _jsx(CardTitle, { className: "text-xl leading-tight", children: service.title }), _jsx(CardDescription, { className: "text-gray-600", children: service.description })] }), _jsx(CardContent, { className: "pt-0", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "text-center p-4 bg-gradient-to-r from-zion-blue to-zion-purple text-white rounded-lg", children: [_jsxs("div", { className: "text-3xl font-bold", children: [service.currency, service.price.toLocaleString()] }), _jsx("div", { className: "text-sm opacity-90", children: getPricingModelLabel(service.pricingModel) }), _jsxs("div", { className: "text-xs opacity-75 mt-1", children: ["Save ", calculateSavings(service), "% vs market average"] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [_jsxs("div", { className: "text-center p-2 bg-gray-50 rounded", children: [_jsx("div", { className: "font-semibold text-gray-900", children: service.deliveryTime }), _jsx("div", { className: "text-gray-500 text-xs", children: "Delivery" })] }), _jsxs("div", { className: "text-center p-2 bg-gray-50 rounded", children: [_jsx("div", { className: "font-semibold text-gray-900", children: getSupportLevelLabel(service.supportLevel) }), _jsx("div", { className: "text-gray-500 text-xs", children: "Support" })] })] }), _jsxs("div", { className: "text-center p-3 bg-gray-50 rounded", children: [_jsx("div", { className: "text-sm text-gray-600 mb-1", children: "Market Range" }), _jsxs("div", { className: "font-semibold text-zion-purple", children: [service.currency, service.marketPrice.min.toLocaleString(), " - ", service.currency, service.marketPrice.max.toLocaleString()] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Button, { className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact Provider"] }), _jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [_jsxs("a", { href: `mailto:${service.contactInfo.email}`, className: "flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors", children: [_jsx(Mail, { className: "w-3 h-3 mr-1" }), "Email"] }), _jsxs("a", { href: `tel:${service.contactInfo.phone}`, className: "flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors", children: [_jsx(Phone, { className: "w-3 h-3 mr-1" }), "Call"] })] })] })] }) })] }, service.id))) }), _jsxs("div", { className: "mb-12", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Feature Comparison" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full border-collapse border border-gray-200", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-50", children: [_jsx("th", { className: "border border-gray-200 p-4 text-left font-semibold text-gray-900", children: "Features" }), comparisonServices.map((service) => (_jsx("th", { className: "border border-gray-200 p-4 text-center font-semibold text-gray-900", children: service.title }, service.id)))] }) }), _jsx("tbody", { children: getCommonFeatures().map((feature) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "border border-gray-200 p-4 font-medium text-gray-900", children: feature }), comparisonServices.map((service) => (_jsx("td", { className: "border border-gray-200 p-4 text-center", children: service.features.includes(feature) ? (_jsx(CheckCircle, { className: "w-5 h-5 text-green-500 mx-auto" })) : (_jsx(X, { className: "w-5 h-5 text-red-500 mx-auto" })) }, service.id)))] }, feature))) })] }) })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Benefits Comparison" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6", children: comparisonServices.map((service) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg", children: service.title }) }), _jsx(CardContent, { children: _jsx("ul", { className: "space-y-2", children: service.benefits.map((benefit, index) => (_jsxs("li", { className: "flex items-start text-sm text-gray-600", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" }), benefit] }, index))) }) })] }, service.id))) })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Use Cases & Target Audience" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6", children: comparisonServices.map((service) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg", children: service.title }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("h4", { className: "font-semibold text-gray-900 mb-2 flex items-center", children: [_jsx(Target, { className: "w-4 h-4 mr-2 text-zion-cyan" }), "Use Cases"] }), _jsx("div", { className: "space-y-1", children: service.useCases.map((useCase, index) => (_jsx("div", { className: "text-sm text-gray-600 bg-gray-50 p-2 rounded", children: useCase }, index))) })] }), _jsxs("div", { children: [_jsxs("h4", { className: "font-semibold text-gray-900 mb-2 flex items-center", children: [_jsx(Users, { className: "w-4 h-4 mr-2 text-zion-cyan" }), "Target Audience"] }), _jsx("div", { className: "space-y-1", children: service.targetAudience.map((audience, index) => (_jsx("div", { className: "text-sm text-gray-600 bg-gray-50 p-2 rounded", children: audience }, index))) })] })] }) })] }, service.id))) })] })] })), _jsx("div", { className: "bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Need Help Choosing the Right Service?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Our expert consultants are here to help you select the perfect solution for your business needs. Get personalized recommendations and implementation guidance." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark", children: [_jsx(Phone, { className: "w-5 h-5 mr-2" }), "Schedule Consultation"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Get Expert Advice"] })] }), _jsxs("div", { className: "mt-8 text-zion-slate-light", children: [_jsx("p", { children: "Call: +1 302 464 0950 | Email: kleber@ziontechgroup.com" }), _jsx("p", { children: "Address: 364 E Main St STE 1008, Middletown DE 19709" }), _jsxs("p", { children: ["Website: ", _jsx("a", { href: "https://ziontechgroup.com", className: "text-zion-cyan hover:underline", children: "https://ziontechgroup.com" })] })] })] }) })] }));
}
