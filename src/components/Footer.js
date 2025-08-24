import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, Globe, Shield, Zap, Users, Heart } from 'lucide-react';
const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Contact', href: '/contact' }
    ],
    services: [
        { name: 'IT Onsite Services', href: '/it-onsite-services' },
        { name: 'AI Talent Matching', href: '/talent' },
        { name: 'Equipment Marketplace', href: '/equipment' },
        { name: 'Consulting Services', href: '/consulting' },
        { name: 'Emergency Support', href: '/emergency' }
    ],
    resources: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Community', href: '/community' }
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security', href: '/security' }
    ]
};
const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Email', href: 'mailto:contact@ziontechgroup.com', icon: Mail }
];
export function Footer() {
    return (_jsxs("footer", { className: "bg-zion-blue-dark text-white", children: [_jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center", children: _jsx(Zap, { className: "w-6 h-6 text-white" }) }), _jsx("span", { className: "text-2xl font-bold", children: "Zion Tech Group" })] }), _jsx("p", { className: "text-zion-slate-light mb-6 leading-relaxed", children: "The future of tech services. Connecting businesses with verified professionals, cutting-edge equipment, and innovative solutions worldwide." }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(Mail, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { children: "contact@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(Phone, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { children: "+1 (555) ZION-TECH" })] }), _jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(MapPin, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { children: "Global Operations" })] })] }), _jsx("div", { className: "flex gap-4", children: socialLinks.map((social) => (_jsx(motion.a, { href: social.href, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.1, y: -2 }, className: "w-10 h-10 bg-zion-blue-light rounded-lg flex items-center justify-center text-zion-slate-light hover:text-white hover:bg-zion-purple transition-all duration-300", children: _jsx(social.icon, { className: "w-5 h-5" }) }, social.name))) })] }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.1 }, children: [_jsx("h3", { className: "font-semibold text-lg mb-4", children: "Company" }), _jsx("ul", { className: "space-y-3", children: footerLinks.company.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.href, className: "text-zion-slate-light hover:text-white transition-colors duration-300", children: link.name }) }, link.name))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx("h3", { className: "font-semibold text-lg mb-4", children: "Services" }), _jsx("ul", { className: "space-y-3", children: footerLinks.services.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.href, className: "text-zion-slate-light hover:text-white transition-colors duration-300", children: link.name }) }, link.name))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.3 }, children: [_jsx("h3", { className: "font-semibold text-lg mb-4", children: "Resources" }), _jsx("ul", { className: "space-y-3", children: footerLinks.resources.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.href, className: "text-zion-slate-light hover:text-white transition-colors duration-300", children: link.name }) }, link.name))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: [_jsx("h3", { className: "font-semibold text-lg mb-4", children: "Legal" }), _jsx("ul", { className: "space-y-3", children: footerLinks.legal.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.href, className: "text-zion-slate-light hover:text-white transition-colors duration-300", children: link.name }) }, link.name))) })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.5 }, className: "mt-12 pt-8 border-t border-zion-blue-light", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 text-center", children: [_jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Shield, { className: "w-8 h-8 text-green-400" }), _jsx("span", { className: "text-sm text-zion-slate-light", children: "SOC 2 Certified" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Globe, { className: "w-8 h-8 text-blue-400" }), _jsx("span", { className: "text-sm text-zion-slate-light", children: "Global Coverage" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Users, { className: "w-8 h-8 text-purple-400" }), _jsx("span", { className: "text-sm text-zion-slate-light", children: "10K+ Verified" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Zap, { className: "w-8 h-8 text-yellow-400" }), _jsx("span", { className: "text-sm text-zion-slate-light", children: "24/7 Support" })] })] }) })] }), _jsx("div", { className: "border-t border-zion-blue-light", children: _jsx("div", { className: "container mx-auto px-4 py-6", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [_jsx(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, className: "text-zion-slate-light text-sm", children: "\u00A9 2024 Zion Tech Group. All rights reserved." }), _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.7 }, className: "flex items-center gap-2 text-zion-slate-light text-sm", children: [_jsx("span", { children: "Made with" }), _jsx(Heart, { className: "w-4 h-4 text-red-400 fill-current" }), _jsx("span", { children: "for the tech community" })] })] }) }) })] }));
}
