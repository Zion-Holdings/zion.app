import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export function SEO({ title, description, keywords, canonical, image = '/images/zion-og-image.jpg', type = 'website', author = 'Zion Tech Group', publishedTime, modifiedTime, section, tags = [], structuredData }) {
    const siteName = 'Zion Tech Group';
    const siteUrl = 'https://ziontechgroup.com';
    const fullTitle = `${title} | ${siteName}`;
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
    // Default structured data for organization
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": siteUrl,
        "logo": `${siteUrl}/images/zion-logo.png`,
        "description": "AI-powered tech marketplace connecting businesses with top talent, services, and equipment",
        "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://facebook.com/ziontechgroup"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    };
    // Merge with custom structured data
    const finalStructuredData = structuredData || defaultStructuredData;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: author }), _jsx("link", { rel: "canonical", href: fullCanonical }), _jsx("meta", { property: "og:type", content: type }), _jsx("meta", { property: "og:url", content: fullCanonical }), _jsx("meta", { property: "og:title", content: fullTitle }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:image", content: fullImage }), _jsx("meta", { property: "og:site_name", content: siteName }), _jsx("meta", { property: "og:locale", content: "en_US" }), publishedTime && _jsx("meta", { property: "article:published_time", content: publishedTime }), modifiedTime && _jsx("meta", { property: "article:modified_time", content: modifiedTime }), section && _jsx("meta", { property: "article:section", content: section }), tags.map(tag => (_jsx("meta", { property: "article:tag", content: tag }, tag))), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:site", content: "@ziontechgroup" }), _jsx("meta", { name: "twitter:creator", content: "@ziontechgroup" }), _jsx("meta", { name: "twitter:title", content: fullTitle }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: fullImage }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "theme-color", content: "#2e73ea" }), _jsx("meta", { name: "msapplication-TileColor", content: "#2e73ea" }), _jsx("meta", { name: "apple-mobile-web-app-capable", content: "yes" }), _jsx("meta", { name: "apple-mobile-web-app-status-bar-style", content: "default" }), _jsx("meta", { name: "apple-mobile-web-app-title", content: siteName }), _jsx("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }), _jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }), _jsx("link", { rel: "manifest", href: "/site.webmanifest" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("link", { rel: "preconnect", href: "https://api.ziontechgroup.com" }), _jsx("script", { type: "application/ld+json", children: JSON.stringify(finalStructuredData) }), type === 'website' && (_jsx("script", { type: "application/ld+json", children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": siteName,
                    "url": siteUrl,
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": `${siteUrl}/search?q={search_term_string}`,
                        "query-input": "required name=search_term_string"
                    }
                }) })), canonical && canonical !== '/' && (_jsx("script", { type: "application/ld+json", children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": siteUrl
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": title,
                            "item": fullCanonical
                        }
                    ]
                }) }))] }));
}
