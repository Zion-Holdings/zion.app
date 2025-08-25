import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Menu, X, Zap, Brain, Shield } from 'lucide-react';
export function EnhancedHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const isActive = (path) => {
        return location.pathname === path;
    };
    const navigationItems = [
        { path: '/', label: 'Home', icon: _jsx(Zap, { className: "h-4 w-4" }) },
        { path: '/enhanced-services', label: 'Services', icon: _jsx(Brain, { className: "h-4 w-4" }) },
        { path: '/about', label: 'About', icon: _jsx(Shield, { className: "h-4 w-4" }) },
        { path: '/contact', label: 'Contact', icon: _jsx(Mail, { className: "h-4 w-4" }) },
    ];
    return (_jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/30 shadow-lg shadow-zion-purple/20'
            : 'bg-transparent'}`, children: [_jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: _jsxs("div", { className: "absolute top-0 left-0 w-full h-full", children: [_jsx("div", { className: "absolute top-4 left-1/4 w-2 h-2 bg-zion-cyan rounded-full animate-pulse opacity-60" }), _jsx("div", { className: "absolute top-8 right-1/3 w-1 h-1 bg-zion-purple rounded-full animate-ping" }), _jsx("div", { className: "absolute top-12 left-1/2 w-1.5 h-1.5 bg-zion-cyan rounded-full animate-bounce" })] }) }), _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex items-center justify-between h-20", children: [_jsx(Link, { to: "/", className: "relative z-10", children: _jsxs("div", { className: "flex items-center gap-3 group", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: _jsx(Zap, { className: "h-6 w-6 text-white" }) }), _jsxs("div", { className: "hidden sm:block", children: [_jsx("div", { className: "text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300", children: "Zion Tech Group" }), _jsx("div", { className: "text-xs text-zion-slate-light", children: "Innovation at Your Fingertips" })] })] }) }), _jsx("nav", { className: "hidden lg:flex items-center space-x-8", children: navigationItems.map((item) => (_jsxs(Link, { to: item.path, className: `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group ${isActive(item.path)
                                        ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20'
                                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 border border-transparent hover:border-zion-purple/30'}`, children: [item.icon, _jsx("span", { className: "font-medium", children: item.label }), isActive(item.path) && (_jsx("div", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full" }))] }, item.path))) }), _jsxs("div", { className: "hidden lg:flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light text-sm", children: [_jsx(Phone, { className: "h-4 w-4 text-zion-cyan" }), _jsx("span", { children: "+1 302 464 0950" })] }), _jsx(Link, { to: "/contact", children: _jsxs(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2", children: [_jsx(Mail, { className: "h-4 w-4" }), "Get Quote"] }) })] }), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300", children: isMenuOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] }), isMenuOpen && (_jsx("div", { className: "lg:hidden border-t border-zion-purple/30 bg-zion-blue-dark/95 backdrop-blur-md", children: _jsxs("div", { className: "py-4 space-y-2", children: [navigationItems.map((item) => (_jsxs(Link, { to: item.path, onClick: () => setIsMenuOpen(false), className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive(item.path)
                                        ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30'
                                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'}`, children: [item.icon, _jsx("span", { className: "font-medium", children: item.label })] }, item.path))), _jsxs("div", { className: "px-4 py-4 border-t border-zion-purple/30 space-y-3", children: [_jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light text-sm", children: [_jsx(Phone, { className: "h-4 w-4 text-zion-cyan" }), _jsx("span", { children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light text-sm", children: [_jsx(Mail, { className: "h-4 w-4 text-zion-cyan" }), _jsx("span", { children: "kleber@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light text-sm", children: [_jsx(MapPin, { className: "h-4 w-4 text-zion-cyan" }), _jsx("span", { children: "364 E Main St STE 1008, Middletown DE 19709" })] }), _jsx(Link, { to: "/contact", onClick: () => setIsMenuOpen(false), children: _jsxs(Button, { className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2", children: [_jsx(Mail, { className: "h-4 w-4" }), "Contact Us"] }) })] })] }) }))] }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60" })] }));
}
