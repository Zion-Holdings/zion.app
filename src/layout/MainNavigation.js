import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Sparkles, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }) {
    const { user } = useAuth();
    const isAuthenticated = !!user;
    const location = useLocation();
    const { t } = useTranslation();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const baseLinks = [
        {
            key: 'home',
            href: '/',
            matches: (path) => path === '/'
        },
        {
            key: 'micro-saas',
            href: '/micro-saas-services',
            matches: (path) => path.startsWith('/micro-saas-services'),
            hasDropdown: true,
            dropdownItems: [
                { label: 'AI Services', href: '/micro-saas-services?category=AI' },
                { label: 'IT Solutions', href: '/micro-saas-services?category=IT' },
                { label: 'Development', href: '/micro-saas-services?category=Development' },
                { label: 'Analytics & BI', href: '/micro-saas-services?category=Analytics' },
                { label: 'Security', href: '/micro-saas-services?category=Security' },
                { label: 'Automation', href: '/micro-saas-services?category=Automation' },
                { label: 'Integration', href: '/micro-saas-services?category=Integration' },
                { label: 'Consulting', href: '/micro-saas-services?category=Consulting' }
            ]
        },
        {
            key: 'marketplace',
            href: '/marketplace',
            matches: (path) => path.startsWith('/marketplace')
        },
        {
            key: 'talent',
            href: '/talent',
            matches: (path) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
        },
        {
            key: 'services',
            href: '/services',
            matches: (path) => path.startsWith('/services')
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
    // Handle dropdown toggle
    const toggleDropdown = (key) => {
        setActiveDropdown(activeDropdown === key ? null : key);
    };
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (_jsx("nav", { className: cn("navbar ml-6 hidden lg:flex", className), ref: dropdownRef, children: _jsxs("ul", { className: "flex items-center gap-1", children: [links.map((link) => {
                    var _a;
                    return (_jsx("li", { className: "relative", children: link.hasDropdown ? (_jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: () => toggleDropdown(link.key), className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors", link.matches(location.pathname)
                                        ? "bg-zion-purple/20 text-zion-cyan"
                                        : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"), children: [link.name === 'Micro SAAS' ? (_jsxs(_Fragment, { children: [_jsx(Sparkles, { className: "w-4 h-4 mr-2 text-zion-cyan" }), "Micro SAAS"] })) : (link.name), _jsx(ChevronDown, { className: cn("w-4 h-4 ml-1 transition-transform duration-200", activeDropdown === link.key ? "rotate-180" : "") })] }), activeDropdown === link.key && (_jsx("div", { className: "absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 backdrop-blur-md z-50", children: _jsx("div", { className: "p-2", children: (_a = link.dropdownItems) === null || _a === void 0 ? void 0 : _a.map((item, index) => (_jsx(Link, { to: item.href, className: "block px-4 py-3 text-sm text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-md transition-colors", onClick: () => setActiveDropdown(null), children: item.label }, index))) }) }))] })) : (_jsx(Link, { to: link.href, className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors", link.matches(location.pathname)
                                ? "bg-zion-purple/20 text-zion-cyan"
                                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"), children: link.name })) }, link.name));
                }), isAuthenticated && (_jsx("li", { children: _jsxs(Link, { to: "/messages", className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative", location.pathname === "/messages" || location.pathname === "/inbox"
                            ? "bg-zion-purple/20 text-zion-cyan"
                            : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"), children: [_jsx(MessageSquare, { className: "w-4 h-4 mr-1" }), t('nav.messages'), unreadCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse", children: unreadCount }))] }) }))] }) }));
}
