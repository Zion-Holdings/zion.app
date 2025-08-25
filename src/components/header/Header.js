import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export function Header({ hideLogin = false, customLogo, customTheme }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchExpanded(false);
    }, [navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery("");
            setIsSearchExpanded(false);
        }
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsSearchExpanded(false);
    };
    const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded);
        setIsMobileMenuOpen(false);
    };
    return (_jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md", children: [_jsxs("div", { className: "container flex h-16 items-center px-4 sm:px-6", children: [_jsx("div", { className: "text-2xl font-bold text-zion-cyan", children: "Zion Tech" }), _jsx("div", { className: "ml-6 flex-1 hidden lg:block", children: _jsxs("nav", { className: "flex space-x-8", children: [_jsx(Link, { to: "/", className: "text-zion-cyan hover:text-zion-purple transition-colors", children: "Home" }), _jsx(Link, { to: "/services", className: "text-zion-cyan hover:text-zion-purple transition-colors", children: "Services" }), _jsx(Link, { to: "/about", className: "text-zion-cyan hover:text-zion-purple transition-colors", children: "About" }), _jsx(Link, { to: "/contact", className: "text-zion-cyan hover:text-zion-purple transition-colors", children: "Contact" })] }) }), _jsx("div", { className: "hidden md:block w-64 mx-4", children: _jsx("form", { onSubmit: handleSubmit, className: "relative", children: _jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search services...", className: "w-full px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple" }) }) }), _jsx("div", { className: "flex items-center gap-2 hidden md:flex", children: !hideLogin && (_jsx(Link, { to: "/login", className: "px-4 py-2 bg-zion-purple text-white rounded-md hover:bg-zion-purple-dark transition-colors", children: "Login" })) }), _jsxs("div", { className: "flex items-center gap-2 md:hidden", children: [_jsx("button", { onClick: toggleSearch, className: "p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors", "aria-label": "Toggle search", children: _jsx(Search, { className: "w-5 h-5" }) }), _jsx("button", { onClick: toggleMobileMenu, className: "p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors", "aria-label": "Toggle mobile menu", children: isMobileMenuOpen ? _jsx(X, { className: "w-5 h-5" }) : _jsx(Menu, { className: "w-5 h-5" }) })] })] }), _jsx(AnimatePresence, { children: isSearchExpanded && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, className: "border-t border-zion-purple/20 bg-zion-blue-dark/95", children: _jsx("div", { className: "container px-4 py-3", children: _jsxs("form", { onSubmit: handleSubmit, className: "flex gap-2", children: [_jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search services...", className: "flex-1 px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple" }), _jsx("button", { type: "submit", className: "px-4 py-2 bg-zion-purple text-white rounded-md hover:bg-zion-purple-dark transition-colors", children: "Search" })] }) }) })) }), _jsx(AnimatePresence, { children: isMobileMenuOpen && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, className: "border-t border-zion-purple/20 bg-zion-blue-dark/95 lg:hidden", children: _jsxs("div", { className: "container px-4 py-4", children: [_jsxs("nav", { className: "flex flex-col space-y-2", children: [_jsx(Link, { to: "/", className: "text-zion-cyan hover:text-zion-purple transition-colors py-2", children: "Home" }), _jsx(Link, { to: "/services", className: "text-zion-cyan hover:text-zion-purple transition-colors py-2", children: "Services" }), _jsx(Link, { to: "/about", className: "text-zion-cyan hover:text-zion-purple transition-colors py-2", children: "About" }), _jsx(Link, { to: "/contact", className: "text-zion-cyan hover:text-zion-purple transition-colors py-2", children: "Contact" })] }), _jsx("div", { className: "mt-4 pt-4 border-t border-zion-purple/20", children: !hideLogin && (_jsx(Link, { to: "/login", className: "block w-full px-4 py-2 bg-zion-purple text-white rounded-md hover:bg-zion-purple-dark transition-colors text-center", children: "Login" })) })] }) })) })] }));
}
