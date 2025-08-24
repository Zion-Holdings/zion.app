import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
export function FeatureCTAs() {
    const features = [
        {
            title: "AI Talent Marketplace",
            description: "Connect with verified AI professionals and experts from around the world",
            badge: "Popular",
            cta: "Find Talent",
            link: "/talent",
            icon: "🧠"
        },
        {
            title: "Tech Services Hub",
            description: "Browse and book professional tech services with instant quotes",
            badge: "New",
            cta: "Browse Services",
            link: "/services",
            icon: "🔧"
        },
        {
            title: "Equipment Solutions",
            description: "Find the latest hardware and equipment for your tech needs",
            badge: "Featured",
            cta: "Shop Now",
            link: "/equipment",
            icon: "💻"
        }
    ];
    return (_jsx("section", { className: "py-16 bg-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Explore Our Platform" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-2xl mx-auto", children: "Discover the full range of features that make Zion Tech the ultimate tech marketplace" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: features.map((feature, index) => (_jsxs(Card, { className: "bg-zion-slate border-zion-blue-light text-white hover:border-zion-purple transition-all hover:-translate-y-1", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsx("div", { className: "text-4xl", children: feature.icon }), _jsx(Badge, { variant: "outline", className: "border-zion-cyan text-zion-cyan", children: feature.badge })] }), _jsx(CardTitle, { className: "text-xl text-white", children: feature.title }), _jsx(CardDescription, { className: "text-zion-slate-light", children: feature.description })] }), _jsx(CardFooter, { children: _jsx(Button, { className: "w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark", children: feature.cta }) })] }, index))) })] }) }));
}
