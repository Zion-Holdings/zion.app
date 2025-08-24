import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
const SEO = ({ title = 'Zion Tech Group - Innovative Technology Solutions', description = 'Discover cutting-edge technology solutions, AI services, and innovative business tools from Zion Tech Group. Transform your business with our expert services.', keywords = 'technology solutions, AI services, business automation, cloud migration, cybersecurity, Zion Tech Group', canonical = 'https://ziontechgroup.com', ogImage = 'https://ziontechgroup.com/og-image.jpg', ogType = 'website', twitterCard = 'summary_large_image', noIndex = false, noFollow = false }) => {
    const fullCanonicalUrl = canonical.startsWith('http') ? canonical : `https://ziontechgroup.com${canonical}`;
    const author = 'Zion Tech Group';
    const siteName = 'Zion Tech Group';
    const twitterHandle = '@ziontechgroup';
    return (_jsxs(Helmet, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: author }), _jsx("link", { rel: "canonical", href: fullCanonicalUrl }), noIndex && _jsx("meta", { name: "robots", content: "noindex" }), noFollow && _jsx("meta", { name: "robots", content: "nofollow" }), !noIndex && !noFollow && _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:type", content: ogType }), _jsx("meta", { property: "og:url", content: fullCanonicalUrl }), _jsx("meta", { property: "og:image", content: ogImage }), _jsx("meta", { property: "og:site_name", content: siteName }), _jsx("meta", { property: "og:locale", content: "en_US" }), _jsx("meta", { name: "twitter:card", content: twitterCard }), _jsx("meta", { name: "twitter:site", content: twitterHandle }), _jsx("meta", { name: "twitter:creator", content: twitterHandle }), _jsx("meta", { name: "twitter:title", content: title }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: ogImage }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "theme-color", content: "#00D4FF" }), _jsx("meta", { name: "msapplication-TileColor", content: "#00D4FF" }), _jsx("meta", { name: "apple-mobile-web-app-capable", content: "yes" }), _jsx("meta", { name: "apple-mobile-web-app-status-bar-style", content: "default" }), _jsx("meta", { name: "apple-mobile-web-app-title", content: siteName }), _jsx("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }), _jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }), _jsx("link", { rel: "manifest", href: "/site.webmanifest" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("link", { rel: "preconnect", href: "https://api.ziontechgroup.com" }), _jsx("script", { type: "application/ld+json", children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Zion Tech Group",
                    "url": "https://ziontechgroup.com",
                    "logo": "https://ziontechgroup.com/logo.png",
                    "description": "Innovative technology solutions and AI services for modern businesses",
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
                    },
                    "sameAs": [
                        "https://linkedin.com/company/zion-tech-group",
                        "https://twitter.com/ziontechgroup",
                        "https://facebook.com/ziontechgroup"
                    ]
                }) })] }));
};
export default SEO;
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
