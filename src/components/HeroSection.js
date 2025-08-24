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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const floatingVariants = {
        float: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (_jsxs("section", { className: "relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark opacity-90" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20" }), _jsxs(motion.div, { className: "absolute inset-0", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60", variants: floatingVariants, animate: "float" }), _jsx(motion.div, { className: "absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50", variants: floatingVariants, animate: "float", style: { animationDelay: "1s" } }), _jsx(motion.div, { className: "absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60", variants: floatingVariants, animate: "float", style: { animationDelay: "2s" } }), _jsx(motion.div, { className: "absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30", variants: floatingVariants, animate: "float", style: { animationDelay: "0.5s" } })] }), _jsx("div", { className: "container relative z-10 px-4 mx-auto text-center", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsxs(motion.div, { variants: itemVariants, className: "inline-flex items-center gap-2 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-4 py-2 mb-8", children: [_jsx(Sparkles, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-cyan text-sm font-medium", children: "AI-Powered Marketplace" })] }), _jsx(motion.div, { variants: itemVariants, children: _jsx(GradientHeading, { className: "mb-6 text-5xl md:text-7xl font-bold leading-tight", children: t('home.hero_title') }) }), _jsx(motion.p, { variants: itemVariants, className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed", children: t('home.hero_subtitle') }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-wrap justify-center gap-8 mb-12", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-zion-cyan mb-2", children: "10K+" }), _jsx("div", { className: "text-zion-slate-light", children: "Active Users" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-zion-purple mb-2", children: "500+" }), _jsx("div", { className: "text-zion-slate-light", children: "AI Services" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-zion-blue mb-2", children: "99%" }), _jsx("div", { className: "text-zion-slate-light", children: "Success Rate" })] })] }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row justify-center gap-4 mb-8", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105", size: "lg", asChild: true, children: _jsxs(Link, { to: "/signup", role: "button", "aria-label": t('auth.signup'), tabIndex: 0, "data-testid": "hero-signup-btn", className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-5 h-5" }), t('auth.signup'), _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsxs(Link, { id: "browse-marketplace", to: "/marketplace", className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg", children: [_jsx(Zap, { className: "w-5 h-5" }), t('home.browse_marketplace')] })] }), _jsx(motion.div, { variants: itemVariants, className: "text-sm text-zion-slate-light opacity-80", children: "Join thousands of developers, entrepreneurs, and AI enthusiasts" })] }) })] }));
}
