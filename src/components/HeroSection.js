import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
export default function HeroSection() {
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
            opacity: [0.3, 0.8, 0.3],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (_jsxs("section", { className: "relative overflow-hidden py-20 md:py-32 min-h-[80vh] flex items-center", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" }), _jsxs("div", { className: "absolute inset-0", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60", variants: particleVariants, animate: "animate" }), _jsx(motion.div, { className: "absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50", variants: particleVariants, animate: "animate", style: { animationDelay: "1s" } }), _jsx(motion.div, { className: "absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-70", variants: particleVariants, animate: "animate", style: { animationDelay: "2s" } }), _jsx(motion.div, { className: "absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30", variants: particleVariants, animate: "animate", style: { animationDelay: "0.5s" } }), _jsx(motion.div, { className: "absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-50", variants: particleVariants, animate: "animate", style: { animationDelay: "1.5s" } })] }), _jsx("div", { className: "container mx-auto px-4 relative z-10", children: _jsxs(motion.div, { className: "max-w-4xl mx-auto text-center", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsxs(motion.h1, { className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", variants: itemVariants, children: ["The Future of", ' ', _jsx("span", { className: "bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent", children: "Tech Talent" }), ' ', "is Here"] }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed", variants: itemVariants, children: "Connect with world-class developers, designers, and tech professionals. Build your dream team or find your next opportunity in the Zion Tech Group marketplace." }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-12", variants: itemVariants, children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105", children: _jsxs(Link, { to: "/marketplace", children: ["Explore Marketplace", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) }), _jsxs(Button, { variant: "outline", size: "lg", className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105", children: [_jsx(Play, { className: "mr-2 h-5 w-5" }), "Watch Demo"] })] }), _jsxs(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto", variants: itemVariants, children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx(Users, { className: "h-8 w-8 text-zion-cyan" }) }), _jsx("div", { className: "text-3xl font-bold text-white", children: "10K+" }), _jsx("div", { className: "text-zion-slate-light", children: "Active Users" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx(Star, { className: "h-8 w-8 text-zion-purple-light" }) }), _jsx("div", { className: "text-3xl font-bold text-white", children: "500+" }), _jsx("div", { className: "text-zion-slate-light", children: "Top Talent" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx(Award, { className: "h-8 w-8 text-zion-cyan-light" }) }), _jsx("div", { className: "text-3xl font-bold text-white", children: "95%" }), _jsx("div", { className: "text-zion-slate-light", children: "Success Rate" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx(Users, { className: "h-8 w-8 text-zion-purple" }) }), _jsx("div", { className: "text-3xl font-bold text-white", children: "24/7" }), _jsx("div", { className: "text-zion-slate-light", children: "Support" })] })] }), _jsxs(motion.div, { className: "mt-12 pt-8 border-t border-zion-blue-light", variants: itemVariants, children: [_jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: "Trusted by leading companies worldwide" }), _jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 opacity-60", children: [_jsx("div", { className: "text-zion-slate-light font-semibold", children: "Microsoft" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "Google" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "Amazon" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "Meta" }), _jsx("div", { className: "text-zion-slate-light font-semibold", children: "Netflix" })] })] })] }) })] }));
}
