import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export function SEO({ title, description, keywords, canonical, ogImage = 'https://ziontechgroup.com/og-image.jpg', ogType = 'website', twitterCard = 'summary_large_image', structuredData, noindex = false, nofollow = false }) {
    const siteName = 'Zion Tech Group';
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "The premier AI and tech marketplace connecting talent, services, and innovation.",
        "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-ZION-TECH",
            "contactType": "customer service",
            "areaServed": "Worldwide"
        }
    };
    const finalStructuredData = structuredData || defaultStructuredData;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: author || 'Zion Tech Group' }), _jsx("meta", { name: "robots", content: `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}` }), _jsx("link", { rel: "canonical", href: fullCanonicalUrl }), _jsx("meta", { property: "og:title", content: fullTitle }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:type", content: type }), _jsx("meta", { property: "og:url", content: fullCanonicalUrl }), _jsx("meta", { property: "og:image", content: fullImageUrl }), _jsx("meta", { property: "og:image:width", content: "1200" }), _jsx("meta", { property: "og:image:height", content: "630" }), _jsx("meta", { property: "og:site_name", content: siteName }), _jsx("meta", { property: "og:locale", content: "en_US" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:site", content: "@ziontechgroup" }), _jsx("meta", { name: "twitter:creator", content: "@ziontechgroup" }), _jsx("meta", { name: "twitter:title", content: fullTitle }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: fullImageUrl }), type === 'article' && (_jsxs(_Fragment, { children: [publishedTime && _jsx("meta", { property: "article:published_time", content: publishedTime }), modifiedTime && _jsx("meta", { property: "article:modified_time", content: modifiedTime }), author && _jsx("meta", { property: "article:author", content: author }), section && _jsx("meta", { property: "article:section", content: section }), tags && tags.map((tag, index) => (_jsx("meta", { property: "article:tag", content: tag }, index)))] })), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "theme-color", content: "#2e73ea" }), _jsx("meta", { name: "msapplication-TileColor", content: "#2e73ea" }), _jsx("meta", { name: "apple-mobile-web-app-capable", content: "yes" }), _jsx("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }), _jsx("meta", { name: "apple-mobile-web-app-title", content: siteName }), _jsx("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }), _jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }), _jsx("link", { rel: "manifest", href: "/site.webmanifest" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("script", { type: "application/ld+json", children: JSON.stringify(finalStructuredData) }), canonical && (_jsx("script", { type: "application/ld+json", children: JSON.stringify({
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
                            "item": fullCanonicalUrl
                        }
                    ]
                }) })), _jsx("link", { rel: "dns-prefetch", href: "//cdn.ziontechgroup.com" }), _jsx("link", { rel: "dns-prefetch", href: "//api.ziontechgroup.com" })] }));
}
// Specialized SEO components for different page types
export function HomePageSEO() {
    return (_jsx(SEO, { title: "Zion - The Tech & AI Marketplace", description: "Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and accelerate your tech projects.", keywords: "AI marketplace, tech talent, IT services, tech equipment, AI experts, developers, tech consulting, innovation", canonical: "/", image: "/images/zion-homepage-og.jpg", structuredData: {
            "@type": "WebSite",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ziontechgroup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        } }));
}
export function ServicePageSEO({ serviceName, description, category }) {
    return (_jsx(SEO, { title: `${serviceName} - Zion Tech Group`, description: description, keywords: `${serviceName}, ${category}, tech services, IT solutions, Zion Tech Group`, canonical: `/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`, type: "product", structuredData: {
            "@type": "Service",
            "name": serviceName,
            "description": description,
            "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group"
            },
            "category": category,
            "areaServed": "Worldwide"
        } }));
}
export function TalentPageSEO({ talentName, skills, description }) {
    return (_jsx(SEO, { title: `${talentName} - Tech Talent | Zion Tech Group`, description: description, keywords: `${talentName}, ${skills.join(', ')}, tech talent, AI expert, developer, Zion Tech Group`, canonical: `/talent/${talentName.toLowerCase().replace(/\s+/g, '-')}`, type: "profile", structuredData: {
            "@type": "Person",
            "name": talentName,
            "description": description,
            "knowsAbout": skills,
            "worksFor": {
                "@type": "Organization",
                "name": "Zion Tech Group"
            }
        } }));
}
