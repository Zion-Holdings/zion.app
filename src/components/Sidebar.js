import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { Home, ShoppingCart, Users, Settings, HelpCircle, FileText, Briefcase, Building, Globe, MessageSquare, BarChart3, Smartphone, Zap, BookOpen, Mail, Phone, MapPin, ChevronRight, ChevronDown } from 'lucide-react';
export function Sidebar({ isOpen = true, onClose, className }) {
    const { user } = useAuth();
    const isAuthenticated = !!user;
    const location = useLocation();
    const [expandedSections, setExpandedSections] = useState(['marketplace']);
    const toggleSection = (section) => {
        setExpandedSections(prev => prev.includes(section)
            ? prev.filter(s => s !== section)
            : [...prev, section]);
    };
    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);
    const navigationSections = [
        {
            id: 'main',
            title: 'Main',
            items: [
                { name: 'Home', href: '/', icon: Home },
                { name: 'About', href: '/about', icon: Building },
                { name: 'Contact', href: '/contact', icon: Mail },
                { name: 'Blog', href: '/blog', icon: BookOpen },
            ]
        },
        {
            id: 'marketplace',
            title: 'Marketplace',
            items: [
                { name: 'Products', href: '/marketplace', icon: ShoppingCart },
                { name: 'Services', href: '/services', icon: Briefcase },
                { name: 'Talent', href: '/talent', icon: Users },
                { name: 'Equipment', href: '/equipment', icon: Settings },
                { name: 'Categories', href: '/categories', icon: FileText },
                { name: 'Green IT', href: '/green-it', icon: Globe },
                { name: 'AI Matcher', href: '/ai-matcher', icon: Zap },
            ]
        },
        {
            id: 'community',
            title: 'Community',
            items: [
                { name: 'Forum', href: '/community', icon: MessageSquare },
                { name: 'Partners', href: '/partners', icon: Building },
                { name: 'Careers', href: '/careers', icon: Briefcase },
            ]
        },
        {
            id: 'support',
            title: 'Support',
            items: [
                { name: 'Help Center', href: '/help', icon: HelpCircle },
                { name: 'Support', href: '/support', icon: MessageSquare },
                { name: 'Request Quote', href: '/request-quote', icon: Mail },
            ]
        },
        {
            id: 'enterprise',
            title: 'Enterprise',
            items: [
                { name: 'Enterprise Plans', href: '/enterprise', icon: Building },
                { name: 'Developer Portal', href: '/developers', icon: Code },
                { name: 'Mobile App', href: '/mobile-launch', icon: Smartphone },
            ]
        }
    ];
    const authenticatedSections = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            items: [
                { name: 'Main Dashboard', href: '/dashboard', icon: BarChart3 },
                { name: 'Projects', href: '/projects', icon: Briefcase },
                { name: 'Messages', href: '/messages', icon: MessageSquare },
                { name: 'Account Settings', href: '/settings/account', icon: Settings },
            ]
        }
    ];
    return (_jsx("div", { className: cn("bg-zion-blue-dark border-r border-zion-blue-light h-full overflow-y-auto transition-all duration-300", isOpen ? "w-64" : "w-16", className), children: _jsxs("div", { className: "p-4", children: [_jsx("div", { className: "mb-6", children: _jsx(Link, { to: "/", className: "flex items-center space-x-2", children: _jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", children: isOpen ? 'ZION' : 'Z' }) }) }), _jsxs("nav", { className: "space-y-4", children: [navigationSections.map((section) => (_jsxs("div", { children: [_jsxs("button", { onClick: () => toggleSection(section.id), className: "flex items-center justify-between w-full text-left text-zion-slate-light hover:text-white transition-colors mb-2", children: [_jsx("span", { className: "text-sm font-medium uppercase tracking-wide", children: isOpen ? section.title : '' }), isOpen && (expandedSections.includes(section.id) ?
                                            _jsx(ChevronDown, { className: "h-4 w-4" }) :
                                            _jsx(ChevronRight, { className: "h-4 w-4" }))] }), expandedSections.includes(section.id) && (_jsx("ul", { className: "space-y-1", children: section.items.map((item) => {
                                        const Icon = item.icon;
                                        return (_jsx("li", { children: _jsxs(Link, { to: item.href, className: cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors", isActive(item.href)
                                                    ? "bg-zion-purple/20 text-zion-cyan"
                                                    : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"), children: [_jsx(Icon, { className: "h-4 w-4 flex-shrink-0" }), isOpen && _jsx("span", { children: item.name })] }) }, item.name));
                                    }) }))] }, section.id))), isAuthenticated && authenticatedSections.map((section) => (_jsxs("div", { children: [_jsxs("button", { onClick: () => toggleSection(section.id), className: "flex items-center justify-between w-full text-left text-zion-slate-light hover:text-white transition-colors mb-2", children: [_jsx("span", { className: "text-sm font-medium uppercase tracking-wide", children: isOpen ? section.title : '' }), isOpen && (expandedSections.includes(section.id) ?
                                            _jsx(ChevronDown, { className: "h-4 w-4" }) :
                                            _jsx(ChevronRight, { className: "h-4 w-4" }))] }), expandedSections.includes(section.id) && (_jsx("ul", { className: "space-y-1", children: section.items.map((item) => {
                                        const Icon = item.icon;
                                        return (_jsx("li", { children: _jsxs(Link, { to: item.href, className: cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors", isActive(item.href)
                                                    ? "bg-zion-purple/20 text-zion-cyan"
                                                    : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"), children: [_jsx(Icon, { className: "h-4 w-4 flex-shrink-0" }), isOpen && _jsx("span", { children: item.name })] }) }, item.name));
                                    }) }))] }, section.id)))] }), isOpen && (_jsxs("div", { className: "mt-8 pt-6 border-t border-zion-blue-light", children: [_jsx("h4", { className: "text-white font-medium mb-3", children: "Contact Info" }), _jsxs("div", { className: "space-y-2 text-zion-slate-light text-xs", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Mail, { className: "h-3 w-3" }), _jsx("span", { children: "contact@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Phone, { className: "h-3 w-3" }), _jsx("span", { children: "+1 (555) 123-4567" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(MapPin, { className: "h-3 w-3" }), _jsx("span", { children: "San Francisco, CA" })] })] })] }))] }) }));
}
// Add missing Code icon component
const Code = ({ className }) => (_jsx("svg", { className: className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }) }));
