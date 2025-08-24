import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Bot, Clock, Globe, TrendingDown, Shield, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
const benefits = [
    {
        title: "AI-Powered Matchmaking",
        description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
        icon: _jsx(Bot, { className: "w-8 h-8" }),
        color: "from-zion-purple to-zion-purple-dark",
        features: ["Smart Algorithms", "Instant Results", "Perfect Matches"]
    },
    {
        title: "Global Availability",
        description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
        icon: _jsx(Globe, { className: "w-8 h-8" }),
        color: "from-zion-cyan to-zion-cyan-dark",
        features: ["Worldwide Network", "24/7 Access", "Local Expertise"]
    },
    {
        title: "24/7 Support",
        description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
        icon: _jsx(Clock, { className: "w-8 h-8" }),
        color: "from-emerald-500 to-green-600",
        features: ["Always Available", "Expert Team", "Quick Response"]
    },
    {
        title: "Cost Reduction",
        description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
        icon: _jsx(TrendingDown, { className: "w-8 h-8" }),
        color: "from-amber-500 to-orange-600",
        features: ["Up to 40% Savings", "Direct Connections", "No Hidden Fees"]
    },
];
const additionalFeatures = [
    {
        title: "Secure & Trusted",
        icon: _jsx(Shield, { className: "w-6 h-6" }),
        description: "Enterprise-grade security and verified providers"
    },
    {
        title: "Lightning Fast",
        icon: _jsx(Zap, { className: "w-6 h-6" }),
        description: "Instant matching and quick deployment"
    },
    {
        title: "Community Driven",
        icon: _jsx(Users, { className: "w-6 h-6" }),
        description: "Built by and for the tech community"
    },
    {
        title: "Award Winning",
        icon: _jsx(Award, { className: "w-6 h-6" }),
        description: "Recognized for innovation and excellence"
    }
];
export function BenefitsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const featureVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("section", { className: "py-20 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-72 h-72 bg-zion-purple/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx(GradientHeading, { children: "Why Zion?" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed", children: "Experience the next generation of tech marketplace with features designed to maximize efficiency and value" })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: benefits.map((benefit, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsxs("div", { className: "bg-gradient-to-br from-zion-blue/80 to-zion-blue-dark/80 backdrop-blur-sm border border-zion-blue-light/30 rounded-2xl p-8 h-full hover:border-zion-purple/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-purple/20", children: [_jsx("div", { className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`, children: _jsx("div", { className: "text-white", children: benefit.icon }) }), _jsx("h3", { className: "text-white text-2xl font-bold mb-4", children: benefit.title }), _jsx("p", { className: "text-zion-slate-light mb-6 leading-relaxed text-lg", children: benefit.description }), _jsx("div", { className: "space-y-3", children: benefit.features.map((feature, idx) => (_jsxs("div", { className: "flex items-center gap-3 text-zion-cyan/80", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full" }), _jsx("span", { className: "text-sm font-medium", children: feature })] }, idx))) })] }) }, index))) }), _jsxs(motion.div, { className: "max-w-4xl mx-auto", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: [_jsx("h3", { className: "text-center text-2xl font-bold text-white mb-12", children: "Platform Features" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: additionalFeatures.map((feature, index) => (_jsxs(motion.div, { variants: featureVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, transition: { delay: index * 0.1 }, className: "text-center group", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: _jsx("div", { className: "text-zion-cyan", children: feature.icon }) }), _jsx("h4", { className: "text-white font-semibold mb-2 text-lg", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm leading-relaxed", children: feature.description })] }, feature.title))) })] }), _jsx(motion.div, { className: "mt-16 text-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, children: _jsxs("div", { className: "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm", children: [_jsx("h3", { className: "text-white text-2xl font-bold mb-4", children: "Ready to Get Started?" }), _jsx("p", { className: "text-zion-slate-light mb-6 max-w-2xl mx-auto", children: "Join thousands of companies already using Zion to find the perfect tech solutions" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("button", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25", children: "Start Free Trial" }), _jsx("button", { className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105", children: "Schedule Demo" })] })] }) })] })] }));
}
