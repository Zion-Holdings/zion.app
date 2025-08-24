export interface SEOAnalysis {
  url: string;
  timestamp: number;
  overallScore: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  title: string;
  metaDescription: string;
  headings: HeadingAnalysis[];
  images: ImageAnalysis[];
  links: LinkAnalysis[];
  technical: TechnicalSEO;
  content: ContentAnalysis;
  mobile: MobileAnalysis;
  recommendations: SEORecommendation[];
}

export interface HeadingAnalysis {
  level: number;
  text: string;
  hasKeyword: boolean;
  keywordDensity: number;
  length: number;
  isOptimal: boolean;
}

export interface ImageAnalysis {
  src: string;
  alt: string;
  hasAlt: boolean;
  filename: string;
  size: number;
  isOptimized: boolean;
}

export interface LinkAnalysis {
  url: string;
  text: string;
  isInternal: boolean;
  isBroken: boolean;
  hasTitle: boolean;
  title: string;
  rel: string;
}

export interface TechnicalSEO {
  loadTime: number;
  hasSitemap: boolean;
  hasRobotsTxt: boolean;
  hasSSL: boolean;
  hasCanonical: boolean;
  hasOpenGraph: boolean;
  hasTwitterCard: boolean;
  hasStructuredData: boolean;
  hreflang: boolean;
  ampVersion: boolean;
}

export interface ContentAnalysis {
  wordCount: number;
  keywordDensity: Record<string, number>;
  readabilityScore: number;
  hasInternalLinks: boolean;
  hasExternalLinks: boolean;
  contentQuality: 'high' | 'medium' | 'low';
  duplicateContent: boolean;
}

export interface MobileAnalysis {
  isResponsive: boolean;
  viewportMeta: boolean;
  touchTargets: boolean;
  fontSize: boolean;
  contentWidth: boolean;
}

export interface SEORecommendation {
  category: 'critical' | 'important' | 'suggestion';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  priority: number;
}

export interface KeywordAnalysis {
  keyword: string;
  density: number;
  occurrences: number;
  inTitle: boolean;
  inMetaDescription: boolean;
  inHeadings: boolean;
  inContent: boolean;
  inUrl: boolean;
}

class SEOAnalyzerService {
  private analysisCache: Map<string, SEOAnalysis> = new Map();
  private cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours

