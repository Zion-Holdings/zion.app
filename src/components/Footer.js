import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { FooterNewsletter } from './FooterNewsletter';
import { Logo } from './header/Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
export function Footer() {
    const currentYear = new Date().getFullYear();
    const footerSections = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Partners', path: '/partners' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Press & Media', path: '/press' },
                { name: 'Contact', path: '/contact' },
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'IT Solutions', path: '/services/it-solutions' },
                { name: 'AI Services', path: '/services/ai-services' },
                { name: 'Cybersecurity', path: '/services/cybersecurity' },
                { name: 'Green IT', path: '/green-it' },
                { name: 'On-Site Support', path: '/it-onsite-services' },
            ]
        },
        {
            title: 'Talent',
            links: [
                { name: 'Browse Talents', path: '/talents' },
                { name: 'Talent Directory', path: '/talent-directory' },
                { name: 'AI Matcher', path: '/ai-matcher' },
                { name: 'Hire Now', path: '/hire-now' },
                { name: 'Post a Job', path: '/post-job' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', path: '/blog' },
                { name: 'Help Center', path: '/help-center' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Documentation', path: '/docs' },
                { name: 'API Reference', path: '/api' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookies' },
                { name: 'GDPR Compliance', path: '/gdpr' },
                { name: 'Accessibility', path: '/accessibility' },
            ]
        }
    ];
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
    ];
    return (_jsxs("footer", { className: "bg-gray-900 text-white", children: [_jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx(Logo, {}), _jsx("p", { className: "mt-4 text-gray-300 text-sm leading-relaxed", children: "Zion Tech Group is a leading technology company providing innovative IT solutions, AI services, and connecting top tech talent with forward-thinking organizations." }), _jsxs("div", { className: "mt-6 space-y-3", children: [_jsxs("div", { className: "flex items-center text-gray-300 text-sm", children: [_jsx(MapPin, { className: "h-4 w-4 mr-3 text-zion-cyan" }), _jsx("span", { children: "123 Tech Street, Innovation City, IC 12345" })] }), _jsxs("div", { className: "flex items-center text-gray-300 text-sm", children: [_jsx(Phone, { className: "h-4 w-4 mr-3 text-zion-cyan" }), _jsx("span", { children: "+1 (555) 123-4567" })] }), _jsxs("div", { className: "flex items-center text-gray-300 text-sm", children: [_jsx(Mail, { className: "h-4 w-4 mr-3 text-zion-cyan" }), _jsx("span", { children: "info@ziontechgroup.com" })] })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-200 mb-3", children: "Follow Us" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((social) => (_jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-zion-cyan hover:text-white transition-colors", "aria-label": social.name, children: _jsx(social.icon, { className: "h-5 w-5" }) }, social.name))) })] })] }), footerSections.map((section) => (_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: section.title }), _jsx("ul", { className: "space-y-2", children: section.links.map((link) => (_jsx("li", { children: _jsxs(Link, { to: link.path, className: "text-gray-300 hover:text-zion-cyan transition-colors text-sm flex items-center group", children: [_jsx(ArrowRight, { className: "h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" }), link.name] }) }, link.name))) })] }, section.title)))] }), _jsx("div", { className: "mt-16 pt-8 border-t border-gray-800", children: _jsxs("div", { className: "max-w-2xl", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Stay Updated with Zion Tech Group" }), _jsx("p", { className: "text-gray-300 text-sm mb-6", children: "Get the latest insights on technology trends, industry news, and exclusive updates delivered to your inbox." }), _jsx(FooterNewsletter, {})] }) })] }), _jsx("div", { className: "border-t border-gray-800", children: _jsx("div", { className: "container mx-auto px-4 py-6", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [_jsxs("div", { className: "text-gray-400 text-sm", children: ["\u00A9 ", currentYear, " Zion Tech Group. All rights reserved."] }), _jsxs("div", { className: "flex items-center space-x-6 text-sm text-gray-400", children: [_jsx(Link, { to: "/sitemap", className: "hover:text-zion-cyan transition-colors", children: "Sitemap" }), _jsx(Link, { to: "/accessibility", className: "hover:text-zion-cyan transition-colors", children: "Accessibility" }), _jsx(Link, { to: "/support", className: "hover:text-zion-cyan transition-colors", children: "Support" })] })] }) }) })] }));
}
