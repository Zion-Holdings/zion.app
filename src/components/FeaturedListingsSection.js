import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
export function FeaturedListingsSection() {
    const featuredServices = [
        {
            id: 1,
            title: "AI-Powered Data Analytics",
            description: "Advanced data analysis using cutting-edge AI algorithms",
            category: "AI Services",
            price: "$500",
            rating: 4.9,
            reviews: 127
        },
        {
            id: 2,
            title: "Cloud Infrastructure Setup",
            description: "Complete cloud migration and infrastructure optimization",
            category: "Cloud Services",
            price: "$800",
            rating: 4.8,
            reviews: 89
        },
        {
            id: 3,
            title: "Cybersecurity Assessment",
            description: "Comprehensive security audit and vulnerability assessment",
            category: "Security",
            price: "$600",
            rating: 4.9,
            reviews: 156
        }
    ];
    return (_jsx("section", { className: "py-16 bg-background", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Featured Services" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Discover top-rated AI and tech services from verified professionals" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredServices.map((service) => (_jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsx(Badge, { variant: "secondary", children: service.category }), _jsx("span", { className: "text-2xl font-bold text-primary", children: service.price })] }), _jsx(CardTitle, { className: "text-xl", children: service.title }), _jsx(CardDescription, { children: service.description })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "flex items-center justify-between mb-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-yellow-500", children: "\u2605" }), _jsx("span", { className: "font-medium", children: service.rating }), _jsxs("span", { className: "text-sm text-muted-foreground", children: ["(", service.reviews, " reviews)"] })] }) }), _jsx(Button, { className: "w-full", children: "View Details" })] })] }, service.id))) }), _jsx("div", { className: "text-center mt-12", children: _jsx(Button, { variant: "outline", size: "lg", children: "View All Services" }) })] }) }));
}
