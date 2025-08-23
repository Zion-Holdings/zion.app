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
  title = 'Zion Tech Group – Pioneering the Future of Technology | AI, Quantum Computing & Emerging Tech',
  description = 'Transform your business with Zion Tech Group\'s revolutionary AI services, quantum cybersecurity, and cutting-edge emerging technologies. Leading the future of technology innovation with enterprise-grade solutions.',
  keywords = 'AI services, quantum computing, cybersecurity, emerging technologies, micro SAAS, automation, Zion Tech Group, technology innovation, business transformation, enterprise IT, space technology',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section = 'Technology',
  tags = ['AI', 'Technology', 'Innovation', 'Cybersecurity', 'Quantum Computing', 'Enterprise IT', 'Space Technology'],
  noindex = false,
  nofollow = false,
  canonical
}) => {
  const router = useRouter();
  const currentUrl = url || `https://ziontechgroup.com${router.asPath}`;
  const canonicalUrl = canonical || currentUrl;

  // Enhanced structured data for better SEO
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    alternateName: 'ZionTech',
    url: 'https://ziontechgroup.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ziontechgroup.com/logo.png',
      width: 512,
      height: 512
    },
    description: 'Revolutionary technology solutions that transform businesses and industries through innovation, AI, and emerging technologies.',
    slogan: 'Pioneering the Future of Technology',
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
      availableLanguage: 'English',
      areaServed: 'Worldwide',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup',
      'https://facebook.com/ziontechgroup',
      'https://instagram.com/ziontechgroup',
      'https://youtube.com/@ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Kleber',
      email: 'kleber@ziontechgroup.com',
      jobTitle: 'Founder & CEO'
    },
    foundingDate: '2024',
    industry: 'Technology',
    serviceType: [
      'AI Services',
      'Quantum Cybersecurity',
      'Micro SAAS Solutions',
      'IT Infrastructure',
      'Emerging Technologies',
      'Space Technology',
      'Enterprise Solutions'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Machine Learning Services',
            description: 'Advanced artificial intelligence solutions for modern businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quantum Computing Solutions',
            description: 'Next-generation computing solutions for complex problems'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Automation',
            description: 'Intelligent automation to streamline your operations'
          }
        }
      ]
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide'
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Quantum Computing',
      'Cybersecurity',
      'Cloud Computing',
      'Enterprise IT',
      'Space Technology',
      'Automation',
      'Machine Learning'
    ]
  };

  // Service-specific structured data
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group'
    },
    areaServed: 'Worldwide',
    serviceType: section,
    category: 'Technology Services',
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };

  // Website structured data
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading technology company specializing in AI, quantum computing, and emerging technologies',
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ziontechgroup.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: section,
        item: currentUrl
      }
    ]
  };

  // Article structured data (if applicable)
  const articleStructuredData = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Organization',
      name: 'Zion Tech Group'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png'
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    }
  } : null;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
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
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      
      {articleStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData)
          }}
        />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance and Caching */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Business Information */}
      <meta name="business:contact:phone" content="+1-302-464-0950" />
      <meta name="business:contact:email" content="kleber@ziontechgroup.com" />
      <meta name="business:contact:address" content="364 E Main St STE 1008, Middletown, DE 19709" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
    </Head>
  );
};

export default SEO;