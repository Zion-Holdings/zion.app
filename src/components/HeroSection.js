import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Search } from "lucide-react";
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
    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (_jsxs("section", { className: "relative overflow-hidden py-20 md:py-32 min-h-[80vh] flex items-center", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-transparent to-zion-cyan/20 animate-pulse" }), _jsxs(motion.div, { className: "absolute inset-0", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60", variants: floatingVariants, animate: "animate" }), _jsx(motion.div, { className: "absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50", variants: floatingVariants, animate: "animate", style: { animationDelay: "1s" } }), _jsx(motion.div, { className: "absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60", variants: floatingVariants, animate: "animate", style: { animationDelay: "2s" } }), _jsx(motion.div, { className: "absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30", variants: floatingVariants, animate: "animate", style: { animationDelay: "3s" } })] }), _jsx("div", { className: "container relative z-10 px-4 mx-auto text-center", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsxs(motion.div, { variants: itemVariants, className: "mb-6", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [_jsx(Sparkles, { className: "h-8 w-8 text-zion-cyan animate-pulse" }), _jsx("span", { className: "text-zion-cyan text-lg font-medium", children: "AI-Powered" }), _jsx(Sparkles, { className: "h-8 w-8 text-zion-cyan animate-pulse" })] }), _jsx(GradientHeading, { className: "text-5xl md:text-7xl font-bold leading-tight", children: t('home.hero_title') })] }), _jsx(motion.p, { variants: itemVariants, className: "text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed", children: t('home.hero_subtitle') }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row justify-center gap-4 mb-12", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300", size: "lg", asChild: true, children: _jsxs(Link, { to: "/signup", role: "button", "aria-label": t('auth.signup'), tabIndex: 0, "data-testid": "hero-signup-btn", className: "flex items-center gap-2", children: [_jsx(Zap, { className: "h-5 w-5" }), t('auth.signup'), _jsx(ArrowRight, { className: "h-5 w-5" })] }) }), _jsxs(Link, { id: "browse-marketplace", to: "/marketplace", className: "group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg", children: [_jsx(Search, { className: "h-5 w-5 group-hover:rotate-12 transition-transform" }), t('home.browse_marketplace')] })] }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full" }), _jsx("span", { children: "AI-Powered Matching" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-purple rounded-full" }), _jsx("span", { children: "Verified Professionals" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full" }), _jsx("span", { children: "Secure Payments" })] })] })] }) })] }));
}
