import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Pioneering the Future of Technology',
  description = 'Leading provider of quantum computing, autonomous AI, and revolutionary technology solutions. Transform your business with cutting-edge quantum AI orchestration, cybersecurity automation, and space technology innovations.',
  keywords = 'quantum computing, artificial intelligence, autonomous systems, cybersecurity, space technology, enterprise IT, AI orchestration, quantum AI, autonomous cybersecurity, metaverse commerce, DevOps automation, computer vision',
  image = 'https://ziontechgroup.com/og-image.jpg',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology Services',
  tags = ['quantum computing', 'AI', 'cybersecurity', 'space technology', 'enterprise solutions']
}) => {
  const router = useRouter();
  const canonicalUrl = `https://ziontechgroup.com${router.asPath}`;
  const siteName = 'Zion Tech Group';

  // Enhanced meta description with better length optimization
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  // Generate structured data for organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Pioneering the future of technology with quantum computing, autonomous AI, and revolutionary solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup',
      'https://youtube.com/@ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Kleber',
      jobTitle: 'CEO & Founder',
      email: 'kleber@ziontechgroup.com'
    },
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    serviceType: [
      'Quantum Computing Solutions',
      'Artificial Intelligence Services',
      'Cybersecurity Solutions',
      'Space Technology',
      'Enterprise IT Services'
    ]
  };

  // Generate structured data for website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading provider of quantum computing, autonomous AI, and revolutionary technology solutions.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Generate structured data for the current page
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    headline: title,
    description: optimizedDescription,
    image: image,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png'
      }
    },
    ...(type === 'article' && {
      author: {
        '@type': 'Person',
        name: author
      },
      datePublished: publishedTime,
      dateModified: modifiedTime,
      articleSection: section,
      keywords: tags.join(', ')
    })
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta name="business:contact_data:locality" content="Middletown" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Preconnect to External Domains for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema)
        }}
      />
      
      {/* Additional Meta Tags for Specific Pages */}
      {router.pathname === '/' && (
        <>
          <meta name="page-type" content="homepage" />
          <meta name="page-category" content="technology services" />
        </>
      )}
      
      {router.pathname.includes('/services') && (
        <>
          <meta name="page-type" content="services" />
          <meta name="page-category" content="technology solutions" />
        </>
      )}
      
      {router.pathname.includes('/about') && (
        <>
          <meta name="page-type" content="about" />
          <meta name="page-category" content="company information" />
        </>
      )}
      
      {router.pathname.includes('/contact') && (
        <>
          <meta name="page-type" content="contact" />
          <meta name="page-category" content="contact information" />
        </>
      )}
    </Head>
  );
};

export default SEOOptimizer;