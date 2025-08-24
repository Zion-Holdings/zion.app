import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet-async';
export function Layout({ children, seo }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const title = (seo === null || seo === void 0 ? void 0 : seo.title) || 'Zion Tech Group - Revolutionary Technology Solutions';
    const description = (seo === null || seo === void 0 ? void 0 : seo.description) || 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.';
    const keywords = (seo === null || seo === void 0 ? void 0 : seo.keywords) || 'AI, artificial intelligence, quantum computing, blockchain, cybersecurity, cloud computing, IoT, machine learning, automation, technology solutions';
    const canonicalUrl = (seo === null || seo === void 0 ? void 0 : seo.canonicalUrl) || 'https://ziontechgroup.com';
    const ogImage = (seo === null || seo === void 0 ? void 0 : seo.ogImage) || 'https://ziontechgroup.com/og-image.jpg';
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setSidebarOpen(false);
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-black text-white relative overflow-x-hidden", onKeyDown: handleKeyDown, role: "application", "aria-label": "Zion Tech Group Application", children: [_jsxs(Helmet, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }), _jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { name: "author", content: "Zion Tech Group" }), _jsx("meta", { name: "theme-color", content: "#06b6d4" }), canonicalUrl && _jsx("link", { rel: "canonical", href: canonicalUrl }), _jsx("link", { rel: "manifest", href: "/manifest.json" }), _jsx("meta", { name: "msapplication-TileColor", content: "#06b6d4" }), _jsx("meta", { name: "apple-mobile-web-app-capable", content: "yes" }), _jsx("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }), _jsx("meta", { name: "apple-mobile-web-app-title", content: "Zion Tech Group" }), _jsx("link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }), _jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:image", content: ogImage }), _jsx("meta", { property: "og:url", content: canonicalUrl || "https://ziontechgroup.com" }), _jsx("meta", { property: "og:site_name", content: "Zion Tech Group" }), _jsx("meta", { property: "og:locale", content: "en_US" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: title }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: ogImage }), _jsx("meta", { name: "twitter:site", content: "@ziontechgroup" }), _jsx("meta", { name: "application-name", content: "Zion Tech Group" }), _jsx("meta", { name: "mobile-web-app-capable", content: "yes" }), _jsx("meta", { name: "format-detection", content: "telephone=no" }), _jsx("link", { rel: "preload", href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" }), _jsx("link", { rel: "dns-prefetch", href: "//fonts.googleapis.com" }), _jsx("link", { rel: "dns-prefetch", href: "//cdn.jsdelivr.net" }), _jsx("meta", { httpEquiv: "X-Content-Type-Options", content: "nosniff" }), _jsx("meta", { httpEquiv: "X-Frame-Options", content: "DENY" }), _jsx("meta", { httpEquiv: "X-XSS-Protection", content: "1; mode=block" }), _jsx("meta", { httpEquiv: "Referrer-Policy", content: "strict-origin-when-cross-origin" }), _jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Zion Tech Group",
                                "url": "https://ziontechgroup.com",
                                "logo": "https://ziontechgroup.com/logo.png",
                                "description": description,
                                "foundingDate": "2024",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "364 E Main St STE 1008",
                                    "addressLocality": "Middletown",
                                    "addressRegion": "DE",
                                    "postalCode": "19709",
                                    "addressCountry": "US"
                                },
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+1-302-464-0950",
                                    "contactType": "customer service",
                                    "email": "kleber@ziontechgroup.com"
                                }
                            })
                        } })] }), _jsx(Header, {}), _jsx("main", { className: "flex-1 relative z-10", children: children }), _jsx(Footer, {}), sidebarOpen && (_jsx("div", { className: "fixed inset-0 bg-black/50 z-40 lg:hidden", onClick: () => setSidebarOpen(false) })), _jsxs("div", { className: `fixed top-0 right-0 h-full w-80 bg-zion-blue-dark border-l border-zion-blue-light transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-full ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`, children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-zion-blue-light", children: [_jsx("h2", { className: "text-xl font-semibold text-white", children: "Menu" }), _jsx("button", { onClick: () => setSidebarOpen(false), className: "text-zion-slate-light hover:text-white transition-colors", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] }), _jsx("nav", { className: "p-6", children: _jsxs("div", { className: "space-y-4", children: [_jsx("a", { href: "/", className: "block text-zion-slate-light hover:text-white transition-colors", children: "Home" }), _jsx("a", { href: "/services", className: "block text-zion-slate-light hover:text-white transition-colors", children: "Services" }), _jsx("a", { href: "/about", className: "block text-zion-slate-light hover:text-white transition-colors", children: "About" }), _jsx("a", { href: "/contact", className: "block text-zion-slate-light hover:text-white transition-colors", children: "Contact" })] }) })] })] }));
}
