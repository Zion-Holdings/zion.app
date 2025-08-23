import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
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
}

const defaultSEO = {
  title: 'Zion Tech Group - Pioneering Future Technology Solutions',
  description: 'Leading provider of AI, quantum computing, and space technology solutions. Transform your business with cutting-edge technology that drives innovation and growth.',
  keywords: 'AI, artificial intelligence, quantum computing, space technology, machine learning, automation, IT solutions, technology consulting',
  image: '/images/zion-tech-group-og.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  author: 'Zion Tech Group',
  section: 'Technology Services',
  tags: ['AI', 'Quantum Computing', 'Space Technology', 'Machine Learning', 'Automation', 'IT Solutions']
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  noindex = false,
  nofollow = false,
  canonical
}: SEOProps) {
  const seo = {
    title: title ? `${title} | Zion Tech Group` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type: type || defaultSEO.type,
    publishedTime: publishedTime || undefined,
    modifiedTime: modifiedTime || undefined,
    author: author || defaultSEO.author,
    section: section || defaultSEO.section,
    tags: tags || defaultSEO.tags,
    canonical: canonical || url || defaultSEO.url
  };

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Pioneering the future of technology with innovative solutions that drive business transformation",
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
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "serviceType": [
      "AI & Machine Learning",
      "Quantum Computing",
      "Space Technology",
      "IT Solutions",
      "Process Automation"
    ]
  };

  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Leading provider of AI, quantum computing, and space technology solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Structured data for service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Machine Learning Solutions",
    "description": "Advanced artificial intelligence solutions for modern businesses",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "serviceType": "AI & Machine Learning",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Learning Applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Natural Language Processing"
          }
        }
      ]
    }
  };

	// Default JSON-LD if none provided (removed SearchAction because no /search route exists)
	const defaultJsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Zion Tech Group",
			"url": baseUrl,
			"logo": `${baseUrl.replace(/\/$/, '')}/favicon.svg`,
			"sameAs": [
				"https://www.linkedin.com/company/ziontechgroup",
				"https://github.com/Zion-Holdings",
				"https://www.instagram.com/ziontechgroup",
				"https://www.youtube.com/@ziontechgroup"
			],
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "364 E Main St STE 1008",
				"addressLocality": "Middletown",
				"addressRegion": "DE",
				"postalCode": "19709",
				"addressCountry": "US"
			},
			"contactPoint": [{
				"@type": "ContactPoint",
				"telephone": "+1-302-464-0950",
				"contactType": "customer support",
				"email": "kleber@ziontechgroup.com",
				"areaServed": "US",
				"availableLanguage": ["English"]
			}]
		},
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"url": baseUrl,
			"name": "Zion Tech Group"
		}
	];

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
			{/* Optional sitemap link for crawlers */}
			<link rel="sitemap" type="application/xml" href={`${baseUrl.replace(/\/$/, '')}/sitemap.xml`} />
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