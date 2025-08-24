import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
export function HeroSection() {
    const { t } = useTranslation();
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const particleVariants = {
        animate: {
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (_jsxs("section", { className: "relative overflow-hidden py-20 md:py-32 min-h-[80vh] flex items-center", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" }), _jsxs("div", { className: "absolute inset-0", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60", variants: particleVariants, animate: "animate" }), _jsx(motion.div, { className: "absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50", variants: particleVariants, animate: "animate", style: { animationDelay: "1s" } }), _jsx(motion.div, { className: "absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-70", variants: particleVariants, animate: "animate", style: { animationDelay: "2s" } }), _jsx(motion.div, { className: "absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30", variants: particleVariants, animate: "animate", style: { animationDelay: "0.5s" } }), _jsx(motion.div, { className: "absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-50", variants: particleVariants, animate: "animate", style: { animationDelay: "1.5s" } })] }), _jsx(motion.div, { className: "absolute top-1/4 right-1/6 hidden lg:block", initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { delay: 1, duration: 0.8 }, children: _jsx("div", { className: "bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20", children: _jsxs("div", { className: "flex items-center gap-3 text-white", children: [_jsx(Users, { className: "w-5 h-5 text-zion-cyan" }), _jsx("span", { className: "text-sm font-medium", children: "10K+ Talents" })] }) }) }), _jsx(motion.div, { className: "absolute bottom-1/4 left-1/6 hidden lg:block", initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { delay: 1.2, duration: 0.8 }, children: _jsx("div", { className: "bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20", children: _jsxs("div", { className: "flex items-center gap-3 text-white", children: [_jsx(Zap, { className: "w-5 h-5 text-zion-purple" }), _jsx("span", { className: "text-sm font-medium", children: "AI-Powered" })] }) }) }), _jsx("div", { className: "container relative z-10 px-4 mx-auto text-center", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, className: "mb-6", children: _jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6", children: [_jsx(Sparkles, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-sm text-white font-medium", children: "AI-Powered Tech Marketplace" })] }) }), _jsx(motion.div, { variants: itemVariants, children: _jsx(GradientHeading, { className: "mb-6 text-5xl md:text-7xl font-bold leading-tight", children: t('home.hero_title') }) }), _jsx(motion.div, { variants: itemVariants, children: _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed", children: t('home.hero_subtitle') }) }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row justify-center gap-4 mb-8", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105", size: "lg", asChild: true, children: _jsxs(Link, { to: "/signup", role: "button", "aria-label": t('auth.signup'), tabIndex: 0, "data-testid": "hero-signup-btn", children: [t('auth.signup'), _jsx(ArrowRight, { className: "ml-2 w-5 h-5" })] }) }), _jsxs(Link, { id: "browse-marketplace", to: "/marketplace", className: "group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25", children: [t('home.browse_marketplace'), _jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })] })] }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }), _jsx("span", { children: "Secure & Verified" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-blue-400 rounded-full animate-pulse" }), _jsx("span", { children: "24/7 Support" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-purple-400 rounded-full animate-pulse" }), _jsx("span", { children: "AI-Powered Matching" })] })] })] }) }), _jsx(motion.div, { className: "fixed bottom-6 right-6 z-50 lg:hidden", initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { delay: 2, duration: 0.5 }, children: _jsx(Button, { asChild: true, className: "rounded-full w-14 h-14 p-0 bg-gradient-to-r from-zion-purple to-zion-cyan shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300", children: _jsx(Link, { to: "/marketplace", "aria-label": "Browse Marketplace", children: _jsx(ArrowRight, { className: "w-6 h-6" }) }) }) })] }));
}
