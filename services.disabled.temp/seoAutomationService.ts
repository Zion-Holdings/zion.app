export interface KeywordData {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  competition: 'low' | 'medium' | 'high';
  relatedKeywords: string[];
  questions: string[];
}

export interface OnPageOptimization {
  url: string;
  title: string;
  metaDescription: string;
  headings: Array<{ level: number; text: string; hasKeyword: boolean }>;
  contentLength: number;
  keywordDensity: number;
  internalLinks: number;
  externalLinks: number;
  images: Array<{ alt: string; hasKeyword: boolean }>;
  seoScore: number;
  recommendations: string[];
}

export interface TechnicalSEOAudit {
  url: string;
  pageSpeed: {
    mobile: number;
    desktop: number;
  };
  mobileFriendliness: number;
  security: {
    https: boolean;
    sslGrade: string;
  };
  performance: {
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    score: number;
  };
  accessibility: {
    score: number;
    issues: string[];
  };
  seo: {
    score: number;
    issues: string[];
  };
  bestPractices: {
    score: number;
    issues: string[];
  };
}

export interface CompetitorAnalysis {
  competitor: string;
  domain: string;
  domainAuthority: number;
  backlinks: number;
  organicTraffic: number;
  topKeywords: string[];
  contentGaps: string[];
  opportunities: string[];
}

export interface SEORanking {
  keyword: string;
  position: number;
  previousPosition: number;
  change: number;
  searchVolume: number;
  url: string;
  date: Date;
}

class SEOAutomationService {
  private keywordDatabase: Map<string, KeywordData> = new Map();
  private rankings: SEORanking[] = [];
  private competitors: CompetitorAnalysis[] = [];

  constructor() {
    this.initializeKeywordDatabase();
  }

  private initializeKeywordDatabase() {
    const sampleKeywords = [
      {
        keyword: 'artificial intelligence',
        searchVolume: 135000,
        difficulty: 85,
        cpc: 12.50,
        competition: 'high' as const,
        relatedKeywords: ['AI', 'machine learning', 'deep learning', 'neural networks'],
        questions: ['What is artificial intelligence?', 'How does AI work?', 'AI applications in business']
      },
      {
        keyword: 'cloud computing',
        searchVolume: 89000,
        difficulty: 72,
        cpc: 8.75,
        competition: 'medium' as const,
        relatedKeywords: ['cloud services', 'AWS', 'Azure', 'Google Cloud'],
        questions: ['What is cloud computing?', 'Benefits of cloud computing', 'Cloud security']
      },
      {
        keyword: 'cybersecurity',
        searchVolume: 110000,
        difficulty: 78,
        cpc: 15.20,
        competition: 'high' as const,
        relatedKeywords: ['information security', 'network security', 'data protection'],
        questions: ['What is cybersecurity?', 'Cybersecurity best practices', 'Cyber threats']
      }
    ];

    sampleKeywords.forEach(keyword => {
      this.keywordDatabase.set(keyword.keyword.toLowerCase(), keyword);
    });
  }

  async researchKeywords(seedKeyword: string, language: string = 'en'): Promise<KeywordData[]> {
    const results: KeywordData[] = [];
    const seed = seedKeyword.toLowerCase();

    // Find exact matches and related keywords
    for (const [keyword, data] of this.keywordDatabase) {
      if (keyword.includes(seed) || seed.includes(keyword)) {
        results.push(data);
      }
    }

    // Generate additional related keywords
    if (results.length === 0) {
      const generatedKeyword: KeywordData = {
        keyword: seedKeyword,
        searchVolume: Math.floor(Math.random() * 50000) + 1000,
        difficulty: Math.floor(Math.random() * 100) + 20,
        cpc: Math.random() * 20 + 1,
        competition: Math.random() > 0.5 ? 'medium' : 'low',
        relatedKeywords: this.generateRelatedKeywords(seedKeyword),
        questions: this.generateQuestions(seedKeyword)
      };
      results.push(generatedKeyword);
      this.keywordDatabase.set(seed, generatedKeyword);
    }

    return results.sort((a, b) => b.searchVolume - a.searchVolume);
  }

  private generateRelatedKeywords(seed: string): string[] {
    const prefixes = ['best', 'top', 'how to', 'what is', 'guide to'];
    const suffixes = ['2025', 'guide', 'tutorial', 'examples', 'tools'];
    
    const related: string[] = [];
    prefixes.forEach(prefix => {
      related.push(`${prefix} ${seed}`);
    });
    suffixes.forEach(suffix => {
      related.push(`${seed} ${suffix}`);
    });
    
    return related.slice(0, 5);
  }

