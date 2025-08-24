import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
export function HeroSection() {
    const { t } = useTranslation();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
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
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (_jsxs("section", { className: "relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple-light/20" }), _jsxs("div", { className: "absolute inset-0", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60", variants: particleVariants, animate: "animate" }), _jsx(motion.div, { className: "absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50", variants: particleVariants, animate: "animate", style: { animationDelay: "1s" } }), _jsx(motion.div, { className: "absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60", variants: particleVariants, animate: "animate", style: { animationDelay: "2s" } }), _jsx(motion.div, { className: "absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30", variants: particleVariants, animate: "animate", style: { animationDelay: "0.5s" } }), _jsx(motion.div, { className: "absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-purple-light opacity-40", variants: particleVariants, animate: "animate", style: { animationDelay: "1.5s" } })] }), _jsx(motion.div, { className: "absolute top-20 right-20 w-32 h-32 border border-zion-cyan/30 rounded-lg rotate-45", animate: { rotate: [45, 405], opacity: [0.3, 0.6, 0.3] }, transition: { duration: 20, repeat: Infinity, ease: "linear" } }), _jsx(motion.div, { className: "absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/30 rounded-full", animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }, transition: { duration: 15, repeat: Infinity, ease: "easeInOut" } }), _jsxs(motion.div, { className: "container relative z-10 px-4 mx-auto text-center", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, children: _jsx(GradientHeading, { className: "mb-6 text-5xl md:text-7xl font-bold leading-tight", children: t('home.hero_title') }) }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto leading-relaxed", variants: itemVariants, children: t('home.hero_subtitle') }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row justify-center gap-4", variants: itemVariants, children: [_jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300", size: "lg", asChild: true, children: _jsx(Link, { to: "/signup", role: "button", "aria-label": t('auth.signup'), tabIndex: 0, "data-testid": "hero-signup-btn", children: t('auth.signup') }) }) }), _jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(Link, { id: "browse-marketplace", to: "/marketplace", className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25", children: t('home.browse_marketplace') }) })] }), _jsxs(motion.div, { className: "mt-12 text-center", variants: itemVariants, children: [_jsx("p", { className: "text-zion-slate-light mb-4", children: "Trusted by leading tech companies worldwide" }), _jsxs("div", { className: "flex justify-center items-center gap-8 opacity-60", children: [_jsx("div", { className: "w-16 h-8 bg-zion-cyan/20 rounded" }), _jsx("div", { className: "w-16 h-8 bg-zion-purple/20 rounded" }), _jsx("div", { className: "w-16 h-8 bg-zion-blue/20 rounded" })] })] })] })] }));
}
