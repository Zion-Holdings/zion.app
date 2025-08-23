import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions",
  description = "Discover revolutionary AI consciousness, quantum computing, and space technology solutions that will transform your business and propel humanity into the future. Expert consulting and innovative services.",
  keywords = "AI consciousness, quantum computing, space technology, artificial intelligence, machine learning, cloud computing, cybersecurity, digital transformation, business solutions, technology consulting",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Zion Tech Group",
  section = "Technology Services",
  tags = ["AI", "Quantum Computing", "Space Technology", "Digital Transformation"],
  noindex = false,
  nofollow = false,
  canonical
}) => {
  const siteName = "Zion Tech Group";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const fullUrl = canonical || url;

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Revolutionary AI consciousness, quantum computing, and space technology solutions",
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
      "https://github.com/Zion-Holdings",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "25-50",
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consciousness Evolution Platform",
            "description": "Revolutionary AI consciousness platform with emotional intelligence and self-awareness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Neural Ecosystem",
            "description": "Hybrid quantum-AI computing for unprecedented computational power"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Space Resource Intelligence",
            "description": "Advanced space technology solutions for resource exploration and management"
          }
        }
      ]
    }
  };

  // Additional structured data for the page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": fullUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ziontechgroup.com"
        }
      ]
    }
  };

	// Default JSON-LD if none provided
	const defaultJsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Zion Tech Group",
			"url": baseUrl,
			"logo": `${baseUrl.replace(/\/$/, '')}/favicon.svg`,
			"sameAs": [
				"https://www.linkedin.com/company/zion-tech-group",
				"https://github.com/Zion-Holdings",
				"https://www.instagram.com/ziontechgroup",
				"https://www.youtube.com/@ziontechgroup",
				"https://twitter.com/ziontechgroup"
			]
		},
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"url": baseUrl,
			"name": "Zion Tech Group",
			"potentialAction": {
				"@type": "SearchAction",
				"target": `${baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
				"query-input": "required name=search_term_string"
			}
		}
	];

	// Merge default JSON-LD with any provided jsonLd entries
	const mergedJsonLd = Array.isArray(jsonLd)
		? [...defaultJsonLd, ...jsonLd]
		: jsonLd
		? [...defaultJsonLd, jsonLd]
		: defaultJsonLd;

	// Derive Twitter meta from env if not provided
	const envTwitterSite = process.env.NEXT_PUBLIC_TWITTER_SITE;
	const envTwitterCreator = process.env.NEXT_PUBLIC_TWITTER_CREATOR;
	const finalTwitterSite = twitterSite || envTwitterSite;
	const finalTwitterCreator = twitterCreator || envTwitterCreator;

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta name="robots" content={robotsContent} />
			<link rel="canonical" href={canonicalUrl} />
			<link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
			<link rel="alternate" hrefLang="en" href={canonicalUrl} />
			{/* Optional sitemap link for crawlers */}
			<link rel="sitemap" type="application/xml" href={`${baseUrl.replace(/\/$/, '')}/sitemap.xml`} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Zion Tech Group" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:image:secure_url" content={imageUrl} />
			<meta property="og:image:alt" content={imageAlt} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			{imageType ? <meta property="og:image:type" content={imageType} /> : null}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={imageUrl} />
			<meta name="twitter:image:alt" content={imageAlt} />
			{imageType ? <meta name="twitter:image:type" content={imageType} /> : null}
			{finalTwitterSite ? <meta name="twitter:site" content={finalTwitterSite} /> : null}
			{finalTwitterCreator ? <meta name="twitter:creator" content={finalTwitterCreator} /> : null}
			{mergedJsonLd ? (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mergedJsonLd) }} />
			) : null}
		</Head>
	);
}