import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();
    const navigationItems = [
        {
            title: "Main",
            items: [
                { path: '/', label: 'Dashboard', icon: '🏠', badge: null },
                { path: '/services', label: 'Services', icon: '⚡', badge: 'New' },
                { path: '/comprehensive-services', label: 'All Services', icon: '🚀', badge: null },
                { path: '/services-comparison', label: 'Compare', icon: '📊', badge: null },
                { path: '/it-onsite-services', label: 'Onsite IT', icon: '🔧', badge: 'Hot' }
            ]
        },
        {
            title: "AI & Tech",
            items: [
                { path: '/comprehensive-services?category=AI Services', label: 'AI Services', icon: '🤖', badge: null },
                { path: '/comprehensive-services?category=Micro SAAS', label: 'Micro SAAS', icon: '💻', badge: null },
                { path: '/comprehensive-services?category=Blockchain & Web3', label: 'Blockchain', icon: '⛓️', badge: null },
                { path: '/comprehensive-services?category=IoT & Edge Computing', label: 'IoT & Edge', icon: '🌐', badge: null },
                { path: '/comprehensive-services?category=Emerging Technologies', label: 'Emerging Tech', icon: '🔮', badge: 'Trending' }
            ]
        },
        {
            title: "Business",
            items: [
                { path: '/comprehensive-services?category=IT Services', label: 'IT Services', icon: '🖥️', badge: null },
                { path: '/comprehensive-services?category=Cybersecurity Services', label: 'Cybersecurity', icon: '🔒', badge: null },
                { path: '/comprehensive-services?category=Data Science & Analytics', label: 'Data Science', icon: '📈', badge: null }
            ]
        },
        {
            title: "Support",
            items: [
                { path: '/', label: 'Documentation', icon: '📚', badge: null },
                { path: '/', label: 'Help Center', icon: '❓', badge: null },
                { path: '/', label: 'Contact Support', icon: '💬', badge: null }
            ]
        }
    ];
    const isActive = (path) => {
        if (path.includes('?')) {
            const basePath = path.split('?')[0];
            return location.pathname === basePath;
        }
        return location.pathname === path;
    };
    return (_jsxs("aside", { className: `fixed left-0 top-0 h-full z-40 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'} bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20`, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-blue-500/5 to-purple-500/5" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" }), _jsxs("div", { className: "relative z-10 h-full flex flex-col", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b border-cyan-500/30", children: [!isCollapsed && (_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/50", children: "Z" }), _jsx("span", { className: "text-white font-semibold text-sm", children: "Zion Tech" })] })), _jsx("button", { onClick: () => setIsCollapsed(!isCollapsed), className: "p-2 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-200", children: _jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isCollapsed ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 5l7 7-7 7M5 5l7 7-7 7" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 19l-7-7 7-7m8 14l-7-7 7-7" })) }) })] }), _jsx("nav", { className: "flex-1 overflow-y-auto py-4 px-2", children: navigationItems.map((section) => (_jsxs("div", { className: "mb-6", children: [!isCollapsed && (_jsx("h3", { className: "px-3 mb-3 text-xs font-semibold text-cyan-400 uppercase tracking-wider", children: section.title })), _jsx("ul", { className: "space-y-1", children: section.items.map((item) => (_jsx("li", { children: _jsxs(Link, { to: item.path, className: `group flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${isActive(item.path)
                                                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/50 shadow-lg shadow-cyan-500/30'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10'}`, children: [_jsx("span", { className: "text-lg min-w-[20px]", children: item.icon }), !isCollapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "ml-3 flex-1", children: item.label }), item.badge && (_jsx("span", { className: `px-2 py-1 text-xs rounded-full font-medium ${item.badge === 'New'
                                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                                : item.badge === 'Hot'
                                                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`, children: item.badge }))] })), isActive(item.path) && (_jsx("div", { className: "absolute right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" }))] }) }, item.path))) })] }, section.title))) }), _jsx("div", { className: "p-4 border-t border-cyan-500/30", children: !isCollapsed ? (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-10 h-10 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-cyan-400 text-lg", children: "\uD83D\uDCA1" }) }), _jsx("p", { className: "text-xs text-gray-400 mt-2", children: "Need Help?" })] }), _jsx("button", { className: "w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300", children: "Contact Support" })] })) : (_jsx("div", { className: "text-center", children: _jsx("button", { className: "w-8 h-8 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-300", children: "\uD83D\uDCAC" }) })) })] }), _jsx("div", { className: "absolute top-1/3 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping" }), _jsx("div", { className: "absolute bottom-1/3 right-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" })] }));
}
