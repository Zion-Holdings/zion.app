import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Globe } from "lucide-react";
export function EnhancedHeroSection() {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    const floatingElements = [
        { icon: _jsx(Sparkles, { className: "h-6 w-6" }), delay: 0, duration: 3 },
        { icon: _jsx(Zap, { className: "h-5 w-5" }), delay: 0.5, duration: 4 },
        { icon: _jsx(Users, { className: "h-5 w-5" }), delay: 1, duration: 3.5 },
        { icon: _jsx(Globe, { className: "h-6 w-6" }), delay: 1.5, duration: 4.5 },
    ];
    return (_jsxs("section", { className: "relative min-h-screen overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark opacity-90" }), _jsx("div", { className: "absolute inset-0 bg-white/5 backdrop-blur-3xl" }), _jsx("div", { className: "absolute inset-0", children: floatingElements.map((element, index) => (_jsx(motion.div, { className: "absolute text-zion-cyan-light/30", style: {
                        left: `${20 + index * 20}%`,
                        top: `${30 + index * 15}%`,
                    }, animate: {
                        y: [0, -20, 0],
                        rotate: [0, 360],
                    }, transition: {
                        duration: element.duration,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }, children: element.icon }, index))) }), _jsx("div", { className: "absolute inset-0 opacity-20", style: {
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 221, 210, 0.1), transparent 40%)`,
                } }), _jsxs(motion.div, { className: "container relative z-10 px-4 mx-auto text-center pt-32 pb-20", style: { y, opacity }, children: [_jsx(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, children: _jsx(GradientHeading, { className: "mb-6 text-6xl md:text-8xl font-bold leading-tight", children: t('home.hero_title') || "The Future of Tech & AI" }) }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: t('home.hero_subtitle') || "Discover top AI and tech talent, cutting-edge services, and revolutionary equipment in the world's most advanced marketplace." }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row justify-center gap-6 mb-16", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: [_jsx(Button, { className: "group relative overflow-hidden bg-gradient-to-r from-zion-purple via-zion-purple-light to-zion-purple-dark hover:from-zion-purple-light hover:via-zion-purple hover:to-zion-purple-dark text-lg py-7 px-8 rounded-xl shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105", size: "lg", asChild: true, children: _jsxs(Link, { to: "/signup", role: "button", "aria-label": t('auth.signup') || "Get Started", tabIndex: 0, "data-testid": "hero-signup-btn", children: [_jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [t('auth.signup') || "Get Started", _jsx(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-1" })] }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-cyan-light opacity-0 group-hover:opacity-20 transition-opacity duration-300" })] }) }), _jsxs(Link, { id: "browse-marketplace", to: "/marketplace", className: "group relative overflow-hidden border-2 border-zion-cyan text-zion-cyan hover:text-zion-blue-dark hover:bg-zion-cyan active:bg-zion-cyan-light text-lg py-7 px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-zion-cyan/25", children: [_jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [t('home.browse_marketplace') || "Browse Marketplace", _jsx(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-1" })] }), _jsx("div", { className: "absolute inset-0 bg-zion-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-300" })] })] }), _jsxs(motion.div, { className: "flex flex-wrap justify-center items-center gap-8 text-zion-slate-light/70", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full animate-pulse" }), _jsx("span", { className: "text-sm font-medium", children: "10,000+ Verified Talents" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-purple rounded-full animate-pulse" }), _jsx("span", { className: "text-sm font-medium", children: "Global Coverage" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-blue rounded-full animate-pulse" }), _jsx("span", { className: "text-sm font-medium", children: "24/7 Support" })] })] })] }), _jsx("div", { className: "absolute bottom-0 left-0 right-0", children: _jsxs("svg", { className: "w-full h-16 text-background", viewBox: "0 0 1200 120", preserveAspectRatio: "none", children: [_jsx("path", { d: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z", opacity: ".25", fill: "currentColor" }), _jsx("path", { d: "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.71,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z", opacity: ".5", fill: "currentColor" }), _jsx("path", { d: "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z", fill: "currentColor" })] }) })] }));
}
