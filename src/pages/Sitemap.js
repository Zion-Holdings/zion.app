import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
const Sitemap = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const sitemapData = [
        {
            category: 'Main Pages',
            icon: '🏠',
            color: 'from-blue-500/20 to-cyan-500/20',
            pages: [
                { name: 'Home', path: '/', description: 'Main landing page and company overview', priority: 'High' },
                { name: 'About', path: '/about', description: 'Company information, mission, values, and team', priority: 'High' },
                { name: 'Contact', path: '/contact', description: 'Get in touch with our team and request information', priority: 'High' }
            ]
        },
        {
            category: 'Services',
            icon: '🔧',
            color: 'from-green-500/20 to-emerald-500/20',
            pages: [
                { name: 'All Services', path: '/services', description: 'Comprehensive overview of all our services', priority: 'High' },
                { name: 'Service Categories', path: '/categories', description: 'Browse all our service categories and solutions', priority: 'Medium' },
                { name: 'AI & Machine Learning', path: '/zion-hire-ai', description: 'AI-powered talent matching and ML services', priority: 'High' },
                { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'Professional IT support at your location', priority: 'Medium' },
                { name: 'Data Analytics', path: '/analytics', description: 'Business intelligence and data solutions', priority: 'Medium' },
                { name: 'Mobile Development', path: '/mobile-launch', description: 'Mobile app development and launch services', priority: 'Medium' },
                { name: 'Mobile Solutions', path: '/mobile', description: 'Mobile-first design and development solutions', priority: 'Medium' },
                { name: 'Green IT Solutions', path: '/green-it', description: 'Sustainable and eco-friendly technology solutions', priority: 'Medium' }
            ]
        },
        {
            category: 'Resources',
            icon: '📚',
            color: 'from-purple-500/20 to-pink-500/20',
            pages: [
                { name: 'Equipment', path: '/equipment', description: 'Technology equipment and resources', priority: 'Low' },
                { name: 'Talent Directory', path: '/talent-directory', description: 'Browse available tech professionals and experts', priority: 'Medium' },
                { name: 'Tech Talents', path: '/talents', description: 'Detailed talent profiles and expertise areas', priority: 'Medium' }
            ]
        },
        {
            category: 'Business',
            icon: '💼',
            color: 'from-orange-500/20 to-red-500/20',
            pages: [
                { name: 'Partners', path: '/partners', description: 'Strategic partnership opportunities and collaborations', priority: 'Medium' },
                { name: 'Request Quote', path: '/request-quote', description: 'Get customized project quotes and proposals', priority: 'High' },
                { name: 'Careers', path: '/careers', description: 'Job opportunities and career information', priority: 'Medium' }
            ]
        },
        {
            category: 'Support',
            icon: '❓',
            color: 'from-cyan-500/20 to-blue-500/20',
            pages: [
                { name: 'FAQ', path: '/faq', description: 'Frequently asked questions and answers', priority: 'Medium' },
                { name: 'Help Center', path: '/help-center', description: 'Comprehensive help and support resources', priority: 'Medium' }
            ]
        },
        {
            category: 'Legal & Information',
            icon: '📋',
            color: 'from-indigo-500/20 to-purple-500/20',
            pages: [
                { name: 'Privacy Policy', path: '/privacy', description: 'Our privacy policy and data protection practices', priority: 'Low' },
                { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our services', priority: 'Low' },
                { name: 'Sitemap', path: '/sitemap', description: 'Complete website structure and navigation guide', priority: 'Low' }
            ]
        }
    ];
    const quickLinks = [
        { name: 'Start a Project', path: '/contact', icon: '🚀', description: 'Begin your project journey' },
        { name: 'Get a Quote', path: '/request-quote', icon: '💰', description: 'Request custom pricing' },
        { name: 'Find Talent', path: '/talent-directory', icon: '👥', description: 'Discover tech professionals' },
        { name: 'Browse Services', path: '/services', icon: '🔧', description: 'Explore our solutions' },
        { name: 'Learn About Us', path: '/about', icon: 'ℹ️', description: 'Company information' },
        { name: 'Get Help', path: '/help-center', icon: '❓', description: 'Support and documentation' }
    ];
    const categories = [
        { id: 'all', label: 'All Categories', icon: '📚' },
        ...sitemapData.map(cat => ({ id: cat.category, label: cat.category, icon: cat.icon }))
    ];
    // Filter sitemap data based on search term and active category
    const filteredSitemapData = sitemapData.filter(category => {
        if (activeCategory !== 'all' && category.category !== activeCategory) {
            return false;
        }
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            const hasMatchingCategory = category.category.toLowerCase().includes(searchLower);
            const hasMatchingPages = category.pages.some(page => page.name.toLowerCase().includes(searchLower) ||
                page.description.toLowerCase().includes(searchLower));
            return hasMatchingCategory || hasMatchingPages;
        }
        return true;
    });
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'bg-red-500/20 text-red-300 border-red-500/30';
            case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
            case 'Low': return 'bg-green-500/20 text-green-300 border-green-500/30';
            default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: [_jsx(SEO, { title: "Sitemap - Zion Tech Group", description: "Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources organized by category.", keywords: "sitemap, website navigation, Zion Tech Group, site structure, pages" }), _jsxs("section", { className: "relative py-20 px-4 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" }), _jsx("div", { className: "absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto text-center", children: _jsxs("div", { className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: _jsx("span", { className: "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient", children: "Sitemap" }) }), _jsx("p", { className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed", children: "Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources organized by category for quick access to what you need." }), _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search for pages, services, or resources...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg" }), _jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400", children: "\uD83D\uDD0D" })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-3", children: categories.map((category) => (_jsxs("button", { onClick: () => setActiveCategory(category.id), className: `px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === category.id
                                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'}`, children: [_jsx("span", { children: category.icon }), category.label] }, category.id))) })] })] }) })] }), _jsx("section", { className: "py-16 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Quick Access" }), _jsx("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "Most commonly accessed pages and services" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: quickLinks.map((link, index) => (_jsx("a", { href: link.path, className: `bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-xl border border-white/20 p-6 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.1}s` }, children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl mb-3 group-hover:scale-110 transition-transform duration-200", children: link.icon }), _jsx("h3", { className: "text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors", children: link.name }), _jsx("p", { className: "text-gray-300 text-sm", children: link.description })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Complete Site Structure" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: filteredSitemapData.length > 0
                                        ? `Browse ${filteredSitemapData.length} categories with comprehensive page information.`
                                        : 'No categories match your current search criteria. Try adjusting your search terms.' })] }), filteredSitemapData.length > 0 ? (_jsx("div", { className: "space-y-8", children: filteredSitemapData.map((category, categoryIndex) => (_jsxs("div", { className: `bg-gradient-to-br ${category.color} rounded-2xl border border-white/20 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${categoryIndex * 0.1}s` }, children: [_jsx("div", { className: "p-6 border-b border-white/20", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "text-4xl mr-4", children: category.icon }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: category.category }), _jsxs("p", { className: "text-gray-300", children: [category.pages.length, " pages"] })] })] }) }), _jsx("div", { className: "p-6", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: category.pages.map((page, pageIndex) => (_jsxs("div", { className: "bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-2", children: page.name }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs border ${getPriorityColor(page.priority)}`, children: page.priority })] }), _jsx("p", { className: "text-gray-300 text-sm mb-3", children: page.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("a", { href: page.path, className: "text-cyan-400 text-sm hover:text-cyan-300 hover:underline", children: "Visit Page \u2192" }), _jsx("span", { className: "text-gray-400 text-xs", children: page.path })] })] }, pageIndex))) }) })] }, categoryIndex))) })) : (_jsxs("div", { className: "text-center py-20", children: [_jsx("div", { className: "text-6xl mb-6", children: "\uD83D\uDD0D" }), _jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "No pages found" }), _jsx("p", { className: "text-gray-300 mb-8", children: "Try adjusting your search terms or browse all categories." }), _jsx("button", { onClick: () => {
                                        setSearchTerm('');
                                        setActiveCategory('all');
                                    }, className: "bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors", children: "View All Pages" })] }))] }) }), _jsx("section", { className: "py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Site Overview" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Quick statistics about our website structure and content" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
                                { number: sitemapData.length, label: 'Categories', icon: '📁', color: 'from-blue-500/20 to-cyan-500/20' },
                                { number: sitemapData.reduce((acc, cat) => acc + cat.pages.length, 0), label: 'Total Pages', icon: '📄', color: 'from-green-500/20 to-emerald-500/20' },
                                { number: sitemapData.filter(cat => cat.pages.some(p => p.priority === 'High')).length, label: 'High Priority', icon: '⭐', color: 'from-yellow-500/20 to-orange-500/20' },
                                { number: '100%', label: 'Mobile Optimized', icon: '📱', color: 'from-purple-500/20 to-pink-500/20' }
                            ].map((stat, index) => (_jsx("div", { className: `bg-gradient-to-br ${stat.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.1}s` }, children: _jsxs("div", { className: "p-6 text-center", children: [_jsx("div", { className: "text-4xl mb-4 group-hover:scale-110 transition-transform duration-300", children: stat.icon }), _jsx("div", { className: "text-3xl font-bold text-cyan-400 mb-2", children: stat.number }), _jsx("div", { className: "text-gray-400 text-sm", children: stat.label })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center", children: [_jsx("h3", { className: "text-4xl font-bold mb-4", children: "Need Help Finding Something?" }), _jsx("p", { className: "text-xl mb-8 opacity-90 max-w-3xl mx-auto", children: "Can't find what you're looking for? Our team is here to help you navigate and find the information you need." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors", children: "Contact Us" }), _jsx("a", { href: "/help-center", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors", children: "Get Help" })] })] }) }) })] }));
};
export default Sitemap;
