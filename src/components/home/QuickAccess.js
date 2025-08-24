import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export function QuickAccess() {
    const quickActions = [
        {
            title: "Find AI Talent",
            description: "Connect with top AI professionals",
            icon: "🧠",
            link: "/talent",
            color: "from-zion-purple to-zion-purple-dark"
        },
        {
            title: "Browse Services",
            description: "Discover tech services",
            icon: "🔧",
            link: "/services",
            color: "from-zion-blue to-zion-blue-dark"
        },
        {
            title: "Get Equipment",
            description: "Find hardware solutions",
            icon: "💻",
            link: "/equipment",
            color: "from-zion-cyan to-zion-cyan-dark"
        },
        {
            title: "AI Matching",
            description: "Smart service matching",
            icon: "🎯",
            link: "/match",
            color: "from-zion-purple-dark to-zion-slate"
        }
    ];
    return (_jsx("section", { className: "py-16 bg-background", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Quick Access" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Get started quickly with our most popular features" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: quickActions.map((action, index) => (_jsxs(Card, { className: "hover:shadow-lg transition-all hover:-translate-y-1", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: `text-4xl mb-2 bg-gradient-to-r ${action.color} bg-clip-text text-transparent`, children: action.icon }), _jsx(CardTitle, { className: "text-xl", children: action.title }), _jsx(CardDescription, { children: action.description })] }), _jsx(CardContent, { className: "text-center", children: _jsx(Button, { className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-dark hover:to-zion-purple", children: "Get Started" }) })] }, index))) })] }) }));
}
