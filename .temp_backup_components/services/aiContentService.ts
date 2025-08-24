export interface ContentRequest {
  topic: string;
  contentType: 'blog' | 'social' | 'email' | 'product' | 'landing';
  tone: 'professional' | 'casual' | 'friendly' | 'authoritative';
  language: string;
  keywords: string[];
  wordCount: number;
  targetAudience: string;
}

export interface ContentResponse {
  content: string;
  seoScore: number;
  readabilityScore: number;
  keywordDensity: Record<string, number>;
  suggestions: string[];
  metaTitle: string;
  metaDescription: string;
  socialMediaSnippets: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
}

export interface ContentTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  prompt: string;
  variables: string[];
}

class AIContentService {
  private templates: ContentTemplate[] = [
    {
      id: 'blog-intro',
      name: 'Blog Introduction',
      description: 'Engaging blog post introductions that hook readers',
      category: 'blog',
      prompt: 'Write an engaging introduction for a blog post about {topic} that targets {audience}. Use a {tone} tone and include {keywords}.',
      variables: ['topic', 'audience', 'tone', 'keywords']
    },
    {
      id: 'product-description',
      name: 'Product Description',
      description: 'Compelling product descriptions that convert',
      category: 'product',
      prompt: 'Create a compelling product description for {product} that highlights benefits for {audience}. Use {tone} tone and include {keywords}.',
      variables: ['product', 'audience', 'tone', 'keywords']
    },
    {
      id: 'social-post',
      name: 'Social Media Post',
      description: 'Engaging social media content for various platforms',
      category: 'social',
      prompt: 'Write a {tone} social media post about {topic} for {platform}. Include relevant hashtags and make it engaging for {audience}.',
      variables: ['tone', 'topic', 'platform', 'audience']
    }
  ];

  async generateContent(request: ContentRequest): Promise<ContentResponse> {
    try {
      // In a real implementation, this would call an AI API
      // For now, we'll return structured mock data
      const content = this.generateMockContent(request);
      const seoScore = this.calculateSEOScore(request.keywords, content);
      const readabilityScore = this.calculateReadabilityScore(content);
      const keywordDensity = this.calculateKeywordDensity(request.keywords, content);
      
      return {
        content,
        seoScore,
        readabilityScore,
        keywordDensity,
        suggestions: this.generateSuggestions(seoScore, readabilityScore),
        metaTitle: this.generateMetaTitle(request.topic, request.keywords),
        metaDescription: this.generateMetaDescription(request.topic, request.keywords),
        socialMediaSnippets: this.generateSocialSnippets(request.topic, request.tone)
      };
    } catch (error) {
      console.error('Content generation failed:', error);
      throw new Error('Failed to generate content');
    }
  }

  async getTemplates(category?: string): Promise<ContentTemplate[]> {
    if (category) {
      return this.templates.filter(t => t.category === category);
    }
    return this.templates;
  }

  async optimizeContent(content: string, keywords: string[]): Promise<ContentResponse> {
    // Content optimization logic
    const seoScore = this.calculateSEOScore(keywords, content);
    const readabilityScore = this.calculateReadabilityScore(content);
    
    return {
      content,
      seoScore,
      readabilityScore,
      keywordDensity: this.calculateKeywordDensity(keywords, content),
      suggestions: this.generateOptimizationSuggestions(content, keywords),
      metaTitle: this.generateMetaTitle('', keywords),
      metaDescription: this.generateMetaDescription('', keywords),
      socialMediaSnippets: this.generateSocialSnippets('', 'professional')
    };
  }

  private generateMockContent(request: ContentRequest): string {
    const templates = {
      blog: `# ${request.topic}

Welcome to our comprehensive guide on ${request.topic}. Whether you're a beginner or an expert, this article will provide valuable insights and practical tips.

## Why ${request.topic} Matters

${request.topic} has become increasingly important in today's digital landscape. Understanding the fundamentals can significantly impact your success.

## Key Benefits

- **Improved Efficiency**: Streamline your processes
- **Better Results**: Achieve measurable outcomes
- **Cost Savings**: Reduce unnecessary expenses

## Getting Started

To begin with ${request.topic}, follow these simple steps:

1. Assess your current situation
2. Set clear objectives
3. Implement best practices
4. Monitor and adjust

## Conclusion

${request.topic} is not just a trend—it's a necessity for modern businesses. Start implementing these strategies today to see immediate improvements.`,

      product: `# ${request.topic}

Transform your business with our innovative ${request.topic} solution. Designed specifically for ${request.targetAudience}, this powerful tool delivers exceptional results.

## Features

- **Advanced Technology**: Cutting-edge innovation
- **User-Friendly Interface**: Intuitive design
- **Scalable Solution**: Grows with your business
- **24/7 Support**: Always here when you need us

## Benefits

Experience unprecedented efficiency and productivity with our ${request.topic} solution. Join thousands of satisfied customers who have already transformed their operations.

## Get Started Today

Don't wait to revolutionize your business. Start your free trial now and see the difference our ${request.topic} solution can make.`,

      social: `🚀 Exciting news! We're launching our new ${request.topic} feature that's going to change everything!

💡 Perfect for ${request.targetAudience} who want to:
✅ Boost productivity
✅ Save time and money
✅ Get better results

🎯 Ready to transform your business? Click the link in our bio to learn more!

#${request.keywords.join(' #')} #Innovation #BusinessGrowth`
    };

    return templates[request.contentType] || templates.blog;
  }

