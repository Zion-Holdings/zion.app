export interface ContentAnalysis {
  page: string;
  wordCount: number;
  headingCount: number;
  imageCount: number;
  linkCount: number;
  readabilityScore: number;
  seoScore: number;
  issues: ContentIssue[];
  suggestions: ContentSuggestion[];
}

export interface ContentIssue {
  type: 'missing-headings' | 'minimal-content' | 'no-images' | 'poor-structure' | 'missing-keywords';
  severity: 'high' | 'medium' | 'low';
  description: string;
  location?: string;
}

export interface ContentSuggestion {
  type: 'add-headings' | 'expand-content' | 'add-images' | 'improve-structure' | 'add-keywords';
  priority: 'high' | 'medium' | 'low';
  description: string;
  example?: string;
}

export class ContentOptimizer {
  private static readonly MIN_WORD_COUNT = 300;
  private static readonly MIN_HEADING_COUNT = 2;
  private static readonly MIN_IMAGE_COUNT = 1;
  private static readonly MIN_LINK_COUNT = 3;

  static analyzeContent(content: string, page: string): ContentAnalysis {
    const wordCount = this.countWords(content);
    const headingCount = this.countHeadings(content);
    const imageCount = this.countImages(content);
    const linkCount = this.countLinks(content);
    const readabilityScore = this.calculateReadabilityScore(content);
    const seoScore = this.calculateSEOScore(content, page);
    
    const issues = this.identifyIssues(content, page, {
      wordCount,
      headingCount,
      imageCount,
      linkCount
    });
    
    const suggestions = this.generateSuggestions(issues, page);

    return {
      page,
      wordCount,
      headingCount,
      imageCount,
      linkCount,
      readabilityScore,
      seoScore,
      issues,
      suggestions
    };
  }

  private static countWords(content: string): number {
    // Remove HTML tags and count words
    const textContent = content.replace(/<[^>]*>/g, ' ').trim();
    return textContent.split(/\s+/).filter(word => word.length > 0).length;
  }

  private static countHeadings(content: string): number {
    const headingMatches = content.match(/<h[1-6][^>]*>/gi);
    return headingMatches ? headingMatches.length : 0;
  }

  private static countImages(content: string): number {
    const imageMatches = content.match(/<img[^>]*>/gi);
    return imageMatches ? imageMatches.length : 0;
  }

  private static countLinks(content: string): number {
    const linkMatches = content.match(/<a[^>]*>/gi);
    return linkMatches ? linkMatches.length : 0;
  }

  private static calculateReadabilityScore(content: string): number {
    const textContent = content.replace(/<[^>]*>/g, ' ').trim();
    const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = textContent.split(/\s+/).filter(w => w.length > 0);
    const syllables = this.countSyllables(textContent);

    if (sentences.length === 0 || words.length === 0) return 0;

    // Flesch Reading Ease formula
    const score = 206.835 - (1.015 * (words.length / sentences.length)) - (84.6 * (syllables / words.length));
    return Math.max(0, Math.min(100, score));
  }

  private static countSyllables(text: string): number {
    // Simplified syllable counting
    const words = text.toLowerCase().split(/\s+/);
    let syllableCount = 0;
    
    words.forEach(word => {
      if (word.length <= 3) {
        syllableCount += 1;
      } else {
        // Count vowel groups
        const vowelGroups = word.match(/[aeiouy]+/g);
        syllableCount += vowelGroups ? vowelGroups.length : 1;
      }
    });
    
    return syllableCount;
  }

  private static calculateSEOScore(content: string, page: string): number {
    let score = 100;
    
    // Check for title
    if (!content.includes('<title>')) score -= 20;
    
    // Check for meta description
    if (!content.includes('name="description"')) score -= 15;
    
    // Check for headings
    if (!content.includes('<h1>')) score -= 10;
    if (!content.includes('<h2>')) score -= 5;
    
    // Check for images with alt text
    const images = content.match(/<img[^>]*>/gi) || [];
    const imagesWithAlt = images.filter(img => img.includes('alt='));
    if (images.length > 0 && imagesWithAlt.length === 0) score -= 10;
    
    // Check for internal links
    const internalLinks = content.match(/href="\/[^"]*"/g) || [];
    if (internalLinks.length < 2) score -= 10;
    
    return Math.max(0, score);
  }

