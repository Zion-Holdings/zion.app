import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Home, Briefcase, Users, ShoppingCart, Building, FileText, HelpCircle, Settings, Shield, Globe, MessageSquare, Star } from 'lucide-react';
export default function Sitemap() {
    const sitemapSections = [
        {
            title: 'Main Pages',
            icon: Home,
            links: [
                { name: 'Home', path: '/', description: 'Main landing page' },
                { name: 'About Us', path: '/about', description: 'Company information and mission' },
                { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
                { name: 'Careers', path: '/careers', description: 'Job opportunities' },
                { name: 'Partners', path: '/partners', description: 'Partnership programs' },
                { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
            ]
        },
        {
            title: 'Services',
            icon: Briefcase,
            links: [
                { name: 'IT Solutions', path: '/services/it-solutions', description: 'Infrastructure and IT services' },
                { name: 'AI Services', path: '/services/ai-services', description: 'Artificial intelligence solutions' },
                { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and protection services' },
                { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
                { name: 'On-Site Support', path: '/it-onsite-services', description: 'Local technical support' },
                { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
            ]
        },
        {
            title: 'Talent & Recruitment',
            icon: Users,
            links: [
                { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
                { name: 'Talent Directory', path: '/talent-directory', description: 'Comprehensive talent database' },
                { name: 'AI Matcher', path: '/ai-matcher', description: 'AI-powered talent matching' },
                { name: 'Hire Now', path: '/hire-now', description: 'Quick hiring process' },
                { name: 'Post a Job', path: '/post-job', description: 'Create job listings' },
                { name: 'Zion Hire AI', path: '/zion-hire-ai', description: 'AI recruitment platform' },
            ]
        },
        {
            title: 'Marketplace',
            icon: ShoppingCart,
            links: [
                { name: 'Equipment', path: '/equipment', description: 'Tech equipment and hardware' },
                { name: 'Equipment Details', path: '/equipment-detail', description: 'Detailed product information' },
                { name: 'Categories', path: '/categories', description: 'Browse by category' },
                { name: 'Featured', path: '/featured', description: 'Highlighted products' },
                { name: 'Deals', path: '/deals', description: 'Special offers and discounts' },
            ]
        },
        {
            title: 'Company & Business',
            icon: Building,
            links: [
                { name: 'About Us', path: '/about', description: 'Company overview' },
                { name: 'Careers', path: '/careers', description: 'Employment opportunities' },
                { name: 'Partners', path: '/partners', description: 'Business partnerships' },
                { name: 'Press & Media', path: '/press', description: 'News and press releases' },
                { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale business solutions' },
            ]
        },
        {
            title: 'Resources & Content',
            icon: FileText,
            links: [
                { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
                { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
                { name: 'API Reference', path: '/api', description: 'API documentation' },
                { name: 'Tutorials', path: '/tutorials', description: 'Learning resources' },
                { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
                { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
            ]
        },
        {
            title: 'Support & Help',
            icon: HelpCircle,
            links: [
                { name: 'Help Center', path: '/help-center', description: 'Comprehensive help resources' },
                { name: 'FAQ', path: '/faq', description: 'Common questions and answers' },
                { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
                { name: 'Live Chat', path: '/chat', description: 'Real-time support chat' },
                { name: 'Status Page', path: '/status', description: 'Service status updates' },
                { name: 'Support Ticket', path: '/support-ticket', description: 'Submit support requests' },
            ]
        },
        {
            title: 'Tools & Applications',
            icon: Settings,
            links: [
                { name: 'Analytics Dashboard', path: '/analytics', description: 'Business analytics and insights' },
                { name: 'Mobile App', path: '/mobile-launch', description: 'Mobile application' },
                { name: 'Community Platform', path: '/community', description: 'User community and forums' },
                { name: 'Developer Portal', path: '/developers', description: 'Developer resources and tools' },
            ]
        },
        {
            title: 'Legal & Compliance',
            icon: Shield,
            links: [
                { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
                { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
                { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
                { name: 'GDPR Compliance', path: '/gdpr', description: 'Data protection compliance' },
                { name: 'Accessibility', path: '/accessibility', description: 'Accessibility standards' },
            ]
        }
    ];
    const quickLinks = [
        { name: 'Get Started', path: '/get-started', icon: Star, color: 'bg-green-100 text-green-700' },
        { name: 'Request Demo', path: '/demo', icon: Play, color: 'bg-blue-100 text-blue-700' },
        { name: 'Contact Sales', path: '/contact-sales', icon: MessageSquare, color: 'bg-purple-100 text-purple-700' },
        { name: 'Support', path: '/support', icon: HelpCircle, color: 'bg-orange-100 text-orange-700' },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Sitemap - Zion Tech Group", description: "Complete site navigation guide for Zion Tech Group. Find all pages, services, and resources organized by category.", keywords: "sitemap, navigation, site structure, pages, services, Zion Tech Group" }), _jsx(Header, {}), _jsx("main", { className: "pt-32 pb-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Site Navigation Guide" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Explore our comprehensive website structure. Find all pages, services, and resources organized by category for easy navigation." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-16", children: quickLinks.map((link, index) => (_jsxs(Link, { to: link.path, className: `${link.color} p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200`, children: [_jsx(link.icon, { className: "h-8 w-8 mx-auto mb-2" }), _jsx("div", { className: "font-semibold text-sm", children: link.name })] }, index))) }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8", children: sitemapSections.map((section, index) => (_jsxs(Card, { className: "hover:shadow-lg transition-shadow duration-300", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [_jsx("div", { className: "w-10 h-10 bg-zion-blue/10 rounded-lg flex items-center justify-center", children: _jsx(section.icon, { className: "h-5 w-5 text-zion-blue" }) }), _jsx(CardTitle, { className: "text-xl", children: section.title })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: section.links.map((link, linkIndex) => (_jsxs("div", { className: "border-l-2 border-gray-200 pl-4", children: [_jsx(Link, { to: link.path, className: "block text-zion-blue hover:text-zion-blue-dark font-medium mb-1 transition-colors", children: link.name }), _jsx("p", { className: "text-sm text-gray-600", children: link.description })] }, linkIndex))) }) })] }, index))) }), _jsxs("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(Globe, { className: "h-5 w-5 text-zion-blue" }), _jsx("span", { children: "Site Information" })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-3 text-sm text-gray-600", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Total Pages:" }), _jsx("span", { className: "font-medium", children: "50+" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Last Updated:" }), _jsx("span", { className: "font-medium", children: new Date().toLocaleDateString() })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Site Version:" }), _jsx("span", { className: "font-medium", children: "2.0.0" })] })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(MessageSquare, { className: "h-5 w-5 text-zion-blue" }), _jsx("span", { children: "Need Help?" })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Can't find what you're looking for? Our support team is here to help." }), _jsxs("div", { className: "space-y-2", children: [_jsx(Link, { to: "/contact", className: "block text-zion-blue hover:text-zion-blue-dark text-sm font-medium", children: "Contact Support \u2192" }), _jsx(Link, { to: "/help-center", className: "block text-zion-blue hover:text-zion-blue-dark text-sm font-medium", children: "Visit Help Center \u2192" })] })] })] })] })] }) }), _jsx(Footer, {})] }));
}
// Play icon component for demo link
function Play({ className }) {
    return (_jsx("svg", { className: className, fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z", clipRule: "evenodd" }) }));
}
