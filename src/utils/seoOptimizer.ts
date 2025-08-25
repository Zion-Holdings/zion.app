export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export interface ContentQualityIssue {
  page: string;
  issue: 'missing-title' | 'missing-description' | 'short-description' | 'no-headings' | 'minimal-content';
  severity: 'high' | 'medium' | 'low';
  suggestedFix: string;
}

export class SEOOptimizer {
  private static readonly DEFAULT_META_DESCRIPTIONS: Record<string, string> = {
    '/': 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services. Transform your business with Zion Tech Group.',
    '/services': 'Comprehensive AI services, cybersecurity solutions, cloud infrastructure, and emerging technology services. Expert IT solutions for modern businesses.',
    '/ai-solutions': 'Advanced AI solutions including autonomous systems, machine learning, and intelligent automation. Drive innovation with our cutting-edge AI technology.',
    '/about': 'Learn about Zion Tech Group - a pioneering technology company delivering innovative solutions and transforming businesses through cutting-edge technology.',
    '/contact': 'Get in touch with Zion Tech Group. Contact our expert team for technology solutions, consultations, and partnership opportunities.',
    '/pricing': 'Transparent pricing for our comprehensive technology services. Choose the perfect plan for your business needs and budget.',
    '/careers': 'Join the Zion Tech Group team. Explore exciting career opportunities in technology, AI, and innovation.',
    '/blog': 'Latest insights, industry trends, and technology news from Zion Tech Group. Stay ahead with our expert analysis and thought leadership.',
    '/news': 'Breaking news and updates from Zion Tech Group. Stay informed about our latest innovations, partnerships, and industry developments.',
    '/services/ai-autonomous-systems': 'Revolutionary AI autonomous systems that transform business operations. Intelligent automation for the future of enterprise.',
    '/services/quantum-technology': 'Cutting-edge quantum technology solutions. Harness the power of quantum computing for unprecedented computational capabilities.',
    '/services/cybersecurity': 'Advanced cybersecurity solutions protecting your digital assets. Quantum-safe security and comprehensive threat protection.',
    '/services/it-infrastructure': 'Robust IT infrastructure solutions. Scalable, secure, and high-performance technology foundations for your business.',
    '/services/micro-saas-solutions': 'Innovative micro SaaS solutions designed for modern businesses. Scalable, cost-effective software-as-a-service platforms.',
    '/solutions/enterprise': 'Enterprise-grade technology solutions. Comprehensive IT services designed for large-scale business operations and growth.',
    '/solutions/healthcare': 'Healthcare technology solutions. Secure, compliant, and innovative IT services for the healthcare industry.'
  };

  private static readonly KEYWORD_MAPPINGS: Record<string, string[]> = {
    '/': ['AI marketplace', 'tech services', 'artificial intelligence', 'IT services', 'AI developers', 'technology marketplace', 'AI solutions', 'machine learning', 'digital transformation', 'micro SaaS', 'quantum computing', 'blockchain', 'cybersecurity', 'edge computing', 'metaverse'],
    '/services': ['AI services', 'cybersecurity', 'cloud infrastructure', 'IT solutions', 'digital transformation', 'automation', 'machine learning', 'blockchain', 'quantum computing'],
    '/ai-solutions': ['artificial intelligence', 'AI automation', 'machine learning', 'deep learning', 'neural networks', 'AI systems', 'intelligent automation', 'AI platforms'],
    '/about': ['Zion Tech Group', 'technology company', 'innovation', 'expertise', 'leadership', 'mission', 'vision', 'company history'],
    '/contact': ['contact us', 'get in touch', 'support', 'consultation', 'partnership', 'sales inquiry', 'technical support'],
    '/pricing': ['pricing plans', 'cost', 'subscription', 'enterprise pricing', 'custom solutions', 'affordable technology'],
    '/careers': ['job opportunities', 'careers', 'employment', 'work with us', 'join our team', 'technology jobs', 'AI careers'],
    '/blog': ['technology blog', 'industry insights', 'AI trends', 'tech news', 'thought leadership', 'expert analysis'],
    '/news': ['company news', 'press releases', 'announcements', 'updates', 'partnerships', 'achievements'],
    '/services/ai-autonomous-systems': ['AI autonomous systems', 'intelligent automation', 'business process automation', 'AI agents', 'autonomous operations', 'machine learning systems'],
    '/services/quantum-technology': ['quantum computing', 'quantum technology', 'quantum algorithms', 'quantum cryptography', 'quantum machine learning', 'quantum advantage'],
    '/services/cybersecurity': ['cybersecurity', 'information security', 'threat protection', 'security assessment', 'compliance', 'data protection', 'quantum-safe security'],
    '/services/it-infrastructure': ['IT infrastructure', 'network infrastructure', 'cloud infrastructure', 'data centers', 'server management', 'network security'],
    '/services/micro-saas-solutions': ['micro SaaS', 'software as a service', 'SaaS platforms', 'business software', 'cloud applications', 'subscription software'],
    '/solutions/enterprise': ['enterprise solutions', 'enterprise IT', 'large business solutions', 'scalable technology', 'enterprise software', 'business technology'],
    '/solutions/healthcare': ['healthcare technology', 'health IT', 'medical software', 'healthcare compliance', 'HIPAA solutions', 'medical technology']
  };

