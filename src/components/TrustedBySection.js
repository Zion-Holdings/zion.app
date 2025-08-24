import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';
const trustedCompanies = [
    {
        name: 'TechCorp',
        logo: '🚀',
        industry: 'Technology',
        testimonial: 'Zion Tech Group transformed our AI infrastructure completely.'
    },
    {
        name: 'SecureBank',
        logo: '🏦',
        industry: 'Finance',
        testimonial: 'Their cybersecurity solutions are unmatched in the industry.'
    },
    {
        name: 'CloudFlow',
        logo: '☁️',
        industry: 'Cloud Services',
        testimonial: 'Seamless cloud migration with zero downtime.'
    },
    {
        name: 'DataVault',
        logo: '💾',
        industry: 'Data Analytics',
        testimonial: 'Revolutionary insights through their AI-powered analytics.'
    },
    {
        name: 'InnovateLab',
        logo: '🔬',
        industry: 'Research',
        testimonial: 'Cutting-edge solutions that push the boundaries of possibility.'
    },
    {
        name: 'GlobalTech',
        logo: '🌍',
        industry: 'International',
        testimonial: 'World-class service with local expertise worldwide.'
    }
];
export function TrustedBySection() {
    return (_jsx("section", { className: "py-20 bg-gradient-to-br from-zion-slate-800 to-zion-slate-900", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Trusted by Industry Leaders" }), _jsx("p", { className: "text-xl text-zion-slate-300 max-w-3xl mx-auto", children: "Join hundreds of companies worldwide who trust Zion Tech Group to deliver innovative solutions that drive growth and success." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: trustedCompanies.map((company, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, whileHover: { y: -5 }, children: _jsx(Card, { className: "h-full bg-zion-slate-700/50 border-zion-slate-600 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "text-center mb-4", children: [_jsx("div", { className: "text-4xl mb-2", children: company.logo }), _jsx("h3", { className: "text-xl font-bold text-white mb-1", children: company.name }), _jsx("p", { className: "text-zion-cyan text-sm font-medium", children: company.industry })] }), _jsx("div", { className: "text-center", children: _jsxs("p", { className: "text-zion-slate-300 italic", children: ["\"", company.testimonial, "\""] }) })] }) }) }, company.name))) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-20 text-center", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold text-zion-cyan mb-2", children: "99.9%" }), _jsx("div", { className: "text-zion-slate-300", children: "Uptime Guarantee" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold text-zion-purple mb-2", children: "24/7" }), _jsx("div", { className: "text-zion-slate-300", children: "Expert Support" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold text-zion-cyan mb-2", children: "ISO 27001" }), _jsx("div", { className: "text-zion-slate-300", children: "Security Certified" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold text-zion-purple mb-2", children: "100%" }), _jsx("div", { className: "text-zion-slate-300", children: "Satisfaction Rate" })] })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, className: "mt-16 text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-8 border border-zion-cyan/20", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Join the Future?" }), _jsx("p", { className: "text-zion-slate-300 mb-6 max-w-2xl mx-auto", children: "Experience the power of cutting-edge technology solutions that have already transformed hundreds of businesses worldwide." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("button", { className: "px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25", children: "Get Started Today" }), _jsx("button", { className: "px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300", children: "Schedule Demo" })] })] }) })] }) }));
}
