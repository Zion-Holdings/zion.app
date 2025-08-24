
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ogUrl,
  canonical,
  noindex,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const currentUrl = ogUrl || canonical || window.location.href;
  
  // Enhanced keywords with default tech-related terms
  const defaultKeywords = [
    "AI marketplace", "tech talent", "software development", "digital services",
    "freelance developers", "tech consulting", "AI solutions", "web development",
    "mobile apps", "cloud services", "data science", "machine learning"
  ];
  const allKeywords = keywords 
    ? [...keywords.split(',').map(k => k.trim()), ...defaultKeywords]
    : defaultKeywords;
  
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebSite" : type === "article" ? "Article" : "Profile",
    "name": fullTitle,
    "description": description,
    "url": currentUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    ...(type === "article" && {
      "author": {
        "@type": "Person",
        "name": author || "Zion Team"
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "articleSection": section,
      "keywords": allKeywords.join(", ")
    })
  };
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      
      {/* Enhanced meta tags */}
      <meta name="author" content={author || "Zion Tech Group"} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2e73ea" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      {author && <meta property="og:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || currentUrl} />
      
      {/* Additional SEO improvements */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