  private static identifyIssues(content: string, page: string, metrics: {
    wordCount: number;
    headingCount: number;
    imageCount: number;
    linkCount: number;
  }): ContentIssue[] {
    const issues: ContentIssue[] = [];

    // Check for missing headings
    if (metrics.headingCount < this.MIN_HEADING_COUNT) {
      issues.push({
        type: 'missing-headings',
        severity: 'high',
        description: `Only ${metrics.headingCount} headings found. Minimum recommended: ${this.MIN_HEADING_COUNT}`,
        location: 'Page structure'
      });
    }

    // Check for minimal content
    if (metrics.wordCount < this.MIN_WORD_COUNT) {
      issues.push({
        type: 'minimal-content',
        severity: 'medium',
        description: `Only ${metrics.wordCount} words found. Minimum recommended: ${this.MIN_WORD_COUNT}`,
        location: 'Content body'
      });
    }

    // Check for no images
    if (metrics.imageCount === 0) {
      issues.push({
        type: 'no-images',
        severity: 'medium',
        description: 'No images found. Images improve user engagement and SEO',
        location: 'Content body'
      });
    }

    // Check for poor structure
    if (metrics.headingCount === 0 && metrics.wordCount > 100) {
      issues.push({
        type: 'poor-structure',
        severity: 'high',
        description: 'Content lacks proper heading structure for organization',
        location: 'Page structure'
      });
    }

    // Check for missing keywords
    const pageKeywords = this.extractPageKeywords(page);
    const contentKeywords = this.extractContentKeywords(content);
    const missingKeywords = pageKeywords.filter(kw => !contentKeywords.includes(kw));
    
    if (missingKeywords.length > 0) {
      issues.push({
        type: 'missing-keywords',
        severity: 'medium',
        description: `Missing important keywords: ${missingKeywords.join(', ')}`,
        location: 'Content optimization'
      });
    }

    return issues;
  }

  private static generateSuggestions(issues: ContentIssue[], page: string): ContentSuggestion[] {
    const suggestions: ContentSuggestion[] = [];

    issues.forEach(issue => {
      switch (issue.type) {
        case 'missing-headings':
          suggestions.push({
            type: 'add-headings',
            priority: 'high',
            description: 'Add proper heading structure (H1, H2, H3) to organize content',
            example: '<h1>Main Title</h1><h2>Section 1</h2><h3>Subsection 1.1</h3>'
          });
          break;

        case 'minimal-content':
          suggestions.push({
            type: 'expand-content',
            priority: 'medium',
            description: 'Expand content to provide more value and improve SEO',
            example: 'Add detailed explanations, examples, case studies, or related information'
          });
          break;

        case 'no-images':
          suggestions.push({
            type: 'add-images',
            priority: 'medium',
            description: 'Add relevant images, diagrams, or infographics to improve engagement',
            example: 'Include screenshots, process diagrams, or relevant stock photos'
          });
          break;

        case 'poor-structure':
          suggestions.push({
            type: 'improve-structure',
            priority: 'high',
            description: 'Reorganize content with proper headings and logical flow',
            example: 'Use H1 for main title, H2 for major sections, H3 for subsections'
          });
          break;

        case 'missing-keywords':
          suggestions.push({
            type: 'add-keywords',
            priority: 'medium',
            description: 'Naturally incorporate missing keywords into the content',
            example: 'Use keywords in headings, subheadings, and naturally throughout the text'
          });
          break;
      }
    });

    return suggestions;
  }

  private static extractPageKeywords(page: string): string[] {
    // Extract keywords from page path
    const segments = page.split('/').filter(Boolean);
    const keywords: string[] = [];
    
    segments.forEach(segment => {
      const words = segment.split('-').filter(w => w.length > 2);
      keywords.push(...words);
    });
    
    return keywords;
  }

