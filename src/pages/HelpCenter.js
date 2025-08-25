import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Settings, Shield, MessageSquare, FileText, Video, Phone } from "lucide-react";
import { Link } from "react-router-dom";
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
const popularArticles = [
    "How to create your first project",
    "Understanding billing and pricing",
    "Common technical issues and solutions",
    "AI model training and deployment",
    "Frontend development best practices"
];
const categories = [
    { id: 'all', label: 'All Categories', icon: '📚' },
    ...helpCategories.map(cat => ({ id: cat.title, label: cat.title, icon: cat.icon }))
];
// Filter help data based on search term and active category
const filteredHelpData = helpCategories.filter(category => {
    if (activeCategory !== 'all' && category.title !== activeCategory) {
        return false;
    }
    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const hasMatchingTitle = category.title.toLowerCase().includes(searchLower);
        const hasMatchingDescription = category.description.toLowerCase().includes(searchLower);
        const hasMatchingArticles = category.articles.some(article => article.title.toLowerCase().includes(searchLower) ||
            article.content.toLowerCase().includes(searchLower));
        return hasMatchingTitle || hasMatchingDescription || hasMatchingArticles;
    }
    return true;
});
const handleArticleClick = (articleTitle) => {
    setSelectedArticle(selectedArticle === articleTitle ? null : articleTitle);
};
return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Help Center | Zion Tech Group", description: "Get help and support for Zion Tech Group platform. Find tutorials, guides, and resources to make the most of our marketplace.", keywords: "help center, support, tutorials, guides, Zion Tech Group, tech marketplace", canonical: "https://ziontechgroup.com/help-center" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Help Center" }), _jsxs("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: ["Everything you need to know about using Zion Tech Group. Find answers, tutorials, and support resources. =======", _jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: [_jsx(SEO, { title: "Help Center - Zion Tech Group", description: "Get help and support for all your Zion Tech Group services. Find answers, documentation, and contact our support team.", keywords: "help center, support, documentation, troubleshooting, Zion Tech Group, technical support" }), _jsxs("section", { className: "relative py-20 px-4 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" }), _jsx("div", { className: "absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto text-center", children: _jsxs("div", { className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: _jsx("span", { className: "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient", children: "Help Center" }) }), _jsx("p", { className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed", children: "Find answers to your questions, get technical support, and access comprehensive documentation for all Zion Tech Group services. >>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac" })] }) })] })] })] })] }) }) })] })) /* Search Bar */;
{ /* Search Bar */ }
_jsx("div", { className: "max-w-2xl mx-auto mb-16", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search for help articles, tutorials, or guides...", className: "w-full px-6 py-4 bg-zion-blue-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent" }), _jsx(Button, { className: "absolute right-2 top-2 bg-zion-purple hover:bg-zion-purple-light", children: "Search" })] }) });
{ /* Quick Actions */ }
_jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Quick Actions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: quickActions.map((action, index) => (_jsx(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "text-zion-cyan", children: action.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: action.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-3", children: action.description }), _jsx(Link, { to: action.link, className: "text-zion-cyan hover:text-zion-cyan-light text-sm font-medium", children: "Learn more \u2192" })] })] }) }) }, index))) })] });
{ /* Help Categories */ }
_jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Help Categories" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: helpCategories.map((category, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors group", children: [_jsx(CardHeader, { className: "pb-4", children: _jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [_jsx("div", { className: `p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`, children: category.icon }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl text-white", children: category.title }), _jsx(CardDescription, { className: "text-zion-slate-light", children: category.description })] })] }) }), _jsxs(CardContent, { children: [_jsx("ul", { className: "space-y-2 mb-6", children: category.articles.map((article, articleIndex) => (_jsxs("li", { className: "text-zion-slate-light text-sm flex items-center", children: [_jsx("span", { className: "w-2 h-2 bg-zion-cyan rounded-full mr-3" }), article] }, articleIndex))) }), _jsx(Link, { to: category.link, className: "inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium group-hover:translate-x-1 transition-transform", children: "View all articles \u2192" })] })] }, index))) })] });
{ /* Popular Articles */ }
_jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Popular Articles" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [[
                    "How to create a winning talent profile",
                    "Understanding the AI matching algorithm",
                    "Best practices for project collaboration",
                    "Setting up secure payments",
                    "Managing project milestones",
                    "Resolving disputes effectively"
                ].map((article, index) => (_jsx(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: article }), _jsx(Link, { to: `/help/article/${index + 1}`, className: "text-zion-cyan hover:text-zion-cyan-light text-sm font-medium", children: "Read article \u2192" })] }) }, index))), "=======", _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search for help articles, guides, or solutions...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg" }), _jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400", children: "\uD83D\uDD0D" })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-3", children: categories.map((category) => (_jsxs("button", { onClick: () => setActiveCategory(category.id), className: `px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === category.id
                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'}`, children: [_jsx("span", { children: category.icon }), category.label] }, category.id))) }), ">>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac"] })] }), _jsx("div", { className: "text-center", children: _jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-zion-cyan", children: "Need more help?" }), _jsx(CardDescription, { className: "text-zion-slate-light", children: "Our support team is available 24/7 to assist you." })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-zion-slate-light", children: "Can't find what you're looking for? Contact our support team directly." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors", children: "Contact Support" }), _jsx(Link, { to: "/faq", className: "inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors", children: "View FAQ" })] })] }) })] }) })] });
section >
    { /* Quick Actions Section */}
    < section;
className = "py-16 px-4" >
    _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Quick Actions" }), _jsx("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "Get immediate help or access resources quickly" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: quickActions.map((action, index) => (_jsx("div", { className: `bg-gradient-to-br ${action.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.1}s` }, children: _jsxs("div", { className: "p-6 text-center", children: [_jsx("div", { className: "text-4xl mb-4 group-hover:scale-110 transition-transform duration-300", children: action.icon }), _jsx("h3", { className: "text-lg font-bold text-white mb-2", children: action.title }), _jsx("p", { className: "text-gray-300 text-sm mb-4", children: action.description }), _jsx("a", { href: action.href, className: "inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 transition-colors", children: action.action })] }) }, index))) })] });
