import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
const benefits = [
    {
        title: "AI-Powered Matchmaking",
        description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
        icon: _jsx(Bot, { className: "w-8 h-8" }),
        delay: 0.1,
    },
    {
        title: "Global Availability",
        description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
        icon: _jsx(Globe, { className: "w-8 h-8" }),
        delay: 0.2,
    },
    {
        title: "24/7 Support",
        description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
        icon: _jsx(Clock, { className: "w-8 h-8" }),
        delay: 0.3,
    },
    {
        title: "Cost Reduction",
        description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
        icon: _jsx(TrendingDown, { className: "w-8 h-8" }),
        delay: 0.4,
    },
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
    return (_jsxs("section", { className: "py-20 bg-zion-blue-light relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 opacity-5", children: [_jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-zion-purple rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 right-0 w-64 h-64 bg-zion-cyan rounded-full blur-3xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(GradientHeading, { children: "Why Zion?" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto", children: "Experience the next generation of tech marketplace with features designed to maximize efficiency and value" })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: benefits.map((benefit, index) => (_jsx(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, transition: { delay: benefit.delay }, children: _jsx(FeatureCard, { title: benefit.title, description: benefit.description, icon: benefit.icon, className: "bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20" }) }, index))) }), _jsx(motion.div, { className: "mt-20 text-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.6 }, viewport: { once: true }, children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto", children: [_jsxs(motion.div, { className: "text-center", whileHover: { scale: 1.05 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "text-4xl font-bold text-zion-purple mb-2", children: "10K+" }), _jsx("div", { className: "text-zion-slate-light", children: "Active Users" })] }), _jsxs(motion.div, { className: "text-center", whileHover: { scale: 1.05 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "text-4xl font-bold text-zion-cyan mb-2", children: "500+" }), _jsx("div", { className: "text-zion-slate-light", children: "Service Providers" })] }), _jsxs(motion.div, { className: "text-center", whileHover: { scale: 1.05 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "text-4xl font-bold text-zion-blue mb-2", children: "99%" }), _jsx("div", { className: "text-zion-slate-light", children: "Satisfaction Rate" })] })] }) })] })] }));
}