  private static extractContentKeywords(content: string): string[] {
    // Extract potential keywords from content (simplified)
    const textContent = content.replace(/<[^>]*>/g, ' ').toLowerCase();
    const words = textContent.split(/\s+/).filter(w => w.length > 3);
    
    // Count word frequency and return most common
    const wordCount: Record<string, number> = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  }

  static generateContentTemplate(page: string, contentType: 'service' | 'about' | 'contact' | 'blog'): string {
    const templates = {
      service: `
        <h1>Service Title</h1>
        <p>Comprehensive description of the service and its benefits.</p>
        
        <h2>What We Offer</h2>
        <p>Detailed explanation of service features and capabilities.</p>
        
        <h2>Key Benefits</h2>
        <ul>
          <li>Benefit 1 with explanation</li>
          <li>Benefit 2 with explanation</li>
          <li>Benefit 3 with explanation</li>
        </ul>
        
        <h2>How It Works</h2>
        <p>Step-by-step process or methodology explanation.</p>
        
        <h2>Why Choose Us</h2>
        <p>Competitive advantages and unique selling points.</p>
        
        <h2>Get Started</h2>
        <p>Call-to-action and next steps for potential clients.</p>
      `,
      
      about: `
        <h1>About Zion Tech Group</h1>
        <p>Comprehensive overview of our company, mission, and values.</p>
        
        <h2>Our Mission</h2>
        <p>Clear statement of our purpose and goals.</p>
        
        <h2>Our Story</h2>
        <p>Company history and journey to success.</p>
        
        <h2>Our Values</h2>
        <ul>
          <li>Value 1 with explanation</li>
          <li>Value 2 with explanation</li>
          <li>Value 3 with explanation</li>
        </ul>
        
        <h2>Our Team</h2>
        <p>Overview of leadership and key team members.</p>
        
        <h2>Our Achievements</h2>
        <p>Key milestones, awards, and recognition.</p>
      `,
      
      contact: `
        <h1>Contact Us</h1>
        <p>Get in touch with our expert team for technology solutions and consultations.</p>
        
        <h2>Get In Touch</h2>
        <p>Multiple ways to reach us and what to expect.</p>
        
        <h2>Contact Information</h2>
        <ul>
          <li>Phone: +1-302-464-0950</li>
          <li>Email: kleber@ziontechgroup.com</li>
          <li>Address: 364 E Main St STE 1008, Middletown, DE 19709</li>
        </ul>
        
        <h2>Business Hours</h2>
        <p>Our availability and response times.</p>
        
        <h2>Request a Quote</h2>
        <p>How to get a custom quote for your project.</p>
        
        <h2>Support</h2>
        <p>Technical support and customer service information.</p>
      `,
      
      blog: `
        <h1>Blog Post Title</h1>
        <p>Engaging introduction that hooks the reader and explains the value.</p>
        
        <h2>Key Points Overview</h2>
        <p>Brief summary of what the reader will learn.</p>
        
        <h2>Main Content Section 1</h2>
        <p>Detailed explanation with examples and insights.</p>
        
        <h2>Main Content Section 2</h2>
        <p>Additional information and practical applications.</p>
        
        <h2>Real-World Examples</h2>
        <p>Case studies or practical examples to illustrate points.</p>
        
        <h2>Best Practices</h2>
        <p>Actionable advice and recommendations.</p>
        
        <h2>Conclusion</h2>
        <p>Summary and call-to-action for further engagement.</p>
      `
    };

    return templates[contentType] || templates.service;
  }

  static generateMetaDescription(page: string, contentType: 'service' | 'about' | 'contact' | 'blog'): string {
    const baseDescriptions = {
      service: 'Professional service description with key benefits and features. Expert solutions for your business needs.',
      about: 'Learn about our company, mission, and values. Discover how we deliver innovative technology solutions.',
      contact: 'Get in touch with our expert team. Contact us for technology solutions, consultations, and support.',
      blog: 'Insightful article about technology trends and solutions. Expert analysis and practical advice for businesses.'
    };

    const baseDescription = baseDescriptions[contentType];
    const pageKeywords = this.extractPageKeywords(page).join(' ');
    
    return `${baseDescription} ${pageKeywords}. Transform your business with Zion Tech Group.`;
  }
}

export const contentOptimizer = new ContentOptimizer();