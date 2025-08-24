import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Webhook, Key } from "lucide-react";
import { Link } from "react-router-dom";
export default function Developers() {
    const features = [
        {
            icon: _jsx(Code, { className: "h-8 w-8 text-zion-cyan" }),
            title: "RESTful API",
            description: "Comprehensive REST API with JSON responses, rate limiting, and authentication.",
            badge: "Production Ready"
        },
        {
            icon: _jsx(Database, { className: "h-8 w-8 text-zion-purple" }),
            title: "Real-time Data",
            description: "Access to live marketplace data including jobs, talent, and services.",
            badge: "Live Data"
        },
        {
            icon: _jsx(Webhook, { className: "h-8 w-8 text-zion-purple-light" }),
            title: "Webhooks",
            description: "Receive real-time notifications when data changes in the marketplace.",
            badge: "Real-time"
        },
        {
            icon: _jsx(Key, { className: "h-8 w-8 text-zion-cyan" }),
            title: "API Keys",
            description: "Secure authentication with API keys and role-based access control.",
            badge: "Secure"
        }
    ];
    const quickStartSteps = [
        {
            step: "1",
            title: "Get API Key",
            description: "Sign up and generate your API key from the dashboard."
        },
        {
            step: "2",
            title: "Read Documentation",
            description: "Explore our comprehensive API documentation and examples."
        },
        {
            step: "3",
            title: "Make First Request",
            description: "Start with simple GET requests to explore the data."
        },
        {
            step: "4",
            title: "Build & Scale",
            description: "Integrate our API into your applications and scale as needed."
        }
    ];
    const apiEndpoints = [
        {
            method: "GET",
            endpoint: "/v1/jobs",
            description: "Retrieve job listings with filtering and pagination"
        },
        {
            method: "GET",
            endpoint: "/v1/talent",
            description: "Access talent profiles and skills information"
        },
        {
            method: "GET",
            endpoint: "/v1/services",
            description: "Browse available services and categories"
        },
        {
            method: "POST",
            endpoint: "/v1/quotes",
            description: "Submit quote requests for services"
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-zion-blue", children: [_jsx(SEO, { title: "Developer API - Zion Tech Group", description: "Access Zion's comprehensive API for jobs, talent, and services. Build powerful integrations with our marketplace data.", keywords: "API, developers, integration, marketplace API, jobs API, talent API", canonical: "https://ziontechgroup.com/developers" }), _jsx("main", { className: "pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { className: "text-4xl md:text-6xl mb-6", children: "Developer API" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Build powerful integrations with Zion's marketplace data. Access jobs, talent, services, and more through our comprehensive REST API." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-zion-purple hover:bg-zion-purple-light", children: _jsx(Link, { to: "/dashboard/developers/api-keys", children: "Get API Key" }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: _jsx(Link, { to: "/dashboard/developers/documentation", children: "View Documentation" }) })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: features.map((feature, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors", children: [_jsx(CardHeader, { className: "pb-3", children: _jsxs("div", { className: "flex items-center justify-between", children: [feature.icon, _jsx(Badge, { variant: "secondary", className: "bg-zion-purple/20 text-zion-cyan border-zion-purple/30", children: feature.badge })] }) }), _jsxs(CardContent, { children: [_jsx("h3", { className: "font-semibold text-white mb-2", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm", children: feature.description })] })] }, index))) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center mb-12", children: "Quick Start Guide" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: quickStartSteps.map((step, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 text-center", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx("span", { className: "text-zion-cyan font-bold text-xl", children: step.step }) }), _jsx(CardTitle, { className: "text-white text-lg", children: step.title })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-zion-slate-light text-sm", children: step.description }) })] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center mb-12", children: "Popular API Endpoints" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: apiEndpoints.map((endpoint, index) => (_jsx(Card, { className: "bg-zion-blue-dark border-zion-purple/20", children: _jsxs(CardContent, { className: "pt-6", children: [_jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx(Badge, { variant: "secondary", className: `${endpoint.method === 'GET'
                                                                ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                                                : 'bg-blue-500/20 text-blue-400 border-blue-500/30'}`, children: endpoint.method }), _jsx("code", { className: "text-zion-cyan font-mono text-sm", children: endpoint.endpoint })] }), _jsx("p", { className: "text-zion-slate-light", children: endpoint.description })] }) }, index))) })] }), _jsx("div", { className: "text-center", children: _jsx(Card, { className: "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-zion-purple/40", children: _jsxs(CardContent, { className: "pt-8 pb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Get Started?" }), _jsx("p", { className: "text-zion-slate-light mb-6 max-w-2xl mx-auto", children: "Join thousands of developers building on Zion's platform. Get your API key today and start integrating with the world's leading AI and tech marketplace." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-zion-purple hover:bg-zion-purple-light", children: _jsx(Link, { to: "/dashboard/developers/api-keys", children: "Get Started Now" }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: _jsx(Link, { to: "/dashboard/developers/documentation", children: "Browse Documentation" }) })] })] }) }) })] }) })] }));
}