  static generateSEOData(path: string): SEOData {
    const title = this.generateTitle(path);
    const description = this.generateDescription(path);
    const keywords = this.generateKeywords(path);
    const canonicalUrl = this.generateCanonicalUrl(path);
    const structuredData = this.generateStructuredData(path);

    return {
      title,
      description,
      keywords,
      canonicalUrl,
      structuredData
    };
  }

  static generateTitle(path: string): string {
    const baseTitle = 'Zion Tech Group';
    
    if (path === '/') {
      return `${baseTitle} - Revolutionary Technology Solutions`;
    }

    const pathSegments = path.split('/').filter(Boolean);
    if (pathSegments.length === 0) return baseTitle;

    const lastSegment = pathSegments[pathSegments.length - 1];
    const formattedSegment = lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return `${formattedSegment} - ${baseTitle}`;
  }

  static generateDescription(path: string): string {
    return this.DEFAULT_META_DESCRIPTIONS[path] || 
           'Professional technology solutions and services. Expert IT consulting, AI development, and digital transformation services for modern businesses.';
  }

  static generateKeywords(path: string): string[] {
    return this.KEYWORD_MAPPINGS[path] || 
           ['technology', 'IT services', 'digital solutions', 'business technology', 'innovation'];
  }

  static generateCanonicalUrl(path: string): string {
    const baseUrl = 'https://ziontechgroup.com';
    return `${baseUrl}${path}`;
  }

  static generateStructuredData(path: string): object {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": this.generateTitle(path),
      "description": this.generateDescription(path),
      "url": this.generateCanonicalUrl(path),
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc"
      }
    };

    // Add specific structured data based on page type
    if (path === '/') {
      return {
        ...baseData,
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
        "description": "Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.",
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
        }
      };
    }

    if (path.startsWith('/services/')) {
      return {
        ...baseData,
        "@type": "Service",
        "serviceType": path.split('/').pop()?.replace(/-/g, ' '),
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
      };
    }

    return baseData;
  }

  static analyzeContentQuality(content: string, page: string): ContentQualityIssue[] {
    const issues: ContentQualityIssue[] = [];
    
    // Check for missing or short title
    if (!content.includes('<title>') || content.includes('<title></title>')) {
      issues.push({
        page,
        issue: 'missing-title',
        severity: 'high',
        suggestedFix: 'Add a descriptive title tag with relevant keywords'
      });
    }

    // Check for missing meta description
    if (!content.includes('name="description"')) {
      issues.push({
        page,
        issue: 'missing-description',
        severity: 'high',
        suggestedFix: 'Add a meta description tag with compelling content'
      });
    }

    // Check for short meta description
    const descMatch = content.match(/name="description" content="([^"]+)"/);
    if (descMatch && descMatch[1].length < 120) {
      issues.push({
        page,
        issue: 'short-description',
        severity: 'medium',
        suggestedFix: 'Expand meta description to 120-160 characters for better SEO'
      });
    }

    // Check for missing headings
    if (!content.includes('<h1>') && !content.includes('<h2>') && !content.includes('<h3>')) {
      issues.push({
        page,
        issue: 'no-headings',
        severity: 'medium',
        suggestedFix: 'Add proper heading structure (H1, H2, H3) for better content organization'
      });
    }

    // Check for minimal content
    const textContent = content.replace(/<[^>]*>/g, '').trim();
    if (textContent.length < 300) {
      issues.push({
        page,
        issue: 'minimal-content',
        severity: 'medium',
        suggestedFix: 'Add more relevant content to improve user experience and SEO value'
      });
    }

    return issues;
  }

  static generateMetaTags(seoData: SEOData): string {
    return `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords.join(', ')}" />
    <link rel="canonical" href="${seoData.canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seoData.title}" />
    <meta property="og:description" content="${seoData.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${seoData.canonicalUrl}" />
    <meta property="og:image" content="${seoData.ogImage || 'https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc'}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoData.title}" />
    <meta name="twitter:description" content="${seoData.description}" />
    <meta name="twitter:image" content="${seoData.ogImage || 'https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc'}" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(seoData.structuredData, null, 2)}
    </script>
    `;
  }
}

export const seoOptimizer = new SEOOptimizer();