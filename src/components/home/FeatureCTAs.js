import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const FeatureCTAs = () => {
    const features = [
        {
            title: "AI-Powered Solutions",
            description: "Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation across your organization.",
            icon: "🤖",
            color: "from-zion-cyan to-zion-blue",
            link: "/ai-solutions"
        },
        {
            title: "Cybersecurity Services",
            description: "Protect your digital assets with enterprise-grade security solutions, threat detection, and compliance management.",
            icon: "🔒",
            color: "from-zion-purple to-zion-red",
            link: "/cybersecurity"
        },
        {
            title: "Cloud Infrastructure",
            description: "Build scalable, resilient cloud architectures that optimize performance, reduce costs, and enable rapid deployment.",
            icon: "☁️",
            color: "from-zion-blue to-zion-cyan",
            link: "/cloud-services"
        }
    ];
    return (_jsx("section", { className: "py-16 bg-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Transform Your Business" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Choose from our comprehensive suite of technology services designed to drive growth and innovation." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: features.map((feature, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "group", children: _jsxs("div", { className: "bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("div", { className: "text-4xl mb-4", children: feature.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: feature.title }), _jsx("p", { className: "text-zion-slate-light", children: feature.description })] }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [_jsx("span", { className: "bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 px-3 py-1 rounded-full text-sm", children: "Featured" }), _jsx("span", { className: "bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 px-3 py-1 rounded-full text-sm", children: "New" })] }), _jsx(Link, { to: feature.link, children: _jsx("button", { className: `w-full bg-gradient-to-r ${feature.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`, children: "Get Started" }) })] }) }, index))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.5 }, className: "text-center mt-12", children: _jsx(Link, { to: "/comprehensive-services", children: _jsx("button", { className: "bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300", children: "View All Services" }) }) })] }) }));
};
