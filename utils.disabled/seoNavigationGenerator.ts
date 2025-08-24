import { NavigationConfig, NavigationItem } from '../types/navigation';

export class SEONavigationGenerator {
  // Generate structured data for navigation
  generateStructuredData(navigation: NavigationConfig) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zion Tech Group — Autonomous Cloud Automation",
      "url": "https://ziontechgroup.com",
      "description": "AI-driven, self-improving web platform with autonomous growth, marketing, and optimization.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/og/zion-tech-group.svg",
        "sameAs": [
          "https://www.linkedin.com/company/zion-holdings/",
          "https://www.instagram.com/ziontechgroup/"
        ],
        "description": "AI-driven, self-improving web platform with autonomous growth, marketing, and optimization."
      }
    };

    // Add navigation elements
    const navigationElements = navigation.header.map(item => ({
      "@type": "SiteNavigationElement",
      "name": item.label.replace(/[🏠🔍🚀⚡📊📰🔎📂]/g, '').trim(),
      "url": `https://ziontechgroup.com${item.href}`
    }));

    // Add services as software applications
    const softwareApplications = navigation.services.map(service => ({
      "@type": "SoftwareApplication",
      "name": service.label,
      "description": service.description || `${service.label} - AI-powered service`,
      "url": `https://ziontechgroup.com${service.href}`,
      "applicationCategory": service.category || "AI Service",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": service.pricing || "Contact for pricing",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "100+"
      }
    }));

    return {
      website: structuredData,
      navigation: navigationElements,
      services: softwareApplications
    };
  }

  // Generate sitemap from navigation
  generateSitemap(navigation: NavigationConfig) {
    const urls: Array<{
      url: string;
      lastmod: string;
      changefreq: string;
      priority: number;
    }> = [];

    // Add main pages
    navigation.pages.forEach(page => {
      urls.push({
        url: `https://ziontechgroup.com${page.href}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: (page.priority || 10) / 10
      });
    });

    // Add service pages
    navigation.services.forEach(service => {
      urls.push({
        url: `https://ziontechgroup.com${service.href}`,
        lastmod: service.lastUpdated ? new Date(service.lastUpdated).toISOString() : new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      });

      // Add demo pages
      if (service.href.includes('/demo/')) {
        urls.push({
          url: `https://ziontechgroup.com${service.href}`,
          lastmod: service.lastUpdated ? new Date(service.lastUpdated).toISOString() : new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7
        });
      }

      // Add documentation pages
      if (service.href.includes('/demo/')) {
        const docsUrl = service.href.replace('/demo/', '/docs/');
        urls.push({
          url: `https://ziontechgroup.com${docsUrl}`,
          lastmod: service.lastUpdated ? new Date(service.lastUpdated).toISOString() : new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.6
        });
      }
    });

    // Add category pages
    navigation.categories.forEach(category => {
      urls.push({
        url: `https://ziontechgroup.com/category/${category.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.7
      });
    });

    // Add special pages
    urls.push(
      {
        url: 'https://ziontechgroup.com/sitemap.xml',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.3
      },
      {
        url: 'https://ziontechgroup.com/robots.txt',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.1
      }
    );

    return urls.sort((a, b) => b.priority - a.priority);
  }

  // Generate robots.txt content
  generateRobotsTxt(navigation: NavigationConfig) {
    const robotsTxt = [
      'User-agent: *',
      'Allow: /',
      '',
      '# Sitemap',
      'Sitemap: https://ziontechgroup.com/sitemap.xml',
      '',
      '# Disallow admin and private areas',
      'Disallow: /admin/',
      'Disallow: /private/',
      'Disallow: /api/',
      '',
      '# Allow important pages',
      'Allow: /services/',
      'Allow: /category/',
      'Allow: /demo/',
      'Allow: /docs/',
      '',
      '# Crawl delay for better performance',
      'Crawl-delay: 1'
    ].join('\n');

    return robotsTxt;
  }

  // Generate XML sitemap
  generateXMLSitemap(navigation: NavigationConfig) {
    const urls = this.generateSitemap(navigation);
    
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xmlContent;
  }

  // Generate JSON-LD structured data
  generateJSONLD(navigation: NavigationConfig) {
    const structuredData = this.generateStructuredData(navigation);
    
    return {
      website: JSON.stringify(structuredData.website, null, 2),
      navigation: JSON.stringify(structuredData.navigation, null, 2),
      services: JSON.stringify(structuredData.services, null, 2)
    };
  }

  // Generate breadcrumb structured data
  generateBreadcrumbData(currentPath: string, navigation: NavigationConfig) {
    const pathSegments = currentPath.split('/').filter(Boolean);
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      }
    ];

    let currentUrl = '';
    pathSegments.forEach((segment, index) => {
      currentUrl += `/${segment}`;
      
      let name = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Try to find matching service or category
      const service = navigation.services.find(s => s.href === currentUrl);
      const category = navigation.categories.find(c => c.slug === segment);
      
      if (service) {
        name = service.label;
      } else if (category) {
        name = category.name;
      }
      
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://ziontechgroup.com${currentUrl}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  }

  // Generate FAQ structured data for services
  generateFAQData(navigation: NavigationConfig) {
    const faqs = navigation.services.map(service => ({
      "@type": "Question",
      "name": `What is ${service.label}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": service.description || `${service.label} is an AI-powered service that provides advanced capabilities for modern businesses.`
      }
    }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs
    };
  }

  // Generate organization structured data
  generateOrganizationData() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/og/zion-tech-group.svg",
      "description": "AI-driven, self-improving web platform with autonomous growth, marketing, and optimization.",
      "foundingDate": "2024",
      "sameAs": [
        "https://www.linkedin.com/company/zion-holdings/",
        "https://www.instagram.com/ziontechgroup/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://ziontechgroup.com/contact"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    };
  }

  // Generate all SEO data
  generateAllSEOData(navigation: NavigationConfig) {
    return {
      structuredData: this.generateStructuredData(navigation),
      sitemap: this.generateSitemap(navigation),
      robotsTxt: this.generateRobotsTxt(navigation),
      xmlSitemap: this.generateXMLSitemap(navigation),
      jsonLD: this.generateJSONLD(navigation),
      breadcrumbs: this.generateBreadcrumbData('/services', navigation),
      faq: this.generateFAQData(navigation),
      organization: this.generateOrganizationData()
    };
  }
}