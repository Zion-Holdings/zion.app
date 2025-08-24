import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, CONTACT_INFO } from "@/data/microSaasServices";
import { Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, ShoppingCart, GraduationCap, Star, TrendingUp, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
const categoryIcons = {
    'AI Business Solutions': Brain,
    'IT Infrastructure': Cloud,
    'Data Analytics': BarChart3,
    'AI Development': Code,
    'FinTech': DollarSign,
    'HealthTech': Heart,
    'E-commerce': ShoppingCart,
    'EdTech': GraduationCap
};
const categoryColors = {
    'AI Business Solutions': 'from-purple-500 to-indigo-600',
    'IT Infrastructure': 'from-blue-500 to-cyan-600',
    'Data Analytics': 'from-green-500 to-emerald-600',
    'AI Development': 'from-orange-500 to-red-600',
    'FinTech': 'from-yellow-500 to-orange-600',
    'HealthTech': 'from-pink-500 to-rose-600',
    'E-commerce': 'from-indigo-500 to-purple-600',
    'EdTech': 'from-teal-500 to-green-600'
};
const features = [
    "AI-Powered Automation",
    "Real-time Analytics",
    "Multi-cloud Support",
    "API-First Architecture",
    "Scalable Infrastructure",
    "Custom Integrations",
    "White-label Solutions",
    "Comprehensive Documentation",
    "24/7 Technical Support",
    "99.9% Uptime Guarantee",
    "SOC 2 Type II Compliant",
    "30-Day Money Back Guarantee"
];
const benefits = [
    {
        icon: _jsx(Zap, { className: "h-6 w-6" }),
        title: "Immediate Deployment",
        description: "All services are ready for immediate deployment with no setup delays"
    },
    {
        icon: _jsx(Shield, { className: "h-6 w-6" }),
        title: "Enterprise Security",
        description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
    },
    {
        icon: _jsx(TrendingUp, { className: "h-6 w-6" }),
        title: "Proven ROI",
        description: "Average 300% ROI within 6 months of implementation"
    },
    {
        icon: _jsx(CheckCircle, { className: "h-6 w-6" }),
        title: "Quality Guaranteed",
        description: "30-day money-back guarantee with free migration support"
    }
];
export function ServicesShowcase() {
    const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 6);
    return (_jsx("div", { className: "py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Comprehensive Micro SAAS Solutions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-4xl mx-auto mb-8", children: "Transform your business with our enterprise-grade micro SAAS services. From AI automation to infrastructure management, we provide solutions that scale with your growth." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/micro-saas-services", children: _jsxs(Button, { size: "lg", className: "bg-white text-zion-blue hover:bg-gray-100", children: [_jsx(Brain, { className: "h-5 w-5 mr-2" }), "Explore All Services"] }) }), _jsx(Link, { to: "/contact", children: _jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-zion-blue", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Get Consultation"] }) })] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-20", children: MICRO_SAAS_CATEGORIES.map((category) => {
                        const IconComponent = categoryIcons[category.label];
                        const colorClass = categoryColors[category.label];
                        return (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: `mx-auto w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center mb-4`, children: IconComponent && _jsx(IconComponent, { className: "h-8 w-8 text-white" }) }), _jsx(CardTitle, { className: "text-lg", children: category.label })] }), _jsx(CardContent, { className: "text-center", children: _jsxs("p", { className: "text-zion-slate-light text-sm", children: [MICRO_SAAS_SERVICES.filter(s => s.category === category.label).length, " services available"] }) })] }, category.value));
                    }) }), _jsxs("div", { className: "mb-20", children: [_jsx("h3", { className: "text-3xl font-bold text-white text-center mb-12", children: "Featured Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: featuredServices.map((service) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: service.images[0], alt: service.title, className: "w-full h-48 object-cover rounded-t-lg" }), _jsx(Badge, { className: "absolute top-4 right-4 bg-zion-purple", children: service.category })] }), _jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-xl", children: service.title }), _jsxs(CardDescription, { className: "text-zion-slate-light", children: [service.description.substring(0, 100), "..."] })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "h-4 w-4 text-yellow-400 mr-1" }), _jsx("span", { className: "text-sm", children: service.rating }), _jsxs("span", { className: "text-zion-slate-light text-sm ml-1", children: ["(", service.reviewCount, ")"] })] }), _jsxs(Badge, { variant: "secondary", className: "bg-zion-purple/20 text-zion-cyan", children: ["AI Score: ", service.aiScore] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "text-2xl font-bold text-zion-cyan", children: ["$", service.price, _jsx("span", { className: "text-sm text-zion-slate-light", children: "/month" })] }), _jsx(Button, { size: "sm", className: "bg-zion-purple hover:bg-zion-purple-dark", children: "Learn More" })] })] })] }, service.id))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h3", { className: "text-3xl font-bold text-white text-center mb-12", children: "Enterprise Features, Startup Pricing" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: features.map((feature, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(CheckCircle, { className: "h-10 w-10 text-zion-purple" }) }), _jsx("p", { className: "font-medium text-white text-sm", children: feature })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h3", { className: "text-3xl font-bold text-white text-center mb-12", children: "Why Choose Zion Tech Group?" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: benefits.map((benefit, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-blue-light text-white", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "mx-auto w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4", children: benefit.icon }), _jsx(CardTitle, { className: "text-xl", children: benefit.title })] }), _jsx(CardContent, { className: "text-center", children: _jsx("p", { className: "text-zion-slate-light", children: benefit.description }) })] }, index))) })] }), _jsxs("div", { className: "bg-white rounded-2xl p-8 md:p-12", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h3", { className: "text-3xl font-bold text-zion-blue mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-gray-600 text-lg max-w-3xl mx-auto", children: "Get in touch with our team to discuss your needs and discover how our micro SAAS solutions can drive your success" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-2xl font-bold text-zion-blue mb-6", children: "Contact Information" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-5 w-5 text-zion-purple mr-3" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Phone" }), _jsx("p", { className: "text-gray-600", children: CONTACT_INFO.mobile })] })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 text-zion-purple mr-3" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Email" }), _jsx("p", { className: "text-gray-600", children: CONTACT_INFO.email })] })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(MapPin, { className: "h-5 w-5 text-zion-purple mr-3" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Address" }), _jsx("p", { className: "text-gray-600", children: CONTACT_INFO.address })] })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Globe, { className: "h-5 w-5 text-zion-purple mr-3" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Website" }), _jsx("a", { href: CONTACT_INFO.website, className: "text-zion-cyan hover:underline", children: CONTACT_INFO.website })] })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-2xl font-bold text-zion-blue mb-6", children: "Quick Actions" }), _jsxs("div", { className: "space-y-4", children: [_jsx(Link, { to: "/request-quote", children: _jsx(Button, { className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: "Request Custom Quote" }) }), _jsx(Link, { to: "/contact", children: _jsx(Button, { variant: "outline", className: "w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white", children: "Schedule Consultation" }) }), _jsx(Link, { to: "/micro-saas-services", children: _jsx(Button, { variant: "outline", className: "w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white", children: "View All Services" }) })] }), _jsxs("div", { className: "mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20", children: [_jsx("h5", { className: "font-medium text-zion-blue mb-2", children: "What's Included:" }), _jsxs("ul", { className: "text-sm text-gray-600 space-y-1", children: [_jsx("li", { children: "\u2022 24/7 Technical Support" }), _jsx("li", { children: "\u2022 99.9% Uptime Guarantee" }), _jsx("li", { children: "\u2022 SOC 2 Type II Compliant" }), _jsx("li", { children: "\u2022 30-Day Money Back Guarantee" }), _jsx("li", { children: "\u2022 Free Migration Support" }), _jsx("li", { children: "\u2022 Custom Integration Services" })] })] })] })] }), _jsx("div", { className: "text-center mt-12", children: _jsx(Link, { to: "/micro-saas-services", children: _jsxs(Button, { size: "lg", className: "bg-zion-purple hover:bg-zion-purple-dark", children: ["Explore All Micro SAAS Services", _jsx(ArrowRight, { className: "h-5 w-5 ml-2" })] }) }) })] })] }) }));
}
