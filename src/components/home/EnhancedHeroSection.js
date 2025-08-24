import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Brain, Cloud, Shield, BarChart3, Globe, Smartphone, TrendingUp, Briefcase, Sparkles as SparklesIcon, Play, Star, Users, Zap } from "lucide-react";
const FloatingIcon = ({ icon, delay, position }) => (_jsx(motion.div, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { delay, duration: 1 }, className: "absolute text-zion-cyan/30", style: { left: `${position.x}%`, top: `${position.y}%` }, children: _jsx(motion.div, { animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
        }, transition: {
            duration: 4,
            repeat: Infinity,
            delay
        }, className: "text-2xl", children: icon }) }));
const AnimatedBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light" }), _jsx("div", { className: "absolute inset-0 opacity-30", style: {
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(140, 21, 233, 0.3) 0%, rgba(34, 221, 210, 0.2) 50%, rgba(46, 115, 234, 0.1) 100%)`
                } }), _jsx("div", { className: "absolute inset-0", children: Array.from({ length: 20 }).map((_, i) => (_jsx(motion.div, { className: "absolute w-1 h-1 bg-zion-cyan rounded-full", style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }, animate: {
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }, transition: {
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    } }, i))) }), _jsx(FloatingIcon, { icon: _jsx(Brain, {}), delay: 0, position: { x: 10, y: 20 } }), _jsx(FloatingIcon, { icon: _jsx(Cloud, {}), delay: 0.5, position: { x: 85, y: 15 } }), _jsx(FloatingIcon, { icon: _jsx(Shield, {}), delay: 1, position: { x: 15, y: 80 } }), _jsx(FloatingIcon, { icon: _jsx(BarChart3, {}), delay: 1.5, position: { x: 80, y: 75 } }), _jsx(FloatingIcon, { icon: _jsx(Globe, {}), delay: 2, position: { x: 50, y: 10 } }), _jsx(FloatingIcon, { icon: _jsx(Smartphone, {}), delay: 2.5, position: { x: 90, y: 60 } }), _jsx(FloatingIcon, { icon: _jsx(TrendingUp, {}), delay: 3, position: { x: 5, y: 60 } }), _jsx(FloatingIcon, { icon: _jsx(Briefcase, {}), delay: 3.5, position: { x: 70, y: 25 } }), _jsx(FloatingIcon, { icon: _jsx(SparklesIcon, {}), delay: 4, position: { x: 25, y: 85 } })] }));
};
const StatsSection = () => {
    const stats = [
        { label: "Services Available", value: "500+", icon: _jsx(Sparkles, { className: "w-5 h-5" }) },
        { label: "Expert Providers", value: "200+", icon: _jsx(Users, { className: "w-5 h-5" }) },
        { label: "Projects Completed", value: "1000+", icon: _jsx(Star, { className: "w-5 h-5" }) },
        { label: "Response Time", value: "<2hrs", icon: _jsx(Zap, { className: "w-5 h-5" }) }
    ];
    return (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1.2 }, className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12", children: stats.map((stat, index) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: 1.4 + index * 0.1 }, className: "text-center group", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx("div", { className: "p-2 bg-zion-cyan/20 rounded-lg text-zion-cyan group-hover:bg-zion-cyan group-hover:text-white transition-all duration-300", children: stat.icon }) }), _jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-zion-slate-light", children: stat.label })] }, stat.label))) }));
};
const CTAButtons = () => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1.6 }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center mt-8", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white text-lg py-6 px-8 rounded-xl font-bold shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 group", size: "lg", asChild: true, children: _jsxs(Link, { to: "/signup", children: ["Get Started Now", _jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })] }) }), _jsx(Button, { variant: "outline", className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8 rounded-xl font-bold transition-all duration-300 group", size: "lg", asChild: true, children: _jsxs(Link, { to: "/comprehensive-services", children: ["Explore All Services", _jsx(Sparkles, { className: "ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" })] }) }), _jsxs(Button, { variant: "ghost", className: "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 text-lg py-6 px-8 rounded-xl font-bold transition-all duration-300 group", size: "lg", children: [_jsx(Play, { className: "mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" }), "Watch Demo"] })] }));
};
export const EnhancedHeroSection = () => {
    const [currentFeature, setCurrentFeature] = useState(0);
    const features = [
        "AI-Powered Solutions",
        "Cloud & DevOps Services",
        "Cybersecurity Protection",
        "Data Analytics & BI",
        "Web & Mobile Development",
        "Digital Marketing",
        "IT Strategy Consulting",
        "Blockchain & Web3"
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [features.length]);
    return (_jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [_jsx(AnimatedBackground, {}), _jsxs("div", { className: "relative z-10 container mx-auto px-4 text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, className: "mb-8", children: [_jsxs("div", { className: "flex items-center justify-center mb-4", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 20, repeat: Infinity, ease: "linear" }, className: "w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mr-4", children: _jsx(Sparkles, { className: "w-6 h-6 text-white" }) }), _jsx("span", { className: "text-zion-cyan text-lg font-medium", children: "Zion Tech Group" })] }), _jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight", children: ["The Future of", _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent", children: "Tech Services" }), _jsx("br", {}), _jsx("span", { className: "text-white", children: "is Here" })] })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.5 }, className: "mb-8", children: [_jsx("div", { className: "text-2xl md:text-3xl text-zion-slate-light mb-4", children: "Discover cutting-edge" }), _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 }, className: "text-3xl md:text-4xl font-bold text-zion-cyan", children: features[currentFeature] }, currentFeature) })] }), _jsx(motion.p, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed", children: "Connect with verified technology experts and service providers. From AI development to cybersecurity, cloud migration to blockchain solutions - find the perfect partner for your next project." }), _jsx(CTAButtons, {}), _jsx(StatsSection, {}), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 2 }, className: "mt-16", children: [_jsx("p", { className: "text-zion-slate-light mb-4", children: "Trusted by leading companies worldwide" }), _jsxs("div", { className: "flex items-center justify-center space-x-8 opacity-60", children: [_jsx("div", { className: "text-zion-slate-light font-semibold", children: "Microsoft" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "Google" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "Amazon" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "IBM" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "Oracle" })] })] })] }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zion-blue-dark to-transparent" })] }));
};