  async analyzeSEO(url: string, keywords?: string[]): Promise<SEOAnalysis> {
    try {
      // Check cache first
      const cached = this.analysisCache.get(url);
      if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
        return cached;
      }

      // In a real implementation, this would crawl the website and analyze it
      const analysis = await this.simulateSEOAnalysis(url, keywords);
      
      // Cache the result
      this.analysisCache.set(url, analysis);
      
      return analysis;
    } catch (error) {
      console.error('SEO analysis failed:', error);
      throw new Error('Failed to analyze SEO. Please try again.');
    }
  }

  private async simulateSEOAnalysis(url: string, keywords?: string[]): Promise<SEOAnalysis> {
    // Simulate analysis time
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
    
    const defaultKeywords = keywords || ['technology', 'automation', 'AI', 'cloud'];
    const title = this.generateTitle(url);
    const metaDescription = this.generateMetaDescription(url);
    
    const headings = this.analyzeHeadings(defaultKeywords);
    const images = this.analyzeImages();
    const links = this.analyzeLinks(url);
    const technical = this.analyzeTechnical(url);
    const content = this.analyzeContent(defaultKeywords);
    const mobile = this.analyzeMobile();
    
    const overallScore = this.calculateOverallScore({
      headings, images, links, technical, content, mobile
    });
    
    const grade = this.calculateGrade(overallScore);
    const recommendations = this.generateRecommendations({
      headings, images, links, technical, content, mobile, overallScore
    });
    
    return {
      url,
      timestamp: Date.now(),
      overallScore,
      grade,
      title,
      metaDescription,
      headings,
      images,
      links,
      technical,
      content,
      mobile,
      recommendations
    };
  }

  private generateTitle(url: string): string {
    const titles = [
      'Zion Tech Group - World\'s Most Advanced Autonomous Innovation Hub',
      'AI-Powered Cloud Platform & Intelligent Automation Solutions',
      'Next-Generation Technology Solutions for Modern Businesses',
      'Revolutionary AI Automation & Cloud Infrastructure Platform'
    ];
    
    return titles[Math.floor(Math.random() * titles.length)];
  }

  private generateMetaDescription(url: string): string {
    const descriptions = [
      'Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, and zero-downtime operations.',
      'Transform your business with cutting-edge AI automation, cloud infrastructure, and intelligent systems that drive innovation and growth.',
      'Discover revolutionary technology solutions including AI automation, cloud infrastructure, security, and digital transformation services.'
    ];
    
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  }

  private analyzeHeadings(keywords: string[]): HeadingAnalysis[] {
    const headings = [
      { level: 1, text: 'Zion Tech Group', hasKeyword: true, keywordDensity: 0.8, length: 18, isOptimal: true },
      { level: 2, text: 'AI-Powered Automation', hasKeyword: true, keywordDensity: 0.9, length: 22, isOptimal: true },
      { level: 2, text: 'Cloud Infrastructure', hasKeyword: true, keywordDensity: 0.7, length: 20, isOptimal: true },
      { level: 3, text: 'Machine Learning Solutions', hasKeyword: true, keywordDensity: 0.6, length: 25, isOptimal: false },
      { level: 3, text: 'Performance Optimization', hasKeyword: false, keywordDensity: 0.3, length: 23, isOptimal: false }
    ];
    
    return headings;
  }

  private analyzeImages(): ImageAnalysis[] {
    const images = [
      { src: '/images/hero.jpg', alt: 'AI Technology Innovation Hub', hasAlt: true, filename: 'hero.jpg', size: 245760, isOptimized: true },
      { src: '/images/automation.jpg', alt: 'Intelligent Automation Systems', hasAlt: true, filename: 'automation.jpg', size: 189440, isOptimized: true },
      { src: '/images/cloud.jpg', alt: '', hasAlt: false, filename: 'cloud.jpg', size: 512000, isOptimized: false },
      { src: '/images/security.jpg', alt: 'Advanced Security Solutions', hasAlt: true, filename: 'security.jpg', size: 156672, isOptimized: true }
    ];
    
    return images;
  }

  private analyzeLinks(baseUrl: string): LinkAnalysis[] {
    const links = [
      { url: '/services', text: 'Our Services', isInternal: true, isBroken: false, hasTitle: true, title: 'Services', rel: '' },
      { url: '/about', text: 'About Us', isInternal: true, isBroken: false, hasTitle: true, title: 'About', rel: '' },
      { url: '/contact', text: 'Contact', isInternal: true, isBroken: false, hasTitle: true, title: 'Contact', rel: '' },
      { url: 'https://github.com/Zion-Holdings', text: 'GitHub', isInternal: false, isBroken: false, hasTitle: true, title: 'GitHub Repository', rel: 'noopener' },
      { url: '/broken-link', text: 'Broken Link', isInternal: true, isBroken: true, hasTitle: false, title: '', rel: '' }
    ];
    
    return links;
  }

  private analyzeTechnical(url: string): TechnicalSEO {
    return {
      loadTime: 1200 + Math.random() * 800,
      hasSitemap: true,
      hasRobotsTxt: true,
      hasSSL: true,
      hasCanonical: true,
      hasOpenGraph: true,
      hasTwitterCard: true,
      hasStructuredData: Math.random() > 0.3,
      hreflang: Math.random() > 0.5,
      ampVersion: Math.random() > 0.7
    };
  }

  private analyzeContent(keywords: string[]): ContentAnalysis {
    const keywordDensity: Record<string, number> = {};
    keywords.forEach(keyword => {
      keywordDensity[keyword] = Math.random() * 0.05 + 0.01; // 1-6% density
    });
    
    return {
      wordCount: 1500 + Math.floor(Math.random() * 1000),
      keywordDensity,
      readabilityScore: 70 + Math.random() * 25,
      hasInternalLinks: true,
      hasExternalLinks: true,
      contentQuality: Math.random() > 0.3 ? 'high' : Math.random() > 0.6 ? 'medium' : 'low',
      duplicateContent: Math.random() > 0.8
    };
  }

  private analyzeMobile(): MobileAnalysis {
    return {
      isResponsive: true,
      viewportMeta: true,
      touchTargets: Math.random() > 0.2,
      fontSize: Math.random() > 0.3,
      contentWidth: Math.random() > 0.4
    };
  }

  private calculateOverallScore(analysis: {
    headings: HeadingAnalysis[];
    images: ImageAnalysis[];
    links: LinkAnalysis[];
    technical: TechnicalSEO;
    content: ContentAnalysis;
    mobile: MobileAnalysis;
  }): number {
    let score = 100;
    
    // Deduct points for issues
    if (!analysis.technical.hasSSL) score -= 20;
    if (!analysis.technical.hasSitemap) score -= 15;
    if (!analysis.technical.hasRobotsTxt) score -= 10;
    if (!analysis.mobile.isResponsive) score -= 25;
    
    const imagesWithoutAlt = analysis.images.filter(img => !img.hasAlt).length;
    score -= imagesWithoutAlt * 5;
    
    const brokenLinks = analysis.links.filter(link => link.isBroken).length;
    score -= brokenLinks * 8;
    
    if (analysis.content.duplicateContent) score -= 15;
    if (analysis.content.readabilityScore < 60) score -= 10;
    
    return Math.max(0, Math.min(100, score));
  }

  private calculateGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  private generateRecommendations(analysis: {
    headings: HeadingAnalysis[];
    images: ImageAnalysis[];
    links: LinkAnalysis[];
    technical: TechnicalSEO;
    content: ContentAnalysis;
    mobile: MobileAnalysis;
    overallScore: number;
  }): SEORecommendation[] {
    const recommendations: SEORecommendation[] = [];
    
    // Technical recommendations
    if (!analysis.technical.hasSSL) {
      recommendations.push({
        category: 'critical',
        title: 'Implement SSL Certificate',
        description: 'Your website is not using HTTPS, which is critical for security and SEO.',
        impact: 'high',
        effort: 'low',
        priority: 1
      });
    }
    
    if (!analysis.technical.hasSitemap) {
      recommendations.push({
        category: 'important',
        title: 'Create XML Sitemap',
        description: 'A sitemap helps search engines discover and index your pages more effectively.',
        impact: 'medium',
        effort: 'low',
        priority: 2
      });
    }
    
    // Image recommendations
    const imagesWithoutAlt = analysis.images.filter(img => !img.hasAlt).length;
    if (imagesWithoutAlt > 0) {
      recommendations.push({
        category: 'important',
        title: 'Add Alt Text to Images',
        description: `${imagesWithoutAlt} images are missing alt text, which affects accessibility and SEO.`,
        impact: 'medium',
        effort: 'low',
        priority: 3
      });
    }
    
    // Link recommendations
    const brokenLinks = analysis.links.filter(link => link.isBroken).length;
    if (brokenLinks > 0) {
      recommendations.push({
        category: 'important',
        title: 'Fix Broken Links',
        description: `${brokenLinks} broken links were found, which can hurt your SEO ranking.`,
        impact: 'medium',
        effort: 'medium',
        priority: 4
      });
    }
    
    // Content recommendations
    if (analysis.content.duplicateContent) {
      recommendations.push({
        category: 'critical',
        title: 'Remove Duplicate Content',
        description: 'Duplicate content can cause SEO penalties and confuse search engines.',
        impact: 'high',
        effort: 'medium',
        priority: 5
      });
    }
    
    if (analysis.content.readabilityScore < 60) {
      recommendations.push({
        category: 'suggestion',
        title: 'Improve Content Readability',
        description: 'Your content readability score is low. Consider simplifying language and improving structure.',
        impact: 'low',
        effort: 'medium',
        priority: 6
      });
    }
    
    // Mobile recommendations
    if (!analysis.mobile.isResponsive) {
      recommendations.push({
        category: 'critical',
        title: 'Make Website Mobile-Friendly',
        description: 'Your website is not mobile-responsive, which is essential for modern SEO.',
        impact: 'high',
        effort: 'high',
        priority: 7
      });
    }
    
    // Sort by priority
    return recommendations.sort((a, b) => a.priority - b.priority);
  }

  async getKeywordAnalysis(url: string, keywords: string[]): Promise<KeywordAnalysis[]> {
    const analysis = await this.analyzeSEO(url, keywords);
    const keywordAnalysis: KeywordAnalysis[] = [];
    
    keywords.forEach(keyword => {
      const density = analysis.content.keywordDensity[keyword] || 0;
      const occurrences = Math.floor(density * analysis.content.wordCount);
      
      keywordAnalysis.push({
        keyword,
        density,
        occurrences,
        inTitle: analysis.title.toLowerCase().includes(keyword.toLowerCase()),
        inMetaDescription: analysis.metaDescription.toLowerCase().includes(keyword.toLowerCase()),
        inHeadings: analysis.headings.some(h => h.text.toLowerCase().includes(keyword.toLowerCase())),
        inContent: density > 0,
        inUrl: analysis.url.toLowerCase().includes(keyword.toLowerCase())
      });
    });
    
    return keywordAnalysis;
  }

  async compareWebsites(urls: string[], keywords?: string[]): Promise<{
    url: string;
    score: number;
    grade: string;
    keyIssues: string[];
  }[]> {
    const comparisons = await Promise.all(
      urls.map(async (url) => {
        const analysis = await this.analyzeSEO(url, keywords);
        const keyIssues = analysis.recommendations
          .filter(r => r.category === 'critical' || r.category === 'important')
          .slice(0, 3)
          .map(r => r.title);
        
        return {
          url,
          score: analysis.overallScore,
          grade: analysis.grade,
          keyIssues
        };
      })
    );
    
    return comparisons.sort((a, b) => b.score - a.score);
  }

  async generateSEOReport(url: string, keywords?: string[]): Promise<{
    summary: string;
    strengths: string[];
    weaknesses: string[];
    actionPlan: string[];
  }> {
    const analysis = await this.analyzeSEO(url, keywords);
    
    const strengths = [];
    const weaknesses = [];
    
    if (analysis.technical.hasSSL) strengths.push('SSL certificate is properly implemented');
    if (analysis.technical.hasSitemap) strengths.push('XML sitemap is present');
    if (analysis.mobile.isResponsive) strengths.push('Website is mobile-responsive');
    if (analysis.content.wordCount > 1000) strengths.push('Content has substantial word count');
    
    if (!analysis.technical.hasSSL) weaknesses.push('Missing SSL certificate');
    if (!analysis.technical.hasSitemap) weaknesses.push('No XML sitemap found');
    if (!analysis.mobile.isResponsive) weaknesses.push('Website is not mobile-friendly');
    if (analysis.content.duplicateContent) weaknesses.push('Duplicate content detected');
    
    const actionPlan = analysis.recommendations
      .filter(r => r.category === 'critical' || r.category === 'important')
      .slice(0, 5)
      .map(r => r.title);
    
    const summary = `Your website has an SEO score of ${analysis.overallScore}/100 (Grade: ${analysis.grade}). ${strengths.length > 0 ? `Key strengths include: ${strengths.slice(0, 2).join(', ')}. ` : ''}${weaknesses.length > 0 ? `Areas for improvement: ${weaknesses.slice(0, 2).join(', ')}.` : ''}`;
    
    return {
      summary,
      strengths,
      weaknesses,
      actionPlan
    };
  }
}

export default SEOAnalyzerService;