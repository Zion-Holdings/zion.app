import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Shield, BarChart3, TrendingUp } from "lucide-react";
export function FeatureCTAs() {
    const microSaasServices = [
        {
            title: "AI Content Optimizer Pro",
            description: "Advanced AI-powered content optimization tool that analyzes, improves, and optimizes your content for SEO, readability, and engagement.",
            icon: _jsx(Sparkles, { className: "h-10 w-10 p-2 rounded-md bg-gradient-to-br from-purple-100 to-cyan-100 text-purple-700" }),
            link: "/micro-saas-services",
            badge: "New",
            price: "$29/month",
            category: "AI & ML",
            details: "Improve SEO rankings by 40%, increase content engagement by 60%, and save 5+ hours per content piece."
        },
        {
            title: "Cyber Threat Monitor",
            description: "Real-time cybersecurity threat detection and monitoring system with AI-powered analysis and automated response capabilities.",
            icon: _jsx(Shield, { className: "h-10 w-10 p-2 rounded-md bg-gradient-to-br from-red-100 to-orange-100 text-red-700" }),
            link: "/micro-saas-services",
            badge: "Popular",
            price: "$99/month",
            category: "Security",
            details: "Detect threats 3x faster, reduce false positives by 70%, and provide 24/7 automated monitoring."
        },
        {
            title: "Data Visualization Studio",
            description: "Interactive data visualization platform that transforms complex data into actionable insights with customizable dashboards.",
            icon: _jsx(BarChart3, { className: "h-10 w-10 p-2 rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700" }),
            link: "/micro-saas-services",
            badge: "Featured",
            price: "$49/month",
            category: "Analytics",
            details: "Create stunning visualizations in minutes, support 50+ data sources, and export to multiple formats."
        }
    ];
    return (_jsx("div", { className: "space-y-20", children: _jsx("section", { className: "py-16 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [_jsx(Sparkles, { className: "h-8 w-8 text-zion-cyan" }), _jsx("h2", { className: "text-3xl font-bold tracking-tight text-white", children: "Micro SAAS Solutions" }), _jsx(Sparkles, { className: "h-8 w-8 text-zion-cyan" })] }), _jsx("p", { className: "text-lg text-zion-slate-light max-w-3xl mx-auto", children: "Transform your business with our curated collection of intelligent, innovative, and cost-effective micro SAAS services. From AI-powered tools to enterprise security solutions." }), _jsx("div", { className: "mt-6", children: _jsxs(Badge, { className: "bg-zion-purple/20 text-zion-purple-light border-zion-purple-light px-4 py-2 text-sm", children: [_jsx(TrendingUp, { className: "h-4 w-4 mr-2" }), "12 Categories \u2022 4.8\u2605 Rating \u2022 24/7 Support"] }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: microSaasServices.map((service, index) => (_jsxs(Card, { className: "overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:border-zion-cyan/50 bg-zion-slate-dark border-zion-blue-light group", children: [_jsxs(CardHeader, { className: "pb-3", children: [_jsxs("div", { className: "flex items-start justify-between", children: [service.icon, _jsx(Badge, { variant: "secondary", className: "bg-zion-purple/20 text-zion-purple-light border-zion-purple-light", children: service.badge })] }), _jsx(CardTitle, { className: "text-xl text-white group-hover:text-zion-cyan transition-colors", children: service.title }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-zion-slate-light", children: [_jsx("span", { className: "text-zion-cyan font-semibold", children: service.price }), _jsx("span", { children: "\u2022" }), _jsx("span", { children: service.category })] })] }), _jsxs(CardContent, { className: "pt-0", children: [_jsx(CardDescription, { className: "text-zion-slate-light mb-4", children: service.description }), _jsx("div", { className: "space-y-2 mb-4", children: _jsx("div", { className: "text-sm text-zion-cyan-light", children: service.details }) }), _jsx(Button, { asChild: true, className: "w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white", children: _jsxs(Link, { to: service.link, children: [_jsx(Sparkles, { className: "h-4 w-4 mr-2" }), "Learn More"] }) })] })] }, index))) }), _jsx("div", { className: "text-center mt-12", children: _jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white font-semibold px-8 py-3", children: _jsxs(Link, { to: "/micro-saas-services", children: [_jsx(Sparkles, { className: "h-5 w-5 mr-2" }), "View All Micro SAAS Services"] }) }) })] }) }) }));
}
