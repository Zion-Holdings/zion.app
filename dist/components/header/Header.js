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
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Zap, Settings, Users, Code, Shield, Cloud } from "lucide-react";
export function Header({ hideLogin = false, customLogo, customTheme }) {
    const { user } = useAuth();
    const { isWhitelabel, primaryColor } = useWhitelabel();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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
        }
    };
    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
    }, [navigate]);
    const servicesMenuItems = [
        {
            title: "AI Services",
            description: "Cutting-edge AI solutions",
            icon: _jsx(Zap, { className: "h-5 w-5" }),
            href: "/micro-saas-services?category=AI Services",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "IT Services",
            description: "Professional IT solutions",
            icon: _jsx(Settings, { className: "h-5 w-5" }),
            href: "/micro-saas-services?category=IT Services",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Micro SAAS",
            description: "Scalable software solutions",
            icon: _jsx(Users, { className: "h-5 w-5" }),
            href: "/micro-saas-services?category=Micro SAAS",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Development",
            description: "Custom development services",
            icon: _jsx(Code, { className: "h-5 w-5" }),
            href: "/micro-saas-services?category=Development",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Security",
            description: "Cybersecurity solutions",
            icon: _jsx(Shield, { className: "h-5 w-5" }),
            href: "/micro-saas-services?category=Security",
            color: "from-red-500 to-pink-500"
        },
        {
            title: "Cloud & Analytics",
            description: "Cloud and data solutions",
            icon: _jsx(Cloud, { className: "h-5 w-5" }),
            href: "/micro-saas-services?category=Cloud",
            color: "from-indigo-500 to-purple-500"
        }
    ];
    return (_jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10", style: headerStyle, children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/5 via-zion-blue/5 to-zion-cyan/5" }), _jsx("div", { className: "absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-zion-cyan/20 to-transparent animate-pulse" }), _jsx("div", { className: "absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-zion-purple/20 to-transparent animate-pulse delay-1000" })] }), _jsxs("div", { className: "relative container flex h-16 items-center px-4 sm:px-6", children: [_jsx(Logo, { customLogo: customLogo, customColor: effectiveTheme?.primaryColor }), _jsxs("div", { className: "ml-6 flex-1 hidden lg:block", children: [_jsx(MainNavigation, {}), _jsxs("div", { className: "relative inline-block ml-4", children: [_jsxs(Button, { variant: "ghost", className: "text-white hover:bg-zion-purple/20 hover:text-zion-cyan transition-all duration-300", onMouseEnter: () => setIsServicesDropdownOpen(true), onMouseLeave: () => setIsServicesDropdownOpen(false), children: ["Services", _jsx(ChevronDown, { className: `ml-1 h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}` })] }), isServicesDropdownOpen && (_jsxs("div", { className: "absolute top-full left-0 mt-2 w-96 bg-zion-slate/95 backdrop-blur-xl border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 p-4", onMouseEnter: () => setIsServicesDropdownOpen(true), onMouseLeave: () => setIsServicesDropdownOpen(false), children: [_jsx("div", { className: "grid grid-cols-2 gap-3", children: servicesMenuItems.map((item, index) => (_jsx(Link, { to: item.href, className: "group p-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-zion-cyan/30", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`, children: item.icon }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-white group-hover:text-zion-cyan transition-colors", children: item.title }), _jsx("p", { className: "text-xs text-white/60", children: item.description })] })] }) }, index))) }), _jsx("div", { className: "mt-4 pt-4 border-t border-zion-purple/30", children: _jsx(Link, { to: "/micro-saas-services", className: "block text-center py-2 px-4 bg-gradient-to-r from-zion-purple to-zion-blue text-white rounded-lg hover:from-zion-purple-light hover:to-zion-blue-light transition-all duration-300", children: "View All Services" }) })] }))] })] }), _jsx("form", { onSubmit: handleSubmit, className: "hidden md:block w-64 mx-4", children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: (text) => {
                                navigate(`/search?q=${encodeURIComponent(text)}`);
                                setQuery("");
                            }, searchSuggestions: searchSuggestions }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(LanguageSelector, {}), !hideLogin && _jsx(UserMenu, {}), _jsx(Button, { variant: "ghost", size: "sm", className: "lg:hidden text-white hover:bg-zion-purple/20 hover:text-zion-cyan", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), children: isMobileMenuOpen ? _jsx(X, { className: "h-5 w-5" }) : _jsx(Menu, { className: "h-5 w-5" }) })] })] }), isMobileMenuOpen && (_jsx("div", { className: "lg:hidden bg-zion-slate/95 backdrop-blur-xl border-t border-zion-purple/30", children: _jsx("div", { className: "container mx-auto px-4 py-4", children: _jsxs("div", { className: "space-y-4", children: [_jsx("form", { onSubmit: handleSubmit, children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: (text) => {
                                        navigate(`/search?q=${encodeURIComponent(text)}`);
                                        setQuery("");
                                    }, searchSuggestions: searchSuggestions }) }), _jsxs("nav", { className: "space-y-2", children: [_jsx(Link, { to: "/", className: "block py-2 px-4 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors", children: "Home" }), _jsx(Link, { to: "/marketplace", className: "block py-2 px-4 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors", children: "Marketplace" }), _jsx(Link, { to: "/talent", className: "block py-2 px-4 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors", children: "Talent" }), _jsx(Link, { to: "/equipment", className: "block py-2 px-4 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors", children: "Equipment" }), _jsx(Link, { to: "/community", className: "block py-2 px-4 text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors", children: "Community" }), _jsxs("div", { className: "pt-2", children: [_jsx("h4", { className: "px-4 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wide", children: "Services" }), _jsxs("div", { className: "space-y-1", children: [servicesMenuItems.map((item, index) => (_jsx(Link, { to: item.href, className: "block py-2 px-6 text-white/80 hover:bg-zion-purple/20 hover:text-zion-cyan rounded-lg transition-colors", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `p-1.5 rounded-lg bg-gradient-to-r ${item.color} text-white`, children: item.icon }), _jsx("span", { children: item.title })] }) }, index))), _jsx(Link, { to: "/micro-saas-services", className: "block py-2 px-6 text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-colors font-medium", children: "View All Services \u2192" })] })] })] })] }) }) }))] }));
}
