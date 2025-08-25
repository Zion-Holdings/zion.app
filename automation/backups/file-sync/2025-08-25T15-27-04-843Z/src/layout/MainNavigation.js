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
            key: 'services',
            href: '/services',
            matches: (path) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
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
        },
        {
            key: 'about',
            href: '/about',
            matches: (path) => path === '/about'
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
    return (_jsx("nav", { className: cn("navbar ml-6 hidden md:flex", className), children: _jsxs("ul", { className: "flex items-center gap-1", children: [links.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.href, className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors", link.matches(location.pathname)
                            ? "bg-zion-purple/20 text-zion-cyan"
                            : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"), children: link.name }) }, link.name))), isAuthenticated && (_jsx("li", { children: _jsxs(Link, { to: "/messages", className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative", location.pathname === "/messages" || location.pathname === "/inbox"
                            ? "bg-zion-purple/20 text-zion-cyan"
                            : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"), children: [_jsx(MessageSquare, { className: "w-4 h-4 mr-1" }), t('nav.messages'), unreadCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center", children: unreadCount }))] }) }))] }) }));
}
