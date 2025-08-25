import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navigationItems = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/services', label: 'Services', icon: '⚡' },
        { path: '/comprehensive-services', label: 'All Services', icon: '🚀' },
        { path: '/services-comparison', label: 'Compare', icon: '📊' },
        { path: '/it-onsite-services', label: 'Onsite IT', icon: '🔧' }
    ];
    const isActive = (path) => location.pathname === path;
    return (_jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20'
            : 'bg-gradient-to-r from-black/80 via-blue-900/80 to-purple-900/80 backdrop-blur-md'}`, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" }), _jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [...Array(15)].map((_, i) => (_jsx("div", { className: "absolute text-cyan-400 text-xs animate-matrix-rain opacity-30", style: {
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 20}s`,
                        animationDuration: `${20 + Math.random() * 10}s`
                    }, children: Math.random() > 0.5 ? '1' : '0' }, i))) }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center justify-between h-16 lg:h-20", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-3 group", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300 group-hover:scale-110", children: "Z" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300" })] }), _jsxs("div", { className: "hidden sm:block", children: [_jsx("h1", { className: "text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Zion Tech Group" }), _jsx("p", { className: "text-xs text-gray-400 -mt-1", children: "The Tech & AI Marketplace" })] })] }), _jsx("nav", { className: "hidden lg:flex items-center space-x-1", children: navigationItems.map((item) => (_jsxs(Link, { to: item.path, className: `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${isActive(item.path)
                                        ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'}`, children: [_jsxs("span", { className: "flex items-center space-x-2", children: [_jsx("span", { className: "text-sm", children: item.icon }), _jsx("span", { children: item.label })] }), _jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive(item.path) ? 'opacity-100' : ''}` }), isActive(item.path) && (_jsx("div", { className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" }))] }, item.path))) }), _jsxs("div", { className: "hidden lg:flex items-center space-x-4", children: [_jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-sm text-cyan-400 font-medium", children: "+1 302 464 0950" }), _jsx("p", { className: "text-xs text-gray-400", children: "kleber@ziontechgroup.com" })] }), _jsx("button", { className: "px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transform hover:scale-105", children: "Get Quote" })] }), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMenuOpen ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })) }) })] }), isMenuOpen && (_jsx("div", { className: "lg:hidden", children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-xl rounded-lg border border-cyan-500/30 shadow-xl shadow-cyan-500/20", children: [navigationItems.map((item) => (_jsx(Link, { to: item.path, onClick: () => setIsMenuOpen(false), className: `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path)
                                        ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'}`, children: _jsxs("span", { className: "flex items-center space-x-3", children: [_jsx("span", { className: "text-lg", children: item.icon }), _jsx("span", { children: item.label })] }) }, item.path))), _jsxs("div", { className: "pt-4 border-t border-cyan-500/30", children: [_jsxs("div", { className: "px-3 py-2", children: [_jsx("p", { className: "text-sm text-cyan-400 font-medium", children: "+1 302 464 0950" }), _jsx("p", { className: "text-xs text-gray-400", children: "kleber@ziontechgroup.com" })] }), _jsx("button", { className: "w-full mt-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300", children: "Get Quote" })] })] }) }))] })] }));
}