section >
    { /* Help Categories Section */}
    < section;
className = "py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50" >
    _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Help Categories" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: filteredHelpData.length > 0
                            ? `Browse ${filteredHelpData.length} categories of help articles and guides.`
                            : 'No categories match your current search criteria. Try adjusting your search terms.' })] }), filteredHelpData.length > 0 ? (_jsx("div", { className: "space-y-8", children: filteredHelpData.map((category, categoryIndex) => (_jsxs("div", { className: `bg-gradient-to-br ${category.color} rounded-2xl border border-white/20 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${categoryIndex * 0.1}s` }, children: [_jsx("div", { className: "p-6 border-b border-white/20", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "text-4xl mr-4", children: category.icon }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: category.title }), _jsx("p", { className: "text-gray-300", children: category.description })] })] }) }), _jsx("div", { className: "p-6", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: category.articles.map((article, articleIndex) => (_jsxs("div", { className: "bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer", onClick: () => handleArticleClick(article.title), children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-2", children: article.title }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "px-2 py-1 bg-white/20 rounded-full text-xs text-white", children: article.readTime }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs ${article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                                                                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                                                                    'bg-red-500/20 text-red-300'}`, children: article.difficulty })] })] }), selectedArticle === article.title && (_jsxs("div", { className: "mt-3 p-3 bg-white/10 rounded border-l-4 border-cyan-400", children: [_jsx("p", { className: "text-gray-300 text-sm", children: article.content }), _jsx("button", { className: "mt-2 text-cyan-400 text-sm hover:text-cyan-300", children: "Read Full Article \u2192" })] }))] }, articleIndex))) }) })] }, categoryIndex))) })) : (_jsxs("div", { className: "text-center py-20", children: [_jsx("div", { className: "text-6xl mb-6", children: "\uD83D\uDD0D" }), _jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "No help articles found" }), _jsx("p", { className: "text-gray-300 mb-8", children: "Try adjusting your search terms or browse all categories." }), _jsx("button", { onClick: () => {
                            setSearchTerm('');
                            setActiveCategory('all');
                        }, className: "bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors", children: "View All Articles" })] }))] });
section >
    { /* Popular Articles Section */}
    < section;
className = "py-20 px-4" >
    _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Popular Articles" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Most frequently accessed help articles and guides" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: popularArticles.map((article, index) => (_jsxs("div", { className: "bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "text-2xl mr-3 group-hover:scale-110 transition-transform duration-300", children: "\uD83D\uDCD6" }), _jsx("h3", { className: "text-lg font-bold text-white", children: article })] }), _jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Quick access to this popular help article with detailed information and step-by-step guidance." }), _jsx("button", { className: "text-cyan-400 text-sm hover:text-cyan-300 group-hover:underline", children: "Read Article \u2192" })] }, index))) })] });
section >
    { /* CTA Section */}
    < section;
className = "py-20 px-4" >
    _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center", children: [_jsx("h3", { className: "text-4xl font-bold mb-4", children: "Still Need Help?" }), _jsx("p", { className: "text-xl mb-8 opacity-90 max-w-3xl mx-auto", children: "Can't find what you're looking for? Our support team is here to help you succeed." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors", children: "Contact Support" }), _jsx("a", { href: "/request-quote", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors", children: "Get Free Consultation" })] })] }) });
section >
;
div >
;
;
;
export default HelpCenter;
