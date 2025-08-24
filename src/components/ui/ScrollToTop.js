import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (_jsx(AnimatePresence, { children: isVisible && (_jsxs(motion.button, { onClick: scrollToTop, className: "fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group", initial: { opacity: 0, scale: 0, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0, y: 20 }, whileHover: {
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 }
            }, whileTap: { scale: 0.95 }, "aria-label": "Scroll to top", children: [_jsx(motion.div, { animate: { y: [0, -2, 0] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }, children: _jsx(ChevronUp, { className: "w-5 h-5" }) }), _jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" })] })) }));
}
