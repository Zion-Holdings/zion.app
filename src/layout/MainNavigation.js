import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }) {
    const { user } = useAuth();
    const isAuthenticated = !!user;
    const location = useLocation();
    const { t } = useTranslation();
    const baseLinks = [
        {
            key: 'home',
            href: '/',
            matches: (path) => path === '/'
        },
        {
            key: 'marketplace',
            href: '/marketplace',
            matches: (path) => path.startsWith('/marketplace')
        },
        {
            key: 'micro-saas',
            href: '/micro-saas-services',
            matches: (path) => path.startsWith('/micro-saas-services')
        },
        {
            key: 'categories',
            href: '/categories',
            matches: (path) => path.startsWith('/categories')
        },
        {
            key: 'talent',
            href: '/talent',
            matches: (path) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
        },
        {
            key: 'equipment',
            href: '/equipment',
            matches: (path) => path.startsWith('/equipment')
        },
        {
            key: 'community',
            href: '/community',
            matches: (path) => path.startsWith('/community') || path.startsWith('/forum')
        }
    ];
    let links = baseLinks.map(link => (Object.assign(Object.assign({}, link), { name: t(`nav.${link.key}`) })));
    // Add authenticated-only links
    if (isAuthenticated) {
        links.push({
            key: 'dashboard',
            name: t('nav.dashboard'),
            href: '/dashboard',
            matches: (path) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
        });
    }
    // Add admin-only links
    if (isAdmin) {
        links.push({
            key: 'analytics',
            name: t('nav.analytics'),
            href: '/analytics',
            matches: (path) => path.startsWith('/analytics')
        });
    }
    return (_jsx("nav", { className: cn("navbar ml-6 hidden md:flex", className), children: _jsxs("ul", { className: "flex items-center gap-1", children: [links.map((link) => (_jsx("li", { children: _jsxs(Link, { to: link.href, className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative group", link.matches(location.pathname)
                            ? "bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-cyan/20"
                            : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:shadow-lg hover:shadow-zion-cyan/10"), children: [link.name, link.matches(location.pathname) && (_jsx("div", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full" })), _jsx("div", { className: "absolute inset-0 rounded-md bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/5 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }) }, link.name))), isAuthenticated && (_jsx("li", { children: _jsxs(Link, { to: "/messages", className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative group", location.pathname === "/messages" || location.pathname === "/inbox"
                            ? "bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-cyan/20"
                            : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:shadow-lg hover:shadow-zion-cyan/10"), children: [_jsx(MessageSquare, { className: "w-4 h-4 mr-1" }), t('nav.messages'), unreadCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg shadow-zion-cyan/30", children: unreadCount })), _jsx("div", { className: "absolute inset-0 rounded-md bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/5 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }) }))] }) }));
}