  private generateQuestions(seed: string): string[] {
    const questionStarters = [
      `What is ${seed}?`,
      `How to use ${seed}?`,
      `Why is ${seed} important?`,
      `When should I use ${seed}?`,
      `Where can I learn about ${seed}?`
    ];
    return questionStarters;
  }

  async optimizeOnPage(url: string, targetKeyword: string, content: string): Promise<OnPageOptimization> {
    const title = this.generateOptimizedTitle(targetKeyword, content);
    const metaDescription = this.generateMetaDescription(targetKeyword, content);
    const headings = this.analyzeHeadings(content, targetKeyword);
    const keywordDensity = this.calculateKeywordDensity(content, targetKeyword);
    const seoScore = this.calculateOnPageSEOScore(title, metaDescription, headings, keywordDensity, content.length);
    
    const optimization: OnPageOptimization = {
      url,
      title,
      metaDescription,
      headings,
      contentLength: content.length,
      keywordDensity,
      internalLinks: this.countInternalLinks(content),
      externalLinks: this.countExternalLinks(content),
      images: this.analyzeImages(content, targetKeyword),
      seoScore,
      recommendations: this.generateOnPageRecommendations(seoScore, keywordDensity, headings.length)
    };

    return optimization;
  }

  private generateOptimizedTitle(keyword: string, content: string): string {
    const words = keyword.split(' ');
    const titleLength = Math.min(60, words.length * 8 + 20);
    return `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Complete Guide & Best Practices`;
  }

  private generateMetaDescription(keyword: string, content: string): string {
    const description = `Learn everything about ${keyword}. Discover best practices, implementation strategies, and expert insights. Get started today!`;
    return description.length <= 160 ? description : description.substring(0, 157) + '...';
  }

  private analyzeHeadings(content: string, keyword: string): Array<{ level: number; text: string; hasKeyword: boolean }> {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: Array<{ level: number; text: string; hasKeyword: boolean }> = [];
    
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const hasKeyword = text.toLowerCase().includes(keyword.toLowerCase());
      headings.push({ level, text, hasKeyword });
    }
    
