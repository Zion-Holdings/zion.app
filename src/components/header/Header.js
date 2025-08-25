import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Header({ hideLogin = false, customLogo, customTheme }) {
    const { user } = useAuth();
    const { isWhitelabel, primaryColor } = useWhitelabel();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const searchSuggestions = generateSearchSuggestions();
    // If we have a white-label tenant and no specific customTheme is provided,
    // use the tenant's primary color
    const effectiveTheme = customTheme || (isWhitelabel ? {
        primaryColor,
        backgroundColor: '#000000', // Default dark background
        textColor: '#ffffff', // Default light text
    } : undefined);
    const headerStyle = effectiveTheme ? {
        backgroundColor: effectiveTheme.backgroundColor,
        color: effectiveTheme.textColor,
        borderColor: `${effectiveTheme.primaryColor}20`
    } : {};
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery("");
            setIsSearchExpanded(false);
        }
    };
    const handleSearchSelect = (text) => {
        navigate(`/search?q=${encodeURIComponent(text)}`);
        setQuery("");
        setIsSearchExpanded(false);
    };
    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const target = event.target;
            if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-toggle')) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchExpanded(false);
    }, [navigate]);
    return (_jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg", style: headerStyle, children: [_jsxs("div", { className: "container flex h-16 items-center px-4 sm:px-6", children: [_jsx(Logo, { customLogo: customLogo, customColor: effectiveTheme === null || effectiveTheme === void 0 ? void 0 : effectiveTheme.primaryColor }), _jsx("div", { className: "ml-6 flex-1 hidden lg:block", children: _jsx(MainNavigation, {}) }), _jsx("div", { className: "hidden md:block w-64 mx-4", children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: handleSearchSelect, searchSuggestions: searchSuggestions, placeholder: "Search talents, services, equipment..." }) }), _jsx("div", { className: "md:hidden ml-auto mr-2", children: _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsSearchExpanded(!isSearchExpanded), className: "text-zion-cyan hover:bg-zion-cyan/10", "aria-label": "Toggle search", children: _jsx(Search, { className: "w-5 h-5" }) }) }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "lg:hidden text-zion-cyan hover:bg-zion-cyan/10 mobile-menu-toggle", "aria-label": "Toggle mobile menu", "aria-expanded": isMobileMenuOpen, children: isMobileMenuOpen ? _jsx(X, { className: "w-5 h-5" }) : _jsx(Menu, { className: "w-5 h-5" }) }), _jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [user && (_jsxs(Button, { variant: "ghost", size: "sm", className: "text-zion-cyan hover:bg-zion-cyan/10 relative", "aria-label": "Notifications", children: [_jsx(Bell, { className: "w-5 h-5" }), _jsx("span", { className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" })] })), _jsx(LanguageSelector, {}), !hideLogin && _jsx(UserMenu, {})] })] }), _jsx(AnimatePresence, { children: isSearchExpanded && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, className: "md:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95", children: _jsx("div", { className: "container px-4 py-3", children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: handleSearchSelect, searchSuggestions: searchSuggestions, placeholder: "Search talents, services, equipment..." }) }) })) }), _jsx(AnimatePresence, { children: isMobileMenuOpen && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, className: "lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 mobile-menu", children: _jsxs("div", { className: "container px-4 py-4 space-y-4", children: [_jsxs("nav", { className: "space-y-2", children: [_jsx(Link, { to: "/marketplace", className: "block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors", onClick: () => setIsMobileMenuOpen(false), children: "Marketplace" }), _jsx(Link, { to: "/talent", className: "block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors", onClick: () => setIsMobileMenuOpen(false), children: "Find Talent" }), _jsx(Link, { to: "/services", className: "block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors", onClick: () => setIsMobileMenuOpen(false), children: "Services" }), _jsx(Link, { to: "/equipment", className: "block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors", onClick: () => setIsMobileMenuOpen(false), children: "Equipment" }), _jsx(Link, { to: "/community", className: "block px-3 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors", onClick: () => setIsMobileMenuOpen(false), children: "Community" })] }), _jsxs("div", { className: "pt-4 border-t border-zion-purple/20", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx(LanguageSelector, {}), user && (_jsxs(Button, { variant: "ghost", size: "sm", className: "text-zion-cyan hover:bg-zion-cyan/10", "aria-label": "Notifications", children: [_jsx(Bell, { className: "w-5 h-5" }), _jsx("span", { className: "ml-1 text-sm", children: "Notifications" })] }))] }), !hideLogin && _jsx(UserMenu, {})] })] }) })) })] }));
}
