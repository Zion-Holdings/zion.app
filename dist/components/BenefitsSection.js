import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Bot, Clock, Globe, TrendingDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const benefits = [
    {
        title: "AI-Powered Matchmaking",
        description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
        icon: _jsx(Bot, { className: "w-8 h-8" }),
        color: "from-zion-purple to-zion-purple-dark",
        delay: 0,
        features: ["Smart algorithms", "Instant matching", "Quality assurance"]
    },
    {
        title: "Global Availability",
        description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
        icon: _jsx(Globe, { className: "w-8 h-8" }),
        color: "from-zion-cyan to-zion-blue",
        delay: 0.1,
        features: ["24/7 availability", "Multi-language support", "Local expertise"]
    },
    {
        title: "24/7 Support",
        description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
        icon: _jsx(Clock, { className: "w-8 h-8" }),
        color: "from-zion-blue to-zion-cyan",
        delay: 0.2,
        features: ["Live chat support", "Expert assistance", "Quick response"]
    },
    {
        title: "Cost Reduction",
        description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
        icon: _jsx(TrendingDown, { className: "w-8 h-8" }),
        color: "from-zion-purple-light to-zion-cyan",
        delay: 0.3,
        features: ["Direct pricing", "No hidden fees", "Bulk discounts"]
    },
];
export function BenefitsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
    return (_jsxs("section", { className: "py-20 bg-zion-blue-light relative overflow-hidden", "aria-labelledby": "benefits-heading", children: [_jsxs("div", { className: "absolute inset-0 opacity-5", children: [_jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-zion-purple to-transparent rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-zion-cyan to-transparent rounded-full blur-3xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-16", variants: titleVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: [_jsx(GradientHeading, { id: "benefits-heading", children: "Why Zion?" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto leading-relaxed", children: "Experience the next generation of tech marketplace with features designed to maximize efficiency and value" }), _jsxs("div", { className: "flex items-center justify-center gap-2 mt-4", children: [_jsx(Sparkles, { className: "w-5 h-5 text-zion-cyan" }), _jsx("span", { className: "text-zion-cyan font-medium", children: "Trusted by 10,000+ companies worldwide" }), _jsx(Sparkles, { className: "w-5 h-5 text-zion-cyan" })] })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, children: benefits.map((benefit, index) => (_jsx(motion.div, { variants: itemVariants, whileHover: {
                                y: -5,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }, children: _jsxs("div", { className: "relative group", children: [_jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300` }), _jsxs("div", { className: "relative bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300 rounded-xl border border-zion-purple/20 hover:border-zion-purple/50 p-8 h-full", children: [_jsx("div", { className: `inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`, children: _jsx("div", { className: "text-white", children: benefit.icon }) }), _jsx("h3", { className: "text-xl font-bold mb-4 text-white group-hover:text-zion-cyan transition-colors duration-300", children: benefit.title }), _jsx("p", { className: "text-zion-slate-light mb-6 leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300", children: benefit.description }), _jsx("div", { className: "space-y-2", children: benefit.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full" }), _jsx("span", { className: "text-zion-slate-light/80", children: feature })] }, featureIndex))) }), _jsx("div", { className: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: _jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full animate-pulse" }) })] })] }) }, index))) }), _jsx(motion.div, { className: "text-center mt-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.8 }, children: _jsxs("div", { className: "inline-flex items-center gap-3 px-6 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-full text-zion-cyan hover:bg-zion-blue hover:border-zion-purple/50 transition-all duration-300", children: [_jsx(Sparkles, { className: "w-5 h-5" }), _jsx("span", { className: "font-medium", children: "Ready to get started?" }), _jsx(Sparkles, { className: "w-5 h-5" })] }) })] })] }));
}
