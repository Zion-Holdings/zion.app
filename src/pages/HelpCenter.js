import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Settings, Shield, MessageSquare, FileText, Video, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export default function HelpCenter() {
    const helpCategories = [
        {
            icon: _jsx(BookOpen, { className: "h-8 w-8" }),
            title: "Getting Started",
            description: "Learn the basics of using Zion Tech Group",
            articles: [
                "Creating your first account",
                "Setting up your profile",
                "Navigating the marketplace",
                "Understanding the platform"
            ],
            link: "/help/getting-started",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: _jsx(Users, { className: "h-8 w-8" }),
            title: "User Management",
            description: "Manage your account and profile settings",
            articles: [
                "Updating profile information",
                "Managing notifications",
                "Account security settings",
                "Privacy controls"
            ],
            link: "/help/user-management",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: _jsx(Settings, { className: "h-8 w-8" }),
            title: "Platform Features",
            description: "Master all the features and tools",
            articles: [
                "AI talent matching",
                "Project management tools",
                "Payment and billing",
                "Communication features"
            ],
            link: "/help/platform-features",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8" }),
            title: "Safety & Security",
            description: "Stay safe and secure on our platform",
            articles: [
                "Verification processes",
                "Dispute resolution",
                "Payment protection",
                "Reporting issues"
            ],
            link: "/help/safety-security",
            color: "from-red-500 to-orange-500"
        },
        {
            icon: _jsx(MessageSquare, { className: "h-8 w-8" }),
            title: "Communication",
            description: "Learn how to communicate effectively",
            articles: [
                "Messaging system",
                "Video calls",
                "Project collaboration",
                "Feedback and reviews"
            ],
            link: "/help/communication",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: _jsx(FileText, { className: "h-8 w-8" }),
            title: "Documentation",
            description: "Access detailed guides and references",
            articles: [
                "API documentation",
                "Developer guides",
                "Integration tutorials",
                "Best practices"
            ],
            link: "/help/documentation",
            color: "from-yellow-500 to-orange-500"
        }
    ];
    const quickActions = [
        {
            icon: _jsx(Video, { className: "h-6 w-6" }),
            title: "Video Tutorials",
            description: "Watch step-by-step guides",
            link: "/help/video-tutorials"
        },
        {
            icon: _jsx(Phone, { className: "h-6 w-6" }),
            title: "Live Support",
            description: "Get help in real-time",
            link: "/contact"
        },
        {
            icon: _jsx(FileText, { className: "h-6 w-6" }),
            title: "Knowledge Base",
            description: "Search our articles",
            link: "/help/knowledge-base"
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Help Center | Zion Tech Group", description: "Get help and support for Zion Tech Group platform. Find tutorials, guides, and resources to make the most of our marketplace.", keywords: "help center, support, tutorials, guides, Zion Tech Group, tech marketplace", canonical: "https://ziontechgroup.com/help-center" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Help Center" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Everything you need to know about using Zion Tech Group. Find answers, tutorials, and support resources." })] }), _jsx("div", { className: "max-w-2xl mx-auto mb-16", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search for help articles, tutorials, or guides...", className: "w-full px-6 py-4 bg-zion-blue-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent" }), _jsx(Button, { className: "absolute right-2 top-2 bg-zion-purple hover:bg-zion-purple-light", children: "Search" })] }) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Quick Actions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: quickActions.map((action, index) => (_jsx(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "text-zion-cyan", children: action.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: action.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-3", children: action.description }), _jsx(Link, { to: action.link, className: "text-zion-cyan hover:text-zion-cyan-light text-sm font-medium", children: "Learn more \u2192" })] })] }) }) }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Help Categories" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: helpCategories.map((category, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors group", children: [_jsx(CardHeader, { className: "pb-4", children: _jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [_jsx("div", { className: `p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`, children: category.icon }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl text-white", children: category.title }), _jsx(CardDescription, { className: "text-zion-slate-light", children: category.description })] })] }) }), _jsxs(CardContent, { children: [_jsx("ul", { className: "space-y-2 mb-6", children: category.articles.map((article, articleIndex) => (_jsxs("li", { className: "text-zion-slate-light text-sm flex items-center", children: [_jsx("span", { className: "w-2 h-2 bg-zion-cyan rounded-full mr-3" }), article] }, articleIndex))) }), _jsx(Link, { to: category.link, className: "inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium group-hover:translate-x-1 transition-transform", children: "View all articles \u2192" })] })] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Popular Articles" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                                        "How to create a winning talent profile",
                                        "Understanding the AI matching algorithm",
                                        "Best practices for project collaboration",
                                        "Setting up secure payments",
                                        "Managing project milestones",
                                        "Resolving disputes effectively"
                                    ].map((article, index) => (_jsx(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: article }), _jsx(Link, { to: `/help/article/${index + 1}`, className: "text-zion-cyan hover:text-zion-cyan-light text-sm font-medium", children: "Read article \u2192" })] }) }, index))) })] }), _jsx("div", { className: "text-center", children: _jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-zion-cyan", children: "Need more help?" }), _jsx(CardDescription, { className: "text-zion-slate-light", children: "Our support team is available 24/7 to assist you." })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-zion-slate-light", children: "Can't find what you're looking for? Contact our support team directly." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors", children: "Contact Support" }), _jsx(Link, { to: "/faq", className: "inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors", children: "View FAQ" })] })] }) })] }) })] }) }), _jsx(Footer, {})] }));
}
