import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/Button';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const isActive = (path) => location.pathname === path;
    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services', hasDropdown: true },
        { name: 'Talent', path: '/talent', hasDropdown: true },
        { name: 'Equipment', path: '/equipment' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
    ];
    const serviceDropdownItems = [
        { name: 'IT Solutions', path: '/services/it-solutions' },
        { name: 'AI Services', path: '/services/ai-services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Green IT', path: '/green-it' },
        { name: 'On-Site Support', path: '/it-onsite-services' },
    ];
    const talentDropdownItems = [
        { name: 'Browse Talents', path: '/talents' },
        { name: 'Talent Directory', path: '/talent-directory' },
        { name: 'AI Matcher', path: '/ai-matcher' },
        { name: 'Hire Now', path: '/hire-now' },
    ];
    return (_jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-transparent'}`, children: [_jsx("div", { className: "bg-zion-blue text-white text-sm py-2", children: _jsxs("div", { className: "container mx-auto px-4 flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center space-x-6", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Phone, { className: "h-4 w-4" }), _jsx("span", { children: "+1 (555) 123-4567" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Mail, { className: "h-4 w-4" }), _jsx("span", { children: "info@ziontechgroup.com" })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(LanguageSelector, {}), _jsx(UserMenu, {})] })] }) }), _jsx("div", { className: "bg-white border-b border-gray-200", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex items-center justify-between h-20", children: [_jsx(Logo, {}), _jsx("nav", { className: "hidden lg:flex items-center space-x-8", children: navigationItems.map((item) => (_jsx("div", { className: "relative group", children: item.hasDropdown ? (_jsxs("div", { className: "relative", children: [_jsxs("button", { className: `flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${isActive(item.path)
                                                    ? 'text-zion-blue bg-zion-blue/10'
                                                    : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'}`, children: [_jsx("span", { children: item.name }), _jsx("svg", { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), _jsx("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0", children: _jsxs("div", { className: "py-2", children: [item.name === 'Services' && serviceDropdownItems.map((subItem) => (_jsx(Link, { to: subItem.path, className: "block px-4 py-3 text-gray-700 hover:text-zion-blue hover:bg-zion-blue/5 transition-colors", children: subItem.name }, subItem.name))), item.name === 'Talent' && talentDropdownItems.map((subItem) => (_jsx(Link, { to: subItem.path, className: "block px-4 py-3 text-gray-700 hover:text-zion-blue hover:bg-zion-blue/5 transition-colors", children: subItem.name }, subItem.name)))] }) })] })) : (_jsx(Link, { to: item.path, className: `py-2 px-3 rounded-lg transition-colors ${isActive(item.path)
                                            ? 'text-zion-blue bg-zion-blue/10'
                                            : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'}`, children: item.name })) }, item.name))) }), _jsxs("div", { className: "hidden lg:flex items-center space-x-4", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Search, { className: "h-4 w-4 mr-2" }), "Search"] }), _jsx(Button, { size: "sm", children: "Get Started" })] }), _jsx("button", { className: "lg:hidden p-2 rounded-lg text-gray-700 hover:text-zion-blue hover:bg-gray-50", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] }) }) }), isMenuOpen && (_jsx("div", { className: "lg:hidden bg-white border-t border-gray-200 shadow-lg", children: _jsxs("div", { className: "container mx-auto px-4 py-4", children: [_jsx("nav", { className: "space-y-2", children: navigationItems.map((item) => (_jsxs("div", { children: [_jsx(Link, { to: item.path, className: `block py-3 px-4 rounded-lg transition-colors ${isActive(item.path)
                                            ? 'text-zion-blue bg-zion-blue/10'
                                            : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'}`, onClick: () => setIsMenuOpen(false), children: item.name }), item.hasDropdown && item.name === 'Services' && (_jsx("div", { className: "ml-4 mt-2 space-y-1", children: serviceDropdownItems.map((subItem) => (_jsxs(Link, { to: subItem.path, className: "block py-2 px-4 text-gray-600 hover:text-zion-blue transition-colors", onClick: () => setIsMenuOpen(false), children: ["\u2022 ", subItem.name] }, subItem.name))) })), item.hasDropdown && item.name === 'Talent' && (_jsx("div", { className: "ml-4 mt-2 space-y-1", children: talentDropdownItems.map((subItem) => (_jsxs(Link, { to: subItem.path, className: "block py-2 px-4 text-gray-600 hover:text-zion-blue transition-colors", onClick: () => setIsMenuOpen(false), children: ["\u2022 ", subItem.name] }, subItem.name))) }))] }, item.name))) }), _jsxs("div", { className: "mt-6 pt-6 border-t border-gray-200 space-y-3", children: [_jsxs(Button, { variant: "outline", className: "w-full", children: [_jsx(Search, { className: "h-4 w-4 mr-2" }), "Search"] }), _jsx(Button, { className: "w-full", children: "Get Started" })] })] }) }))] }));
}
