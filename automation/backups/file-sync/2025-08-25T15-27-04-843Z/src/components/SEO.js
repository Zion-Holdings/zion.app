import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
export function SEO({ title, description, keywords, canonical, image = "https://ziontechgroup.com/og-image.jpg", type = "website", author = "Zion Tech Group", publishedTime, modifiedTime, section, tags = [] }) {
    const siteName = "Zion Tech Group";
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
    // Structured data for better SEO
    const structuredData = Object.assign({ "@context": "https://schema.org", "@type": type === "article" ? "Article" : "WebSite", "name": fullTitle, "description": fullDescription, "url": canonical || "https://ziontechgroup.com", "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
                "@type": "ImageObject",
                "url": "https://ziontechgroup.com/logo.png"
            }
        } }, (type === "article" && {
        "author": {
            "@type": "Person",
            "name": author
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime,
        "articleSection": section,
        "keywords": tags.join(", ")
    }));
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), _jsx("meta", { name: "description", content: fullDescription }), keywords && _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: author }), canonical && _jsx("link", { rel: "canonical", href: canonical }), _jsx("meta", { property: "og:type", content: type }), _jsx("meta", { property: "og:url", content: canonical || "https://ziontechgroup.com" }), _jsx("meta", { property: "og:title", content: fullTitle }), _jsx("meta", { property: "og:description", content: fullDescription }), _jsx("meta", { property: "og:image", content: image }), _jsx("meta", { property: "og:site_name", content: siteName }), _jsx("meta", { property: "og:locale", content: "en_US" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:site", content: "@ziontechgroup" }), _jsx("meta", { name: "twitter:title", content: fullTitle }), _jsx("meta", { name: "twitter:description", content: fullDescription }), _jsx("meta", { name: "twitter:image", content: image }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "theme-color", content: "#2e73ea" }), _jsx("meta", { name: "msapplication-TileColor", content: "#2e73ea" }), _jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }), _jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }), _jsx("link", { rel: "manifest", href: "/site.webmanifest" })] }));
}
