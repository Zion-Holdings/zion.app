import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOOptimizer: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions",
  description = "Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge 2040-2041 technology.",
  keywords = "AI, artificial intelligence, quantum computing, autonomous systems, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI",
  image = "/og-image.svg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = ["AI", "Quantum Computing", "Technology", "Innovation"]
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Generate structured data
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.svg",
      "description": description,
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://ziontechgroup.com/contact"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://github.com/zion-tech-group"
      ]
    };

    if (type === "article" && publishedTime) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": fullImageUrl,
        "author": {
          "@type": "Organization",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/logo.svg"
          }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullUrl
        }
      };
    }

    return baseData;
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbData = () => {
    const pathSegments = url.split('/').filter(Boolean);
    if (pathSegments.length === 0) return null;

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      }
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        "item": `https://ziontechgroup.com${currentPath}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };

  // Generate FAQ structured data for common questions
  const generateFAQData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers cutting-edge AI, quantum computing, autonomous systems, cybersecurity, cloud solutions, and space technology services for enterprise clients."
          }
        },
        {
          "@type": "Question",
          "name": "How can AI and quantum computing benefit my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI and quantum solutions can optimize operations, enhance security, improve decision-making, and provide competitive advantages through advanced technology integration."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Zion Tech Group different from other tech companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in consciousness AI, quantum-resistant security, autonomous operations, and future-ready technology that prepares businesses for 2040 and beyond."
          }
        }
      ]
    };
  };

  // Update meta tags when props change
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [title, description, keywords, fullUrl]);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      
      {/* Breadcrumb Structured Data */}
      {generateBreadcrumbData() && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbData())
          }}
        />
      )}
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQData())
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance Optimization */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Custom Meta Tags for Zion Tech Group */}
      <meta name="company" content="Zion Tech Group" />
      <meta name="industry" content="Technology, AI, Quantum Computing" />
      <meta name="services" content="AI Solutions, Quantum Computing, Autonomous Systems, Cybersecurity, Cloud Solutions" />
      <meta name="technology" content="Artificial Intelligence, Machine Learning, Quantum Computing, Blockchain, IoT" />
      <meta name="year-founded" content="2020" />
      <meta name="headquarters" content="United States" />
      
      {/* Article-specific meta tags */}
      {type === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          <meta property="article:author" content={author} />
        </>
      )}
    </Head>
  );
};

export default SEOOptimizer;