import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, X, ChevronUp, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsVisible(scrollTop > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const containerVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.2
            }
        }
    };
    const expandVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
            y: 20
        },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };
    if (!isVisible)
        return null;
    return (_jsxs("div", { className: "fixed bottom-6 right-6 z-50", children: [_jsx(AnimatePresence, { children: isExpanded && (_jsxs(motion.div, { className: "absolute bottom-20 right-0 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md", variants: expandVariants, initial: "hidden", animate: "visible", exit: "hidden", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: "Quick Actions" }), _jsx("button", { onClick: () => setIsExpanded(false), className: "text-zion-slate-light hover:text-white transition-colors", children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs(Link, { to: "/match", className: "flex items-center gap-3 p-3 rounded-lg bg-zion-purple/20 hover:bg-zion-purple/30 transition-colors group", onClick: () => setIsExpanded(false), children: [_jsx("div", { className: "p-2 rounded-full bg-zion-purple/30 group-hover:scale-110 transition-transform", children: _jsx(Zap, { className: "h-4 w-4 text-zion-cyan" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-white font-medium", children: "AI Talent Matcher" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Find perfect matches instantly" })] })] }), _jsxs(Link, { to: "/contact", className: "flex items-center gap-3 p-3 rounded-lg bg-zion-cyan/20 hover:bg-zion-cyan/30 transition-colors group", onClick: () => setIsExpanded(false), children: [_jsx("div", { className: "p-2 rounded-full bg-zion-cyan/30 group-hover:scale-110 transition-transform", children: _jsx(MessageCircle, { className: "h-4 w-4 text-zion-purple" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-white font-medium", children: "Get Support" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "24/7 expert assistance" })] })] })] }), _jsx("div", { className: "mt-4 pt-4 border-t border-zion-purple/20", children: _jsx("p", { className: "text-zion-slate-light text-sm text-center", children: "Need help? Our team is here for you" }) })] })) }), _jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(motion.button, { onClick: scrollToTop, className: "w-14 h-14 bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group", variants: containerVariants, initial: "hidden", animate: "visible", whileHover: "hover", children: _jsx(ChevronUp, { className: "h-6 w-6 text-white group-hover:text-zion-cyan transition-colors" }) }), _jsx(motion.button, { onClick: () => setIsExpanded(!isExpanded), className: "w-14 h-14 bg-gradient-to-r from-zion-purple to-zion-purple-dark border border-zion-purple/30 hover:border-zion-purple/50 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group", variants: containerVariants, initial: "hidden", animate: "visible", whileHover: "hover", children: _jsx(MessageCircle, { className: "h-6 w-6 text-white group-hover:text-zion-cyan transition-colors" }) })] })] }));
}
