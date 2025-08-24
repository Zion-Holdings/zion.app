import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
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
  canonical,
  image = "https://ziontechgroup.com/og-image.jpg",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) {
  const siteName = "Zion Tech Group";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const fullUrl = canonical || `https://ziontechgroup.com${window.location.pathname}`;
  
  // Process keywords
  const newKeywords = keywords ? keywords.split(',').map(k => k.trim()) : [];
  
  // Analyze description
  const descLength = description.length;
  const descOptimal = descLength >= 120 && descLength <= 160;
  const descHasKeywords = newKeywords.some(keyword => 
    description.toLowerCase().includes(keyword)
  );

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
            "description": description,
            "foundingDate": "2020",
            "sameAs": [
              "https://www.linkedin.com/company/zion-tech-group",
              "https://twitter.com/ziontechgroup",
              "https://github.com/Zion-Holdings"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-ZION-TECH",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI & Machine Learning Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Quantum Computing Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Space Technology Solutions"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Additional Structured Data for Articles */}
      {type === 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": title,
              "description": description,
              "image": image,
              "author": {
                "@type": "Person",
                "name": author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Zion Tech Group",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
                }
              },
              "datePublished": publishedTime,
              "dateModified": modifiedTime || publishedTime,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": fullUrl
              }
            })
          }}
        />
      )}
    </Helmet>
  );
}