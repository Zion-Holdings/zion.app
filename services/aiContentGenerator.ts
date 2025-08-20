export interface ContentGenerationRequest {
  type: 'blog-post' | 'social-media' | 'email' | 'product-description' | 'technical-doc';
  topic: string;
  tone: 'professional' | 'casual' | 'technical' | 'creative';
  length: 'short' | 'medium' | 'long';
  keywords?: string[];
  targetAudience?: string;
}

export interface ContentGenerationResponse {
  content: string;
  title?: string;
  summary?: string;
  tags?: string[];
  wordCount: number;
  estimatedReadTime: number;
  seoScore?: number;
}

export interface ContentTemplate {
  id: string;
  name: string;
  description: string;
  type: string;
  prompt: string;
  variables: string[];
}

class AIContentGeneratorService {
  private templates: ContentTemplate[] = [
    {
      id: 'blog-post',
      name: 'Blog Post Generator',
      description: 'Generate engaging blog posts on any topic',
      type: 'blog-post',
      prompt: 'Write a {tone} blog post about {topic} with approximately {length} length. Include relevant keywords: {keywords}. Target audience: {targetAudience}.',
      variables: ['topic', 'tone', 'length', 'keywords', 'targetAudience']
    },
    {
      id: 'social-media',
      name: 'Social Media Content',
      description: 'Create engaging social media posts',
      type: 'social-media',
      prompt: 'Create a {tone} social media post about {topic}. Make it engaging and include relevant hashtags.',
      variables: ['topic', 'tone']
    },
    {
      id: 'email',
      name: 'Email Generator',
      description: 'Generate professional emails for various purposes',
      type: 'email',
      prompt: 'Write a {tone} email about {topic}. Keep it {length} and professional.',
      variables: ['topic', 'tone', 'length']
    }
  ];

  async generateContent(request: ContentGenerationRequest): Promise<ContentGenerationResponse> {
    try {
      // In a real implementation, this would call OpenAI, Claude, or similar AI service
      // For now, we'll simulate the AI response with intelligent content generation
      
      const content = await this.simulateAIGeneration(request);
      const wordCount = content.split(' ').length;
      const estimatedReadTime = Math.ceil(wordCount / 200); // Average reading speed
      
      return {
        content,
        title: this.generateTitle(request.topic),
        summary: this.generateSummary(content),
        tags: this.extractTags(request.topic, request.keywords),
        wordCount,
        estimatedReadTime,
        seoScore: this.calculateSEOScore(content, request.keywords)
      };
    } catch (error) {
      console.error('Content generation failed:', error);
      throw new Error('Failed to generate content. Please try again.');
    }
  }

  private async simulateAIGeneration(request: ContentGenerationRequest): Promise<string> {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const { type, topic, tone, length, keywords, targetAudience } = request;
    
    let content = '';
    
    switch (type) {
      case 'blog-post':
        content = this.generateBlogPost(topic, tone, length, keywords, targetAudience);
        break;
      case 'social-media':
        content = this.generateSocialMediaPost(topic, tone);
        break;
      case 'email':
        content = this.generateEmail(topic, tone, length);
        break;
      case 'product-description':
        content = this.generateProductDescription(topic, tone);
        break;
      case 'technical-doc':
        content = this.generateTechnicalDocument(topic, tone, length);
        break;
      default:
        content = this.generateGenericContent(topic, tone, length);
    }
    
    return content;
  }

  private generateBlogPost(topic: string, tone: string, length: string, keywords?: string[], targetAudience?: string): string {
    const intro = `In today's rapidly evolving digital landscape, ${topic} has become increasingly important for businesses and individuals alike. `;
    
    let body = '';
    if (length === 'short') {
      body = `This comprehensive guide explores the key aspects of ${topic} and provides actionable insights for implementation. `;
    } else if (length === 'medium') {
      body = `This comprehensive guide explores the key aspects of ${topic} and provides actionable insights for implementation. We'll cover the fundamentals, best practices, and real-world applications that can help you succeed. `;
    } else {
      body = `This comprehensive guide explores the key aspects of ${topic} and provides actionable insights for implementation. We'll cover the fundamentals, best practices, and real-world applications that can help you succeed. Additionally, we'll dive deep into advanced techniques and strategies that industry leaders use to stay ahead of the competition. `;
    }
    
    const conclusion = `By understanding and implementing these principles, you'll be well-positioned to leverage ${topic} effectively in your projects and business initiatives.`;
    
    return intro + body + conclusion;
  }

  private generateSocialMediaPost(topic: string, tone: string): string {
    const posts = [
      `🚀 Exciting news! We're diving deep into ${topic} today. What's your take on this game-changing technology? #Innovation #TechTrends #${topic.replace(/\s+/g, '')}`,
      `💡 Did you know? ${topic} is revolutionizing how we approach modern challenges. Here's why it matters and how you can get started! #${topic.replace(/\s+/g, '')} #DigitalTransformation`,
      `🔥 Hot take: ${topic} isn't just a trend—it's the future. Ready to explore what this means for your business? #FutureOfTech #${topic.replace(/\s+/g, '')}`
    ];
    
    return posts[Math.floor(Math.random() * posts.length)];
  }

