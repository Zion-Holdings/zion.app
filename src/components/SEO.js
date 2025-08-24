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
    return (_jsx(SEO, { title: "Zion Tech Group - Leading Technology Innovation", description: "Transform your business with Zion Tech Group's cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Get started today!", keywords: "AI solutions, cloud migration, cybersecurity, digital transformation, business technology, Zion Tech Group", canonical: "/" }));
}
export function ServicesPageSEO() {
    return (_jsx(SEO, { title: "Our Services - AI, Cloud, & Technology Solutions | Zion Tech Group", description: "Explore our comprehensive range of technology services including AI solutions, cloud migration, cybersecurity, and digital transformation. Expert consulting and implementation.", keywords: "AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, IT services", canonical: "/services" }));
}
export function ContactPageSEO() {
    return (_jsx(SEO, { title: "Contact Us - Get Expert Technology Consultation | Zion Tech Group", description: "Ready to transform your business? Contact Zion Tech Group for expert technology consultation, AI solutions, and digital transformation services. Call +1 (302) 464-0950.", keywords: "contact Zion Tech Group, technology consultation, AI consultation, business transformation, tech support", canonical: "/contact" }));
}
export function AboutPageSEO() {
    return (_jsx(SEO, { title: "About Zion Tech Group - Technology Innovation Leaders", description: "Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI expertise, and digital transformation leadership.", keywords: "about Zion Tech Group, company history, technology leadership, AI expertise, digital transformation", canonical: "/about" }));
}
