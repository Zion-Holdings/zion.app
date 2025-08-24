import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
const steps = [
    {
        title: "Create & Post",
        description: "Publish your service, job, or equipment in minutes with our AI-powered smart forms that guide you through the process.",
        icon: Send,
        color: "from-zion-purple to-zion-purple-dark",
        step: "01"
    },
    {
        title: "AI Matchmaking",
        description: "Our advanced AI algorithms analyze requirements and automatically match you with the perfect providers, talent, or opportunities.",
        icon: Search,
        color: "from-zion-cyan to-zion-cyan-dark",
        step: "02"
    },
    {
        title: "Connect & Collaborate",
        description: "Connect directly with matched providers through our secure platform. Negotiate terms, share files, and collaborate seamlessly.",
        icon: Handshake,
        color: "from-zion-blue to-zion-blue-dark",
        step: "03"
    },
    {
        title: "Deliver & Succeed",
        description: "Complete your project with confidence. Our platform ensures quality delivery and provides ongoing support for success.",
        icon: Check,
        color: "from-zion-purple-light to-zion-cyan",
        step: "04"
    },
];
export function HowItWorksSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const stepVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        }
    };
    return (_jsxs("section", { className: "py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-5", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `radial-gradient(circle at 50% 50%, ${'#8c15e9'} 2px, transparent 2px)`,
                        backgroundSize: '80px 80px'
                    } }) }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-20", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx(GradientHeading, { className: "text-4xl md:text-5xl mb-6", children: "How Zion Works" }), _jsx("p", { className: "text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed", children: "A streamlined four-step process that leverages AI to connect technology providers with clients seamlessly" })] }), _jsxs(motion.div, { className: "relative max-w-6xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: [_jsx("div", { className: "absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan via-zion-blue to-zion-purple-light transform -translate-x-1/2 hidden md:block" }), _jsx("div", { className: "space-y-16 md:space-y-0", children: steps.map((step, index) => (_jsxs(motion.div, { className: `flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} relative`, variants: itemVariants, children: [_jsx("div", { className: "md:w-1/2 mb-8 md:mb-0 md:px-16 text-center md:text-right", children: index % 2 === 0 ? (_jsxs(motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full mb-4", children: [_jsx(Sparkles, { className: "w-4 h-4 text-zion-cyan" }), _jsxs("span", { className: "text-zion-cyan text-sm font-medium", children: ["Step ", step.step] })] }), _jsx("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: step.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed text-lg", children: step.description })] })) : null }), _jsxs("div", { className: "relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-zion-blue-dark border-4 border-zion-purple mx-4 md:mx-0 shadow-2xl", children: [_jsx(motion.div, { className: `absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`, variants: stepVariants }), _jsx("div", { className: "relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple", children: _jsx(step.icon, { className: "w-6 h-6 text-zion-cyan" }) }), _jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center text-zion-blue-dark text-sm font-bold", children: step.step })] }), _jsx("div", { className: "md:w-1/2 md:px-16 text-center md:text-left", children: index % 2 !== 0 ? (_jsxs(motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full mb-4", children: [_jsx(Sparkles, { className: "w-4 h-4 text-zion-cyan" }), _jsxs("span", { className: "text-zion-cyan text-sm font-medium", children: ["Step ", step.step] })] }), _jsx("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: step.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed text-lg", children: step.description })] })) : null })] }, step.title))) }), _jsx(motion.div, { className: "mt-20 text-center", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.8 }, children: _jsxs("div", { className: "inline-flex items-center gap-3 px-8 py-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full", children: [_jsx(TrendingUp, { className: "w-6 h-6 text-zion-cyan" }), _jsx("span", { className: "text-zion-cyan font-semibold text-lg", children: "Ready to get started?" }), _jsx(ArrowRight, { className: "w-5 h-5 text-zion-cyan" })] }) })] })] })] }));
}