    return headings;
  }

  private calculateKeywordDensity(content: string, keyword: string): number {
    const words = content.toLowerCase().split(/\W+/);
    const keywordWords = keyword.toLowerCase().split(/\W+/);
    let count = 0;
    
    keywordWords.forEach(keywordWord => {
      count += words.filter(word => word === keywordWord).length;
    });
    
    return (count / words.length) * 100;
  }

  private countInternalLinks(content: string): number {
    const internalLinkRegex = /href=["'](\/[^"']*|#)/g;
    return (content.match(internalLinkRegex) || []).length;
  }

  private countExternalLinks(content: string): number {
    const externalLinkRegex = /href=["'](https?:\/\/[^"']*)/g;
    return (content.match(externalLinkRegex) || []).length;
  }

  private analyzeImages(content: string, keyword: string): Array<{ alt: string; hasKeyword: boolean }> {
    const imgRegex = /<img[^>]*alt=["']([^"']*)["'][^>]*>/gi;
    const images: Array<{ alt: string; hasKeyword: boolean }> = [];
    
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
      const alt = match[1];
      const hasKeyword = alt.toLowerCase().includes(keyword.toLowerCase());
      images.push({ alt, hasKeyword });
    }
    
    return images;
  }

  private calculateOnPageSEOScore(title: string, metaDescription: string, headings: any[], keywordDensity: number, contentLength: number): number {
    let score = 0;
    
    // Title optimization
    if (title.length >= 30 && title.length <= 60) score += 20;
    if (title.includes('keyword')) score += 10;
    
    // Meta description
    if (metaDescription.length >= 120 && metaDescription.length <= 160) score += 15;
    
    // Headings
    if (headings.length >= 3) score += 15;
    if (headings.some(h => h.hasKeyword)) score += 10;
    
    // Content length
    if (contentLength >= 1000) score += 20;
    if (contentLength >= 2000) score += 10;
    
    // Keyword density
    if (keywordDensity >= 0.5 && keywordDensity <= 2.5) score += 10;
    
    return Math.min(100, score);
  }

  private generateOnPageRecommendations(seoScore: number, keywordDensity: number, headingCount: number): string[] {
    const recommendations: string[] = [];
    
    if (seoScore < 70) {
      if (keywordDensity < 0.5) recommendations.push('Increase keyword density naturally');
      if (keywordDensity > 2.5) recommendations.push('Reduce keyword stuffing');
      if (headingCount < 3) recommendations.push('Add more headings for better structure');
      if (headingCount === 0) recommendations.push('Include H1, H2, and H3 headings');
    }
    
    if (seoScore < 50) {
      recommendations.push('Improve title tag optimization');
      recommendations.push('Enhance meta description');
      recommendations.push('Add more relevant content');
    }
    
    return recommendations.length > 0 ? recommendations : ['Great job! Your page is well optimized.'];
  }

  async performTechnicalAudit(url: string): Promise<TechnicalSEOAudit> {
    // Simulate technical audit results
    const audit: TechnicalSEOAudit = {
      url,
      pageSpeed: {
        mobile: Math.floor(Math.random() * 40) + 60,
        desktop: Math.floor(Math.random() * 30) + 70
      },
      mobileFriendliness: Math.floor(Math.random() * 20) + 80,
      security: {
        https: true,
        sslGrade: 'A'
      },
      performance: {
        firstContentfulPaint: Math.floor(Math.random() * 2000) + 1000,
        largestContentfulPaint: Math.floor(Math.random() * 3000) + 2000,
        cumulativeLayoutShift: Math.random() * 0.1,
        score: Math.floor(Math.random() * 20) + 80
      },
      accessibility: {
        score: Math.floor(Math.random() * 20) + 80,
        issues: ['Missing alt text on images', 'Low contrast text']
      },
      seo: {
        score: Math.floor(Math.random() * 20) + 80,
        issues: ['Missing meta description', 'No structured data']
      },
      bestPractices: {
        score: Math.floor(Math.random() * 20) + 80,
        issues: ['Deprecated JavaScript libraries']
      }
    };

    return audit;
  }

  async analyzeCompetitors(domain: string): Promise<CompetitorAnalysis[]> {
    // Simulate competitor analysis
    const competitors = [
      {
        competitor: 'Competitor A',
        domain: 'competitor-a.com',
        domainAuthority: Math.floor(Math.random() * 40) + 60,
        backlinks: Math.floor(Math.random() * 10000) + 5000,
        organicTraffic: Math.floor(Math.random() * 50000) + 10000,
        topKeywords: ['AI solutions', 'machine learning', 'data analytics'],
        contentGaps: ['Beginner guides', 'Case studies', 'Video tutorials'],
        opportunities: ['Long-tail keywords', 'Local SEO', 'Voice search']
      },
      {
        competitor: 'Competitor B',
        domain: 'competitor-b.com',
        domainAuthority: Math.floor(Math.random() * 40) + 60,
        backlinks: Math.floor(Math.random() * 10000) + 5000,
        organicTraffic: Math.floor(Math.random() * 50000) + 10000,
        topKeywords: ['Cloud services', 'DevOps', 'Cybersecurity'],
        contentGaps: ['Industry reports', 'Webinars', 'Infographics'],
        opportunities: ['B2B content', 'Technical documentation', 'Community building']
      }
    ];

    this.competitors = competitors;
    return competitors;
  }

  async trackRankings(keywords: string[], domain: string): Promise<SEORanking[]> {
    const rankings: SEORanking[] = [];
    
    keywords.forEach(keyword => {
      const previousPosition = this.rankings.find(r => r.keyword === keyword)?.position || 0;
      const currentPosition = Math.floor(Math.random() * 100) + 1;
      const change = previousPosition - currentPosition;
      
      const ranking: SEORanking = {
        keyword,
        position: currentPosition,
        previousPosition,
        change,
        searchVolume: this.keywordDatabase.get(keyword.toLowerCase())?.searchVolume || 1000,
        url: `${domain}/search?q=${encodeURIComponent(keyword)}`,
        date: new Date()
      };
      
      rankings.push(ranking);
    });
    
    this.rankings = [...this.rankings, ...rankings];
    return rankings;
  }

  async generateSEOReport(domain: string): Promise<{
    overview: { score: number; issues: number; recommendations: number };
    technical: TechnicalSEOAudit;
    onPage: OnPageOptimization[];
    competitors: CompetitorAnalysis[];
    rankings: SEORanking[];
  }> {
    const technical = await this.performTechnicalAudit(domain);
    const competitors = await this.analyzeCompetitors(domain);
    const rankings = this.rankings.filter(r => r.url.includes(domain));
    
    const overview = {
      score: Math.floor((technical.seo.score + technical.performance.score) / 2),
      issues: technical.seo.issues.length + technical.accessibility.issues.length,
      recommendations: 5 // Fixed number for demo
    };

    return {
      overview,
      technical,
      onPage: [], // Would be populated with actual page analysis
      competitors,
      rankings
    };
  }
}

export const seoAutomationService = new SEOAutomationService();