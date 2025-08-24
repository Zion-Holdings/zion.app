import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { EXPANDED_SERVICES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { TrendingUp, DollarSign, Clock, BarChart3, Mail, Phone, Globe } from 'lucide-react';
import Calculator from 'lucide-react/dist/esm/icons/calculator';
import Target from 'lucide-react/dist/esm/icons/target';
import { SEO } from '@/components/SEO';
export default function ServiceCalculatorPage() {
    const [selectedService, setSelectedService] = useState(null);
    const [inputs, setInputs] = useState({
        serviceId: '',
        companySize: 'medium',
        implementationComplexity: 'medium',
        customFeatures: 0,
        supportLevel: 'premium',
        contractDuration: 12
    });
    const [results, setResults] = useState(null);
    useEffect(() => {
        if (inputs.serviceId) {
            const service = EXPANDED_SERVICES.find(s => s.id === inputs.serviceId);
            setSelectedService(service || null);
        }
    }, [inputs.serviceId]);
    useEffect(() => {
        if (selectedService) {
            const calculatedResults = calculateServiceCosts(selectedService, inputs);
            setResults(calculatedResults);
        }
    }, [selectedService, inputs]);
    const calculateServiceCosts = (service, inputs) => {
        // Base cost adjustments based on company size
        const sizeMultiplier = {
            small: 0.8,
            medium: 1.0,
            large: 1.3,
            enterprise: 1.8
        };
        // Implementation complexity multipliers
        const complexityMultiplier = {
            low: 0.7,
            medium: 1.0,
            high: 1.5
        };
        // Support level multipliers
        const supportMultiplier = {
            basic: 0.8,
            premium: 1.0,
            enterprise: 1.4
        };
        // Calculate base cost
        let baseCost = service.price * sizeMultiplier[inputs.companySize];
        // Add custom features cost
        const customFeaturesCost = inputs.customFeatures * 500;
        // Calculate implementation cost
        const implementationCost = baseCost * 0.3 * complexityMultiplier[inputs.implementationComplexity];
        // Calculate monthly cost for subscription services
        let monthlyCost = 0;
        if (service.pricingModel === 'subscription') {
            monthlyCost = baseCost / 12;
        }
        else if (service.pricingModel === 'hourly') {
            monthlyCost = baseCost * 160; // Assuming 160 hours per month
        }
        // Apply support level multiplier
        monthlyCost *= supportMultiplier[inputs.supportLevel];
        // Calculate total first year cost
        const totalFirstYearCost = baseCost + implementationCost + (monthlyCost * 12);
        // Calculate ROI based on service benefits
        let efficiencyGains = 0;
        let costSavings = 0;
        if (service.category === 'AI & Machine Learning') {
            efficiencyGains = 300; // 300% efficiency improvement
            costSavings = totalFirstYearCost * 2.5;
        }
        else if (service.category === 'Cybersecurity') {
            efficiencyGains = 150; // 150% security improvement
            costSavings = totalFirstYearCost * 1.8;
        }
        else if (service.category === 'Cloud & DevOps') {
            efficiencyGains = 200; // 200% efficiency improvement
            costSavings = totalFirstYearCost * 2.0;
        }
        else if (service.category === 'Data & Analytics') {
            efficiencyGains = 250; // 250% efficiency improvement
            costSavings = totalFirstYearCost * 2.2;
        }
        else if (service.category === 'Emerging Technologies') {
            efficiencyGains = 400; // 400% innovation improvement
            costSavings = totalFirstYearCost * 3.0;
        }
        // Calculate ROI
        const estimatedROI = ((costSavings - totalFirstYearCost) / totalFirstYearCost) * 100;
        // Calculate payback period
        const paybackPeriod = totalFirstYearCost / (costSavings / 12);
        // Calculate implementation time
        let implementationTime = '';
        if (inputs.implementationComplexity === 'low') {
            implementationTime = '2-4 weeks';
        }
        else if (inputs.implementationComplexity === 'medium') {
            implementationTime = '4-8 weeks';
        }
        else {
            implementationTime = '8-16 weeks';
        }
        return {
            baseCost: Math.round(baseCost),
            implementationCost: Math.round(implementationCost),
            monthlyCost: Math.round(monthlyCost),
            totalFirstYearCost: Math.round(totalFirstYearCost),
            estimatedROI: Math.round(estimatedROI),
            paybackPeriod: Math.round(paybackPeriod * 10) / 10,
            implementationTime,
            costSavings: Math.round(costSavings),
            efficiencyGains
        };
    };
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };
    const getCompanySizeDescription = (size) => {
        switch (size) {
            case 'small': return '1-50 employees';
            case 'medium': return '51-200 employees';
            case 'large': return '201-1000 employees';
            case 'enterprise': return '1000+ employees';
            default: return '';
        }
    };
    const getComplexityDescription = (complexity) => {
        switch (complexity) {
            case 'low': return 'Simple integration, minimal customization';
            case 'medium': return 'Standard implementation with some customization';
            case 'high': return 'Complex integration with extensive customization';
            default: return '';
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Service Cost Calculator - ZionTech Group", description: "Calculate costs, ROI, and implementation timelines for our IT and AI services. Get accurate estimates and understand the value proposition of each solution.", keywords: "service calculator, cost calculator, ROI calculator, implementation cost, service pricing, ZionTech Group", canonical: "https://ziontechgroup.com/service-calculator" }), _jsx("div", { className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsxs("div", { className: "flex items-center justify-center mb-6", children: [_jsx(Calculator, { className: "w-12 h-12 mr-3 text-zion-cyan" }), _jsx("h1", { className: "text-5xl font-bold", children: "Service Cost Calculator" })] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Calculate costs, ROI, and implementation timelines for our comprehensive range of IT and AI services. Get accurate estimates and understand the value proposition of each solution." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark", children: [_jsx(Calculator, { className: "w-5 h-5 mr-2" }), "Start Calculating"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Get Custom Quote"] })] })] }) }), _jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-1", children: _jsxs(Card, { className: "sticky top-8", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Calculator, { className: "w-5 h-5 mr-2" }), "Calculator Inputs"] }), _jsx(CardDescription, { children: "Configure your requirements to get accurate cost estimates" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Service" }), _jsxs(Select, { value: inputs.serviceId, onValueChange: (value) => setInputs(Object.assign(Object.assign({}, inputs), { serviceId: value })), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a service..." }) }), _jsx(SelectContent, { children: EXPANDED_SERVICES.map((service) => (_jsx(SelectItem, { value: service.id, children: service.title }, service.id))) })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Company Size" }), _jsxs(Select, { value: inputs.companySize, onValueChange: (value) => setInputs(Object.assign(Object.assign({}, inputs), { companySize: value })), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "small", children: "Small (1-50 employees)" }), _jsx(SelectItem, { value: "medium", children: "Medium (51-200 employees)" }), _jsx(SelectItem, { value: "large", children: "Large (201-1000 employees)" }), _jsx(SelectItem, { value: "enterprise", children: "Enterprise (1000+ employees)" })] })] }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: getCompanySizeDescription(inputs.companySize) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Implementation Complexity" }), _jsxs(Select, { value: inputs.implementationComplexity, onValueChange: (value) => setInputs(Object.assign(Object.assign({}, inputs), { implementationComplexity: value })), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "low", children: "Low - Simple integration" }), _jsx(SelectItem, { value: "medium", children: "Medium - Standard implementation" }), _jsx(SelectItem, { value: "high", children: "High - Complex integration" })] })] }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: getComplexityDescription(inputs.implementationComplexity) })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: ["Custom Features Required: ", inputs.customFeatures] }), _jsx(Slider, { value: [inputs.customFeatures], onValueChange: (value) => setInputs(Object.assign(Object.assign({}, inputs), { customFeatures: value[0] })), max: 20, min: 0, step: 1, className: "w-full" }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Each custom feature adds ~$500 to implementation cost" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Support Level" }), _jsxs(Select, { value: inputs.supportLevel, onValueChange: (value) => setInputs(Object.assign(Object.assign({}, inputs), { supportLevel: value })), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "basic", children: "Basic Support" }), _jsx(SelectItem, { value: "premium", children: "Premium Support" }), _jsx(SelectItem, { value: "enterprise", children: "Enterprise Support" })] })] })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: ["Contract Duration: ", inputs.contractDuration, " months"] }), _jsx(Slider, { value: [inputs.contractDuration], onValueChange: (value) => setInputs(Object.assign(Object.assign({}, inputs), { contractDuration: value[0] })), max: 36, min: 6, step: 6, className: "w-full" }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Longer contracts may qualify for volume discounts" })] })] })] }) }), _jsx("div", { className: "lg:col-span-2", children: selectedService && results ? (_jsxs("div", { className: "space-y-6", children: [_jsx(Card, { children: _jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(CardTitle, { className: "text-2xl", children: selectedService.title }), _jsx(CardDescription, { className: "text-lg", children: selectedService.description })] }), _jsx(Badge, { className: "bg-zion-purple text-white text-lg px-4 py-2", children: selectedService.category })] }) }) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center text-green-600", children: [_jsx(DollarSign, { className: "w-5 h-5 mr-2" }), "Cost Breakdown"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Base Service Cost:" }), _jsx("span", { className: "font-semibold", children: formatCurrency(results.baseCost) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Implementation Cost:" }), _jsx("span", { className: "font-semibold", children: formatCurrency(results.implementationCost) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Monthly Cost:" }), _jsx("span", { className: "font-semibold", children: formatCurrency(results.monthlyCost) })] }), _jsx("div", { className: "border-t pt-2", children: _jsxs("div", { className: "flex justify-between text-lg font-bold", children: [_jsx("span", { children: "Total First Year:" }), _jsx("span", { className: "text-green-600", children: formatCurrency(results.totalFirstYearCost) })] }) })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center text-blue-600", children: [_jsx(TrendingUp, { className: "w-5 h-5 mr-2" }), "ROI Analysis"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Estimated ROI:" }), _jsxs("span", { className: "font-semibold text-green-600", children: [results.estimatedROI, "%"] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Payback Period:" }), _jsxs("span", { className: "font-semibold", children: [results.paybackPeriod, " months"] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Cost Savings:" }), _jsx("span", { className: "font-semibold text-green-600", children: formatCurrency(results.costSavings) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Efficiency Gains:" }), _jsxs("span", { className: "font-semibold text-blue-600", children: [results.efficiencyGains, "%"] })] })] })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Clock, { className: "w-5 h-5 mr-2" }), "Implementation Details"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center p-4 bg-blue-50 rounded-lg", children: [_jsx("div", { className: "text-2xl font-bold text-blue-600", children: results.implementationTime }), _jsx("div", { className: "text-sm text-gray-600", children: "Implementation Time" })] }), _jsxs("div", { className: "text-center p-4 bg-green-50 rounded-lg", children: [_jsxs("div", { className: "text-2xl font-bold text-green-600", children: [results.paybackPeriod, " months"] }), _jsx("div", { className: "text-sm text-gray-600", children: "Payback Period" })] }), _jsxs("div", { className: "text-center p-4 bg-purple-50 rounded-lg", children: [_jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [results.estimatedROI, "%"] }), _jsx("div", { className: "text-sm text-gray-600", children: "ROI" })] })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(BarChart3, { className: "w-5 h-5 mr-2" }), "Market Price Comparison"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center p-4 bg-gray-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: "Market Average Price" }), _jsx("div", { className: "text-sm text-gray-600", children: "Based on industry standards" })] }), _jsx("div", { className: "text-2xl font-bold text-gray-700", children: formatCurrency(selectedService.marketPrice.average) })] }), _jsxs("div", { className: "flex justify-between items-center p-4 bg-green-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("div", { className: "font-semibold text-green-700", children: "Our Price" }), _jsx("div", { className: "text-sm text-green-600", children: "Competitive pricing" })] }), _jsx("div", { className: "text-2xl font-bold text-green-700", children: formatCurrency(results.totalFirstYearCost) })] }), _jsxs("div", { className: "flex justify-between items-center p-4 bg-blue-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("div", { className: "font-semibold text-blue-700", children: "Total Savings" }), _jsx("div", { className: "text-sm text-blue-600", children: "vs market average" })] }), _jsx("div", { className: "text-2xl font-bold text-blue-700", children: formatCurrency(selectedService.marketPrice.average - results.totalFirstYearCost) })] })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Target, { className: "w-5 h-5 mr-2" }), "Next Steps"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("p", { className: "text-gray-600", children: ["Based on your requirements, this service offers excellent value with a ", results.estimatedROI, "% ROI and payback period of ", results.paybackPeriod, " months. Here's what you can do next:"] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs(Button, { className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Request Detailed Quote"] }), _jsxs(Button, { className: "w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark", children: [_jsx(Phone, { className: "w-4 h-4 mr-2" }), "Schedule Consultation"] })] }), _jsxs("div", { className: "text-sm text-gray-500 text-center", children: ["Contact us at ", selectedService.contactInfo.email, " or call ", selectedService.contactInfo.phone] })] }) })] })] })) : (_jsxs(Card, { className: "text-center py-12", children: [_jsx(Calculator, { className: "w-16 h-16 text-gray-400 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Select a Service to Calculate Costs" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Choose a service from the dropdown menu to see detailed cost breakdowns, ROI projections, and implementation timelines." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { className: "bg-zion-purple hover:bg-zion-purple-dark", children: [_jsx(Globe, { className: "w-4 h-4 mr-2" }), "Browse All Services"] }), _jsxs(Button, { variant: "outline", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Get Custom Quote"] })] })] })) })] }) }), _jsx("div", { className: "bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Need More Accurate Estimates?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Our expert consultants can provide you with detailed, customized quotes based on your specific requirements and business context. Get in touch for personalized pricing and implementation guidance." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark", children: [_jsx(Phone, { className: "w-5 h-5 mr-2" }), "Call +1 302 464 0950"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Email kleber@ziontechgroup.com"] })] }), _jsxs("div", { className: "mt-8 text-zion-slate-light", children: [_jsx("p", { children: "Address: 364 E Main St STE 1008, Middletown DE 19709" }), _jsxs("p", { children: ["Website: ", _jsx("a", { href: "https://ziontechgroup.com", className: "text-zion-cyan hover:underline", children: "https://ziontechgroup.com" })] })] })] }) })] }));
}