  private calculateSEOScore(keywords: string[], content: string): number {
    let score = 0;
    const contentLower = content.toLowerCase();
    
    keywords.forEach(keyword => {
      const count = (contentLower.match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
      if (count > 0) score += Math.min(count * 10, 30);
    });
    
    // Check for proper heading structure
    if (content.includes('# ')) score += 20;
    if (content.includes('## ')) score += 15;
    
    // Check for meta elements
    if (content.length > 300) score += 10;
    
    return Math.min(score, 100);
  }

  private calculateReadabilityScore(content: string): number {
    const sentences = content.split(/[.!?]+/).length;
    const words = content.split(/\s+/).length;
    const syllables = this.countSyllables(content);
    
    // Flesch Reading Ease calculation
    const fleschScore = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));
    
    return Math.max(0, Math.min(100, fleschScore));
  }

  private countSyllables(text: string): number {
    // Simplified syllable counting
    const words = text.toLowerCase().split(/\s+/);
    let totalSyllables = 0;
    
    words.forEach(word => {
      const cleanWord = word.replace(/[^a-z]/g, '');
      if (cleanWord.length <= 3) {
        totalSyllables += 1;
      } else {
        totalSyllables += Math.ceil(cleanWord.length / 3);
      }
    });
    
    return totalSyllables;
  }

  private calculateKeywordDensity(keywords: string[], content: string): Record<string, number> {
    const density: Record<string, number> = {};
    const totalWords = content.split(/\s+/).length;
    
    keywords.forEach(keyword => {
      const count = (content.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
      density[keyword] = (count / totalWords) * 100;
    });
    
    return density;
  }

  private generateSuggestions(seoScore: number, readabilityScore: number): string[] {
    const suggestions: string[] = [];
    
    if (seoScore < 70) {
      suggestions.push('Consider adding more relevant keywords naturally throughout the content');
      suggestions.push('Include more headings and subheadings for better structure');
    }
    
    if (readabilityScore < 60) {
      suggestions.push('Simplify sentence structure for better readability');
      suggestions.push('Use shorter paragraphs and bullet points');
    }
    
    if (suggestions.length === 0) {
      suggestions.push('Great job! Your content is well-optimized');
    }
    
    return suggestions;
  }

  private generateOptimizationSuggestions(content: string, keywords: string[]): string[] {
    const suggestions: string[] = [];
    const keywordDensity = this.calculateKeywordDensity(keywords, content);
    
    Object.entries(keywordDensity).forEach(([keyword, density]) => {
      if (density < 0.5) {
        suggestions.push(`Increase usage of keyword "${keyword}"`);
      } else if (density > 3) {
        suggestions.push(`Reduce overuse of keyword "${keyword}"`);
      }
    });
    
    return suggestions;
  }

  private generateMetaTitle(topic: string, keywords: string[]): string {
    const mainKeyword = keywords[0] || topic;
    return `${topic} - Complete Guide & Best Practices | ${mainKeyword}`;
  }

  private generateMetaDescription(topic: string, keywords: string[]): string {
    const mainKeyword = keywords[0] || topic;
    return `Learn everything about ${topic}. Discover best practices, tips, and strategies to improve your ${mainKeyword} results. Expert insights included.`;
  }

  private generateSocialSnippets(topic: string, tone: string): {
    twitter: string;
    linkedin: string;
    facebook: string;
  } {
    return {
      twitter: `🚀 Discover the secrets of ${topic}! Learn proven strategies and best practices that will transform your results. Click to read more!`,
      linkedin: `Professional insights on ${topic}: Learn from industry experts and discover strategies that drive real business results.`,
      facebook: `Want to master ${topic}? Our comprehensive guide covers everything you need to know! Share with friends who could benefit.`
    };
  }
}

export const aiContentService = new AIContentService();