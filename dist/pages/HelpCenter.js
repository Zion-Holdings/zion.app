import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, MessageCircle, Phone, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
export default function HelpCenter() {
    const helpCategories = [
        {
            title: "Getting Started",
            description: "Learn the basics of using Zion's platform",
            icon: BookOpen,
            color: "from-zion-cyan to-zion-blue",
            link: "/help/getting-started"
        },
        {
            title: "Account & Profile",
            description: "Manage your account settings and profile",
            icon: Settings,
            color: "from-zion-purple to-zion-purple-dark",
            link: "/help/account-profile"
        },
        {
            title: "Marketplace",
            description: "How to buy, sell, and navigate the marketplace",
            icon: Zap,
            color: "from-zion-green to-zion-cyan",
            link: "/help/marketplace"
        },
        {
            title: "Talent & Hiring",
            description: "Find talent and get hired on the platform",
            icon: Users,
            color: "from-zion-orange to-zion-red",
            link: "/help/talent-hiring"
        },
        {
            title: "Payments & Billing",
            description: "Understanding payment methods and billing",
            icon: Shield,
            color: "from-zion-blue to-zion-purple",
            link: "/help/payments-billing"
        },
        {
            title: "API & Integration",
            description: "Developer resources and API documentation",
            icon: FileText,
            color: "from-zion-purple to-zion-cyan",
            link: "/help/api-integration"
        }
    ];
    const quickActions = [
        {
            title: "Contact Support",
            description: "Get help from our support team",
            icon: MessageCircle,
            action: "mailto:support@ziontechgroup.com",
            external: true
        },
        {
            title: "Schedule a Call",
            description: "Book a consultation with our experts",
            icon: Phone,
            action: "/contact",
            external: false
        },
        {
            title: "Live Chat",
            description: "Chat with us in real-time",
            icon: MessageCircle,
            action: "#",
            external: false
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Help Center - Zion Tech Group Support", description: "Get help and support for using Zion's AI and technology marketplace platform.", keywords: "help center, support, Zion Tech Group, customer service, FAQ, documentation", canonical: "https://ziontechgroup.com/help" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Help Center" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Find answers, get support, and learn how to make the most of Zion's platform" })] }), _jsx("div", { className: "max-w-2xl mx-auto mb-16", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" }), _jsx("input", { type: "text", placeholder: "Search for help articles, guides, and support...", className: "w-full pl-12 pr-4 py-4 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple" })] }) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Quick Actions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: quickActions.map((action, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(action.icon, { className: "w-8 h-8 text-zion-cyan mr-3" }), _jsx("h3", { className: "text-xl font-semibold text-white", children: action.title })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: action.description }), action.external ? (_jsx("a", { href: action.action, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Get Started \u2192" })) : (_jsx(Link, { to: action.action, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Get Started \u2192" }))] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Help Categories" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: helpCategories.map((category, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-all hover:shadow-lg", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: `p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`, children: _jsx(category.icon, { className: "w-6 h-6 text-white" }) }), _jsx("h3", { className: "text-xl font-semibold text-white", children: category.title })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: category.description }), _jsx(Link, { to: category.link, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Learn More \u2192" })] }, index))) })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Still need help?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", asChild: true, children: _jsx(Link, { to: "/contact", children: "Contact Support" }) }), _jsx(Button, { variant: "outline", className: "border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white", asChild: true, children: _jsx(Link, { to: "/faq", children: "View FAQ" }) })] })] })] }) }), _jsx(Footer, {})] }));
}
