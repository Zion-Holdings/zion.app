import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, Briefcase, Phone, HelpCircle, FileText, Globe, Settings, Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import FuturisticNeonButton from './ui/FuturisticNeonButton';
const MainNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
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
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Implement search functionality
            console.log('Searching for:', searchQuery);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };
    return (_jsxs(motion.nav, { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-zion-blue-dark/95 backdrop-blur-lg border-b border-zion-blue-light/30'
            : 'bg-transparent'}`, initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [_jsxs("div", { className: "flex items-center justify-between h-16 lg:h-20", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [_jsx(motion.div, { className: "w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center", whileHover: { scale: 1.1, rotate: 5 }, transition: { type: "spring", stiffness: 300 }, children: _jsx("span", { className: "text-white font-bold text-lg lg:text-xl", children: "Z" }) }), _jsxs("div", { className: "hidden sm:block", children: [_jsx("h1", { className: "text-xl lg:text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors", children: "Zion Tech Group" }), _jsx("p", { className: "text-xs lg:text-sm text-zion-slate-light", children: "Innovation \u2022 Technology \u2022 Solutions" })] })] }), _jsx("div", { className: "hidden lg:flex items-center gap-8", children: navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    const active = isActive(item.path);
                                    return (_jsx(motion.div, { whileHover: { y: -2 }, whileTap: { scale: 0.95 }, children: _jsxs(Link, { to: item.path, className: `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${active
                                                ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                                                : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20'}`, children: [_jsx(Icon, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: item.label })] }) }, item.path));
                                }) }), _jsxs("div", { className: "hidden lg:flex items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsSearchOpen(!isSearchOpen), className: "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10", children: _jsx(Search, { className: "w-5 h-5" }) }), _jsx(FuturisticNeonButton, { onClick: () => window.location.href = 'tel:+13024640950', size: "sm", children: "Get Started" })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "lg:hidden p-2 text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10", children: isMobileMenuOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), _jsx(AnimatePresence, { children: isSearchOpen && (_jsx(motion.div, { className: "py-4 border-t border-zion-blue-light/20", initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, children: _jsxs("form", { onSubmit: handleSearch, className: "flex gap-3", children: [_jsx(Input, { type: "text", placeholder: "Search our services, solutions, and resources...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "flex-1 bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan" }), _jsx(Button, { type: "submit", className: "bg-zion-cyan hover:bg-zion-cyan-light text-white", children: "Search" })] }) })) })] }), _jsx(AnimatePresence, { children: isMobileMenuOpen && (_jsx(motion.div, { className: "lg:hidden bg-zion-blue-dark/95 backdrop-blur-lg border-t border-zion-blue-light/30", initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, children: _jsxs("div", { className: "px-4 py-6 space-y-4", children: [_jsxs("form", { onSubmit: handleSearch, className: "flex gap-2", children: [_jsx(Input, { type: "text", placeholder: "Search...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "flex-1 bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan" }), _jsx(Button, { type: "submit", size: "sm", className: "bg-zion-cyan hover:bg-zion-cyan-light text-white", children: _jsx(Search, { className: "w-4 h-4" }) })] }), _jsx("nav", { className: "space-y-2", children: navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    const active = isActive(item.path);
                                    return (_jsxs(Link, { to: item.path, onClick: () => setIsMobileMenuOpen(false), className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${active
                                            ? 'text-zion-cyan bg-zion-cyan/20 border border-zion-cyan/30'
                                            : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20'}`, children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { className: "font-medium", children: item.label })] }, item.path));
                                }) }), _jsx("div", { className: "pt-4 border-t border-zion-blue-light/20", children: _jsxs("div", { className: "text-center space-y-3", children: [_jsxs("div", { className: "text-sm text-zion-slate-light", children: [_jsx("p", { children: "\uD83D\uDCDE +1 (302) 464-0950" }), _jsx("p", { children: "\uD83D\uDCE7 kleber@ziontechgroup.com" })] }), _jsx(FuturisticNeonButton, { onClick: () => {
                                                setIsMobileMenuOpen(false);
                                                window.location.href = 'tel:+13024640950';
                                            }, className: "w-full", children: "Call Now" })] }) })] }) })) })] }));
};
export default MainNavigation;
