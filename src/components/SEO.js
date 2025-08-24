import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export const SEO = ({ title, description, keywords, canonical, ogImage, ogType = 'website' }) => {
    const siteName = 'Zion Tech Group';
    const fullTitle = description ? `${title} | ${siteName}` : title;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), description && _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), canonical && _jsx("link", { rel: "canonical", href: canonical }), _jsx("meta", { property: "og:title", content: title }), description && _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:type", content: ogType }), canonical && _jsx("meta", { property: "og:url", content: canonical }), ogImage && _jsx("meta", { property: "og:image", content: ogImage }), _jsx("meta", { property: "og:site_name", content: siteName }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: title }), description && _jsx("meta", { name: "twitter:description", content: description }), ogImage && _jsx("meta", { name: "twitter:image", content: ogImage }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("meta", { charSet: "utf-8" })] }));
};
// Specialized SEO components for different page types
export function HomePageSEO() {
    return (_jsx(SEO, { title: "Zion - The Tech & AI Marketplace", description: "Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and accelerate your tech projects.", keywords: "AI marketplace, tech talent, IT services, tech equipment, AI experts, developers, tech consulting, innovation", canonical: "/", ogImage: "/images/zion-homepage-og.jpg", ogType: "website" }));
}
export function ServicePageSEO({ serviceName, description, category }) {
    return (_jsx(SEO, { title: `${serviceName} - Zion Tech Group`, description: description, keywords: `${serviceName}, ${category}, tech services, IT solutions, Zion Tech Group`, canonical: `/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`, ogType: "product" }));
}
export function TalentPageSEO({ talentName, skills, description }) {
    return (_jsx(SEO, { title: `${talentName} - Tech Talent | Zion Tech Group`, description: description, keywords: `${talentName}, ${skills.join(', ')}, tech talent, AI expert, developer, Zion Tech Group`, canonical: `/talent/${talentName.toLowerCase().replace(/\s+/g, '-')}`, ogType: "profile" }));
}
