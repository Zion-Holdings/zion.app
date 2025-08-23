import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  facebookAppId?: string;
  twitterHandle?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Pioneering Future Technology Solutions',
  description = 'Leading provider of AI, Quantum Computing, Space Technology, and IT solutions. Transform your business with cutting-edge technology from Zion Tech Group.',
  keywords = [
    'AI solutions', 'Machine Learning', 'Quantum Computing', 'Space Technology',
    'IT Services', 'Digital Transformation', 'Business Technology', 'Innovation',
    'Artificial Intelligence', 'Quantum Technology', 'Space Innovation', 'Tech Solutions'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical
}) => {
  const router = useRouter();
  const currentUrl = url || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'}${router.asPath}`;
  const canonicalUrl = canonical || currentUrl;

  // Enhanced structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'website' ? "Organization" : type === 'article' ? "Article" : "Service",
    "name": title,
    "description": description,
    "url": currentUrl,
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'}/images/zion-tech-group-logo.png`,
    "sameAs": [
      "https://github.com/Zion-Holdings",
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "serviceType": [
      "AI & Machine Learning",
      "Quantum Computing",
      "Space Technology",
      "IT Solutions",
      "Digital Transformation"
    ]
  };

  // Add article-specific structured data
  if (type === 'article' && publishedTime) {
    Object.assign(structuredData, {
      "headline": title,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'}/images/zion-tech-group-logo.png`
        }
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      }
    });
  }

  // Add service-specific structured data
  if (type === 'service') {
    Object.assign(structuredData, {
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services"
      }
    });
  }

  // FAQ structured data for service pages
  const faqStructuredData = type === 'service' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group offers comprehensive technology solutions including AI, quantum computing, space technology, and enterprise IT services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with Zion Tech Group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us through our website or call +1-302-464-0950 to discuss your technology needs and get a customized solution."
        }
      }
    ]
  } : null;

  const finalStructuredData = structuredData || [defaultStructuredData, serviceStructuredData, breadcrumbStructuredData, faqStructuredData].filter(Boolean);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Facebook Meta Tags */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      
      {/* Business Information */}
      <meta name="company" content="Zion Tech Group" />
      <meta name="copyright" content="© 2024 Zion Tech Group. All rights reserved." />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance and Accessibility */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Additional Open Graph Tags for Articles */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Head>
  );
};

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta name="robots" content={robotsContent} />
			<link rel="canonical" href={canonicalUrl} />
			{/* Hreflang alternates for single-language site */}
			<link rel="alternate" hrefLang="en" href={canonicalUrl} />
			<link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
			{/* Optional sitemap link for crawlers */}
			<link rel="sitemap" type="application/xml" href={`${baseUrl.replace(/\/$/, '')}/sitemap.xml`} />
			{/* Disable automatic telephone number detection on iOS */}
			<meta name="format-detection" content="telephone=no" />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Zion Tech Group" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:image:alt" content={imageAlt} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			{imageType ? <meta property="og:image:type" content={imageType} /> : null}
			{/* Secure URL for Open Graph image */}
			<meta property="og:image:secure_url" content={imageUrl.startsWith('http:') ? imageUrl.replace(/^http:/, 'https:') : imageUrl} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={imageUrl} />
			<meta name="twitter:image:alt" content={imageAlt} />
			{imageType ? <meta name="twitter:image:type" content={imageType} /> : null}
			{finalTwitterSite ? <meta name="twitter:site" content={finalTwitterSite} /> : null}
			{finalTwitterCreator ? <meta name="twitter:creator" content={finalTwitterCreator} /> : null}
			{(jsonLd || defaultJsonLd) ? (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd || defaultJsonLd) }} />
			) : null}
		</Head>
	);
}