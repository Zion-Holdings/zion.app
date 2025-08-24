import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export function FeatureHighlights() {
    const features = [
        {
            icon: "🤖",
            title: "AI-Powered Matching",
            description: "Advanced algorithms connect you with the perfect talent or service for your needs",
            category: "Core Feature"
        },
        {
            icon: "🔒",
            title: "Secure Transactions",
            description: "Enterprise-grade security with escrow protection for all transactions",
            category: "Security"
        },
        {
            icon: "🌍",
            title: "Global Network",
            description: "Access to talent and services from around the world, 24/7",
            category: "Global"
        },
        {
            icon: "⚡",
            title: "Instant Deployment",
            description: "Get started in minutes with our streamlined onboarding process",
            category: "Speed"
        }
    ];
    return (_jsx("section", { className: "py-16 bg-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Why Choose Zion Tech?" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-2xl mx-auto", children: "Experience the future of tech services with our cutting-edge platform" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: features.map((feature, index) => (_jsxs(Card, { className: "bg-zion-slate border-zion-blue-light text-white hover:border-zion-purple transition-colors", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "text-4xl mb-2", children: feature.icon }), _jsx(Badge, { variant: "outline", className: "mx-auto border-zion-cyan text-zion-cyan", children: feature.category })] }), _jsxs(CardContent, { className: "text-center", children: [_jsx(CardTitle, { className: "text-xl mb-2 text-white", children: feature.title }), _jsx(CardDescription, { className: "text-zion-slate-light", children: feature.description })] })] }, index))) })] }) }));
}
