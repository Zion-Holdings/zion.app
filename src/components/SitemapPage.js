import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { completeSitemap, dynamicPaths } from '@/config/sitemap';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO';
// Map sitemap paths to their actual routes in the application
const pathMap = {
    '/about': '/content/about',
    '/blog': '/blog',
    '/careers': '/content/careers',
    '/green-it': '/content/green-it',
    '/sitemap-page': '/content/sitemap-page',
    '/talent-onboarding': '/auth/talent-onboarding',
    '/forgot-password': '/auth/forgot-password',
    '/signup/talent': '/auth/signup/talent',
    '/signup/client': '/auth/signup/client',
    '/talent-dashboard': '/dashboard/talent-dashboard',
    '/client-dashboard': '/dashboard/client-dashboard',
    '/hiring-tracker': '/dashboard/hiring-tracker',
    '/messages': '/dashboard/messages',
    '/notifications': '/dashboard/notifications',
    '/project/:projectId/room': '/dashboard/project/:projectId/room',
    '/post-job': '/marketplace/post-job',
};
const resolvePath = (path) => { var _a; return (_a = pathMap[path]) !== null && _a !== void 0 ? _a : path; };
export const SitemapPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Sitemap | Zion AI Marketplace", description: "Complete sitemap of the Zion AI Marketplace", keywords: "sitemap, zion, ai marketplace, navigation", canonical: "https://ziontechgroup.com/content/sitemap-page" }), _jsxs("div", { className: "container mx-auto px-4 py-12", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Sitemap" }), _jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "bg-zion-blue-dark p-6 rounded-lg", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-zion-cyan", children: "Public Pages" }), _jsx("ul", { className: "space-y-2", children: completeSitemap
                                            .filter(route => !route.requiredAuth)
                                            .map(route => (_jsx("li", { children: _jsxs(Link, { to: resolvePath(route.path), className: "flex items-center hover:text-zion-purple", children: [_jsx(ChevronRight, { className: "h-4 w-4 mr-2" }), route.label] }) }, route.path))) })] }), _jsxs("div", { className: "bg-zion-blue-dark p-6 rounded-lg", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-zion-cyan", children: "Talent Pages" }), _jsx("p", { className: "text-sm text-zion-slate mb-4", children: "Requires talent or creator account" }), _jsx("ul", { className: "space-y-2", children: completeSitemap
                                            .filter(route => {
                                            var _a, _b;
                                            return ((_a = route.requiredRoles) === null || _a === void 0 ? void 0 : _a.includes('jobSeeker')) ||
                                                ((_b = route.requiredRoles) === null || _b === void 0 ? void 0 : _b.includes('creator'));
                                        })
                                            .map(route => (_jsx("li", { children: _jsxs(Link, { to: resolvePath(route.path), className: "flex items-center hover:text-zion-purple", children: [_jsx(ChevronRight, { className: "h-4 w-4 mr-2" }), route.label] }) }, route.path))) })] }), _jsxs("div", { className: "bg-zion-blue-dark p-6 rounded-lg", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-zion-cyan", children: "Client Pages" }), _jsx("p", { className: "text-sm text-zion-slate mb-4", children: "Requires employer or buyer account" }), _jsx("ul", { className: "space-y-2", children: completeSitemap
                                            .filter(route => {
                                            var _a, _b;
                                            return ((_a = route.requiredRoles) === null || _a === void 0 ? void 0 : _a.includes('employer')) ||
                                                ((_b = route.requiredRoles) === null || _b === void 0 ? void 0 : _b.includes('buyer'));
                                        })
                                            .map(route => (_jsx("li", { children: _jsxs(Link, { to: resolvePath(route.path), className: "flex items-center hover:text-zion-purple", children: [_jsx(ChevronRight, { className: "h-4 w-4 mr-2" }), route.label] }) }, route.path))) })] }), _jsxs("div", { className: "bg-zion-blue-dark p-6 rounded-lg", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-zion-cyan", children: "Authenticated User Pages" }), _jsx("p", { className: "text-sm text-zion-slate mb-4", children: "Requires any account type" }), _jsx("ul", { className: "space-y-2", children: completeSitemap
                                            .filter(route => route.requiredAuth &&
                                            (!route.requiredRoles || route.requiredRoles.length === 0))
                                            .map(route => (_jsx("li", { children: _jsxs(Link, { to: resolvePath(route.path), className: "flex items-center hover:text-zion-purple", children: [_jsx(ChevronRight, { className: "h-4 w-4 mr-2" }), route.label] }) }, route.path))) })] }), _jsxs("div", { className: "bg-zion-blue-dark p-6 rounded-lg", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-zion-cyan", children: "Admin Pages" }), _jsx("p", { className: "text-sm text-zion-slate mb-4", children: "Requires admin account" }), _jsx("ul", { className: "space-y-2", children: completeSitemap
                                            .filter(route => { var _a; return (_a = route.requiredRoles) === null || _a === void 0 ? void 0 : _a.includes('admin'); })
                                            .map(route => (_jsx("li", { children: _jsxs(Link, { to: resolvePath(route.path), className: "flex items-center hover:text-zion-purple", children: [_jsx(ChevronRight, { className: "h-4 w-4 mr-2" }), route.label] }) }, route.path))) })] }), _jsxs("div", { className: "bg-zion-blue-dark p-6 rounded-lg", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-zion-cyan", children: "Dynamic Pages" }), _jsx("p", { className: "text-sm text-zion-slate mb-4", children: "Pages with dynamic parameters" }), _jsx("ul", { className: "space-y-2", children: Object.entries(dynamicPaths).map(([key, path]) => (_jsx("li", { children: _jsxs("div", { className: "flex items-center text-zion-slate", children: [_jsx(ChevronRight, { className: "h-4 w-4 mr-2" }), path, " ", _jsxs("span", { className: "ml-2 text-xs italic", children: ["(", key, ")"] })] }) }, key))) })] })] })] })] }));
};