  private generateEmail(topic: string, tone: string, length: string): string {
    const greeting = tone === 'casual' ? 'Hey there!' : 'Dear Team,';
    const closing = tone === 'casual' ? 'Best regards,' : 'Sincerely,';
    
    let body = `I wanted to reach out regarding ${topic}. `;
    
    if (length === 'short') {
      body += `This is an important initiative that requires our attention.`;
    } else if (length === 'medium') {
      body += `This is an important initiative that requires our attention. I believe this could significantly impact our operations and would like to discuss the next steps.`;
    } else {
      body += `This is an important initiative that requires our attention. I believe this could significantly impact our operations and would like to discuss the next steps. We should consider forming a working group to explore the possibilities and develop a comprehensive implementation strategy.`;
    }
    
    return `${greeting}\n\n${body}\n\n${closing}\n[Your Name]`;
  }

  private generateProductDescription(topic: string, tone: string): string {
    return `Transform your business with our cutting-edge ${topic} solution. Designed for modern enterprises, this innovative platform delivers exceptional performance, reliability, and scalability. Whether you're a startup or Fortune 500 company, our ${topic} technology will revolutionize your operations and drive unprecedented growth.`;
  }

  private generateTechnicalDocument(topic: string, tone: string, length: string): string {
    const intro = `# ${topic} Technical Documentation\n\n## Overview\n\nThis document provides technical specifications and implementation details for the ${topic} system.`;
    
    let body = '';
    if (length === 'short') {
      body = `\n## Architecture\n\nThe system follows a microservices architecture pattern with RESTful APIs and event-driven communication.\n\n## Implementation\n\nKey components include data processing modules, API gateways, and monitoring systems.`;
    } else if (length === 'medium') {
      body = `\n## Architecture\n\nThe system follows a microservices architecture pattern with RESTful APIs and event-driven communication. Each service is designed to be independently deployable and scalable.\n\n## Implementation\n\nKey components include data processing modules, API gateways, and monitoring systems. The implementation leverages modern cloud-native technologies for optimal performance and reliability.`;
    } else {
      body = `\n## Architecture\n\nThe system follows a microservices architecture pattern with RESTful APIs and event-driven communication. Each service is designed to be independently deployable and scalable.\n\n## Implementation\n\nKey components include data processing modules, API gateways, and monitoring systems. The implementation leverages modern cloud-native technologies for optimal performance and reliability.\n\n## Security\n\nComprehensive security measures include authentication, authorization, encryption, and audit logging.\n\n## Performance\n\nThe system is optimized for high throughput and low latency, with built-in caching and load balancing capabilities.`;
    }
    
    const conclusion = `\n## Conclusion\n\nThis technical documentation provides a foundation for understanding and implementing the ${topic} system. For additional support, please refer to our developer resources or contact our technical team.`;
    
    return intro + body + conclusion;
  }

  private generateGenericContent(topic: string, tone: string, length: string): string {
    return `This is a ${length} piece of content about ${topic}, written in a ${tone} tone. The content provides valuable insights and information relevant to the topic at hand.`;
  }

  private generateTitle(topic: string): string {
    const titles = [
      `The Complete Guide to ${topic}`,
      `How ${topic} is Transforming Business`,
      `${topic}: Everything You Need to Know`,
      `Mastering ${topic} in 2025`,
      `The Future of ${topic}: Trends and Insights`
    ];
    
    return titles[Math.floor(Math.random() * titles.length)];
  }

  private generateSummary(content: string): string {
    const sentences = content.split('.');
    const summarySentences = sentences.slice(0, 2).join('.');
    return summarySentences + '.';
  }

  private extractTags(topic: string, keywords?: string[]): string[] {
    const baseTags = [topic, 'technology', 'innovation', 'digital'];
    if (keywords) {
      return [...baseTags, ...keywords];
    }
    return baseTags;
  }

  private calculateSEOScore(content: string, keywords?: string[]): number {
    if (!keywords || keywords.length === 0) return 85;
    
    let score = 100;
    const contentLower = content.toLowerCase();
    
    keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      const occurrences = (contentLower.match(new RegExp(keywordLower, 'g')) || []).length;
      
      if (occurrences === 0) score -= 20;
      else if (occurrences === 1) score -= 10;
      else if (occurrences > 5) score -= 5;
    });
    
    return Math.max(0, score);
  }

  async getTemplates(): Promise<ContentTemplate[]> {
    return this.templates;
  }

  async getTemplateById(id: string): Promise<ContentTemplate | null> {
    return this.templates.find(template => template.id === id) || null;
  }
}

export default AIContentGeneratorService;