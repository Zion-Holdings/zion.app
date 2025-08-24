import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export const SEO = ({ title, description, keywords, canonical, ogImage, ogType = 'website', structuredData }) => {
    const fullTitle = title.includes('Zion') ? title : `${title} | Zion Tech Group`;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("link", { rel: "canonical", href: canonical }), _jsx("meta", { property: "og:title", content: fullTitle }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:url", content: canonical }), _jsx("meta", { property: "og:type", content: ogType }), ogImage && _jsx("meta", { property: "og:image", content: ogImage }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: fullTitle }), _jsx("meta", { name: "twitter:description", content: description }), ogImage && _jsx("meta", { name: "twitter:image", content: ogImage }), structuredData && (_jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) }))] }));
};
// Specialized SEO components for different page types
export function HomePageSEO() {
    return (_jsx(SEO, { title: "Zion - The Tech & AI Marketplace", description: "Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and accelerate your digital transformation.", keywords: "AI, technology, marketplace, services, talent, innovation, digital transformation", canonical: "https://ziontechgroup.com/", ogImage: "/images/zion-homepage-og.jpg", structuredData: {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ziontechgroup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        } }));
}
export function ServicePageSEO({ serviceName, serviceDescription }) {
    return (_jsx(SEO, { title: `${serviceName} - Zion Tech Group`, description: serviceDescription, keywords: `${serviceName}, AI services, tech solutions, Zion Tech Group`, canonical: `https://ziontechgroup.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`, ogType: "product", structuredData: {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription,
            "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group"
            },
            "category": "Technology Services",
            "areaServed": "Worldwide"
        } }));
}
export function ProfilePageSEO({ profileName, profileBio }) {
    return (_jsx(SEO, { title: `${profileName} - Zion Tech Group`, description: profileBio, keywords: `${profileName}, tech talent, AI expert, Zion Tech Group`, canonical: `https://ziontechgroup.com/profile/${profileName.toLowerCase().replace(/\s+/g, '-')}`, ogType: "profile", structuredData: {
            "@type": "Person",
            "name": profileName,
            "description": profileBio,
            "knowsAbout": ["Artificial Intelligence", "Technology", "Innovation"],
            "worksFor": {
                "@type": "Organization",
                "name": "Zion Tech Group"
            }
        } }));
}
