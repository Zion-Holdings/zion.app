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
    return (_jsxs("section", { className: "relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" }), _jsxs("div", { className: "absolute inset-0", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60", animate: {
                            y: [0, -20, 0],
                            opacity: [0.6, 0.3, 0.6],
                            scale: [1, 1.2, 1]
                        }, transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        } }), _jsx(motion.div, { className: "absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40", animate: {
                            y: [0, 15, 0],
                            opacity: [0.4, 0.7, 0.4],
                            scale: [1, 0.8, 1]
                        }, transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        } }), _jsx(motion.div, { className: "absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50", animate: {
                            y: [0, -10, 0],
                            opacity: [0.5, 0.2, 0.5],
                            scale: [1, 1.5, 1]
                        }, transition: {
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        } }), _jsx(motion.div, { className: "absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30", animate: {
                            y: [0, 25, 0],
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 0.7, 1]
                        }, transition: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        } })] }), _jsx("div", { className: "absolute inset-0 opacity-10", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                    } }) }), _jsx("div", { className: "container relative z-10 px-4 mx-auto text-center", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "max-w-5xl mx-auto", children: [_jsx(motion.div, { variants: itemVariants, className: "mb-8", children: _jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 text-zion-purple-light text-sm font-medium mb-6", children: [_jsx("span", { className: "w-2 h-2 bg-zion-purple rounded-full mr-2 animate-pulse" }), "AI-Powered Tech Marketplace"] }) }), _jsx(motion.div, { variants: itemVariants, className: "mb-8", children: _jsx(GradientHeading, { className: "text-6xl md:text-8xl lg:text-9xl font-black leading-tight", children: t('home.hero_title') || 'The Future of Tech' }) }), _jsx(motion.div, { variants: itemVariants, className: "mb-12", children: _jsx("p", { className: "text-xl md:text-2xl lg:text-3xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed font-light", children: t('home.hero_subtitle') || 'Discover cutting-edge AI services, connect with top tech talent, and access revolutionary equipment. Your gateway to the future of technology.' }) }), _jsx(motion.div, { variants: itemVariants, className: "mb-12", children: _jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purple hover:from-zion-purple-light hover:via-zion-purple hover:to-zion-purple-dark text-lg py-8 px-8 rounded-xl shadow-2xl shadow-zion-purple/25 transform hover:scale-105 transition-all duration-300 border-0", size: "lg", asChild: true, children: _jsx(Link, { to: "/signup", role: "button", "aria-label": t('auth.signup') || 'Get Started', tabIndex: 0, "data-testid": "hero-signup-btn", className: "text-white font-semibold", children: t('auth.signup') || 'Get Started Free' }) }), _jsxs(Link, { id: "browse-marketplace", to: "/marketplace", className: "group relative overflow-hidden border-2 border-zion-cyan text-zion-cyan hover:text-zion-blue-dark bg-transparent hover:bg-zion-cyan text-lg py-8 px-8 rounded-xl inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105", children: [_jsx("span", { className: "relative z-10", children: t('home.browse_marketplace') || 'Explore Marketplace' }), _jsx("div", { className: "absolute inset-0 bg-zion-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" })] })] }) }), _jsx(motion.div, { variants: itemVariants, className: "mt-16", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx("svg", { className: "w-8 h-8 text-zion-purple", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "AI-Powered Matching" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Smart algorithms connect you with the perfect services" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx("svg", { className: "w-8 h-8 text-zion-cyan", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Global Network" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Access talent and services worldwide" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx("svg", { className: "w-8 h-8 text-zion-purple", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Secure & Trusted" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Enterprise-grade security and verification" })] })] }) })] }) })] }));
}
