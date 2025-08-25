import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Briefcase, Phone, HelpCircle, FileText, Globe, Settings } from 'lucide-react';
import { Button } from './ui/button';
const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigationItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/about', label: 'About', icon: Info },
        { path: '/careers', label: 'Careers', icon: Briefcase },
        { path: '/contact', label: 'Contact', icon: Phone },
        { path: '/help', label: 'Help', icon: HelpCircle },
        { path: '/sitemap', label: 'Sitemap', icon: FileText },
        { path: '/micro-saas-services', label: 'Services', icon: Globe },
        { path: '/green-it', label: 'Green IT', icon: Settings },
    ];
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };
    return (_jsxs("div", { className: "lg:hidden", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: toggleMenu, className: "p-2 text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10", children: _jsx(Menu, { className: "w-6 h-6" }) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: closeMenu, children: _jsxs(motion.div, { className: "absolute right-0 top-0 h-full w-80 bg-zion-blue-dark/95 backdrop-blur-lg border-l border-zion-blue-light/30", initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' }, transition: { type: "spring", stiffness: 300, damping: 30 }, onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-zion-blue-light/20", children: [_jsx("h2", { className: "text-xl font-bold text-white", children: "Menu" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: closeMenu, className: "text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10", children: _jsx(X, { className: "w-6 h-6" }) })] }), _jsx("nav", { className: "p-6 space-y-4", children: navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    const active = isActive(item.path);
                                    return (_jsxs(Link, { to: item.path, onClick: closeMenu, className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${active
                                            ? 'text-zion-cyan bg-zion-cyan/20 border border-zion-cyan/30'
                                            : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20'}`, children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { className: "font-medium", children: item.label })] }, item.path));
                                }) }), _jsx("div", { className: "p-6 border-t border-zion-blue-light/20", children: _jsxs("div", { className: "text-center space-y-3", children: [_jsxs("div", { className: "text-sm text-zion-slate-light", children: [_jsx("p", { children: "\uD83D\uDCDE +1 (302) 464-0950" }), _jsx("p", { children: "\uD83D\uDCE7 kleber@ziontechgroup.com" })] }), _jsx(Button, { onClick: () => {
                                                closeMenu();
                                                window.location.href = 'tel:+13024640950';
                                            }, className: "w-full bg-zion-cyan hover:bg-zion-cyan-light text-white", children: "Call Now" })] }) })] }) })) })] }));
};
export default MobileNavigation;
