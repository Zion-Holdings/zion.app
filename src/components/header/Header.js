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
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X } from 'lucide-react';
export function Header({ hideLogin = false, customLogo, customTheme }) {
    const { user } = useAuth();
    const { isWhitelabel, primaryColor } = useWhitelabel();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery("");
        }
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (_jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg shadow-zion-purple/10", style: headerStyle, children: [_jsxs("div", { className: "container flex h-16 items-center px-4 sm:px-6", children: [_jsx(Logo, { customLogo: customLogo, customColor: effectiveTheme === null || effectiveTheme === void 0 ? void 0 : effectiveTheme.primaryColor }), _jsx("div", { className: "ml-6 flex-1 hidden lg:block", children: _jsx(MainNavigation, {}) }), _jsx("form", { onSubmit: handleSubmit, className: "hidden md:block w-64 mx-4", children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: (text) => {
                                navigate(`/search?q=${encodeURIComponent(text)}`);
                                setQuery("");
                            }, searchSuggestions: searchSuggestions }) }), _jsxs("div", { className: "flex items-center gap-3 hidden md:flex", children: [_jsx(LanguageSelector, {}), !hideLogin && _jsx(UserMenu, {})] }), _jsx(Button, { variant: "ghost", size: "sm", className: "lg:hidden ml-auto p-2 text-white hover:bg-zion-purple/20", onClick: toggleMobileMenu, children: isMobileMenuOpen ? (_jsx(X, { className: "h-6 w-6" })) : (_jsx(Menu, { className: "h-6 w-6" })) })] }), isMobileMenuOpen && (_jsx("div", { className: "lg:hidden bg-zion-slate-dark border-t border-zion-blue-light", children: _jsxs("div", { className: "container px-4 py-4", children: [_jsx("form", { onSubmit: handleSubmit, className: "mb-4", children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: (text) => {
                                    navigate(`/search?q=${encodeURIComponent(text)}`);
                                    setQuery("");
                                    closeMobileMenu();
                                }, searchSuggestions: searchSuggestions }) }), _jsxs("nav", { className: "space-y-2", children: [_jsx(Link, { to: "/", className: "block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors", onClick: closeMobileMenu, children: "Home" }), _jsx(Link, { to: "/marketplace", className: "block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors", onClick: closeMobileMenu, children: "Marketplace" }), _jsx(Link, { to: "/micro-saas-services", className: "block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors", onClick: closeMobileMenu, children: "Micro SAAS Services" }), _jsx(Link, { to: "/talent", className: "block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors", onClick: closeMobileMenu, children: "Talent" }), _jsx(Link, { to: "/services", className: "block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors", onClick: closeMobileMenu, children: "Services" }), _jsx(Link, { to: "/community", className: "block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors", onClick: closeMobileMenu, children: "Community" }), user && (_jsx(Link, { to: "/dashboard", className: "block px-4 py-2 text-white hover:bg-zion-purple/20 rounded-md transition-colors", onClick: closeMobileMenu, children: "Dashboard" }))] }), _jsxs("div", { className: "mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between", children: [_jsx(LanguageSelector, {}), !hideLogin && _jsx(UserMenu, {})] })] }) })), _jsxs("div", { className: "hidden lg:block border-t border-zion-blue-light/30", children: [_jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "flex items-center justify-center space-x-8 py-2", children: megaMenuItems.map((section) => (_jsxs("div", { className: "relative group", children: [_jsxs("button", { className: "flex items-center gap-2 px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors font-medium", onClick: () => handleDropdownToggle(section.title), children: [section.icon, section.title, _jsx(ChevronDown, { className: `h-4 w-4 transition-transform ${activeDropdown === section.title ? 'rotate-180' : ''}` })] }), activeDropdown === section.title && (_jsxs("div", { className: "absolute top-full left-0 w-80 bg-zion-slate-dark border border-zion-blue-light rounded-lg shadow-2xl shadow-zion-cyan/20 p-6 z-50", children: [_jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: section.title }), _jsx("p", { className: "text-sm text-zion-slate-light", children: section.description })] }), _jsx("div", { className: "grid grid-cols-1 gap-3", children: section.items.map((item) => (_jsxs(Link, { to: item.href, className: "block p-3 rounded-md hover:bg-zion-blue-dark/30 transition-colors group/item", onClick: () => setActiveDropdown(null), children: [_jsx("div", { className: "font-medium text-white group-hover/item:text-zion-cyan transition-colors", children: item.name }), _jsx("div", { className: "text-sm text-zion-slate-light", children: item.description })] }, item.name))) })] }))] }, section.title))) }) }), _jsx("button", { onClick: toggleMobileMenu, className: "lg:hidden p-2 text-white hover:bg-zion-purple/10 rounded-md transition-colors", children: isMobileMenuOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), isMobileMenuOpen && (_jsx("div", { className: "lg:hidden bg-zion-blue-dark/98 border-t border-zion-purple/20 backdrop-blur-md", children: _jsxs("div", { className: "container px-4 py-6 space-y-4", children: [_jsx("form", { onSubmit: handleSubmit, className: "w-full", children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: (text) => {
                                    navigate(`/search?q=${encodeURIComponent(text)}`);
                                    setQuery("");
                                    setIsMobileMenuOpen(false);
                                }, searchSuggestions: searchSuggestions }) }), _jsxs("nav", { className: "space-y-2", children: [_jsx(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: "Home" }), _jsx(Link, { to: "/micro-saas-services", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Sparkles, { className: "w-4 h-4 mr-2 text-zion-cyan" }), "Micro SAAS Services"] }) }), _jsx(Link, { to: "/marketplace", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: "Marketplace" }), _jsx(Link, { to: "/talent", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: "Talent" }), _jsx(Link, { to: "/services", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: "Services" }), _jsx(Link, { to: "/equipment", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: "Equipment" }), _jsx(Link, { to: "/community", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: "Community" }), user && (_jsx(Link, { to: "/dashboard", onClick: () => setIsMobileMenuOpen(false), className: "block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors", children: "Dashboard" }))] }), _jsx("div", { className: "pt-4 border-t border-zion-purple/20", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(LanguageSelector, {}), !hideLogin && _jsx(UserMenu, {})] }) })] }) }))] }));
}
