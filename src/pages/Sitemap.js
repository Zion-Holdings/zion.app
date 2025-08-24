import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { completeSitemap } from "@/config/sitemap";
import { Link } from "react-router-dom";
export default function Sitemap() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Sitemap | Zion AI Marketplace", description: "Human readable sitemap for all public routes", keywords: "sitemap, navigation", canonical: "https://ziontechgroup.com/sitemap" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Sitemap" }), _jsx("ul", { className: "space-y-2", children: completeSitemap.map(route => (_jsx("li", { children: _jsx(Link, { to: route.path, className: "text-zion-cyan hover:underline", children: route.label }) }, route.path))) })] }) }), _jsx(Footer, {})] }));
}
