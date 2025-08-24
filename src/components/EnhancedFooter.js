import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowUp, Globe, Shield, Users, Zap } from 'lucide-react';
export function EnhancedFooter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const footerSections = [
        {
            title: 'Platform',
            links: [
                { name: 'Services', href: '/services' },
                { name: 'Marketplace', href: '/marketplace' },
                { name: 'Talent Network', href: '/talent' },
                { name: 'AI Matching', href: '/match' },
                { name: 'Community', href: '/community' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Press', href: '/press' },
                { name: 'Partners', href: '/partners' },
                { name: 'Contact', href: '/contact' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Help Center', href: '/help' },
                { name: 'Documentation', href: '/docs' },
                { name: 'API Reference', href: '/api' },
                { name: 'Blog', href: '/blog' },
                { name: 'Status', href: '/status' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' },
                { name: 'GDPR', href: '/gdpr' },
                { name: 'Security', href: '/security' },
            ]
        }
    ];
    const socialLinks = [
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-600' },
        { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
        { name: 'Email', icon: Mail, href: 'mailto:contact@ziontechgroup.com', color: 'hover:text-red-400' },
    ];
    const features = [
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-level encryption and compliance'
        },
        {
            icon: Users,
            title: 'Global Network',
            description: '150+ countries, 24/7 support'
        },
        {
            icon: Zap,
            title: 'AI-Powered',
            description: 'Smart matching and automation'
        }
    ];
    return (_jsxs("footer", { className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple border-t border-zion-purple/20 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-5", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '30px 30px'
                    } }) }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs("div", { className: "py-16", children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Link, { to: "/", className: "inline-flex items-center space-x-3 mb-6", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center", children: _jsx("span", { className: "text-white font-bold text-2xl", children: "Z" }) }), _jsx("span", { className: "text-3xl font-bold bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent", children: "Zion" })] }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-md leading-relaxed", children: "The future of technology is here. Connect with top AI talent, access cutting-edge services, and build the next generation of digital solutions." }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((social) => (_jsx(motion.a, { href: social.href, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.1, y: -2 }, className: `w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light ${social.color} transition-all duration-300`, children: _jsx(social.icon, { className: "w-5 h-5" }) }, social.name))) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: features.map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-zion-purple", children: _jsx(feature.icon, { className: "w-6 h-6" }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm", children: feature.description })] }, index))) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-12", children: footerSections.map((section) => (_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: section.title }), _jsx("ul", { className: "space-y-3", children: section.links.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.href, className: "text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm", children: link.name }) }, link.name))) })] }, section.title))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.6 }, viewport: { once: true }, className: "grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-zion-purple/20", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Mail, { className: "w-5 h-5 text-zion-purple" }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-medium", children: "Email" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "contact@ziontechgroup.com" })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Phone, { className: "w-5 h-5 text-zion-purple" }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-medium", children: "Phone" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "+1 (555) 123-4567" })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(MapPin, { className: "w-5 h-5 text-zion-purple" }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-medium", children: "Location" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Global Network" })] })] })] })] }), _jsx(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.8 }, viewport: { once: true }, className: "py-8 border-t border-zion-purple/20", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0", children: [_jsxs("div", { className: "flex items-center space-x-6 text-sm text-zion-slate-light", children: [_jsx("span", { children: "\u00A9 2025 Zion Tech Group. All rights reserved." }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Globe, { className: "w-4 h-4" }), _jsx("span", { children: "English" })] })] }), _jsxs("div", { className: "flex items-center space-x-6", children: [_jsx(Link, { to: "/privacy", className: "text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm", children: "Privacy" }), _jsx(Link, { to: "/terms", className: "text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm", children: "Terms" }), _jsx(Link, { to: "/cookies", className: "text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm", children: "Cookies" })] })] }) })] }), _jsx(motion.button, { onClick: scrollToTop, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, className: "fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-full shadow-2xl shadow-zion-purple/25 flex items-center justify-center text-white hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 z-40", children: _jsx(ArrowUp, { className: "w-6 h-6" }) })] }));
}
